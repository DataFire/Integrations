# @datafire/chompthis

Client library for Chomp Food Database API Documentation

## Installation and Usage
```bash
npm install --save @datafire/chompthis
```
```js
let chompthis = require('@datafire/chompthis').create({
  ApiKeyAuth: ""
});

.then(data => {
  console.log(data);
});
```

## Description

## Important
An **[API key](https://chompthis.com/api/)** is required for access to this API. Get yours at **[https://chompthis.com/api](https://chompthis.com/api/)**.

### Getting Started
  * **[Subscribe](https://chompthis.com/api/#pricing)** to the API.
  * Scroll down and click the "**Authorize**" button.
  * Enter your API key into the "**value**" input, click the "**Authorize**" button, then click the "**Close**" button.
  * Scroll down to the section titled "**default**" and click on the API endpoint you wish to use.
  * Click the "**Try it out**" button.
  * Enter the information the endpoint requires.
  * Click the "**Execute**" button.

### Example 
  * Branded food response object: **[View example &raquo;](https://raw.githubusercontent.com/chompfoods/examples/master/branded-food-response-object.json)**
  * Ingredient response object: **[View example &raquo;](https://raw.githubusercontent.com/chompfoods/examples/master/ingredient-response-object.json)**
  * Error response object: **[View example &raquo;](https://raw.githubusercontent.com/chompfoods/examples/master/error-response-object.json)**

### How Do I Find My API Key?
  * Your API key was sent to the email address you used to create your subscription.
  * You will also find your API key in the **[Client Center](https://chompthis.com/api/manage.php)**.
  * Read **[this article](https://desk.zoho.com/portal/chompthis/kb/articles/how-do-i-find-my-api-key)** for more information.

### Helpful Links
  * **Help & Support**
    * [Knowledge Base &raquo;](https://desk.zoho.com/portal/chompthis/kb/chomp)
    * [Support &raquo;](https://chompthis.com/api/ticket-new.php)
    * [Client Center &raquo;](https://chompthis.com/api/manage.php)
  * **Pricing**
    * [Subscription Options &raquo;](https://chompthis.com/api/)
    * [Cost Calculator &raquo;](https://chompthis.com/api/cost-calculator.php)
  * **Guidelines**
    * [Terms & License &raquo;](https://chompthis.com/api/terms.php)
    * [Attribution &raquo;](https://chompthis.com/api/docs/attribution.php)


## Actions

### food.branded.barcode.php.get
## Get data for a branded food using the food's UPC/EAN barcode.

**Example** 
> ```https://chompthis.com/api/v2/food/branded/barcode.php?api_key=API_KEY&code=CODE```

**Tips**
  * Read our **[Knowledge Base article](https://desk.zoho.com/portal/chompthis/kb/articles/im-having-trouble-getting-matches-for-barcodes-what-can-id-do)** for helpful tips and tricks.



```js
chompthis.food.branded.barcode.php.get({
  "code": ""
}, context)
```

#### Input
* input `object`
  * code **required** `string`: #### UPC/EAN barcode

#### Output
* output [BrandedFoodObject](#brandedfoodobject)

### food.branded.name.php.get
## Search for branded food items by name.

**Example**
> ```https://chompthis.com/api/v2/food/branded/name.php?api_key=API_KEY&name=NAME```

**Tips**
  * Get started by using our **[food lookup tool](https://chompthis.com/api/lookup.php)**.

> This API endpoint is only available to Standard and Premium API subscribers. Please consider upgrading your subscription if you are subscribed to the Limited plan. **[Read this](https://desk.zoho.com/portal/chompthis/kb/articles/can-i-upgrade-downgrade-my-subscription)** if you aren't sure how to upgrade your subscription.



```js
chompthis.food.branded.name.php.get({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: #### Search for branded food items using a general food name keyword. This does not have to exactly match the "official" name for the food.
  * limit `integer` (values: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10): #### Set maximum number of records you want the API to return. The default value is "**10**."
  * page `integer`: #### This is how you paginate the search result. By default, you will see the first 10 records. You must increment the page number to access the next 10 records, and so on. The default value is "**1**."

#### Output
* output [BrandedFoodObject](#brandedfoodobject)

### food.branded.search.php.get
## Search for branded food items using various parameters.

**Example**
> ```https://chompthis.com/api/v2/food/branded/search.php?api_key=API_KEY&brand=BRAND&country=COUNTRY&page=1```

**Tips** 
  * Get started by using the **[Query Builder](https://chompthis.com/api/build.php)**.

> This API endpoint is only available to Standard and Premium API subscribers. Please consider upgrading your subscription if you are subscribed to the Limited plan. **[Read this](https://desk.zoho.com/portal/chompthis/kb/articles/can-i-upgrade-downgrade-my-subscription)** if you aren't sure how to upgrade your subscription.



```js
chompthis.food.branded.search.php.get({}, context)
```

#### Input
* input `object`
  * allergen `string`: #### Filter the search to only include branded foods that contain a specific allergen.
  * brand `string`: #### Filter the search to only include branded foods that are owned by a specific brand.
  * category `string`: #### Filter the search to only include branded foods from a specific category.
  * country `string`: #### Filter the search to only include branded foods that are sold in a specific country.
  * diet `string` (values: Vegan, Vegetarian, Gluten Free): #### Filter the search to only include branded foods that are considered compatible with a specific diet.
  * ingredient `string`: #### Filter the search to only include branded foods that contain a specific ingredient.
  * keyword `string`: #### Filter the search to only include branded foods that are associated with a specific keyword.
  * mineral `string`: #### Filter the search to only include branded foods that contain a specific mineral.
  * nutrient `string`: #### Filter the search to only include branded foods that contain a specific nutrient.
  * palm_oil `string`: #### Filter the search to only include branded foods that contain a specific ingredient made using palm oil.
  * trace `string`: ### Filter the search to only include branded foods that contain a specific trace ingredient.
  * vitamin `string`: #### Filter the search to only include branded foods that contain a specific vitamin.
  * limit `integer` (values: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10): #### Set maximum number of records you want the API to return. The default value is "**10**."
  * page `integer`: #### This is how you paginate the search result. By default, you will see the first 10 records. You must increment the page number to access the next 10 records, and so on. The default value is "**1**."

#### Output
* output [BrandedFoodObject](#brandedfoodobject)

### food.ingredient.search.php.get
## Get data for a specific ingredient or a specific set of ingredients.

**Example #1: Single Ingredient**
> ```https://chompthis.com/api/v2/ingredient/search.php?api_key=API_KEY&find=raw broccoli```

**Example #2: Set of Ingredients**
> ```https://chompthis.com/api/v2/ingredient/search.php?api_key=API_KEY&find=raw broccoli,mashed potatoes,chicken drumstick```

**Tips**
  * Expose ingredient endpoints by using our **[food lookup tool](https://chompthis.com/api/lookup.php)**.

> This API endpoint is only available to Standard and Premium API subscribers. Please consider upgrading your subscription if you are subscribed to the Limited plan. **[Read this](https://desk.zoho.com/portal/chompthis/kb/articles/can-i-upgrade-downgrade-my-subscription)** if you aren't sure how to upgrade your subscription.



```js
chompthis.food.ingredient.search.php.get({
  "find": ""
}, context)
```

#### Input
* input `object`
  * find **required** `string`: Search our database for a single ingredient or a specific set of ingredients.
  * limit `integer` (values: 1, 2, 3): #### Set maximum number of records you want the API to return, per search term. The default value is "**1**."

#### Output
* output [IngredientObject](#ingredientobject)



## Definitions

### BrandedFoodObject
* BrandedFoodObject `object`: Please read the description of each field in this API response object example. By default, the value of each field is **null**. This indicates an unknown state or that no data exists.
  * items `array`: An array containing an object for each individual item returned by your API call.
    * items `object`: An object containing information for this specific item.
      * allergens `array`: An array of ingredients in this item that may cause allergic reactions in people
        * items `string`
      * barcode `string`: EAN/UPC barcode
      * brand `string`: The brand name that owns this item
      * brand_list `array`: An array of brands we have associated with this item. Some items are sold by more than 1 brand.
        * items `string`
      * categories `array`
        * items `string`: An array of categories for this item
      * countries `array`: An array of countries where this item is sold
        * items `string`
      * country_details `object`: An object containing additional information on the countries where this item is found
        * english_speaking `integer`: The number of countries where English is the country's primary language
        * non_english_speaking `integer`: The number of countries where English is not the country's primary language
      * description `string`: A description of this item
      * diet_flags `array`: An array of ingredient objects that were flagged while grading this item for compatibility with each diet
        * items `object`: An object containing information on an individual ingredient that was flagged as potentially not being compatible with a certain diet
          * compatibility_description `string`: A description of how we graded this ingredient for compatibility with the diet
          * compatibility_level `integer`: A numeric representation of if we believe this ingredient is compatible with the diet. Higher values indicate more compatibility
          * diet_label `string`: Name of the diet with which this ingredient may not be compatible
          * ingredient `string`: Ingredient name
          * ingredient_description `string`: Description of the ingredient
          * is_allergen `boolean`: Boolean representing if the ingredient is a known allergen
          * is_compatible `string`: A description of if we believe this ingredient is compatible with the diet
      * diet_labels `object`: An object containing this item's compatibility grades for each supported diet
        * gluten_free `object`: An object containing information on this item's compatibility with Gluten Free diets
          * compatibility_level `integer`: Numeric representation of how compatible this item is with this diet. Higher values indicate more compatibility
          * confidence `integer`: Boolean that indicates if we are confident in how this item is graded for this diet
          * confidence_description `string`: Description of our confidence that this item was graded correctly
          * is_compatible `boolean`: Boolean describing if this item is compatible with this diet
          * name `string`: Diet name
        * vegan `object`: An object containing information on this item's compatibility with the Vegan diets
          * compatibility_level `integer`: Numeric representation of how compatible this item is with this diet. Higher values indicate more compatibility
          * confidence `integer`: Boolean that indicates if we are confident in how this item is graded for this diet
          * confidence_description `string`: Description of our confidence that this item was graded correctly
          * is_compatible `boolean`: Boolean describing if this item is compatible with this diet
          * name `string`: Diet name
        * vegetarian `object`: An object containing information on this item's compatibility with Vegetarian diets
          * compatibility_level `integer`: Numeric representation of how compatible this item is with this diet. Higher values indicate more compatibility
          * confidence `integer`: Boolean that indicates if we are confident in how this item is graded for this diet
          * confidence_description `string`: Description of our confidence that this item was graded correctly
          * is_compatible `boolean`: Boolean describing if this item is compatible with this diet
          * name `string`: Diet name
      * has_english_ingredients `boolean`: A boolean indicating if we have English ingredients for this item
      * ingredient_list `array`: An array of this item's ingredients
        * items `string`
      * ingredients `string`: This food item's ingredients from greatest quantity to least
      * keywords `array`: An array of keywords that can be used to describe this item
        * items `string`
      * minerals `array`: An array of minerals that this item contains
        * items `string`
      * name `string`: Item name as provided by brand owner or as shown on packaging
      * nutrients `array`: An array containing nutrient informatio objects for this food item
        * items `object`: An object containing information for a specific nutrient found in this food item
          * data_points `integer`: Number of observations on which the value is based
          * description `string`: Description of the nutrient source
          * measurement_unit `string`: The unit used for the measure of this nutrient
          * name `string`: Nutrient name
          * per_100g `number`: Amount of the nutrient per 100g of food
          * rank `integer`: Nutrient rank
      * package `object`: An object containing basic packaging information about this item
        * quantity `integer`: Package quantity
        * size `string`: Package size
      * packaging_photos `object`: A object containing a collection of photos of this item's packaging
        * front `object`: An object containing photos of the front of this item's packaging
          * display `string`: Full-sized photo of the front of this item's packaging
          * small `string`: Small photo of the front of this item's packaging
          * thumb `string`: Thumbnail photo of the front of this item's packaging
        * ingredients `object`: An object containing photos of the ingredients on this item's packaging
          * display `string`: Full-sized photo of the ingredients on this item's packaging
          * small `string`: Small photo of the ingredients on this item's packaging
          * thumb `string`: Thumbnail photo of the ingredients on this item's packaging
        * nutrition `object`: An object containing photos of this item's nutrition label
          * display `string`: Full-sized photo of this item's nutrition label
          * small `string`: Small photo of this item's nutrition label
          * thumb `string`: Thumbnail photo of this item's nutrition label
      * palm_oil_ingredients `array`: An array of ingredients made from palm oil
        * items `string`
      * serving `object`: An object containing serving information for this item
        * measurement_unit `string`: Measurement unit for each serving (e.g. if measure is 3 tsp, the unit is tsp)
        * size `string`: Serving size
        * size_fulltext `string`: Serving size description
      * traces `array`: An array of trace ingredients that may be found in this item
        * items `string`
      * vitamins `array`: An array of vitamins that are found in this item
        * items `string`

### IngredientObject
* IngredientObject `object`: Please read the description of each field in this API response object example. By default, the value of each field is **null**. This indicates an unknown state or that no data exists.
  * items `array`: An array containing an object for each individual item returned by your API call.
    * items `object`: An object containing information for this specific item.
      * components `array`: An array of objects containing the constituent parts of a food (e.g. bone is a component of meat)
        * items `object`: An object containing information on a specific component of this food item
          * data_points `integer`: The number of obersvations on which the measure is based
          * gram_weight `number`: The weight of the component in grams
          * is_refuse `boolean`: Whether the component is refuse, i.e. not edible
          * name `string`: The kind of component, e.g. bone
          * pct_weight `number`: The weight of the component as a percentage of the total weight of the food
      * calorie_conversion_factor `object`: An object containing the multiplication factors to be used when calculating energy from macronutrients for a specific food.
        * carbohydrate_value `number`: The multiplication factor for carbohydrates
        * fat_value `number`: The multiplication factor for fat
        * protein_value `number`: The multiplication factor for protein
      * categories `array`
        * items `string`: An array of categories for this item
      * common_name `string`: Common name associated with this item. These generally clarify what the item is (e.g. when the brand name is "BRAND's Spicy Enchilada" the common name may be "Chicken enchilada")
      * footnote `string`: Comments on any unusual aspects of this item. Examples might include unusual aspects of the food overall
      * name `string`: Item name as provided by brand owner or as shown on packaging
      * nutrients `array`: An array containing nutrient informatio objects for this food item
        * items `object`: An object containing information for a specific nutrient found in this food item
          * data_points `integer`: Number of observations on which the value is based
          * description `string`: Description of the nutrient source
          * footnote `string`: Comments on any unusual aspect of the food nutrient. Examples might include why a nutrient value is different than typically expected.
          * max `number`: Maximum nutrient value
          * measurement_unit `string`: The unit used for the measure of this nutrient
          * median `number`: Median nutrient value
          * min `number`: Minimum nutrient value
          * name `string`: Nutrient name
          * per_100g `number`: Amount of the nutrient per 100g of food
          * rank `integer`: Nutrient rank
      * portions `array`: An array of objects containing information on discrete amounts of a food found in this item
        * items `object`: An object containing information on a specific food portion found in this item
          * data_points `integer`: The number of observations on which the measure is based
          * description `string`: Comments that provide more specificity on the measure. For example, for a pizza measure the dissemination text might be 1 slice is 1/8th of a 14 inch pizza.
          * footnote `string`: Comments on any unusual aspects of the measure. Examples might includes caveats on the usage of a measure, or reasons why a measure gram weight is an unexpected value.
          * gram_weight `number`: The weight of the measure in grams
          * measurement_unit `string`: The unit used for measure (e.g. if mesure is 3 tsp, the unit is tsp)
          * modifier `string`: Qualifier of the measure (e.g. related to food shape or form) (e.g. melted, crushed, diced)
      * protein_conversion_factor `number`: The multiplication factor used to calculate protein from nitrogen
      * score `string`: A value that represents how similar the name of this food item is to the original search term. The lower the value the closer this item's name is to the original search term.
      * search_term `string`: The original search term that found this food item


