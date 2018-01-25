# @datafire/etsy

Client library for Etsy

## Installation and Usage
```bash
npm install --save @datafire/etsy
```
```js
let etsy = require('@datafire/etsy').create();

etsy.featured.users.get({}).then(data => {
  console.log(data);
});
```

## Description

Bring Etsy's handmade marketplace and community into your apps.

## Actions

### countries.country_id.get
Retrieves a Country by id.


```js
etsy.countries.country_id.get({
  "country_id": null
}, context)
```

#### Input
* input `object`

#### Output
*Output schema unknown*

### countries.get
Finds all Country.


```js
etsy.countries.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### users.user_id.favorites.listings.get
Finds all favorite listings for a user


```js
etsy.users.user_id.favorites.listings.get({
  "user_id": null
}, context)
```

#### Input
* input `object`
  * limit `number`

#### Output
*Output schema unknown*

### users.user_id.favorites.listings.listing_id.get
Finds a favorite listing for a user


```js
etsy.users.user_id.favorites.listings.listing_id.get({
  "user_id": null,
  "listing_id": null
}, context)
```

#### Input
* input `object`

#### Output
*Output schema unknown*

### users.user_id.favorites.listings.listing_id.post
Creates a new favorite listing for a user


```js
etsy.users.user_id.favorites.listings.listing_id.post({
  "user_id": null,
  "listing_id": null
}, context)
```

#### Input
* input `object`

#### Output
*Output schema unknown*

### users.user_id.favorites.listings.listing_id.delete
Delete a favorite listing for a user


```js
etsy.users.user_id.favorites.listings.listing_id.delete({
  "user_id": null,
  "listing_id": null
}, context)
```

#### Input
* input `object`

#### Output
*Output schema unknown*

### users.user_id.favorites.users.get
Finds all favorite users for a user


```js
etsy.users.user_id.favorites.users.get({
  "user_id": null
}, context)
```

#### Input
* input `object`
  * limit `number`

#### Output
*Output schema unknown*

### users.user_id.favorites.users.target_user_id.get
Finds a favorite user for a user


```js
etsy.users.user_id.favorites.users.target_user_id.get({
  "user_id": null,
  "target_user_id": null
}, context)
```

#### Input
* input `object`

#### Output
*Output schema unknown*

### users.user_id.favorites.users.target_user_id.post
Creates a new favorite listing for a user


```js
etsy.users.user_id.favorites.users.target_user_id.post({
  "user_id": null,
  "target_user_id": null,
  "user_id_path": null,
  "target_user_id_path": null
}, context)
```

#### Input
* input `object`

#### Output
*Output schema unknown*

### users.user_id.favorites.users.target_user_id.delete
Delete a favorite listing for a user


```js
etsy.users.user_id.favorites.users.target_user_id.delete({
  "user_id": null,
  "target_user_id": null
}, context)
```

#### Input
* input `object`

#### Output
*Output schema unknown*

### homepages.pickers.get
Finds all FeaturedListingPicker in scope active.


```js
etsy.homepages.pickers.get({}, context)
```

#### Input
* input `object`
  * limit `number`

#### Output
*Output schema unknown*

### homepages.pickers.featured_listing_picker_id.get
Retrieves a FeaturedListingPicker by id.


```js
etsy.homepages.pickers.featured_listing_picker_id.get({
  "featured_listing_picker_id": null
}, context)
```

#### Input
* input `object`

#### Output
*Output schema unknown*

### homepages.pickers.featured_listing_picker_id.featured.get
Retrieves a set of FeaturedListing objects associated to a FeaturedListingPicker.


```js
etsy.homepages.pickers.featured_listing_picker_id.featured.get({
  "featured_listing_picker_id": null
}, context)
```

#### Input
* input `object`
  * limit `number`

#### Output
*Output schema unknown*

### homepages.pickers.featured_listing_picker_id.listings.get
Retrieves a set of Listing objects associated to a FeaturedListingPicker.


```js
etsy.homepages.pickers.featured_listing_picker_id.listings.get({
  "featured_listing_picker_id": null
}, context)
```

#### Input
* input `object`
  * limit `number`

#### Output
*Output schema unknown*

### homepages.pickers.featured_listing_picker_id.listings.active.get
Retrieves a set of Listing objects associated to a FeaturedListingPicker in scope active.


```js
etsy.homepages.pickers.featured_listing_picker_id.listings.active.get({
  "featured_listing_picker_id": null
}, context)
```

#### Input
* input `object`
  * limit `number`

#### Output
*Output schema unknown*

### homepages.listings.get
Finds all FeaturedListings regardless of Listing state


```js
etsy.homepages.listings.get({}, context)
```

#### Input
* input `object`
  * limit `number`

#### Output
*Output schema unknown*

### homepages.listings.active.get
Finds all FeaturedListings that point to active Listings


```js
etsy.homepages.listings.active.get({}, context)
```

#### Input
* input `object`
  * limit `number`

#### Output
*Output schema unknown*

### homepages.listings.featured_listing_id.get
Retrieves a FeaturedListing by id.


```js
etsy.homepages.listings.featured_listing_id.get({
  "featured_listing_id": null
}, context)
```

#### Input
* input `object`

#### Output
*Output schema unknown*

### homepages.listings.featured_listing_id.picker.get
Retrieves a set of FeaturedListingPicker objects associated to a FeaturedListing.


```js
etsy.homepages.listings.featured_listing_id.picker.get({
  "featured_listing_id": null
}, context)
```

#### Input
* input `object`

#### Output
*Output schema unknown*

### homepages.listings.featured_listing_id.listing.get
Retrieves a set of Listing objects associated to a FeaturedListing.


```js
etsy.homepages.listings.featured_listing_id.listing.get({
  "featured_listing_id": null
}, context)
```

#### Input
* input `object`

#### Output
*Output schema unknown*

### listings.listing_id.images.listing_image_id.get
Retrieves a ListingImage by id.


```js
etsy.listings.listing_id.images.listing_image_id.get({
  "listing_id": null,
  "listing_image_id": null
}, context)
```

#### Input
* input `object`

#### Output
*Output schema unknown*

### listings.listing_id.images.listing_image_id.delete
Deletes a listing image


```js
etsy.listings.listing_id.images.listing_image_id.delete({
  "listing_id": null,
  "listing_image_id": null
}, context)
```

#### Input
* input `object`

#### Output
*Output schema unknown*

### listings.listing_id.images.post
Upload a new listing image


```js
etsy.listings.listing_id.images.post({
  "image": null,
  "listing_id": null
}, context)
```

#### Input
* input `object`

#### Output
*Output schema unknown*

### listings.listing_id.images.get
Retrieves a set of ListingImage objects associated to a Listing.


```js
etsy.listings.listing_id.images.get({
  "listing_id": null
}, context)
```

#### Input
* input `object`

#### Output
*Output schema unknown*

### listings.listing_id.get
Retrieves a Listing by id.


```js
etsy.listings.listing_id.get({
  "listing_id": null
}, context)
```

#### Input
* input `object`

#### Output
*Output schema unknown*

### listings.listing_id.put
Updates a Listing


```js
etsy.listings.listing_id.put({
  "listing_id": null
}, context)
```

#### Input
* input `object`
  * state `string` (values: active, inactive)

#### Output
*Output schema unknown*

### listings.listing_id.delete
Deletes a Listing


```js
etsy.listings.listing_id.delete({
  "listing_id": null
}, context)
```

#### Input
* input `object`

#### Output
*Output schema unknown*

### listings.listing_id.favored_by.get
Retrieves a set of FavoriteListing objects associated to a Listing.


```js
etsy.listings.listing_id.favored_by.get({
  "listing_id": null
}, context)
```

#### Input
* input `object`
  * limit `number`

#### Output
*Output schema unknown*

### listings.listing_id.shipping.info.get
Retrieves a set of ShippingInfo objects associated to a Listing.


```js
etsy.listings.listing_id.shipping.info.get({
  "listing_id": null
}, context)
```

#### Input
* input `object`

#### Output
*Output schema unknown*

### listings.listing_id.shipping.info.post
Creates a new ShippingInfo.


```js
etsy.listings.listing_id.shipping.info.post({
  "origin_country_id": null,
  "primary_cost": null,
  "secondary_cost": null,
  "listing_id": null
}, context)
```

#### Input
* input `object`

#### Output
*Output schema unknown*

### listings.listing_id.payments.get
Retrieves a set of ListingPayment objects associated to a Listing.


```js
etsy.listings.listing_id.payments.get({
  "listing_id": null
}, context)
```

#### Input
* input `object`

#### Output
*Output schema unknown*

### listings.active.get
Finds all active Listing


```js
etsy.listings.active.get({}, context)
```

#### Input
* input `object`
  * limit `number`
  * sort_on `string` (values: created, price, score)
  * sort_order `string` (values: up, down)

#### Output
*Output schema unknown*

### shops.shop_id.listings.active.get
Finds all active Listings associated with a Shop


```js
etsy.shops.shop_id.listings.active.get({
  "shop_id": null
}, context)
```

#### Input
* input `object`
  * limit `number`
  * sort_on `string` (values: created, price, score)
  * sort_order `string` (values: up, down)

#### Output
*Output schema unknown*

### listings.post
Creates a new Listing


```js
etsy.listings.post({
  "quantity": null,
  "title": null,
  "description": null,
  "price": null,
  "tags": null,
  "shipping_template_id": null
}, context)
```

#### Input
* input `object`

#### Output
*Output schema unknown*

### orders.order_id.get
Retrieves a Order by id.


```js
etsy.orders.order_id.get({
  "order_id": null
}, context)
```

#### Input
* input `object`

#### Output
*Output schema unknown*

### orders.order_id.receipts.get
Retrieves a set of Receipt objects associated to a Order.


```js
etsy.orders.order_id.receipts.get({
  "order_id": null
}, context)
```

#### Input
* input `object`
  * limit `number`

#### Output
*Output schema unknown*

### receipts.receipt_id.get
Retrieves a Receipt by id.


```js
etsy.receipts.receipt_id.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### receipts.receipt_id.put
Updates a Receipt


