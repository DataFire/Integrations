# @datafire/magento
Magento Commerce is the leading provider of open omnichannel innovation.

## Operation: customerAddressRepositoryV1DeleteByIdDelete
Delete customer address by ID.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "addressId": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "addressId"
  ]
}
```
### Output Schema
```json
{
  "description": "true on success",
  "type": "boolean"
}
```
## Operation: customerCustomerMetadataV1GetAllAttributesMetadataGet
Get all attribute metadata.

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/customer-data-attribute-metadata-interface"
  },
  "type": "array"
}
```
## Operation: customerCustomerMetadataV1GetAttributeMetadataGet
Retrieve attribute metadata.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "attributeCode": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "attributeCode"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/customer-data-attribute-metadata-interface"
}
```
## Operation: customerCustomerMetadataV1GetCustomAttributesMetadataGet
Get custom attributes metadata for the given data interface.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "dataInterfaceName": {
      "type": "string"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/customer-data-attribute-metadata-interface"
  },
  "type": "array"
}
```
## Operation: customerCustomerMetadataV1GetAttributesGet
Retrieve all attributes filtered by form code

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "formCode": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "formCode"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/customer-data-attribute-metadata-interface"
  },
  "type": "array"
}
```
## Operation: customerAddressMetadataV1GetAllAttributesMetadataGet
Get all attribute metadata.

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/customer-data-attribute-metadata-interface"
  },
  "type": "array"
}
```
## Operation: customerAddressMetadataV1GetAttributeMetadataGet
Retrieve attribute metadata.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "attributeCode": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "attributeCode"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/customer-data-attribute-metadata-interface"
}
```
## Operation: customerAddressMetadataV1GetCustomAttributesMetadataGet
Get custom attributes metadata for the given data interface.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "dataInterfaceName": {
      "type": "string"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/customer-data-attribute-metadata-interface"
  },
  "type": "array"
}
```
## Operation: customerAddressMetadataV1GetAttributesGet
Retrieve all attributes filtered by form code

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "formCode": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "formCode"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/customer-data-attribute-metadata-interface"
  },
  "type": "array"
}
```
## Operation: bundleProductOptionManagementV1SavePost
Add new option for bundle product

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "$body": {
      "properties": {
        "option": {
          "$ref": "#/definitions/bundle-data-option-interface"
        }
      },
      "required": [
        "option"
      ],
      "type": "object"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "type": "integer"
}
```
## Operation: bundleProductOptionTypeListV1GetItemsGet
Get all types for options for bundle products

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/bundle-data-option-type-interface"
  },
  "type": "array"
}
```
## Operation: bundleProductOptionManagementV1SavePut
Add new option for bundle product

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "optionId": {
      "type": "string"
    },
    "$body": {
      "properties": {
        "option": {
          "$ref": "#/definitions/bundle-data-option-interface"
        }
      },
      "required": [
        "option"
      ],
      "type": "object"
    }
  },
  "additionalProperties": false,
  "required": [
    "optionId"
  ]
}
```
### Output Schema
```json
{
  "type": "integer"
}
```
## Operation: bundleProductLinkManagementV1GetChildrenGet
Get all children for Bundle product

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "productSku": {
      "type": "string"
    },
    "optionId": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "productSku"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/bundle-data-link-interface"
  },
  "type": "array"
}
```
## Operation: bundleProductLinkManagementV1SaveChildPut


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "sku": {
      "type": "string"
    },
    "id": {
      "type": "string"
    },
    "$body": {
      "properties": {
        "linkedProduct": {
          "$ref": "#/definitions/bundle-data-link-interface"
        }
      },
      "required": [
        "linkedProduct"
      ],
      "type": "object"
    }
  },
  "additionalProperties": false,
  "required": [
    "sku",
    "id"
  ]
}
```
### Output Schema
```json
{
  "type": "boolean"
}
```
## Operation: bundleProductLinkManagementV1AddChildByProductSkuPost
Add child product to specified Bundle option by product sku

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "sku": {
      "type": "string"
    },
    "optionId": {
      "type": "integer"
    },
    "$body": {
      "properties": {
        "linkedProduct": {
          "$ref": "#/definitions/bundle-data-link-interface"
        }
      },
      "required": [
        "linkedProduct"
      ],
      "type": "object"
    }
  },
  "additionalProperties": false,
  "required": [
    "sku",
    "optionId"
  ]
}
```
### Output Schema
```json
{
  "type": "integer"
}
```
## Operation: bundleProductOptionRepositoryV1GetListGet
Get all options for bundle product

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "sku": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "sku"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/bundle-data-option-interface"
  },
  "type": "array"
}
```
## Operation: bundleProductOptionRepositoryV1DeleteByIdDelete
Remove bundle option

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "sku": {
      "type": "string"
    },
    "optionId": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "sku",
    "optionId"
  ]
}
```
### Output Schema
```json
{
  "type": "boolean"
}
```
## Operation: bundleProductOptionRepositoryV1GetGet
Get option for bundle product

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "sku": {
      "type": "string"
    },
    "optionId": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "sku",
    "optionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/bundle-data-option-interface"
}
```
## Operation: bundleProductLinkManagementV1RemoveChildDelete
Remove product from Bundle product option

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "sku": {
      "type": "string"
    },
    "optionId": {
      "type": "integer"
    },
    "childSku": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "sku",
    "optionId",
    "childSku"
  ]
}
```
### Output Schema
```json
{
  "type": "boolean"
}
```
## Operation: quoteCartManagementV1CreateEmptyCartPost
Creates an empty cart and quote for a guest.

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "description": "Cart ID.",
  "type": "integer"
}
```
## Operation: giftCardAccountGuestGiftCardAccountManagementV1CheckGiftCardGet


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "cartId": {
      "type": "string"
    },
    "giftCardCode": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "cartId",
    "giftCardCode"
  ]
}
```
### Output Schema
```json
{
  "type": "number"
}
```
## Operation: giftCardAccountGuestGiftCardAccountManagementV1AddGiftCardPost


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "cartId": {
      "type": "string"
    },
    "$body": {
      "properties": {
        "giftCardAccountData": {
          "$ref": "#/definitions/gift-card-account-data-gift-card-account-interface"
        }
      },
      "required": [
        "giftCardAccountData"
      ],
      "type": "object"
    }
  },
  "additionalProperties": false,
  "required": [
    "cartId"
  ]
}
```
### Output Schema
```json
{
  "type": "boolean"
}
```
## Operation: giftCardAccountGuestGiftCardAccountManagementV1DeleteByQuoteIdDelete
Remove GiftCard Account entity

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "cartId": {
      "type": "string"
    },
    "giftCardCode": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "cartId",
    "giftCardCode"
  ]
}
```
### Output Schema
```json
{
  "type": "boolean"
}
```
## Operation: checkoutAgreementsCheckoutAgreementsRepositoryV1GetListGet
Lists active checkout agreements.

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/checkout-agreements-data-agreement-interface"
  },
  "type": "array"
}
```
## Operation: quoteCartManagementV1GetCartForCustomerGet
Returns information for the cart for a specified customer.

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "$ref": "#/definitions/quote-data-cart-interface"
}
```
## Operation: V1.carts.mine.post
Creates an empty cart and quote for a specified customer.

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "description": "Cart ID.",
  "type": "integer"
}
```
## Operation: quoteCartRepositoryV1SavePut
Save quote

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "$body": {
      "properties": {
        "quote": {
          "$ref": "#/definitions/quote-data-cart-interface"
        }
      },
      "required": [
        "quote"
      ],
      "type": "object"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/error-response"
}
```
## Operation: customerBalanceBalanceManagementV1ApplyPost
Apply store credit

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "type": "boolean"
}
```
## Operation: V1.carts.mine.billing_address.get
Returns the billing address for a specified quote.

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "$ref": "#/definitions/quote-data-address-interface"
}
```
## Operation: V1.carts.mine.billing_address.post
Assigns a specified billing address to a specified cart.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "$body": {
      "properties": {
        "address": {
          "$ref": "#/definitions/quote-data-address-interface"
        },
        "useForShipping": {
          "type": "boolean"
        }
      },
      "required": [
        "address"
      ],
      "type": "object"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "description": "Address ID.",
  "type": "integer"
}
```
## Operation: giftCardAccountGiftCardAccountManagementV1CheckGiftCardGet


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "giftCardCode": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "giftCardCode"
  ]
}
```
### Output Schema
```json
{
  "type": "number"
}
```
## Operation: quoteCartTotalManagementV1CollectTotalsPut
Set shipping/billing methods and additional data for cart and collect totals.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "$body": {
      "properties": {
        "additionalData": {
          "$ref": "#/definitions/quote-data-totals-additional-data-interface"
        },
        "paymentMethod": {
          "$ref": "#/definitions/quote-data-payment-interface"
        },
        "shippingCarrierCode": {
          "description": "The carrier code.",
          "type": "string"
        },
        "shippingMethodCode": {
          "description": "The shipping method code.",
          "type": "string"
        }
      },
      "required": [
        "paymentMethod"
      ],
      "type": "object"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/quote-data-totals-interface"
}
```
## Operation: V1.carts.mine.coupons.delete
Deletes a coupon from a specified cart.

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "type": "boolean"
}
```
## Operation: V1.carts.mine.coupons.get
Returns information for a coupon in a specified cart.

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "description": "The coupon code data.",
  "type": "string"
}
```
## Operation: V1.carts.mine.coupons.couponCode.put
Adds a coupon by code to a specified cart.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "couponCode": {
      "type": "string",
      "description": "The coupon code data."
    }
  },
  "additionalProperties": false,
  "required": [
    "couponCode"
  ]
}
```
### Output Schema
```json
{
  "type": "boolean"
}
```
## Operation: V1.carts.mine.estimate_shipping_methods.post
Estimate shipping by address and return list of available shipping methods

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "$body": {
      "properties": {
        "address": {
          "$ref": "#/definitions/quote-data-address-interface"
        }
      },
      "required": [
        "address"
      ],
      "type": "object"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "description": "An array of shipping methods",
  "items": {
    "$ref": "#/definitions/quote-data-shipping-method-interface"
  },
  "type": "array"
}
```
## Operation: V1.carts.mine.estimate_shipping_methods_by_address_id.post
Estimate shipping

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "$body": {
      "properties": {
        "addressId": {
          "description": "The estimate address id",
          "type": "integer"
        }
      },
      "required": [
        "addressId"
      ],
      "type": "object"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "description": "An array of shipping methods.",
  "items": {
    "$ref": "#/definitions/quote-data-shipping-method-interface"
  },
  "type": "array"
}
```
## Operation: V1.carts.mine.gift_message.get
Return the gift message for a specified order.

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "$ref": "#/definitions/gift-message-data-message-interface"
}
```
## Operation: V1.carts.mine.gift_message.post
Set the gift message for an entire order.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "$body": {
      "properties": {
        "giftMessage": {
          "$ref": "#/definitions/gift-message-data-message-interface"
        }
      },
      "required": [
        "giftMessage"
      ],
      "type": "object"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "type": "boolean"
}
```
## Operation: V1.carts.mine.gift_message.itemId.get
Return the gift message for a specified item in a specified shopping cart.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "itemId": {
      "type": "integer",
      "description": "The item ID."
    }
  },
  "additionalProperties": false,
  "required": [
    "itemId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/gift-message-data-message-interface"
}
```
## Operation: V1.carts.mine.gift_message.itemId.post
Set the gift message for a specified item in a specified shopping cart.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "itemId": {
      "type": "integer",
      "description": "The item ID."
    },
    "$body": {
      "properties": {
        "giftMessage": {
          "$ref": "#/definitions/gift-message-data-message-interface"
        }
      },
      "required": [
        "giftMessage"
      ],
      "type": "object"
    }
  },
  "additionalProperties": false,
  "required": [
    "itemId"
  ]
}
```
### Output Schema
```json
{
  "type": "boolean"
}
```
## Operation: giftCardAccountGiftCardAccountManagementV1SaveByQuoteIdPost


### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "$body": {
      "properties": {
        "giftCardAccountData": {
          "$ref": "#/definitions/gift-card-account-data-gift-card-account-interface"
        }
      },
      "required": [
        "giftCardAccountData"
      ],
      "type": "object"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "type": "boolean"
}
```
## Operation: V1.carts.mine.giftCards.giftCardCode.delete
Remove GiftCard Account entity

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "giftCardCode": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "giftCardCode"
  ]
}
```
### Output Schema
```json
{
  "type": "boolean"
}
```
## Operation: V1.carts.mine.items.get
Lists items that are assigned to a specified cart.

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "description": "Array of items.",
  "items": {
    "$ref": "#/definitions/quote-data-cart-item-interface"
  },
  "type": "array"
}
```
## Operation: V1.carts.mine.items.post
Add/update the specified cart item.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "$body": {
      "properties": {
        "cartItem": {
          "$ref": "#/definitions/quote-data-cart-item-interface"
        }
      },
      "required": [
        "cartItem"
      ],
      "type": "object"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/quote-data-cart-item-interface"
}
```
## Operation: V1.carts.mine.items.itemId.delete
Removes the specified item from the specified cart.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "itemId": {
      "type": "integer",
      "description": "The item ID of the item to be removed."
    }
  },
  "additionalProperties": false,
  "required": [
    "itemId"
  ]
}
```
### Output Schema
```json
{
  "type": "boolean"
}
```
## Operation: V1.carts.mine.items.itemId.put
Add/update the specified cart item.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "itemId": {
      "type": "string"
    },
    "$body": {
      "properties": {
        "cartItem": {
          "$ref": "#/definitions/quote-data-cart-item-interface"
        }
      },
      "required": [
        "cartItem"
      ],
      "type": "object"
    }
  },
  "additionalProperties": false,
  "required": [
    "itemId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/quote-data-cart-item-interface"
}
```
## Operation: V1.carts.mine.order.put
Places an order for a specified cart.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "$body": {
      "properties": {
        "paymentMethod": {
          "$ref": "#/definitions/quote-data-payment-interface"
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
{
  "description": "Order ID.",
  "type": "integer"
}
```
## Operation: checkoutPaymentInformationManagementV1GetPaymentInformationGet
Get payment information

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "$ref": "#/definitions/checkout-data-payment-details-interface"
}
```
## Operation: checkoutPaymentInformationManagementV1SavePaymentInformationAndPlaceOrderPost
Set payment information and place order for a specified cart.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "$body": {
      "properties": {
        "billingAddress": {
          "$ref": "#/definitions/quote-data-address-interface"
        },
        "paymentMethod": {
          "$ref": "#/definitions/quote-data-payment-interface"
        }
      },
      "required": [
        "paymentMethod"
      ],
      "type": "object"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "description": "Order ID.",
  "type": "integer"
}
```
## Operation: V1.carts.mine.payment_methods.get
Lists available payment methods for a specified shopping cart. This call returns an array of objects, but detailed information about each object’s attributes might not be included.  See http://devdocs.magento.com/codelinks/attributes.html#PaymentMethodManagementInterface to determine which call to use to get detailed information about all attributes for an object.

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "description": "Array of payment methods.",
  "items": {
    "$ref": "#/definitions/quote-data-payment-method-interface"
  },
  "type": "array"
}
```
## Operation: V1.carts.mine.selected_payment_method.get
Returns the payment method for a specified shopping cart.

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "$ref": "#/definitions/quote-data-payment-interface"
}
```
## Operation: V1.carts.mine.selected_payment_method.put
Adds a specified payment method to a specified shopping cart.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "$body": {
      "properties": {
        "method": {
          "$ref": "#/definitions/quote-data-payment-interface"
        }
      },
      "required": [
        "method"
      ],
      "type": "object"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "description": "redirect url or error message.",
  "type": "string"
}
```
## Operation: checkoutPaymentInformationManagementV1SavePaymentInformationPost
Set payment information for a specified cart.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "$body": {
      "properties": {
        "billingAddress": {
          "$ref": "#/definitions/quote-data-address-interface"
        },
        "paymentMethod": {
          "$ref": "#/definitions/quote-data-payment-interface"
        }
      },
      "required": [
        "paymentMethod"
      ],
      "type": "object"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "description": "Order ID.",
  "type": "integer"
}
```
## Operation: V1.carts.mine.shipping_information.post


### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "$body": {
      "properties": {
        "addressInformation": {
          "$ref": "#/definitions/checkout-data-shipping-information-interface"
        }
      },
      "required": [
        "addressInformation"
      ],
      "type": "object"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/checkout-data-payment-details-interface"
}
```
## Operation: V1.carts.mine.shipping_methods.get
Lists applicable shipping methods for a specified quote.

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "description": "An array of shipping methods.",
  "items": {
    "$ref": "#/definitions/quote-data-shipping-method-interface"
  },
  "type": "array"
}
```
## Operation: V1.carts.mine.totals.get
Returns quote totals data for a specified cart.

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "$ref": "#/definitions/quote-data-totals-interface"
}
```
## Operation: V1.carts.mine.totals_information.post
Calculate quote totals based on address and shipping method.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "$body": {
      "properties": {
        "addressInformation": {
          "$ref": "#/definitions/checkout-data-totals-information-interface"
        }
      },
      "required": [
        "addressInformation"
      ],
      "type": "object"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/quote-data-totals-interface"
}
```
## Operation: quoteCartRepositoryV1GetListGet
Enables administrative users to list carts that match specified search criteria. This call returns an array of objects, but detailed information about each object’s attributes might not be included.  See http://devdocs.magento.com/codelinks/attributes.html#CartRepositoryInterface to determine which call to use to get detailed information about all attributes for an object.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "searchCriteria[filterGroups][][filters][][field]": {
      "type": "string",
      "description": "Field"
    },
    "searchCriteria[filterGroups][][filters][][value]": {
      "type": "string",
      "description": "Value"
    },
    "searchCriteria[filterGroups][][filters][][conditionType]": {
      "type": "string",
      "description": "Condition type"
    },
    "searchCriteria[sortOrders][][field]": {
      "type": "string",
      "description": "Sorting field."
    },
    "searchCriteria[sortOrders][][direction]": {
      "type": "string",
      "description": "Sorting direction."
    },
    "searchCriteria[pageSize]": {
      "type": "integer",
      "description": "Page size."
    },
    "searchCriteria[currentPage]": {
      "type": "integer",
      "description": "Current page."
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/quote-data-cart-search-results-interface"
}
```
## Operation: quoteCartRepositoryV1GetGet
Enables an administrative user to return information for a specified cart.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "cartId": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "cartId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/quote-data-cart-interface"
}
```
## Operation: quoteCartManagementV1AssignCustomerPut
Assigns a specified customer to a specified shopping cart.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "cartId": {
      "type": "integer",
      "description": "The cart ID."
    },
    "$body": {
      "properties": {
        "customerId": {
          "description": "The customer ID.",
          "type": "integer"
        },
        "storeId": {
          "type": "integer"
        }
      },
      "required": [
        "customerId",
        "storeId"
      ],
      "type": "object"
    }
  },
  "additionalProperties": false,
  "required": [
    "cartId"
  ]
}
```
### Output Schema
```json
{
  "type": "boolean"
}
```
## Operation: V1.carts.cartId.billing_address.get
Returns the billing address for a specified quote.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "cartId": {
      "type": "integer",
      "description": "The cart ID."
    }
  },
  "additionalProperties": false,
  "required": [
    "cartId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/quote-data-address-interface"
}
```
## Operation: V1.carts.cartId.billing_address.post
Assigns a specified billing address to a specified cart.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "cartId": {
      "type": "integer",
      "description": "The cart ID."
    },
    "$body": {
      "properties": {
        "address": {
          "$ref": "#/definitions/quote-data-address-interface"
        },
        "useForShipping": {
          "type": "boolean"
        }
      },
      "required": [
        "address"
      ],
      "type": "object"
    }
  },
  "additionalProperties": false,
  "required": [
    "cartId"
  ]
}
```
### Output Schema
```json
{
  "description": "Address ID.",
  "type": "integer"
}
```
## Operation: V1.carts.cartId.coupons.delete
Deletes a coupon from a specified cart.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "cartId": {
      "type": "integer",
      "description": "The cart ID."
    }
  },
  "additionalProperties": false,
  "required": [
    "cartId"
  ]
}
```
### Output Schema
```json
{
  "type": "boolean"
}
```
## Operation: V1.carts.cartId.coupons.get
Returns information for a coupon in a specified cart.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "cartId": {
      "type": "integer",
      "description": "The cart ID."
    }
  },
  "additionalProperties": false,
  "required": [
    "cartId"
  ]
}
```
### Output Schema
```json
{
  "description": "The coupon code data.",
  "type": "string"
}
```
## Operation: V1.carts.cartId.coupons.couponCode.put
Adds a coupon by code to a specified cart.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "cartId": {
      "type": "integer",
      "description": "The cart ID."
    },
    "couponCode": {
      "type": "string",
      "description": "The coupon code data."
    }
  },
  "additionalProperties": false,
  "required": [
    "cartId",
    "couponCode"
  ]
}
```
### Output Schema
```json
{
  "type": "boolean"
}
```
## Operation: V1.carts.cartId.estimate_shipping_methods.post
Estimate shipping by address and return list of available shipping methods

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "cartId": {
      "type": "string"
    },
    "$body": {
      "properties": {
        "address": {
          "$ref": "#/definitions/quote-data-address-interface"
        }
      },
      "required": [
        "address"
      ],
      "type": "object"
    }
  },
  "additionalProperties": false,
  "required": [
    "cartId"
  ]
}
```
### Output Schema
```json
{
  "description": "An array of shipping methods",
  "items": {
    "$ref": "#/definitions/quote-data-shipping-method-interface"
  },
  "type": "array"
}
```
## Operation: V1.carts.cartId.estimate_shipping_methods_by_address_id.post
Estimate shipping

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "cartId": {
      "type": "integer",
      "description": "The shopping cart ID."
    },
    "$body": {
      "properties": {
        "addressId": {
          "description": "The estimate address id",
          "type": "integer"
        }
      },
      "required": [
        "addressId"
      ],
      "type": "object"
    }
  },
  "additionalProperties": false,
  "required": [
    "cartId"
  ]
}
```
### Output Schema
```json
{
  "description": "An array of shipping methods.",
  "items": {
    "$ref": "#/definitions/quote-data-shipping-method-interface"
  },
  "type": "array"
}
```
## Operation: V1.carts.cartId.gift_message.get
Return the gift message for a specified order.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "cartId": {
      "type": "integer",
      "description": "The shopping cart ID."
    }
  },
  "additionalProperties": false,
  "required": [
    "cartId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/gift-message-data-message-interface"
}
```
## Operation: V1.carts.cartId.gift_message.post
Set the gift message for an entire order.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "cartId": {
      "type": "integer",
      "description": "The cart ID."
    },
    "$body": {
      "properties": {
        "giftMessage": {
          "$ref": "#/definitions/gift-message-data-message-interface"
        }
      },
      "required": [
        "giftMessage"
      ],
      "type": "object"
    }
  },
  "additionalProperties": false,
  "required": [
    "cartId"
  ]
}
```
### Output Schema
```json
{
  "type": "boolean"
}
```
## Operation: V1.carts.cartId.gift_message.itemId.get
Return the gift message for a specified item in a specified shopping cart.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "cartId": {
      "type": "integer",
      "description": "The shopping cart ID."
    },
    "itemId": {
      "type": "integer",
      "description": "The item ID."
    }
  },
  "additionalProperties": false,
  "required": [
    "cartId",
    "itemId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/gift-message-data-message-interface"
}
```
## Operation: V1.carts.cartId.gift_message.itemId.post
Set the gift message for a specified item in a specified shopping cart.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "cartId": {
      "type": "integer",
      "description": "The cart ID."
    },
    "itemId": {
      "type": "integer",
      "description": "The item ID."
    },
    "$body": {
      "properties": {
        "giftMessage": {
          "$ref": "#/definitions/gift-message-data-message-interface"
        }
      },
      "required": [
        "giftMessage"
      ],
      "type": "object"
    }
  },
  "additionalProperties": false,
  "required": [
    "cartId",
    "itemId"
  ]
}
```
### Output Schema
```json
{
  "type": "boolean"
}
```
## Operation: giftCardAccountGiftCardAccountManagementV1SaveByQuoteIdPut


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "cartId": {
      "type": "integer"
    },
    "$body": {
      "properties": {
        "giftCardAccountData": {
          "$ref": "#/definitions/gift-card-account-data-gift-card-account-interface"
        }
      },
      "required": [
        "giftCardAccountData"
      ],
      "type": "object"
    }
  },
  "additionalProperties": false,
  "required": [
    "cartId"
  ]
}
```
### Output Schema
```json
{
  "type": "boolean"
}
```
## Operation: V1.carts.cartId.giftCards.giftCardCode.delete
Remove GiftCard Account entity

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "cartId": {
      "type": "integer"
    },
    "giftCardCode": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "cartId",
    "giftCardCode"
  ]
}
```
### Output Schema
```json
{
  "type": "boolean"
}
```
## Operation: V1.carts.cartId.items.get
Lists items that are assigned to a specified cart.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "cartId": {
      "type": "integer",
      "description": "The cart ID."
    }
  },
  "additionalProperties": false,
  "required": [
    "cartId"
  ]
}
```
### Output Schema
```json
{
  "description": "Array of items.",
  "items": {
    "$ref": "#/definitions/quote-data-cart-item-interface"
  },
  "type": "array"
}
```
## Operation: V1.carts.cartId.items.itemId.delete
Removes the specified item from the specified cart.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "cartId": {
      "type": "integer",
      "description": "The cart ID."
    },
    "itemId": {
      "type": "integer",
      "description": "The item ID of the item to be removed."
    }
  },
  "additionalProperties": false,
  "required": [
    "cartId",
    "itemId"
  ]
}
```
### Output Schema
```json
{
  "type": "boolean"
}
```
## Operation: V1.carts.cartId.items.itemId.put
Add/update the specified cart item.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "cartId": {
      "type": "string"
    },
    "itemId": {
      "type": "string"
    },
    "$body": {
      "properties": {
        "cartItem": {
          "$ref": "#/definitions/quote-data-cart-item-interface"
        }
      },
      "required": [
        "cartItem"
      ],
      "type": "object"
    }
  },
  "additionalProperties": false,
  "required": [
    "cartId",
    "itemId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/quote-data-cart-item-interface"
}
```
## Operation: V1.carts.cartId.order.put
Places an order for a specified cart.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "cartId": {
      "type": "integer",
      "description": "The cart ID."
    },
    "$body": {
      "properties": {
        "paymentMethod": {
          "$ref": "#/definitions/quote-data-payment-interface"
        }
      },
      "type": "object"
    }
  },
  "additionalProperties": false,
  "required": [
    "cartId"
  ]
}
```
### Output Schema
```json
{
  "description": "Order ID.",
  "type": "integer"
}
```
## Operation: V1.carts.cartId.payment_methods.get
Lists available payment methods for a specified shopping cart. This call returns an array of objects, but detailed information about each object’s attributes might not be included.  See http://devdocs.magento.com/codelinks/attributes.html#PaymentMethodManagementInterface to determine which call to use to get detailed information about all attributes for an object.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "cartId": {
      "type": "integer",
      "description": "The cart ID."
    }
  },
  "additionalProperties": false,
  "required": [
    "cartId"
  ]
}
```
### Output Schema
```json
{
  "description": "Array of payment methods.",
  "items": {
    "$ref": "#/definitions/quote-data-payment-method-interface"
  },
  "type": "array"
}
```
## Operation: V1.carts.cartId.selected_payment_method.get
Returns the payment method for a specified shopping cart.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "cartId": {
      "type": "integer",
      "description": "The cart ID."
    }
  },
  "additionalProperties": false,
  "required": [
    "cartId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/quote-data-payment-interface"
}
```
## Operation: V1.carts.cartId.selected_payment_method.put
Adds a specified payment method to a specified shopping cart.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "cartId": {
      "type": "integer",
      "description": "The cart ID."
    },
    "$body": {
      "properties": {
        "method": {
          "$ref": "#/definitions/quote-data-payment-interface"
        }
      },
      "required": [
        "method"
      ],
      "type": "object"
    }
  },
  "additionalProperties": false,
  "required": [
    "cartId"
  ]
}
```
### Output Schema
```json
{
  "description": "redirect url or error message.",
  "type": "string"
}
```
## Operation: V1.carts.cartId.shipping_information.post


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "cartId": {
      "type": "integer"
    },
    "$body": {
      "properties": {
        "addressInformation": {
          "$ref": "#/definitions/checkout-data-shipping-information-interface"
        }
      },
      "required": [
        "addressInformation"
      ],
      "type": "object"
    }
  },
  "additionalProperties": false,
  "required": [
    "cartId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/checkout-data-payment-details-interface"
}
```
## Operation: V1.carts.cartId.shipping_methods.get
Lists applicable shipping methods for a specified quote.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "cartId": {
      "type": "integer",
      "description": "The shopping cart ID."
    }
  },
  "additionalProperties": false,
  "required": [
    "cartId"
  ]
}
```
### Output Schema
```json
{
  "description": "An array of shipping methods.",
  "items": {
    "$ref": "#/definitions/quote-data-shipping-method-interface"
  },
  "type": "array"
}
```
## Operation: V1.carts.cartId.totals.get
Returns quote totals data for a specified cart.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "cartId": {
      "type": "integer",
      "description": "The cart ID."
    }
  },
  "additionalProperties": false,
  "required": [
    "cartId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/quote-data-totals-interface"
}
```
## Operation: V1.carts.cartId.totals_information.post
Calculate quote totals based on address and shipping method.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "cartId": {
      "type": "integer"
    },
    "$body": {
      "properties": {
        "addressInformation": {
          "$ref": "#/definitions/checkout-data-totals-information-interface"
        }
      },
      "required": [
        "addressInformation"
      ],
      "type": "object"
    }
  },
  "additionalProperties": false,
  "required": [
    "cartId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/quote-data-totals-interface"
}
```
## Operation: giftCardAccountGiftCardAccountManagementV1GetListByQuoteIdGet
Return GiftCard Account cards

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "quoteId": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "quoteId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/gift-card-account-data-gift-card-account-interface"
}
```
## Operation: V1.carts.quoteId.items.post
Add/update the specified cart item.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "quoteId": {
      "type": "string"
    },
    "$body": {
      "properties": {
        "cartItem": {
          "$ref": "#/definitions/quote-data-cart-item-interface"
        }
      },
      "required": [
        "cartItem"
      ],
      "type": "object"
    }
  },
  "additionalProperties": false,
  "required": [
    "quoteId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/quote-data-cart-item-interface"
}
```
## Operation: catalogCategoryManagementV1GetTreeGet
Retrieve list of categories

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "rootCategoryId": {
      "type": "integer"
    },
    "depth": {
      "type": "integer"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/catalog-data-category-tree-interface"
}
```
## Operation: catalogCategoryRepositoryV1SavePost
Create category service

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "$body": {
      "properties": {
        "category": {
          "$ref": "#/definitions/catalog-data-category-interface"
        }
      },
      "required": [
        "category"
      ],
      "type": "object"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/catalog-data-category-interface"
}
```
## Operation: catalogCategoryAttributeRepositoryV1GetListGet
Retrieve all attributes for entity type

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "searchCriteria[filterGroups][][filters][][field]": {
      "type": "string",
      "description": "Field"
    },
    "searchCriteria[filterGroups][][filters][][value]": {
      "type": "string",
      "description": "Value"
    },
    "searchCriteria[filterGroups][][filters][][conditionType]": {
      "type": "string",
      "description": "Condition type"
    },
    "searchCriteria[sortOrders][][field]": {
      "type": "string",
      "description": "Sorting field."
    },
    "searchCriteria[sortOrders][][direction]": {
      "type": "string",
      "description": "Sorting direction."
    },
    "searchCriteria[pageSize]": {
      "type": "integer",
      "description": "Page size."
    },
    "searchCriteria[currentPage]": {
      "type": "integer",
      "description": "Current page."
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/catalog-data-category-attribute-search-results-interface"
}
```
## Operation: catalogCategoryAttributeRepositoryV1GetGet
Retrieve specific attribute

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "attributeCode": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "attributeCode"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/catalog-data-category-attribute-interface"
}
```
## Operation: catalogCategoryAttributeOptionManagementV1GetItemsGet
Retrieve list of attribute options

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "attributeCode": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "attributeCode"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/eav-data-attribute-option-interface"
  },
  "type": "array"
}
```
## Operation: catalogCategoryRepositoryV1DeleteByIdentifierDelete
Delete category by identifier

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "categoryId": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "categoryId"
  ]
}
```
### Output Schema
```json
{
  "description": "Will returned True if deleted",
  "type": "boolean"
}
```
## Operation: catalogCategoryRepositoryV1GetGet
Get info about category by category id

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "categoryId": {
      "type": "integer"
    },
    "storeId": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "categoryId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/catalog-data-category-interface"
}
```
## Operation: catalogCategoryManagementV1MovePut
Move category

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "categoryId": {
      "type": "integer"
    },
    "$body": {
      "properties": {
        "afterId": {
          "type": "integer"
        },
        "parentId": {
          "type": "integer"
        }
      },
      "required": [
        "parentId"
      ],
      "type": "object"
    }
  },
  "additionalProperties": false,
  "required": [
    "categoryId"
  ]
}
```
### Output Schema
```json
{
  "type": "boolean"
}
```
## Operation: catalogCategoryLinkManagementV1GetAssignedProductsGet
Get products assigned to category

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "categoryId": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "categoryId"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/catalog-data-category-product-link-interface"
  },
  "type": "array"
}
```
## Operation: catalogCategoryLinkRepositoryV1SavePost
Assign a product to the required category

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "categoryId": {
      "type": "string"
    },
    "$body": {
      "properties": {
        "productLink": {
          "$ref": "#/definitions/catalog-data-category-product-link-interface"
        }
      },
      "required": [
        "productLink"
      ],
      "type": "object"
    }
  },
  "additionalProperties": false,
  "required": [
    "categoryId"
  ]
}
```
### Output Schema
```json
{
  "description": "will returned True if assigned",
  "type": "boolean"
}
```
## Operation: catalogCategoryLinkRepositoryV1SavePut
Assign a product to the required category

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "categoryId": {
      "type": "string"
    },
    "$body": {
      "properties": {
        "productLink": {
          "$ref": "#/definitions/catalog-data-category-product-link-interface"
        }
      },
      "required": [
        "productLink"
      ],
      "type": "object"
    }
  },
  "additionalProperties": false,
  "required": [
    "categoryId"
  ]
}
```
### Output Schema
```json
{
  "description": "will returned True if assigned",
  "type": "boolean"
}
```
## Operation: catalogCategoryLinkRepositoryV1DeleteByIdsDelete
Remove the product assignment from the category by category id and sku

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "categoryId": {
      "type": "string"
    },
    "sku": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "categoryId",
    "sku"
  ]
}
```
### Output Schema
```json
{
  "description": "will returned True if products successfully deleted",
  "type": "boolean"
}
```
## Operation: catalogCategoryRepositoryV1SavePut
Create category service

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string"
    },
    "$body": {
      "properties": {
        "category": {
          "$ref": "#/definitions/catalog-data-category-interface"
        }
      },
      "required": [
        "category"
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
{
  "$ref": "#/definitions/catalog-data-category-interface"
}
```
## Operation: cmsBlockRepositoryV1SavePost
Save block.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "$body": {
      "properties": {
        "block": {
          "$ref": "#/definitions/cms-data-block-interface"
        }
      },
      "required": [
        "block"
      ],
      "type": "object"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/cms-data-block-interface"
}
```
## Operation: cmsBlockRepositoryV1GetListGet
Retrieve blocks matching the specified criteria.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "searchCriteria[filterGroups][][filters][][field]": {
      "type": "string",
      "description": "Field"
    },
    "searchCriteria[filterGroups][][filters][][value]": {
      "type": "string",
      "description": "Value"
    },
    "searchCriteria[filterGroups][][filters][][conditionType]": {
      "type": "string",
      "description": "Condition type"
    },
    "searchCriteria[sortOrders][][field]": {
      "type": "string",
      "description": "Sorting field."
    },
    "searchCriteria[sortOrders][][direction]": {
      "type": "string",
      "description": "Sorting direction."
    },
    "searchCriteria[pageSize]": {
      "type": "integer",
      "description": "Page size."
    },
    "searchCriteria[currentPage]": {
      "type": "integer",
      "description": "Current page."
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/cms-data-block-search-results-interface"
}
```
## Operation: cmsBlockRepositoryV1DeleteByIdDelete
Delete block by ID.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "blockId": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "blockId"
  ]
}
```
### Output Schema
```json
{
  "description": "true on success",
  "type": "boolean"
}
```
## Operation: cmsBlockRepositoryV1GetByIdGet
Retrieve block.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "blockId": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "blockId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/cms-data-block-interface"
}
```
## Operation: cmsBlockRepositoryV1SavePut
Save block.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string"
    },
    "$body": {
      "properties": {
        "block": {
          "$ref": "#/definitions/cms-data-block-interface"
        }
      },
      "required": [
        "block"
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
{
  "$ref": "#/definitions/cms-data-block-interface"
}
```
## Operation: cmsPageRepositoryV1SavePost
Save page.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "$body": {
      "properties": {
        "page": {
          "$ref": "#/definitions/cms-data-page-interface"
        }
      },
      "required": [
        "page"
      ],
      "type": "object"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/cms-data-page-interface"
}
```
## Operation: cmsPageRepositoryV1GetListGet
Retrieve pages matching the specified criteria.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "searchCriteria[filterGroups][][filters][][field]": {
      "type": "string",
      "description": "Field"
    },
    "searchCriteria[filterGroups][][filters][][value]": {
      "type": "string",
      "description": "Value"
    },
    "searchCriteria[filterGroups][][filters][][conditionType]": {
      "type": "string",
      "description": "Condition type"
    },
    "searchCriteria[sortOrders][][field]": {
      "type": "string",
      "description": "Sorting field."
    },
    "searchCriteria[sortOrders][][direction]": {
      "type": "string",
      "description": "Sorting direction."
    },
    "searchCriteria[pageSize]": {
      "type": "integer",
      "description": "Page size."
    },
    "searchCriteria[currentPage]": {
      "type": "integer",
      "description": "Current page."
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/cms-data-page-search-results-interface"
}
```
## Operation: cmsPageRepositoryV1SavePut
Save page.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string"
    },
    "$body": {
      "properties": {
        "page": {
          "$ref": "#/definitions/cms-data-page-interface"
        }
      },
      "required": [
        "page"
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
{
  "$ref": "#/definitions/cms-data-page-interface"
}
```
## Operation: cmsPageRepositoryV1DeleteByIdDelete
Delete page by ID.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "pageId": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "pageId"
  ]
}
```
### Output Schema
```json
{
  "description": "true on success",
  "type": "boolean"
}
```
## Operation: cmsPageRepositoryV1GetByIdGet
Retrieve page.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "pageId": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "pageId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/cms-data-page-interface"
}
```
## Operation: configurableProductConfigurableProductManagementV1GenerateVariationPut
Generate variation based on same product

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "$body": {
      "properties": {
        "options": {
          "items": {
            "$ref": "#/definitions/configurable-product-data-option-interface"
          },
          "type": "array"
        },
        "product": {
          "$ref": "#/definitions/catalog-data-product-interface"
        }
      },
      "required": [
        "product",
        "options"
      ],
      "type": "object"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/catalog-data-product-interface"
  },
  "type": "array"
}
```
## Operation: configurableProductLinkManagementV1AddChildPost


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "sku": {
      "type": "string"
    },
    "$body": {
      "properties": {
        "childSku": {
          "type": "string"
        }
      },
      "required": [
        "childSku"
      ],
      "type": "object"
    }
  },
  "additionalProperties": false,
  "required": [
    "sku"
  ]
}
```
### Output Schema
```json
{
  "type": "boolean"
}
```
## Operation: configurableProductLinkManagementV1GetChildrenGet
Get all children for Configurable product

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "sku": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "sku"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/catalog-data-product-interface"
  },
  "type": "array"
}
```
## Operation: configurableProductLinkManagementV1RemoveChildDelete
Remove configurable product option

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "sku": {
      "type": "string"
    },
    "childSku": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "sku",
    "childSku"
  ]
}
```
### Output Schema
```json
{
  "type": "boolean"
}
```
## Operation: configurableProductOptionRepositoryV1SavePost
Save option

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "sku": {
      "type": "string"
    },
    "$body": {
      "properties": {
        "option": {
          "$ref": "#/definitions/configurable-product-data-option-interface"
        }
      },
      "required": [
        "option"
      ],
      "type": "object"
    }
  },
  "additionalProperties": false,
  "required": [
    "sku"
  ]
}
```
### Output Schema
```json
{
  "type": "integer"
}
```
## Operation: configurableProductOptionRepositoryV1GetListGet
Get all options for configurable product

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "sku": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "sku"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/configurable-product-data-option-interface"
  },
  "type": "array"
}
```
## Operation: configurableProductOptionRepositoryV1DeleteByIdDelete
Remove option from configurable product

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "sku": {
      "type": "string"
    },
    "id": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "sku",
    "id"
  ]
}
```
### Output Schema
```json
{
  "type": "boolean"
}
```
## Operation: configurableProductOptionRepositoryV1GetGet
Get option for configurable product

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "sku": {
      "type": "string"
    },
    "id": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "sku",
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/configurable-product-data-option-interface"
}
```
## Operation: configurableProductOptionRepositoryV1SavePut
Save option

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "sku": {
      "type": "string"
    },
    "id": {
      "type": "string"
    },
    "$body": {
      "properties": {
        "option": {
          "$ref": "#/definitions/configurable-product-data-option-interface"
        }
      },
      "required": [
        "option"
      ],
      "type": "object"
    }
  },
  "additionalProperties": false,
  "required": [
    "sku",
    "id"
  ]
}
```
### Output Schema
```json
{
  "type": "integer"
}
```
## Operation: salesRuleCouponRepositoryV1SavePost
Save a coupon.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "$body": {
      "properties": {
        "coupon": {
          "$ref": "#/definitions/sales-rule-data-coupon-interface"
        }
      },
      "required": [
        "coupon"
      ],
      "type": "object"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/sales-rule-data-coupon-interface"
}
```
## Operation: salesRuleCouponManagementV1DeleteByCodesPost
Delete coupon by coupon codes.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "$body": {
      "properties": {
        "codes": {
          "items": {
            "type": "string"
          },
          "type": "array"
        },
        "ignoreInvalidCoupons": {
          "type": "boolean"
        }
      },
      "required": [
        "codes"
      ],
      "type": "object"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/sales-rule-data-coupon-mass-delete-result-interface"
}
```
## Operation: salesRuleCouponManagementV1DeleteByIdsPost
Delete coupon by coupon ids.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "$body": {
      "properties": {
        "ids": {
          "items": {
            "type": "integer"
          },
          "type": "array"
        },
        "ignoreInvalidCoupons": {
          "type": "boolean"
        }
      },
      "required": [
        "ids"
      ],
      "type": "object"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/sales-rule-data-coupon-mass-delete-result-interface"
}
```
## Operation: salesRuleCouponManagementV1GeneratePost
Generate coupon for a rule

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "$body": {
      "properties": {
        "couponSpec": {
          "$ref": "#/definitions/sales-rule-data-coupon-generation-spec-interface"
        }
      },
      "required": [
        "couponSpec"
      ],
      "type": "object"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "items": {
    "type": "string"
  },
  "type": "array"
}
```
## Operation: salesRuleCouponRepositoryV1GetListGet
Retrieve a coupon using the specified search criteria. This call returns an array of objects, but detailed information about each object’s attributes might not be included. See http://devdocs.magento.com/codelinks/attributes.html#CouponRepositoryInterface to determine which call to use to get detailed information about all attributes for an object.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "searchCriteria[filterGroups][][filters][][field]": {
      "type": "string",
      "description": "Field"
    },
    "searchCriteria[filterGroups][][filters][][value]": {
      "type": "string",
      "description": "Value"
    },
    "searchCriteria[filterGroups][][filters][][conditionType]": {
      "type": "string",
      "description": "Condition type"
    },
    "searchCriteria[sortOrders][][field]": {
      "type": "string",
      "description": "Sorting field."
    },
    "searchCriteria[sortOrders][][direction]": {
      "type": "string",
      "description": "Sorting direction."
    },
    "searchCriteria[pageSize]": {
      "type": "integer",
      "description": "Page size."
    },
    "searchCriteria[currentPage]": {
      "type": "integer",
      "description": "Current page."
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/sales-rule-data-coupon-search-result-interface"
}
```
## Operation: salesRuleCouponRepositoryV1DeleteByIdDelete
Delete coupon by coupon id.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "couponId": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "couponId"
  ]
}
```
### Output Schema
```json
{
  "description": "true on success",
  "type": "boolean"
}
```
## Operation: salesRuleCouponRepositoryV1GetByIdGet
Get coupon by coupon id.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "couponId": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "couponId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/sales-rule-data-coupon-interface"
}
```
## Operation: salesRuleCouponRepositoryV1SavePut
Save a coupon.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "couponId": {
      "type": "string"
    },
    "$body": {
      "properties": {
        "coupon": {
          "$ref": "#/definitions/sales-rule-data-coupon-interface"
        }
      },
      "required": [
        "coupon"
      ],
      "type": "object"
    }
  },
  "additionalProperties": false,
  "required": [
    "couponId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/sales-rule-data-coupon-interface"
}
```
## Operation: salesCreditmemoRepositoryV1SavePost
Performs persist operations for a specified credit memo.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "$body": {
      "properties": {
        "entity": {
          "$ref": "#/definitions/sales-data-creditmemo-interface"
        }
      },
      "required": [
        "entity"
      ],
      "type": "object"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/sales-data-creditmemo-interface"
}
```
## Operation: salesCreditmemoManagementV1RefundPost
Prepare creditmemo to refund and save it.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "$body": {
      "properties": {
        "creditmemo": {
          "$ref": "#/definitions/sales-data-creditmemo-interface"
        },
        "offlineRequested": {
          "type": "boolean"
        }
      },
      "required": [
        "creditmemo"
      ],
      "type": "object"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/sales-data-creditmemo-interface"
}
```
## Operation: salesCreditmemoRepositoryV1GetGet
Loads a specified credit memo.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "description": "The credit memo ID."
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
{
  "$ref": "#/definitions/sales-data-creditmemo-interface"
}
```
## Operation: salesCreditmemoManagementV1CancelPut
Cancels a specified credit memo.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "description": "The credit memo ID."
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
{
  "type": "boolean"
}
```
## Operation: salesCreditmemoManagementV1GetCommentsListGet
Lists comments for a specified credit memo.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "description": "The credit memo ID."
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
{
  "$ref": "#/definitions/sales-data-creditmemo-comment-search-result-interface"
}
```
## Operation: salesCreditmemoCommentRepositoryV1SavePost
Performs persist operations for a specified entity.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string"
    },
    "$body": {
      "properties": {
        "entity": {
          "$ref": "#/definitions/sales-data-creditmemo-comment-interface"
        }
      },
      "required": [
        "entity"
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
{
  "$ref": "#/definitions/sales-data-creditmemo-comment-interface"
}
```
## Operation: salesCreditmemoManagementV1NotifyPost
Emails a user a specified credit memo.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "description": "The credit memo ID."
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
{
  "type": "boolean"
}
```
## Operation: salesCreditmemoRepositoryV1GetListGet
Lists credit memos that match specified search criteria. This call returns an array of objects, but detailed information about each object’s attributes might not be included. See http://devdocs.magento.com/codelinks/attributes.html#CreditmemoRepositoryInterface to determine which call to use to get detailed information about all attributes for an object.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "searchCriteria[filterGroups][][filters][][field]": {
      "type": "string",
      "description": "Field"
    },
    "searchCriteria[filterGroups][][filters][][value]": {
      "type": "string",
      "description": "Value"
    },
    "searchCriteria[filterGroups][][filters][][conditionType]": {
      "type": "string",
      "description": "Condition type"
    },
    "searchCriteria[sortOrders][][field]": {
      "type": "string",
      "description": "Sorting field."
    },
    "searchCriteria[sortOrders][][direction]": {
      "type": "string",
      "description": "Sorting direction."
    },
    "searchCriteria[pageSize]": {
      "type": "integer",
      "description": "Page size."
    },
    "searchCriteria[currentPage]": {
      "type": "integer",
      "description": "Current page."
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/sales-data-creditmemo-search-result-interface"
}
```
## Operation: customerGroupRepositoryV1SavePost
Save customer group.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "$body": {
      "properties": {
        "group": {
          "$ref": "#/definitions/customer-data-group-interface"
        }
      },
      "required": [
        "group"
      ],
      "type": "object"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/customer-data-group-interface"
}
```
## Operation: V1.customerGroups.default.get
Get default customer group.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "storeId": {
      "type": "integer"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/customer-data-group-interface"
}
```
## Operation: V1.customerGroups.default.storeId.get
Get default customer group.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "storeId": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "storeId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/customer-data-group-interface"
}
```
## Operation: customerGroupRepositoryV1GetListGet
Retrieve customer groups. The list of groups can be filtered to exclude the NOT_LOGGED_IN group using the first parameter and/or it can be filtered by tax class. This call returns an array of objects, but detailed information about each object’s attributes might not be included. See http://devdocs.magento.com/codelinks/attributes.html#GroupRepositoryInterface to determine which call to use to get detailed information about all attributes for an object.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "searchCriteria[filterGroups][][filters][][field]": {
      "type": "string",
      "description": "Field"
    },
    "searchCriteria[filterGroups][][filters][][value]": {
      "type": "string",
      "description": "Value"
    },
    "searchCriteria[filterGroups][][filters][][conditionType]": {
      "type": "string",
      "description": "Condition type"
    },
    "searchCriteria[sortOrders][][field]": {
      "type": "string",
      "description": "Sorting field."
    },
    "searchCriteria[sortOrders][][direction]": {
      "type": "string",
      "description": "Sorting direction."
    },
    "searchCriteria[pageSize]": {
      "type": "integer",
      "description": "Page size."
    },
    "searchCriteria[currentPage]": {
      "type": "integer",
      "description": "Current page."
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/customer-data-group-search-results-interface"
}
```
## Operation: customerGroupRepositoryV1DeleteByIdDelete
Delete customer group by ID.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer"
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
{
  "description": "true on success",
  "type": "boolean"
}
```
## Operation: customerGroupRepositoryV1GetByIdGet
Get customer group by group ID.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer"
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
{
  "$ref": "#/definitions/customer-data-group-interface"
}
```
## Operation: customerGroupRepositoryV1SavePut
Save customer group.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string"
    },
    "$body": {
      "properties": {
        "group": {
          "$ref": "#/definitions/customer-data-group-interface"
        }
      },
      "required": [
        "group"
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
{
  "$ref": "#/definitions/customer-data-group-interface"
}
```
## Operation: customerGroupManagementV1IsReadonlyGet
Check if customer group can be deleted.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer"
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
{
  "type": "boolean"
}
```
## Operation: customerAccountManagementV1CreateAccountPost
Create customer account. Perform necessary business operations like sending email.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "$body": {
      "properties": {
        "customer": {
          "$ref": "#/definitions/customer-data-customer-interface"
        },
        "password": {
          "type": "string"
        },
        "redirectUrl": {
          "type": "string"
        }
      },
      "required": [
        "customer"
      ],
      "type": "object"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/customer-data-customer-interface"
}
```
## Operation: customerAddressRepositoryV1GetByIdGet
Retrieve customer address.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "addressId": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "addressId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/customer-data-address-interface"
}
```
## Operation: customerAccountManagementV1ResendConfirmationPost
Resend confirmation email.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "$body": {
      "properties": {
        "email": {
          "type": "string"
        },
        "redirectUrl": {
          "type": "string"
        },
        "websiteId": {
          "type": "integer"
        }
      },
      "required": [
        "email",
        "websiteId"
      ],
      "type": "object"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "description": "true on success",
  "type": "boolean"
}
```
## Operation: customerAccountManagementV1IsEmailAvailablePost
Check if given email is associated with a customer account in given website.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "$body": {
      "properties": {
        "customerEmail": {
          "type": "string"
        },
        "websiteId": {
          "description": "If not set, will use the current websiteId",
          "type": "integer"
        }
      },
      "required": [
        "customerEmail"
      ],
      "type": "object"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "type": "boolean"
}
```
## Operation: V1.customers.me.get
Get customer by customer ID.

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "$ref": "#/definitions/customer-data-customer-interface"
}
```
## Operation: V1.customers.me.put
Create or update a customer.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "$body": {
      "properties": {
        "customer": {
          "$ref": "#/definitions/customer-data-customer-interface"
        },
        "passwordHash": {
          "type": "string"
        }
      },
      "required": [
        "customer"
      ],
      "type": "object"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/customer-data-customer-interface"
}
```
## Operation: customerAccountManagementV1ActivateByIdPut
Activate a customer account using a key that was sent in a confirmation email.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "$body": {
      "properties": {
        "confirmationKey": {
          "type": "string"
        }
      },
      "required": [
        "confirmationKey"
      ],
      "type": "object"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/customer-data-customer-interface"
}
```
## Operation: V1.customers.me.billingAddress.get
Retrieve default billing address for the given customerId.

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "$ref": "#/definitions/customer-data-address-interface"
}
```
## Operation: customerAccountManagementV1ChangePasswordByIdPut
Change customer password.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "$body": {
      "properties": {
        "currentPassword": {
          "type": "string"
        },
        "newPassword": {
          "type": "string"
        }
      },
      "required": [
        "currentPassword",
        "newPassword"
      ],
      "type": "object"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "description": "true on success",
  "type": "boolean"
}
```
## Operation: V1.customers.me.shippingAddress.get
Retrieve default shipping address for the given customerId.

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "$ref": "#/definitions/customer-data-address-interface"
}
```
## Operation: customerAccountManagementV1InitiatePasswordResetPut
Send an email to the customer with a password reset link.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "$body": {
      "properties": {
        "email": {
          "type": "string"
        },
        "template": {
          "type": "string"
        },
        "websiteId": {
          "type": "integer"
        }
      },
      "required": [
        "email",
        "template"
      ],
      "type": "object"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "description": "true on success",
  "type": "boolean"
}
```
## Operation: customerCustomerRepositoryV1GetListGet
Retrieve customers which match a specified criteria. This call returns an array of objects, but detailed information about each object’s attributes might not be included. See http://devdocs.magento.com/codelinks/attributes.html#CustomerRepositoryInterface to determine which call to use to get detailed information about all attributes for an object.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "searchCriteria[filterGroups][][filters][][field]": {
      "type": "string",
      "description": "Field"
    },
    "searchCriteria[filterGroups][][filters][][value]": {
      "type": "string",
      "description": "Value"
    },
    "searchCriteria[filterGroups][][filters][][conditionType]": {
      "type": "string",
      "description": "Condition type"
    },
    "searchCriteria[sortOrders][][field]": {
      "type": "string",
      "description": "Sorting field."
    },
    "searchCriteria[sortOrders][][direction]": {
      "type": "string",
      "description": "Sorting direction."
    },
    "searchCriteria[pageSize]": {
      "type": "integer",
      "description": "Page size."
    },
    "searchCriteria[currentPage]": {
      "type": "integer",
      "description": "Current page."
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/customer-data-customer-search-results-interface"
}
```
## Operation: customerAccountManagementV1ValidatePut
Validate customer data.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "$body": {
      "properties": {
        "customer": {
          "$ref": "#/definitions/customer-data-customer-interface"
        }
      },
      "required": [
        "customer"
      ],
      "type": "object"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/customer-data-validation-results-interface"
}
```
## Operation: customerCustomerRepositoryV1DeleteByIdDelete
Delete customer by ID.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "customerId": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "customerId"
  ]
}
```
### Output Schema
```json
{
  "description": "true on success",
  "type": "boolean"
}
```
## Operation: V1.customers.customerId.get
Get customer by customer ID.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "customerId": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "customerId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/customer-data-customer-interface"
}
```
## Operation: V1.customers.customerId.billingAddress.get
Retrieve default billing address for the given customerId.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "customerId": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "customerId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/customer-data-address-interface"
}
```
## Operation: V1.customers.customerId.carts.post
Creates an empty cart and quote for a specified customer.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "customerId": {
      "type": "integer",
      "description": "The customer ID."
    }
  },
  "additionalProperties": false,
  "required": [
    "customerId"
  ]
}
```
### Output Schema
```json
{
  "description": "Cart ID.",
  "type": "integer"
}
```
## Operation: customerAccountManagementV1GetConfirmationStatusGet
Gets the account confirmation status.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "customerId": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "customerId"
  ]
}
```
### Output Schema
```json
{
  "type": "string"
}
```
## Operation: customerAccountManagementV1ValidateResetPasswordLinkTokenGet
Check if password reset token is valid.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "customerId": {
      "type": "integer"
    },
    "resetPasswordLinkToken": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "customerId",
    "resetPasswordLinkToken"
  ]
}
```
### Output Schema
```json
{
  "description": "True if the token is valid",
  "type": "boolean"
}
```
## Operation: customerAccountManagementV1IsReadonlyGet
Check if customer can be deleted.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "customerId": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "customerId"
  ]
}
```
### Output Schema
```json
{
  "type": "boolean"
}
```
## Operation: V1.customers.customerId.shippingAddress.get
Retrieve default shipping address for the given customerId.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "customerId": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "customerId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/customer-data-address-interface"
}
```
## Operation: customerAccountManagementV1ActivatePut
Activate a customer account using a key that was sent in a confirmation email.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "email": {
      "type": "string"
    },
    "$body": {
      "properties": {
        "confirmationKey": {
          "type": "string"
        }
      },
      "required": [
        "confirmationKey"
      ],
      "type": "object"
    }
  },
  "additionalProperties": false,
  "required": [
    "email"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/customer-data-customer-interface"
}
```
## Operation: V1.customers.id.put
Create or update a customer.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string"
    },
    "$body": {
      "properties": {
        "customer": {
          "$ref": "#/definitions/customer-data-customer-interface"
        },
        "passwordHash": {
          "type": "string"
        }
      },
      "required": [
        "customer"
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
{
  "$ref": "#/definitions/customer-data-customer-interface"
}
```
## Operation: directoryCountryInformationAcquirerV1GetCountriesInfoGet
Get all countries and regions information for the store.

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/directory-data-country-information-interface"
  },
  "type": "array"
}
```
## Operation: directoryCountryInformationAcquirerV1GetCountryInfoGet
Get country and region information for the store.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "countryId": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "countryId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/directory-data-country-information-interface"
}
```
## Operation: directoryCurrencyInformationAcquirerV1GetCurrencyInfoGet
Get currency information for the store.

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "$ref": "#/definitions/directory-data-currency-information-interface"
}
```
## Operation: eavAttributeSetManagementV1CreatePost
Create attribute set from data

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "$body": {
      "properties": {
        "attributeSet": {
          "$ref": "#/definitions/eav-data-attribute-set-interface"
        },
        "entityTypeCode": {
          "type": "string"
        },
        "skeletonId": {
          "type": "integer"
        }
      },
      "required": [
        "entityTypeCode",
        "attributeSet",
        "skeletonId"
      ],
      "type": "object"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/eav-data-attribute-set-interface"
}
```
## Operation: eavAttributeSetRepositoryV1GetListGet
Retrieve list of Attribute Sets This call returns an array of objects, but detailed information about each object’s attributes might not be included. See http://devdocs.magento.com/codelinks/attributes.html#AttributeSetRepositoryInterface to determine which call to use to get detailed information about all attributes for an object.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "searchCriteria[filterGroups][][filters][][field]": {
      "type": "string",
      "description": "Field"
    },
    "searchCriteria[filterGroups][][filters][][value]": {
      "type": "string",
      "description": "Value"
    },
    "searchCriteria[filterGroups][][filters][][conditionType]": {
      "type": "string",
      "description": "Condition type"
    },
    "searchCriteria[sortOrders][][field]": {
      "type": "string",
      "description": "Sorting field."
    },
    "searchCriteria[sortOrders][][direction]": {
      "type": "string",
      "description": "Sorting direction."
    },
    "searchCriteria[pageSize]": {
      "type": "integer",
      "description": "Page size."
    },
    "searchCriteria[currentPage]": {
      "type": "integer",
      "description": "Current page."
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/eav-data-attribute-set-search-results-interface"
}
```
## Operation: eavAttributeSetRepositoryV1DeleteByIdDelete
Remove attribute set by given ID

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "attributeSetId": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "attributeSetId"
  ]
}
```
### Output Schema
```json
{
  "type": "boolean"
}
```
## Operation: eavAttributeSetRepositoryV1GetGet
Retrieve attribute set information based on given ID

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "attributeSetId": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "attributeSetId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/eav-data-attribute-set-interface"
}
```
## Operation: eavAttributeSetRepositoryV1SavePut
Save attribute set data

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "attributeSetId": {
      "type": "string"
    },
    "$body": {
      "properties": {
        "attributeSet": {
          "$ref": "#/definitions/eav-data-attribute-set-interface"
        }
      },
      "required": [
        "attributeSet"
      ],
      "type": "object"
    }
  },
  "additionalProperties": false,
  "required": [
    "attributeSetId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/eav-data-attribute-set-interface"
}
```
## Operation: giftWrappingWrappingRepositoryV1GetListGet
Return list of gift wrapping data objects based on search criteria

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "searchCriteria[filterGroups][][filters][][field]": {
      "type": "string",
      "description": "Field"
    },
    "searchCriteria[filterGroups][][filters][][value]": {
      "type": "string",
      "description": "Value"
    },
    "searchCriteria[filterGroups][][filters][][conditionType]": {
      "type": "string",
      "description": "Condition type"
    },
    "searchCriteria[sortOrders][][field]": {
      "type": "string",
      "description": "Sorting field."
    },
    "searchCriteria[sortOrders][][direction]": {
      "type": "string",
      "description": "Sorting direction."
    },
    "searchCriteria[pageSize]": {
      "type": "integer",
      "description": "Page size."
    },
    "searchCriteria[currentPage]": {
      "type": "integer",
      "description": "Current page."
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/gift-wrapping-data-wrapping-search-results-interface"
}
```
## Operation: giftWrappingWrappingRepositoryV1SavePost
Create/Update new gift wrapping with data object values

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "$body": {
      "properties": {
        "data": {
          "$ref": "#/definitions/gift-wrapping-data-wrapping-interface"
        },
        "storeId": {
          "type": "integer"
        }
      },
      "required": [
        "data"
      ],
      "type": "object"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/gift-wrapping-data-wrapping-interface"
}
```
## Operation: giftWrappingWrappingRepositoryV1DeleteByIdDelete
Delete gift wrapping

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer"
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
{
  "type": "boolean"
}
```
## Operation: giftWrappingWrappingRepositoryV1GetGet
Return data object for specified wrapping ID and store.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer"
    },
    "storeId": {
      "type": "integer"
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
{
  "$ref": "#/definitions/gift-wrapping-data-wrapping-interface"
}
```
## Operation: giftWrappingWrappingRepositoryV1SavePut
Create/Update new gift wrapping with data object values

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "wrappingId": {
      "type": "string"
    },
    "$body": {
      "properties": {
        "data": {
          "$ref": "#/definitions/gift-wrapping-data-wrapping-interface"
        },
        "storeId": {
          "type": "integer"
        }
      },
      "required": [
        "data"
      ],
      "type": "object"
    }
  },
  "additionalProperties": false,
  "required": [
    "wrappingId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/gift-wrapping-data-wrapping-interface"
}
```
## Operation: giftRegistryShippingMethodManagementV1EstimateByRegistryIdPost
Estimate shipping

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "$body": {
      "properties": {
        "registryId": {
          "description": "The estimate registry id",
          "type": "integer"
        }
      },
      "required": [
        "registryId"
      ],
      "type": "object"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "description": "An array of shipping methods.",
  "items": {
    "$ref": "#/definitions/quote-data-shipping-method-interface"
  },
  "type": "array"
}
```
## Operation: quoteGuestCartManagementV1CreateEmptyCartPost
Enable an customer or guest user to create an empty cart and quote for an anonymous customer.

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "description": "Cart ID.",
  "type": "string"
}
```
## Operation: quoteGuestCartRepositoryV1GetGet
Enable a guest user to return information for a specified cart.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "cartId": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "cartId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/quote-data-cart-interface"
}
```
## Operation: quoteGuestCartManagementV1AssignCustomerPut
Assign a specified customer to a specified shopping cart.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "cartId": {
      "type": "string",
      "description": "The cart ID."
    },
    "$body": {
      "properties": {
        "customerId": {
          "description": "The customer ID.",
          "type": "integer"
        },
        "storeId": {
          "type": "integer"
        }
      },
      "required": [
        "customerId",
        "storeId"
      ],
      "type": "object"
    }
  },
  "additionalProperties": false,
  "required": [
    "cartId"
  ]
}
```
### Output Schema
```json
{
  "type": "boolean"
}
```
## Operation: quoteGuestBillingAddressManagementV1GetGet
Return the billing address for a specified quote.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "cartId": {
      "type": "string",
      "description": "The cart ID."
    }
  },
  "additionalProperties": false,
  "required": [
    "cartId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/quote-data-address-interface"
}
```
## Operation: quoteGuestBillingAddressManagementV1AssignPost
Assign a specified billing address to a specified cart.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "cartId": {
      "type": "string",
      "description": "The cart ID."
    },
    "$body": {
      "properties": {
        "address": {
          "$ref": "#/definitions/quote-data-address-interface"
        }
      },
      "required": [
        "address"
      ],
      "type": "object"
    }
  },
  "additionalProperties": false,
  "required": [
    "cartId"
  ]
}
```
### Output Schema
```json
{
  "description": "Address ID.",
  "type": "integer"
}
```
## Operation: quoteGuestCartTotalManagementV1CollectTotalsPut
Set shipping/billing methods and additional data for cart and collect totals for guest.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "cartId": {
      "type": "string",
      "description": "The cart ID."
    },
    "$body": {
      "properties": {
        "additionalData": {
          "$ref": "#/definitions/quote-data-totals-additional-data-interface"
        },
        "paymentMethod": {
          "$ref": "#/definitions/quote-data-payment-interface"
        },
        "shippingCarrierCode": {
          "description": "The carrier code.",
          "type": "string"
        },
        "shippingMethodCode": {
          "description": "The shipping method code.",
          "type": "string"
        }
      },
      "required": [
        "paymentMethod"
      ],
      "type": "object"
    }
  },
  "additionalProperties": false,
  "required": [
    "cartId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/quote-data-totals-interface"
}
```
## Operation: quoteGuestCouponManagementV1RemoveDelete
Delete a coupon from a specified cart.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "cartId": {
      "type": "string",
      "description": "The cart ID."
    }
  },
  "additionalProperties": false,
  "required": [
    "cartId"
  ]
}
```
### Output Schema
```json
{
  "type": "boolean"
}
```
## Operation: quoteGuestCouponManagementV1GetGet
Return information for a coupon in a specified cart.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "cartId": {
      "type": "string",
      "description": "The cart ID."
    }
  },
  "additionalProperties": false,
  "required": [
    "cartId"
  ]
}
```
### Output Schema
```json
{
  "description": "The coupon code data.",
  "type": "string"
}
```
## Operation: quoteGuestCouponManagementV1SetPut
Add a coupon by code to a specified cart.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "cartId": {
      "type": "string",
      "description": "The cart ID."
    },
    "couponCode": {
      "type": "string",
      "description": "The coupon code data."
    }
  },
  "additionalProperties": false,
  "required": [
    "cartId",
    "couponCode"
  ]
}
```
### Output Schema
```json
{
  "type": "boolean"
}
```
## Operation: quoteGuestShipmentEstimationV1EstimateByExtendedAddressPost
Estimate shipping by address and return list of available shipping methods

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "cartId": {
      "type": "string"
    },
    "$body": {
      "properties": {
        "address": {
          "$ref": "#/definitions/quote-data-address-interface"
        }
      },
      "required": [
        "address"
      ],
      "type": "object"
    }
  },
  "additionalProperties": false,
  "required": [
    "cartId"
  ]
}
```
### Output Schema
```json
{
  "description": "An array of shipping methods",
  "items": {
    "$ref": "#/definitions/quote-data-shipping-method-interface"
  },
  "type": "array"
}
```
## Operation: giftMessageGuestCartRepositoryV1GetGet
Return the gift message for a specified order.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "cartId": {
      "type": "string",
      "description": "The shopping cart ID."
    }
  },
  "additionalProperties": false,
  "required": [
    "cartId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/gift-message-data-message-interface"
}
```
## Operation: giftMessageGuestCartRepositoryV1SavePost
Set the gift message for an entire order.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "cartId": {
      "type": "string",
      "description": "The cart ID."
    },
    "$body": {
      "properties": {
        "giftMessage": {
          "$ref": "#/definitions/gift-message-data-message-interface"
        }
      },
      "required": [
        "giftMessage"
      ],
      "type": "object"
    }
  },
  "additionalProperties": false,
  "required": [
    "cartId"
  ]
}
```
### Output Schema
```json
{
  "type": "boolean"
}
```
## Operation: giftMessageGuestItemRepositoryV1GetGet
Return the gift message for a specified item in a specified shopping cart.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "cartId": {
      "type": "string",
      "description": "The shopping cart ID."
    },
    "itemId": {
      "type": "integer",
      "description": "The item ID."
    }
  },
  "additionalProperties": false,
  "required": [
    "cartId",
    "itemId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/gift-message-data-message-interface"
}
```
## Operation: giftMessageGuestItemRepositoryV1SavePost
Set the gift message for a specified item in a specified shopping cart.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "cartId": {
      "type": "string",
      "description": "The cart ID."
    },
    "itemId": {
      "type": "integer",
      "description": "The item ID."
    },
    "$body": {
      "properties": {
        "giftMessage": {
          "$ref": "#/definitions/gift-message-data-message-interface"
        }
      },
      "required": [
        "giftMessage"
      ],
      "type": "object"
    }
  },
  "additionalProperties": false,
  "required": [
    "cartId",
    "itemId"
  ]
}
```
### Output Schema
```json
{
  "type": "boolean"
}
```
## Operation: quoteGuestCartItemRepositoryV1GetListGet
List items that are assigned to a specified cart.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "cartId": {
      "type": "string",
      "description": "The cart ID."
    }
  },
  "additionalProperties": false,
  "required": [
    "cartId"
  ]
}
```
### Output Schema
```json
{
  "description": "Array of items.",
  "items": {
    "$ref": "#/definitions/quote-data-cart-item-interface"
  },
  "type": "array"
}
```
## Operation: quoteGuestCartItemRepositoryV1SavePost
Add the specified item to the specified cart.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "cartId": {
      "type": "string"
    },
    "$body": {
      "properties": {
        "cartItem": {
          "$ref": "#/definitions/quote-data-cart-item-interface"
        }
      },
      "required": [
        "cartItem"
      ],
      "type": "object"
    }
  },
  "additionalProperties": false,
  "required": [
    "cartId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/quote-data-cart-item-interface"
}
```
## Operation: quoteGuestCartItemRepositoryV1DeleteByIdDelete
Remove the specified item from the specified cart.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "cartId": {
      "type": "string",
      "description": "The cart ID."
    },
    "itemId": {
      "type": "integer",
      "description": "The item ID of the item to be removed."
    }
  },
  "additionalProperties": false,
  "required": [
    "cartId",
    "itemId"
  ]
}
```
### Output Schema
```json
{
  "type": "boolean"
}
```
## Operation: quoteGuestCartItemRepositoryV1SavePut
Add the specified item to the specified cart.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "cartId": {
      "type": "string"
    },
    "itemId": {
      "type": "string"
    },
    "$body": {
      "properties": {
        "cartItem": {
          "$ref": "#/definitions/quote-data-cart-item-interface"
        }
      },
      "required": [
        "cartItem"
      ],
      "type": "object"
    }
  },
  "additionalProperties": false,
  "required": [
    "cartId",
    "itemId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/quote-data-cart-item-interface"
}
```
## Operation: quoteGuestCartManagementV1PlaceOrderPut
Place an order for a specified cart.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "cartId": {
      "type": "string",
      "description": "The cart ID."
    },
    "$body": {
      "properties": {
        "paymentMethod": {
          "$ref": "#/definitions/quote-data-payment-interface"
        }
      },
      "type": "object"
    }
  },
  "additionalProperties": false,
  "required": [
    "cartId"
  ]
}
```
### Output Schema
```json
{
  "description": "Order ID.",
  "type": "integer"
}
```
## Operation: checkoutGuestPaymentInformationManagementV1GetPaymentInformationGet
Get payment information

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "cartId": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "cartId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/checkout-data-payment-details-interface"
}
```
## Operation: checkoutGuestPaymentInformationManagementV1SavePaymentInformationAndPlaceOrderPost
Set payment information and place order for a specified cart.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "cartId": {
      "type": "string"
    },
    "$body": {
      "properties": {
        "billingAddress": {
          "$ref": "#/definitions/quote-data-address-interface"
        },
        "email": {
          "type": "string"
        },
        "paymentMethod": {
          "$ref": "#/definitions/quote-data-payment-interface"
        }
      },
      "required": [
        "email",
        "paymentMethod"
      ],
      "type": "object"
    }
  },
  "additionalProperties": false,
  "required": [
    "cartId"
  ]
}
```
### Output Schema
```json
{
  "description": "Order ID.",
  "type": "integer"
}
```
## Operation: quoteGuestPaymentMethodManagementV1GetListGet
List available payment methods for a specified shopping cart. This call returns an array of objects, but detailed information about each object’s attributes might not be included.  See http://devdocs.magento.com/codelinks/attributes.html#GuestPaymentMethodManagementInterface to determine which call to use to get detailed information about all attributes for an object.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "cartId": {
      "type": "string",
      "description": "The cart ID."
    }
  },
  "additionalProperties": false,
  "required": [
    "cartId"
  ]
}
```
### Output Schema
```json
{
  "description": "Array of payment methods.",
  "items": {
    "$ref": "#/definitions/quote-data-payment-method-interface"
  },
  "type": "array"
}
```
## Operation: quoteGuestPaymentMethodManagementV1GetGet
Return the payment method for a specified shopping cart.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "cartId": {
      "type": "string",
      "description": "The cart ID."
    }
  },
  "additionalProperties": false,
  "required": [
    "cartId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/quote-data-payment-interface"
}
```
## Operation: quoteGuestPaymentMethodManagementV1SetPut
Add a specified payment method to a specified shopping cart.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "cartId": {
      "type": "string",
      "description": "The cart ID."
    },
    "$body": {
      "properties": {
        "method": {
          "$ref": "#/definitions/quote-data-payment-interface"
        }
      },
      "required": [
        "method"
      ],
      "type": "object"
    }
  },
  "additionalProperties": false,
  "required": [
    "cartId"
  ]
}
```
### Output Schema
```json
{
  "description": "Payment method ID.",
  "type": "integer"
}
```
## Operation: checkoutGuestPaymentInformationManagementV1SavePaymentInformationPost
Set payment information for a specified cart.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "cartId": {
      "type": "string"
    },
    "$body": {
      "properties": {
        "billingAddress": {
          "$ref": "#/definitions/quote-data-address-interface"
        },
        "email": {
          "type": "string"
        },
        "paymentMethod": {
          "$ref": "#/definitions/quote-data-payment-interface"
        }
      },
      "required": [
        "email",
        "paymentMethod"
      ],
      "type": "object"
    }
  },
  "additionalProperties": false,
  "required": [
    "cartId"
  ]
}
```
### Output Schema
```json
{
  "description": "Order ID.",
  "type": "integer"
}
```
## Operation: checkoutGuestShippingInformationManagementV1SaveAddressInformationPost


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "cartId": {
      "type": "string"
    },
    "$body": {
      "properties": {
        "addressInformation": {
          "$ref": "#/definitions/checkout-data-shipping-information-interface"
        }
      },
      "required": [
        "addressInformation"
      ],
      "type": "object"
    }
  },
  "additionalProperties": false,
  "required": [
    "cartId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/checkout-data-payment-details-interface"
}
```
## Operation: quoteGuestShippingMethodManagementV1GetListGet
List applicable shipping methods for a specified quote.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "cartId": {
      "type": "string",
      "description": "The shopping cart ID."
    }
  },
  "additionalProperties": false,
  "required": [
    "cartId"
  ]
}
```
### Output Schema
```json
{
  "description": "An array of shipping methods.",
  "items": {
    "$ref": "#/definitions/quote-data-shipping-method-interface"
  },
  "type": "array"
}
```
## Operation: quoteGuestCartTotalRepositoryV1GetGet
Return quote totals data for a specified cart.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "cartId": {
      "type": "string",
      "description": "The cart ID."
    }
  },
  "additionalProperties": false,
  "required": [
    "cartId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/quote-data-totals-interface"
}
```
## Operation: checkoutGuestTotalsInformationManagementV1CalculatePost
Calculate quote totals based on address and shipping method.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "cartId": {
      "type": "string"
    },
    "$body": {
      "properties": {
        "addressInformation": {
          "$ref": "#/definitions/checkout-data-totals-information-interface"
        }
      },
      "required": [
        "addressInformation"
      ],
      "type": "object"
    }
  },
  "additionalProperties": false,
  "required": [
    "cartId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/quote-data-totals-interface"
}
```
## Operation: giftRegistryGuestCartShippingMethodManagementV1EstimateByRegistryIdPost
Estimate shipping

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "cartId": {
      "type": "string",
      "description": "The shopping cart ID."
    },
    "$body": {
      "properties": {
        "registryId": {
          "description": "The estimate registry id",
          "type": "integer"
        }
      },
      "required": [
        "registryId"
      ],
      "type": "object"
    }
  },
  "additionalProperties": false,
  "required": [
    "cartId"
  ]
}
```
### Output Schema
```json
{
  "description": "An array of shipping methods.",
  "items": {
    "$ref": "#/definitions/quote-data-shipping-method-interface"
  },
  "type": "array"
}
```
## Operation: integrationAdminTokenServiceV1CreateAdminAccessTokenPost
Create access token for admin given the admin credentials.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "$body": {
      "properties": {
        "password": {
          "type": "string"
        },
        "username": {
          "type": "string"
        }
      },
      "required": [
        "username",
        "password"
      ],
      "type": "object"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "description": "Token created",
  "type": "string"
}
```
## Operation: integrationCustomerTokenServiceV1CreateCustomerAccessTokenPost
Create access token for admin given the customer credentials.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "$body": {
      "properties": {
        "password": {
          "type": "string"
        },
        "username": {
          "type": "string"
        }
      },
      "required": [
        "username",
        "password"
      ],
      "type": "object"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "description": "Token created",
  "type": "string"
}
```
## Operation: salesRefundInvoiceV1ExecutePost
Create refund for invoice

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "invoiceId": {
      "type": "integer"
    },
    "$body": {
      "properties": {
        "appendComment": {
          "type": "boolean"
        },
        "arguments": {
          "$ref": "#/definitions/sales-data-creditmemo-creation-arguments-interface"
        },
        "comment": {
          "$ref": "#/definitions/sales-data-creditmemo-comment-creation-interface"
        },
        "isOnline": {
          "type": "boolean"
        },
        "items": {
          "items": {
            "$ref": "#/definitions/sales-data-creditmemo-item-creation-interface"
          },
          "type": "array"
        },
        "notify": {
          "type": "boolean"
        }
      },
      "type": "object"
    }
  },
  "additionalProperties": false,
  "required": [
    "invoiceId"
  ]
}
```
### Output Schema
```json
{
  "type": "integer"
}
```
## Operation: salesInvoiceRepositoryV1GetListGet
Lists invoices that match specified search criteria. This call returns an array of objects, but detailed information about each object’s attributes might not be included. See http://devdocs.magento.com/codelinks/attributes.html#InvoiceRepositoryInterface to determine which call to use to get detailed information about all attributes for an object.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "searchCriteria[filterGroups][][filters][][field]": {
      "type": "string",
      "description": "Field"
    },
    "searchCriteria[filterGroups][][filters][][value]": {
      "type": "string",
      "description": "Value"
    },
    "searchCriteria[filterGroups][][filters][][conditionType]": {
      "type": "string",
      "description": "Condition type"
    },
    "searchCriteria[sortOrders][][field]": {
      "type": "string",
      "description": "Sorting field."
    },
    "searchCriteria[sortOrders][][direction]": {
      "type": "string",
      "description": "Sorting direction."
    },
    "searchCriteria[pageSize]": {
      "type": "integer",
      "description": "Page size."
    },
    "searchCriteria[currentPage]": {
      "type": "integer",
      "description": "Current page."
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/sales-data-invoice-search-result-interface"
}
```
## Operation: salesInvoiceRepositoryV1SavePost
Performs persist operations for a specified invoice.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "$body": {
      "properties": {
        "entity": {
          "$ref": "#/definitions/sales-data-invoice-interface"
        }
      },
      "required": [
        "entity"
      ],
      "type": "object"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/sales-data-invoice-interface"
}
```
## Operation: salesInvoiceCommentRepositoryV1SavePost
Performs persist operations for a specified invoice comment.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "$body": {
      "properties": {
        "entity": {
          "$ref": "#/definitions/sales-data-invoice-comment-interface"
        }
      },
      "required": [
        "entity"
      ],
      "type": "object"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/sales-data-invoice-comment-interface"
}
```
## Operation: salesInvoiceRepositoryV1GetGet
Loads a specified invoice.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "description": "The invoice ID."
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
{
  "$ref": "#/definitions/sales-data-invoice-interface"
}
```
## Operation: salesInvoiceManagementV1SetCapturePost
Sets invoice capture.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer"
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
{
  "type": "string"
}
```
## Operation: salesInvoiceManagementV1GetCommentsListGet
Lists comments for a specified invoice.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "description": "The invoice ID."
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
{
  "$ref": "#/definitions/sales-data-invoice-comment-search-result-interface"
}
```
## Operation: salesInvoiceManagementV1NotifyPost
Emails a user a specified invoice.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "description": "The invoice ID."
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
{
  "type": "boolean"
}
```
## Operation: salesInvoiceManagementV1SetVoidPost
Voids a specified invoice.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "description": "The invoice ID."
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
{
  "type": "boolean"
}
```
## Operation: backendModuleServiceV1GetModulesGet
Returns an array of enabled modules

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "items": {
    "type": "string"
  },
  "type": "array"
}
```
## Operation: salesInvoiceOrderV1ExecutePost


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "orderId": {
      "type": "integer"
    },
    "$body": {
      "properties": {
        "appendComment": {
          "type": "boolean"
        },
        "arguments": {
          "$ref": "#/definitions/sales-data-invoice-creation-arguments-interface"
        },
        "capture": {
          "type": "boolean"
        },
        "comment": {
          "$ref": "#/definitions/sales-data-invoice-comment-creation-interface"
        },
        "items": {
          "items": {
            "$ref": "#/definitions/sales-data-invoice-item-creation-interface"
          },
          "type": "array"
        },
        "notify": {
          "type": "boolean"
        }
      },
      "type": "object"
    }
  },
  "additionalProperties": false,
  "required": [
    "orderId"
  ]
}
```
### Output Schema
```json
{
  "type": "integer"
}
```
## Operation: salesRefundOrderV1ExecutePost
Create offline refund for order

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "orderId": {
      "type": "integer"
    },
    "$body": {
      "properties": {
        "appendComment": {
          "type": "boolean"
        },
        "arguments": {
          "$ref": "#/definitions/sales-data-creditmemo-creation-arguments-interface"
        },
        "comment": {
          "$ref": "#/definitions/sales-data-creditmemo-comment-creation-interface"
        },
        "items": {
          "items": {
            "$ref": "#/definitions/sales-data-creditmemo-item-creation-interface"
          },
          "type": "array"
        },
        "notify": {
          "type": "boolean"
        }
      },
      "type": "object"
    }
  },
  "additionalProperties": false,
  "required": [
    "orderId"
  ]
}
```
### Output Schema
```json
{
  "type": "integer"
}
```
## Operation: salesShipOrderV1ExecutePost
Creates new Shipment for given Order.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "orderId": {
      "type": "integer"
    },
    "$body": {
      "properties": {
        "appendComment": {
          "type": "boolean"
        },
        "arguments": {
          "$ref": "#/definitions/sales-data-shipment-creation-arguments-interface"
        },
        "comment": {
          "$ref": "#/definitions/sales-data-shipment-comment-creation-interface"
        },
        "items": {
          "items": {
            "$ref": "#/definitions/sales-data-shipment-item-creation-interface"
          },
          "type": "array"
        },
        "notify": {
          "type": "boolean"
        },
        "packages": {
          "items": {
            "$ref": "#/definitions/sales-data-shipment-package-creation-interface"
          },
          "type": "array"
        },
        "tracks": {
          "items": {
            "$ref": "#/definitions/sales-data-shipment-track-creation-interface"
          },
          "type": "array"
        }
      },
      "type": "object"
    }
  },
  "additionalProperties": false,
  "required": [
    "orderId"
  ]
}
```
### Output Schema
```json
{
  "description": "Id of created Shipment.",
  "type": "integer"
}
```
## Operation: salesOrderRepositoryV1GetListGet
Lists orders that match specified search criteria. This call returns an array of objects, but detailed information about each object’s attributes might not be included. See http://devdocs.magento.com/codelinks/attributes.html#OrderRepositoryInterface to determine which call to use to get detailed information about all attributes for an object.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "searchCriteria[filterGroups][][filters][][field]": {
      "type": "string",
      "description": "Field"
    },
    "searchCriteria[filterGroups][][filters][][value]": {
      "type": "string",
      "description": "Value"
    },
    "searchCriteria[filterGroups][][filters][][conditionType]": {
      "type": "string",
      "description": "Condition type"
    },
    "searchCriteria[sortOrders][][field]": {
      "type": "string",
      "description": "Sorting field."
    },
    "searchCriteria[sortOrders][][direction]": {
      "type": "string",
      "description": "Sorting direction."
    },
    "searchCriteria[pageSize]": {
      "type": "integer",
      "description": "Page size."
    },
    "searchCriteria[currentPage]": {
      "type": "integer",
      "description": "Current page."
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/sales-data-order-search-result-interface"
}
```
## Operation: salesOrderRepositoryV1SavePost
Performs persist operations for a specified order.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "$body": {
      "properties": {
        "entity": {
          "$ref": "#/definitions/sales-data-order-interface"
        }
      },
      "required": [
        "entity"
      ],
      "type": "object"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/sales-data-order-interface"
}
```
## Operation: salesOrderRepositoryV1SavePut
Performs persist operations for a specified order.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "$body": {
      "properties": {
        "entity": {
          "$ref": "#/definitions/sales-data-order-interface"
        }
      },
      "required": [
        "entity"
      ],
      "type": "object"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/sales-data-order-interface"
}
```
## Operation: salesOrderItemRepositoryV1GetListGet
Lists order items that match specified search criteria. This call returns an array of objects, but detailed information about each object’s attributes might not be included. See http://devdocs.magento.com/codelinks/attributes.html#OrderItemRepositoryInterface to determine which call to use to get detailed information about all attributes for an object.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "searchCriteria[filterGroups][][filters][][field]": {
      "type": "string",
      "description": "Field"
    },
    "searchCriteria[filterGroups][][filters][][value]": {
      "type": "string",
      "description": "Value"
    },
    "searchCriteria[filterGroups][][filters][][conditionType]": {
      "type": "string",
      "description": "Condition type"
    },
    "searchCriteria[sortOrders][][field]": {
      "type": "string",
      "description": "Sorting field."
    },
    "searchCriteria[sortOrders][][direction]": {
      "type": "string",
      "description": "Sorting direction."
    },
    "searchCriteria[pageSize]": {
      "type": "integer",
      "description": "Page size."
    },
    "searchCriteria[currentPage]": {
      "type": "integer",
      "description": "Current page."
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/sales-data-order-item-search-result-interface"
}
```
## Operation: salesOrderItemRepositoryV1GetGet
Loads a specified order item.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "description": "The order item ID."
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
{
  "$ref": "#/definitions/sales-data-order-item-interface"
}
```
## Operation: salesOrderRepositoryV1GetGet
Loads a specified order.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "description": "The order ID."
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
{
  "$ref": "#/definitions/sales-data-order-interface"
}
```
## Operation: salesOrderManagementV1CancelPost
Cancels a specified order.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "description": "The order ID."
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
{
  "type": "boolean"
}
```
## Operation: salesOrderManagementV1GetCommentsListGet
Lists comments for a specified order.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "description": "The order ID."
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
{
  "$ref": "#/definitions/sales-data-order-status-history-search-result-interface"
}
```
## Operation: salesOrderManagementV1AddCommentPost
Adds a comment to a specified order.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "description": "The order ID."
    },
    "$body": {
      "properties": {
        "statusHistory": {
          "$ref": "#/definitions/sales-data-order-status-history-interface"
        }
      },
      "required": [
        "statusHistory"
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
{
  "type": "boolean"
}
```
## Operation: salesOrderManagementV1NotifyPost
Emails a user a specified order.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "description": "The order ID."
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
{
  "type": "boolean"
}
```
## Operation: salesOrderManagementV1HoldPost
Holds a specified order.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "description": "The order ID."
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
{
  "type": "boolean"
}
```
## Operation: salesOrderManagementV1GetStatusGet
Gets the status for a specified order.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "description": "The order ID."
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
{
  "description": "Order status.",
  "type": "string"
}
```
## Operation: salesOrderManagementV1UnHoldPost
Releases a specified order from hold status.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "description": "The order ID."
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
{
  "type": "boolean"
}
```
## Operation: salesOrderAddressRepositoryV1SavePut
Performs persist operations for a specified order address.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "parent_id": {
      "type": "string"
    },
    "$body": {
      "properties": {
        "entity": {
          "$ref": "#/definitions/sales-data-order-address-interface"
        }
      },
      "required": [
        "entity"
      ],
      "type": "object"
    }
  },
  "additionalProperties": false,
  "required": [
    "parent_id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/sales-data-order-address-interface"
}
```
## Operation: catalogProductRepositoryV1GetListGet
Get product list

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "searchCriteria[filterGroups][][filters][][field]": {
      "type": "string",
      "description": "Field"
    },
    "searchCriteria[filterGroups][][filters][][value]": {
      "type": "string",
      "description": "Value"
    },
    "searchCriteria[filterGroups][][filters][][conditionType]": {
      "type": "string",
      "description": "Condition type"
    },
    "searchCriteria[sortOrders][][field]": {
      "type": "string",
      "description": "Sorting field."
    },
    "searchCriteria[sortOrders][][direction]": {
      "type": "string",
      "description": "Sorting direction."
    },
    "searchCriteria[pageSize]": {
      "type": "integer",
      "description": "Page size."
    },
    "searchCriteria[currentPage]": {
      "type": "integer",
      "description": "Current page."
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/catalog-data-product-search-results-interface"
}
```
## Operation: catalogProductRepositoryV1SavePost
Create product

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "$body": {
      "properties": {
        "product": {
          "$ref": "#/definitions/catalog-data-product-interface"
        },
        "saveOptions": {
          "type": "boolean"
        }
      },
      "required": [
        "product"
      ],
      "type": "object"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/catalog-data-product-interface"
}
```
## Operation: catalogAttributeSetManagementV1CreatePost
Create attribute set from data

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "$body": {
      "properties": {
        "attributeSet": {
          "$ref": "#/definitions/eav-data-attribute-set-interface"
        },
        "skeletonId": {
          "type": "integer"
        }
      },
      "required": [
        "attributeSet",
        "skeletonId"
      ],
      "type": "object"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/eav-data-attribute-set-interface"
}
```
## Operation: catalogProductAttributeManagementV1AssignPost
Assign attribute to attribute set

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "$body": {
      "properties": {
        "attributeCode": {
          "type": "string"
        },
        "attributeGroupId": {
          "type": "integer"
        },
        "attributeSetId": {
          "type": "integer"
        },
        "sortOrder": {
          "type": "integer"
        }
      },
      "required": [
        "attributeSetId",
        "attributeGroupId",
        "attributeCode",
        "sortOrder"
      ],
      "type": "object"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "type": "integer"
}
```
## Operation: catalogProductAttributeGroupRepositoryV1SavePost
Save attribute group

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "$body": {
      "properties": {
        "group": {
          "$ref": "#/definitions/eav-data-attribute-group-interface"
        }
      },
      "required": [
        "group"
      ],
      "type": "object"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/eav-data-attribute-group-interface"
}
```
## Operation: catalogProductAttributeGroupRepositoryV1GetListGet
Retrieve list of attribute groups

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "searchCriteria[filterGroups][][filters][][field]": {
      "type": "string",
      "description": "Field"
    },
    "searchCriteria[filterGroups][][filters][][value]": {
      "type": "string",
      "description": "Value"
    },
    "searchCriteria[filterGroups][][filters][][conditionType]": {
      "type": "string",
      "description": "Condition type"
    },
    "searchCriteria[sortOrders][][field]": {
      "type": "string",
      "description": "Sorting field."
    },
    "searchCriteria[sortOrders][][direction]": {
      "type": "string",
      "description": "Sorting direction."
    },
    "searchCriteria[pageSize]": {
      "type": "integer",
      "description": "Page size."
    },
    "searchCriteria[currentPage]": {
      "type": "integer",
      "description": "Current page."
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/eav-data-attribute-group-search-results-interface"
}
```
## Operation: catalogProductAttributeGroupRepositoryV1DeleteByIdDelete
Remove attribute group by id

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "groupId": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "groupId"
  ]
}
```
### Output Schema
```json
{
  "type": "boolean"
}
```
## Operation: catalogAttributeSetRepositoryV1GetListGet
Retrieve list of Attribute Sets

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "searchCriteria[filterGroups][][filters][][field]": {
      "type": "string",
      "description": "Field"
    },
    "searchCriteria[filterGroups][][filters][][value]": {
      "type": "string",
      "description": "Value"
    },
    "searchCriteria[filterGroups][][filters][][conditionType]": {
      "type": "string",
      "description": "Condition type"
    },
    "searchCriteria[sortOrders][][field]": {
      "type": "string",
      "description": "Sorting field."
    },
    "searchCriteria[sortOrders][][direction]": {
      "type": "string",
      "description": "Sorting direction."
    },
    "searchCriteria[pageSize]": {
      "type": "integer",
      "description": "Page size."
    },
    "searchCriteria[currentPage]": {
      "type": "integer",
      "description": "Current page."
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/eav-data-attribute-set-search-results-interface"
}
```
## Operation: catalogAttributeSetRepositoryV1DeleteByIdDelete
Remove attribute set by given ID

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "attributeSetId": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "attributeSetId"
  ]
}
```
### Output Schema
```json
{
  "type": "boolean"
}
```
## Operation: catalogAttributeSetRepositoryV1GetGet
Retrieve attribute set information based on given ID

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "attributeSetId": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "attributeSetId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/eav-data-attribute-set-interface"
}
```
## Operation: catalogAttributeSetRepositoryV1SavePut
Save attribute set data

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "attributeSetId": {
      "type": "string"
    },
    "$body": {
      "properties": {
        "attributeSet": {
          "$ref": "#/definitions/eav-data-attribute-set-interface"
        }
      },
      "required": [
        "attributeSet"
      ],
      "type": "object"
    }
  },
  "additionalProperties": false,
  "required": [
    "attributeSetId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/eav-data-attribute-set-interface"
}
```
## Operation: catalogProductAttributeManagementV1GetAttributesGet
Retrieve related attributes based on given attribute set ID

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "attributeSetId": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "attributeSetId"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/catalog-data-product-attribute-interface"
  },
  "type": "array"
}
```
## Operation: catalogProductAttributeManagementV1UnassignDelete
Remove attribute from attribute set

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "attributeSetId": {
      "type": "string"
    },
    "attributeCode": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "attributeSetId",
    "attributeCode"
  ]
}
```
### Output Schema
```json
{
  "type": "boolean"
}
```
## Operation: catalogProductAttributeGroupRepositoryV1SavePut
Save attribute group

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "attributeSetId": {
      "type": "string"
    },
    "$body": {
      "properties": {
        "group": {
          "$ref": "#/definitions/eav-data-attribute-group-interface"
        }
      },
      "required": [
        "group"
      ],
      "type": "object"
    }
  },
  "additionalProperties": false,
  "required": [
    "attributeSetId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/eav-data-attribute-group-interface"
}
```
## Operation: catalogProductAttributeRepositoryV1GetListGet
Retrieve all attributes for entity type

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "searchCriteria[filterGroups][][filters][][field]": {
      "type": "string",
      "description": "Field"
    },
    "searchCriteria[filterGroups][][filters][][value]": {
      "type": "string",
      "description": "Value"
    },
    "searchCriteria[filterGroups][][filters][][conditionType]": {
      "type": "string",
      "description": "Condition type"
    },
    "searchCriteria[sortOrders][][field]": {
      "type": "string",
      "description": "Sorting field."
    },
    "searchCriteria[sortOrders][][direction]": {
      "type": "string",
      "description": "Sorting direction."
    },
    "searchCriteria[pageSize]": {
      "type": "integer",
      "description": "Page size."
    },
    "searchCriteria[currentPage]": {
      "type": "integer",
      "description": "Current page."
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/catalog-data-product-attribute-search-results-interface"
}
```
## Operation: catalogProductAttributeRepositoryV1SavePost
Save attribute data

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "$body": {
      "properties": {
        "attribute": {
          "$ref": "#/definitions/catalog-data-product-attribute-interface"
        }
      },
      "required": [
        "attribute"
      ],
      "type": "object"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/catalog-data-product-attribute-interface"
}
```
## Operation: catalogProductAttributeTypesListV1GetItemsGet
Retrieve list of product attribute types

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/catalog-data-product-attribute-type-interface"
  },
  "type": "array"
}
```
## Operation: catalogProductAttributeRepositoryV1DeleteByIdDelete
Delete Attribute by id

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "attributeCode": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "attributeCode"
  ]
}
```
### Output Schema
```json
{
  "type": "boolean"
}
```
## Operation: catalogProductAttributeRepositoryV1GetGet
Retrieve specific attribute

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "attributeCode": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "attributeCode"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/catalog-data-product-attribute-interface"
}
```
## Operation: catalogProductAttributeRepositoryV1SavePut
Save attribute data

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "attributeCode": {
      "type": "string"
    },
    "$body": {
      "properties": {
        "attribute": {
          "$ref": "#/definitions/catalog-data-product-attribute-interface"
        }
      },
      "required": [
        "attribute"
      ],
      "type": "object"
    }
  },
  "additionalProperties": false,
  "required": [
    "attributeCode"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/catalog-data-product-attribute-interface"
}
```
## Operation: catalogProductAttributeOptionManagementV1GetItemsGet
Retrieve list of attribute options

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "attributeCode": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "attributeCode"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/eav-data-attribute-option-interface"
  },
  "type": "array"
}
```
## Operation: catalogProductAttributeOptionManagementV1AddPost
Add option to attribute

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "attributeCode": {
      "type": "string"
    },
    "$body": {
      "properties": {
        "option": {
          "$ref": "#/definitions/eav-data-attribute-option-interface"
        }
      },
      "required": [
        "option"
      ],
      "type": "object"
    }
  },
  "additionalProperties": false,
  "required": [
    "attributeCode"
  ]
}
```
### Output Schema
```json
{
  "type": "boolean"
}
```
## Operation: catalogProductAttributeOptionManagementV1DeleteDelete
Delete option from attribute

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "attributeCode": {
      "type": "string"
    },
    "optionId": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "attributeCode",
    "optionId"
  ]
}
```
### Output Schema
```json
{
  "type": "boolean"
}
```
## Operation: downloadableSampleRepositoryV1DeleteDelete
Delete downloadable sample

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer"
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
{
  "type": "boolean"
}
```
## Operation: downloadableLinkRepositoryV1DeleteDelete
Delete downloadable link

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer"
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
{
  "type": "boolean"
}
```
## Operation: catalogProductLinkTypeListV1GetItemsGet
Retrieve information about available product link types

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/catalog-data-product-link-type-interface"
  },
  "type": "array"
}
```
## Operation: catalogProductLinkTypeListV1GetItemAttributesGet
Provide a list of the product link type attributes

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "type": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "type"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/catalog-data-product-link-attribute-interface"
  },
  "type": "array"
}
```
## Operation: catalogProductMediaAttributeManagementV1GetListGet
Retrieve the list of media attributes (fronted input type is media_image) assigned to the given attribute set.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "attributeSetName": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "attributeSetName"
  ]
}
```
### Output Schema
```json
{
  "description": "list of media attributes",
  "items": {
    "$ref": "#/definitions/catalog-data-product-attribute-interface"
  },
  "type": "array"
}
```
## Operation: catalogProductCustomOptionRepositoryV1SavePost
Save Custom Option

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "$body": {
      "properties": {
        "option": {
          "$ref": "#/definitions/catalog-data-product-custom-option-interface"
        }
      },
      "required": [
        "option"
      ],
      "type": "object"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/catalog-data-product-custom-option-interface"
}
```
## Operation: catalogProductCustomOptionTypeListV1GetItemsGet
Get custom option types

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/catalog-data-product-custom-option-type-interface"
  },
  "type": "array"
}
```
## Operation: catalogProductCustomOptionRepositoryV1SavePut
Save Custom Option

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "optionId": {
      "type": "string"
    },
    "$body": {
      "properties": {
        "option": {
          "$ref": "#/definitions/catalog-data-product-custom-option-interface"
        }
      },
      "required": [
        "option"
      ],
      "type": "object"
    }
  },
  "additionalProperties": false,
  "required": [
    "optionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/catalog-data-product-custom-option-interface"
}
```
## Operation: catalogProductTypeListV1GetProductTypesGet
Retrieve available product types

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/catalog-data-product-type-interface"
  },
  "type": "array"
}
```
## Operation: catalogInventoryStockRegistryV1UpdateStockItemBySkuPut


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "productSku": {
      "type": "string"
    },
    "itemId": {
      "type": "string"
    },
    "$body": {
      "properties": {
        "stockItem": {
          "$ref": "#/definitions/catalog-inventory-data-stock-item-interface"
        }
      },
      "required": [
        "stockItem"
      ],
      "type": "object"
    }
  },
  "additionalProperties": false,
  "required": [
    "productSku",
    "itemId"
  ]
}
```
### Output Schema
```json
{
  "type": "integer"
}
```
## Operation: catalogProductRepositoryV1DeleteByIdDelete


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "sku": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "sku"
  ]
}
```
### Output Schema
```json
{
  "description": "Will returned True if deleted",
  "type": "boolean"
}
```
## Operation: catalogProductRepositoryV1GetGet
Get info about product by product SKU

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "sku": {
      "type": "string"
    },
    "editMode": {
      "type": "boolean"
    },
    "storeId": {
      "type": "integer"
    },
    "forceReload": {
      "type": "boolean"
    }
  },
  "additionalProperties": false,
  "required": [
    "sku"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/catalog-data-product-interface"
}
```
## Operation: catalogProductRepositoryV1SavePut
Create product

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "sku": {
      "type": "string"
    },
    "$body": {
      "properties": {
        "product": {
          "$ref": "#/definitions/catalog-data-product-interface"
        },
        "saveOptions": {
          "type": "boolean"
        }
      },
      "required": [
        "product"
      ],
      "type": "object"
    }
  },
  "additionalProperties": false,
  "required": [
    "sku"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/catalog-data-product-interface"
}
```
## Operation: downloadableLinkRepositoryV1GetListGet
List of links with associated samples

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "sku": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "sku"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/downloadable-data-link-interface"
  },
  "type": "array"
}
```
## Operation: downloadableLinkRepositoryV1SavePost
Update downloadable link of the given product (link type and its resources cannot be changed)

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "sku": {
      "type": "string"
    },
    "$body": {
      "properties": {
        "isGlobalScopeContent": {
          "type": "boolean"
        },
        "link": {
          "$ref": "#/definitions/downloadable-data-link-interface"
        }
      },
      "required": [
        "link"
      ],
      "type": "object"
    }
  },
  "additionalProperties": false,
  "required": [
    "sku"
  ]
}
```
### Output Schema
```json
{
  "type": "integer"
}
```
## Operation: downloadableSampleRepositoryV1GetListGet
List of samples for downloadable product

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "sku": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "sku"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/downloadable-data-sample-interface"
  },
  "type": "array"
}
```
## Operation: downloadableSampleRepositoryV1SavePost
Update downloadable sample of the given product

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "sku": {
      "type": "string"
    },
    "$body": {
      "properties": {
        "isGlobalScopeContent": {
          "type": "boolean"
        },
        "sample": {
          "$ref": "#/definitions/downloadable-data-sample-interface"
        }
      },
      "required": [
        "sample"
      ],
      "type": "object"
    }
  },
  "additionalProperties": false,
  "required": [
    "sku"
  ]
}
```
### Output Schema
```json
{
  "type": "integer"
}
```
## Operation: downloadableSampleRepositoryV1SavePut
Update downloadable sample of the given product

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "sku": {
      "type": "string"
    },
    "id": {
      "type": "string"
    },
    "$body": {
      "properties": {
        "isGlobalScopeContent": {
          "type": "boolean"
        },
        "sample": {
          "$ref": "#/definitions/downloadable-data-sample-interface"
        }
      },
      "required": [
        "sample"
      ],
      "type": "object"
    }
  },
  "additionalProperties": false,
  "required": [
    "sku",
    "id"
  ]
}
```
### Output Schema
```json
{
  "type": "integer"
}
```
## Operation: downloadableLinkRepositoryV1SavePut
Update downloadable link of the given product (link type and its resources cannot be changed)

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "sku": {
      "type": "string"
    },
    "id": {
      "type": "string"
    },
    "$body": {
      "properties": {
        "isGlobalScopeContent": {
          "type": "boolean"
        },
        "link": {
          "$ref": "#/definitions/downloadable-data-link-interface"
        }
      },
      "required": [
        "link"
      ],
      "type": "object"
    }
  },
  "additionalProperties": false,
  "required": [
    "sku",
    "id"
  ]
}
```
### Output Schema
```json
{
  "type": "integer"
}
```
## Operation: catalogProductTierPriceManagementV1GetListGet
Get tier price of product

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "sku": {
      "type": "string"
    },
    "customerGroupId": {
      "type": "string",
      "description": "'all' can be used to specify 'ALL GROUPS'"
    }
  },
  "additionalProperties": false,
  "required": [
    "sku",
    "customerGroupId"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/catalog-data-product-tier-price-interface"
  },
  "type": "array"
}
```
## Operation: catalogProductTierPriceManagementV1RemoveDelete
Remove tier price from product

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "sku": {
      "type": "string"
    },
    "customerGroupId": {
      "type": "string",
      "description": "'all' can be used to specify 'ALL GROUPS'"
    },
    "qty": {
      "type": "number"
    }
  },
  "additionalProperties": false,
  "required": [
    "sku",
    "customerGroupId",
    "qty"
  ]
}
```
### Output Schema
```json
{
  "type": "boolean"
}
```
## Operation: catalogProductTierPriceManagementV1AddPost
Create tier price for product

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "sku": {
      "type": "string"
    },
    "customerGroupId": {
      "type": "string",
      "description": "'all' can be used to specify 'ALL GROUPS'"
    },
    "price": {
      "type": "number"
    },
    "qty": {
      "type": "number"
    }
  },
  "additionalProperties": false,
  "required": [
    "sku",
    "customerGroupId",
    "price",
    "qty"
  ]
}
```
### Output Schema
```json
{
  "type": "boolean"
}
```
## Operation: catalogProductLinkManagementV1SetProductLinksPost
Assign a product link to another product

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "sku": {
      "type": "string"
    },
    "$body": {
      "properties": {
        "items": {
          "items": {
            "$ref": "#/definitions/catalog-data-product-link-interface"
          },
          "type": "array"
        }
      },
      "required": [
        "items"
      ],
      "type": "object"
    }
  },
  "additionalProperties": false,
  "required": [
    "sku"
  ]
}
```
### Output Schema
```json
{
  "type": "boolean"
}
```
## Operation: catalogProductLinkRepositoryV1SavePut
Save product link

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "sku": {
      "type": "string"
    },
    "$body": {
      "properties": {
        "entity": {
          "$ref": "#/definitions/catalog-data-product-link-interface"
        }
      },
      "required": [
        "entity"
      ],
      "type": "object"
    }
  },
  "additionalProperties": false,
  "required": [
    "sku"
  ]
}
```
### Output Schema
```json
{
  "type": "boolean"
}
```
## Operation: catalogProductLinkManagementV1GetLinkedItemsByTypeGet
Provide the list of links for a specific product

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "sku": {
      "type": "string"
    },
    "type": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "sku",
    "type"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/catalog-data-product-link-interface"
  },
  "type": "array"
}
```
## Operation: catalogProductLinkRepositoryV1DeleteByIdDelete


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "sku": {
      "type": "string"
    },
    "type": {
      "type": "string"
    },
    "linkedProductSku": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "sku",
    "type",
    "linkedProductSku"
  ]
}
```
### Output Schema
```json
{
  "type": "boolean"
}
```
## Operation: catalogProductAttributeMediaGalleryManagementV1GetListGet
Retrieve the list of gallery entries associated with given product

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "sku": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "sku"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/catalog-data-product-attribute-media-gallery-entry-interface"
  },
  "type": "array"
}
```
## Operation: catalogProductAttributeMediaGalleryManagementV1CreatePost
Create new gallery entry

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "sku": {
      "type": "string"
    },
    "$body": {
      "properties": {
        "entry": {
          "$ref": "#/definitions/catalog-data-product-attribute-media-gallery-entry-interface"
        }
      },
      "required": [
        "entry"
      ],
      "type": "object"
    }
  },
  "additionalProperties": false,
  "required": [
    "sku"
  ]
}
```
### Output Schema
```json
{
  "description": "gallery entry ID",
  "type": "integer"
}
```
## Operation: catalogProductAttributeMediaGalleryManagementV1RemoveDelete
Remove gallery entry

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "sku": {
      "type": "string"
    },
    "entryId": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "sku",
    "entryId"
  ]
}
```
### Output Schema
```json
{
  "type": "boolean"
}
```
## Operation: catalogProductAttributeMediaGalleryManagementV1GetGet
Return information about gallery entry

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "sku": {
      "type": "string"
    },
    "entryId": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "sku",
    "entryId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/catalog-data-product-attribute-media-gallery-entry-interface"
}
```
## Operation: catalogProductAttributeMediaGalleryManagementV1UpdatePut
Update gallery entry

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "sku": {
      "type": "string"
    },
    "entryId": {
      "type": "string"
    },
    "$body": {
      "properties": {
        "entry": {
          "$ref": "#/definitions/catalog-data-product-attribute-media-gallery-entry-interface"
        }
      },
      "required": [
        "entry"
      ],
      "type": "object"
    }
  },
  "additionalProperties": false,
  "required": [
    "sku",
    "entryId"
  ]
}
```
### Output Schema
```json
{
  "type": "boolean"
}
```
## Operation: catalogProductCustomOptionRepositoryV1GetListGet
Get the list of custom options for a specific product

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "sku": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "sku"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/catalog-data-product-custom-option-interface"
  },
  "type": "array"
}
```
## Operation: catalogProductCustomOptionRepositoryV1DeleteByIdentifierDelete


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "sku": {
      "type": "string"
    },
    "optionId": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "sku",
    "optionId"
  ]
}
```
### Output Schema
```json
{
  "type": "boolean"
}
```
## Operation: catalogProductCustomOptionRepositoryV1GetGet
Get custom option for a specific product

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "sku": {
      "type": "string"
    },
    "optionId": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "sku",
    "optionId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/catalog-data-product-custom-option-interface"
}
```
## Operation: catalogProductWebsiteLinkRepositoryV1SavePost
Assign a product to the website

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "sku": {
      "type": "string"
    },
    "$body": {
      "properties": {
        "productWebsiteLink": {
          "$ref": "#/definitions/catalog-data-product-website-link-interface"
        }
      },
      "required": [
        "productWebsiteLink"
      ],
      "type": "object"
    }
  },
  "additionalProperties": false,
  "required": [
    "sku"
  ]
}
```
### Output Schema
```json
{
  "description": "will returned True if website successfully assigned to product",
  "type": "boolean"
}
```
## Operation: catalogProductWebsiteLinkRepositoryV1SavePut
Assign a product to the website

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "sku": {
      "type": "string"
    },
    "$body": {
      "properties": {
        "productWebsiteLink": {
          "$ref": "#/definitions/catalog-data-product-website-link-interface"
        }
      },
      "required": [
        "productWebsiteLink"
      ],
      "type": "object"
    }
  },
  "additionalProperties": false,
  "required": [
    "sku"
  ]
}
```
### Output Schema
```json
{
  "description": "will returned True if website successfully assigned to product",
  "type": "boolean"
}
```
## Operation: catalogProductWebsiteLinkRepositoryV1DeleteByIdDelete
Remove the website assignment from the product by product sku

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "sku": {
      "type": "string"
    },
    "websiteId": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "sku",
    "websiteId"
  ]
}
```
### Output Schema
```json
{
  "description": "will returned True if website successfully unassigned from product",
  "type": "boolean"
}
```
## Operation: rmaRmaManagementV1SearchGet
Return list of rma data objects based on search criteria

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "searchCriteria[filterGroups][][filters][][field]": {
      "type": "string",
      "description": "Field"
    },
    "searchCriteria[filterGroups][][filters][][value]": {
      "type": "string",
      "description": "Value"
    },
    "searchCriteria[filterGroups][][filters][][conditionType]": {
      "type": "string",
      "description": "Condition type"
    },
    "searchCriteria[sortOrders][][field]": {
      "type": "string",
      "description": "Sorting field."
    },
    "searchCriteria[sortOrders][][direction]": {
      "type": "string",
      "description": "Sorting direction."
    },
    "searchCriteria[pageSize]": {
      "type": "integer",
      "description": "Page size."
    },
    "searchCriteria[currentPage]": {
      "type": "integer",
      "description": "Current page."
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/rma-data-rma-search-result-interface"
}
```
## Operation: rmaRmaManagementV1SaveRmaPost
Save RMA

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "$body": {
      "properties": {
        "rmaDataObject": {
          "$ref": "#/definitions/rma-data-rma-interface"
        }
      },
      "required": [
        "rmaDataObject"
      ],
      "type": "object"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/rma-data-rma-interface"
}
```
## Operation: rmaRmaRepositoryV1DeleteDelete
Delete RMA

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string"
    },
    "$body": {
      "properties": {
        "rmaDataObject": {
          "$ref": "#/definitions/rma-data-rma-interface"
        }
      },
      "required": [
        "rmaDataObject"
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
{
  "type": "boolean"
}
```
## Operation: rmaRmaRepositoryV1GetGet
Return data object for specified RMA id

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer"
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
{
  "$ref": "#/definitions/rma-data-rma-interface"
}
```
## Operation: rmaRmaManagementV1SaveRmaPut
Save RMA

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string"
    },
    "$body": {
      "properties": {
        "rmaDataObject": {
          "$ref": "#/definitions/rma-data-rma-interface"
        }
      },
      "required": [
        "rmaDataObject"
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
{
  "$ref": "#/definitions/rma-data-rma-interface"
}
```
## Operation: rmaCommentManagementV1CommentsListGet
Comments list

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer"
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
{
  "$ref": "#/definitions/rma-data-comment-search-result-interface"
}
```
## Operation: rmaCommentManagementV1AddCommentPost
Add comment

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string"
    },
    "$body": {
      "properties": {
        "data": {
          "$ref": "#/definitions/rma-data-comment-interface"
        }
      },
      "required": [
        "data"
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
{
  "type": "boolean"
}
```
## Operation: rmaTrackManagementV1GetShippingLabelPdfGet
Get shipping label int the PDF format

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer"
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
{
  "type": "string"
}
```
## Operation: rmaTrackManagementV1GetTracksGet
Get track list

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer"
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
{
  "$ref": "#/definitions/rma-data-track-search-result-interface"
}
```
## Operation: rmaTrackManagementV1AddTrackPost
Add track

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer"
    },
    "$body": {
      "properties": {
        "track": {
          "$ref": "#/definitions/rma-data-track-interface"
        }
      },
      "required": [
        "track"
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
{
  "type": "boolean"
}
```
## Operation: rmaTrackManagementV1RemoveTrackByIdDelete
Remove track by id

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer"
    },
    "trackId": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "trackId"
  ]
}
```
### Output Schema
```json
{
  "type": "boolean"
}
```
## Operation: rmaRmaAttributesManagementV1GetAllAttributesMetadataGet
Get all attribute metadata.

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/customer-data-attribute-metadata-interface"
  },
  "type": "array"
}
```
## Operation: rmaRmaAttributesManagementV1GetCustomAttributesMetadataGet
Get custom attribute metadata for the given Data object's attribute set

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "dataObjectClassName": {
      "type": "string",
      "description": "Data object class name"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/framework-metadata-object-interface"
  },
  "type": "array"
}
```
## Operation: rmaRmaAttributesManagementV1GetAttributesGet
Retrieve all attributes filtered by form code

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "formCode": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "formCode"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/customer-data-attribute-metadata-interface"
  },
  "type": "array"
}
```
## Operation: rmaRmaAttributesManagementV1GetAttributeMetadataGet
Retrieve attribute metadata.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "attributeCode": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "attributeCode"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/customer-data-attribute-metadata-interface"
}
```
## Operation: rewardRewardManagementV1SetPost
Set reward points to quote

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "type": "boolean"
}
```
## Operation: salesRuleRuleRepositoryV1SavePost
Save sales rule.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "$body": {
      "properties": {
        "rule": {
          "$ref": "#/definitions/sales-rule-data-rule-interface"
        }
      },
      "required": [
        "rule"
      ],
      "type": "object"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/sales-rule-data-rule-interface"
}
```
## Operation: salesRuleRuleRepositoryV1GetListGet
Retrieve sales rules that match te specified criteria. This call returns an array of objects, but detailed information about each object’s attributes might not be included. See http://devdocs.magento.com/codelinks/attributes.html#RuleRepositoryInterface to determine which call to use to get detailed information about all attributes for an object.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "searchCriteria[filterGroups][][filters][][field]": {
      "type": "string",
      "description": "Field"
    },
    "searchCriteria[filterGroups][][filters][][value]": {
      "type": "string",
      "description": "Value"
    },
    "searchCriteria[filterGroups][][filters][][conditionType]": {
      "type": "string",
      "description": "Condition type"
    },
    "searchCriteria[sortOrders][][field]": {
      "type": "string",
      "description": "Sorting field."
    },
    "searchCriteria[sortOrders][][direction]": {
      "type": "string",
      "description": "Sorting direction."
    },
    "searchCriteria[pageSize]": {
      "type": "integer",
      "description": "Page size."
    },
    "searchCriteria[currentPage]": {
      "type": "integer",
      "description": "Current page."
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/sales-rule-data-rule-search-result-interface"
}
```
## Operation: salesRuleRuleRepositoryV1DeleteByIdDelete
Delete rule by ID.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "ruleId": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "ruleId"
  ]
}
```
### Output Schema
```json
{
  "description": "true on success",
  "type": "boolean"
}
```
## Operation: salesRuleRuleRepositoryV1GetByIdGet
Get rule by ID.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "ruleId": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "ruleId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/sales-rule-data-rule-interface"
}
```
## Operation: salesRuleRuleRepositoryV1SavePut
Save sales rule.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "ruleId": {
      "type": "string"
    },
    "$body": {
      "properties": {
        "rule": {
          "$ref": "#/definitions/sales-rule-data-rule-interface"
        }
      },
      "required": [
        "rule"
      ],
      "type": "object"
    }
  },
  "additionalProperties": false,
  "required": [
    "ruleId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/sales-rule-data-rule-interface"
}
```
## Operation: searchV1SearchGet
Make Full Text Search and return found Documents

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "searchCriteria[requestName]": {
      "type": "string"
    },
    "searchCriteria[filterGroups][][filters][][field]": {
      "type": "string",
      "description": "Field"
    },
    "searchCriteria[filterGroups][][filters][][value]": {
      "type": "string",
      "description": "Value"
    },
    "searchCriteria[filterGroups][][filters][][conditionType]": {
      "type": "string",
      "description": "Condition type"
    },
    "searchCriteria[sortOrders][][field]": {
      "type": "string",
      "description": "Sorting field."
    },
    "searchCriteria[sortOrders][][direction]": {
      "type": "string",
      "description": "Sorting direction."
    },
    "searchCriteria[pageSize]": {
      "type": "integer",
      "description": "Page size."
    },
    "searchCriteria[currentPage]": {
      "type": "integer",
      "description": "Current page."
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/framework-search-search-result-interface"
}
```
## Operation: salesShipmentRepositoryV1SavePost
Performs persist operations for a specified shipment.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "$body": {
      "properties": {
        "entity": {
          "$ref": "#/definitions/sales-data-shipment-interface"
        }
      },
      "required": [
        "entity"
      ],
      "type": "object"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/sales-data-shipment-interface"
}
```
## Operation: salesShipmentTrackRepositoryV1SavePost
Performs persist operations for a specified shipment track.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "$body": {
      "properties": {
        "entity": {
          "$ref": "#/definitions/sales-data-shipment-track-interface"
        }
      },
      "required": [
        "entity"
      ],
      "type": "object"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/sales-data-shipment-track-interface"
}
```
## Operation: salesShipmentTrackRepositoryV1DeleteByIdDelete
Deletes a specified shipment track by ID.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "description": "The shipment track ID."
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
{
  "type": "boolean"
}
```
## Operation: salesShipmentRepositoryV1GetGet
Loads a specified shipment.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "description": "The shipment ID."
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
{
  "$ref": "#/definitions/sales-data-shipment-interface"
}
```
## Operation: salesShipmentManagementV1GetCommentsListGet
Lists comments for a specified shipment.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "description": "The shipment ID."
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
{
  "$ref": "#/definitions/sales-data-shipment-comment-search-result-interface"
}
```
## Operation: salesShipmentCommentRepositoryV1SavePost
Performs persist operations for a specified shipment comment.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string"
    },
    "$body": {
      "properties": {
        "entity": {
          "$ref": "#/definitions/sales-data-shipment-comment-interface"
        }
      },
      "required": [
        "entity"
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
{
  "$ref": "#/definitions/sales-data-shipment-comment-interface"
}
```
## Operation: salesShipmentManagementV1NotifyPost
Emails user a specified shipment.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "description": "The shipment ID."
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
{
  "type": "boolean"
}
```
## Operation: salesShipmentManagementV1GetLabelGet
Gets a specified shipment label.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "description": "The shipment label ID."
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
{
  "description": "Shipment label.",
  "type": "string"
}
```
## Operation: salesShipmentRepositoryV1GetListGet
Lists shipments that match specified search criteria. This call returns an array of objects, but detailed information about each object’s attributes might not be included. See http://devdocs.magento.com/codelinks/attributes.html#ShipmentRepositoryInterface to determine which call to use to get detailed information about all attributes for an object.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "searchCriteria[filterGroups][][filters][][field]": {
      "type": "string",
      "description": "Field"
    },
    "searchCriteria[filterGroups][][filters][][value]": {
      "type": "string",
      "description": "Value"
    },
    "searchCriteria[filterGroups][][filters][][conditionType]": {
      "type": "string",
      "description": "Condition type"
    },
    "searchCriteria[sortOrders][][field]": {
      "type": "string",
      "description": "Sorting field."
    },
    "searchCriteria[sortOrders][][direction]": {
      "type": "string",
      "description": "Sorting direction."
    },
    "searchCriteria[pageSize]": {
      "type": "integer",
      "description": "Page size."
    },
    "searchCriteria[currentPage]": {
      "type": "integer",
      "description": "Current page."
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/sales-data-shipment-search-result-interface"
}
```
## Operation: catalogInventoryStockRegistryV1GetLowStockItemsGet
Retrieves a list of SKU's with low inventory qty

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "scopeId": {
      "type": "integer"
    },
    "qty": {
      "type": "number"
    },
    "currentPage": {
      "type": "integer"
    },
    "pageSize": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "scopeId",
    "qty"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/catalog-inventory-data-stock-status-collection-interface"
}
```
## Operation: catalogInventoryStockRegistryV1GetStockItemBySkuGet


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "productSku": {
      "type": "string"
    },
    "scopeId": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "productSku"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/catalog-inventory-data-stock-item-interface"
}
```
## Operation: catalogInventoryStockRegistryV1GetStockStatusBySkuGet


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "productSku": {
      "type": "string"
    },
    "scopeId": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "productSku"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/catalog-inventory-data-stock-status-interface"
}
```
## Operation: storeStoreConfigManagerV1GetStoreConfigsGet


### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "storeCodes": {
      "type": "array"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/store-data-store-config-interface"
  },
  "type": "array"
}
```
## Operation: storeGroupRepositoryV1GetListGet
Retrieve list of all groups

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/store-data-group-interface"
  },
  "type": "array"
}
```
## Operation: storeStoreRepositoryV1GetListGet
Retrieve list of all stores

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/store-data-store-interface"
  },
  "type": "array"
}
```
## Operation: storeWebsiteRepositoryV1GetListGet
Retrieve list of all websites

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/store-data-website-interface"
  },
  "type": "array"
}
```
## Operation: taxTaxClassRepositoryV1SavePost
Create a Tax Class

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "$body": {
      "properties": {
        "taxClass": {
          "$ref": "#/definitions/tax-data-tax-class-interface"
        }
      },
      "required": [
        "taxClass"
      ],
      "type": "object"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "description": "id for the newly created Tax class",
  "type": "string"
}
```
## Operation: taxTaxClassRepositoryV1GetListGet
Retrieve tax classes which match a specific criteria. This call returns an array of objects, but detailed information about each object’s attributes might not be included. See http://devdocs.magento.com/codelinks/attributes.html#TaxClassRepositoryInterface to determine which call to use to get detailed information about all attributes for an object.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "searchCriteria[filterGroups][][filters][][field]": {
      "type": "string",
      "description": "Field"
    },
    "searchCriteria[filterGroups][][filters][][value]": {
      "type": "string",
      "description": "Value"
    },
    "searchCriteria[filterGroups][][filters][][conditionType]": {
      "type": "string",
      "description": "Condition type"
    },
    "searchCriteria[sortOrders][][field]": {
      "type": "string",
      "description": "Sorting field."
    },
    "searchCriteria[sortOrders][][direction]": {
      "type": "string",
      "description": "Sorting direction."
    },
    "searchCriteria[pageSize]": {
      "type": "integer",
      "description": "Page size."
    },
    "searchCriteria[currentPage]": {
      "type": "integer",
      "description": "Current page."
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/tax-data-tax-class-search-results-interface"
}
```
## Operation: taxTaxClassRepositoryV1SavePut
Create a Tax Class

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "classId": {
      "type": "string"
    },
    "$body": {
      "properties": {
        "taxClass": {
          "$ref": "#/definitions/tax-data-tax-class-interface"
        }
      },
      "required": [
        "taxClass"
      ],
      "type": "object"
    }
  },
  "additionalProperties": false,
  "required": [
    "classId"
  ]
}
```
### Output Schema
```json
{
  "description": "id for the newly created Tax class",
  "type": "string"
}
```
## Operation: taxTaxClassRepositoryV1DeleteByIdDelete
Delete a tax class with the given tax class id.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "taxClassId": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "taxClassId"
  ]
}
```
### Output Schema
```json
{
  "description": "True if the tax class was deleted, false otherwise",
  "type": "boolean"
}
```
## Operation: taxTaxClassRepositoryV1GetGet
Get a tax class with the given tax class id.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "taxClassId": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "taxClassId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/tax-data-tax-class-interface"
}
```
## Operation: taxTaxRateRepositoryV1SavePost
Create or update tax rate

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "$body": {
      "properties": {
        "taxRate": {
          "$ref": "#/definitions/tax-data-tax-rate-interface"
        }
      },
      "required": [
        "taxRate"
      ],
      "type": "object"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/tax-data-tax-rate-interface"
}
```
## Operation: taxTaxRateRepositoryV1SavePut
Create or update tax rate

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "$body": {
      "properties": {
        "taxRate": {
          "$ref": "#/definitions/tax-data-tax-rate-interface"
        }
      },
      "required": [
        "taxRate"
      ],
      "type": "object"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/tax-data-tax-rate-interface"
}
```
## Operation: taxTaxRateRepositoryV1GetListGet
Search TaxRates This call returns an array of objects, but detailed information about each object’s attributes might not be included. See http://devdocs.magento.com/codelinks/attributes.html#TaxRateRepositoryInterface to determine which call to use to get detailed information about all attributes for an object.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "searchCriteria[filterGroups][][filters][][field]": {
      "type": "string",
      "description": "Field"
    },
    "searchCriteria[filterGroups][][filters][][value]": {
      "type": "string",
      "description": "Value"
    },
    "searchCriteria[filterGroups][][filters][][conditionType]": {
      "type": "string",
      "description": "Condition type"
    },
    "searchCriteria[sortOrders][][field]": {
      "type": "string",
      "description": "Sorting field."
    },
    "searchCriteria[sortOrders][][direction]": {
      "type": "string",
      "description": "Sorting direction."
    },
    "searchCriteria[pageSize]": {
      "type": "integer",
      "description": "Page size."
    },
    "searchCriteria[currentPage]": {
      "type": "integer",
      "description": "Current page."
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/tax-data-tax-rate-search-results-interface"
}
```
## Operation: taxTaxRateRepositoryV1DeleteByIdDelete
Delete tax rate

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "rateId": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "rateId"
  ]
}
```
### Output Schema
```json
{
  "type": "boolean"
}
```
## Operation: taxTaxRateRepositoryV1GetGet
Get tax rate

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "rateId": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "rateId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/tax-data-tax-rate-interface"
}
```
## Operation: taxTaxRuleRepositoryV1SavePost
Save TaxRule

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "$body": {
      "properties": {
        "rule": {
          "$ref": "#/definitions/tax-data-tax-rule-interface"
        }
      },
      "required": [
        "rule"
      ],
      "type": "object"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/tax-data-tax-rule-interface"
}
```
## Operation: taxTaxRuleRepositoryV1SavePut
Save TaxRule

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "$body": {
      "properties": {
        "rule": {
          "$ref": "#/definitions/tax-data-tax-rule-interface"
        }
      },
      "required": [
        "rule"
      ],
      "type": "object"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/tax-data-tax-rule-interface"
}
```
## Operation: taxTaxRuleRepositoryV1GetListGet
Search TaxRules This call returns an array of objects, but detailed information about each object’s attributes might not be included. See http://devdocs.magento.com/codelinks/attributes.html#TaxRuleRepositoryInterface to determine which call to use to get detailed information about all attributes for an object.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "searchCriteria[filterGroups][][filters][][field]": {
      "type": "string",
      "description": "Field"
    },
    "searchCriteria[filterGroups][][filters][][value]": {
      "type": "string",
      "description": "Value"
    },
    "searchCriteria[filterGroups][][filters][][conditionType]": {
      "type": "string",
      "description": "Condition type"
    },
    "searchCriteria[sortOrders][][field]": {
      "type": "string",
      "description": "Sorting field."
    },
    "searchCriteria[sortOrders][][direction]": {
      "type": "string",
      "description": "Sorting direction."
    },
    "searchCriteria[pageSize]": {
      "type": "integer",
      "description": "Page size."
    },
    "searchCriteria[currentPage]": {
      "type": "integer",
      "description": "Current page."
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/tax-data-tax-rule-search-results-interface"
}
```
## Operation: taxTaxRuleRepositoryV1DeleteByIdDelete
Delete TaxRule

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "ruleId": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "ruleId"
  ]
}
```
### Output Schema
```json
{
  "type": "boolean"
}
```
## Operation: taxTaxRuleRepositoryV1GetGet
Get TaxRule

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "ruleId": {
      "type": "integer"
    }
  },
  "additionalProperties": false,
  "required": [
    "ruleId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/tax-data-tax-rule-interface"
}
```
## Operation: salesTransactionRepositoryV1GetListGet
Lists transactions that match specified search criteria. This call returns an array of objects, but detailed information about each object’s attributes might not be included. See http://devdocs.magento.com/codelinks/attributes.html#TransactionRepositoryInterface to determine which call to use to get detailed information about all attributes for an object.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "searchCriteria[filterGroups][][filters][][field]": {
      "type": "string",
      "description": "Field"
    },
    "searchCriteria[filterGroups][][filters][][value]": {
      "type": "string",
      "description": "Value"
    },
    "searchCriteria[filterGroups][][filters][][conditionType]": {
      "type": "string",
      "description": "Condition type"
    },
    "searchCriteria[sortOrders][][field]": {
      "type": "string",
      "description": "Sorting field."
    },
    "searchCriteria[sortOrders][][direction]": {
      "type": "string",
      "description": "Sorting direction."
    },
    "searchCriteria[pageSize]": {
      "type": "integer",
      "description": "Page size."
    },
    "searchCriteria[currentPage]": {
      "type": "integer",
      "description": "Current page."
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/sales-data-transaction-search-result-interface"
}
```
## Operation: salesTransactionRepositoryV1GetGet
Loads a specified transaction.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "integer",
      "description": "The transaction ID."
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
{
  "$ref": "#/definitions/sales-data-transaction-interface"
}
```
## Operation: worldpayGuestPaymentInformationManagementProxyV1SavePaymentInformationAndPlaceOrderPost
Proxy handler for guest place order

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "cartId": {
      "type": "string"
    },
    "$body": {
      "properties": {
        "billingAddress": {
          "$ref": "#/definitions/quote-data-address-interface"
        },
        "email": {
          "type": "string"
        },
        "paymentMethod": {
          "$ref": "#/definitions/quote-data-payment-interface"
        }
      },
      "required": [
        "email",
        "paymentMethod"
      ],
      "type": "object"
    }
  },
  "additionalProperties": false,
  "required": [
    "cartId"
  ]
}
```
### Output Schema
```json
{
  "description": "Order ID.",
  "type": "integer"
}
```
