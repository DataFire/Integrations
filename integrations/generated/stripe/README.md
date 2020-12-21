# @datafire/stripe

Client library for Stripe API

## Installation and Usage
```bash
npm install --save @datafire/stripe
```
```js
let stripe = require('@datafire/stripe').create({
  username: "",
  password: "",
  bearerAuth: ""
});

.then(data => {
  console.log(data);
});
```

## Description

The Stripe REST API. Please see https://stripe.com/docs/api for more details.

## Actions

### Post3dSecure
<p>Initiate 3D Secure authentication.</p>


```js
stripe.Post3dSecure({
  "amount": 0,
  "currency": "",
  "return_url": ""
}, context)
```

#### Input
* input `object`
  * amount **required** `integer`: Amount of the charge that you will create when authentication completes.
  * card `string`: The ID of a card token, or the ID of a card belonging to the given customer.
  * currency **required** `string`: Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
  * customer `string`: The customer associated with this 3D secure authentication.
  * expand `array`: Specifies which fields in the response should be expanded.
  * return_url **required** `string`: The URL that the cardholder's browser will be returned to when authentication completes.

#### Output
* output [three_d_secure](#three_d_secure)

### Get3dSecureThreeDSecure
<p>Retrieves a 3D Secure object.</p>


```js
stripe.Get3dSecureThreeDSecure({
  "three_d_secure": ""
}, context)
```

#### Input
* input `object`
  * expand `array`: Specifies which fields in the response should be expanded.
  * three_d_secure **required** `string`

#### Output
* output [three_d_secure](#three_d_secure)

### DeleteAccount
<p>With <a href="/docs/connect">Connect</a>, you can delete Custom or Express accounts you manage.</p>

<p>Accounts created using test-mode keys can be deleted at any time. Accounts created using live-mode keys can only be deleted once all balances are zero.</p>

<p>If you want to delete your own account, use the <a href="https://dashboard.stripe.com/account">account information tab in your account settings</a> instead.</p>


```js
stripe.DeleteAccount({}, context)
```

#### Input
* input `object`
  * account `string`

#### Output
* output [deleted_account](#deleted_account)

### GetAccount
<p>Retrieves the details of an account.</p>


```js
stripe.GetAccount({}, context)
```

#### Input
* input `object`
  * expand `array`: Specifies which fields in the response should be expanded.

#### Output
* output [account](#account)

### PostAccount
<p>Updates a connected <a href="/docs/connect/accounts">Express or Custom account</a> by setting the values of the parameters passed. Any parameters not provided are left unchanged. Most parameters can be changed only for Custom accounts. (These are marked <strong>Custom Only</strong> below.) Parameters marked <strong>Custom and Express</strong> are supported by both account types.</p>

<p>To update your own account, use the <a href="https://dashboard.stripe.com/account">Dashboard</a>. Refer to our <a href="/docs/connect/updating-accounts">Connect</a> documentation to learn more about updating accounts.</p>


```js
stripe.PostAccount({}, context)
```

#### Input
* input `object`
  * account_token `string`: An [account token](https://stripe.com/docs/api#create_account_token), used to securely provide details to the account.
  * business_profile `object`: Business information about the account.
  * business_type `string` (values: company, government_entity, individual, non_profit): The business type.
  * capabilities `object`: Each key of the dictionary represents a capability, and each capability maps to its settings (e.g. whether it has been requested or not). Each capability will be inactive until you have provided its specific requirements and Stripe has verified them. An account may have some of its requested capabilities be active and some be inactive.
  * company `object`: Information about the company or business. This field is available for any `business_type`.
  * default_currency `string`: Three-letter ISO currency code representing the default currency for the account. This must be a currency that [Stripe supports in the account's country](https://stripe.com/docs/payouts).
  * documents `object`: Documents that may be submitted to satisfy various informational requests.
  * email `string`: The email address of the account holder. This is only to make the account easier to identify to you. Stripe will never directly email Custom accounts.
  * expand `array`: Specifies which fields in the response should be expanded.
  * external_account `string`: A card or bank account to attach to the account for receiving [payouts](https://stripe.com/docs/connect/bank-debit-card-payouts) (you won’t be able to use it for top-ups). You can provide either a token, like the ones returned by [Stripe.js](https://stripe.com/docs/stripe.js), or a dictionary, as documented in the `external_account` parameter for [bank account](https://stripe.com/docs/api#account_create_bank_account) creation. <br><br>By default, providing an external account sets it as the new default external account for its currency, and deletes the old default if one exists. To add additional external accounts without replacing the existing default for the currency, use the bank account or card creation API.
  * individual `object`: Information about the person represented by the account. This field is null unless `business_type` is set to `individual`.
  * settings `object`: Options for customizing how the account functions within Stripe.
  * tos_acceptance `object`: Details on the account's acceptance of the [Stripe Services Agreement](https://stripe.com/docs/connect/updating-accounts#tos-acceptance).

#### Output
* output [account](#account)

### PostAccountBankAccounts
<p>Create an external account for a given account.</p>


```js
stripe.PostAccountBankAccounts({}, context)
```

#### Input
* input `object`
  * default_for_currency `boolean`: When set to true, or if this is the first external account added in this currency, this account becomes the default external account for its currency.
  * expand `array`: Specifies which fields in the response should be expanded.
  * external_account `string`: Please refer to full [documentation](https://stripe.com/docs/api) instead.
  * metadata `object`: Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.

#### Output
* output [external_account](#external_account)

### DeleteAccountBankAccountsId
<p>Delete a specified external account for a given account.</p>


```js
stripe.DeleteAccountBankAccountsId({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
* output [deleted_external_account](#deleted_external_account)

### GetAccountBankAccountsId
<p>Retrieve a specified external account for a given account.</p>


```js
stripe.GetAccountBankAccountsId({
  "id": ""
}, context)
```

#### Input
* input `object`
  * expand `array`: Specifies which fields in the response should be expanded.
  * id **required** `string`

#### Output
* output [external_account](#external_account)

### PostAccountBankAccountsId
<p>Updates the metadata, account holder name, and account holder type of a bank account belonging to a <a href="/docs/connect/custom-accounts">Custom account</a>, and optionally sets it as the default for its currency. Other bank account details are not editable by design.</p>

<p>You can re-enable a disabled bank account by performing an update call without providing any arguments or changes.</p>


```js
stripe.PostAccountBankAccountsId({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`
  * account_holder_name `string`: The name of the person or business that owns the bank account.
  * account_holder_type `string` (values: , company, individual): The type of entity that holds the account. This can be either `individual` or `company`.
  * address_city `string`: City/District/Suburb/Town/Village.
  * address_country `string`: Billing address country, if provided when creating card.
  * address_line1 `string`: Address line 1 (Street address/PO Box/Company name).
  * address_line2 `string`: Address line 2 (Apartment/Suite/Unit/Building).
  * address_state `string`: State/County/Province/Region.
  * address_zip `string`: ZIP or postal code.
  * default_for_currency `boolean`: When set to true, this becomes the default external account for its currency.
  * exp_month `string`: Two digit number representing the card’s expiration month.
  * exp_year `string`: Four digit number representing the card’s expiration year.
  * expand `array`: Specifies which fields in the response should be expanded.
  * name `string`: Cardholder name.

#### Output
* output [external_account](#external_account)

### GetAccountCapabilities
<p>Returns a list of capabilities associated with the account. The capabilities are returned sorted by creation date, with the most recent capability appearing first.</p>


```js
stripe.GetAccountCapabilities({}, context)
```

#### Input
* input `object`
  * expand `array`: Specifies which fields in the response should be expanded.

#### Output
* output `object`
  * data **required** `array`
    * items [capability](#capability)
  * has_more **required** `boolean`: True if this list has another page of items after this one that can be fetched.
  * object **required** `string` (values: list): String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
  * url **required** `string`: The URL where this list can be accessed.

### GetAccountCapabilitiesCapability
<p>Retrieves information about the specified Account Capability.</p>


```js
stripe.GetAccountCapabilitiesCapability({
  "capability": ""
}, context)
```

#### Input
* input `object`
  * capability **required** `string`
  * expand `array`: Specifies which fields in the response should be expanded.

#### Output
* output [capability](#capability)

### PostAccountCapabilitiesCapability
<p>Updates an existing Account Capability.</p>


```js
stripe.PostAccountCapabilitiesCapability({
  "capability": ""
}, context)
```

#### Input
* input `object`
  * capability **required** `string`
  * expand `array`: Specifies which fields in the response should be expanded.
  * requested `boolean`: Passing true requests the capability for the account, if it is not already requested. A requested capability may not immediately become active. Any requirements to activate the capability are returned in the `requirements` arrays.

#### Output
* output [capability](#capability)

### GetAccountExternalAccounts
<p>List external accounts for an account.</p>


```js
stripe.GetAccountExternalAccounts({}, context)
```

#### Input
* input `object`
  * ending_before `string`: A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
  * expand `array`: Specifies which fields in the response should be expanded.
  * limit `integer`: A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
  * starting_after `string`: A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.

#### Output
* output `object`
  * data **required** `array`: The list contains all external accounts that have been attached to the Stripe account. These may be bank accounts or cards.
  * has_more **required** `boolean`: True if this list has another page of items after this one that can be fetched.
  * object **required** `string` (values: list): String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
  * url **required** `string`: The URL where this list can be accessed.

### PostAccountExternalAccounts
<p>Create an external account for a given account.</p>


```js
stripe.PostAccountExternalAccounts({}, context)
```

#### Input
* input `object`
  * default_for_currency `boolean`: When set to true, or if this is the first external account added in this currency, this account becomes the default external account for its currency.
  * expand `array`: Specifies which fields in the response should be expanded.
  * external_account `string`: Please refer to full [documentation](https://stripe.com/docs/api) instead.
  * metadata `object`: Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.

#### Output
* output [external_account](#external_account)

### DeleteAccountExternalAccountsId
<p>Delete a specified external account for a given account.</p>


```js
stripe.DeleteAccountExternalAccountsId({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
* output [deleted_external_account](#deleted_external_account)

### GetAccountExternalAccountsId
<p>Retrieve a specified external account for a given account.</p>


```js
stripe.GetAccountExternalAccountsId({
  "id": ""
}, context)
```

#### Input
* input `object`
  * expand `array`: Specifies which fields in the response should be expanded.
  * id **required** `string`

#### Output
* output [external_account](#external_account)

### PostAccountExternalAccountsId
<p>Updates the metadata, account holder name, and account holder type of a bank account belonging to a <a href="/docs/connect/custom-accounts">Custom account</a>, and optionally sets it as the default for its currency. Other bank account details are not editable by design.</p>

<p>You can re-enable a disabled bank account by performing an update call without providing any arguments or changes.</p>


```js
stripe.PostAccountExternalAccountsId({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`
  * account_holder_name `string`: The name of the person or business that owns the bank account.
  * account_holder_type `string` (values: , company, individual): The type of entity that holds the account. This can be either `individual` or `company`.
  * address_city `string`: City/District/Suburb/Town/Village.
  * address_country `string`: Billing address country, if provided when creating card.
  * address_line1 `string`: Address line 1 (Street address/PO Box/Company name).
  * address_line2 `string`: Address line 2 (Apartment/Suite/Unit/Building).
  * address_state `string`: State/County/Province/Region.
  * address_zip `string`: ZIP or postal code.
  * default_for_currency `boolean`: When set to true, this becomes the default external account for its currency.
  * exp_month `string`: Two digit number representing the card’s expiration month.
  * exp_year `string`: Four digit number representing the card’s expiration year.
  * expand `array`: Specifies which fields in the response should be expanded.
  * name `string`: Cardholder name.

#### Output
* output [external_account](#external_account)

### PostAccountLoginLinks
<p>Creates a single-use login link for an Express account to access their Stripe dashboard.</p>

<p><strong>You may only create login links for <a href="/docs/connect/express-accounts">Express accounts</a> connected to your platform</strong>.</p>


```js
stripe.PostAccountLoginLinks({
  "account": ""
}, context)
```

#### Input
* input `object`
  * account **required** `string`
  * expand `array`: Specifies which fields in the response should be expanded.
  * redirect_url `string`: Where to redirect the user after they log out of their dashboard.

#### Output
* output [login_link](#login_link)

### PutAccountLogout
<p>Invalidates all sessions for a light account, for a platform to use during platform logout.</p>

<p><strong>You may only log out <a href="/docs/connect/express-accounts">Express accounts</a> connected to your platform</strong>.</p>


```js
stripe.PutAccountLogout({
  "account": ""
}, context)
```

#### Input
* input `object`
  * account **required** `string`
  * expand `array`: Specifies which fields in the response should be expanded.

#### Output
* output [light_account_logout](#light_account_logout)

### GetAccountPeople
<p>Returns a list of people associated with the account’s legal entity. The people are returned sorted by creation date, with the most recent people appearing first.</p>


```js
stripe.GetAccountPeople({}, context)
```

#### Input
* input `object`
  * ending_before `string`: A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
  * expand `array`: Specifies which fields in the response should be expanded.
  * limit `integer`: A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
  * relationship `object`: Filters on the list of people returned based on the person's relationship to the account's company.
  * starting_after `string`: A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.

#### Output
* output `object`
  * data **required** `array`
    * items [person](#person)
  * has_more **required** `boolean`: True if this list has another page of items after this one that can be fetched.
  * object **required** `string` (values: list): String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
  * url **required** `string`: The URL where this list can be accessed.

### PostAccountPeople
<p>Creates a new person.</p>


```js
stripe.PostAccountPeople({}, context)
```

#### Input
* input `object`
  * account `string`
  * address `object`: The person's address.
  * address_kana `object`: The Kana variation of the person's address (Japan only).
  * address_kanji `object`: The Kanji variation of the person's address (Japan only).
  * email `string`: The person's email address.
  * expand `array`: Specifies which fields in the response should be expanded.
  * first_name `string`: The person's first name.
  * first_name_kana `string`: The Kana variation of the person's first name (Japan only).
  * first_name_kanji `string`: The Kanji variation of the person's first name (Japan only).
  * gender `string`: The person's gender (International regulations require either "male" or "female").
  * id_number `string`: The person's ID number, as appropriate for their country. For example, a social security number in the U.S., social insurance number in Canada, etc. Instead of the number itself, you can also provide a [PII token provided by Stripe.js](https://stripe.com/docs/stripe.js#collecting-pii-data).
  * last_name `string`: The person's last name.
  * last_name_kana `string`: The Kana variation of the person's last name (Japan only).
  * last_name_kanji `string`: The Kanji variation of the person's last name (Japan only).
  * maiden_name `string`: The person's maiden name.
  * person_token `string`: A [person token](https://stripe.com/docs/connect/account-tokens), used to securely provide details to the person.
  * phone `string`: The person's phone number.
  * political_exposure `string`: Indicates if the person or any of their representatives, family members, or other closely related persons, declares that they hold or have held an important public job or function, in any jurisdiction.
  * relationship `object`: The relationship that this person has with the account's legal entity.
  * ssn_last_4 `string`: The last four digits of the person's Social Security number (U.S. only).
  * verification `object`: The person's verification status.

#### Output
* output [person](#person)

### DeleteAccountPeoplePerson
<p>Deletes an existing person’s relationship to the account’s legal entity. Any person with a relationship for an account can be deleted through the API, except if the person is the <code>account_opener</code>. If your integration is using the <code>executive</code> parameter, you cannot delete the only verified <code>executive</code> on file.</p>


```js
stripe.DeleteAccountPeoplePerson({
  "person": ""
}, context)
```

#### Input
* input `object`
  * person **required** `string`

#### Output
* output [deleted_person](#deleted_person)

### GetAccountPeoplePerson
<p>Retrieves an existing person.</p>


```js
stripe.GetAccountPeoplePerson({
  "person": ""
}, context)
```

#### Input
* input `object`
  * expand `array`: Specifies which fields in the response should be expanded.
  * person **required** `string`

#### Output
* output [person](#person)

### PostAccountPeoplePerson
<p>Updates an existing person.</p>


```js
stripe.PostAccountPeoplePerson({
  "person": ""
}, context)
```

#### Input
* input `object`
  * person **required** `string`
  * account `string`
  * address `object`: The person's address.
  * address_kana `object`: The Kana variation of the person's address (Japan only).
  * address_kanji `object`: The Kanji variation of the person's address (Japan only).
  * email `string`: The person's email address.
  * expand `array`: Specifies which fields in the response should be expanded.
  * first_name `string`: The person's first name.
  * first_name_kana `string`: The Kana variation of the person's first name (Japan only).
  * first_name_kanji `string`: The Kanji variation of the person's first name (Japan only).
  * gender `string`: The person's gender (International regulations require either "male" or "female").
  * id_number `string`: The person's ID number, as appropriate for their country. For example, a social security number in the U.S., social insurance number in Canada, etc. Instead of the number itself, you can also provide a [PII token provided by Stripe.js](https://stripe.com/docs/stripe.js#collecting-pii-data).
  * last_name `string`: The person's last name.
  * last_name_kana `string`: The Kana variation of the person's last name (Japan only).
  * last_name_kanji `string`: The Kanji variation of the person's last name (Japan only).
  * maiden_name `string`: The person's maiden name.
  * person_token `string`: A [person token](https://stripe.com/docs/connect/account-tokens), used to securely provide details to the person.
  * phone `string`: The person's phone number.
  * political_exposure `string`: Indicates if the person or any of their representatives, family members, or other closely related persons, declares that they hold or have held an important public job or function, in any jurisdiction.
  * relationship `object`: The relationship that this person has with the account's legal entity.
  * ssn_last_4 `string`: The last four digits of the person's Social Security number (U.S. only).
  * verification `object`: The person's verification status.

#### Output
* output [person](#person)

### GetAccountPersons
<p>Returns a list of people associated with the account’s legal entity. The people are returned sorted by creation date, with the most recent people appearing first.</p>


```js
stripe.GetAccountPersons({}, context)
```

#### Input
* input `object`
  * ending_before `string`: A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
  * expand `array`: Specifies which fields in the response should be expanded.
  * limit `integer`: A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
  * relationship `object`: Filters on the list of people returned based on the person's relationship to the account's company.
  * starting_after `string`: A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.

#### Output
* output `object`
  * data **required** `array`
    * items [person](#person)
  * has_more **required** `boolean`: True if this list has another page of items after this one that can be fetched.
  * object **required** `string` (values: list): String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
  * url **required** `string`: The URL where this list can be accessed.

### PostAccountPersons
<p>Creates a new person.</p>


```js
stripe.PostAccountPersons({}, context)
```

#### Input
* input `object`
  * account `string`
  * address `object`: The person's address.
  * address_kana `object`: The Kana variation of the person's address (Japan only).
  * address_kanji `object`: The Kanji variation of the person's address (Japan only).
  * email `string`: The person's email address.
  * expand `array`: Specifies which fields in the response should be expanded.
  * first_name `string`: The person's first name.
  * first_name_kana `string`: The Kana variation of the person's first name (Japan only).
  * first_name_kanji `string`: The Kanji variation of the person's first name (Japan only).
  * gender `string`: The person's gender (International regulations require either "male" or "female").
  * id_number `string`: The person's ID number, as appropriate for their country. For example, a social security number in the U.S., social insurance number in Canada, etc. Instead of the number itself, you can also provide a [PII token provided by Stripe.js](https://stripe.com/docs/stripe.js#collecting-pii-data).
  * last_name `string`: The person's last name.
  * last_name_kana `string`: The Kana variation of the person's last name (Japan only).
  * last_name_kanji `string`: The Kanji variation of the person's last name (Japan only).
  * maiden_name `string`: The person's maiden name.
  * person_token `string`: A [person token](https://stripe.com/docs/connect/account-tokens), used to securely provide details to the person.
  * phone `string`: The person's phone number.
  * political_exposure `string`: Indicates if the person or any of their representatives, family members, or other closely related persons, declares that they hold or have held an important public job or function, in any jurisdiction.
  * relationship `object`: The relationship that this person has with the account's legal entity.
  * ssn_last_4 `string`: The last four digits of the person's Social Security number (U.S. only).
  * verification `object`: The person's verification status.

#### Output
* output [person](#person)

### DeleteAccountPersonsPerson
<p>Deletes an existing person’s relationship to the account’s legal entity. Any person with a relationship for an account can be deleted through the API, except if the person is the <code>account_opener</code>. If your integration is using the <code>executive</code> parameter, you cannot delete the only verified <code>executive</code> on file.</p>


```js
stripe.DeleteAccountPersonsPerson({
  "person": ""
}, context)
```

#### Input
* input `object`
  * person **required** `string`

#### Output
* output [deleted_person](#deleted_person)

### GetAccountPersonsPerson
<p>Retrieves an existing person.</p>


```js
stripe.GetAccountPersonsPerson({
  "person": ""
}, context)
```

#### Input
* input `object`
  * expand `array`: Specifies which fields in the response should be expanded.
  * person **required** `string`

#### Output
* output [person](#person)

### PostAccountPersonsPerson
<p>Updates an existing person.</p>


```js
stripe.PostAccountPersonsPerson({
  "person": ""
}, context)
```

#### Input
* input `object`
  * person **required** `string`
  * account `string`
  * address `object`: The person's address.
  * address_kana `object`: The Kana variation of the person's address (Japan only).
  * address_kanji `object`: The Kanji variation of the person's address (Japan only).
  * email `string`: The person's email address.
  * expand `array`: Specifies which fields in the response should be expanded.
  * first_name `string`: The person's first name.
  * first_name_kana `string`: The Kana variation of the person's first name (Japan only).
  * first_name_kanji `string`: The Kanji variation of the person's first name (Japan only).
  * gender `string`: The person's gender (International regulations require either "male" or "female").
  * id_number `string`: The person's ID number, as appropriate for their country. For example, a social security number in the U.S., social insurance number in Canada, etc. Instead of the number itself, you can also provide a [PII token provided by Stripe.js](https://stripe.com/docs/stripe.js#collecting-pii-data).
  * last_name `string`: The person's last name.
  * last_name_kana `string`: The Kana variation of the person's last name (Japan only).
  * last_name_kanji `string`: The Kanji variation of the person's last name (Japan only).
  * maiden_name `string`: The person's maiden name.
  * person_token `string`: A [person token](https://stripe.com/docs/connect/account-tokens), used to securely provide details to the person.
  * phone `string`: The person's phone number.
  * political_exposure `string`: Indicates if the person or any of their representatives, family members, or other closely related persons, declares that they hold or have held an important public job or function, in any jurisdiction.
  * relationship `object`: The relationship that this person has with the account's legal entity.
  * ssn_last_4 `string`: The last four digits of the person's Social Security number (U.S. only).
  * verification `object`: The person's verification status.

#### Output
* output [person](#person)

### PostAccountLinks
<p>Creates an AccountLink object that includes a single-use Stripe URL that the platform can redirect their user to in order to take them through the Connect Onboarding flow.</p>


```js
stripe.PostAccountLinks({
  "account": "",
  "type": ""
}, context)
```

#### Input
* input `object`
  * account **required** `string`: The identifier of the account to create an account link for.
  * collect `string` (values: currently_due, eventually_due): Which information the platform needs to collect from the user. One of `currently_due` or `eventually_due`. Default is `currently_due`.
  * expand `array`: Specifies which fields in the response should be expanded.
  * refresh_url `string`: The URL that the user will be redirected to if the account link is no longer valid. Your `refresh_url` should trigger a method on your server to create a new account link using this API, with the same parameters, and redirect the user to the new account link.
  * return_url `string`: The URL that the user will be redirected to upon leaving or completing the linked flow.
  * type **required** `string` (values: account_onboarding, account_update): The type of account link the user is requesting. Possible values are `account_onboarding` or `account_update`.

#### Output
* output [account_link](#account_link)

### GetAccounts
<p>Returns a list of accounts connected to your platform via <a href="/docs/connect">Connect</a>. If you’re not a platform, the list is empty.</p>


```js
stripe.GetAccounts({}, context)
```

#### Input
* input `object`
  * ending_before `string`: A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
  * expand `array`: Specifies which fields in the response should be expanded.
  * limit `integer`: A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
  * starting_after `string`: A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.

#### Output
* output `object`
  * data **required** `array`
    * items [account](#account)
  * has_more **required** `boolean`: True if this list has another page of items after this one that can be fetched.
  * object **required** `string` (values: list): String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
  * url **required** `string`: The URL where this list can be accessed.

### PostAccounts
<p>With <a href="/docs/connect">Connect</a>, you can create Stripe accounts for your users.
To do this, you’ll first need to <a href="https://dashboard.stripe.com/account/applications/settings">register your platform</a>.</p>


```js
stripe.PostAccounts({}, context)
```

#### Input
* input `object`
  * account_token `string`: An [account token](https://stripe.com/docs/api#create_account_token), used to securely provide details to the account.
  * business_profile `object`: Business information about the account.
  * business_type `string` (values: company, government_entity, individual, non_profit): The business type.
  * capabilities `object`: Each key of the dictionary represents a capability, and each capability maps to its settings (e.g. whether it has been requested or not). Each capability will be inactive until you have provided its specific requirements and Stripe has verified them. An account may have some of its requested capabilities be active and some be inactive.
  * company `object`: Information about the company or business. This field is available for any `business_type`.
  * country `string`: The country in which the account holder resides, or in which the business is legally established. This should be an ISO 3166-1 alpha-2 country code. For example, if you are in the United States and the business for which you're creating an account is legally represented in Canada, you would use `CA` as the country for the account being created.
  * default_currency `string`: Three-letter ISO currency code representing the default currency for the account. This must be a currency that [Stripe supports in the account's country](https://stripe.com/docs/payouts).
  * documents `object`: Documents that may be submitted to satisfy various informational requests.
  * email `string`: The email address of the account holder. This is only to make the account easier to identify to you. Stripe will never directly email Custom accounts.
  * expand `array`: Specifies which fields in the response should be expanded.
  * external_account `string`: A card or bank account to attach to the account for receiving [payouts](https://stripe.com/docs/connect/bank-debit-card-payouts) (you won’t be able to use it for top-ups). You can provide either a token, like the ones returned by [Stripe.js](https://stripe.com/docs/stripe.js), or a dictionary, as documented in the `external_account` parameter for [bank account](https://stripe.com/docs/api#account_create_bank_account) creation. <br><br>By default, providing an external account sets it as the new default external account for its currency, and deletes the old default if one exists. To add additional external accounts without replacing the existing default for the currency, use the bank account or card creation API.
  * individual `object`: Information about the person represented by the account. This field is null unless `business_type` is set to `individual`.
  * settings `object`: Options for customizing how the account functions within Stripe.
  * tos_acceptance `object`: Details on the account's acceptance of the [Stripe Services Agreement](https://stripe.com/docs/connect/updating-accounts#tos-acceptance).
  * type `string` (values: custom, express, standard): The type of Stripe account to create. May be one of `custom`, `express` or `standard`.

#### Output
* output [account](#account)

### DeleteAccountsAccount
<p>With <a href="/docs/connect">Connect</a>, you can delete Custom or Express accounts you manage.</p>

<p>Accounts created using test-mode keys can be deleted at any time. Accounts created using live-mode keys can only be deleted once all balances are zero.</p>

<p>If you want to delete your own account, use the <a href="https://dashboard.stripe.com/account">account information tab in your account settings</a> instead.</p>


```js
stripe.DeleteAccountsAccount({
  "account": ""
}, context)
```

#### Input
* input `object`
  * account **required** `string`

#### Output
* output [deleted_account](#deleted_account)

### GetAccountsAccount
<p>Retrieves the details of an account.</p>


```js
stripe.GetAccountsAccount({
  "account": ""
}, context)
```

#### Input
* input `object`
  * account **required** `string`
  * expand `array`: Specifies which fields in the response should be expanded.

#### Output
* output [account](#account)

### PostAccountsAccount
<p>Updates a connected <a href="/docs/connect/accounts">Express or Custom account</a> by setting the values of the parameters passed. Any parameters not provided are left unchanged. Most parameters can be changed only for Custom accounts. (These are marked <strong>Custom Only</strong> below.) Parameters marked <strong>Custom and Express</strong> are supported by both account types.</p>

<p>To update your own account, use the <a href="https://dashboard.stripe.com/account">Dashboard</a>. Refer to our <a href="/docs/connect/updating-accounts">Connect</a> documentation to learn more about updating accounts.</p>


```js
stripe.PostAccountsAccount({
  "account": ""
}, context)
```

#### Input
* input `object`
  * account **required** `string`
  * account_token `string`: An [account token](https://stripe.com/docs/api#create_account_token), used to securely provide details to the account.
  * business_profile `object`: Business information about the account.
  * business_type `string` (values: company, government_entity, individual, non_profit): The business type.
  * capabilities `object`: Each key of the dictionary represents a capability, and each capability maps to its settings (e.g. whether it has been requested or not). Each capability will be inactive until you have provided its specific requirements and Stripe has verified them. An account may have some of its requested capabilities be active and some be inactive.
  * company `object`: Information about the company or business. This field is available for any `business_type`.
  * default_currency `string`: Three-letter ISO currency code representing the default currency for the account. This must be a currency that [Stripe supports in the account's country](https://stripe.com/docs/payouts).
  * documents `object`: Documents that may be submitted to satisfy various informational requests.
  * email `string`: The email address of the account holder. This is only to make the account easier to identify to you. Stripe will never directly email Custom accounts.
  * expand `array`: Specifies which fields in the response should be expanded.
  * external_account `string`: A card or bank account to attach to the account for receiving [payouts](https://stripe.com/docs/connect/bank-debit-card-payouts) (you won’t be able to use it for top-ups). You can provide either a token, like the ones returned by [Stripe.js](https://stripe.com/docs/stripe.js), or a dictionary, as documented in the `external_account` parameter for [bank account](https://stripe.com/docs/api#account_create_bank_account) creation. <br><br>By default, providing an external account sets it as the new default external account for its currency, and deletes the old default if one exists. To add additional external accounts without replacing the existing default for the currency, use the bank account or card creation API.
  * individual `object`: Information about the person represented by the account. This field is null unless `business_type` is set to `individual`.
  * settings `object`: Options for customizing how the account functions within Stripe.
  * tos_acceptance `object`: Details on the account's acceptance of the [Stripe Services Agreement](https://stripe.com/docs/connect/updating-accounts#tos-acceptance).

#### Output
* output [account](#account)

### PostAccountsAccountBankAccounts
<p>Create an external account for a given account.</p>


```js
stripe.PostAccountsAccountBankAccounts({
  "account": ""
}, context)
```

#### Input
* input `object`
  * account **required** `string`
  * default_for_currency `boolean`: When set to true, or if this is the first external account added in this currency, this account becomes the default external account for its currency.
  * expand `array`: Specifies which fields in the response should be expanded.
  * external_account `string`: Please refer to full [documentation](https://stripe.com/docs/api) instead.
  * metadata `object`: Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.

#### Output
* output [external_account](#external_account)

### DeleteAccountsAccountBankAccountsId
<p>Delete a specified external account for a given account.</p>


```js
stripe.DeleteAccountsAccountBankAccountsId({
  "account": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * account **required** `string`
  * id **required** `string`

#### Output
* output [deleted_external_account](#deleted_external_account)

### GetAccountsAccountBankAccountsId
<p>Retrieve a specified external account for a given account.</p>


```js
stripe.GetAccountsAccountBankAccountsId({
  "account": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * account **required** `string`
  * expand `array`: Specifies which fields in the response should be expanded.
  * id **required** `string`

#### Output
* output [external_account](#external_account)

### PostAccountsAccountBankAccountsId
<p>Updates the metadata, account holder name, and account holder type of a bank account belonging to a <a href="/docs/connect/custom-accounts">Custom account</a>, and optionally sets it as the default for its currency. Other bank account details are not editable by design.</p>

<p>You can re-enable a disabled bank account by performing an update call without providing any arguments or changes.</p>


```js
stripe.PostAccountsAccountBankAccountsId({
  "account": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * account **required** `string`
  * id **required** `string`
  * account_holder_name `string`: The name of the person or business that owns the bank account.
  * account_holder_type `string` (values: , company, individual): The type of entity that holds the account. This can be either `individual` or `company`.
  * address_city `string`: City/District/Suburb/Town/Village.
  * address_country `string`: Billing address country, if provided when creating card.
  * address_line1 `string`: Address line 1 (Street address/PO Box/Company name).
  * address_line2 `string`: Address line 2 (Apartment/Suite/Unit/Building).
  * address_state `string`: State/County/Province/Region.
  * address_zip `string`: ZIP or postal code.
  * default_for_currency `boolean`: When set to true, this becomes the default external account for its currency.
  * exp_month `string`: Two digit number representing the card’s expiration month.
  * exp_year `string`: Four digit number representing the card’s expiration year.
  * expand `array`: Specifies which fields in the response should be expanded.
  * name `string`: Cardholder name.

#### Output
* output [external_account](#external_account)

### GetAccountsAccountCapabilities
<p>Returns a list of capabilities associated with the account. The capabilities are returned sorted by creation date, with the most recent capability appearing first.</p>


```js
stripe.GetAccountsAccountCapabilities({
  "account": ""
}, context)
```

#### Input
* input `object`
  * account **required** `string`
  * expand `array`: Specifies which fields in the response should be expanded.

#### Output
* output `object`
  * data **required** `array`
    * items [capability](#capability)
  * has_more **required** `boolean`: True if this list has another page of items after this one that can be fetched.
  * object **required** `string` (values: list): String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
  * url **required** `string`: The URL where this list can be accessed.

### GetAccountsAccountCapabilitiesCapability
<p>Retrieves information about the specified Account Capability.</p>


```js
stripe.GetAccountsAccountCapabilitiesCapability({
  "account": "",
  "capability": ""
}, context)
```

#### Input
* input `object`
  * account **required** `string`
  * capability **required** `string`
  * expand `array`: Specifies which fields in the response should be expanded.

#### Output
* output [capability](#capability)

### PostAccountsAccountCapabilitiesCapability
<p>Updates an existing Account Capability.</p>


```js
stripe.PostAccountsAccountCapabilitiesCapability({
  "account": "",
  "capability": ""
}, context)
```

#### Input
* input `object`
  * account **required** `string`
  * capability **required** `string`
  * expand `array`: Specifies which fields in the response should be expanded.
  * requested `boolean`: Passing true requests the capability for the account, if it is not already requested. A requested capability may not immediately become active. Any requirements to activate the capability are returned in the `requirements` arrays.

#### Output
* output [capability](#capability)

### GetAccountsAccountExternalAccounts
<p>List external accounts for an account.</p>


```js
stripe.GetAccountsAccountExternalAccounts({
  "account": ""
}, context)
```

#### Input
* input `object`
  * account **required** `string`
  * ending_before `string`: A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
  * expand `array`: Specifies which fields in the response should be expanded.
  * limit `integer`: A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
  * starting_after `string`: A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.

#### Output
* output `object`
  * data **required** `array`: The list contains all external accounts that have been attached to the Stripe account. These may be bank accounts or cards.
  * has_more **required** `boolean`: True if this list has another page of items after this one that can be fetched.
  * object **required** `string` (values: list): String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
  * url **required** `string`: The URL where this list can be accessed.

### PostAccountsAccountExternalAccounts
<p>Create an external account for a given account.</p>


```js
stripe.PostAccountsAccountExternalAccounts({
  "account": ""
}, context)
```

#### Input
* input `object`
  * account **required** `string`
  * default_for_currency `boolean`: When set to true, or if this is the first external account added in this currency, this account becomes the default external account for its currency.
  * expand `array`: Specifies which fields in the response should be expanded.
  * external_account `string`: Please refer to full [documentation](https://stripe.com/docs/api) instead.
  * metadata `object`: Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.

#### Output
* output [external_account](#external_account)

### DeleteAccountsAccountExternalAccountsId
<p>Delete a specified external account for a given account.</p>


```js
stripe.DeleteAccountsAccountExternalAccountsId({
  "account": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * account **required** `string`
  * id **required** `string`

#### Output
* output [deleted_external_account](#deleted_external_account)

### GetAccountsAccountExternalAccountsId
<p>Retrieve a specified external account for a given account.</p>


```js
stripe.GetAccountsAccountExternalAccountsId({
  "account": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * account **required** `string`
  * expand `array`: Specifies which fields in the response should be expanded.
  * id **required** `string`

#### Output
* output [external_account](#external_account)

### PostAccountsAccountExternalAccountsId
<p>Updates the metadata, account holder name, and account holder type of a bank account belonging to a <a href="/docs/connect/custom-accounts">Custom account</a>, and optionally sets it as the default for its currency. Other bank account details are not editable by design.</p>

<p>You can re-enable a disabled bank account by performing an update call without providing any arguments or changes.</p>


```js
stripe.PostAccountsAccountExternalAccountsId({
  "account": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * account **required** `string`
  * id **required** `string`
  * account_holder_name `string`: The name of the person or business that owns the bank account.
  * account_holder_type `string` (values: , company, individual): The type of entity that holds the account. This can be either `individual` or `company`.
  * address_city `string`: City/District/Suburb/Town/Village.
  * address_country `string`: Billing address country, if provided when creating card.
  * address_line1 `string`: Address line 1 (Street address/PO Box/Company name).
  * address_line2 `string`: Address line 2 (Apartment/Suite/Unit/Building).
  * address_state `string`: State/County/Province/Region.
  * address_zip `string`: ZIP or postal code.
  * default_for_currency `boolean`: When set to true, this becomes the default external account for its currency.
  * exp_month `string`: Two digit number representing the card’s expiration month.
  * exp_year `string`: Four digit number representing the card’s expiration year.
  * expand `array`: Specifies which fields in the response should be expanded.
  * name `string`: Cardholder name.

#### Output
* output [external_account](#external_account)

### PostAccountsAccountLoginLinks
<p>Creates a single-use login link for an Express account to access their Stripe dashboard.</p>

<p><strong>You may only create login links for <a href="/docs/connect/express-accounts">Express accounts</a> connected to your platform</strong>.</p>


```js
stripe.PostAccountsAccountLoginLinks({
  "account": ""
}, context)
```

#### Input
* input `object`
  * account **required** `string`
  * expand `array`: Specifies which fields in the response should be expanded.
  * redirect_url `string`: Where to redirect the user after they log out of their dashboard.

#### Output
* output [login_link](#login_link)

### PutAccountsAccountLogout
<p>Invalidates all sessions for a light account, for a platform to use during platform logout.</p>

<p><strong>You may only log out <a href="/docs/connect/express-accounts">Express accounts</a> connected to your platform</strong>.</p>


```js
stripe.PutAccountsAccountLogout({
  "account": ""
}, context)
```

#### Input
* input `object`
  * account **required** `string`
  * expand `array`: Specifies which fields in the response should be expanded.

#### Output
* output [light_account_logout](#light_account_logout)

### GetAccountsAccountPeople
<p>Returns a list of people associated with the account’s legal entity. The people are returned sorted by creation date, with the most recent people appearing first.</p>


```js
stripe.GetAccountsAccountPeople({
  "account": ""
}, context)
```

#### Input
* input `object`
  * account **required** `string`
  * ending_before `string`: A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
  * expand `array`: Specifies which fields in the response should be expanded.
  * limit `integer`: A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
  * relationship `object`: Filters on the list of people returned based on the person's relationship to the account's company.
  * starting_after `string`: A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.

#### Output
* output `object`
  * data **required** `array`
    * items [person](#person)
  * has_more **required** `boolean`: True if this list has another page of items after this one that can be fetched.
  * object **required** `string` (values: list): String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
  * url **required** `string`: The URL where this list can be accessed.

### PostAccountsAccountPeople
<p>Creates a new person.</p>


```js
stripe.PostAccountsAccountPeople({
  "account": ""
}, context)
```

#### Input
* input `object`
  * account **required** `string`
  * address `object`: The person's address.
  * address_kana `object`: The Kana variation of the person's address (Japan only).
  * address_kanji `object`: The Kanji variation of the person's address (Japan only).
  * email `string`: The person's email address.
  * expand `array`: Specifies which fields in the response should be expanded.
  * first_name `string`: The person's first name.
  * first_name_kana `string`: The Kana variation of the person's first name (Japan only).
  * first_name_kanji `string`: The Kanji variation of the person's first name (Japan only).
  * gender `string`: The person's gender (International regulations require either "male" or "female").
  * id_number `string`: The person's ID number, as appropriate for their country. For example, a social security number in the U.S., social insurance number in Canada, etc. Instead of the number itself, you can also provide a [PII token provided by Stripe.js](https://stripe.com/docs/stripe.js#collecting-pii-data).
  * last_name `string`: The person's last name.
  * last_name_kana `string`: The Kana variation of the person's last name (Japan only).
  * last_name_kanji `string`: The Kanji variation of the person's last name (Japan only).
  * maiden_name `string`: The person's maiden name.
  * person_token `string`: A [person token](https://stripe.com/docs/connect/account-tokens), used to securely provide details to the person.
  * phone `string`: The person's phone number.
  * political_exposure `string`: Indicates if the person or any of their representatives, family members, or other closely related persons, declares that they hold or have held an important public job or function, in any jurisdiction.
  * relationship `object`: The relationship that this person has with the account's legal entity.
  * ssn_last_4 `string`: The last four digits of the person's Social Security number (U.S. only).
  * verification `object`: The person's verification status.

#### Output
* output [person](#person)

### DeleteAccountsAccountPeoplePerson
<p>Deletes an existing person’s relationship to the account’s legal entity. Any person with a relationship for an account can be deleted through the API, except if the person is the <code>account_opener</code>. If your integration is using the <code>executive</code> parameter, you cannot delete the only verified <code>executive</code> on file.</p>


```js
stripe.DeleteAccountsAccountPeoplePerson({
  "account": "",
  "person": ""
}, context)
```

#### Input
* input `object`
  * account **required** `string`
  * person **required** `string`

#### Output
* output [deleted_person](#deleted_person)

### GetAccountsAccountPeoplePerson
<p>Retrieves an existing person.</p>


```js
stripe.GetAccountsAccountPeoplePerson({
  "account": "",
  "person": ""
}, context)
```

#### Input
* input `object`
  * account **required** `string`
  * expand `array`: Specifies which fields in the response should be expanded.
  * person **required** `string`

#### Output
* output [person](#person)

### PostAccountsAccountPeoplePerson
<p>Updates an existing person.</p>


```js
stripe.PostAccountsAccountPeoplePerson({
  "account": "",
  "person": ""
}, context)
```

#### Input
* input `object`
  * account **required** `string`
  * person **required** `string`
  * address `object`: The person's address.
  * address_kana `object`: The Kana variation of the person's address (Japan only).
  * address_kanji `object`: The Kanji variation of the person's address (Japan only).
  * email `string`: The person's email address.
  * expand `array`: Specifies which fields in the response should be expanded.
  * first_name `string`: The person's first name.
  * first_name_kana `string`: The Kana variation of the person's first name (Japan only).
  * first_name_kanji `string`: The Kanji variation of the person's first name (Japan only).
  * gender `string`: The person's gender (International regulations require either "male" or "female").
  * id_number `string`: The person's ID number, as appropriate for their country. For example, a social security number in the U.S., social insurance number in Canada, etc. Instead of the number itself, you can also provide a [PII token provided by Stripe.js](https://stripe.com/docs/stripe.js#collecting-pii-data).
  * last_name `string`: The person's last name.
  * last_name_kana `string`: The Kana variation of the person's last name (Japan only).
  * last_name_kanji `string`: The Kanji variation of the person's last name (Japan only).
  * maiden_name `string`: The person's maiden name.
  * person_token `string`: A [person token](https://stripe.com/docs/connect/account-tokens), used to securely provide details to the person.
  * phone `string`: The person's phone number.
  * political_exposure `string`: Indicates if the person or any of their representatives, family members, or other closely related persons, declares that they hold or have held an important public job or function, in any jurisdiction.
  * relationship `object`: The relationship that this person has with the account's legal entity.
  * ssn_last_4 `string`: The last four digits of the person's Social Security number (U.S. only).
  * verification `object`: The person's verification status.

#### Output
* output [person](#person)

### GetAccountsAccountPersons
<p>Returns a list of people associated with the account’s legal entity. The people are returned sorted by creation date, with the most recent people appearing first.</p>


```js
stripe.GetAccountsAccountPersons({
  "account": ""
}, context)
```

#### Input
* input `object`
  * account **required** `string`
  * ending_before `string`: A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
  * expand `array`: Specifies which fields in the response should be expanded.
  * limit `integer`: A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
  * relationship `object`: Filters on the list of people returned based on the person's relationship to the account's company.
  * starting_after `string`: A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.

#### Output
* output `object`
  * data **required** `array`
    * items [person](#person)
  * has_more **required** `boolean`: True if this list has another page of items after this one that can be fetched.
  * object **required** `string` (values: list): String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
  * url **required** `string`: The URL where this list can be accessed.

### PostAccountsAccountPersons
<p>Creates a new person.</p>


```js
stripe.PostAccountsAccountPersons({
  "account": ""
}, context)
```

#### Input
* input `object`
  * account **required** `string`
  * address `object`: The person's address.
  * address_kana `object`: The Kana variation of the person's address (Japan only).
  * address_kanji `object`: The Kanji variation of the person's address (Japan only).
  * email `string`: The person's email address.
  * expand `array`: Specifies which fields in the response should be expanded.
  * first_name `string`: The person's first name.
  * first_name_kana `string`: The Kana variation of the person's first name (Japan only).
  * first_name_kanji `string`: The Kanji variation of the person's first name (Japan only).
  * gender `string`: The person's gender (International regulations require either "male" or "female").
  * id_number `string`: The person's ID number, as appropriate for their country. For example, a social security number in the U.S., social insurance number in Canada, etc. Instead of the number itself, you can also provide a [PII token provided by Stripe.js](https://stripe.com/docs/stripe.js#collecting-pii-data).
  * last_name `string`: The person's last name.
  * last_name_kana `string`: The Kana variation of the person's last name (Japan only).
  * last_name_kanji `string`: The Kanji variation of the person's last name (Japan only).
  * maiden_name `string`: The person's maiden name.
  * person_token `string`: A [person token](https://stripe.com/docs/connect/account-tokens), used to securely provide details to the person.
  * phone `string`: The person's phone number.
  * political_exposure `string`: Indicates if the person or any of their representatives, family members, or other closely related persons, declares that they hold or have held an important public job or function, in any jurisdiction.
  * relationship `object`: The relationship that this person has with the account's legal entity.
  * ssn_last_4 `string`: The last four digits of the person's Social Security number (U.S. only).
  * verification `object`: The person's verification status.

#### Output
* output [person](#person)

### DeleteAccountsAccountPersonsPerson
<p>Deletes an existing person’s relationship to the account’s legal entity. Any person with a relationship for an account can be deleted through the API, except if the person is the <code>account_opener</code>. If your integration is using the <code>executive</code> parameter, you cannot delete the only verified <code>executive</code> on file.</p>


```js
stripe.DeleteAccountsAccountPersonsPerson({
  "account": "",
  "person": ""
}, context)
```

#### Input
* input `object`
  * account **required** `string`
  * person **required** `string`

#### Output
* output [deleted_person](#deleted_person)

### GetAccountsAccountPersonsPerson
<p>Retrieves an existing person.</p>


```js
stripe.GetAccountsAccountPersonsPerson({
  "account": "",
  "person": ""
}, context)
```

#### Input
* input `object`
  * account **required** `string`
  * expand `array`: Specifies which fields in the response should be expanded.
  * person **required** `string`

#### Output
* output [person](#person)

### PostAccountsAccountPersonsPerson
<p>Updates an existing person.</p>


```js
stripe.PostAccountsAccountPersonsPerson({
  "account": "",
  "person": ""
}, context)
```

#### Input
* input `object`
  * account **required** `string`
  * person **required** `string`
  * address `object`: The person's address.
  * address_kana `object`: The Kana variation of the person's address (Japan only).
  * address_kanji `object`: The Kanji variation of the person's address (Japan only).
  * email `string`: The person's email address.
  * expand `array`: Specifies which fields in the response should be expanded.
  * first_name `string`: The person's first name.
  * first_name_kana `string`: The Kana variation of the person's first name (Japan only).
  * first_name_kanji `string`: The Kanji variation of the person's first name (Japan only).
  * gender `string`: The person's gender (International regulations require either "male" or "female").
  * id_number `string`: The person's ID number, as appropriate for their country. For example, a social security number in the U.S., social insurance number in Canada, etc. Instead of the number itself, you can also provide a [PII token provided by Stripe.js](https://stripe.com/docs/stripe.js#collecting-pii-data).
  * last_name `string`: The person's last name.
  * last_name_kana `string`: The Kana variation of the person's last name (Japan only).
  * last_name_kanji `string`: The Kanji variation of the person's last name (Japan only).
  * maiden_name `string`: The person's maiden name.
  * person_token `string`: A [person token](https://stripe.com/docs/connect/account-tokens), used to securely provide details to the person.
  * phone `string`: The person's phone number.
  * political_exposure `string`: Indicates if the person or any of their representatives, family members, or other closely related persons, declares that they hold or have held an important public job or function, in any jurisdiction.
  * relationship `object`: The relationship that this person has with the account's legal entity.
  * ssn_last_4 `string`: The last four digits of the person's Social Security number (U.S. only).
  * verification `object`: The person's verification status.

#### Output
* output [person](#person)

### PostAccountsAccountReject
<p>With <a href="/docs/connect">Connect</a>, you may flag accounts as suspicious.</p>

<p>Test-mode Custom and Express accounts can be rejected at any time. Accounts created using live-mode keys may only be rejected once all balances are zero.</p>


```js
stripe.PostAccountsAccountReject({
  "account": "",
  "reason": ""
}, context)
```

#### Input
* input `object`
  * account **required** `string`
  * expand `array`: Specifies which fields in the response should be expanded.
  * reason **required** `string`: The reason for rejecting the account. Can be `fraud`, `terms_of_service`, or `other`.

#### Output
* output [account](#account)

### GetApplePayDomains
<p>List apple pay domains.</p>


```js
stripe.GetApplePayDomains({}, context)
```

#### Input
* input `object`
  * domain_name `string`
  * ending_before `string`: A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
  * expand `array`: Specifies which fields in the response should be expanded.
  * limit `integer`: A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
  * starting_after `string`: A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.

#### Output
* output `object`
  * data **required** `array`
    * items [apple_pay_domain](#apple_pay_domain)
  * has_more **required** `boolean`: True if this list has another page of items after this one that can be fetched.
  * object **required** `string` (values: list): String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
  * url **required** `string`: The URL where this list can be accessed.

### PostApplePayDomains
<p>Create an apple pay domain.</p>


```js
stripe.PostApplePayDomains({
  "domain_name": ""
}, context)
```

#### Input
* input `object`
  * domain_name **required** `string`
  * expand `array`: Specifies which fields in the response should be expanded.

#### Output
* output [apple_pay_domain](#apple_pay_domain)

### DeleteApplePayDomainsDomain
<p>Delete an apple pay domain.</p>


```js
stripe.DeleteApplePayDomainsDomain({
  "domain": ""
}, context)
```

#### Input
* input `object`
  * domain **required** `string`

#### Output
* output [deleted_apple_pay_domain](#deleted_apple_pay_domain)

### GetApplePayDomainsDomain
<p>Retrieve an apple pay domain.</p>


```js
stripe.GetApplePayDomainsDomain({
  "domain": ""
}, context)
```

#### Input
* input `object`
  * domain **required** `string`
  * expand `array`: Specifies which fields in the response should be expanded.

#### Output
* output [apple_pay_domain](#apple_pay_domain)

### GetApplicationFees
<p>Returns a list of application fees you’ve previously collected. The application fees are returned in sorted order, with the most recent fees appearing first.</p>


```js
stripe.GetApplicationFees({}, context)
```

#### Input
* input `object`
  * charge `string`: Only return application fees for the charge specified by this charge ID.
  * ending_before `string`: A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
  * expand `array`: Specifies which fields in the response should be expanded.
  * limit `integer`: A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
  * starting_after `string`: A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.

#### Output
* output `object`
  * data **required** `array`
    * items [application_fee](#application_fee)
  * has_more **required** `boolean`: True if this list has another page of items after this one that can be fetched.
  * object **required** `string` (values: list): String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
  * url **required** `string`: The URL where this list can be accessed.

### GetApplicationFeesFeeRefundsId
<p>By default, you can see the 10 most recent refunds stored directly on the application fee object, but you can also retrieve details about a specific refund stored on the application fee.</p>


```js
stripe.GetApplicationFeesFeeRefundsId({
  "fee": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * expand `array`: Specifies which fields in the response should be expanded.
  * fee **required** `string`
  * id **required** `string`

#### Output
* output [fee_refund](#fee_refund)

### PostApplicationFeesFeeRefundsId
<p>Updates the specified application fee refund by setting the values of the parameters passed. Any parameters not provided will be left unchanged.</p>

<p>This request only accepts metadata as an argument.</p>


```js
stripe.PostApplicationFeesFeeRefundsId({
  "fee": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * fee **required** `string`
  * id **required** `string`
  * expand `array`: Specifies which fields in the response should be expanded.

#### Output
* output [fee_refund](#fee_refund)

### GetApplicationFeesId
<p>Retrieves the details of an application fee that your account has collected. The same information is returned when refunding the application fee.</p>


```js
stripe.GetApplicationFeesId({
  "id": ""
}, context)
```

#### Input
* input `object`
  * expand `array`: Specifies which fields in the response should be expanded.
  * id **required** `string`

#### Output
* output [application_fee](#application_fee)

### PostApplicationFeesIdRefund



```js
stripe.PostApplicationFeesIdRefund({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`
  * amount `integer`
  * directive `string`
  * expand `array`: Specifies which fields in the response should be expanded.

#### Output
* output [application_fee](#application_fee)

### GetApplicationFeesIdRefunds
<p>You can see a list of the refunds belonging to a specific application fee. Note that the 10 most recent refunds are always available by default on the application fee object. If you need more than those 10, you can use this API method and the <code>limit</code> and <code>starting_after</code> parameters to page through additional refunds.</p>


```js
stripe.GetApplicationFeesIdRefunds({
  "id": ""
}, context)
```

#### Input
* input `object`
  * ending_before `string`: A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
  * expand `array`: Specifies which fields in the response should be expanded.
  * id **required** `string`
  * limit `integer`: A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
  * starting_after `string`: A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.

#### Output
* output `object`
  * data **required** `array`: Details about each object.
    * items [fee_refund](#fee_refund)
  * has_more **required** `boolean`: True if this list has another page of items after this one that can be fetched.
  * object **required** `string` (values: list): String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
  * url **required** `string`: The URL where this list can be accessed.

### PostApplicationFeesIdRefunds
<p>Refunds an application fee that has previously been collected but not yet refunded.
Funds will be refunded to the Stripe account from which the fee was originally collected.</p>

<p>You can optionally refund only part of an application fee.
You can do so multiple times, until the entire fee has been refunded.</p>

<p>Once entirely refunded, an application fee can’t be refunded again.
This method will raise an error when called on an already-refunded application fee,
or when trying to refund more money than is left on an application fee.</p>


```js
stripe.PostApplicationFeesIdRefunds({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`
  * amount `integer`: A positive integer, in _%s_, representing how much of this fee to refund. Can refund only up to the remaining unrefunded amount of the fee.
  * expand `array`: Specifies which fields in the response should be expanded.
  * metadata `object`: Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.

#### Output
* output [fee_refund](#fee_refund)

### GetBalance
<p>Retrieves the current account balance, based on the authentication that was used to make the request.
 For a sample request, see <a href="/docs/connect/account-balances#accounting-for-negative-balances">Accounting for negative balances</a>.</p>


```js
stripe.GetBalance({}, context)
```

#### Input
* input `object`
  * expand `array`: Specifies which fields in the response should be expanded.

#### Output
* output [balance](#balance)

### GetBalanceHistory
<p>Returns a list of transactions that have contributed to the Stripe account balance (e.g., charges, transfers, and so forth). The transactions are returned in sorted order, with the most recent transactions appearing first.</p>

<p>Note that this endpoint was previously called “Balance history” and used the path <code>/v1/balance/history</code>.</p>


```js
stripe.GetBalanceHistory({}, context)
```

#### Input
* input `object`
  * currency `string`: Only return transactions in a certain currency. Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
  * ending_before `string`: A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
  * expand `array`: Specifies which fields in the response should be expanded.
  * limit `integer`: A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
  * payout `string`: For automatic Stripe payouts only, only returns transactions that were paid out on the specified payout ID.
  * source `string`: Only returns the original transaction.
  * starting_after `string`: A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
  * type `string`: Only returns transactions of the given type. One of: `adjustment`, `advance`, `advance_funding`, `anticipation_repayment`, `application_fee`, `application_fee_refund`, `charge`, `connect_collection_transfer`, `contribution`, `issuing_authorization_hold`, `issuing_authorization_release`, `issuing_dispute`, `issuing_transaction`, `payment`, `payment_failure_refund`, `payment_refund`, `payout`, `payout_cancel`, `payout_failure`, `refund`, `refund_failure`, `reserve_transaction`, `reserved_funds`, `stripe_fee`, `stripe_fx_fee`, `tax_fee`, `topup`, `topup_reversal`, `transfer`, `transfer_cancel`, `transfer_failure`, or `transfer_refund`.

#### Output
* output `object`
  * data **required** `array`
    * items [balance_transaction](#balance_transaction)
  * has_more **required** `boolean`: True if this list has another page of items after this one that can be fetched.
  * object **required** `string` (values: list): String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
  * url **required** `string`: The URL where this list can be accessed.

### GetBalanceHistoryId
<p>Retrieves the balance transaction with the given ID.</p>

<p>Note that this endpoint previously used the path <code>/v1/balance/history/:id</code>.</p>


```js
stripe.GetBalanceHistoryId({
  "id": ""
}, context)
```

#### Input
* input `object`
  * expand `array`: Specifies which fields in the response should be expanded.
  * id **required** `string`

#### Output
* output [balance_transaction](#balance_transaction)

### GetBalanceTransactions
<p>Returns a list of transactions that have contributed to the Stripe account balance (e.g., charges, transfers, and so forth). The transactions are returned in sorted order, with the most recent transactions appearing first.</p>

<p>Note that this endpoint was previously called “Balance history” and used the path <code>/v1/balance/history</code>.</p>


```js
stripe.GetBalanceTransactions({}, context)
```

#### Input
* input `object`
  * currency `string`: Only return transactions in a certain currency. Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
  * ending_before `string`: A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
  * expand `array`: Specifies which fields in the response should be expanded.
  * limit `integer`: A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
  * payout `string`: For automatic Stripe payouts only, only returns transactions that were paid out on the specified payout ID.
  * source `string`: Only returns the original transaction.
  * starting_after `string`: A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
  * type `string`: Only returns transactions of the given type. One of: `adjustment`, `advance`, `advance_funding`, `anticipation_repayment`, `application_fee`, `application_fee_refund`, `charge`, `connect_collection_transfer`, `contribution`, `issuing_authorization_hold`, `issuing_authorization_release`, `issuing_dispute`, `issuing_transaction`, `payment`, `payment_failure_refund`, `payment_refund`, `payout`, `payout_cancel`, `payout_failure`, `refund`, `refund_failure`, `reserve_transaction`, `reserved_funds`, `stripe_fee`, `stripe_fx_fee`, `tax_fee`, `topup`, `topup_reversal`, `transfer`, `transfer_cancel`, `transfer_failure`, or `transfer_refund`.

#### Output
* output `object`
  * data **required** `array`
    * items [balance_transaction](#balance_transaction)
  * has_more **required** `boolean`: True if this list has another page of items after this one that can be fetched.
  * object **required** `string` (values: list): String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
  * url **required** `string`: The URL where this list can be accessed.

### GetBalanceTransactionsId
<p>Retrieves the balance transaction with the given ID.</p>

<p>Note that this endpoint previously used the path <code>/v1/balance/history/:id</code>.</p>


```js
stripe.GetBalanceTransactionsId({
  "id": ""
}, context)
```

#### Input
* input `object`
  * expand `array`: Specifies which fields in the response should be expanded.
  * id **required** `string`

#### Output
* output [balance_transaction](#balance_transaction)

### PostBillingPortalSessions
<p>Creates a session of the customer portal.</p>


```js
stripe.PostBillingPortalSessions({
  "customer": ""
}, context)
```

#### Input
* input `object`
  * customer **required** `string`: The ID of an existing customer.
  * expand `array`: Specifies which fields in the response should be expanded.
  * return_url `string`: The URL to which Stripe should send customers when they click on the link to return to your website. This field is required if a default return URL has not been configured for the portal.

#### Output
* output [billing_portal.session](#billing_portal.session)

### GetBitcoinReceivers
<p>Returns a list of your receivers. Receivers are returned sorted by creation date, with the most recently created receivers appearing first.</p>


```js
stripe.GetBitcoinReceivers({}, context)
```

#### Input
* input `object`
  * active `boolean`: Filter for active receivers.
  * ending_before `string`: A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
  * expand `array`: Specifies which fields in the response should be expanded.
  * filled `boolean`: Filter for filled receivers.
  * limit `integer`: A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
  * starting_after `string`: A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
  * uncaptured_funds `boolean`: Filter for receivers with uncaptured funds.

#### Output
* output `object`
  * data **required** `array`
    * items [bitcoin_receiver](#bitcoin_receiver)
  * has_more **required** `boolean`: True if this list has another page of items after this one that can be fetched.
  * object **required** `string` (values: list): String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
  * url **required** `string`: The URL where this list can be accessed.

### GetBitcoinReceiversId
<p>Retrieves the Bitcoin receiver with the given ID.</p>


```js
stripe.GetBitcoinReceiversId({
  "id": ""
}, context)
```

#### Input
* input `object`
  * expand `array`: Specifies which fields in the response should be expanded.
  * id **required** `string`

#### Output
* output [bitcoin_receiver](#bitcoin_receiver)

### GetBitcoinReceiversReceiverTransactions
<p>List bitcoin transacitons for a given receiver.</p>


```js
stripe.GetBitcoinReceiversReceiverTransactions({
  "receiver": ""
}, context)
```

#### Input
* input `object`
  * customer `string`: Only return transactions for the customer specified by this customer ID.
  * ending_before `string`: A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
  * expand `array`: Specifies which fields in the response should be expanded.
  * limit `integer`: A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
  * receiver **required** `string`
  * starting_after `string`: A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.

#### Output
* output `object`
  * data **required** `array`: Details about each object.
    * items [bitcoin_transaction](#bitcoin_transaction)
  * has_more **required** `boolean`: True if this list has another page of items after this one that can be fetched.
  * object **required** `string` (values: list): String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
  * url **required** `string`: The URL where this list can be accessed.

### GetBitcoinTransactions
<p>List bitcoin transacitons for a given receiver.</p>


```js
stripe.GetBitcoinTransactions({}, context)
```

#### Input
* input `object`
  * customer `string`: Only return transactions for the customer specified by this customer ID.
  * ending_before `string`: A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
  * expand `array`: Specifies which fields in the response should be expanded.
  * limit `integer`: A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
  * receiver `string`
  * starting_after `string`: A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.

#### Output
* output `object`
  * data **required** `array`: Details about each object.
    * items [bitcoin_transaction](#bitcoin_transaction)
  * has_more **required** `boolean`: True if this list has another page of items after this one that can be fetched.
  * object **required** `string` (values: list): String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
  * url **required** `string`: The URL where this list can be accessed.

### GetCharges
<p>Returns a list of charges you’ve previously created. The charges are returned in sorted order, with the most recent charges appearing first.</p>


```js
stripe.GetCharges({}, context)
```

#### Input
* input `object`
  * customer `string`: Only return charges for the customer specified by this customer ID.
  * ending_before `string`: A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
  * expand `array`: Specifies which fields in the response should be expanded.
  * limit `integer`: A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
  * payment_intent `string`: Only return charges that were created by the PaymentIntent specified by this PaymentIntent ID.
  * starting_after `string`: A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
  * transfer_group `string`: Only return charges for this transfer group.

#### Output
* output `object`
  * data **required** `array`
    * items [charge](#charge)
  * has_more **required** `boolean`: True if this list has another page of items after this one that can be fetched.
  * object **required** `string` (values: list): String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
  * url **required** `string`: The URL where this list can be accessed.

### PostCharges
<p>To charge a credit card or other payment source, you create a <code>Charge</code> object. If your API key is in test mode, the supplied payment source (e.g., card) won’t actually be charged, although everything else will occur as if in live mode. (Stripe assumes that the charge would have completed successfully).</p>


```js
stripe.PostCharges({}, context)
```

#### Input
* input `object`
  * amount `integer`: Amount intended to be collected by this payment. A positive integer representing how much to charge in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal) (e.g., 100 cents to charge $1.00 or 100 to charge ¥100, a zero-decimal currency). The minimum amount is $0.50 US or [equivalent in charge currency](https://stripe.com/docs/currencies#minimum-and-maximum-charge-amounts). The amount value supports up to eight digits (e.g., a value of 99999999 for a USD charge of $999,999.99).
  * application_fee `integer`
  * application_fee_amount `integer`: A fee in %s that will be applied to the charge and transferred to the application owner's Stripe account. The request must be made with an OAuth key or the `Stripe-Account` header in order to take an application fee. For more information, see the application fees [documentation](https://stripe.com/docs/connect/direct-charges#collecting-fees).
  * capture `boolean`: Whether to immediately capture the charge. Defaults to `true`. When `false`, the charge issues an authorization (or pre-authorization), and will need to be [captured](https://stripe.com/docs/api#capture_charge) later. Uncaptured charges expire in _seven days_. For more information, see the [authorizing charges and settling later](https://stripe.com/docs/charges/placing-a-hold) documentation.
  * currency `string`: Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
  * customer `string`: The ID of an existing customer that will be charged in this request.
  * description `string`: An arbitrary string which you can attach to a `Charge` object. It is displayed when in the web interface alongside the charge. Note that if you use Stripe to send automatic email receipts to your customers, your receipt emails will include the `description` of the charge(s) that they are describing.
  * expand `array`: Specifies which fields in the response should be expanded.
  * on_behalf_of `string`: The Stripe account ID for which these funds are intended. Automatically set if you use the `destination` parameter. For details, see [Creating Separate Charges and Transfers](https://stripe.com/docs/connect/charges-transfers#on-behalf-of).
  * receipt_email `string`: The email address to which this charge's [receipt](https://stripe.com/docs/dashboard/receipts) will be sent. The receipt will not be sent until the charge is paid, and no receipts will be sent for test mode charges. If this charge is for a [Customer](https://stripe.com/docs/api/customers/object), the email address specified here will override the customer's email address. If `receipt_email` is specified for a charge in live mode, a receipt will be sent regardless of your [email settings](https://dashboard.stripe.com/account/emails).
  * shipping `object`: Shipping information for the charge. Helps prevent fraud on charges for physical goods.
  * source `string`: A payment source to be charged. This can be the ID of a [card](https://stripe.com/docs/api#cards) (i.e., credit or debit card), a [bank account](https://stripe.com/docs/api#bank_accounts), a [source](https://stripe.com/docs/api#sources), a [token](https://stripe.com/docs/api#tokens), or a [connected account](https://stripe.com/docs/connect/account-debits#charging-a-connected-account). For certain sources---namely, [cards](https://stripe.com/docs/api#cards), [bank accounts](https://stripe.com/docs/api#bank_accounts), and attached [sources](https://stripe.com/docs/api#sources)---you must also pass the ID of the associated customer.
  * statement_descriptor `string`: For card charges, use `statement_descriptor_suffix` instead. Otherwise, you can use this value as the complete description of a charge on your customers’ statements. Must contain at least one letter, maximum 22 characters.
  * statement_descriptor_suffix `string`: Provides information about the charge that customers see on their statements. Concatenated with the prefix (shortened descriptor) or statement descriptor that’s set on the account to form the complete statement descriptor. Maximum 22 characters for the concatenated descriptor.
  * transfer_data `object`: An optional dictionary including the account to automatically transfer to as part of a destination charge. [See the Connect documentation](https://stripe.com/docs/connect/destination-charges) for details.
  * transfer_group `string`: A string that identifies this transaction as part of a group. For details, see [Grouping transactions](https://stripe.com/docs/connect/charges-transfers#transfer-options).

#### Output
* output [charge](#charge)

### GetChargesCharge
<p>Retrieves the details of a charge that has previously been created. Supply the unique charge ID that was returned from your previous request, and Stripe will return the corresponding charge information. The same information is returned when creating or refunding the charge.</p>


```js
stripe.GetChargesCharge({
  "charge": ""
}, context)
```

#### Input
* input `object`
  * charge **required** `string`
  * expand `array`: Specifies which fields in the response should be expanded.

#### Output
* output [charge](#charge)

### PostChargesCharge
<p>Updates the specified charge by setting the values of the parameters passed. Any parameters not provided will be left unchanged.</p>


```js
stripe.PostChargesCharge({
  "charge": ""
}, context)
```

#### Input
* input `object`
  * charge **required** `string`
  * customer `string`: The ID of an existing customer that will be associated with this request. This field may only be updated if there is no existing associated customer with this charge.
  * description `string`: An arbitrary string which you can attach to a charge object. It is displayed when in the web interface alongside the charge. Note that if you use Stripe to send automatic email receipts to your customers, your receipt emails will include the `description` of the charge(s) that they are describing.
  * expand `array`: Specifies which fields in the response should be expanded.
  * fraud_details `object`: A set of key-value pairs you can attach to a charge giving information about its riskiness. If you believe a charge is fraudulent, include a `user_report` key with a value of `fraudulent`. If you believe a charge is safe, include a `user_report` key with a value of `safe`. Stripe will use the information you send to improve our fraud detection algorithms.
  * receipt_email `string`: This is the email address that the receipt for this charge will be sent to. If this field is updated, then a new email receipt will be sent to the updated address.
  * shipping `object`: Shipping information for the charge. Helps prevent fraud on charges for physical goods.
  * transfer_group `string`: A string that identifies this transaction as part of a group. `transfer_group` may only be provided if it has not been set. See the [Connect documentation](https://stripe.com/docs/connect/charges-transfers#transfer-options) for details.

#### Output
* output [charge](#charge)

### PostChargesChargeCapture
<p>Capture the payment of an existing, uncaptured, charge. This is the second half of the two-step payment flow, where first you <a href="#create_charge">created a charge</a> with the capture option set to false.</p>

<p>Uncaptured payments expire exactly seven days after they are created. If they are not captured by that point in time, they will be marked as refunded and will no longer be capturable.</p>


```js
stripe.PostChargesChargeCapture({
  "charge": ""
}, context)
```

#### Input
* input `object`
  * charge **required** `string`
  * amount `integer`: The amount to capture, which must be less than or equal to the original amount. Any additional amount will be automatically refunded.
  * application_fee `integer`: An application fee to add on to this charge.
  * application_fee_amount `integer`: An application fee amount to add on to this charge, which must be less than or equal to the original amount.
  * expand `array`: Specifies which fields in the response should be expanded.
  * receipt_email `string`: The email address to send this charge's receipt to. This will override the previously-specified email address for this charge, if one was set. Receipts will not be sent in test mode.
  * statement_descriptor `string`: For card charges, use `statement_descriptor_suffix` instead. Otherwise, you can use this value as the complete description of a charge on your customers’ statements. Must contain at least one letter, maximum 22 characters.
  * statement_descriptor_suffix `string`: Provides information about the charge that customers see on their statements. Concatenated with the prefix (shortened descriptor) or statement descriptor that’s set on the account to form the complete statement descriptor. Maximum 22 characters for the concatenated descriptor.
  * transfer_data `object`: An optional dictionary including the account to automatically transfer to as part of a destination charge. [See the Connect documentation](https://stripe.com/docs/connect/destination-charges) for details.
  * transfer_group `string`: A string that identifies this transaction as part of a group. `transfer_group` may only be provided if it has not been set. See the [Connect documentation](https://stripe.com/docs/connect/charges-transfers#transfer-options) for details.

#### Output
* output [charge](#charge)

### GetChargesChargeDispute
<p>Retrieve a dispute for a specified charge.</p>


```js
stripe.GetChargesChargeDispute({
  "charge": ""
}, context)
```

#### Input
* input `object`
  * charge **required** `string`
  * expand `array`: Specifies which fields in the response should be expanded.

#### Output
* output [dispute](#dispute)

### PostChargesChargeDispute



```js
stripe.PostChargesChargeDispute({
  "charge": ""
}, context)
```

#### Input
* input `object`
  * charge **required** `string`
  * evidence `object`: Evidence to upload, to respond to a dispute. Updating any field in the hash will submit all fields in the hash for review. The combined character count of all fields is limited to 150,000.
  * expand `array`: Specifies which fields in the response should be expanded.
  * submit `boolean`: Whether to immediately submit evidence to the bank. If `false`, evidence is staged on the dispute. Staged evidence is visible in the API and Dashboard, and can be submitted to the bank by making another request with this attribute set to `true` (the default).

#### Output
* output [dispute](#dispute)

### PostChargesChargeDisputeClose



```js
stripe.PostChargesChargeDisputeClose({
  "charge": ""
}, context)
```

#### Input
* input `object`
  * charge **required** `string`
  * expand `array`: Specifies which fields in the response should be expanded.

#### Output
* output [dispute](#dispute)

### PostChargesChargeRefund
<p>When you create a new refund, you must specify a Charge or a PaymentIntent object on which to create it.</p>

<p>Creating a new refund will refund a charge that has previously been created but not yet refunded.
Funds will be refunded to the credit or debit card that was originally charged.</p>

<p>You can optionally refund only part of a charge.
You can do so multiple times, until the entire charge has been refunded.</p>

<p>Once entirely refunded, a charge can’t be refunded again.
This method will raise an error when called on an already-refunded charge,
or when trying to refund more money than is left on a charge.</p>


```js
stripe.PostChargesChargeRefund({
  "charge": ""
}, context)
```

#### Input
* input `object`
  * charge **required** `string`
  * amount `integer`
  * expand `array`: Specifies which fields in the response should be expanded.
  * payment_intent `string`
  * reason `string` (values: duplicate, fraudulent, requested_by_customer)
  * refund_application_fee `boolean`
  * reverse_transfer `boolean`

#### Output
* output [charge](#charge)

### GetChargesChargeRefunds
<p>You can see a list of the refunds belonging to a specific charge. Note that the 10 most recent refunds are always available by default on the charge object. If you need more than those 10, you can use this API method and the <code>limit</code> and <code>starting_after</code> parameters to page through additional refunds.</p>


```js
stripe.GetChargesChargeRefunds({
  "charge": ""
}, context)
```

#### Input
* input `object`
  * charge **required** `string`
  * ending_before `string`: A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
  * expand `array`: Specifies which fields in the response should be expanded.
  * limit `integer`: A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
  * starting_after `string`: A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.

#### Output
* output `object`
  * data **required** `array`: Details about each object.
    * items [refund](#refund)
  * has_more **required** `boolean`: True if this list has another page of items after this one that can be fetched.
  * object **required** `string` (values: list): String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
  * url **required** `string`: The URL where this list can be accessed.

### PostChargesChargeRefunds
<p>Create a refund.</p>


```js
stripe.PostChargesChargeRefunds({
  "charge": ""
}, context)
```

#### Input
* input `object`
  * charge **required** `string`
  * amount `integer`
  * expand `array`: Specifies which fields in the response should be expanded.
  * payment_intent `string`
  * reason `string` (values: duplicate, fraudulent, requested_by_customer)
  * refund_application_fee `boolean`
  * reverse_transfer `boolean`

#### Output
* output [refund](#refund)

### GetChargesChargeRefundsRefund
<p>Retrieves the details of an existing refund.</p>


```js
stripe.GetChargesChargeRefundsRefund({
  "charge": "",
  "refund": ""
}, context)
```

#### Input
* input `object`
  * charge **required** `string`
  * expand `array`: Specifies which fields in the response should be expanded.
  * refund **required** `string`

#### Output
* output [refund](#refund)

### PostChargesChargeRefundsRefund
<p>Update a specified refund.</p>


```js
stripe.PostChargesChargeRefundsRefund({
  "charge": "",
  "refund": ""
}, context)
```

#### Input
* input `object`
  * charge **required** `string`
  * refund **required** `string`
  * expand `array`: Specifies which fields in the response should be expanded.

#### Output
* output [refund](#refund)

### GetCheckoutSessions
<p>Returns a list of Checkout Sessions.</p>


```js
stripe.GetCheckoutSessions({}, context)
```

#### Input
* input `object`
  * ending_before `string`: A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
  * expand `array`: Specifies which fields in the response should be expanded.
  * limit `integer`: A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
  * payment_intent `string`: Only return the Checkout Session for the PaymentIntent specified.
  * starting_after `string`: A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
  * subscription `string`: Only return the Checkout Session for the subscription specified.

#### Output
* output `object`
  * data **required** `array`
    * items [checkout.session](#checkout.session)
  * has_more **required** `boolean`: True if this list has another page of items after this one that can be fetched.
  * object **required** `string` (values: list): String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
  * url **required** `string`: The URL where this list can be accessed.

### PostCheckoutSessions
<p>Creates a Session object.</p>


```js
stripe.PostCheckoutSessions({
  "cancel_url": "",
  "payment_method_types": [],
  "success_url": ""
}, context)
```

#### Input
* input `object`
  * allow_promotion_codes `boolean`: Enables user redeemable promotion codes.
  * billing_address_collection `string` (values: auto, required): Specify whether Checkout should collect the customer's billing address.
  * cancel_url **required** `string`: The URL the customer will be directed to if they decide to cancel payment and return to your website.
  * client_reference_id `string`: A unique string to reference the Checkout Session. This can be a
  * customer `string`: ID of an existing customer, if one exists. The email stored on the
  * customer_email `string`: If provided, this value will be used when the Customer object is created.
  * discounts `array`: The coupon or promotion code to apply to this Session. Currently, only up to one may be specified.
  * expand `array`: Specifies which fields in the response should be expanded.
  * line_items `array`: A list of items the customer is purchasing. Use this parameter to pass one-time or recurring [Prices](https://stripe.com/docs/api/prices).
  * locale `string` (values: auto, bg, cs, da, de, el, en, en-GB, es, es-419, et, fi, fr, fr-CA, hu, id, it, ja, lt, lv, ms, mt, nb, nl, pl, pt, pt-BR, ro, ru, sk, sl, sv, tr, zh, zh-HK, zh-TW): The IETF language tag of the locale Checkout is displayed in. If blank or `auto`, the browser's locale is used.
  * metadata `object`: Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
  * mode `string` (values: payment, setup, subscription): The mode of the Checkout Session. Required when using prices or `setup` mode. Pass `subscription` if the Checkout Session includes at least one recurring item.
  * payment_intent_data `object`: A subset of parameters to be passed to PaymentIntent creation for Checkout Sessions in `payment` mode.
  * payment_method_types **required** `array`: A list of the types of payment methods (e.g., `card`) this Checkout Session can accept.
  * setup_intent_data `object`: A subset of parameters to be passed to SetupIntent creation for Checkout Sessions in `setup` mode.
  * shipping_address_collection `object`: When set, provides configuration for Checkout to collect a shipping address from a customer.
  * submit_type `string` (values: auto, book, donate, pay): Describes the type of transaction being performed by Checkout in order to customize
  * subscription_data `object`: A subset of parameters to be passed to subscription creation for Checkout Sessions in `subscription` mode.
  * success_url **required** `string`: The URL to which Stripe should send customers when payment or setup

#### Output
* output [checkout.session](#checkout.session)

### GetCheckoutSessionsSession
<p>Retrieves a Session object.</p>


```js
stripe.GetCheckoutSessionsSession({
  "session": ""
}, context)
```

#### Input
* input `object`
  * expand `array`: Specifies which fields in the response should be expanded.
  * session **required** `string`

#### Output
* output [checkout.session](#checkout.session)

### GetCheckoutSessionsSessionLineItems
<p>When retrieving a Checkout Session, there is an includable <strong>line_items</strong> property containing the first handful of those items. There is also a URL where you can retrieve the full (paginated) list of line items.</p>


```js
stripe.GetCheckoutSessionsSessionLineItems({
  "session": ""
}, context)
```

#### Input
* input `object`
  * ending_before `string`: A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
  * expand `array`: Specifies which fields in the response should be expanded.
  * limit `integer`: A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
  * session **required** `string`
  * starting_after `string`: A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.

#### Output
* output `object`
  * data **required** `array`: Details about each object.
    * items [item](#item)
  * has_more **required** `boolean`: True if this list has another page of items after this one that can be fetched.
  * object **required** `string` (values: list): String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
  * url **required** `string`: The URL where this list can be accessed.

### GetCountrySpecs
<p>Lists all Country Spec objects available in the API.</p>


```js
stripe.GetCountrySpecs({}, context)
```

#### Input
* input `object`
  * ending_before `string`: A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
  * expand `array`: Specifies which fields in the response should be expanded.
  * limit `integer`: A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
  * starting_after `string`: A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.

#### Output
* output `object`
  * data **required** `array`
    * items [country_spec](#country_spec)
  * has_more **required** `boolean`: True if this list has another page of items after this one that can be fetched.
  * object **required** `string` (values: list): String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
  * url **required** `string`: The URL where this list can be accessed.

### GetCountrySpecsCountry
<p>Returns a Country Spec for a given Country code.</p>


```js
stripe.GetCountrySpecsCountry({
  "country": ""
}, context)
```

#### Input
* input `object`
  * country **required** `string`
  * expand `array`: Specifies which fields in the response should be expanded.

#### Output
* output [country_spec](#country_spec)

### GetCoupons
<p>Returns a list of your coupons.</p>


```js
stripe.GetCoupons({}, context)
```

#### Input
* input `object`
  * ending_before `string`: A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
  * expand `array`: Specifies which fields in the response should be expanded.
  * limit `integer`: A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
  * starting_after `string`: A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.

#### Output
* output `object`
  * data **required** `array`
    * items [coupon](#coupon)
  * has_more **required** `boolean`: True if this list has another page of items after this one that can be fetched.
  * object **required** `string` (values: list): String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
  * url **required** `string`: The URL where this list can be accessed.

### PostCoupons
<p>You can create coupons easily via the <a href="https://dashboard.stripe.com/coupons">coupon management</a> page of the Stripe dashboard. Coupon creation is also accessible via the API if you need to create coupons on the fly.</p>

<p>A coupon has either a <code>percent_off</code> or an <code>amount_off</code> and <code>currency</code>. If you set an <code>amount_off</code>, that amount will be subtracted from any invoice’s subtotal. For example, an invoice with a subtotal of <currency>100</currency> will have a final total of <currency>0</currency> if a coupon with an <code>amount_off</code> of <amount>200</amount> is applied to it and an invoice with a subtotal of <currency>300</currency> will have a final total of <currency>100</currency> if a coupon with an <code>amount_off</code> of <amount>200</amount> is applied to it.</p>


```js
stripe.PostCoupons({
  "duration": ""
}, context)
```

#### Input
* input `object`
  * amount_off `integer`: A positive integer representing the amount to subtract from an invoice total (required if `percent_off` is not passed).
  * applies_to `object`: A hash containing directions for what this Coupon will apply discounts to.
  * currency `string`: Three-letter [ISO code for the currency](https://stripe.com/docs/currencies) of the `amount_off` parameter (required if `amount_off` is passed).
  * duration **required** `string` (values: forever, once, repeating): Specifies how long the discount will be in effect. Can be `forever`, `once`, or `repeating`.
  * duration_in_months `integer`: Required only if `duration` is `repeating`, in which case it must be a positive integer that specifies the number of months the discount will be in effect.
  * expand `array`: Specifies which fields in the response should be expanded.
  * id `string`: Unique string of your choice that will be used to identify this coupon when applying it to a customer. If you don't want to specify a particular code, you can leave the ID blank and we'll generate a random code for you.
  * max_redemptions `integer`: A positive integer specifying the number of times the coupon can be redeemed before it's no longer valid. For example, you might have a 50% off coupon that the first 20 readers of your blog can use.
  * name `string`: Name of the coupon displayed to customers on, for instance invoices, or receipts. By default the `id` is shown if `name` is not set.
  * percent_off `number`: A positive float larger than 0, and smaller or equal to 100, that represents the discount the coupon will apply (required if `amount_off` is not passed).
  * redeem_by `integer`: Unix timestamp specifying the last time at which the coupon can be redeemed. After the redeem_by date, the coupon can no longer be applied to new customers.

#### Output
* output [coupon](#coupon)

### DeleteCouponsCoupon
<p>You can delete coupons via the <a href="https://dashboard.stripe.com/coupons">coupon management</a> page of the Stripe dashboard. However, deleting a coupon does not affect any customers who have already applied the coupon; it means that new customers can’t redeem the coupon. You can also delete coupons via the API.</p>


```js
stripe.DeleteCouponsCoupon({
  "coupon": ""
}, context)
```

#### Input
* input `object`
  * coupon **required** `string`

#### Output
* output [deleted_coupon](#deleted_coupon)

### GetCouponsCoupon
<p>Retrieves the coupon with the given ID.</p>


```js
stripe.GetCouponsCoupon({
  "coupon": ""
}, context)
```

#### Input
* input `object`
  * coupon **required** `string`
  * expand `array`: Specifies which fields in the response should be expanded.

#### Output
* output [coupon](#coupon)

### PostCouponsCoupon
<p>Updates the metadata of a coupon. Other coupon details (currency, duration, amount_off) are, by design, not editable.</p>


```js
stripe.PostCouponsCoupon({
  "coupon": ""
}, context)
```

#### Input
* input `object`
  * coupon **required** `string`
  * expand `array`: Specifies which fields in the response should be expanded.
  * name `string`: Name of the coupon displayed to customers on, for instance invoices, or receipts. By default the `id` is shown if `name` is not set.

#### Output
* output [coupon](#coupon)

### GetCreditNotes
<p>Returns a list of credit notes.</p>


```js
stripe.GetCreditNotes({}, context)
```

#### Input
* input `object`
  * customer `string`: Only return credit notes for the customer specified by this customer ID.
  * ending_before `string`: A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
  * expand `array`: Specifies which fields in the response should be expanded.
  * invoice `string`: Only return credit notes for the invoice specified by this invoice ID.
  * limit `integer`: A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
  * starting_after `string`: A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.

#### Output
* output `object`
  * data **required** `array`
    * items [credit_note](#credit_note)
  * has_more **required** `boolean`: True if this list has another page of items after this one that can be fetched.
  * object **required** `string` (values: list): String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
  * url **required** `string`: The URL where this list can be accessed.

### PostCreditNotes
<p>Issue a credit note to adjust the amount of a finalized invoice. For a <code>status=open</code> invoice, a credit note reduces
its <code>amount_due</code>. For a <code>status=paid</code> invoice, a credit note does not affect its <code>amount_due</code>. Instead, it can result
in any combination of the following:</p>

<ul>
<li>Refund: create a new refund (using <code>refund_amount</code>) or link an existing refund (using <code>refund</code>).</li>
<li>Customer balance credit: credit the customer’s balance (using <code>credit_amount</code>) which will be automatically applied to their next invoice when it’s finalized.</li>
<li>Outside of Stripe credit: record the amount that is or will be credited outside of Stripe (using <code>out_of_band_amount</code>).</li>
</ul>

<p>For post-payment credit notes the sum of the refund, credit and outside of Stripe amounts must equal the credit note total.</p>

<p>You may issue multiple credit notes for an invoice. Each credit note will increment the invoice’s <code>pre_payment_credit_notes_amount</code>
or <code>post_payment_credit_notes_amount</code> depending on its <code>status</code> at the time of credit note creation.</p>


```js
stripe.PostCreditNotes({
  "invoice": ""
}, context)
```

#### Input
* input `object`
  * amount `integer`: The integer amount in %s representing the total amount of the credit note.
  * credit_amount `integer`: The integer amount in %s representing the amount to credit the customer's balance, which will be automatically applied to their next invoice.
  * expand `array`: Specifies which fields in the response should be expanded.
  * invoice **required** `string`: ID of the invoice.
  * lines `array`: Line items that make up the credit note.
  * memo `string`: The credit note's memo appears on the credit note PDF.
  * metadata `object`: Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
  * out_of_band_amount `integer`: The integer amount in %s representing the amount that is credited outside of Stripe.
  * reason `string` (values: duplicate, fraudulent, order_change, product_unsatisfactory): Reason for issuing this credit note, one of `duplicate`, `fraudulent`, `order_change`, or `product_unsatisfactory`
  * refund `string`: ID of an existing refund to link this credit note to.
  * refund_amount `integer`: The integer amount in %s representing the amount to refund. If set, a refund will be created for the charge associated with the invoice.

#### Output
* output [credit_note](#credit_note)

### GetCreditNotesPreview
<p>Get a preview of a credit note without creating it.</p>


```js
stripe.GetCreditNotesPreview({
  "invoice": ""
}, context)
```

#### Input
* input `object`
  * amount `integer`: The integer amount in %s representing the total amount of the credit note.
  * credit_amount `integer`: The integer amount in %s representing the amount to credit the customer's balance, which will be automatically applied to their next invoice.
  * expand `array`: Specifies which fields in the response should be expanded.
  * invoice **required** `string`: ID of the invoice.
  * lines `array`: Line items that make up the credit note.
  * memo `string`: The credit note's memo appears on the credit note PDF.
  * metadata `object`: Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
  * out_of_band_amount `integer`: The integer amount in %s representing the amount that is credited outside of Stripe.
  * reason `string` (values: duplicate, fraudulent, order_change, product_unsatisfactory): Reason for issuing this credit note, one of `duplicate`, `fraudulent`, `order_change`, or `product_unsatisfactory`
  * refund `string`: ID of an existing refund to link this credit note to.
  * refund_amount `integer`: The integer amount in %s representing the amount to refund. If set, a refund will be created for the charge associated with the invoice.

#### Output
* output [credit_note](#credit_note)

### GetCreditNotesPreviewLines
<p>When retrieving a credit note preview, you’ll get a <strong>lines</strong> property containing the first handful of those items. This URL you can retrieve the full (paginated) list of line items.</p>


```js
stripe.GetCreditNotesPreviewLines({
  "invoice": ""
}, context)
```

#### Input
* input `object`
  * amount `integer`: The integer amount in %s representing the total amount of the credit note.
  * credit_amount `integer`: The integer amount in %s representing the amount to credit the customer's balance, which will be automatically applied to their next invoice.
  * ending_before `string`: A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
  * expand `array`: Specifies which fields in the response should be expanded.
  * invoice **required** `string`: ID of the invoice.
  * limit `integer`: A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
  * lines `array`: Line items that make up the credit note.
  * memo `string`: The credit note's memo appears on the credit note PDF.
  * metadata `object`: Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
  * out_of_band_amount `integer`: The integer amount in %s representing the amount that is credited outside of Stripe.
  * reason `string` (values: duplicate, fraudulent, order_change, product_unsatisfactory): Reason for issuing this credit note, one of `duplicate`, `fraudulent`, `order_change`, or `product_unsatisfactory`
  * refund `string`: ID of an existing refund to link this credit note to.
  * refund_amount `integer`: The integer amount in %s representing the amount to refund. If set, a refund will be created for the charge associated with the invoice.
  * starting_after `string`: A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.

#### Output
* output `object`
  * data **required** `array`: Details about each object.
    * items [credit_note_line_item](#credit_note_line_item)
  * has_more **required** `boolean`: True if this list has another page of items after this one that can be fetched.
  * object **required** `string` (values: list): String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
  * url **required** `string`: The URL where this list can be accessed.

### GetCreditNotesCreditNoteLines
<p>When retrieving a credit note, you’ll get a <strong>lines</strong> property containing the the first handful of those items. There is also a URL where you can retrieve the full (paginated) list of line items.</p>


```js
stripe.GetCreditNotesCreditNoteLines({
  "credit_note": ""
}, context)
```

#### Input
* input `object`
  * credit_note **required** `string`
  * ending_before `string`: A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
  * expand `array`: Specifies which fields in the response should be expanded.
  * limit `integer`: A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
  * starting_after `string`: A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.

#### Output
* output `object`
  * data **required** `array`: Details about each object.
    * items [credit_note_line_item](#credit_note_line_item)
  * has_more **required** `boolean`: True if this list has another page of items after this one that can be fetched.
  * object **required** `string` (values: list): String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
  * url **required** `string`: The URL where this list can be accessed.

### GetCreditNotesId
<p>Retrieves the credit note object with the given identifier.</p>


```js
stripe.GetCreditNotesId({
  "id": ""
}, context)
```

#### Input
* input `object`
  * expand `array`: Specifies which fields in the response should be expanded.
  * id **required** `string`

#### Output
* output [credit_note](#credit_note)

### PostCreditNotesId
<p>Updates an existing credit note.</p>


```js
stripe.PostCreditNotesId({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`
  * expand `array`: Specifies which fields in the response should be expanded.
  * memo `string`: Credit note memo.
  * metadata `object`: Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.

#### Output
* output [credit_note](#credit_note)

### PostCreditNotesIdVoid
<p>Marks a credit note as void. Learn more about <a href="/docs/billing/invoices/credit-notes#voiding">voiding credit notes</a>.</p>


```js
stripe.PostCreditNotesIdVoid({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`
  * expand `array`: Specifies which fields in the response should be expanded.

#### Output
* output [credit_note](#credit_note)

### GetCustomers
<p>Returns a list of your customers. The customers are returned sorted by creation date, with the most recent customers appearing first.</p>


```js
stripe.GetCustomers({}, context)
```

#### Input
* input `object`
  * email `string`: A case-sensitive filter on the list based on the customer's `email` field. The value must be a string.
  * ending_before `string`: A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
  * expand `array`: Specifies which fields in the response should be expanded.
  * limit `integer`: A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
  * starting_after `string`: A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.

#### Output
* output `object`
  * data **required** `array`
    * items [customer](#customer)
  * has_more **required** `boolean`: True if this list has another page of items after this one that can be fetched.
  * object **required** `string` (values: list): String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
  * url **required** `string`: The URL where this list can be accessed.

### PostCustomers
<p>Creates a new customer object.</p>


```js
stripe.PostCustomers({}, context)
```

#### Input
* input `object`
  * balance `integer`: An integer amount in %s that represents the customer's current balance, which affect the customer's future invoices. A negative amount represents a credit that decreases the amount due on an invoice; a positive amount increases the amount due on an invoice.
  * coupon `string`
  * description `string`: An arbitrary string that you can attach to a customer object. It is displayed alongside the customer in the dashboard.
  * email `string`: Customer's email address. It's displayed alongside the customer in your dashboard and can be useful for searching and tracking. This may be up to *512 characters*.
  * expand `array`: Specifies which fields in the response should be expanded.
  * invoice_prefix `string`: The prefix for the customer used to generate unique invoice numbers. Must be 3–12 uppercase letters or numbers.
  * invoice_settings `object`: Default invoice settings for this customer.
  * name `string`: The customer's full name or business name.
  * next_invoice_sequence `integer`: The sequence to be used on the customer's next invoice. Defaults to 1.
  * payment_method `string`
  * phone `string`: The customer's phone number.
  * preferred_locales `array`: Customer's preferred languages, ordered by preference.
  * promotion_code `string`: The API ID of a promotion code to apply to the customer. The customer will have a discount applied on all recurring payments. Charges you create through the API will not have the discount.
  * source `string`
  * tax_exempt `string` (values: , exempt, none, reverse): The customer's tax exemption. One of `none`, `exempt`, or `reverse`.
  * tax_id_data `array`: The customer's tax IDs.

#### Output
* output [customer](#customer)

### DeleteCustomersCustomer
<p>Permanently deletes a customer. It cannot be undone. Also immediately cancels any active subscriptions on the customer.</p>


```js
stripe.DeleteCustomersCustomer({
  "customer": ""
}, context)
```

#### Input
* input `object`
  * customer **required** `string`

#### Output
* output [deleted_customer](#deleted_customer)

### GetCustomersCustomer
<p>Retrieves the details of an existing customer. You need only supply the unique customer identifier that was returned upon customer creation.</p>


```js
stripe.GetCustomersCustomer({
  "customer": ""
}, context)
```

#### Input
* input `object`
  * customer **required** `string`
  * expand `array`: Specifies which fields in the response should be expanded.

#### Output
*Output schema unknown*

### PostCustomersCustomer
<p>Updates the specified customer by setting the values of the parameters passed. Any parameters not provided will be left unchanged. For example, if you pass the <strong>source</strong> parameter, that becomes the customer’s active source (e.g., a card) to be used for all charges in the future. When you update a customer to a new valid card source by passing the <strong>source</strong> parameter: for each of the customer’s current subscriptions, if the subscription bills automatically and is in the <code>past_due</code> state, then the latest open invoice for the subscription with automatic collection enabled will be retried. This retry will not count as an automatic retry, and will not affect the next regularly scheduled payment for the invoice. Changing the <strong>default_source</strong> for a customer will not trigger this behavior.</p>

<p>This request accepts mostly the same arguments as the customer creation call.</p>


```js
stripe.PostCustomersCustomer({
  "customer": ""
}, context)
```

#### Input
* input `object`
  * customer **required** `string`
  * balance `integer`: An integer amount in %s that represents the customer's current balance, which affect the customer's future invoices. A negative amount represents a credit that decreases the amount due on an invoice; a positive amount increases the amount due on an invoice.
  * coupon `string`
  * default_alipay_account `string`: ID of Alipay account to make the customer's new default for invoice payments.
  * default_bank_account `string`: ID of bank account to make the customer's new default for invoice payments.
  * default_card `string`: ID of card to make the customer's new default for invoice payments.
  * default_source `string`: If you are using payment methods created via the PaymentMethods API, see the [invoice_settings.default_payment_method](https://stripe.com/docs/api/customers/update#update_customer-invoice_settings-default_payment_method) parameter.
  * description `string`: An arbitrary string that you can attach to a customer object. It is displayed alongside the customer in the dashboard.
  * email `string`: Customer's email address. It's displayed alongside the customer in your dashboard and can be useful for searching and tracking. This may be up to *512 characters*.
  * expand `array`: Specifies which fields in the response should be expanded.
  * invoice_prefix `string`: The prefix for the customer used to generate unique invoice numbers. Must be 3–12 uppercase letters or numbers.
  * invoice_settings `object`: Default invoice settings for this customer.
  * name `string`: The customer's full name or business name.
  * next_invoice_sequence `integer`: The sequence to be used on the customer's next invoice. Defaults to 1.
  * phone `string`: The customer's phone number.
  * preferred_locales `array`: Customer's preferred languages, ordered by preference.
  * promotion_code `string`: The API ID of a promotion code to apply to the customer. The customer will have a discount applied on all recurring payments. Charges you create through the API will not have the discount.
  * source `string`
  * tax_exempt `string` (values: , exempt, none, reverse): The customer's tax exemption. One of `none`, `exempt`, or `reverse`.

#### Output
* output [customer](#customer)

### GetCustomersCustomerBalanceTransactions
<p>Returns a list of transactions that updated the customer’s <a href="/docs/billing/customer/balance">balances</a>.</p>


```js
stripe.GetCustomersCustomerBalanceTransactions({
  "customer": ""
}, context)
```

#### Input
* input `object`
  * customer **required** `string`
  * ending_before `string`: A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
  * expand `array`: Specifies which fields in the response should be expanded.
  * limit `integer`: A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
  * starting_after `string`: A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.

#### Output
* output `object`
  * data **required** `array`: Details about each object.
    * items [customer_balance_transaction](#customer_balance_transaction)
  * has_more **required** `boolean`: True if this list has another page of items after this one that can be fetched.
  * object **required** `string` (values: list): String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
  * url **required** `string`: The URL where this list can be accessed.

### PostCustomersCustomerBalanceTransactions
<p>Creates an immutable transaction that updates the customer’s credit <a href="/docs/billing/customer/balance">balance</a>.</p>


```js
stripe.PostCustomersCustomerBalanceTransactions({
  "customer": "",
  "amount": 0,
  "currency": ""
}, context)
```

#### Input
* input `object`
  * customer **required** `string`
  * amount **required** `integer`: The integer amount in **%s** to apply to the customer's credit balance.
  * currency **required** `string`: Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies). If the customer's [`currency`](https://stripe.com/docs/api/customers/object#customer_object-currency) is set, this value must match it. If the customer's `currency` is not set, it will be updated to this value.
  * description `string`: An arbitrary string attached to the object. Often useful for displaying to users.
  * expand `array`: Specifies which fields in the response should be expanded.

#### Output
* output [customer_balance_transaction](#customer_balance_transaction)

### GetCustomersCustomerBalanceTransactionsTransaction
<p>Retrieves a specific customer balance transaction that updated the customer’s <a href="/docs/billing/customer/balance">balances</a>.</p>


```js
stripe.GetCustomersCustomerBalanceTransactionsTransaction({
  "customer": "",
  "transaction": ""
}, context)
```

#### Input
* input `object`
  * customer **required** `string`
  * expand `array`: Specifies which fields in the response should be expanded.
  * transaction **required** `string`

#### Output
* output [customer_balance_transaction](#customer_balance_transaction)

### PostCustomersCustomerBalanceTransactionsTransaction
<p>Most credit balance transaction fields are immutable, but you may update its <code>description</code> and <code>metadata</code>.</p>


```js
stripe.PostCustomersCustomerBalanceTransactionsTransaction({
  "customer": "",
  "transaction": ""
}, context)
```

#### Input
* input `object`
  * customer **required** `string`
  * transaction **required** `string`
  * description `string`: An arbitrary string attached to the object. Often useful for displaying to users.
  * expand `array`: Specifies which fields in the response should be expanded.

#### Output
* output [customer_balance_transaction](#customer_balance_transaction)

### GetCustomersCustomerBankAccounts
<p>You can see a list of the bank accounts belonging to a Customer. Note that the 10 most recent sources are always available by default on the Customer. If you need more than those 10, you can use this API method and the <code>limit</code> and <code>starting_after</code> parameters to page through additional bank accounts.</p>


```js
stripe.GetCustomersCustomerBankAccounts({
  "customer": ""
}, context)
```

#### Input
* input `object`
  * customer **required** `string`
  * ending_before `string`: A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
  * expand `array`: Specifies which fields in the response should be expanded.
  * limit `integer`: A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
  * starting_after `string`: A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.

#### Output
* output `object`
  * data **required** `array`: Details about each object.
    * items [bank_account](#bank_account)
  * has_more **required** `boolean`: True if this list has another page of items after this one that can be fetched.
  * object **required** `string` (values: list): String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
  * url **required** `string`: The URL where this list can be accessed.

### PostCustomersCustomerBankAccounts
<p>When you create a new credit card, you must specify a customer or recipient on which to create it.</p>

<p>If the card’s owner has no default card, then the new card will become the default.
However, if the owner already has a default, then it will not change.
To change the default, you should <a href="/docs/api#update_customer">update the customer</a> to have a new <code>default_source</code>.</p>


```js
stripe.PostCustomersCustomerBankAccounts({
  "customer": ""
}, context)
```

#### Input
* input `object`
  * customer **required** `string`
  * alipay_account `string`: A token returned by [Stripe.js](https://stripe.com/docs/stripe.js) representing the user’s Alipay account details.
  * expand `array`: Specifies which fields in the response should be expanded.
  * metadata `object`: Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
  * source `string`: Please refer to full [documentation](https://stripe.com/docs/api) instead.

#### Output
* output [payment_source](#payment_source)

### DeleteCustomersCustomerBankAccountsId
<p>Delete a specified source for a given customer.</p>


```js
stripe.DeleteCustomersCustomerBankAccountsId({
  "customer": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * customer **required** `string`
  * id **required** `string`
  * expand `array`: Specifies which fields in the response should be expanded.

#### Output
*Output schema unknown*

### GetCustomersCustomerBankAccountsId
<p>By default, you can see the 10 most recent sources stored on a Customer directly on the object, but you can also retrieve details about a specific bank account stored on the Stripe account.</p>


```js
stripe.GetCustomersCustomerBankAccountsId({
  "customer": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * customer **required** `string`
  * expand `array`: Specifies which fields in the response should be expanded.
  * id **required** `string`

#### Output
* output [bank_account](#bank_account)

### PostCustomersCustomerBankAccountsId
<p>Update a specified source for a given customer.</p>


```js
stripe.PostCustomersCustomerBankAccountsId({
  "customer": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * customer **required** `string`
  * id **required** `string`
  * account_holder_name `string`: The name of the person or business that owns the bank account.
  * account_holder_type `string` (values: company, individual): The type of entity that holds the account. This can be either `individual` or `company`.
  * address_city `string`: City/District/Suburb/Town/Village.
  * address_country `string`: Billing address country, if provided when creating card.
  * address_line1 `string`: Address line 1 (Street address/PO Box/Company name).
  * address_line2 `string`: Address line 2 (Apartment/Suite/Unit/Building).
  * address_state `string`: State/County/Province/Region.
  * address_zip `string`: ZIP or postal code.
  * exp_month `string`: Two digit number representing the card’s expiration month.
  * exp_year `string`: Four digit number representing the card’s expiration year.
  * expand `array`: Specifies which fields in the response should be expanded.
  * name `string`: Cardholder name.
  * owner `object`

#### Output
*Output schema unknown*

### PostCustomersCustomerBankAccountsIdVerify
<p>Verify a specified bank account for a given customer.</p>


```js
stripe.PostCustomersCustomerBankAccountsIdVerify({
  "customer": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * customer **required** `string`
  * id **required** `string`
  * amounts `array`: Two positive integers, in *cents*, equal to the values of the microdeposits sent to the bank account.
  * expand `array`: Specifies which fields in the response should be expanded.

#### Output
* output [bank_account](#bank_account)

### GetCustomersCustomerCards
<p>You can see a list of the cards belonging to a customer.
Note that the 10 most recent sources are always available on the <code>Customer</code> object.
If you need more than those 10, you can use this API method and the <code>limit</code> and <code>starting_after</code> parameters to page through additional cards.</p>


```js
stripe.GetCustomersCustomerCards({
  "customer": ""
}, context)
```

#### Input
* input `object`
  * customer **required** `string`
  * ending_before `string`: A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
  * expand `array`: Specifies which fields in the response should be expanded.
  * limit `integer`: A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
  * starting_after `string`: A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.

#### Output
* output `object`
  * data **required** `array`
    * items [card](#card)
  * has_more **required** `boolean`: True if this list has another page of items after this one that can be fetched.
  * object **required** `string` (values: list): String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
  * url **required** `string`: The URL where this list can be accessed.

### PostCustomersCustomerCards
<p>When you create a new credit card, you must specify a customer or recipient on which to create it.</p>

<p>If the card’s owner has no default card, then the new card will become the default.
However, if the owner already has a default, then it will not change.
To change the default, you should <a href="/docs/api#update_customer">update the customer</a> to have a new <code>default_source</code>.</p>


```js
stripe.PostCustomersCustomerCards({
  "customer": ""
}, context)
```

#### Input
* input `object`
  * customer **required** `string`
  * alipay_account `string`: A token returned by [Stripe.js](https://stripe.com/docs/stripe.js) representing the user’s Alipay account details.
  * expand `array`: Specifies which fields in the response should be expanded.
  * metadata `object`: Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
  * source `string`: Please refer to full [documentation](https://stripe.com/docs/api) instead.

#### Output
* output [payment_source](#payment_source)

### DeleteCustomersCustomerCardsId
<p>Delete a specified source for a given customer.</p>


```js
stripe.DeleteCustomersCustomerCardsId({
  "customer": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * customer **required** `string`
  * id **required** `string`
  * expand `array`: Specifies which fields in the response should be expanded.

#### Output
*Output schema unknown*

### GetCustomersCustomerCardsId
<p>You can always see the 10 most recent cards directly on a customer; this method lets you retrieve details about a specific card stored on the customer.</p>


```js
stripe.GetCustomersCustomerCardsId({
  "customer": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * customer **required** `string`
  * expand `array`: Specifies which fields in the response should be expanded.
  * id **required** `string`

#### Output
* output [card](#card)

### PostCustomersCustomerCardsId
<p>Update a specified source for a given customer.</p>


```js
stripe.PostCustomersCustomerCardsId({
  "customer": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * customer **required** `string`
  * id **required** `string`
  * account_holder_name `string`: The name of the person or business that owns the bank account.
  * account_holder_type `string` (values: company, individual): The type of entity that holds the account. This can be either `individual` or `company`.
  * address_city `string`: City/District/Suburb/Town/Village.
  * address_country `string`: Billing address country, if provided when creating card.
  * address_line1 `string`: Address line 1 (Street address/PO Box/Company name).
  * address_line2 `string`: Address line 2 (Apartment/Suite/Unit/Building).
  * address_state `string`: State/County/Province/Region.
  * address_zip `string`: ZIP or postal code.
  * exp_month `string`: Two digit number representing the card’s expiration month.
  * exp_year `string`: Four digit number representing the card’s expiration year.
  * expand `array`: Specifies which fields in the response should be expanded.
  * name `string`: Cardholder name.
  * owner `object`

#### Output
*Output schema unknown*

### DeleteCustomersCustomerDiscount
<p>Removes the currently applied discount on a customer.</p>


```js
stripe.DeleteCustomersCustomerDiscount({
  "customer": ""
}, context)
```

#### Input
* input `object`
  * customer **required** `string`

#### Output
* output [deleted_discount](#deleted_discount)

### GetCustomersCustomerDiscount



```js
stripe.GetCustomersCustomerDiscount({
  "customer": ""
}, context)
```

#### Input
* input `object`
  * customer **required** `string`
  * expand `array`: Specifies which fields in the response should be expanded.

#### Output
* output [discount](#discount)

### GetCustomersCustomerSources
<p>List sources for a specified customer.</p>


```js
stripe.GetCustomersCustomerSources({
  "customer": ""
}, context)
```

#### Input
* input `object`
  * customer **required** `string`
  * ending_before `string`: A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
  * expand `array`: Specifies which fields in the response should be expanded.
  * limit `integer`: A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
  * object `string`: Filter sources according to a particular object type.
  * starting_after `string`: A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.

#### Output
* output `object`
  * data **required** `array`: Details about each object.
  * has_more **required** `boolean`: True if this list has another page of items after this one that can be fetched.
  * object **required** `string` (values: list): String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
  * url **required** `string`: The URL where this list can be accessed.

### PostCustomersCustomerSources
<p>When you create a new credit card, you must specify a customer or recipient on which to create it.</p>

<p>If the card’s owner has no default card, then the new card will become the default.
However, if the owner already has a default, then it will not change.
To change the default, you should <a href="/docs/api#update_customer">update the customer</a> to have a new <code>default_source</code>.</p>


```js
stripe.PostCustomersCustomerSources({
  "customer": ""
}, context)
```

#### Input
* input `object`
  * customer **required** `string`
  * alipay_account `string`: A token returned by [Stripe.js](https://stripe.com/docs/stripe.js) representing the user’s Alipay account details.
  * expand `array`: Specifies which fields in the response should be expanded.
  * metadata `object`: Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
  * source `string`: Please refer to full [documentation](https://stripe.com/docs/api) instead.

#### Output
* output [payment_source](#payment_source)

### DeleteCustomersCustomerSourcesId
<p>Delete a specified source for a given customer.</p>


```js
stripe.DeleteCustomersCustomerSourcesId({
  "customer": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * customer **required** `string`
  * id **required** `string`
  * expand `array`: Specifies which fields in the response should be expanded.

#### Output
*Output schema unknown*

### GetCustomersCustomerSourcesId
<p>Retrieve a specified source for a given customer.</p>


```js
stripe.GetCustomersCustomerSourcesId({
  "customer": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * customer **required** `string`
  * expand `array`: Specifies which fields in the response should be expanded.
  * id **required** `string`

#### Output
* output [payment_source](#payment_source)

### PostCustomersCustomerSourcesId
<p>Update a specified source for a given customer.</p>


```js
stripe.PostCustomersCustomerSourcesId({
  "customer": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * customer **required** `string`
  * id **required** `string`
  * account_holder_name `string`: The name of the person or business that owns the bank account.
  * account_holder_type `string` (values: company, individual): The type of entity that holds the account. This can be either `individual` or `company`.
  * address_city `string`: City/District/Suburb/Town/Village.
  * address_country `string`: Billing address country, if provided when creating card.
  * address_line1 `string`: Address line 1 (Street address/PO Box/Company name).
  * address_line2 `string`: Address line 2 (Apartment/Suite/Unit/Building).
  * address_state `string`: State/County/Province/Region.
  * address_zip `string`: ZIP or postal code.
  * exp_month `string`: Two digit number representing the card’s expiration month.
  * exp_year `string`: Four digit number representing the card’s expiration year.
  * expand `array`: Specifies which fields in the response should be expanded.
  * name `string`: Cardholder name.
  * owner `object`

#### Output
*Output schema unknown*

### PostCustomersCustomerSourcesIdVerify
<p>Verify a specified bank account for a given customer.</p>


```js
stripe.PostCustomersCustomerSourcesIdVerify({
  "customer": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * customer **required** `string`
  * id **required** `string`
  * amounts `array`: Two positive integers, in *cents*, equal to the values of the microdeposits sent to the bank account.
  * expand `array`: Specifies which fields in the response should be expanded.

#### Output
* output [bank_account](#bank_account)

### GetCustomersCustomerSubscriptions
<p>You can see a list of the customer’s active subscriptions. Note that the 10 most recent active subscriptions are always available by default on the customer object. If you need more than those 10, you can use the limit and starting_after parameters to page through additional subscriptions.</p>


```js
stripe.GetCustomersCustomerSubscriptions({
  "customer": ""
}, context)
```

#### Input
* input `object`
  * customer **required** `string`
  * ending_before `string`: A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
  * expand `array`: Specifies which fields in the response should be expanded.
  * limit `integer`: A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
  * starting_after `string`: A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.

#### Output
* output `object`
  * data **required** `array`: Details about each object.
    * items [subscription](#subscription)
  * has_more **required** `boolean`: True if this list has another page of items after this one that can be fetched.
  * object **required** `string` (values: list): String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
  * url **required** `string`: The URL where this list can be accessed.

### PostCustomersCustomerSubscriptions
<p>Creates a new subscription on an existing customer.</p>


```js
stripe.PostCustomersCustomerSubscriptions({
  "customer": ""
}, context)
```

#### Input
* input `object`
  * customer **required** `string`
  * add_invoice_items `array`: A list of prices and quantities that will generate invoice items appended to the first invoice for this subscription. You may pass up to 10 items.
  * application_fee_percent `number`: A non-negative decimal between 0 and 100, with at most two decimal places. This represents the percentage of the subscription invoice subtotal that will be transferred to the application owner's Stripe account. The request must be made by a platform account on a connected account in order to set an application fee percentage. For more information, see the application fees [documentation](https://stripe.com/docs/connect/subscriptions#collecting-fees-on-subscriptions).
  * backdate_start_date `integer`: For new subscriptions, a past timestamp to backdate the subscription's start date to. If set, the first invoice will contain a proration for the timespan between the start date and the current time. Can be combined with trials and the billing cycle anchor.
  * billing_cycle_anchor `integer`: A future timestamp to anchor the subscription's [billing cycle](https://stripe.com/docs/subscriptions/billing-cycle). This is used to determine the date of the first full invoice, and, for plans with `month` or `year` intervals, the day of the month for subsequent invoices.
  * cancel_at `integer`: A timestamp at which the subscription should cancel. If set to a date before the current period ends, this will cause a proration if prorations have been enabled using `proration_behavior`. If set during a future period, this will always cause a proration for that period.
  * cancel_at_period_end `boolean`: Boolean indicating whether this subscription should cancel at the end of the current period.
  * collection_method `string` (values: charge_automatically, send_invoice): Either `charge_automatically`, or `send_invoice`. When charging automatically, Stripe will attempt to pay this subscription at the end of the cycle using the default source attached to the customer. When sending an invoice, Stripe will email your customer an invoice with payment instructions. Defaults to `charge_automatically`.
  * coupon `string`: The code of the coupon to apply to this subscription. A coupon applied to a subscription will only affect invoices created for that particular subscription.
  * days_until_due `integer`: Number of days a customer has to pay invoices generated by this subscription. Valid only for subscriptions where `collection_method` is set to `send_invoice`.
  * default_payment_method `string`: ID of the default payment method for the subscription. It must belong to the customer associated with the subscription. This takes precedence over `default_source`. If neither are set, invoices will use the customer's [invoice_settings.default_payment_method](https://stripe.com/docs/api/customers/object#customer_object-invoice_settings-default_payment_method) or [default_source](https://stripe.com/docs/api/customers/object#customer_object-default_source).
  * default_source `string`: ID of the default payment source for the subscription. It must belong to the customer associated with the subscription and be in a chargeable state. If `default_payment_method` is also set, `default_payment_method` will take precedence. If neither are set, invoices will use the customer's [invoice_settings.default_payment_method](https://stripe.com/docs/api/customers/object#customer_object-invoice_settings-default_payment_method) or [default_source](https://stripe.com/docs/api/customers/object#customer_object-default_source).
  * expand `array`: Specifies which fields in the response should be expanded.
  * items `array`: A list of up to 20 subscription items, each with an attached price.
  * off_session `boolean`: Indicates if a customer is on or off-session while an invoice payment is attempted.
  * payment_behavior `string` (values: allow_incomplete, error_if_incomplete, pending_if_incomplete): Use `allow_incomplete` to create subscriptions with `status=incomplete` if the first invoice cannot be paid. Creating subscriptions with this status allows you to manage scenarios where additional user actions are needed to pay a subscription's invoice. For example, SCA regulation may require 3DS authentication to complete payment. See the [SCA Migration Guide](https://stripe.com/docs/billing/migration/strong-customer-authentication) for Billing to learn more. This is the default behavior.
  * promotion_code `string`: The API ID of a promotion code to apply to this subscription. A promotion code applied to a subscription will only affect invoices created for that particular subscription.
  * proration_behavior `string` (values: always_invoice, create_prorations, none): Determines how to handle [prorations](https://stripe.com/docs/subscriptions/billing-cycle#prorations) resulting from the `billing_cycle_anchor`. Valid values are `create_prorations` or `none`.
  * transfer_data `object`: If specified, the funds from the subscription's invoices will be transferred to the destination and the ID of the resulting transfers will be found on the resulting charges.
  * trial_from_plan `boolean`: Indicates if a plan's `trial_period_days` should be applied to the subscription. Setting `trial_end` per subscription is preferred, and this defaults to `false`. Setting this flag to `true` together with `trial_end` is not allowed.
  * trial_period_days `integer`: Integer representing the number of trial period days before the customer is charged for the first time. This will always overwrite any trials that might apply via a subscribed plan.

#### Output
* output [subscription](#subscription)

### DeleteCustomersCustomerSubscriptionsSubscriptionExposedId
<p>Cancels a customer’s subscription. If you set the <code>at_period_end</code> parameter to <code>true</code>, the subscription will remain active until the end of the period, at which point it will be canceled and not renewed. Otherwise, with the default <code>false</code> value, the subscription is terminated immediately. In either case, the customer will not be charged again for the subscription.</p>

<p>Note, however, that any pending invoice items that you’ve created will still be charged for at the end of the period, unless manually <a href="#delete_invoiceitem">deleted</a>. If you’ve set the subscription to cancel at the end of the period, any pending prorations will also be left in place and collected at the end of the period. But if the subscription is set to cancel immediately, pending prorations will be removed.</p>

<p>By default, upon subscription cancellation, Stripe will stop automatic collection of all finalized invoices for the customer. This is intended to prevent unexpected payment attempts after the customer has canceled a subscription. However, you can resume automatic collection of the invoices manually after subscription cancellation to have us proceed. Or, you could check for unpaid invoices before allowing the customer to cancel the subscription at all.</p>


```js
stripe.DeleteCustomersCustomerSubscriptionsSubscriptionExposedId({
  "customer": "",
  "subscription_exposed_id": ""
}, context)
```

#### Input
* input `object`
  * customer **required** `string`
  * subscription_exposed_id **required** `string`
  * expand `array`: Specifies which fields in the response should be expanded.
  * invoice_now `boolean`: Can be set to `true` if `at_period_end` is not set to `true`. Will generate a final invoice that invoices for any un-invoiced metered usage and new/pending proration invoice items.
  * prorate `boolean`: Can be set to `true` if `at_period_end` is not set to `true`. Will generate a proration invoice item that credits remaining unused time until the subscription period end.

#### Output
* output [subscription](#subscription)

### GetCustomersCustomerSubscriptionsSubscriptionExposedId
<p>Retrieves the subscription with the given ID.</p>


```js
stripe.GetCustomersCustomerSubscriptionsSubscriptionExposedId({
  "customer": "",
  "subscription_exposed_id": ""
}, context)
```

#### Input
* input `object`
  * customer **required** `string`
  * expand `array`: Specifies which fields in the response should be expanded.
  * subscription_exposed_id **required** `string`

#### Output
* output [subscription](#subscription)

### PostCustomersCustomerSubscriptionsSubscriptionExposedId
<p>Updates an existing subscription on a customer to match the specified parameters. When changing plans or quantities, we will optionally prorate the price we charge next month to make up for any price changes. To preview how the proration will be calculated, use the <a href="#upcoming_invoice">upcoming invoice</a> endpoint.</p>


```js
stripe.PostCustomersCustomerSubscriptionsSubscriptionExposedId({
  "customer": "",
  "subscription_exposed_id": ""
}, context)
```

#### Input
* input `object`
  * customer **required** `string`
  * subscription_exposed_id **required** `string`
  * add_invoice_items `array`: A list of prices and quantities that will generate invoice items appended to the first invoice for this subscription. You may pass up to 10 items.
  * application_fee_percent `number`: A non-negative decimal between 0 and 100, with at most two decimal places. This represents the percentage of the subscription invoice subtotal that will be transferred to the application owner's Stripe account. The request must be made by a platform account on a connected account in order to set an application fee percentage. For more information, see the application fees [documentation](https://stripe.com/docs/connect/subscriptions#collecting-fees-on-subscriptions).
  * billing_cycle_anchor `string` (values: now, unchanged): Either `now` or `unchanged`. Setting the value to `now` resets the subscription's billing cycle anchor to the current time. For more information, see the billing cycle [documentation](https://stripe.com/docs/billing/subscriptions/billing-cycle).
  * cancel_at_period_end `boolean`: Boolean indicating whether this subscription should cancel at the end of the current period.
  * collection_method `string` (values: charge_automatically, send_invoice): Either `charge_automatically`, or `send_invoice`. When charging automatically, Stripe will attempt to pay this subscription at the end of the cycle using the default source attached to the customer. When sending an invoice, Stripe will email your customer an invoice with payment instructions. Defaults to `charge_automatically`.
  * coupon `string`: The code of the coupon to apply to this subscription. A coupon applied to a subscription will only affect invoices created for that particular subscription.
  * days_until_due `integer`: Number of days a customer has to pay invoices generated by this subscription. Valid only for subscriptions where `collection_method` is set to `send_invoice`.
  * default_payment_method `string`: ID of the default payment method for the subscription. It must belong to the customer associated with the subscription. This takes precedence over `default_source`. If neither are set, invoices will use the customer's [invoice_settings.default_payment_method](https://stripe.com/docs/api/customers/object#customer_object-invoice_settings-default_payment_method) or [default_source](https://stripe.com/docs/api/customers/object#customer_object-default_source).
  * default_source `string`: ID of the default payment source for the subscription. It must belong to the customer associated with the subscription and be in a chargeable state. If `default_payment_method` is also set, `default_payment_method` will take precedence. If neither are set, invoices will use the customer's [invoice_settings.default_payment_method](https://stripe.com/docs/api/customers/object#customer_object-invoice_settings-default_payment_method) or [default_source](https://stripe.com/docs/api/customers/object#customer_object-default_source).
  * expand `array`: Specifies which fields in the response should be expanded.
  * items `array`: A list of up to 20 subscription items, each with an attached price.
  * off_session `boolean`: Indicates if a customer is on or off-session while an invoice payment is attempted.
  * payment_behavior `string` (values: allow_incomplete, error_if_incomplete, pending_if_incomplete): Use `allow_incomplete` to transition the subscription to `status=past_due` if a payment is required but cannot be paid. This allows you to manage scenarios where additional user actions are needed to pay a subscription's invoice. For example, SCA regulation may require 3DS authentication to complete payment. See the [SCA Migration Guide](https://stripe.com/docs/billing/migration/strong-customer-authentication) for Billing to learn more. This is the default behavior.
  * promotion_code `string`: The promotion code to apply to this subscription. A promotion code applied to a subscription will only affect invoices created for that particular subscription.
  * proration_behavior `string` (values: always_invoice, create_prorations, none): Determines how to handle [prorations](https://stripe.com/docs/subscriptions/billing-cycle#prorations) when the billing cycle changes (e.g., when switching plans, resetting `billing_cycle_anchor=now`, or starting a trial), or if an item's `quantity` changes. Valid values are `create_prorations`, `none`, or `always_invoice`.
  * proration_date `integer`: If set, the proration will be calculated as though the subscription was updated at the given time. This can be used to apply exactly the same proration that was previewed with [upcoming invoice](https://stripe.com/docs/api#retrieve_customer_invoice) endpoint. It can also be used to implement custom proration logic, such as prorating by day instead of by second, by providing the time that you wish to use for proration calculations.
  * trial_from_plan `boolean`: Indicates if a plan's `trial_period_days` should be applied to the subscription. Setting `trial_end` per subscription is preferred, and this defaults to `false`. Setting this flag to `true` together with `trial_end` is not allowed.

#### Output
* output [subscription](#subscription)

### DeleteCustomersCustomerSubscriptionsSubscriptionExposedIdDiscount
<p>Removes the currently applied discount on a customer.</p>


```js
stripe.DeleteCustomersCustomerSubscriptionsSubscriptionExposedIdDiscount({
  "customer": "",
  "subscription_exposed_id": ""
}, context)
```

#### Input
* input `object`
  * customer **required** `string`
  * subscription_exposed_id **required** `string`

#### Output
* output [deleted_discount](#deleted_discount)

### GetCustomersCustomerSubscriptionsSubscriptionExposedIdDiscount



```js
stripe.GetCustomersCustomerSubscriptionsSubscriptionExposedIdDiscount({
  "customer": "",
  "subscription_exposed_id": ""
}, context)
```

#### Input
* input `object`
  * customer **required** `string`
  * expand `array`: Specifies which fields in the response should be expanded.
  * subscription_exposed_id **required** `string`

#### Output
* output [discount](#discount)

### GetCustomersCustomerTaxIds
<p>Returns a list of tax IDs for a customer.</p>


```js
stripe.GetCustomersCustomerTaxIds({
  "customer": ""
}, context)
```

#### Input
* input `object`
  * customer **required** `string`
  * ending_before `string`: A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
  * expand `array`: Specifies which fields in the response should be expanded.
  * limit `integer`: A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
  * starting_after `string`: A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.

#### Output
* output `object`
  * data **required** `array`: Details about each object.
    * items [tax_id](#tax_id)
  * has_more **required** `boolean`: True if this list has another page of items after this one that can be fetched.
  * object **required** `string` (values: list): String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
  * url **required** `string`: The URL where this list can be accessed.

### PostCustomersCustomerTaxIds
<p>Creates a new <code>TaxID</code> object for a customer.</p>


```js
stripe.PostCustomersCustomerTaxIds({
  "customer": "",
  "type": "",
  "value": ""
}, context)
```

#### Input
* input `object`
  * customer **required** `string`
  * expand `array`: Specifies which fields in the response should be expanded.
  * type **required** `string` (values: ae_trn, au_abn, br_cnpj, br_cpf, ca_bn, ca_qst, ch_vat, cl_tin, es_cif, eu_vat, hk_br, id_npwp, in_gst, jp_cn, jp_rn, kr_brn, li_uid, mx_rfc, my_frp, my_itn, my_sst, no_vat, nz_gst, ru_inn, ru_kpp, sa_vat, sg_gst, sg_uen, th_vat, tw_vat, us_ein, za_vat): Type of the tax ID, one of `ae_trn`, `au_abn`, `br_cnpj`, `br_cpf`, `ca_bn`, `ca_qst`, `ch_vat`, `cl_tin`, `es_cif`, `eu_vat`, `hk_br`, `id_npwp`, `in_gst`, `jp_cn`, `jp_rn`, `kr_brn`, `li_uid`, `mx_rfc`, `my_frp`, `my_itn`, `my_sst`, `no_vat`, `nz_gst`, `ru_inn`, `ru_kpp`, `sa_vat`, `sg_gst`, `sg_uen`, `th_vat`, `tw_vat`, `us_ein`, or `za_vat`
  * value **required** `string`: Value of the tax ID.

#### Output
* output [tax_id](#tax_id)

### DeleteCustomersCustomerTaxIdsId
<p>Deletes an existing <code>TaxID</code> object.</p>


```js
stripe.DeleteCustomersCustomerTaxIdsId({
  "customer": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * customer **required** `string`
  * id **required** `string`

#### Output
* output [deleted_tax_id](#deleted_tax_id)

### GetCustomersCustomerTaxIdsId
<p>Retrieves the <code>TaxID</code> object with the given identifier.</p>


```js
stripe.GetCustomersCustomerTaxIdsId({
  "customer": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * customer **required** `string`
  * expand `array`: Specifies which fields in the response should be expanded.
  * id **required** `string`

#### Output
* output [tax_id](#tax_id)

### GetDisputes
<p>Returns a list of your disputes.</p>


```js
stripe.GetDisputes({}, context)
```

#### Input
* input `object`
  * charge `string`: Only return disputes associated to the charge specified by this charge ID.
  * ending_before `string`: A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
  * expand `array`: Specifies which fields in the response should be expanded.
  * limit `integer`: A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
  * payment_intent `string`: Only return disputes associated to the PaymentIntent specified by this PaymentIntent ID.
  * starting_after `string`: A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.

#### Output
* output `object`
  * data **required** `array`
    * items [dispute](#dispute)
  * has_more **required** `boolean`: True if this list has another page of items after this one that can be fetched.
  * object **required** `string` (values: list): String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
  * url **required** `string`: The URL where this list can be accessed.

### GetDisputesDispute
<p>Retrieves the dispute with the given ID.</p>


```js
stripe.GetDisputesDispute({
  "dispute": ""
}, context)
```

#### Input
* input `object`
  * dispute **required** `string`
  * expand `array`: Specifies which fields in the response should be expanded.

#### Output
* output [dispute](#dispute)

### PostDisputesDispute
<p>When you get a dispute, contacting your customer is always the best first step. If that doesn’t work, you can submit evidence to help us resolve the dispute in your favor. You can do this in your <a href="https://dashboard.stripe.com/disputes">dashboard</a>, but if you prefer, you can use the API to submit evidence programmatically.</p>

<p>Depending on your dispute type, different evidence fields will give you a better chance of winning your dispute. To figure out which evidence fields to provide, see our <a href="/docs/disputes/categories">guide to dispute types</a>.</p>


```js
stripe.PostDisputesDispute({
  "dispute": ""
}, context)
```

#### Input
* input `object`
  * dispute **required** `string`
  * evidence `object`: Evidence to upload, to respond to a dispute. Updating any field in the hash will submit all fields in the hash for review. The combined character count of all fields is limited to 150,000.
  * expand `array`: Specifies which fields in the response should be expanded.
  * submit `boolean`: Whether to immediately submit evidence to the bank. If `false`, evidence is staged on the dispute. Staged evidence is visible in the API and Dashboard, and can be submitted to the bank by making another request with this attribute set to `true` (the default).

#### Output
* output [dispute](#dispute)

### PostDisputesDisputeClose
<p>Closing the dispute for a charge indicates that you do not have any evidence to submit and are essentially dismissing the dispute, acknowledging it as lost.</p>

<p>The status of the dispute will change from <code>needs_response</code> to <code>lost</code>. <em>Closing a dispute is irreversible</em>.</p>


```js
stripe.PostDisputesDisputeClose({
  "dispute": ""
}, context)
```

#### Input
* input `object`
  * dispute **required** `string`
  * expand `array`: Specifies which fields in the response should be expanded.

#### Output
* output [dispute](#dispute)

### PostEphemeralKeys
<p>Creates a short-lived API key for a given resource.</p>


```js
stripe.PostEphemeralKeys({}, context)
```

#### Input
* input `object`
  * customer `string`: The ID of the Customer you'd like to modify using the resulting ephemeral key.
  * expand `array`: Specifies which fields in the response should be expanded.
  * issuing_card `string`: The ID of the Issuing Card you'd like to access using the resulting ephemeral key.

#### Output
* output [ephemeral_key](#ephemeral_key)

### DeleteEphemeralKeysKey
<p>Invalidates a short-lived API key for a given resource.</p>


```js
stripe.DeleteEphemeralKeysKey({
  "key": ""
}, context)
```

#### Input
* input `object`
  * key **required** `string`
  * expand `array`: Specifies which fields in the response should be expanded.

#### Output
* output [ephemeral_key](#ephemeral_key)

### GetEvents
<p>List events, going back up to 30 days. Each event data is rendered according to Stripe API version at its creation time, specified in <a href="/docs/api/events/object">event object</a> <code>api_version</code> attribute (not according to your current Stripe API version or <code>Stripe-Version</code> header).</p>


```js
stripe.GetEvents({}, context)
```

#### Input
* input `object`
  * delivery_success `boolean`: Filter events by whether all webhooks were successfully delivered. If false, events which are still pending or have failed all delivery attempts to a webhook endpoint will be returned.
  * ending_before `string`: A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
  * expand `array`: Specifies which fields in the response should be expanded.
  * limit `integer`: A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
  * starting_after `string`: A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
  * type `string`: A string containing a specific event name, or group of events using * as a wildcard. The list will be filtered to include only events with a matching event property.
  * types `array`: An array of up to 20 strings containing specific event names. The list will be filtered to include only events with a matching event property. You may pass either `type` or `types`, but not both.

#### Output
* output `object`
  * data **required** `array`
    * items [event](#event)
  * has_more **required** `boolean`: True if this list has another page of items after this one that can be fetched.
  * object **required** `string` (values: list): String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
  * url **required** `string`: The URL where this list can be accessed.

### GetEventsId
<p>Retrieves the details of an event. Supply the unique identifier of the event, which you might have received in a webhook.</p>


```js
stripe.GetEventsId({
  "id": ""
}, context)
```

#### Input
* input `object`
  * expand `array`: Specifies which fields in the response should be expanded.
  * id **required** `string`

#### Output
* output [event](#event)

### GetExchangeRates
<p>Returns a list of objects that contain the rates at which foreign currencies are converted to one another. Only shows the currencies for which Stripe supports.</p>


```js
stripe.GetExchangeRates({}, context)
```

#### Input
* input `object`
  * ending_before `string`: A cursor for use in pagination. `ending_before` is the currency that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with the exchange rate for currency X your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
  * expand `array`: Specifies which fields in the response should be expanded.
  * limit `integer`: A limit on the number of objects to be returned. Limit can range between 1 and total number of supported payout currencies, and the default is the max.
  * starting_after `string`: A cursor for use in pagination. `starting_after` is the currency that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with the exchange rate for currency X, your subsequent call can include `starting_after=X` in order to fetch the next page of the list.

#### Output
* output `object`
  * data **required** `array`
    * items [exchange_rate](#exchange_rate)
  * has_more **required** `boolean`: True if this list has another page of items after this one that can be fetched.
  * object **required** `string` (values: list): String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
  * url **required** `string`: The URL where this list can be accessed.

### GetExchangeRatesRateId
<p>Retrieves the exchange rates from the given currency to every supported currency.</p>


```js
stripe.GetExchangeRatesRateId({
  "rate_id": ""
}, context)
```

#### Input
* input `object`
  * expand `array`: Specifies which fields in the response should be expanded.
  * rate_id **required** `string`

#### Output
* output [exchange_rate](#exchange_rate)

### GetFileLinks
<p>Returns a list of file links.</p>


```js
stripe.GetFileLinks({}, context)
```

#### Input
* input `object`
  * ending_before `string`: A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
  * expand `array`: Specifies which fields in the response should be expanded.
  * expired `boolean`: Filter links by their expiration status. By default, all links are returned.
  * file `string`: Only return links for the given file.
  * limit `integer`: A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
  * starting_after `string`: A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.

#### Output
* output `object`
  * data **required** `array`
    * items [file_link](#file_link)
  * has_more **required** `boolean`: True if this list has another page of items after this one that can be fetched.
  * object **required** `string` (values: list): String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
  * url **required** `string`: The URL where this list can be accessed.

### PostFileLinks
<p>Creates a new file link object.</p>


```js
stripe.PostFileLinks({
  "file": ""
}, context)
```

#### Input
* input `object`
  * expand `array`: Specifies which fields in the response should be expanded.
  * expires_at `integer`: A future timestamp after which the link will no longer be usable.
  * file **required** `string`: The ID of the file. The file's `purpose` must be one of the following: `business_icon`, `business_logo`, `customer_signature`, `dispute_evidence`, `finance_report_run`, `pci_document`, `sigma_scheduled_query`, or `tax_document_user_upload`.

#### Output
* output [file_link](#file_link)

### GetFileLinksLink
<p>Retrieves the file link with the given ID.</p>


```js
stripe.GetFileLinksLink({
  "link": ""
}, context)
```

#### Input
* input `object`
  * expand `array`: Specifies which fields in the response should be expanded.
  * link **required** `string`

#### Output
* output [file_link](#file_link)

### PostFileLinksLink
<p>Updates an existing file link object. Expired links can no longer be updated.</p>


```js
stripe.PostFileLinksLink({
  "link": ""
}, context)
```

#### Input
* input `object`
  * link **required** `string`
  * expand `array`: Specifies which fields in the response should be expanded.

#### Output
* output [file_link](#file_link)

### GetFiles
<p>Returns a list of the files that your account has access to. The files are returned sorted by creation date, with the most recently created files appearing first.</p>


```js
stripe.GetFiles({}, context)
```

#### Input
* input `object`
  * ending_before `string`: A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
  * expand `array`: Specifies which fields in the response should be expanded.
  * limit `integer`: A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
  * purpose `string` (values: account_requirement, additional_verification, business_icon, business_logo, customer_signature, dispute_evidence, document_provider_identity_document, finance_report_run, identity_document, pci_document, sigma_scheduled_query, tax_document_user_upload): The file purpose to filter queries by. If none is provided, files will not be filtered by purpose.
  * starting_after `string`: A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.

#### Output
* output `object`
  * data **required** `array`
    * items [file](#file)
  * has_more **required** `boolean`: True if this list has another page of items after this one that can be fetched.
  * object **required** `string` (values: list): String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
  * url **required** `string`: The URL where this list can be accessed.

### PostFiles
<p>To upload a file to Stripe, you’ll need to send a request of type <code>multipart/form-data</code>. The request should contain the file you would like to upload, as well as the parameters for creating a file.</p>

<p>All of Stripe’s officially supported Client libraries should have support for sending <code>multipart/form-data</code>.</p>


```js
stripe.PostFiles({
  "file": "",
  "purpose": ""
}, context)
```

#### Input
* input `object`
  * expand `array`: Specifies which fields in the response should be expanded.
  * file **required** `string`: A file to upload. The file should follow the specifications of RFC 2388 (which defines file transfers for the `multipart/form-data` protocol).
  * file_link_data `object`: Optional parameters to automatically create a [file link](https://stripe.com/docs/api#file_links) for the newly created file.
  * purpose **required** `string` (values: account_requirement, additional_verification, business_icon, business_logo, customer_signature, dispute_evidence, identity_document, pci_document, tax_document_user_upload): The [purpose](https://stripe.com/docs/file-upload#uploading-a-file) of the uploaded file.

#### Output
* output [file](#file)

### GetFilesFile
<p>Retrieves the details of an existing file object. Supply the unique file ID from a file, and Stripe will return the corresponding file object. To access file contents, see the <a href="/docs/file-upload#download-file-contents">File Upload Guide</a>.</p>


```js
stripe.GetFilesFile({
  "file": ""
}, context)
```

#### Input
* input `object`
  * expand `array`: Specifies which fields in the response should be expanded.
  * file **required** `string`

#### Output
* output [file](#file)

### GetInvoiceitems
<p>Returns a list of your invoice items. Invoice items are returned sorted by creation date, with the most recently created invoice items appearing first.</p>


```js
stripe.GetInvoiceitems({}, context)
```

#### Input
* input `object`
  * customer `string`: The identifier of the customer whose invoice items to return. If none is provided, all invoice items will be returned.
  * ending_before `string`: A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
  * expand `array`: Specifies which fields in the response should be expanded.
  * invoice `string`: Only return invoice items belonging to this invoice. If none is provided, all invoice items will be returned. If specifying an invoice, no customer identifier is needed.
  * limit `integer`: A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
  * pending `boolean`: Set to `true` to only show pending invoice items, which are not yet attached to any invoices. Set to `false` to only show invoice items already attached to invoices. If unspecified, no filter is applied.
  * starting_after `string`: A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.

#### Output
* output `object`
  * data **required** `array`
    * items [invoiceitem](#invoiceitem)
  * has_more **required** `boolean`: True if this list has another page of items after this one that can be fetched.
  * object **required** `string` (values: list): String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
  * url **required** `string`: The URL where this list can be accessed.

### PostInvoiceitems
<p>Creates an item to be added to a draft invoice (up to 250 items per invoice). If no invoice is specified, the item will be on the next invoice created for the customer specified.</p>


```js
stripe.PostInvoiceitems({
  "customer": ""
}, context)
```

#### Input
* input `object`
  * amount `integer`: The integer amount in %s of the charge to be applied to the upcoming invoice. Passing in a negative `amount` will reduce the `amount_due` on the invoice.
  * currency `string`: Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
  * customer **required** `string`: The ID of the customer who will be billed when this invoice item is billed.
  * description `string`: An arbitrary string which you can attach to the invoice item. The description is displayed in the invoice for easy tracking.
  * discountable `boolean`: Controls whether discounts apply to this invoice item. Defaults to false for prorations or negative invoice items, and true for all other invoice items.
  * expand `array`: Specifies which fields in the response should be expanded.
  * invoice `string`: The ID of an existing invoice to add this invoice item to. When left blank, the invoice item will be added to the next upcoming scheduled invoice. This is useful when adding invoice items in response to an invoice.created webhook. You can only add invoice items to draft invoices and there is a maximum of 250 items per invoice.
  * period `object`: The period associated with this invoice item.
  * price `string`: The ID of the price object.
  * price_data `object`: Data used to generate a new [Price](https://stripe.com/docs/api/prices) object inline.
  * quantity `integer`: Non-negative integer. The quantity of units for the invoice item.
  * subscription `string`: The ID of a subscription to add this invoice item to. When left blank, the invoice item will be be added to the next upcoming scheduled invoice. When set, scheduled invoices for subscriptions other than the specified subscription will ignore the invoice item. Use this when you want to express that an invoice item has been accrued within the context of a particular subscription.
  * tax_rates `array`: The tax rates which apply to the invoice item. When set, the `default_tax_rates` on the invoice do not apply to this invoice item.
  * unit_amount `integer`: The integer unit amount in %s of the charge to be applied to the upcoming invoice. This `unit_amount` will be multiplied by the quantity to get the full amount. Passing in a negative `unit_amount` will reduce the `amount_due` on the invoice.
  * unit_amount_decimal `string`: Same as `unit_amount`, but accepts a decimal value in %s with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.

#### Output
* output [invoiceitem](#invoiceitem)

### DeleteInvoiceitemsInvoiceitem
<p>Deletes an invoice item, removing it from an invoice. Deleting invoice items is only possible when they’re not attached to invoices, or if it’s attached to a draft invoice.</p>


```js
stripe.DeleteInvoiceitemsInvoiceitem({
  "invoiceitem": ""
}, context)
```

#### Input
* input `object`
  * invoiceitem **required** `string`

#### Output
* output [deleted_invoiceitem](#deleted_invoiceitem)

### GetInvoiceitemsInvoiceitem
<p>Retrieves the invoice item with the given ID.</p>


```js
stripe.GetInvoiceitemsInvoiceitem({
  "invoiceitem": ""
}, context)
```

#### Input
* input `object`
  * expand `array`: Specifies which fields in the response should be expanded.
  * invoiceitem **required** `string`

#### Output
* output [invoiceitem](#invoiceitem)

### PostInvoiceitemsInvoiceitem
<p>Updates the amount or description of an invoice item on an upcoming invoice. Updating an invoice item is only possible before the invoice it’s attached to is closed.</p>


```js
stripe.PostInvoiceitemsInvoiceitem({
  "invoiceitem": ""
}, context)
```

#### Input
* input `object`
  * invoiceitem **required** `string`
  * amount `integer`: The integer amount in %s of the charge to be applied to the upcoming invoice. If you want to apply a credit to the customer's account, pass a negative amount.
  * description `string`: An arbitrary string which you can attach to the invoice item. The description is displayed in the invoice for easy tracking.
  * discountable `boolean`: Controls whether discounts apply to this invoice item. Defaults to false for prorations or negative invoice items, and true for all other invoice items. Cannot be set to true for prorations.
  * expand `array`: Specifies which fields in the response should be expanded.
  * period `object`: The period associated with this invoice item.
  * price `string`: The ID of the price object.
  * price_data `object`: Data used to generate a new [Price](https://stripe.com/docs/api/prices) object inline.
  * quantity `integer`: Non-negative integer. The quantity of units for the invoice item.
  * unit_amount `integer`: The integer unit amount in %s of the charge to be applied to the upcoming invoice. This unit_amount will be multiplied by the quantity to get the full amount. If you want to apply a credit to the customer's account, pass a negative unit_amount.
  * unit_amount_decimal `string`: Same as `unit_amount`, but accepts a decimal value in %s with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.

#### Output
* output [invoiceitem](#invoiceitem)

### GetInvoices
<p>You can list all invoices, or list the invoices for a specific customer. The invoices are returned sorted by creation date, with the most recently created invoices appearing first.</p>


```js
stripe.GetInvoices({}, context)
```

#### Input
* input `object`
  * collection_method `string` (values: charge_automatically, send_invoice): The collection method of the invoice to retrieve. Either `charge_automatically` or `send_invoice`.
  * customer `string`: Only return invoices for the customer specified by this customer ID.
  * ending_before `string`: A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
  * expand `array`: Specifies which fields in the response should be expanded.
  * limit `integer`: A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
  * starting_after `string`: A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
  * status `string` (values: draft, open, paid, uncollectible, void): The status of the invoice, one of `draft`, `open`, `paid`, `uncollectible`, or `void`. [Learn more](https://stripe.com/docs/billing/invoices/workflow#workflow-overview)
  * subscription `string`: Only return invoices for the subscription specified by this subscription ID.

#### Output
* output `object`
  * data **required** `array`
    * items [invoice](#invoice)
  * has_more **required** `boolean`: True if this list has another page of items after this one that can be fetched.
  * object **required** `string` (values: list): String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
  * url **required** `string`: The URL where this list can be accessed.

### PostInvoices
<p>This endpoint creates a draft invoice for a given customer. The draft invoice created pulls in all pending invoice items on that customer, including prorations. The invoice remains a draft until you <a href="#finalize_invoice">finalize</a> the invoice, which allows you to <a href="#pay_invoice">pay</a> or <a href="#send_invoice">send</a> the invoice to your customers.</p>


```js
stripe.PostInvoices({
  "customer": ""
}, context)
```

#### Input
* input `object`
  * application_fee_amount `integer`: A fee in %s that will be applied to the invoice and transferred to the application owner's Stripe account. The request must be made with an OAuth key or the Stripe-Account header in order to take an application fee. For more information, see the application fees [documentation](https://stripe.com/docs/connect/subscriptions#invoices).
  * auto_advance `boolean`: Controls whether Stripe will perform [automatic collection](https://stripe.com/docs/billing/invoices/workflow/#auto_advance) of the invoice. When `false`, the invoice's state will not automatically advance without an explicit action.
  * collection_method `string` (values: charge_automatically, send_invoice): Either `charge_automatically`, or `send_invoice`. When charging automatically, Stripe will attempt to pay this invoice using the default source attached to the customer. When sending an invoice, Stripe will email this invoice to the customer with payment instructions. Defaults to `charge_automatically`.
  * customer **required** `string`: The ID of the customer who will be billed.
  * days_until_due `integer`: The number of days from when the invoice is created until it is due. Valid only for invoices where `collection_method=send_invoice`.
  * default_payment_method `string`: ID of the default payment method for the invoice. It must belong to the customer associated with the invoice. If not set, defaults to the subscription's default payment method, if any, or to the default payment method in the customer's invoice settings.
  * default_source `string`: ID of the default payment source for the invoice. It must belong to the customer associated with the invoice and be in a chargeable state. If not set, defaults to the subscription's default source, if any, or to the customer's default source.
  * default_tax_rates `array`: The tax rates that will apply to any line item that does not have `tax_rates` set.
  * description `string`: An arbitrary string attached to the object. Often useful for displaying to users. Referenced as 'memo' in the Dashboard.
  * due_date `integer`: The date on which payment for this invoice is due. Valid only for invoices where `collection_method=send_invoice`.
  * expand `array`: Specifies which fields in the response should be expanded.
  * footer `string`: Footer to be displayed on the invoice.
  * statement_descriptor `string`: Extra information about a charge for the customer's credit card statement. It must contain at least one letter. If not specified and this invoice is part of a subscription, the default `statement_descriptor` will be set to the first subscription item's product's `statement_descriptor`.
  * subscription `string`: The ID of the subscription to invoice, if any. If not set, the created invoice will include all pending invoice items for the customer. If set, the created invoice will only include pending invoice items for that subscription and pending invoice items not associated with any subscription. The subscription's billing cycle and regular subscription events won't be affected.
  * transfer_data `object`: If specified, the funds from the invoice will be transferred to the destination and the ID of the resulting transfer will be found on the invoice's charge.

#### Output
* output [invoice](#invoice)

### GetInvoicesUpcoming
<p>At any time, you can preview the upcoming invoice for a customer. This will show you all the charges that are pending, including subscription renewal charges, invoice item charges, etc. It will also show you any discounts that are applicable to the invoice.</p>

<p>Note that when you are viewing an upcoming invoice, you are simply viewing a preview – the invoice has not yet been created. As such, the upcoming invoice will not show up in invoice listing calls, and you cannot use the API to pay or edit the invoice. If you want to change the amount that your customer will be billed, you can add, remove, or update pending invoice items, or update the customer’s discount.</p>

<p>You can preview the effects of updating a subscription, including a preview of what proration will take place. To ensure that the actual proration is calculated exactly the same as the previewed proration, you should pass a <code>proration_date</code> parameter when doing the actual subscription update. The value passed in should be the same as the <code>subscription_proration_date</code> returned on the upcoming invoice resource. The recommended way to get only the prorations being previewed is to consider only proration line items where <code>period[start]</code> is equal to the <code>subscription_proration_date</code> on the upcoming invoice resource.</p>


```js
stripe.GetInvoicesUpcoming({}, context)
```

#### Input
* input `object`
  * coupon `string`: The code of the coupon to apply. If `subscription` or `subscription_items` is provided, the invoice returned will preview updating or creating a subscription with that coupon. Otherwise, it will preview applying that coupon to the customer for the next upcoming invoice from among the customer's subscriptions. The invoice can be previewed without a coupon by passing this value as an empty string.
  * customer `string`: The identifier of the customer whose upcoming invoice you'd like to retrieve.
  * expand `array`: Specifies which fields in the response should be expanded.
  * invoice_items `array`: List of invoice items to add or update in the upcoming invoice preview.
  * schedule `string`: The identifier of the unstarted schedule whose upcoming invoice you'd like to retrieve. Cannot be used with subscription or subscription fields.
  * subscription `string`: The identifier of the subscription for which you'd like to retrieve the upcoming invoice. If not provided, but a `subscription_items` is provided, you will preview creating a subscription with those items. If neither `subscription` nor `subscription_items` is provided, you will retrieve the next upcoming invoice from among the customer's subscriptions.
  * subscription_cancel_at_period_end `boolean`: Boolean indicating whether this subscription should cancel at the end of the current period.
  * subscription_cancel_now `boolean`: This simulates the subscription being canceled or expired immediately.
  * subscription_items `array`: A list of up to 20 subscription items, each with an attached price.
  * subscription_proration_behavior `string` (values: always_invoice, create_prorations, none): Determines how to handle [prorations](https://stripe.com/docs/subscriptions/billing-cycle#prorations) when the billing cycle changes (e.g., when switching plans, resetting `billing_cycle_anchor=now`, or starting a trial), or if an item's `quantity` changes. Valid values are `create_prorations`, `none`, or `always_invoice`.
  * subscription_proration_date `integer`: If previewing an update to a subscription, and doing proration, `subscription_proration_date` forces the proration to be calculated as though the update was done at the specified time. The time given must be within the current subscription period, and cannot be before the subscription was on its current plan. If set, `subscription`, and one of `subscription_items`, or `subscription_trial_end` are required. Also, `subscription_proration_behavior` cannot be set to 'none'.
  * subscription_start_date `integer`: Date a subscription is intended to start (can be future or past)
  * subscription_trial_from_plan `boolean`: Indicates if a plan's `trial_period_days` should be applied to the subscription. Setting `subscription_trial_end` per subscription is preferred, and this defaults to `false`. Setting this flag to `true` together with `subscription_trial_end` is not allowed.

#### Output
* output [invoice](#invoice)

### GetInvoicesUpcomingLines
<p>When retrieving an upcoming invoice, you’ll get a <strong>lines</strong> property containing the total count of line items and the first handful of those items. There is also a URL where you can retrieve the full (paginated) list of line items.</p>


```js
stripe.GetInvoicesUpcomingLines({}, context)
```

#### Input
* input `object`
  * coupon `string`: The code of the coupon to apply. If `subscription` or `subscription_items` is provided, the invoice returned will preview updating or creating a subscription with that coupon. Otherwise, it will preview applying that coupon to the customer for the next upcoming invoice from among the customer's subscriptions. The invoice can be previewed without a coupon by passing this value as an empty string.
  * customer `string`: The identifier of the customer whose upcoming invoice you'd like to retrieve.
  * ending_before `string`: A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
  * expand `array`: Specifies which fields in the response should be expanded.
  * invoice_items `array`: List of invoice items to add or update in the upcoming invoice preview.
  * limit `integer`: A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
  * schedule `string`: The identifier of the unstarted schedule whose upcoming invoice you'd like to retrieve. Cannot be used with subscription or subscription fields.
  * starting_after `string`: A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
  * subscription `string`: The identifier of the subscription for which you'd like to retrieve the upcoming invoice. If not provided, but a `subscription_items` is provided, you will preview creating a subscription with those items. If neither `subscription` nor `subscription_items` is provided, you will retrieve the next upcoming invoice from among the customer's subscriptions.
  * subscription_cancel_at_period_end `boolean`: Boolean indicating whether this subscription should cancel at the end of the current period.
  * subscription_cancel_now `boolean`: This simulates the subscription being canceled or expired immediately.
  * subscription_items `array`: A list of up to 20 subscription items, each with an attached price.
  * subscription_proration_behavior `string` (values: always_invoice, create_prorations, none): Determines how to handle [prorations](https://stripe.com/docs/subscriptions/billing-cycle#prorations) when the billing cycle changes (e.g., when switching plans, resetting `billing_cycle_anchor=now`, or starting a trial), or if an item's `quantity` changes. Valid values are `create_prorations`, `none`, or `always_invoice`.
  * subscription_proration_date `integer`: If previewing an update to a subscription, and doing proration, `subscription_proration_date` forces the proration to be calculated as though the update was done at the specified time. The time given must be within the current subscription period, and cannot be before the subscription was on its current plan. If set, `subscription`, and one of `subscription_items`, or `subscription_trial_end` are required. Also, `subscription_proration_behavior` cannot be set to 'none'.
  * subscription_start_date `integer`: Date a subscription is intended to start (can be future or past)
  * subscription_trial_from_plan `boolean`: Indicates if a plan's `trial_period_days` should be applied to the subscription. Setting `subscription_trial_end` per subscription is preferred, and this defaults to `false`. Setting this flag to `true` together with `subscription_trial_end` is not allowed.

#### Output
* output `object`
  * data **required** `array`: Details about each object.
    * items [line_item](#line_item)
  * has_more **required** `boolean`: True if this list has another page of items after this one that can be fetched.
  * object **required** `string` (values: list): String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
  * url **required** `string`: The URL where this list can be accessed.

### DeleteInvoicesInvoice
<p>Permanently deletes a one-off invoice draft. This cannot be undone. Attempts to delete invoices that are no longer in a draft state will fail; once an invoice has been finalized or if an invoice is for a subscription, it must be <a href="#void_invoice">voided</a>.</p>


```js
stripe.DeleteInvoicesInvoice({
  "invoice": ""
}, context)
```

#### Input
* input `object`
  * invoice **required** `string`

#### Output
* output [deleted_invoice](#deleted_invoice)

### GetInvoicesInvoice
<p>Retrieves the invoice with the given ID.</p>


```js
stripe.GetInvoicesInvoice({
  "invoice": ""
}, context)
```

#### Input
* input `object`
  * expand `array`: Specifies which fields in the response should be expanded.
  * invoice **required** `string`

#### Output
* output [invoice](#invoice)

### PostInvoicesInvoice
<p>Draft invoices are fully editable. Once an invoice is <a href="/docs/billing/invoices/workflow#finalized">finalized</a>,
monetary values, as well as <code>collection_method</code>, become uneditable.</p>

<p>If you would like to stop the Stripe Billing engine from automatically finalizing, reattempting payments on,
sending reminders for, or <a href="/docs/billing/invoices/reconciliation">automatically reconciling</a> invoices, pass
<code>auto_advance=false</code>.</p>


```js
stripe.PostInvoicesInvoice({
  "invoice": ""
}, context)
```

#### Input
* input `object`
  * invoice **required** `string`
  * application_fee_amount `integer`: A fee in %s that will be applied to the invoice and transferred to the application owner's Stripe account. The request must be made with an OAuth key or the Stripe-Account header in order to take an application fee. For more information, see the application fees [documentation](https://stripe.com/docs/connect/subscriptions#invoices).
  * auto_advance `boolean`: Controls whether Stripe will perform [automatic collection](https://stripe.com/docs/billing/invoices/workflow/#auto_advance) of the invoice.
  * collection_method `string` (values: charge_automatically, send_invoice): Either `charge_automatically` or `send_invoice`. This field can be updated only on `draft` invoices.
  * days_until_due `integer`: The number of days from which the invoice is created until it is due. Only valid for invoices where `collection_method=send_invoice`. This field can only be updated on `draft` invoices.
  * default_payment_method `string`: ID of the default payment method for the invoice. It must belong to the customer associated with the invoice. If not set, defaults to the subscription's default payment method, if any, or to the default payment method in the customer's invoice settings.
  * default_source `string`: ID of the default payment source for the invoice. It must belong to the customer associated with the invoice and be in a chargeable state. If not set, defaults to the subscription's default source, if any, or to the customer's default source.
  * description `string`: An arbitrary string attached to the object. Often useful for displaying to users. Referenced as 'memo' in the Dashboard.
  * due_date `integer`: The date on which payment for this invoice is due. Only valid for invoices where `collection_method=send_invoice`. This field can only be updated on `draft` invoices.
  * expand `array`: Specifies which fields in the response should be expanded.
  * footer `string`: Footer to be displayed on the invoice.
  * statement_descriptor `string`: Extra information about a charge for the customer's credit card statement. It must contain at least one letter. If not specified and this invoice is part of a subscription, the default `statement_descriptor` will be set to the first subscription item's product's `statement_descriptor`.

#### Output
* output [invoice](#invoice)

### PostInvoicesInvoiceFinalize
<p>Stripe automatically finalizes drafts before sending and attempting payment on invoices. However, if you’d like to finalize a draft invoice manually, you can do so using this method.</p>


```js
stripe.PostInvoicesInvoiceFinalize({
  "invoice": ""
}, context)
```

#### Input
* input `object`
  * invoice **required** `string`
  * auto_advance `boolean`: Controls whether Stripe will perform [automatic collection](https://stripe.com/docs/billing/invoices/workflow/#auto_advance) of the invoice. When `false`, the invoice's state will not automatically advance without an explicit action.
  * expand `array`: Specifies which fields in the response should be expanded.

#### Output
* output [invoice](#invoice)

### GetInvoicesInvoiceLines
<p>When retrieving an invoice, you’ll get a <strong>lines</strong> property containing the total count of line items and the first handful of those items. There is also a URL where you can retrieve the full (paginated) list of line items.</p>


```js
stripe.GetInvoicesInvoiceLines({
  "invoice": ""
}, context)
```

#### Input
* input `object`
  * ending_before `string`: A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
  * expand `array`: Specifies which fields in the response should be expanded.
  * invoice **required** `string`
  * limit `integer`: A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
  * starting_after `string`: A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.

#### Output
* output `object`
  * data **required** `array`: Details about each object.
    * items [line_item](#line_item)
  * has_more **required** `boolean`: True if this list has another page of items after this one that can be fetched.
  * object **required** `string` (values: list): String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
  * url **required** `string`: The URL where this list can be accessed.

### PostInvoicesInvoiceMarkUncollectible
<p>Marking an invoice as uncollectible is useful for keeping track of bad debts that can be written off for accounting purposes.</p>


```js
stripe.PostInvoicesInvoiceMarkUncollectible({
  "invoice": ""
}, context)
```

#### Input
* input `object`
  * invoice **required** `string`
  * expand `array`: Specifies which fields in the response should be expanded.

#### Output
* output [invoice](#invoice)

### PostInvoicesInvoicePay
<p>Stripe automatically creates and then attempts to collect payment on invoices for customers on subscriptions according to your <a href="https://dashboard.stripe.com/account/billing/automatic">subscriptions settings</a>. However, if you’d like to attempt payment on an invoice out of the normal collection schedule or for some other reason, you can do so.</p>


```js
stripe.PostInvoicesInvoicePay({
  "invoice": ""
}, context)
```

#### Input
* input `object`
  * invoice **required** `string`
  * expand `array`: Specifies which fields in the response should be expanded.
  * forgive `boolean`: In cases where the source used to pay the invoice has insufficient funds, passing `forgive=true` controls whether a charge should be attempted for the full amount available on the source, up to the amount to fully pay the invoice. This effectively forgives the difference between the amount available on the source and the amount due. 
  * off_session `boolean`: Indicates if a customer is on or off-session while an invoice payment is attempted. Defaults to `true` (off-session).
  * paid_out_of_band `boolean`: Boolean representing whether an invoice is paid outside of Stripe. This will result in no charge being made. Defaults to `false`.
  * payment_method `string`: A PaymentMethod to be charged. The PaymentMethod must be the ID of a PaymentMethod belonging to the customer associated with the invoice being paid.
  * source `string`: A payment source to be charged. The source must be the ID of a source belonging to the customer associated with the invoice being paid.

#### Output
* output [invoice](#invoice)

### PostInvoicesInvoiceSend
<p>Stripe will automatically send invoices to customers according to your <a href="https://dashboard.stripe.com/account/billing/automatic">subscriptions settings</a>. However, if you’d like to manually send an invoice to your customer out of the normal schedule, you can do so. When sending invoices that have already been paid, there will be no reference to the payment in the email.</p>

<p>Requests made in test-mode result in no emails being sent, despite sending an <code>invoice.sent</code> event.</p>


```js
stripe.PostInvoicesInvoiceSend({
  "invoice": ""
}, context)
```

#### Input
* input `object`
  * invoice **required** `string`
  * expand `array`: Specifies which fields in the response should be expanded.

#### Output
* output [invoice](#invoice)

### PostInvoicesInvoiceVoid
<p>Mark a finalized invoice as void. This cannot be undone. Voiding an invoice is similar to <a href="#delete_invoice">deletion</a>, however it only applies to finalized invoices and maintains a papertrail where the invoice can still be found.</p>


```js
stripe.PostInvoicesInvoiceVoid({
  "invoice": ""
}, context)
```

#### Input
* input `object`
  * invoice **required** `string`
  * expand `array`: Specifies which fields in the response should be expanded.

#### Output
* output [invoice](#invoice)

### GetIssuerFraudRecords
<p>Returns a list of issuer fraud records.</p>


```js
stripe.GetIssuerFraudRecords({}, context)
```

#### Input
* input `object`
  * charge `string`: Only return issuer fraud records for the charge specified by this charge ID.
  * ending_before `string`: A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
  * expand `array`: Specifies which fields in the response should be expanded.
  * limit `integer`: A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
  * starting_after `string`: A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.

#### Output
* output `object`
  * data **required** `array`
    * items [issuer_fraud_record](#issuer_fraud_record)
  * has_more **required** `boolean`: True if this list has another page of items after this one that can be fetched.
  * object **required** `string` (values: list): String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
  * url **required** `string`: The URL where this list can be accessed.

### GetIssuerFraudRecordsIssuerFraudRecord
<p>Retrieves the details of an issuer fraud record that has previously been created. </p>

<p>Please refer to the <a href="#issuer_fraud_record_object">issuer fraud record</a> object reference for more details.</p>


```js
stripe.GetIssuerFraudRecordsIssuerFraudRecord({
  "issuer_fraud_record": ""
}, context)
```

#### Input
* input `object`
  * expand `array`: Specifies which fields in the response should be expanded.
  * issuer_fraud_record **required** `string`

#### Output
* output [issuer_fraud_record](#issuer_fraud_record)

### GetIssuingAuthorizations
<p>Returns a list of Issuing <code>Authorization</code> objects. The objects are sorted in descending order by creation date, with the most recently created object appearing first.</p>


```js
stripe.GetIssuingAuthorizations({}, context)
```

#### Input
* input `object`
  * card `string`: Only return authorizations that belong to the given card.
  * cardholder `string`: Only return authorizations that belong to the given cardholder.
  * ending_before `string`: A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
  * expand `array`: Specifies which fields in the response should be expanded.
  * limit `integer`: A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
  * starting_after `string`: A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
  * status `string` (values: closed, pending, reversed): Only return authorizations with the given status. One of `pending`, `closed`, or `reversed`.

#### Output
* output `object`
  * data **required** `array`
    * items [issuing.authorization](#issuing.authorization)
  * has_more **required** `boolean`: True if this list has another page of items after this one that can be fetched.
  * object **required** `string` (values: list): String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
  * url **required** `string`: The URL where this list can be accessed.

### GetIssuingAuthorizationsAuthorization
<p>Retrieves an Issuing <code>Authorization</code> object.</p>


```js
stripe.GetIssuingAuthorizationsAuthorization({
  "authorization": ""
}, context)
```

#### Input
* input `object`
  * authorization **required** `string`
  * expand `array`: Specifies which fields in the response should be expanded.

#### Output
* output [issuing.authorization](#issuing.authorization)

### PostIssuingAuthorizationsAuthorization
<p>Updates the specified Issuing <code>Authorization</code> object by setting the values of the parameters passed. Any parameters not provided will be left unchanged.</p>


```js
stripe.PostIssuingAuthorizationsAuthorization({
  "authorization": ""
}, context)
```

#### Input
* input `object`
  * authorization **required** `string`
  * expand `array`: Specifies which fields in the response should be expanded.

#### Output
* output [issuing.authorization](#issuing.authorization)

### PostIssuingAuthorizationsAuthorizationApprove
<p>Approves a pending Issuing <code>Authorization</code> object. This request should be made within the timeout window of the <a href="/docs/issuing/controls/real-time-authorizations">real-time authorization</a> flow.</p>


```js
stripe.PostIssuingAuthorizationsAuthorizationApprove({
  "authorization": ""
}, context)
```

#### Input
* input `object`
  * authorization **required** `string`
  * amount `integer`: If the authorization's `pending_request.is_amount_controllable` property is `true`, you may provide this value to control how much to hold for the authorization. Must be positive (use [`decline`](https://stripe.com/docs/api/issuing/authorizations/decline) to decline an authorization request).
  * expand `array`: Specifies which fields in the response should be expanded.

#### Output
* output [issuing.authorization](#issuing.authorization)

### PostIssuingAuthorizationsAuthorizationDecline
<p>Declines a pending Issuing <code>Authorization</code> object. This request should be made within the timeout window of the <a href="/docs/issuing/controls/real-time-authorizations">real time authorization</a> flow.</p>


```js
stripe.PostIssuingAuthorizationsAuthorizationDecline({
  "authorization": ""
}, context)
```

#### Input
* input `object`
  * authorization **required** `string`
  * expand `array`: Specifies which fields in the response should be expanded.

#### Output
* output [issuing.authorization](#issuing.authorization)

### GetIssuingCardholders
<p>Returns a list of Issuing <code>Cardholder</code> objects. The objects are sorted in descending order by creation date, with the most recently created object appearing first.</p>


```js
stripe.GetIssuingCardholders({}, context)
```

#### Input
* input `object`
  * email `string`: Only return cardholders that have the given email address.
  * ending_before `string`: A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
  * expand `array`: Specifies which fields in the response should be expanded.
  * limit `integer`: A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
  * phone_number `string`: Only return cardholders that have the given phone number.
  * starting_after `string`: A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
  * status `string` (values: active, blocked, inactive): Only return cardholders that have the given status. One of `active`, `inactive`, or `blocked`.
  * type `string` (values: company, individual): Only return cardholders that have the given type. One of `individual` or `company`.

#### Output
* output `object`
  * data **required** `array`
    * items [issuing.cardholder](#issuing.cardholder)
  * has_more **required** `boolean`: True if this list has another page of items after this one that can be fetched.
  * object **required** `string` (values: list): String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
  * url **required** `string`: The URL where this list can be accessed.

### PostIssuingCardholders
<p>Creates a new Issuing <code>Cardholder</code> object that can be issued cards.</p>


```js
stripe.PostIssuingCardholders({
  "billing": {},
  "name": "",
  "type": ""
}, context)
```

#### Input
* input `object`
  * billing **required** `object`: The cardholder's billing address.
  * company `object`: Additional information about a `company` cardholder.
  * email `string`: The cardholder's email address.
  * expand `array`: Specifies which fields in the response should be expanded.
  * individual `object`: Additional information about an `individual` cardholder.
  * metadata `object`: Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
  * name **required** `string`: The cardholder's name. This will be printed on cards issued to them.
  * phone_number `string`: The cardholder's phone number. This will be transformed to [E.164](https://en.wikipedia.org/wiki/E.164) if it is not provided in that format already.
  * spending_controls `object`: Rules that control spending across this cardholder's cards. Refer to our [documentation](https://stripe.com/docs/issuing/controls/spending-controls) for more details.
  * status `string` (values: active, inactive): Specifies whether to permit authorizations on this cardholder's cards. Defaults to `active`.
  * type **required** `string` (values: company, individual): One of `individual` or `company`.

#### Output
* output [issuing.cardholder](#issuing.cardholder)

### GetIssuingCardholdersCardholder
<p>Retrieves an Issuing <code>Cardholder</code> object.</p>


```js
stripe.GetIssuingCardholdersCardholder({
  "cardholder": ""
}, context)
```

#### Input
* input `object`
  * cardholder **required** `string`
  * expand `array`: Specifies which fields in the response should be expanded.

#### Output
* output [issuing.cardholder](#issuing.cardholder)

### PostIssuingCardholdersCardholder
<p>Updates the specified Issuing <code>Cardholder</code> object by setting the values of the parameters passed. Any parameters not provided will be left unchanged.</p>


```js
stripe.PostIssuingCardholdersCardholder({
  "cardholder": ""
}, context)
```

#### Input
* input `object`
  * cardholder **required** `string`
  * billing `object`: The cardholder's billing address.
  * company `object`: Additional information about a `company` cardholder.
  * email `string`: The cardholder's email address.
  * expand `array`: Specifies which fields in the response should be expanded.
  * individual `object`: Additional information about an `individual` cardholder.
  * metadata `object`: Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
  * phone_number `string`: The cardholder's phone number.
  * spending_controls `object`: Rules that control spending across this cardholder's cards. Refer to our [documentation](https://stripe.com/docs/issuing/controls/spending-controls) for more details.
  * status `string` (values: active, inactive): Specifies whether to permit authorizations on this cardholder's cards.

#### Output
* output [issuing.cardholder](#issuing.cardholder)

### GetIssuingCards
<p>Returns a list of Issuing <code>Card</code> objects. The objects are sorted in descending order by creation date, with the most recently created object appearing first.</p>


```js
stripe.GetIssuingCards({}, context)
```

#### Input
* input `object`
  * cardholder `string`: Only return cards belonging to the Cardholder with the provided ID.
  * ending_before `string`: A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
  * exp_month `integer`: Only return cards that have the given expiration month.
  * exp_year `integer`: Only return cards that have the given expiration year.
  * expand `array`: Specifies which fields in the response should be expanded.
  * last4 `string`: Only return cards that have the given last four digits.
  * limit `integer`: A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
  * starting_after `string`: A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
  * status `string` (values: active, canceled, inactive): Only return cards that have the given status. One of `active`, `inactive`, or `canceled`.
  * type `string` (values: physical, virtual): Only return cards that have the given type. One of `virtual` or `physical`.

#### Output
* output `object`
  * data **required** `array`
    * items [issuing.card](#issuing.card)
  * has_more **required** `boolean`: True if this list has another page of items after this one that can be fetched.
  * object **required** `string` (values: list): String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
  * url **required** `string`: The URL where this list can be accessed.

### PostIssuingCards
<p>Creates an Issuing <code>Card</code> object.</p>


```js
stripe.PostIssuingCards({
  "currency": "",
  "type": ""
}, context)
```

#### Input
* input `object`
  * cardholder `string`: The [Cardholder](https://stripe.com/docs/api#issuing_cardholder_object) object with which the card will be associated.
  * currency **required** `string`: The currency for the card. This currently must be `usd`.
  * expand `array`: Specifies which fields in the response should be expanded.
  * metadata `object`: Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
  * replacement_for `string`: The card this is meant to be a replacement for (if any).
  * replacement_reason `string` (values: damaged, expired, lost, stolen): If `replacement_for` is specified, this should indicate why that card is being replaced.
  * shipping `object`: The address where the card will be shipped.
  * spending_controls `object`: Rules that control spending for this card. Refer to our [documentation](https://stripe.com/docs/issuing/controls/spending-controls) for more details.
  * status `string` (values: active, inactive): Whether authorizations can be approved on this card. Defaults to `inactive`.
  * type **required** `string` (values: physical, virtual): The type of card to issue. Possible values are `physical` or `virtual`.

#### Output
* output [issuing.card](#issuing.card)

### GetIssuingCardsCard
<p>Retrieves an Issuing <code>Card</code> object.</p>


```js
stripe.GetIssuingCardsCard({
  "card": ""
}, context)
```

#### Input
* input `object`
  * card **required** `string`
  * expand `array`: Specifies which fields in the response should be expanded.

#### Output
* output [issuing.card](#issuing.card)

### PostIssuingCardsCard
<p>Updates the specified Issuing <code>Card</code> object by setting the values of the parameters passed. Any parameters not provided will be left unchanged.</p>


```js
stripe.PostIssuingCardsCard({
  "card": ""
}, context)
```

#### Input
* input `object`
  * card **required** `string`
  * cancellation_reason `string` (values: lost, stolen): Reason why the `status` of this card is `canceled`.
  * expand `array`: Specifies which fields in the response should be expanded.
  * spending_controls `object`: Rules that control spending for this card. Refer to our [documentation](https://stripe.com/docs/issuing/controls/spending-controls) for more details.
  * status `string` (values: active, canceled, inactive): Dictates whether authorizations can be approved on this card. If this card is being canceled because it was lost or stolen, this information should be provided as `cancellation_reason`.

#### Output
* output [issuing.card](#issuing.card)

### GetIssuingDisputes
<p>Returns a list of Issuing <code>Dispute</code> objects. The objects are sorted in descending order by creation date, with the most recently created object appearing first.</p>


```js
stripe.GetIssuingDisputes({}, context)
```

#### Input
* input `object`
  * ending_before `string`: A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
  * expand `array`: Specifies which fields in the response should be expanded.
  * limit `integer`: A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
  * starting_after `string`: A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
  * status `string` (values: expired, lost, submitted, unsubmitted, won): Select Issuing disputes with the given status.
  * transaction `string`: Select the Issuing dispute for the given transaction.

#### Output
* output `object`
  * data **required** `array`
    * items [issuing.dispute](#issuing.dispute)
  * has_more **required** `boolean`: True if this list has another page of items after this one that can be fetched.
  * object **required** `string` (values: list): String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
  * url **required** `string`: The URL where this list can be accessed.

### PostIssuingDisputes
<p>Creates an Issuing <code>Dispute</code> object. Individual pieces of evidence within the <code>evidence</code> object are optional at this point. Stripe only validates that required evidence is present during submission. Refer to <a href="/docs/issuing/purchases/disputes#dispute-reasons-and-evidence">Dispute reasons and evidence</a> for more details about evidence requirements.</p>


```js
stripe.PostIssuingDisputes({
  "transaction": ""
}, context)
```

#### Input
* input `object`
  * evidence `object`: Evidence provided for the dispute.
  * expand `array`: Specifies which fields in the response should be expanded.
  * metadata `object`: Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
  * transaction **required** `string`: The ID of the issuing transaction to create a dispute for.

#### Output
* output [issuing.dispute](#issuing.dispute)

### GetIssuingDisputesDispute
<p>Retrieves an Issuing <code>Dispute</code> object.</p>


```js
stripe.GetIssuingDisputesDispute({
  "dispute": ""
}, context)
```

#### Input
* input `object`
  * dispute **required** `string`
  * expand `array`: Specifies which fields in the response should be expanded.

#### Output
* output [issuing.dispute](#issuing.dispute)

### PostIssuingDisputesDispute
<p>Updates the specified Issuing <code>Dispute</code> object by setting the values of the parameters passed. Any parameters not provided will be left unchanged. Properties on the <code>evidence</code> object can be unset by passing in an empty string.</p>


```js
stripe.PostIssuingDisputesDispute({
  "dispute": ""
}, context)
```

#### Input
* input `object`
  * dispute **required** `string`
  * evidence `object`: Evidence provided for the dispute.
  * expand `array`: Specifies which fields in the response should be expanded.

#### Output
* output [issuing.dispute](#issuing.dispute)

### PostIssuingDisputesDisputeSubmit
<p>Submits an Issuing <code>Dispute</code> to the card network. Stripe validates that all evidence fields required for the dispute’s reason are present. For more details, see <a href="/docs/issuing/purchases/disputes#dispute-reasons-and-evidence">Dispute reasons and evidence</a>.</p>


```js
stripe.PostIssuingDisputesDisputeSubmit({
  "dispute": ""
}, context)
```

#### Input
* input `object`
  * dispute **required** `string`
  * expand `array`: Specifies which fields in the response should be expanded.

#### Output
* output [issuing.dispute](#issuing.dispute)

### GetIssuingSettlements
<p>Returns a list of Issuing <code>Settlement</code> objects. The objects are sorted in descending order by creation date, with the most recently created object appearing first.</p>


```js
stripe.GetIssuingSettlements({}, context)
```

#### Input
* input `object`
  * ending_before `string`: A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
  * expand `array`: Specifies which fields in the response should be expanded.
  * limit `integer`: A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
  * starting_after `string`: A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.

#### Output
* output `object`
  * data **required** `array`
    * items [issuing.settlement](#issuing.settlement)
  * has_more **required** `boolean`: True if this list has another page of items after this one that can be fetched.
  * object **required** `string` (values: list): String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
  * url **required** `string`: The URL where this list can be accessed.

### GetIssuingSettlementsSettlement
<p>Retrieves an Issuing <code>Settlement</code> object.</p>


```js
stripe.GetIssuingSettlementsSettlement({
  "settlement": ""
}, context)
```

#### Input
* input `object`
  * expand `array`: Specifies which fields in the response should be expanded.
  * settlement **required** `string`

#### Output
* output [issuing.settlement](#issuing.settlement)

### PostIssuingSettlementsSettlement
<p>Updates the specified Issuing <code>Settlement</code> object by setting the values of the parameters passed. Any parameters not provided will be left unchanged.</p>


```js
stripe.PostIssuingSettlementsSettlement({
  "settlement": ""
}, context)
```

#### Input
* input `object`
  * settlement **required** `string`
  * expand `array`: Specifies which fields in the response should be expanded.
  * metadata `object`: Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.

#### Output
* output [issuing.settlement](#issuing.settlement)

### GetIssuingTransactions
<p>Returns a list of Issuing <code>Transaction</code> objects. The objects are sorted in descending order by creation date, with the most recently created object appearing first.</p>


```js
stripe.GetIssuingTransactions({}, context)
```

#### Input
* input `object`
  * card `string`: Only return transactions that belong to the given card.
  * cardholder `string`: Only return transactions that belong to the given cardholder.
  * ending_before `string`: A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
  * expand `array`: Specifies which fields in the response should be expanded.
  * limit `integer`: A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
  * starting_after `string`: A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.

#### Output
* output `object`
  * data **required** `array`
    * items [issuing.transaction](#issuing.transaction)
  * has_more **required** `boolean`: True if this list has another page of items after this one that can be fetched.
  * object **required** `string` (values: list): String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
  * url **required** `string`: The URL where this list can be accessed.

### GetIssuingTransactionsTransaction
<p>Retrieves an Issuing <code>Transaction</code> object.</p>


```js
stripe.GetIssuingTransactionsTransaction({
  "transaction": ""
}, context)
```

#### Input
* input `object`
  * expand `array`: Specifies which fields in the response should be expanded.
  * transaction **required** `string`

#### Output
* output [issuing.transaction](#issuing.transaction)

### PostIssuingTransactionsTransaction
<p>Updates the specified Issuing <code>Transaction</code> object by setting the values of the parameters passed. Any parameters not provided will be left unchanged.</p>


```js
stripe.PostIssuingTransactionsTransaction({
  "transaction": ""
}, context)
```

#### Input
* input `object`
  * transaction **required** `string`
  * expand `array`: Specifies which fields in the response should be expanded.

#### Output
* output [issuing.transaction](#issuing.transaction)

### GetMandatesMandate
<p>Retrieves a Mandate object.</p>


```js
stripe.GetMandatesMandate({
  "mandate": ""
}, context)
```

#### Input
* input `object`
  * expand `array`: Specifies which fields in the response should be expanded.
  * mandate **required** `string`

#### Output
* output [mandate](#mandate)

### GetOrderReturns
<p>Returns a list of your order returns. The returns are returned sorted by creation date, with the most recently created return appearing first.</p>


```js
stripe.GetOrderReturns({}, context)
```

#### Input
* input `object`
  * ending_before `string`: A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
  * expand `array`: Specifies which fields in the response should be expanded.
  * limit `integer`: A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
  * order `string`: The order to retrieve returns for.
  * starting_after `string`: A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.

#### Output
* output `object`
  * data **required** `array`
    * items [order_return](#order_return)
  * has_more **required** `boolean`: True if this list has another page of items after this one that can be fetched.
  * object **required** `string` (values: list): String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
  * url **required** `string`: The URL where this list can be accessed.

### GetOrderReturnsId
<p>Retrieves the details of an existing order return. Supply the unique order ID from either an order return creation request or the order return list, and Stripe will return the corresponding order information.</p>


```js
stripe.GetOrderReturnsId({
  "id": ""
}, context)
```

#### Input
* input `object`
  * expand `array`: Specifies which fields in the response should be expanded.
  * id **required** `string`

#### Output
* output [order_return](#order_return)

### GetOrders
<p>Returns a list of your orders. The orders are returned sorted by creation date, with the most recently created orders appearing first.</p>


```js
stripe.GetOrders({}, context)
```

#### Input
* input `object`
  * customer `string`: Only return orders for the given customer.
  * ending_before `string`: A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
  * expand `array`: Specifies which fields in the response should be expanded.
  * ids `array`: Only return orders with the given IDs.
  * limit `integer`: A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
  * starting_after `string`: A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
  * status `string`: Only return orders that have the given status. One of `created`, `paid`, `fulfilled`, or `refunded`.
  * status_transitions `object`: Filter orders based on when they were paid, fulfilled, canceled, or returned.
  * upstream_ids `array`: Only return orders with the given upstream order IDs.

#### Output
* output `object`
  * data **required** `array`
    * items [order](#order)
  * has_more **required** `boolean`: True if this list has another page of items after this one that can be fetched.
  * object **required** `string` (values: list): String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
  * url **required** `string`: The URL where this list can be accessed.

### PostOrders
<p>Creates a new order object.</p>


```js
stripe.PostOrders({
  "currency": ""
}, context)
```

#### Input
* input `object`
  * coupon `string`: A coupon code that represents a discount to be applied to this order. Must be one-time duration and in same currency as the order. An order can have multiple coupons.
  * currency **required** `string`: Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
  * customer `string`: The ID of an existing customer to use for this order. If provided, the customer email and shipping address will be used to create the order. Subsequently, the customer will also be charged to pay the order. If `email` or `shipping` are also provided, they will override the values retrieved from the customer object.
  * email `string`: The email address of the customer placing the order.
  * expand `array`: Specifies which fields in the response should be expanded.
  * items `array`: List of items constituting the order. An order can have up to 25 items.
  * metadata `object`: Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
  * shipping `object`: Shipping address for the order. Required if any of the SKUs are for products that have `shippable` set to true.

#### Output
* output [order](#order)

### GetOrdersId
<p>Retrieves the details of an existing order. Supply the unique order ID from either an order creation request or the order list, and Stripe will return the corresponding order information.</p>


```js
stripe.GetOrdersId({
  "id": ""
}, context)
```

#### Input
* input `object`
  * expand `array`: Specifies which fields in the response should be expanded.
  * id **required** `string`

#### Output
* output [order](#order)

### PostOrdersId
<p>Updates the specific order by setting the values of the parameters passed. Any parameters not provided will be left unchanged.</p>


```js
stripe.PostOrdersId({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`
  * coupon `string`: A coupon code that represents a discount to be applied to this order. Must be one-time duration and in same currency as the order. An order can have multiple coupons.
  * expand `array`: Specifies which fields in the response should be expanded.
  * selected_shipping_method `string`: The shipping method to select for fulfilling this order. If specified, must be one of the `id`s of a shipping method in the `shipping_methods` array. If specified, will overwrite the existing selected shipping method, updating `items` as necessary.
  * shipping `object`: Tracking information once the order has been fulfilled.
  * status `string` (values: canceled, created, fulfilled, paid, returned): Current order status. One of `created`, `paid`, `canceled`, `fulfilled`, or `returned`. More detail in the [Orders Guide](https://stripe.com/docs/orders/guide#understanding-order-statuses).

#### Output
* output [order](#order)

### PostOrdersIdPay
<p>Pay an order by providing a <code>source</code> to create a payment.</p>


```js
stripe.PostOrdersIdPay({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`
  * application_fee `integer`: A fee in %s that will be applied to the order and transferred to the application owner's Stripe account. The request must be made with an OAuth key or the `Stripe-Account` header in order to take an application fee. For more information, see the application fees [documentation](https://stripe.com/docs/connect/direct-charges#collecting-fees).
  * customer `string`: The ID of an existing customer that will be charged for this order. If no customer was attached to the order at creation, either `source` or `customer` is required. Otherwise, the specified customer will be charged instead of the one attached to the order.
  * email `string`: The email address of the customer placing the order. Required if not previously specified for the order.
  * expand `array`: Specifies which fields in the response should be expanded.
  * metadata `object`: Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
  * source `string`: A [Token](https://stripe.com/docs/api#tokens)'s or a [Source](https://stripe.com/docs/api#sources)'s ID, as returned by [Elements](https://stripe.com/docs/elements). If no customer was attached to the order at creation, either `source` or `customer` is required. Otherwise, the specified source will be charged intead of the customer attached to the order.

#### Output
* output [order](#order)

### PostOrdersIdReturns
<p>Return all or part of an order. The order must have a status of <code>paid</code> or <code>fulfilled</code> before it can be returned. Once all items have been returned, the order will become <code>canceled</code> or <code>returned</code> depending on which status the order started in.</p>


```js
stripe.PostOrdersIdReturns({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`
  * expand `array`: Specifies which fields in the response should be expanded.

#### Output
* output [order_return](#order_return)

### GetPaymentIntents
<p>Returns a list of PaymentIntents.</p>


```js
stripe.GetPaymentIntents({}, context)
```

#### Input
* input `object`
  * customer `string`: Only return PaymentIntents for the customer specified by this customer ID.
  * ending_before `string`: A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
  * expand `array`: Specifies which fields in the response should be expanded.
  * limit `integer`: A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
  * starting_after `string`: A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.

#### Output
* output `object`
  * data **required** `array`
    * items [payment_intent](#payment_intent)
  * has_more **required** `boolean`: True if this list has another page of items after this one that can be fetched.
  * object **required** `string` (values: list): String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
  * url **required** `string`: The URL where this list can be accessed.

### PostPaymentIntents
<p>Creates a PaymentIntent object.</p>

<p>After the PaymentIntent is created, attach a payment method and <a href="/docs/api/payment_intents/confirm">confirm</a>
to continue the payment. You can read more about the different payment flows
available via the Payment Intents API <a href="/docs/payments/payment-intents">here</a>.</p>

<p>When <code>confirm=true</code> is used during creation, it is equivalent to creating
and confirming the PaymentIntent in the same call. You may use any parameters
available in the <a href="/docs/api/payment_intents/confirm">confirm API</a> when <code>confirm=true</code>
is supplied.</p>


```js
stripe.PostPaymentIntents({
  "amount": 0,
  "currency": ""
}, context)
```

#### Input
* input `object`
  * amount **required** `integer`: Amount intended to be collected by this PaymentIntent. A positive integer representing how much to charge in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal) (e.g., 100 cents to charge $1.00 or 100 to charge ¥100, a zero-decimal currency). The minimum amount is $0.50 US or [equivalent in charge currency](https://stripe.com/docs/currencies#minimum-and-maximum-charge-amounts). The amount value supports up to eight digits (e.g., a value of 99999999 for a USD charge of $999,999.99).
  * application_fee_amount `integer`: The amount of the application fee (if any) that will be requested to be applied to the payment and transferred to the application owner's Stripe account. The amount of the application fee collected will be capped at the total payment amount. For more information, see the PaymentIntents [use case for connected accounts](https://stripe.com/docs/payments/connected-accounts).
  * capture_method `string` (values: automatic, manual): Controls when the funds will be captured from the customer's account.
  * confirm `boolean`: Set to `true` to attempt to [confirm](https://stripe.com/docs/api/payment_intents/confirm) this PaymentIntent immediately. This parameter defaults to `false`. When creating and confirming a PaymentIntent at the same time, parameters available in the [confirm](https://stripe.com/docs/api/payment_intents/confirm) API may also be provided.
  * confirmation_method `string` (values: automatic, manual)
  * currency **required** `string`: Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
  * customer `string`: ID of the Customer this PaymentIntent belongs to, if one exists.
  * description `string`: An arbitrary string attached to the object. Often useful for displaying to users.
  * error_on_requires_action `boolean`: Set to `true` to fail the payment attempt if the PaymentIntent transitions into `requires_action`. This parameter is intended for simpler integrations that do not handle customer actions, like [saving cards without authentication](https://stripe.com/docs/payments/save-card-without-authentication). This parameter can only be used with [`confirm=true`](https://stripe.com/docs/api/payment_intents/create#create_payment_intent-confirm).
  * expand `array`: Specifies which fields in the response should be expanded.
  * mandate `string`: ID of the mandate to be used for this payment. This parameter can only be used with [`confirm=true`](https://stripe.com/docs/api/payment_intents/create#create_payment_intent-confirm).
  * mandate_data `object`: This hash contains details about the Mandate to create. This parameter can only be used with [`confirm=true`](https://stripe.com/docs/api/payment_intents/create#create_payment_intent-confirm).
  * metadata `object`: Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
  * on_behalf_of `string`: The Stripe account ID for which these funds are intended. For details, see the PaymentIntents [use case for connected accounts](https://stripe.com/docs/payments/connected-accounts).
  * payment_method `string`: ID of the payment method (a PaymentMethod, Card, or [compatible Source](https://stripe.com/docs/payments/payment-methods#compatibility) object) to attach to this PaymentIntent.
  * payment_method_data `object`: If provided, this hash will be used to create a PaymentMethod. The new PaymentMethod will appear
  * payment_method_options `object`: Payment-method-specific configuration for this PaymentIntent.
  * payment_method_types `array`: The list of payment method types (e.g. card) that this PaymentIntent is allowed to use. If this is not provided, defaults to ["card"].
  * receipt_email `string`: Email address that the receipt for the resulting payment will be sent to. If `receipt_email` is specified for a payment in live mode, a receipt will be sent regardless of your [email settings](https://dashboard.stripe.com/account/emails).
  * return_url `string`: The URL to redirect your customer back to after they authenticate or cancel their payment on the payment method's app or site. If you'd prefer to redirect to a mobile application, you can alternatively supply an application URI scheme. This parameter can only be used with [`confirm=true`](https://stripe.com/docs/api/payment_intents/create#create_payment_intent-confirm).
  * setup_future_usage `string` (values: off_session, on_session): Indicates that you intend to make future payments with this PaymentIntent's payment method.
  * shipping `object`: Shipping information for this PaymentIntent.
  * statement_descriptor `string`: For non-card charges, you can use this value as the complete description that appears on your customers’ statements. Must contain at least one letter, maximum 22 characters.
  * statement_descriptor_suffix `string`: Provides information about a card payment that customers see on their statements. Concatenated with the prefix (shortened descriptor) or statement descriptor that’s set on the account to form the complete statement descriptor. Maximum 22 characters for the concatenated descriptor.
  * transfer_data `object`: The parameters used to automatically create a Transfer when the payment succeeds.
  * transfer_group `string`: A string that identifies the resulting payment as part of a group. See the PaymentIntents [use case for connected accounts](https://stripe.com/docs/payments/connected-accounts) for details.
  * use_stripe_sdk `boolean`: Set to `true` only when using manual confirmation and the iOS or Android SDKs to handle additional authentication steps.

#### Output
* output [payment_intent](#payment_intent)

### GetPaymentIntentsIntent
<p>Retrieves the details of a PaymentIntent that has previously been created. </p>

<p>Client-side retrieval using a publishable key is allowed when the <code>client_secret</code> is provided in the query string. </p>

<p>When retrieved with a publishable key, only a subset of properties will be returned. Please refer to the <a href="#payment_intent_object">payment intent</a> object reference for more details.</p>


```js
stripe.GetPaymentIntentsIntent({
  "intent": ""
}, context)
```

#### Input
* input `object`
  * client_secret `string`: The client secret of the PaymentIntent. Required if a publishable key is used to retrieve the source.
  * expand `array`: Specifies which fields in the response should be expanded.
  * intent **required** `string`

#### Output
* output [payment_intent](#payment_intent)

### PostPaymentIntentsIntent
<p>Updates properties on a PaymentIntent object without confirming.</p>

<p>Depending on which properties you update, you may need to confirm the
PaymentIntent again. For example, updating the <code>payment_method</code> will
always require you to confirm the PaymentIntent again. If you prefer to
update and confirm at the same time, we recommend updating properties via
the <a href="/docs/api/payment_intents/confirm">confirm API</a> instead.</p>


```js
stripe.PostPaymentIntentsIntent({
  "intent": ""
}, context)
```

#### Input
* input `object`
  * intent **required** `string`
  * amount `integer`: Amount intended to be collected by this PaymentIntent. A positive integer representing how much to charge in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal) (e.g., 100 cents to charge $1.00 or 100 to charge ¥100, a zero-decimal currency). The minimum amount is $0.50 US or [equivalent in charge currency](https://stripe.com/docs/currencies#minimum-and-maximum-charge-amounts). The amount value supports up to eight digits (e.g., a value of 99999999 for a USD charge of $999,999.99).
  * currency `string`: Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
  * customer `string`: ID of the Customer this PaymentIntent belongs to, if one exists.
  * description `string`: An arbitrary string attached to the object. Often useful for displaying to users.
  * expand `array`: Specifies which fields in the response should be expanded.
  * payment_method `string`: ID of the payment method (a PaymentMethod, Card, or [compatible Source](https://stripe.com/docs/payments/payment-methods#compatibility) object) to attach to this PaymentIntent.
  * payment_method_data `object`: If provided, this hash will be used to create a PaymentMethod. The new PaymentMethod will appear
  * payment_method_options `object`: Payment-method-specific configuration for this PaymentIntent.
  * payment_method_types `array`: The list of payment method types (e.g. card) that this PaymentIntent is allowed to use.
  * setup_future_usage `string` (values: , off_session, on_session): Indicates that you intend to make future payments with this PaymentIntent's payment method.
  * statement_descriptor `string`: For non-card charges, you can use this value as the complete description that appears on your customers’ statements. Must contain at least one letter, maximum 22 characters.
  * statement_descriptor_suffix `string`: Provides information about a card payment that customers see on their statements. Concatenated with the prefix (shortened descriptor) or statement descriptor that’s set on the account to form the complete statement descriptor. Maximum 22 characters for the concatenated descriptor.
  * transfer_data `object`: The parameters used to automatically create a Transfer when the payment succeeds. For more information, see the PaymentIntents [use case for connected accounts](https://stripe.com/docs/payments/connected-accounts).
  * transfer_group `string`: A string that identifies the resulting payment as part of a group. `transfer_group` may only be provided if it has not been set. See the PaymentIntents [use case for connected accounts](https://stripe.com/docs/payments/connected-accounts) for details.

#### Output
* output [payment_intent](#payment_intent)

### PostPaymentIntentsIntentCancel
<p>A PaymentIntent object can be canceled when it is in one of these statuses: <code>requires_payment_method</code>, <code>requires_capture</code>, <code>requires_confirmation</code>, or <code>requires_action</code>. </p>

<p>Once canceled, no additional charges will be made by the PaymentIntent and any operations on the PaymentIntent will fail with an error. For PaymentIntents with <code>status=’requires_capture’</code>, the remaining <code>amount_capturable</code> will automatically be refunded.</p>


```js
stripe.PostPaymentIntentsIntentCancel({
  "intent": ""
}, context)
```

#### Input
* input `object`
  * intent **required** `string`
  * cancellation_reason `string` (values: abandoned, duplicate, fraudulent, requested_by_customer): Reason for canceling this PaymentIntent. Possible values are `duplicate`, `fraudulent`, `requested_by_customer`, or `abandoned`
  * expand `array`: Specifies which fields in the response should be expanded.

#### Output
* output [payment_intent](#payment_intent)

### PostPaymentIntentsIntentCapture
<p>Capture the funds of an existing uncaptured PaymentIntent when its status is <code>requires_capture</code>.</p>

<p>Uncaptured PaymentIntents will be canceled exactly seven days after they are created.</p>

<p>Learn more about <a href="/docs/payments/capture-later">separate authorization and capture</a>.</p>


```js
stripe.PostPaymentIntentsIntentCapture({
  "intent": ""
}, context)
```

#### Input
* input `object`
  * intent **required** `string`
  * amount_to_capture `integer`: The amount to capture from the PaymentIntent, which must be less than or equal to the original amount. Any additional amount will be automatically refunded. Defaults to the full `amount_capturable` if not provided.
  * application_fee_amount `integer`: The amount of the application fee (if any) that will be requested to be applied to the payment and transferred to the application owner's Stripe account. The amount of the application fee collected will be capped at the total payment amount. For more information, see the PaymentIntents [use case for connected accounts](https://stripe.com/docs/payments/connected-accounts).
  * expand `array`: Specifies which fields in the response should be expanded.
  * statement_descriptor `string`: For non-card charges, you can use this value as the complete description that appears on your customers’ statements. Must contain at least one letter, maximum 22 characters.
  * statement_descriptor_suffix `string`: Provides information about a card payment that customers see on their statements. Concatenated with the prefix (shortened descriptor) or statement descriptor that’s set on the account to form the complete statement descriptor. Maximum 22 characters for the concatenated descriptor.
  * transfer_data `object`: The parameters used to automatically create a Transfer when the payment

#### Output
* output [payment_intent](#payment_intent)

### PostPaymentIntentsIntentConfirm
<p>Confirm that your customer intends to pay with current or provided
payment method. Upon confirmation, the PaymentIntent will attempt to initiate
a payment.</p>

<p>If the selected payment method requires additional authentication steps, the
PaymentIntent will transition to the <code>requires_action</code> status and
suggest additional actions via <code>next_action</code>. If payment fails,
the PaymentIntent will transition to the <code>requires_payment_method</code> status. If
payment succeeds, the PaymentIntent will transition to the <code>succeeded</code>
status (or <code>requires_capture</code>, if <code>capture_method</code> is set to <code>manual</code>).</p>

<p>If the <code>confirmation_method</code> is <code>automatic</code>, payment may be attempted
using our <a href="/docs/stripe-js/reference#stripe-handle-card-payment">client SDKs</a>
and the PaymentIntent’s <a href="#payment_intent_object-client_secret">client_secret</a>.
After <code>next_action</code>s are handled by the client, no additional
confirmation is required to complete the payment.</p>

<p>If the <code>confirmation_method</code> is <code>manual</code>, all payment attempts must be
initiated using a secret key.
If any actions are required for the payment, the PaymentIntent will
return to the <code>requires_confirmation</code> state
after those actions are completed. Your server needs to then
explicitly re-confirm the PaymentIntent to initiate the next payment
attempt. Read the <a href="/docs/payments/payment-intents/web-manual">expanded documentation</a>
to learn more about manual confirmation.</p>


```js
stripe.PostPaymentIntentsIntentConfirm({
  "intent": ""
}, context)
```

#### Input
* input `object`
  * intent **required** `string`
  * client_secret `string`: The client secret of the PaymentIntent.
  * error_on_requires_action `boolean`: Set to `true` to fail the payment attempt if the PaymentIntent transitions into `requires_action`. This parameter is intended for simpler integrations that do not handle customer actions, like [saving cards without authentication](https://stripe.com/docs/payments/save-card-without-authentication).
  * expand `array`: Specifies which fields in the response should be expanded.
  * mandate `string`: ID of the mandate to be used for this payment.
  * payment_method `string`: ID of the payment method (a PaymentMethod, Card, or [compatible Source](https://stripe.com/docs/payments/payment-methods#compatibility) object) to attach to this PaymentIntent.
  * payment_method_data `object`: If provided, this hash will be used to create a PaymentMethod. The new PaymentMethod will appear
  * payment_method_options `object`: Payment-method-specific configuration for this PaymentIntent.
  * payment_method_types `array`: The list of payment method types (e.g. card) that this PaymentIntent is allowed to use.
  * return_url `string`: The URL to redirect your customer back to after they authenticate or cancel their payment on the payment method's app or site.
  * setup_future_usage `string` (values: , off_session, on_session): Indicates that you intend to make future payments with this PaymentIntent's payment method.
  * use_stripe_sdk `boolean`: Set to `true` only when using manual confirmation and the iOS or Android SDKs to handle additional authentication steps.

#### Output
* output [payment_intent](#payment_intent)

### GetPaymentMethods
<p>Returns a list of PaymentMethods for a given Customer</p>


```js
stripe.GetPaymentMethods({
  "customer": "",
  "type": ""
}, context)
```

#### Input
* input `object`
  * customer **required** `string`: The ID of the customer whose PaymentMethods will be retrieved.
  * ending_before `string`: A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
  * expand `array`: Specifies which fields in the response should be expanded.
  * limit `integer`: A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
  * starting_after `string`: A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
  * type **required** `string` (values: alipay, au_becs_debit, bacs_debit, bancontact, card, eps, fpx, giropay, grabpay, ideal, oxxo, p24, sepa_debit, sofort): A required filter on the list, based on the object `type` field.

#### Output
* output `object`
  * data **required** `array`
    * items [payment_method](#payment_method)
  * has_more **required** `boolean`: True if this list has another page of items after this one that can be fetched.
  * object **required** `string` (values: list): String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
  * url **required** `string`: The URL where this list can be accessed.

### PostPaymentMethods
<p>Creates a PaymentMethod object. Read the <a href="/docs/stripe-js/reference#stripe-create-payment-method">Stripe.js reference</a> to learn how to create PaymentMethods via Stripe.js.</p>


```js
stripe.PostPaymentMethods({}, context)
```

#### Input
* input `object`
  * alipay `object`: If this is an `Alipay` PaymentMethod, this hash contains details about the Alipay payment method.
  * au_becs_debit `object`: If this is an `au_becs_debit` PaymentMethod, this hash contains details about the bank account.
  * bacs_debit `object`: If this is a `bacs_debit` PaymentMethod, this hash contains details about the Bacs Direct Debit bank account.
  * bancontact `object`: If this is a `bancontact` PaymentMethod, this hash contains details about the Bancontact payment method.
  * billing_details `object`: Billing information associated with the PaymentMethod that may be used or required by particular types of payment methods.
  * customer `string`: The `Customer` to whom the original PaymentMethod is attached.
  * eps `object`: If this is an `eps` PaymentMethod, this hash contains details about the EPS payment method.
  * expand `array`: Specifies which fields in the response should be expanded.
  * fpx `object`: If this is an `fpx` PaymentMethod, this hash contains details about the FPX payment method.
  * giropay `object`: If this is a `giropay` PaymentMethod, this hash contains details about the Giropay payment method.
  * grabpay `object`: If this is a `grabpay` PaymentMethod, this hash contains details about the GrabPay payment method.
  * ideal `object`: If this is an `ideal` PaymentMethod, this hash contains details about the iDEAL payment method.
  * interac_present `object`: If this is an `interac_present` PaymentMethod, this hash contains details about the Interac Present payment method.
  * metadata `object`: Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
  * oxxo `object`: If this is an `oxxo` PaymentMethod, this hash contains details about the OXXO payment method.
  * p24 `object`: If this is a `p24` PaymentMethod, this hash contains details about the P24 payment method.
  * payment_method `string`: The PaymentMethod to share.
  * sepa_debit `object`: If this is a `sepa_debit` PaymentMethod, this hash contains details about the SEPA debit bank account.
  * sofort `object`: If this is a `sofort` PaymentMethod, this hash contains details about the SOFORT payment method.
  * type `string` (values: alipay, au_becs_debit, bacs_debit, bancontact, card, eps, fpx, giropay, grabpay, ideal, oxxo, p24, sepa_debit, sofort): The type of the PaymentMethod. An additional hash is included on the PaymentMethod with a name matching this value. It contains additional information specific to the PaymentMethod type.

#### Output
* output [payment_method](#payment_method)

### GetPaymentMethodsPaymentMethod
<p>Retrieves a PaymentMethod object.</p>


```js
stripe.GetPaymentMethodsPaymentMethod({
  "payment_method": ""
}, context)
```

#### Input
* input `object`
  * expand `array`: Specifies which fields in the response should be expanded.
  * payment_method **required** `string`

#### Output
* output [payment_method](#payment_method)

### PostPaymentMethodsPaymentMethod
<p>Updates a PaymentMethod object. A PaymentMethod must be attached a customer to be updated.</p>


```js
stripe.PostPaymentMethodsPaymentMethod({
  "payment_method": ""
}, context)
```

#### Input
* input `object`
  * payment_method **required** `string`
  * billing_details `object`: Billing information associated with the PaymentMethod that may be used or required by particular types of payment methods.
  * card `object`: If this is a `card` PaymentMethod, this hash contains the user's card details.
  * expand `array`: Specifies which fields in the response should be expanded.

#### Output
* output [payment_method](#payment_method)

### PostPaymentMethodsPaymentMethodAttach
<p>Attaches a PaymentMethod object to a Customer.</p>

<p>To attach a new PaymentMethod to a customer for future payments, we recommend you use a <a href="/docs/api/setup_intents">SetupIntent</a>
or a PaymentIntent with <a href="/docs/api/payment_intents/create#create_payment_intent-setup_future_usage">setup_future_usage</a>.
These approaches will perform any necessary steps to ensure that the PaymentMethod can be used in a future payment. Using the
<code>/v1/payment_methods/:id/attach</code> endpoint does not ensure that future payments can be made with the attached PaymentMethod.
See <a href="/docs/payments/payment-intents#future-usage">Optimizing cards for future payments</a> for more information about setting up future payments.</p>

<p>To use this PaymentMethod as the default for invoice or subscription payments,
set <a href="/docs/api/customers/update#update_customer-invoice_settings-default_payment_method"><code>invoice_settings.default_payment_method</code></a>,
on the Customer to the PaymentMethod’s ID.</p>


```js
stripe.PostPaymentMethodsPaymentMethodAttach({
  "payment_method": "",
  "customer": ""
}, context)
```

#### Input
* input `object`
  * payment_method **required** `string`
  * customer **required** `string`: The ID of the customer to which to attach the PaymentMethod.
  * expand `array`: Specifies which fields in the response should be expanded.

#### Output
* output [payment_method](#payment_method)

### PostPaymentMethodsPaymentMethodDetach
<p>Detaches a PaymentMethod object from a Customer.</p>


```js
stripe.PostPaymentMethodsPaymentMethodDetach({
  "payment_method": ""
}, context)
```

#### Input
* input `object`
  * payment_method **required** `string`
  * expand `array`: Specifies which fields in the response should be expanded.

#### Output
* output [payment_method](#payment_method)

### GetPayouts
<p>Returns a list of existing payouts sent to third-party bank accounts or that Stripe has sent you. The payouts are returned in sorted order, with the most recently created payouts appearing first.</p>


```js
stripe.GetPayouts({}, context)
```

#### Input
* input `object`
  * destination `string`: The ID of an external account - only return payouts sent to this external account.
  * ending_before `string`: A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
  * expand `array`: Specifies which fields in the response should be expanded.
  * limit `integer`: A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
  * starting_after `string`: A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
  * status `string`: Only return payouts that have the given status: `pending`, `paid`, `failed`, or `canceled`.

#### Output
* output `object`
  * data **required** `array`
    * items [payout](#payout)
  * has_more **required** `boolean`: True if this list has another page of items after this one that can be fetched.
  * object **required** `string` (values: list): String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
  * url **required** `string`: The URL where this list can be accessed.

### PostPayouts
<p>To send funds to your own bank account, you create a new payout object. Your <a href="#balance">Stripe balance</a> must be able to cover the payout amount, or you’ll receive an “Insufficient Funds” error.</p>

<p>If your API key is in test mode, money won’t actually be sent, though everything else will occur as if in live mode.</p>

<p>If you are creating a manual payout on a Stripe account that uses multiple payment source types, you’ll need to specify the source type balance that the payout should draw from. The <a href="#balance_object">balance object</a> details available and pending amounts by source type.</p>


```js
stripe.PostPayouts({
  "amount": 0,
  "currency": ""
}, context)
```

#### Input
* input `object`
  * amount **required** `integer`: A positive integer in cents representing how much to payout.
  * currency **required** `string`: Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
  * description `string`: An arbitrary string attached to the object. Often useful for displaying to users.
  * destination `string`: The ID of a bank account or a card to send the payout to. If no destination is supplied, the default external account for the specified currency will be used.
  * expand `array`: Specifies which fields in the response should be expanded.
  * metadata `object`: Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
  * method `string` (values: instant, standard): The method used to send this payout, which can be `standard` or `instant`. `instant` is only supported for payouts to debit cards. (See [Instant payouts for marketplaces for more information](https://stripe.com/blog/instant-payouts-for-marketplaces).)
  * source_type `string` (values: bank_account, card, fpx): The balance type of your Stripe balance to draw this payout from. Balances for different payment sources are kept separately. You can find the amounts with the balances API. One of `bank_account`, `card`, or `fpx`.
  * statement_descriptor `string`: A string to be displayed on the recipient's bank or card statement. This may be at most 22 characters. Attempting to use a `statement_descriptor` longer than 22 characters will return an error. Note: Most banks will truncate this information and/or display it inconsistently. Some may not display it at all.

#### Output
* output [payout](#payout)

### GetPayoutsPayout
<p>Retrieves the details of an existing payout. Supply the unique payout ID from either a payout creation request or the payout list, and Stripe will return the corresponding payout information.</p>


```js
stripe.GetPayoutsPayout({
  "payout": ""
}, context)
```

#### Input
* input `object`
  * expand `array`: Specifies which fields in the response should be expanded.
  * payout **required** `string`

#### Output
* output [payout](#payout)

### PostPayoutsPayout
<p>Updates the specified payout by setting the values of the parameters passed. Any parameters not provided will be left unchanged. This request accepts only the metadata as arguments.</p>


```js
stripe.PostPayoutsPayout({
  "payout": ""
}, context)
```

#### Input
* input `object`
  * payout **required** `string`
  * expand `array`: Specifies which fields in the response should be expanded.

#### Output
* output [payout](#payout)

### PostPayoutsPayoutCancel
<p>A previously created payout can be canceled if it has not yet been paid out. Funds will be refunded to your available balance. You may not cancel automatic Stripe payouts.</p>


```js
stripe.PostPayoutsPayoutCancel({
  "payout": ""
}, context)
```

#### Input
* input `object`
  * payout **required** `string`
  * expand `array`: Specifies which fields in the response should be expanded.

#### Output
* output [payout](#payout)

### PostPayoutsPayoutReverse
<p>Reverses a payout by debiting the destination bank account. Only payouts for connected accounts to US bank accounts may be reversed at this time. If the payout is in the <code>pending</code> status, <code>/v1/payouts/:id/cancel</code> should be used instead.</p>

<p>By requesting a reversal via <code>/v1/payouts/:id/reverse</code>, you confirm that the authorized signatory of the selected bank account has authorized the debit on the bank account and that no other authorization is required.</p>


```js
stripe.PostPayoutsPayoutReverse({
  "payout": ""
}, context)
```

#### Input
* input `object`
  * payout **required** `string`
  * expand `array`: Specifies which fields in the response should be expanded.
  * metadata `object`: Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.

#### Output
* output [payout](#payout)

### GetPlans
<p>Returns a list of your plans.</p>


```js
stripe.GetPlans({}, context)
```

#### Input
* input `object`
  * active `boolean`: Only return plans that are active or inactive (e.g., pass `false` to list all inactive plans).
  * ending_before `string`: A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
  * expand `array`: Specifies which fields in the response should be expanded.
  * limit `integer`: A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
  * product `string`: Only return plans for the given product.
  * starting_after `string`: A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.

#### Output
* output `object`
  * data **required** `array`: Details about each object.
    * items [plan](#plan)
  * has_more **required** `boolean`: True if this list has another page of items after this one that can be fetched.
  * object **required** `string` (values: list): String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
  * url **required** `string`: The URL where this list can be accessed.

### PostPlans
<p>You can now model subscriptions more flexibly using the <a href="#prices">Prices API</a>. It replaces the Plans API and is backwards compatible to simplify your migration.</p>


```js
stripe.PostPlans({
  "currency": "",
  "interval": ""
}, context)
```

#### Input
* input `object`
  * active `boolean`: Whether the plan is currently available for new subscriptions. Defaults to `true`.
  * aggregate_usage `string` (values: last_during_period, last_ever, max, sum): Specifies a usage aggregation strategy for plans of `usage_type=metered`. Allowed values are `sum` for summing up all usage during a period, `last_during_period` for using the last usage record reported within a period, `last_ever` for using the last usage record ever (across period bounds) or `max` which uses the usage record with the maximum reported usage during a period. Defaults to `sum`.
  * amount `integer`: A positive integer in %s (or 0 for a free plan) representing how much to charge on a recurring basis.
  * amount_decimal `string`: Same as `amount`, but accepts a decimal value with at most 12 decimal places. Only one of `amount` and `amount_decimal` can be set.
  * billing_scheme `string` (values: per_unit, tiered): Describes how to compute the price per period. Either `per_unit` or `tiered`. `per_unit` indicates that the fixed amount (specified in `amount`) will be charged per unit in `quantity` (for plans with `usage_type=licensed`), or per unit of total usage (for plans with `usage_type=metered`). `tiered` indicates that the unit pricing will be computed using a tiering strategy as defined using the `tiers` and `tiers_mode` attributes.
  * currency **required** `string`: Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
  * expand `array`: Specifies which fields in the response should be expanded.
  * id `string`: An identifier randomly generated by Stripe. Used to identify this plan when subscribing a customer. You can optionally override this ID, but the ID must be unique across all plans in your Stripe account. You can, however, use the same plan ID in both live and test modes.
  * interval **required** `string` (values: day, month, week, year): Specifies billing frequency. Either `day`, `week`, `month` or `year`.
  * interval_count `integer`: The number of intervals between subscription billings. For example, `interval=month` and `interval_count=3` bills every 3 months. Maximum of one year interval allowed (1 year, 12 months, or 52 weeks).
  * nickname `string`: A brief description of the plan, hidden from customers.
  * tiers `array`: Each element represents a pricing tier. This parameter requires `billing_scheme` to be set to `tiered`. See also the documentation for `billing_scheme`.
  * tiers_mode `string` (values: graduated, volume): Defines if the tiering price should be `graduated` or `volume` based. In `volume`-based tiering, the maximum quantity within a period determines the per unit price, in `graduated` tiering pricing can successively change as the quantity grows.
  * transform_usage `object`: Apply a transformation to the reported usage or set quantity before computing the billed price. Cannot be combined with `tiers`.
  * trial_period_days `integer`: Default number of trial days when subscribing a customer to this plan using [`trial_from_plan=true`](https://stripe.com/docs/api#create_subscription-trial_from_plan).
  * usage_type `string` (values: licensed, metered): Configures how the quantity per period should be determined. Can be either `metered` or `licensed`. `licensed` automatically bills the `quantity` set when adding it to a subscription. `metered` aggregates the total usage based on usage records. Defaults to `licensed`.

#### Output
* output [plan](#plan)

### DeletePlansPlan
<p>Deleting plans means new subscribers can’t be added. Existing subscribers aren’t affected.</p>


```js
stripe.DeletePlansPlan({
  "plan": ""
}, context)
```

#### Input
* input `object`
  * plan **required** `string`

#### Output
* output [deleted_plan](#deleted_plan)

### GetPlansPlan
<p>Retrieves the plan with the given ID.</p>


```js
stripe.GetPlansPlan({
  "plan": ""
}, context)
```

#### Input
* input `object`
  * expand `array`: Specifies which fields in the response should be expanded.
  * plan **required** `string`

#### Output
* output [plan](#plan)

### PostPlansPlan
<p>Updates the specified plan by setting the values of the parameters passed. Any parameters not provided are left unchanged. By design, you cannot change a plan’s ID, amount, currency, or billing cycle.</p>


```js
stripe.PostPlansPlan({
  "plan": ""
}, context)
```

#### Input
* input `object`
  * plan **required** `string`
  * active `boolean`: Whether the plan is currently available for new subscriptions.
  * expand `array`: Specifies which fields in the response should be expanded.
  * nickname `string`: A brief description of the plan, hidden from customers.
  * product `string`: The product the plan belongs to. This cannot be changed once it has been used in a subscription or subscription schedule.
  * trial_period_days `integer`: Default number of trial days when subscribing a customer to this plan using [`trial_from_plan=true`](https://stripe.com/docs/api#create_subscription-trial_from_plan).

#### Output
* output [plan](#plan)

### GetPrices
<p>Returns a list of your prices.</p>


```js
stripe.GetPrices({}, context)
```

#### Input
* input `object`
  * active `boolean`: Only return prices that are active or inactive (e.g., pass `false` to list all inactive prices).
  * currency `string`: Only return prices for the given currency.
  * ending_before `string`: A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
  * expand `array`: Specifies which fields in the response should be expanded.
  * limit `integer`: A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
  * lookup_keys `array`: Only return the price with these lookup_keys, if any exist.
  * product `string`: Only return prices for the given product.
  * recurring `object`: Only return prices with these recurring fields.
  * starting_after `string`: A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
  * type `string` (values: one_time, recurring): Only return prices of type `recurring` or `one_time`.

#### Output
* output `object`
  * data **required** `array`: Details about each object.
    * items [price](#price)
  * has_more **required** `boolean`: True if this list has another page of items after this one that can be fetched.
  * object **required** `string` (values: list): String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
  * url **required** `string`: The URL where this list can be accessed.

### PostPrices
<p>Creates a new price for an existing product. The price can be recurring or one-time.</p>


```js
stripe.PostPrices({
  "currency": ""
}, context)
```

#### Input
* input `object`
  * active `boolean`: Whether the price can be used for new purchases. Defaults to `true`.
  * billing_scheme `string` (values: per_unit, tiered): Describes how to compute the price per period. Either `per_unit` or `tiered`. `per_unit` indicates that the fixed amount (specified in `unit_amount` or `unit_amount_decimal`) will be charged per unit in `quantity` (for prices with `usage_type=licensed`), or per unit of total usage (for prices with `usage_type=metered`). `tiered` indicates that the unit pricing will be computed using a tiering strategy as defined using the `tiers` and `tiers_mode` attributes.
  * currency **required** `string`: Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
  * expand `array`: Specifies which fields in the response should be expanded.
  * lookup_key `string`: A lookup key used to retrieve prices dynamically from a static string.
  * metadata `object`: Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
  * nickname `string`: A brief description of the price, hidden from customers.
  * product `string`: The ID of the product that this price will belong to.
  * product_data `object`: These fields can be used to create a new product that this price will belong to.
  * recurring `object`: The recurring components of a price such as `interval` and `usage_type`.
  * tiers `array`: Each element represents a pricing tier. This parameter requires `billing_scheme` to be set to `tiered`. See also the documentation for `billing_scheme`.
  * tiers_mode `string` (values: graduated, volume): Defines if the tiering price should be `graduated` or `volume` based. In `volume`-based tiering, the maximum quantity within a period determines the per unit price, in `graduated` tiering pricing can successively change as the quantity grows.
  * transfer_lookup_key `boolean`: If set to true, will atomically remove the lookup key from the existing price, and assign it to this price.
  * transform_quantity `object`: Apply a transformation to the reported usage or set quantity before computing the billed price. Cannot be combined with `tiers`.
  * unit_amount `integer`: A positive integer in %s (or 0 for a free price) representing how much to charge.
  * unit_amount_decimal `string`: Same as `unit_amount`, but accepts a decimal value in %s with at most 12 decimal places. Only one of `unit_amount` and `unit_amount_decimal` can be set.

#### Output
* output [price](#price)

### GetPricesPrice
<p>Retrieves the price with the given ID.</p>


```js
stripe.GetPricesPrice({
  "price": ""
}, context)
```

#### Input
* input `object`
  * expand `array`: Specifies which fields in the response should be expanded.
  * price **required** `string`

#### Output
* output [price](#price)

### PostPricesPrice
<p>Updates the specified price by setting the values of the parameters passed. Any parameters not provided are left unchanged.</p>


```js
stripe.PostPricesPrice({
  "price": ""
}, context)
```

#### Input
* input `object`
  * price **required** `string`
  * active `boolean`: Whether the price can be used for new purchases. Defaults to `true`.
  * expand `array`: Specifies which fields in the response should be expanded.
  * lookup_key `string`: A lookup key used to retrieve prices dynamically from a static string.
  * nickname `string`: A brief description of the price, hidden from customers.
  * transfer_lookup_key `boolean`: If set to true, will atomically remove the lookup key from the existing price, and assign it to this price.

#### Output
* output [price](#price)

### GetProducts
<p>Returns a list of your products. The products are returned sorted by creation date, with the most recently created products appearing first.</p>


```js
stripe.GetProducts({}, context)
```

#### Input
* input `object`
  * active `boolean`: Only return products that are active or inactive (e.g., pass `false` to list all inactive products).
  * ending_before `string`: A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
  * expand `array`: Specifies which fields in the response should be expanded.
  * ids `array`: Only return products with the given IDs.
  * limit `integer`: A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
  * shippable `boolean`: Only return products that can be shipped (i.e., physical, not digital products).
  * starting_after `string`: A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
  * url `string`: Only return products with the given url.

#### Output
* output `object`
  * data **required** `array`
    * items [product](#product)
  * has_more **required** `boolean`: True if this list has another page of items after this one that can be fetched.
  * object **required** `string` (values: list): String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
  * url **required** `string`: The URL where this list can be accessed.

### PostProducts
<p>Creates a new product object.</p>


```js
stripe.PostProducts({
  "name": ""
}, context)
```

#### Input
* input `object`
  * active `boolean`: Whether the product is currently available for purchase. Defaults to `true`.
  * attributes `array`: A list of up to 5 alphanumeric attributes. Should only be set if type=`good`.
  * caption `string`: A short one-line description of the product, meant to be displayable to the customer. May only be set if type=`good`.
  * deactivate_on `array`: An array of Connect application names or identifiers that should not be able to order the SKUs for this product. May only be set if type=`good`.
  * description `string`: The product's description, meant to be displayable to the customer. Use this field to optionally store a long form explanation of the product being sold for your own rendering purposes.
  * expand `array`: Specifies which fields in the response should be expanded.
  * id `string`: An identifier will be randomly generated by Stripe. You can optionally override this ID, but the ID must be unique across all products in your Stripe account.
  * images `array`: A list of up to 8 URLs of images for this product, meant to be displayable to the customer.
  * metadata `object`: Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
  * name **required** `string`: The product's name, meant to be displayable to the customer. Whenever this product is sold via a subscription, name will show up on associated invoice line item descriptions.
  * package_dimensions `object`: The dimensions of this product for shipping purposes. A SKU associated with this product can override this value by having its own `package_dimensions`. May only be set if type=`good`.
  * shippable `boolean`: Whether this product is shipped (i.e., physical goods). Defaults to `true`. May only be set if type=`good`.
  * statement_descriptor `string`: An arbitrary string to be displayed on your customer's credit card or bank statement. While most banks display this information consistently, some may display it incorrectly or not at all.
  * unit_label `string`: A label that represents units of this product in Stripe and on customers’ receipts and invoices. When set, this will be included in associated invoice line item descriptions.
  * url `string`: A URL of a publicly-accessible webpage for this product. May only be set if type=`good`.

#### Output
* output [product](#product)

### DeleteProductsId
<p>Delete a product. Deleting a product is only possible if it has no prices associated with it. Additionally, deleting a product with <code>type=good</code> is only possible if it has no SKUs associated with it.</p>


```js
stripe.DeleteProductsId({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
* output [deleted_product](#deleted_product)

### GetProductsId
<p>Retrieves the details of an existing product. Supply the unique product ID from either a product creation request or the product list, and Stripe will return the corresponding product information.</p>


```js
stripe.GetProductsId({
  "id": ""
}, context)
```

#### Input
* input `object`
  * expand `array`: Specifies which fields in the response should be expanded.
  * id **required** `string`

#### Output
* output [product](#product)

### PostProductsId
<p>Updates the specific product by setting the values of the parameters passed. Any parameters not provided will be left unchanged.</p>


```js
stripe.PostProductsId({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`
  * active `boolean`: Whether the product is available for purchase.
  * caption `string`: A short one-line description of the product, meant to be displayable to the customer. May only be set if `type=good`.
  * deactivate_on `array`: An array of Connect application names or identifiers that should not be able to order the SKUs for this product. May only be set if `type=good`.
  * description `string`: The product's description, meant to be displayable to the customer. Use this field to optionally store a long form explanation of the product being sold for your own rendering purposes.
  * expand `array`: Specifies which fields in the response should be expanded.
  * name `string`: The product's name, meant to be displayable to the customer. Whenever this product is sold via a subscription, name will show up on associated invoice line item descriptions.
  * shippable `boolean`: Whether this product is shipped (i.e., physical goods). Defaults to `true`. May only be set if `type=good`.
  * statement_descriptor `string`: An arbitrary string to be displayed on your customer's credit card or bank statement. While most banks display this information consistently, some may display it incorrectly or not at all.
  * unit_label `string`: A label that represents units of this product in Stripe and on customers’ receipts and invoices. When set, this will be included in associated invoice line item descriptions. May only be set if `type=service`.
  * url `string`: A URL of a publicly-accessible webpage for this product. May only be set if `type=good`.

#### Output
* output [product](#product)

### GetPromotionCodes
<p>Returns a list of your promotion codes.</p>


```js
stripe.GetPromotionCodes({}, context)
```

#### Input
* input `object`
  * active `boolean`: Filter promotion codes by whether they are active.
  * code `string`: Only return promotion codes that have this case-insensitive code.
  * coupon `string`: Only return promotion codes for this coupon.
  * customer `string`: Only return promotion codes that are restricted to this customer.
  * ending_before `string`: A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
  * expand `array`: Specifies which fields in the response should be expanded.
  * limit `integer`: A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
  * starting_after `string`: A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.

#### Output
* output `object`
  * data **required** `array`
    * items [promotion_code](#promotion_code)
  * has_more **required** `boolean`: True if this list has another page of items after this one that can be fetched.
  * object **required** `string` (values: list): String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
  * url **required** `string`: The URL where this list can be accessed.

### PostPromotionCodes
<p>A promotion code points to a coupon. You can optionally restrict the code to a specific customer, redemption limit, and expiration date.</p>


```js
stripe.PostPromotionCodes({
  "coupon": ""
}, context)
```

#### Input
* input `object`
  * active `boolean`: Whether the promotion code is currently active.
  * code `string`: The customer-facing code. Regardless of case, this code must be unique across all active promotion codes for a specific customer. If left blank, we will generate one automatically.
  * coupon **required** `string`: The coupon for this promotion code.
  * customer `string`: The customer that this promotion code can be used by. If not set, the promotion code can be used by all customers.
  * expand `array`: Specifies which fields in the response should be expanded.
  * expires_at `integer`: The timestamp at which this promotion code will expire. If the coupon has specified a `redeems_by`, then this value cannot be after the coupon's `redeems_by`.
  * max_redemptions `integer`: A positive integer specifying the number of times the promotion code can be redeemed. If the coupon has specified a `max_redemptions`, then this value cannot be greater than the coupon's `max_redemptions`.
  * metadata `object`: Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
  * restrictions `object`: Settings that restrict the redemption of the promotion code.

#### Output
* output [promotion_code](#promotion_code)

### GetPromotionCodesPromotionCode
<p>Retrieves the promotion code with the given ID.</p>


```js
stripe.GetPromotionCodesPromotionCode({
  "promotion_code": ""
}, context)
```

#### Input
* input `object`
  * expand `array`: Specifies which fields in the response should be expanded.
  * promotion_code **required** `string`

#### Output
* output [promotion_code](#promotion_code)

### PostPromotionCodesPromotionCode
<p>Updates the specified promotion code by setting the values of the parameters passed. Most fields are, by design, not editable.</p>


```js
stripe.PostPromotionCodesPromotionCode({
  "promotion_code": ""
}, context)
```

#### Input
* input `object`
  * promotion_code **required** `string`
  * active `boolean`: Whether the promotion code is currently active. A promotion code can only be reactivated when the coupon is still valid and the promotion code is otherwise redeemable.
  * expand `array`: Specifies which fields in the response should be expanded.

#### Output
* output [promotion_code](#promotion_code)

### GetRadarEarlyFraudWarnings
<p>Returns a list of early fraud warnings.</p>


```js
stripe.GetRadarEarlyFraudWarnings({}, context)
```

#### Input
* input `object`
  * charge `string`: Only return early fraud warnings for the charge specified by this charge ID.
  * ending_before `string`: A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
  * expand `array`: Specifies which fields in the response should be expanded.
  * limit `integer`: A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
  * starting_after `string`: A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.

#### Output
* output `object`
  * data **required** `array`
    * items [radar.early_fraud_warning](#radar.early_fraud_warning)
  * has_more **required** `boolean`: True if this list has another page of items after this one that can be fetched.
  * object **required** `string` (values: list): String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
  * url **required** `string`: The URL where this list can be accessed.

### GetRadarEarlyFraudWarningsEarlyFraudWarning
<p>Retrieves the details of an early fraud warning that has previously been created. </p>

<p>Please refer to the <a href="#early_fraud_warning_object">early fraud warning</a> object reference for more details.</p>


```js
stripe.GetRadarEarlyFraudWarningsEarlyFraudWarning({
  "early_fraud_warning": ""
}, context)
```

#### Input
* input `object`
  * early_fraud_warning **required** `string`
  * expand `array`: Specifies which fields in the response should be expanded.

#### Output
* output [radar.early_fraud_warning](#radar.early_fraud_warning)

### GetRadarValueListItems
<p>Returns a list of <code>ValueListItem</code> objects. The objects are sorted in descending order by creation date, with the most recently created object appearing first.</p>


```js
stripe.GetRadarValueListItems({
  "value_list": ""
}, context)
```

#### Input
* input `object`
  * ending_before `string`: A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
  * expand `array`: Specifies which fields in the response should be expanded.
  * limit `integer`: A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
  * starting_after `string`: A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
  * value `string`: Return items belonging to the parent list whose value matches the specified value (using an "is like" match).
  * value_list **required** `string`: Identifier for the parent value list this item belongs to.

#### Output
* output `object`
  * data **required** `array`
    * items [radar.value_list_item](#radar.value_list_item)
  * has_more **required** `boolean`: True if this list has another page of items after this one that can be fetched.
  * object **required** `string` (values: list): String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
  * url **required** `string`: The URL where this list can be accessed.

### PostRadarValueListItems
<p>Creates a new <code>ValueListItem</code> object, which is added to the specified parent value list.</p>


```js
stripe.PostRadarValueListItems({
  "value": "",
  "value_list": ""
}, context)
```

#### Input
* input `object`
  * expand `array`: Specifies which fields in the response should be expanded.
  * value **required** `string`: The value of the item (whose type must match the type of the parent value list).
  * value_list **required** `string`: The identifier of the value list which the created item will be added to.

#### Output
* output [radar.value_list_item](#radar.value_list_item)

### DeleteRadarValueListItemsItem
<p>Deletes a <code>ValueListItem</code> object, removing it from its parent value list.</p>


```js
stripe.DeleteRadarValueListItemsItem({
  "item": ""
}, context)
```

#### Input
* input `object`
  * item **required** `string`

#### Output
* output [deleted_radar.value_list_item](#deleted_radar.value_list_item)

### GetRadarValueListItemsItem
<p>Retrieves a <code>ValueListItem</code> object.</p>


```js
stripe.GetRadarValueListItemsItem({
  "item": ""
}, context)
```

#### Input
* input `object`
  * expand `array`: Specifies which fields in the response should be expanded.
  * item **required** `string`

#### Output
* output [radar.value_list_item](#radar.value_list_item)

### GetRadarValueLists
<p>Returns a list of <code>ValueList</code> objects. The objects are sorted in descending order by creation date, with the most recently created object appearing first.</p>


```js
stripe.GetRadarValueLists({}, context)
```

#### Input
* input `object`
  * alias `string`: The alias used to reference the value list when writing rules.
  * contains `string`: A value contained within a value list - returns all value lists containing this value.
  * ending_before `string`: A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
  * expand `array`: Specifies which fields in the response should be expanded.
  * limit `integer`: A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
  * starting_after `string`: A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.

#### Output
* output `object`
  * data **required** `array`
    * items [radar.value_list](#radar.value_list)
  * has_more **required** `boolean`: True if this list has another page of items after this one that can be fetched.
  * object **required** `string` (values: list): String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
  * url **required** `string`: The URL where this list can be accessed.

### PostRadarValueLists
<p>Creates a new <code>ValueList</code> object, which can then be referenced in rules.</p>


```js
stripe.PostRadarValueLists({
  "alias": "",
  "name": ""
}, context)
```

#### Input
* input `object`
  * alias **required** `string`: The name of the value list for use in rules.
  * expand `array`: Specifies which fields in the response should be expanded.
  * item_type `string` (values: card_bin, card_fingerprint, case_sensitive_string, country, email, ip_address, string): Type of the items in the value list. One of `card_fingerprint`, `card_bin`, `email`, `ip_address`, `country`, `string`, or `case_sensitive_string`. Use `string` if the item type is unknown or mixed.
  * metadata `object`: Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
  * name **required** `string`: The human-readable name of the value list.

#### Output
* output [radar.value_list](#radar.value_list)

### DeleteRadarValueListsValueList
<p>Deletes a <code>ValueList</code> object, also deleting any items contained within the value list. To be deleted, a value list must not be referenced in any rules.</p>


```js
stripe.DeleteRadarValueListsValueList({
  "value_list": ""
}, context)
```

#### Input
* input `object`
  * value_list **required** `string`

#### Output
* output [deleted_radar.value_list](#deleted_radar.value_list)

### GetRadarValueListsValueList
<p>Retrieves a <code>ValueList</code> object.</p>


```js
stripe.GetRadarValueListsValueList({
  "value_list": ""
}, context)
```

#### Input
* input `object`
  * expand `array`: Specifies which fields in the response should be expanded.
  * value_list **required** `string`

#### Output
* output [radar.value_list](#radar.value_list)

### PostRadarValueListsValueList
<p>Updates a <code>ValueList</code> object by setting the values of the parameters passed. Any parameters not provided will be left unchanged. Note that <code>item_type</code> is immutable.</p>


```js
stripe.PostRadarValueListsValueList({
  "value_list": ""
}, context)
```

#### Input
* input `object`
  * value_list **required** `string`
  * alias `string`: The name of the value list for use in rules.
  * expand `array`: Specifies which fields in the response should be expanded.
  * metadata `object`: Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
  * name `string`: The human-readable name of the value list.

#### Output
* output [radar.value_list](#radar.value_list)

### GetRecipients
<p>Returns a list of your recipients. The recipients are returned sorted by creation date, with the most recently created recipients appearing first.</p>


```js
stripe.GetRecipients({}, context)
```

#### Input
* input `object`
  * ending_before `string`: A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
  * expand `array`: Specifies which fields in the response should be expanded.
  * limit `integer`: A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
  * starting_after `string`: A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
  * type `string` (values: corporation, individual)
  * verified `boolean`: Only return recipients that are verified or unverified.

#### Output
* output `object`
  * data **required** `array`
    * items [recipient](#recipient)
  * has_more **required** `boolean`: True if this list has another page of items after this one that can be fetched.
  * object **required** `string` (values: list): String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
  * url **required** `string`: The URL where this list can be accessed.

### PostRecipients
<p>Creates a new <code>Recipient</code> object and verifies the recipient’s identity.
Also verifies the recipient’s bank account information or debit card, if either is provided.</p>


```js
stripe.PostRecipients({
  "name": "",
  "type": ""
}, context)
```

#### Input
* input `object`
  * bank_account `string`: A bank account to attach to the recipient. You can provide either a token, like the ones returned by [Stripe.js](https://stripe.com/docs/stripe-js), or a dictionary containing a user's bank account details, with the options described below.
  * card `string`: A U.S. Visa or MasterCard debit card (_not_ prepaid) to attach to the recipient. If the debit card is not valid, recipient creation will fail. You can provide either a token, like the ones returned by [Stripe.js](https://stripe.com/docs/stripe-js), or a dictionary containing a user's debit card details, with the options described below. Although not all information is required, the extra info helps prevent fraud.
  * description `string`: An arbitrary string which you can attach to a `Recipient` object. It is displayed alongside the recipient in the web interface.
  * email `string`: The recipient's email address. It is displayed alongside the recipient in the web interface, and can be useful for searching and tracking.
  * expand `array`: Specifies which fields in the response should be expanded.
  * name **required** `string`: The recipient's full, legal name. For type `individual`, should be in the format `First Last`, `First Middle Last`, or `First M Last` (no prefixes or suffixes). For `corporation`, the full, incorporated name.
  * tax_id `string`: The recipient's tax ID, as a string. For type `individual`, the full SSN; for type `corporation`, the full EIN.
  * type **required** `string`: Type of the recipient: either `individual` or `corporation`.

#### Output
* output [recipient](#recipient)

### DeleteRecipientsId
<p>Permanently deletes a recipient. It cannot be undone.</p>


```js
stripe.DeleteRecipientsId({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
* output [deleted_recipient](#deleted_recipient)

### GetRecipientsId
<p>Retrieves the details of an existing recipient. You need only supply the unique recipient identifier that was returned upon recipient creation.</p>


```js
stripe.GetRecipientsId({
  "id": ""
}, context)
```

#### Input
* input `object`
  * expand `array`: Specifies which fields in the response should be expanded.
  * id **required** `string`

#### Output
*Output schema unknown*

### PostRecipientsId
<p>Updates the specified recipient by setting the values of the parameters passed.
Any parameters not provided will be left unchanged.</p>

<p>If you update the name or tax ID, the identity verification will automatically be rerun.
If you update the bank account, the bank account validation will automatically be rerun.</p>


```js
stripe.PostRecipientsId({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`
  * bank_account `string`: A bank account to attach to the recipient. You can provide either a token, like the ones returned by [Stripe.js](https://stripe.com/docs/stripe-js), or a dictionary containing a user's bank account details, with the options described below.
  * card `string`: A U.S. Visa or MasterCard debit card (not prepaid) to attach to the recipient. You can provide either a token, like the ones returned by [Stripe.js](https://stripe.com/docs/stripe-js), or a dictionary containing a user's debit card details, with the options described below. Passing `card` will create a new card, make it the new recipient default card, and delete the old recipient default (if one exists). If you want to add additional debit cards instead of replacing the existing default, use the [card creation API](https://stripe.com/docs/api#create_card). Whenever you attach a card to a recipient, Stripe will automatically validate the debit card.
  * default_card `string`: ID of the card to set as the recipient's new default for payouts.
  * description `string`: An arbitrary string which you can attach to a `Recipient` object. It is displayed alongside the recipient in the web interface.
  * email `string`: The recipient's email address. It is displayed alongside the recipient in the web interface, and can be useful for searching and tracking.
  * expand `array`: Specifies which fields in the response should be expanded.
  * name `string`: The recipient's full, legal name. For type `individual`, should be in the format `First Last`, `First Middle Last`, or `First M Last` (no prefixes or suffixes). For `corporation`, the full, incorporated name.
  * tax_id `string`: The recipient's tax ID, as a string. For type `individual`, the full SSN; for type `corporation`, the full EIN.

#### Output
* output [recipient](#recipient)

### GetRefunds
<p>Returns a list of all refunds you’ve previously created. The refunds are returned in sorted order, with the most recent refunds appearing first. For convenience, the 10 most recent refunds are always available by default on the charge object.</p>


```js
stripe.GetRefunds({}, context)
```

#### Input
* input `object`
  * charge `string`: Only return refunds for the charge specified by this charge ID.
  * ending_before `string`: A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
  * expand `array`: Specifies which fields in the response should be expanded.
  * limit `integer`: A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
  * payment_intent `string`: Only return refunds for the PaymentIntent specified by this ID.
  * starting_after `string`: A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.

#### Output
* output `object`
  * data **required** `array`
    * items [refund](#refund)
  * has_more **required** `boolean`: True if this list has another page of items after this one that can be fetched.
  * object **required** `string` (values: list): String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
  * url **required** `string`: The URL where this list can be accessed.

### PostRefunds
<p>Create a refund.</p>


```js
stripe.PostRefunds({}, context)
```

#### Input
* input `object`
  * amount `integer`
  * charge `string`
  * expand `array`: Specifies which fields in the response should be expanded.
  * payment_intent `string`
  * reason `string` (values: duplicate, fraudulent, requested_by_customer)
  * refund_application_fee `boolean`
  * reverse_transfer `boolean`

#### Output
* output [refund](#refund)

### GetRefundsRefund
<p>Retrieves the details of an existing refund.</p>


```js
stripe.GetRefundsRefund({
  "refund": ""
}, context)
```

#### Input
* input `object`
  * expand `array`: Specifies which fields in the response should be expanded.
  * refund **required** `string`

#### Output
* output [refund](#refund)

### PostRefundsRefund
<p>Updates the specified refund by setting the values of the parameters passed. Any parameters not provided will be left unchanged.</p>

<p>This request only accepts <code>metadata</code> as an argument.</p>


```js
stripe.PostRefundsRefund({
  "refund": ""
}, context)
```

#### Input
* input `object`
  * refund **required** `string`
  * expand `array`: Specifies which fields in the response should be expanded.

#### Output
* output [refund](#refund)

### GetReportingReportRuns
<p>Returns a list of Report Runs, with the most recent appearing first. (Requires a <a href="https://stripe.com/docs/keys#test-live-modes">live-mode API key</a>.)</p>


```js
stripe.GetReportingReportRuns({}, context)
```

#### Input
* input `object`
  * ending_before `string`: A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
  * expand `array`: Specifies which fields in the response should be expanded.
  * limit `integer`: A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
  * starting_after `string`: A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.

#### Output
* output `object`
  * data **required** `array`
    * items [reporting.report_run](#reporting.report_run)
  * has_more **required** `boolean`: True if this list has another page of items after this one that can be fetched.
  * object **required** `string` (values: list): String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
  * url **required** `string`: The URL where this list can be accessed.

### PostReportingReportRuns
<p>Creates a new object and begin running the report. (Requires a <a href="https://stripe.com/docs/keys#test-live-modes">live-mode API key</a>.)</p>


```js
stripe.PostReportingReportRuns({
  "report_type": ""
}, context)
```

#### Input
* input `object`
  * expand `array`: Specifies which fields in the response should be expanded.
  * parameters `object`: Parameters specifying how the report should be run. Different Report Types have different required and optional parameters, listed in the [API Access to Reports](https://stripe.com/docs/reporting/statements/api) documentation.
  * report_type **required** `string`: The ID of the [report type](https://stripe.com/docs/reporting/statements/api#report-types) to run, such as `"balance.summary.1"`.

#### Output
* output [reporting.report_run](#reporting.report_run)

### GetReportingReportRunsReportRun
<p>Retrieves the details of an existing Report Run. (Requires a <a href="https://stripe.com/docs/keys#test-live-modes">live-mode API key</a>.)</p>


```js
stripe.GetReportingReportRunsReportRun({
  "report_run": ""
}, context)
```

#### Input
* input `object`
  * expand `array`: Specifies which fields in the response should be expanded.
  * report_run **required** `string`

#### Output
* output [reporting.report_run](#reporting.report_run)

### GetReportingReportTypes
<p>Returns a full list of Report Types. (Requires a <a href="https://stripe.com/docs/keys#test-live-modes">live-mode API key</a>.)</p>


```js
stripe.GetReportingReportTypes({}, context)
```

#### Input
* input `object`
  * expand `array`: Specifies which fields in the response should be expanded.

#### Output
* output `object`
  * data **required** `array`
    * items [reporting.report_type](#reporting.report_type)
  * has_more **required** `boolean`: True if this list has another page of items after this one that can be fetched.
  * object **required** `string` (values: list): String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
  * url **required** `string`: The URL where this list can be accessed.

### GetReportingReportTypesReportType
<p>Retrieves the details of a Report Type. (Requires a <a href="https://stripe.com/docs/keys#test-live-modes">live-mode API key</a>.)</p>


```js
stripe.GetReportingReportTypesReportType({
  "report_type": ""
}, context)
```

#### Input
* input `object`
  * expand `array`: Specifies which fields in the response should be expanded.
  * report_type **required** `string`

#### Output
* output [reporting.report_type](#reporting.report_type)

### GetReviews
<p>Returns a list of <code>Review</code> objects that have <code>open</code> set to <code>true</code>. The objects are sorted in descending order by creation date, with the most recently created object appearing first.</p>


```js
stripe.GetReviews({}, context)
```

#### Input
* input `object`
  * ending_before `string`: A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
  * expand `array`: Specifies which fields in the response should be expanded.
  * limit `integer`: A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
  * starting_after `string`: A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.

#### Output
* output `object`
  * data **required** `array`
    * items [review](#review)
  * has_more **required** `boolean`: True if this list has another page of items after this one that can be fetched.
  * object **required** `string` (values: list): String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
  * url **required** `string`: The URL where this list can be accessed.

### GetReviewsReview
<p>Retrieves a <code>Review</code> object.</p>


```js
stripe.GetReviewsReview({
  "review": ""
}, context)
```

#### Input
* input `object`
  * expand `array`: Specifies which fields in the response should be expanded.
  * review **required** `string`

#### Output
* output [review](#review)

### PostReviewsReviewApprove
<p>Approves a <code>Review</code> object, closing it and removing it from the list of reviews.</p>


```js
stripe.PostReviewsReviewApprove({
  "review": ""
}, context)
```

#### Input
* input `object`
  * review **required** `string`
  * expand `array`: Specifies which fields in the response should be expanded.

#### Output
* output [review](#review)

### GetSetupAttempts
<p>Returns a list of SetupAttempts associated with a provided SetupIntent.</p>


```js
stripe.GetSetupAttempts({
  "setup_intent": ""
}, context)
```

#### Input
* input `object`
  * ending_before `string`: A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
  * expand `array`: Specifies which fields in the response should be expanded.
  * limit `integer`: A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
  * setup_intent **required** `string`: Only return SetupAttempts created by the SetupIntent specified by
  * starting_after `string`: A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.

#### Output
* output `object`
  * data **required** `array`
    * items [setup_attempt](#setup_attempt)
  * has_more **required** `boolean`: True if this list has another page of items after this one that can be fetched.
  * object **required** `string` (values: list): String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
  * url **required** `string`: The URL where this list can be accessed.

### GetSetupIntents
<p>Returns a list of SetupIntents.</p>


```js
stripe.GetSetupIntents({}, context)
```

#### Input
* input `object`
  * customer `string`: Only return SetupIntents for the customer specified by this customer ID.
  * ending_before `string`: A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
  * expand `array`: Specifies which fields in the response should be expanded.
  * limit `integer`: A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
  * payment_method `string`: Only return SetupIntents associated with the specified payment method.
  * starting_after `string`: A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.

#### Output
* output `object`
  * data **required** `array`
    * items [setup_intent](#setup_intent)
  * has_more **required** `boolean`: True if this list has another page of items after this one that can be fetched.
  * object **required** `string` (values: list): String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
  * url **required** `string`: The URL where this list can be accessed.

### PostSetupIntents
<p>Creates a SetupIntent object.</p>

<p>After the SetupIntent is created, attach a payment method and <a href="/docs/api/setup_intents/confirm">confirm</a>
to collect any required permissions to charge the payment method later.</p>


```js
stripe.PostSetupIntents({}, context)
```

#### Input
* input `object`
  * confirm `boolean`: Set to `true` to attempt to confirm this SetupIntent immediately. This parameter defaults to `false`. If the payment method attached is a card, a return_url may be provided in case additional authentication is required.
  * customer `string`: ID of the Customer this SetupIntent belongs to, if one exists.
  * description `string`: An arbitrary string attached to the object. Often useful for displaying to users.
  * expand `array`: Specifies which fields in the response should be expanded.
  * mandate_data `object`: This hash contains details about the Mandate to create. This parameter can only be used with [`confirm=true`](https://stripe.com/docs/api/setup_intents/create#create_setup_intent-confirm).
  * metadata `object`: Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
  * on_behalf_of `string`: The Stripe account ID for which this SetupIntent is created.
  * payment_method `string`: ID of the payment method (a PaymentMethod, Card, or saved Source object) to attach to this SetupIntent.
  * payment_method_options `object`: Payment-method-specific configuration for this SetupIntent.
  * payment_method_types `array`: The list of payment method types (e.g. card) that this SetupIntent is allowed to use. If this is not provided, defaults to ["card"].
  * return_url `string`: The URL to redirect your customer back to after they authenticate or cancel their payment on the payment method's app or site. If you'd prefer to redirect to a mobile application, you can alternatively supply an application URI scheme. This parameter can only be used with [`confirm=true`](https://stripe.com/docs/api/setup_intents/create#create_setup_intent-confirm).
  * single_use `object`: If this hash is populated, this SetupIntent will generate a single_use Mandate on success.
  * usage `string` (values: off_session, on_session): Indicates how the payment method is intended to be used in the future. If not provided, this value defaults to `off_session`.

#### Output
* output [setup_intent](#setup_intent)

### GetSetupIntentsIntent
<p>Retrieves the details of a SetupIntent that has previously been created. </p>

<p>Client-side retrieval using a publishable key is allowed when the <code>client_secret</code> is provided in the query string. </p>

<p>When retrieved with a publishable key, only a subset of properties will be returned. Please refer to the <a href="#setup_intent_object">SetupIntent</a> object reference for more details.</p>


```js
stripe.GetSetupIntentsIntent({
  "intent": ""
}, context)
```

#### Input
* input `object`
  * client_secret `string`: The client secret of the SetupIntent. Required if a publishable key is used to retrieve the SetupIntent.
  * expand `array`: Specifies which fields in the response should be expanded.
  * intent **required** `string`

#### Output
* output [setup_intent](#setup_intent)

### PostSetupIntentsIntent
<p>Updates a SetupIntent object.</p>


```js
stripe.PostSetupIntentsIntent({
  "intent": ""
}, context)
```

#### Input
* input `object`
  * intent **required** `string`
  * customer `string`: ID of the Customer this SetupIntent belongs to, if one exists.
  * description `string`: An arbitrary string attached to the object. Often useful for displaying to users.
  * expand `array`: Specifies which fields in the response should be expanded.
  * payment_method `string`: ID of the payment method (a PaymentMethod, Card, or saved Source object) to attach to this SetupIntent.
  * payment_method_options `object`: Payment-method-specific configuration for this SetupIntent.
  * payment_method_types `array`: The list of payment method types (e.g. card) that this SetupIntent is allowed to set up. If this is not provided, defaults to ["card"].

#### Output
* output [setup_intent](#setup_intent)

### PostSetupIntentsIntentCancel
<p>A SetupIntent object can be canceled when it is in one of these statuses: <code>requires_payment_method</code>, <code>requires_confirmation</code>, or <code>requires_action</code>. </p>

<p>Once canceled, setup is abandoned and any operations on the SetupIntent will fail with an error.</p>


```js
stripe.PostSetupIntentsIntentCancel({
  "intent": ""
}, context)
```

#### Input
* input `object`
  * intent **required** `string`
  * cancellation_reason `string` (values: abandoned, duplicate, requested_by_customer): Reason for canceling this SetupIntent. Possible values are `abandoned`, `requested_by_customer`, or `duplicate`
  * expand `array`: Specifies which fields in the response should be expanded.

#### Output
* output [setup_intent](#setup_intent)

### PostSetupIntentsIntentConfirm
<p>Confirm that your customer intends to set up the current or
provided payment method. For example, you would confirm a SetupIntent
when a customer hits the “Save” button on a payment method management
page on your website.</p>

<p>If the selected payment method does not require any additional
steps from the customer, the SetupIntent will transition to the
<code>succeeded</code> status.</p>

<p>Otherwise, it will transition to the <code>requires_action</code> status and
suggest additional actions via <code>next_action</code>. If setup fails,
the SetupIntent will transition to the
<code>requires_payment_method</code> status.</p>


```js
stripe.PostSetupIntentsIntentConfirm({
  "intent": ""
}, context)
```

#### Input
* input `object`
  * intent **required** `string`
  * client_secret `string`: The client secret of the SetupIntent.
  * expand `array`: Specifies which fields in the response should be expanded.
  * payment_method `string`: ID of the payment method (a PaymentMethod, Card, or saved Source object) to attach to this SetupIntent.
  * payment_method_options `object`: Payment-method-specific configuration for this SetupIntent.
  * return_url `string`: The URL to redirect your customer back to after they authenticate on the payment method's app or site.

#### Output
* output [setup_intent](#setup_intent)

### GetSigmaScheduledQueryRuns
<p>Returns a list of scheduled query runs.</p>


```js
stripe.GetSigmaScheduledQueryRuns({}, context)
```

#### Input
* input `object`
  * ending_before `string`: A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
  * expand `array`: Specifies which fields in the response should be expanded.
  * limit `integer`: A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
  * starting_after `string`: A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.

#### Output
* output `object`
  * data **required** `array`
    * items [scheduled_query_run](#scheduled_query_run)
  * has_more **required** `boolean`: True if this list has another page of items after this one that can be fetched.
  * object **required** `string` (values: list): String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
  * url **required** `string`: The URL where this list can be accessed.

### GetSigmaScheduledQueryRunsScheduledQueryRun
<p>Retrieves the details of an scheduled query run.</p>


```js
stripe.GetSigmaScheduledQueryRunsScheduledQueryRun({
  "scheduled_query_run": ""
}, context)
```

#### Input
* input `object`
  * expand `array`: Specifies which fields in the response should be expanded.
  * scheduled_query_run **required** `string`

#### Output
* output [scheduled_query_run](#scheduled_query_run)

### GetSkus
<p>Returns a list of your SKUs. The SKUs are returned sorted by creation date, with the most recently created SKUs appearing first.</p>


```js
stripe.GetSkus({}, context)
```

#### Input
* input `object`
  * active `boolean`: Only return SKUs that are active or inactive (e.g., pass `false` to list all inactive products).
  * attributes `object`: Only return SKUs that have the specified key-value pairs in this partially constructed dictionary. Can be specified only if `product` is also supplied. For instance, if the associated product has attributes `["color", "size"]`, passing in `attributes[color]=red` returns all the SKUs for this product that have `color` set to `red`.
  * ending_before `string`: A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
  * expand `array`: Specifies which fields in the response should be expanded.
  * ids `array`: Only return SKUs with the given IDs.
  * in_stock `boolean`: Only return SKUs that are either in stock or out of stock (e.g., pass `false` to list all SKUs that are out of stock). If no value is provided, all SKUs are returned.
  * limit `integer`: A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
  * product `string`: The ID of the product whose SKUs will be retrieved. Must be a product with type `good`.
  * starting_after `string`: A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.

#### Output
* output `object`
  * data **required** `array`
    * items [sku](#sku)
  * has_more **required** `boolean`: True if this list has another page of items after this one that can be fetched.
  * object **required** `string` (values: list): String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
  * url **required** `string`: The URL where this list can be accessed.

### PostSkus
<p>Creates a new SKU associated with a product.</p>


```js
stripe.PostSkus({
  "currency": "",
  "inventory": {},
  "price": 0,
  "product": ""
}, context)
```

#### Input
* input `object`
  * active `boolean`: Whether the SKU is available for purchase. Default to `true`.
  * attributes `object`: A dictionary of attributes and values for the attributes defined by the product. If, for example, a product's attributes are `["size", "gender"]`, a valid SKU has the following dictionary of attributes: `{"size": "Medium", "gender": "Unisex"}`.
  * currency **required** `string`: Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
  * expand `array`: Specifies which fields in the response should be expanded.
  * id `string`: The identifier for the SKU. Must be unique. If not provided, an identifier will be randomly generated.
  * image `string`: The URL of an image for this SKU, meant to be displayable to the customer.
  * inventory **required** `object`: Description of the SKU's inventory.
  * metadata `object`: Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
  * package_dimensions `object`: The dimensions of this SKU for shipping purposes.
  * price **required** `integer`: The cost of the item as a nonnegative integer in the smallest currency unit (that is, 100 cents to charge $1.00, or 100 to charge ¥100, Japanese Yen being a zero-decimal currency).
  * product **required** `string`: The ID of the product this SKU is associated with. Must be a product with type `good`.

#### Output
* output [sku](#sku)

### DeleteSkusId
<p>Delete a SKU. Deleting a SKU is only possible until it has been used in an order.</p>


```js
stripe.DeleteSkusId({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`

#### Output
* output [deleted_sku](#deleted_sku)

### GetSkusId
<p>Retrieves the details of an existing SKU. Supply the unique SKU identifier from either a SKU creation request or from the product, and Stripe will return the corresponding SKU information.</p>


```js
stripe.GetSkusId({
  "id": ""
}, context)
```

#### Input
* input `object`
  * expand `array`: Specifies which fields in the response should be expanded.
  * id **required** `string`

#### Output
*Output schema unknown*

### PostSkusId
<p>Updates the specific SKU by setting the values of the parameters passed. Any parameters not provided will be left unchanged.</p>

<p>Note that a SKU’s <code>attributes</code> are not editable. Instead, you would need to deactivate the existing SKU and create a new one with the new attribute values.</p>


```js
stripe.PostSkusId({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`
  * active `boolean`: Whether this SKU is available for purchase.
  * attributes `object`: A dictionary of attributes and values for the attributes defined by the product. When specified, `attributes` will partially update the existing attributes dictionary on the product, with the postcondition that a value must be present for each attribute key on the product.
  * currency `string`: Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
  * expand `array`: Specifies which fields in the response should be expanded.
  * image `string`: The URL of an image for this SKU, meant to be displayable to the customer.
  * inventory `object`: Description of the SKU's inventory.
  * price `integer`: The cost of the item as a positive integer in the smallest currency unit (that is, 100 cents to charge $1.00, or 100 to charge ¥100, Japanese Yen being a zero-decimal currency).
  * product `string`: The ID of the product that this SKU should belong to. The product must exist, have the same set of attribute names as the SKU's current product, and be of type `good`.

#### Output
* output [sku](#sku)

### PostSources
<p>Creates a new source object.</p>


```js
stripe.PostSources({}, context)
```

#### Input
* input `object`
  * amount `integer`: Amount associated with the source. This is the amount for which the source will be chargeable once ready. Required for `single_use` sources. Not supported for `receiver` type sources, where charge amount may not be specified until funds land.
  * currency `string`: Three-letter [ISO code for the currency](https://stripe.com/docs/currencies) associated with the source. This is the currency for which the source will be chargeable once ready.
  * customer `string`: The `Customer` to whom the original source is attached to. Must be set when the original source is not a `Source` (e.g., `Card`).
  * expand `array`: Specifies which fields in the response should be expanded.
  * flow `string` (values: code_verification, none, receiver, redirect): The authentication `flow` of the source to create. `flow` is one of `redirect`, `receiver`, `code_verification`, `none`. It is generally inferred unless a type supports multiple flows.
  * mandate `object`: Information about a mandate possibility attached to a source object (generally for bank debits) as well as its acceptance status.
  * metadata `object`
  * original_source `string`: The source to share.
  * owner `object`: Information about the owner of the payment instrument that may be used or required by particular source types.
  * receiver `object`: Optional parameters for the receiver flow. Can be set only if the source is a receiver (`flow` is `receiver`).
  * redirect `object`: Parameters required for the redirect flow. Required if the source is authenticated by a redirect (`flow` is `redirect`).
  * source_order `object`: Information about the items and shipping associated with the source. Required for transactional credit (for example Klarna) sources before you can charge it.
  * statement_descriptor `string`: An arbitrary string to be displayed on your customer's statement. As an example, if your website is `RunClub` and the item you're charging for is a race ticket, you may want to specify a `statement_descriptor` of `RunClub 5K race ticket.` While many payment types will display this information, some may not display it at all.
  * token `string`: An optional token used to create the source. When passed, token properties will override source parameters.
  * type `string`: The `type` of the source to create. Required unless `customer` and `original_source` are specified (see the [Cloning card Sources](https://stripe.com/docs/sources/connect#cloning-card-sources) guide)
  * usage `string` (values: reusable, single_use)

#### Output
* output [source](#source)

### GetSourcesSource
<p>Retrieves an existing source object. Supply the unique source ID from a source creation request and Stripe will return the corresponding up-to-date source object information.</p>


```js
stripe.GetSourcesSource({
  "source": ""
}, context)
```

#### Input
* input `object`
  * client_secret `string`: The client secret of the source. Required if a publishable key is used to retrieve the source.
  * expand `array`: Specifies which fields in the response should be expanded.
  * source **required** `string`

#### Output
* output [source](#source)

### PostSourcesSource
<p>Updates the specified source by setting the values of the parameters passed. Any parameters not provided will be left unchanged.</p>

<p>This request accepts the <code>metadata</code> and <code>owner</code> as arguments. It is also possible to update type specific information for selected payment methods. Please refer to our <a href="/docs/sources">payment method guides</a> for more detail.</p>


```js
stripe.PostSourcesSource({
  "source": ""
}, context)
```

#### Input
* input `object`
  * source **required** `string`
  * amount `integer`: Amount associated with the source.
  * expand `array`: Specifies which fields in the response should be expanded.
  * mandate `object`: Information about a mandate possibility attached to a source object (generally for bank debits) as well as its acceptance status.
  * owner `object`: Information about the owner of the payment instrument that may be used or required by particular source types.
  * source_order `object`: Information about the items and shipping associated with the source. Required for transactional credit (for example Klarna) sources before you can charge it.

#### Output
* output [source](#source)

### GetSourcesSourceMandateNotificationsMandateNotification
<p>Retrieves a new Source MandateNotification.</p>


```js
stripe.GetSourcesSourceMandateNotificationsMandateNotification({
  "mandate_notification": "",
  "source": ""
}, context)
```

#### Input
* input `object`
  * expand `array`: Specifies which fields in the response should be expanded.
  * mandate_notification **required** `string`
  * source **required** `string`

#### Output
* output [source_mandate_notification](#source_mandate_notification)

### GetSourcesSourceSourceTransactions
<p>List source transactions for a given source.</p>


```js
stripe.GetSourcesSourceSourceTransactions({
  "source": ""
}, context)
```

#### Input
* input `object`
  * ending_before `string`: A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
  * expand `array`: Specifies which fields in the response should be expanded.
  * limit `integer`: A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
  * source **required** `string`
  * starting_after `string`: A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.

#### Output
* output `object`
  * data **required** `array`
    * items [source_transaction](#source_transaction)
  * has_more **required** `boolean`: True if this list has another page of items after this one that can be fetched.
  * object **required** `string` (values: list): String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
  * url **required** `string`: The URL where this list can be accessed.

### GetSourcesSourceSourceTransactionsSourceTransaction
<p>Retrieve an existing source transaction object. Supply the unique source ID from a source creation request and the source transaction ID and Stripe will return the corresponding up-to-date source object information.</p>


```js
stripe.GetSourcesSourceSourceTransactionsSourceTransaction({
  "source": "",
  "source_transaction": ""
}, context)
```

#### Input
* input `object`
  * expand `array`: Specifies which fields in the response should be expanded.
  * source **required** `string`
  * source_transaction **required** `string`

#### Output
* output [source_transaction](#source_transaction)

### PostSourcesSourceVerify
<p>Verify a given source.</p>


```js
stripe.PostSourcesSourceVerify({
  "source": "",
  "values": []
}, context)
```

#### Input
* input `object`
  * source **required** `string`
  * expand `array`: Specifies which fields in the response should be expanded.
  * values **required** `array`: The values needed to verify the source.

#### Output
* output [source](#source)

### GetSubscriptionItems
<p>Returns a list of your subscription items for a given subscription.</p>


```js
stripe.GetSubscriptionItems({
  "subscription": ""
}, context)
```

#### Input
* input `object`
  * ending_before `string`: A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
  * expand `array`: Specifies which fields in the response should be expanded.
  * limit `integer`: A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
  * starting_after `string`: A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
  * subscription **required** `string`: The ID of the subscription whose items will be retrieved.

#### Output
* output `object`
  * data **required** `array`
    * items [subscription_item](#subscription_item)
  * has_more **required** `boolean`: True if this list has another page of items after this one that can be fetched.
  * object **required** `string` (values: list): String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
  * url **required** `string`: The URL where this list can be accessed.

### PostSubscriptionItems
<p>Adds a new item to an existing subscription. No existing items will be changed or replaced.</p>


```js
stripe.PostSubscriptionItems({
  "subscription": ""
}, context)
```

#### Input
* input `object`
  * expand `array`: Specifies which fields in the response should be expanded.
  * metadata `object`: Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
  * payment_behavior `string` (values: allow_incomplete, error_if_incomplete, pending_if_incomplete): Use `allow_incomplete` to transition the subscription to `status=past_due` if a payment is required but cannot be paid. This allows you to manage scenarios where additional user actions are needed to pay a subscription's invoice. For example, SCA regulation may require 3DS authentication to complete payment. See the [SCA Migration Guide](https://stripe.com/docs/billing/migration/strong-customer-authentication) for Billing to learn more. This is the default behavior.
  * price `string`: The ID of the price object.
  * price_data `object`: Data used to generate a new [Price](https://stripe.com/docs/api/prices) object inline.
  * proration_behavior `string` (values: always_invoice, create_prorations, none): Determines how to handle [prorations](https://stripe.com/docs/subscriptions/billing-cycle#prorations) when the billing cycle changes (e.g., when switching plans, resetting `billing_cycle_anchor=now`, or starting a trial), or if an item's `quantity` changes. Valid values are `create_prorations`, `none`, or `always_invoice`.
  * proration_date `integer`: If set, the proration will be calculated as though the subscription was updated at the given time. This can be used to apply the same proration that was previewed with the [upcoming invoice](https://stripe.com/docs/api#retrieve_customer_invoice) endpoint.
  * quantity `integer`: The quantity you'd like to apply to the subscription item you're creating.
  * subscription **required** `string`: The identifier of the subscription to modify.

#### Output
* output [subscription_item](#subscription_item)

### DeleteSubscriptionItemsItem
<p>Deletes an item from the subscription. Removing a subscription item from a subscription will not cancel the subscription.</p>


```js
stripe.DeleteSubscriptionItemsItem({
  "item": ""
}, context)
```

#### Input
* input `object`
  * item **required** `string`
  * clear_usage `boolean`: Delete all usage for the given subscription item. Allowed only when the current plan's `usage_type` is `metered`.
  * proration_behavior `string` (values: always_invoice, create_prorations, none): Determines how to handle [prorations](https://stripe.com/docs/subscriptions/billing-cycle#prorations) when the billing cycle changes (e.g., when switching plans, resetting `billing_cycle_anchor=now`, or starting a trial), or if an item's `quantity` changes. Valid values are `create_prorations`, `none`, or `always_invoice`.
  * proration_date `integer`: If set, the proration will be calculated as though the subscription was updated at the given time. This can be used to apply the same proration that was previewed with the [upcoming invoice](https://stripe.com/docs/api#retrieve_customer_invoice) endpoint.

#### Output
* output [deleted_subscription_item](#deleted_subscription_item)

### GetSubscriptionItemsItem
<p>Retrieves the subscription item with the given ID.</p>


```js
stripe.GetSubscriptionItemsItem({
  "item": ""
}, context)
```

#### Input
* input `object`
  * expand `array`: Specifies which fields in the response should be expanded.
  * item **required** `string`

#### Output
* output [subscription_item](#subscription_item)

### PostSubscriptionItemsItem
<p>Updates the plan or quantity of an item on a current subscription.</p>


```js
stripe.PostSubscriptionItemsItem({
  "item": ""
}, context)
```

#### Input
* input `object`
  * item **required** `string`
  * expand `array`: Specifies which fields in the response should be expanded.
  * off_session `boolean`: Indicates if a customer is on or off-session while an invoice payment is attempted.
  * payment_behavior `string` (values: allow_incomplete, error_if_incomplete, pending_if_incomplete): Use `allow_incomplete` to transition the subscription to `status=past_due` if a payment is required but cannot be paid. This allows you to manage scenarios where additional user actions are needed to pay a subscription's invoice. For example, SCA regulation may require 3DS authentication to complete payment. See the [SCA Migration Guide](https://stripe.com/docs/billing/migration/strong-customer-authentication) for Billing to learn more. This is the default behavior.
  * price `string`: The ID of the price object.
  * price_data `object`: Data used to generate a new [Price](https://stripe.com/docs/api/prices) object inline.
  * proration_behavior `string` (values: always_invoice, create_prorations, none): Determines how to handle [prorations](https://stripe.com/docs/subscriptions/billing-cycle#prorations) when the billing cycle changes (e.g., when switching plans, resetting `billing_cycle_anchor=now`, or starting a trial), or if an item's `quantity` changes. Valid values are `create_prorations`, `none`, or `always_invoice`.
  * proration_date `integer`: If set, the proration will be calculated as though the subscription was updated at the given time. This can be used to apply the same proration that was previewed with the [upcoming invoice](https://stripe.com/docs/api#retrieve_customer_invoice) endpoint.
  * quantity `integer`: The quantity you'd like to apply to the subscription item you're creating.

#### Output
* output [subscription_item](#subscription_item)

### GetSubscriptionItemsSubscriptionItemUsageRecordSummaries
<p>For the specified subscription item, returns a list of summary objects. Each object in the list provides usage information that’s been summarized from multiple usage records and over a subscription billing period (e.g., 15 usage records in the month of September).</p>

<p>The list is sorted in reverse-chronological order (newest first). The first list item represents the most current usage period that hasn’t ended yet. Since new usage records can still be added, the returned summary information for the subscription item’s ID should be seen as unstable until the subscription billing period ends.</p>


```js
stripe.GetSubscriptionItemsSubscriptionItemUsageRecordSummaries({
  "subscription_item": ""
}, context)
```

#### Input
* input `object`
  * ending_before `string`: A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
  * expand `array`: Specifies which fields in the response should be expanded.
  * limit `integer`: A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
  * starting_after `string`: A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
  * subscription_item **required** `string`

#### Output
* output `object`
  * data **required** `array`
    * items [usage_record_summary](#usage_record_summary)
  * has_more **required** `boolean`: True if this list has another page of items after this one that can be fetched.
  * object **required** `string` (values: list): String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
  * url **required** `string`: The URL where this list can be accessed.

### PostSubscriptionItemsSubscriptionItemUsageRecords
<p>Creates a usage record for a specified subscription item and date, and fills it with a quantity.</p>

<p>Usage records provide <code>quantity</code> information that Stripe uses to track how much a customer is using your service. With usage information and the pricing model set up by the <a href="https://stripe.com/docs/billing/subscriptions/metered-billing">metered billing</a> plan, Stripe helps you send accurate invoices to your customers.</p>

<p>The default calculation for usage is to add up all the <code>quantity</code> values of the usage records within a billing period. You can change this default behavior with the billing plan’s <code>aggregate_usage</code> <a href="/docs/api/plans/create#create_plan-aggregate_usage">parameter</a>. When there is more than one usage record with the same timestamp, Stripe adds the <code>quantity</code> values together. In most cases, this is the desired resolution, however, you can change this behavior with the <code>action</code> parameter.</p>

<p>The default pricing model for metered billing is <a href="/docs/api/plans/object#plan_object-billing_scheme">per-unit pricing</a>. For finer granularity, you can configure metered billing to have a <a href="https://stripe.com/docs/billing/subscriptions/tiers">tiered pricing</a> model.</p>


```js
stripe.PostSubscriptionItemsSubscriptionItemUsageRecords({
  "subscription_item": "",
  "quantity": 0,
  "timestamp": 0
}, context)
```

#### Input
* input `object`
  * subscription_item **required** `string`
  * action `string` (values: increment, set): Valid values are `increment` (default) or `set`. When using `increment` the specified `quantity` will be added to the usage at the specified timestamp. The `set` action will overwrite the usage quantity at that timestamp. If the subscription has [billing thresholds](https://stripe.com/docs/api/subscriptions/object#subscription_object-billing_thresholds), `increment` is the only allowed value.
  * expand `array`: Specifies which fields in the response should be expanded.
  * quantity **required** `integer`: The usage quantity for the specified timestamp.
  * timestamp **required** `integer`: The timestamp for the usage event. This timestamp must be within the current billing period of the subscription of the provided `subscription_item`.

#### Output
* output [usage_record](#usage_record)

### GetSubscriptionSchedules
<p>Retrieves the list of your subscription schedules.</p>


```js
stripe.GetSubscriptionSchedules({}, context)
```

#### Input
* input `object`
  * customer `string`: Only return subscription schedules for the given customer.
  * ending_before `string`: A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
  * expand `array`: Specifies which fields in the response should be expanded.
  * limit `integer`: A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
  * scheduled `boolean`: Only return subscription schedules that have not started yet.
  * starting_after `string`: A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.

#### Output
* output `object`
  * data **required** `array`
    * items [subscription_schedule](#subscription_schedule)
  * has_more **required** `boolean`: True if this list has another page of items after this one that can be fetched.
  * object **required** `string` (values: list): String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
  * url **required** `string`: The URL where this list can be accessed.

### PostSubscriptionSchedules
<p>Creates a new subscription schedule object. Each customer can have up to 500 active or scheduled subscriptions.</p>


```js
stripe.PostSubscriptionSchedules({}, context)
```

#### Input
* input `object`
  * customer `string`: The identifier of the customer to create the subscription schedule for.
  * default_settings `object`: Object representing the subscription schedule's default settings.
  * end_behavior `string` (values: cancel, none, release, renew): Configures how the subscription schedule behaves when it ends. Possible values are `release` or `cancel` with the default being `release`. `release` will end the subscription schedule and keep the underlying subscription running.`cancel` will end the subscription schedule and cancel the underlying subscription.
  * expand `array`: Specifies which fields in the response should be expanded.
  * from_subscription `string`: Migrate an existing subscription to be managed by a subscription schedule. If this parameter is set, a subscription schedule will be created using the subscription's item(s), set to auto-renew using the subscription's interval. When using this parameter, other parameters (such as phase values) cannot be set. To create a subscription schedule with other modifications, we recommend making two separate API calls.
  * phases `array`: List representing phases of the subscription schedule. Each phase can be customized to have different durations, plans, and coupons. If there are multiple phases, the `end_date` of one phase will always equal the `start_date` of the next phase.

#### Output
* output [subscription_schedule](#subscription_schedule)

### GetSubscriptionSchedulesSchedule
<p>Retrieves the details of an existing subscription schedule. You only need to supply the unique subscription schedule identifier that was returned upon subscription schedule creation.</p>


```js
stripe.GetSubscriptionSchedulesSchedule({
  "schedule": ""
}, context)
```

#### Input
* input `object`
  * expand `array`: Specifies which fields in the response should be expanded.
  * schedule **required** `string`

#### Output
* output [subscription_schedule](#subscription_schedule)

### PostSubscriptionSchedulesSchedule
<p>Updates an existing subscription schedule.</p>


```js
stripe.PostSubscriptionSchedulesSchedule({
  "schedule": ""
}, context)
```

#### Input
* input `object`
  * schedule **required** `string`
  * default_settings `object`: Object representing the subscription schedule's default settings.
  * end_behavior `string` (values: cancel, none, release, renew): Configures how the subscription schedule behaves when it ends. Possible values are `release` or `cancel` with the default being `release`. `release` will end the subscription schedule and keep the underlying subscription running.`cancel` will end the subscription schedule and cancel the underlying subscription.
  * expand `array`: Specifies which fields in the response should be expanded.
  * phases `array`: List representing phases of the subscription schedule. Each phase can be customized to have different durations, plans, and coupons. If there are multiple phases, the `end_date` of one phase will always equal the `start_date` of the next phase. Note that past phases can be omitted.
  * proration_behavior `string` (values: always_invoice, create_prorations, none): If the update changes the current phase, indicates if the changes should be prorated. Possible values are `create_prorations` or `none`, and the default value is `create_prorations`.

#### Output
* output [subscription_schedule](#subscription_schedule)

### PostSubscriptionSchedulesScheduleCancel
<p>Cancels a subscription schedule and its associated subscription immediately (if the subscription schedule has an active subscription). A subscription schedule can only be canceled if its status is <code>not_started</code> or <code>active</code>.</p>


```js
stripe.PostSubscriptionSchedulesScheduleCancel({
  "schedule": ""
}, context)
```

#### Input
* input `object`
  * schedule **required** `string`
  * expand `array`: Specifies which fields in the response should be expanded.
  * invoice_now `boolean`: If the subscription schedule is `active`, indicates if a final invoice will be generated that contains any un-invoiced metered usage and new/pending proration invoice items. Defaults to `true`.
  * prorate `boolean`: If the subscription schedule is `active`, indicates if the cancellation should be prorated. Defaults to `true`.

#### Output
* output [subscription_schedule](#subscription_schedule)

### PostSubscriptionSchedulesScheduleRelease
<p>Releases the subscription schedule immediately, which will stop scheduling of its phases, but leave any existing subscription in place. A schedule can only be released if its status is <code>not_started</code> or <code>active</code>. If the subscription schedule is currently associated with a subscription, releasing it will remove its <code>subscription</code> property and set the subscription’s ID to the <code>released_subscription</code> property.</p>


```js
stripe.PostSubscriptionSchedulesScheduleRelease({
  "schedule": ""
}, context)
```

#### Input
* input `object`
  * schedule **required** `string`
  * expand `array`: Specifies which fields in the response should be expanded.
  * preserve_cancel_date `boolean`: Keep any cancellation on the subscription that the schedule has set

#### Output
* output [subscription_schedule](#subscription_schedule)

### GetSubscriptions
<p>By default, returns a list of subscriptions that have not been canceled. In order to list canceled subscriptions, specify <code>status=canceled</code>.</p>


```js
stripe.GetSubscriptions({}, context)
```

#### Input
* input `object`
  * collection_method `string` (values: charge_automatically, send_invoice): The collection method of the subscriptions to retrieve. Either `charge_automatically` or `send_invoice`.
  * customer `string`: The ID of the customer whose subscriptions will be retrieved.
  * ending_before `string`: A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
  * expand `array`: Specifies which fields in the response should be expanded.
  * limit `integer`: A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
  * price `string`: Filter for subscriptions that contain this recurring price ID.
  * starting_after `string`: A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
  * status `string` (values: active, all, canceled, ended, incomplete, incomplete_expired, past_due, trialing, unpaid): The status of the subscriptions to retrieve. Passing in a value of `canceled` will return all canceled subscriptions, including those belonging to deleted customers. Pass `ended` to find subscriptions that are canceled and subscriptions that are expired due to [incomplete payment](https://stripe.com/docs/billing/subscriptions/overview#subscription-statuses). Passing in a value of `all` will return subscriptions of all statuses.

#### Output
* output `object`
  * data **required** `array`
    * items [subscription](#subscription)
  * has_more **required** `boolean`: True if this list has another page of items after this one that can be fetched.
  * object **required** `string` (values: list): String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
  * url **required** `string`: The URL where this list can be accessed.

### PostSubscriptions
<p>Creates a new subscription on an existing customer. Each customer can have up to 500 active or scheduled subscriptions.</p>


```js
stripe.PostSubscriptions({
  "customer": ""
}, context)
```

#### Input
* input `object`
  * add_invoice_items `array`: A list of prices and quantities that will generate invoice items appended to the first invoice for this subscription. You may pass up to 10 items.
  * application_fee_percent `number`: A non-negative decimal between 0 and 100, with at most two decimal places. This represents the percentage of the subscription invoice subtotal that will be transferred to the application owner's Stripe account. The request must be made by a platform account on a connected account in order to set an application fee percentage. For more information, see the application fees [documentation](https://stripe.com/docs/connect/subscriptions#collecting-fees-on-subscriptions).
  * backdate_start_date `integer`: For new subscriptions, a past timestamp to backdate the subscription's start date to. If set, the first invoice will contain a proration for the timespan between the start date and the current time. Can be combined with trials and the billing cycle anchor.
  * billing_cycle_anchor `integer`: A future timestamp to anchor the subscription's [billing cycle](https://stripe.com/docs/subscriptions/billing-cycle). This is used to determine the date of the first full invoice, and, for plans with `month` or `year` intervals, the day of the month for subsequent invoices.
  * cancel_at `integer`: A timestamp at which the subscription should cancel. If set to a date before the current period ends, this will cause a proration if prorations have been enabled using `proration_behavior`. If set during a future period, this will always cause a proration for that period.
  * cancel_at_period_end `boolean`: Boolean indicating whether this subscription should cancel at the end of the current period.
  * collection_method `string` (values: charge_automatically, send_invoice): Either `charge_automatically`, or `send_invoice`. When charging automatically, Stripe will attempt to pay this subscription at the end of the cycle using the default source attached to the customer. When sending an invoice, Stripe will email your customer an invoice with payment instructions. Defaults to `charge_automatically`.
  * coupon `string`: The code of the coupon to apply to this subscription. A coupon applied to a subscription will only affect invoices created for that particular subscription.
  * customer **required** `string`: The identifier of the customer to subscribe.
  * days_until_due `integer`: Number of days a customer has to pay invoices generated by this subscription. Valid only for subscriptions where `collection_method` is set to `send_invoice`.
  * default_payment_method `string`: ID of the default payment method for the subscription. It must belong to the customer associated with the subscription. This takes precedence over `default_source`. If neither are set, invoices will use the customer's [invoice_settings.default_payment_method](https://stripe.com/docs/api/customers/object#customer_object-invoice_settings-default_payment_method) or [default_source](https://stripe.com/docs/api/customers/object#customer_object-default_source).
  * default_source `string`: ID of the default payment source for the subscription. It must belong to the customer associated with the subscription and be in a chargeable state. If `default_payment_method` is also set, `default_payment_method` will take precedence. If neither are set, invoices will use the customer's [invoice_settings.default_payment_method](https://stripe.com/docs/api/customers/object#customer_object-invoice_settings-default_payment_method) or [default_source](https://stripe.com/docs/api/customers/object#customer_object-default_source).
  * expand `array`: Specifies which fields in the response should be expanded.
  * items `array`: A list of up to 20 subscription items, each with an attached price.
  * off_session `boolean`: Indicates if a customer is on or off-session while an invoice payment is attempted.
  * payment_behavior `string` (values: allow_incomplete, error_if_incomplete, pending_if_incomplete): Use `allow_incomplete` to create subscriptions with `status=incomplete` if the first invoice cannot be paid. Creating subscriptions with this status allows you to manage scenarios where additional user actions are needed to pay a subscription's invoice. For example, SCA regulation may require 3DS authentication to complete payment. See the [SCA Migration Guide](https://stripe.com/docs/billing/migration/strong-customer-authentication) for Billing to learn more. This is the default behavior.
  * promotion_code `string`: The API ID of a promotion code to apply to this subscription. A promotion code applied to a subscription will only affect invoices created for that particular subscription.
  * proration_behavior `string` (values: always_invoice, create_prorations, none): Determines how to handle [prorations](https://stripe.com/docs/subscriptions/billing-cycle#prorations) resulting from the `billing_cycle_anchor`. Valid values are `create_prorations` or `none`.
  * transfer_data `object`: If specified, the funds from the subscription's invoices will be transferred to the destination and the ID of the resulting transfers will be found on the resulting charges.
  * trial_from_plan `boolean`: Indicates if a plan's `trial_period_days` should be applied to the subscription. Setting `trial_end` per subscription is preferred, and this defaults to `false`. Setting this flag to `true` together with `trial_end` is not allowed.
  * trial_period_days `integer`: Integer representing the number of trial period days before the customer is charged for the first time. This will always overwrite any trials that might apply via a subscribed plan.

#### Output
* output [subscription](#subscription)

### DeleteSubscriptionsSubscriptionExposedId
<p>Cancels a customer’s subscription immediately. The customer will not be charged again for the subscription.</p>

<p>Note, however, that any pending invoice items that you’ve created will still be charged for at the end of the period, unless manually <a href="#delete_invoiceitem">deleted</a>. If you’ve set the subscription to cancel at the end of the period, any pending prorations will also be left in place and collected at the end of the period. But if the subscription is set to cancel immediately, pending prorations will be removed.</p>

<p>By default, upon subscription cancellation, Stripe will stop automatic collection of all finalized invoices for the customer. This is intended to prevent unexpected payment attempts after the customer has canceled a subscription. However, you can resume automatic collection of the invoices manually after subscription cancellation to have us proceed. Or, you could check for unpaid invoices before allowing the customer to cancel the subscription at all.</p>


```js
stripe.DeleteSubscriptionsSubscriptionExposedId({
  "subscription_exposed_id": ""
}, context)
```

#### Input
* input `object`
  * subscription_exposed_id **required** `string`
  * expand `array`: Specifies which fields in the response should be expanded.
  * invoice_now `boolean`: Will generate a final invoice that invoices for any un-invoiced metered usage and new/pending proration invoice items.
  * prorate `boolean`: Will generate a proration invoice item that credits remaining unused time until the subscription period end.

#### Output
* output [subscription](#subscription)

### GetSubscriptionsSubscriptionExposedId
<p>Retrieves the subscription with the given ID.</p>


```js
stripe.GetSubscriptionsSubscriptionExposedId({
  "subscription_exposed_id": ""
}, context)
```

#### Input
* input `object`
  * expand `array`: Specifies which fields in the response should be expanded.
  * subscription_exposed_id **required** `string`

#### Output
* output [subscription](#subscription)

### PostSubscriptionsSubscriptionExposedId
<p>Updates an existing subscription on a customer to match the specified parameters. When changing plans or quantities, we will optionally prorate the price we charge next month to make up for any price changes. To preview how the proration will be calculated, use the <a href="#upcoming_invoice">upcoming invoice</a> endpoint.</p>


```js
stripe.PostSubscriptionsSubscriptionExposedId({
  "subscription_exposed_id": ""
}, context)
```

#### Input
* input `object`
  * subscription_exposed_id **required** `string`
  * add_invoice_items `array`: A list of prices and quantities that will generate invoice items appended to the first invoice for this subscription. You may pass up to 10 items.
  * application_fee_percent `number`: A non-negative decimal between 0 and 100, with at most two decimal places. This represents the percentage of the subscription invoice subtotal that will be transferred to the application owner's Stripe account. The request must be made by a platform account on a connected account in order to set an application fee percentage. For more information, see the application fees [documentation](https://stripe.com/docs/connect/subscriptions#collecting-fees-on-subscriptions).
  * billing_cycle_anchor `string` (values: now, unchanged): Either `now` or `unchanged`. Setting the value to `now` resets the subscription's billing cycle anchor to the current time. For more information, see the billing cycle [documentation](https://stripe.com/docs/billing/subscriptions/billing-cycle).
  * cancel_at_period_end `boolean`: Boolean indicating whether this subscription should cancel at the end of the current period.
  * collection_method `string` (values: charge_automatically, send_invoice): Either `charge_automatically`, or `send_invoice`. When charging automatically, Stripe will attempt to pay this subscription at the end of the cycle using the default source attached to the customer. When sending an invoice, Stripe will email your customer an invoice with payment instructions. Defaults to `charge_automatically`.
  * coupon `string`: The code of the coupon to apply to this subscription. A coupon applied to a subscription will only affect invoices created for that particular subscription.
  * days_until_due `integer`: Number of days a customer has to pay invoices generated by this subscription. Valid only for subscriptions where `collection_method` is set to `send_invoice`.
  * default_payment_method `string`: ID of the default payment method for the subscription. It must belong to the customer associated with the subscription. This takes precedence over `default_source`. If neither are set, invoices will use the customer's [invoice_settings.default_payment_method](https://stripe.com/docs/api/customers/object#customer_object-invoice_settings-default_payment_method) or [default_source](https://stripe.com/docs/api/customers/object#customer_object-default_source).
  * default_source `string`: ID of the default payment source for the subscription. It must belong to the customer associated with the subscription and be in a chargeable state. If `default_payment_method` is also set, `default_payment_method` will take precedence. If neither are set, invoices will use the customer's [invoice_settings.default_payment_method](https://stripe.com/docs/api/customers/object#customer_object-invoice_settings-default_payment_method) or [default_source](https://stripe.com/docs/api/customers/object#customer_object-default_source).
  * expand `array`: Specifies which fields in the response should be expanded.
  * items `array`: A list of up to 20 subscription items, each with an attached price.
  * off_session `boolean`: Indicates if a customer is on or off-session while an invoice payment is attempted.
  * payment_behavior `string` (values: allow_incomplete, error_if_incomplete, pending_if_incomplete): Use `allow_incomplete` to transition the subscription to `status=past_due` if a payment is required but cannot be paid. This allows you to manage scenarios where additional user actions are needed to pay a subscription's invoice. For example, SCA regulation may require 3DS authentication to complete payment. See the [SCA Migration Guide](https://stripe.com/docs/billing/migration/strong-customer-authentication) for Billing to learn more. This is the default behavior.
  * promotion_code `string`: The promotion code to apply to this subscription. A promotion code applied to a subscription will only affect invoices created for that particular subscription.
  * proration_behavior `string` (values: always_invoice, create_prorations, none): Determines how to handle [prorations](https://stripe.com/docs/subscriptions/billing-cycle#prorations) when the billing cycle changes (e.g., when switching plans, resetting `billing_cycle_anchor=now`, or starting a trial), or if an item's `quantity` changes. Valid values are `create_prorations`, `none`, or `always_invoice`.
  * proration_date `integer`: If set, the proration will be calculated as though the subscription was updated at the given time. This can be used to apply exactly the same proration that was previewed with [upcoming invoice](https://stripe.com/docs/api#retrieve_customer_invoice) endpoint. It can also be used to implement custom proration logic, such as prorating by day instead of by second, by providing the time that you wish to use for proration calculations.
  * trial_from_plan `boolean`: Indicates if a plan's `trial_period_days` should be applied to the subscription. Setting `trial_end` per subscription is preferred, and this defaults to `false`. Setting this flag to `true` together with `trial_end` is not allowed.

#### Output
* output [subscription](#subscription)

### DeleteSubscriptionsSubscriptionExposedIdDiscount
<p>Removes the currently applied discount on a subscription.</p>


```js
stripe.DeleteSubscriptionsSubscriptionExposedIdDiscount({
  "subscription_exposed_id": ""
}, context)
```

#### Input
* input `object`
  * subscription_exposed_id **required** `string`

#### Output
* output [deleted_discount](#deleted_discount)

### GetTaxRates
<p>Returns a list of your tax rates. Tax rates are returned sorted by creation date, with the most recently created tax rates appearing first.</p>


```js
stripe.GetTaxRates({}, context)
```

#### Input
* input `object`
  * active `boolean`: Optional flag to filter by tax rates that are either active or inactive (archived).
  * ending_before `string`: A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
  * expand `array`: Specifies which fields in the response should be expanded.
  * inclusive `boolean`: Optional flag to filter by tax rates that are inclusive (or those that are not inclusive).
  * limit `integer`: A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
  * starting_after `string`: A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.

#### Output
* output `object`
  * data **required** `array`
    * items [tax_rate](#tax_rate)
  * has_more **required** `boolean`: True if this list has another page of items after this one that can be fetched.
  * object **required** `string` (values: list): String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
  * url **required** `string`: The URL where this list can be accessed.

### PostTaxRates
<p>Creates a new tax rate.</p>


```js
stripe.PostTaxRates({
  "display_name": "",
  "inclusive": true,
  "percentage": 0
}, context)
```

#### Input
* input `object`
  * active `boolean`: Flag determining whether the tax rate is active or inactive (archived). Inactive tax rates cannot be used with new applications or Checkout Sessions, but will still work for subscriptions and invoices that already have it set.
  * description `string`: An arbitrary string attached to the tax rate for your internal use only. It will not be visible to your customers.
  * display_name **required** `string`: The display name of the tax rate, which will be shown to users.
  * expand `array`: Specifies which fields in the response should be expanded.
  * inclusive **required** `boolean`: This specifies if the tax rate is inclusive or exclusive.
  * jurisdiction `string`: The jurisdiction for the tax rate. You can use this label field for tax reporting purposes. It also appears on your customer’s invoice.
  * metadata `object`: Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
  * percentage **required** `number`: This represents the tax rate percent out of 100.

#### Output
* output [tax_rate](#tax_rate)

### GetTaxRatesTaxRate
<p>Retrieves a tax rate with the given ID</p>


```js
stripe.GetTaxRatesTaxRate({
  "tax_rate": ""
}, context)
```

#### Input
* input `object`
  * expand `array`: Specifies which fields in the response should be expanded.
  * tax_rate **required** `string`

#### Output
* output [tax_rate](#tax_rate)

### PostTaxRatesTaxRate
<p>Updates an existing tax rate.</p>


```js
stripe.PostTaxRatesTaxRate({
  "tax_rate": ""
}, context)
```

#### Input
* input `object`
  * tax_rate **required** `string`
  * active `boolean`: Flag determining whether the tax rate is active or inactive (archived). Inactive tax rates cannot be used with new applications or Checkout Sessions, but will still work for subscriptions and invoices that already have it set.
  * description `string`: An arbitrary string attached to the tax rate for your internal use only. It will not be visible to your customers.
  * display_name `string`: The display name of the tax rate, which will be shown to users.
  * expand `array`: Specifies which fields in the response should be expanded.
  * jurisdiction `string`: The jurisdiction for the tax rate. You can use this label field for tax reporting purposes. It also appears on your customer’s invoice.

#### Output
* output [tax_rate](#tax_rate)

### PostTerminalConnectionTokens
<p>To connect to a reader the Stripe Terminal SDK needs to retrieve a short-lived connection token from Stripe, proxied through your server. On your backend, add an endpoint that creates and returns a connection token.</p>


```js
stripe.PostTerminalConnectionTokens({}, context)
```

#### Input
* input `object`
  * expand `array`: Specifies which fields in the response should be expanded.
  * location `string`: The id of the location that this connection token is scoped to. If specified the connection token will only be usable with readers assigned to that location, otherwise the connection token will be usable with all readers.

#### Output
* output [terminal.connection_token](#terminal.connection_token)

### GetTerminalLocations
<p>Returns a list of <code>Location</code> objects.</p>


```js
stripe.GetTerminalLocations({}, context)
```

#### Input
* input `object`
  * ending_before `string`: A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
  * expand `array`: Specifies which fields in the response should be expanded.
  * limit `integer`: A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
  * starting_after `string`: A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.

#### Output
* output `object`
  * data **required** `array`
    * items [terminal.location](#terminal.location)
  * has_more **required** `boolean`: True if this list has another page of items after this one that can be fetched.
  * object **required** `string` (values: list): String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
  * url **required** `string`: The URL where this list can be accessed.

### PostTerminalLocations
<p>Creates a new <code>Location</code> object.</p>


```js
stripe.PostTerminalLocations({
  "address": {},
  "display_name": ""
}, context)
```

#### Input
* input `object`
  * address **required** `object`: The full address of the location.
  * display_name **required** `string`: A name for the location.
  * expand `array`: Specifies which fields in the response should be expanded.

#### Output
* output [terminal.location](#terminal.location)

### DeleteTerminalLocationsLocation
<p>Deletes a <code>Location</code> object.</p>


```js
stripe.DeleteTerminalLocationsLocation({
  "location": ""
}, context)
```

#### Input
* input `object`
  * location **required** `string`

#### Output
* output [deleted_terminal.location](#deleted_terminal.location)

### GetTerminalLocationsLocation
<p>Retrieves a <code>Location</code> object.</p>


```js
stripe.GetTerminalLocationsLocation({
  "location": ""
}, context)
```

#### Input
* input `object`
  * expand `array`: Specifies which fields in the response should be expanded.
  * location **required** `string`

#### Output
* output [terminal.location](#terminal.location)

### PostTerminalLocationsLocation
<p>Updates a <code>Location</code> object by setting the values of the parameters passed. Any parameters not provided will be left unchanged.</p>


```js
stripe.PostTerminalLocationsLocation({
  "location": ""
}, context)
```

#### Input
* input `object`
  * location **required** `string`
  * address `object`: The full address of the location.
  * display_name `string`: A name for the location.
  * expand `array`: Specifies which fields in the response should be expanded.

#### Output
* output [terminal.location](#terminal.location)

### GetTerminalReaders
<p>Returns a list of <code>Reader</code> objects.</p>


```js
stripe.GetTerminalReaders({}, context)
```

#### Input
* input `object`
  * device_type `string` (values: bbpos_chipper2x, verifone_P400): Filters readers by device type
  * ending_before `string`: A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
  * expand `array`: Specifies which fields in the response should be expanded.
  * limit `integer`: A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
  * location `string`: A location ID to filter the response list to only readers at the specific location
  * starting_after `string`: A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
  * status `string` (values: offline, online): A status filter to filter readers to only offline or online readers

#### Output
* output `object`
  * data **required** `array`: A list of readers
    * items [terminal.reader](#terminal.reader)
  * has_more **required** `boolean`: True if this list has another page of items after this one that can be fetched.
  * object **required** `string` (values: list): String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
  * url **required** `string`: The URL where this list can be accessed.

### PostTerminalReaders
<p>Creates a new <code>Reader</code> object.</p>


```js
stripe.PostTerminalReaders({
  "registration_code": ""
}, context)
```

#### Input
* input `object`
  * expand `array`: Specifies which fields in the response should be expanded.
  * label `string`: Custom label given to the reader for easier identification. If no label is specified, the registration code will be used.
  * location `string`: The location to assign the reader to. If no location is specified, the reader will be assigned to the account's default location.
  * registration_code **required** `string`: A code generated by the reader used for registering to an account.

#### Output
* output [terminal.reader](#terminal.reader)

### DeleteTerminalReadersReader
<p>Deletes a <code>Reader</code> object.</p>


```js
stripe.DeleteTerminalReadersReader({
  "reader": ""
}, context)
```

#### Input
* input `object`
  * reader **required** `string`

#### Output
* output [deleted_terminal.reader](#deleted_terminal.reader)

### GetTerminalReadersReader
<p>Retrieves a <code>Reader</code> object.</p>


```js
stripe.GetTerminalReadersReader({
  "reader": ""
}, context)
```

#### Input
* input `object`
  * expand `array`: Specifies which fields in the response should be expanded.
  * reader **required** `string`

#### Output
* output [terminal.reader](#terminal.reader)

### PostTerminalReadersReader
<p>Updates a <code>Reader</code> object by setting the values of the parameters passed. Any parameters not provided will be left unchanged.</p>


```js
stripe.PostTerminalReadersReader({
  "reader": ""
}, context)
```

#### Input
* input `object`
  * reader **required** `string`
  * expand `array`: Specifies which fields in the response should be expanded.
  * label `string`: The new label of the reader.

#### Output
* output [terminal.reader](#terminal.reader)

### PostTokens
<p>Creates a single-use token that represents a bank account’s details.
This token can be used with any API method in place of a bank account dictionary. This token can be used only once, by attaching it to a <a href="#accounts">Custom account</a>.</p>


```js
stripe.PostTokens({}, context)
```

#### Input
* input `object`
  * account `object`: Information for the account this token will represent.
  * bank_account `object`: The bank account this token will represent.
  * customer `string`: The customer (owned by the application's account) for which to create a token. This can be used only with an [OAuth access token](https://stripe.com/docs/connect/standard-accounts) or [Stripe-Account header](https://stripe.com/docs/connect/authentication). For more details, see [Cloning Saved Payment Methods](https://stripe.com/docs/connect/cloning-saved-payment-methods).
  * cvc_update `object`: The updated CVC value this token will represent.
  * expand `array`: Specifies which fields in the response should be expanded.
  * person `object`: Information for the person this token will represent.
  * pii `object`: The PII this token will represent.

#### Output
* output [token](#token)

### GetTokensToken
<p>Retrieves the token with the given ID.</p>


```js
stripe.GetTokensToken({
  "token": ""
}, context)
```

#### Input
* input `object`
  * expand `array`: Specifies which fields in the response should be expanded.
  * token **required** `string`

#### Output
* output [token](#token)

### GetTopups
<p>Returns a list of top-ups.</p>


```js
stripe.GetTopups({}, context)
```

#### Input
* input `object`
  * ending_before `string`: A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
  * expand `array`: Specifies which fields in the response should be expanded.
  * limit `integer`: A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
  * starting_after `string`: A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
  * status `string` (values: canceled, failed, pending, succeeded): Only return top-ups that have the given status. One of `canceled`, `failed`, `pending` or `succeeded`.

#### Output
* output `object`
  * data **required** `array`
    * items [topup](#topup)
  * has_more **required** `boolean`: True if this list has another page of items after this one that can be fetched.
  * object **required** `string` (values: list): String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
  * url **required** `string`: The URL where this list can be accessed.

### PostTopups
<p>Top up the balance of an account</p>


```js
stripe.PostTopups({
  "amount": 0,
  "currency": ""
}, context)
```

#### Input
* input `object`
  * amount **required** `integer`: A positive integer representing how much to transfer.
  * currency **required** `string`: Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
  * description `string`: An arbitrary string attached to the object. Often useful for displaying to users.
  * expand `array`: Specifies which fields in the response should be expanded.
  * source `string`: The ID of a source to transfer funds from. For most users, this should be left unspecified which will use the bank account that was set up in the dashboard for the specified currency. In test mode, this can be a test bank token (see [Testing Top-ups](https://stripe.com/docs/connect/testing#testing-top-ups)).
  * statement_descriptor `string`: Extra information about a top-up for the source's bank statement. Limited to 15 ASCII characters.
  * transfer_group `string`: A string that identifies this top-up as part of a group.

#### Output
* output [topup](#topup)

### GetTopupsTopup
<p>Retrieves the details of a top-up that has previously been created. Supply the unique top-up ID that was returned from your previous request, and Stripe will return the corresponding top-up information.</p>


```js
stripe.GetTopupsTopup({
  "topup": ""
}, context)
```

#### Input
* input `object`
  * expand `array`: Specifies which fields in the response should be expanded.
  * topup **required** `string`

#### Output
* output [topup](#topup)

### PostTopupsTopup
<p>Updates the metadata of a top-up. Other top-up details are not editable by design.</p>


```js
stripe.PostTopupsTopup({
  "topup": ""
}, context)
```

#### Input
* input `object`
  * topup **required** `string`
  * description `string`: An arbitrary string attached to the object. Often useful for displaying to users.
  * expand `array`: Specifies which fields in the response should be expanded.

#### Output
* output [topup](#topup)

### PostTopupsTopupCancel
<p>Cancels a top-up. Only pending top-ups can be canceled.</p>


```js
stripe.PostTopupsTopupCancel({
  "topup": ""
}, context)
```

#### Input
* input `object`
  * topup **required** `string`
  * expand `array`: Specifies which fields in the response should be expanded.

#### Output
* output [topup](#topup)

### GetTransfers
<p>Returns a list of existing transfers sent to connected accounts. The transfers are returned in sorted order, with the most recently created transfers appearing first.</p>


```js
stripe.GetTransfers({}, context)
```

#### Input
* input `object`
  * destination `string`: Only return transfers for the destination specified by this account ID.
  * ending_before `string`: A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
  * expand `array`: Specifies which fields in the response should be expanded.
  * limit `integer`: A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
  * starting_after `string`: A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
  * transfer_group `string`: Only return transfers with the specified transfer group.

#### Output
* output `object`
  * data **required** `array`: Details about each object.
    * items [transfer](#transfer)
  * has_more **required** `boolean`: True if this list has another page of items after this one that can be fetched.
  * object **required** `string` (values: list): String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
  * url **required** `string`: The URL where this list can be accessed.

### PostTransfers
<p>To send funds from your Stripe account to a connected account, you create a new transfer object. Your <a href="#balance">Stripe balance</a> must be able to cover the transfer amount, or you’ll receive an “Insufficient Funds” error.</p>


```js
stripe.PostTransfers({
  "currency": "",
  "destination": ""
}, context)
```

#### Input
* input `object`
  * amount `integer`: A positive integer in %s representing how much to transfer.
  * currency **required** `string`: 3-letter [ISO code for currency](https://stripe.com/docs/payouts).
  * description `string`: An arbitrary string attached to the object. Often useful for displaying to users.
  * destination **required** `string`: The ID of a connected Stripe account. <a href="/docs/connect/charges-transfers">See the Connect documentation</a> for details.
  * expand `array`: Specifies which fields in the response should be expanded.
  * metadata `object`: Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
  * source_transaction `string`: You can use this parameter to transfer funds from a charge before they are added to your available balance. A pending balance will transfer immediately but the funds will not become available until the original charge becomes available. [See the Connect documentation](https://stripe.com/docs/connect/charges-transfers#transfer-availability) for details.
  * source_type `string` (values: bank_account, card, fpx): The source balance to use for this transfer. One of `bank_account`, `card`, or `fpx`. For most users, this will default to `card`.
  * transfer_group `string`: A string that identifies this transaction as part of a group. See the [Connect documentation](https://stripe.com/docs/connect/charges-transfers#transfer-options) for details.

#### Output
* output [transfer](#transfer)

### GetTransfersIdReversals
<p>You can see a list of the reversals belonging to a specific transfer. Note that the 10 most recent reversals are always available by default on the transfer object. If you need more than those 10, you can use this API method and the <code>limit</code> and <code>starting_after</code> parameters to page through additional reversals.</p>


```js
stripe.GetTransfersIdReversals({
  "id": ""
}, context)
```

#### Input
* input `object`
  * ending_before `string`: A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
  * expand `array`: Specifies which fields in the response should be expanded.
  * id **required** `string`
  * limit `integer`: A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
  * starting_after `string`: A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.

#### Output
* output `object`
  * data **required** `array`: Details about each object.
    * items [transfer_reversal](#transfer_reversal)
  * has_more **required** `boolean`: True if this list has another page of items after this one that can be fetched.
  * object **required** `string` (values: list): String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
  * url **required** `string`: The URL where this list can be accessed.

### PostTransfersIdReversals
<p>When you create a new reversal, you must specify a transfer to create it on.</p>

<p>When reversing transfers, you can optionally reverse part of the transfer. You can do so as many times as you wish until the entire transfer has been reversed.</p>

<p>Once entirely reversed, a transfer can’t be reversed again. This method will return an error when called on an already-reversed transfer, or when trying to reverse more money than is left on a transfer.</p>


```js
stripe.PostTransfersIdReversals({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`
  * amount `integer`: A positive integer in %s representing how much of this transfer to reverse. Can only reverse up to the unreversed amount remaining of the transfer. Partial transfer reversals are only allowed for transfers to Stripe Accounts. Defaults to the entire transfer amount.
  * description `string`: An arbitrary string which you can attach to a reversal object. It is displayed alongside the reversal in the Dashboard. This will be unset if you POST an empty value.
  * expand `array`: Specifies which fields in the response should be expanded.
  * refund_application_fee `boolean`: Boolean indicating whether the application fee should be refunded when reversing this transfer. If a full transfer reversal is given, the full application fee will be refunded. Otherwise, the application fee will be refunded with an amount proportional to the amount of the transfer reversed.

#### Output
* output [transfer_reversal](#transfer_reversal)

### GetTransfersTransfer
<p>Retrieves the details of an existing transfer. Supply the unique transfer ID from either a transfer creation request or the transfer list, and Stripe will return the corresponding transfer information.</p>


```js
stripe.GetTransfersTransfer({
  "transfer": ""
}, context)
```

#### Input
* input `object`
  * expand `array`: Specifies which fields in the response should be expanded.
  * transfer **required** `string`

#### Output
* output [transfer](#transfer)

### PostTransfersTransfer
<p>Updates the specified transfer by setting the values of the parameters passed. Any parameters not provided will be left unchanged.</p>

<p>This request accepts only metadata as an argument.</p>


```js
stripe.PostTransfersTransfer({
  "transfer": ""
}, context)
```

#### Input
* input `object`
  * transfer **required** `string`
  * description `string`: An arbitrary string attached to the object. Often useful for displaying to users.
  * expand `array`: Specifies which fields in the response should be expanded.

#### Output
* output [transfer](#transfer)

### GetTransfersTransferReversalsId
<p>By default, you can see the 10 most recent reversals stored directly on the transfer object, but you can also retrieve details about a specific reversal stored on the transfer.</p>


```js
stripe.GetTransfersTransferReversalsId({
  "id": "",
  "transfer": ""
}, context)
```

#### Input
* input `object`
  * expand `array`: Specifies which fields in the response should be expanded.
  * id **required** `string`
  * transfer **required** `string`

#### Output
* output [transfer_reversal](#transfer_reversal)

### PostTransfersTransferReversalsId
<p>Updates the specified reversal by setting the values of the parameters passed. Any parameters not provided will be left unchanged.</p>

<p>This request only accepts metadata and description as arguments.</p>


```js
stripe.PostTransfersTransferReversalsId({
  "id": "",
  "transfer": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`
  * transfer **required** `string`
  * expand `array`: Specifies which fields in the response should be expanded.

#### Output
* output [transfer_reversal](#transfer_reversal)

### GetWebhookEndpoints
<p>Returns a list of your webhook endpoints.</p>


```js
stripe.GetWebhookEndpoints({}, context)
```

#### Input
* input `object`
  * ending_before `string`: A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
  * expand `array`: Specifies which fields in the response should be expanded.
  * limit `integer`: A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
  * starting_after `string`: A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.

#### Output
* output `object`
  * data **required** `array`
    * items [webhook_endpoint](#webhook_endpoint)
  * has_more **required** `boolean`: True if this list has another page of items after this one that can be fetched.
  * object **required** `string` (values: list): String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
  * url **required** `string`: The URL where this list can be accessed.

### PostWebhookEndpoints
<p>A webhook endpoint must have a <code>url</code> and a list of <code>enabled_events</code>. You may optionally specify the Boolean <code>connect</code> parameter. If set to true, then a Connect webhook endpoint that notifies the specified <code>url</code> about events from all connected accounts is created; otherwise an account webhook endpoint that notifies the specified <code>url</code> only about events from your account is created. You can also create webhook endpoints in the <a href="https://dashboard.stripe.com/account/webhooks">webhooks settings</a> section of the Dashboard.</p>


```js
stripe.PostWebhookEndpoints({
  "enabled_events": [],
  "url": ""
}, context)
```

#### Input
* input `object`
  * api_version `string` (values: 2011-01-01, 2011-06-21, 2011-06-28, 2011-08-01, 2011-09-15, 2011-11-17, 2012-02-23, 2012-03-25, 2012-06-18, 2012-06-28, 2012-07-09, 2012-09-24, 2012-10-26, 2012-11-07, 2013-02-11, 2013-02-13, 2013-07-05, 2013-08-12, 2013-08-13, 2013-10-29, 2013-12-03, 2014-01-31, 2014-03-13, 2014-03-28, 2014-05-19, 2014-06-13, 2014-06-17, 2014-07-22, 2014-07-26, 2014-08-04, 2014-08-20, 2014-09-08, 2014-10-07, 2014-11-05, 2014-11-20, 2014-12-08, 2014-12-17, 2014-12-22, 2015-01-11, 2015-01-26, 2015-02-10, 2015-02-16, 2015-02-18, 2015-03-24, 2015-04-07, 2015-06-15, 2015-07-07, 2015-07-13, 2015-07-28, 2015-08-07, 2015-08-19, 2015-09-03, 2015-09-08, 2015-09-23, 2015-10-01, 2015-10-12, 2015-10-16, 2016-02-03, 2016-02-19, 2016-02-22, 2016-02-23, 2016-02-29, 2016-03-07, 2016-06-15, 2016-07-06, 2016-10-19, 2017-01-27, 2017-02-14, 2017-04-06, 2017-05-25, 2017-06-05, 2017-08-15, 2017-12-14, 2018-01-23, 2018-02-05, 2018-02-06, 2018-02-28, 2018-05-21, 2018-07-27, 2018-08-23, 2018-09-06, 2018-09-24, 2018-10-31, 2018-11-08, 2019-02-11, 2019-02-19, 2019-03-14, 2019-05-16, 2019-08-14, 2019-09-09, 2019-10-08, 2019-10-17, 2019-11-05, 2019-12-03, 2020-03-02, 2020-08-27): Events sent to this endpoint will be generated with this Stripe Version instead of your account's default Stripe Version.
  * connect `boolean`: Whether this endpoint should receive events from connected accounts (`true`), or from your account (`false`). Defaults to `false`.
  * description `string`: An optional description of what the webhook is used for.
  * enabled_events **required** `array`: The list of events to enable for this endpoint. You may specify `['*']` to enable all events, except those that require explicit selection.
  * expand `array`: Specifies which fields in the response should be expanded.
  * url **required** `string`: The URL of the webhook endpoint.

#### Output
* output [webhook_endpoint](#webhook_endpoint)

### DeleteWebhookEndpointsWebhookEndpoint
<p>You can also delete webhook endpoints via the <a href="https://dashboard.stripe.com/account/webhooks">webhook endpoint management</a> page of the Stripe dashboard.</p>


```js
stripe.DeleteWebhookEndpointsWebhookEndpoint({
  "webhook_endpoint": ""
}, context)
```

#### Input
* input `object`
  * webhook_endpoint **required** `string`

#### Output
* output [deleted_webhook_endpoint](#deleted_webhook_endpoint)

### GetWebhookEndpointsWebhookEndpoint
<p>Retrieves the webhook endpoint with the given ID.</p>


```js
stripe.GetWebhookEndpointsWebhookEndpoint({
  "webhook_endpoint": ""
}, context)
```

#### Input
* input `object`
  * expand `array`: Specifies which fields in the response should be expanded.
  * webhook_endpoint **required** `string`

#### Output
* output [webhook_endpoint](#webhook_endpoint)

### PostWebhookEndpointsWebhookEndpoint
<p>Updates the webhook endpoint. You may edit the <code>url</code>, the list of <code>enabled_events</code>, and the status of your endpoint.</p>


```js
stripe.PostWebhookEndpointsWebhookEndpoint({
  "webhook_endpoint": ""
}, context)
```

#### Input
* input `object`
  * webhook_endpoint **required** `string`
  * description `string`: An optional description of what the webhook is used for.
  * disabled `boolean`: Disable the webhook endpoint if set to true.
  * enabled_events `array`: The list of events to enable for this endpoint. You may specify `['*']` to enable all events, except those that require explicit selection.
  * expand `array`: Specifies which fields in the response should be expanded.
  * url `string`: The URL of the webhook endpoint.

#### Output
* output [webhook_endpoint](#webhook_endpoint)



## Definitions

### account
* Account `object`: This is an object representing a Stripe account. You can retrieve it to see
  * business_type `string` (values: company, government_entity, individual, non_profit): The business type.
  * capabilities [account_capabilities](#account_capabilities)
  * charges_enabled `boolean`: Whether the account can create live charges.
  * company [legal_entity_company](#legal_entity_company)
  * country `string`: The account's country.
  * created `integer`: Time at which the object was created. Measured in seconds since the Unix epoch.
  * default_currency `string`: Three-letter ISO currency code representing the default currency for the account. This must be a currency that [Stripe supports in the account's country](https://stripe.com/docs/payouts).
  * details_submitted `boolean`: Whether account details have been submitted. Standard accounts cannot receive payouts before this is true.
  * email `string`: The primary user's email address.
  * external_accounts `object`: External accounts (bank accounts and debit cards) currently attached to this account
    * data **required** `array`: The list contains all external accounts that have been attached to the Stripe account. These may be bank accounts or cards.
    * has_more **required** `boolean`: True if this list has another page of items after this one that can be fetched.
    * object **required** `string` (values: list): String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
    * url **required** `string`: The URL where this list can be accessed.
  * id **required** `string`: Unique identifier for the object.
  * individual [person](#person)
  * metadata `object`: Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
  * object **required** `string` (values: account): String representing the object's type. Objects of the same type share the same value.
  * payouts_enabled `boolean`: Whether Stripe can send payouts to this account.
  * requirements [account_requirements](#account_requirements)
  * tos_acceptance [account_tos_acceptance](#account_tos_acceptance)
  * type `string` (values: custom, express, standard): The Stripe account type. Can be `standard`, `express`, or `custom`.

### account_bacs_debit_payments_settings
* AccountBacsDebitPaymentsSettings `object`
  * display_name `string`: The Bacs Direct Debit Display Name for this account. For payments made with Bacs Direct Debit, this will appear on the mandate, and as the statement descriptor.

### account_branding_settings
* AccountBrandingSettings `object`
  * primary_color `string`: A CSS hex color value representing the primary branding color for this account
  * secondary_color `string`: A CSS hex color value representing the secondary branding color for this account

### account_business_profile
* AccountBusinessProfile `object`
  * mcc `string`: [The merchant category code for the account](https://stripe.com/docs/connect/setting-mcc). MCCs are used to classify businesses based on the goods or services they provide.
  * name `string`: The customer-facing business name.
  * product_description `string`: Internal-only description of the product sold or service provided by the business. It's used by Stripe for risk and underwriting purposes.
  * support_email `string`: A publicly available email address for sending support issues to.
  * support_phone `string`: A publicly available phone number to call with support issues.
  * support_url `string`: A publicly available website for handling support issues.
  * url `string`: The business's publicly available website.

### account_capabilities
* AccountCapabilities `object`
  * au_becs_debit_payments `string` (values: active, inactive, pending): The status of the BECS Direct Debit (AU) payments capability of the account, or whether the account can directly process BECS Direct Debit (AU) charges.
  * bacs_debit_payments `string` (values: active, inactive, pending): The status of the Bacs Direct Debits payments capability of the account, or whether the account can directly process Bacs Direct Debits charges.
  * bancontact_payments `string` (values: active, inactive, pending): The status of the Bancontact payments capability of the account, or whether the account can directly process Bancontact charges.
  * card_issuing `string` (values: active, inactive, pending): The status of the card issuing capability of the account, or whether you can use Issuing to distribute funds on cards
  * card_payments `string` (values: active, inactive, pending): The status of the card payments capability of the account, or whether the account can directly process credit and debit card charges.
  * cartes_bancaires_payments `string` (values: active, inactive, pending): The status of the Cartes Bancaires payments capability of the account, or whether the account can directly process Cartes Bancaires card charges in EUR currency.
  * eps_payments `string` (values: active, inactive, pending): The status of the EPS payments capability of the account, or whether the account can directly process EPS charges.
  * fpx_payments `string` (values: active, inactive, pending): The status of the FPX payments capability of the account, or whether the account can directly process FPX charges.
  * giropay_payments `string` (values: active, inactive, pending): The status of the giropay payments capability of the account, or whether the account can directly process giropay charges.
  * grabpay_payments `string` (values: active, inactive, pending): The status of the GrabPay payments capability of the account, or whether the account can directly process GrabPay charges.
  * ideal_payments `string` (values: active, inactive, pending): The status of the iDEAL payments capability of the account, or whether the account can directly process iDEAL charges.
  * jcb_payments `string` (values: active, inactive, pending): The status of the JCB payments capability of the account, or whether the account (Japan only) can directly process JCB credit card charges in JPY currency.
  * legacy_payments `string` (values: active, inactive, pending): The status of the legacy payments capability of the account.
  * oxxo_payments `string` (values: active, inactive, pending): The status of the OXXO payments capability of the account, or whether the account can directly process OXXO charges.
  * p24_payments `string` (values: active, inactive, pending): The status of the P24 payments capability of the account, or whether the account can directly process P24 charges.
  * sepa_debit_payments `string` (values: active, inactive, pending): The status of the SEPA Direct Debits payments capability of the account, or whether the account can directly process SEPA Direct Debits charges.
  * sofort_payments `string` (values: active, inactive, pending): The status of the Sofort payments capability of the account, or whether the account can directly process Sofort charges.
  * tax_reporting_us_1099_k `string` (values: active, inactive, pending): The status of the tax reporting 1099-K (US) capability of the account.
  * tax_reporting_us_1099_misc `string` (values: active, inactive, pending): The status of the tax reporting 1099-MISC (US) capability of the account.
  * transfers `string` (values: active, inactive, pending): The status of the transfers capability of the account, or whether your platform can transfer funds to the account.

### account_capability_requirements
* AccountCapabilityRequirements `object`
  * current_deadline `integer`: The date the fields in `currently_due` must be collected by to keep the capability enabled for the account.
  * currently_due **required** `array`: The fields that need to be collected to keep the capability enabled. If not collected by the `current_deadline`, these fields appear in `past_due` as well, and the capability is disabled.
    * items `string`
  * disabled_reason `string`: If the capability is disabled, this string describes why. Possible values are `requirement.fields_needed`, `pending.onboarding`, `pending.review`, `rejected_fraud`, or `rejected.other`.
  * errors **required** `array`: The fields that are `currently_due` and need to be collected again because validation or verification failed for some reason.
    * items [account_requirements_error](#account_requirements_error)
  * eventually_due **required** `array`: The fields that need to be collected assuming all volume thresholds are reached. As they become required, these fields appear in `currently_due` as well, and the `current_deadline` is set.
    * items `string`
  * past_due **required** `array`: The fields that weren't collected by the `current_deadline`. These fields need to be collected to enable the capability for the account.
    * items `string`
  * pending_verification **required** `array`: Fields that may become required depending on the results of verification or review. An empty array unless an asynchronous verification is pending. If verification fails, the fields in this array become required and move to `currently_due` or `past_due`.
    * items `string`

### account_card_payments_settings
* AccountCardPaymentsSettings `object`
  * decline_on [account_decline_charge_on](#account_decline_charge_on)
  * statement_descriptor_prefix `string`: The default text that appears on credit card statements when a charge is made. This field prefixes any dynamic `statement_descriptor` specified on the charge. `statement_descriptor_prefix` is useful for maximizing descriptor space for the dynamic portion.

### account_dashboard_settings
* AccountDashboardSettings `object`
  * display_name `string`: The display name for this account. This is used on the Stripe Dashboard to differentiate between accounts.
  * timezone `string`: The timezone used in the Stripe Dashboard for this account. A list of possible time zone values is maintained at the [IANA Time Zone Database](http://www.iana.org/time-zones).

### account_decline_charge_on
* AccountDeclineChargeOn `object`
  * avs_failure **required** `boolean`: Whether Stripe automatically declines charges with an incorrect ZIP or postal code. This setting only applies when a ZIP or postal code is provided and they fail bank verification.
  * cvc_failure **required** `boolean`: Whether Stripe automatically declines charges with an incorrect CVC. This setting only applies when a CVC is provided and it fails bank verification.

### account_link
* AccountLink `object`: Account Links are the means by which a Connect platform grants a connected account permission to access
  * created **required** `integer`: Time at which the object was created. Measured in seconds since the Unix epoch.
  * expires_at **required** `integer`: The timestamp at which this account link will expire.
  * object **required** `string` (values: account_link): String representing the object's type. Objects of the same type share the same value.
  * url **required** `string`: The URL for the account link.

### account_payments_settings
* AccountPaymentsSettings `object`
  * statement_descriptor `string`: The default text that appears on credit card statements when a charge is made. This field prefixes any dynamic `statement_descriptor` specified on the charge.
  * statement_descriptor_kana `string`: The Kana variation of the default text that appears on credit card statements when a charge is made (Japan only)
  * statement_descriptor_kanji `string`: The Kanji variation of the default text that appears on credit card statements when a charge is made (Japan only)

### account_payout_settings
* AccountPayoutSettings `object`
  * debit_negative_balances **required** `boolean`: A Boolean indicating if Stripe should try to reclaim negative balances from an attached bank account. See our [Understanding Connect Account Balances](https://stripe.com/docs/connect/account-balances) documentation for details. Default value is `true` for Express accounts and `false` for Custom accounts.
  * schedule **required** [transfer_schedule](#transfer_schedule)
  * statement_descriptor `string`: The text that appears on the bank account statement for payouts. If not set, this defaults to the platform's bank descriptor as set in the Dashboard.

### account_requirements
* AccountRequirements `object`
  * current_deadline `integer`: The date the fields in `currently_due` must be collected by to keep payouts enabled for the account. These fields might block payouts sooner if the next threshold is reached before these fields are collected.
  * currently_due `array`: The fields that need to be collected to keep the account enabled. If not collected by the `current_deadline`, these fields appear in `past_due` as well, and the account is disabled.
    * items `string`
  * disabled_reason `string`: If the account is disabled, this string describes why the account can’t create charges or receive payouts. Can be `requirements.past_due`, `requirements.pending_verification`, `rejected.fraud`, `rejected.terms_of_service`, `rejected.listed`, `rejected.other`, `listed`, `under_review`, or `other`.
  * errors `array`: The fields that are `currently_due` and need to be collected again because validation or verification failed for some reason.
    * items [account_requirements_error](#account_requirements_error)
  * eventually_due `array`: The fields that need to be collected assuming all volume thresholds are reached. As they become required, these fields appear in `currently_due` as well, and the `current_deadline` is set.
    * items `string`
  * past_due `array`: The fields that weren't collected by the `current_deadline`. These fields need to be collected to re-enable the account.
    * items `string`
  * pending_verification `array`: Fields that may become required depending on the results of verification or review. An empty array unless an asynchronous verification is pending. If verification fails, the fields in this array become required and move to `currently_due` or `past_due`.
    * items `string`

### account_requirements_error
* AccountRequirementsError `object`
  * code **required** `string` (values: invalid_address_city_state_postal_code, invalid_street_address, invalid_value_other, verification_document_address_mismatch, verification_document_address_missing, verification_document_corrupt, verification_document_country_not_supported, verification_document_dob_mismatch, verification_document_duplicate_type, verification_document_expired, verification_document_failed_copy, verification_document_failed_greyscale, verification_document_failed_other, verification_document_failed_test_mode, verification_document_fraudulent, verification_document_id_number_mismatch, verification_document_id_number_missing, verification_document_incomplete, verification_document_invalid, verification_document_issue_or_expiry_date_missing, verification_document_manipulated, verification_document_missing_back, verification_document_missing_front, verification_document_name_mismatch, verification_document_name_missing, verification_document_nationality_mismatch, verification_document_not_readable, verification_document_not_signed, verification_document_not_uploaded, verification_document_photo_mismatch, verification_document_too_large, verification_document_type_not_supported, verification_failed_address_match, verification_failed_business_iec_number, verification_failed_document_match, verification_failed_id_number_match, verification_failed_keyed_identity, verification_failed_keyed_match, verification_failed_name_match, verification_failed_other, verification_failed_tax_id_match, verification_failed_tax_id_not_issued): The code for the type of error.
  * reason **required** `string`: An informative message that indicates the error type and provides additional details about the error.
  * requirement **required** `string`: The specific user onboarding requirement field (in the requirements hash) that needs to be resolved.

### account_sepa_debit_payments_settings
* AccountSepaDebitPaymentsSettings `object`
  * creditor_id `string`: SEPA creditor identifier that identifies the company making the payment.

### account_settings
* AccountSettings `object`
  * bacs_debit_payments [account_bacs_debit_payments_settings](#account_bacs_debit_payments_settings)
  * branding **required** [account_branding_settings](#account_branding_settings)
  * card_payments **required** [account_card_payments_settings](#account_card_payments_settings)
  * dashboard **required** [account_dashboard_settings](#account_dashboard_settings)
  * payments **required** [account_payments_settings](#account_payments_settings)
  * payouts [account_payout_settings](#account_payout_settings)
  * sepa_debit_payments [account_sepa_debit_payments_settings](#account_sepa_debit_payments_settings)

### account_tos_acceptance
* AccountTOSAcceptance `object`
  * date `integer`: The Unix timestamp marking when the account representative accepted their service agreement
  * ip `string`: The IP address from which the account representative accepted their service agreement
  * service_agreement `string`: The user's service agreement type
  * user_agent `string`: The user agent of the browser from which the account representative accepted their service agreement

### address
* Address `object`
  * city `string`: City, district, suburb, town, or village.
  * country `string`: Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)).
  * line1 `string`: Address line 1 (e.g., street, PO Box, or company name).
  * line2 `string`: Address line 2 (e.g., apartment, suite, unit, or building).
  * postal_code `string`: ZIP or postal code.
  * state `string`: State, county, province, or region.

### alipay_account
* AlipayAccount `object`
  * created **required** `integer`: Time at which the object was created. Measured in seconds since the Unix epoch.
  * fingerprint **required** `string`: Uniquely identifies the account and will be the same across all Alipay account objects that are linked to the same Alipay account.
  * id **required** `string`: Unique identifier for the object.
  * livemode **required** `boolean`: Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
  * metadata `object`: Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
  * object **required** `string` (values: alipay_account): String representing the object's type. Objects of the same type share the same value.
  * payment_amount `integer`: If the Alipay account object is not reusable, the exact amount that you can create a charge for.
  * payment_currency `string`: If the Alipay account object is not reusable, the exact currency that you can create a charge for.
  * reusable **required** `boolean`: True if you can create multiple payments using this account. If the account is reusable, then you can freely choose the amount of each payment.
  * used **required** `boolean`: Whether this Alipay account object has ever been used for a payment.
  * username **required** `string`: The username for the Alipay account.

### api_errors
* APIErrors `object`
  * charge `string`: For card errors, the ID of the failed charge.
  * code `string`: For some errors that could be handled programmatically, a short string indicating the [error code](https://stripe.com/docs/error-codes) reported.
  * decline_code `string`: For card errors resulting from a card issuer decline, a short string indicating the [card issuer's reason for the decline](https://stripe.com/docs/declines#issuer-declines) if they provide one.
  * doc_url `string`: A URL to more information about the [error code](https://stripe.com/docs/error-codes) reported.
  * message `string`: A human-readable message providing more details about the error. For card errors, these messages can be shown to your users.
  * param `string`: If the error is parameter-specific, the parameter related to the error. For example, you can use this to display a message near the correct form field.
  * payment_intent [payment_intent](#payment_intent)
  * payment_method [payment_method](#payment_method)
  * payment_method_type `string`: If the error is specific to the type of payment method, the payment method type that had a problem. This field is only populated for invoice-related errors.
  * setup_intent [setup_intent](#setup_intent)
  * type **required** `string` (values: api_connection_error, api_error, authentication_error, card_error, idempotency_error, invalid_request_error, rate_limit_error): The type of error returned. One of `api_connection_error`, `api_error`, `authentication_error`, `card_error`, `idempotency_error`, `invalid_request_error`, or `rate_limit_error`

### apple_pay_domain
* ApplePayDomain `object`
  * created **required** `integer`: Time at which the object was created. Measured in seconds since the Unix epoch.
  * domain_name **required** `string`
  * id **required** `string`: Unique identifier for the object.
  * livemode **required** `boolean`: Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
  * object **required** `string` (values: apple_pay_domain): String representing the object's type. Objects of the same type share the same value.

### application
* Application `object`
  * id **required** `string`: Unique identifier for the object.
  * name `string`: The name of the application.
  * object **required** `string` (values: application): String representing the object's type. Objects of the same type share the same value.

### application_fee
* PlatformFee `object`
  * amount **required** `integer`: Amount earned, in %s.
  * amount_refunded **required** `integer`: Amount in %s refunded (can be less than the amount attribute on the fee if a partial refund was issued)
  * created **required** `integer`: Time at which the object was created. Measured in seconds since the Unix epoch.
  * currency **required** `string`: Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
  * id **required** `string`: Unique identifier for the object.
  * livemode **required** `boolean`: Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
  * object **required** `string` (values: application_fee): String representing the object's type. Objects of the same type share the same value.
  * refunded **required** `boolean`: Whether the fee has been fully refunded. If the fee is only partially refunded, this attribute will still be false.
  * refunds **required** `object`: A list of refunds that have been applied to the fee.
    * data **required** `array`: Details about each object.
      * items [fee_refund](#fee_refund)
    * has_more **required** `boolean`: True if this list has another page of items after this one that can be fetched.
    * object **required** `string` (values: list): String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
    * url **required** `string`: The URL where this list can be accessed.

### balance
* Balance `object`: This is an object representing your Stripe balance. You can retrieve it to see
  * available **required** `array`: Funds that are available to be transferred or paid out, whether automatically by Stripe or explicitly via the [Transfers API](https://stripe.com/docs/api#transfers) or [Payouts API](https://stripe.com/docs/api#payouts). The available balance for each currency and payment type can be found in the `source_types` property.
    * items [balance_amount](#balance_amount)
  * connect_reserved `array`: Funds held due to negative balances on connected Custom accounts. The connect reserve balance for each currency and payment type can be found in the `source_types` property.
    * items [balance_amount](#balance_amount)
  * instant_available `array`: Funds that can be paid out using Instant Payouts.
    * items [balance_amount](#balance_amount)
  * issuing [balance_detail](#balance_detail)
  * livemode **required** `boolean`: Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
  * object **required** `string` (values: balance): String representing the object's type. Objects of the same type share the same value.
  * pending **required** `array`: Funds that are not yet available in the balance, due to the 7-day rolling pay cycle. The pending balance for each currency, and for each payment type, can be found in the `source_types` property.
    * items [balance_amount](#balance_amount)

### balance_amount
* BalanceAmount `object`
  * amount **required** `integer`: Balance amount.
  * currency **required** `string`: Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
  * source_types [balance_amount_by_source_type](#balance_amount_by_source_type)

### balance_amount_by_source_type
* BalanceAmountBySourceType `object`
  * bank_account `integer`: Amount for bank account.
  * card `integer`: Amount for card.
  * fpx `integer`: Amount for FPX.

### balance_detail
* BalanceDetail `object`
  * available **required** `array`: Funds that are available for use.
    * items [balance_amount](#balance_amount)

### balance_transaction
* BalanceTransaction `object`: Balance transactions represent funds moving through your Stripe account.
  * amount **required** `integer`: Gross amount of the transaction, in %s.
  * available_on **required** `integer`: The date the transaction's net funds will become available in the Stripe balance.
  * created **required** `integer`: Time at which the object was created. Measured in seconds since the Unix epoch.
  * currency **required** `string`: Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
  * description `string`: An arbitrary string attached to the object. Often useful for displaying to users.
  * exchange_rate `number`: The exchange rate used, if applicable, for this transaction. Specifically, if money was converted from currency A to currency B, then the `amount` in currency A, times `exchange_rate`, would be the `amount` in currency B. For example, suppose you charged a customer 10.00 EUR. Then the PaymentIntent's `amount` would be `1000` and `currency` would be `eur`. Suppose this was converted into 12.34 USD in your Stripe account. Then the BalanceTransaction's `amount` would be `1234`, `currency` would be `usd`, and `exchange_rate` would be `1.234`.
  * fee **required** `integer`: Fees (in %s) paid for this transaction.
  * fee_details **required** `array`: Detailed breakdown of fees (in %s) paid for this transaction.
    * items [fee](#fee)
  * id **required** `string`: Unique identifier for the object.
  * net **required** `integer`: Net amount of the transaction, in %s.
  * object **required** `string` (values: balance_transaction): String representing the object's type. Objects of the same type share the same value.
  * reporting_category **required** `string`: [Learn more](https://stripe.com/docs/reports/reporting-categories) about how reporting categories can help you understand balance transactions from an accounting perspective.
  * status **required** `string`: If the transaction's net funds are available in the Stripe balance yet. Either `available` or `pending`.
  * type **required** `string` (values: adjustment, advance, advance_funding, anticipation_repayment, application_fee, application_fee_refund, charge, connect_collection_transfer, contribution, issuing_authorization_hold, issuing_authorization_release, issuing_dispute, issuing_transaction, payment, payment_failure_refund, payment_refund, payout, payout_cancel, payout_failure, refund, refund_failure, reserve_transaction, reserved_funds, stripe_fee, stripe_fx_fee, tax_fee, topup, topup_reversal, transfer, transfer_cancel, transfer_failure, transfer_refund): Transaction type: `adjustment`, `advance`, `advance_funding`, `anticipation_repayment`, `application_fee`, `application_fee_refund`, `charge`, `connect_collection_transfer`, `contribution`, `issuing_authorization_hold`, `issuing_authorization_release`, `issuing_dispute`, `issuing_transaction`, `payment`, `payment_failure_refund`, `payment_refund`, `payout`, `payout_cancel`, `payout_failure`, `refund`, `refund_failure`, `reserve_transaction`, `reserved_funds`, `stripe_fee`, `stripe_fx_fee`, `tax_fee`, `topup`, `topup_reversal`, `transfer`, `transfer_cancel`, `transfer_failure`, or `transfer_refund`. [Learn more](https://stripe.com/docs/reports/balance-transaction-types) about balance transaction types and what they represent. If you are looking to classify transactions for accounting purposes, you might want to consider `reporting_category` instead.

### bank_account
* BankAccount `object`: These bank accounts are payment methods on `Customer` objects.
  * account_holder_name `string`: The name of the person or business that owns the bank account.
  * account_holder_type `string`: The type of entity that holds the account. This can be either `individual` or `company`.
  * available_payout_methods `array`: A set of available payout methods for this bank account. Only values from this set should be passed as the `method` when creating a payout.
    * items `string` (values: instant, standard)
  * bank_name `string`: Name of the bank associated with the routing number (e.g., `WELLS FARGO`).
  * country **required** `string`: Two-letter ISO code representing the country the bank account is located in.
  * currency **required** `string`: Three-letter [ISO code for the currency](https://stripe.com/docs/payouts) paid out to the bank account.
  * default_for_currency `boolean`: Whether this bank account is the default external account for its currency.
  * fingerprint `string`: Uniquely identifies this particular bank account. You can use this attribute to check whether two bank accounts are the same.
  * id **required** `string`: Unique identifier for the object.
  * last4 **required** `string`: The last four digits of the bank account number.
  * metadata `object`: Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
  * object **required** `string` (values: bank_account): String representing the object's type. Objects of the same type share the same value.
  * routing_number `string`: The routing transit number for the bank account.
  * status **required** `string`: For bank accounts, possible values are `new`, `validated`, `verified`, `verification_failed`, or `errored`. A bank account that hasn't had any activity or validation performed is `new`. If Stripe can determine that the bank account exists, its status will be `validated`. Note that there often isn’t enough information to know (e.g., for smaller credit unions), and the validation is not always run. If customer bank account verification has succeeded, the bank account status will be `verified`. If the verification failed for any reason, such as microdeposit failure, the status will be `verification_failed`. If a transfer sent to this bank account fails, we'll set the status to `errored` and will not continue to send transfers until the bank details are updated.

### billing_details
* billing_details `object`
  * email `string`: Email address.
  * name `string`: Full name.
  * phone `string`: Billing phone number (including extension).

### billing_portal.session
* PortalSession `object`: A session describes the instantiation of the customer portal for
  * created **required** `integer`: Time at which the object was created. Measured in seconds since the Unix epoch.
  * customer **required** `string`: The ID of the customer for this session.
  * id **required** `string`: Unique identifier for the object.
  * livemode **required** `boolean`: Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
  * object **required** `string` (values: billing_portal.session): String representing the object's type. Objects of the same type share the same value.
  * return_url **required** `string`: The URL to which Stripe should send customers when they click on the link to return to your website.
  * url **required** `string`: The short-lived URL of the session giving customers access to the customer portal.

### bitcoin_receiver
* BitcoinReceiver `object`
  * active **required** `boolean`: True when this bitcoin receiver has received a non-zero amount of bitcoin.
  * amount **required** `integer`: The amount of `currency` that you are collecting as payment.
  * amount_received **required** `integer`: The amount of `currency` to which `bitcoin_amount_received` has been converted.
  * bitcoin_amount **required** `integer`: The amount of bitcoin that the customer should send to fill the receiver. The `bitcoin_amount` is denominated in Satoshi: there are 10^8 Satoshi in one bitcoin.
  * bitcoin_amount_received **required** `integer`: The amount of bitcoin that has been sent by the customer to this receiver.
  * bitcoin_uri **required** `string`: This URI can be displayed to the customer as a clickable link (to activate their bitcoin client) or as a QR code (for mobile wallets).
  * created **required** `integer`: Time at which the object was created. Measured in seconds since the Unix epoch.
  * currency **required** `string`: Three-letter [ISO code for the currency](https://stripe.com/docs/currencies) to which the bitcoin will be converted.
  * customer `string`: The customer ID of the bitcoin receiver.
  * description `string`: An arbitrary string attached to the object. Often useful for displaying to users.
  * email `string`: The customer's email address, set by the API call that creates the receiver.
  * filled **required** `boolean`: This flag is initially false and updates to true when the customer sends the `bitcoin_amount` to this receiver.
  * id **required** `string`: Unique identifier for the object.
  * inbound_address **required** `string`: A bitcoin address that is specific to this receiver. The customer can send bitcoin to this address to fill the receiver.
  * livemode **required** `boolean`: Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
  * metadata `object`: Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
  * object **required** `string` (values: bitcoin_receiver): String representing the object's type. Objects of the same type share the same value.
  * payment `string`: The ID of the payment created from the receiver, if any. Hidden when viewing the receiver with a publishable key.
  * refund_address `string`: The refund address of this bitcoin receiver.
  * transactions `object`: A list with one entry for each time that the customer sent bitcoin to the receiver. Hidden when viewing the receiver with a publishable key.
    * data **required** `array`: Details about each object.
      * items [bitcoin_transaction](#bitcoin_transaction)
    * has_more **required** `boolean`: True if this list has another page of items after this one that can be fetched.
    * object **required** `string` (values: list): String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
    * url **required** `string`: The URL where this list can be accessed.
  * uncaptured_funds **required** `boolean`: This receiver contains uncaptured funds that can be used for a payment or refunded.
  * used_for_payment `boolean`: Indicate if this source is used for payment.

### bitcoin_transaction
* BitcoinTransaction `object`
  * amount **required** `integer`: The amount of `currency` that the transaction was converted to in real-time.
  * bitcoin_amount **required** `integer`: The amount of bitcoin contained in the transaction.
  * created **required** `integer`: Time at which the object was created. Measured in seconds since the Unix epoch.
  * currency **required** `string`: Three-letter [ISO code for the currency](https://stripe.com/docs/currencies) to which this transaction was converted.
  * id **required** `string`: Unique identifier for the object.
  * object **required** `string` (values: bitcoin_transaction): String representing the object's type. Objects of the same type share the same value.
  * receiver **required** `string`: The receiver to which this transaction was sent.

### capability
* AccountCapability `object`: This is an object representing a capability for a Stripe account.
  * id **required** `string`: The identifier for the capability.
  * object **required** `string` (values: capability): String representing the object's type. Objects of the same type share the same value.
  * requested **required** `boolean`: Whether the capability has been requested.
  * requested_at `integer`: Time at which the capability was requested. Measured in seconds since the Unix epoch.
  * requirements [account_capability_requirements](#account_capability_requirements)
  * status **required** `string` (values: active, disabled, inactive, pending, unrequested): The status of the capability. Can be `active`, `inactive`, `pending`, or `unrequested`.

### card
* Card `object`: You can store multiple cards on a customer in order to charge the customer
  * address_city `string`: City/District/Suburb/Town/Village.
  * address_country `string`: Billing address country, if provided when creating card.
  * address_line1 `string`: Address line 1 (Street address/PO Box/Company name).
  * address_line1_check `string`: If `address_line1` was provided, results of the check: `pass`, `fail`, `unavailable`, or `unchecked`.
  * address_line2 `string`: Address line 2 (Apartment/Suite/Unit/Building).
  * address_state `string`: State/County/Province/Region.
  * address_zip `string`: ZIP or postal code.
  * address_zip_check `string`: If `address_zip` was provided, results of the check: `pass`, `fail`, `unavailable`, or `unchecked`.
  * available_payout_methods `array`: A set of available payout methods for this card. Only values from this set should be passed as the `method` when creating a payout.
    * items `string` (values: instant, standard)
  * brand **required** `string`: Card brand. Can be `American Express`, `Diners Club`, `Discover`, `JCB`, `MasterCard`, `UnionPay`, `Visa`, or `Unknown`.
  * country `string`: Two-letter ISO code representing the country of the card. You could use this attribute to get a sense of the international breakdown of cards you've collected.
  * currency `string`: Three-letter [ISO code for currency](https://stripe.com/docs/payouts). Only applicable on accounts (not customers or recipients). The card can be used as a transfer destination for funds in this currency.
  * cvc_check `string`: If a CVC was provided, results of the check: `pass`, `fail`, `unavailable`, or `unchecked`. A result of unchecked indicates that CVC was provided but hasn't been checked yet. Checks are typically performed when attaching a card to a Customer object, or when creating a charge. For more details, see [Check if a card is valid without a charge](https://support.stripe.com/questions/check-if-a-card-is-valid-without-a-charge).
  * default_for_currency `boolean`: Whether this card is the default external account for its currency.
  * dynamic_last4 `string`: (For tokenized numbers only.) The last four digits of the device account number.
  * exp_month **required** `integer`: Two-digit number representing the card's expiration month.
  * exp_year **required** `integer`: Four-digit number representing the card's expiration year.
  * fingerprint `string`: Uniquely identifies this particular card number. You can use this attribute to check whether two customers who’ve signed up with you are using the same card number, for example. For payment methods that tokenize card information (Apple Pay, Google Pay), the tokenized number might be provided instead of the underlying card number.
  * funding **required** `string`: Card funding type. Can be `credit`, `debit`, `prepaid`, or `unknown`.
  * id **required** `string`: Unique identifier for the object.
  * last4 **required** `string`: The last four digits of the card.
  * metadata `object`: Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
  * name `string`: Cardholder name.
  * object **required** `string` (values: card): String representing the object's type. Objects of the same type share the same value.
  * tokenization_method `string`: If the card number is tokenized, this is the method that was used. Can be `android_pay` (includes Google Pay), `apple_pay`, `masterpass`, `visa_checkout`, or null.

### card_generated_from_payment_method_details
* card_generated_from_payment_method_details `object`
  * card_present [payment_method_details_card_present](#payment_method_details_card_present)
  * type **required** `string`: The type of payment method transaction-specific details from the transaction that generated this `card` payment method. Always `card_present`.

### card_mandate_payment_method_details
* card_mandate_payment_method_details `object`

### charge
* Charge `object`: To charge a credit or a debit card, you create a `Charge` object. You can
  * amount **required** `integer`: Amount intended to be collected by this payment. A positive integer representing how much to charge in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal) (e.g., 100 cents to charge $1.00 or 100 to charge ¥100, a zero-decimal currency). The minimum amount is $0.50 US or [equivalent in charge currency](https://stripe.com/docs/currencies#minimum-and-maximum-charge-amounts). The amount value supports up to eight digits (e.g., a value of 99999999 for a USD charge of $999,999.99).
  * amount_captured **required** `integer`: Amount in %s captured (can be less than the amount attribute on the charge if a partial capture was made).
  * amount_refunded **required** `integer`: Amount in %s refunded (can be less than the amount attribute on the charge if a partial refund was issued).
  * application_fee_amount `integer`: The amount of the application fee (if any) requested for the charge. [See the Connect documentation](https://stripe.com/docs/connect/direct-charges#collecting-fees) for details.
  * billing_details **required** [billing_details](#billing_details)
  * calculated_statement_descriptor `string`: The full statement descriptor that is passed to card networks, and that is displayed on your customers' credit card and bank statements. Allows you to see what the statement descriptor looks like after the static and dynamic portions are combined.
  * captured **required** `boolean`: If the charge was created without capturing, this Boolean represents whether it is still uncaptured or has since been captured.
  * created **required** `integer`: Time at which the object was created. Measured in seconds since the Unix epoch.
  * currency **required** `string`: Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
  * description `string`: An arbitrary string attached to the object. Often useful for displaying to users.
  * disputed **required** `boolean`: Whether the charge has been disputed.
  * failure_code `string`: Error code explaining reason for charge failure if available (see [the errors section](https://stripe.com/docs/api#errors) for a list of codes).
  * failure_message `string`: Message to user further explaining reason for charge failure if available.
  * id **required** `string`: Unique identifier for the object.
  * livemode **required** `boolean`: Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
  * metadata **required** `object`: Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
  * object **required** `string` (values: charge): String representing the object's type. Objects of the same type share the same value.
  * paid **required** `boolean`: `true` if the charge succeeded, or was successfully authorized for later capture.
  * payment_method `string`: ID of the payment method used in this charge.
  * receipt_email `string`: This is the email address that the receipt for this charge was sent to.
  * receipt_number `string`: This is the transaction number that appears on email receipts sent for this charge. This attribute will be `null` until a receipt has been sent.
  * receipt_url `string`: This is the URL to view the receipt for this charge. The receipt is kept up-to-date to the latest state of the charge, including any refunds. If the charge is for an Invoice, the receipt will be stylized as an Invoice receipt.
  * refunded **required** `boolean`: Whether the charge has been fully refunded. If the charge is only partially refunded, this attribute will still be false.
  * refunds **required** `object`: A list of refunds that have been applied to the charge.
    * data **required** `array`: Details about each object.
      * items [refund](#refund)
    * has_more **required** `boolean`: True if this list has another page of items after this one that can be fetched.
    * object **required** `string` (values: list): String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
    * url **required** `string`: The URL where this list can be accessed.
  * statement_descriptor `string`: For card charges, use `statement_descriptor_suffix` instead. Otherwise, you can use this value as the complete description of a charge on your customers’ statements. Must contain at least one letter, maximum 22 characters.
  * statement_descriptor_suffix `string`: Provides information about the charge that customers see on their statements. Concatenated with the prefix (shortened descriptor) or statement descriptor that’s set on the account to form the complete statement descriptor. Maximum 22 characters for the concatenated descriptor.
  * status **required** `string`: The status of the payment is either `succeeded`, `pending`, or `failed`.
  * transfer_group `string`: A string that identifies this transaction as part of a group. See the [Connect documentation](https://stripe.com/docs/connect/charges-transfers#transfer-options) for details.

### charge_fraud_details
* ChargeFraudDetails `object`
  * stripe_report `string`: Assessments from Stripe. If set, the value is `fraudulent`.
  * user_report `string`: Assessments reported by you. If set, possible values of are `safe` and `fraudulent`.

### charge_outcome
* ChargeOutcome `object`
  * network_status `string`: Possible values are `approved_by_network`, `declined_by_network`, `not_sent_to_network`, and `reversed_after_approval`. The value `reversed_after_approval` indicates the payment was [blocked by Stripe](https://stripe.com/docs/declines#blocked-payments) after bank authorization, and may temporarily appear as "pending" on a cardholder's statement.
  * reason `string`: An enumerated value providing a more detailed explanation of the outcome's `type`. Charges blocked by Radar's default block rule have the value `highest_risk_level`. Charges placed in review by Radar's default review rule have the value `elevated_risk_level`. Charges authorized, blocked, or placed in review by custom rules have the value `rule`. See [understanding declines](https://stripe.com/docs/declines) for more details.
  * risk_level `string`: Stripe Radar's evaluation of the riskiness of the payment. Possible values for evaluated payments are `normal`, `elevated`, `highest`. For non-card payments, and card-based payments predating the public assignment of risk levels, this field will have the value `not_assessed`. In the event of an error in the evaluation, this field will have the value `unknown`. This field is only available with Radar.
  * risk_score `integer`: Stripe Radar's evaluation of the riskiness of the payment. Possible values for evaluated payments are between 0 and 100. For non-card payments, card-based payments predating the public assignment of risk scores, or in the event of an error during evaluation, this field will not be present. This field is only available with Radar for Fraud Teams.
  * seller_message `string`: A human-readable description of the outcome type and reason, designed for you (the recipient of the payment), not your customer.
  * type **required** `string`: Possible values are `authorized`, `manual_review`, `issuer_declined`, `blocked`, and `invalid`. See [understanding declines](https://stripe.com/docs/declines) and [Radar reviews](https://stripe.com/docs/radar/reviews) for details.

### charge_transfer_data
* ChargeTransferData `object`
  * amount `integer`: The amount transferred to the destination account, if specified. By default, the entire charge amount is transferred to the destination account.

### checkout.session
* Session `object`: A Checkout Session represents your customer's session as they pay for
  * allow_promotion_codes `boolean`: Enables user redeemable promotion codes.
  * amount_subtotal `integer`: Total of all items before discounts or taxes are applied.
  * amount_total `integer`: Total of all items after discounts and taxes are applied.
  * billing_address_collection `string` (values: auto, required): Describes whether Checkout should collect the customer's billing address.
  * cancel_url **required** `string`: The URL the customer will be directed to if they decide to cancel payment and return to your website.
  * client_reference_id `string`: A unique string to reference the Checkout Session. This can be a
  * currency `string`: Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
  * customer_email `string`: If provided, this value will be used when the Customer object is created.
  * id **required** `string`: Unique identifier for the object. Used to pass to `redirectToCheckout`
  * line_items `object`: The line items purchased by the customer.
    * data **required** `array`: Details about each object.
      * items [item](#item)
    * has_more **required** `boolean`: True if this list has another page of items after this one that can be fetched.
    * object **required** `string` (values: list): String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
    * url **required** `string`: The URL where this list can be accessed.
  * livemode **required** `boolean`: Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
  * locale `string` (values: auto, bg, cs, da, de, el, en, en-GB, es, es-419, et, fi, fr, fr-CA, hu, id, it, ja, lt, lv, ms, mt, nb, nl, pl, pt, pt-BR, ro, ru, sk, sl, sv, tr, zh, zh-HK, zh-TW): The IETF language tag of the locale Checkout is displayed in. If blank or `auto`, the browser's locale is used.
  * metadata `object`: Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
  * mode **required** `string` (values: payment, setup, subscription): The mode of the Checkout Session.
  * object **required** `string` (values: checkout.session): String representing the object's type. Objects of the same type share the same value.
  * payment_method_types **required** `array`: A list of the types of payment methods (e.g. card) this Checkout
    * items `string`
  * payment_status **required** `string` (values: no_payment_required, paid, unpaid): The payment status of the Checkout Session, one of `paid`, `unpaid`, or `no_payment_required`.
  * submit_type `string` (values: auto, book, donate, pay): Describes the type of transaction being performed by Checkout in order to customize
  * success_url **required** `string`: The URL the customer will be directed to after the payment or

### connect_collection_transfer
* ConnectCollectionTransfer `object`
  * amount **required** `integer`: Amount transferred, in %s.
  * currency **required** `string`: Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
  * id **required** `string`: Unique identifier for the object.
  * livemode **required** `boolean`: Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
  * object **required** `string` (values: connect_collection_transfer): String representing the object's type. Objects of the same type share the same value.

### country_spec
* CountrySpec `object`: Stripe needs to collect certain pieces of information about each account
  * default_currency **required** `string`: The default currency for this country. This applies to both payment methods and bank accounts.
  * id **required** `string`: Unique identifier for the object. Represented as the ISO country code for this country.
  * object **required** `string` (values: country_spec): String representing the object's type. Objects of the same type share the same value.
  * supported_bank_account_currencies **required** `object`: Currencies that can be accepted in the specific country (for transfers).
  * supported_payment_currencies **required** `array`: Currencies that can be accepted in the specified country (for payments).
    * items `string`
  * supported_payment_methods **required** `array`: Payment methods available in the specified country. You may need to enable some payment methods (e.g., [ACH](https://stripe.com/docs/ach)) on your account before they appear in this list. The `stripe` payment method refers to [charging through your platform](https://stripe.com/docs/connect/destination-charges).
    * items `string`
  * supported_transfer_countries **required** `array`: Countries that can accept transfers from the specified country.
    * items `string`
  * verification_fields **required** [country_spec_verification_fields](#country_spec_verification_fields)

### country_spec_verification_field_details
* CountrySpecVerificationFieldDetails `object`
  * additional **required** `array`: Additional fields which are only required for some users.
    * items `string`
  * minimum **required** `array`: Fields which every account must eventually provide.
    * items `string`

### country_spec_verification_fields
* CountrySpecVerificationFields `object`
  * company **required** [country_spec_verification_field_details](#country_spec_verification_field_details)
  * individual **required** [country_spec_verification_field_details](#country_spec_verification_field_details)

### coupon
* Coupon `object`: A coupon contains information about a percent-off or amount-off discount you
  * amount_off `integer`: Amount (in the `currency` specified) that will be taken off the subtotal of any invoices for this customer.
  * applies_to [coupon_applies_to](#coupon_applies_to)
  * created **required** `integer`: Time at which the object was created. Measured in seconds since the Unix epoch.
  * currency `string`: If `amount_off` has been set, the three-letter [ISO code for the currency](https://stripe.com/docs/currencies) of the amount to take off.
  * duration **required** `string` (values: forever, once, repeating): One of `forever`, `once`, and `repeating`. Describes how long a customer who applies this coupon will get the discount.
  * duration_in_months `integer`: If `duration` is `repeating`, the number of months the coupon applies. Null if coupon `duration` is `forever` or `once`.
  * id **required** `string`: Unique identifier for the object.
  * livemode **required** `boolean`: Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
  * max_redemptions `integer`: Maximum number of times this coupon can be redeemed, in total, across all customers, before it is no longer valid.
  * metadata `object`: Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
  * name `string`: Name of the coupon displayed to customers on for instance invoices or receipts.
  * object **required** `string` (values: coupon): String representing the object's type. Objects of the same type share the same value.
  * percent_off `number`: Percent that will be taken off the subtotal of any invoices for this customer for the duration of the coupon. For example, a coupon with percent_off of 50 will make a %s100 invoice %s50 instead.
  * redeem_by `integer`: Date after which the coupon can no longer be redeemed.
  * times_redeemed **required** `integer`: Number of times this coupon has been applied to a customer.
  * valid **required** `boolean`: Taking account of the above properties, whether this coupon can still be applied to a customer.

### coupon_applies_to
* CouponAppliesTo `object`
  * products **required** `array`: A list of product IDs this coupon applies to
    * items `string`

### credit_note
* CreditNote `object`: Issue a credit note to adjust an invoice's amount after the invoice is finalized.
  * amount **required** `integer`: The integer amount in %s representing the total amount of the credit note, including tax.
  * created **required** `integer`: Time at which the object was created. Measured in seconds since the Unix epoch.
  * currency **required** `string`: Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
  * discount_amount **required** `integer`: The integer amount in %s representing the total amount of discount that was credited.
  * discount_amounts **required** `array`: The aggregate amounts calculated per discount for all line items.
    * items [discounts_resource_discount_amount](#discounts_resource_discount_amount)
  * id **required** `string`: Unique identifier for the object.
  * lines **required** `object`: Line items that make up the credit note
    * data **required** `array`: Details about each object.
      * items [credit_note_line_item](#credit_note_line_item)
    * has_more **required** `boolean`: True if this list has another page of items after this one that can be fetched.
    * object **required** `string` (values: list): String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
    * url **required** `string`: The URL where this list can be accessed.
  * livemode **required** `boolean`: Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
  * memo `string`: Customer-facing text that appears on the credit note PDF.
  * metadata `object`: Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
  * number **required** `string`: A unique number that identifies this particular credit note and appears on the PDF of the credit note and its associated invoice.
  * object **required** `string` (values: credit_note): String representing the object's type. Objects of the same type share the same value.
  * out_of_band_amount `integer`: Amount that was credited outside of Stripe.
  * pdf **required** `string`: The link to download the PDF of the credit note.
  * reason `string` (values: duplicate, fraudulent, order_change, product_unsatisfactory): Reason for issuing this credit note, one of `duplicate`, `fraudulent`, `order_change`, or `product_unsatisfactory`
  * status **required** `string` (values: issued, void): Status of this credit note, one of `issued` or `void`. Learn more about [voiding credit notes](https://stripe.com/docs/billing/invoices/credit-notes#voiding).
  * subtotal **required** `integer`: The integer amount in %s representing the amount of the credit note, excluding tax and invoice level discounts.
  * tax_amounts **required** `array`: The aggregate amounts calculated per tax rate for all line items.
    * items [credit_note_tax_amount](#credit_note_tax_amount)
  * total **required** `integer`: The integer amount in %s representing the total amount of the credit note, including tax and all discount.
  * type **required** `string` (values: post_payment, pre_payment): Type of this credit note, one of `pre_payment` or `post_payment`. A `pre_payment` credit note means it was issued when the invoice was open. A `post_payment` credit note means it was issued when the invoice was paid.
  * voided_at `integer`: The time that the credit note was voided.

### credit_note_line_item
* CreditNoteLineItem `object`
  * amount **required** `integer`: The integer amount in %s representing the gross amount being credited for this line item, excluding (exclusive) tax and discounts.
  * description `string`: Description of the item being credited.
  * discount_amount **required** `integer`: The integer amount in %s representing the discount being credited for this line item.
  * discount_amounts **required** `array`: The amount of discount calculated per discount for this line item
    * items [discounts_resource_discount_amount](#discounts_resource_discount_amount)
  * id **required** `string`: Unique identifier for the object.
  * invoice_line_item `string`: ID of the invoice line item being credited
  * livemode **required** `boolean`: Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
  * object **required** `string` (values: credit_note_line_item): String representing the object's type. Objects of the same type share the same value.
  * quantity `integer`: The number of units of product being credited.
  * tax_amounts **required** `array`: The amount of tax calculated per tax rate for this line item
    * items [credit_note_tax_amount](#credit_note_tax_amount)
  * tax_rates **required** `array`: The tax rates which apply to the line item.
    * items [tax_rate](#tax_rate)
  * type **required** `string` (values: custom_line_item, invoice_line_item): The type of the credit note line item, one of `invoice_line_item` or `custom_line_item`. When the type is `invoice_line_item` there is an additional `invoice_line_item` property on the resource the value of which is the id of the credited line item on the invoice.
  * unit_amount `integer`: The cost of each unit of product being credited.
  * unit_amount_decimal `string`: Same as `unit_amount`, but contains a decimal value with at most 12 decimal places.

### credit_note_tax_amount
* CreditNoteTaxAmount `object`
  * amount **required** `integer`: The amount, in %s, of the tax.
  * inclusive **required** `boolean`: Whether this tax amount is inclusive or exclusive.

### customer
* Customer `object`: `Customer` objects allow you to perform recurring charges, and to track
  * balance `integer`: Current balance, if any, being stored on the customer. If negative, the customer has credit to apply to their next invoice. If positive, the customer has an amount owed that will be added to their next invoice. The balance does not refer to any unpaid invoices; it solely takes into account amounts that have yet to be successfully applied to any invoice. This balance is only taken into account as invoices are finalized.
  * created **required** `integer`: Time at which the object was created. Measured in seconds since the Unix epoch.
  * currency `string`: Three-letter [ISO code for the currency](https://stripe.com/docs/currencies) the customer can be charged in for recurring billing purposes.
  * delinquent `boolean`: When the customer's latest invoice is billed by charging automatically, `delinquent` is `true` if the invoice's latest charge failed. When the customer's latest invoice is billed by sending an invoice, `delinquent` is `true` if the invoice isn't paid by its due date.
  * description `string`: An arbitrary string attached to the object. Often useful for displaying to users.
  * email `string`: The customer's email address.
  * id **required** `string`: Unique identifier for the object.
  * invoice_prefix `string`: The prefix for the customer used to generate unique invoice numbers.
  * invoice_settings [invoice_setting_customer_setting](#invoice_setting_customer_setting)
  * livemode **required** `boolean`: Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
  * metadata `object`: Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
  * name `string`: The customer's full name or business name.
  * next_invoice_sequence `integer`: The suffix of the customer's next invoice number, e.g., 0001.
  * object **required** `string` (values: customer): String representing the object's type. Objects of the same type share the same value.
  * phone `string`: The customer's phone number.
  * preferred_locales `array`: The customer's preferred locales (languages), ordered by preference.
    * items `string`
  * sources `object`: The customer's payment sources, if any.
    * data **required** `array`: Details about each object.
    * has_more **required** `boolean`: True if this list has another page of items after this one that can be fetched.
    * object **required** `string` (values: list): String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
    * url **required** `string`: The URL where this list can be accessed.
  * subscriptions `object`: The customer's current subscriptions, if any.
    * data **required** `array`: Details about each object.
      * items [subscription](#subscription)
    * has_more **required** `boolean`: True if this list has another page of items after this one that can be fetched.
    * object **required** `string` (values: list): String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
    * url **required** `string`: The URL where this list can be accessed.
  * tax_exempt `string` (values: exempt, none, reverse): Describes the customer's tax exemption status. One of `none`, `exempt`, or `reverse`. When set to `reverse`, invoice and receipt PDFs include the text **"Reverse charge"**.
  * tax_ids `object`: The customer's tax IDs.
    * data **required** `array`: Details about each object.
      * items [tax_id](#tax_id)
    * has_more **required** `boolean`: True if this list has another page of items after this one that can be fetched.
    * object **required** `string` (values: list): String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
    * url **required** `string`: The URL where this list can be accessed.

### customer_acceptance
* customer_acceptance `object`
  * accepted_at `integer`: The time at which the customer accepted the Mandate.
  * offline [offline_acceptance](#offline_acceptance)
  * online [online_acceptance](#online_acceptance)
  * type **required** `string` (values: offline, online): The type of customer acceptance information included with the Mandate. One of `online` or `offline`.

### customer_balance_transaction
* CustomerBalanceTransaction `object`: Each customer has a [`balance`](https://stripe.com/docs/api/customers/object#customer_object-balance) value,
  * amount **required** `integer`: The amount of the transaction. A negative value is a credit for the customer's balance, and a positive value is a debit to the customer's `balance`.
  * created **required** `integer`: Time at which the object was created. Measured in seconds since the Unix epoch.
  * currency **required** `string`: Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
  * description `string`: An arbitrary string attached to the object. Often useful for displaying to users.
  * ending_balance **required** `integer`: The customer's `balance` after the transaction was applied. A negative value decreases the amount due on the customer's next invoice. A positive value increases the amount due on the customer's next invoice.
  * id **required** `string`: Unique identifier for the object.
  * livemode **required** `boolean`: Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
  * metadata `object`: Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
  * object **required** `string` (values: customer_balance_transaction): String representing the object's type. Objects of the same type share the same value.
  * type **required** `string` (values: adjustment, applied_to_invoice, credit_note, initial, invoice_too_large, invoice_too_small, migration, unapplied_from_invoice, unspent_receiver_credit): Transaction type: `adjustment`, `applied_to_invoice`, `credit_note`, `initial`, `invoice_too_large`, `invoice_too_small`, `unspent_receiver_credit`, or `unapplied_from_invoice`. See the [Customer Balance page](https://stripe.com/docs/billing/customer/balance#types) to learn more about transaction types.

### deleted_account
* DeletedAccount `object`
  * deleted **required** `boolean` (values: true): Always true for a deleted object
  * id **required** `string`: Unique identifier for the object.
  * object **required** `string` (values: account): String representing the object's type. Objects of the same type share the same value.

### deleted_alipay_account
* AlipayDeletedAccount `object`
  * deleted **required** `boolean` (values: true): Always true for a deleted object
  * id **required** `string`: Unique identifier for the object.
  * object **required** `string` (values: alipay_account): String representing the object's type. Objects of the same type share the same value.

### deleted_apple_pay_domain
* DeletedApplePayDomain `object`
  * deleted **required** `boolean` (values: true): Always true for a deleted object
  * id **required** `string`: Unique identifier for the object.
  * object **required** `string` (values: apple_pay_domain): String representing the object's type. Objects of the same type share the same value.

### deleted_bank_account
* DeletedBankAccount `object`
  * currency `string`: Three-letter [ISO code for the currency](https://stripe.com/docs/payouts) paid out to the bank account.
  * deleted **required** `boolean` (values: true): Always true for a deleted object
  * id **required** `string`: Unique identifier for the object.
  * object **required** `string` (values: bank_account): String representing the object's type. Objects of the same type share the same value.

### deleted_bitcoin_receiver
* BitcoinDeletedReceiver `object`
  * deleted **required** `boolean` (values: true): Always true for a deleted object
  * id **required** `string`: Unique identifier for the object.
  * object **required** `string` (values: bitcoin_receiver): String representing the object's type. Objects of the same type share the same value.

### deleted_card
* DeletedCard `object`
  * currency `string`: Three-letter [ISO code for the currency](https://stripe.com/docs/payouts) paid out to the bank account.
  * deleted **required** `boolean` (values: true): Always true for a deleted object
  * id **required** `string`: Unique identifier for the object.
  * object **required** `string` (values: card): String representing the object's type. Objects of the same type share the same value.

### deleted_coupon
* DeletedCoupon `object`
  * deleted **required** `boolean` (values: true): Always true for a deleted object
  * id **required** `string`: Unique identifier for the object.
  * object **required** `string` (values: coupon): String representing the object's type. Objects of the same type share the same value.

### deleted_customer
* DeletedCustomer `object`
  * deleted **required** `boolean` (values: true): Always true for a deleted object
  * id **required** `string`: Unique identifier for the object.
  * object **required** `string` (values: customer): String representing the object's type. Objects of the same type share the same value.

### deleted_discount
* DeletedDiscount `object`
  * checkout_session `string`: The Checkout session that this coupon is applied to, if it is applied to a particular session in payment mode. Will not be present for subscription mode.
  * coupon **required** [coupon](#coupon)
  * deleted **required** `boolean` (values: true): Always true for a deleted object
  * id **required** `string`: The ID of the discount object. Discounts cannot be fetched by ID. Use `expand[]=discounts` in API calls to expand discount IDs in an array.
  * invoice `string`: The invoice that the discount's coupon was applied to, if it was applied directly to a particular invoice.
  * invoice_item `string`: The invoice item `id` (or invoice line item `id` for invoice line items of type='subscription') that the discount's coupon was applied to, if it was applied directly to a particular invoice item or invoice line item.
  * object **required** `string` (values: discount): String representing the object's type. Objects of the same type share the same value.
  * start **required** `integer`: Date that the coupon was applied.
  * subscription `string`: The subscription that this coupon is applied to, if it is applied to a particular subscription.

### deleted_external_account


### deleted_invoice
* DeletedInvoice `object`
  * deleted **required** `boolean` (values: true): Always true for a deleted object
  * id **required** `string`: Unique identifier for the object.
  * object **required** `string` (values: invoice): String representing the object's type. Objects of the same type share the same value.

### deleted_invoiceitem
* DeletedInvoiceItem `object`
  * deleted **required** `boolean` (values: true): Always true for a deleted object
  * id **required** `string`: Unique identifier for the object.
  * object **required** `string` (values: invoiceitem): String representing the object's type. Objects of the same type share the same value.

### deleted_payment_source


### deleted_person
* DeletedPerson `object`
  * deleted **required** `boolean` (values: true): Always true for a deleted object
  * id **required** `string`: Unique identifier for the object.
  * object **required** `string` (values: person): String representing the object's type. Objects of the same type share the same value.

### deleted_plan
* DeletedPlan `object`
  * deleted **required** `boolean` (values: true): Always true for a deleted object
  * id **required** `string`: Unique identifier for the object.
  * object **required** `string` (values: plan): String representing the object's type. Objects of the same type share the same value.

### deleted_price
* DeletedPrice `object`
  * deleted **required** `boolean` (values: true): Always true for a deleted object
  * id **required** `string`: Unique identifier for the object.
  * object **required** `string` (values: price): String representing the object's type. Objects of the same type share the same value.

### deleted_product
* DeletedProduct `object`
  * deleted **required** `boolean` (values: true): Always true for a deleted object
  * id **required** `string`: Unique identifier for the object.
  * object **required** `string` (values: product): String representing the object's type. Objects of the same type share the same value.

### deleted_radar.value_list
* RadarListDeletedList `object`
  * deleted **required** `boolean` (values: true): Always true for a deleted object
  * id **required** `string`: Unique identifier for the object.
  * object **required** `string` (values: radar.value_list): String representing the object's type. Objects of the same type share the same value.

### deleted_radar.value_list_item
* RadarListDeletedListItem `object`
  * deleted **required** `boolean` (values: true): Always true for a deleted object
  * id **required** `string`: Unique identifier for the object.
  * object **required** `string` (values: radar.value_list_item): String representing the object's type. Objects of the same type share the same value.

### deleted_recipient
* DeletedTransferRecipient `object`
  * deleted **required** `boolean` (values: true): Always true for a deleted object
  * id **required** `string`: Unique identifier for the object.
  * object **required** `string` (values: recipient): String representing the object's type. Objects of the same type share the same value.

### deleted_sku
* DeletedSku `object`
  * deleted **required** `boolean` (values: true): Always true for a deleted object
  * id **required** `string`: Unique identifier for the object.
  * object **required** `string` (values: sku): String representing the object's type. Objects of the same type share the same value.

### deleted_subscription_item
* DeletedSubscriptionItem `object`
  * deleted **required** `boolean` (values: true): Always true for a deleted object
  * id **required** `string`: Unique identifier for the object.
  * object **required** `string` (values: subscription_item): String representing the object's type. Objects of the same type share the same value.

### deleted_tax_id
* deleted_tax_id `object`
  * deleted **required** `boolean` (values: true): Always true for a deleted object
  * id **required** `string`: Unique identifier for the object.
  * object **required** `string` (values: tax_id): String representing the object's type. Objects of the same type share the same value.

### deleted_terminal.location
* TerminalLocationDeletedLocation `object`
  * deleted **required** `boolean` (values: true): Always true for a deleted object
  * id **required** `string`: Unique identifier for the object.
  * object **required** `string` (values: terminal.location): String representing the object's type. Objects of the same type share the same value.

### deleted_terminal.reader
* TerminalReaderDeletedReader `object`
  * deleted **required** `boolean` (values: true): Always true for a deleted object
  * id **required** `string`: Unique identifier for the object.
  * object **required** `string` (values: terminal.reader): String representing the object's type. Objects of the same type share the same value.

### deleted_webhook_endpoint
* NotificationWebhookEndpointDeleted `object`
  * deleted **required** `boolean` (values: true): Always true for a deleted object
  * id **required** `string`: Unique identifier for the object.
  * object **required** `string` (values: webhook_endpoint): String representing the object's type. Objects of the same type share the same value.

### delivery_estimate
* DeliveryEstimate `object`
  * date `string`: If `type` is `"exact"`, `date` will be the expected delivery date in the format YYYY-MM-DD.
  * earliest `string`: If `type` is `"range"`, `earliest` will be be the earliest delivery date in the format YYYY-MM-DD.
  * latest `string`: If `type` is `"range"`, `latest` will be the latest delivery date in the format YYYY-MM-DD.
  * type **required** `string`: The type of estimate. Must be either `"range"` or `"exact"`.

### discount
* Discount `object`: A discount represents the actual application of a coupon to a particular
  * checkout_session `string`: The Checkout session that this coupon is applied to, if it is applied to a particular session in payment mode. Will not be present for subscription mode.
  * coupon **required** [coupon](#coupon)
  * end `integer`: If the coupon has a duration of `repeating`, the date that this discount will end. If the coupon has a duration of `once` or `forever`, this attribute will be null.
  * id **required** `string`: The ID of the discount object. Discounts cannot be fetched by ID. Use `expand[]=discounts` in API calls to expand discount IDs in an array.
  * invoice `string`: The invoice that the discount's coupon was applied to, if it was applied directly to a particular invoice.
  * invoice_item `string`: The invoice item `id` (or invoice line item `id` for invoice line items of type='subscription') that the discount's coupon was applied to, if it was applied directly to a particular invoice item or invoice line item.
  * object **required** `string` (values: discount): String representing the object's type. Objects of the same type share the same value.
  * start **required** `integer`: Date that the coupon was applied.
  * subscription `string`: The subscription that this coupon is applied to, if it is applied to a particular subscription.

### discounts_resource_discount_amount
* DiscountsResourceDiscountAmount `object`
  * amount **required** `integer`: The amount, in %s, of the discount.

### dispute
* Dispute `object`: A dispute occurs when a customer questions your charge with their card issuer.
  * amount **required** `integer`: Disputed amount. Usually the amount of the charge, but can differ (usually because of currency fluctuation or because only part of the order is disputed).
  * balance_transactions **required** `array`: List of zero, one, or two balance transactions that show funds withdrawn and reinstated to your Stripe account as a result of this dispute.
    * items [balance_transaction](#balance_transaction)
  * created **required** `integer`: Time at which the object was created. Measured in seconds since the Unix epoch.
  * currency **required** `string`: Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
  * evidence **required** [dispute_evidence](#dispute_evidence)
  * evidence_details **required** [dispute_evidence_details](#dispute_evidence_details)
  * id **required** `string`: Unique identifier for the object.
  * is_charge_refundable **required** `boolean`: If true, it is still possible to refund the disputed payment. Once the payment has been fully refunded, no further funds will be withdrawn from your Stripe account as a result of this dispute.
  * livemode **required** `boolean`: Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
  * metadata **required** `object`: Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
  * object **required** `string` (values: dispute): String representing the object's type. Objects of the same type share the same value.
  * reason **required** `string`: Reason given by cardholder for dispute. Possible values are `bank_cannot_process`, `check_returned`, `credit_not_processed`, `customer_initiated`, `debit_not_authorized`, `duplicate`, `fraudulent`, `general`, `incorrect_account_details`, `insufficient_funds`, `product_not_received`, `product_unacceptable`, `subscription_canceled`, or `unrecognized`. Read more about [dispute reasons](https://stripe.com/docs/disputes/categories).
  * status **required** `string` (values: charge_refunded, lost, needs_response, under_review, warning_closed, warning_needs_response, warning_under_review, won): Current status of dispute. Possible values are `warning_needs_response`, `warning_under_review`, `warning_closed`, `needs_response`, `under_review`, `charge_refunded`, `won`, or `lost`.

### dispute_evidence
* DisputeEvidence `object`
  * access_activity_log `string`: Any server or activity logs showing proof that the customer accessed or downloaded the purchased digital product. This information should include IP addresses, corresponding timestamps, and any detailed recorded activity.
  * billing_address `string`: The billing address provided by the customer.
  * cancellation_policy_disclosure `string`: An explanation of how and when the customer was shown your refund policy prior to purchase.
  * cancellation_rebuttal `string`: A justification for why the customer's subscription was not canceled.
  * customer_email_address `string`: The email address of the customer.
  * customer_name `string`: The name of the customer.
  * customer_purchase_ip `string`: The IP address that the customer used when making the purchase.
  * duplicate_charge_explanation `string`: An explanation of the difference between the disputed charge versus the prior charge that appears to be a duplicate.
  * duplicate_charge_id `string`: The Stripe ID for the prior charge which appears to be a duplicate of the disputed charge.
  * product_description `string`: A description of the product or service that was sold.
  * refund_policy_disclosure `string`: Documentation demonstrating that the customer was shown your refund policy prior to purchase.
  * refund_refusal_explanation `string`: A justification for why the customer is not entitled to a refund.
  * service_date `string`: The date on which the customer received or began receiving the purchased service, in a clear human-readable format.
  * shipping_address `string`: The address to which a physical product was shipped. You should try to include as complete address information as possible.
  * shipping_carrier `string`: The delivery service that shipped a physical product, such as Fedex, UPS, USPS, etc. If multiple carriers were used for this purchase, please separate them with commas.
  * shipping_date `string`: The date on which a physical product began its route to the shipping address, in a clear human-readable format.
  * shipping_tracking_number `string`: The tracking number for a physical product, obtained from the delivery service. If multiple tracking numbers were generated for this purchase, please separate them with commas.
  * uncategorized_text `string`: Any additional evidence or statements.

### dispute_evidence_details
* DisputeEvidenceDetails `object`
  * due_by `integer`: Date by which evidence must be submitted in order to successfully challenge dispute. Will be null if the customer's bank or credit card company doesn't allow a response for this particular dispute.
  * has_evidence **required** `boolean`: Whether evidence has been staged for this dispute.
  * past_due **required** `boolean`: Whether the last evidence submission was submitted past the due date. Defaults to `false` if no evidence submissions have occurred. If `true`, then delivery of the latest evidence is *not* guaranteed.
  * submission_count **required** `integer`: The number of times evidence has been submitted. Typically, you may only submit evidence once.

### ephemeral_key
* EphemeralKey `object`
  * created **required** `integer`: Time at which the object was created. Measured in seconds since the Unix epoch.
  * expires **required** `integer`: Time at which the key will expire. Measured in seconds since the Unix epoch.
  * id **required** `string`: Unique identifier for the object.
  * livemode **required** `boolean`: Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
  * object **required** `string` (values: ephemeral_key): String representing the object's type. Objects of the same type share the same value.
  * secret `string`: The key's secret. You can use this value to make authorized requests to the Stripe API.

### error
* error `object`: An error response from the Stripe API
  * error **required** [api_errors](#api_errors)

### event
* NotificationEvent `object`: Events are our way of letting you know when something interesting happens in
  * account `string`: The connected account that originated the event.
  * api_version `string`: The Stripe API version used to render `data`. *Note: This property is populated only for events on or after October 31, 2014*.
  * created **required** `integer`: Time at which the object was created. Measured in seconds since the Unix epoch.
  * data **required** [notification_event_data](#notification_event_data)
  * id **required** `string`: Unique identifier for the object.
  * livemode **required** `boolean`: Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
  * object **required** `string` (values: event): String representing the object's type. Objects of the same type share the same value.
  * pending_webhooks **required** `integer`: Number of webhooks that have yet to be successfully delivered (i.e., to return a 20x response) to the URLs you've specified.
  * type **required** `string`: Description of the event (e.g., `invoice.created` or `charge.refunded`).

### exchange_rate
* ExchangeRate `object`: `Exchange Rate` objects allow you to determine the rates that Stripe is
  * id **required** `string`: Unique identifier for the object. Represented as the three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html) in lowercase.
  * object **required** `string` (values: exchange_rate): String representing the object's type. Objects of the same type share the same value.
  * rates **required** `object`: Hash where the keys are supported currencies and the values are the exchange rate at which the base id currency converts to the key currency.

### external_account


### fee
* Fee `object`
  * amount **required** `integer`: Amount of the fee, in cents.
  * application `string`: ID of the Connect application that earned the fee.
  * currency **required** `string`: Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
  * description `string`: An arbitrary string attached to the object. Often useful for displaying to users.
  * type **required** `string`: Type of the fee, one of: `application_fee`, `stripe_fee` or `tax`.

### fee_refund
* FeeRefund `object`: `Application Fee Refund` objects allow you to refund an application fee that
  * amount **required** `integer`: Amount, in %s.
  * created **required** `integer`: Time at which the object was created. Measured in seconds since the Unix epoch.
  * currency **required** `string`: Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
  * id **required** `string`: Unique identifier for the object.
  * metadata `object`: Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
  * object **required** `string` (values: fee_refund): String representing the object's type. Objects of the same type share the same value.

### file
* File `object`: This is an object representing a file hosted on Stripe's servers. The
  * created **required** `integer`: Time at which the object was created. Measured in seconds since the Unix epoch.
  * expires_at `integer`: The time at which the file expires and is no longer available in epoch seconds.
  * filename `string`: A filename for the file, suitable for saving to a filesystem.
  * id **required** `string`: Unique identifier for the object.
  * links `object`: A list of [file links](https://stripe.com/docs/api#file_links) that point at this file.
    * data **required** `array`: Details about each object.
      * items [file_link](#file_link)
    * has_more **required** `boolean`: True if this list has another page of items after this one that can be fetched.
    * object **required** `string` (values: list): String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
    * url **required** `string`: The URL where this list can be accessed.
  * object **required** `string` (values: file): String representing the object's type. Objects of the same type share the same value.
  * purpose **required** `string` (values: account_requirement, additional_verification, business_icon, business_logo, customer_signature, dispute_evidence, identity_document, pci_document, tax_document_user_upload): The [purpose](https://stripe.com/docs/file-upload#uploading-a-file) of the uploaded file.
  * size **required** `integer`: The size in bytes of the file object.
  * title `string`: A user friendly title for the document.
  * type `string`: The type of the file returned (e.g., `csv`, `pdf`, `jpg`, or `png`).
  * url `string`: The URL from which the file can be downloaded using your live secret API key.

### file_link
* FileLink `object`: To share the contents of a `File` object with non-Stripe users, you can
  * created **required** `integer`: Time at which the object was created. Measured in seconds since the Unix epoch.
  * expired **required** `boolean`: Whether this link is already expired.
  * expires_at `integer`: Time at which the link expires.
  * id **required** `string`: Unique identifier for the object.
  * livemode **required** `boolean`: Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
  * metadata **required** `object`: Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
  * object **required** `string` (values: file_link): String representing the object's type. Objects of the same type share the same value.
  * url `string`: The publicly accessible URL to download the file.

### financial_reporting_finance_report_run_run_parameters
* FinancialReportingFinanceReportRunRunParameters `object`
  * columns `array`: The set of output columns requested for inclusion in the report run.
    * items `string`
  * connected_account `string`: Connected account ID by which to filter the report run.
  * currency `string`: Currency of objects to be included in the report run.
  * interval_end `integer`: Ending timestamp of data to be included in the report run (exclusive).
  * interval_start `integer`: Starting timestamp of data to be included in the report run.
  * payout `string`: Payout ID by which to filter the report run.
  * reporting_category `string`: Category of balance transactions to be included in the report run.
  * timezone `string`: Defaults to `Etc/UTC`. The output timezone for all timestamps in the report. A list of possible time zone values is maintained at the [IANA Time Zone Database](http://www.iana.org/time-zones). Has no effect on `interval_start` or `interval_end`.

### inventory
* Inventory `object`
  * quantity `integer`: The count of inventory available. Will be present if and only if `type` is `finite`.
  * type **required** `string`: Inventory type. Possible values are `finite`, `bucket` (not quantified), and `infinite`.
  * value `string`: An indicator of the inventory available. Possible values are `in_stock`, `limited`, and `out_of_stock`. Will be present if and only if `type` is `bucket`.

### invoice
* Invoice `object`: Invoices are statements of amounts owed by a customer, and are either
  * account_country `string`: The country of the business associated with this invoice, most often the business creating the invoice.
  * account_name `string`: The public name of the business associated with this invoice, most often the business creating the invoice.
  * account_tax_ids `array`: The account tax IDs associated with the invoice. Only editable when the invoice is a draft.
  * amount_due **required** `integer`: Final amount due at this time for this invoice. If the invoice's total is smaller than the minimum charge amount, for example, or if there is account credit that can be applied to the invoice, the `amount_due` may be 0. If there is a positive `starting_balance` for the invoice (the customer owes money), the `amount_due` will also take that into account. The charge that gets generated for the invoice will be for the amount specified in `amount_due`.
  * amount_paid **required** `integer`: The amount, in %s, that was paid.
  * amount_remaining **required** `integer`: The amount remaining, in %s, that is due.
  * application_fee_amount `integer`: The fee in %s that will be applied to the invoice and transferred to the application owner's Stripe account when the invoice is paid.
  * attempt_count **required** `integer`: Number of payment attempts made for this invoice, from the perspective of the payment retry schedule. Any payment attempt counts as the first attempt, and subsequently only automatic retries increment the attempt count. In other words, manual payment attempts after the first attempt do not affect the retry schedule.
  * attempted **required** `boolean`: Whether an attempt has been made to pay the invoice. An invoice is not attempted until 1 hour after the `invoice.created` webhook, for example, so you might not want to display that invoice as unpaid to your users.
  * auto_advance `boolean`: Controls whether Stripe will perform [automatic collection](https://stripe.com/docs/billing/invoices/workflow/#auto_advance) of the invoice. When `false`, the invoice's state will not automatically advance without an explicit action.
  * billing_reason `string` (values: automatic_pending_invoice_item_invoice, manual, subscription, subscription_create, subscription_cycle, subscription_threshold, subscription_update, upcoming): Indicates the reason why the invoice was created. `subscription_cycle` indicates an invoice created by a subscription advancing into a new period. `subscription_create` indicates an invoice created due to creating a subscription. `subscription_update` indicates an invoice created due to updating a subscription. `subscription` is set for all old invoices to indicate either a change to a subscription or a period advancement. `manual` is set for all invoices unrelated to a subscription (for example: created via the invoice editor). The `upcoming` value is reserved for simulated invoices per the upcoming invoice endpoint. `subscription_threshold` indicates an invoice created due to a billing threshold being reached.
  * collection_method `string` (values: charge_automatically, send_invoice): Either `charge_automatically`, or `send_invoice`. When charging automatically, Stripe will attempt to pay this invoice using the default source attached to the customer. When sending an invoice, Stripe will email this invoice to the customer with payment instructions.
  * created **required** `integer`: Time at which the object was created. Measured in seconds since the Unix epoch.
  * currency **required** `string`: Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
  * custom_fields `array`: Custom fields displayed on the invoice.
    * items [invoice_setting_custom_field](#invoice_setting_custom_field)
  * customer_email `string`: The customer's email. Until the invoice is finalized, this field will equal `customer.email`. Once the invoice is finalized, this field will no longer be updated.
  * customer_name `string`: The customer's name. Until the invoice is finalized, this field will equal `customer.name`. Once the invoice is finalized, this field will no longer be updated.
  * customer_phone `string`: The customer's phone number. Until the invoice is finalized, this field will equal `customer.phone`. Once the invoice is finalized, this field will no longer be updated.
  * customer_tax_exempt `string` (values: exempt, none, reverse): The customer's tax exempt status. Until the invoice is finalized, this field will equal `customer.tax_exempt`. Once the invoice is finalized, this field will no longer be updated.
  * customer_tax_ids `array`: The customer's tax IDs. Until the invoice is finalized, this field will contain the same tax IDs as `customer.tax_ids`. Once the invoice is finalized, this field will no longer be updated.
    * items [invoices_resource_invoice_tax_id](#invoices_resource_invoice_tax_id)
  * default_tax_rates **required** `array`: The tax rates applied to this invoice, if any.
    * items [tax_rate](#tax_rate)
  * description `string`: An arbitrary string attached to the object. Often useful for displaying to users. Referenced as 'memo' in the Dashboard.
  * discounts `array`: The discounts applied to the invoice. Line item discounts are applied before invoice discounts. Use `expand[]=discounts` to expand each discount.
  * due_date `integer`: The date on which payment for this invoice is due. This value will be `null` for invoices where `collection_method=charge_automatically`.
  * ending_balance `integer`: Ending customer balance after the invoice is finalized. Invoices are finalized approximately an hour after successful webhook delivery or when payment collection is attempted for the invoice. If the invoice has not been finalized yet, this will be null.
  * footer `string`: Footer displayed on the invoice.
  * hosted_invoice_url `string`: The URL for the hosted invoice page, which allows customers to view and pay an invoice. If the invoice has not been finalized yet, this will be null.
  * id `string`: Unique identifier for the object.
  * invoice_pdf `string`: The link to download the PDF for the invoice. If the invoice has not been finalized yet, this will be null.
  * lines **required** `object`: The individual line items that make up the invoice. `lines` is sorted as follows: invoice items in reverse chronological order, followed by the subscription, if any.
    * data **required** `array`: Details about each object.
      * items [line_item](#line_item)
    * has_more **required** `boolean`: True if this list has another page of items after this one that can be fetched.
    * object **required** `string` (values: list): String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
    * url **required** `string`: The URL where this list can be accessed.
  * livemode **required** `boolean`: Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
  * metadata `object`: Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
  * next_payment_attempt `integer`: The time at which payment will next be attempted. This value will be `null` for invoices where `collection_method=send_invoice`.
  * number `string`: A unique, identifying string that appears on emails sent to the customer for this invoice. This starts with the customer's unique invoice_prefix if it is specified.
  * object **required** `string` (values: invoice): String representing the object's type. Objects of the same type share the same value.
  * paid **required** `boolean`: Whether payment was successfully collected for this invoice. An invoice can be paid (most commonly) with a charge or with credit from the customer's account balance.
  * period_end **required** `integer`: End of the usage period during which invoice items were added to this invoice.
  * period_start **required** `integer`: Start of the usage period during which invoice items were added to this invoice.
  * post_payment_credit_notes_amount **required** `integer`: Total amount of all post-payment credit notes issued for this invoice.
  * pre_payment_credit_notes_amount **required** `integer`: Total amount of all pre-payment credit notes issued for this invoice.
  * receipt_number `string`: This is the transaction number that appears on email receipts sent for this invoice.
  * starting_balance **required** `integer`: Starting customer balance before the invoice is finalized. If the invoice has not been finalized yet, this will be the current customer balance.
  * statement_descriptor `string`: Extra information about an invoice for the customer's credit card statement.
  * status `string` (values: deleted, draft, open, paid, uncollectible, void): The status of the invoice, one of `draft`, `open`, `paid`, `uncollectible`, or `void`. [Learn more](https://stripe.com/docs/billing/invoices/workflow#workflow-overview)
  * status_transitions **required** [invoices_status_transitions](#invoices_status_transitions)
  * subscription_proration_date `integer`: Only set for upcoming invoices that preview prorations. The time used to calculate prorations.
  * subtotal **required** `integer`: Total of all subscriptions, invoice items, and prorations on the invoice before any invoice level discount or tax is applied. Item discounts are already incorporated
  * tax `integer`: The amount of tax on this invoice. This is the sum of all the tax amounts on this invoice.
  * threshold_reason [invoice_threshold_reason](#invoice_threshold_reason)
  * total **required** `integer`: Total after discounts and taxes.
  * total_discount_amounts `array`: The aggregate amounts calculated per discount across all line items.
    * items [discounts_resource_discount_amount](#discounts_resource_discount_amount)
  * total_tax_amounts **required** `array`: The aggregate amounts calculated per tax rate for all line items.
    * items [invoice_tax_amount](#invoice_tax_amount)
  * webhooks_delivered_at `integer`: Invoices are automatically paid or sent 1 hour after webhooks are delivered, or until all webhook delivery attempts have [been exhausted](https://stripe.com/docs/billing/webhooks#understand). This field tracks the time when webhooks for this invoice were successfully delivered. If the invoice had no webhooks to deliver, this will be set while the invoice is being created.

### invoice_item_threshold_reason
* InvoiceItemThresholdReason `object`
  * line_item_ids **required** `array`: The IDs of the line items that triggered the threshold invoice.
    * items `string`
  * usage_gte **required** `integer`: The quantity threshold boundary that applied to the given line item.

### invoice_line_item_period
* InvoiceLineItemPeriod `object`
  * end **required** `integer`: End of the line item's billing period
  * start **required** `integer`: Start of the line item's billing period

### invoice_setting_custom_field
* InvoiceSettingCustomField `object`
  * name **required** `string`: The name of the custom field.
  * value **required** `string`: The value of the custom field.

### invoice_setting_customer_setting
* InvoiceSettingCustomerSetting `object`
  * custom_fields `array`: Default custom fields to be displayed on invoices for this customer.
    * items [invoice_setting_custom_field](#invoice_setting_custom_field)
  * footer `string`: Default footer to be displayed on invoices for this customer.

### invoice_setting_subscription_schedule_setting
* InvoiceSettingSubscriptionScheduleSetting `object`
  * days_until_due `integer`: Number of days within which a customer must pay invoices generated by this subscription schedule. This value will be `null` for subscription schedules where `billing=charge_automatically`.

### invoice_tax_amount
* InvoiceTaxAmount `object`
  * amount **required** `integer`: The amount, in %s, of the tax.
  * inclusive **required** `boolean`: Whether this tax amount is inclusive or exclusive.

### invoice_threshold_reason
* InvoiceThresholdReason `object`
  * amount_gte `integer`: The total invoice amount threshold boundary if it triggered the threshold invoice.
  * item_reasons **required** `array`: Indicates which line items triggered a threshold invoice.
    * items [invoice_item_threshold_reason](#invoice_item_threshold_reason)

### invoice_transfer_data
* InvoiceTransferData `object`
  * amount `integer`: The amount in %s that will be transferred to the destination account when the invoice is paid. By default, the entire amount is transferred to the destination.

### invoiceitem
* InvoiceItem `object`: Sometimes you want to add a charge or credit to a customer, but actually
  * amount **required** `integer`: Amount (in the `currency` specified) of the invoice item. This should always be equal to `unit_amount * quantity`.
  * currency **required** `string`: Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
  * date **required** `integer`: Time at which the object was created. Measured in seconds since the Unix epoch.
  * description `string`: An arbitrary string attached to the object. Often useful for displaying to users.
  * discountable **required** `boolean`: If true, discounts will apply to this invoice item. Always false for prorations.
  * discounts `array`: The discounts which apply to the invoice item. Item discounts are applied before invoice discounts. Use `expand[]=discounts` to expand each discount.
  * id **required** `string`: Unique identifier for the object.
  * livemode **required** `boolean`: Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
  * metadata `object`: Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
  * object **required** `string` (values: invoiceitem): String representing the object's type. Objects of the same type share the same value.
  * period **required** [invoice_line_item_period](#invoice_line_item_period)
  * proration **required** `boolean`: Whether the invoice item was created automatically as a proration adjustment when the customer switched plans.
  * quantity **required** `integer`: Quantity of units for the invoice item. If the invoice item is a proration, the quantity of the subscription that the proration was computed for.
  * subscription_item `string`: The subscription item that this invoice item has been created for, if any.
  * tax_rates `array`: The tax rates which apply to the invoice item. When set, the `default_tax_rates` on the invoice do not apply to this invoice item.
    * items [tax_rate](#tax_rate)
  * unit_amount `integer`: Unit amount (in the `currency` specified) of the invoice item.
  * unit_amount_decimal `string`: Same as `unit_amount`, but contains a decimal value with at most 12 decimal places.

### invoices_resource_invoice_tax_id
* InvoicesResourceInvoiceTaxID `object`
  * type **required** `string` (values: ae_trn, au_abn, br_cnpj, br_cpf, ca_bn, ca_qst, ch_vat, cl_tin, es_cif, eu_vat, hk_br, id_npwp, in_gst, jp_cn, jp_rn, kr_brn, li_uid, mx_rfc, my_frp, my_itn, my_sst, no_vat, nz_gst, ru_inn, ru_kpp, sa_vat, sg_gst, sg_uen, th_vat, tw_vat, unknown, us_ein, za_vat): The type of the tax ID, one of `eu_vat`, `br_cnpj`, `br_cpf`, `nz_gst`, `au_abn`, `in_gst`, `no_vat`, `za_vat`, `ch_vat`, `mx_rfc`, `sg_uen`, `ru_inn`, `ru_kpp`, `ca_bn`, `hk_br`, `es_cif`, `tw_vat`, `th_vat`, `jp_cn`, `jp_rn`, `li_uid`, `my_itn`, `us_ein`, `kr_brn`, `ca_qst`, `my_sst`, `sg_gst`, `ae_trn`, `cl_tin`, `sa_vat`, `id_npwp`, `my_frp`, or `unknown`
  * value `string`: The value of the tax ID.

### invoices_status_transitions
* InvoicesStatusTransitions `object`
  * finalized_at `integer`: The time that the invoice draft was finalized.
  * marked_uncollectible_at `integer`: The time that the invoice was marked uncollectible.
  * paid_at `integer`: The time that the invoice was paid.
  * voided_at `integer`: The time that the invoice was voided.

### issuer_fraud_record
* IssuerFraudRecord `object`: This resource has been renamed to [Early Fraud
  * actionable **required** `boolean`: An IFR is actionable if it has not received a dispute and has not been fully refunded. You may wish to proactively refund a charge that receives an IFR, in order to avoid receiving a dispute later.
  * created **required** `integer`: Time at which the object was created. Measured in seconds since the Unix epoch.
  * fraud_type **required** `string`: The type of fraud labelled by the issuer. One of `card_never_received`, `fraudulent_card_application`, `made_with_counterfeit_card`, `made_with_lost_card`, `made_with_stolen_card`, `misc`, `unauthorized_use_of_card`.
  * has_liability_shift **required** `boolean`: If true, the associated charge is subject to [liability shift](https://stripe.com/docs/payments/3d-secure#disputed-payments).
  * id **required** `string`: Unique identifier for the object.
  * livemode **required** `boolean`: Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
  * object **required** `string` (values: issuer_fraud_record): String representing the object's type. Objects of the same type share the same value.
  * post_date **required** `integer`: The timestamp at which the card issuer posted the issuer fraud record.

### issuing.authorization
* IssuingAuthorization `object`: When an [issued card](https://stripe.com/docs/issuing) is used to make a purchase, an Issuing `Authorization`
  * amount **required** `integer`: The total amount that was authorized or rejected. This amount is in the card's currency and in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal).
  * approved **required** `boolean`: Whether the authorization has been approved.
  * authorization_method **required** `string` (values: chip, contactless, keyed_in, online, swipe): How the card details were provided.
  * balance_transactions **required** `array`: List of balance transactions associated with this authorization.
    * items [balance_transaction](#balance_transaction)
  * card **required** [issuing.card](#issuing.card)
  * created **required** `integer`: Time at which the object was created. Measured in seconds since the Unix epoch.
  * currency **required** `string`: Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
  * id **required** `string`: Unique identifier for the object.
  * livemode **required** `boolean`: Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
  * merchant_amount **required** `integer`: The total amount that was authorized or rejected. This amount is in the `merchant_currency` and in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal).
  * merchant_currency **required** `string`: The currency that was presented to the cardholder for the authorization. Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
  * merchant_data **required** [issuing_authorization_merchant_data](#issuing_authorization_merchant_data)
  * metadata **required** `object`: Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
  * object **required** `string` (values: issuing.authorization): String representing the object's type. Objects of the same type share the same value.
  * request_history **required** `array`: History of every time the authorization was approved/denied (whether approved/denied by you directly or by Stripe based on your `spending_controls`). If the merchant changes the authorization by performing an [incremental authorization or partial capture](https://stripe.com/docs/issuing/purchases/authorizations), you can look at this field to see the previous states of the authorization.
    * items [issuing_authorization_request](#issuing_authorization_request)
  * status **required** `string` (values: closed, pending, reversed): The current status of the authorization in its lifecycle.
  * transactions **required** `array`: List of [transactions](https://stripe.com/docs/api/issuing/transactions) associated with this authorization.
    * items [issuing.transaction](#issuing.transaction)
  * verification_data **required** [issuing_authorization_verification_data](#issuing_authorization_verification_data)
  * wallet `string`: What, if any, digital wallet was used for this authorization. One of `apple_pay`, `google_pay`, or `samsung_pay`.

### issuing.card
* IssuingCard `object`: You can [create physical or virtual cards](https://stripe.com/docs/issuing/cards) that are issued to cardholders.
  * brand **required** `string`: The brand of the card.
  * cancellation_reason `string` (values: lost, stolen): The reason why the card was canceled.
  * cardholder **required** [issuing.cardholder](#issuing.cardholder)
  * created **required** `integer`: Time at which the object was created. Measured in seconds since the Unix epoch.
  * currency **required** `string`: Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
  * cvc `string`: The card's CVC. For security reasons, this is only available for virtual cards, and will be omitted unless you explicitly request it with [the `expand` parameter](https://stripe.com/docs/api/expanding_objects). Additionally, it's only available via the ["Retrieve a card" endpoint](https://stripe.com/docs/api/issuing/cards/retrieve), not via "List all cards" or any other endpoint.
  * exp_month **required** `integer`: The expiration month of the card.
  * exp_year **required** `integer`: The expiration year of the card.
  * id **required** `string`: Unique identifier for the object.
  * last4 **required** `string`: The last 4 digits of the card number.
  * livemode **required** `boolean`: Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
  * metadata **required** `object`: Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
  * number `string`: The full unredacted card number. For security reasons, this is only available for virtual cards, and will be omitted unless you explicitly request it with [the `expand` parameter](https://stripe.com/docs/api/expanding_objects). Additionally, it's only available via the ["Retrieve a card" endpoint](https://stripe.com/docs/api/issuing/cards/retrieve), not via "List all cards" or any other endpoint.
  * object **required** `string` (values: issuing.card): String representing the object's type. Objects of the same type share the same value.
  * replacement_reason `string` (values: damaged, expired, lost, stolen): The reason why the previous card needed to be replaced.
  * spending_controls **required** [issuing_card_authorization_controls](#issuing_card_authorization_controls)
  * status **required** `string` (values: active, canceled, inactive): Whether authorizations can be approved on this card.
  * type **required** `string` (values: physical, virtual): The type of the card.

### issuing.cardholder
* IssuingCardholder `object`: An Issuing `Cardholder` object represents an individual or business entity who is [issued](https://stripe.com/docs/issuing) cards.
  * billing **required** [issuing_cardholder_address](#issuing_cardholder_address)
  * created **required** `integer`: Time at which the object was created. Measured in seconds since the Unix epoch.
  * email `string`: The cardholder's email address.
  * id **required** `string`: Unique identifier for the object.
  * livemode **required** `boolean`: Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
  * metadata **required** `object`: Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
  * name **required** `string`: The cardholder's name. This will be printed on cards issued to them.
  * object **required** `string` (values: issuing.cardholder): String representing the object's type. Objects of the same type share the same value.
  * phone_number `string`: The cardholder's phone number.
  * requirements **required** [issuing_cardholder_requirements](#issuing_cardholder_requirements)
  * status **required** `string` (values: active, blocked, inactive): Specifies whether to permit authorizations on this cardholder's cards.
  * type **required** `string` (values: company, individual): One of `individual` or `company`.

### issuing.dispute
* IssuingDispute `object`: As a [card issuer](https://stripe.com/docs/issuing), you can dispute transactions that the cardholder does not recognize, suspects to be fraudulent, or has other issues with.
  * amount `integer`: Disputed amount. Usually the amount of the `disputed_transaction`, but can differ (usually because of currency fluctuation).
  * balance_transactions `array`: List of balance transactions associated with the dispute.
    * items [balance_transaction](#balance_transaction)
  * created `integer`: Time at which the object was created. Measured in seconds since the Unix epoch.
  * currency `string`: The currency the `disputed_transaction` was made in.
  * evidence [issuing_dispute_evidence](#issuing_dispute_evidence)
  * id **required** `string`: Unique identifier for the object.
  * livemode **required** `boolean`: Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
  * metadata `object`: Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
  * object **required** `string` (values: issuing.dispute): String representing the object's type. Objects of the same type share the same value.
  * status `string` (values: expired, lost, submitted, unsubmitted, won): Current status of the dispute.

### issuing.settlement
* IssuingSettlement `object`: When a non-stripe BIN is used, any use of an [issued card](https://stripe.com/docs/issuing) must be settled directly with the card network. The net amount owed is represented by an Issuing `Settlement` object.
  * bin **required** `string`: The Bank Identification Number reflecting this settlement record.
  * clearing_date **required** `integer`: The date that the transactions are cleared and posted to user's accounts.
  * created **required** `integer`: Time at which the object was created. Measured in seconds since the Unix epoch.
  * currency **required** `string`: Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
  * id **required** `string`: Unique identifier for the object.
  * interchange_fees **required** `integer`: The total interchange received as reimbursement for the transactions.
  * livemode **required** `boolean`: Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
  * metadata **required** `object`: Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
  * net_total **required** `integer`: The total net amount required to settle with the network.
  * network **required** `string` (values: visa): The card network for this settlement report. One of ["visa"]
  * network_fees **required** `integer`: The total amount of fees owed to the network.
  * network_settlement_identifier **required** `string`: The Settlement Identification Number assigned by the network.
  * object **required** `string` (values: issuing.settlement): String representing the object's type. Objects of the same type share the same value.
  * settlement_service **required** `string`: One of `international` or `uk_national_net`.
  * transaction_count **required** `integer`: The total number of transactions reflected in this settlement.
  * transaction_volume **required** `integer`: The total transaction amount reflected in this settlement.

### issuing.transaction
* IssuingTransaction `object`: Any use of an [issued card](https://stripe.com/docs/issuing) that results in funds entering or leaving
  * amount **required** `integer`: The transaction amount, which will be reflected in your balance. This amount is in your currency and in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal).
  * created **required** `integer`: Time at which the object was created. Measured in seconds since the Unix epoch.
  * currency **required** `string`: Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
  * id **required** `string`: Unique identifier for the object.
  * livemode **required** `boolean`: Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
  * merchant_amount **required** `integer`: The amount that the merchant will receive, denominated in `merchant_currency` and in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal). It will be different from `amount` if the merchant is taking payment in a different currency.
  * merchant_currency **required** `string`: The currency with which the merchant is taking payment.
  * merchant_data **required** [issuing_authorization_merchant_data](#issuing_authorization_merchant_data)
  * metadata **required** `object`: Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
  * object **required** `string` (values: issuing.transaction): String representing the object's type. Objects of the same type share the same value.
  * type **required** `string` (values: capture, dispute, refund): The nature of the transaction.

### issuing_authorization_amount_details
* IssuingAuthorizationAmountDetails `object`
  * atm_fee `integer`: The fee charged by the ATM for the cash withdrawal.

### issuing_authorization_merchant_data
* IssuingAuthorizationMerchantData `object`
  * category **required** `string`: A categorization of the seller's type of business. See our [merchant categories guide](https://stripe.com/docs/issuing/merchant-categories) for a list of possible values.
  * city `string`: City where the seller is located
  * country `string`: Country where the seller is located
  * name `string`: Name of the seller
  * network_id **required** `string`: Identifier assigned to the seller by the card brand
  * postal_code `string`: Postal code where the seller is located
  * state `string`: State where the seller is located

### issuing_authorization_pending_request
* IssuingAuthorizationPendingRequest `object`
  * amount **required** `integer`: The additional amount Stripe will hold if the authorization is approved, in the card's [currency](https://stripe.com/docs/api#issuing_authorization_object-pending-request-currency) and in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal).
  * currency **required** `string`: Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
  * is_amount_controllable **required** `boolean`: If set `true`, you may provide [amount](https://stripe.com/docs/api/issuing/authorizations/approve#approve_issuing_authorization-amount) to control how much to hold for the authorization.
  * merchant_amount **required** `integer`: The amount the merchant is requesting to be authorized in the `merchant_currency`. The amount is in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal).
  * merchant_currency **required** `string`: The local currency the merchant is requesting to authorize.

### issuing_authorization_request
* IssuingAuthorizationRequest `object`
  * amount **required** `integer`: The authorization amount in your card's currency and in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal). Stripe held this amount from your account to fund the authorization if the request was approved.
  * approved **required** `boolean`: Whether this request was approved.
  * created **required** `integer`: Time at which the object was created. Measured in seconds since the Unix epoch.
  * currency **required** `string`: Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
  * merchant_amount **required** `integer`: The amount that was authorized at the time of this request. This amount is in the `merchant_currency` and in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal).
  * merchant_currency **required** `string`: The currency that was collected by the merchant and presented to the cardholder for the authorization. Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
  * reason **required** `string` (values: account_disabled, card_active, card_inactive, cardholder_inactive, cardholder_verification_required, insufficient_funds, not_allowed, spending_controls, suspected_fraud, verification_failed, webhook_approved, webhook_declined, webhook_timeout): The reason for the approval or decline.

### issuing_authorization_verification_data
* IssuingAuthorizationVerificationData `object`
  * address_line1_check **required** `string` (values: match, mismatch, not_provided): Whether the cardholder provided an address first line and if it matched the cardholder’s `billing.address.line1`.
  * address_postal_code_check **required** `string` (values: match, mismatch, not_provided): Whether the cardholder provided a postal code and if it matched the cardholder’s `billing.address.postal_code`.
  * cvc_check **required** `string` (values: match, mismatch, not_provided): Whether the cardholder provided a CVC and if it matched Stripe’s record.
  * expiry_check **required** `string` (values: match, mismatch, not_provided): Whether the cardholder provided an expiry date and if it matched Stripe’s record.

### issuing_card_authorization_controls
* IssuingCardAuthorizationControls `object`
  * allowed_categories `array`: Array of strings containing [categories](https://stripe.com/docs/api#issuing_authorization_object-merchant_data-category) of authorizations to allow. All other categories will be blocked. Cannot be set with `blocked_categories`.
    * items `string` (values: ac_refrigeration_repair, accounting_bookkeeping_services, advertising_services, agricultural_cooperative, airlines_air_carriers, airports_flying_fields, ambulance_services, amusement_parks_carnivals, antique_reproductions, antique_shops, aquariums, architectural_surveying_services, art_dealers_and_galleries, artists_supply_and_craft_shops, auto_and_home_supply_stores, auto_body_repair_shops, auto_paint_shops, auto_service_shops, automated_cash_disburse, automated_fuel_dispensers, automobile_associations, automotive_parts_and_accessories_stores, automotive_tire_stores, bail_and_bond_payments, bakeries, bands_orchestras, barber_and_beauty_shops, betting_casino_gambling, bicycle_shops, billiard_pool_establishments, boat_dealers, boat_rentals_and_leases, book_stores, books_periodicals_and_newspapers, bowling_alleys, bus_lines, business_secretarial_schools, buying_shopping_services, cable_satellite_and_other_pay_television_and_radio, camera_and_photographic_supply_stores, candy_nut_and_confectionery_stores, car_and_truck_dealers_new_used, car_and_truck_dealers_used_only, car_rental_agencies, car_washes, carpentry_services, carpet_upholstery_cleaning, caterers, charitable_and_social_service_organizations_fundraising, chemicals_and_allied_products, child_care_services, childrens_and_infants_wear_stores, chiropodists_podiatrists, chiropractors, cigar_stores_and_stands, civic_social_fraternal_associations, cleaning_and_maintenance, clothing_rental, colleges_universities, commercial_equipment, commercial_footwear, commercial_photography_art_and_graphics, commuter_transport_and_ferries, computer_network_services, computer_programming, computer_repair, computer_software_stores, computers_peripherals_and_software, concrete_work_services, construction_materials, consulting_public_relations, correspondence_schools, cosmetic_stores, counseling_services, country_clubs, courier_services, court_costs, credit_reporting_agencies, cruise_lines, dairy_products_stores, dance_hall_studios_schools, dating_escort_services, dentists_orthodontists, department_stores, detective_agencies, digital_goods_applications, digital_goods_games, digital_goods_large_volume, digital_goods_media, direct_marketing_catalog_merchant, direct_marketing_combination_catalog_and_retail_merchant, direct_marketing_inbound_telemarketing, direct_marketing_insurance_services, direct_marketing_other, direct_marketing_outbound_telemarketing, direct_marketing_subscription, direct_marketing_travel, discount_stores, doctors, door_to_door_sales, drapery_window_covering_and_upholstery_stores, drinking_places, drug_stores_and_pharmacies, drugs_drug_proprietaries_and_druggist_sundries, dry_cleaners, durable_goods, duty_free_stores, eating_places_restaurants, educational_services, electric_razor_stores, electrical_parts_and_equipment, electrical_services, electronics_repair_shops, electronics_stores, elementary_secondary_schools, employment_temp_agencies, equipment_rental, exterminating_services, family_clothing_stores, fast_food_restaurants, financial_institutions, fines_government_administrative_entities, fireplace_fireplace_screens_and_accessories_stores, floor_covering_stores, florists, florists_supplies_nursery_stock_and_flowers, freezer_and_locker_meat_provisioners, fuel_dealers_non_automotive, funeral_services_crematories, furniture_home_furnishings_and_equipment_stores_except_appliances, furniture_repair_refinishing, furriers_and_fur_shops, general_services, gift_card_novelty_and_souvenir_shops, glass_paint_and_wallpaper_stores, glassware_crystal_stores, golf_courses_public, government_services, grocery_stores_supermarkets, hardware_equipment_and_supplies, hardware_stores, health_and_beauty_spas, hearing_aids_sales_and_supplies, heating_plumbing_a_c, hobby_toy_and_game_shops, home_supply_warehouse_stores, hospitals, hotels_motels_and_resorts, household_appliance_stores, industrial_supplies, information_retrieval_services, insurance_default, insurance_underwriting_premiums, intra_company_purchases, jewelry_stores_watches_clocks_and_silverware_stores, landscaping_services, laundries, laundry_cleaning_services, legal_services_attorneys, luggage_and_leather_goods_stores, lumber_building_materials_stores, manual_cash_disburse, marinas_service_and_supplies, masonry_stonework_and_plaster, massage_parlors, medical_and_dental_labs, medical_dental_ophthalmic_and_hospital_equipment_and_supplies, medical_services, membership_organizations, mens_and_boys_clothing_and_accessories_stores, mens_womens_clothing_stores, metal_service_centers, miscellaneous, miscellaneous_apparel_and_accessory_shops, miscellaneous_auto_dealers, miscellaneous_business_services, miscellaneous_food_stores, miscellaneous_general_merchandise, miscellaneous_general_services, miscellaneous_home_furnishing_specialty_stores, miscellaneous_publishing_and_printing, miscellaneous_recreation_services, miscellaneous_repair_shops, miscellaneous_specialty_retail, mobile_home_dealers, motion_picture_theaters, motor_freight_carriers_and_trucking, motor_homes_dealers, motor_vehicle_supplies_and_new_parts, motorcycle_shops_and_dealers, motorcycle_shops_dealers, music_stores_musical_instruments_pianos_and_sheet_music, news_dealers_and_newsstands, non_fi_money_orders, non_fi_stored_value_card_purchase_load, nondurable_goods, nurseries_lawn_and_garden_supply_stores, nursing_personal_care, office_and_commercial_furniture, opticians_eyeglasses, optometrists_ophthalmologist, orthopedic_goods_prosthetic_devices, osteopaths, package_stores_beer_wine_and_liquor, paints_varnishes_and_supplies, parking_lots_garages, passenger_railways, pawn_shops, pet_shops_pet_food_and_supplies, petroleum_and_petroleum_products, photo_developing, photographic_photocopy_microfilm_equipment_and_supplies, photographic_studios, picture_video_production, piece_goods_notions_and_other_dry_goods, plumbing_heating_equipment_and_supplies, political_organizations, postal_services_government_only, precious_stones_and_metals_watches_and_jewelry, professional_services, public_warehousing_and_storage, quick_copy_repro_and_blueprint, railroads, real_estate_agents_and_managers_rentals, record_stores, recreational_vehicle_rentals, religious_goods_stores, religious_organizations, roofing_siding_sheet_metal, secretarial_support_services, security_brokers_dealers, service_stations, sewing_needlework_fabric_and_piece_goods_stores, shoe_repair_hat_cleaning, shoe_stores, small_appliance_repair, snowmobile_dealers, special_trade_services, specialty_cleaning, sporting_goods_stores, sporting_recreation_camps, sports_and_riding_apparel_stores, sports_clubs_fields, stamp_and_coin_stores, stationary_office_supplies_printing_and_writing_paper, stationery_stores_office_and_school_supply_stores, swimming_pools_sales, t_ui_travel_germany, tailors_alterations, tax_payments_government_agencies, tax_preparation_services, taxicabs_limousines, telecommunication_equipment_and_telephone_sales, telecommunication_services, telegraph_services, tent_and_awning_shops, testing_laboratories, theatrical_ticket_agencies, timeshares, tire_retreading_and_repair, tolls_bridge_fees, tourist_attractions_and_exhibits, towing_services, trailer_parks_campgrounds, transportation_services, travel_agencies_tour_operators, truck_stop_iteration, truck_utility_trailer_rentals, typesetting_plate_making_and_related_services, typewriter_stores, u_s_federal_government_agencies_or_departments, uniforms_commercial_clothing, used_merchandise_and_secondhand_stores, utilities, variety_stores, veterinary_services, video_amusement_game_supplies, video_game_arcades, video_tape_rental_stores, vocational_trade_schools, watch_jewelry_repair, welding_repair, wholesale_clubs, wig_and_toupee_stores, wires_money_orders, womens_accessory_and_specialty_shops, womens_ready_to_wear_stores, wrecking_and_salvage_yards)
  * blocked_categories `array`: Array of strings containing [categories](https://stripe.com/docs/api#issuing_authorization_object-merchant_data-category) of authorizations to decline. All other categories will be allowed. Cannot be set with `allowed_categories`.
    * items `string` (values: ac_refrigeration_repair, accounting_bookkeeping_services, advertising_services, agricultural_cooperative, airlines_air_carriers, airports_flying_fields, ambulance_services, amusement_parks_carnivals, antique_reproductions, antique_shops, aquariums, architectural_surveying_services, art_dealers_and_galleries, artists_supply_and_craft_shops, auto_and_home_supply_stores, auto_body_repair_shops, auto_paint_shops, auto_service_shops, automated_cash_disburse, automated_fuel_dispensers, automobile_associations, automotive_parts_and_accessories_stores, automotive_tire_stores, bail_and_bond_payments, bakeries, bands_orchestras, barber_and_beauty_shops, betting_casino_gambling, bicycle_shops, billiard_pool_establishments, boat_dealers, boat_rentals_and_leases, book_stores, books_periodicals_and_newspapers, bowling_alleys, bus_lines, business_secretarial_schools, buying_shopping_services, cable_satellite_and_other_pay_television_and_radio, camera_and_photographic_supply_stores, candy_nut_and_confectionery_stores, car_and_truck_dealers_new_used, car_and_truck_dealers_used_only, car_rental_agencies, car_washes, carpentry_services, carpet_upholstery_cleaning, caterers, charitable_and_social_service_organizations_fundraising, chemicals_and_allied_products, child_care_services, childrens_and_infants_wear_stores, chiropodists_podiatrists, chiropractors, cigar_stores_and_stands, civic_social_fraternal_associations, cleaning_and_maintenance, clothing_rental, colleges_universities, commercial_equipment, commercial_footwear, commercial_photography_art_and_graphics, commuter_transport_and_ferries, computer_network_services, computer_programming, computer_repair, computer_software_stores, computers_peripherals_and_software, concrete_work_services, construction_materials, consulting_public_relations, correspondence_schools, cosmetic_stores, counseling_services, country_clubs, courier_services, court_costs, credit_reporting_agencies, cruise_lines, dairy_products_stores, dance_hall_studios_schools, dating_escort_services, dentists_orthodontists, department_stores, detective_agencies, digital_goods_applications, digital_goods_games, digital_goods_large_volume, digital_goods_media, direct_marketing_catalog_merchant, direct_marketing_combination_catalog_and_retail_merchant, direct_marketing_inbound_telemarketing, direct_marketing_insurance_services, direct_marketing_other, direct_marketing_outbound_telemarketing, direct_marketing_subscription, direct_marketing_travel, discount_stores, doctors, door_to_door_sales, drapery_window_covering_and_upholstery_stores, drinking_places, drug_stores_and_pharmacies, drugs_drug_proprietaries_and_druggist_sundries, dry_cleaners, durable_goods, duty_free_stores, eating_places_restaurants, educational_services, electric_razor_stores, electrical_parts_and_equipment, electrical_services, electronics_repair_shops, electronics_stores, elementary_secondary_schools, employment_temp_agencies, equipment_rental, exterminating_services, family_clothing_stores, fast_food_restaurants, financial_institutions, fines_government_administrative_entities, fireplace_fireplace_screens_and_accessories_stores, floor_covering_stores, florists, florists_supplies_nursery_stock_and_flowers, freezer_and_locker_meat_provisioners, fuel_dealers_non_automotive, funeral_services_crematories, furniture_home_furnishings_and_equipment_stores_except_appliances, furniture_repair_refinishing, furriers_and_fur_shops, general_services, gift_card_novelty_and_souvenir_shops, glass_paint_and_wallpaper_stores, glassware_crystal_stores, golf_courses_public, government_services, grocery_stores_supermarkets, hardware_equipment_and_supplies, hardware_stores, health_and_beauty_spas, hearing_aids_sales_and_supplies, heating_plumbing_a_c, hobby_toy_and_game_shops, home_supply_warehouse_stores, hospitals, hotels_motels_and_resorts, household_appliance_stores, industrial_supplies, information_retrieval_services, insurance_default, insurance_underwriting_premiums, intra_company_purchases, jewelry_stores_watches_clocks_and_silverware_stores, landscaping_services, laundries, laundry_cleaning_services, legal_services_attorneys, luggage_and_leather_goods_stores, lumber_building_materials_stores, manual_cash_disburse, marinas_service_and_supplies, masonry_stonework_and_plaster, massage_parlors, medical_and_dental_labs, medical_dental_ophthalmic_and_hospital_equipment_and_supplies, medical_services, membership_organizations, mens_and_boys_clothing_and_accessories_stores, mens_womens_clothing_stores, metal_service_centers, miscellaneous, miscellaneous_apparel_and_accessory_shops, miscellaneous_auto_dealers, miscellaneous_business_services, miscellaneous_food_stores, miscellaneous_general_merchandise, miscellaneous_general_services, miscellaneous_home_furnishing_specialty_stores, miscellaneous_publishing_and_printing, miscellaneous_recreation_services, miscellaneous_repair_shops, miscellaneous_specialty_retail, mobile_home_dealers, motion_picture_theaters, motor_freight_carriers_and_trucking, motor_homes_dealers, motor_vehicle_supplies_and_new_parts, motorcycle_shops_and_dealers, motorcycle_shops_dealers, music_stores_musical_instruments_pianos_and_sheet_music, news_dealers_and_newsstands, non_fi_money_orders, non_fi_stored_value_card_purchase_load, nondurable_goods, nurseries_lawn_and_garden_supply_stores, nursing_personal_care, office_and_commercial_furniture, opticians_eyeglasses, optometrists_ophthalmologist, orthopedic_goods_prosthetic_devices, osteopaths, package_stores_beer_wine_and_liquor, paints_varnishes_and_supplies, parking_lots_garages, passenger_railways, pawn_shops, pet_shops_pet_food_and_supplies, petroleum_and_petroleum_products, photo_developing, photographic_photocopy_microfilm_equipment_and_supplies, photographic_studios, picture_video_production, piece_goods_notions_and_other_dry_goods, plumbing_heating_equipment_and_supplies, political_organizations, postal_services_government_only, precious_stones_and_metals_watches_and_jewelry, professional_services, public_warehousing_and_storage, quick_copy_repro_and_blueprint, railroads, real_estate_agents_and_managers_rentals, record_stores, recreational_vehicle_rentals, religious_goods_stores, religious_organizations, roofing_siding_sheet_metal, secretarial_support_services, security_brokers_dealers, service_stations, sewing_needlework_fabric_and_piece_goods_stores, shoe_repair_hat_cleaning, shoe_stores, small_appliance_repair, snowmobile_dealers, special_trade_services, specialty_cleaning, sporting_goods_stores, sporting_recreation_camps, sports_and_riding_apparel_stores, sports_clubs_fields, stamp_and_coin_stores, stationary_office_supplies_printing_and_writing_paper, stationery_stores_office_and_school_supply_stores, swimming_pools_sales, t_ui_travel_germany, tailors_alterations, tax_payments_government_agencies, tax_preparation_services, taxicabs_limousines, telecommunication_equipment_and_telephone_sales, telecommunication_services, telegraph_services, tent_and_awning_shops, testing_laboratories, theatrical_ticket_agencies, timeshares, tire_retreading_and_repair, tolls_bridge_fees, tourist_attractions_and_exhibits, towing_services, trailer_parks_campgrounds, transportation_services, travel_agencies_tour_operators, truck_stop_iteration, truck_utility_trailer_rentals, typesetting_plate_making_and_related_services, typewriter_stores, u_s_federal_government_agencies_or_departments, uniforms_commercial_clothing, used_merchandise_and_secondhand_stores, utilities, variety_stores, veterinary_services, video_amusement_game_supplies, video_game_arcades, video_tape_rental_stores, vocational_trade_schools, watch_jewelry_repair, welding_repair, wholesale_clubs, wig_and_toupee_stores, wires_money_orders, womens_accessory_and_specialty_shops, womens_ready_to_wear_stores, wrecking_and_salvage_yards)
  * spending_limits `array`: Limit spending with amount-based rules.
    * items [issuing_card_spending_limit](#issuing_card_spending_limit)
  * spending_limits_currency `string`: Currency of the amounts within `spending_limits`. Always the same as the currency of the card.

### issuing_card_shipping
* IssuingCardShipping `object`
  * address **required** [address](#address)
  * carrier `string` (values: fedex, usps): The delivery company that shipped a card.
  * eta `integer`: A unix timestamp representing a best estimate of when the card will be delivered.
  * name **required** `string`: Recipient name.
  * service **required** `string` (values: express, priority, standard): Shipment service, such as `standard` or `express`.
  * status `string` (values: canceled, delivered, failure, pending, returned, shipped): The delivery status of the card.
  * tracking_number `string`: A tracking number for a card shipment.
  * tracking_url `string`: A link to the shipping carrier's site where you can view detailed information about a card shipment.
  * type **required** `string` (values: bulk, individual): Packaging options.

### issuing_card_spending_limit
* IssuingCardSpendingLimit `object`
  * amount **required** `integer`: Maximum amount allowed to spend per interval.
  * categories `array`: Array of strings containing [categories](https://stripe.com/docs/api#issuing_authorization_object-merchant_data-category) this limit applies to. Omitting this field will apply the limit to all categories.
    * items `string` (values: ac_refrigeration_repair, accounting_bookkeeping_services, advertising_services, agricultural_cooperative, airlines_air_carriers, airports_flying_fields, ambulance_services, amusement_parks_carnivals, antique_reproductions, antique_shops, aquariums, architectural_surveying_services, art_dealers_and_galleries, artists_supply_and_craft_shops, auto_and_home_supply_stores, auto_body_repair_shops, auto_paint_shops, auto_service_shops, automated_cash_disburse, automated_fuel_dispensers, automobile_associations, automotive_parts_and_accessories_stores, automotive_tire_stores, bail_and_bond_payments, bakeries, bands_orchestras, barber_and_beauty_shops, betting_casino_gambling, bicycle_shops, billiard_pool_establishments, boat_dealers, boat_rentals_and_leases, book_stores, books_periodicals_and_newspapers, bowling_alleys, bus_lines, business_secretarial_schools, buying_shopping_services, cable_satellite_and_other_pay_television_and_radio, camera_and_photographic_supply_stores, candy_nut_and_confectionery_stores, car_and_truck_dealers_new_used, car_and_truck_dealers_used_only, car_rental_agencies, car_washes, carpentry_services, carpet_upholstery_cleaning, caterers, charitable_and_social_service_organizations_fundraising, chemicals_and_allied_products, child_care_services, childrens_and_infants_wear_stores, chiropodists_podiatrists, chiropractors, cigar_stores_and_stands, civic_social_fraternal_associations, cleaning_and_maintenance, clothing_rental, colleges_universities, commercial_equipment, commercial_footwear, commercial_photography_art_and_graphics, commuter_transport_and_ferries, computer_network_services, computer_programming, computer_repair, computer_software_stores, computers_peripherals_and_software, concrete_work_services, construction_materials, consulting_public_relations, correspondence_schools, cosmetic_stores, counseling_services, country_clubs, courier_services, court_costs, credit_reporting_agencies, cruise_lines, dairy_products_stores, dance_hall_studios_schools, dating_escort_services, dentists_orthodontists, department_stores, detective_agencies, digital_goods_applications, digital_goods_games, digital_goods_large_volume, digital_goods_media, direct_marketing_catalog_merchant, direct_marketing_combination_catalog_and_retail_merchant, direct_marketing_inbound_telemarketing, direct_marketing_insurance_services, direct_marketing_other, direct_marketing_outbound_telemarketing, direct_marketing_subscription, direct_marketing_travel, discount_stores, doctors, door_to_door_sales, drapery_window_covering_and_upholstery_stores, drinking_places, drug_stores_and_pharmacies, drugs_drug_proprietaries_and_druggist_sundries, dry_cleaners, durable_goods, duty_free_stores, eating_places_restaurants, educational_services, electric_razor_stores, electrical_parts_and_equipment, electrical_services, electronics_repair_shops, electronics_stores, elementary_secondary_schools, employment_temp_agencies, equipment_rental, exterminating_services, family_clothing_stores, fast_food_restaurants, financial_institutions, fines_government_administrative_entities, fireplace_fireplace_screens_and_accessories_stores, floor_covering_stores, florists, florists_supplies_nursery_stock_and_flowers, freezer_and_locker_meat_provisioners, fuel_dealers_non_automotive, funeral_services_crematories, furniture_home_furnishings_and_equipment_stores_except_appliances, furniture_repair_refinishing, furriers_and_fur_shops, general_services, gift_card_novelty_and_souvenir_shops, glass_paint_and_wallpaper_stores, glassware_crystal_stores, golf_courses_public, government_services, grocery_stores_supermarkets, hardware_equipment_and_supplies, hardware_stores, health_and_beauty_spas, hearing_aids_sales_and_supplies, heating_plumbing_a_c, hobby_toy_and_game_shops, home_supply_warehouse_stores, hospitals, hotels_motels_and_resorts, household_appliance_stores, industrial_supplies, information_retrieval_services, insurance_default, insurance_underwriting_premiums, intra_company_purchases, jewelry_stores_watches_clocks_and_silverware_stores, landscaping_services, laundries, laundry_cleaning_services, legal_services_attorneys, luggage_and_leather_goods_stores, lumber_building_materials_stores, manual_cash_disburse, marinas_service_and_supplies, masonry_stonework_and_plaster, massage_parlors, medical_and_dental_labs, medical_dental_ophthalmic_and_hospital_equipment_and_supplies, medical_services, membership_organizations, mens_and_boys_clothing_and_accessories_stores, mens_womens_clothing_stores, metal_service_centers, miscellaneous, miscellaneous_apparel_and_accessory_shops, miscellaneous_auto_dealers, miscellaneous_business_services, miscellaneous_food_stores, miscellaneous_general_merchandise, miscellaneous_general_services, miscellaneous_home_furnishing_specialty_stores, miscellaneous_publishing_and_printing, miscellaneous_recreation_services, miscellaneous_repair_shops, miscellaneous_specialty_retail, mobile_home_dealers, motion_picture_theaters, motor_freight_carriers_and_trucking, motor_homes_dealers, motor_vehicle_supplies_and_new_parts, motorcycle_shops_and_dealers, motorcycle_shops_dealers, music_stores_musical_instruments_pianos_and_sheet_music, news_dealers_and_newsstands, non_fi_money_orders, non_fi_stored_value_card_purchase_load, nondurable_goods, nurseries_lawn_and_garden_supply_stores, nursing_personal_care, office_and_commercial_furniture, opticians_eyeglasses, optometrists_ophthalmologist, orthopedic_goods_prosthetic_devices, osteopaths, package_stores_beer_wine_and_liquor, paints_varnishes_and_supplies, parking_lots_garages, passenger_railways, pawn_shops, pet_shops_pet_food_and_supplies, petroleum_and_petroleum_products, photo_developing, photographic_photocopy_microfilm_equipment_and_supplies, photographic_studios, picture_video_production, piece_goods_notions_and_other_dry_goods, plumbing_heating_equipment_and_supplies, political_organizations, postal_services_government_only, precious_stones_and_metals_watches_and_jewelry, professional_services, public_warehousing_and_storage, quick_copy_repro_and_blueprint, railroads, real_estate_agents_and_managers_rentals, record_stores, recreational_vehicle_rentals, religious_goods_stores, religious_organizations, roofing_siding_sheet_metal, secretarial_support_services, security_brokers_dealers, service_stations, sewing_needlework_fabric_and_piece_goods_stores, shoe_repair_hat_cleaning, shoe_stores, small_appliance_repair, snowmobile_dealers, special_trade_services, specialty_cleaning, sporting_goods_stores, sporting_recreation_camps, sports_and_riding_apparel_stores, sports_clubs_fields, stamp_and_coin_stores, stationary_office_supplies_printing_and_writing_paper, stationery_stores_office_and_school_supply_stores, swimming_pools_sales, t_ui_travel_germany, tailors_alterations, tax_payments_government_agencies, tax_preparation_services, taxicabs_limousines, telecommunication_equipment_and_telephone_sales, telecommunication_services, telegraph_services, tent_and_awning_shops, testing_laboratories, theatrical_ticket_agencies, timeshares, tire_retreading_and_repair, tolls_bridge_fees, tourist_attractions_and_exhibits, towing_services, trailer_parks_campgrounds, transportation_services, travel_agencies_tour_operators, truck_stop_iteration, truck_utility_trailer_rentals, typesetting_plate_making_and_related_services, typewriter_stores, u_s_federal_government_agencies_or_departments, uniforms_commercial_clothing, used_merchandise_and_secondhand_stores, utilities, variety_stores, veterinary_services, video_amusement_game_supplies, video_game_arcades, video_tape_rental_stores, vocational_trade_schools, watch_jewelry_repair, welding_repair, wholesale_clubs, wig_and_toupee_stores, wires_money_orders, womens_accessory_and_specialty_shops, womens_ready_to_wear_stores, wrecking_and_salvage_yards)
  * interval **required** `string` (values: all_time, daily, monthly, per_authorization, weekly, yearly): Interval (or event) to which the amount applies.

### issuing_cardholder_address
* IssuingCardholderAddress `object`
  * address **required** [address](#address)

### issuing_cardholder_authorization_controls
* IssuingCardholderAuthorizationControls `object`
  * allowed_categories `array`: Array of strings containing [categories](https://stripe.com/docs/api#issuing_authorization_object-merchant_data-category) of authorizations to allow. All other categories will be blocked. Cannot be set with `blocked_categories`.
    * items `string` (values: ac_refrigeration_repair, accounting_bookkeeping_services, advertising_services, agricultural_cooperative, airlines_air_carriers, airports_flying_fields, ambulance_services, amusement_parks_carnivals, antique_reproductions, antique_shops, aquariums, architectural_surveying_services, art_dealers_and_galleries, artists_supply_and_craft_shops, auto_and_home_supply_stores, auto_body_repair_shops, auto_paint_shops, auto_service_shops, automated_cash_disburse, automated_fuel_dispensers, automobile_associations, automotive_parts_and_accessories_stores, automotive_tire_stores, bail_and_bond_payments, bakeries, bands_orchestras, barber_and_beauty_shops, betting_casino_gambling, bicycle_shops, billiard_pool_establishments, boat_dealers, boat_rentals_and_leases, book_stores, books_periodicals_and_newspapers, bowling_alleys, bus_lines, business_secretarial_schools, buying_shopping_services, cable_satellite_and_other_pay_television_and_radio, camera_and_photographic_supply_stores, candy_nut_and_confectionery_stores, car_and_truck_dealers_new_used, car_and_truck_dealers_used_only, car_rental_agencies, car_washes, carpentry_services, carpet_upholstery_cleaning, caterers, charitable_and_social_service_organizations_fundraising, chemicals_and_allied_products, child_care_services, childrens_and_infants_wear_stores, chiropodists_podiatrists, chiropractors, cigar_stores_and_stands, civic_social_fraternal_associations, cleaning_and_maintenance, clothing_rental, colleges_universities, commercial_equipment, commercial_footwear, commercial_photography_art_and_graphics, commuter_transport_and_ferries, computer_network_services, computer_programming, computer_repair, computer_software_stores, computers_peripherals_and_software, concrete_work_services, construction_materials, consulting_public_relations, correspondence_schools, cosmetic_stores, counseling_services, country_clubs, courier_services, court_costs, credit_reporting_agencies, cruise_lines, dairy_products_stores, dance_hall_studios_schools, dating_escort_services, dentists_orthodontists, department_stores, detective_agencies, digital_goods_applications, digital_goods_games, digital_goods_large_volume, digital_goods_media, direct_marketing_catalog_merchant, direct_marketing_combination_catalog_and_retail_merchant, direct_marketing_inbound_telemarketing, direct_marketing_insurance_services, direct_marketing_other, direct_marketing_outbound_telemarketing, direct_marketing_subscription, direct_marketing_travel, discount_stores, doctors, door_to_door_sales, drapery_window_covering_and_upholstery_stores, drinking_places, drug_stores_and_pharmacies, drugs_drug_proprietaries_and_druggist_sundries, dry_cleaners, durable_goods, duty_free_stores, eating_places_restaurants, educational_services, electric_razor_stores, electrical_parts_and_equipment, electrical_services, electronics_repair_shops, electronics_stores, elementary_secondary_schools, employment_temp_agencies, equipment_rental, exterminating_services, family_clothing_stores, fast_food_restaurants, financial_institutions, fines_government_administrative_entities, fireplace_fireplace_screens_and_accessories_stores, floor_covering_stores, florists, florists_supplies_nursery_stock_and_flowers, freezer_and_locker_meat_provisioners, fuel_dealers_non_automotive, funeral_services_crematories, furniture_home_furnishings_and_equipment_stores_except_appliances, furniture_repair_refinishing, furriers_and_fur_shops, general_services, gift_card_novelty_and_souvenir_shops, glass_paint_and_wallpaper_stores, glassware_crystal_stores, golf_courses_public, government_services, grocery_stores_supermarkets, hardware_equipment_and_supplies, hardware_stores, health_and_beauty_spas, hearing_aids_sales_and_supplies, heating_plumbing_a_c, hobby_toy_and_game_shops, home_supply_warehouse_stores, hospitals, hotels_motels_and_resorts, household_appliance_stores, industrial_supplies, information_retrieval_services, insurance_default, insurance_underwriting_premiums, intra_company_purchases, jewelry_stores_watches_clocks_and_silverware_stores, landscaping_services, laundries, laundry_cleaning_services, legal_services_attorneys, luggage_and_leather_goods_stores, lumber_building_materials_stores, manual_cash_disburse, marinas_service_and_supplies, masonry_stonework_and_plaster, massage_parlors, medical_and_dental_labs, medical_dental_ophthalmic_and_hospital_equipment_and_supplies, medical_services, membership_organizations, mens_and_boys_clothing_and_accessories_stores, mens_womens_clothing_stores, metal_service_centers, miscellaneous, miscellaneous_apparel_and_accessory_shops, miscellaneous_auto_dealers, miscellaneous_business_services, miscellaneous_food_stores, miscellaneous_general_merchandise, miscellaneous_general_services, miscellaneous_home_furnishing_specialty_stores, miscellaneous_publishing_and_printing, miscellaneous_recreation_services, miscellaneous_repair_shops, miscellaneous_specialty_retail, mobile_home_dealers, motion_picture_theaters, motor_freight_carriers_and_trucking, motor_homes_dealers, motor_vehicle_supplies_and_new_parts, motorcycle_shops_and_dealers, motorcycle_shops_dealers, music_stores_musical_instruments_pianos_and_sheet_music, news_dealers_and_newsstands, non_fi_money_orders, non_fi_stored_value_card_purchase_load, nondurable_goods, nurseries_lawn_and_garden_supply_stores, nursing_personal_care, office_and_commercial_furniture, opticians_eyeglasses, optometrists_ophthalmologist, orthopedic_goods_prosthetic_devices, osteopaths, package_stores_beer_wine_and_liquor, paints_varnishes_and_supplies, parking_lots_garages, passenger_railways, pawn_shops, pet_shops_pet_food_and_supplies, petroleum_and_petroleum_products, photo_developing, photographic_photocopy_microfilm_equipment_and_supplies, photographic_studios, picture_video_production, piece_goods_notions_and_other_dry_goods, plumbing_heating_equipment_and_supplies, political_organizations, postal_services_government_only, precious_stones_and_metals_watches_and_jewelry, professional_services, public_warehousing_and_storage, quick_copy_repro_and_blueprint, railroads, real_estate_agents_and_managers_rentals, record_stores, recreational_vehicle_rentals, religious_goods_stores, religious_organizations, roofing_siding_sheet_metal, secretarial_support_services, security_brokers_dealers, service_stations, sewing_needlework_fabric_and_piece_goods_stores, shoe_repair_hat_cleaning, shoe_stores, small_appliance_repair, snowmobile_dealers, special_trade_services, specialty_cleaning, sporting_goods_stores, sporting_recreation_camps, sports_and_riding_apparel_stores, sports_clubs_fields, stamp_and_coin_stores, stationary_office_supplies_printing_and_writing_paper, stationery_stores_office_and_school_supply_stores, swimming_pools_sales, t_ui_travel_germany, tailors_alterations, tax_payments_government_agencies, tax_preparation_services, taxicabs_limousines, telecommunication_equipment_and_telephone_sales, telecommunication_services, telegraph_services, tent_and_awning_shops, testing_laboratories, theatrical_ticket_agencies, timeshares, tire_retreading_and_repair, tolls_bridge_fees, tourist_attractions_and_exhibits, towing_services, trailer_parks_campgrounds, transportation_services, travel_agencies_tour_operators, truck_stop_iteration, truck_utility_trailer_rentals, typesetting_plate_making_and_related_services, typewriter_stores, u_s_federal_government_agencies_or_departments, uniforms_commercial_clothing, used_merchandise_and_secondhand_stores, utilities, variety_stores, veterinary_services, video_amusement_game_supplies, video_game_arcades, video_tape_rental_stores, vocational_trade_schools, watch_jewelry_repair, welding_repair, wholesale_clubs, wig_and_toupee_stores, wires_money_orders, womens_accessory_and_specialty_shops, womens_ready_to_wear_stores, wrecking_and_salvage_yards)
  * blocked_categories `array`: Array of strings containing [categories](https://stripe.com/docs/api#issuing_authorization_object-merchant_data-category) of authorizations to decline. All other categories will be allowed. Cannot be set with `allowed_categories`.
    * items `string` (values: ac_refrigeration_repair, accounting_bookkeeping_services, advertising_services, agricultural_cooperative, airlines_air_carriers, airports_flying_fields, ambulance_services, amusement_parks_carnivals, antique_reproductions, antique_shops, aquariums, architectural_surveying_services, art_dealers_and_galleries, artists_supply_and_craft_shops, auto_and_home_supply_stores, auto_body_repair_shops, auto_paint_shops, auto_service_shops, automated_cash_disburse, automated_fuel_dispensers, automobile_associations, automotive_parts_and_accessories_stores, automotive_tire_stores, bail_and_bond_payments, bakeries, bands_orchestras, barber_and_beauty_shops, betting_casino_gambling, bicycle_shops, billiard_pool_establishments, boat_dealers, boat_rentals_and_leases, book_stores, books_periodicals_and_newspapers, bowling_alleys, bus_lines, business_secretarial_schools, buying_shopping_services, cable_satellite_and_other_pay_television_and_radio, camera_and_photographic_supply_stores, candy_nut_and_confectionery_stores, car_and_truck_dealers_new_used, car_and_truck_dealers_used_only, car_rental_agencies, car_washes, carpentry_services, carpet_upholstery_cleaning, caterers, charitable_and_social_service_organizations_fundraising, chemicals_and_allied_products, child_care_services, childrens_and_infants_wear_stores, chiropodists_podiatrists, chiropractors, cigar_stores_and_stands, civic_social_fraternal_associations, cleaning_and_maintenance, clothing_rental, colleges_universities, commercial_equipment, commercial_footwear, commercial_photography_art_and_graphics, commuter_transport_and_ferries, computer_network_services, computer_programming, computer_repair, computer_software_stores, computers_peripherals_and_software, concrete_work_services, construction_materials, consulting_public_relations, correspondence_schools, cosmetic_stores, counseling_services, country_clubs, courier_services, court_costs, credit_reporting_agencies, cruise_lines, dairy_products_stores, dance_hall_studios_schools, dating_escort_services, dentists_orthodontists, department_stores, detective_agencies, digital_goods_applications, digital_goods_games, digital_goods_large_volume, digital_goods_media, direct_marketing_catalog_merchant, direct_marketing_combination_catalog_and_retail_merchant, direct_marketing_inbound_telemarketing, direct_marketing_insurance_services, direct_marketing_other, direct_marketing_outbound_telemarketing, direct_marketing_subscription, direct_marketing_travel, discount_stores, doctors, door_to_door_sales, drapery_window_covering_and_upholstery_stores, drinking_places, drug_stores_and_pharmacies, drugs_drug_proprietaries_and_druggist_sundries, dry_cleaners, durable_goods, duty_free_stores, eating_places_restaurants, educational_services, electric_razor_stores, electrical_parts_and_equipment, electrical_services, electronics_repair_shops, electronics_stores, elementary_secondary_schools, employment_temp_agencies, equipment_rental, exterminating_services, family_clothing_stores, fast_food_restaurants, financial_institutions, fines_government_administrative_entities, fireplace_fireplace_screens_and_accessories_stores, floor_covering_stores, florists, florists_supplies_nursery_stock_and_flowers, freezer_and_locker_meat_provisioners, fuel_dealers_non_automotive, funeral_services_crematories, furniture_home_furnishings_and_equipment_stores_except_appliances, furniture_repair_refinishing, furriers_and_fur_shops, general_services, gift_card_novelty_and_souvenir_shops, glass_paint_and_wallpaper_stores, glassware_crystal_stores, golf_courses_public, government_services, grocery_stores_supermarkets, hardware_equipment_and_supplies, hardware_stores, health_and_beauty_spas, hearing_aids_sales_and_supplies, heating_plumbing_a_c, hobby_toy_and_game_shops, home_supply_warehouse_stores, hospitals, hotels_motels_and_resorts, household_appliance_stores, industrial_supplies, information_retrieval_services, insurance_default, insurance_underwriting_premiums, intra_company_purchases, jewelry_stores_watches_clocks_and_silverware_stores, landscaping_services, laundries, laundry_cleaning_services, legal_services_attorneys, luggage_and_leather_goods_stores, lumber_building_materials_stores, manual_cash_disburse, marinas_service_and_supplies, masonry_stonework_and_plaster, massage_parlors, medical_and_dental_labs, medical_dental_ophthalmic_and_hospital_equipment_and_supplies, medical_services, membership_organizations, mens_and_boys_clothing_and_accessories_stores, mens_womens_clothing_stores, metal_service_centers, miscellaneous, miscellaneous_apparel_and_accessory_shops, miscellaneous_auto_dealers, miscellaneous_business_services, miscellaneous_food_stores, miscellaneous_general_merchandise, miscellaneous_general_services, miscellaneous_home_furnishing_specialty_stores, miscellaneous_publishing_and_printing, miscellaneous_recreation_services, miscellaneous_repair_shops, miscellaneous_specialty_retail, mobile_home_dealers, motion_picture_theaters, motor_freight_carriers_and_trucking, motor_homes_dealers, motor_vehicle_supplies_and_new_parts, motorcycle_shops_and_dealers, motorcycle_shops_dealers, music_stores_musical_instruments_pianos_and_sheet_music, news_dealers_and_newsstands, non_fi_money_orders, non_fi_stored_value_card_purchase_load, nondurable_goods, nurseries_lawn_and_garden_supply_stores, nursing_personal_care, office_and_commercial_furniture, opticians_eyeglasses, optometrists_ophthalmologist, orthopedic_goods_prosthetic_devices, osteopaths, package_stores_beer_wine_and_liquor, paints_varnishes_and_supplies, parking_lots_garages, passenger_railways, pawn_shops, pet_shops_pet_food_and_supplies, petroleum_and_petroleum_products, photo_developing, photographic_photocopy_microfilm_equipment_and_supplies, photographic_studios, picture_video_production, piece_goods_notions_and_other_dry_goods, plumbing_heating_equipment_and_supplies, political_organizations, postal_services_government_only, precious_stones_and_metals_watches_and_jewelry, professional_services, public_warehousing_and_storage, quick_copy_repro_and_blueprint, railroads, real_estate_agents_and_managers_rentals, record_stores, recreational_vehicle_rentals, religious_goods_stores, religious_organizations, roofing_siding_sheet_metal, secretarial_support_services, security_brokers_dealers, service_stations, sewing_needlework_fabric_and_piece_goods_stores, shoe_repair_hat_cleaning, shoe_stores, small_appliance_repair, snowmobile_dealers, special_trade_services, specialty_cleaning, sporting_goods_stores, sporting_recreation_camps, sports_and_riding_apparel_stores, sports_clubs_fields, stamp_and_coin_stores, stationary_office_supplies_printing_and_writing_paper, stationery_stores_office_and_school_supply_stores, swimming_pools_sales, t_ui_travel_germany, tailors_alterations, tax_payments_government_agencies, tax_preparation_services, taxicabs_limousines, telecommunication_equipment_and_telephone_sales, telecommunication_services, telegraph_services, tent_and_awning_shops, testing_laboratories, theatrical_ticket_agencies, timeshares, tire_retreading_and_repair, tolls_bridge_fees, tourist_attractions_and_exhibits, towing_services, trailer_parks_campgrounds, transportation_services, travel_agencies_tour_operators, truck_stop_iteration, truck_utility_trailer_rentals, typesetting_plate_making_and_related_services, typewriter_stores, u_s_federal_government_agencies_or_departments, uniforms_commercial_clothing, used_merchandise_and_secondhand_stores, utilities, variety_stores, veterinary_services, video_amusement_game_supplies, video_game_arcades, video_tape_rental_stores, vocational_trade_schools, watch_jewelry_repair, welding_repair, wholesale_clubs, wig_and_toupee_stores, wires_money_orders, womens_accessory_and_specialty_shops, womens_ready_to_wear_stores, wrecking_and_salvage_yards)
  * spending_limits `array`: Limit spending with amount-based rules that apply across this cardholder's cards.
    * items [issuing_cardholder_spending_limit](#issuing_cardholder_spending_limit)
  * spending_limits_currency `string`: Currency of the amounts within `spending_limits`.

### issuing_cardholder_company
* IssuingCardholderCompany `object`
  * tax_id_provided **required** `boolean`: Whether the company's business ID number was provided.

### issuing_cardholder_id_document
* IssuingCardholderIdDocument `object`

### issuing_cardholder_individual
* IssuingCardholderIndividual `object`
  * first_name **required** `string`: The first name of this cardholder.
  * last_name **required** `string`: The last name of this cardholder.

### issuing_cardholder_individual_dob
* IssuingCardholderIndividualDOB `object`
  * day `integer`: The day of birth, between 1 and 31.
  * month `integer`: The month of birth, between 1 and 12.
  * year `integer`: The four-digit year of birth.

### issuing_cardholder_requirements
* IssuingCardholderRequirements `object`
  * disabled_reason `string` (values: listed, rejected.listed, under_review): If `disabled_reason` is present, all cards will decline authorizations with `cardholder_verification_required` reason.
  * past_due `array`: Array of fields that need to be collected in order to verify and re-enable the cardholder.
    * items `string` (values: company.tax_id, individual.dob.day, individual.dob.month, individual.dob.year, individual.first_name, individual.last_name, individual.verification.document)

### issuing_cardholder_spending_limit
* IssuingCardholderSpendingLimit `object`
  * amount **required** `integer`: Maximum amount allowed to spend per interval.
  * categories `array`: Array of strings containing [categories](https://stripe.com/docs/api#issuing_authorization_object-merchant_data-category) this limit applies to. Omitting this field will apply the limit to all categories.
    * items `string` (values: ac_refrigeration_repair, accounting_bookkeeping_services, advertising_services, agricultural_cooperative, airlines_air_carriers, airports_flying_fields, ambulance_services, amusement_parks_carnivals, antique_reproductions, antique_shops, aquariums, architectural_surveying_services, art_dealers_and_galleries, artists_supply_and_craft_shops, auto_and_home_supply_stores, auto_body_repair_shops, auto_paint_shops, auto_service_shops, automated_cash_disburse, automated_fuel_dispensers, automobile_associations, automotive_parts_and_accessories_stores, automotive_tire_stores, bail_and_bond_payments, bakeries, bands_orchestras, barber_and_beauty_shops, betting_casino_gambling, bicycle_shops, billiard_pool_establishments, boat_dealers, boat_rentals_and_leases, book_stores, books_periodicals_and_newspapers, bowling_alleys, bus_lines, business_secretarial_schools, buying_shopping_services, cable_satellite_and_other_pay_television_and_radio, camera_and_photographic_supply_stores, candy_nut_and_confectionery_stores, car_and_truck_dealers_new_used, car_and_truck_dealers_used_only, car_rental_agencies, car_washes, carpentry_services, carpet_upholstery_cleaning, caterers, charitable_and_social_service_organizations_fundraising, chemicals_and_allied_products, child_care_services, childrens_and_infants_wear_stores, chiropodists_podiatrists, chiropractors, cigar_stores_and_stands, civic_social_fraternal_associations, cleaning_and_maintenance, clothing_rental, colleges_universities, commercial_equipment, commercial_footwear, commercial_photography_art_and_graphics, commuter_transport_and_ferries, computer_network_services, computer_programming, computer_repair, computer_software_stores, computers_peripherals_and_software, concrete_work_services, construction_materials, consulting_public_relations, correspondence_schools, cosmetic_stores, counseling_services, country_clubs, courier_services, court_costs, credit_reporting_agencies, cruise_lines, dairy_products_stores, dance_hall_studios_schools, dating_escort_services, dentists_orthodontists, department_stores, detective_agencies, digital_goods_applications, digital_goods_games, digital_goods_large_volume, digital_goods_media, direct_marketing_catalog_merchant, direct_marketing_combination_catalog_and_retail_merchant, direct_marketing_inbound_telemarketing, direct_marketing_insurance_services, direct_marketing_other, direct_marketing_outbound_telemarketing, direct_marketing_subscription, direct_marketing_travel, discount_stores, doctors, door_to_door_sales, drapery_window_covering_and_upholstery_stores, drinking_places, drug_stores_and_pharmacies, drugs_drug_proprietaries_and_druggist_sundries, dry_cleaners, durable_goods, duty_free_stores, eating_places_restaurants, educational_services, electric_razor_stores, electrical_parts_and_equipment, electrical_services, electronics_repair_shops, electronics_stores, elementary_secondary_schools, employment_temp_agencies, equipment_rental, exterminating_services, family_clothing_stores, fast_food_restaurants, financial_institutions, fines_government_administrative_entities, fireplace_fireplace_screens_and_accessories_stores, floor_covering_stores, florists, florists_supplies_nursery_stock_and_flowers, freezer_and_locker_meat_provisioners, fuel_dealers_non_automotive, funeral_services_crematories, furniture_home_furnishings_and_equipment_stores_except_appliances, furniture_repair_refinishing, furriers_and_fur_shops, general_services, gift_card_novelty_and_souvenir_shops, glass_paint_and_wallpaper_stores, glassware_crystal_stores, golf_courses_public, government_services, grocery_stores_supermarkets, hardware_equipment_and_supplies, hardware_stores, health_and_beauty_spas, hearing_aids_sales_and_supplies, heating_plumbing_a_c, hobby_toy_and_game_shops, home_supply_warehouse_stores, hospitals, hotels_motels_and_resorts, household_appliance_stores, industrial_supplies, information_retrieval_services, insurance_default, insurance_underwriting_premiums, intra_company_purchases, jewelry_stores_watches_clocks_and_silverware_stores, landscaping_services, laundries, laundry_cleaning_services, legal_services_attorneys, luggage_and_leather_goods_stores, lumber_building_materials_stores, manual_cash_disburse, marinas_service_and_supplies, masonry_stonework_and_plaster, massage_parlors, medical_and_dental_labs, medical_dental_ophthalmic_and_hospital_equipment_and_supplies, medical_services, membership_organizations, mens_and_boys_clothing_and_accessories_stores, mens_womens_clothing_stores, metal_service_centers, miscellaneous, miscellaneous_apparel_and_accessory_shops, miscellaneous_auto_dealers, miscellaneous_business_services, miscellaneous_food_stores, miscellaneous_general_merchandise, miscellaneous_general_services, miscellaneous_home_furnishing_specialty_stores, miscellaneous_publishing_and_printing, miscellaneous_recreation_services, miscellaneous_repair_shops, miscellaneous_specialty_retail, mobile_home_dealers, motion_picture_theaters, motor_freight_carriers_and_trucking, motor_homes_dealers, motor_vehicle_supplies_and_new_parts, motorcycle_shops_and_dealers, motorcycle_shops_dealers, music_stores_musical_instruments_pianos_and_sheet_music, news_dealers_and_newsstands, non_fi_money_orders, non_fi_stored_value_card_purchase_load, nondurable_goods, nurseries_lawn_and_garden_supply_stores, nursing_personal_care, office_and_commercial_furniture, opticians_eyeglasses, optometrists_ophthalmologist, orthopedic_goods_prosthetic_devices, osteopaths, package_stores_beer_wine_and_liquor, paints_varnishes_and_supplies, parking_lots_garages, passenger_railways, pawn_shops, pet_shops_pet_food_and_supplies, petroleum_and_petroleum_products, photo_developing, photographic_photocopy_microfilm_equipment_and_supplies, photographic_studios, picture_video_production, piece_goods_notions_and_other_dry_goods, plumbing_heating_equipment_and_supplies, political_organizations, postal_services_government_only, precious_stones_and_metals_watches_and_jewelry, professional_services, public_warehousing_and_storage, quick_copy_repro_and_blueprint, railroads, real_estate_agents_and_managers_rentals, record_stores, recreational_vehicle_rentals, religious_goods_stores, religious_organizations, roofing_siding_sheet_metal, secretarial_support_services, security_brokers_dealers, service_stations, sewing_needlework_fabric_and_piece_goods_stores, shoe_repair_hat_cleaning, shoe_stores, small_appliance_repair, snowmobile_dealers, special_trade_services, specialty_cleaning, sporting_goods_stores, sporting_recreation_camps, sports_and_riding_apparel_stores, sports_clubs_fields, stamp_and_coin_stores, stationary_office_supplies_printing_and_writing_paper, stationery_stores_office_and_school_supply_stores, swimming_pools_sales, t_ui_travel_germany, tailors_alterations, tax_payments_government_agencies, tax_preparation_services, taxicabs_limousines, telecommunication_equipment_and_telephone_sales, telecommunication_services, telegraph_services, tent_and_awning_shops, testing_laboratories, theatrical_ticket_agencies, timeshares, tire_retreading_and_repair, tolls_bridge_fees, tourist_attractions_and_exhibits, towing_services, trailer_parks_campgrounds, transportation_services, travel_agencies_tour_operators, truck_stop_iteration, truck_utility_trailer_rentals, typesetting_plate_making_and_related_services, typewriter_stores, u_s_federal_government_agencies_or_departments, uniforms_commercial_clothing, used_merchandise_and_secondhand_stores, utilities, variety_stores, veterinary_services, video_amusement_game_supplies, video_game_arcades, video_tape_rental_stores, vocational_trade_schools, watch_jewelry_repair, welding_repair, wholesale_clubs, wig_and_toupee_stores, wires_money_orders, womens_accessory_and_specialty_shops, womens_ready_to_wear_stores, wrecking_and_salvage_yards)
  * interval **required** `string` (values: all_time, daily, monthly, per_authorization, weekly, yearly): Interval (or event) to which the amount applies.

### issuing_cardholder_verification
* IssuingCardholderVerification `object`

### issuing_dispute_canceled_evidence
* IssuingDisputeCanceledEvidence `object`
  * canceled_at `integer`: Date when order was canceled.
  * cancellation_policy_provided `boolean`: Whether the cardholder was provided with a cancellation policy.
  * cancellation_reason `string`: Reason for canceling the order.
  * expected_at `integer`: Date when the cardholder expected to receive the product.
  * explanation `string`: Explanation of why the cardholder is disputing this transaction.
  * product_description `string`: Description of the merchandise or service that was purchased.
  * product_type `string` (values: merchandise, service): Whether the product was a merchandise or service.
  * return_status `string` (values: merchant_rejected, successful): Result of cardholder's attempt to return the product.
  * returned_at `integer`: Date when the product was returned or attempted to be returned.

### issuing_dispute_duplicate_evidence
* IssuingDisputeDuplicateEvidence `object`
  * explanation `string`: Explanation of why the cardholder is disputing this transaction.
  * original_transaction `string`: Transaction (e.g., ipi_...) that the disputed transaction is a duplicate of. Of the two or more transactions that are copies of each other, this is original undisputed one.

### issuing_dispute_evidence
* IssuingDisputeEvidence `object`
  * canceled [issuing_dispute_canceled_evidence](#issuing_dispute_canceled_evidence)
  * duplicate [issuing_dispute_duplicate_evidence](#issuing_dispute_duplicate_evidence)
  * fraudulent [issuing_dispute_fraudulent_evidence](#issuing_dispute_fraudulent_evidence)
  * merchandise_not_as_described [issuing_dispute_merchandise_not_as_described_evidence](#issuing_dispute_merchandise_not_as_described_evidence)
  * not_received [issuing_dispute_not_received_evidence](#issuing_dispute_not_received_evidence)
  * other [issuing_dispute_other_evidence](#issuing_dispute_other_evidence)
  * reason **required** `string` (values: canceled, duplicate, fraudulent, merchandise_not_as_described, not_received, other, service_not_as_described): The reason for filing the dispute. Its value will match the field containing the evidence.
  * service_not_as_described [issuing_dispute_service_not_as_described_evidence](#issuing_dispute_service_not_as_described_evidence)

### issuing_dispute_fraudulent_evidence
* IssuingDisputeFraudulentEvidence `object`
  * explanation `string`: Explanation of why the cardholder is disputing this transaction.

### issuing_dispute_merchandise_not_as_described_evidence
* IssuingDisputeMerchandiseNotAsDescribedEvidence `object`
  * explanation `string`: Explanation of why the cardholder is disputing this transaction.
  * received_at `integer`: Date when the product was received.
  * return_description `string`: Description of the cardholder's attempt to return the product.
  * return_status `string` (values: merchant_rejected, successful): Result of cardholder's attempt to return the product.
  * returned_at `integer`: Date when the product was returned or attempted to be returned.

### issuing_dispute_not_received_evidence
* IssuingDisputeNotReceivedEvidence `object`
  * expected_at `integer`: Date when the cardholder expected to receive the product.
  * explanation `string`: Explanation of why the cardholder is disputing this transaction.
  * product_description `string`: Description of the merchandise or service that was purchased.
  * product_type `string` (values: merchandise, service): Whether the product was a merchandise or service.

### issuing_dispute_other_evidence
* IssuingDisputeOtherEvidence `object`
  * explanation `string`: Explanation of why the cardholder is disputing this transaction.
  * product_description `string`: Description of the merchandise or service that was purchased.
  * product_type `string` (values: merchandise, service): Whether the product was a merchandise or service.

### issuing_dispute_service_not_as_described_evidence
* IssuingDisputeServiceNotAsDescribedEvidence `object`
  * canceled_at `integer`: Date when order was canceled.
  * cancellation_reason `string`: Reason for canceling the order.
  * explanation `string`: Explanation of why the cardholder is disputing this transaction.
  * received_at `integer`: Date when the product was received.

### issuing_transaction_amount_details
* IssuingTransactionAmountDetails `object`
  * atm_fee `integer`: The fee charged by the ATM for the cash withdrawal.

### issuing_transaction_flight_data
* IssuingTransactionFlightData `object`
  * departure_at `integer`: The time that the flight departed.
  * passenger_name `string`: The name of the passenger.
  * refundable `boolean`: Whether the ticket is refundable.
  * segments `array`: The legs of the trip.
    * items [issuing_transaction_flight_data_leg](#issuing_transaction_flight_data_leg)
  * travel_agency `string`: The travel agency that issued the ticket.

### issuing_transaction_flight_data_leg
* IssuingTransactionFlightDataLeg `object`
  * arrival_airport_code `string`: The three-letter IATA airport code of the flight's destination.
  * carrier `string`: The airline carrier code.
  * departure_airport_code `string`: The three-letter IATA airport code that the flight departed from.
  * flight_number `string`: The flight number.
  * service_class `string`: The flight's service class.
  * stopover_allowed `boolean`: Whether a stopover is allowed on this flight.

### issuing_transaction_fuel_data
* IssuingTransactionFuelData `object`
  * type **required** `string`: The type of fuel that was purchased. One of `diesel`, `unleaded_plus`, `unleaded_regular`, `unleaded_super`, or `other`.
  * unit **required** `string`: The units for `volume_decimal`. One of `us_gallon` or `liter`.
  * unit_cost_decimal **required** `string`: The cost in cents per each unit of fuel, represented as a decimal string with at most 12 decimal places.
  * volume_decimal `string`: The volume of the fuel that was pumped, represented as a decimal string with at most 12 decimal places.

### issuing_transaction_lodging_data
* IssuingTransactionLodgingData `object`
  * check_in_at `integer`: The time of checking into the lodging.
  * nights `integer`: The number of nights stayed at the lodging.

### issuing_transaction_purchase_details
* IssuingTransactionPurchaseDetails `object`
  * receipt `array`: The line items in the purchase.
    * items [issuing_transaction_receipt_data](#issuing_transaction_receipt_data)
  * reference `string`: A merchant-specific order number.

### issuing_transaction_receipt_data
* IssuingTransactionReceiptData `object`
  * description `string`: The description of the item. The maximum length of this field is 26 characters.
  * quantity `number`: The quantity of the item.
  * total `integer`: The total for this line item in cents.
  * unit_cost `integer`: The unit cost of the item in cents.

### item
* LineItem `object`: A line item.
  * amount_subtotal `integer`: Total before any discounts or taxes is applied.
  * amount_total `integer`: Total after discounts and taxes.
  * currency **required** `string`: Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
  * description **required** `string`: An arbitrary string attached to the object. Often useful for displaying to users. Defaults to product name.
  * discounts `array`: The discounts applied to the line item.
    * items [line_items_discount_amount](#line_items_discount_amount)
  * id **required** `string`: Unique identifier for the object.
  * object **required** `string` (values: item): String representing the object's type. Objects of the same type share the same value.
  * price **required** [price](#price)
  * quantity `integer`: The quantity of products being purchased.
  * taxes `array`: The taxes applied to the line item.
    * items [line_items_tax_amount](#line_items_tax_amount)

### legal_entity_company
* LegalEntityCompany `object`
  * address [address](#address)
  * directors_provided `boolean`: Whether the company's directors have been provided. This Boolean will be `true` if you've manually indicated that all directors are provided via [the `directors_provided` parameter](https://stripe.com/docs/api/accounts/update#update_account-company-directors_provided).
  * executives_provided `boolean`: Whether the company's executives have been provided. This Boolean will be `true` if you've manually indicated that all executives are provided via [the `executives_provided` parameter](https://stripe.com/docs/api/accounts/update#update_account-company-executives_provided), or if Stripe determined that sufficient executives were provided.
  * name `string`: The company's legal name.
  * name_kana `string`: The Kana variation of the company's legal name (Japan only).
  * name_kanji `string`: The Kanji variation of the company's legal name (Japan only).
  * owners_provided `boolean`: Whether the company's owners have been provided. This Boolean will be `true` if you've manually indicated that all owners are provided via [the `owners_provided` parameter](https://stripe.com/docs/api/accounts/update#update_account-company-owners_provided), or if Stripe determined that sufficient owners were provided. Stripe determines ownership requirements using both the number of owners provided and their total percent ownership (calculated by adding the `percent_ownership` of each owner together).
  * phone `string`: The company's phone number (used for verification).
  * structure `string` (values: government_instrumentality, governmental_unit, incorporated_non_profit, limited_liability_partnership, multi_member_llc, private_company, private_corporation, private_partnership, public_company, public_corporation, public_partnership, sole_proprietorship, tax_exempt_government_instrumentality, unincorporated_association, unincorporated_non_profit): The category identifying the legal structure of the company or legal entity. See [Business structure](https://stripe.com/docs/connect/identity-verification#business-structure) for more details.
  * tax_id_provided `boolean`: Whether the company's business ID number was provided.
  * tax_id_registrar `string`: The jurisdiction in which the `tax_id` is registered (Germany-based companies only).
  * vat_id_provided `boolean`: Whether the company's business VAT number was provided.

### legal_entity_company_verification
* LegalEntityCompanyVerification `object`
  * document **required** [legal_entity_company_verification_document](#legal_entity_company_verification_document)

### legal_entity_company_verification_document
* LegalEntityCompanyVerificationDocument `object`
  * details `string`: A user-displayable string describing the verification state of this document.
  * details_code `string`: One of `document_corrupt`, `document_expired`, `document_failed_copy`, `document_failed_greyscale`, `document_failed_other`, `document_failed_test_mode`, `document_fraudulent`, `document_incomplete`, `document_invalid`, `document_manipulated`, `document_not_readable`, `document_not_uploaded`, `document_type_not_supported`, or `document_too_large`. A machine-readable code specifying the verification state for this document.

### legal_entity_dob
* LegalEntityDOB `object`
  * day `integer`: The day of birth, between 1 and 31.
  * month `integer`: The month of birth, between 1 and 12.
  * year `integer`: The four-digit year of birth.

### legal_entity_japan_address
* LegalEntityJapanAddress `object`
  * city `string`: City/Ward.
  * country `string`: Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)).
  * line1 `string`: Block/Building number.
  * line2 `string`: Building details.
  * postal_code `string`: ZIP or postal code.
  * state `string`: Prefecture.
  * town `string`: Town/cho-me.

### legal_entity_person_verification
* LegalEntityPersonVerification `object`
  * details `string`: A user-displayable string describing the verification state for the person. For example, this may say "Provided identity information could not be verified".
  * details_code `string`: One of `document_address_mismatch`, `document_dob_mismatch`, `document_duplicate_type`, `document_id_number_mismatch`, `document_name_mismatch`, `document_nationality_mismatch`, `failed_keyed_identity`, or `failed_other`. A machine-readable code specifying the verification state for the person.
  * document [legal_entity_person_verification_document](#legal_entity_person_verification_document)
  * status **required** `string`: The state of verification for the person. Possible values are `unverified`, `pending`, or `verified`.

### legal_entity_person_verification_document
* LegalEntityPersonVerificationDocument `object`
  * details `string`: A user-displayable string describing the verification state of this document. For example, if a document is uploaded and the picture is too fuzzy, this may say "Identity document is too unclear to read".
  * details_code `string`: One of `document_corrupt`, `document_country_not_supported`, `document_expired`, `document_failed_copy`, `document_failed_other`, `document_failed_test_mode`, `document_fraudulent`, `document_failed_greyscale`, `document_incomplete`, `document_invalid`, `document_manipulated`, `document_missing_back`, `document_missing_front`, `document_not_readable`, `document_not_uploaded`, `document_photo_mismatch`, `document_too_large`, or `document_type_not_supported`. A machine-readable code specifying the verification state for this document.

### light_account_logout
* LightAccountLogout `object`

### line_item
* InvoiceLineItem `object`
  * amount **required** `integer`: The amount, in %s.
  * currency **required** `string`: Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
  * description `string`: An arbitrary string attached to the object. Often useful for displaying to users.
  * discount_amounts `array`: The amount of discount calculated per discount for this line item.
    * items [discounts_resource_discount_amount](#discounts_resource_discount_amount)
  * discountable **required** `boolean`: If true, discounts will apply to this line item. Always false for prorations.
  * discounts `array`: The discounts applied to the invoice line item. Line item discounts are applied before invoice discounts. Use `expand[]=discounts` to expand each discount.
  * id **required** `string`: Unique identifier for the object.
  * invoice_item `string`: The ID of the [invoice item](https://stripe.com/docs/api/invoiceitems) associated with this line item if any.
  * livemode **required** `boolean`: Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
  * metadata **required** `object`: Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Note that for line items with `type=subscription` this will reflect the metadata of the subscription that caused the line item to be created.
  * object **required** `string` (values: line_item): String representing the object's type. Objects of the same type share the same value.
  * period **required** [invoice_line_item_period](#invoice_line_item_period)
  * proration **required** `boolean`: Whether this is a proration.
  * quantity `integer`: The quantity of the subscription, if the line item is a subscription or a proration.
  * subscription `string`: The subscription that the invoice item pertains to, if any.
  * subscription_item `string`: The subscription item that generated this invoice item. Left empty if the line item is not an explicit result of a subscription.
  * tax_amounts `array`: The amount of tax calculated per tax rate for this line item
    * items [invoice_tax_amount](#invoice_tax_amount)
  * tax_rates `array`: The tax rates which apply to the line item.
    * items [tax_rate](#tax_rate)
  * type **required** `string` (values: invoiceitem, subscription): A string identifying the type of the source of this line item, either an `invoiceitem` or a `subscription`.

### line_items_discount_amount
* LineItemsDiscountAmount `object`
  * amount **required** `integer`: The amount discounted.
  * discount **required** [discount](#discount)

### line_items_tax_amount
* LineItemsTaxAmount `object`
  * amount **required** `integer`: Amount of tax applied for this rate.
  * rate **required** [tax_rate](#tax_rate)

### login_link
* LoginLink `object`
  * created **required** `integer`: Time at which the object was created. Measured in seconds since the Unix epoch.
  * object **required** `string` (values: login_link): String representing the object's type. Objects of the same type share the same value.
  * url **required** `string`: The URL for the login link.

### mandate
* Mandate `object`: A Mandate is a record of the permission a customer has given you to debit their payment method.
  * customer_acceptance **required** [customer_acceptance](#customer_acceptance)
  * id **required** `string`: Unique identifier for the object.
  * livemode **required** `boolean`: Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
  * multi_use [mandate_multi_use](#mandate_multi_use)
  * object **required** `string` (values: mandate): String representing the object's type. Objects of the same type share the same value.
  * payment_method_details **required** [mandate_payment_method_details](#mandate_payment_method_details)
  * single_use [mandate_single_use](#mandate_single_use)
  * status **required** `string` (values: active, inactive, pending): The status of the mandate, which indicates whether it can be used to initiate a payment.
  * type **required** `string` (values: multi_use, single_use): The type of the mandate.

### mandate_au_becs_debit
* mandate_au_becs_debit `object`
  * url **required** `string`: The URL of the mandate. This URL generally contains sensitive information about the customer and should be shared with them exclusively.

### mandate_bacs_debit
* mandate_bacs_debit `object`
  * network_status **required** `string` (values: accepted, pending, refused, revoked): The status of the mandate on the Bacs network. Can be one of `pending`, `revoked`, `refused`, or `accepted`.
  * reference **required** `string`: The unique reference identifying the mandate on the Bacs network.
  * url **required** `string`: The URL that will contain the mandate that the customer has signed.

### mandate_multi_use
* mandate_multi_use `object`

### mandate_payment_method_details
* mandate_payment_method_details `object`
  * au_becs_debit [mandate_au_becs_debit](#mandate_au_becs_debit)
  * bacs_debit [mandate_bacs_debit](#mandate_bacs_debit)
  * card [card_mandate_payment_method_details](#card_mandate_payment_method_details)
  * sepa_debit [mandate_sepa_debit](#mandate_sepa_debit)
  * type **required** `string`: The type of the payment method associated with this mandate. An additional hash is included on `payment_method_details` with a name matching this value. It contains mandate information specific to the payment method.

### mandate_sepa_debit
* mandate_sepa_debit `object`
  * reference **required** `string`: The unique reference of the mandate.
  * url **required** `string`: The URL of the mandate. This URL generally contains sensitive information about the customer and should be shared with them exclusively.

### mandate_single_use
* mandate_single_use `object`
  * amount **required** `integer`: On a single use mandate, the amount of the payment.
  * currency **required** `string`: On a single use mandate, the currency of the payment.

### networks
* networks `object`
  * available **required** `array`: All available networks for the card.
    * items `string`
  * preferred `string`: The preferred network for the card.

### notification_event_data
* NotificationEventData `object`
  * object **required** `object`: Object containing the API resource relevant to the event. For example, an `invoice.created` event will have a full [invoice object](https://stripe.com/docs/api#invoice_object) as the value of the object key.
  * previous_attributes `object`: Object containing the names of the attributes that have changed, and their previous values (sent along only with *.updated events).

### notification_event_request
* NotificationEventRequest `object`
  * id `string`: ID of the API request that caused the event. If null, the event was automatic (e.g., Stripe's automatic subscription handling). Request logs are available in the [dashboard](https://dashboard.stripe.com/logs), but currently not in the API.
  * idempotency_key `string`: The idempotency key transmitted during the request, if any. *Note: This property is populated only for events on or after May 23, 2017*.

### offline_acceptance
* offline_acceptance `object`

### online_acceptance
* online_acceptance `object`
  * ip_address `string`: The IP address from which the Mandate was accepted by the customer.
  * user_agent `string`: The user agent of the browser from which the Mandate was accepted by the customer.

### order
* Order `object`: Order objects are created to handle end customers' purchases of previously
  * amount **required** `integer`: A positive integer in the smallest currency unit (that is, 100 cents for $1.00, or 1 for ¥1, Japanese Yen being a zero-decimal currency) representing the total amount for the order.
  * amount_returned `integer`: The total amount that was returned to the customer.
  * application `string`: ID of the Connect Application that created the order.
  * application_fee `integer`: A fee in cents that will be applied to the order and transferred to the application owner’s Stripe account. The request must be made with an OAuth key or the Stripe-Account header in order to take an application fee. For more information, see the application fees documentation.
  * created **required** `integer`: Time at which the object was created. Measured in seconds since the Unix epoch.
  * currency **required** `string`: Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
  * email `string`: The email address of the customer placing the order.
  * external_coupon_code `string`: External coupon code to load for this order.
  * id **required** `string`: Unique identifier for the object.
  * items **required** `array`: List of items constituting the order. An order can have up to 25 items.
    * items [order_item](#order_item)
  * livemode **required** `boolean`: Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
  * metadata `object`: Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
  * object **required** `string` (values: order): String representing the object's type. Objects of the same type share the same value.
  * returns `object`: A list of returns that have taken place for this order.
    * data **required** `array`: Details about each object.
      * items [order_return](#order_return)
    * has_more **required** `boolean`: True if this list has another page of items after this one that can be fetched.
    * object **required** `string` (values: list): String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
    * url **required** `string`: The URL where this list can be accessed.
  * selected_shipping_method `string`: The shipping method that is currently selected for this order, if any. If present, it is equal to one of the `id`s of shipping methods in the `shipping_methods` array. At order creation time, if there are multiple shipping methods, Stripe will automatically selected the first method.
  * shipping_methods `array`: A list of supported shipping methods for this order. The desired shipping method can be specified either by updating the order, or when paying it.
    * items [shipping_method](#shipping_method)
  * status **required** `string`: Current order status. One of `created`, `paid`, `canceled`, `fulfilled`, or `returned`. More details in the [Orders Guide](https://stripe.com/docs/orders/guide#understanding-order-statuses).
  * updated `integer`: Time at which the object was last updated. Measured in seconds since the Unix epoch.
  * upstream_id `string`: The user's order ID if it is different from the Stripe order ID.

### order_item
* OrderItem `object`: A representation of the constituent items of any given order. Can be used to
  * amount **required** `integer`: A positive integer in the smallest currency unit (that is, 100 cents for $1.00, or 1 for ¥1, Japanese Yen being a zero-decimal currency) representing the total amount for the line item.
  * currency **required** `string`: Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
  * description **required** `string`: Description of the line item, meant to be displayable to the user (e.g., `"Express shipping"`).
  * object **required** `string` (values: order_item): String representing the object's type. Objects of the same type share the same value.
  * quantity `integer`: A positive integer representing the number of instances of `parent` that are included in this order item. Applicable/present only if `type` is `sku`.
  * type **required** `string`: The type of line item. One of `sku`, `tax`, `shipping`, or `discount`.

### order_return
* OrderReturn `object`: A return represents the full or partial return of a number of [order items](https://stripe.com/docs/api#order_items).
  * amount **required** `integer`: A positive integer in the smallest currency unit (that is, 100 cents for $1.00, or 1 for ¥1, Japanese Yen being a zero-decimal currency) representing the total amount for the returned line item.
  * created **required** `integer`: Time at which the object was created. Measured in seconds since the Unix epoch.
  * currency **required** `string`: Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
  * id **required** `string`: Unique identifier for the object.
  * items **required** `array`: The items included in this order return.
    * items [order_item](#order_item)
  * livemode **required** `boolean`: Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
  * object **required** `string` (values: order_return): String representing the object's type. Objects of the same type share the same value.

### package_dimensions
* PackageDimensions `object`
  * height **required** `number`: Height, in inches.
  * length **required** `number`: Length, in inches.
  * weight **required** `number`: Weight, in ounces.
  * width **required** `number`: Width, in inches.

### payment_flows_private_payment_methods_alipay
* PaymentFlowsPrivatePaymentMethodsAlipay `object`

### payment_flows_private_payment_methods_alipay_details
* PaymentFlowsPrivatePaymentMethodsAlipayDetails `object`
  * fingerprint `string`: Uniquely identifies this particular Alipay account. You can use this attribute to check whether two Alipay accounts are the same.
  * transaction_id `string`: Transaction ID of this particular Alipay transaction.

### payment_intent
* PaymentIntent `object`: A PaymentIntent guides you through the process of collecting a payment from your customer.
  * amount **required** `integer`: Amount intended to be collected by this PaymentIntent. A positive integer representing how much to charge in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal) (e.g., 100 cents to charge $1.00 or 100 to charge ¥100, a zero-decimal currency). The minimum amount is $0.50 US or [equivalent in charge currency](https://stripe.com/docs/currencies#minimum-and-maximum-charge-amounts). The amount value supports up to eight digits (e.g., a value of 99999999 for a USD charge of $999,999.99).
  * amount_capturable `integer`: Amount that can be captured from this PaymentIntent.
  * amount_received `integer`: Amount that was collected by this PaymentIntent.
  * application_fee_amount `integer`: The amount of the application fee (if any) that will be requested to be applied to the payment and transferred to the application owner's Stripe account. The amount of the application fee collected will be capped at the total payment amount. For more information, see the PaymentIntents [use case for connected accounts](https://stripe.com/docs/payments/connected-accounts).
  * canceled_at `integer`: Populated when `status` is `canceled`, this is the time at which the PaymentIntent was canceled. Measured in seconds since the Unix epoch.
  * cancellation_reason `string` (values: abandoned, automatic, duplicate, failed_invoice, fraudulent, requested_by_customer, void_invoice): Reason for cancellation of this PaymentIntent, either user-provided (`duplicate`, `fraudulent`, `requested_by_customer`, or `abandoned`) or generated by Stripe internally (`failed_invoice`, `void_invoice`, or `automatic`).
  * capture_method **required** `string` (values: automatic, manual): Controls when the funds will be captured from the customer's account.
  * charges `object`: Charges that were created by this PaymentIntent, if any.
    * data **required** `array`: This list only contains the latest charge, even if there were previously multiple unsuccessful charges. To view all previous charges for a PaymentIntent, you can filter the charges list using the `payment_intent` [parameter](https://stripe.com/docs/api/charges/list#list_charges-payment_intent).
      * items [charge](#charge)
    * has_more **required** `boolean`: True if this list has another page of items after this one that can be fetched.
    * object **required** `string` (values: list): String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
    * url **required** `string`: The URL where this list can be accessed.
  * client_secret `string`: The client secret of this PaymentIntent. Used for client-side retrieval using a publishable key. 
  * confirmation_method **required** `string` (values: automatic, manual)
  * created **required** `integer`: Time at which the object was created. Measured in seconds since the Unix epoch.
  * currency **required** `string`: Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
  * description `string`: An arbitrary string attached to the object. Often useful for displaying to users.
  * id **required** `string`: Unique identifier for the object.
  * livemode **required** `boolean`: Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
  * metadata `object`: Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. For more information, see the [documentation](https://stripe.com/docs/payments/payment-intents/creating-payment-intents#storing-information-in-metadata).
  * object **required** `string` (values: payment_intent): String representing the object's type. Objects of the same type share the same value.
  * payment_method_types **required** `array`: The list of payment method types (e.g. card) that this PaymentIntent is allowed to use.
    * items `string`
  * receipt_email `string`: Email address that the receipt for the resulting payment will be sent to. If `receipt_email` is specified for a payment in live mode, a receipt will be sent regardless of your [email settings](https://dashboard.stripe.com/account/emails).
  * setup_future_usage `string` (values: off_session, on_session): Indicates that you intend to make future payments with this PaymentIntent's payment method.
  * statement_descriptor `string`: For non-card charges, you can use this value as the complete description that appears on your customers’ statements. Must contain at least one letter, maximum 22 characters.
  * statement_descriptor_suffix `string`: Provides information about a card payment that customers see on their statements. Concatenated with the prefix (shortened descriptor) or statement descriptor that’s set on the account to form the complete statement descriptor. Maximum 22 characters for the concatenated descriptor.
  * status **required** `string` (values: canceled, processing, requires_action, requires_capture, requires_confirmation, requires_payment_method, succeeded): Status of this PaymentIntent, one of `requires_payment_method`, `requires_confirmation`, `requires_action`, `processing`, `requires_capture`, `canceled`, or `succeeded`. Read more about each PaymentIntent [status](https://stripe.com/docs/payments/intents#intent-statuses).
  * transfer_group `string`: A string that identifies the resulting payment as part of a group. See the PaymentIntents [use case for connected accounts](https://stripe.com/docs/payments/connected-accounts) for details.

### payment_intent_next_action
* PaymentIntentNextAction `object`
  * alipay_handle_redirect [payment_intent_next_action_alipay_handle_redirect](#payment_intent_next_action_alipay_handle_redirect)
  * oxxo_display_details [payment_intent_next_action_display_oxxo_details](#payment_intent_next_action_display_oxxo_details)
  * redirect_to_url [payment_intent_next_action_redirect_to_url](#payment_intent_next_action_redirect_to_url)
  * type **required** `string`: Type of the next action to perform, one of `redirect_to_url` or `use_stripe_sdk`.
  * use_stripe_sdk `object`: When confirming a PaymentIntent with Stripe.js, Stripe.js depends on the contents of this dictionary to invoke authentication flows. The shape of the contents is subject to change and is only intended to be used by Stripe.js.

### payment_intent_next_action_alipay_handle_redirect
* PaymentIntentNextActionAlipayHandleRedirect `object`
  * native_data `string`: The native data to be used with Alipay SDK you must redirect your customer to in order to authenticate the payment in an Android App.
  * native_url `string`: The native URL you must redirect your customer to in order to authenticate the payment in an iOS App.
  * return_url `string`: If the customer does not exit their browser while authenticating, they will be redirected to this specified URL after completion.
  * url `string`: The URL you must redirect your customer to in order to authenticate the payment.

### payment_intent_next_action_display_oxxo_details
* PaymentIntentNextActionDisplayOxxoDetails `object`
  * expires_after `integer`: The timestamp after which the OXXO voucher expires.
  * hosted_voucher_url `string`: The URL for the hosted OXXO voucher page, which allows customers to view and print an OXXO voucher.
  * number `string`: OXXO reference number.

### payment_intent_next_action_redirect_to_url
* PaymentIntentNextActionRedirectToUrl `object`
  * return_url `string`: If the customer does not exit their browser while authenticating, they will be redirected to this specified URL after completion.
  * url `string`: The URL you must redirect your customer to in order to authenticate the payment.

### payment_intent_payment_method_options
* PaymentIntentPaymentMethodOptions `object`
  * alipay [payment_method_options_alipay](#payment_method_options_alipay)
  * bancontact [payment_method_options_bancontact](#payment_method_options_bancontact)
  * card [payment_intent_payment_method_options_card](#payment_intent_payment_method_options_card)
  * oxxo [payment_method_options_oxxo](#payment_method_options_oxxo)
  * p24 [payment_method_options_p24](#payment_method_options_p24)
  * sepa_debit [payment_intent_payment_method_options_sepa_debit](#payment_intent_payment_method_options_sepa_debit)
  * sofort [payment_method_options_sofort](#payment_method_options_sofort)

### payment_intent_payment_method_options_card
* payment_intent_payment_method_options_card `object`
  * network `string` (values: amex, cartes_bancaires, diners, discover, interac, jcb, mastercard, unionpay, unknown, visa): Selected network to process this PaymentIntent on. Depends on the available networks of the card attached to the PaymentIntent. Can be only set confirm-time.
  * request_three_d_secure `string` (values: any, automatic, challenge_only): We strongly recommend that you rely on our SCA Engine to automatically prompt your customers for authentication based on risk level and [other requirements](https://stripe.com/docs/strong-customer-authentication). However, if you wish to request 3D Secure based on logic from your own fraud engine, provide this option. Permitted values include: `automatic` or `any`. If not provided, defaults to `automatic`. Read our guide on [manually requesting 3D Secure](https://stripe.com/docs/payments/3d-secure#manual-three-ds) for more information on how this configuration interacts with Radar and our SCA Engine.

### payment_intent_payment_method_options_mandate_options_sepa_debit
* payment_intent_payment_method_options_mandate_options_sepa_debit `object`

### payment_intent_payment_method_options_sepa_debit
* payment_intent_payment_method_options_sepa_debit `object`
  * mandate_options [payment_intent_payment_method_options_mandate_options_sepa_debit](#payment_intent_payment_method_options_mandate_options_sepa_debit)

### payment_method
* PaymentMethod `object`: PaymentMethod objects represent your customer's payment instruments.
  * alipay [payment_flows_private_payment_methods_alipay](#payment_flows_private_payment_methods_alipay)
  * au_becs_debit [payment_method_au_becs_debit](#payment_method_au_becs_debit)
  * bacs_debit [payment_method_bacs_debit](#payment_method_bacs_debit)
  * bancontact [payment_method_bancontact](#payment_method_bancontact)
  * billing_details **required** [billing_details](#billing_details)
  * card [payment_method_card](#payment_method_card)
  * card_present [payment_method_card_present](#payment_method_card_present)
  * created **required** `integer`: Time at which the object was created. Measured in seconds since the Unix epoch.
  * eps [payment_method_eps](#payment_method_eps)
  * fpx [payment_method_fpx](#payment_method_fpx)
  * giropay [payment_method_giropay](#payment_method_giropay)
  * grabpay [payment_method_grabpay](#payment_method_grabpay)
  * id **required** `string`: Unique identifier for the object.
  * ideal [payment_method_ideal](#payment_method_ideal)
  * interac_present [payment_method_interac_present](#payment_method_interac_present)
  * livemode **required** `boolean`: Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
  * metadata `object`: Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
  * object **required** `string` (values: payment_method): String representing the object's type. Objects of the same type share the same value.
  * oxxo [payment_method_oxxo](#payment_method_oxxo)
  * p24 [payment_method_p24](#payment_method_p24)
  * sepa_debit [payment_method_sepa_debit](#payment_method_sepa_debit)
  * sofort [payment_method_sofort](#payment_method_sofort)
  * type **required** `string` (values: alipay, au_becs_debit, bacs_debit, bancontact, card, card_present, eps, fpx, giropay, grabpay, ideal, interac_present, oxxo, p24, sepa_debit, sofort): The type of the PaymentMethod. An additional hash is included on the PaymentMethod with a name matching this value. It contains additional information specific to the PaymentMethod type.

### payment_method_au_becs_debit
* payment_method_au_becs_debit `object`
  * bsb_number `string`: Six-digit number identifying bank and branch associated with this bank account.
  * fingerprint `string`: Uniquely identifies this particular bank account. You can use this attribute to check whether two bank accounts are the same.
  * last4 `string`: Last four digits of the bank account number.

### payment_method_bacs_debit
* payment_method_bacs_debit `object`
  * fingerprint `string`: Uniquely identifies this particular bank account. You can use this attribute to check whether two bank accounts are the same.
  * last4 `string`: Last four digits of the bank account number.
  * sort_code `string`: Sort code of the bank account. (e.g., `10-20-30`)

### payment_method_bancontact
* payment_method_bancontact `object`

### payment_method_card
* payment_method_card `object`
  * brand **required** `string`: Card brand. Can be `amex`, `diners`, `discover`, `jcb`, `mastercard`, `unionpay`, `visa`, or `unknown`.
  * country `string`: Two-letter ISO code representing the country of the card. You could use this attribute to get a sense of the international breakdown of cards you've collected.
  * exp_month **required** `integer`: Two-digit number representing the card's expiration month.
  * exp_year **required** `integer`: Four-digit number representing the card's expiration year.
  * fingerprint `string`: Uniquely identifies this particular card number. You can use this attribute to check whether two customers who’ve signed up with you are using the same card number, for example. For payment methods that tokenize card information (Apple Pay, Google Pay), the tokenized number might be provided instead of the underlying card number.
  * funding **required** `string`: Card funding type. Can be `credit`, `debit`, `prepaid`, or `unknown`.
  * last4 **required** `string`: The last four digits of the card.

### payment_method_card_checks
* payment_method_card_checks `object`
  * address_line1_check `string`: If a address line1 was provided, results of the check, one of `pass`, `fail`, `unavailable`, or `unchecked`.
  * address_postal_code_check `string`: If a address postal code was provided, results of the check, one of `pass`, `fail`, `unavailable`, or `unchecked`.
  * cvc_check `string`: If a CVC was provided, results of the check, one of `pass`, `fail`, `unavailable`, or `unchecked`.

### payment_method_card_generated_card
* payment_method_card_generated_card `object`
  * charge `string`: The charge that created this object.

### payment_method_card_present
* payment_method_card_present `object`

### payment_method_card_wallet
* payment_method_card_wallet `object`
  * amex_express_checkout [payment_method_card_wallet_amex_express_checkout](#payment_method_card_wallet_amex_express_checkout)
  * apple_pay [payment_method_card_wallet_apple_pay](#payment_method_card_wallet_apple_pay)
  * dynamic_last4 `string`: (For tokenized numbers only.) The last four digits of the device account number.
  * google_pay [payment_method_card_wallet_google_pay](#payment_method_card_wallet_google_pay)
  * masterpass [payment_method_card_wallet_masterpass](#payment_method_card_wallet_masterpass)
  * samsung_pay [payment_method_card_wallet_samsung_pay](#payment_method_card_wallet_samsung_pay)
  * type **required** `string` (values: amex_express_checkout, apple_pay, google_pay, masterpass, samsung_pay, visa_checkout): The type of the card wallet, one of `amex_express_checkout`, `apple_pay`, `google_pay`, `masterpass`, `samsung_pay`, or `visa_checkout`. An additional hash is included on the Wallet subhash with a name matching this value. It contains additional information specific to the card wallet type.
  * visa_checkout [payment_method_card_wallet_visa_checkout](#payment_method_card_wallet_visa_checkout)

### payment_method_card_wallet_amex_express_checkout
* payment_method_card_wallet_amex_express_checkout `object`

### payment_method_card_wallet_apple_pay
* payment_method_card_wallet_apple_pay `object`

### payment_method_card_wallet_google_pay
* payment_method_card_wallet_google_pay `object`

### payment_method_card_wallet_masterpass
* payment_method_card_wallet_masterpass `object`
  * email `string`: Owner's verified email. Values are verified or provided by the wallet directly (if supported) at the time of authorization or settlement. They cannot be set or mutated.
  * name `string`: Owner's verified full name. Values are verified or provided by the wallet directly (if supported) at the time of authorization or settlement. They cannot be set or mutated.

### payment_method_card_wallet_samsung_pay
* payment_method_card_wallet_samsung_pay `object`

### payment_method_card_wallet_visa_checkout
* payment_method_card_wallet_visa_checkout `object`
  * email `string`: Owner's verified email. Values are verified or provided by the wallet directly (if supported) at the time of authorization or settlement. They cannot be set or mutated.
  * name `string`: Owner's verified full name. Values are verified or provided by the wallet directly (if supported) at the time of authorization or settlement. They cannot be set or mutated.

### payment_method_details
* payment_method_details `object`
  * ach_credit_transfer [payment_method_details_ach_credit_transfer](#payment_method_details_ach_credit_transfer)
  * ach_debit [payment_method_details_ach_debit](#payment_method_details_ach_debit)
  * alipay [payment_flows_private_payment_methods_alipay_details](#payment_flows_private_payment_methods_alipay_details)
  * au_becs_debit [payment_method_details_au_becs_debit](#payment_method_details_au_becs_debit)
  * bacs_debit [payment_method_details_bacs_debit](#payment_method_details_bacs_debit)
  * bancontact [payment_method_details_bancontact](#payment_method_details_bancontact)
  * card [payment_method_details_card](#payment_method_details_card)
  * card_present [payment_method_details_card_present](#payment_method_details_card_present)
  * eps [payment_method_details_eps](#payment_method_details_eps)
  * fpx [payment_method_details_fpx](#payment_method_details_fpx)
  * giropay [payment_method_details_giropay](#payment_method_details_giropay)
  * grabpay [payment_method_details_grabpay](#payment_method_details_grabpay)
  * ideal [payment_method_details_ideal](#payment_method_details_ideal)
  * interac_present [payment_method_details_interac_present](#payment_method_details_interac_present)
  * klarna [payment_method_details_klarna](#payment_method_details_klarna)
  * multibanco [payment_method_details_multibanco](#payment_method_details_multibanco)
  * oxxo [payment_method_details_oxxo](#payment_method_details_oxxo)
  * p24 [payment_method_details_p24](#payment_method_details_p24)
  * sepa_debit [payment_method_details_sepa_debit](#payment_method_details_sepa_debit)
  * sofort [payment_method_details_sofort](#payment_method_details_sofort)
  * stripe_account [payment_method_details_stripe_account](#payment_method_details_stripe_account)
  * type **required** `string`: The type of transaction-specific details of the payment method used in the payment, one of `ach_credit_transfer`, `ach_debit`, `alipay`, `au_becs_debit`, `bancontact`, `card`, `card_present`, `eps`, `giropay`, `ideal`, `klarna`, `multibanco`, `p24`, `sepa_debit`, `sofort`, `stripe_account`, or `wechat`.
  * wechat [payment_method_details_wechat](#payment_method_details_wechat)

### payment_method_details_ach_credit_transfer
* payment_method_details_ach_credit_transfer `object`
  * account_number `string`: Account number to transfer funds to.
  * bank_name `string`: Name of the bank associated with the routing number.
  * routing_number `string`: Routing transit number for the bank account to transfer funds to.
  * swift_code `string`: SWIFT code of the bank associated with the routing number.

### payment_method_details_ach_debit
* payment_method_details_ach_debit `object`
  * account_holder_type `string` (values: company, individual): Type of entity that holds the account. This can be either `individual` or `company`.
  * bank_name `string`: Name of the bank associated with the bank account.
  * country `string`: Two-letter ISO code representing the country the bank account is located in.
  * fingerprint `string`: Uniquely identifies this particular bank account. You can use this attribute to check whether two bank accounts are the same.
  * last4 `string`: Last four digits of the bank account number.
  * routing_number `string`: Routing transit number of the bank account.

### payment_method_details_au_becs_debit
* payment_method_details_au_becs_debit `object`
  * bsb_number `string`: Bank-State-Branch number of the bank account.
  * fingerprint `string`: Uniquely identifies this particular bank account. You can use this attribute to check whether two bank accounts are the same.
  * last4 `string`: Last four digits of the bank account number.
  * mandate `string`: ID of the mandate used to make this payment.

### payment_method_details_bacs_debit
* payment_method_details_bacs_debit `object`
  * fingerprint `string`: Uniquely identifies this particular bank account. You can use this attribute to check whether two bank accounts are the same.
  * last4 `string`: Last four digits of the bank account number.
  * mandate `string`: ID of the mandate used to make this payment.
  * sort_code `string`: Sort code of the bank account. (e.g., `10-20-30`)

### payment_method_details_bancontact
* payment_method_details_bancontact `object`
  * bank_code `string`: Bank code of bank associated with the bank account.
  * bank_name `string`: Name of the bank associated with the bank account.
  * bic `string`: Bank Identifier Code of the bank associated with the bank account.
  * iban_last4 `string`: Last four characters of the IBAN.
  * preferred_language `string` (values: de, en, fr, nl): Preferred language of the Bancontact authorization page that the customer is redirected to.
  * verified_name `string`: Owner's verified full name. Values are verified or provided by Bancontact directly

### payment_method_details_card
* payment_method_details_card `object`
  * brand `string`: Card brand. Can be `amex`, `diners`, `discover`, `jcb`, `mastercard`, `unionpay`, `visa`, or `unknown`.
  * country `string`: Two-letter ISO code representing the country of the card. You could use this attribute to get a sense of the international breakdown of cards you've collected.
  * exp_month **required** `integer`: Two-digit number representing the card's expiration month.
  * exp_year **required** `integer`: Four-digit number representing the card's expiration year.
  * fingerprint `string`: Uniquely identifies this particular card number. You can use this attribute to check whether two customers who’ve signed up with you are using the same card number, for example. For payment methods that tokenize card information (Apple Pay, Google Pay), the tokenized number might be provided instead of the underlying card number.
  * funding `string`: Card funding type. Can be `credit`, `debit`, `prepaid`, or `unknown`.
  * last4 `string`: The last four digits of the card.
  * network `string`: Identifies which network this charge was processed on. Can be `amex`, `cartes_bancaires`, `diners`, `discover`, `interac`, `jcb`, `mastercard`, `unionpay`, `visa`, or `unknown`.

### payment_method_details_card_checks
* payment_method_details_card_checks `object`
  * address_line1_check `string`: If a address line1 was provided, results of the check, one of `pass`, `fail`, `unavailable`, or `unchecked`.
  * address_postal_code_check `string`: If a address postal code was provided, results of the check, one of `pass`, `fail`, `unavailable`, or `unchecked`.
  * cvc_check `string`: If a CVC was provided, results of the check, one of `pass`, `fail`, `unavailable`, or `unchecked`.

### payment_method_details_card_installments
* payment_method_details_card_installments `object`

### payment_method_details_card_installments_plan
* payment_method_details_card_installments_plan `object`
  * count `integer`: For `fixed_count` installment plans, this is the number of installment payments your customer will make to their credit card.
  * interval `string` (values: month): For `fixed_count` installment plans, this is the interval between installment payments your customer will make to their credit card.
  * type **required** `string` (values: fixed_count): Type of installment plan, one of `fixed_count`.

### payment_method_details_card_present
* payment_method_details_card_present `object`
  * brand `string`: Card brand. Can be `amex`, `diners`, `discover`, `jcb`, `mastercard`, `unionpay`, `visa`, or `unknown`.
  * cardholder_name `string`: The cardholder name as read from the card, in [ISO 7813](https://en.wikipedia.org/wiki/ISO/IEC_7813) format. May include alphanumeric characters, special characters and first/last name separator (`/`).
  * country `string`: Two-letter ISO code representing the country of the card. You could use this attribute to get a sense of the international breakdown of cards you've collected.
  * emv_auth_data `string`: Authorization response cryptogram.
  * exp_month **required** `integer`: Two-digit number representing the card's expiration month.
  * exp_year **required** `integer`: Four-digit number representing the card's expiration year.
  * fingerprint `string`: Uniquely identifies this particular card number. You can use this attribute to check whether two customers who’ve signed up with you are using the same card number, for example. For payment methods that tokenize card information (Apple Pay, Google Pay), the tokenized number might be provided instead of the underlying card number.
  * funding `string`: Card funding type. Can be `credit`, `debit`, `prepaid`, or `unknown`.
  * generated_card `string`: ID of a card PaymentMethod generated from the card_present PaymentMethod that may be attached to a Customer for future transactions. Only present if it was possible to generate a card PaymentMethod.
  * last4 `string`: The last four digits of the card.
  * network `string`: Identifies which network this charge was processed on. Can be `amex`, `cartes_bancaires`, `diners`, `discover`, `interac`, `jcb`, `mastercard`, `unionpay`, `visa`, or `unknown`.
  * read_method `string` (values: contact_emv, contactless_emv, contactless_magstripe_mode, magnetic_stripe_fallback, magnetic_stripe_track2): How card details were read in this transaction.

### payment_method_details_card_present_receipt
* payment_method_details_card_present_receipt `object`
  * account_type `string` (values: checking, credit, prepaid, unknown): The type of account being debited or credited
  * application_cryptogram `string`: EMV tag 9F26, cryptogram generated by the integrated circuit chip.
  * application_preferred_name `string`: Mnenomic of the Application Identifier.
  * authorization_code `string`: Identifier for this transaction.
  * authorization_response_code `string`: EMV tag 8A. A code returned by the card issuer.
  * cardholder_verification_method `string`: How the cardholder verified ownership of the card.
  * dedicated_file_name `string`: EMV tag 84. Similar to the application identifier stored on the integrated circuit chip.
  * terminal_verification_results `string`: The outcome of a series of EMV functions performed by the card reader.
  * transaction_status_information `string`: An indication of various EMV functions performed during the transaction.

### payment_method_details_card_wallet
* payment_method_details_card_wallet `object`
  * amex_express_checkout [payment_method_details_card_wallet_amex_express_checkout](#payment_method_details_card_wallet_amex_express_checkout)
  * apple_pay [payment_method_details_card_wallet_apple_pay](#payment_method_details_card_wallet_apple_pay)
  * dynamic_last4 `string`: (For tokenized numbers only.) The last four digits of the device account number.
  * google_pay [payment_method_details_card_wallet_google_pay](#payment_method_details_card_wallet_google_pay)
  * masterpass [payment_method_details_card_wallet_masterpass](#payment_method_details_card_wallet_masterpass)
  * samsung_pay [payment_method_details_card_wallet_samsung_pay](#payment_method_details_card_wallet_samsung_pay)
  * type **required** `string` (values: amex_express_checkout, apple_pay, google_pay, masterpass, samsung_pay, visa_checkout): The type of the card wallet, one of `amex_express_checkout`, `apple_pay`, `google_pay`, `masterpass`, `samsung_pay`, or `visa_checkout`. An additional hash is included on the Wallet subhash with a name matching this value. It contains additional information specific to the card wallet type.
  * visa_checkout [payment_method_details_card_wallet_visa_checkout](#payment_method_details_card_wallet_visa_checkout)

### payment_method_details_card_wallet_amex_express_checkout
* payment_method_details_card_wallet_amex_express_checkout `object`

### payment_method_details_card_wallet_apple_pay
* payment_method_details_card_wallet_apple_pay `object`

### payment_method_details_card_wallet_google_pay
* payment_method_details_card_wallet_google_pay `object`

### payment_method_details_card_wallet_masterpass
* payment_method_details_card_wallet_masterpass `object`
  * email `string`: Owner's verified email. Values are verified or provided by the wallet directly (if supported) at the time of authorization or settlement. They cannot be set or mutated.
  * name `string`: Owner's verified full name. Values are verified or provided by the wallet directly (if supported) at the time of authorization or settlement. They cannot be set or mutated.

### payment_method_details_card_wallet_samsung_pay
* payment_method_details_card_wallet_samsung_pay `object`

### payment_method_details_card_wallet_visa_checkout
* payment_method_details_card_wallet_visa_checkout `object`
  * email `string`: Owner's verified email. Values are verified or provided by the wallet directly (if supported) at the time of authorization or settlement. They cannot be set or mutated.
  * name `string`: Owner's verified full name. Values are verified or provided by the wallet directly (if supported) at the time of authorization or settlement. They cannot be set or mutated.

### payment_method_details_eps
* payment_method_details_eps `object`
  * bank `string` (values: arzte_und_apotheker_bank, austrian_anadi_bank_ag, bank_austria, bankhaus_carl_spangler, bankhaus_schelhammer_und_schattera_ag, bawag_psk_ag, bks_bank_ag, brull_kallmus_bank_ag, btv_vier_lander_bank, capital_bank_grawe_gruppe_ag, dolomitenbank, easybank_ag, erste_bank_und_sparkassen, hypo_alpeadriabank_international_ag, hypo_bank_burgenland_aktiengesellschaft, hypo_noe_lb_fur_niederosterreich_u_wien, hypo_oberosterreich_salzburg_steiermark, hypo_tirol_bank_ag, hypo_vorarlberg_bank_ag, marchfelder_bank, oberbank_ag, raiffeisen_bankengruppe_osterreich, schoellerbank_ag, sparda_bank_wien, volksbank_gruppe, volkskreditbank_ag, vr_bank_braunau): The customer's bank. Should be one of `arzte_und_apotheker_bank`, `austrian_anadi_bank_ag`, `bank_austria`, `bankhaus_carl_spangler`, `bankhaus_schelhammer_und_schattera_ag`, `bawag_psk_ag`, `bks_bank_ag`, `brull_kallmus_bank_ag`, `btv_vier_lander_bank`, `capital_bank_grawe_gruppe_ag`, `dolomitenbank`, `easybank_ag`, `erste_bank_und_sparkassen`, `hypo_alpeadriabank_international_ag`, `hypo_noe_lb_fur_niederosterreich_u_wien`, `hypo_oberosterreich_salzburg_steiermark`, `hypo_tirol_bank_ag`, `hypo_vorarlberg_bank_ag`, `hypo_bank_burgenland_aktiengesellschaft`, `marchfelder_bank`, `oberbank_ag`, `raiffeisen_bankengruppe_osterreich`, `schoellerbank_ag`, `sparda_bank_wien`, `volksbank_gruppe`, `volkskreditbank_ag`, or `vr_bank_braunau`.
  * verified_name `string`: Owner's verified full name. Values are verified or provided by EPS directly

### payment_method_details_fpx
* payment_method_details_fpx `object`
  * bank **required** `string` (values: affin_bank, alliance_bank, ambank, bank_islam, bank_muamalat, bank_rakyat, bsn, cimb, deutsche_bank, hong_leong_bank, hsbc, kfh, maybank2e, maybank2u, ocbc, pb_enterprise, public_bank, rhb, standard_chartered, uob): The customer's bank. Can be one of `affin_bank`, `alliance_bank`, `ambank`, `bank_islam`, `bank_muamalat`, `bank_rakyat`, `bsn`, `cimb`, `hong_leong_bank`, `hsbc`, `kfh`, `maybank2u`, `ocbc`, `public_bank`, `rhb`, `standard_chartered`, `uob`, `deutsche_bank`, `maybank2e`, or `pb_enterprise`.
  * transaction_id `string`: Unique transaction id generated by FPX for every request from the merchant

### payment_method_details_giropay
* payment_method_details_giropay `object`
  * bank_code `string`: Bank code of bank associated with the bank account.
  * bank_name `string`: Name of the bank associated with the bank account.
  * bic `string`: Bank Identifier Code of the bank associated with the bank account.
  * verified_name `string`: Owner's verified full name. Values are verified or provided by Giropay directly

### payment_method_details_grabpay
* payment_method_details_grabpay `object`
  * transaction_id `string`: Unique transaction id generated by GrabPay

### payment_method_details_ideal
* payment_method_details_ideal `object`
  * bank `string` (values: abn_amro, asn_bank, bunq, handelsbanken, ing, knab, moneyou, rabobank, regiobank, sns_bank, triodos_bank, van_lanschot): The customer's bank. Can be one of `abn_amro`, `asn_bank`, `bunq`, `handelsbanken`, `ing`, `knab`, `moneyou`, `rabobank`, `regiobank`, `sns_bank`, `triodos_bank`, or `van_lanschot`.
  * bic `string` (values: ABNANL2A, ASNBNL21, BUNQNL2A, FVLBNL22, HANDNL2A, INGBNL2A, KNABNL2H, MOYONL21, RABONL2U, RBRBNL21, SNSBNL2A, TRIONL2U): The Bank Identifier Code of the customer's bank.
  * iban_last4 `string`: Last four characters of the IBAN.
  * verified_name `string`: Owner's verified full name. Values are verified or provided by iDEAL directly

### payment_method_details_interac_present
* payment_method_details_interac_present `object`
  * brand `string`: Card brand. Can be `interac`, `mastercard` or `visa`.
  * cardholder_name `string`: The cardholder name as read from the card, in [ISO 7813](https://en.wikipedia.org/wiki/ISO/IEC_7813) format. May include alphanumeric characters, special characters and first/last name separator (`/`).
  * country `string`: Two-letter ISO code representing the country of the card. You could use this attribute to get a sense of the international breakdown of cards you've collected.
  * emv_auth_data `string`: Authorization response cryptogram.
  * exp_month **required** `integer`: Two-digit number representing the card's expiration month.
  * exp_year **required** `integer`: Four-digit number representing the card's expiration year.
  * fingerprint `string`: Uniquely identifies this particular card number. You can use this attribute to check whether two customers who’ve signed up with you are using the same card number, for example. For payment methods that tokenize card information (Apple Pay, Google Pay), the tokenized number might be provided instead of the underlying card number.
  * funding `string`: Card funding type. Can be `credit`, `debit`, `prepaid`, or `unknown`.
  * generated_card `string`: ID of a card PaymentMethod generated from the card_present PaymentMethod that may be attached to a Customer for future transactions. Only present if it was possible to generate a card PaymentMethod.
  * last4 `string`: The last four digits of the card.
  * network `string`: Identifies which network this charge was processed on. Can be `amex`, `cartes_bancaires`, `diners`, `discover`, `interac`, `jcb`, `mastercard`, `unionpay`, `visa`, or `unknown`.
  * preferred_locales `array`: EMV tag 5F2D. Preferred languages specified by the integrated circuit chip.
    * items `string`
  * read_method `string` (values: contact_emv, contactless_emv, contactless_magstripe_mode, magnetic_stripe_fallback, magnetic_stripe_track2): How card details were read in this transaction.

### payment_method_details_interac_present_receipt
* payment_method_details_interac_present_receipt `object`
  * account_type `string` (values: checking, savings, unknown): The type of account being debited or credited
  * application_cryptogram `string`: EMV tag 9F26, cryptogram generated by the integrated circuit chip.
  * application_preferred_name `string`: Mnenomic of the Application Identifier.
  * authorization_code `string`: Identifier for this transaction.
  * authorization_response_code `string`: EMV tag 8A. A code returned by the card issuer.
  * cardholder_verification_method `string`: How the cardholder verified ownership of the card.
  * dedicated_file_name `string`: EMV tag 84. Similar to the application identifier stored on the integrated circuit chip.
  * terminal_verification_results `string`: The outcome of a series of EMV functions performed by the card reader.
  * transaction_status_information `string`: An indication of various EMV functions performed during the transaction.

### payment_method_details_klarna
* payment_method_details_klarna `object`

### payment_method_details_multibanco
* payment_method_details_multibanco `object`
  * entity `string`: Entity number associated with this Multibanco payment.
  * reference `string`: Reference number associated with this Multibanco payment.

### payment_method_details_oxxo
* payment_method_details_oxxo `object`
  * number `string`: OXXO reference number

### payment_method_details_p24
* payment_method_details_p24 `object`
  * bank `string` (values: alior_bank, bank_millennium, bank_nowy_bfg_sa, bank_pekao_sa, banki_spbdzielcze, blik, bnp_paribas, boz, citi_handlowy, credit_agricole, envelobank, etransfer_pocztowy24, getin_bank, ideabank, ing, inteligo, mbank_mtransfer, nest_przelew, noble_pay, pbac_z_ipko, plus_bank, santander_przelew24, tmobile_usbugi_bankowe, toyota_bank, volkswagen_bank): The customer's bank. Can be one of `ing`, `citi_handlowy`, `tmobile_usbugi_bankowe`, `plus_bank`, `etransfer_pocztowy24`, `banki_spbdzielcze`, `bank_nowy_bfg_sa`, `getin_bank`, `blik`, `noble_pay`, `ideabank`, `envelobank`, `santander_przelew24`, `nest_przelew`, `mbank_mtransfer`, `inteligo`, `pbac_z_ipko`, `bnp_paribas`, `credit_agricole`, `toyota_bank`, `bank_pekao_sa`, `volkswagen_bank`, `bank_millennium`, `alior_bank`, or `boz`.
  * reference `string`: Unique reference for this Przelewy24 payment.
  * verified_name `string`: Owner's verified full name. Values are verified or provided by Przelewy24 directly

### payment_method_details_sepa_debit
* payment_method_details_sepa_debit `object`
  * bank_code `string`: Bank code of bank associated with the bank account.
  * branch_code `string`: Branch code of bank associated with the bank account.
  * country `string`: Two-letter ISO code representing the country the bank account is located in.
  * fingerprint `string`: Uniquely identifies this particular bank account. You can use this attribute to check whether two bank accounts are the same.
  * last4 `string`: Last four characters of the IBAN.
  * mandate `string`: ID of the mandate used to make this payment.

### payment_method_details_sofort
* payment_method_details_sofort `object`
  * bank_code `string`: Bank code of bank associated with the bank account.
  * bank_name `string`: Name of the bank associated with the bank account.
  * bic `string`: Bank Identifier Code of the bank associated with the bank account.
  * country `string`: Two-letter ISO code representing the country the bank account is located in.
  * iban_last4 `string`: Last four characters of the IBAN.
  * preferred_language `string` (values: de, en, es, fr, it, nl, pl): Preferred language of the SOFORT authorization page that the customer is redirected to.
  * verified_name `string`: Owner's verified full name. Values are verified or provided by SOFORT directly

### payment_method_details_stripe_account
* payment_method_details_stripe_account `object`

### payment_method_details_wechat
* payment_method_details_wechat `object`

### payment_method_eps
* payment_method_eps `object`
  * bank `string` (values: arzte_und_apotheker_bank, austrian_anadi_bank_ag, bank_austria, bankhaus_carl_spangler, bankhaus_schelhammer_und_schattera_ag, bawag_psk_ag, bks_bank_ag, brull_kallmus_bank_ag, btv_vier_lander_bank, capital_bank_grawe_gruppe_ag, dolomitenbank, easybank_ag, erste_bank_und_sparkassen, hypo_alpeadriabank_international_ag, hypo_bank_burgenland_aktiengesellschaft, hypo_noe_lb_fur_niederosterreich_u_wien, hypo_oberosterreich_salzburg_steiermark, hypo_tirol_bank_ag, hypo_vorarlberg_bank_ag, marchfelder_bank, oberbank_ag, raiffeisen_bankengruppe_osterreich, schoellerbank_ag, sparda_bank_wien, volksbank_gruppe, volkskreditbank_ag, vr_bank_braunau): The customer's bank. Should be one of `arzte_und_apotheker_bank`, `austrian_anadi_bank_ag`, `bank_austria`, `bankhaus_carl_spangler`, `bankhaus_schelhammer_und_schattera_ag`, `bawag_psk_ag`, `bks_bank_ag`, `brull_kallmus_bank_ag`, `btv_vier_lander_bank`, `capital_bank_grawe_gruppe_ag`, `dolomitenbank`, `easybank_ag`, `erste_bank_und_sparkassen`, `hypo_alpeadriabank_international_ag`, `hypo_noe_lb_fur_niederosterreich_u_wien`, `hypo_oberosterreich_salzburg_steiermark`, `hypo_tirol_bank_ag`, `hypo_vorarlberg_bank_ag`, `hypo_bank_burgenland_aktiengesellschaft`, `marchfelder_bank`, `oberbank_ag`, `raiffeisen_bankengruppe_osterreich`, `schoellerbank_ag`, `sparda_bank_wien`, `volksbank_gruppe`, `volkskreditbank_ag`, or `vr_bank_braunau`.

### payment_method_fpx
* payment_method_fpx `object`
  * bank **required** `string` (values: affin_bank, alliance_bank, ambank, bank_islam, bank_muamalat, bank_rakyat, bsn, cimb, deutsche_bank, hong_leong_bank, hsbc, kfh, maybank2e, maybank2u, ocbc, pb_enterprise, public_bank, rhb, standard_chartered, uob): The customer's bank, if provided. Can be one of `affin_bank`, `alliance_bank`, `ambank`, `bank_islam`, `bank_muamalat`, `bank_rakyat`, `bsn`, `cimb`, `hong_leong_bank`, `hsbc`, `kfh`, `maybank2u`, `ocbc`, `public_bank`, `rhb`, `standard_chartered`, `uob`, `deutsche_bank`, `maybank2e`, or `pb_enterprise`.

### payment_method_giropay
* payment_method_giropay `object`

### payment_method_grabpay
* payment_method_grabpay `object`

### payment_method_ideal
* payment_method_ideal `object`
  * bank `string` (values: abn_amro, asn_bank, bunq, handelsbanken, ing, knab, moneyou, rabobank, regiobank, sns_bank, triodos_bank, van_lanschot): The customer's bank, if provided. Can be one of `abn_amro`, `asn_bank`, `bunq`, `handelsbanken`, `ing`, `knab`, `moneyou`, `rabobank`, `regiobank`, `sns_bank`, `triodos_bank`, or `van_lanschot`.
  * bic `string` (values: ABNANL2A, ASNBNL21, BUNQNL2A, FVLBNL22, HANDNL2A, INGBNL2A, KNABNL2H, MOYONL21, RABONL2U, RBRBNL21, SNSBNL2A, TRIONL2U): The Bank Identifier Code of the customer's bank, if the bank was provided.

### payment_method_interac_present
* payment_method_interac_present `object`

### payment_method_options_alipay
* payment_method_options_alipay `object`

### payment_method_options_bancontact
* payment_method_options_bancontact `object`
  * preferred_language **required** `string` (values: de, en, fr, nl): Preferred language of the Bancontact authorization page that the customer is redirected to.

### payment_method_options_card_installments
* payment_method_options_card_installments `object`
  * available_plans `array`: Installment plans that may be selected for this PaymentIntent.
    * items [payment_method_details_card_installments_plan](#payment_method_details_card_installments_plan)
  * enabled **required** `boolean`: Whether Installments are enabled for this PaymentIntent.

### payment_method_options_oxxo
* payment_method_options_oxxo `object`
  * expires_after_days **required** `integer`: The number of calendar days before an OXXO invoice expires. For example, if you create an OXXO invoice on Monday and you set expires_after_days to 2, the OXXO invoice will expire on Wednesday at 23:59 America/Mexico_City time.

### payment_method_options_p24
* payment_method_options_p24 `object`

### payment_method_options_sofort
* payment_method_options_sofort `object`
  * preferred_language `string` (values: de, en, es, fr, it, nl, pl): Preferred language of the SOFORT authorization page that the customer is redirected to.

### payment_method_oxxo
* payment_method_oxxo `object`

### payment_method_p24
* payment_method_p24 `object`
  * bank `string` (values: alior_bank, bank_millennium, bank_nowy_bfg_sa, bank_pekao_sa, banki_spbdzielcze, blik, bnp_paribas, boz, citi_handlowy, credit_agricole, envelobank, etransfer_pocztowy24, getin_bank, ideabank, ing, inteligo, mbank_mtransfer, nest_przelew, noble_pay, pbac_z_ipko, plus_bank, santander_przelew24, tmobile_usbugi_bankowe, toyota_bank, volkswagen_bank): The customer's bank, if provided.

### payment_method_sepa_debit
* payment_method_sepa_debit `object`
  * bank_code `string`: Bank code of bank associated with the bank account.
  * branch_code `string`: Branch code of bank associated with the bank account.
  * country `string`: Two-letter ISO code representing the country the bank account is located in.
  * fingerprint `string`: Uniquely identifies this particular bank account. You can use this attribute to check whether two bank accounts are the same.
  * last4 `string`: Last four characters of the IBAN.

### payment_method_sofort
* payment_method_sofort `object`
  * country `string`: Two-letter ISO code representing the country the bank account is located in.

### payment_pages_checkout_session_total_details
* PaymentPagesCheckoutSessionTotalDetails `object`
  * amount_discount **required** `integer`: This is the sum of all the line item discounts.
  * amount_tax **required** `integer`: This is the sum of all the line item tax amounts.
  * breakdown [payment_pages_checkout_session_total_details_resource_breakdown](#payment_pages_checkout_session_total_details_resource_breakdown)

### payment_pages_checkout_session_total_details_resource_breakdown
* PaymentPagesCheckoutSessionTotalDetailsResourceBreakdown `object`
  * discounts **required** `array`: The aggregated line item discounts.
    * items [line_items_discount_amount](#line_items_discount_amount)
  * taxes **required** `array`: The aggregated line item tax amounts by rate.
    * items [line_items_tax_amount](#line_items_tax_amount)

### payment_pages_payment_page_resources_shipping_address_collection
* PaymentPagesPaymentPageResourcesShippingAddressCollection `object`
  * allowed_countries **required** `array`: An array of two-letter ISO country codes representing which countries Checkout should provide as options for
    * items `string` (values: AC, AD, AE, AF, AG, AI, AL, AM, AO, AQ, AR, AT, AU, AW, AX, AZ, BA, BB, BD, BE, BF, BG, BH, BI, BJ, BL, BM, BN, BO, BQ, BR, BS, BT, BV, BW, BY, BZ, CA, CD, CF, CG, CH, CI, CK, CL, CM, CN, CO, CR, CV, CW, CY, CZ, DE, DJ, DK, DM, DO, DZ, EC, EE, EG, EH, ER, ES, ET, FI, FJ, FK, FO, FR, GA, GB, GD, GE, GF, GG, GH, GI, GL, GM, GN, GP, GQ, GR, GS, GT, GU, GW, GY, HK, HN, HR, HT, HU, ID, IE, IL, IM, IN, IO, IQ, IS, IT, JE, JM, JO, JP, KE, KG, KH, KI, KM, KN, KR, KW, KY, KZ, LA, LB, LC, LI, LK, LR, LS, LT, LU, LV, LY, MA, MC, MD, ME, MF, MG, MK, ML, MM, MN, MO, MQ, MR, MS, MT, MU, MV, MW, MX, MY, MZ, NA, NC, NE, NG, NI, NL, NO, NP, NR, NU, NZ, OM, PA, PE, PF, PG, PH, PK, PL, PM, PN, PR, PS, PT, PY, QA, RE, RO, RS, RU, RW, SA, SB, SC, SE, SG, SH, SI, SJ, SK, SL, SM, SN, SO, SR, SS, ST, SV, SX, SZ, TA, TC, TD, TF, TG, TH, TJ, TK, TL, TM, TN, TO, TR, TT, TV, TW, TZ, UA, UG, US, UY, UZ, VA, VC, VE, VG, VN, VU, WF, WS, XK, YE, YT, ZA, ZM, ZW, ZZ)

### payment_source


### payout
* Payout `object`: A `Payout` object is created when you receive funds from Stripe, or when you
  * amount **required** `integer`: Amount (in %s) to be transferred to your bank account or debit card.
  * arrival_date **required** `integer`: Date the payout is expected to arrive in the bank. This factors in delays like weekends or bank holidays.
  * automatic **required** `boolean`: Returns `true` if the payout was created by an [automated payout schedule](https://stripe.com/docs/payouts#payout-schedule), and `false` if it was [requested manually](https://stripe.com/docs/payouts#manual-payouts).
  * created **required** `integer`: Time at which the object was created. Measured in seconds since the Unix epoch.
  * currency **required** `string`: Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
  * description `string`: An arbitrary string attached to the object. Often useful for displaying to users.
  * failure_code `string`: Error code explaining reason for payout failure if available. See [Types of payout failures](https://stripe.com/docs/api#payout_failures) for a list of failure codes.
  * failure_message `string`: Message to user further explaining reason for payout failure if available.
  * id **required** `string`: Unique identifier for the object.
  * livemode **required** `boolean`: Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
  * metadata `object`: Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
  * method **required** `string`: The method used to send this payout, which can be `standard` or `instant`. `instant` is only supported for payouts to debit cards. (See [Instant payouts for marketplaces](https://stripe.com/blog/instant-payouts-for-marketplaces) for more information.)
  * object **required** `string` (values: payout): String representing the object's type. Objects of the same type share the same value.
  * source_type **required** `string`: The source balance this payout came from. One of `card`, `fpx`, or `bank_account`.
  * statement_descriptor `string`: Extra information about a payout to be displayed on the user's bank statement.
  * status **required** `string`: Current status of the payout: `paid`, `pending`, `in_transit`, `canceled` or `failed`. A payout is `pending` until it is submitted to the bank, when it becomes `in_transit`. The status then changes to `paid` if the transaction goes through, or to `failed` or `canceled` (within 5 business days). Some failed payouts may initially show as `paid` but then change to `failed`.
  * type **required** `string` (values: bank_account, card): Can be `bank_account` or `card`.

### period
* Period `object`
  * end `integer`: The end date of this usage period. All usage up to and including this point in time is included.
  * start `integer`: The start date of this usage period. All usage after this point in time is included.

### person
* Person `object`: This is an object representing a person associated with a Stripe account.
  * account **required** `string`: The account the person is associated with.
  * address [address](#address)
  * created **required** `integer`: Time at which the object was created. Measured in seconds since the Unix epoch.
  * dob [legal_entity_dob](#legal_entity_dob)
  * email `string`: The person's email address.
  * first_name `string`: The person's first name.
  * first_name_kana `string`: The Kana variation of the person's first name (Japan only).
  * first_name_kanji `string`: The Kanji variation of the person's first name (Japan only).
  * gender `string`: The person's gender (International regulations require either "male" or "female").
  * id **required** `string`: Unique identifier for the object.
  * id_number_provided `boolean`: Whether the person's `id_number` was provided.
  * last_name `string`: The person's last name.
  * last_name_kana `string`: The Kana variation of the person's last name (Japan only).
  * last_name_kanji `string`: The Kanji variation of the person's last name (Japan only).
  * maiden_name `string`: The person's maiden name.
  * metadata `object`: Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
  * object **required** `string` (values: person): String representing the object's type. Objects of the same type share the same value.
  * phone `string`: The person's phone number.
  * political_exposure `string` (values: existing, none): Indicates if the person or any of their representatives, family members, or other closely related persons, declares that they hold or have held an important public job or function, in any jurisdiction.
  * relationship [person_relationship](#person_relationship)
  * ssn_last_4_provided `boolean`: Whether the last four digits of the person's Social Security number have been provided (U.S. only).
  * verification [legal_entity_person_verification](#legal_entity_person_verification)

### person_relationship
* PersonRelationship `object`
  * director `boolean`: Whether the person is a director of the account's legal entity. Currently only required for accounts in the EU. Directors are typically members of the governing board of the company, or responsible for ensuring the company meets its regulatory obligations.
  * executive `boolean`: Whether the person has significant responsibility to control, manage, or direct the organization.
  * owner `boolean`: Whether the person is an owner of the account’s legal entity.
  * percent_ownership `number`: The percent owned by the person of the account's legal entity.
  * representative `boolean`: Whether the person is authorized as the primary representative of the account. This is the person nominated by the business to provide information about themselves, and general information about the account. There can only be one representative at any given time. At the time the account is created, this person should be set to the person responsible for opening the account.
  * title `string`: The person's title (e.g., CEO, Support Engineer).

### person_requirements
* PersonRequirements `object`
  * currently_due **required** `array`: Fields that need to be collected to keep the person's account enabled. If not collected by the account's `current_deadline`, these fields appear in `past_due` as well, and the account is disabled.
    * items `string`
  * errors **required** `array`: The fields that are `currently_due` and need to be collected again because validation or verification failed for some reason.
    * items [account_requirements_error](#account_requirements_error)
  * eventually_due **required** `array`: Fields that need to be collected assuming all volume thresholds are reached. As fields are needed, they are moved to `currently_due` and the account's `current_deadline` is set.
    * items `string`
  * past_due **required** `array`: Fields that weren't collected by the account's `current_deadline`. These fields need to be collected to enable payouts for the person's account.
    * items `string`
  * pending_verification **required** `array`: Fields that may become required depending on the results of verification or review. An empty array unless an asynchronous verification is pending. If verification fails, the fields in this array become required and move to `currently_due` or `past_due`.
    * items `string`

### plan
* Plan `object`: You can now model subscriptions more flexibly using the [Prices API](https://stripe.com/docs/api#prices). It replaces the Plans API and is backwards compatible to simplify your migration.
  * active **required** `boolean`: Whether the plan can be used for new purchases.
  * aggregate_usage `string` (values: last_during_period, last_ever, max, sum): Specifies a usage aggregation strategy for plans of `usage_type=metered`. Allowed values are `sum` for summing up all usage during a period, `last_during_period` for using the last usage record reported within a period, `last_ever` for using the last usage record ever (across period bounds) or `max` which uses the usage record with the maximum reported usage during a period. Defaults to `sum`.
  * amount `integer`: The unit amount in %s to be charged, represented as a whole integer if possible.
  * amount_decimal `string`: The unit amount in %s to be charged, represented as a decimal string with at most 12 decimal places.
  * billing_scheme **required** `string` (values: per_unit, tiered): Describes how to compute the price per period. Either `per_unit` or `tiered`. `per_unit` indicates that the fixed amount (specified in `amount`) will be charged per unit in `quantity` (for plans with `usage_type=licensed`), or per unit of total usage (for plans with `usage_type=metered`). `tiered` indicates that the unit pricing will be computed using a tiering strategy as defined using the `tiers` and `tiers_mode` attributes.
  * created **required** `integer`: Time at which the object was created. Measured in seconds since the Unix epoch.
  * currency **required** `string`: Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
  * id **required** `string`: Unique identifier for the object.
  * interval **required** `string` (values: day, month, week, year): The frequency at which a subscription is billed. One of `day`, `week`, `month` or `year`.
  * interval_count **required** `integer`: The number of intervals (specified in the `interval` attribute) between subscription billings. For example, `interval=month` and `interval_count=3` bills every 3 months.
  * livemode **required** `boolean`: Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
  * metadata `object`: Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
  * nickname `string`: A brief description of the plan, hidden from customers.
  * object **required** `string` (values: plan): String representing the object's type. Objects of the same type share the same value.
  * tiers `array`: Each element represents a pricing tier. This parameter requires `billing_scheme` to be set to `tiered`. See also the documentation for `billing_scheme`.
    * items [plan_tier](#plan_tier)
  * tiers_mode `string` (values: graduated, volume): Defines if the tiering price should be `graduated` or `volume` based. In `volume`-based tiering, the maximum quantity within a period determines the per unit price. In `graduated` tiering, pricing can change as the quantity grows.
  * trial_period_days `integer`: Default number of trial days when subscribing a customer to this plan using [`trial_from_plan=true`](https://stripe.com/docs/api#create_subscription-trial_from_plan).
  * usage_type **required** `string` (values: licensed, metered): Configures how the quantity per period should be determined. Can be either `metered` or `licensed`. `licensed` automatically bills the `quantity` set when adding it to a subscription. `metered` aggregates the total usage based on usage records. Defaults to `licensed`.

### plan_tier
* PlanTier `object`
  * flat_amount `integer`: Price for the entire tier.
  * flat_amount_decimal `string`: Same as `flat_amount`, but contains a decimal value with at most 12 decimal places.
  * unit_amount `integer`: Per unit price for units relevant to the tier.
  * unit_amount_decimal `string`: Same as `unit_amount`, but contains a decimal value with at most 12 decimal places.
  * up_to `integer`: Up to and including to this quantity will be contained in the tier.

### platform_tax_fee
* PlatformTax `object`
  * account **required** `string`: The Connected account that incurred this charge.
  * id **required** `string`: Unique identifier for the object.
  * object **required** `string` (values: platform_tax_fee): String representing the object's type. Objects of the same type share the same value.
  * source_transaction **required** `string`: The payment object that caused this tax to be inflicted.
  * type **required** `string`: The type of tax (VAT).

### price
* Price `object`: Prices define the unit cost, currency, and (optional) billing cycle for both recurring and one-time purchases of products.
  * active **required** `boolean`: Whether the price can be used for new purchases.
  * billing_scheme **required** `string` (values: per_unit, tiered): Describes how to compute the price per period. Either `per_unit` or `tiered`. `per_unit` indicates that the fixed amount (specified in `unit_amount` or `unit_amount_decimal`) will be charged per unit in `quantity` (for prices with `usage_type=licensed`), or per unit of total usage (for prices with `usage_type=metered`). `tiered` indicates that the unit pricing will be computed using a tiering strategy as defined using the `tiers` and `tiers_mode` attributes.
  * created **required** `integer`: Time at which the object was created. Measured in seconds since the Unix epoch.
  * currency **required** `string`: Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
  * id **required** `string`: Unique identifier for the object.
  * livemode **required** `boolean`: Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
  * lookup_key `string`: A lookup key used to retrieve prices dynamically from a static string.
  * metadata **required** `object`: Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
  * nickname `string`: A brief description of the plan, hidden from customers.
  * object **required** `string` (values: price): String representing the object's type. Objects of the same type share the same value.
  * tiers `array`: Each element represents a pricing tier. This parameter requires `billing_scheme` to be set to `tiered`. See also the documentation for `billing_scheme`.
    * items [price_tier](#price_tier)
  * tiers_mode `string` (values: graduated, volume): Defines if the tiering price should be `graduated` or `volume` based. In `volume`-based tiering, the maximum quantity within a period determines the per unit price. In `graduated` tiering, pricing can change as the quantity grows.
  * type **required** `string` (values: one_time, recurring): One of `one_time` or `recurring` depending on whether the price is for a one-time purchase or a recurring (subscription) purchase.
  * unit_amount `integer`: The unit amount in %s to be charged, represented as a whole integer if possible.
  * unit_amount_decimal `string`: The unit amount in %s to be charged, represented as a decimal string with at most 12 decimal places.

### price_tier
* PriceTier `object`
  * flat_amount `integer`: Price for the entire tier.
  * flat_amount_decimal `string`: Same as `flat_amount`, but contains a decimal value with at most 12 decimal places.
  * unit_amount `integer`: Per unit price for units relevant to the tier.
  * unit_amount_decimal `string`: Same as `unit_amount`, but contains a decimal value with at most 12 decimal places.
  * up_to `integer`: Up to and including to this quantity will be contained in the tier.

### product
* Product `object`: Products describe the specific goods or services you offer to your customers.
  * active **required** `boolean`: Whether the product is currently available for purchase.
  * attributes `array`: A list of up to 5 attributes that each SKU can provide values for (e.g., `["color", "size"]`).
    * items `string`
  * caption `string`: A short one-line description of the product, meant to be displayable to the customer. Only applicable to products of `type=good`.
  * created **required** `integer`: Time at which the object was created. Measured in seconds since the Unix epoch.
  * deactivate_on `array`: An array of connect application identifiers that cannot purchase this product. Only applicable to products of `type=good`.
    * items `string`
  * description `string`: The product's description, meant to be displayable to the customer. Use this field to optionally store a long form explanation of the product being sold for your own rendering purposes.
  * id **required** `string`: Unique identifier for the object.
  * images **required** `array`: A list of up to 8 URLs of images for this product, meant to be displayable to the customer.
    * items `string`
  * livemode **required** `boolean`: Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
  * metadata **required** `object`: Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
  * name **required** `string`: The product's name, meant to be displayable to the customer. Whenever this product is sold via a subscription, name will show up on associated invoice line item descriptions.
  * object **required** `string` (values: product): String representing the object's type. Objects of the same type share the same value.
  * shippable `boolean`: Whether this product is a shipped good. Only applicable to products of `type=good`.
  * statement_descriptor `string`: Extra information about a product which will appear on your customer's credit card statement. In the case that multiple products are billed at once, the first statement descriptor will be used.
  * unit_label `string`: A label that represents units of this product in Stripe and on customers’ receipts and invoices. When set, this will be included in associated invoice line item descriptions.
  * updated **required** `integer`: Time at which the object was last updated. Measured in seconds since the Unix epoch.
  * url `string`: A URL of a publicly-accessible webpage for this product. Only applicable to products of `type=good`.

### promotion_code
* PromotionCode `object`: A Promotion Code represents a customer-redeemable code for a coupon. It can be used to
  * active **required** `boolean`: Whether the promotion code is currently active. A promotion code is only active if the coupon is also valid.
  * code **required** `string`: The customer-facing code. Regardless of case, this code must be unique across all active promotion codes for each customer.
  * coupon **required** [coupon](#coupon)
  * created **required** `integer`: Time at which the object was created. Measured in seconds since the Unix epoch.
  * expires_at `integer`: Date at which the promotion code can no longer be redeemed.
  * id **required** `string`: Unique identifier for the object.
  * livemode **required** `boolean`: Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
  * max_redemptions `integer`: Maximum number of times this promotion code can be redeemed.
  * metadata `object`: Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
  * object **required** `string` (values: promotion_code): String representing the object's type. Objects of the same type share the same value.
  * restrictions **required** [promotion_codes_resource_restrictions](#promotion_codes_resource_restrictions)
  * times_redeemed **required** `integer`: Number of times this promotion code has been used.

### promotion_codes_resource_restrictions
* PromotionCodesResourceRestrictions `object`
  * first_time_transaction **required** `boolean`: A Boolean indicating if the Promotion Code should only be redeemed for Customers without any successful payments or invoices
  * minimum_amount `integer`: Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work).
  * minimum_amount_currency `string`: Three-letter [ISO code](https://stripe.com/docs/currencies) for minimum_amount

### radar.early_fraud_warning
* RadarEarlyFraudWarning `object`: An early fraud warning indicates that the card issuer has notified us that a
  * actionable **required** `boolean`: An EFW is actionable if it has not received a dispute and has not been fully refunded. You may wish to proactively refund a charge that receives an EFW, in order to avoid receiving a dispute later.
  * created **required** `integer`: Time at which the object was created. Measured in seconds since the Unix epoch.
  * fraud_type **required** `string`: The type of fraud labelled by the issuer. One of `card_never_received`, `fraudulent_card_application`, `made_with_counterfeit_card`, `made_with_lost_card`, `made_with_stolen_card`, `misc`, `unauthorized_use_of_card`.
  * id **required** `string`: Unique identifier for the object.
  * livemode **required** `boolean`: Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
  * object **required** `string` (values: radar.early_fraud_warning): String representing the object's type. Objects of the same type share the same value.

### radar.value_list
* RadarListList `object`: Value lists allow you to group values together which can then be referenced in rules.
  * alias **required** `string`: The name of the value list for use in rules.
  * created **required** `integer`: Time at which the object was created. Measured in seconds since the Unix epoch.
  * created_by **required** `string`: The name or email address of the user who created this value list.
  * id **required** `string`: Unique identifier for the object.
  * item_type **required** `string` (values: card_bin, card_fingerprint, case_sensitive_string, country, email, ip_address, string): The type of items in the value list. One of `card_fingerprint`, `card_bin`, `email`, `ip_address`, `country`, `string`, or `case_sensitive_string`.
  * list_items **required** `object`: List of items contained within this value list.
    * data **required** `array`: Details about each object.
      * items [radar.value_list_item](#radar.value_list_item)
    * has_more **required** `boolean`: True if this list has another page of items after this one that can be fetched.
    * object **required** `string` (values: list): String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
    * url **required** `string`: The URL where this list can be accessed.
  * livemode **required** `boolean`: Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
  * metadata **required** `object`: Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
  * name **required** `string`: The name of the value list.
  * object **required** `string` (values: radar.value_list): String representing the object's type. Objects of the same type share the same value.

### radar.value_list_item
* RadarListListItem `object`: Value list items allow you to add specific values to a given Radar value list, which can then be used in rules.
  * created **required** `integer`: Time at which the object was created. Measured in seconds since the Unix epoch.
  * created_by **required** `string`: The name or email address of the user who added this item to the value list.
  * id **required** `string`: Unique identifier for the object.
  * livemode **required** `boolean`: Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
  * object **required** `string` (values: radar.value_list_item): String representing the object's type. Objects of the same type share the same value.
  * value **required** `string`: The value of the item.
  * value_list **required** `string`: The identifier of the value list this item belongs to.

### radar_review_resource_location
* RadarReviewResourceLocation `object`
  * city `string`: The city where the payment originated.
  * country `string`: Two-letter ISO code representing the country where the payment originated.
  * latitude `number`: The geographic latitude where the payment originated.
  * longitude `number`: The geographic longitude where the payment originated.
  * region `string`: The state/county/province/region where the payment originated.

### radar_review_resource_session
* RadarReviewResourceSession `object`
  * browser `string`: The browser used in this browser session (e.g., `Chrome`).
  * device `string`: Information about the device used for the browser session (e.g., `Samsung SM-G930T`).
  * platform `string`: The platform for the browser session (e.g., `Macintosh`).
  * version `string`: The version for the browser session (e.g., `61.0.3163.100`).

### recipient
* TransferRecipient `object`: With `Recipient` objects, you can transfer money from your Stripe account to a
  * cards `object`
    * data **required** `array`
      * items [card](#card)
    * has_more **required** `boolean`: True if this list has another page of items after this one that can be fetched.
    * object **required** `string` (values: list): String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
    * url **required** `string`: The URL where this list can be accessed.
  * created **required** `integer`: Time at which the object was created. Measured in seconds since the Unix epoch.
  * description `string`: An arbitrary string attached to the object. Often useful for displaying to users.
  * email `string`
  * id **required** `string`: Unique identifier for the object.
  * livemode **required** `boolean`: Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
  * metadata **required** `object`: Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
  * name `string`: Full, legal name of the recipient.
  * object **required** `string` (values: recipient): String representing the object's type. Objects of the same type share the same value.
  * type **required** `string`: Type of the recipient, one of `individual` or `corporation`.

### recurring
* Recurring `object`
  * aggregate_usage `string` (values: last_during_period, last_ever, max, sum): Specifies a usage aggregation strategy for prices of `usage_type=metered`. Allowed values are `sum` for summing up all usage during a period, `last_during_period` for using the last usage record reported within a period, `last_ever` for using the last usage record ever (across period bounds) or `max` which uses the usage record with the maximum reported usage during a period. Defaults to `sum`.
  * interval **required** `string` (values: day, month, week, year): The frequency at which a subscription is billed. One of `day`, `week`, `month` or `year`.
  * interval_count **required** `integer`: The number of intervals (specified in the `interval` attribute) between subscription billings. For example, `interval=month` and `interval_count=3` bills every 3 months.
  * usage_type **required** `string` (values: licensed, metered): Configures how the quantity per period should be determined. Can be either `metered` or `licensed`. `licensed` automatically bills the `quantity` set when adding it to a subscription. `metered` aggregates the total usage based on usage records. Defaults to `licensed`.

### refund
* Refund `object`: `Refund` objects allow you to refund a charge that has previously been created
  * amount **required** `integer`: Amount, in %s.
  * created **required** `integer`: Time at which the object was created. Measured in seconds since the Unix epoch.
  * currency **required** `string`: Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
  * description `string`: An arbitrary string attached to the object. Often useful for displaying to users. (Available on non-card refunds only)
  * failure_reason `string`: If the refund failed, the reason for refund failure if known. Possible values are `lost_or_stolen_card`, `expired_or_canceled_card`, or `unknown`.
  * id **required** `string`: Unique identifier for the object.
  * metadata `object`: Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
  * object **required** `string` (values: refund): String representing the object's type. Objects of the same type share the same value.
  * reason `string`: Reason for the refund, either user-provided (`duplicate`, `fraudulent`, or `requested_by_customer`) or generated by Stripe internally (`expired_uncaptured_charge`).
  * receipt_number `string`: This is the transaction number that appears on email receipts sent for this refund.
  * status `string`: Status of the refund. For credit card refunds, this can be `pending`, `succeeded`, or `failed`. For other types of refunds, it can be `pending`, `succeeded`, `failed`, or `canceled`. Refer to our [refunds](https://stripe.com/docs/refunds#failed-refunds) documentation for more details.

### reporting.report_run
* reporting_report_run `object`: The Report Run object represents an instance of a report type generated with
  * parameters **required** [financial_reporting_finance_report_run_run_parameters](#financial_reporting_finance_report_run_run_parameters)
  * created **required** `integer`: Time at which the object was created. Measured in seconds since the Unix epoch.
  * error `string`: If something should go wrong during the run, a message about the failure (populated when
  * id **required** `string`: Unique identifier for the object.
  * livemode **required** `boolean`: Always `true`: reports can only be run on live-mode data.
  * object **required** `string` (values: reporting.report_run): String representing the object's type. Objects of the same type share the same value.
  * report_type **required** `string`: The ID of the [report type](https://stripe.com/docs/reports/report-types) to run, such as `"balance.summary.1"`.
  * status **required** `string`: Status of this report run. This will be `pending` when the run is initially created.
  * succeeded_at `integer`: Timestamp at which this run successfully finished (populated when

### reporting.report_type
* reporting_report_type `object`: The Report Type resource corresponds to a particular type of report, such as
  * data_available_end **required** `integer`: Most recent time for which this Report Type is available. Measured in seconds since the Unix epoch.
  * data_available_start **required** `integer`: Earliest time for which this Report Type is available. Measured in seconds since the Unix epoch.
  * default_columns `array`: List of column names that are included by default when this Report Type gets run. (If the Report Type doesn't support the `columns` parameter, this will be null.)
    * items `string`
  * id **required** `string`: The [ID of the Report Type](https://stripe.com/docs/reporting/statements/api#available-report-types), such as `balance.summary.1`.
  * name **required** `string`: Human-readable name of the Report Type
  * object **required** `string` (values: reporting.report_type): String representing the object's type. Objects of the same type share the same value.
  * updated **required** `integer`: When this Report Type was latest updated. Measured in seconds since the Unix epoch.
  * version **required** `integer`: Version of the Report Type. Different versions report with the same ID will have the same purpose, but may take different run parameters or have different result schemas.

### reserve_transaction
* ReserveTransaction `object`
  * amount **required** `integer`
  * currency **required** `string`: Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
  * description `string`: An arbitrary string attached to the object. Often useful for displaying to users.
  * id **required** `string`: Unique identifier for the object.
  * object **required** `string` (values: reserve_transaction): String representing the object's type. Objects of the same type share the same value.

### review
* RadarReview `object`: Reviews can be used to supplement automated fraud detection with human expertise.
  * billing_zip `string`: The ZIP or postal code of the card used, if applicable.
  * closed_reason `string` (values: approved, disputed, refunded, refunded_as_fraud): The reason the review was closed, or null if it has not yet been closed. One of `approved`, `refunded`, `refunded_as_fraud`, or `disputed`.
  * created **required** `integer`: Time at which the object was created. Measured in seconds since the Unix epoch.
  * id **required** `string`: Unique identifier for the object.
  * ip_address `string`: The IP address where the payment originated.
  * livemode **required** `boolean`: Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
  * object **required** `string` (values: review): String representing the object's type. Objects of the same type share the same value.
  * open **required** `boolean`: If `true`, the review needs action.
  * opened_reason **required** `string` (values: manual, rule): The reason the review was opened. One of `rule` or `manual`.
  * reason **required** `string`: The reason the review is currently open or closed. One of `rule`, `manual`, `approved`, `refunded`, `refunded_as_fraud`, or `disputed`.

### rule
* RadarRule `object`
  * action **required** `string`: The action taken on the payment.
  * id **required** `string`: Unique identifier for the object.
  * predicate **required** `string`: The predicate to evaluate the payment against.

### scheduled_query_run
* ScheduledQueryRun `object`: If you have [scheduled a Sigma query](https://stripe.com/docs/sigma/scheduled-queries), you'll
  * created **required** `integer`: Time at which the object was created. Measured in seconds since the Unix epoch.
  * data_load_time **required** `integer`: When the query was run, Sigma contained a snapshot of your Stripe data at this time.
  * error [sigma_scheduled_query_run_error](#sigma_scheduled_query_run_error)
  * id **required** `string`: Unique identifier for the object.
  * livemode **required** `boolean`: Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
  * object **required** `string` (values: scheduled_query_run): String representing the object's type. Objects of the same type share the same value.
  * result_available_until **required** `integer`: Time at which the result expires and is no longer available for download.
  * sql **required** `string`: SQL for the query.
  * status **required** `string`: The query's execution status, which will be `completed` for successful runs, and `canceled`, `failed`, or `timed_out` otherwise.
  * title **required** `string`: Title of the query.

### sepa_debit_generated_from
* sepa_debit_generated_from `object`

### setup_attempt
* PaymentFlowsSetupIntentSetupAttempt `object`: A SetupAttempt describes one attempted confirmation of a SetupIntent,
  * created **required** `integer`: Time at which the object was created. Measured in seconds since the Unix epoch.
  * id **required** `string`: Unique identifier for the object.
  * livemode **required** `boolean`: Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
  * object **required** `string` (values: setup_attempt): String representing the object's type. Objects of the same type share the same value.
  * payment_method_details **required** [setup_attempt_payment_method_details](#setup_attempt_payment_method_details)
  * status **required** `string`: Status of this SetupAttempt, one of `requires_confirmation`, `requires_action`, `processing`, `succeeded`, `failed`, or `abandoned`.
  * usage **required** `string`: The value of [usage](https://stripe.com/docs/api/setup_intents/object#setup_intent_object-usage) on the SetupIntent at the time of this confirmation, one of `off_session` or `on_session`.

### setup_attempt_payment_method_details
* SetupAttemptPaymentMethodDetails `object`
  * bancontact [setup_attempt_payment_method_details_bancontact](#setup_attempt_payment_method_details_bancontact)
  * card [setup_attempt_payment_method_details_card](#setup_attempt_payment_method_details_card)
  * ideal [setup_attempt_payment_method_details_ideal](#setup_attempt_payment_method_details_ideal)
  * sofort [setup_attempt_payment_method_details_sofort](#setup_attempt_payment_method_details_sofort)
  * type **required** `string`: The type of the payment method used in the SetupIntent (e.g., `card`). An additional hash is included on `payment_method_details` with a name matching this value. It contains confirmation-specific information for the payment method.

### setup_attempt_payment_method_details_bancontact
* setup_attempt_payment_method_details_bancontact `object`
  * bank_code `string`: Bank code of bank associated with the bank account.
  * bank_name `string`: Name of the bank associated with the bank account.
  * bic `string`: Bank Identifier Code of the bank associated with the bank account.
  * iban_last4 `string`: Last four characters of the IBAN.
  * preferred_language `string` (values: de, en, fr, nl): Preferred language of the Bancontact authorization page that the customer is redirected to.
  * verified_name `string`: Owner's verified full name. Values are verified or provided by Bancontact directly

### setup_attempt_payment_method_details_card
* setup_attempt_payment_method_details_card `object`

### setup_attempt_payment_method_details_ideal
* setup_attempt_payment_method_details_ideal `object`
  * bank `string` (values: abn_amro, asn_bank, bunq, handelsbanken, ing, knab, moneyou, rabobank, regiobank, sns_bank, triodos_bank, van_lanschot): The customer's bank. Can be one of `abn_amro`, `asn_bank`, `bunq`, `handelsbanken`, `ing`, `knab`, `moneyou`, `rabobank`, `regiobank`, `sns_bank`, `triodos_bank`, or `van_lanschot`.
  * bic `string` (values: ABNANL2A, ASNBNL21, BUNQNL2A, FVLBNL22, HANDNL2A, INGBNL2A, KNABNL2H, MOYONL21, RABONL2U, RBRBNL21, SNSBNL2A, TRIONL2U): The Bank Identifier Code of the customer's bank.
  * iban_last4 `string`: Last four characters of the IBAN.
  * verified_name `string`: Owner's verified full name. Values are verified or provided by iDEAL directly

### setup_attempt_payment_method_details_sofort
* setup_attempt_payment_method_details_sofort `object`
  * bank_code `string`: Bank code of bank associated with the bank account.
  * bank_name `string`: Name of the bank associated with the bank account.
  * bic `string`: Bank Identifier Code of the bank associated with the bank account.
  * iban_last4 `string`: Last four characters of the IBAN.
  * preferred_language `string` (values: de, en, fr, nl): Preferred language of the Sofort authorization page that the customer is redirected to.
  * verified_name `string`: Owner's verified full name. Values are verified or provided by Sofort directly

### setup_intent
* SetupIntent `object`: A SetupIntent guides you through the process of setting up and saving a customer's payment credentials for future payments.
  * cancellation_reason `string` (values: abandoned, duplicate, requested_by_customer): Reason for cancellation of this SetupIntent, one of `abandoned`, `requested_by_customer`, or `duplicate`.
  * client_secret `string`: The client secret of this SetupIntent. Used for client-side retrieval using a publishable key.
  * created **required** `integer`: Time at which the object was created. Measured in seconds since the Unix epoch.
  * description `string`: An arbitrary string attached to the object. Often useful for displaying to users.
  * id **required** `string`: Unique identifier for the object.
  * livemode **required** `boolean`: Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
  * metadata `object`: Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
  * object **required** `string` (values: setup_intent): String representing the object's type. Objects of the same type share the same value.
  * payment_method_types **required** `array`: The list of payment method types (e.g. card) that this SetupIntent is allowed to set up.
    * items `string`
  * status **required** `string` (values: canceled, processing, requires_action, requires_confirmation, requires_payment_method, succeeded): [Status](https://stripe.com/docs/payments/intents#intent-statuses) of this SetupIntent, one of `requires_payment_method`, `requires_confirmation`, `requires_action`, `processing`, `canceled`, or `succeeded`.
  * usage **required** `string`: Indicates how the payment method is intended to be used in the future.

### setup_intent_next_action
* SetupIntentNextAction `object`
  * redirect_to_url [setup_intent_next_action_redirect_to_url](#setup_intent_next_action_redirect_to_url)
  * type **required** `string`: Type of the next action to perform, one of `redirect_to_url` or `use_stripe_sdk`.
  * use_stripe_sdk `object`: When confirming a SetupIntent with Stripe.js, Stripe.js depends on the contents of this dictionary to invoke authentication flows. The shape of the contents is subject to change and is only intended to be used by Stripe.js.

### setup_intent_next_action_redirect_to_url
* SetupIntentNextActionRedirectToUrl `object`
  * return_url `string`: If the customer does not exit their browser while authenticating, they will be redirected to this specified URL after completion.
  * url `string`: The URL you must redirect your customer to in order to authenticate.

### setup_intent_payment_method_options
* SetupIntentPaymentMethodOptions `object`
  * card [setup_intent_payment_method_options_card](#setup_intent_payment_method_options_card)
  * sepa_debit [setup_intent_payment_method_options_sepa_debit](#setup_intent_payment_method_options_sepa_debit)

### setup_intent_payment_method_options_card
* setup_intent_payment_method_options_card `object`
  * request_three_d_secure `string` (values: any, automatic, challenge_only): We strongly recommend that you rely on our SCA Engine to automatically prompt your customers for authentication based on risk level and [other requirements](https://stripe.com/docs/strong-customer-authentication). However, if you wish to request 3D Secure based on logic from your own fraud engine, provide this option. Permitted values include: `automatic` or `any`. If not provided, defaults to `automatic`. Read our guide on [manually requesting 3D Secure](https://stripe.com/docs/payments/3d-secure#manual-three-ds) for more information on how this configuration interacts with Radar and our SCA Engine.

### setup_intent_payment_method_options_mandate_options_sepa_debit
* setup_intent_payment_method_options_mandate_options_sepa_debit `object`

### setup_intent_payment_method_options_sepa_debit
* setup_intent_payment_method_options_sepa_debit `object`
  * mandate_options [setup_intent_payment_method_options_mandate_options_sepa_debit](#setup_intent_payment_method_options_mandate_options_sepa_debit)

### shipping
* Shipping `object`
  * address [address](#address)
  * carrier `string`: The delivery service that shipped a physical product, such as Fedex, UPS, USPS, etc.
  * name `string`: Recipient name.
  * phone `string`: Recipient phone (including extension).
  * tracking_number `string`: The tracking number for a physical product, obtained from the delivery service. If multiple tracking numbers were generated for this purchase, please separate them with commas.

### shipping_method
* ShippingMethod `object`
  * amount **required** `integer`: A positive integer in the smallest currency unit (that is, 100 cents for $1.00, or 1 for ¥1, Japanese Yen being a zero-decimal currency) representing the total amount for the line item.
  * currency **required** `string`: Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
  * description **required** `string`: An arbitrary string attached to the object. Often useful for displaying to users.
  * id **required** `string`: Unique identifier for the object.

### sigma_scheduled_query_run_error
* SigmaScheduledQueryRunError `object`
  * message **required** `string`: Information about the run failure.

### sku
* Sku `object`: Stores representations of [stock keeping units](http://en.wikipedia.org/wiki/Stock_keeping_unit).
  * active **required** `boolean`: Whether the SKU is available for purchase.
  * attributes **required** `object`: A dictionary of attributes and values for the attributes defined by the product. If, for example, a product's attributes are `["size", "gender"]`, a valid SKU has the following dictionary of attributes: `{"size": "Medium", "gender": "Unisex"}`.
  * created **required** `integer`: Time at which the object was created. Measured in seconds since the Unix epoch.
  * currency **required** `string`: Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
  * id **required** `string`: Unique identifier for the object.
  * image `string`: The URL of an image for this SKU, meant to be displayable to the customer.
  * inventory **required** [inventory](#inventory)
  * livemode **required** `boolean`: Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
  * metadata **required** `object`: Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
  * object **required** `string` (values: sku): String representing the object's type. Objects of the same type share the same value.
  * price **required** `integer`: The cost of the item as a positive integer in the smallest currency unit (that is, 100 cents to charge $1.00, or 100 to charge ¥100, Japanese Yen being a zero-decimal currency).
  * updated **required** `integer`: Time at which the object was last updated. Measured in seconds since the Unix epoch.

### source
* Source `object`: `Source` objects allow you to accept a variety of payment methods. They
  * ach_credit_transfer [source_type_ach_credit_transfer](#source_type_ach_credit_transfer)
  * ach_debit [source_type_ach_debit](#source_type_ach_debit)
  * alipay [source_type_alipay](#source_type_alipay)
  * amount `integer`: A positive integer in the smallest currency unit (that is, 100 cents for $1.00, or 1 for ¥1, Japanese Yen being a zero-decimal currency) representing the total amount associated with the source. This is the amount for which the source will be chargeable once ready. Required for `single_use` sources.
  * au_becs_debit [source_type_au_becs_debit](#source_type_au_becs_debit)
  * bancontact [source_type_bancontact](#source_type_bancontact)
  * card [source_type_card](#source_type_card)
  * card_present [source_type_card_present](#source_type_card_present)
  * client_secret **required** `string`: The client secret of the source. Used for client-side retrieval using a publishable key.
  * code_verification [source_code_verification_flow](#source_code_verification_flow)
  * created **required** `integer`: Time at which the object was created. Measured in seconds since the Unix epoch.
  * currency `string`: Three-letter [ISO code for the currency](https://stripe.com/docs/currencies) associated with the source. This is the currency for which the source will be chargeable once ready. Required for `single_use` sources.
  * customer `string`: The ID of the customer to which this source is attached. This will not be present when the source has not been attached to a customer.
  * eps [source_type_eps](#source_type_eps)
  * flow **required** `string`: The authentication `flow` of the source. `flow` is one of `redirect`, `receiver`, `code_verification`, `none`.
  * giropay [source_type_giropay](#source_type_giropay)
  * id **required** `string`: Unique identifier for the object.
  * ideal [source_type_ideal](#source_type_ideal)
  * klarna [source_type_klarna](#source_type_klarna)
  * livemode **required** `boolean`: Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
  * metadata `object`: Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
  * multibanco [source_type_multibanco](#source_type_multibanco)
  * object **required** `string` (values: source): String representing the object's type. Objects of the same type share the same value.
  * p24 [source_type_p24](#source_type_p24)
  * receiver [source_receiver_flow](#source_receiver_flow)
  * redirect [source_redirect_flow](#source_redirect_flow)
  * sepa_debit [source_type_sepa_debit](#source_type_sepa_debit)
  * sofort [source_type_sofort](#source_type_sofort)
  * source_order [source_order](#source_order)
  * statement_descriptor `string`: Extra information about a source. This will appear on your customer's statement every time you charge the source.
  * status **required** `string`: The status of the source, one of `canceled`, `chargeable`, `consumed`, `failed`, or `pending`. Only `chargeable` sources can be used to create a charge.
  * three_d_secure [source_type_three_d_secure](#source_type_three_d_secure)
  * type **required** `string` (values: ach_credit_transfer, ach_debit, alipay, au_becs_debit, bancontact, card, card_present, eps, giropay, ideal, klarna, multibanco, p24, sepa_debit, sofort, three_d_secure, wechat): The `type` of the source. The `type` is a payment method, one of `ach_credit_transfer`, `ach_debit`, `alipay`, `bancontact`, `card`, `card_present`, `eps`, `giropay`, `ideal`, `multibanco`, `klarna`, `p24`, `sepa_debit`, `sofort`, `three_d_secure`, or `wechat`. An additional hash is included on the source with a name matching this value. It contains additional information specific to the [payment method](https://stripe.com/docs/sources) used.
  * usage `string`: Either `reusable` or `single_use`. Whether this source should be reusable or not. Some source types may or may not be reusable by construction, while others may leave the option at creation. If an incompatible value is passed, an error will be returned.
  * wechat [source_type_wechat](#source_type_wechat)

### source_code_verification_flow
* SourceCodeVerificationFlow `object`
  * attempts_remaining **required** `integer`: The number of attempts remaining to authenticate the source object with a verification code.
  * status **required** `string`: The status of the code verification, either `pending` (awaiting verification, `attempts_remaining` should be greater than 0), `succeeded` (successful verification) or `failed` (failed verification, cannot be verified anymore as `attempts_remaining` should be 0).

### source_mandate_notification
* SourceMandateNotification `object`: Source mandate notifications should be created when a notification related to
  * acss_debit [source_mandate_notification_acss_debit_data](#source_mandate_notification_acss_debit_data)
  * amount `integer`: A positive integer in the smallest currency unit (that is, 100 cents for $1.00, or 1 for ¥1, Japanese Yen being a zero-decimal currency) representing the amount associated with the mandate notification. The amount is expressed in the currency of the underlying source. Required if the notification type is `debit_initiated`.
  * bacs_debit [source_mandate_notification_bacs_debit_data](#source_mandate_notification_bacs_debit_data)
  * created **required** `integer`: Time at which the object was created. Measured in seconds since the Unix epoch.
  * id **required** `string`: Unique identifier for the object.
  * livemode **required** `boolean`: Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
  * object **required** `string` (values: source_mandate_notification): String representing the object's type. Objects of the same type share the same value.
  * reason **required** `string`: The reason of the mandate notification. Valid reasons are `mandate_confirmed` or `debit_initiated`.
  * sepa_debit [source_mandate_notification_sepa_debit_data](#source_mandate_notification_sepa_debit_data)
  * source **required** [source](#source)
  * status **required** `string`: The status of the mandate notification. Valid statuses are `pending` or `submitted`.
  * type **required** `string`: The type of source this mandate notification is attached to. Should be the source type identifier code for the payment method, such as `three_d_secure`.

### source_mandate_notification_acss_debit_data
* SourceMandateNotificationAcssDebitData `object`
  * statement_descriptor `string`: The statement descriptor associate with the debit.

### source_mandate_notification_bacs_debit_data
* SourceMandateNotificationBacsDebitData `object`
  * last4 `string`: Last 4 digits of the account number associated with the debit.

### source_mandate_notification_sepa_debit_data
* SourceMandateNotificationSepaDebitData `object`
  * creditor_identifier `string`: SEPA creditor ID.
  * last4 `string`: Last 4 digits of the account number associated with the debit.
  * mandate_reference `string`: Mandate reference associated with the debit.

### source_order
* SourceOrder `object`
  * amount **required** `integer`: A positive integer in the smallest currency unit (that is, 100 cents for $1.00, or 1 for ¥1, Japanese Yen being a zero-decimal currency) representing the total amount for the order.
  * currency **required** `string`: Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
  * email `string`: The email address of the customer placing the order.
  * items `array`: List of items constituting the order.
    * items [source_order_item](#source_order_item)
  * shipping [shipping](#shipping)

### source_order_item
* SourceOrderItem `object`
  * amount `integer`: The amount (price) for this order item.
  * currency `string`: This currency of this order item. Required when `amount` is present.
  * description `string`: Human-readable description for this order item.
  * parent `string`: The ID of the associated object for this line item. Expandable if not null (e.g., expandable to a SKU).
  * quantity `integer`: The quantity of this order item. When type is `sku`, this is the number of instances of the SKU to be ordered.
  * type `string`: The type of this order item. Must be `sku`, `tax`, or `shipping`.

### source_owner
* SourceOwner `object`
  * email `string`: Owner's email address.
  * name `string`: Owner's full name.
  * phone `string`: Owner's phone number (including extension).
  * verified_email `string`: Verified owner's email address. Verified values are verified or provided by the payment method directly (and if supported) at the time of authorization or settlement. They cannot be set or mutated.
  * verified_name `string`: Verified owner's full name. Verified values are verified or provided by the payment method directly (and if supported) at the time of authorization or settlement. They cannot be set or mutated.
  * verified_phone `string`: Verified owner's phone number (including extension). Verified values are verified or provided by the payment method directly (and if supported) at the time of authorization or settlement. They cannot be set or mutated.

### source_receiver_flow
* SourceReceiverFlow `object`
  * address `string`: The address of the receiver source. This is the value that should be communicated to the customer to send their funds to.
  * amount_charged **required** `integer`: The total amount that was moved to your balance. This is almost always equal to the amount charged. In rare cases when customers deposit excess funds and we are unable to refund those, those funds get moved to your balance and show up in amount_charged as well. The amount charged is expressed in the source's currency.
  * amount_received **required** `integer`: The total amount received by the receiver source. `amount_received = amount_returned + amount_charged` should be true for consumed sources unless customers deposit excess funds. The amount received is expressed in the source's currency.
  * amount_returned **required** `integer`: The total amount that was returned to the customer. The amount returned is expressed in the source's currency.
  * refund_attributes_method **required** `string`: Type of refund attribute method, one of `email`, `manual`, or `none`.
  * refund_attributes_status **required** `string`: Type of refund attribute status, one of `missing`, `requested`, or `available`.

### source_redirect_flow
* SourceRedirectFlow `object`
  * failure_reason `string`: The failure reason for the redirect, either `user_abort` (the customer aborted or dropped out of the redirect flow), `declined` (the authentication failed or the transaction was declined), or `processing_error` (the redirect failed due to a technical error). Present only if the redirect status is `failed`.
  * return_url **required** `string`: The URL you provide to redirect the customer to after they authenticated their payment.
  * status **required** `string`: The status of the redirect, either `pending` (ready to be used by your customer to authenticate the transaction), `succeeded` (succesful authentication, cannot be reused) or `not_required` (redirect should not be used) or `failed` (failed authentication, cannot be reused).
  * url **required** `string`: The URL provided to you to redirect a customer to as part of a `redirect` authentication flow.

### source_transaction
* SourceTransaction `object`: Some payment methods have no required amount that a customer must send.
  * ach_credit_transfer [source_transaction_ach_credit_transfer_data](#source_transaction_ach_credit_transfer_data)
  * amount **required** `integer`: A positive integer in the smallest currency unit (that is, 100 cents for $1.00, or 1 for ¥1, Japanese Yen being a zero-decimal currency) representing the amount your customer has pushed to the receiver.
  * chf_credit_transfer [source_transaction_chf_credit_transfer_data](#source_transaction_chf_credit_transfer_data)
  * created **required** `integer`: Time at which the object was created. Measured in seconds since the Unix epoch.
  * currency **required** `string`: Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
  * gbp_credit_transfer [source_transaction_gbp_credit_transfer_data](#source_transaction_gbp_credit_transfer_data)
  * id **required** `string`: Unique identifier for the object.
  * livemode **required** `boolean`: Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
  * object **required** `string` (values: source_transaction): String representing the object's type. Objects of the same type share the same value.
  * paper_check [source_transaction_paper_check_data](#source_transaction_paper_check_data)
  * sepa_credit_transfer [source_transaction_sepa_credit_transfer_data](#source_transaction_sepa_credit_transfer_data)
  * source **required** `string`: The ID of the source this transaction is attached to.
  * status **required** `string`: The status of the transaction, one of `succeeded`, `pending`, or `failed`.
  * type **required** `string` (values: ach_credit_transfer, ach_debit, alipay, bancontact, card, card_present, eps, giropay, ideal, klarna, multibanco, p24, sepa_debit, sofort, three_d_secure, wechat): The type of source this transaction is attached to.

### source_transaction_ach_credit_transfer_data
* SourceTransactionAchCreditTransferData `object`
  * customer_data `string`: Customer data associated with the transfer.
  * fingerprint `string`: Bank account fingerprint associated with the transfer.
  * last4 `string`: Last 4 digits of the account number associated with the transfer.
  * routing_number `string`: Routing number associated with the transfer.

### source_transaction_chf_credit_transfer_data
* SourceTransactionChfCreditTransferData `object`
  * reference `string`: Reference associated with the transfer.
  * sender_address_country `string`: Sender's country address.
  * sender_address_line1 `string`: Sender's line 1 address.
  * sender_iban `string`: Sender's bank account IBAN.
  * sender_name `string`: Sender's name.

### source_transaction_gbp_credit_transfer_data
* SourceTransactionGbpCreditTransferData `object`
  * fingerprint `string`: Bank account fingerprint associated with the Stripe owned bank account receiving the transfer.
  * funding_method `string`: The credit transfer rails the sender used to push this transfer. The possible rails are: Faster Payments, BACS, CHAPS, and wire transfers. Currently only Faster Payments is supported.
  * last4 `string`: Last 4 digits of sender account number associated with the transfer.
  * reference `string`: Sender entered arbitrary information about the transfer.
  * sender_account_number `string`: Sender account number associated with the transfer.
  * sender_name `string`: Sender name associated with the transfer.
  * sender_sort_code `string`: Sender sort code associated with the transfer.

### source_transaction_paper_check_data
* SourceTransactionPaperCheckData `object`
  * available_at `string`: Time at which the deposited funds will be available for use. Measured in seconds since the Unix epoch.
  * invoices `string`: Comma-separated list of invoice IDs associated with the paper check.

### source_transaction_sepa_credit_transfer_data
* SourceTransactionSepaCreditTransferData `object`
  * reference `string`: Reference associated with the transfer.
  * sender_iban `string`: Sender's bank account IBAN.
  * sender_name `string`: Sender's name.

### source_type_ach_credit_transfer
* source_type_ach_credit_transfer `object`
  * account_number `string`
  * bank_name `string`
  * fingerprint `string`
  * refund_account_holder_name `string`
  * refund_account_holder_type `string`
  * refund_routing_number `string`
  * routing_number `string`
  * swift_code `string`

### source_type_ach_debit
* source_type_ach_debit `object`
  * bank_name `string`
  * country `string`
  * fingerprint `string`
  * last4 `string`
  * routing_number `string`
  * type `string`

### source_type_alipay
* source_type_alipay `object`
  * data_string `string`
  * native_url `string`
  * statement_descriptor `string`

### source_type_au_becs_debit
* source_type_au_becs_debit `object`
  * bsb_number `string`
  * fingerprint `string`
  * last4 `string`

### source_type_bancontact
* source_type_bancontact `object`
  * bank_code `string`
  * bank_name `string`
  * bic `string`
  * iban_last4 `string`
  * preferred_language `string`
  * statement_descriptor `string`

### source_type_card
* source_type_card `object`
  * address_line1_check `string`
  * address_zip_check `string`
  * brand `string`
  * country `string`
  * cvc_check `string`
  * dynamic_last4 `string`
  * exp_month `integer`
  * exp_year `integer`
  * fingerprint `string`
  * funding `string`
  * last4 `string`
  * name `string`
  * three_d_secure `string`
  * tokenization_method `string`

### source_type_card_present
* source_type_card_present `object`
  * application_cryptogram `string`
  * application_preferred_name `string`
  * authorization_code `string`
  * authorization_response_code `string`
  * brand `string`
  * country `string`
  * cvm_type `string`
  * data_type `string`
  * dedicated_file_name `string`
  * emv_auth_data `string`
  * evidence_customer_signature `string`
  * evidence_transaction_certificate `string`
  * exp_month `integer`
  * exp_year `integer`
  * fingerprint `string`
  * funding `string`
  * last4 `string`
  * pos_device_id `string`
  * pos_entry_mode `string`
  * read_method `string`
  * reader `string`
  * terminal_verification_results `string`
  * transaction_status_information `string`

### source_type_eps
* source_type_eps `object`
  * reference `string`
  * statement_descriptor `string`

### source_type_giropay
* source_type_giropay `object`
  * bank_code `string`
  * bank_name `string`
  * bic `string`
  * statement_descriptor `string`

### source_type_ideal
* source_type_ideal `object`
  * bank `string`
  * bic `string`
  * iban_last4 `string`
  * statement_descriptor `string`

### source_type_klarna
* source_type_klarna `object`
  * background_image_url `string`
  * client_token `string`
  * first_name `string`
  * last_name `string`
  * locale `string`
  * logo_url `string`
  * page_title `string`
  * pay_later_asset_urls_descriptive `string`
  * pay_later_asset_urls_standard `string`
  * pay_later_name `string`
  * pay_later_redirect_url `string`
  * pay_now_asset_urls_descriptive `string`
  * pay_now_asset_urls_standard `string`
  * pay_now_name `string`
  * pay_now_redirect_url `string`
  * pay_over_time_asset_urls_descriptive `string`
  * pay_over_time_asset_urls_standard `string`
  * pay_over_time_name `string`
  * pay_over_time_redirect_url `string`
  * payment_method_categories `string`
  * purchase_country `string`
  * purchase_type `string`
  * redirect_url `string`
  * shipping_delay `integer`
  * shipping_first_name `string`
  * shipping_last_name `string`

### source_type_multibanco
* source_type_multibanco `object`
  * entity `string`
  * reference `string`
  * refund_account_holder_address_city `string`
  * refund_account_holder_address_country `string`
  * refund_account_holder_address_line1 `string`
  * refund_account_holder_address_line2 `string`
  * refund_account_holder_address_postal_code `string`
  * refund_account_holder_address_state `string`
  * refund_account_holder_name `string`
  * refund_iban `string`

### source_type_p24
* source_type_p24 `object`
  * reference `string`

### source_type_sepa_debit
* source_type_sepa_debit `object`
  * bank_code `string`
  * branch_code `string`
  * country `string`
  * fingerprint `string`
  * last4 `string`
  * mandate_reference `string`
  * mandate_url `string`

### source_type_sofort
* source_type_sofort `object`
  * bank_code `string`
  * bank_name `string`
  * bic `string`
  * country `string`
  * iban_last4 `string`
  * preferred_language `string`
  * statement_descriptor `string`

### source_type_three_d_secure
* source_type_three_d_secure `object`
  * address_line1_check `string`
  * address_zip_check `string`
  * authenticated `boolean`
  * brand `string`
  * card `string`
  * country `string`
  * customer `string`
  * cvc_check `string`
  * dynamic_last4 `string`
  * exp_month `integer`
  * exp_year `integer`
  * fingerprint `string`
  * funding `string`
  * last4 `string`
  * name `string`
  * three_d_secure `string`
  * tokenization_method `string`

### source_type_wechat
* source_type_wechat `object`
  * prepay_id `string`
  * qr_code_url `string`
  * statement_descriptor `string`

### status_transitions
* StatusTransitions `object`
  * canceled `integer`: The time that the order was canceled.
  * fulfiled `integer`: The time that the order was fulfilled.
  * paid `integer`: The time that the order was paid.
  * returned `integer`: The time that the order was returned.

### subscription
* Subscription `object`: Subscriptions allow you to charge a customer on a recurring basis.
  * application_fee_percent `number`: A non-negative decimal between 0 and 100, with at most two decimal places. This represents the percentage of the subscription invoice subtotal that will be transferred to the application owner's Stripe account.
  * billing_cycle_anchor **required** `integer`: Determines the date of the first full invoice, and, for plans with `month` or `year` intervals, the day of the month for subsequent invoices.
  * cancel_at `integer`: A date in the future at which the subscription will automatically get canceled
  * cancel_at_period_end **required** `boolean`: If the subscription has been canceled with the `at_period_end` flag set to `true`, `cancel_at_period_end` on the subscription will be true. You can use this attribute to determine whether a subscription that has a status of active is scheduled to be canceled at the end of the current period.
  * canceled_at `integer`: If the subscription has been canceled, the date of that cancellation. If the subscription was canceled with `cancel_at_period_end`, `canceled_at` will reflect the time of the most recent update request, not the end of the subscription period when the subscription is automatically moved to a canceled state.
  * collection_method `string` (values: charge_automatically, send_invoice): Either `charge_automatically`, or `send_invoice`. When charging automatically, Stripe will attempt to pay this subscription at the end of the cycle using the default source attached to the customer. When sending an invoice, Stripe will email your customer an invoice with payment instructions.
  * created **required** `integer`: Time at which the object was created. Measured in seconds since the Unix epoch.
  * current_period_end **required** `integer`: End of the current period that the subscription has been invoiced for. At the end of this period, a new invoice will be created.
  * current_period_start **required** `integer`: Start of the current period that the subscription has been invoiced for.
  * days_until_due `integer`: Number of days a customer has to pay invoices generated by this subscription. This value will be `null` for subscriptions where `collection_method=charge_automatically`.
  * default_tax_rates `array`: The tax rates that will apply to any subscription item that does not have `tax_rates` set. Invoices created will have their `default_tax_rates` populated from the subscription.
    * items [tax_rate](#tax_rate)
  * ended_at `integer`: If the subscription has ended, the date the subscription ended.
  * id **required** `string`: Unique identifier for the object.
  * items **required** `object`: List of subscription items, each with an attached price.
    * data **required** `array`: Details about each object.
      * items [subscription_item](#subscription_item)
    * has_more **required** `boolean`: True if this list has another page of items after this one that can be fetched.
    * object **required** `string` (values: list): String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
    * url **required** `string`: The URL where this list can be accessed.
  * livemode **required** `boolean`: Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
  * metadata **required** `object`: Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
  * next_pending_invoice_item_invoice `integer`: Specifies the approximate timestamp on which any pending invoice items will be billed according to the schedule provided at `pending_invoice_item_interval`.
  * object **required** `string` (values: subscription): String representing the object's type. Objects of the same type share the same value.
  * start_date **required** `integer`: Date when the subscription was first created. The date might differ from the `created` date due to backdating.
  * status **required** `string` (values: active, canceled, incomplete, incomplete_expired, past_due, trialing, unpaid): Possible values are `incomplete`, `incomplete_expired`, `trialing`, `active`, `past_due`, `canceled`, or `unpaid`. 
  * trial_end `integer`: If the subscription has a trial, the end of that trial.
  * trial_start `integer`: If the subscription has a trial, the beginning of that trial.

### subscription_billing_thresholds
* SubscriptionBillingThresholds `object`
  * amount_gte `integer`: Monetary threshold that triggers the subscription to create an invoice
  * reset_billing_cycle_anchor `boolean`: Indicates if the `billing_cycle_anchor` should be reset when a threshold is reached. If true, `billing_cycle_anchor` will be updated to the date/time the threshold was last reached; otherwise, the value will remain unchanged. This value may not be `true` if the subscription contains items with plans that have `aggregate_usage=last_ever`.

### subscription_item
* SubscriptionItem `object`: Subscription items allow you to create customer subscriptions with more than
  * created **required** `integer`: Time at which the object was created. Measured in seconds since the Unix epoch.
  * id **required** `string`: Unique identifier for the object.
  * metadata **required** `object`: Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
  * object **required** `string` (values: subscription_item): String representing the object's type. Objects of the same type share the same value.
  * price **required** [price](#price)
  * quantity `integer`: The [quantity](https://stripe.com/docs/subscriptions/quantities) of the plan to which the customer should be subscribed.
  * subscription **required** `string`: The `subscription` this `subscription_item` belongs to.
  * tax_rates `array`: The tax rates which apply to this `subscription_item`. When set, the `default_tax_rates` on the subscription do not apply to this `subscription_item`.
    * items [tax_rate](#tax_rate)

### subscription_item_billing_thresholds
* SubscriptionItemBillingThresholds `object`
  * usage_gte `integer`: Usage threshold that triggers the subscription to create an invoice

### subscription_pending_invoice_item_interval
* SubscriptionPendingInvoiceItemInterval `object`
  * interval **required** `string` (values: day, month, week, year): Specifies invoicing frequency. Either `day`, `week`, `month` or `year`.
  * interval_count **required** `integer`: The number of intervals between invoices. For example, `interval=month` and `interval_count=3` bills every 3 months. Maximum of one year interval allowed (1 year, 12 months, or 52 weeks).

### subscription_schedule
* SubscriptionSchedule `object`: A subscription schedule allows you to create and manage the lifecycle of a subscription by predefining expected changes.
  * canceled_at `integer`: Time at which the subscription schedule was canceled. Measured in seconds since the Unix epoch.
  * completed_at `integer`: Time at which the subscription schedule was completed. Measured in seconds since the Unix epoch.
  * created **required** `integer`: Time at which the object was created. Measured in seconds since the Unix epoch.
  * default_settings **required** [subscription_schedules_resource_default_settings](#subscription_schedules_resource_default_settings)
  * end_behavior **required** `string` (values: cancel, none, release, renew): Behavior of the subscription schedule and underlying subscription when it ends. Possible values are `release` and `cancel`.
  * id **required** `string`: Unique identifier for the object.
  * livemode **required** `boolean`: Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
  * metadata `object`: Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
  * object **required** `string` (values: subscription_schedule): String representing the object's type. Objects of the same type share the same value.
  * phases **required** `array`: Configuration for the subscription schedule's phases.
    * items [subscription_schedule_phase_configuration](#subscription_schedule_phase_configuration)
  * released_at `integer`: Time at which the subscription schedule was released. Measured in seconds since the Unix epoch.
  * released_subscription `string`: ID of the subscription once managed by the subscription schedule (if it is released).
  * status **required** `string` (values: active, canceled, completed, not_started, released): The present status of the subscription schedule. Possible values are `not_started`, `active`, `completed`, `released`, and `canceled`. You can read more about the different states in our [behavior guide](https://stripe.com/docs/billing/subscriptions/subscription-schedules).

### subscription_schedule_add_invoice_item
* SubscriptionScheduleAddInvoiceItem `object`: An Add Invoice Item describes the prices and quantities that will be added as pending invoice items when entering a phase.
  * quantity `integer`: The quantity of the invoice item.
  * tax_rates `array`: The tax rates which apply to the item. When set, the `default_tax_rates` do not apply to this item.
    * items [tax_rate](#tax_rate)

### subscription_schedule_configuration_item
* SubscriptionScheduleConfigurationItem `object`: A phase item describes the price and quantity of a phase.
  * quantity `integer`: Quantity of the plan to which the customer should be subscribed.
  * tax_rates `array`: The tax rates which apply to this `phase_item`. When set, the `default_tax_rates` on the phase do not apply to this `phase_item`.
    * items [tax_rate](#tax_rate)

### subscription_schedule_current_phase
* SubscriptionScheduleCurrentPhase `object`
  * end_date **required** `integer`: The end of this phase of the subscription schedule.
  * start_date **required** `integer`: The start of this phase of the subscription schedule.

### subscription_schedule_phase_configuration
* SubscriptionSchedulePhaseConfiguration `object`: A phase describes the plans, coupon, and trialing status of a subscription for a predefined time period.
  * add_invoice_items **required** `array`: A list of prices and quantities that will generate invoice items appended to the first invoice for this phase.
    * items [subscription_schedule_add_invoice_item](#subscription_schedule_add_invoice_item)
  * application_fee_percent `number`: A non-negative decimal between 0 and 100, with at most two decimal places. This represents the percentage of the subscription invoice subtotal that will be transferred to the application owner's Stripe account during this phase of the schedule.
  * billing_cycle_anchor `string` (values: automatic, phase_start): Possible values are `phase_start` or `automatic`. If `phase_start` then billing cycle anchor of the subscription is set to the start of the phase when entering the phase. If `automatic` then the billing cycle anchor is automatically modified as needed when entering the phase. For more information, see the billing cycle [documentation](https://stripe.com/docs/billing/subscriptions/billing-cycle).
  * collection_method `string` (values: charge_automatically, send_invoice): Either `charge_automatically`, or `send_invoice`. When charging automatically, Stripe will attempt to pay the underlying subscription at the end of each billing cycle using the default source attached to the customer. When sending an invoice, Stripe will email your customer an invoice with payment instructions.
  * default_tax_rates `array`: The default tax rates to apply to the subscription during this phase of the subscription schedule.
    * items [tax_rate](#tax_rate)
  * end_date **required** `integer`: The end of this phase of the subscription schedule.
  * items **required** `array`: Subscription items to configure the subscription to during this phase of the subscription schedule.
    * items [subscription_schedule_configuration_item](#subscription_schedule_configuration_item)
  * proration_behavior **required** `string` (values: always_invoice, create_prorations, none): If the subscription schedule will prorate when transitioning to this phase. Possible values are `create_prorations` and `none`.
  * start_date **required** `integer`: The start of this phase of the subscription schedule.
  * trial_end `integer`: When the trial ends within the phase.

### subscription_schedules_resource_default_settings
* SubscriptionSchedulesResourceDefaultSettings `object`
  * application_fee_percent `number`: A non-negative decimal between 0 and 100, with at most two decimal places. This represents the percentage of the subscription invoice subtotal that will be transferred to the application owner's Stripe account during this phase of the schedule.
  * billing_cycle_anchor **required** `string` (values: automatic, phase_start): Possible values are `phase_start` or `automatic`. If `phase_start` then billing cycle anchor of the subscription is set to the start of the phase when entering the phase. If `automatic` then the billing cycle anchor is automatically modified as needed when entering the phase. For more information, see the billing cycle [documentation](https://stripe.com/docs/billing/subscriptions/billing-cycle).
  * collection_method `string` (values: charge_automatically, send_invoice): Either `charge_automatically`, or `send_invoice`. When charging automatically, Stripe will attempt to pay the underlying subscription at the end of each billing cycle using the default source attached to the customer. When sending an invoice, Stripe will email your customer an invoice with payment instructions.

### subscription_transfer_data
* SubscriptionTransferData `object`
  * amount_percent `number`: A non-negative decimal between 0 and 100, with at most two decimal places. This represents the percentage of the subscription invoice subtotal that will be transferred to the destination account. By default, the entire amount is transferred to the destination.

### subscriptions_resource_pause_collection
* SubscriptionsResourcePauseCollection `object`: The Pause Collection settings determine how we will pause collection for this subscription and for how long the subscription
  * behavior **required** `string` (values: keep_as_draft, mark_uncollectible, void): The payment collection behavior for this subscription while paused. One of `keep_as_draft`, `mark_uncollectible`, or `void`.
  * resumes_at `integer`: The time after which the subscription will resume collecting payments.

### subscriptions_resource_pending_update
* SubscriptionsResourcePendingUpdate `object`: Pending Updates store the changes pending from a previous update that will be applied
  * billing_cycle_anchor `integer`: If the update is applied, determines the date of the first full invoice, and, for plans with `month` or `year` intervals, the day of the month for subsequent invoices.
  * expires_at **required** `integer`: The point after which the changes reflected by this update will be discarded and no longer applied.
  * subscription_items `array`: List of subscription items, each with an attached plan, that will be set if the update is applied.
    * items [subscription_item](#subscription_item)
  * trial_end `integer`: Unix timestamp representing the end of the trial period the customer will get before being charged for the first time, if the update is applied.
  * trial_from_plan `boolean`: Indicates if a plan's `trial_period_days` should be applied to the subscription. Setting `trial_end` per subscription is preferred, and this defaults to `false`. Setting this flag to `true` together with `trial_end` is not allowed.

### tax_deducted_at_source
* TaxDeductedAtSource `object`
  * id **required** `string`: Unique identifier for the object.
  * object **required** `string` (values: tax_deducted_at_source): String representing the object's type. Objects of the same type share the same value.
  * period_end **required** `integer`: The end of the invoicing period. This TDS applies to Stripe fees collected during this invoicing period.
  * period_start **required** `integer`: The start of the invoicing period. This TDS applies to Stripe fees collected during this invoicing period.
  * tax_deduction_account_number **required** `string`: The TAN that was supplied to Stripe when TDS was assessed

### tax_id
* tax_id `object`: You can add one or multiple tax IDs to a [customer](https://stripe.com/docs/api/customers).
  * country `string`: Two-letter ISO code representing the country of the tax ID.
  * created **required** `integer`: Time at which the object was created. Measured in seconds since the Unix epoch.
  * id **required** `string`: Unique identifier for the object.
  * livemode **required** `boolean`: Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
  * object **required** `string` (values: tax_id): String representing the object's type. Objects of the same type share the same value.
  * type **required** `string` (values: ae_trn, au_abn, br_cnpj, br_cpf, ca_bn, ca_qst, ch_vat, cl_tin, es_cif, eu_vat, hk_br, id_npwp, in_gst, jp_cn, jp_rn, kr_brn, li_uid, mx_rfc, my_frp, my_itn, my_sst, no_vat, nz_gst, ru_inn, ru_kpp, sa_vat, sg_gst, sg_uen, th_vat, tw_vat, unknown, us_ein, za_vat): Type of the tax ID, one of `ae_trn`, `au_abn`, `br_cnpj`, `br_cpf`, `ca_bn`, `ca_qst`, `ch_vat`, `cl_tin`, `es_cif`, `eu_vat`, `hk_br`, `id_npwp`, `in_gst`, `jp_cn`, `jp_rn`, `kr_brn`, `li_uid`, `mx_rfc`, `my_frp`, `my_itn`, `my_sst`, `no_vat`, `nz_gst`, `ru_inn`, `ru_kpp`, `sa_vat`, `sg_gst`, `sg_uen`, `th_vat`, `tw_vat`, `us_ein`, or `za_vat`. Note that some legacy tax IDs have type `unknown`
  * value **required** `string`: Value of the tax ID.

### tax_id_verification
* tax_id_verification `object`
  * status **required** `string` (values: pending, unavailable, unverified, verified): Verification status, one of `pending`, `verified`, `unverified`, or `unavailable`.
  * verified_address `string`: Verified address.
  * verified_name `string`: Verified name.

### tax_rate
* TaxRate `object`: Tax rates can be applied to [invoices](https://stripe.com/docs/billing/invoices/tax-rates), [subscriptions](https://stripe.com/docs/billing/subscriptions/taxes) and [Checkout Sessions](https://stripe.com/docs/payments/checkout/set-up-a-subscription#tax-rates) to collect tax.
  * active **required** `boolean`: Defaults to `true`. When set to `false`, this tax rate cannot be used with new applications or Checkout Sessions, but will still work for subscriptions and invoices that already have it set.
  * created **required** `integer`: Time at which the object was created. Measured in seconds since the Unix epoch.
  * description `string`: An arbitrary string attached to the tax rate for your internal use only. It will not be visible to your customers.
  * display_name **required** `string`: The display name of the tax rates as it will appear to your customer on their receipt email, PDF, and the hosted invoice page.
  * id **required** `string`: Unique identifier for the object.
  * inclusive **required** `boolean`: This specifies if the tax rate is inclusive or exclusive.
  * jurisdiction `string`: The jurisdiction for the tax rate. You can use this label field for tax reporting purposes. It also appears on your customer’s invoice.
  * livemode **required** `boolean`: Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
  * metadata `object`: Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
  * object **required** `string` (values: tax_rate): String representing the object's type. Objects of the same type share the same value.
  * percentage **required** `number`: This represents the tax rate percent out of 100.

### terminal.connection_token
* TerminalConnectionToken `object`: A Connection Token is used by the Stripe Terminal SDK to connect to a reader.
  * location `string`: The id of the location that this connection token is scoped to.
  * object **required** `string` (values: terminal.connection_token): String representing the object's type. Objects of the same type share the same value.
  * secret **required** `string`: Your application should pass this token to the Stripe Terminal SDK.

### terminal.location
* TerminalLocationLocation `object`: A Location represents a grouping of readers.
  * address **required** [address](#address)
  * display_name **required** `string`: The display name of the location.
  * id **required** `string`: Unique identifier for the object.
  * livemode **required** `boolean`: Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
  * metadata **required** `object`: Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
  * object **required** `string` (values: terminal.location): String representing the object's type. Objects of the same type share the same value.

### terminal.reader
* TerminalReaderReader `object`: A Reader represents a physical device for accepting payment details.
  * device_sw_version `string`: The current software version of the reader.
  * device_type **required** `string` (values: bbpos_chipper2x, verifone_P400): Type of reader, one of `bbpos_chipper2x` or `verifone_P400`.
  * id **required** `string`: Unique identifier for the object.
  * ip_address `string`: The local IP address of the reader.
  * label **required** `string`: Custom label given to the reader for easier identification.
  * livemode **required** `boolean`: Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
  * location `string`: The location identifier of the reader.
  * metadata **required** `object`: Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
  * object **required** `string` (values: terminal.reader): String representing the object's type. Objects of the same type share the same value.
  * serial_number **required** `string`: Serial number of the reader.
  * status `string`: The networking status of the reader.

### three_d_secure
* ThreeDSecure `object`: Cardholder authentication via 3D Secure is initiated by creating a `3D Secure`
  * amount **required** `integer`: Amount of the charge that you will create when authentication completes.
  * authenticated **required** `boolean`: True if the cardholder went through the authentication flow and their bank indicated that authentication succeeded.
  * card **required** [card](#card)
  * created **required** `integer`: Time at which the object was created. Measured in seconds since the Unix epoch.
  * currency **required** `string`: Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
  * id **required** `string`: Unique identifier for the object.
  * livemode **required** `boolean`: Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
  * object **required** `string` (values: three_d_secure): String representing the object's type. Objects of the same type share the same value.
  * redirect_url `string`: If present, this is the URL that you should send the cardholder to for authentication. If you are going to use Stripe.js to display the authentication page in an iframe, you should use the value "_callback".
  * status **required** `string`: Possible values are `redirect_pending`, `succeeded`, or `failed`. When the cardholder can be authenticated, the object starts with status `redirect_pending`. When liability will be shifted to the cardholder's bank (either because the cardholder was successfully authenticated, or because the bank has not implemented 3D Secure, the object wlil be in status `succeeded`. `failed` indicates that authentication was attempted unsuccessfully.

### three_d_secure_details
* three_d_secure_details `object`
  * authentication_flow `string` (values: challenge, frictionless): For authenticated transactions: how the customer was authenticated by
  * result **required** `string` (values: attempt_acknowledged, authenticated, failed, not_supported, processing_error): Indicates the outcome of 3D Secure authentication.
  * result_reason `string` (values: abandoned, bypassed, canceled, card_not_enrolled, network_not_supported, protocol_error, rejected): Additional information about why 3D Secure succeeded or failed based
  * version **required** `string` (values: 1.0.2, 2.1.0, 2.2.0): The version of 3D Secure that was used.

### three_d_secure_usage
* three_d_secure_usage `object`
  * supported **required** `boolean`: Whether 3D Secure is supported on this card.

### token
* Token `object`: Tokenization is the process Stripe uses to collect sensitive card or bank
  * bank_account [bank_account](#bank_account)
  * card [card](#card)
  * client_ip `string`: IP address of the client that generated the token.
  * created **required** `integer`: Time at which the object was created. Measured in seconds since the Unix epoch.
  * id **required** `string`: Unique identifier for the object.
  * livemode **required** `boolean`: Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
  * object **required** `string` (values: token): String representing the object's type. Objects of the same type share the same value.
  * type **required** `string`: Type of the token: `account`, `bank_account`, `card`, or `pii`.
  * used **required** `boolean`: Whether this token has already been used (tokens can be used only once).

### topup
* Topup `object`: To top up your Stripe balance, you create a top-up object. You can retrieve
  * amount **required** `integer`: Amount transferred.
  * created **required** `integer`: Time at which the object was created. Measured in seconds since the Unix epoch.
  * currency **required** `string`: Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
  * description `string`: An arbitrary string attached to the object. Often useful for displaying to users.
  * expected_availability_date `integer`: Date the funds are expected to arrive in your Stripe account for payouts. This factors in delays like weekends or bank holidays. May not be specified depending on status of top-up.
  * failure_code `string`: Error code explaining reason for top-up failure if available (see [the errors section](https://stripe.com/docs/api#errors) for a list of codes).
  * failure_message `string`: Message to user further explaining reason for top-up failure if available.
  * id **required** `string`: Unique identifier for the object.
  * livemode **required** `boolean`: Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
  * metadata **required** `object`: Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
  * object **required** `string` (values: topup): String representing the object's type. Objects of the same type share the same value.
  * source **required** [source](#source)
  * statement_descriptor `string`: Extra information about a top-up. This will appear on your source's bank statement. It must contain at least one letter.
  * status **required** `string` (values: canceled, failed, pending, reversed, succeeded): The status of the top-up is either `canceled`, `failed`, `pending`, `reversed`, or `succeeded`.
  * transfer_group `string`: A string that identifies this top-up as part of a group.

### transfer
* Transfer `object`: A `Transfer` object is created when you move funds between Stripe accounts as
  * amount **required** `integer`: Amount in %s to be transferred.
  * amount_reversed **required** `integer`: Amount in %s reversed (can be less than the amount attribute on the transfer if a partial reversal was issued).
  * created **required** `integer`: Time that this record of the transfer was first created.
  * currency **required** `string`: Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
  * description `string`: An arbitrary string attached to the object. Often useful for displaying to users.
  * id **required** `string`: Unique identifier for the object.
  * livemode **required** `boolean`: Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
  * metadata **required** `object`: Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
  * object **required** `string` (values: transfer): String representing the object's type. Objects of the same type share the same value.
  * reversals **required** `object`: A list of reversals that have been applied to the transfer.
    * data **required** `array`: Details about each object.
      * items [transfer_reversal](#transfer_reversal)
    * has_more **required** `boolean`: True if this list has another page of items after this one that can be fetched.
    * object **required** `string` (values: list): String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
    * url **required** `string`: The URL where this list can be accessed.
  * reversed **required** `boolean`: Whether the transfer has been fully reversed. If the transfer is only partially reversed, this attribute will still be false.
  * source_type `string`: The source balance this transfer came from. One of `card`, `fpx`, or `bank_account`.
  * transfer_group `string`: A string that identifies this transaction as part of a group. See the [Connect documentation](https://stripe.com/docs/connect/charges-transfers#transfer-options) for details.

### transfer_data
* transfer_data `object`
  * amount `integer`: Amount intended to be collected by this PaymentIntent. A positive integer representing how much to charge in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal) (e.g., 100 cents to charge $1.00 or 100 to charge ¥100, a zero-decimal currency). The minimum amount is $0.50 US or [equivalent in charge currency](https://stripe.com/docs/currencies#minimum-and-maximum-charge-amounts). The amount value supports up to eight digits (e.g., a value of 99999999 for a USD charge of $999,999.99).

### transfer_reversal
* TransferReversal `object`: [Stripe Connect](https://stripe.com/docs/connect) platforms can reverse transfers made to a
  * amount **required** `integer`: Amount, in %s.
  * created **required** `integer`: Time at which the object was created. Measured in seconds since the Unix epoch.
  * currency **required** `string`: Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
  * id **required** `string`: Unique identifier for the object.
  * metadata `object`: Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
  * object **required** `string` (values: transfer_reversal): String representing the object's type. Objects of the same type share the same value.

### transfer_schedule
* TransferSchedule `object`
  * delay_days **required** `integer`: The number of days charges for the account will be held before being paid out.
  * interval **required** `string`: How frequently funds will be paid out. One of `manual` (payouts only created via API call), `daily`, `weekly`, or `monthly`.
  * monthly_anchor `integer`: The day of the month funds will be paid out. Only shown if `interval` is monthly. Payouts scheduled between the 29th and 31st of the month are sent on the last day of shorter months.
  * weekly_anchor `string`: The day of the week funds will be paid out, of the style 'monday', 'tuesday', etc. Only shown if `interval` is weekly.

### transform_quantity
* TransformQuantity `object`
  * divide_by **required** `integer`: Divide usage by this number.
  * round **required** `string` (values: down, up): After division, either round the result `up` or `down`.

### transform_usage
* TransformUsage `object`
  * divide_by **required** `integer`: Divide usage by this number.
  * round **required** `string` (values: down, up): After division, either round the result `up` or `down`.

### usage_record
* UsageRecord `object`: Usage records allow you to report customer usage and metrics to Stripe for
  * id **required** `string`: Unique identifier for the object.
  * livemode **required** `boolean`: Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
  * object **required** `string` (values: usage_record): String representing the object's type. Objects of the same type share the same value.
  * quantity **required** `integer`: The usage quantity for the specified date.
  * subscription_item **required** `string`: The ID of the subscription item this usage record contains data for.
  * timestamp **required** `integer`: The timestamp when this usage occurred.

### usage_record_summary
* UsageRecordSummary `object`
  * id **required** `string`: Unique identifier for the object.
  * invoice `string`: The invoice in which this usage period has been billed for.
  * livemode **required** `boolean`: Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
  * object **required** `string` (values: usage_record_summary): String representing the object's type. Objects of the same type share the same value.
  * period **required** [period](#period)
  * subscription_item **required** `string`: The ID of the subscription item this summary is describing.
  * total_usage **required** `integer`: The total usage within this usage period.

### webhook_endpoint
* NotificationWebhookEndpoint `object`: You can configure [webhook endpoints](https://stripe.com/docs/webhooks/) via the API to be
  * api_version `string`: The API version events are rendered as for this webhook endpoint.
  * application `string`: The ID of the associated Connect application.
  * created **required** `integer`: Time at which the object was created. Measured in seconds since the Unix epoch.
  * description `string`: An optional description of what the webhook is used for.
  * enabled_events **required** `array`: The list of events to enable for this endpoint. `['*']` indicates that all events are enabled, except those that require explicit selection.
    * items `string`
  * id **required** `string`: Unique identifier for the object.
  * livemode **required** `boolean`: Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
  * metadata **required** `object`: Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
  * object **required** `string` (values: webhook_endpoint): String representing the object's type. Objects of the same type share the same value.
  * secret `string`: The endpoint's secret, used to generate [webhook signatures](https://stripe.com/docs/webhooks/signatures). Only returned at creation.
  * status **required** `string`: The status of the webhook. It can be `enabled` or `disabled`.
  * url **required** `string`: The URL of the webhook endpoint.