```js
etsy.receipts.receipt_id.put({
  "receipt_id": null
}, context)
```

#### Input
* input `object`

#### Output
*Output schema unknown*

### receipts.receipt_id.transactions.get
Retrieves a set of Transaction objects associated to a Receipt.


```js
etsy.receipts.receipt_id.transactions.get({
  "receipt_id": null
}, context)
```

#### Input
* input `object`
  * limit `number`

#### Output
*Output schema unknown*

### users.user_id.recommended_listings.get
Get recommended listings for an authenticated member. The number of listings returned may not match the specified limit if there is no activity from recommended shops.


```js
etsy.users.user_id.recommended_listings.get({
  "user_id": null
}, context)
```

#### Input
* input `object`
  * limit `number`

#### Output
*Output schema unknown*

### users.user_id.recommended_listings.rejects.listing_ids.post
Registers rejections of recommended listings. Affects future recommended listings.


```js
etsy.users.user_id.recommended_listings.rejects.listing_ids.post({
  "user_id": null,
  "listing_ids": null
}, context)
```

#### Input
* input `object`

#### Output
*Output schema unknown*

### users.user_id.recommended_listings.views.listing_ids.post
Register viewings of recommended listings. Affects future recommended listings.


```js
etsy.users.user_id.recommended_listings.views.listing_ids.post({
  "user_id": null,
  "listing_ids": null
}, context)
```

