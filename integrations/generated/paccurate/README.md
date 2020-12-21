# @datafire/paccurate

Client library for paccurate.io

## Installation and Usage
```bash
npm install --save @datafire/paccurate
```
```js
let paccurate = require('@datafire/paccurate').create();

.then(data => {
  console.log(data);
});
```

## Description



## Actions

### .post
a pure-JSON endpoint for packing requests.



```js
paccurate..post({}, context)
```

#### Input
* input `object`
  * pack [Pack](#pack)

#### Output
* output `object`
  * boxes `array`: List of boxes, packed, with their contained items.
    * items [Box](#box)
  * built `string`: build timestamp of engine.
  * leftovers `array`: items left over that could not be packed into any available boxes.
    * items [Item](#item)
  * lenBoxes `integer`: cardinality of all packed boxes
  * lenItems `integer`: cardinality of all items
  * lenLeftovers `integer`: cardinality of items unabled to be packed
  * packTime `number`: seconds spent in packing
  * renderTime `number`: seconds spent in rendering and placement instruction creation of packing solution
  * scripts `string`: additional javascripts for any image loading.
  * styles `string`: additional styles for pack images
  * svgs `string`: all box SVG images
  * title `string`: title of packing result, when applicable.
  * totalCost `integer`: total estimated cost of all packed boxes, when applicable, in cents.
  * totalTime `number`: seconds spent generating response, total.
  * version `string`: version of engine



## Definitions

### Box
* Box: A completed, packed box.
  * dimensions **required**: the [height,length,width] of the box.
    * x `number`: x coordinate, used as height.
    * y `number`: y coordinate, used as width.
    * z `number`: z coordinate, used as length.
  * name `string`: name for the type of box.
  * price `integer`: Fixed price of the container, in whole units of currency, default USD cents. This can represent the cost of a flat rate carton, the cost of the actual carton materials, or it can include any other flat fees that may need to be added on a <i>per-carton</i> basis, such as handling, accessorial surchages, oversize fees, etc. This value is <i>added</i> to any rate table rates defined for the carton.
  * rateTable: An optional rate table definition for improved carton selection and pricing optimization. Defaults are included using retail rates for FedEx and UPS if carrier and service is provided, but optimization can be improved with more data passed in a carton's specific rate table. Methods are <ol><li>Provide carrier, service, and zone.</li><li>Provide all acceptable weights and prices to use for the carton, similar to actual carrier rate tables.</li><li>Provide the coefficients required for a simple linear weight-dependent pricing model.</li></ol>
    * basePrice `number`: The basePrice can be found by estimating the lowest weight-based rate available for a given service, in the example above, solving for basePrice for a $10, 1lb package with the already-solved priceIncreaseRate yields <pre>$10 = $5/lb * 1lb + basePrice<br/>$10 = $5 + basePrice<br/>basePrice = $5</pre>
    * carrier `string`: carrier name for rate table to use
    * dimFactor `number`: This is the Dimensional Weight divisor. It is given in units of volume per unit weight, e.g., the standard of "139" represents 139 cubic inches per pound, and is used to convert the total volume of a carton into a functional minimum weight to be used when rating the carton. E.g., a carton with dimensions 10" x 10" x 13.9" would yield a volume of 1390 cubic inches. This yields <pre>cartonEffectiveMinimumWeight = 1390in&sup3; / 139in&sup3;/lb<br/>cartonEffectiveMinimumWeight = 10lbs</pre>
    * priceIncreaseRate `number`: Instead of providing the full rate table, you can list a carton "basePrice" and a carton "priceIncreaseRate". These two values will be used in a simple linear model to guess carton price, i.e., <pre>cartonPrice = priceIncreaseRate * cartonWeight + basePrice</pre> Oftentimes, this will be enough to get accurate carton selections without needing to send complete customer-based rates. It's worth considering, as the prices are only estimates to be used in carton selection, with final rating of cartons happening outside of paccurate. This is the predicted rate of increase for a weight-based pricing model. The simplest way to find a servicable value is to take <pre>priceIncreaseRate = (maximumPrice - minimumPrice)/(maximumWeight - minimumWeight)</pre> In the example above, this would yield <pre>priceIncreaseRate = ($20-$10)/(3lbs-1lb)<br/>priceIncreaseRate = $10/2lbs<br/>priceIncreaseRate = $5/lb</pre>
    * rates `array`: list of prices to use for the weight that corresponds to its index, e.g., [10, 15, 20] would be $10 for 1lb, $15 for 2lbs, $20 for 3lbs.
      * items `number`
    * service `string`: service name for rate table to use
    * weights `array`: list of weights to use for the rate that corresponds to its index, e.g., [1, 2, 3] would mean 1lb for the minimum rate ($10), 2lbs for the second rate ($15), and 3lbs for the highest rate ($20). Note that if the highest value from this list is less than the weightMax of the carton, all carton weights exceeding the maximum from this list up to the carton weightMax will not pro-rate but will be estimated at the maximum value in the rate table.
      * items `number`
    * zone `string`: zone of rate table to use
  * weightMax **required** `number`: maximum allowable gross weight for the box, i.e., all packed item weights plus the weightTare.
  * weightTare `number`: weight of the container when empty or otherwise unladen, i.e., of the box itself.
  * dimensionalWeight `number`: the calculated dimensional weight of this box, if applicable.
  * dimensionalWeightUsed `boolean`: whether or not dimensional weight was used for this box.
  * id `integer`
  * items `array`
    * items [Item](#item)
  * svg `string`: raw svg of visualization.
  * volumeMax `number`: total volume of the box.
  * volumeRemaining `number`: remaining volume of the box.
  * volumeUsed `number`: utilized volume of the box.
  * volumeUtilization `number`: percentage of volume utilized by packed items.
  * weightNet `number`: total weight of box's contents, not including the box's empty (tare) weight.
  * weightRemaining `number`: remaining weight of the box.
  * weightUsed `number`: utilized weight of the box.
  * weightUtilization `number`: percentage of weight utilized by packed items.

### BoxProperties
* BoxProperties `object`
  * dimensions **required**: the [height,length,width] of the box.
    * x `number`: x coordinate, used as height.
    * y `number`: y coordinate, used as width.
    * z `number`: z coordinate, used as length.
  * name `string`: name for the type of box.
  * price `integer`: Fixed price of the container, in whole units of currency, default USD cents. This can represent the cost of a flat rate carton, the cost of the actual carton materials, or it can include any other flat fees that may need to be added on a <i>per-carton</i> basis, such as handling, accessorial surchages, oversize fees, etc. This value is <i>added</i> to any rate table rates defined for the carton.
  * rateTable: An optional rate table definition for improved carton selection and pricing optimization. Defaults are included using retail rates for FedEx and UPS if carrier and service is provided, but optimization can be improved with more data passed in a carton's specific rate table. Methods are <ol><li>Provide carrier, service, and zone.</li><li>Provide all acceptable weights and prices to use for the carton, similar to actual carrier rate tables.</li><li>Provide the coefficients required for a simple linear weight-dependent pricing model.</li></ol>
    * basePrice `number`: The basePrice can be found by estimating the lowest weight-based rate available for a given service, in the example above, solving for basePrice for a $10, 1lb package with the already-solved priceIncreaseRate yields <pre>$10 = $5/lb * 1lb + basePrice<br/>$10 = $5 + basePrice<br/>basePrice = $5</pre>
    * carrier `string`: carrier name for rate table to use
    * dimFactor `number`: This is the Dimensional Weight divisor. It is given in units of volume per unit weight, e.g., the standard of "139" represents 139 cubic inches per pound, and is used to convert the total volume of a carton into a functional minimum weight to be used when rating the carton. E.g., a carton with dimensions 10" x 10" x 13.9" would yield a volume of 1390 cubic inches. This yields <pre>cartonEffectiveMinimumWeight = 1390in&sup3; / 139in&sup3;/lb<br/>cartonEffectiveMinimumWeight = 10lbs</pre>
    * priceIncreaseRate `number`: Instead of providing the full rate table, you can list a carton "basePrice" and a carton "priceIncreaseRate". These two values will be used in a simple linear model to guess carton price, i.e., <pre>cartonPrice = priceIncreaseRate * cartonWeight + basePrice</pre> Oftentimes, this will be enough to get accurate carton selections without needing to send complete customer-based rates. It's worth considering, as the prices are only estimates to be used in carton selection, with final rating of cartons happening outside of paccurate. This is the predicted rate of increase for a weight-based pricing model. The simplest way to find a servicable value is to take <pre>priceIncreaseRate = (maximumPrice - minimumPrice)/(maximumWeight - minimumWeight)</pre> In the example above, this would yield <pre>priceIncreaseRate = ($20-$10)/(3lbs-1lb)<br/>priceIncreaseRate = $10/2lbs<br/>priceIncreaseRate = $5/lb</pre>
    * rates `array`: list of prices to use for the weight that corresponds to its index, e.g., [10, 15, 20] would be $10 for 1lb, $15 for 2lbs, $20 for 3lbs.
      * items `number`
    * service `string`: service name for rate table to use
    * weights `array`: list of weights to use for the rate that corresponds to its index, e.g., [1, 2, 3] would mean 1lb for the minimum rate ($10), 2lbs for the second rate ($15), and 3lbs for the highest rate ($20). Note that if the highest value from this list is less than the weightMax of the carton, all carton weights exceeding the maximum from this list up to the carton weightMax will not pro-rate but will be estimated at the maximum value in the rate table.
      * items `number`
    * zone `string`: zone of rate table to use
  * weightMax **required** `number`: maximum allowable gross weight for the box, i.e., all packed item weights plus the weightTare.
  * weightTare `number`: weight of the container when empty or otherwise unladen, i.e., of the box itself.

### BoxType
* BoxType: box types to be used for packing.
  * dimensions **required**: the [height,length,width] of the box.
    * x `number`: x coordinate, used as height.
    * y `number`: y coordinate, used as width.
    * z `number`: z coordinate, used as length.
  * name `string`: name for the type of box.
  * price `integer`: Fixed price of the container, in whole units of currency, default USD cents. This can represent the cost of a flat rate carton, the cost of the actual carton materials, or it can include any other flat fees that may need to be added on a <i>per-carton</i> basis, such as handling, accessorial surchages, oversize fees, etc. This value is <i>added</i> to any rate table rates defined for the carton.
  * rateTable: An optional rate table definition for improved carton selection and pricing optimization. Defaults are included using retail rates for FedEx and UPS if carrier and service is provided, but optimization can be improved with more data passed in a carton's specific rate table. Methods are <ol><li>Provide carrier, service, and zone.</li><li>Provide all acceptable weights and prices to use for the carton, similar to actual carrier rate tables.</li><li>Provide the coefficients required for a simple linear weight-dependent pricing model.</li></ol>
    * basePrice `number`: The basePrice can be found by estimating the lowest weight-based rate available for a given service, in the example above, solving for basePrice for a $10, 1lb package with the already-solved priceIncreaseRate yields <pre>$10 = $5/lb * 1lb + basePrice<br/>$10 = $5 + basePrice<br/>basePrice = $5</pre>
    * carrier `string`: carrier name for rate table to use
    * dimFactor `number`: This is the Dimensional Weight divisor. It is given in units of volume per unit weight, e.g., the standard of "139" represents 139 cubic inches per pound, and is used to convert the total volume of a carton into a functional minimum weight to be used when rating the carton. E.g., a carton with dimensions 10" x 10" x 13.9" would yield a volume of 1390 cubic inches. This yields <pre>cartonEffectiveMinimumWeight = 1390in&sup3; / 139in&sup3;/lb<br/>cartonEffectiveMinimumWeight = 10lbs</pre>
    * priceIncreaseRate `number`: Instead of providing the full rate table, you can list a carton "basePrice" and a carton "priceIncreaseRate". These two values will be used in a simple linear model to guess carton price, i.e., <pre>cartonPrice = priceIncreaseRate * cartonWeight + basePrice</pre> Oftentimes, this will be enough to get accurate carton selections without needing to send complete customer-based rates. It's worth considering, as the prices are only estimates to be used in carton selection, with final rating of cartons happening outside of paccurate. This is the predicted rate of increase for a weight-based pricing model. The simplest way to find a servicable value is to take <pre>priceIncreaseRate = (maximumPrice - minimumPrice)/(maximumWeight - minimumWeight)</pre> In the example above, this would yield <pre>priceIncreaseRate = ($20-$10)/(3lbs-1lb)<br/>priceIncreaseRate = $10/2lbs<br/>priceIncreaseRate = $5/lb</pre>
    * rates `array`: list of prices to use for the weight that corresponds to its index, e.g., [10, 15, 20] would be $10 for 1lb, $15 for 2lbs, $20 for 3lbs.
      * items `number`
    * service `string`: service name for rate table to use
    * weights `array`: list of weights to use for the rate that corresponds to its index, e.g., [1, 2, 3] would mean 1lb for the minimum rate ($10), 2lbs for the second rate ($15), and 3lbs for the highest rate ($20). Note that if the highest value from this list is less than the weightMax of the carton, all carton weights exceeding the maximum from this list up to the carton weightMax will not pro-rate but will be estimated at the maximum value in the rate table.
      * items `number`
    * zone `string`: zone of rate table to use
  * weightMax **required** `number`: maximum allowable gross weight for the box, i.e., all packed item weights plus the weightTare.
  * weightTare `number`: weight of the container when empty or otherwise unladen, i.e., of the box itself.

### BoxTypeSet
* BoxTypeSet `string` (values: usps, fedex, pallet, customer): box type sets for useful defaults.

### Error
* Error `object`
  * code **required** `integer`
  * details `string`
  * message **required** `string`

### Item
* Item: a specific, packed item.
  * color `string`: designated color name for the item in pack visualizations.
  * dimensions **required**: the length, width, and height of the item.
    * x `number`: x coordinate, used as height.
    * y `number`: y coordinate, used as width.
    * z `number`: z coordinate, used as length.
  * name `string`: name or description of item for your reference.
  * refId `integer`: item type reference identifier passed backed from request.
  * sequence `string`: A sequence value for the item. This is intended for aisle-bin locations, e.g., aisle 11 bin 20 can be '1120'. Combined with maxSequenceDistance, you can restrict cartons to only have contents from within a certain range. This is very helpful for cartonization when picking efficiency is paramount. Sequence can also be used to pre-sort items for efficient packing on any arbitrary number, such as item weight instead of the default item volume.
  * weight **required** `number`: weight of this single packed item.
  * index `integer`: the sequence at which the item was packed.
  * message `string`: any relevant information or warnings about the packing of the item.
  * origin: the [x,y,z] placement point of the back-bottom corner of the item.
    * x `number`: x coordinate, used as height.
    * y `number`: y coordinate, used as width.
    * z `number`: z coordinate, used as length.

### ItemProperties
* ItemProperties `object`: general properties of an item
  * color `string`: designated color name for the item in pack visualizations.
  * dimensions **required**: the length, width, and height of the item.
    * x `number`: x coordinate, used as height.
    * y `number`: y coordinate, used as width.
    * z `number`: z coordinate, used as length.
  * name `string`: name or description of item for your reference.
  * refId `integer`: item type reference identifier passed backed from request.
  * sequence `string`: A sequence value for the item. This is intended for aisle-bin locations, e.g., aisle 11 bin 20 can be '1120'. Combined with maxSequenceDistance, you can restrict cartons to only have contents from within a certain range. This is very helpful for cartonization when picking efficiency is paramount. Sequence can also be used to pre-sort items for efficient packing on any arbitrary number, such as item weight instead of the default item volume.
  * weight **required** `number`: weight of this single packed item.

### ItemSet
* ItemSet: set of items sharing a common type.
  * color `string`: designated color name for the item in pack visualizations.
  * dimensions **required**: the length, width, and height of the item.
    * x `number`: x coordinate, used as height.
    * y `number`: y coordinate, used as width.
    * z `number`: z coordinate, used as length.
  * name `string`: name or description of item for your reference.
  * refId `integer`: item type reference identifier passed backed from request.
  * sequence `string`: A sequence value for the item. This is intended for aisle-bin locations, e.g., aisle 11 bin 20 can be '1120'. Combined with maxSequenceDistance, you can restrict cartons to only have contents from within a certain range. This is very helpful for cartonization when picking efficiency is paramount. Sequence can also be used to pre-sort items for efficient packing on any arbitrary number, such as item weight instead of the default item volume.
  * weight **required** `number`: weight of this single packed item.
  * quantity `integer`: quantity of items of this type in this item set

### Pack
* Pack `object`
  * allowableOverhang `number`: The amount an item can overhang lower items that it is placed upon. The units are whatever units the box and item dimensions are given in. By convention, inches.
  * boxTypeSets `array`: predefined box types to be used, separated by commas. Will be overridden by boxTypes. Acceptable values are <ul><li>"fedex"--FedEx OneRate</li><li>"usps"--USPS Priority Flat Rate</li><li>"pallet"--full-, half-, and quarter-sized 48"x40" pallets.
    * items [BoxTypeSet](#boxtypeset)
  * boxTypes `array`: box type definitions for packing, will override boxTypeSets defined.
    * items [BoxType](#boxtype)
  * cohortMax `integer`: the maximum number of contiguous cohorts for a given item type within a single container. E.g., if you pack 40 chairs in a single container, a cohortMax of 2 could yield one (all 40 chairs in a single block if space is availabe) or two (say, 25 chairs in one corner and 15 in the other) contiguous cohorts.
  * cohortPacking `boolean`: if selected, will ensure that all like items will be packed together, in no more than [cohortMax] different groups within a single container.
  * coordOrder `array`: If placementStyle is set to "default", coordOrder sets the placement priority of axes ascendingly. "0,1,2" would search for placement points along the Z(length,"2"), then Y(width,"1"), and finally X(height"0"). Keep in mind that in the default rendering the "up" direction is X and the other axes follow the right-hand rule.
    * items `integer`
  * corners `boolean`: only pack items at valid corner points of other items (optimal)
  * eye: The x,y,z coordinates of the virtual eye looking at the package for visualization purposes. Default is isometric, "1,1,1". To generate a side view, one could use "0.001,1.0,0.001".
    * x `number`: x coordinate, used as height.
    * y `number`: y coordinate, used as width.
    * z `number`: z coordinate, used as length.
  * imgSize `integer`: width of rendered SVGs in pixels.
  * includeImages `boolean`: include inline images, default is always on
  * includeScripts `boolean`: include inline javascripts and styles for base template
  * interlock `boolean`: alternates layFlat orientation by layer, so as to create an interlocked placement pattern and improve item stability.
  * itemSets `array`: item set definitions if not creating random items.
    * items [ItemSet](#itemset)
  * key `string`: issued API key.
  * layFlat `boolean`: aligns all items laying flat. If possible, it may create a "brick-laying" pattern to increase stability.
  * maxSequenceDistance `integer`: This is the maximum distance allowable between two sequence values of items packed in a common box. E.g., "Distance" for an item sequence composed of aisle/bin combinations of "0401" and "1228" has a sequence distance of \|1228 - 401\| = 827
  * n `integer`: number of random items to generate and the quantity of each if "random" is set to true. a value of 5 would create 5 different items with a quantity of 5 each, making the total item quantity equal to n&sup2;
  * packOrigin: the x,y,z coordinates of an optional packing origin. A packing origin is used to create more balanced packing for situations where load needs to be considered. E.g., for a 40"x48" pallet, a packOrigin representing the middle of the pallet, "0,20,24", would cause placement to minimize the distance of the packed items from the center of the pallet.
    * x `number`: x coordinate, used as height.
    * y `number`: y coordinate, used as width.
    * z `number`: z coordinate, used as length.
  * placementStyle `string` (values: default, corner, wedge, mound, orb): How to place items. 'default' will defer to coordOrder, 'corner' minimizes distance to rear, bottom corner, 'wedge' minimizes distance to middle of bottom, back edge, 'mound' minimizes distance to center of carton bottom.
  * random `boolean`: create random items
  * randomMaxDimension `integer`: maximum item dimension along a single axis for randomly generated items.
  * randomMaxWeight `integer`: maximum item weight for randomly generated items.
  * rules `array`: Array of packing rules.
    * items [Rule](#rule)
  * seed `boolean`: if random is selected, seed the random number generator to deterministically generate random items to pack.
  * sequenceHeatMap `boolean`: Colorize items solely by their sequence value, light when sequence is high, dark when it is low. Useful for indicating item bin location, weight, or other sequence property that may not be apparent from the default visualization.
  * sequenceSort `boolean`: Whether or not the items should be initially sorted by their sequence value instead of their volume. This is not always useful, as the default "biggest-first" volume sort is very effective for items, and constraining by maxSequenceDistance is applied regardless of this field. That said, for doing custom pre-sorts such as weight-based instead of volume based, this value should be set to true.
  * template `string` (values: demo.tmpl, shipapp.tmpl, boat.tmpl): template name for markup generation.
  * usableSpace `number`: estimate of percentage space in boxes that is usable, i.e., not packing material.
  * zone `integer`: <b>[experimental]</b> the shipping zone in order to use basic zone-based price optimization.

### Point
* Point `object`: vector definition used for points, dimensions, and other spacial purposes.
  * x `number`: x coordinate, used as height.
  * y `number`: y coordinate, used as width.
  * z `number`: z coordinate, used as length.

### RateTable
* RateTable `object`
  * basePrice `number`: The basePrice can be found by estimating the lowest weight-based rate available for a given service, in the example above, solving for basePrice for a $10, 1lb package with the already-solved priceIncreaseRate yields <pre>$10 = $5/lb * 1lb + basePrice<br/>$10 = $5 + basePrice<br/>basePrice = $5</pre>
  * carrier `string`: carrier name for rate table to use
  * dimFactor `number`: This is the Dimensional Weight divisor. It is given in units of volume per unit weight, e.g., the standard of "139" represents 139 cubic inches per pound, and is used to convert the total volume of a carton into a functional minimum weight to be used when rating the carton. E.g., a carton with dimensions 10" x 10" x 13.9" would yield a volume of 1390 cubic inches. This yields <pre>cartonEffectiveMinimumWeight = 1390in&sup3; / 139in&sup3;/lb<br/>cartonEffectiveMinimumWeight = 10lbs</pre>
  * priceIncreaseRate `number`: Instead of providing the full rate table, you can list a carton "basePrice" and a carton "priceIncreaseRate". These two values will be used in a simple linear model to guess carton price, i.e., <pre>cartonPrice = priceIncreaseRate * cartonWeight + basePrice</pre> Oftentimes, this will be enough to get accurate carton selections without needing to send complete customer-based rates. It's worth considering, as the prices are only estimates to be used in carton selection, with final rating of cartons happening outside of paccurate. This is the predicted rate of increase for a weight-based pricing model. The simplest way to find a servicable value is to take <pre>priceIncreaseRate = (maximumPrice - minimumPrice)/(maximumWeight - minimumWeight)</pre> In the example above, this would yield <pre>priceIncreaseRate = ($20-$10)/(3lbs-1lb)<br/>priceIncreaseRate = $10/2lbs<br/>priceIncreaseRate = $5/lb</pre>
  * rates `array`: list of prices to use for the weight that corresponds to its index, e.g., [10, 15, 20] would be $10 for 1lb, $15 for 2lbs, $20 for 3lbs.
    * items `number`
  * service `string`: service name for rate table to use
  * weights `array`: list of weights to use for the rate that corresponds to its index, e.g., [1, 2, 3] would mean 1lb for the minimum rate ($10), 2lbs for the second rate ($15), and 3lbs for the highest rate ($20). Note that if the highest value from this list is less than the weightMax of the carton, all carton weights exceeding the maximum from this list up to the carton weightMax will not pro-rate but will be estimated at the maximum value in the rate table.
    * items `number`
  * zone `string`: zone of rate table to use

### Rule
* Rule `object`: Rule definition for packing constraints.
  * itemRefId `integer`: reference ID for the item the rule applies to.
  * operation **required** `string` (values: exclude, exclude-all, pack-as-is, irregular, lock-orientation): Rule type for this definition. Valid operation values include
  * options `object`: additional key-value options to pass for rule based on operation type.
  * parameters `array`: array of supplementary parameters to pass for rule, mostly deprecated. may be different from options.
    * items `string`
  * targetItemRefIds `array`: target item reference IDs that the rule applies to.
    * items `integer`


