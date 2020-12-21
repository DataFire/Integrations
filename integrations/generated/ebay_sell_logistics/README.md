# @datafire/ebay_sell_logistics

Client library for Logistics API

## Installation and Usage
```bash
npm install --save @datafire/ebay_sell_logistics
```
```js
let ebay_sell_logistics = require('@datafire/ebay_sell_logistics').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

.then(data => {
  console.log(data);
});
```

## Description

The <b>Logistics API</b> resources offer the following capabilities: <ul><li><b>shipping_quote</b> &ndash; Consolidates into a list a set of live shipping rates, or quotes, from which you can select a rate to ship a package.</li> <li><b>shipment</b> &ndash; Creates a "shipment" for the selected shipping rate.</li></ul> Call <b>createShippingQuote</b> to get a list of live shipping rates. The rates returned are all valid for a specific time window and all quoted prices are at eBay-negotiated rates. <br><br>Select one of the live rates and using its associated <b>rateId</b>, create a "shipment" for the package by calling <b>createFromShippingQuote</b>. Creating a shipment completes an agreement, and the cost of the base service and any added shipping options are summed into the returned <b>totalShippingCost</b> value. This action also generates a shipping label that you can use to ship the package.  The total cost of the shipment is incurred when the package is shipped using the supplied shipping label.  <p class="tablenote"><b>Important!</b> Sellers must set up a payment method via their eBay account before they can use the methods in this API to create a shipment and the associated shipping label.</p>

## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
ebay_sell_logistics.oauthCallback({
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
ebay_sell_logistics.oauthRefresh(null, context)
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

### createFromShippingQuote
This method creates a &quot;shipment&quot; based on the shippingQuoteId and rateId values supplied in the request. The rate identified by the rateId value specifies the carrier and service for the package shipment, and the rate ID must be contained in the shipping quote identified by the shippingQuoteId value. Call createShippingQuote to retrieve a set of live shipping rates. When you create a shipment, eBay generates a shipping label that you can download and use to ship your package. In a createFromShippingQuote request, sellers can include a list of shipping options they want to add to the base service quoted in the selected rate. The list of available shipping options is specific to each quoted rate and if available, the options are listed in the rate container of the of the shipping quote. In addition to a configurable return-to location and other details about the shipment, the response to this method includes: The shipping carrier and service to be used for the package shipment A list of selected shipping options, if any The shipment tracking number The total shipping cost (the sum cost of the base shipping service and any added options) When you create a shipment, your billing agreement account is charged the sum of the baseShippingCost and the total cost of any additional shipping options you might have selected. Use the URL returned in labelDownloadUrl field, or call downloadLabelFile with the shipmentId value from the response, to download a shipping label for your package. Important! Sellers must set up their payment method with eBay before they can use this method to create a shipment and the associated shipping label.


```js
ebay_sell_logistics.createFromShippingQuote({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [CreateShipmentFromQuoteRequest](#createshipmentfromquoterequest)

#### Output
* output [Shipment](#shipment)

### getShipment
This method retrieves the shipment details for the specified shipment ID. Call createFromShippingQuote to generate a shipment ID.


```js
ebay_sell_logistics.getShipment({
  "shipmentId": ""
}, context)
```

#### Input
* input `object`
  * shipmentId **required** `string`: This path parameter specifies the unique eBay-assigned ID of the shipment you want to retrieve. The shipmentId value is generated and returned by a call to createFromShippingQuote.

#### Output
* output [Shipment](#shipment)

### cancelShipment
This method cancels the shipment associated with the specified shipment ID and the associated shipping label is deleted. When you cancel a shipment, the totalShippingCost of the canceled shipment is refunded to the account established by the user's billing agreement. Note that you cannot cancel a shipment if you have used the associated shipping label.


```js
ebay_sell_logistics.cancelShipment({
  "shipmentId": ""
}, context)
```

#### Input
* input `object`
  * shipmentId **required** `string`: This path parameter specifies the unique eBay-assigned ID of the shipment to be canceled. The shipmentId value is generated and returned by a call to createFromShippingQuote.

#### Output
* output [Shipment](#shipment)

### downloadLabelFile
This method returns the shipping label file that was generated for the shipmentId value specified in the request. Call createFromShippingQuote to generate a shipment ID. Use the Accept HTTP header to specify the format of the returned file. The default file format is a PDF file.


```js
ebay_sell_logistics.downloadLabelFile({
  "shipmentId": ""
}, context)
```

#### Input
* input `object`
  * shipmentId **required** `string`: This path parameter specifies the unique eBay-assigned ID of the shipment associated with the shipping label you want to download. The shipmentId value is generated and returned by a call to createFromShippingQuote.

#### Output
* output `array`
  * items `string`

### createShippingQuote
The createShippingQuote method returns a shipping quote that contains a list of live &quot;rates.&quot; Each rate represents an offer made by a shipping carrier for a specific service and each offer has a live quote for the base service cost. Rates have a time window in which they are &quot;live,&quot; and rates expire when their purchase window ends. If offered by the carrier, rates can include shipping options (and their associated prices), and users can add any offered shipping option to the base service should they desire. Also, depending on the services required, rates can also include pickup and delivery windows. Each rate is for a single package and is based on the following information: The shipping origin The shipping destination The package size (weight and dimensions) Rates are identified by a unique eBay-assigned rateId and rates are based on price points, pickup and delivery time frames, and other user requirements. Because each rate offered must be compliant with the eBay shipping program, all rates reflect eBay-negotiated prices. The various rates returned in a shipping quote offer the user a choice from which they can choose a shipping service that best fits their needs. Select the rate for your shipment and using the associated rateId, call cerateFromShippingQuote to create a shipment and generate a shipping label that you can use to ship the package.


```js
ebay_sell_logistics.createShippingQuote({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [ShippingQuoteRequest](#shippingquoterequest)

#### Output
* output [ShippingQuote](#shippingquote)

### getShippingQuote
This method retrieves the complete details of the shipping quote associated with the specified shippingQuoteId value. A &quot;shipping quote&quot; pertains to a single specific package and contains a set of shipping &quot;rates&quot; that quote the cost to ship the package by different shipping carriers and services. The quotes are based on the package's origin, destination, and size. Call createShippingQuote to create a shippingQuoteId.


```js
ebay_sell_logistics.getShippingQuote({
  "shippingQuoteId": ""
}, context)
```

#### Input
* input `object`
  * shippingQuoteId **required** `string`: This path parameter specifies the unique eBay-assigned ID of the shipping quote you want to retrieve. The shippingQuoteId value is generated and returned by a call to createShippingQuote.

#### Output
* output [ShippingQuote](#shippingquote)



## Definitions

### AdditionalOption
* AdditionalOption `object`: This complex type contains information about a shipping option that can be purchased in addition to the base shipping cost of a recommended rate. Additional options for each rate are defined, named, and offered by the selected shipping carrier. Examples include shipping insurance or the requirement for a recipient signature.
  * additionalCost [Amount](#amount)
  * optionType `string`: The name of a shipping option that can be purchased in addition to the base shipping cost of this rate. The value supplied in this field must match exactly the option name as supplied by the selected rate.

### Amount
* Amount `object`: A complex type that describes the value of a monetary amount as represented by a global currency.
  * currency `string`: The base currency applied to the value field to establish a monetary amount. The currency is represented as a 3-letter ISO 4217 currency code. For example, the code for the Canadian Dollar is CAD. Default: The default currency of the eBay marketplace that hosts the listing. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/logistics/types/bas:CurrencyCodeEnum'>eBay API documentation</a>
  * value `string`: The monetary amount in the specified currency.

### Contact
* Contact `object`: This complex type contains contact information for an individual buyer or seller.
  * companyName `string`: The company name with which the contact is associated.
  * contactAddress [ContactAddress](#contactaddress)
  * fullName `string`: The contact's full name.
  * primaryPhone [PhoneNumber](#phonenumber)

### ContactAddress
* ContactAddress `object`: This complex type specifies the details of a geographical address.
  * addressLine1 `string`: The first line of the street address.
  * addressLine2 `string`: The second line of the street address. Use this field for additional address information, such as a suite or apartment number.
  * city `string`: The city in which the address is located.
  * countryCode `string`: The country of the address, represented as two-letter ISO 3166 country code. For example, US represents the United States and DE represents Germany. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/logistics/types/bas:CountryCodeEnum'>eBay API documentation</a>
  * county `string`: The county (not country) in which the address is located. Counties typically contain multiple cities or towns.
  * postalCode `string`: The postal code of the address.
  * stateOrProvince `string`: The state or province in which the address is located. States and provinces often contain multiple counties.

### CreateShipmentFromQuoteRequest
* CreateShipmentFromQuoteRequest `object`: This complex type contains the request payload for the createFromShippingQuote method.
  * additionalOptions `array`: Supply a list of one or more shipping options that the seller wants to purchase for this shipment. The baseShippingCost field that's associated with the selected shipping rate is the cost of the base service offered in the rate. In addition to the base service, sellers can add additional shipping services to the base service. Shipping options include things such as shipping insurance or a recipient's signature upon delivery. The cost of any added services is summed with the base shipping cost to determine the final cost for the shipment. All options added to the shipment must be chosen from the set of shipping options offered with the selected rate.
    * items [AdditionalOption](#additionaloption)
  * labelCustomMessage `string`: Optional text to be printed on the shipping label if the selected shipping carrier supports custom messages on their labels.
  * labelSize `string`: The seller's desired label size. Any supplied value is applied only if the shipping carrier supports multiple label sizes, otherwise the carrier's default label size is used. 4&quot;x6&quot;
  * rateId `string`: The eBay-assigned ID of the shipping rate that the seller selected for the shipment. This value is generated by a call to createShippingQuote and is returned in the rates.rateId field.
  * returnTo [Contact](#contact)
  * shippingQuoteId `string`: The unique eBay-assigned ID of the shipping quote that was generated by a call to createShippingQuote.

### Dimensions
* Dimensions `object`: This complex type defines the dimensions of a package to be shipped.
  * height `string`: The numeric value of the height of the package.
  * length `string`: The numeric value of the length of the package.
  * unit `string`: The unit of measure used to express the height, length, and width of the package. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/logistics/types/api:LengthUnitOfMeasureEnum'>eBay API documentation</a>
  * width `string`: The numeric value of the width of the package.

### Error
* Error `object`: A container that defines the elements of error and warning message.
  * parameters `array`: This optional complex field type contains a list of one or more context-specific ErrorParameter objects, with each item in the list entry being a parameter (or input field name) that caused an error condition. Each ErrorParameter object consists of two fields, a name and a value.
    * items [ErrorParameter](#errorparameter)
  * category `string`: The category type for this error or warning. It takes a string that can have one of three values: Application: Indicates an exception or error occurred in the application code or at runtime. Examples include catching an exception in a service's business logic, system failures, or request errors from a dependency. Business: Used when your service or a dependent service refused to continue processing on the resource because of a business rule violation such as &quot;Seller does not ship item to Antarctica&quot; or &quot;Buyer ineligible to purchase an alcoholic item&quot;. Business errors are not syntactical input errors. Request: Used when there is anything wrong with the request, such as authentication, syntactical errors, rate limiting or missing headers, bad HTTP header values, and so on.
  * domain `string`: Name of the domain containing the service or application.
  * errorId `integer`: A positive integer that uniquely identifies the specific error condition that occurred. Your application can use error codes as identifiers in your customized error-handling algorithms.
  * inputRefIds `array`: Identifies specific request elements associated with the error, if any. inputRefId's response is format specific. For JSON, use JSONPath notation.
    * items `string`
  * longMessage `string`: An expanded version of message that should be around 100-200 characters long, but is not required to be such.
  * message `string`: An end user and app-developer friendly device agnostic message. It explains what the error or warning is, and how to fix it (in a general sense). Its value is at most 50 characters long. If applicable, the value is localized in the end user's requested locale.
  * outputRefIds `array`: Identifies specific response elements associated with the error, if any. Path format is the same as inputRefId.
    * items `string`
  * subdomain `string`: Name of the domain's subsystem or subdivision. For example, checkout is a subdomain in the buying domain.

### ErrorParameter
* ErrorParameter `object`: Container for an error parameter.
  * name `string`: Name of the entity that threw the error.
  * value `string`: A description of the error.

### Order
* Order `object`: This complex type defines an order from which a seller is including one or more line items in a single package to be shipped.
  * channel `string`: The e-commerce platform or environment where the order was created. Use the value EBAY to get the rates available for eBay orders.
  * orderId `string`: The unique ID of the order supplied by the channel of origin. For eBay orders, this would be the orderId.

### PackageSpecification
* PackageSpecification `object`: This complex type specifies the dimensions and weight of a package.
  * dimensions [Dimensions](#dimensions)
  * weight [Weight](#weight)

### PhoneNumber
* PhoneNumber `object`: This complex type contains a string field representing a telephone number.
  * phoneNumber `string`: A telephone number.

### PickupSlot
* PickupSlot `object`: This complex type defines a time window for the pickup of a package.
  * pickupSlotEndTime `string`: The date and time the pickup slot ends, formatted as an ISO 8601 string, which is based on the 24-hour Coordinated Universal Time (UTC) clock. Format: [YYYY]-[MM]-[DD]T[HH]:[MM]:[SS].[SSS]Z Example: 2018-08-20T07:09:00.000Z
  * pickupSlotId `string`: Seller-defined name for the pickup slot.
  * pickupSlotStartTime `string`: The date and time the pickup slot begins, formatted as an ISO 8601 UTC string.
  * pickupSlotTimeZone `string`: The time zone of the pickup location, returned as Time Zone Database ID (also know as an Olson time zone ID).

### PurchasedRate
* PurchasedRate `object`: The &quot;rate&quot; that has been selected and purchased for the shipment, as referenced by the rateId value.
  * additionalOptions `array`: An list of additional, optional features that have been purchased for the shipment.
    * items [AdditionalOption](#additionaloption)
  * baseShippingCost [Amount](#amount)
  * destinationTimeZone `string`: The time zone of the destination according to Time Zone Database. For example, &quot;America/Los_Angeles&quot;.
  * maxEstimatedDeliveryDate `string`: A string value representing maximum (latest) estimated delivery time, formatted as an ISO 8601 string, which is based on the 24-hour Coordinated Universal Time (UTC) clock. Format: [YYYY]-[MM]-[DD]T[HH]:[MM]:[SS].[SSS]Z Example: 2018-08-20T07:09:00.000Z
  * minEstimatedDeliveryDate `string`: A string value representing minimum (earliest) estimated delivery time, formatted as an ISO 8601ISO 8601 UTC string.
  * pickupNetworks `array`: A list of pickup networks compatible with the shipping service.
    * items `string`
  * pickupSlotId `string`: This unique eBay-assigned ID value is returned only if the shipment has been configured for a scheduled pickup.
  * pickupType `string`: The type of pickup or drop off configured for the shipment. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/logistics/types/api:PickupTypeEnum'>eBay API documentation</a>
  * rateId `string`: The eBay-generated ID of the shipping rate that the seller has chosen to purchase for the shipment.
  * shippingCarrierCode `string`: The ID code for the carrier that was selected for the package shipment.
  * shippingCarrierName `string`: The name of the shipping carrier.
  * shippingQuoteId `string`: The unique eBay-generated ID of the shipping quote from which the seller selected a shipping rate (rateId).
  * shippingServiceCode `string`: String ID code for the shipping service selected for the package shipment. This is a service that the shipping carrier supplies.
  * shippingServiceName `string`: The name of the shipping service.
  * totalShippingCost [Amount](#amount)

### Rate
* Rate `object`: This complex type contains live quote information about a shipping service that's available for a given shipping quote request, including the shipping carrier and service, delivery window, shipping cost, and additional shipping options.
  * additionalOptions `array`: Contains service and pricing information for one or more shipping options that are offered by the carrier and can be purchased in addition to the base shipping service provided by this rate. Shipping options can include items such as INSURANCE and SIGNATURE.
    * items [AdditionalOption](#additionaloption)
  * baseShippingCost [Amount](#amount)
  * destinationTimeZone `string`: The name of the time zone region, as defined in the IANA Time Zone Database, to which the package is being shipped. Delivery dates are calculated relative to this time zone. Note: This is different from a Coordinated Universal Time (UTC) offset. For example, the America/Los_Angeles time zone identifies a region with the UTC standard time offset of -08:00, but so do several other time zones, including America/Tijuana,America/Dawson, and Pacific/Pitcairn.
  * maxEstimatedDeliveryDate `string`: The latest stated date and time the shipment will be delivered at this rate. The time stamp is formatted as an ISO 8601 string, which is based on the 24-hour Coordinated Universal Time (UTC) clock. Format: [YYYY]-[MM]-[DD]T[HH]:[MM]:[SS].[SSS]Z Example: 2018-08-20T07:09:00.000Z
  * minEstimatedDeliveryDate `string`: The estimated earliest date and time the shipment will be delivered at this rate. The time stamp is formatted as an ISO 8601 UTC string.
  * pickupNetworks `array`: A list of pickup networks compatible with the shipping service.
    * items `string`
  * pickupSlots `array`: A list of available pickup slots for the package.
    * items [PickupSlot](#pickupslot)
  * pickupType `string`: The type of pickup or drop-off service associated with the pickupSlots time frames. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/logistics/types/api:PickupTypeEnum'>eBay API documentation</a>
  * rateId `string`: The unique eBay-assigned ID for this shipping rate.
  * rateRecommendation `array`: A list of reasons this rate is recommended. Available values are: BUYER_CHOSEN &mdash; The rate meets or exceeds the requirements of the buyer's preferred shipping option. CHEAPEST_ON_TIME &mdash; The rate is the cheapest rate available that will provide delivery within the seller's time frame commitment. EBAY_PLUS_OK &mdash; The rate complies with the shipping requirements of the eBay Plus program. FASTEST_ON_TIME &mdash; The rate has the fastest shipping time, and will provide delivery within the seller's time frame commitment. GUARANTEED_DELIVERY_OK &mdash; The rate complies with the shipping requirements of the eBay Guaranteed Delivery program.
    * items `string`:  For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/logistics/types/api:RateRecommendationEnum'>eBay API documentation</a>
  * shippingCarrierCode `string`: The code name of the shipping carrier who will provide the service identified by shippingServiceCode.
  * shippingCarrierName `string`: The common name of the shipping carrier.
  * shippingServiceCode `string`: The code name of the shipping service to be provided by the carrier identified by shippingCarrierCode.
  * shippingServiceName `string`: The common name of the shipping service.

### Shipment
* Shipment `object`: This complex type defines a shipment for a specific package (for example, a box or letter). Shipments are always linked to a purchased shipping label.
  * cancellation [ShipmentCancellation](#shipmentcancellation)
  * creationDate `string`: The date and time the shipment was created, formatted as an ISO 8601 string, which is based on the 24-hour Coordinated Universal Time (UTC) clock. Format: [YYYY]-[MM]-[DD]T[HH]:[MM]:[SS].[SSS]Z Example: 2018-08-20T07:09:00.000Z
  * labelCustomMessage `string`: If supported by the selected shipping carrier, this field can contain optional seller text to be printed on the shipping label.
  * labelDownloadUrl `string`: The direct URL the seller can use to download an image of the shipping label. By default, the file format is PDF. See downloadLabelFile for requesting different response file formats.
  * labelSize `string`: The seller's desired label size. The support for multi-sized labels is shipping-carrier specific and if the size requested in the creaateFromShippingQuote call matches a size the carrier supports, the value will be represented here in the shipment. Currently, the only valid value is: 4&quot;x6&quot;
  * orders `array`: This list value is optionally assigned by the seller. When present, each element in the returned list contains seller-assigned information about an order (such as an order number). Because a package can contain all or part of one or more orders, this field provides a way for sellers to identify the packages that contain specific orders.
    * items [Order](#order)
  * packageSpecification [PackageSpecification](#packagespecification)
  * rate [PurchasedRate](#purchasedrate)
  * returnTo [Contact](#contact)
  * shipFrom [Contact](#contact)
  * shipTo [Contact](#contact)
  * shipmentId `string`: The unique eBay-assigned ID for the shipment. The ID is generated when the shipment is created by a call to createFromShippingQuote.
  * shipmentTrackingNumber `string`: A unique carrier-assigned ID string that can be used to track the shipment.

### ShipmentCancellation
* ShipmentCancellation `object`: This type defines a shipment cancellation by the date and time the cancellation request was made and the current status of the request.
  * cancellationRequestedDate `string`: The time and date the request was made to cancel the shipment, formatted as an ISO 8601 UTC string.
  * cancellationStatus `string`: This enum specifies the current cancellation status of a shipment, if a cancellation request has been made. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/logistics/types/api:ShipmentCancellationStatusEnum'>eBay API documentation</a>

### ShippingQuote
* ShippingQuote `object`: This complex type describes a &quot;shipping quote,&quot; which contains the parameters for a package shipment. The shipping quote contains a list of &quot;live quotes&quot; or rates for the shipment. Rates are offerd by a carrier for a particular service, of set of services, for shipping the package. Included in the shipping quote are the package specifications, the shipment's origin and destination addresses, and the shipping parameters specified by the seller. Use the rateId value to select the specific service you want when you create a shipment by calling createFromShippingQuote.
  * creationDate `string`: The date and time this quote was created, expressed as an ISO 8601 UTC string.
  * expirationDate `string`: The last date and time that this quote will be honored, expressed as an ISO 8601 UTC string. After this time the quote expires and the expressed rates can no longer be purchased.
  * orders `array`: This list value is optionally assigned by the seller. When present, each element in the returned list contains seller-assigned information about an order (such as an order number). Because a package can contain all or part of one or more orders, this field provides a way for sellers to identify the packages that contain specific orders.
    * items [Order](#order)
  * packageSpecification [PackageSpecification](#packagespecification)
  * rates `array`: A list of rates where each rate, as identified by a rateId, contains information about a specific shipping service offered by a carrier. Rates include shipping carrier and service, the to and from locations, the pickup and delivery windows, the seller's shipping parameters, the service constraints, and the cost for the base service and a list of additional shipping options. Each rate offered is supported by a label service where you can purchase the rate, and associated shipping label, via a call to createFromShippingQuote.
    * items [Rate](#rate)
  * shipFrom [Contact](#contact)
  * shipTo [Contact](#contact)
  * shippingQuoteId `string`: The unique eBay-assigned ID for this shipping quote. The value of this field is associated with a specific package, based on its origin, destination, and size.
  * warnings `array`: A list of any warnings triggered by the request.
    * items [Error](#error)

### ShippingQuoteRequest
* ShippingQuoteRequest `object`: This complex type defines the request body for createShippingQuote. Sellers request a quote for a shipment by defining the &quot;To&quot; and &quot;From&quot; addresses for the package, plus the package's size. Carriers respond by offering up a &quot;rate&quot; for the service of theirs that best fits seller's needs.
  * orders `array`: A seller-defined list that contains information about the orders in the package. This allows sellers to include information about the line items in the package with the shipment information. A package can contain any number of line items from one or more orders, providing they all ship in the same package. Maximum list size: 10
    * items [Order](#order)
  * packageSpecification [PackageSpecification](#packagespecification)
  * shipFrom [Contact](#contact)
  * shipTo [Contact](#contact)

### Weight
* Weight `object`: This complex type contains information about the weight of an object such as a shipping package.
  * unit `string`: The unit of measurement used to specify the weight of a shipping package. Both the unit and value fields are required if the weight container is used. If the English system of measurement is being used, the applicable values for weight units are POUND and OUNCE. If the metric system of measurement is being used, the applicable values for weight units are KILOGRAM and GRAM. The metric system is used by most countries outside of the US. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/logistics/types/api:WeightUnitOfMeasureEnum'>eBay API documentation</a>
  * value `string`: The numeric value of the weight of the package, as measured by the value of unit.