#### Input
* input `object`

#### Output
*Output schema unknown*

### regions.region_id.get
Retrieves a Region by id.


```js
etsy.regions.region_id.get({
  "region_id": null
}, context)
```

#### Input
* input `object`

#### Output
*Output schema unknown*

### regions.get
Finds all Region.


```js
etsy.regions.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### shipping.info.shipping_info_id.get
Retrieves a ShippingInfo by id.


```js
etsy.shipping.info.shipping_info_id.get({
  "shipping_info_id": null
}, context)
```

#### Input
* input `object`

#### Output
*Output schema unknown*

### shipping.info.shipping_info_id.put
Updates a ShippingInfo with the given id.


```js
etsy.shipping.info.shipping_info_id.put({
  "shipping_info_id": null
}, context)
```

#### Input
* input `object`

#### Output
*Output schema unknown*

### shipping.info.shipping_info_id.delete
Deletes the ShippingInfo with the given id.


```js
etsy.shipping.info.shipping_info_id.delete({
  "shipping_info_id": null
}, context)
```

#### Input
* input `object`

#### Output
*Output schema unknown*

### shipping.templates.entries.shipping_template_entry_id.get
Retrieves a ShippingTemplateEntry by id.


```js
etsy.shipping.templates.entries.shipping_template_entry_id.get({
  "shipping_template_entry_id": null
}, context)
```

#### Input
* input `object`

#### Output
*Output schema unknown*

### shipping.templates.entries.shipping_template_entry_id.put
Updates a ShippingTemplateEntry


```js
etsy.shipping.templates.entries.shipping_template_entry_id.put({
  "shipping_template_entry_id": null
}, context)
```

#### Input
* input `object`

#### Output
*Output schema unknown*

### shipping.templates.entries.shipping_template_entry_id.delete
Deletes a ShippingTemplateEntry


```js
etsy.shipping.templates.entries.shipping_template_entry_id.delete({
  "shipping_template_entry_id": null
}, context)
```

#### Input
* input `object`

#### Output
*Output schema unknown*

### shipping.templates.entries.post
Creates a new ShippingTemplateEntry


```js
etsy.shipping.templates.entries.post({
  "shipping_template_id": null,
  "primary_cost": null,
  "secondary_cost": null
}, context)
```

#### Input
* input `object`

#### Output
*Output schema unknown*

### shipping.templates.shipping_template_id.get
Retrieves a ShippingTemplate by id.


```js
etsy.shipping.templates.shipping_template_id.get({
  "shipping_template_id": null
}, context)
```

#### Input
* input `object`

#### Output
*Output schema unknown*

### shipping.templates.shipping_template_id.delete
Deletes the ShippingTemplate with the given id.


```js
etsy.shipping.templates.shipping_template_id.delete({
  "shipping_template_id": null
}, context)
```

#### Input
* input `object`

#### Output
*Output schema unknown*

### shipping.templates.shipping_template_id.put
Updates a ShippingTemplate


```js
etsy.shipping.templates.shipping_template_id.put({
  "shipping_template_id": null
}, context)
```

#### Input
* input `object`

#### Output
*Output schema unknown*

### shipping.templates.shipping_template_id.entries.get
Retrieves a set of ShippingTemplateEntry objects associated to a ShippingTemplate.


```js
etsy.shipping.templates.shipping_template_id.entries.get({
  "shipping_template_id": null
}, context)
```

#### Input
* input `object`
  * limit `number`

#### Output
*Output schema unknown*

### shipping.templates.post
Creates a new ShippingTemplate


```js
etsy.shipping.templates.post({
  "title": null,
  "origin_country_id": null,
  "primary_cost": null,
  "secondary_cost": null
}, context)
```

#### Input
* input `object`

#### Output
*Output schema unknown*

### shops.shop_id.get
Retrieves a Shop by id.


```js
etsy.shops.shop_id.get({
  "shop_id": null
}, context)
```

#### Input
* input `object`

#### Output
*Output schema unknown*

### shops.shop_id.put
Updates a Shop


```js
etsy.shops.shop_id.put({
  "shop_id": null
}, context)
```

#### Input
* input `object`

#### Output
*Output schema unknown*

### shops.shop_id.receipts.get
Retrieves a set of Receipt objects associated to a Shop.


```js
etsy.shops.shop_id.receipts.get({
  "shop_id": null
}, context)
```

#### Input
* input `object`
  * limit `number`

#### Output
*Output schema unknown*

### shops.shop_id.transactions.get
Retrieves a set of Transaction objects associated to a Shop.


```js
etsy.shops.shop_id.transactions.get({
  "shop_id": null
}, context)
```

#### Input
* input `object`
  * limit `number`

#### Output
*Output schema unknown*

### shops.shop_id.sections.get
Retrieves a set of ShopSection objects associated to a Shop.


```js
etsy.shops.shop_id.sections.get({
  "shop_id": null
}, context)
```

#### Input
* input `object`

#### Output
*Output schema unknown*

### shops.get
Finds all Shops. If there is a keywords parameter, finds shops with shop_name starting with keywords.


```js
etsy.shops.get({}, context)
```

#### Input
* input `object`
  * limit `number`

#### Output
*Output schema unknown*

### shops.shop_id.listings.featured.get
Retrieves Listings associated to a Shop that are featured


```js
etsy.shops.shop_id.listings.featured.get({
  "shop_id": null
}, context)
```

#### Input
* input `object`
  * limit `number`

#### Output
*Output schema unknown*

### shops.shop_id.listings.inactive.get
Retrieves Listings associated to a Shop that are inactive


```js
etsy.shops.shop_id.listings.inactive.get({
  "shop_id": null
}, context)
```

#### Input
* input `object`
  * limit `number`

#### Output
*Output schema unknown*

### shops.shop_id.listings.expired.get
Retrieves Listings associated to a Shop that are expired


```js
etsy.shops.shop_id.listings.expired.get({
  "shop_id": null
}, context)
```

#### Input
* input `object`
  * limit `number`

#### Output
*Output schema unknown*

### shops.shop_id.listings.inactive.listing_id.get
Retrieves a Listing associated to a Shop that is inactive


```js
etsy.shops.shop_id.listings.inactive.listing_id.get({
  "shop_id": null,
  "listing_id": null
}, context)
```

#### Input
* input `object`

#### Output
*Output schema unknown*

### shops.shop_id.listings.expired.listing_id.get
Retrieves a Listing associated to a Shop that is inactive


```js
etsy.shops.shop_id.listings.expired.listing_id.get({
  "shop_id": null,
  "listing_id": null
}, context)
```

#### Input
* input `object`

#### Output
*Output schema unknown*

### shops.shop_id.appearance.banner.post
Upload a new shop banner image


```js
etsy.shops.shop_id.appearance.banner.post({
  "image": null,
  "shop_id": null
}, context)
```

#### Input
* input `object`

#### Output
*Output schema unknown*

### shops.shop_id.appearance.banner.shop_banner_id.delete
Deletes a shop banner image


```js
etsy.shops.shop_id.appearance.banner.shop_banner_id.delete({
  "shop_id": null,
  "shop_banner_id": null
}, context)
```

#### Input
* input `object`

#### Output
*Output schema unknown*

### sections.shop_section_id.get
Retrieves a ShopSection by id.


```js
etsy.sections.shop_section_id.get({
  "shop_section_id": null
}, context)
```

#### Input
* input `object`

#### Output
*Output schema unknown*

### sections.shop_section_id.put
Updates a ShopSection with the given id.


```js
etsy.sections.shop_section_id.put({
  "shop_section_id": null
}, context)
```

#### Input
* input `object`

#### Output
*Output schema unknown*

### sections.shop_section_id.delete
Deletes the ShopSection with the given id.


```js
etsy.sections.shop_section_id.delete({
  "shop_section_id": null
}, context)
```

#### Input
* input `object`

#### Output
*Output schema unknown*

### sections.post
Creates a new ShopSection.


```js
etsy.sections.post({}, context)
```

#### Input
* input `object`

#### Output
*Output schema unknown*

### categories.tag.get
Retrieves a top-level Category by tag.


```js
etsy.categories.tag.get({
  "tag": null
}, context)
```

#### Input
* input `object`

#### Output
*Output schema unknown*

### categories.tag.subtag.get
Retrieves a second-level Category by tag and subtag.


```js
etsy.categories.tag.subtag.get({
  "tag": null,
  "subtag": null
}, context)
```

#### Input
* input `object`

#### Output
*Output schema unknown*

### categories.tag.subtag.subsubtag.get
Retrieves a third-level Category by tag, subtag and subsubtag.


```js
etsy.categories.tag.subtag.subsubtag.get({
  "tag": null,
  "subtag": null,
  "subsubtag": null
}, context)
```

#### Input
* input `object`

#### Output
*Output schema unknown*

### taxonomy.categories.get
Retrieves all top-level Categories.


```js
etsy.taxonomy.categories.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### taxonomy.categories.tag.get
Retrieves children of a top-level Category by tag.


