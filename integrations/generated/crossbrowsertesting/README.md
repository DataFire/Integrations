# @datafire/crossbrowsertesting

Client library for Crossbrowsertesting.com Screenshot Comparisons

## Installation and Usage
```bash
npm install --save @datafire/crossbrowsertesting
```
```js
let crossbrowsertesting = require('@datafire/crossbrowsertesting').create({
  username: "",
  password: ""
});

crossbrowsertesting.screenshots.target_screenshot_test_id.target_version_id.comparison.parallel.base_version_id.get({
  "target_screenshot_test_id": 0,
  "target_version_id": 0,
  "base_version_id": 0
}).then(data => {
  console.log(data);
});
```

## Description

What's in this version: 
 1. Compare two screenshots for layout differences 
 2. Compare a full screenshot test of browsers to a single baseline browser for layout differences. 
 3. Compare a screenshot test version to another test version - good for regression tests. 
 4. Get links to the Comparison UI for visual representation of layout differences

## Actions

### screenshots.target_screenshot_test_id.target_version_id.comparison.parallel.base_version_id.get
Get comparison results for all browsers in target screenshot test against the same browser in the base screenshot test. This is a good method for regression testing. For example, you've run a screenshot test against a set of browsers that is "good". Then, after some changes, you run a new screenshot test against the same set of browsers. This method will compare each of the same browsers against each other. For example, IE9 will be compared to IE9 from an earlier test. This is a many-to-many comparison where the OS/Browser/Resolution must match between the two test versions in order for the comparison to return results. The two versions can be from the same screenshot_test_id or not.


```js
crossbrowsertesting.screenshots.target_screenshot_test_id.target_version_id.comparison.parallel.base_version_id.get({
  "target_screenshot_test_id": 0,
  "target_version_id": 0,
  "base_version_id": 0
}, context)
```

#### Input
* input `object`
  * target_screenshot_test_id **required** `integer`: test id of the target Screenshot Test
  * target_version_id **required** `integer`: version id of the target Screenshot Test
  * base_version_id **required** `integer`: version id of the base Screenshot Test
  * format `string`: The format of the returned data. Possible values are "json" or "jsonp".
  * callback `string`: Name of callback method for JSONP requests.
  * tolerance `number`: Used as the basis for detecting box model differences in element positioning and dimensions that should be flagged and reported back to the comparison results. The default is 30px which is a good basis for finding notable layout differences.

#### Output
* output `array`
  * items [single_comparison_test](#single_comparison_test)

### screenshots.target_screenshot_test_id.target_version_id.comparison.base_result_id.get
Get comparison results for all browsers in target screenshot test against a base screenshot result. The base result can be from the same test or from another test run at an earlier time. This is a one-to-many comparison.


```js
crossbrowsertesting.screenshots.target_screenshot_test_id.target_version_id.comparison.base_result_id.get({
  "target_screenshot_test_id": 0,
  "target_version_id": 0,
  "base_result_id": 0
}, context)
```

#### Input
* input `object`
  * target_screenshot_test_id **required** `integer`: test id of the target Screenshot Test
  * target_version_id **required** `integer`: version id of the target Screenshot Test
  * base_result_id **required** `integer`: result id of the base Screenshot Test
  * format `string`: The format of the returned data. Possible values are "json" or "jsonp".
  * callback `string`: Name of callback method for JSONP requests.
  * tolerance `number`: Used as the basis for detecting box model differences in element positioning and dimensions that should be flagged and reported back to the comparison results. The default is 30px which is a good basis for finding notable layout differences.

#### Output
* output [full_comparison_test](#full_comparison_test)

### screenshots.target_screenshot_test_id.target_version_id.target_result_id.comparison.base_result_id.get
Get comparison results for a single target screenshot result against a base screenshot result. This is a one-to-one comparison.


```js
crossbrowsertesting.screenshots.target_screenshot_test_id.target_version_id.target_result_id.comparison.base_result_id.get({
  "target_screenshot_test_id": 0,
  "target_version_id": 0,
  "target_result_id": 0,
  "base_result_id": 0
}, context)
```

#### Input
* input `object`
  * target_screenshot_test_id **required** `integer`: test id of the target Screenshot Test
  * target_version_id **required** `integer`: version id of the target Screenshot Test
  * target_result_id **required** `integer`: result id of the target Screenshot Test
  * base_result_id **required** `integer`: result id of the base Screenshot Test
  * format `string`: The format of the returned data. Possible values are "json" or "jsonp".
  * callback `string`: Name of callback method for JSONP requests.
  * tolerance `number`: Used as the basis for detecting box model differences in element positioning and dimensions that should be flagged and reported back to the comparison results. The default is 30px which is a good basis for finding notable layout differences.

#### Output
* output [single_comparison_test](#single_comparison_test)



## Definitions

### comparison
* comparison `object`
  * differences `integer`
  * elements `array`
    * items [element](#element)
  * error `boolean`
  * message `string`
  * show_comparisons_public_url `string`
  * show_comparisons_web_url `string`
  * tolerance `integer`

### element
* element `object`
  * difference `string`
  * full_path `string`
  * short_path `string`
  * show_difference_public_url `string`
  * show_difference_web_url `string`

### full_comparison_test
* full_comparison_test `object`
  * base `object`
    * screenshot [screenshot](#screenshot)
  * targets `array`
    * items [target](#target)

### screenshot
* screenshot `object`
  * screenshot_id `integer`

### single_comparison_test
* single_comparison_test `object`
  * base `object`
    * screenshot [screenshot](#screenshot)
  * target [target](#target)

### target
* target `object`
  * comparison [comparison](#comparison)
  * screenshot [screenshot](#screenshot)


