# @datafire/reverb
reverb

## Operation: oauthCallback


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "code": {
      "title": "code",
      "type": "string"
    }
  },
  "required": [
    "code"
  ]
}
```
### Output Schema
```json
{
  "properties": {
    "access_token": {
      "type": "string"
    },
    "refresh_token": {
      "type": "string"
    },
    "token_type": {
      "type": "string"
    },
    "scope": {
      "type": "string"
    },
    "expiration": {
      "type": "string"
    }
  }
}
```
## Operation: oauthRefresh


### Input Schema
```json
{}
```
### Output Schema
```json
{
  "properties": {
    "access_token": {
      "type": "string"
    },
    "refresh_token": {
      "type": "string"
    },
    "token_type": {
      "type": "string"
    },
    "scope": {
      "type": "string"
    },
    "expiration": {
      "type": "string"
    }
  }
}
```
## Operation: accounts.post
Create an account.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "body": {
      "properties": {
        "accept_terms": {
          "description": "Accept the Reverb terms of use and privacy policy",
          "type": "boolean"
        },
        "email": {
          "description": "Email address.",
          "type": "string"
        },
        "first_name": {
          "description": "First Name",
          "type": "string"
        },
        "last_name": {
          "description": "Last Name",
          "type": "string"
        },
        "newsletter_opt_in": {
          "description": "Subscribe to gear deals by email",
          "type": "boolean"
        },
        "password": {
          "description": "Password (at least 8 characters).",
          "type": "string"
        }
      },
      "required": [
        "email",
        "password",
        "first_name",
        "last_name"
      ],
      "type": "object"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: articles.get
See all Reverb blog posts

### Input Schema
```json
{}
```
### Output Schema
```json
{}
```
## Operation: articles.featured.get
See featured Reverb blog posts

### Input Schema
```json
{}
```
### Output Schema
```json
{}
```
## Operation: articles.recently_featured.get


### Input Schema
```json
{}
```
### Output Schema
```json
{}
```
## Operation: articles.slug.get
Display a single article

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "slug": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "slug"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: articles.slug.related_listings.get
Find listings related to an article

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "slug": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "slug"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: auth.forgot_password.post
Send a password reset email

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "body": {
      "properties": {
        "email": {
          "type": "string"
        }
      },
      "required": [
        "email"
      ],
      "type": "object"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: auth.logout.put
Logout (primarily for mobile clients)

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "body": {
      "properties": {
        "device_token": {
          "type": "string"
        },
        "device_type": {
          "enum": [
            "ios",
            "android"
          ],
          "type": "string"
        }
      },
      "required": [
        "device_type"
      ],
      "type": "object"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: autosuggest.get
Autosuggest terms for searches

### Input Schema
```json
{}
```
### Output Schema
```json
{}
```
## Operation: cart.get
Get all cart items

### Input Schema
```json
{}
```
### Output Schema
```json
{}
```
## Operation: cart.move_to_watch_list.cart_item_id.post
Remove a cart item and add it to watch list

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "cart_item_id": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "cart_item_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: cart.id.delete
Remove a product from the cart

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: cart.id.post
Add product to the cart

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: cart.id.put
Update cart item details

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: categories.get
List of supported product categories

### Input Schema
```json
{}
```
### Output Schema
```json
{}
```
## Operation: categories.flat.get


### Input Schema
```json
{}
```
### Output Schema
```json
{}
```
## Operation: categories.product_type.category.get
Get subcategory details

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "product_type": {
      "type": "string"
    },
    "category": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "product_type",
    "category"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: categories.uuid.get
Get category details

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "uuid": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "uuid"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: collections.get
List of curated collections

### Input Schema
```json
{}
```
### Output Schema
```json
{}
```
## Operation: collections.slug.get
Collection details

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "slug": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "slug"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: comparison_shopping_pages.get
Returns a set of comparison shopping pages based on the current params

### Input Schema
```json
{}
```
### Output Schema
```json
{}
```
## Operation: comparison_shopping_pages.id.get
Show comparison shopping page

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: comparison_shopping_pages.id.listings.get
Return new or used listings for a comparison shopping page

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string"
    },
    "condition": {
      "type": "string",
      "description": "Condition of the listing"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "condition"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: conversations.id.offer.post
Make an offer to the other participant in the conversation

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string"
    },
    "body": {
      "properties": {
        "message": {
          "description": "Message to include with counter offer",
          "type": "string"
        },
        "price": {
          "properties": {
            "amount": {
              "description": "The amount of money being expressed, as a decimal number",
              "type": "string"
            },
            "currency": {
              "description": "The currency the money will be expressed in",
              "enum": [
                "USD",
                "CAD",
                "EUR",
                "GBP",
                "AUD",
                "JPY",
                "NZD",
                "MXN"
              ],
              "type": "string"
            }
          },
          "required": [
            "amount",
            "currency"
          ],
          "type": "object"
        },
        "shipping_price": {
          "description": "Shipping price (sellers only)",
          "properties": {
            "amount": {
              "description": "The amount of money being expressed, as a decimal number",
              "type": "string"
            },
            "currency": {
              "description": "The currency the money will be expressed in",
              "enum": [
                "USD",
                "CAD",
                "EUR",
                "GBP",
                "AUD",
                "JPY",
                "NZD",
                "MXN"
              ],
              "type": "string"
            }
          },
          "required": [
            "amount",
            "currency"
          ],
          "type": "object"
        }
      },
      "required": [
        "price"
      ],
      "type": "object"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: countries.get
Retrieve a list of country codes with corresponding subregions

### Input Schema
```json
{}
```
### Output Schema
```json
{}
```
## Operation: currencies.display.get
List of supported display currencies for browsing listings

### Input Schema
```json
{}
```
### Output Schema
```json
{}
```
## Operation: currencies.listing.get
List of supported listing currencies for shops

### Input Schema
```json
{}
```
### Output Schema
```json
{}
```
## Operation: feedback.feedback_id.get
Feedback details

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "feedback_id": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "feedback_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: handpicked.slug.get
Handpicked collection details

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "slug": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "slug"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: listing_conditions.get
List of supported product conditions

### Input Schema
```json
{}
```
### Output Schema
```json
{}
```
## Operation: listings.get
Default search of listings includes only used & handmade. Add a filter to view all listings or use the /listings/all endpoint.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "query": {
      "type": "string",
      "description": "Search query."
    },
    "auction_price_max": {
      "type": "number",
      "format": "float",
      "description": "Maximum current auction price"
    },
    "category": {
      "type": "string",
      "description": "Category slug from /api/categories"
    },
    "product_type": {
      "type": "string",
      "description": "Product type slug from /api/categories"
    },
    "conditions": {
      "type": "array",
      "description": "Condition: all,new,b-stock,used,non-functioning"
    },
    "decade": {
      "type": "string",
      "description": "Decade: e.g. 1970s, early 70s"
    },
    "finish": {
      "type": "string",
      "description": "Visual finish of the item, common for guitars"
    },
    "handmade": {
      "type": "boolean",
      "description": "Handmade items only"
    },
    "item_city": {
      "type": "string",
      "description": "City where item is located"
    },
    "item_country": {
      "type": "string",
      "description": "DEPRECATED - Country code where item is located"
    },
    "item_region": {
      "type": "string",
      "description": "Country code where item is located"
    },
    "item_state": {
      "type": "string",
      "description": "State or region code where item is located"
    },
    "make": {
      "type": "array",
      "description": "Make(s)/brand of item (e.g. Fender). Can take a single value or an array."
    },
    "model": {
      "type": "string",
      "description": "Model of item (e.g. Stratocaster)"
    },
    "must_not": {
      "type": "string",
      "description": "Search term negation. If you want to exclude a term, add it here"
    },
    "price_max": {
      "type": "number",
      "format": "float",
      "description": "Maximum price of search results (USD)"
    },
    "price_min": {
      "type": "number",
      "format": "float",
      "description": "Minimum price of search results (USD)"
    },
    "currency": {
      "type": "string",
      "description": "The currency to be used for the price filters"
    },
    "year_max": {
      "type": "integer",
      "description": "Maximum year of manufacture"
    },
    "year_min": {
      "type": "integer",
      "description": "Minumum year of manufacture"
    },
    "accepts_gift_cards": {
      "type": "boolean",
      "description": "If true, include only items that accept gift cards"
    },
    "preferred_seller": {
      "type": "boolean",
      "description": "If true, include only items by Reverb Preferred Sellers"
    },
    "shop": {
      "type": "string",
      "description": "Slug of shop to search"
    },
    "shop_id": {
      "type": "string",
      "description": "ID of shop to search"
    },
    "listing_type": {
      "type": "string",
      "description": "Type of listing: auctions,offers"
    },
    "ships_to": {
      "type": "string",
      "description": "Limit search to items that ship to this country code"
    },
    "exclude_auctions": {
      "type": "boolean",
      "description": "If true, exclude auctions"
    },
    "accepts_payment_plans": {
      "type": "boolean",
      "description": "If true, only show items that can be purchased with a payment plan"
    },
    "watchers_count_min": {
      "type": "integer",
      "description": "Minimum number of watchers (used to find popular items)"
    },
    "page": {
      "type": "integer"
    },
    "per_page": {
      "type": "integer"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: listings.post
Create a listing

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "body": {
      "properties": {
        "categories": {
          "items": {
            "properties": {
              "uuid": {
                "description": "UUID of the category for this listing.",
                "type": "string"
              }
            },
            "type": "object"
          },
          "type": "array"
        },
        "condition": {
          "description": "Condition",
          "properties": {
            "uuid": {
              "description": "Condition UUID",
              "enum": [
                "fbf35668-96a0-4baa-bcde-ab18d6b1b329",
                "6a9dfcad-600b-46c8-9e08-ce6e5057921e",
                "98777886-76d0-44c8-865e-bb40e669e934",
                "f7a3f48c-972a-44c6-b01a-0cd27488d3f6",
                "ae4d9114-1bd7-4ec5-a4ba-6653af5ac84d",
                "df268ad1-c462-4ba6-b6db-e007e23922ea",
                "ac5b9c1e-dc78-466d-b0b3-7cf712967a48",
                "6db7df88-293b-4017-a1c1-cdb5e599fa1a",
                "9225283f-60c2-4413-ad18-1f5eba7a856f",
                "7c3f45de-2ae0-4c81-8400-fdb6b1d74890"
              ],
              "type": "string"
            }
          },
          "required": [
            "uuid"
          ],
          "type": "object"
        },
        "description": {
          "description": "Product description. Please keep formatting to a minimum.",
          "type": "string"
        },
        "finish": {
          "description": "Finish, e.g. 'Sunburst'",
          "type": "string"
        },
        "has_inventory": {
          "description": "Set true if selling more than one",
          "type": "boolean"
        },
        "inventory": {
          "description": "Number of items available for sale. Reverb will increment and decrement automatically.",
          "type": "integer"
        },
        "location": {
          "properties": {
            "country_code": {
              "description": "Ex: US",
              "type": "string"
            },
            "locality": {
              "description": "Ex: Chicago",
              "type": "string"
            },
            "region": {
              "description": "Ex: IL",
              "type": "string"
            }
          },
          "type": "object"
        },
        "make": {
          "description": "ex: Fender, Gibson",
          "type": "string"
        },
        "model": {
          "description": "ex: Stratocaster, SG",
          "type": "string"
        },
        "offers_enabled": {
          "description": "Whether the listing accepts negotiated offers (default: true)",
          "type": "boolean"
        },
        "origin_country_code": {
          "description": "Country of origin/manufacture, ISO code (e.g: US)",
          "type": "string"
        },
        "photos": {
          "description": "An array of image URLs. Ex: ['http://my.site.com/image.jpg']",
          "items": {
            "type": "string"
          },
          "type": "array"
        },
        "price": {
          "properties": {
            "amount": {
              "description": "The amount of money being expressed, as a decimal number",
              "type": "string"
            },
            "currency": {
              "description": "The currency the money will be expressed in",
              "enum": [
                "USD",
                "CAD",
                "EUR",
                "GBP",
                "AUD",
                "JPY",
                "NZD",
                "MXN"
              ],
              "type": "string"
            }
          },
          "required": [
            "amount",
            "currency"
          ],
          "type": "object"
        },
        "publish": {
          "description": "Publish your listing if draft",
          "type": "boolean"
        },
        "seller": {
          "properties": {
            "paypal_email": {
              "type": "string"
            }
          },
          "type": "object"
        },
        "seller_cost": {
          "description": "Cost of goods in your currency (internal use only, not shown to buyers)",
          "type": "string"
        },
        "shipping": {
          "properties": {
            "local": {
              "description": "True if you offer local pickup",
              "type": "boolean"
            },
            "rates": {
              "description": "List of shipping rates. Set to null to clear rates.",
              "items": {
                "properties": {
                  "rate": {
                    "properties": {
                      "amount": {
                        "description": "The amount of money being expressed, as a decimal number",
                        "type": "string"
                      },
                      "currency": {
                        "description": "The currency the money will be expressed in",
                        "enum": [
                          "USD",
                          "CAD",
                          "EUR",
                          "GBP",
                          "AUD",
                          "JPY",
                          "NZD",
                          "MXN"
                        ],
                        "type": "string"
                      }
                    },
                    "required": [
                      "amount",
                      "currency"
                    ],
                    "type": "object"
                  },
                  "region_code": {
                    "description": "Country code or subregion/superregion code. Full list of codes at /api/shipping/regions",
                    "type": "string"
                  }
                },
                "type": "object"
              },
              "type": "array"
            }
          },
          "type": "object"
        },
        "shipping_profile_id": {
          "description": "id of a shop's shipping profile",
          "type": "string"
        },
        "shipping_profile_name": {
          "description": "DEPRECATED, please use shipping_profile_id. Name of a shipping profile",
          "type": "string"
        },
        "sku": {
          "description": "Unique identifier for product",
          "type": "string"
        },
        "sold_as_is": {
          "description": "This item is sold As-Is and cannot be returned",
          "type": "boolean"
        },
        "tax_exempt": {
          "description": "Listing is exempt from taxes / VAT",
          "type": "boolean"
        },
        "title": {
          "description": "Title of your listing",
          "type": "string"
        },
        "upc": {
          "description": "Valid UPC code",
          "type": "string"
        },
        "year": {
          "description": "Supports many formats. Ex: 1979, mid-70s, late 90s",
          "type": "string"
        }
      },
      "type": "object"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: listings.all.get
All listings including used, handmade, and brand new

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "query": {
      "type": "string",
      "description": "Search query."
    },
    "auction_price_max": {
      "type": "number",
      "format": "float",
      "description": "Maximum current auction price"
    },
    "category": {
      "type": "string",
      "description": "Category slug from /api/categories"
    },
    "product_type": {
      "type": "string",
      "description": "Product type slug from /api/categories"
    },
    "conditions": {
      "type": "array",
      "description": "Condition: all,new,b-stock,used,non-functioning"
    },
    "decade": {
      "type": "string",
      "description": "Decade: e.g. 1970s, early 70s"
    },
    "finish": {
      "type": "string",
      "description": "Visual finish of the item, common for guitars"
    },
    "handmade": {
      "type": "boolean",
      "description": "Handmade items only"
    },
    "item_city": {
      "type": "string",
      "description": "City where item is located"
    },
    "item_country": {
      "type": "string",
      "description": "DEPRECATED - Country code where item is located"
    },
    "item_region": {
      "type": "string",
      "description": "Country code where item is located"
    },
    "item_state": {
      "type": "string",
      "description": "State or region code where item is located"
    },
    "make": {
      "type": "array",
      "description": "Make(s)/brand of item (e.g. Fender). Can take a single value or an array."
    },
    "model": {
      "type": "string",
      "description": "Model of item (e.g. Stratocaster)"
    },
    "must_not": {
      "type": "string",
      "description": "Search term negation. If you want to exclude a term, add it here"
    },
    "price_max": {
      "type": "number",
      "format": "float",
      "description": "Maximum price of search results (USD)"
    },
    "price_min": {
      "type": "number",
      "format": "float",
      "description": "Minimum price of search results (USD)"
    },
    "currency": {
      "type": "string",
      "description": "The currency to be used for the price filters"
    },
    "year_max": {
      "type": "integer",
      "description": "Maximum year of manufacture"
    },
    "year_min": {
      "type": "integer",
      "description": "Minumum year of manufacture"
    },
    "accepts_gift_cards": {
      "type": "boolean",
      "description": "If true, include only items that accept gift cards"
    },
    "preferred_seller": {
      "type": "boolean",
      "description": "If true, include only items by Reverb Preferred Sellers"
    },
    "shop": {
      "type": "string",
      "description": "Slug of shop to search"
    },
    "shop_id": {
      "type": "string",
      "description": "ID of shop to search"
    },
    "listing_type": {
      "type": "string",
      "description": "Type of listing: auctions,offers"
    },
    "ships_to": {
      "type": "string",
      "description": "Limit search to items that ship to this country code"
    },
    "exclude_auctions": {
      "type": "boolean",
      "description": "If true, exclude auctions"
    },
    "accepts_payment_plans": {
      "type": "boolean",
      "description": "If true, only show items that can be purchased with a payment plan"
    },
    "watchers_count_min": {
      "type": "integer",
      "description": "Minimum number of watchers (used to find popular items)"
    },
    "page": {
      "type": "integer"
    },
    "per_page": {
      "type": "integer"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: listings.id.offer.post
Make an offer to the seller of a listing

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string"
    },
    "body": {
      "properties": {
        "message": {
          "description": "Message to include with counter offer",
          "type": "string"
        },
        "price": {
          "description": "Offer price",
          "type": "string"
        },
        "shipping_price": {
          "description": "Shipping price (sellers only)",
          "type": "string"
        }
      },
      "required": [
        "price"
      ],
      "type": "object"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: listings.listing_id.bump.get
View available bump tiers and stats for a listing

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "listing_id": {
      "type": "string"
    }
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
## Operation: listings.listing_id.bump.budget_type.post
Bump a listing

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "listing_id": {
      "type": "string"
    },
    "budget_type": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "listing_id",
    "budget_type"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: listings.listing_id.conversations.post
Start a conversation with a seller

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "listing_id": {
      "type": "string"
    },
    "body": {
      "properties": {
        "body": {
          "type": "string"
        }
      },
      "required": [
        "body"
      ],
      "type": "object"
    }
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
## Operation: listings.listing_id.images.get
View the images associated with a particular listing

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "listing_id": {
      "type": "string"
    }
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
## Operation: listings.listing_id.images.image_id.delete
Delete an image from a listing

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "listing_id": {
      "type": "string"
    },
    "image_id": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "listing_id",
    "image_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: listings.listing_id.product_bundle.get
Find a product bundle attached to a listing

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "listing_id": {
      "type": "string"
    },
    "for_seller": {
      "type": "boolean",
      "description": "Pass to see non-live bundles as the seller"
    }
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
## Operation: listings.listing_id.sales.get
See all sales that include a listing.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "listing_id": {
      "type": "string"
    }
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
## Operation: listings.slug.delete
Delete a draft listing. Cannot be used on non-drafts.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "slug": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "slug"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: listings.slug.get
Listing details

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "slug": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "slug"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: listings.slug.put
Update a listing

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "slug": {
      "type": "string"
    },
    "body": {
      "properties": {
        "categories": {
          "items": {
            "properties": {
              "uuid": {
                "description": "UUID of the category for this listing.",
                "type": "string"
              }
            },
            "type": "object"
          },
          "type": "array"
        },
        "condition": {
          "description": "Condition",
          "properties": {
            "uuid": {
              "description": "Condition UUID",
              "enum": [
                "fbf35668-96a0-4baa-bcde-ab18d6b1b329",
                "6a9dfcad-600b-46c8-9e08-ce6e5057921e",
                "98777886-76d0-44c8-865e-bb40e669e934",
                "f7a3f48c-972a-44c6-b01a-0cd27488d3f6",
                "ae4d9114-1bd7-4ec5-a4ba-6653af5ac84d",
                "df268ad1-c462-4ba6-b6db-e007e23922ea",
                "ac5b9c1e-dc78-466d-b0b3-7cf712967a48",
                "6db7df88-293b-4017-a1c1-cdb5e599fa1a",
                "9225283f-60c2-4413-ad18-1f5eba7a856f",
                "7c3f45de-2ae0-4c81-8400-fdb6b1d74890"
              ],
              "type": "string"
            }
          },
          "required": [
            "uuid"
          ],
          "type": "object"
        },
        "description": {
          "description": "Product description. Please keep formatting to a minimum.",
          "type": "string"
        },
        "finish": {
          "description": "Finish, e.g. 'Sunburst'",
          "type": "string"
        },
        "has_inventory": {
          "description": "Set true if selling more than one",
          "type": "boolean"
        },
        "inventory": {
          "description": "Number of items available for sale. Reverb will increment and decrement automatically.",
          "type": "integer"
        },
        "location": {
          "properties": {
            "country_code": {
              "description": "Ex: US",
              "type": "string"
            },
            "locality": {
              "description": "Ex: Chicago",
              "type": "string"
            },
            "region": {
              "description": "Ex: IL",
              "type": "string"
            }
          },
          "type": "object"
        },
        "make": {
          "description": "ex: Fender, Gibson",
          "type": "string"
        },
        "model": {
          "description": "ex: Stratocaster, SG",
          "type": "string"
        },
        "offers_enabled": {
          "description": "Whether the listing accepts negotiated offers (default: true)",
          "type": "boolean"
        },
        "origin_country_code": {
          "description": "Country of origin/manufacture, ISO code (e.g: US)",
          "type": "string"
        },
        "photos": {
          "description": "An array of image URLs. Ex: ['http://my.site.com/image.jpg']",
          "items": {
            "type": "string"
          },
          "type": "array"
        },
        "price": {
          "properties": {
            "amount": {
              "description": "The amount of money being expressed, as a decimal number",
              "type": "string"
            },
            "currency": {
              "description": "The currency the money will be expressed in",
              "enum": [
                "USD",
                "CAD",
                "EUR",
                "GBP",
                "AUD",
                "JPY",
                "NZD",
                "MXN"
              ],
              "type": "string"
            }
          },
          "required": [
            "amount",
            "currency"
          ],
          "type": "object"
        },
        "publish": {
          "description": "Publish your listing if draft",
          "type": "boolean"
        },
        "seller": {
          "properties": {
            "paypal_email": {
              "type": "string"
            }
          },
          "type": "object"
        },
        "seller_cost": {
          "description": "Cost of goods in your currency (internal use only, not shown to buyers)",
          "type": "string"
        },
        "shipping": {
          "properties": {
            "local": {
              "description": "True if you offer local pickup",
              "type": "boolean"
            },
            "rates": {
              "description": "List of shipping rates. Set to null to clear rates.",
              "items": {
                "properties": {
                  "rate": {
                    "properties": {
                      "amount": {
                        "description": "The amount of money being expressed, as a decimal number",
                        "type": "string"
                      },
                      "currency": {
                        "description": "The currency the money will be expressed in",
                        "enum": [
                          "USD",
                          "CAD",
                          "EUR",
                          "GBP",
                          "AUD",
                          "JPY",
                          "NZD",
                          "MXN"
                        ],
                        "type": "string"
                      }
                    },
                    "required": [
                      "amount",
                      "currency"
                    ],
                    "type": "object"
                  },
                  "region_code": {
                    "description": "Country code or subregion/superregion code. Full list of codes at /api/shipping/regions",
                    "type": "string"
                  }
                },
                "type": "object"
              },
              "type": "array"
            }
          },
          "type": "object"
        },
        "shipping_profile_id": {
          "description": "id of a shop's shipping profile",
          "type": "string"
        },
        "shipping_profile_name": {
          "description": "DEPRECATED, please use shipping_profile_id. Name of a shipping profile",
          "type": "string"
        },
        "sku": {
          "description": "Unique identifier for product",
          "type": "string"
        },
        "sold_as_is": {
          "description": "This item is sold As-Is and cannot be returned",
          "type": "boolean"
        },
        "tax_exempt": {
          "description": "Listing is exempt from taxes / VAT",
          "type": "boolean"
        },
        "title": {
          "description": "Title of your listing",
          "type": "string"
        },
        "upc": {
          "description": "Valid UPC code",
          "type": "string"
        },
        "year": {
          "description": "Supports many formats. Ex: 1979, mid-70s, late 90s",
          "type": "string"
        }
      },
      "type": "object"
    }
  },
  "additionalProperties": false,
  "required": [
    "slug"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: listings.slug.edit.get
Edit listing.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "slug": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "slug"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: listings.slug.flag.post
Flag a listing for inappropriate content or fraud

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "slug": {
      "type": "string"
    },
    "body": {
      "properties": {
        "reason": {
          "description": "Valid reasons: 'Sexuality/nudity', 'Hateful or inappropriate speech', 'Item not as described or potential fraud', 'Trademark infringement', 'Other'",
          "type": "string"
        }
      },
      "required": [
        "reason"
      ],
      "type": "object"
    }
  },
  "additionalProperties": false,
  "required": [
    "slug"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: listings.slug.reviews.get
View reviews of a listing

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "slug": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "slug"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: listings.slug.reviews.post
Create a review for a listing

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "slug": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "slug"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: listings.slug.similar_listings.get
Listing details

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "slug": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "slug"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: my.account.get
Get account details

### Input Schema
```json
{}
```
### Output Schema
```json
{}
```
## Operation: my.account.put
Update account details

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "body": {
      "properties": {
        "currency": {
          "description": "The currency preference for the account",
          "type": "string"
        },
        "first_name": {
          "description": "The first name of the account holder",
          "type": "string"
        },
        "last_name": {
          "description": "The last name of the account holder",
          "type": "string"
        },
        "shipping_region_code": {
          "description": "The shipping region preference for the account",
          "type": "string"
        }
      },
      "type": "object"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: my.addresses.get
See all addresses in your address book

### Input Schema
```json
{}
```
### Output Schema
```json
{}
```
## Operation: my.addresses.post
Create a new address in your address book

### Input Schema
```json
{}
```
### Output Schema
```json
{}
```
## Operation: my.addresses.address_id.delete
Delete an existing address in your address book

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "address_id": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "address_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: my.addresses.address_id.put
Update an existing address in your address book

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "address_id": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "address_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: my.conversations.get
Get a list of your conversations

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "search": {
      "type": "string",
      "description": "Query string to search conversations by"
    },
    "unread_only": {
      "type": "boolean",
      "description": "Show unread conversations only"
    },
    "page": {
      "type": "integer"
    },
    "per_page": {
      "type": "integer"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: my.conversations.post
Start a conversation

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "body": {
      "properties": {
        "body": {
          "description": "The body of the message",
          "type": "string"
        },
        "cloudinary_photos": {
          "description": "An array of cloudinary data hashes (Reverb internal use only).",
          "items": {
            "type": "string"
          },
          "type": "array"
        },
        "listing_id": {
          "description": "The id of the listing being discussed",
          "type": "integer"
        },
        "recipient_id": {
          "description": "The id of the user you are trying to contact",
          "type": "integer"
        }
      },
      "required": [
        "body"
      ],
      "type": "object"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: my.conversations.conversation_id.messages.post
Send a message

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "conversation_id": {
      "type": "string"
    },
    "body": {
      "properties": {
        "body": {
          "type": "string"
        }
      },
      "required": [
        "body"
      ],
      "type": "object"
    }
  },
  "additionalProperties": false,
  "required": [
    "conversation_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: my.conversations.id.get
Display conversation details with messages in natural time order (oldest to newest)

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: my.conversations.id.put
Mark a conversation read/unread

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string"
    },
    "body": {
      "properties": {
        "read": {
          "description": "Should the conversation be marked as read",
          "type": "boolean"
        }
      },
      "type": "object"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: my.counts.get
Get your actionable status counts

### Input Schema
```json
{}
```
### Output Schema
```json
{}
```
## Operation: my.feed.get
Get listings from your feed

### Input Schema
```json
{}
```
### Output Schema
```json
{}
```
## Operation: my.feed.grid.get
get your feed

### Input Schema
```json
{}
```
### Output Schema
```json
{}
```
## Operation: my.feedback.received.get
List of received feedback

### Input Schema
```json
{}
```
### Output Schema
```json
{}
```
## Operation: my.feedback.sent.get
List of sent feedback

### Input Schema
```json
{}
```
### Output Schema
```json
{}
```
## Operation: my.follows.get
See what the user is following

### Input Schema
```json
{}
```
### Output Schema
```json
{}
```
## Operation: my.follows.brands.slug.delete
Unfollow a brand

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "slug": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "slug"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: my.follows.brands.slug.get
Follow status for a brand

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "slug": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "slug"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: my.follows.brands.slug.post
Follow a brand

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "slug": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "slug"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: my.follows.categories.category.subcategory.delete
Unfollow a subcategory

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "category": {
      "type": "string"
    },
    "subcategory": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "category",
    "subcategory"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: my.follows.categories.category.subcategory.get
Follow status for a subcategory

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "category": {
      "type": "string"
    },
    "subcategory": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "category",
    "subcategory"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: my.follows.categories.category.subcategory.post
Follow a subcategory

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "category": {
      "type": "string"
    },
    "subcategory": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "category",
    "subcategory"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: my.follows.categories.identifier.delete
Unfollow a category

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "identifier": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "identifier"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: my.follows.categories.identifier.get
Follow status for a category

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "identifier": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "identifier"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: my.follows.categories.identifier.post
Follow a category

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "identifier": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "identifier"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: my.follows.collections.slug.delete
Unfollow a collection

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "slug": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "slug"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: my.follows.collections.slug.get
Follow status for a collection

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "slug": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "slug"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: my.follows.collections.slug.post
Follow a collection

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "slug": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "slug"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: my.follows.handpicked.slug.delete
Unfollow a handpicked collection

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "slug": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "slug"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: my.follows.handpicked.slug.get
Follow status for a handpicked collection

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "slug": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "slug"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: my.follows.handpicked.slug.post
Follow a handpicked collection

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "slug": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "slug"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: my.follows.search.get
Follow status for a search

### Input Schema
```json
{}
```
### Output Schema
```json
{}
```
## Operation: my.follows.search.post
Follow a search

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "body": {
      "properties": {
        "accepts_gift_cards": {
          "description": "If true, include only items that accept gift cards",
          "type": "boolean"
        },
        "accepts_payment_plans": {
          "description": "If true, only show items that can be purchased with a payment plan",
          "type": "boolean"
        },
        "auction_price_max": {
          "description": "Maximum current auction price",
          "format": "float",
          "type": "number"
        },
        "category": {
          "description": "Category slug from /api/categories",
          "type": "string"
        },
        "conditions": {
          "description": "Condition: all,new,b-stock,used,non-functioning",
          "enum": [
            "all",
            "new",
            "b-stock",
            "used",
            "non-functioning"
          ],
          "items": {
            "type": "string"
          },
          "type": "array"
        },
        "currency": {
          "description": "The currency to be used for the price filters",
          "enum": [
            "USD",
            "CAD",
            "EUR",
            "GBP",
            "AUD",
            "JPY",
            "NZD",
            "MXN"
          ],
          "type": "string"
        },
        "decade": {
          "description": "Decade: e.g. 1970s, early 70s",
          "type": "string"
        },
        "exclude_auctions": {
          "description": "If true, exclude auctions",
          "type": "boolean"
        },
        "finish": {
          "description": "Visual finish of the item, common for guitars",
          "type": "string"
        },
        "handmade": {
          "description": "Handmade items only",
          "type": "boolean"
        },
        "item_city": {
          "description": "City where item is located",
          "type": "string"
        },
        "item_country": {
          "description": "DEPRECATED - Country code where item is located",
          "type": "string"
        },
        "item_region": {
          "description": "Country code where item is located",
          "type": "string"
        },
        "item_state": {
          "description": "State or region code where item is located",
          "type": "string"
        },
        "listing_type": {
          "description": "Type of listing: auctions,offers",
          "enum": [
            "auctions",
            "offers"
          ],
          "type": "string"
        },
        "make": {
          "description": "Make(s)/brand of item (e.g. Fender). Can take a single value or an array.",
          "items": {
            "type": "string"
          },
          "type": "array"
        },
        "model": {
          "description": "Model of item (e.g. Stratocaster)",
          "type": "string"
        },
        "must_not": {
          "description": "Search term negation. If you want to exclude a term, add it here",
          "type": "string"
        },
        "preferred_seller": {
          "description": "If true, include only items by Reverb Preferred Sellers",
          "type": "boolean"
        },
        "price_max": {
          "description": "Maximum price of search results (USD)",
          "format": "float",
          "type": "number"
        },
        "price_min": {
          "description": "Minimum price of search results (USD)",
          "format": "float",
          "type": "number"
        },
        "product_type": {
          "description": "Product type slug from /api/categories",
          "type": "string"
        },
        "query": {
          "description": "Search query.",
          "type": "string"
        },
        "ships_to": {
          "description": "Limit search to items that ship to this country code",
          "type": "string"
        },
        "shop": {
          "description": "Slug of shop to search",
          "type": "string"
        },
        "shop_id": {
          "description": "ID of shop to search",
          "type": "string"
        },
        "watchers_count_min": {
          "description": "Minimum number of watchers (used to find popular items)",
          "type": "integer"
        },
        "year_max": {
          "description": "Maximum year of manufacture",
          "type": "integer"
        },
        "year_min": {
          "description": "Minumum year of manufacture",
          "type": "integer"
        }
      },
      "type": "object"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: my.follows.shops.slug.delete
Unfollow a shop

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "slug": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "slug"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: my.follows.shops.slug.get
Follow status for a shop

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "slug": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "slug"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: my.follows.shops.slug.post
Follow a shop

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "slug": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "slug"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: my.follows.follow_id.delete
Delete a follow

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "follow_id": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "follow_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: my.follows.follow_id.alert.delete


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "follow_id": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "follow_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: my.follows.follow_id.alert.post


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "follow_id": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "follow_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: my.listings.get
Retrieve a list of live listings for the seller. To search all listings specify state=all

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "query": {
      "type": "string",
      "description": "Search query."
    },
    "auction_price_max": {
      "type": "number",
      "format": "float",
      "description": "Maximum current auction price"
    },
    "category": {
      "type": "string",
      "description": "Category slug from /api/categories"
    },
    "product_type": {
      "type": "string",
      "description": "Product type slug from /api/categories"
    },
    "conditions": {
      "type": "array",
      "description": "Condition: all,new,b-stock,used,non-functioning"
    },
    "decade": {
      "type": "string",
      "description": "Decade: e.g. 1970s, early 70s"
    },
    "finish": {
      "type": "string",
      "description": "Visual finish of the item, common for guitars"
    },
    "handmade": {
      "type": "boolean",
      "description": "Handmade items only"
    },
    "item_city": {
      "type": "string",
      "description": "City where item is located"
    },
    "item_country": {
      "type": "string",
      "description": "DEPRECATED - Country code where item is located"
    },
    "item_region": {
      "type": "string",
      "description": "Country code where item is located"
    },
    "item_state": {
      "type": "string",
      "description": "State or region code where item is located"
    },
    "make": {
      "type": "array",
      "description": "Make(s)/brand of item (e.g. Fender). Can take a single value or an array."
    },
    "model": {
      "type": "string",
      "description": "Model of item (e.g. Stratocaster)"
    },
    "must_not": {
      "type": "string",
      "description": "Search term negation. If you want to exclude a term, add it here"
    },
    "price_max": {
      "type": "number",
      "format": "float",
      "description": "Maximum price of search results (USD)"
    },
    "price_min": {
      "type": "number",
      "format": "float",
      "description": "Minimum price of search results (USD)"
    },
    "currency": {
      "type": "string",
      "description": "The currency to be used for the price filters"
    },
    "year_max": {
      "type": "integer",
      "description": "Maximum year of manufacture"
    },
    "year_min": {
      "type": "integer",
      "description": "Minumum year of manufacture"
    },
    "accepts_gift_cards": {
      "type": "boolean",
      "description": "If true, include only items that accept gift cards"
    },
    "preferred_seller": {
      "type": "boolean",
      "description": "If true, include only items by Reverb Preferred Sellers"
    },
    "shop": {
      "type": "string",
      "description": "Slug of shop to search"
    },
    "shop_id": {
      "type": "string",
      "description": "ID of shop to search"
    },
    "listing_type": {
      "type": "string",
      "description": "Type of listing: auctions,offers"
    },
    "ships_to": {
      "type": "string",
      "description": "Limit search to items that ship to this country code"
    },
    "exclude_auctions": {
      "type": "boolean",
      "description": "If true, exclude auctions"
    },
    "accepts_payment_plans": {
      "type": "boolean",
      "description": "If true, only show items that can be purchased with a payment plan"
    },
    "watchers_count_min": {
      "type": "integer",
      "description": "Minimum number of watchers (used to find popular items)"
    },
    "state": {
      "type": "string",
      "description": "Available: [\"all\", \"draft\", \"ended\", \"live\", \"ordered\", \"sold_out\", \"suspended\", \"seller_unavailable\"]. Defaults to 'live'"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: my.listings.drafts.get
Retrieve a list your draft listings

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "query": {
      "type": "string",
      "description": "Search query."
    },
    "auction_price_max": {
      "type": "number",
      "format": "float",
      "description": "Maximum current auction price"
    },
    "category": {
      "type": "string",
      "description": "Category slug from /api/categories"
    },
    "product_type": {
      "type": "string",
      "description": "Product type slug from /api/categories"
    },
    "conditions": {
      "type": "array",
      "description": "Condition: all,new,b-stock,used,non-functioning"
    },
    "decade": {
      "type": "string",
      "description": "Decade: e.g. 1970s, early 70s"
    },
    "finish": {
      "type": "string",
      "description": "Visual finish of the item, common for guitars"
    },
    "handmade": {
      "type": "boolean",
      "description": "Handmade items only"
    },
    "item_city": {
      "type": "string",
      "description": "City where item is located"
    },
    "item_country": {
      "type": "string",
      "description": "DEPRECATED - Country code where item is located"
    },
    "item_region": {
      "type": "string",
      "description": "Country code where item is located"
    },
    "item_state": {
      "type": "string",
      "description": "State or region code where item is located"
    },
    "make": {
      "type": "array",
      "description": "Make(s)/brand of item (e.g. Fender). Can take a single value or an array."
    },
    "model": {
      "type": "string",
      "description": "Model of item (e.g. Stratocaster)"
    },
    "must_not": {
      "type": "string",
      "description": "Search term negation. If you want to exclude a term, add it here"
    },
    "price_max": {
      "type": "number",
      "format": "float",
      "description": "Maximum price of search results (USD)"
    },
    "price_min": {
      "type": "number",
      "format": "float",
      "description": "Minimum price of search results (USD)"
    },
    "currency": {
      "type": "string",
      "description": "The currency to be used for the price filters"
    },
    "year_max": {
      "type": "integer",
      "description": "Maximum year of manufacture"
    },
    "year_min": {
      "type": "integer",
      "description": "Minumum year of manufacture"
    },
    "accepts_gift_cards": {
      "type": "boolean",
      "description": "If true, include only items that accept gift cards"
    },
    "preferred_seller": {
      "type": "boolean",
      "description": "If true, include only items by Reverb Preferred Sellers"
    },
    "shop": {
      "type": "string",
      "description": "Slug of shop to search"
    },
    "shop_id": {
      "type": "string",
      "description": "ID of shop to search"
    },
    "listing_type": {
      "type": "string",
      "description": "Type of listing: auctions,offers"
    },
    "ships_to": {
      "type": "string",
      "description": "Limit search to items that ship to this country code"
    },
    "exclude_auctions": {
      "type": "boolean",
      "description": "If true, exclude auctions"
    },
    "accepts_payment_plans": {
      "type": "boolean",
      "description": "If true, only show items that can be purchased with a payment plan"
    },
    "watchers_count_min": {
      "type": "integer",
      "description": "Minimum number of watchers (used to find popular items)"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: my.listings.negotiations.get
Get a list of active negotiations as a seller

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "page": {
      "type": "integer"
    },
    "per_page": {
      "type": "integer"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: my.listings.slug.state.end.put
End a listing

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "slug": {
      "type": "string"
    },
    "body": {
      "properties": {
        "reason": {
          "description": "The reason this listing is being ended. Valid reasons: [\"not_sold\", \"reverb_sale\"].",
          "enum": [
            "not_sold",
            "reverb_sale"
          ],
          "type": "string"
        }
      },
      "required": [
        "reason"
      ],
      "type": "object"
    }
  },
  "additionalProperties": false,
  "required": [
    "slug"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: my.lists.get
Get a list of your lists (wishlist, watch list, etc)

### Input Schema
```json
{}
```
### Output Schema
```json
{}
```
## Operation: my.negotiations.buying.get
Get a list of active negotiations as a buyer

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "page": {
      "type": "integer"
    },
    "per_page": {
      "type": "integer"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: my.negotiations.id.get
Get offer details

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: my.negotiations.id.accept.post
Accept an offer

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string"
    },
    "body": {
      "properties": {
        "message": {
          "description": "Message to include with accepted offer",
          "type": "string"
        }
      },
      "type": "object"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: my.negotiations.id.counter.post
Counter an offer

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string"
    },
    "body": {
      "properties": {
        "message": {
          "description": "Message to include with counter offer",
          "type": "string"
        },
        "price": {
          "properties": {
            "amount": {
              "description": "The amount of money being expressed, as a decimal number",
              "type": "string"
            },
            "currency": {
              "description": "The currency the money will be expressed in",
              "enum": [
                "USD",
                "CAD",
                "EUR",
                "GBP",
                "AUD",
                "JPY",
                "NZD",
                "MXN"
              ],
              "type": "string"
            }
          },
          "required": [
            "amount",
            "currency"
          ],
          "type": "object"
        },
        "shipping_price": {
          "description": "Shipping price (sellers only)",
          "properties": {
            "amount": {
              "description": "The amount of money being expressed, as a decimal number",
              "type": "string"
            },
            "currency": {
              "description": "The currency the money will be expressed in",
              "enum": [
                "USD",
                "CAD",
                "EUR",
                "GBP",
                "AUD",
                "JPY",
                "NZD",
                "MXN"
              ],
              "type": "string"
            }
          },
          "required": [
            "amount",
            "currency"
          ],
          "type": "object"
        }
      },
      "required": [
        "price"
      ],
      "type": "object"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: my.negotiations.id.decline.post
Decline an offer

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: my.orders.awaiting_feedback.get
List of orders that need feedback

### Input Schema
```json
{}
```
### Output Schema
```json
{}
```
## Operation: my.orders.buying.all.get
Returns all orders, newest first.

### Input Schema
```json
{}
```
### Output Schema
```json
{}
```
## Operation: my.orders.buying.buying_history.seller_id.get
See previous orders from a seller

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "seller_id": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "seller_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: my.orders.buying.unpaid.get
Returns unpaid orders, newest first.

### Input Schema
```json
{}
```
### Output Schema
```json
{}
```
## Operation: my.orders.buying.id.get
Returns order details for a buyer

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: my.orders.buying.id.mark_received.post
Marks an order as received by the buyer

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: my.orders.selling.all.get
Get all seller orders, newest first.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "created_start_date": {
      "type": "string",
      "description": "Filter by date created in ISO8601 format - e.g: 2015-04-09T10:52:23-00:00"
    },
    "created_end_date": {
      "type": "string",
      "description": "Filter by date created in ISO8601 format - e.g: 2015-04-09T10:52:23-00:00"
    },
    "updated_start_date": {
      "type": "string",
      "description": "Filter by date modified in ISO8601 format - e.g: 2015-04-09T10:52:23-00:00"
    },
    "updated_end_date": {
      "type": "string",
      "description": "Filter by date modified in ISO8601 format - e.g: 2015-04-09T10:52:23-00:00"
    },
    "page": {
      "type": "integer"
    },
    "per_page": {
      "type": "integer"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: my.orders.selling.awaiting_shipment.get
Get seller orders awaiting shipment, newest first.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "created_start_date": {
      "type": "string",
      "description": "Filter by date created in ISO8601 format - e.g: 2015-04-09T10:52:23-00:00"
    },
    "created_end_date": {
      "type": "string",
      "description": "Filter by date created in ISO8601 format - e.g: 2015-04-09T10:52:23-00:00"
    },
    "updated_start_date": {
      "type": "string",
      "description": "Filter by date modified in ISO8601 format - e.g: 2015-04-09T10:52:23-00:00"
    },
    "updated_end_date": {
      "type": "string",
      "description": "Filter by date modified in ISO8601 format - e.g: 2015-04-09T10:52:23-00:00"
    },
    "page": {
      "type": "integer"
    },
    "per_page": {
      "type": "integer"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: my.orders.selling.buyer_history.buyer_id.get
See previous orders from buyer

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "buyer_id": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "buyer_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: my.orders.selling.unpaid.get
Get unpaid seller orders, newest first.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "created_start_date": {
      "type": "string",
      "description": "Filter by date created in ISO8601 format - e.g: 2015-04-09T10:52:23-00:00"
    },
    "created_end_date": {
      "type": "string",
      "description": "Filter by date created in ISO8601 format - e.g: 2015-04-09T10:52:23-00:00"
    },
    "updated_start_date": {
      "type": "string",
      "description": "Filter by date modified in ISO8601 format - e.g: 2015-04-09T10:52:23-00:00"
    },
    "updated_end_date": {
      "type": "string",
      "description": "Filter by date modified in ISO8601 format - e.g: 2015-04-09T10:52:23-00:00"
    },
    "page": {
      "type": "integer"
    },
    "per_page": {
      "type": "integer"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: my.orders.selling.id.get
Returns order details for a seller

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: my.orders.selling.id.mark_picked_up.post
Marks an order as picked up

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string"
    },
    "body": {
      "properties": {
        "date": {
          "description": "Date the item was picked up.",
          "type": "string"
        }
      },
      "type": "object"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: my.orders.selling.id.ship.post
Marks an order as shipped

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string"
    },
    "body": {
      "properties": {
        "provider": {
          "description": "Shipping provider: One of UPS, USPS, FedEx, DHL, DHLExpress, DHLGlobalMail, DHL Germany, Canada Post, Royal Mail, PostNL, Australia Post, EMS, La Poste, China Post, GLS, Parcelforce, Purolator, Other",
          "type": "string"
        },
        "send_notification": {
          "description": "Should we send an email notification to the buyer",
          "type": "boolean"
        },
        "tracking_number": {
          "description": "Tracking number provided by the shipping provider",
          "type": "string"
        }
      },
      "required": [
        "provider",
        "tracking_number",
        "send_notification"
      ],
      "type": "object"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: my.payments.selling.get
Get payments

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "page": {
      "type": "integer"
    },
    "per_page": {
      "type": "integer"
    },
    "created_start_date": {
      "type": "string",
      "description": "Filter by date created in ISO8601 format - e.g: 2015-04-09T10:52:23-00:00"
    },
    "created_end_date": {
      "type": "string",
      "description": "Filter by date created in ISO8601 format - e.g: 2015-04-09T10:52:23-00:00"
    },
    "updated_start_date": {
      "type": "string",
      "description": "Filter by date modified in ISO8601 format - e.g: 2015-04-09T10:52:23-00:00"
    },
    "updated_end_date": {
      "type": "string",
      "description": "Filter by date modified in ISO8601 format - e.g: 2015-04-09T10:52:23-00:00"
    },
    "order_id": {
      "type": "string",
      "description": "Look up payments by order id"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: my.payments.selling.id.get
Get payment

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: my.viewed_listings.get
Get a list of your recently viewed listings.

### Input Schema
```json
{}
```
### Output Schema
```json
{}
```
## Operation: my.wishlist.get
Get a list of wishlisted items

### Input Schema
```json
{}
```
### Output Schema
```json
{}
```
## Operation: my.wishlist.id.delete
Remove a listing from your wishlist

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: my.wishlist.id.put
Add a listing to your wishlist

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: orders.order_id.feedback.buyer.get
Feedback details for an order's buyer

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "order_id": {
      "type": "string"
    }
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
## Operation: orders.order_id.feedback.buyer.post
Add feedback about an order's buyer

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "order_id": {
      "type": "string"
    }
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
## Operation: orders.order_id.feedback.seller.get
Feedback details for an order's seller

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "order_id": {
      "type": "string"
    }
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
## Operation: orders.order_id.feedback.seller.post
Add feedback about an order's seller

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "order_id": {
      "type": "string"
    }
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
## Operation: payment_methods.get
Get list of payment methods

### Input Schema
```json
{}
```
### Output Schema
```json
{}
```
## Operation: priceguide.get
Search the Price Guide

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "query": {
      "type": "string",
      "description": "Search query."
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: priceguide.id.get
Retrieve a Price Guide

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: priceguide.id.transactions.get
Get a list of paginated transactions for a price guide.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string"
    },
    "condition": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: priceguide.id.transactions.summary.get
Get a summary of transactions for a given price guide

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string"
    },
    "number_of_months": {
      "type": "integer"
    },
    "condition": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: products.reviews.id.get
View a review

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: products.reviews.id.put
Update a review

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string"
    },
    "body": {
      "properties": {
        "body": {
          "description": "Content of the review",
          "type": "string"
        },
        "rating": {
          "description": "Rating from 1 to 5",
          "type": "integer"
        },
        "title": {
          "description": "Title for the review",
          "type": "string"
        }
      },
      "type": "object"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: products.slug.reviews.get
View reviews of a product

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "slug": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "slug"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: products.slug.reviews.post
Create a review for a product

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "slug": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "slug"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: sales.reverb.get
View upcoming and live Reverb official sales.

### Input Schema
```json
{}
```
### Output Schema
```json
{}
```
## Operation: sales.seller.get
View your created sales.

### Input Schema
```json
{}
```
### Output Schema
```json
{}
```
## Operation: sales.sale_id.listings.delete
Remove a listing from a sale

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "sale_id": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "sale_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: sales.sale_id.listings.post
Add listings to a sale

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "sale_id": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "sale_id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: sales.slug.get


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "slug": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "slug"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: shipping.providers.get
List of supported shipping providers

### Input Schema
```json
{}
```
### Output Schema
```json
{}
```
## Operation: shipping.regions.get


### Input Schema
```json
{}
```
### Output Schema
```json
{}
```
## Operation: shop.get
Get your own shop details

### Input Schema
```json
{}
```
### Output Schema
```json
{}
```
## Operation: shop.put
Update your shop profile

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "body": {
      "properties": {
        "address": {
          "properties": {
            "country_code": {
              "type": "string"
            },
            "extended_address": {
              "type": "string"
            },
            "locality": {
              "type": "string"
            },
            "name": {
              "type": "string"
            },
            "phone": {
              "type": "string"
            },
            "postal_code": {
              "type": "string"
            },
            "region": {
              "type": "string"
            },
            "street_address": {
              "type": "string"
            }
          },
          "type": "object"
        },
        "currency": {
          "enum": [
            "USD",
            "CAD",
            "EUR",
            "GBP",
            "AUD",
            "JPY",
            "NZD",
            "MXN"
          ],
          "type": "string"
        },
        "description": {
          "type": "string"
        },
        "name": {
          "type": "string"
        },
        "payment_policy": {
          "type": "string"
        },
        "return_policy": {
          "type": "string"
        },
        "shipping_policy": {
          "type": "string"
        },
        "website": {
          "type": "string"
        }
      },
      "type": "object"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: shop.listing_conditions.get
List of supported product conditions

### Input Schema
```json
{}
```
### Output Schema
```json
{}
```
## Operation: shop.payment_methods.get
Get accepted payment methods

### Input Schema
```json
{}
```
### Output Schema
```json
{}
```
## Operation: shop.stats.get
Get listings stats

### Input Schema
```json
{}
```
### Output Schema
```json
{}
```
## Operation: shop.stats.activity.get
Get shop activity for a particular time period

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "start_time": {
      "type": "string",
      "description": "Filter by date in ISO8601 format - e.g: 2015-04-09T10:52:23-05:00"
    },
    "end_time": {
      "type": "string",
      "description": "Filter by date in ISO8601 format - e.g: 2015-04-09T10:52:23-05:00"
    }
  },
  "additionalProperties": false,
  "required": [
    "start_time"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: shop.vacation.delete
Disable vacation mode. All listings will be re-enabled.

### Input Schema
```json
{}
```
### Output Schema
```json
{}
```
## Operation: shop.vacation.get
Returns shop vacation status

### Input Schema
```json
{}
```
### Output Schema
```json
{}
```
## Operation: shop.vacation.post
Enable vacation mode. All listings will be unavailable until vacation mode is turned off.

### Input Schema
```json
{}
```
### Output Schema
```json
{}
```
## Operation: shops.slug.get
Get details on a shop.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "slug": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "slug"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: shops.slug.feedback.get
Get seller's feedback

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "slug": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "slug"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: shops.slug.feedback.buyer.get
Get seller's feedback as a buyer

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "slug": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "slug"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: shops.slug.feedback.seller.get
Get seller's feedback as a seller

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "slug": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "slug"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: vinyl.listings.get


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "merchandising_uuid": {
      "type": "string",
      "description": "Merchandising UUID of the release"
    }
  },
  "additionalProperties": false,
  "required": [
    "merchandising_uuid"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: vinyl.listings.post


### Input Schema
```json
{}
```
### Output Schema
```json
{}
```
## Operation: vinyl.listings.id.get


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: wants.get
A list of wanted items by the user

### Input Schema
```json
{}
```
### Output Schema
```json
{}
```
## Operation: wants.id.delete
Unmark an item wanted.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: wants.id.put
Mark an item wanted. Returns 200 on success or 422 on failure.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: webhooks.registrations.get
Get webhook registrations

### Input Schema
```json
{}
```
### Output Schema
```json
{}
```
## Operation: webhooks.registrations.post
Register a webhook

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "body": {
      "properties": {
        "topic": {
          "description": "Valid values: listings/update, listings/publish, listings/bumps-ran-out, orders/create, orders/update, payments/create, payments/update, app/uninstalled",
          "enum": [
            "listings/update",
            "listings/publish",
            "listings/bumps-ran-out",
            "orders/create",
            "orders/update",
            "payments/create",
            "payments/update",
            "app/uninstalled"
          ],
          "type": "string"
        },
        "url": {
          "type": "string"
        }
      },
      "required": [
        "url",
        "topic"
      ],
      "type": "object"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: webhooks.registrations.id.delete
Remove a webhook

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: webhooks.registrations.id.get
Get details of a webhook registration

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{}
```
