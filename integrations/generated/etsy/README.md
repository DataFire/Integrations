# @datafire/etsy
Bring Etsy's handmade marketplace and community into your apps.

## Operation: countries.country_id.get
Retrieves a Country by id.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "country_id": {}
  },
  "additionalProperties": false,
  "required": [
    "country_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: countries.get
Finds all Country.

### Input Schema
```json
{}
```
### Output Schema
```json
{}
```
## Operation: users.user_id.favorites.listings.get
Finds all favorite listings for a user

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "user_id": {},
    "limit": {},
    "offset": {}
  },
  "additionalProperties": false,
  "required": [
    "user_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: users.user_id.favorites.listings.listing_id.get
Finds a favorite listing for a user

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "user_id": {},
    "listing_id": {}
  },
  "additionalProperties": false,
  "required": [
    "user_id",
    "listing_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: users.user_id.favorites.listings.listing_id.post
Creates a new favorite listing for a user

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "user_id": {},
    "listing_id": {}
  },
  "additionalProperties": false,
  "required": [
    "user_id",
    "listing_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: users.user_id.favorites.listings.listing_id.delete
Delete a favorite listing for a user

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "user_id": {},
    "listing_id": {}
  },
  "additionalProperties": false,
  "required": [
    "user_id",
    "listing_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: users.user_id.favorites.users.get
Finds all favorite users for a user

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "user_id": {},
    "limit": {},
    "offset": {}
  },
  "additionalProperties": false,
  "required": [
    "user_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: users.user_id.favorites.users.target_user_id.get
Finds a favorite user for a user

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "user_id": {},
    "target_user_id": {}
  },
  "additionalProperties": false,
  "required": [
    "user_id",
    "target_user_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: users.user_id.favorites.users.target_user_id.post
Creates a new favorite listing for a user

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "user_id": {},
    "target_user_id": {},
    "user_id_path": {},
    "target_user_id_path": {}
  },
  "additionalProperties": false,
  "required": [
    "user_id",
    "target_user_id",
    "user_id_path",
    "target_user_id_path"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: users.user_id.favorites.users.target_user_id.delete
Delete a favorite listing for a user

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "user_id": {},
    "target_user_id": {}
  },
  "additionalProperties": false,
  "required": [
    "user_id",
    "target_user_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: homepages.pickers.get
Finds all FeaturedListingPicker in scope active.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "limit": {},
    "offset": {}
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: homepages.pickers.featured_listing_picker_id.get
Retrieves a FeaturedListingPicker by id.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "featured_listing_picker_id": {}
  },
  "additionalProperties": false,
  "required": [
    "featured_listing_picker_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: homepages.pickers.featured_listing_picker_id.featured.get
Retrieves a set of FeaturedListing objects associated to a FeaturedListingPicker.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "featured_listing_picker_id": {},
    "limit": {},
    "offset": {}
  },
  "additionalProperties": false,
  "required": [
    "featured_listing_picker_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: homepages.pickers.featured_listing_picker_id.listings.get
Retrieves a set of Listing objects associated to a FeaturedListingPicker.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "featured_listing_picker_id": {},
    "limit": {},
    "offset": {}
  },
  "additionalProperties": false,
  "required": [
    "featured_listing_picker_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: homepages.pickers.featured_listing_picker_id.listings.active.get
Retrieves a set of Listing objects associated to a FeaturedListingPicker in scope active.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "featured_listing_picker_id": {},
    "limit": {},
    "offset": {}
  },
  "additionalProperties": false,
  "required": [
    "featured_listing_picker_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: homepages.listings.get
Finds all FeaturedListings regardless of Listing state

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "limit": {},
    "offset": {}
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: homepages.listings.active.get
Finds all FeaturedListings that point to active Listings

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "limit": {},
    "offset": {}
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: homepages.listings.featured_listing_id.get
Retrieves a FeaturedListing by id.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "featured_listing_id": {}
  },
  "additionalProperties": false,
  "required": [
    "featured_listing_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: homepages.listings.featured_listing_id.picker.get
Retrieves a set of FeaturedListingPicker objects associated to a FeaturedListing.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "featured_listing_id": {}
  },
  "additionalProperties": false,
  "required": [
    "featured_listing_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: homepages.listings.featured_listing_id.listing.get
Retrieves a set of Listing objects associated to a FeaturedListing.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "featured_listing_id": {}
  },
  "additionalProperties": false,
  "required": [
    "featured_listing_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: listings.listing_id.images.listing_image_id.get
Retrieves a ListingImage by id.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "listing_id": {},
    "listing_image_id": {}
  },
  "additionalProperties": false,
  "required": [
    "listing_id",
    "listing_image_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: listings.listing_id.images.listing_image_id.delete
Deletes a listing image

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "listing_id": {},
    "listing_image_id": {}
  },
  "additionalProperties": false,
  "required": [
    "listing_id",
    "listing_image_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: listings.listing_id.images.post
Upload a new listing image

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "image": {},
    "listing_id": {}
  },
  "additionalProperties": false,
  "required": [
    "image",
    "listing_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: listings.listing_id.images.get
Retrieves a set of ListingImage objects associated to a Listing.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "listing_id": {}
  },
  "additionalProperties": false,
  "required": [
    "listing_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: listings.listing_id.get
Retrieves a Listing by id.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "listing_id": {}
  },
  "additionalProperties": false,
  "required": [
    "listing_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: listings.listing_id.put
Updates a Listing

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "quantity": {},
    "title": {},
    "description": {},
    "price": {},
    "materials": {},
    "renew": {},
    "tags": {},
    "shipping_template_id": {},
    "shop_section_id": {},
    "state": {
      "enum": [
        "active",
        "inactive"
      ]
    },
    "listing_id": {}
  },
  "additionalProperties": false,
  "required": [
    "listing_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: listings.listing_id.delete
Deletes a Listing

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "listing_id": {}
  },
  "additionalProperties": false,
  "required": [
    "listing_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: listings.listing_id.favored_by.get
Retrieves a set of FavoriteListing objects associated to a Listing.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "listing_id": {},
    "limit": {},
    "offset": {}
  },
  "additionalProperties": false,
  "required": [
    "listing_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: listings.listing_id.shipping.info.get
Retrieves a set of ShippingInfo objects associated to a Listing.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "listing_id": {}
  },
  "additionalProperties": false,
  "required": [
    "listing_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: listings.listing_id.shipping.info.post
Creates a new ShippingInfo.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "origin_country_id": {},
    "destination_country_id": {},
    "primary_cost": {},
    "secondary_cost": {},
    "region_id": {},
    "listing_id": {}
  },
  "additionalProperties": false,
  "required": [
    "origin_country_id",
    "primary_cost",
    "secondary_cost",
    "listing_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: listings.listing_id.payments.get
Retrieves a set of ListingPayment objects associated to a Listing.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "listing_id": {}
  },
  "additionalProperties": false,
  "required": [
    "listing_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: listings.active.get
Finds all active Listing

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "limit": {},
    "offset": {},
    "keywords": {},
    "sort_on": {
      "enum": [
        "created",
        "price",
        "score"
      ]
    },
    "sort_order": {
      "enum": [
        "up",
        "down"
      ]
    },
    "min_price": {},
    "max_price": {},
    "color": {},
    "color_accuracy": {},
    "tags": {},
    "materials": {},
    "category": {}
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: shops.shop_id.listings.active.get
Finds all active Listings associated with a Shop

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "limit": {},
    "offset": {},
    "shop_id": {},
    "keywords": {},
    "sort_on": {
      "enum": [
        "created",
        "price",
        "score"
      ]
    },
    "sort_order": {
      "enum": [
        "up",
        "down"
      ]
    },
    "min_price": {},
    "max_price": {},
    "color": {},
    "color_accuracy": {},
    "tags": {},
    "materials": {},
    "category": {}
  },
  "additionalProperties": false,
  "required": [
    "shop_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: listings.post
Creates a new Listing

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "quantity": {},
    "title": {},
    "description": {},
    "price": {},
    "materials": {},
    "tags": {},
    "shipping_template_id": {},
    "shop_section_id": {}
  },
  "additionalProperties": false,
  "required": [
    "quantity",
    "title",
    "description",
    "price",
    "tags",
    "shipping_template_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: orders.order_id.get
Retrieves a Order by id.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "order_id": {}
  },
  "additionalProperties": false,
  "required": [
    "order_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: orders.order_id.receipts.get
Retrieves a set of Receipt objects associated to a Order.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "order_id": {},
    "limit": {},
    "offset": {}
  },
  "additionalProperties": false,
  "required": [
    "order_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: receipts.receipt_id.get
Retrieves a Receipt by id.

### Input Schema
```json
{}
```
### Output Schema
```json
{}
```
## Operation: receipts.receipt_id.put
Updates a Receipt

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "receipt_id": {},
    "was_paid": {},
    "was_shipped": {},
    "message_from_seller": {},
    "message_from_buyer": {}
  },
  "additionalProperties": false,
  "required": [
    "receipt_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: receipts.receipt_id.transactions.get
Retrieves a set of Transaction objects associated to a Receipt.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "receipt_id": {},
    "limit": {},
    "offset": {}
  },
  "additionalProperties": false,
  "required": [
    "receipt_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: users.user_id.recommended_listings.get
Get recommended listings for an authenticated member. The number of listings returned may not match the specified limit if there is no activity from recommended shops.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "user_id": {},
    "limit": {},
    "excluded_listing_ids": {}
  },
  "additionalProperties": false,
  "required": [
    "user_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: users.user_id.recommended_listings.rejects.listing_ids.post
Registers rejections of recommended listings. Affects future recommended listings.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "user_id": {},
    "listing_ids": {}
  },
  "additionalProperties": false,
  "required": [
    "user_id",
    "listing_ids"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: users.user_id.recommended_listings.views.listing_ids.post
Register viewings of recommended listings. Affects future recommended listings.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "user_id": {},
    "listing_ids": {}
  },
  "additionalProperties": false,
  "required": [
    "user_id",
    "listing_ids"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: regions.region_id.get
Retrieves a Region by id.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "region_id": {}
  },
  "additionalProperties": false,
  "required": [
    "region_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: regions.get
Finds all Region.

### Input Schema
```json
{}
```
### Output Schema
```json
{}
```
## Operation: shipping.info.shipping_info_id.get
Retrieves a ShippingInfo by id.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "shipping_info_id": {}
  },
  "additionalProperties": false,
  "required": [
    "shipping_info_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: shipping.info.shipping_info_id.put
Updates a ShippingInfo with the given id.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "origin_country_id": {},
    "destination_country_id": {},
    "primary_cost": {},
    "secondary_cost": {},
    "listing_id": {},
    "region_id": {},
    "shipping_info_id": {}
  },
  "additionalProperties": false,
  "required": [
    "shipping_info_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: shipping.info.shipping_info_id.delete
Deletes the ShippingInfo with the given id.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "shipping_info_id": {}
  },
  "additionalProperties": false,
  "required": [
    "shipping_info_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: shipping.templates.entries.shipping_template_entry_id.get
Retrieves a ShippingTemplateEntry by id.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "shipping_template_entry_id": {}
  },
  "additionalProperties": false,
  "required": [
    "shipping_template_entry_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: shipping.templates.entries.shipping_template_entry_id.put
Updates a ShippingTemplateEntry

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "destination_country_id": {},
    "primary_cost": {},
    "secondary_cost": {},
    "shipping_template_entry_id": {}
  },
  "additionalProperties": false,
  "required": [
    "shipping_template_entry_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: shipping.templates.entries.shipping_template_entry_id.delete
Deletes a ShippingTemplateEntry

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "shipping_template_entry_id": {}
  },
  "additionalProperties": false,
  "required": [
    "shipping_template_entry_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: shipping.templates.entries.post
Creates a new ShippingTemplateEntry

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "shipping_template_id": {},
    "destination_country_id": {},
    "primary_cost": {},
    "secondary_cost": {},
    "destination_region_id": {}
  },
  "additionalProperties": false,
  "required": [
    "shipping_template_id",
    "primary_cost",
    "secondary_cost"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: shipping.templates.shipping_template_id.get
Retrieves a ShippingTemplate by id.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "shipping_template_id": {}
  },
  "additionalProperties": false,
  "required": [
    "shipping_template_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: shipping.templates.shipping_template_id.delete
Deletes the ShippingTemplate with the given id.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "shipping_template_id": {}
  },
  "additionalProperties": false,
  "required": [
    "shipping_template_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: shipping.templates.shipping_template_id.put
Updates a ShippingTemplate

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "title": {},
    "origin_country_id": {},
    "shipping_template_id": {}
  },
  "additionalProperties": false,
  "required": [
    "shipping_template_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: shipping.templates.shipping_template_id.entries.get
Retrieves a set of ShippingTemplateEntry objects associated to a ShippingTemplate.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "shipping_template_id": {},
    "limit": {},
    "offset": {}
  },
  "additionalProperties": false,
  "required": [
    "shipping_template_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: shipping.templates.post
Creates a new ShippingTemplate

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "title": {},
    "origin_country_id": {},
    "destination_country_id": {},
    "primary_cost": {},
    "secondary_cost": {},
    "destination_region_id": {}
  },
  "additionalProperties": false,
  "required": [
    "title",
    "origin_country_id",
    "primary_cost",
    "secondary_cost"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: shops.shop_id.get
Retrieves a Shop by id.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "shop_id": {}
  },
  "additionalProperties": false,
  "required": [
    "shop_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: shops.shop_id.put
Updates a Shop

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "title": {},
    "announcement": {},
    "is_refusing_alchemy": {},
    "alchemy_message": {},
    "sale_message": {},
    "policy_welcome": {},
    "policy_payment": {},
    "policy_shipping": {},
    "policy_refunds": {},
    "policy_additional": {},
    "shop_id": {}
  },
  "additionalProperties": false,
  "required": [
    "shop_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: shops.shop_id.receipts.get
Retrieves a set of Receipt objects associated to a Shop.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "shop_id": {},
    "limit": {},
    "offset": {}
  },
  "additionalProperties": false,
  "required": [
    "shop_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: shops.shop_id.transactions.get
Retrieves a set of Transaction objects associated to a Shop.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "shop_id": {},
    "limit": {},
    "offset": {}
  },
  "additionalProperties": false,
  "required": [
    "shop_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: shops.shop_id.sections.get
Retrieves a set of ShopSection objects associated to a Shop.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "shop_id": {}
  },
  "additionalProperties": false,
  "required": [
    "shop_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: shops.get
Finds all Shops. If there is a keywords parameter, finds shops with shop_name starting with keywords.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "shop_name": {},
    "limit": {},
    "offset": {}
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: shops.shop_id.listings.featured.get
Retrieves Listings associated to a Shop that are featured

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "shop_id": {},
    "limit": {},
    "offset": {}
  },
  "additionalProperties": false,
  "required": [
    "shop_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: shops.shop_id.listings.inactive.get
Retrieves Listings associated to a Shop that are inactive

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "shop_id": {},
    "limit": {},
    "offset": {}
  },
  "additionalProperties": false,
  "required": [
    "shop_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: shops.shop_id.listings.expired.get
Retrieves Listings associated to a Shop that are expired

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "shop_id": {},
    "limit": {},
    "offset": {}
  },
  "additionalProperties": false,
  "required": [
    "shop_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: shops.shop_id.listings.inactive.listing_id.get
Retrieves a Listing associated to a Shop that is inactive

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "shop_id": {},
    "listing_id": {}
  },
  "additionalProperties": false,
  "required": [
    "shop_id",
    "listing_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: shops.shop_id.listings.expired.listing_id.get
Retrieves a Listing associated to a Shop that is inactive

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "shop_id": {},
    "listing_id": {}
  },
  "additionalProperties": false,
  "required": [
    "shop_id",
    "listing_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: shops.shop_id.appearance.banner.post
Upload a new shop banner image

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "image": {},
    "shop_id": {}
  },
  "additionalProperties": false,
  "required": [
    "image",
    "shop_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: shops.shop_id.appearance.banner.shop_banner_id.delete
Deletes a shop banner image

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "shop_id": {},
    "shop_banner_id": {}
  },
  "additionalProperties": false,
  "required": [
    "shop_id",
    "shop_banner_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: sections.shop_section_id.get
Retrieves a ShopSection by id.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "shop_section_id": {}
  },
  "additionalProperties": false,
  "required": [
    "shop_section_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: sections.shop_section_id.put
Updates a ShopSection with the given id.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "title": {},
    "rank": {},
    "user_id": {},
    "shop_section_id": {}
  },
  "additionalProperties": false,
  "required": [
    "shop_section_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: sections.shop_section_id.delete
Deletes the ShopSection with the given id.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "shop_section_id": {}
  },
  "additionalProperties": false,
  "required": [
    "shop_section_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: sections.post
Creates a new ShopSection.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "title": {},
    "user_id": {}
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: categories.tag.get
Retrieves a top-level Category by tag.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "tag": {}
  },
  "additionalProperties": false,
  "required": [
    "tag"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: categories.tag.subtag.get
Retrieves a second-level Category by tag and subtag.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "tag": {},
    "subtag": {}
  },
  "additionalProperties": false,
  "required": [
    "tag",
    "subtag"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: categories.tag.subtag.subsubtag.get
Retrieves a third-level Category by tag, subtag and subsubtag.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "tag": {},
    "subtag": {},
    "subsubtag": {}
  },
  "additionalProperties": false,
  "required": [
    "tag",
    "subtag",
    "subsubtag"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: taxonomy.categories.get
Retrieves all top-level Categories.

### Input Schema
```json
{}
```
### Output Schema
```json
{}
```
## Operation: taxonomy.categories.tag.get
Retrieves children of a top-level Category by tag.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "tag": {}
  },
  "additionalProperties": false,
  "required": [
    "tag"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: taxonomy.categories.tag.subtag.get
Retrieves children of a second-level Category by tag and subtag.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "tag": {},
    "subtag": {}
  },
  "additionalProperties": false,
  "required": [
    "tag",
    "subtag"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: taxonomy.tags.get
Retrieves all related tags for the given tag set.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "limit": {}
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: taxonomy.tags.tags.get
Retrieves all related tags for the given tag set.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "tags": {},
    "limit": {}
  },
  "additionalProperties": false,
  "required": [
    "tags"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: transactions.transaction_id.get
Retrieves a Transaction by id.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "transaction_id": {}
  },
  "additionalProperties": false,
  "required": [
    "transaction_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: treasuries.treasury_id.get
Get a Treasury

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "treasury_id": {}
  },
  "additionalProperties": false,
  "required": [
    "treasury_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: treasuries.get
Search Treasuries or else List all Treasuries

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "keywords": {},
    "sort_on": {
      "enum": [
        "hotness",
        "created"
      ]
    },
    "sort_order": {
      "enum": [
        "up",
        "down"
      ]
    },
    "maturity": {
      "enum": [
        "safe_only",
        "safe_and_mature"
      ]
    },
    "detail_level": {
      "enum": [
        "low",
        "medium"
      ]
    },
    "limit": {},
    "offset": {}
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: users.user_id.treasuries.get
Get a user's Treasuries

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "user_id": {},
    "sort_on": {
      "enum": [
        "hotness",
        "created"
      ]
    },
    "sort_order": {
      "enum": [
        "up",
        "down"
      ]
    },
    "maturity": {
      "enum": [
        "safe_only",
        "safe_and_mature"
      ]
    },
    "detail_level": {
      "enum": [
        "low",
        "medium"
      ]
    },
    "limit": {},
    "offset": {}
  },
  "additionalProperties": false,
  "required": [
    "user_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: users.user_id.get
Retrieves a User by id.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "user_id": {}
  },
  "additionalProperties": false,
  "required": [
    "user_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: users.user_id.shops.get
Retrieves a set of Shop objects associated to a User.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "user_id": {},
    "limit": {},
    "offset": {}
  },
  "additionalProperties": false,
  "required": [
    "user_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: users.user_id.favored_by.get
Retrieves a set of FavoriteUser objects associated to a User.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "user_id": {},
    "limit": {},
    "offset": {}
  },
  "additionalProperties": false,
  "required": [
    "user_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: users.user_id.feedback.as_subject.get
Retrieves a set of Feedback objects associated to a User.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "user_id": {},
    "limit": {},
    "offset": {}
  },
  "additionalProperties": false,
  "required": [
    "user_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: users.user_id.feedback.as_author.get
Retrieves a set of Feedback objects associated to a User.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "user_id": {},
    "limit": {},
    "offset": {}
  },
  "additionalProperties": false,
  "required": [
    "user_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: users.user_id.feedback.as_buyer.get
Retrieves a set of Feedback objects associated to a User.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "user_id": {},
    "limit": {},
    "offset": {}
  },
  "additionalProperties": false,
  "required": [
    "user_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: users.user_id.feedback.as_seller.get
Retrieves a set of Feedback objects associated to a User.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "user_id": {},
    "limit": {},
    "offset": {}
  },
  "additionalProperties": false,
  "required": [
    "user_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: users.user_id.orders.get
Retrieves a set of Order objects associated to a User.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "user_id": {},
    "limit": {},
    "offset": {}
  },
  "additionalProperties": false,
  "required": [
    "user_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: users.user_id.receipts.get
Retrieves a set of Receipt objects associated to a User.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "user_id": {},
    "limit": {},
    "offset": {}
  },
  "additionalProperties": false,
  "required": [
    "user_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: users.user_id.transactions.get
Retrieves a set of Transaction objects associated to a User.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "user_id": {},
    "limit": {},
    "offset": {}
  },
  "additionalProperties": false,
  "required": [
    "user_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: users.user_id.charges.get
Retrieves a set of BillCharge objects associated to a User.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "user_id": {},
    "limit": {},
    "offset": {}
  },
  "additionalProperties": false,
  "required": [
    "user_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: users.user_id.payments.get
Retrieves a set of BillPayment objects associated to a User.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "user_id": {},
    "limit": {},
    "offset": {}
  },
  "additionalProperties": false,
  "required": [
    "user_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: users.user_id.shipping.templates.get
Retrieves a set of ShippingTemplate objects associated to a User.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "user_id": {},
    "limit": {},
    "offset": {}
  },
  "additionalProperties": false,
  "required": [
    "user_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: users.user_id.payments.templates.get
Retrieves a set of PaymentTemplate objects associated to a User.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "user_id": {}
  },
  "additionalProperties": false,
  "required": [
    "user_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: users.user_id.addresses.get
Retrieves a set of UserAddress objects associated to a User.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "user_id": {}
  },
  "additionalProperties": false,
  "required": [
    "user_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: users.user_id.addresses.post
Creates a new UserAddress.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "name": {},
    "first_line": {},
    "second_line": {},
    "city": {},
    "state": {},
    "zip": {},
    "country_id": {},
    "user_id": {}
  },
  "additionalProperties": false,
  "required": [
    "name",
    "first_line",
    "city",
    "zip",
    "country_id",
    "user_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: payments.templates.payment_template_id.get
Retrieves a PaymentTemplate by id.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "payment_template_id": {}
  },
  "additionalProperties": false,
  "required": [
    "payment_template_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: payments.templates.payment_template_id.put
Updates a PaymentTemplate

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "allow_check": {},
    "allow_mo": {},
    "allow_other": {},
    "allow_paypal": {},
    "paypal_email": {},
    "name": {},
    "first_line": {},
    "second_line": {},
    "city": {},
    "state": {},
    "zip": {},
    "country_id": {},
    "payment_template_id": {}
  },
  "additionalProperties": false,
  "required": [
    "payment_template_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: payments.templates.post
Creates a new PaymentTemplate

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "allow_check": {},
    "allow_mo": {},
    "allow_other": {},
    "allow_paypal": {},
    "paypal_email": {},
    "name": {},
    "first_line": {},
    "second_line": {},
    "city": {},
    "state": {},
    "zip": {},
    "country_id": {}
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: payments.listing_payment_id.get
Retrieves a ListingPayment by id.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "listing_payment_id": {}
  },
  "additionalProperties": false,
  "required": [
    "listing_payment_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: users.user_id.avatar.post
Upload a new user avatar image

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "src": {},
    "image": {},
    "user_id": {}
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: users.user_id.avatar.src.get
Get avatar image source

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "user_id": {}
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: users.user_id.addresses.user_address_id.get
Retrieves a UserAddress by id.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "user_address_id": {}
  },
  "additionalProperties": false,
  "required": [
    "user_address_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: users.user_id.addresses.user_address_id.put
Updates a UserAddress with the given id.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "name": {},
    "first_line": {},
    "second_line": {},
    "city": {},
    "state": {},
    "zip": {},
    "country_id": {},
    "user_address_id": {}
  },
  "additionalProperties": false,
  "required": [
    "user_address_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: users.user_id.addresses.user_address_id.delete
Deletes the UserAddress with the given id.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "user_address_id": {}
  },
  "additionalProperties": false,
  "required": [
    "user_address_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: featured.users.get
Finds all FeaturedUser.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "limit": {},
    "offset": {}
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: featured.users.featured_user_id.get
Retrieves a FeaturedUser by id.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "featured_user_id": {}
  },
  "additionalProperties": false,
  "required": [
    "featured_user_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: .get
Get a list of all methods available.

### Input Schema
```json
{}
```
### Output Schema
```json
{}
```
## Operation: server.epoch.get
Get server time, in epoch seconds notation.

### Input Schema
```json
{}
```
### Output Schema
```json
{}
```
## Operation: server.ping.get
Check that the server is alive.

### Input Schema
```json
{}
```
### Output Schema
```json
{}
```