```js
etsy.taxonomy.categories.tag.get({
  "tag": null
}, context)
```

#### Input
* input `object`

#### Output
*Output schema unknown*

### taxonomy.categories.tag.subtag.get
Retrieves children of a second-level Category by tag and subtag.


```js
etsy.taxonomy.categories.tag.subtag.get({
  "tag": null,
  "subtag": null
}, context)
```

#### Input
* input `object`

#### Output
*Output schema unknown*

### taxonomy.tags.get
Retrieves all related tags for the given tag set.


```js
etsy.taxonomy.tags.get({}, context)
```

#### Input
* input `object`
  * limit `number`

#### Output
*Output schema unknown*

### taxonomy.tags.tags.get
Retrieves all related tags for the given tag set.


```js
etsy.taxonomy.tags.tags.get({
  "tags": null
}, context)
```

#### Input
* input `object`
  * limit `number`

#### Output
*Output schema unknown*

### transactions.transaction_id.get
Retrieves a Transaction by id.


```js
etsy.transactions.transaction_id.get({
  "transaction_id": null
}, context)
```

#### Input
* input `object`

#### Output
*Output schema unknown*

### treasuries.treasury_id.get
Get a Treasury


```js
etsy.treasuries.treasury_id.get({
  "treasury_id": null
}, context)
```

