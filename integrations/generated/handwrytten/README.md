# @datafire/handwrytten

Client library for Handwrytten API

## Installation and Usage
```bash
npm install --save @datafire/handwrytten
```
```js
let handwrytten = require('@datafire/handwrytten').create();

.then(data => {
  console.log(data);
});
```

## Description

This is the Handwrytten API for sending cards written in the handwriting of your choice.
Using this api, you can send cards to users.  You can also customize cards with logos, which
can be saved and then used like any other card in the system.
For a "sandbox" account, please contact contact@handwrytten.com
To move from credit card per-transaction to monthly invoicing, also contact us.
[https://www.handwrytten.com](https://www.handwrytten.com)


## Actions

### login
Logs in to an existing account


```js
handwrytten.login({
  "body": {
    "login": "",
    "password": ""
  }
}, context)
```

#### Input
* input `object`
  * body **required** [Login](#login)

#### Output
* output `object`
  * anet_customer_id `string`: used internally by Handwrytten
  * free_cards `integer`: number of free cards in account
  * status `string`
  * uid `string`: token for future authorized calls
  * user_id `integer`

### changePassword
changes a user's password


```js
handwrytten.changePassword({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** `object`
    * new_password `string`: the new password
    * old_password `string`: the existing password
    * uid `string`: the authorized UID of the session

#### Output
* output `object`
  * status `string`

### logout
logs out a session uid


```js
handwrytten.logout({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** `object`
    * uid `string`: the authorized UID of the session

#### Output
* output `object`
  * status `string`

### register
Registers a new account


```js
handwrytten.register({
  "body": {
    "login": "",
    "password": "",
    "fname": "",
    "lname": ""
  }
}, context)
```

#### Input
* input `object`
  * body **required** [Registration](#registration)

#### Output
* output `object`
  * status `string`
  * user_id `integer`

### resetPasswordRequest
resets a user's password


```js
handwrytten.resetPasswordRequest({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** `object`
    * login `string`: the email address of the user

#### Output
* output `object`
  * status `string`

### CreateCustomCard
Create a new custom card


```js
handwrytten.CreateCustomCard({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** `object`
    * card_id `integer`: the card id of the card template you're starting with.  You can find this by logging into Handwrytten, clicking "customize" next to any customizable card, and pulling the card ID from the end of the URL
    * cover_id `integer`: the id of the image you want to use for the "cover".  The cover is the large image on the front of the flat card.
    * cover_size_percent `integer`: the size of the image to use as the cover.
    * footer_align `string`: set to "left", "center", or "right" to align the footer appropriately
    * footer_font_id `integer`: font ID of the text in the footer, found by using ListFontForCustomizer
    * footer_font_size `integer`: Font size of the text in the footer
    * footer_text `string`: optional text for the footer of the customizable card
    * header_align `string`: set to "left", "center", or "right" to align the header appropriately
    * header_auto_size `boolean`: if set to true, the header will be maximized to fill the header area
    * header_font_id `integer`: font ID of the text in the header, found by using ListFontForCustomizer
    * header_font_size `integer`: font size of the text in the header of the card
    * header_text `string`: text in the header, if type is set to "text"
    * logo_id `integer`: Optional.  If setting "type" to "logo", set the id of the logo here.
    * logo_size_percent `integer`: set to the desired scaling of the logo on the header
    * name `string`: the name of the new card
    * type `string`: Defines the top of the back of the card. Set to either "logo" or "text".
    * uid `string`: authorized UID of the session.

#### Output
* output `object`
  * items [Card](#card)

### simpleListCards
Filterable card list.  If called with UID will also provide user-specific cards.


```js
handwrytten.simpleListCards(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * items [Card](#card)

### listCards
Simple listing of cards.  No filters can be applied.


```js
handwrytten.listCards({}, context)
```

#### Input
* input `object`
  * body `object`
    * category_id `integer`: optional category id filter
    * uid `string`: optional authorized UID of the session.  By providing this, the card list will include user-specific cards.

#### Output
* output `array`
  * items [Card](#card)

### uploadCustomLogo
upload logo or cover image for card


```js
handwrytten.uploadCustomLogo({
  "file": "",
  "type": "",
  "uid": ""
}, context)
```

#### Input
* input `object`
  * file **required** `string`, `object`: upload images for customc cards
    * content `string`
    * encoding `string` (values: ascii, utf8, utf16le, base64, binary, hex)
    * contentType `string`
    * filename `string`
  * type **required** `string`: set to cover or header
  * uid **required** `string`: uid of the user

#### Output
* output `object`
  * id `integer`: image id
  * status `string`

### filterableCardDetails
Full card details


```js
handwrytten.filterableCardDetails({}, context)
```

#### Input
* input `object`
  * body `object`
    * card_id `integer`: the card id to view
    * uid `string`: optional authorized UID of the session.  By providing this, the card details can provide user-specific cards

#### Output
* output [CardDetails](#carddetails)

### countries.list.get
Lists the countries to which Handwritten can mail, their associated country ID and any costs


```js
handwrytten.countries.list.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [Country](#country)

### fontsList
Lists Handwryting styles available for use


```js
handwrytten.fontsList(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [Font](#font)

### fontsListForCustomizer
Lists fonts available for use with the card customizer


```js
handwrytten.fontsListForCustomizer(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [FontForCustomizer](#fontforcustomizer)

### getGiftCardDetails
Returns images and details (and associated denominations) of all gift cards


```js
handwrytten.getGiftCardDetails(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [GiftCard](#giftcard)

### giftCardDetails
Returns images and details (and associated denominations) of all gift cards


```js
handwrytten.giftCardDetails(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [GiftCard](#giftcard)

### singleStepOrder
Sends an order in one step.  No need to create then process order.  Optionally include a gift card.


```js
handwrytten.singleStepOrder({
  "body": {
    "uid": "",
    "card_id": 0,
    "message": ""
  }
}, context)
```

#### Input
* input `object`
  * body **required** `object`
    * card_id **required** `integer`: the id of the card you want to send
    * credit_card_id `integer`: the credit card id to charge for the order.  Currently this is required, even for invoiced accounts, it just won't be charged.
    * denomination_id `integer`: Optional.  Use if sending a gift card
    * font_label `string`: the colloquial name of the font, such as 'Fancy Jenna' or 'Casual David'
    * message **required** `string`: the full message body.  Use '\n' for new lines
    * recipient_address1 `string`: the first address line of the return address
    * recipient_address2 `string`: the second line of the address, such as suite, apartment, building, etc. Optional
    * recipient_business_name `string`: the second line of the recipient address.  Optional.
    * recipient_city `string`: the city of the recipient, to appear in the address
    * recipient_country `string`: the country of the recipient.  Optional and defaults to usa
    * recipient_country_id `integer`: alternate way to specify country.  Optional and defaults to 1
    * recipient_name `string`: the name on the recipient address
    * recipient_state `string`: the ABBREVIATED state or province of the recipient.  This is required for US and Canada addresses and optional for all other countries
    * recipient_zip `string`: the zip code or postal code of the recipient
    * sender_address1 `string`: the first address line of the return address
    * sender_address2 `string`: the second line of the address, such as suite, apartment, building, etc. Optional
    * sender_business_name `string`: the second line of the return address.  Optional.
    * sender_city `string`: the city of the sender, to appear in the return address
    * sender_country `string`: the country of the recipient.  Optional and defaults to usa
    * sender_country_id `integer`: alternate way to specify country.  Optional and defaults to 1
    * sender_name `string`: the name on the return address
    * sender_state `string`: the ABBREVIATED state or province of the sender.  This is required for US and Canada addresses and optional for all other countries
    * sender_zip `string`: The postal code or zip code of the sender.
    * uid **required** `string`: The UID of the logged-in user

#### Output
* output `object`
  * response [Order](#order)
  * status `string`

### userAddress
gets the user's return address information


```js
handwrytten.userAddress({}, context)
```

#### Input
* input `object`
  * body `object`
    * uid `string`: authorized UID of the session.  By providing this, the card list will include user-specific cards.

#### Output
* output `object`
  * response [Address](#address)
  * status `string`

### deleteRecipient
deletes an existing recipient address


```js
handwrytten.deleteRecipient({
  "body": {
    "uid": "",
    "address_id": 0
  }
}, context)
```

#### Input
* input `object`
  * body **required** `object`
    * address_id **required** `integer`: the id of the address to delete
    * uid **required** `string`: authorized UID of the session.

#### Output
* output `object`
  * status `string`

### addRecipientAddress
add a new recipient address


```js
handwrytten.addRecipientAddress({}, context)
```

#### Input
* input `object`
  * body `object`
    * address1 `string`: the first line of the address
    * address2 `string`: the second (optional) line of the address
    * business_name `string`: the optional business name on the address
    * city `string`: the city of the address
    * country `string`: the name of the country of the address, or use country_id
    * country_id `integer`: the country id code of the recipient
    * name `string`: the name on the address
    * state `string`: the abbreviated state or province of the address
    * uid `string`: authorized UID of the session.
    * zip `string`: the zip or postal code of the address

#### Output
* output `object`
  * response [recipientAddress](#recipientaddress)
  * status `string`

### recipientsList
list the addresses in the user's account


```js
handwrytten.recipientsList({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** `object`
    * uid `string`: authorized UID of the session.

#### Output
* output `array`
  * items [recipientAddress](#recipientaddress)

### updateUserAddress
update the user's return address information


```js
handwrytten.updateUserAddress({
  "body": {
    "uid": "",
    "address_id": 0
  }
}, context)
```

#### Input
* input `object`
  * body **required** `object`
    * address1 `string`: the first line of the address
    * address2 `string`: the second (optional) line of the address
    * address_id **required** `integer`: the address you are updating
    * business_name `string`: the optional business name on the address
    * city `string`: the city of the address
    * country `string`: the name of the country of the address
    * country_id `integer`: the id of the country of the address. do not use with "country" parameter
    * name `string`: the name on the address
    * state `string`: the abbreviated state or province of the address
    * uid **required** `string`: authorized UID of the session.
    * zip `string`: the zip or postal code of the address

#### Output
* output `object`
  * response [Address](#address)
  * status `string`

### updateRecipient
updates an existing new recipient address


```js
handwrytten.updateRecipient({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** `object`
    * address1 `string`: the updated first line of the address
    * address2 `string`: the updated second (optional) line of the address
    * business_name `string`: the updated optional business name on the address
    * city `string`: the updated city of the address
    * country `string`: the updated name of the country of the address, or use country_id
    * country_id `integer`: the country id of the address
    * id `integer`: the id of the address to update
    * name `string`: the updated name on the address
    * state `string`: the updated abbreviated state or province of the address
    * uid `string`: authorized UID of the session.
    * zip `string`: the updated zip or postal code of the address

#### Output
* output `object`
  * response [recipientAddress](#recipientaddress)
  * status `string`

### getTemplateCategories
Lists the common template categories of all users. As you are not logged in, this is what you are limited to.


```js
handwrytten.getTemplateCategories(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [TemplateCategory](#templatecategory)

### getTemplateCategoriesAuthorized
Lists the template categories of all users. By passing the optional UID, any custom template categories are also available.


```js
handwrytten.getTemplateCategoriesAuthorized({}, context)
```

#### Input
* input `object`
  * body `object`
    * uid `string`: optional authorized UID of the session.  By providing this, the template list will include user-specific template categories

#### Output
* output `array`
  * items [TemplateCategory](#templatecategory)

### createTemplate
Creates a new Template in the User’s Account


```js
handwrytten.createTemplate({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** `object`
    * message `string`
    * name `string`: the new name of the template
    * uid `string`: The UID of the logged-in user

#### Output
* output `array`
  * items [Template](#template)

### deleteTemplate
Deletes a template in the User’s Account


```js
handwrytten.deleteTemplate({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** `object`
    * template_id `integer`: the ID of the template to delete
    * uid `string`: The UID of the logged-in user

#### Output
* output `object`
  * status `string`

### getTemplates
Lists the common template categories of all users. As you are not logged in, this is what you are limited to.


```js
handwrytten.getTemplates(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [Template](#template)

### getTemplatessAuthorized
Lists the template categories of all users. By passing the optional UID, any custom template categories are also available.


```js
handwrytten.getTemplatessAuthorized({}, context)
```

#### Input
* input `object`
  * body `object`
    * category_id `integer`: optional category to filter the templates
    * uid `string`: optional authorized UID of the session.  By providing this, the template list will include user-specific template categories

#### Output
* output `array`
  * items [Template](#template)

### updateTemplate
Updates an Existing Template in the User’s Account


```js
handwrytten.updateTemplate({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** `object`
    * message `string`
    * name `string`: the new name of the template
    * template_id `integer`: the ID of the template to update
    * uid `string`: The UID of the logged-in user

#### Output
* output `array`
  * items [Template](#template)

### getTemplateDetail
Provides all details on a template


```js
handwrytten.getTemplateDetail({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** `object`
    * template_id `integer`: the ID of the template to view
    * uid `string`: optional authorized UID of the session.  By providing this, the user can specify user-sepecific templates

#### Output
* output [Template](#template)



## Definitions

### Address
* Address `object`
  * address1 `string`: the first line of the address
  * address2 `string`: the second (optional) line of the address
  * business_name `string`: the optional business name on the address
  * city `string`: the city of the address
  * country `string`: the name of the country of the address
  * id `integer`: the internal id of the address at Handwrytten
  * name `string`: the name on the address
  * state `string`: the abbreviated state or province of the address
  * zip `string`: the zip or postal code of the address

### Card
* Card `object`
  * available_free `integer`: 1 for cards that are available free
  * category_id `integer`: the associated category id
  * cover `string`: cover image of card
  * cover_height `string`: the height in px of the cover image
  * cover_width `string`: the width in px of the cover image
  * id `integer`
  * name `string`
  * price `number`: the base price of a card (in USD)

### CardDetails
* CardDetails `object`
  * available_free `integer`: 1 for cards that are available free
  * category_id `integer`: the associated category id
  * cover `string`: cover image of card
  * cover_height `string`: the height in px of the cover image
  * cover_width `string`: the width in px of the cover image
  * id `integer`
  * images `array`: common return value includes items for front, back, inside and envelope
    * items [ImageArray](#imagearray)
  * name `string`
  * orientation `string`: landscape or portrait
  * price `number`: the base price of a card (in USD)

### Country
* Country `object`
  * aliases `string`: Other names for the country, separated by new lines
  * delivery_cost `number`: the postage fee of delivering to a specific country
  * id `integer`: the internal id of the country
  * states `array`: Optional states or provinces in country
    * items [State](#state)

### Denomination
* Denomination `object`
  * id `integer`
  * nominal `number`
  * price `number`

### Font
* Font `object`
  * id `string`: name used internally at Handwrytten
  * image `string`: url to sample of font
  * label `string`: Common name

### FontForCustomizer
* FontForCustomizer `object`
  * id `integer`: font id for customizer
  * label `string`: Common name

### GiftCard
* GiftCard `object`
  * denominations `array`
    * items [Denomination](#denomination)
  * id `integer`
  * image `string`
  * name `string`

### ImageArray
* ImageArray `object`
  * array `array`
    * items `string`: filename
  * name `string`

### Login
* Login `object`
  * login **required** `string`: email address
  * password **required** `string`

### Order
* Order `object`
  * address_from [Address](#address)
  * card [Card](#card)
  * date_created `string`: the date the order was created
  * for_free `boolean`: if the order was free
  * id `integer`: the unique ID of the order
  * message `string`: The actual message of the template

### Registration
* Registration `object`
  * discount_code `string`: optional discount code
  * fname **required** `string`: first name
  * lname **required** `string`: last name
  * login **required** `string`: email address
  * password **required** `string`

### State
* State `object`
  * name `string`: the name of the state or province
  * short_name `string`: the two or three character abbreviation for a state or provinnee

### Template
* Template `object`
  * category_id `integer`: the ID of the category to which this template belongs
  * id `integer`: the unique ID of the Template
  * message `string`: The actual message of the template
  * name `string`: The name of the Template

### TemplateCategory
* TemplateCategory `object`
  * id `integer`: the id of the Template Category
  * name `string`: The name of the Template Category
  * price `number`

### recipientAddress
* recipientAddress `object`
  * address1 `string`: the first line of the address
  * address2 `string`: the second (optional) line of the address
  * business_name `string`: the optional business name on the address
  * city `string`: the city of the address
  * country `string`: the name of the country of the address
  * id `integer`: the internal id of the address at Handwrytten
  * name `string`: the name on the address
  * state `string`: the abbreviated state or province of the address
  * zip `string`: the zip or postal code of the address


