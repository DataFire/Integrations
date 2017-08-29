# @datafire/etsy

Client library for Etsy

## Installation and Usage
```bash
npm install --save datafire @datafire/etsy
```

```js
let datafire = require('datafire');
let etsy = require('@datafire/etsy').create();

etsy.featured.users.get({}).then(data => {
  console.log(data);
})
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

#### Parameters
* country_id (undefined) **required**

### countries.get
Finds all Country.


```js
etsy.countries.get(null, context)
```


### users.user_id.favorites.listings.get
Finds all favorite listings for a user


```js
etsy.users.user_id.favorites.listings.get({
  "user_id": null
}, context)
```

#### Parameters
* user_id (undefined) **required**
* limit (undefined)
* offset (undefined)

### users.user_id.favorites.listings.listing_id.get
Finds a favorite listing for a user


```js
etsy.users.user_id.favorites.listings.listing_id.get({
  "user_id": null,
  "listing_id": null
}, context)
```

#### Parameters
* user_id (undefined) **required**
* listing_id (undefined) **required**

### users.user_id.favorites.listings.listing_id.post
Creates a new favorite listing for a user


```js
etsy.users.user_id.favorites.listings.listing_id.post({
  "user_id": null,
  "listing_id": null
}, context)
```

#### Parameters
* user_id (undefined) **required**
* listing_id (undefined) **required**

### users.user_id.favorites.listings.listing_id.delete
Delete a favorite listing for a user


```js
etsy.users.user_id.favorites.listings.listing_id.delete({
  "user_id": null,
  "listing_id": null
}, context)
```

#### Parameters
* user_id (undefined) **required**
* listing_id (undefined) **required**

### users.user_id.favorites.users.get
Finds all favorite users for a user


```js
etsy.users.user_id.favorites.users.get({
  "user_id": null
}, context)
```

#### Parameters
* user_id (undefined) **required**
* limit (undefined)
* offset (undefined)

### users.user_id.favorites.users.target_user_id.get
Finds a favorite user for a user


```js
etsy.users.user_id.favorites.users.target_user_id.get({
  "user_id": null,
  "target_user_id": null
}, context)
```

#### Parameters
* user_id (undefined) **required**
* target_user_id (undefined) **required**

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

#### Parameters
* user_id (undefined) **required**
* target_user_id (undefined) **required**
* user_id_path (undefined) **required**
* target_user_id_path (undefined) **required**

### users.user_id.favorites.users.target_user_id.delete
Delete a favorite listing for a user


```js
etsy.users.user_id.favorites.users.target_user_id.delete({
  "user_id": null,
  "target_user_id": null
}, context)
```

#### Parameters
* user_id (undefined) **required**
* target_user_id (undefined) **required**

### homepages.pickers.get
Finds all FeaturedListingPicker in scope active.


```js
etsy.homepages.pickers.get({}, context)
```

#### Parameters
* limit (undefined)
* offset (undefined)

### homepages.pickers.featured_listing_picker_id.get
Retrieves a FeaturedListingPicker by id.


```js
etsy.homepages.pickers.featured_listing_picker_id.get({
  "featured_listing_picker_id": null
}, context)
```

#### Parameters
* featured_listing_picker_id (undefined) **required**

### homepages.pickers.featured_listing_picker_id.featured.get
Retrieves a set of FeaturedListing objects associated to a FeaturedListingPicker.


```js
etsy.homepages.pickers.featured_listing_picker_id.featured.get({
  "featured_listing_picker_id": null
}, context)
```

#### Parameters
* featured_listing_picker_id (undefined) **required**
* limit (undefined)
* offset (undefined)

### homepages.pickers.featured_listing_picker_id.listings.get
Retrieves a set of Listing objects associated to a FeaturedListingPicker.


```js
etsy.homepages.pickers.featured_listing_picker_id.listings.get({
  "featured_listing_picker_id": null
}, context)
```

#### Parameters
* featured_listing_picker_id (undefined) **required**
* limit (undefined)
* offset (undefined)

### homepages.pickers.featured_listing_picker_id.listings.active.get
Retrieves a set of Listing objects associated to a FeaturedListingPicker in scope active.


```js
etsy.homepages.pickers.featured_listing_picker_id.listings.active.get({
  "featured_listing_picker_id": null
}, context)
```

#### Parameters
* featured_listing_picker_id (undefined) **required**
* limit (undefined)
* offset (undefined)

### homepages.listings.get
Finds all FeaturedListings regardless of Listing state


```js
etsy.homepages.listings.get({}, context)
```

#### Parameters
* limit (undefined)
* offset (undefined)

### homepages.listings.active.get
Finds all FeaturedListings that point to active Listings


```js
etsy.homepages.listings.active.get({}, context)
```

#### Parameters
* limit (undefined)
* offset (undefined)

### homepages.listings.featured_listing_id.get
Retrieves a FeaturedListing by id.


```js
etsy.homepages.listings.featured_listing_id.get({
  "featured_listing_id": null
}, context)
```

#### Parameters
* featured_listing_id (undefined) **required**

### homepages.listings.featured_listing_id.picker.get
Retrieves a set of FeaturedListingPicker objects associated to a FeaturedListing.


```js
etsy.homepages.listings.featured_listing_id.picker.get({
  "featured_listing_id": null
}, context)
```

#### Parameters
* featured_listing_id (undefined) **required**

### homepages.listings.featured_listing_id.listing.get
Retrieves a set of Listing objects associated to a FeaturedListing.


```js
etsy.homepages.listings.featured_listing_id.listing.get({
  "featured_listing_id": null
}, context)
```

#### Parameters
* featured_listing_id (undefined) **required**

### listings.listing_id.images.listing_image_id.get
Retrieves a ListingImage by id.


```js
etsy.listings.listing_id.images.listing_image_id.get({
  "listing_id": null,
  "listing_image_id": null
}, context)
```

#### Parameters
* listing_id (undefined) **required**
* listing_image_id (undefined) **required**

### listings.listing_id.images.listing_image_id.delete
Deletes a listing image


```js
etsy.listings.listing_id.images.listing_image_id.delete({
  "listing_id": null,
  "listing_image_id": null
}, context)
```

#### Parameters
* listing_id (undefined) **required**
* listing_image_id (undefined) **required**

### listings.listing_id.images.post
Upload a new listing image


```js
etsy.listings.listing_id.images.post({
  "image": null,
  "listing_id": null
}, context)
```

#### Parameters
* image (undefined) **required**
* listing_id (undefined) **required**

### listings.listing_id.images.get
Retrieves a set of ListingImage objects associated to a Listing.


```js
etsy.listings.listing_id.images.get({
  "listing_id": null
}, context)
```

#### Parameters
* listing_id (undefined) **required**

### listings.listing_id.get
Retrieves a Listing by id.


```js
etsy.listings.listing_id.get({
  "listing_id": null
}, context)
```

#### Parameters
* listing_id (undefined) **required**

### listings.listing_id.put
Updates a Listing


```js
etsy.listings.listing_id.put({
  "listing_id": null
}, context)
```

#### Parameters
* quantity (undefined)
* title (undefined)
* description (undefined)
* price (undefined)
* materials (undefined)
* renew (undefined)
* tags (undefined)
* shipping_template_id (undefined)
* shop_section_id (undefined)
* state (undefined)
* listing_id (undefined) **required**

### listings.listing_id.delete
Deletes a Listing


```js
etsy.listings.listing_id.delete({
  "listing_id": null
}, context)
```

#### Parameters
* listing_id (undefined) **required**

### listings.listing_id.favored_by.get
Retrieves a set of FavoriteListing objects associated to a Listing.


```js
etsy.listings.listing_id.favored_by.get({
  "listing_id": null
}, context)
```

#### Parameters
* listing_id (undefined) **required**
* limit (undefined)
* offset (undefined)

### listings.listing_id.shipping.info.get
Retrieves a set of ShippingInfo objects associated to a Listing.


```js
etsy.listings.listing_id.shipping.info.get({
  "listing_id": null
}, context)
```

#### Parameters
* listing_id (undefined) **required**

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

#### Parameters
* origin_country_id (undefined) **required**
* destination_country_id (undefined)
* primary_cost (undefined) **required**
* secondary_cost (undefined) **required**
* region_id (undefined)
* listing_id (undefined) **required**

### listings.listing_id.payments.get
Retrieves a set of ListingPayment objects associated to a Listing.


```js
etsy.listings.listing_id.payments.get({
  "listing_id": null
}, context)
```

#### Parameters
* listing_id (undefined) **required**

### listings.active.get
Finds all active Listing


```js
etsy.listings.active.get({}, context)
```

#### Parameters
* limit (undefined)
* offset (undefined)
* keywords (undefined)
* sort_on (undefined)
* sort_order (undefined)
* min_price (undefined)
* max_price (undefined)
* color (undefined)
* color_accuracy (undefined)
* tags (undefined)
* materials (undefined)
* category (undefined)

### shops.shop_id.listings.active.get
Finds all active Listings associated with a Shop


```js
etsy.shops.shop_id.listings.active.get({
  "shop_id": null
}, context)
```

#### Parameters
* limit (undefined)
* offset (undefined)
* shop_id (undefined) **required**
* keywords (undefined)
* sort_on (undefined)
* sort_order (undefined)
* min_price (undefined)
* max_price (undefined)
* color (undefined)
* color_accuracy (undefined)
* tags (undefined)
* materials (undefined)
* category (undefined)

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

#### Parameters
* quantity (undefined) **required**
* title (undefined) **required**
* description (undefined) **required**
* price (undefined) **required**
* materials (undefined)
* tags (undefined) **required**
* shipping_template_id (undefined) **required**
* shop_section_id (undefined)

### orders.order_id.get
Retrieves a Order by id.


```js
etsy.orders.order_id.get({
  "order_id": null
}, context)
```

#### Parameters
* order_id (undefined) **required**

### orders.order_id.receipts.get
Retrieves a set of Receipt objects associated to a Order.


```js
etsy.orders.order_id.receipts.get({
  "order_id": null
}, context)
```

#### Parameters
* order_id (undefined) **required**
* limit (undefined)
* offset (undefined)

### receipts.receipt_id.get
Retrieves a Receipt by id.


```js
etsy.receipts.receipt_id.get(null, context)
```


### receipts.receipt_id.put
Updates a Receipt


```js
etsy.receipts.receipt_id.put({
  "receipt_id": null
}, context)
```

#### Parameters
* receipt_id (undefined) **required**
* was_paid (undefined)
* was_shipped (undefined)
* message_from_seller (undefined)
* message_from_buyer (undefined)

### receipts.receipt_id.transactions.get
Retrieves a set of Transaction objects associated to a Receipt.


```js
etsy.receipts.receipt_id.transactions.get({
  "receipt_id": null
}, context)
```

#### Parameters
* receipt_id (undefined) **required**
* limit (undefined)
* offset (undefined)

### users.user_id.recommended_listings.get
Get recommended listings for an authenticated member. The number of listings returned may not match the specified limit if there is no activity from recommended shops.


```js
etsy.users.user_id.recommended_listings.get({
  "user_id": null
}, context)
```

#### Parameters
* user_id (undefined) **required**
* limit (undefined)
* excluded_listing_ids (undefined)

### users.user_id.recommended_listings.rejects.listing_ids.post
Registers rejections of recommended listings. Affects future recommended listings.


```js
etsy.users.user_id.recommended_listings.rejects.listing_ids.post({
  "user_id": null,
  "listing_ids": null
}, context)
```

#### Parameters
* user_id (undefined) **required**
* listing_ids (undefined) **required**

### users.user_id.recommended_listings.views.listing_ids.post
Register viewings of recommended listings. Affects future recommended listings.


```js
etsy.users.user_id.recommended_listings.views.listing_ids.post({
  "user_id": null,
  "listing_ids": null
}, context)
```

#### Parameters
* user_id (undefined) **required**
* listing_ids (undefined) **required**

### regions.region_id.get
Retrieves a Region by id.


```js
etsy.regions.region_id.get({
  "region_id": null
}, context)
```

#### Parameters
* region_id (undefined) **required**

### regions.get
Finds all Region.


```js
etsy.regions.get(null, context)
```


### shipping.info.shipping_info_id.get
Retrieves a ShippingInfo by id.


```js
etsy.shipping.info.shipping_info_id.get({
  "shipping_info_id": null
}, context)
```

#### Parameters
* shipping_info_id (undefined) **required**

### shipping.info.shipping_info_id.put
Updates a ShippingInfo with the given id.


```js
etsy.shipping.info.shipping_info_id.put({
  "shipping_info_id": null
}, context)
```

#### Parameters
* origin_country_id (undefined)
* destination_country_id (undefined)
* primary_cost (undefined)
* secondary_cost (undefined)
* listing_id (undefined)
* region_id (undefined)
* shipping_info_id (undefined) **required**

### shipping.info.shipping_info_id.delete
Deletes the ShippingInfo with the given id.


```js
etsy.shipping.info.shipping_info_id.delete({
  "shipping_info_id": null
}, context)
```

#### Parameters
* shipping_info_id (undefined) **required**

### shipping.templates.entries.shipping_template_entry_id.get
Retrieves a ShippingTemplateEntry by id.


```js
etsy.shipping.templates.entries.shipping_template_entry_id.get({
  "shipping_template_entry_id": null
}, context)
```

#### Parameters
* shipping_template_entry_id (undefined) **required**

### shipping.templates.entries.shipping_template_entry_id.put
Updates a ShippingTemplateEntry


```js
etsy.shipping.templates.entries.shipping_template_entry_id.put({
  "shipping_template_entry_id": null
}, context)
```

#### Parameters
* destination_country_id (undefined)
* primary_cost (undefined)
* secondary_cost (undefined)
* shipping_template_entry_id (undefined) **required**

### shipping.templates.entries.shipping_template_entry_id.delete
Deletes a ShippingTemplateEntry


```js
etsy.shipping.templates.entries.shipping_template_entry_id.delete({
  "shipping_template_entry_id": null
}, context)
```

#### Parameters
* shipping_template_entry_id (undefined) **required**

### shipping.templates.entries.post
Creates a new ShippingTemplateEntry


```js
etsy.shipping.templates.entries.post({
  "shipping_template_id": null,
  "primary_cost": null,
  "secondary_cost": null
}, context)
```

#### Parameters
* shipping_template_id (undefined) **required**
* destination_country_id (undefined)
* primary_cost (undefined) **required**
* secondary_cost (undefined) **required**
* destination_region_id (undefined)

### shipping.templates.shipping_template_id.get
Retrieves a ShippingTemplate by id.


```js
etsy.shipping.templates.shipping_template_id.get({
  "shipping_template_id": null
}, context)
```

#### Parameters
* shipping_template_id (undefined) **required**

### shipping.templates.shipping_template_id.delete
Deletes the ShippingTemplate with the given id.


```js
etsy.shipping.templates.shipping_template_id.delete({
  "shipping_template_id": null
}, context)
```

#### Parameters
* shipping_template_id (undefined) **required**

### shipping.templates.shipping_template_id.put
Updates a ShippingTemplate


```js
etsy.shipping.templates.shipping_template_id.put({
  "shipping_template_id": null
}, context)
```

#### Parameters
* title (undefined)
* origin_country_id (undefined)
* shipping_template_id (undefined) **required**

### shipping.templates.shipping_template_id.entries.get
Retrieves a set of ShippingTemplateEntry objects associated to a ShippingTemplate.


```js
etsy.shipping.templates.shipping_template_id.entries.get({
  "shipping_template_id": null
}, context)
```

#### Parameters
* shipping_template_id (undefined) **required**
* limit (undefined)
* offset (undefined)

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

#### Parameters
* title (undefined) **required**
* origin_country_id (undefined) **required**
* destination_country_id (undefined)
* primary_cost (undefined) **required**
* secondary_cost (undefined) **required**
* destination_region_id (undefined)

### shops.shop_id.get
Retrieves a Shop by id.


```js
etsy.shops.shop_id.get({
  "shop_id": null
}, context)
```

#### Parameters
* shop_id (undefined) **required**

### shops.shop_id.put
Updates a Shop


```js
etsy.shops.shop_id.put({
  "shop_id": null
}, context)
```

#### Parameters
* title (undefined)
* announcement (undefined)
* is_refusing_alchemy (undefined)
* alchemy_message (undefined)
* sale_message (undefined)
* policy_welcome (undefined)
* policy_payment (undefined)
* policy_shipping (undefined)
* policy_refunds (undefined)
* policy_additional (undefined)
* shop_id (undefined) **required**

### shops.shop_id.receipts.get
Retrieves a set of Receipt objects associated to a Shop.


```js
etsy.shops.shop_id.receipts.get({
  "shop_id": null
}, context)
```

#### Parameters
* shop_id (undefined) **required**
* limit (undefined)
* offset (undefined)

### shops.shop_id.transactions.get
Retrieves a set of Transaction objects associated to a Shop.


```js
etsy.shops.shop_id.transactions.get({
  "shop_id": null
}, context)
```

#### Parameters
* shop_id (undefined) **required**
* limit (undefined)
* offset (undefined)

### shops.shop_id.sections.get
Retrieves a set of ShopSection objects associated to a Shop.


```js
etsy.shops.shop_id.sections.get({
  "shop_id": null
}, context)
```

#### Parameters
* shop_id (undefined) **required**

### shops.get
Finds all Shops. If there is a keywords parameter, finds shops with shop_name starting with keywords.


```js
etsy.shops.get({}, context)
```

#### Parameters
* shop_name (undefined)
* limit (undefined)
* offset (undefined)

### shops.shop_id.listings.featured.get
Retrieves Listings associated to a Shop that are featured


```js
etsy.shops.shop_id.listings.featured.get({
  "shop_id": null
}, context)
```

#### Parameters
* shop_id (undefined) **required**
* limit (undefined)
* offset (undefined)

### shops.shop_id.listings.inactive.get
Retrieves Listings associated to a Shop that are inactive


```js
etsy.shops.shop_id.listings.inactive.get({
  "shop_id": null
}, context)
```

#### Parameters
* shop_id (undefined) **required**
* limit (undefined)
* offset (undefined)

### shops.shop_id.listings.expired.get
Retrieves Listings associated to a Shop that are expired


```js
etsy.shops.shop_id.listings.expired.get({
  "shop_id": null
}, context)
```

#### Parameters
* shop_id (undefined) **required**
* limit (undefined)
* offset (undefined)

### shops.shop_id.listings.inactive.listing_id.get
Retrieves a Listing associated to a Shop that is inactive


```js
etsy.shops.shop_id.listings.inactive.listing_id.get({
  "shop_id": null,
  "listing_id": null
}, context)
```

#### Parameters
* shop_id (undefined) **required**
* listing_id (undefined) **required**

### shops.shop_id.listings.expired.listing_id.get
Retrieves a Listing associated to a Shop that is inactive


```js
etsy.shops.shop_id.listings.expired.listing_id.get({
  "shop_id": null,
  "listing_id": null
}, context)
```

#### Parameters
* shop_id (undefined) **required**
* listing_id (undefined) **required**

### shops.shop_id.appearance.banner.post
Upload a new shop banner image


```js
etsy.shops.shop_id.appearance.banner.post({
  "image": null,
  "shop_id": null
}, context)
```

#### Parameters
* image (undefined) **required**
* shop_id (undefined) **required**

### shops.shop_id.appearance.banner.shop_banner_id.delete
Deletes a shop banner image


```js
etsy.shops.shop_id.appearance.banner.shop_banner_id.delete({
  "shop_id": null,
  "shop_banner_id": null
}, context)
```

#### Parameters
* shop_id (undefined) **required**
* shop_banner_id (undefined) **required**

### sections.shop_section_id.get
Retrieves a ShopSection by id.


```js
etsy.sections.shop_section_id.get({
  "shop_section_id": null
}, context)
```

#### Parameters
* shop_section_id (undefined) **required**

### sections.shop_section_id.put
Updates a ShopSection with the given id.


```js
etsy.sections.shop_section_id.put({
  "shop_section_id": null
}, context)
```

#### Parameters
* title (undefined)
* rank (undefined)
* user_id (undefined)
* shop_section_id (undefined) **required**

### sections.shop_section_id.delete
Deletes the ShopSection with the given id.


```js
etsy.sections.shop_section_id.delete({
  "shop_section_id": null
}, context)
```

#### Parameters
* shop_section_id (undefined) **required**

### sections.post
Creates a new ShopSection.


```js
etsy.sections.post({}, context)
```

#### Parameters
* title (undefined)
* user_id (undefined)

### categories.tag.get
Retrieves a top-level Category by tag.


```js
etsy.categories.tag.get({
  "tag": null
}, context)
```

#### Parameters
* tag (undefined) **required**

### categories.tag.subtag.get
Retrieves a second-level Category by tag and subtag.


```js
etsy.categories.tag.subtag.get({
  "tag": null,
  "subtag": null
}, context)
```

#### Parameters
* tag (undefined) **required**
* subtag (undefined) **required**

### categories.tag.subtag.subsubtag.get
Retrieves a third-level Category by tag, subtag and subsubtag.


```js
etsy.categories.tag.subtag.subsubtag.get({
  "tag": null,
  "subtag": null,
  "subsubtag": null
}, context)
```

#### Parameters
* tag (undefined) **required**
* subtag (undefined) **required**
* subsubtag (undefined) **required**

### taxonomy.categories.get
Retrieves all top-level Categories.


```js
etsy.taxonomy.categories.get(null, context)
```


### taxonomy.categories.tag.get
Retrieves children of a top-level Category by tag.


```js
etsy.taxonomy.categories.tag.get({
  "tag": null
}, context)
```

#### Parameters
* tag (undefined) **required**

### taxonomy.categories.tag.subtag.get
Retrieves children of a second-level Category by tag and subtag.


```js
etsy.taxonomy.categories.tag.subtag.get({
  "tag": null,
  "subtag": null
}, context)
```

#### Parameters
* tag (undefined) **required**
* subtag (undefined) **required**

### taxonomy.tags.get
Retrieves all related tags for the given tag set.


```js
etsy.taxonomy.tags.get({}, context)
```

#### Parameters
* limit (undefined)

### taxonomy.tags.tags.get
Retrieves all related tags for the given tag set.


```js
etsy.taxonomy.tags.tags.get({
  "tags": null
}, context)
```

#### Parameters
* tags (undefined) **required**
* limit (undefined)

### transactions.transaction_id.get
Retrieves a Transaction by id.


```js
etsy.transactions.transaction_id.get({
  "transaction_id": null
}, context)
```

#### Parameters
* transaction_id (undefined) **required**

### treasuries.treasury_id.get
Get a Treasury


```js
etsy.treasuries.treasury_id.get({
  "treasury_id": null
}, context)
```

#### Parameters
* treasury_id (undefined) **required**

### treasuries.get
Search Treasuries or else List all Treasuries


```js
etsy.treasuries.get({}, context)
```

#### Parameters
* keywords (undefined)
* sort_on (undefined)
* sort_order (undefined)
* maturity (undefined)
* detail_level (undefined)
* limit (undefined)
* offset (undefined)

### users.user_id.treasuries.get
Get a user's Treasuries


```js
etsy.users.user_id.treasuries.get({
  "user_id": null
}, context)
```

#### Parameters
* user_id (undefined) **required**
* sort_on (undefined)
* sort_order (undefined)
* maturity (undefined)
* detail_level (undefined)
* limit (undefined)
* offset (undefined)

### users.user_id.get
Retrieves a User by id.


```js
etsy.users.user_id.get({
  "user_id": null
}, context)
```

#### Parameters
* user_id (undefined) **required**

### users.user_id.shops.get
Retrieves a set of Shop objects associated to a User.


```js
etsy.users.user_id.shops.get({
  "user_id": null
}, context)
```

#### Parameters
* user_id (undefined) **required**
* limit (undefined)
* offset (undefined)

### users.user_id.favored_by.get
Retrieves a set of FavoriteUser objects associated to a User.


```js
etsy.users.user_id.favored_by.get({
  "user_id": null
}, context)
```

#### Parameters
* user_id (undefined) **required**
* limit (undefined)
* offset (undefined)

### users.user_id.feedback.as_subject.get
Retrieves a set of Feedback objects associated to a User.


```js
etsy.users.user_id.feedback.as_subject.get({
  "user_id": null
}, context)
```

#### Parameters
* user_id (undefined) **required**
* limit (undefined)
* offset (undefined)

### users.user_id.feedback.as_author.get
Retrieves a set of Feedback objects associated to a User.


```js
etsy.users.user_id.feedback.as_author.get({
  "user_id": null
}, context)
```

#### Parameters
* user_id (undefined) **required**
* limit (undefined)
* offset (undefined)

### users.user_id.feedback.as_buyer.get
Retrieves a set of Feedback objects associated to a User.


```js
etsy.users.user_id.feedback.as_buyer.get({
  "user_id": null
}, context)
```

#### Parameters
* user_id (undefined) **required**
* limit (undefined)
* offset (undefined)

### users.user_id.feedback.as_seller.get
Retrieves a set of Feedback objects associated to a User.


```js
etsy.users.user_id.feedback.as_seller.get({
  "user_id": null
}, context)
```

#### Parameters
* user_id (undefined) **required**
* limit (undefined)
* offset (undefined)

### users.user_id.orders.get
Retrieves a set of Order objects associated to a User.


```js
etsy.users.user_id.orders.get({
  "user_id": null
}, context)
```

#### Parameters
* user_id (undefined) **required**
* limit (undefined)
* offset (undefined)

### users.user_id.receipts.get
Retrieves a set of Receipt objects associated to a User.


```js
etsy.users.user_id.receipts.get({
  "user_id": null
}, context)
```

#### Parameters
* user_id (undefined) **required**
* limit (undefined)
* offset (undefined)

### users.user_id.transactions.get
Retrieves a set of Transaction objects associated to a User.


```js
etsy.users.user_id.transactions.get({
  "user_id": null
}, context)
```

#### Parameters
* user_id (undefined) **required**
* limit (undefined)
* offset (undefined)

### users.user_id.charges.get
Retrieves a set of BillCharge objects associated to a User.


```js
etsy.users.user_id.charges.get({
  "user_id": null
}, context)
```

#### Parameters
* user_id (undefined) **required**
* limit (undefined)
* offset (undefined)

### users.user_id.payments.get
Retrieves a set of BillPayment objects associated to a User.


```js
etsy.users.user_id.payments.get({
  "user_id": null
}, context)
```

#### Parameters
* user_id (undefined) **required**
* limit (undefined)
* offset (undefined)

### users.user_id.shipping.templates.get
Retrieves a set of ShippingTemplate objects associated to a User.


```js
etsy.users.user_id.shipping.templates.get({
  "user_id": null
}, context)
```

#### Parameters
* user_id (undefined) **required**
* limit (undefined)
* offset (undefined)

### users.user_id.payments.templates.get
Retrieves a set of PaymentTemplate objects associated to a User.


```js
etsy.users.user_id.payments.templates.get({
  "user_id": null
}, context)
```

#### Parameters
* user_id (undefined) **required**

### users.user_id.addresses.get
Retrieves a set of UserAddress objects associated to a User.


```js
etsy.users.user_id.addresses.get({
  "user_id": null
}, context)
```

#### Parameters
* user_id (undefined) **required**

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

#### Parameters
* name (undefined) **required**
* first_line (undefined) **required**
* second_line (undefined)
* city (undefined) **required**
* state (undefined)
* zip (undefined) **required**
* country_id (undefined) **required**
* user_id (undefined) **required**

### payments.templates.payment_template_id.get
Retrieves a PaymentTemplate by id.


```js
etsy.payments.templates.payment_template_id.get({
  "payment_template_id": null
}, context)
```

#### Parameters
* payment_template_id (undefined) **required**

### payments.templates.payment_template_id.put
Updates a PaymentTemplate


```js
etsy.payments.templates.payment_template_id.put({
  "payment_template_id": null
}, context)
```

#### Parameters
* allow_check (undefined)
* allow_mo (undefined)
* allow_other (undefined)
* allow_paypal (undefined)
* paypal_email (undefined)
* name (undefined)
* first_line (undefined)
* second_line (undefined)
* city (undefined)
* state (undefined)
* zip (undefined)
* country_id (undefined)
* payment_template_id (undefined) **required**

### payments.templates.post
Creates a new PaymentTemplate


```js
etsy.payments.templates.post({}, context)
```

#### Parameters
* allow_check (undefined)
* allow_mo (undefined)
* allow_other (undefined)
* allow_paypal (undefined)
* paypal_email (undefined)
* name (undefined)
* first_line (undefined)
* second_line (undefined)
* city (undefined)
* state (undefined)
* zip (undefined)
* country_id (undefined)

### payments.listing_payment_id.get
Retrieves a ListingPayment by id.


```js
etsy.payments.listing_payment_id.get({
  "listing_payment_id": null
}, context)
```

#### Parameters
* listing_payment_id (undefined) **required**

### users.user_id.avatar.post
Upload a new user avatar image


```js
etsy.users.user_id.avatar.post({}, context)
```

#### Parameters
* src (undefined)
* image (undefined)
* user_id (undefined)

### users.user_id.avatar.src.get
Get avatar image source


```js
etsy.users.user_id.avatar.src.get({}, context)
```

#### Parameters
* user_id (undefined)

### users.user_id.addresses.user_address_id.get
Retrieves a UserAddress by id.


```js
etsy.users.user_id.addresses.user_address_id.get({
  "user_address_id": null
}, context)
```

#### Parameters
* user_address_id (undefined) **required**

### users.user_id.addresses.user_address_id.put
Updates a UserAddress with the given id.


```js
etsy.users.user_id.addresses.user_address_id.put({
  "user_address_id": null
}, context)
```

#### Parameters
* name (undefined)
* first_line (undefined)
* second_line (undefined)
* city (undefined)
* state (undefined)
* zip (undefined)
* country_id (undefined)
* user_address_id (undefined) **required**

### users.user_id.addresses.user_address_id.delete
Deletes the UserAddress with the given id.


```js
etsy.users.user_id.addresses.user_address_id.delete({
  "user_address_id": null
}, context)
```

#### Parameters
* user_address_id (undefined) **required**

### featured.users.get
Finds all FeaturedUser.


```js
etsy.featured.users.get({}, context)
```

#### Parameters
* limit (undefined)
* offset (undefined)

### featured.users.featured_user_id.get
Retrieves a FeaturedUser by id.


```js
etsy.featured.users.featured_user_id.get({
  "featured_user_id": null
}, context)
```

#### Parameters
* featured_user_id (undefined) **required**

### .get
Get a list of all methods available.


```js
etsy..get(null, context)
```


### server.epoch.get
Get server time, in epoch seconds notation.


```js
etsy.server.epoch.get(null, context)
```


### server.ping.get
Check that the server is alive.


```js
etsy.server.ping.get(null, context)
```