#### Input
* input `object`

#### Output
*Output schema unknown*

### treasuries.get
Search Treasuries or else List all Treasuries


```js
etsy.treasuries.get({}, context)
```

#### Input
* input `object`
  * sort_on `string` (values: hotness, created)
  * sort_order `string` (values: up, down)
  * maturity `string` (values: safe_only, safe_and_mature)
  * detail_level `string` (values: low, medium)
  * limit `number`

#### Output
*Output schema unknown*

### users.user_id.treasuries.get
Get a user's Treasuries


```js
etsy.users.user_id.treasuries.get({
  "user_id": null
}, context)
```

#### Input
* input `object`
  * sort_on `string` (values: hotness, created)
  * sort_order `string` (values: up, down)
  * maturity `string` (values: safe_only, safe_and_mature)
  * detail_level `string` (values: low, medium)
  * limit `number`

#### Output
*Output schema unknown*

### users.user_id.get
Retrieves a User by id.


```js
etsy.users.user_id.get({
  "user_id": null
}, context)
```

#### Input
* input `object`

#### Output
*Output schema unknown*

### users.user_id.shops.get
Retrieves a set of Shop objects associated to a User.


```js
etsy.users.user_id.shops.get({
  "user_id": null
}, context)
```

#### Input
* input `object`
  * limit `number`

