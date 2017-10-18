# @datafire/icons8

Client library for Icons8

## Installation and Usage
```bash
npm install --save datafire @datafire/icons8
```

```js
let datafire = require('datafire');
let icons8 = require('@datafire/icons8').create();

icons8.api.task.web_font.icons.post({}).then(data => {
  console.log(data);
})
```

## Description
Icons8 API allows us to search and obtain [our icons](https://icons8.com/web-app).

You're welcome to use our icons to extend the functionality of your web and mobile applications, website templates, and even tattoos.

![Tattoos](https://cdn.rawgit.com/icons8/api-docs/cff6fdf0/tattoos.svg)

## Usage Examples

Some examples of what you can do with our icons:

* **Template customization.** This way, [Canva](https://www.canva.com/) uses our icons to customize their layouts.

* **Graphics and text editors.** [Gravit](https://gravit.io/) allows to insert our icons into the mockups.

* **Any application with customization.** [TimeTune](http://timetune.center/) uses our icons to customize the activities.

## Getting Started

To get started, please [contact us](https://icons8.com/contact) to obtain an API key.

## Pricing

Our API license starts at $100/month.

## Actions
### api.iconsets.v3.categories_platform_platform_language_language.get
The operation will not return the categories that have less than 10 icons.
We need it to test the categories without showing garbage on the production website.


```js
icons8.api.iconsets.v3.categories_platform_platform_language_language.get({
  "platform": "",
  "language": ""
}, context)
```

#### Parameters
* platform (string) **required** - the platform that we are searching icons for
* language (string) **required** - the language code to get localized result

### api.iconsets.v3.category_category_category_subcategory_subcategory_amount_amount_offset_offset_platform_platform_language_language.get
By Category


```js
icons8.api.iconsets.v3.category_category_category_subcategory_subcategory_amount_amount_offset_offset_platform_platform_language_language.get({
  "category": "",
  "subcategory": "",
  "amount": 0,
  "offset": 0,
  "platform": "",
  "language": ""
}, context)
```

#### Parameters
* category (string) **required** - the code of category
* subcategory (string) **required** - the code of subcategory
* amount (number) **required** - the maximum number of icons which you'd like to receive
* offset (number) **required** - the offset from the first received result
* platform (string) **required** - the style of the icons
* language (string) **required** - the language code to get localized result

### api.iconsets.v3.latest_term_term_amount_amount_offset_offset_platform_platform_language_language.get
Latest


```js
icons8.api.iconsets.v3.latest_term_term_amount_amount_offset_offset_platform_platform_language_language.get({
  "amount": 0,
  "offset": 0,
  "platform": "",
  "language": "",
  "term": ""
}, context)
```

#### Parameters
* amount (number) **required** - the maximum number of icons which you'd like to receive
* offset (number) **required** - the offset from the first received result
* platform (string) **required** - the style of the icons
* language (string) **required** - the language code to get localized result
* term (string) **required**

### api.iconsets.v3.search_term_term_amount_amount_offset_offset_platform_platform_language_language_exact_amount_exact_amount.get
By Keyword


```js
icons8.api.iconsets.v3.search_term_term_amount_amount_offset_offset_platform_platform_language_language_exact_amount_exact_amount.get({
  "term": "",
  "amount": 0,
  "exact_amount": true,
  "offset": 0,
  "platform": "",
  "language": ""
}, context)
```

#### Parameters
* term (string) **required** - the name or tag of the icon or any other phrase.
* amount (number) **required** - the maximum number of icons which you'd like to receive (will be multiplied by platforms count, if you didn't specify the platform and didn't set the 'exact_amount' parameter)
* exact_amount (boolean) **required** - set it to 'true' if you'd like to receive the exact amount of icons, not multiplied by platforms count
* offset (number) **required** - the offset from the first received result
* platform (string) **required** - the style of the icons
* language (string) **required** - the language code to get localized result

### api.iconsets.v3.total_since_since.get
Totals


```js
icons8.api.iconsets.v3.total_since_since.get({
  "since": ""
}, context)
```

#### Parameters
* since (string) **required** - the optional date to calculate the total number of icons that were created after it.

### api.task.web_font.collection.post
From a Collection


```js
icons8.api.task.web_font.collection.post({}, context)
```

#### Parameters
* body (object)

### api.task.web_font.icons.post
From Separate Icons


```js
icons8.api.task.web_font.icons.post({}, context)
```

#### Parameters
* body (object)

