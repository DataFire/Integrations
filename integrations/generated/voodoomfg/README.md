# @datafire/voodoomfg

Client library for Voodoo Manufacturing 3D Print

## Installation and Usage
```bash
npm install --save @datafire/voodoomfg
```
```js
let voodoomfg = require('@datafire/voodoomfg').create({
  "Voodoo Manufacturing API Key": ""
});

voodoomfg.materials.get(null).then(data => {
  console.log(data);
});
```

## Description

Welcome to the Voodoo Manufacturing API docs!

Your Voodoo Manufacturing API key must be included with each request to the API. The API will look for the key in the "api_key" header of the request. <a href="https://voodoomfg.com/3d-print-api#get-access" target="_blank">You can request a key here.</a>

This API provides a programmatic interface for submitting printing orders to Voodoo Manufacturing. The general process for creating an order is as follows:
  - Get a list of the available materials with the /materials endpoint
  - Upload models to the API with the /models endpoint
  - Get quotes for shipping methods with the /order/shipping endpoint
  - Get a quote for an order with the /order/create endpoint
  - Confirm the order with the /order/confirm endpoint

Uploaded models and orders can be retrieved either in bulk or by id at the /model and /order endpoints, respectively.

In some cases, you may wish to get a quote for a specific model without the context of an order. In this case, you may use the /model/quote (if you've already uploaded the model to the API) or the /model/quote_attrs (lets you quote based on calculated model attributes) endpoints.


## Actions

### materials.get
The Materials endpoint returns a list of materials that are currently available for production for your account.
The responses include display details about each material, along with the unique id required to request a print in a specific material.



```js
voodoomfg.materials.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [Material](#material)

### model.get
Lists all of the models you've created.



```js
voodoomfg.model.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [Model](#model)

### model.post
Downloads the model data from the URL specified by file_url and saves it as a model. As a part of the model upload process, the file is run through a program that repairs the mesh (closing holes, flipping inverted normals, etc). In some cases, this may alter the geometry of your model. If you're noticing bad results for your created models, you might consider repairing your files before submitting them.



```js
voodoomfg.model.post({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [CreateModelBody](#createmodelbody)

#### Output
* output [Model](#model)

### model.quote.get
Calculates a quote for the given model in the given material and quantity. This endpoint required that you've already uploaded the model to our servers -- to get a quote for a model you haven't yet uploaded, you can try /model/quote_attrs.



```js
voodoomfg.model.quote.get({
  "model_id": 0,
  "material_id": 0,
  "quantity": 0,
  "units": ""
}, context)
```

#### Input
* input `object`
  * model_id **required** `integer`: The unique id of the model you'd like to quote.
  * material_id **required** `number`: The unique id of the desired material.
  * quantity **required** `number`: The number of units in this quote.
  * units **required** `string`: The units of the model file. Either "mm", "cm", or "in". The correct value to pass here depends on which design program you're using. Defaults to "mm".
  * options[orientation] `boolean`: Indicates whether or not this model needs to be oriented prior to printing. If your model is already oriented for 3D printing, you can omit this flag (or set it to false) and it will not be re-oriented prior to printing. If true, it will be re-oriented prior to printing. If you're not sure if your model is oriented, you should set this flag to true. There is an additional charge for orientation.

#### Output
* output [ModelQuote](#modelquote)

### model.quote_attrs.get
This endpoint will provide a quote for a model matching the submitted parameters. Note that this quote may be different than the quote provided by /model/quote in the case that your attribute calculations differ from the ones used by Voodoo Manufacturing.



```js
voodoomfg.model.quote_attrs.get({
  "x": 0,
  "y": 0,
  "z": 0,
  "volume": 0,
  "surface_area": 0,
  "material_id": 0,
  "quantity": 0,
  "units": ""
}, context)
```

#### Input
* input `object`
  * x **required** `number`: The calculated unitless x dimension of this model's bounding box.
  * y **required** `number`: The calculated unitless y dimension of this model's bounding box.
  * z **required** `number`: The calculated unitless z dimension of this model's bounding box.
  * volume **required** `number`: The calculated unitless volume of the model.
  * surface_area **required** `number`: The calculated unitless surface area of the model.
  * material_id **required** `number`: The unique id of the desired material.
  * quantity **required** `number`: The number of units in this quote.
  * units **required** `string`: The units of the model file. Either "mm", "cm", or "in". The correct value to pass here depends on which design program you're using. Defaults to "mm".
  * options[orientation] `boolean`: Indicates whether or not this model needs to be oriented prior to printing. If your model is already oriented for 3D printing, you can omit this flag (or set it to false) and it will not be re-oriented prior to printing. If true, it will be re-oriented prior to printing. If you're not sure if your model is oriented, you should set this flag to true. There is an additional charge for orientation.

#### Output
* output [ModelQuote](#modelquote)

### model.model_id.get
In cases where you're ordering models you've created previously, you can fetch a specific model by its id.



```js
voodoomfg.model.model_id.get({
  "model_id": 0
}, context)
```

#### Input
* input `object`
  * model_id **required** `integer`

#### Output
* output [Model](#model)

### order.get
Gets all of orders that you've confirmed.



```js
voodoomfg.order.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [Order](#order)

### order.confirm.post
After generating a quote for an order, you can choose to confirm the order for manufacturing by hitting this endpoint with the quote_id returned by the /order/quote endpoint. Returns the order with a unique order_id in place of the quote_id.



```js
voodoomfg.order.confirm.post({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [ConfirmOrderBody](#confirmorderbody)

#### Output
* output `object`
  * address [ShippingAddress](#shippingaddress)
  * delivery_date `string`: The target delivery date for the shipping method. Formatted as a datetime string.
  * notes `string`
  * order_id `string`: Unique identifier for referencing this order.
  * order_items `array`
    * items [Print](#print)
  * purchased `boolean`: true if the purchase was completed successfully.
  * quote [Quote](#quote)
  * shipping_service [ShippingService](#shippingservice)

### order.create.post
Creates an order for the requested items, shipping address, and shipping method. This method returns the order along with a quote_id, which needs to be confirmed with /order/confirm prior to the order actually being started. quote_ids are only valid for 15 minutes.



```js
voodoomfg.order.create.post({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [CreateOrderBody](#createorderbody)

#### Output
* output `object`
  * address [ShippingAddress](#shippingaddress)
  * delivery_date `string`: The target delivery date for the shipping method. Formatted as a datetime string.
  * notes `string`
  * order_items `array`
    * items [Print](#print)
  * quote [Quote](#quote)
  * quote_id `string`: Unique identifier for confirming this order. Use this value with /order/confirm place the order.
  * shipping_service [ShippingService](#shippingservice)

### order.shipping.post
Get quotes for shipping your order to the given shipping address. Because shipping quotes depend on the items being shipped, you should use the same array of print descriptions here that you do to create the order.

This endpoint should allow you to select the appropriate shipping method using the "service" field of the desired shipping method.



```js
voodoomfg.order.shipping.post({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [ShippingOptionsBody](#shippingoptionsbody)

#### Output
* output `object`
  * rates `array`
    * items [Rate](#rate)

### order.order_id.get
In cases where you're ordering models you've created previously, you can fetch a specific model by its id.



```js
voodoomfg.order.order_id.get({
  "order_id": ""
}, context)
```

#### Input
* input `object`
  * order_id **required** `string`

#### Output
* output [Order](#order)



## Definitions

### ConfirmOrderBody
* ConfirmOrderBody `object`
  * quote_id `string`: quote_id generated by the /order/create endpoint.

### CreateModelBody
* CreateModelBody `object`
  * file_url `string`: URL to download the model data from. The URL must end in .STL or .OBJ -- the extension of the final segment of the URL is used to determine how ot parse the file.

### CreateOrderBody
* CreateOrderBody `object`
  * models `array`
    * items [Print](#print)
  * notes `string`: Any notes about this order. This field is always returned when reading the order back.
  * shipping_address [ShippingAddress](#shippingaddress)
  * shipping_service [ShippingService](#shippingservice)

### Material
* Material `object`
  * color `string`: Name for the color of this material. This field is for display only and is not required for creating an order (use the material's id).
  * color_sample `string`: A hex value providing an approximate visual sample of this color.
  * id `integer`: The unique identifier for this material. Use this value when submitting order items to specify that an ordered model should be printed with a specific material.
  * type `string`: Type of material, excluding color. Will be one of "PLA", "Semi-flex TPU", or "Full-flex TPU". This field is for display only and is not required for creating an order (use the material's id).

### Model
* Model `object`
  * id `integer`: The unique identifier for this model. Use this value when submitting an order to specify the model you want to print.
  * rendering_url `string`: (reserved) URL with a rendering of the model. Value is null until the rendering is completed.
  * surface_area `number`: The unitless surface area of the submitted model. This is calculated when the model is created.
  * volume `number`: The unitless volume of the submitted model. This is calculated when the model is created.
  * x `number`: The unitless x-axis length of the model's bounding box. This is calculated when the model is created.
  * y `number`: The unitless y-axis length of the model's bounding box. This is calculated when the model is created.
  * z `number`: The unitless z-axis length of the model's bounding box. This is calculated when the model is created.

### ModelQuote
* ModelQuote `object`: Quote for a model in the given material_id, units, and quantity.
  * material_id `integer`: Requested material id.
  * model_id `integer`: Requested model id. Not present on the response from /model/quote_attrs.
  * options [ProductionOptionsCosts](#productionoptionscosts)
  * quote `number`: The cost for printing the model in the requested quantity, before any additional services.
  * unit_cost `number`: The cost of a single print of the specified model.
  * units `string`: Units for the requested print. One of "mm", "cm", or "in".

### Order
* Order `object`: An order contains all of the relevant information about a confirmed order.
  * customer_contact_email `string`: Customer's email address.
  * customer_name `string`: Customer's name.
  * id `integer`: Unique identifier for this order. Reference should be displayed and used for lookups instead of this field.
  * notes `string`: The notes field that was submitted with this order.
  * prints `array`
    * items [OrderPrint](#orderprint)
  * reference `string`: Unique identifier for this order. Used to retrieve info for a specific order from /order/{order_id}.
  * ship_by `string`: Planned ship date for this order.
  * shipping_address [ShippingAddress](#shippingaddress)

### OrderPrint
* OrderPrint `object`
  * material [Material](#material)
  * model [Model](#model)
  * quantity `integer`: The number of prints requested for this model and material pair.
  * units `string`: Units for the requested print. One of "mm", "cm", or "in".

### Print
* Print `object`
  * material_id `integer`: The unique identifier of the material you'd like to print in. This value comes from the id field of the material object.
  * model_id `integer`: The unique identifier of the model you'd like to print. This value comes from the id field of the model object.
  * options [ProductionOptions](#productionoptions)
  * quantity `integer`: The number of prints to order for this material/model pair.
  * units `string`: The units of the model file. Either "mm", "cm", or "in". The correct value to pass here depends on which design program you're using. Defaults to "mm".

### ProductionOptions
* ProductionOptions `object`: Optional extra parameters for the production of this model. There may be additional charges for each enabled optional service.
  * orientation `boolean`: Indicates whether or not this model needs to be oriented prior to printing. If your model is already oriented for 3D printing, you can omit this flag (or set it to false) and it will not be re-oriented prior to printing. If true, it will be re-oriented prior to printing. If you're not sure if your model is oriented, you should set this flag to true. There is an additional charge for orientation.

### ProductionOptionsCosts
* ProductionOptionsCosts `object`: Cost of any requested additional model services.
  * orientation `number`

### Quote
* Quote `object`
  * errors `array`: List of any issues quoting your order.
    * items `string`
  * grand_total `number`: Sum of items, shipping costs, and any calculated tax.
  * items `number`: Cost to make the specified models in the specified materials and quantities.
  * options [ProductionOptionsCosts](#productionoptionscosts)
  * shipping `number`: Cost of the selected shipping method.
  * tax `number`: The tax calculated for the given order. Tax is not applied to all orders.
  * total `number`: Sum of items and shipping costs. This is the taxable subtotal.

### Rate
* Rate `object`
  * delivery_date `string`: The target delivery date for the shipping method. Formatted as a datetime string.
  * display_name `string`: The display name for this shipping service.
  * guaranteed `boolean`: Certain shipping methods have guaranteed delivery dates. This field indicates whether delivery_date is guaranteed or if it is just an estimate.
  * price `number`: The price of this shipping option for the given set of items.
  * service `string`: The identifier string for this shipping service. Use this value when creating an order with this as your requested shipping method.
  * ship_date `string`: The target ship date for the shipping method. Formatted as a datetime string.
  * value `string`: Reserved field. Do not use.

### ShippingAddress
* ShippingAddress `object`
  * city `string`
  * country `string`
  * email `string`: Contact email address for the recipient.
  * name `string`: Name of the recipient.
  * state `string`
  * street1 `string`: First line of the street address.
  * street2 `string`: Second line of the street address (Apartment or Suite number, etc). Optional.
  * zip `string`

### ShippingOptionsBody
* ShippingOptionsBody `object`
  * models `array`
    * items [Print](#print)
  * shipping_address [ShippingAddress](#shippingaddress)

### ShippingService
* ShippingService `string`: Service identifier string pulled from a specific rate returned by /order/shipping.