#### Output
*Output schema unknown*

### users.user_id.favored_by.get
Retrieves a set of FavoriteUser objects associated to a User.


```js
etsy.users.user_id.favored_by.get({
  "user_id": null
}, context)
```

#### Input
* input `object`
  * limit `number`

#### Output
*Output schema unknown*

### users.user_id.feedback.as_subject.get
Retrieves a set of Feedback objects associated to a User.


```js
etsy.users.user_id.feedback.as_subject.get({
  "user_id": null
}, context)
```

#### Input
* input `object`
  * limit `number`

#### Output
*Output schema unknown*

### users.user_id.feedback.as_author.get
Retrieves a set of Feedback objects associated to a User.


```js
etsy.users.user_id.feedback.as_author.get({
  "user_id": null
}, context)
```

#### Input
* input `object`
  * limit `number`

#### Output
*Output schema unknown*

### users.user_id.feedback.as_buyer.get
Retrieves a set of Feedback objects associated to a User.


```js
etsy.users.user_id.feedback.as_buyer.get({
  "user_id": null
}, context)
```

#### Input
* input `object`
  * limit `number`

#### Output
*Output schema unknown*

### users.user_id.feedback.as_seller.get
Retrieves a set of Feedback objects associated to a User.


```js
etsy.users.user_id.feedback.as_seller.get({
  "user_id": null
}, context)
```

#### Input
* input `object`
  * limit `number`

#### Output
*Output schema unknown*

### users.user_id.orders.get
Retrieves a set of Order objects associated to a User.


```js
etsy.users.user_id.orders.get({
  "user_id": null
}, context)
```

#### Input
* input `object`
  * limit `number`

#### Output
*Output schema unknown*

### users.user_id.receipts.get
Retrieves a set of Receipt objects associated to a User.


```js
etsy.users.user_id.receipts.get({
  "user_id": null
}, context)
```

#### Input
* input `object`
  * limit `number`

#### Output
*Output schema unknown*

### users.user_id.transactions.get
Retrieves a set of Transaction objects associated to a User.


```js
etsy.users.user_id.transactions.get({
  "user_id": null
}, context)
```

#### Input
* input `object`
  * limit `number`

#### Output
*Output schema unknown*

### users.user_id.charges.get
Retrieves a set of BillCharge objects associated to a User.


```js
etsy.users.user_id.charges.get({
  "user_id": null
}, context)
```

