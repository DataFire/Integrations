# @datafire/ticketmaster_commerce

Client library for Commerce API

## Installation and Usage
```bash
npm install --save @datafire/ticketmaster_commerce
```
```js
let ticketmaster_commerce = require('@datafire/ticketmaster_commerce').create();

.then(data => {
  console.log(data);
});
```

## Description

Use the Ticketmaster Commerce API to look up available offers and products on various Ticketmaster platforms for North America markets. For formal partnerships and relationships, selected offers and products can be carted and transacted on through the cart, delivery, payment and purchase APIs – These APIs require approved access from Ticketmaster.

## Actions

### getEventOffers
Returns Event Offers.


```js
ticketmaster_commerce.getEventOffers({
  "eventId": ""
}, context)
```

#### Input
* input `object`
  * X-SSL-CERT-UID `string`: API Key for external API developer
  * X-TM-ACCESS-TOKEN `string`: Access token for
  * access_token `string`: Query Param Access Token
  * api-key `string`: Query Param API Key for external API developer
  * eventId **required** `string`: Event Identifier
  * body `string`

#### Output
* output [OfferingResponse](#offeringresponse)



## Definitions

### Area
* Area `object`
  * _links [SimpleLinks](#simplelinks)
  * attributes [AreaAttributes](#areaattributes)
  * id `string`
  * relationships [AreaRelationships](#arearelationships)
  * type `string`

### AreaAttributes
* AreaAttributes `object`
  * areaType `string` (values: LEVEL, SECTION, AREA)
  * description `string`
  * name `string`
  * rank `integer`

### AreaRelationships
* AreaRelationships `object`
  * areas [ResponseObjectRefList](#responseobjectreflist)
  * offers [ResponseObjectRefList](#responseobjectreflist)
  * priceZones [ResponseObjectRefList](#responseobjectreflist)

### AttributeRef
* AttributeRef `object`
  * _links [SimpleLinks](#simplelinks)
  * attributes [AttributeRefAttributes](#attributerefattributes)
  * id `string`
  * relationships [AttributeRefRelationships](#attributerefrelationships)
  * type `string`

### AttributeRefAttributes
* AttributeRefAttributes `object`
  * description `string`

### AttributeRefRelationships
* AttributeRefRelationships `object`

### EventMappingView
* EventMappingView `object`
  * id `string`
  * source [Source](#source)
  * type `string`

### HoldRef
* HoldRef `object`
  * _links [SimpleLinks](#simplelinks)
  * attributes [HoldRefAttributes](#holdrefattributes)
  * id `string`
  * relationships [HoldRefRelationships](#holdrefrelationships)
  * type `string`

### HoldRefAttributes
* HoldRefAttributes `object`

### HoldRefRelationships
* HoldRefRelationships `object`

### HrefLinkValue
* HrefLinkValue `object`
  * href `string`

### Limit
* Limit `object`
  * max `integer`
  * maxAccessibleSeats `integer`
  * maxCompanionSeatsPerAccessibleSeat `integer`
  * min `integer`
  * multiples `integer`
  * sellableQty `string`

### Links
* Links `object`

### Offer
* Offer `object`
  * _links [SimpleLinks](#simplelinks)
  * attributes [OfferAttributes](#offerattributes)
  * id `string`
  * relationships [OfferRelationships](#offerrelationships)
  * type `string`

### OfferAttributes
* OfferAttributes `object`
  * currency `string`
  * description `string`
  * end `string`
  * limit [Limit](#limit)
  * name `string`
  * offerDetails [OfferDetails](#offerdetails)
  * offerType `string`
  * prices `array`
    * items [OfferPrice](#offerprice)
  * rank `integer`
  * start `string`

### OfferDetails
* OfferDetails `object`
  * link `string`
  * linkText `string`
  * text `string`

### OfferPrice
* OfferPrice `object`
  * fees `array`
    * items [OfferPriceFee](#offerpricefee)
  * priceZone `string`
  * taxes `array`
    * items [OfferPriceTax](#offerpricetax)
  * total `string`
  * value `string`

### OfferPriceFee
* OfferPriceFee `object`
  * label `string`
  * type `string`
  * value `string`

### OfferPriceTax
* OfferPriceTax `object`
  * label `string`
  * type `string`
  * value `string`

### OfferRelationships
* OfferRelationships `object`
  * areas [ResponseObjectRefList](#responseobjectreflist)
  * offerSets [ResponseObjectRefList](#responseobjectreflist)
  * passwords [ResponseObjectRefList](#responseobjectreflist)
  * priceZones [ResponseObjectRefList](#responseobjectreflist)
  * products [ResponseObjectRefList](#responseobjectreflist)

### OfferedPrice
* OfferedPrice `object`
  * _links [SimpleLinks](#simplelinks)
  * attributes [OfferedPriceAttributes](#offeredpriceattributes)
  * id `string`
  * relationships [OfferedPriceRelationships](#offeredpricerelationships)
  * type `string`

### OfferedPriceAttributes
* OfferedPriceAttributes `object`
  * currency `string`
  * value `string`

### OfferedPriceRelationships
* OfferedPriceRelationships `object`
  * areas [ResponseObjectRefList](#responseobjectreflist)
  * offers [ResponseObjectRefListSimpleLinks](#responseobjectreflistsimplelinks)
  * priceZones [ResponseObjectRefListSimpleLinks](#responseobjectreflistsimplelinks)

### OfferingResponse
* OfferingResponse `object`
  * _embedded [OfferingResponseEmbeddedData](#offeringresponseembeddeddata)
  * debug `array`
    * items `string`
  * limits [Limit](#limit)
  * metadata [OfferingResponseMetadata](#offeringresponsemetadata)
  * offers `array`
    * items [Offer](#offer)
  * prices [ResponseObjectListOfferedPriceSimpleLinks](#responseobjectlistofferedpricesimplelinks)

### OfferingResponseEmbeddedData
* OfferingResponseEmbeddedData `object`
  * areas [ResponseObjectListAreaSimpleLinks](#responseobjectlistareasimplelinks)
  * attributesRefs [ResponseObjectListAttributeRefSimpleLinks](#responseobjectlistattributerefsimplelinks)
  * holds [ResponseObjectListHoldRefSimpleLinks](#responseobjectlistholdrefsimplelinks)
  * passwords [ResponseObjectListPasswordSimpleLinks](#responseobjectlistpasswordsimplelinks)
  * priceZones [ResponseObjectListPriceZoneSimpleLinks](#responseobjectlistpricezonesimplelinks)

### OfferingResponseMetadata
* OfferingResponseMetadata `object`
  * accessibleSeatingEnabled `boolean`
  * eventMapping [EventMappingView](#eventmappingview)

### Password
* Password `object`
  * _links [SimpleLinks](#simplelinks)
  * attributes [PasswordAttributes](#passwordattributes)
  * id `string`
  * metadata [PasswordMetadata](#passwordmetadata)
  * relationships [PasswordRelationships](#passwordrelationships)
  * type `string`

### PasswordAttributes
* PasswordAttributes `object`
  * end `string`
  * exclusive `boolean`
  * link `string`
  * linkLabel `string`
  * name `string`
  * prompts `array`
    * items [Prompt](#prompt)
  * start `string`
  * text `string`
  * textLabel `string`
  * type `string`

### PasswordMetadata
* PasswordMetadata `object`
  * offerIds `array`
    * items `string`

### PasswordRelationships
* PasswordRelationships `object`
  * offers [ResponseObjectRefListSimpleLinks](#responseobjectreflistsimplelinks)

### PriceZone
* PriceZone `object`
  * _links [SimpleLinks](#simplelinks)
  * attributes [PriceZoneAttributes](#pricezoneattributes)
  * id `string`
  * relationships [PriceZoneRelationships](#pricezonerelationships)
  * type `string`

### PriceZoneAttributes
* PriceZoneAttributes `object`
  * currency `string`
  * name `string`

### PriceZoneRelationships
* PriceZoneRelationships `object`
  * areas [ResponseObjectRefList](#responseobjectreflist)
  * offers [ResponseObjectRefList](#responseobjectreflist)

### Prompt
* Prompt `object`
  * id `string`
  * text `string`

### ResponseObjectListAreaSimpleLinks
* ResponseObjectListAreaSimpleLinks `object`
  * _links [SimpleLinks](#simplelinks)
  * data `array`
    * items [Area](#area)

### ResponseObjectListAttributeRefSimpleLinks
* ResponseObjectListAttributeRefSimpleLinks `object`
  * _links [SimpleLinks](#simplelinks)
  * data `array`
    * items [AttributeRef](#attributeref)

### ResponseObjectListHoldRefSimpleLinks
* ResponseObjectListHoldRefSimpleLinks `object`
  * _links [SimpleLinks](#simplelinks)
  * data `array`
    * items [HoldRef](#holdref)

### ResponseObjectListOfferedPriceSimpleLinks
* ResponseObjectListOfferedPriceSimpleLinks `object`
  * _links [SimpleLinks](#simplelinks)
  * data `array`
    * items [OfferedPrice](#offeredprice)

### ResponseObjectListPasswordSimpleLinks
* ResponseObjectListPasswordSimpleLinks `object`
  * _links [SimpleLinks](#simplelinks)
  * data `array`
    * items [Password](#password)

### ResponseObjectListPriceZoneSimpleLinks
* ResponseObjectListPriceZoneSimpleLinks `object`
  * _links [SimpleLinks](#simplelinks)
  * data `array`
    * items [PriceZone](#pricezone)

### ResponseObjectRef
* ResponseObjectRef `object`
  * id `string`
  * type `string`

### ResponseObjectRefList
* ResponseObjectRefList `object`
  * _links [Links](#links)
  * data `array`
    * items [ResponseObjectRef](#responseobjectref)

### ResponseObjectRefListSimpleLinks
* ResponseObjectRefListSimpleLinks `object`
  * _links [SimpleLinks](#simplelinks)
  * data `array`
    * items [ResponseObjectRef](#responseobjectref)

### SimpleLinks
* SimpleLinks `object`
  * self [HrefLinkValue](#hreflinkvalue)

### Source
* Source `object`
  * id `string`
  * name `string`