#### Input
* input `object`
  * limit `number`

#### Output
*Output schema unknown*

### users.user_id.payments.get
Retrieves a set of BillPayment objects associated to a User.


```js
etsy.users.user_id.payments.get({
  "user_id": null
}, context)
```

#### Input
* input `object`
  * limit `number`

#### Output
*Output schema unknown*

### users.user_id.shipping.templates.get
Retrieves a set of ShippingTemplate objects associated to a User.


```js
etsy.users.user_id.shipping.templates.get({
  "user_id": null
}, context)
```

#### Input
* input `object`
  * limit `number`

#### Output
*Output schema unknown*

### users.user_id.payments.templates.get
Retrieves a set of PaymentTemplate objects associated to a User.


```js
etsy.users.user_id.payments.templates.get({
  "user_id": null
}, context)
```

#### Input
* input `object`

#### Output
*Output schema unknown*

### users.user_id.addresses.get
Retrieves a set of UserAddress objects associated to a User.


```js
etsy.users.user_id.addresses.get({
  "user_id": null
}, context)
```

#### Input
* input `object`

#### Output
*Output schema unknown*

### users.user_id.addresses.post
Creates a new UserAddress.


```js
etsy.users.user_id.addresses.post({
  "name": null,
  "first_line": null,
  "city": null,
  "zip": null,
  "country_id": null,
  "user_id": null
}, context)
```

#### Input
* input `object`

#### Output
*Output schema unknown*

### payments.templates.payment_template_id.get
Retrieves a PaymentTemplate by id.


```js
etsy.payments.templates.payment_template_id.get({
  "payment_template_id": null
}, context)
```

#### Input
* input `object`

#### Output
*Output schema unknown*

### payments.templates.payment_template_id.put
Updates a PaymentTemplate


```js
etsy.payments.templates.payment_template_id.put({
  "payment_template_id": null
}, context)
```

#### Input
* input `object`

#### Output
*Output schema unknown*

### payments.templates.post
Creates a new PaymentTemplate


```js
etsy.payments.templates.post({}, context)
```

#### Input
* input `object`

#### Output
*Output schema unknown*

### payments.listing_payment_id.get
Retrieves a ListingPayment by id.


```js
etsy.payments.listing_payment_id.get({
  "listing_payment_id": null
}, context)
```

#### Input
* input `object`

#### Output
*Output schema unknown*

### users.user_id.avatar.post
Upload a new user avatar image


```js
etsy.users.user_id.avatar.post({}, context)
```

#### Input
* input `object`

#### Output
*Output schema unknown*

### users.user_id.avatar.src.get
Get avatar image source


```js
etsy.users.user_id.avatar.src.get({}, context)
```

#### Input
* input `object`

#### Output
*Output schema unknown*

### users.user_id.addresses.user_address_id.get
Retrieves a UserAddress by id.


```js
etsy.users.user_id.addresses.user_address_id.get({
  "user_address_id": null
}, context)
```

#### Input
* input `object`

#### Output
*Output schema unknown*

### users.user_id.addresses.user_address_id.put
Updates a UserAddress with the given id.


```js
etsy.users.user_id.addresses.user_address_id.put({
  "user_address_id": null
}, context)
```

#### Input
* input `object`

#### Output
*Output schema unknown*

### users.user_id.addresses.user_address_id.delete
Deletes the UserAddress with the given id.


```js
etsy.users.user_id.addresses.user_address_id.delete({
  "user_address_id": null
}, context)
```

#### Input
* input `object`

#### Output
*Output schema unknown*

### featured.users.get
Finds all FeaturedUser.


```js
etsy.featured.users.get({}, context)
```

#### Input
* input `object`
  * limit `number`

#### Output
*Output schema unknown*

### featured.users.featured_user_id.get
Retrieves a FeaturedUser by id.


```js
etsy.featured.users.featured_user_id.get({
  "featured_user_id": null
}, context)
```

#### Input
* input `object`

#### Output
*Output schema unknown*

### .get
Get a list of all methods available.


```js
etsy..get(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### server.epoch.get
Get server time, in epoch seconds notation.


```js
etsy.server.epoch.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### server.ping.get
Check that the server is alive.


```js
etsy.server.ping.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*



## Definitions

*This integration has no definitions*
