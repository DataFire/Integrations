# @datafire/stripe

Client library for Stripe

## Installation and Usage
```bash
npm install --save @datafire/stripe
```
```js
let stripe = require('@datafire/stripe').create();

stripe.AllTransfers({}).then(data => {
  console.log(data);
});
```

## Description

The Stripe REST API. Please see https://stripe.com/docs/api for more details.

## Actions

### Create3DSecure



```js
stripe.Create3DSecure({
  "payload": {
    "amount": 0,
    "currency": "",
    "return_url": ""
  }
}, context)
```

#### Input
* input `object`
  * payload **required** `object`
    * amount **required** `integer`: Amount of the charge that you will create when authentication completes.
    * card `string`: The ID of a card token, or the ID of a card belonging to the given customer.
    * currency **required** `string`: Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
    * customer `string`
    * expand `array`: Specifies which fields in the response should be expanded.
      * items `string`
    * return_url **required** `string`: The URL that the cardholder's browser will be returned to when authentication completes.

#### Output
* output [three_d_secure](#three_d_secure)

### Retrieve3DSecure
<p>Retrieves a 3D Secure object.</p>


```js
stripe.Retrieve3DSecure({
  "three_d_secure": ""
}, context)
```

#### Input
* input `object`
  * expand `array`: Specifies which fields in the response should be expanded.
  * three_d_secure **required** `string`: The identifier of the 3D Secure object to be retrieved.

#### Output
* output [three_d_secure](#three_d_secure)

### v1.account.delete
<p>With <a href="/docs/connect">Connect</a>, you may delete Custom accounts you manage.</p><p>Custom accounts created using test-mode keys can be deleted at any time. Custom accounts created using live-mode keys may only be deleted once all balances are zero.</p><p>If you are looking to close your own account, use the <a href="https://dashboard.stripe.com/account/data">data tab in your account settings</a> instead.</p>


```js
stripe.v1.account.delete({}, context)
```

#### Input
* input `object`
  * payload `object`
    * account `string`: The identifier of the account to be deleted. If none is provided, will default to the account of the API key.

#### Output
* output [deleted_object](#deleted_object)

### v1.account.get
<p>Retrieves the details of the account.</p>


```js
stripe.v1.account.get({}, context)
```

#### Input
* input `object`
  * expand `array`: Specifies which fields in the response should be expanded.
  * account `string`: The identifier of the account to retrieve. If none is provided, the account associated with the API key is returned.

#### Output
* output [account](#account)

### v1.account.post
<p>Updates a connected <a href="/docs/connect/accounts">Express or Custom account</a> by setting the values of the parameters passed. Any parameters not provided are left unchanged. Most parameters can be changed only for Custom accounts. (These are marked <strong>Custom Only</strong> below.) Parameters marked <strong>Custom and Express</strong> are supported by both account types.</p><p>To update your own account, use the <a href="https://dashboard.stripe.com/account">Dashboard</a>. Refer to our <a href="/docs/connect/updating-accounts">Connect</a> documentation to learn more about updating accounts.</p>


```js
stripe.v1.account.post({}, context)
```

#### Input
* input `object`
  * payload `object`
    * account `string`
    * account_token `string`
    * business_logo `string`: (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) A logo for this account (at least 128px x 128px)
    * business_name `string`: The publicly sharable name for this account.
    * business_primary_color `string`: A CSS hex color value representing the primary branding color for this account.
    * business_url `string`: The URL that best shows the service or product provided by this account.
    * debit_negative_balances `boolean`: A Boolean indicating whether Stripe should try to reclaim negative balances from an attached bank account. For details, see [Understanding Connect Account Balances](/docs/connect/account-balances).
    * decline_charge_on `object`: Account-level settings to automatically decline certain types of charges, regardless of the card issuer's decision.
      * avs_failure `boolean`
      * cvc_failure `boolean`
    * default_currency `string`: Three-letter ISO currency code representing the default currency for the account. This must be a currency that [Stripe supports in the account's country](https://stripe.com/docs/payouts).
    * email `string`: Email address of the account representative. For Standard accounts, this is used to ask them to claim their Stripe account. For Custom accounts, this only makes the account easier to identify to platforms; Stripe does not email the account representative.
    * expand `array`: Specifies which fields in the response should be expanded.
      * items `string`
    * legal_entity `object`: Information about the legal entity itself, including information about the associated account representative.
      * additional_owners
        * items `object`
          * address `object`
            * city `string`
            * country `string`
            * line1 `string`
            * line2 `string`
            * postal_code `string`
            * state `string`
          * dob `object`
            * day **required** `integer`
            * month **required** `integer`
            * year **required** `integer`
          * first_name `string`
          * last_name `string`
          * maiden_name `string`
          * personal_id_number `string`
          * verification `object`
            * document `string`
      * address `object`
        * city `string`
        * country `string`
        * line1 `string`
        * line2 `string`
        * postal_code `string`
        * state `string`
      * address_kana `object`
        * city `string`
        * country `string`
        * line1 `string`
        * line2 `string`
        * postal_code `string`
        * state `string`
        * town `string`
      * address_kanji `object`
        * city `string`
        * country `string`
        * line1 `string`
        * line2 `string`
        * postal_code `string`
        * state `string`
        * town `string`
      * business_name `string`
      * business_name_kana `string`
      * business_name_kanji `string`
      * business_tax_id `string`
      * business_vat_id `string`
      * dob `object`
        * day **required** `integer`
        * month **required** `integer`
        * year **required** `integer`
      * first_name `string`
      * first_name_kana `string`
      * first_name_kanji `string`
      * gender `string`
      * last_name `string`
      * last_name_kana `string`
      * last_name_kanji `string`
      * maiden_name `string`
      * personal_address `object`
        * city `string`
        * country `string`
        * line1 `string`
        * line2 `string`
        * postal_code `string`
        * state `string`
      * personal_address_kana `object`
        * city `string`
        * country `string`
        * line1 `string`
        * line2 `string`
        * postal_code `string`
        * state `string`
        * town `string`
      * personal_address_kanji `object`
        * city `string`
        * country `string`
        * line1 `string`
        * line2 `string`
        * postal_code `string`
        * state `string`
        * town `string`
      * personal_id_number `string`
      * phone_number `string`
      * ssn_last_4 `string`
      * tax_id_registrar `string`
      * type `string`
      * verification `object`
        * document `string`
    * metadata `object`: A set of key-value pairs that you can attach to an `Account` object. This can be useful for storing additional information about the account in a structured format.
    * payout_schedule `object`: Details on when funds from charges are available, and when they are paid out to an external account. For details, see our [Setting Bank and Debit Card Payouts](/docs/connect/bank-transfers#payout-information) documentation.
      * delay_days `integer`
      * interval `string` (values: daily, four_times_monthly, manual, monthly, weekly)
      * monthly_anchor `integer`
      * weekly_anchor `string` (values: friday, monday, saturday, sunday, thursday, tuesday, wednesday)
    * payout_statement_descriptor `string`: The text that appears on the bank account statement for payouts. If not set, this defaults to the platform's bank descriptor as set in the Dashboard.
    * product_description `string`: Internal-only description of the product sold by, or service provided by, the business. Used by Stripe for risk and underwriting purposes.
    * statement_descriptor `string`: The default text that appears on credit card statements when a charge is made [directly on the account](/docs/connect/direct-charges)
    * support_email `string`: A publicly shareable support email address for the business.
    * support_phone `string`: A publicly shareable support phone number for the business.
    * support_url `string`: A publicly shareable URL that provides support for this account.
    * tos_acceptance `object`: Details on the account's acceptance of the [Stripe Services Agreement](/docs/connect/updating-accounts#tos-acceptance).
      * date **required** `integer`
      * ip **required** `string`
      * user_agent `string`

#### Output
* output [account](#account)

### v1.account.bank_accounts.post



```js
stripe.v1.account.bank_accounts.post({}, context)
```

#### Input
* input `object`
  * payload `object`
    * default_for_currency `boolean`: When set to true, or if this is the first external account added in this currency, this account becomes the default external account for its currency.
    * expand `array`: Specifies which fields in the response should be expanded.
      * items `string`
    * metadata `object`: A set of key-value pairs that you can attach to an external account object. It can be useful for storing additional information about the external account in a structured format.

#### Output
* output [external_account_source](#external_account_source)

### v1.account.bank_accounts.id.delete



```js
stripe.v1.account.bank_accounts.id.delete({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of the external account to be deleted.

#### Output
* output [deleted_bank_account](#deleted_bank_account)

### v1.account.bank_accounts.id.get



```js
stripe.v1.account.bank_accounts.id.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * expand `array`: Specifies which fields in the response should be expanded.
  * id **required** `string`

#### Output
* output [external_account_source](#external_account_source)

### v1.account.bank_accounts.id.post
<p>Updates the metadata of a bank account belonging to a <a href="/docs/connect/custom-accounts">Custom account</a>, and optionally sets it as the default for its currency. Other bank account details are not editable by design.</p><p>You can re-enable a disabled bank account by performing an update call without providing any arguments or changes.</p>


```js
stripe.v1.account.bank_accounts.id.post({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of the bank account to update
  * payload `object`
    * address_city `string`: City/District/Suburb/Town/Village.
    * address_country `string`: Billing address country, if provided when creating card.
    * address_line1 `string`: Address line 1 (Street address/PO Box/Company name).
    * address_line2 `string`: Address line 2 (Apartment/Suite/Unit/Building).
    * address_state `string`: State/County/Province/Region.
    * address_zip `string`: ZIP or postal code
    * default_for_currency `boolean`
    * exp_month `string`: Two digit number representing the card’s expiration month.
    * exp_year `string`: Four digit number representing the card’s expiration year.
    * expand `array`: Specifies which fields in the response should be expanded.
      * items `string`
    * metadata `object`
    * name `string`: Cardholder name.

#### Output
* output [external_account_source](#external_account_source)

### v1.account.external_accounts.get



```js
stripe.v1.account.external_accounts.get({}, context)
```

#### Input
* input `object`
  * expand `array`: Specifies which fields in the response should be expanded.
  * ending_before `string`: A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
  * limit `integer`: A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
  * starting_after `string`: A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.

#### Output
* output `object`
  * data **required** `array`: The list contains all external accounts that have been attached to the Stripe account. These may be bank accounts or cards.
    * items [bank_account](#bank_account)
  * has_more **required** `boolean`: True if this list has another page of items after this one that can be fetched.
  * object **required** `string` (values: list): String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
  * url **required** `string`: The URL where this list can be accessed.

### v1.account.external_accounts.post



```js
stripe.v1.account.external_accounts.post({}, context)
```

#### Input
* input `object`
  * payload `object`
    * default_for_currency `boolean`: When set to true, or if this is the first external account added in this currency, this account becomes the default external account for its currency.
    * expand `array`: Specifies which fields in the response should be expanded.
      * items `string`
    * metadata `object`: A set of key-value pairs that you can attach to an external account object. It can be useful for storing additional information about the external account in a structured format.

#### Output
* output [external_account_source](#external_account_source)

### v1.account.external_accounts.id.delete



```js
stripe.v1.account.external_accounts.id.delete({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of the external account to be deleted.

#### Output
* output [deleted_bank_account](#deleted_bank_account)

### v1.account.external_accounts.id.get



```js
stripe.v1.account.external_accounts.id.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * expand `array`: Specifies which fields in the response should be expanded.
  * id **required** `string`

#### Output
* output [external_account_source](#external_account_source)

### v1.account.external_accounts.id.post
<p>Updates the metadata of a bank account belonging to a <a href="/docs/connect/custom-accounts">Custom account</a>, and optionally sets it as the default for its currency. Other bank account details are not editable by design.</p><p>You can re-enable a disabled bank account by performing an update call without providing any arguments or changes.</p>


```js
stripe.v1.account.external_accounts.id.post({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of the bank account to update
  * payload `object`
    * address_city `string`: City/District/Suburb/Town/Village.
    * address_country `string`: Billing address country, if provided when creating card.
    * address_line1 `string`: Address line 1 (Street address/PO Box/Company name).
    * address_line2 `string`: Address line 2 (Apartment/Suite/Unit/Building).
    * address_state `string`: State/County/Province/Region.
    * address_zip `string`: ZIP or postal code
    * default_for_currency `boolean`
    * exp_month `string`: Two digit number representing the card’s expiration month.
    * exp_year `string`: Four digit number representing the card’s expiration year.
    * expand `array`: Specifies which fields in the response should be expanded.
      * items `string`
    * metadata `object`
    * name `string`: Cardholder name.

#### Output
* output [external_account_source](#external_account_source)

### v1.account.login_links.post
<p>Creates a single-use login link for an Express account to access their Stripe dashboard.</p><p><strong>You may only create login links for <a href="/docs/connect/express-accounts">Express accounts</a> connected to your platform</strong>.</p>


```js
stripe.v1.account.login_links.post({
  "payload": {
    "account": ""
  }
}, context)
```

#### Input
* input `object`
  * payload **required** `object`
    * account **required** `string`: The identifier of the account to create a login link for.
    * expand `array`: Specifies which fields in the response should be expanded.
      * items `string`
    * redirect_url `string`: Where to redirect the user after they log out of their dashboard.

#### Output
* output [login_link](#login_link)

### v1.account.logout.put
<p>Invalidates all sessions for a light account, for a platform to use during platform logout.</p><p><strong>You may only log out <a href="/docs/connect/express-accounts">Express accounts</a> connected to your platform</strong>.</p>


```js
stripe.v1.account.logout.put({
  "payload": {
    "account": ""
  }
}, context)
```

#### Input
* input `object`
  * payload **required** `object`
    * account **required** `string`: The identifier of the account to log out.
    * expand `array`: Specifies which fields in the response should be expanded.
      * items `string`

#### Output
* output [light_account_logout](#light_account_logout)

### AllAccount
<p>Returns a list of accounts connected to your platform via <a href="/docs/connect">Connect</a>. If you’re not a platform, the list is empty.</p>


```js
stripe.AllAccount({}, context)
```

#### Input
* input `object`
  * expand `array`: Specifies which fields in the response should be expanded.
  * ending_before `string`: A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
  * limit `integer`: A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
  * starting_after `string`: A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.

#### Output
* output `object`
  * data **required** `array`
    * items [account](#account)
  * has_more **required** `boolean`: True if this list has another page of items after this one that can be fetched.
  * object **required** `string` (values: list): String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
  * url **required** `string`: The URL where this list can be accessed.

### AccountCreate



```js
stripe.AccountCreate({}, context)
```

#### Input
* input `object`
  * payload `object`
    * account_token `string`
    * business_logo `string`: (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) A logo for this account (at least 128px x 128px)
    * business_name `string`: The publicly sharable name for this account.
    * business_primary_color `string`: A CSS hex color value representing the primary branding color for this account.
    * business_url `string`: The URL that best shows the service or product provided by this account.
    * country `string`
    * debit_negative_balances `boolean`: A Boolean indicating whether Stripe should try to reclaim negative balances from an attached bank account. For details, see [Understanding Connect Account Balances](/docs/connect/account-balances).
    * decline_charge_on `object`: Account-level settings to automatically decline certain types of charges, regardless of the card issuer's decision.
      * avs_failure `boolean`
      * cvc_failure `boolean`
    * default_currency `string`: Three-letter ISO currency code representing the default currency for the account. This must be a currency that [Stripe supports in the account's country](https://stripe.com/docs/payouts).
    * email `string`: Email address of the account representative. For Standard accounts, this is used to ask them to claim their Stripe account. For Custom accounts, this only makes the account easier to identify to platforms; Stripe does not email the account representative.
    * expand `array`: Specifies which fields in the response should be expanded.
      * items `string`
    * from_recipient `string`
    * legal_entity `object`: Information about the legal entity itself, including information about the associated account representative.
      * additional_owners
        * items `object`
          * address `object`
            * city `string`
            * country `string`
            * line1 `string`
            * line2 `string`
            * postal_code `string`
            * state `string`
          * dob `object`
            * day **required** `integer`
            * month **required** `integer`
            * year **required** `integer`
          * first_name `string`
          * last_name `string`
          * maiden_name `string`
          * personal_id_number `string`
          * verification `object`
            * document `string`
      * address `object`
        * city `string`
        * country `string`
        * line1 `string`
        * line2 `string`
        * postal_code `string`
        * state `string`
      * address_kana `object`
        * city `string`
        * country `string`
        * line1 `string`
        * line2 `string`
        * postal_code `string`
        * state `string`
        * town `string`
      * address_kanji `object`
        * city `string`
        * country `string`
        * line1 `string`
        * line2 `string`
        * postal_code `string`
        * state `string`
        * town `string`
      * business_name `string`
      * business_name_kana `string`
      * business_name_kanji `string`
      * business_tax_id `string`
      * business_vat_id `string`
      * dob `object`
        * day **required** `integer`
        * month **required** `integer`
        * year **required** `integer`
      * first_name `string`
      * first_name_kana `string`
      * first_name_kanji `string`
      * gender `string`
      * last_name `string`
      * last_name_kana `string`
      * last_name_kanji `string`
      * maiden_name `string`
      * personal_address `object`
        * city `string`
        * country `string`
        * line1 `string`
        * line2 `string`
        * postal_code `string`
        * state `string`
      * personal_address_kana `object`
        * city `string`
        * country `string`
        * line1 `string`
        * line2 `string`
        * postal_code `string`
        * state `string`
        * town `string`
      * personal_address_kanji `object`
        * city `string`
        * country `string`
        * line1 `string`
        * line2 `string`
        * postal_code `string`
        * state `string`
        * town `string`
      * personal_id_number `string`
      * phone_number `string`
      * ssn_last_4 `string`
      * tax_id_registrar `string`
      * type `string`
      * verification `object`
        * document `string`
    * metadata `object`: A set of key-value pairs that you can attach to an `Account` object. This can be useful for storing additional information about the account in a structured format.
    * payout_schedule `object`: Details on when funds from charges are available, and when they are paid out to an external account. For details, see our [Setting Bank and Debit Card Payouts](/docs/connect/bank-transfers#payout-information) documentation.
      * delay_days `integer`
      * interval `string` (values: daily, four_times_monthly, manual, monthly, weekly)
      * monthly_anchor `integer`
      * weekly_anchor `string` (values: friday, monday, saturday, sunday, thursday, tuesday, wednesday)
    * payout_statement_descriptor `string`: The text that appears on the bank account statement for payouts. If not set, this defaults to the platform's bank descriptor as set in the Dashboard.
    * product_description `string`: Internal-only description of the product sold by, or service provided by, the business. Used by Stripe for risk and underwriting purposes.
    * statement_descriptor `string`: The default text that appears on credit card statements when a charge is made [directly on the account](/docs/connect/direct-charges)
    * support_email `string`: A publicly shareable support email address for the business.
    * support_phone `string`: A publicly shareable support phone number for the business.
    * support_url `string`: A publicly shareable URL that provides support for this account.
    * tos_acceptance `object`: Details on the account's acceptance of the [Stripe Services Agreement](/docs/connect/updating-accounts#tos-acceptance).
      * date **required** `integer`
      * ip **required** `string`
      * user_agent `string`
    * type `string` (values: custom, express, standard)

#### Output
* output [account_with_keys](#account_with_keys)

### v1.accounts.account.delete
<p>With <a href="/docs/connect">Connect</a>, you may delete Custom accounts you manage.</p><p>Custom accounts created using test-mode keys can be deleted at any time. Custom accounts created using live-mode keys may only be deleted once all balances are zero.</p><p>If you are looking to close your own account, use the <a href="https://dashboard.stripe.com/account/data">data tab in your account settings</a> instead.</p>


```js
stripe.v1.accounts.account.delete({
  "account": ""
}, context)
```

#### Input
* input `object`
  * account **required** `string`: The identifier of the account to be deleted. If none is provided, will default to the account of the API key.

#### Output
* output [deleted_object](#deleted_object)

### v1.accounts.account.get
<p>Retrieves the details of the account.</p>


```js
stripe.v1.accounts.account.get({
  "account": ""
}, context)
```

#### Input
* input `object`
  * expand `array`: Specifies which fields in the response should be expanded.
  * account **required** `string`: The identifier of the account to retrieve. If none is provided, the account associated with the API key is returned.

#### Output
* output [account](#account)

### v1.accounts.account.post
<p>Updates a connected <a href="/docs/connect/accounts">Express or Custom account</a> by setting the values of the parameters passed. Any parameters not provided are left unchanged. Most parameters can be changed only for Custom accounts. (These are marked <strong>Custom Only</strong> below.) Parameters marked <strong>Custom and Express</strong> are supported by both account types.</p><p>To update your own account, use the <a href="https://dashboard.stripe.com/account">Dashboard</a>. Refer to our <a href="/docs/connect/updating-accounts">Connect</a> documentation to learn more about updating accounts.</p>


```js
stripe.v1.accounts.account.post({
  "account": ""
}, context)
```

#### Input
* input `object`
  * account **required** `string`
  * payload `object`
    * account_token `string`
    * business_logo `string`: (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) A logo for this account (at least 128px x 128px)
    * business_name `string`: The publicly sharable name for this account.
    * business_primary_color `string`: A CSS hex color value representing the primary branding color for this account.
    * business_url `string`: The URL that best shows the service or product provided by this account.
    * debit_negative_balances `boolean`: A Boolean indicating whether Stripe should try to reclaim negative balances from an attached bank account. For details, see [Understanding Connect Account Balances](/docs/connect/account-balances).
    * decline_charge_on `object`: Account-level settings to automatically decline certain types of charges, regardless of the card issuer's decision.
      * avs_failure `boolean`
      * cvc_failure `boolean`
    * default_currency `string`: Three-letter ISO currency code representing the default currency for the account. This must be a currency that [Stripe supports in the account's country](https://stripe.com/docs/payouts).
    * email `string`: Email address of the account representative. For Standard accounts, this is used to ask them to claim their Stripe account. For Custom accounts, this only makes the account easier to identify to platforms; Stripe does not email the account representative.
    * expand `array`: Specifies which fields in the response should be expanded.
      * items `string`
    * legal_entity `object`: Information about the legal entity itself, including information about the associated account representative.
      * additional_owners
        * items `object`
          * address `object`
            * city `string`
            * country `string`
            * line1 `string`
            * line2 `string`
            * postal_code `string`
            * state `string`
          * dob `object`
            * day **required** `integer`
            * month **required** `integer`
            * year **required** `integer`
          * first_name `string`
          * last_name `string`
          * maiden_name `string`
          * personal_id_number `string`
          * verification `object`
            * document `string`
      * address `object`
        * city `string`
        * country `string`
        * line1 `string`
        * line2 `string`
        * postal_code `string`
        * state `string`
      * address_kana `object`
        * city `string`
        * country `string`
        * line1 `string`
        * line2 `string`
        * postal_code `string`
        * state `string`
        * town `string`
      * address_kanji `object`
        * city `string`
        * country `string`
        * line1 `string`
        * line2 `string`
        * postal_code `string`
        * state `string`
        * town `string`
      * business_name `string`
      * business_name_kana `string`
      * business_name_kanji `string`
      * business_tax_id `string`
      * business_vat_id `string`
      * dob `object`
        * day **required** `integer`
        * month **required** `integer`
        * year **required** `integer`
      * first_name `string`
      * first_name_kana `string`
      * first_name_kanji `string`
      * gender `string`
      * last_name `string`
      * last_name_kana `string`
      * last_name_kanji `string`
      * maiden_name `string`
      * personal_address `object`
        * city `string`
        * country `string`
        * line1 `string`
        * line2 `string`
        * postal_code `string`
        * state `string`
      * personal_address_kana `object`
        * city `string`
        * country `string`
        * line1 `string`
        * line2 `string`
        * postal_code `string`
        * state `string`
        * town `string`
      * personal_address_kanji `object`
        * city `string`
        * country `string`
        * line1 `string`
        * line2 `string`
        * postal_code `string`
        * state `string`
        * town `string`
      * personal_id_number `string`
      * phone_number `string`
      * ssn_last_4 `string`
      * tax_id_registrar `string`
      * type `string`
      * verification `object`
        * document `string`
    * metadata `object`: A set of key-value pairs that you can attach to an `Account` object. This can be useful for storing additional information about the account in a structured format.
    * payout_schedule `object`: Details on when funds from charges are available, and when they are paid out to an external account. For details, see our [Setting Bank and Debit Card Payouts](/docs/connect/bank-transfers#payout-information) documentation.
      * delay_days `integer`
      * interval `string` (values: daily, four_times_monthly, manual, monthly, weekly)
      * monthly_anchor `integer`
      * weekly_anchor `string` (values: friday, monday, saturday, sunday, thursday, tuesday, wednesday)
    * payout_statement_descriptor `string`: The text that appears on the bank account statement for payouts. If not set, this defaults to the platform's bank descriptor as set in the Dashboard.
    * product_description `string`: Internal-only description of the product sold by, or service provided by, the business. Used by Stripe for risk and underwriting purposes.
    * statement_descriptor `string`: The default text that appears on credit card statements when a charge is made [directly on the account](/docs/connect/direct-charges)
    * support_email `string`: A publicly shareable support email address for the business.
    * support_phone `string`: A publicly shareable support phone number for the business.
    * support_url `string`: A publicly shareable URL that provides support for this account.
    * tos_acceptance `object`: Details on the account's acceptance of the [Stripe Services Agreement](/docs/connect/updating-accounts#tos-acceptance).
      * date **required** `integer`
      * ip **required** `string`
      * user_agent `string`

#### Output
* output [account](#account)

### v1.accounts.account.bank_accounts.post



```js
stripe.v1.accounts.account.bank_accounts.post({
  "account": ""
}, context)
```

#### Input
* input `object`
  * account **required** `string`
  * payload `object`
    * default_for_currency `boolean`: When set to true, or if this is the first external account added in this currency, this account becomes the default external account for its currency.
    * expand `array`: Specifies which fields in the response should be expanded.
      * items `string`
    * metadata `object`: A set of key-value pairs that you can attach to an external account object. It can be useful for storing additional information about the external account in a structured format.

#### Output
* output [external_account_source](#external_account_source)

### v1.accounts.account.bank_accounts.id.delete



```js
stripe.v1.accounts.account.bank_accounts.id.delete({
  "account": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * account **required** `string`
  * id **required** `string`: The ID of the external account to be deleted.

#### Output
* output [deleted_bank_account](#deleted_bank_account)

### v1.accounts.account.bank_accounts.id.get



```js
stripe.v1.accounts.account.bank_accounts.id.get({
  "account": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * expand `array`: Specifies which fields in the response should be expanded.
  * account **required** `string`
  * id **required** `string`

#### Output
* output [external_account_source](#external_account_source)

### v1.accounts.account.bank_accounts.id.post
<p>Updates the metadata of a bank account belonging to a <a href="/docs/connect/custom-accounts">Custom account</a>, and optionally sets it as the default for its currency. Other bank account details are not editable by design.</p><p>You can re-enable a disabled bank account by performing an update call without providing any arguments or changes.</p>


```js
stripe.v1.accounts.account.bank_accounts.id.post({
  "account": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * account **required** `string`
  * id **required** `string`: The ID of the bank account to update
  * payload `object`
    * address_city `string`: City/District/Suburb/Town/Village.
    * address_country `string`: Billing address country, if provided when creating card.
    * address_line1 `string`: Address line 1 (Street address/PO Box/Company name).
    * address_line2 `string`: Address line 2 (Apartment/Suite/Unit/Building).
    * address_state `string`: State/County/Province/Region.
    * address_zip `string`: ZIP or postal code
    * default_for_currency `boolean`
    * exp_month `string`: Two digit number representing the card’s expiration month.
    * exp_year `string`: Four digit number representing the card’s expiration year.
    * expand `array`: Specifies which fields in the response should be expanded.
      * items `string`
    * metadata `object`
    * name `string`: Cardholder name.

#### Output
* output [external_account_source](#external_account_source)

### v1.accounts.account.external_accounts.get



```js
stripe.v1.accounts.account.external_accounts.get({
  "account": ""
}, context)
```

#### Input
* input `object`
  * expand `array`: Specifies which fields in the response should be expanded.
  * account **required** `string`
  * ending_before `string`: A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
  * limit `integer`: A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
  * starting_after `string`: A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.

#### Output
* output `object`
  * data **required** `array`: The list contains all external accounts that have been attached to the Stripe account. These may be bank accounts or cards.
    * items [bank_account](#bank_account)
  * has_more **required** `boolean`: True if this list has another page of items after this one that can be fetched.
  * object **required** `string` (values: list): String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
  * url **required** `string`: The URL where this list can be accessed.

### v1.accounts.account.external_accounts.post



```js
stripe.v1.accounts.account.external_accounts.post({
  "account": ""
}, context)
```

#### Input
* input `object`
  * account **required** `string`
  * payload `object`
    * default_for_currency `boolean`: When set to true, or if this is the first external account added in this currency, this account becomes the default external account for its currency.
    * expand `array`: Specifies which fields in the response should be expanded.
      * items `string`
    * metadata `object`: A set of key-value pairs that you can attach to an external account object. It can be useful for storing additional information about the external account in a structured format.

#### Output
* output [external_account_source](#external_account_source)

### v1.accounts.account.external_accounts.id.delete



```js
stripe.v1.accounts.account.external_accounts.id.delete({
  "account": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * account **required** `string`
  * id **required** `string`: The ID of the external account to be deleted.

#### Output
* output [deleted_bank_account](#deleted_bank_account)

### v1.accounts.account.external_accounts.id.get



```js
stripe.v1.accounts.account.external_accounts.id.get({
  "account": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * expand `array`: Specifies which fields in the response should be expanded.
  * account **required** `string`
  * id **required** `string`

#### Output
* output [external_account_source](#external_account_source)

### v1.accounts.account.external_accounts.id.post
<p>Updates the metadata of a bank account belonging to a <a href="/docs/connect/custom-accounts">Custom account</a>, and optionally sets it as the default for its currency. Other bank account details are not editable by design.</p><p>You can re-enable a disabled bank account by performing an update call without providing any arguments or changes.</p>


```js
stripe.v1.accounts.account.external_accounts.id.post({
  "account": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * account **required** `string`
  * id **required** `string`: The ID of the bank account to update
  * payload `object`
    * address_city `string`: City/District/Suburb/Town/Village.
    * address_country `string`: Billing address country, if provided when creating card.
    * address_line1 `string`: Address line 1 (Street address/PO Box/Company name).
    * address_line2 `string`: Address line 2 (Apartment/Suite/Unit/Building).
    * address_state `string`: State/County/Province/Region.
    * address_zip `string`: ZIP or postal code
    * default_for_currency `boolean`
    * exp_month `string`: Two digit number representing the card’s expiration month.
    * exp_year `string`: Four digit number representing the card’s expiration year.
    * expand `array`: Specifies which fields in the response should be expanded.
      * items `string`
    * metadata `object`
    * name `string`: Cardholder name.

#### Output
* output [external_account_source](#external_account_source)

### v1.accounts.account.login_links.post
<p>Creates a single-use login link for an Express account to access their Stripe dashboard.</p><p><strong>You may only create login links for <a href="/docs/connect/express-accounts">Express accounts</a> connected to your platform</strong>.</p>


```js
stripe.v1.accounts.account.login_links.post({
  "account": ""
}, context)
```

#### Input
* input `object`
  * account **required** `string`: The identifier of the account to create a login link for.
  * payload `object`
    * expand `array`: Specifies which fields in the response should be expanded.
      * items `string`
    * redirect_url `string`: Where to redirect the user after they log out of their dashboard.

#### Output
* output [login_link](#login_link)

### v1.accounts.account.logout.put
<p>Invalidates all sessions for a light account, for a platform to use during platform logout.</p><p><strong>You may only log out <a href="/docs/connect/express-accounts">Express accounts</a> connected to your platform</strong>.</p>


```js
stripe.v1.accounts.account.logout.put({
  "account": ""
}, context)
```

#### Input
* input `object`
  * account **required** `string`: The identifier of the account to log out.
  * payload `object`
    * expand `array`: Specifies which fields in the response should be expanded.
      * items `string`

#### Output
* output [light_account_logout](#light_account_logout)

### AccountReject
<p>With <a href="/docs/connect">Connect</a>, you may flag accounts as suspicious.</p><p>Test-mode Custom and Express accounts can be rejected at any time. Accounts created using live-mode keys may only be rejected once all balances are zero.</p>


```js
stripe.AccountReject({
  "account": "",
  "payload": {
    "reason": ""
  }
}, context)
```

#### Input
* input `object`
  * account **required** `string`: The identifier of the account to reject
  * payload **required** `object`
    * expand `array`: Specifies which fields in the response should be expanded.
      * items `string`
    * reason **required** `string`: The reason for rejecting the account. Can be `fraud`, `terms_of_service`, or `other`.

#### Output
* output [account](#account)

### AllApplePayDomains



```js
stripe.AllApplePayDomains({}, context)
```

#### Input
* input `object`
  * expand `array`: Specifies which fields in the response should be expanded.
  * domain_name `string`
  * ending_before `string`: A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
  * limit `integer`: A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
  * starting_after `string`: A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.

#### Output
* output `object`
  * data **required** `array`
    * items [apple_pay_domain](#apple_pay_domain)
  * has_more **required** `boolean`: True if this list has another page of items after this one that can be fetched.
  * object **required** `string` (values: list): String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
  * url **required** `string`: The URL where this list can be accessed.

### CreateApplePayDomain



```js
stripe.CreateApplePayDomain({
  "payload": {
    "domain_name": ""
  }
}, context)
```

#### Input
* input `object`
  * payload **required** `object`
    * domain_name **required** `string`
    * expand `array`: Specifies which fields in the response should be expanded.
      * items `string`

#### Output
* output [apple_pay_domain](#apple_pay_domain)

### DeleteApplePayDomain



```js
stripe.DeleteApplePayDomain({
  "domain": ""
}, context)
```

#### Input
* input `object`
  * domain **required** `string`

#### Output
* output [deleted_object](#deleted_object)

### RetrieveApplePayDomain



```js
stripe.RetrieveApplePayDomain({
  "domain": ""
}, context)
```

#### Input
* input `object`
  * expand `array`: Specifies which fields in the response should be expanded.
  * domain **required** `string`

#### Output
* output [apple_pay_domain](#apple_pay_domain)

### AllPlatformEarnings
<p>Returns a list of application fees you’ve previously collected. The application fees are returned in sorted order, with the most recent fees appearing first.</p>


```js
stripe.AllPlatformEarnings({}, context)
```

#### Input
* input `object`
  * expand `array`: Specifies which fields in the response should be expanded.
  * charge `string`: Only return application fees for the charge specified by this charge ID.
  * created `integer`
  * ending_before `string`: A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
  * limit `integer`: A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
  * starting_after `string`: A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.

#### Output
* output `object`
  * data **required** `array`
    * items [platform_earning](#platform_earning)
  * has_more **required** `boolean`: True if this list has another page of items after this one that can be fetched.
  * object **required** `string` (values: list): String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
  * url **required** `string`: The URL where this list can be accessed.

### RetrievePlatformEarningRefund
<p>By default, you can see the 10 most recent refunds stored directly on the application fee object, but you can also retrieve details about a specific refund stored on the application fee.</p>


```js
stripe.RetrievePlatformEarningRefund({
  "fee": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * expand `array`: Specifies which fields in the response should be expanded.
  * fee **required** `string`: ID of the application fee refunded.
  * id **required** `string`: ID of refund to retrieve.

#### Output
* output [fee_refund](#fee_refund)

### UpdatePlatformEarningRefund
<p>Updates the specified application fee refund by setting the values of the parameters passed. Any parameters not provided will be left unchanged.</p><p>This request only accepts metadata as an argument.</p>


```js
stripe.UpdatePlatformEarningRefund({
  "fee": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * fee **required** `string`: ID of the application fee refunded.
  * id **required** `string`: ID of refund to retrieve.
  * payload `object`
    * expand `array`: Specifies which fields in the response should be expanded.
      * items `string`
    * metadata `object`: Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.

#### Output
* output [fee_refund](#fee_refund)

### RetrievePlatformEarning
<p>Retrieves the details of an application fee that your account has collected. The same information is returned when refunding the application fee.</p>


```js
stripe.RetrievePlatformEarning({
  "id": ""
}, context)
```

#### Input
* input `object`
  * expand `array`: Specifies which fields in the response should be expanded.
  * id **required** `string`: The identifier of the fee to be retrieved.

#### Output
* output [platform_earning](#platform_earning)

### DeprecatedCreateRefundPlatformEarning



```js
stripe.DeprecatedCreateRefundPlatformEarning({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`
  * payload `object`
    * amount `integer`
    * directive `string`
    * expand `array`: Specifies which fields in the response should be expanded.
      * items `string`

#### Output
* output [platform_earning](#platform_earning)

### AllPlatformEarningsRefunds
<p>You can see a list of the refunds belonging to a specific application fee. Note that the 10 most recent refunds are always available by default on the application fee object. If you need more than those 10, you can use this API method and the <code>limit</code> and <code>starting_after</code> parameters to page through additional refunds.</p>


```js
stripe.AllPlatformEarningsRefunds({
  "id": ""
}, context)
```

#### Input
* input `object`
  * expand `array`: Specifies which fields in the response should be expanded.
  * ending_before `string`: A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
  * id **required** `string`: The ID of the application fee whose refunds will be retrieved.
  * limit `integer`: A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
  * starting_after `string`: A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.

#### Output
* output `object`
  * data **required** `array`
    * items [fee_refund](#fee_refund)
  * has_more **required** `boolean`: True if this list has another page of items after this one that can be fetched.
  * object **required** `string` (values: list): String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
  * url **required** `string`: The URL where this list can be accessed.

### CreatePlatformEarningRefund



```js
stripe.CreatePlatformEarningRefund({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`
  * payload `object`
    * amount `integer`
    * directive `string`
    * expand `array`: Specifies which fields in the response should be expanded.
      * items `string`
    * metadata `object`

#### Output
* output [fee_refund](#fee_refund)

### BalanceRetrieve
<p>Retrieves the current account balance, based on the authentication that was used to make the request.</p>


```js
stripe.BalanceRetrieve({}, context)
```

#### Input
* input `object`
  * expand `array`: Specifies which fields in the response should be expanded.

#### Output
* output [balance](#balance)

### AllBalanceTransactions
<p>Returns a list of transactions that have contributed to the Stripe account balance (e.g., charges, transfers, and so forth). The transactions are returned in sorted order, with the most recent transactions appearing first.</p>


```js
stripe.AllBalanceTransactions({}, context)
```

#### Input
* input `object`
  * expand `array`: Specifies which fields in the response should be expanded.
  * available_on `integer`
  * created `integer`
  * currency `string`
  * ending_before `string`: A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
  * limit `integer`: A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
  * payout `string`: For automatic Stripe payouts only, only returns transactions that were payed out on the specified payout ID.
  * source `string`: Only returns the original transaction.
  * starting_after `string`: A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
  * type `string`: Only returns transactions of the given type. One of: `charge`, `refund`, `adjustment`, `application_fee`, `application_fee_refund`, `transfer`, `payment`, `payout`, `payout_failure`, or `stripe_fee`.

#### Output
* output `object`
  * data **required** `array`
    * items [balance_transaction](#balance_transaction)
  * has_more **required** `boolean`: True if this list has another page of items after this one that can be fetched.
  * object **required** `string` (values: list): String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
  * url **required** `string`: The URL where this list can be accessed.

### RetrieveBalanceTransaction
<p>Retrieves the balance transaction with the given ID.</p>


```js
stripe.RetrieveBalanceTransaction({
  "id": ""
}, context)
```

#### Input
* input `object`
  * expand `array`: Specifies which fields in the response should be expanded.
  * id **required** `string`: The ID of the desired balance transaction, as found on any API object that affects the balance (e.g., a charge or transfer).

#### Output
* output [balance_transaction](#balance_transaction)

### BitcoinAllReceivers
<p>Returns a list of your receivers. Receivers are returned sorted by creation date, with the most recently created receivers appearing first.</p>


```js
stripe.BitcoinAllReceivers({}, context)
```

#### Input
* input `object`
  * expand `array`: Specifies which fields in the response should be expanded.
  * active `boolean`: Filter for active receivers.
  * ending_before `string`: A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
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

### BitcoinRetrieveReceiver
<p>Retrieves the Bitcoin receiver with the given ID.</p>


```js
stripe.BitcoinRetrieveReceiver({
  "id": ""
}, context)
```

#### Input
* input `object`
  * expand `array`: Specifies which fields in the response should be expanded.
  * id **required** `string`

#### Output
* output [bitcoin_receiver](#bitcoin_receiver)

### v1.bitcoin.receivers.receiver.transactions.get



```js
stripe.v1.bitcoin.receivers.receiver.transactions.get({
  "receiver": ""
}, context)
```

#### Input
* input `object`
  * expand `array`: Specifies which fields in the response should be expanded.
  * customer `string`: Only return transactions for the customer specified by this customer ID.
  * ending_before `string`: A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
  * limit `integer`: A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
  * receiver **required** `string`: Only return transactions for the receiver specified by this receiver ID.
  * starting_after `string`: A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.

#### Output
* output `object`
  * data **required** `array`
    * items [bitcoin_transaction](#bitcoin_transaction)
  * has_more **required** `boolean`: True if this list has another page of items after this one that can be fetched.
  * object **required** `string` (values: list): String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
  * url **required** `string`: The URL where this list can be accessed.

### v1.bitcoin.transactions.get



```js
stripe.v1.bitcoin.transactions.get({}, context)
```

#### Input
* input `object`
  * expand `array`: Specifies which fields in the response should be expanded.
  * customer `string`: Only return transactions for the customer specified by this customer ID.
  * ending_before `string`: A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
  * limit `integer`: A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
  * receiver `string`: Only return transactions for the receiver specified by this receiver ID.
  * starting_after `string`: A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.

#### Output
* output `object`
  * data **required** `array`
    * items [bitcoin_transaction](#bitcoin_transaction)
  * has_more **required** `boolean`: True if this list has another page of items after this one that can be fetched.
  * object **required** `string` (values: list): String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
  * url **required** `string`: The URL where this list can be accessed.

### AllCharges
<p>Returns a list of charges you’ve previously created. The charges are returned in sorted order, with the most recent charges appearing first.</p>


```js
stripe.AllCharges({}, context)
```

#### Input
* input `object`
  * expand `array`: Specifies which fields in the response should be expanded.
  * created `integer`
  * customer `string`: Only return charges for the customer specified by this customer ID.
  * ending_before `string`: A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
  * limit `integer`: A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
  * source `string`: A filter on the list, based on the source of the charge. The value can be a dictionary with the following options:
  * starting_after `string`: A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
  * transfer_group `string`: Only return charges for this transfer group.

#### Output
* output `object`
  * data **required** `array`
    * items [charge](#charge)
  * has_more **required** `boolean`: True if this list has another page of items after this one that can be fetched.
  * object **required** `string` (values: list): String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
  * url **required** `string`: The URL where this list can be accessed.

### CreateCharge



```js
stripe.CreateCharge({}, context)
```

#### Input
* input `object`
  * payload `object`
    * alternate_statement_descriptors `object`
      * kana `string`
      * kanji `string`
    * amount `integer`
    * application `string`
    * application_fee `integer`
    * capture `boolean`
    * card_program `string`
    * currency `string`
    * customer `string`
    * description `string`
    * destination `object`
      * account **required** `string`
      * amount `integer`
    * device_id `string`
    * exchange_rate `number`
    * expand `array`: Specifies which fields in the response should be expanded.
      * items `string`
    * external_id `string`
    * idempotency_key `string`
    * invoice `string`
    * invoice_source `string`
    * ip `string`
    * level3 `object`
      * customer_reference `string`
      * line_items **required** `array`
        * items `object`
          * discount_amount `integer`
          * product_code **required** `string`
          * product_description **required** `string`
          * quantity `integer`
          * tax_amount `integer`
          * unit_cost `integer`
      * merchant_reference **required** `string`
      * shipping_address_zip `string`
      * shipping_amount `integer`
      * shipping_from_zip `string`
    * metadata `object`
    * on_behalf_of `string`
    * order `string`
    * payment_method `string`
    * payment_user_agent `string`
    * receipt_email `string`
    * recurring `boolean`
    * referrer `string`
    * shipping `object`
      * address **required** `object`
        * city `string`
        * country `string`
        * line1 **required** `string`
        * line2 `string`
        * postal_code `string`
        * state `string`
      * carrier `string`
      * name **required** `string`
      * phone `string`
      * tracking_number `string`
    * statement_address `object`
      * city **required** `string`
      * line1 **required** `string`
      * line2 `string`
      * postal_code **required** `string`
      * state **required** `string`
    * statement_descriptor `string`
    * transfer_group `string`
    * trust `object`
      * safety `string` (values: fraudulent, safe)
    * uncaptured `boolean`
    * user_agent `string`

#### Output
* output [charge](#charge)

### RetrieveCharge
<p>Retrieves the details of a charge that has previously been created. Supply the unique charge ID that was returned from your previous request, and Stripe will return the corresponding charge information. The same information is returned when creating or refunding the charge.</p>


```js
stripe.RetrieveCharge({
  "charge": ""
}, context)
```

#### Input
* input `object`
  * expand `array`: Specifies which fields in the response should be expanded.
  * charge **required** `string`: The identifier of the charge to be retrieved.

#### Output
* output [charge](#charge)

### UpdateCharge
<p>Updates the specified charge by setting the values of the parameters passed. Any parameters not provided will be left unchanged.</p>


```js
stripe.UpdateCharge({
  "charge": ""
}, context)
```

#### Input
* input `object`
  * charge **required** `string`
  * payload `object`
    * customer `string`: The ID of an existing customer that will be associated with this request. This field may only be updated if there is no existing associated customer with this charge.
    * description `string`: An arbitrary string which you can attach to a charge object. It is displayed when in the web interface alongside the charge. Note that if you use Stripe to send automatic email receipts to your customers, your receipt emails will include the `description` of the charge(s) that they are describing.
    * expand `array`: Specifies which fields in the response should be expanded.
      * items `string`
    * fraud_details `object`: A set of key/value pairs you can attach to a charge giving information about its riskiness. If you believe a charge is fraudulent, include a `user_report` key with a value of `fraudulent`. If you believe a charge is safe, include a `user_report` key with a value of `safe`. Note that you must refund a charge before setting the `user_report` to `fraudulent`. Stripe will use the information you send to improve our fraud detection algorithms.
    * metadata `object`: Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
    * receipt_email `string`: This is the email address that the receipt for this charge will be sent to. If this field is updated, then a new email receipt will be sent to the updated address.
    * shipping `object`: Shipping information for the charge. Helps prevent fraud on charges for physical goods.
      * address **required** `object`
        * city `string`
        * country `string`
        * line1 **required** `string`
        * line2 `string`
        * postal_code `string`
        * state `string`
      * carrier `string`
      * name **required** `string`
      * phone `string`
      * tracking_number `string`
    * transfer_group `string`: A string that identifies this transaction as part of a group. `transfer_group` may only be provided if it has not been set. See the [Connect documentation](/docs/connect/charges-transfers#grouping-transactions) for details.

#### Output
* output [charge](#charge)

### ChargeCapture
<p>Capture the payment of an existing, uncaptured, charge. This is the second half of the two-step payment flow, where first you <a href="#create_charge">created a charge</a> with the capture option set to false.</p><p>Uncaptured payments expire exactly seven days after they are created. If they are not captured by that point in time, they will be marked as refunded and will no longer be capturable.</p>


```js
stripe.ChargeCapture({
  "charge": ""
}, context)
```

#### Input
* input `object`
  * charge **required** `string`
  * payload `object`
    * amount `integer`: The amount to capture, which must be less than or equal to the original amount. Any additional amount will be automatically refunded.
    * application_fee `integer`: An application fee to add on to this charge. Can only be used with Stripe Connect.
    * destination `object`: An optional dictionary containing a new destination amount to use. Can only be used with destination charges created with Stripe Connect.
      * amount `integer`
    * expand `array`: Specifies which fields in the response should be expanded.
      * items `string`
    * receipt_email `string`: The email address to send this charge's receipt to. This will override the previously-specified email address for this charge, if one was set. Receipts will not be sent in test mode.
    * statement_descriptor `string`: An arbitrary string to be displayed on your customer's credit card statement. This may be up to *22 characters*. As an example, if your website is `RunClub` and the item you're charging for is a race ticket, you may want to specify a `statement_descriptor` of `RunClub 5K race ticket`. The statement description must contain at least one letter, may not include `<>"'` characters, and will appear on your customer's statement in capital letters. Non-ASCII characters are automatically stripped. Updating this value will overwrite the previous statement descriptor of this charge. While most banks display this information consistently, some may display it incorrectly or not at all.

#### Output
* output [charge](#charge)

### RetrieveChargeDispute



```js
stripe.RetrieveChargeDispute({
  "charge": ""
}, context)
```

#### Input
* input `object`
  * expand `array`: Specifies which fields in the response should be expanded.
  * charge **required** `string`

#### Output
* output [dispute](#dispute)

### UpdateChargeDispute



```js
stripe.UpdateChargeDispute({
  "charge": ""
}, context)
```

#### Input
* input `object`
  * charge **required** `string`
  * payload `object`
    * evidence `object`: Evidence to upload, to respond to a dispute. Updating any field in the hash will submit all fields in the hash for review. The combined character count of all fields is limited to 150,000.
      * access_activity_log `string`
      * billing_address `string`
      * cancellation_policy `string`
      * cancellation_policy_disclosure `string`
      * cancellation_rebuttal `string`
      * customer_communication `string`
      * customer_email_address `string`
      * customer_name `string`
      * customer_purchase_ip `string`
      * customer_signature `string`
      * duplicate_charge_documentation `string`
      * duplicate_charge_explanation `string`
      * duplicate_charge_id `string`
      * product_description `string`
      * receipt `string`
      * refund_policy `string`
      * refund_policy_disclosure `string`
      * refund_refusal_explanation `string`
      * service_date `string`
      * service_documentation `string`
      * shipping_address `string`
      * shipping_carrier `string`
      * shipping_date `string`
      * shipping_documentation `string`
      * shipping_tracking_number `string`
      * uncategorized_file `string`
      * uncategorized_text `string`
    * expand `array`: Specifies which fields in the response should be expanded.
      * items `string`
    * metadata `object`: A set of key-value pairs that you can attach to a dispute object. This can be useful for storing additional information about the dispute in a structured format.
    * submit `boolean`: Whether to immediately submit evidence to the bank. If `false`, evidence is staged on the dispute. Staged evidence is visible in the API and Dashboard, and can be submitted to the bank by making another request with this attribute set to `true` (the default).

#### Output
* output [dispute](#dispute)

### CloseChargeDispute



```js
stripe.CloseChargeDispute({
  "charge": ""
}, context)
```

#### Input
* input `object`
  * charge **required** `string`
  * payload `object`
    * expand `array`: Specifies which fields in the response should be expanded.
      * items `string`

#### Output
* output [dispute](#dispute)

### ChargeRefund



```js
stripe.ChargeRefund({
  "charge": ""
}, context)
```

#### Input
* input `object`
  * charge **required** `string`
  * payload `object`
    * amount `integer`
    * description `string`
    * directive `string`
    * expand `array`: Specifies which fields in the response should be expanded.
      * items `string`
    * metadata `object`
    * reason `string` (values: duplicate, fraudulent, requested_by_customer)
    * refund_application_fee `boolean`
    * reverse_transfer `boolean`

#### Output
* output [charge](#charge)

### AllChargeRefunds
<p>You can see a list of the refunds belonging to a specific charge. Note that the 10 most recent refunds are always available by default on the charge object. If you need more than those 10, you can use this API method and the <code>limit</code> and <code>starting_after</code> parameters to page through additional refunds.</p>


```js
stripe.AllChargeRefunds({
  "charge": ""
}, context)
```

#### Input
* input `object`
  * expand `array`: Specifies which fields in the response should be expanded.
  * charge **required** `string`: The ID of the charge whose refunds will be retrieved.
  * ending_before `string`: A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
  * limit `integer`: A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
  * starting_after `string`: A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.

#### Output
* output `object`
  * data **required** `array`
    * items [refund](#refund)
  * has_more **required** `boolean`: True if this list has another page of items after this one that can be fetched.
  * object **required** `string` (values: list): String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
  * url **required** `string`: The URL where this list can be accessed.

### v1.charges.charge.refunds.post



```js
stripe.v1.charges.charge.refunds.post({
  "charge": ""
}, context)
```

#### Input
* input `object`
  * charge **required** `string`
  * payload `object`
    * amount `integer`
    * description `string`
    * directive `string`
    * expand `array`: Specifies which fields in the response should be expanded.
      * items `string`
    * metadata `object`
    * reason `string` (values: duplicate, fraudulent, requested_by_customer)
    * refund_application_fee `boolean`
    * reverse_transfer `boolean`

#### Output
* output [refund](#refund)

### RetrieveChargeRefund



```js
stripe.RetrieveChargeRefund({
  "charge": "",
  "refund": ""
}, context)
```

#### Input
* input `object`
  * expand `array`: Specifies which fields in the response should be expanded.
  * charge **required** `string`
  * refund **required** `string`

#### Output
* output [refund](#refund)

### UpdateChargeRefund



```js
stripe.UpdateChargeRefund({
  "charge": "",
  "refund": ""
}, context)
```

#### Input
* input `object`
  * charge **required** `string`
  * refund **required** `string`
  * payload `object`
    * expand `array`: Specifies which fields in the response should be expanded.
      * items `string`
    * metadata `object`

#### Output
* output [refund](#refund)

### AllCountrySpecs
<p>Lists all Country Spec objects available in the API.</p>


```js
stripe.AllCountrySpecs({}, context)
```

#### Input
* input `object`
  * expand `array`: Specifies which fields in the response should be expanded.
  * ending_before `string`: A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
  * limit `integer`: A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
  * starting_after `string`: A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.

#### Output
* output `object`
  * data **required** `array`
    * items [country_spec](#country_spec)
  * has_more **required** `boolean`: True if this list has another page of items after this one that can be fetched.
  * object **required** `string` (values: list): String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
  * url **required** `string`: The URL where this list can be accessed.

### RetrieveCountrySpec
<p>Returns a Country Spec for a given Country code.</p>


```js
stripe.RetrieveCountrySpec({
  "country": ""
}, context)
```

#### Input
* input `object`
  * expand `array`: Specifies which fields in the response should be expanded.
  * country **required** `string`: An ISO 3166-1 alpha-2 country code. Available country codes can be listed with the [List Country Specs](/docs/api#list_country_specs) endpoint.

#### Output
* output [country_spec](#country_spec)

### AllCoupons
<p>Returns a list of your coupons.</p>


```js
stripe.AllCoupons({}, context)
```

#### Input
* input `object`
  * expand `array`: Specifies which fields in the response should be expanded.
  * created `integer`: A filter on the list, based on the object `created` field. The value can be a string with an integer Unix timestamp, or it can be a dictionary with a number of different query options.
  * ending_before `string`: A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
  * limit `integer`: A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
  * starting_after `string`: A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.

#### Output
* output `object`
  * data **required** `array`
    * items [coupon](#coupon)
  * has_more **required** `boolean`: True if this list has another page of items after this one that can be fetched.
  * object **required** `string` (values: list): String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
  * url **required** `string`: The URL where this list can be accessed.

### CreateCoupon
<p>You can create coupons easily via the <a href="https://dashboard.stripe.com/coupons">coupon management</a> page of the Stripe dashboard. Coupon creation is also accessible via the API if you need to create coupons on the fly.</p><p>A coupon has either a <code>percent_off</code> or an <code>amount_off</code> and <code>currency</code>. If you set an <code>amount_off</code>, that amount will be subtracted from any invoice’s subtotal. For example, an invoice with a subtotal of <currency>100</currency> will have a final total of <currency>0</currency> if a coupon with an <code>amount_off</code> of <amount>200</amount> is applied to it and an invoice with a subtotal of <currency>300</currency> will have a final total of <currency>100</currency> if a coupon with an <code>amount_off</code> of <amount>200</amount> is applied to it.</p>


```js
stripe.CreateCoupon({
  "payload": {
    "duration": ""
  }
}, context)
```

#### Input
* input `object`
  * payload **required** `object`
    * amount_off `integer`: A positive integer representing the amount to subtract from an invoice total (required if `percent_off` is not passed).
    * currency `string`: Three-letter [ISO code for the currency](https://stripe.com/docs/currencies) of the `amount_off` parameter (required if `amount_off` is passed).
    * duration **required** `string` (values: forever, once, repeating): Specifies how long the discount will be in effect. Can be `forever`, `once`, or `repeating`.
    * duration_in_months `integer`: Required only if `duration` is `repeating`, in which case it must be a positive integer that specifies the number of months the discount will be in effect.
    * expand `array`: Specifies which fields in the response should be expanded.
      * items `string`
    * id `string`: Unique string of your choice that will be used to identify this coupon when applying it to a customer. This is often a specific code you'll give to your customer to use when signing up (e.g., `FALL25OFF`). If you don't want to specify a particular code, you can leave the ID blank and we'll generate a random code for you.
    * max_redemptions `integer`: A positive integer specifying the number of times the coupon can be redeemed before it's no longer valid. For example, you might have a 50% off coupon that the first 20 readers of your blog can use.
    * metadata `object`: A set of key/value pairs that you can attach to a coupon object. It can be useful for storing additional information about the coupon in a structured format.
    * name `string`: Name of the coupon displayed to customers on for instance invoices or receipts. By default the `id` is shown if `name` is not set.
    * percent_off `integer`: A positive integer between 1 and 100 that represents the discount the coupon will apply (required if `amount_off` is not passed).
    * redeem_by `integer`: Unix timestamp specifying the last time at which the coupon can be redeemed. After the redeem_by date, the coupon can no longer be applied to new customers.

#### Output
* output [coupon](#coupon)

### DeleteCoupon
<p>You can delete coupons via the <a href="https://dashboard.stripe.com/coupons">coupon management</a> page of the Stripe dashboard. However, deleting a coupon does not affect any customers who have already applied the coupon; it means that new customers can’t redeem the coupon. You can also delete coupons via the API.</p>


```js
stripe.DeleteCoupon({
  "coupon": ""
}, context)
```

#### Input
* input `object`
  * coupon **required** `string`: The identifier of the coupon to be deleted.

#### Output
* output [deleted_object](#deleted_object)

### RetrieveCoupon
<p>Retrieves the coupon with the given ID.</p>


```js
stripe.RetrieveCoupon({
  "coupon": ""
}, context)
```

#### Input
* input `object`
  * expand `array`: Specifies which fields in the response should be expanded.
  * coupon **required** `string`: The ID of the desired coupon.

#### Output
* output [coupon](#coupon)

### UpdateCoupon
<p>Updates the metadata of a coupon. Other coupon details (currency, duration, amount_off) are, by design, not editable.</p>


```js
stripe.UpdateCoupon({
  "coupon": ""
}, context)
```

#### Input
* input `object`
  * coupon **required** `string`: The identifier of the coupon to be updated.
  * payload `object`
    * expand `array`: Specifies which fields in the response should be expanded.
      * items `string`
    * metadata `object`: A set of key/value pairs that you can attach to a coupon object. It can be useful for storing additional information about the coupon in a structured format.

#### Output
* output [coupon](#coupon)

### AllCustomers
<p>Returns a list of your customers. The customers are returned sorted by creation date, with the most recent customers appearing first.</p>


```js
stripe.AllCustomers({}, context)
```

#### Input
* input `object`
  * expand `array`: Specifies which fields in the response should be expanded.
  * created `integer`
  * email `string`: A filter on the list based on the customer's `email` field. The value must be a string.
  * ending_before `string`: A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
  * limit `integer`: A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
  * starting_after `string`: A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.

#### Output
* output `object`
  * data **required** `array`
    * items [customer](#customer)
  * has_more **required** `boolean`: True if this list has another page of items after this one that can be fetched.
  * object **required** `string` (values: list): String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
  * url **required** `string`: The URL where this list can be accessed.

### CustomerCreate
<p>Creates a new customer object.</p>


```js
stripe.CustomerCreate({}, context)
```

#### Input
* input `object`
  * payload `object`
    * account_balance `integer`: An integer amount in %s that represents the account balance for your customer. Account balances only affect invoices. A negative amount represents a credit that decreases the amount due on an invoice; a positive amount increases the amount due on an invoice.
    * business_vat_id `string`: The customer's VAT identification number. If you are using Relay, this field gets passed to tax provider you are using for your orders.
    * coupon `string`: If you provide a coupon code, the customer will have a discount applied on all recurring charges. Charges you create through the API will not have the discount.
    * customer `string`
    * default_source `string`
    * description `string`: An arbitrary string that you can attach to a customer object. It is displayed alongside the customer in the dashboard.
    * email `string`: Customer's email address. It's displayed alongside the customer in your dashboard and can be useful for searching and tracking. This may be up to *512 characters*.
    * expand `array`: Specifies which fields in the response should be expanded.
      * items `string`
    * id `string`: A custom ID to use for the customer
    * invoice_prefix `string`: The prefix for the customer used to generate unique invoice numbers.
    * metadata `object`: A set of key/value pairs that you can attach to a customer object. It can be useful for storing additional information about the customer in a structured format.
    * shipping `object`
      * address **required** `object`
        * city `string`
        * country `string`
        * line1 **required** `string`
        * line2 `string`
        * postal_code `string`
        * state `string`
      * name **required** `string`
      * phone `string`

#### Output
* output [customer](#customer)

### DeleteCustomer
<p>Permanently deletes a customer. It cannot be undone. Also immediately cancels any active subscriptions on the customer.</p>


```js
stripe.DeleteCustomer({
  "customer": ""
}, context)
```

#### Input
* input `object`
  * customer **required** `string`: The identifier of the customer to be deleted.

#### Output
* output [deleted_object](#deleted_object)

### RetrieveCustomer
<p>Retrieves the details of an existing customer. You need only supply the unique customer identifier that was returned upon customer creation.</p>


```js
stripe.RetrieveCustomer({
  "customer": ""
}, context)
```

#### Input
* input `object`
  * expand `array`: Specifies which fields in the response should be expanded.
  * customer **required** `string`: The identifier of the customer to be retrieved.

#### Output
* output [customer](#customer)

### CustomerUpdate



```js
stripe.CustomerUpdate({
  "customer": ""
}, context)
```

#### Input
* input `object`
  * customer **required** `string`: The identifier of the customer to subscribe.
  * payload `object`
    * account_balance `integer`: An integer amount in %s that represents the account balance for your customer. Account balances only affect invoices. A negative amount represents a credit that decreases the amount due on an invoice; a positive amount increases the amount due on an invoice.
    * business_vat_id `string`: The customer's VAT identification number. If you are using Relay, this field gets passed to tax provider you are using for your orders.
    * coupon `string`: If you provide a coupon code, the customer will have a discount applied on all recurring charges. Charges you create through the API will not have the discount.
    * default_alipay_account `string`: ID of Alipay account to make the customer's new default for invoice payments.
    * default_bank_account `string`: ID of bank account to make the customer's new default for invoice payments.
    * default_card `string`: ID of card to make the customer's new default for invoice payments.
    * default_source `string`
    * description `string`: An arbitrary string that you can attach to a customer object. It is displayed alongside the customer in the dashboard.
    * email `string`: Customer's email address. It's displayed alongside the customer in your dashboard and can be useful for searching and tracking. This may be up to *512 characters*.
    * expand `array`: Specifies which fields in the response should be expanded.
      * items `string`
    * invoice_prefix `string`: The prefix for the customer used to generate unique invoice numbers.
    * metadata `object`: A set of key/value pairs that you can attach to a customer object. It can be useful for storing additional information about the customer in a structured format.
    * shipping `object`
      * address **required** `object`
        * city `string`
        * country `string`
        * line1 **required** `string`
        * line2 `string`
        * postal_code `string`
        * state `string`
      * name **required** `string`
      * phone `string`

#### Output
* output [customer](#customer)

### AllCustomerBankAccounts
<p>You can see a list of the bank accounts belonging to a Customer. Note that the 10 most recent sources are always available by default on the Customer. If you need more than those 10, you can use this API method and the <code>limit</code> and <code>starting_after</code> parameters to page through additional bank accounts.</p>


```js
stripe.AllCustomerBankAccounts({
  "customer": ""
}, context)
```

#### Input
* input `object`
  * expand `array`: Specifies which fields in the response should be expanded.
  * customer **required** `string`: The ID of the customer whose bank accounts will be retrieved.
  * ending_before `string`: A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
  * limit `integer`: A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
  * starting_after `string`: A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.

#### Output
* output `object`
  * data **required** `array`
    * items [bank_account](#bank_account)
  * has_more **required** `boolean`: True if this list has another page of items after this one that can be fetched.
  * object **required** `string` (values: list): String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
  * url **required** `string`: The URL where this list can be accessed.

### v1.customers.customer.bank_accounts.post



```js
stripe.v1.customers.customer.bank_accounts.post({
  "customer": ""
}, context)
```

#### Input
* input `object`
  * customer **required** `string`
  * payload `object`
    * expand `array`: Specifies which fields in the response should be expanded.
      * items `string`
    * metadata `object`: A set of key/value pairs that you can attach to a card object. It can be useful for storing additional information about the card in a structured format.

#### Output
* output [customer_source_create](#customer_source_create)

### v1.customers.customer.bank_accounts.id.delete



```js
stripe.v1.customers.customer.bank_accounts.id.delete({
  "customer": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * customer **required** `string`
  * id **required** `string`: The ID of the source to be deleted.

#### Output
* output [customer_source](#customer_source)

### RetrieveCustomerBankAccount
<p>By default, you can see the 10 most recent sources stored on a Customer directly on the object, but you can also retrieve details about a specific bank account stored on the Stripe account.</p>


```js
stripe.RetrieveCustomerBankAccount({
  "customer": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * expand `array`: Specifies which fields in the response should be expanded.
  * customer **required** `string`
  * id **required** `string`: ID of bank account to retrieve.

#### Output
* output [bank_account](#bank_account)

### v1.customers.customer.bank_accounts.id.post



```js
stripe.v1.customers.customer.bank_accounts.id.post({
  "customer": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * customer **required** `string`
  * id **required** `string`: The ID of the card to be updated.
  * payload `object`
    * account_holder_name `string`: The name of the person or business that owns the bank account.
    * account_holder_type `string`: The type of entity that holds the account. This can be either `individual` or `company`.
    * address_city `string`: City/District/Suburb/Town/Village.
    * address_country `string`: Billing address country, if provided when creating card.
    * address_line1 `string`: Address line 1 (Street address/PO Box/Company name).
    * address_line2 `string`: Address line 2 (Apartment/Suite/Unit/Building).
    * address_state `string`: State/County/Province/Region.
    * address_zip `string`: ZIP or postal code
    * exp_month `string`: Two digit number representing the card’s expiration month.
    * exp_year `string`: Four digit number representing the card’s expiration year.
    * expand `array`: Specifies which fields in the response should be expanded.
      * items `string`
    * metadata `object`
    * name `string`: Cardholder name.
    * owner `object`
      * address `object`
        * city `string`
        * country `string`
        * line1 `string`
        * line2 `string`
        * postal_code `string`
        * state `string`
      * email `string`
      * name `string`
      * phone `string`

#### Output
* output [bank_account](#bank_account)

### v1.customers.customer.bank_accounts.id.verify.post



```js
stripe.v1.customers.customer.bank_accounts.id.verify.post({
  "customer": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * customer **required** `string`
  * id **required** `string`: The ID of the source to be verified.
  * payload `object`
    * amounts `array`: Two positive integers, in *cents*, equal to the values of the microdeposits sent to the bank account.

    * expand `array`: Specifies which fields in the response should be expanded.
      * items `string`
    * verification_method `string`

#### Output
* output [bank_account](#bank_account)

### AllCustomerCards



```js
stripe.AllCustomerCards({
  "customer": ""
}, context)
```

#### Input
* input `object`
  * expand `array`: Specifies which fields in the response should be expanded.
  * customer **required** `string`: The ID of the customer whose cards will be retrieved.
  * ending_before `string`: A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
  * limit `integer`: A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
  * starting_after `string`: A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.

#### Output
* output `object`
  * data **required** `array`
    * items [card](#card)
  * has_more **required** `boolean`: True if this list has another page of items after this one that can be fetched.
  * object **required** `string` (values: list): String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
  * url **required** `string`: The URL where this list can be accessed.

### v1.customers.customer.cards.post



```js
stripe.v1.customers.customer.cards.post({
  "customer": ""
}, context)
```

#### Input
* input `object`
  * customer **required** `string`
  * payload `object`
    * expand `array`: Specifies which fields in the response should be expanded.
      * items `string`
    * metadata `object`: A set of key/value pairs that you can attach to a card object. It can be useful for storing additional information about the card in a structured format.

#### Output
* output [customer_source_create](#customer_source_create)

### v1.customers.customer.cards.id.delete



```js
stripe.v1.customers.customer.cards.id.delete({
  "customer": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * customer **required** `string`
  * id **required** `string`: The ID of the source to be deleted.

#### Output
* output [customer_source](#customer_source)

### RetrieveCustomerCard



```js
stripe.RetrieveCustomerCard({
  "customer": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * expand `array`: Specifies which fields in the response should be expanded.
  * customer **required** `string`
  * id **required** `string`: The ID of the card to be retrieved.

#### Output
* output [card](#card)

### v1.customers.customer.cards.id.post



```js
stripe.v1.customers.customer.cards.id.post({
  "customer": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * customer **required** `string`
  * id **required** `string`: The ID of the card to be updated.
  * payload `object`
    * account_holder_name `string`: The name of the person or business that owns the bank account.
    * account_holder_type `string`: The type of entity that holds the account. This can be either `individual` or `company`.
    * address_city `string`: City/District/Suburb/Town/Village.
    * address_country `string`: Billing address country, if provided when creating card.
    * address_line1 `string`: Address line 1 (Street address/PO Box/Company name).
    * address_line2 `string`: Address line 2 (Apartment/Suite/Unit/Building).
    * address_state `string`: State/County/Province/Region.
    * address_zip `string`: ZIP or postal code
    * exp_month `string`: Two digit number representing the card’s expiration month.
    * exp_year `string`: Four digit number representing the card’s expiration year.
    * expand `array`: Specifies which fields in the response should be expanded.
      * items `string`
    * metadata `object`
    * name `string`: Cardholder name.
    * owner `object`
      * address `object`
        * city `string`
        * country `string`
        * line1 `string`
        * line2 `string`
        * postal_code `string`
        * state `string`
      * email `string`
      * name `string`
      * phone `string`

#### Output
* output [bank_account](#bank_account)

### v1.customers.customer.discount.delete
<p>Removes the currently applied discount on a customer.</p>


```js
stripe.v1.customers.customer.discount.delete({
  "customer": ""
}, context)
```

#### Input
* input `object`
  * customer **required** `string`

#### Output
* output [deleted_discount](#deleted_discount)

### v1.customers.customer.discount.get



```js
stripe.v1.customers.customer.discount.get({
  "customer": ""
}, context)
```

#### Input
* input `object`
  * expand `array`: Specifies which fields in the response should be expanded.
  * customer **required** `string`

#### Output
* output [discount](#discount)

### AllCustomerSources



```js
stripe.AllCustomerSources({
  "customer": ""
}, context)
```

#### Input
* input `object`
  * expand `array`: Specifies which fields in the response should be expanded.
  * customer **required** `string`: The ID of the customer whose sources will be retrieved.
  * ending_before `string`: A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
  * limit `integer`: A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
  * starting_after `string`: A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
  * type `string`

#### Output
* output `object`
  * data **required** `array`: The list contains all payment sources that have been attached to the customer.
    * items [account_debit_account](#account_debit_account)
  * has_more **required** `boolean`: True if this list has another page of items after this one that can be fetched.
  * object **required** `string` (values: list): String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
  * url **required** `string`: The URL where this list can be accessed.

### v1.customers.customer.sources.post



```js
stripe.v1.customers.customer.sources.post({
  "customer": ""
}, context)
```

#### Input
* input `object`
  * customer **required** `string`
  * payload `object`
    * expand `array`: Specifies which fields in the response should be expanded.
      * items `string`
    * metadata `object`: A set of key/value pairs that you can attach to a card object. It can be useful for storing additional information about the card in a structured format.

#### Output
* output [customer_source_create](#customer_source_create)

### v1.customers.customer.sources.id.delete



```js
stripe.v1.customers.customer.sources.id.delete({
  "customer": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * customer **required** `string`
  * id **required** `string`: The ID of the source to be deleted.

#### Output
* output [customer_source](#customer_source)

### RetrieveCustomerSource



```js
stripe.RetrieveCustomerSource({
  "customer": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * expand `array`: Specifies which fields in the response should be expanded.
  * customer **required** `string`
  * id **required** `string`: The ID of the source to be retrieved.

#### Output
* output [customer_source](#customer_source)

### v1.customers.customer.sources.id.post



```js
stripe.v1.customers.customer.sources.id.post({
  "customer": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * customer **required** `string`
  * id **required** `string`: The ID of the card to be updated.
  * payload `object`
    * account_holder_name `string`: The name of the person or business that owns the bank account.
    * account_holder_type `string`: The type of entity that holds the account. This can be either `individual` or `company`.
    * address_city `string`: City/District/Suburb/Town/Village.
    * address_country `string`: Billing address country, if provided when creating card.
    * address_line1 `string`: Address line 1 (Street address/PO Box/Company name).
    * address_line2 `string`: Address line 2 (Apartment/Suite/Unit/Building).
    * address_state `string`: State/County/Province/Region.
    * address_zip `string`: ZIP or postal code
    * exp_month `string`: Two digit number representing the card’s expiration month.
    * exp_year `string`: Four digit number representing the card’s expiration year.
    * expand `array`: Specifies which fields in the response should be expanded.
      * items `string`
    * metadata `object`
    * name `string`: Cardholder name.
    * owner `object`
      * address `object`
        * city `string`
        * country `string`
        * line1 `string`
        * line2 `string`
        * postal_code `string`
        * state `string`
      * email `string`
      * name `string`
      * phone `string`

#### Output
* output [bank_account](#bank_account)

### v1.customers.customer.sources.id.verify.post



```js
stripe.v1.customers.customer.sources.id.verify.post({
  "customer": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * customer **required** `string`
  * id **required** `string`: The ID of the source to be verified.
  * payload `object`
    * amounts `array`: Two positive integers, in *cents*, equal to the values of the microdeposits sent to the bank account.

    * expand `array`: Specifies which fields in the response should be expanded.
      * items `string`
    * verification_method `string`

#### Output
* output [bank_account](#bank_account)

### AllCustomerSubscriptions
<p>You can see a list of the customer’s active subscriptions. Note that the 10 most recent active subscriptions are always available by default on the customer object. If you need more than those 10, you can use the limit and starting_after parameters to page through additional subscriptions.</p>


```js
stripe.AllCustomerSubscriptions({
  "customer": ""
}, context)
```

#### Input
* input `object`
  * expand `array`: Specifies which fields in the response should be expanded.
  * customer **required** `string`: The ID of the customer whose subscriptions will be retrieved.
  * ending_before `string`: A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
  * limit `integer`: A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
  * starting_after `string`: A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.

#### Output
* output `object`
  * data **required** `array`
    * items [subscription](#subscription)
  * has_more **required** `boolean`: True if this list has another page of items after this one that can be fetched.
  * object **required** `string` (values: list): String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
  * url **required** `string`: The URL where this list can be accessed.

### CreateCustomerSubscription
<p>Creates a new subscription on an existing customer.</p>


```js
stripe.CreateCustomerSubscription({
  "customer": ""
}, context)
```

#### Input
* input `object`
  * customer **required** `string`: The identifier of the customer to subscribe.
  * payload `object`
    * application_fee_percent `number`: A non-negative decimal between 0 and 100, with at most two decimal places. This represents the percentage of the subscription invoice subtotal that will be transferred to the application owner's Stripe account. The request must be made with an OAuth key in order to set an application fee percentage. For more information, see the application fees [documentation](https://stripe.com/docs/connect/subscriptions#collecting-fees-on-subscriptions).
    * billing `string` (values: charge_automatically, send_invoice): Either `charge_automatically`, or `send_invoice`. When charging automatically, Stripe will attempt to pay this subscription at the end of the cycle using the default source attached to the customer. When sending an invoice, Stripe will email your customer an invoice with payment instructions. Defaults to `charge_automatically`.
    * coupon `string`: The code of the coupon to apply to this subscription. A coupon applied to a subscription will only affect invoices created for that particular subscription.
    * days_until_due `integer`: Number of days a customer has to pay invoices generated by this subscription. Valid only for subscriptions where `billing` is set to `send_invoice`.
    * expand `array`: Specifies which fields in the response should be expanded.
      * items `string`
    * items `array`: List of subscription items, each with an attached plan.
      * items `object`
        * plan **required** `string`
        * quantity `integer`
    * metadata `object`: A set of key-value pairs that you can attach to a `Subscription` object. It can be useful for storing additional information about the subscription in a structured format.
    * prorate `boolean`: Boolean (defaults to `true`) telling us whether to [credit for unused time](/docs/subscriptions/billing-cycle#prorations) when the billing cycle changes (e.g. when switching plans, resetting `billing_cycle_anchor=now`, or starting a trial). If `false`, the anchor period will be free (similar to a trial) and no proration adjustments will be created.
    * tax_percent `number`: A non-negative decimal (with at most four decimal places) between 0 and 100. This represents the percentage of the subscription invoice subtotal that will be calculated and added as tax to the final amount in each billing period. For example, a plan which charges $10/month with a `tax_percent` of `20.0` will charge $12 per invoice. To unset a previously-set value, pass an empty string.
    * trial_from_plan `boolean`: Indicates if a plan's `trial_period_days` should be applied to the subscription. Setting `trial_end` per subscription is preferred, and this defaults to `false`. Setting this flag to `true` together with `trial_end` is not allowed.
    * trial_period_days `integer`: Integer representing the number of trial period days before the customer is charged for the first time. This will always overwrite any trials that might apply via a subscribed plan.

#### Output
* output [subscription](#subscription)

### DeleteCustomerSubscription
<p>Cancels a customer’s subscription. If you set the <code>at_period_end</code> parameter to <code>true</code>, the subscription will remain active until the end of the period, at which point it will be canceled and not renewed. Otherwise, with the default <code>false</code> value, the subscription is terminated immediately. In either case, the customer will not be charged again for the subscription.</p><p>Note, however, that any pending invoice items that you’ve created will still be charged for at the end of the period, unless manually <a href="#delete_invoiceitem">deleted</a>. If you’ve set the subscription to cancel at the end of the period, any pending prorations will also be left in place and collected at the end of the period. But if the subscription is set to cancel immediately, pending prorations will be removed.</p><p>By default, upon subscription cancellation, Stripe will close all unpaid invoices for the customer. This is designed to prevent unexpected payment attempts after the customer has canceled a subscription. However, you can reopen the invoices manually after subscription cancellation to have us proceed with payment collection. Or, you could even re-attempt payment yourself on all unpaid invoices before allowing the customer to cancel the subscription at all.</p>


```js
stripe.DeleteCustomerSubscription({
  "customer": "",
  "subscription_exposed_id": ""
}, context)
```

#### Input
* input `object`
  * customer **required** `string`
  * subscription_exposed_id **required** `string`
  * payload `object`
    * at_period_end `boolean`: A flag that, if set to `true`, will delay the subscription's cancellation until the end of the current period.

#### Output
* output [subscription](#subscription)

### RetrieveCustomerSubscription
<p>Retrieves the subscription with the given ID on the given customer.</p>


```js
stripe.RetrieveCustomerSubscription({
  "customer": "",
  "subscription_exposed_id": ""
}, context)
```

#### Input
* input `object`
  * expand `array`: Specifies which fields in the response should be expanded.
  * customer **required** `string`
  * subscription_exposed_id **required** `string`

#### Output
* output [deleted_object](#deleted_object)

### UpdateCustomerSubscription
<p>Updates an existing subscription on a customer to match the specified parameters. When changing plans or quantities, we will optionally prorate the price we charge next month to make up for any price changes. To preview how the proration will be calculated, use the <a href="#upcoming_invoice">upcoming invoice</a> endpoint.</p>


```js
stripe.UpdateCustomerSubscription({
  "customer": "",
  "subscription_exposed_id": ""
}, context)
```

#### Input
* input `object`
  * customer **required** `string`: The identifier of the customer to subscribe.
  * subscription_exposed_id **required** `string`
  * payload `object`
    * application_fee_percent `number`: A non-negative decimal between 0 and 100, with at most two decimal places. This represents the percentage of the subscription invoice subtotal that will be transferred to the application owner's Stripe account. The request must be made with an OAuth key in order to set an application fee percentage. For more information, see the application fees [documentation](https://stripe.com/docs/connect/subscriptions#collecting-fees-on-subscriptions).
    * billing `string` (values: charge_automatically, send_invoice): Either `charge_automatically`, or `send_invoice`. When charging automatically, Stripe will attempt to pay this subscription at the end of the cycle using the default source attached to the customer. When sending an invoice, Stripe will email your customer an invoice with payment instructions. Defaults to `charge_automatically`.
    * cancel_at_period_end `boolean`: Boolean indicating whether this subscription should cancel at the end of the current period.
    * coupon `string`: The code of the coupon to apply to this subscription. A coupon applied to a subscription will only affect invoices created for that particular subscription.
    * days_until_due `integer`: Number of days a customer has to pay invoices generated by this subscription. Valid only for subscriptions where `billing` is set to `send_invoice`.
    * expand `array`: Specifies which fields in the response should be expanded.
      * items `string`
    * items `array`: List of subscription items, each with an attached plan.
      * items `object`
        * clear_usage `boolean`
        * deleted `boolean`
        * id `string`
        * metadata `object`
        * plan `string`
        * quantity `integer`
    * metadata `object`: A set of key-value pairs that you can attach to a subscription object. This can be useful for storing additional information about the subscription in a structured format.
    * prorate `boolean`: Boolean (defaults to `true`) telling us whether to [credit for unused time](/docs/subscriptions/billing-cycle#prorations) when the billing cycle changes (e.g. when switching plans, resetting `billing_cycle_anchor=now`, or starting a trial). If `false`, the anchor period will be free (similar to a trial) and no proration adjustments will be created.
    * proration_date `integer`: If set, the proration will be calculated as though the subscription was updated at the given time. This can be used to apply exactly the same proration that was previewed with [upcoming invoice](#retrieve_customer_invoice) endpoint. It can also be used to implement custom proration logic, such as prorating by day instead of by second, by providing the time that you wish to use for proration calculations.
    * tax_percent `number`: A non-negative decimal (with at most four decimal places) between 0 and 100. This represents the percentage of the subscription invoice subtotal that will be calculated and added as tax to the final amount in each billing period. For example, a plan which charges $10/month with a `tax_percent` of `20.0` will charge $12 per invoice. To unset a previously-set value, pass an empty string.
    * trial_from_plan `boolean`: Indicates if a plan's `trial_period_days` should be applied to the subscription. Setting `trial_end` per subscription is preferred, and this defaults to `false`. Setting this flag to `true` together with `trial_end` is not allowed.

#### Output
* output [subscription](#subscription)

### v1.customers.customer.subscriptions.subscription_exposed_id.discount.delete
<p>Removes the currently applied discount on a customer.</p>


```js
stripe.v1.customers.customer.subscriptions.subscription_exposed_id.discount.delete({
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

### v1.customers.customer.subscriptions.subscription_exposed_id.discount.get



```js
stripe.v1.customers.customer.subscriptions.subscription_exposed_id.discount.get({
  "customer": "",
  "subscription_exposed_id": ""
}, context)
```

#### Input
* input `object`
  * expand `array`: Specifies which fields in the response should be expanded.
  * customer **required** `string`
  * subscription_exposed_id **required** `string`

#### Output
* output [discount](#discount)

### AllDisputes
<p>Returns a list of your disputes.</p>


```js
stripe.AllDisputes({}, context)
```

#### Input
* input `object`
  * expand `array`: Specifies which fields in the response should be expanded.
  * created `integer`
  * ending_before `string`: A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
  * limit `integer`: A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
  * starting_after `string`: A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.

#### Output
* output `object`
  * data **required** `array`
    * items [dispute](#dispute)
  * has_more **required** `boolean`: True if this list has another page of items after this one that can be fetched.
  * object **required** `string` (values: list): String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
  * url **required** `string`: The URL where this list can be accessed.

### RetrieveDispute
<p>Retrieves the dispute with the given ID.</p>


```js
stripe.RetrieveDispute({
  "dispute": ""
}, context)
```

#### Input
* input `object`
  * expand `array`: Specifies which fields in the response should be expanded.
  * dispute **required** `string`: ID of dispute to retrieve.

#### Output
* output [dispute](#dispute)

### UpdateDispute
<p>When you get a dispute, contacting your customer is always the best first step. If that doesn’t work, you can submit evidence to help us resolve the dispute in your favor. You can do this in your <a href="https://dashboard.stripe.com/disputes">dashboard</a>, but if you prefer, you can use the API to submit evidence programmatically.</p><p>Depending on your dispute type, different evidence fields will give you a better chance of winning your dispute. To figure out which evidence fields to provide, see our <a href="/docs/disputes/categories">guide to dispute types</a>.</p>


```js
stripe.UpdateDispute({
  "dispute": ""
}, context)
```

#### Input
* input `object`
  * dispute **required** `string`: ID of the dispute to update.
  * payload `object`
    * evidence `object`: Evidence to upload, to respond to a dispute. Updating any field in the hash will submit all fields in the hash for review. The combined character count of all fields is limited to 150,000.
      * access_activity_log `string`
      * billing_address `string`
      * cancellation_policy `string`
      * cancellation_policy_disclosure `string`
      * cancellation_rebuttal `string`
      * customer_communication `string`
      * customer_email_address `string`
      * customer_name `string`
      * customer_purchase_ip `string`
      * customer_signature `string`
      * duplicate_charge_documentation `string`
      * duplicate_charge_explanation `string`
      * duplicate_charge_id `string`
      * product_description `string`
      * receipt `string`
      * refund_policy `string`
      * refund_policy_disclosure `string`
      * refund_refusal_explanation `string`
      * service_date `string`
      * service_documentation `string`
      * shipping_address `string`
      * shipping_carrier `string`
      * shipping_date `string`
      * shipping_documentation `string`
      * shipping_tracking_number `string`
      * uncategorized_file `string`
      * uncategorized_text `string`
    * expand `array`: Specifies which fields in the response should be expanded.
      * items `string`
    * metadata `object`: A set of key-value pairs that you can attach to a dispute object. This can be useful for storing additional information about the dispute in a structured format.
    * submit `boolean`: Whether to immediately submit evidence to the bank. If `false`, evidence is staged on the dispute. Staged evidence is visible in the API and Dashboard, and can be submitted to the bank by making another request with this attribute set to `true` (the default).

#### Output
* output [dispute](#dispute)

### CloseDispute
<p>Closing the dispute for a charge indicates that you do not have any evidence to submit and are essentially dismissing the dispute, acknowledging it as lost.</p><p>The status of the dispute will change from <code>needs_response</code> to <code>lost</code>. <em>Closing a dispute is irreversible</em>.</p>


```js
stripe.CloseDispute({
  "dispute": ""
}, context)
```

#### Input
* input `object`
  * dispute **required** `string`: ID of the dispute to close.
  * payload `object`
    * expand `array`: Specifies which fields in the response should be expanded.
      * items `string`

#### Output
* output [dispute](#dispute)

### CreateEphemeralKey
<p>Creates a short-lived API key for a given resource.</p>


```js
stripe.CreateEphemeralKey({
  "payload": {
    "customer": ""
  }
}, context)
```

#### Input
* input `object`
  * payload **required** `object`
    * customer **required** `string`: The ID of the Customer you'd like to modify using the resulting ephemeral key.
    * expand `array`: Specifies which fields in the response should be expanded.
      * items `string`

#### Output
* output [ephemeral_key_with_secret](#ephemeral_key_with_secret)

### DeleteEphemeralKey
<p>Invalidates a short-lived API key for a given resource.</p>


```js
stripe.DeleteEphemeralKey({
  "key": ""
}, context)
```

#### Input
* input `object`
  * key **required** `string`: The ID of the key you'd like to invalidate.

#### Output
* output [ephemeral_key](#ephemeral_key)

### NotificationEventAll
<p>List events, going back up to 30 days.</p>


```js
stripe.NotificationEventAll({}, context)
```

#### Input
* input `object`
  * expand `array`: Specifies which fields in the response should be expanded.
  * created `integer`
  * ending_before `string`: A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
  * limit `integer`: A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
  * starting_after `string`: A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
  * type `string`: A string containing a specific event name, or group of events using * as a wildcard. The list will be filtered to include only events with a matching event property.
  * types `array`: An array of up to 20 strings containing specific event names. The list will be filtered to include only events with a matching event property. You may pass either `type` or `types`, but not both.

#### Output
* output `object`
  * data **required** `array`
    * items [notification_event](#notification_event)
  * has_more **required** `boolean`: True if this list has another page of items after this one that can be fetched.
  * object **required** `string` (values: list): String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
  * url **required** `string`: The URL where this list can be accessed.

### NotificationEventRetrieve
<p>Retrieves the details of an event. Supply the unique identifier of the event, which you might have received in a webhook.</p>


```js
stripe.NotificationEventRetrieve({
  "id": ""
}, context)
```

#### Input
* input `object`
  * expand `array`: Specifies which fields in the response should be expanded.
  * id **required** `string`: The identifier of the event to be retrieved.

#### Output
* output [notification_event](#notification_event)

### NotificationEventRetry
<p>Resend an event. This only works in testmode</p>


```js
stripe.NotificationEventRetry({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`
  * payload `object`
    * expand `array`: Specifies which fields in the response should be expanded.
      * items `string`

#### Output
* output [notification_event](#notification_event)

### AllExchangeRate
<p>Returns a list of objects that contain the rates at which foreign currencies are converted to one another. Only shows the currencies for which Stripe supports.</p>


```js
stripe.AllExchangeRate({}, context)
```

#### Input
* input `object`
  * expand `array`: Specifies which fields in the response should be expanded.
  * ending_before `string`: A cursor for use in pagination. `ending_before` is the currency that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with the exchange rate for currency X your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
  * limit `integer`: A limit on the number of objects to be returned. Limit can range between 1 and total number of supported payout currencies, and the default is the max.
  * starting_after `string`: A cursor for use in pagination. `starting_after` is the currency that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with the exchange rate for currency X, your subsequent call can include `starting_after=X` in order to fetch the next page of the list.

#### Output
* output `object`
  * data **required** `array`
    * items [exchange_rate](#exchange_rate)
  * has_more **required** `boolean`: True if this list has another page of items after this one that can be fetched.
  * object **required** `string` (values: list): String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
  * url **required** `string`: The URL where this list can be accessed.

### RetrieveExchangeRate
<p>Retrieves the exchange rates from the given currency to every supported currency.</p>


```js
stripe.RetrieveExchangeRate({
  "currency": ""
}, context)
```

#### Input
* input `object`
  * expand `array`: Specifies which fields in the response should be expanded.
  * currency **required** `string`: Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).

#### Output
* output [exchange_rate](#exchange_rate)

### FileFileUploadAll
<p>Returns a list of the files that you have uploaded to Stripe. The file uploads are returned sorted by creation date, with the most recently created file uploads appearing first.</p>


```js
stripe.FileFileUploadAll({}, context)
```

#### Input
* input `object`
  * expand `array`: Specifies which fields in the response should be expanded.
  * created `integer`
  * ending_before `string`: A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
  * limit `integer`: A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
  * purpose `string`: The file purpose to filter queries by. If none is provided, files will not be filtered by purpose.
  * starting_after `string`: A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.

#### Output
* output `object`
  * data **required** `array`
    * items [file_upload](#file_upload)
  * has_more **required** `boolean`: True if this list has another page of items after this one that can be fetched.
  * object **required** `string` (values: list): String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
  * url **required** `string`: The URL where this list can be accessed.

### FileFileUploadCreate
<p>To upload a file to Stripe, you’ll need to send a request of type <code>multipart/form-data</code>. The request should contain the file you would like to upload, as well as the parameters for creating a file.</p><p>All of Stripe’s officially supported API libraries should have support for sending <code>multipart/form-data</code>.</p>


```js
stripe.FileFileUploadCreate({
  "payload": {
    "file": "",
    "purpose": ""
  }
}, context)
```

#### Input
* input `object`
  * payload **required** `object`
    * expand `array`: Specifies which fields in the response should be expanded.
      * items `string`
    * file **required** `string`: A file to upload. The file should follow the specifications of RFC 2388 (which defines file transfers for the `multipart/form-data` protocol).
    * purpose **required** `string` (values: business_logo, customer_signature, dispute_evidence, identity_document, pci_document, tax_document_user_upload): The purpose of the uploaded file. Possible values are `business_logo`, `customer_signature`, `dispute_evidence`, `identity_document`, `pci_document`, or `tax_document_user_upload`

#### Output
* output [file_upload](#file_upload)

### FileFileUploadRetrieve
<p>Retrieves the details of an existing file object. Supply the unique file upload ID from a file creation request, and Stripe will return the corresponding transfer information.</p>


```js
stripe.FileFileUploadRetrieve({
  "id": ""
}, context)
```

#### Input
* input `object`
  * expand `array`: Specifies which fields in the response should be expanded.
  * id **required** `string`: The identifier of the file upload to be retrieved.

#### Output
* output [file_upload](#file_upload)

### AllInvoiceItems
<p>Returns a list of your invoice items. Invoice items are returned sorted by creation date, with the most recently created invoice items appearing first.</p>


```js
stripe.AllInvoiceItems({}, context)
```

#### Input
* input `object`
  * expand `array`: Specifies which fields in the response should be expanded.
  * created `integer`
  * customer `string`: The identifier of the customer whose invoice items to return. If none is provided, all invoice items will be returned.
  * ending_before `string`: A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
  * invoice `string`: Only return invoice items belonging to this invoice. If none is provided, all invoice items will be returned. If specifying an invoice, no customer identifier is needed.
  * limit `integer`: A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
  * starting_after `string`: A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.

#### Output
* output `object`
  * data **required** `array`
    * items [invoice_item](#invoice_item)
  * has_more **required** `boolean`: True if this list has another page of items after this one that can be fetched.
  * object **required** `string` (values: list): String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
  * url **required** `string`: The URL where this list can be accessed.

### CreateInvoiceItem
<p>Adds an arbitrary charge or credit to the customer’s upcoming invoice.</p>


```js
stripe.CreateInvoiceItem({
  "payload": {
    "currency": "",
    "customer": ""
  }
}, context)
```

#### Input
* input `object`
  * payload **required** `object`
    * amount `integer`: The integer amount in **%s** of the charge to be applied to the upcoming invoice. If you want to apply a credit to the customer's account, pass a negative amount.
    * currency **required** `string`: Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
    * customer **required** `string`: The ID of the customer who will be billed when this invoice item is billed.
    * description `string`: An arbitrary string which you can attach to the invoice item. The description is displayed in the invoice for easy tracking.
    * discountable `boolean`: Controls whether discounts apply to this invoice item. Defaults to false for prorations or negative invoice items, and true for all other invoice items.
    * expand `array`: Specifies which fields in the response should be expanded.
      * items `string`
    * invoice `string`: The ID of an existing invoice to add this invoice item to. When left blank, the invoice item will be added to the next upcoming scheduled invoice. Use this when adding invoice items in response to an invoice.created webhook. You cannot add an invoice item to an invoice that has already been paid, attempted or closed.
    * metadata `object`: A set of key/value pairs that you can attach to an invoice item object. It can be useful for storing additional information about the invoice item in a structured format.
    * quantity `integer`: Non-negative integer. The quantity of units for the invoice item.
    * subscription `string`: The ID of a subscription to add this invoice item to. When left blank, the invoice item will be be added to the next upcoming scheduled invoice. When set, scheduled invoices for subscriptions other than the specified subscription will ignore the invoice item. Use this when you want to express that an invoice item has been accrued within the context of a particular subscription.
    * unit_amount `integer`: The integer unit amount in **%s** of the charge to be applied to the upcoming invoice. This unit_amount will be multiplied by the quantity to get the full amount. If you want to apply a credit to the customer's account, pass a negative unit_amount.

#### Output
* output [invoice_item](#invoice_item)

### DeleteInvoiceItem
<p>Removes an invoice item from the upcoming invoice. Removing an invoice item is only possible before the invoice it’s attached to is closed.</p>


```js
stripe.DeleteInvoiceItem({
  "invoiceitem": ""
}, context)
```

#### Input
* input `object`
  * invoiceitem **required** `string`: The identifier of the invoice item to be deleted.

#### Output
* output [deleted_object](#deleted_object)

### RetrieveInvoiceItem
<p>Retrieves the invoice item with the given ID.</p>


```js
stripe.RetrieveInvoiceItem({
  "invoiceitem": ""
}, context)
```

#### Input
* input `object`
  * expand `array`: Specifies which fields in the response should be expanded.
  * invoiceitem **required** `string`: The ID of the desired invoice item.

#### Output
* output [invoice_item](#invoice_item)

### UpdateInvoiceItem
<p>Updates the amount or description of an invoice item on an upcoming invoice. Updating an invoice item is only possible before the invoice it’s attached to is closed.</p>


```js
stripe.UpdateInvoiceItem({
  "invoiceitem": ""
}, context)
```

#### Input
* input `object`
  * invoiceitem **required** `string`
  * payload `object`
    * amount `integer`: The integer amount in **%s** of the charge to be applied to the upcoming invoice. If you want to apply a credit to the customer's account, pass a negative amount.
    * description `string`: An arbitrary string which you can attach to the invoice item. The description is displayed in the invoice for easy tracking.
    * discountable `boolean`: Controls whether discounts apply to this invoice item. Defaults to false for prorations or negative invoice items, and true for all other invoice items. Cannot be set to true for prorations.
    * expand `array`: Specifies which fields in the response should be expanded.
      * items `string`
    * metadata `object`: A set of key/value pairs that you can attach to an invoice item object. It can be useful for storing additional information about the invoice item in a structured format.
    * quantity `integer`: Non-negative integer. The quantity of units for the invoice item.
    * unit_amount `integer`: The integer unit amount in **%s** of the charge to be applied to the upcoming invoice. This unit_amount will be multiplied by the quantity to get the full amount. If you want to apply a credit to the customer's account, pass a negative unit_amount.

#### Output
* output [invoice_item](#invoice_item)

### AllInvoices
<p>You can list all invoices, or list the invoices for a specific customer. The invoices are returned sorted by creation date, with the most recently created invoices appearing first.</p>


```js
stripe.AllInvoices({}, context)
```

#### Input
* input `object`
  * expand `array`: Specifies which fields in the response should be expanded.
  * billing `string`: The billing mode of the invoice to retrieve. Either `charge_automatically` or `send_invoice`.
  * customer `string`: Only return invoices for the customer specified by this customer ID.
  * date `integer`
  * due_date `integer`
  * ending_before `string`: A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
  * limit `integer`: A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
  * starting_after `string`: A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
  * subscription `string`: Only return invoices for the subscription specified by this subscription ID.

#### Output
* output `object`
  * data **required** `array`
    * items [invoice](#invoice)
  * has_more **required** `boolean`: True if this list has another page of items after this one that can be fetched.
  * object **required** `string` (values: list): String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
  * url **required** `string`: The URL where this list can be accessed.

### CreateInvoice
<p>If you need to invoice your customer outside the regular billing cycle, you can create an invoice that pulls in all pending invoice items, including prorations. The customer’s billing cycle and regular subscription won’t be affected.</p><p>Once you create the invoice, Stripe will attempt to collect payment according to your <a href="https://dashboard.stripe.com/account/recurring">subscriptions settings</a>, though you can choose to <a href="#pay_invoice">pay it right</a> away.</p>


```js
stripe.CreateInvoice({
  "payload": {
    "customer": ""
  }
}, context)
```

#### Input
* input `object`
  * payload **required** `object`
    * application_fee `integer`: A fee in %s that will be applied to the invoice and transferred to the application owner's Stripe account. The request must be made with an OAuth key or the Stripe-Account header in order to take an application fee. For more information, see the application fees [documentation](/docs/connect/subscriptions#working-with-invoices).
    * billing `string` (values: charge_automatically, send_invoice): Either `charge_automatically`, or `send_invoice`. When charging automatically, Stripe will attempt to pay this invoice using the default source attached to the customer. When sending an invoice, Stripe will email this invoice to the customer with payment instructions. Defaults to `charge_automatically`.
    * customer **required** `string`
    * days_until_due `integer`: The number of days from which the invoice is created until it is due. Only valid for invoices where `billing=send_invoice`.
    * description `string`
    * due_date `integer`: The date on which payment for this invoice is due. Only valid for invoices where `billing=send_invoice`.
    * expand `array`: Specifies which fields in the response should be expanded.
      * items `string`
    * metadata `object`
    * statement_descriptor `string`: Extra information about a charge for the customer's credit card statement. It must contain at least one letter. If not specified and this invoice is part of a subscription, the default `statement_descriptor` will be set to the first subscription item's product's `statement_descriptor`.
    * subscription `string`: The ID of the subscription to invoice. If not set, the created invoice will include all pending invoice items for the customer. If set, the created invoice will exclude pending invoice items that pertain to other subscriptions.
    * tax_percent `number`: The percent tax rate applied to the invoice, represented as a decimal number.

#### Output
* output [invoice](#invoice)

### RetrieveCustomerUpcomingInvoice
<p>At any time, you can preview the upcoming invoice for a customer. This will show you all the charges that are pending, including subscription renewal charges, invoice item charges, etc. It will also show you any discount that is applicable to the customer.</p><p>Note that when you are viewing an upcoming invoice, you are simply viewing a preview – the invoice has not yet been created. As such, the upcoming invoice will not show up in invoice listing calls, and you cannot use the API to pay or edit the invoice. If you want to change the amount that your customer will be billed, you can add, remove, or update pending invoice items, or update the customer’s discount.</p><p>You can preview the effects of updating a subscription, including a preview of what proration will take place. To ensure that the actual proration is calculated exactly the same as the previewed proration, you should pass a <code>proration_date</code> parameter when doing the actual subscription update. The value passed in should be the same as the <code>subscription_proration_date</code> returned on the upcoming invoice resource. The recommended way to get only the prorations being previewed is to consider only proration line items where <code>period[start]</code> is equal to the <code>subscription_proration_date</code> on the upcoming invoice resource.</p>


```js
stripe.RetrieveCustomerUpcomingInvoice({
  "customer": ""
}, context)
```

#### Input
* input `object`
  * expand `array`: Specifies which fields in the response should be expanded.
  * coupon `string`: The code of the coupon to apply. If `subscription` or `subscription_items` is provided, the invoice returned will preview updating or creating a subscription with that coupon. Otherwise, it will preview applying that coupon to the customer for the next upcoming invoice from among the customer's subscriptions. The invoice can be previewed without a coupon by passing this value as an empty string.
  * customer **required** `string`: The identifier of the customer whose upcoming invoice you'd like to retrieve.
  * invoice_items `array`: List of invoice items to add or update in the upcoming invoice preview.
  * subscription `string`: The identifier of the subscription for which you'd like to retrieve the upcoming invoice. If not provided, but a `subscription_items` is provided, you will preview creating a subscription with those items. If neither `subscription` nor `subscription_items` is provided, you will retrieve the next upcoming invoice from among the customer's subscriptions.
  * subscription_billing_cycle_anchor `string`
  * subscription_items `array`: List of subscription items, each with an attached plan.
  * subscription_prorate `boolean`: If previewing an update to a subscription, this decides whether the preview will show the result of applying prorations or not. If set, one of `subscription_items` or `subscription`, and one of `subscription_items` or `subscription_trial_end` are required.
  * subscription_proration_date `integer`: If previewing an update to a subscription, and doing proration, `subscription_proration_date` forces the proration to be calculated as though the update was done at the specified time. The time given must be within the current subscription period, and cannot be before the subscription was on its current plan. If set, `subscription`, and one of `subscription_items`, or `subscription_trial_end` are required. Also, `subscription_proration` cannot be set to false.
  * subscription_tax_percent `number`: If provided, the invoice returned will preview updating or creating a subscription with that tax percent. If set, one of `subscription_items` or `subscription` is required.
  * subscription_trial_end `integer`: If provided, the invoice returned will preview updating or creating a subscription with that trial end. If set, one of `subscription_items` or `subscription` is required.
  * subscription_trial_from_plan `boolean`: Indicates if a plan's `trial_period_days` should be applied to the subscription. Setting `subscription_trial_end` per subscription is preferred, and this defaults to `false`. Setting this flag to `true` together with `subscription_trial_end` is not allowed.

#### Output
* output [upcoming_invoice](#upcoming_invoice)

### AllUpcomingInvoiceLines
<p>When retrieving an upcoming invoice, you’ll get a <strong>lines</strong> property containing the total count of line items and the first handful of those items. There is also a URL where you can retrieve the full (paginated) list of line items.</p>


```js
stripe.AllUpcomingInvoiceLines({
  "customer": ""
}, context)
```

#### Input
* input `object`
  * expand `array`: Specifies which fields in the response should be expanded.
  * coupon `string`: Preview applying this coupon to the invoice. If a `subscription` or `subscription_items` is provided, the invoice returned will preview updating or creating a subscription with that coupon. Otherwise, it will preview applying that coupon to the customer for the next upcoming invoice from among the customer's subscriptions. Otherwise this parameter is ignored.
  * customer **required** `string`: The customer of the upcoming invoice is required. In other cases it is ignored.
  * ending_before `string`: A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
  * limit `integer`: A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
  * starting_after `string`: A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
  * subscription `string`: The subscription of the upcoming invoice is optional. In other cases it is ignored.
  * subscription_billing_cycle_anchor `string`
  * subscription_items `array`: Preview updating the subscription with this list of items. Otherwise this parameter is ignored.
  * subscription_prorate `boolean`: For upcoming invoices, this decides whether the preview will show the result of applying prorations or not. If set, one of `subscription_items` or `subscription`, and one of `subscription_items`, or `subscription_trial_end` are required. Otherwise this parameter is ignored.
  * subscription_proration_date `integer`: For previewing upcoming invoices with proration, `subscription_proration_date` forces the proration to be calculated as though the update was done at the specified time. The time given must be within the current subscription period, and cannot be before the subscription was on its current plan.If set, `subscription`, and one of `subscription_items` or `subscription_trial_end` are required. Also, `subscription_proration` cannot be set to false. Otherwise this parameter is ignored.
  * subscription_tax_percent `number`
  * subscription_trial_end `integer`: Preview updating or creating a subscription with that trial end. If set, one of `subscription_items` or `subscription` is required. Otherwise this parameter is ignored.
  * subscription_trial_from_plan `boolean`: Indicates if a plan's `trial_period_days` should be applied to the subscription. Setting `subscription_trial_end` per subscription is preferred, and this defaults to `false`. Setting this flag to `true` together with `subscription_trial_end` is not allowed.

#### Output
* output `object`
  * data **required** `array`
    * items [invoice_line_item](#invoice_line_item)
  * has_more **required** `boolean`: True if this list has another page of items after this one that can be fetched.
  * object **required** `string` (values: list): String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
  * url **required** `string`: The URL where this list can be accessed.

### RetrieveInvoice
<p>Retrieves the invoice with the given ID.</p>


```js
stripe.RetrieveInvoice({
  "invoice": ""
}, context)
```

#### Input
* input `object`
  * expand `array`: Specifies which fields in the response should be expanded.
  * invoice **required** `string`: The identifier of the desired invoice.

#### Output
* output [invoice](#invoice)

### UpdateInvoice
<p>Until an invoice is paid, it is marked as open (<code>closed=false</code>). If you’d like to stop Stripe from attempting to collect payment on an invoice or would simply like to close the invoice out as no longer owed by the customer, you can update the closed parameter.</p>


```js
stripe.UpdateInvoice({
  "invoice": ""
}, context)
```

#### Input
* input `object`
  * invoice **required** `string`
  * payload `object`
    * application_fee `integer`: A fee in %s that will be applied to the invoice and transferred to the application owner's Stripe account. The request must be made with an OAuth key or the Stripe-Account header in order to take an application fee. For more information, see the application fees [documentation](/docs/connect/subscriptions#working-with-invoices).
    * closed `boolean`: Boolean representing whether an invoice is closed or not. To close an invoice, pass true.
    * days_until_due `integer`: The number of days from which the invoice is created until it is due. Only valid for invoices where `billing=send_invoice`.
    * description `string`
    * due_date `integer`: The date on which payment for this invoice is due. Only valid for invoices where `billing=send_invoice`.
    * expand `array`: Specifies which fields in the response should be expanded.
      * items `string`
    * forgiven `boolean`: Boolean representing whether an invoice is forgiven or not. To forgive an invoice, pass true. Forgiving an invoice instructs us to update the subscription status as if the invoice were successfully paid. Once an invoice has been forgiven, it cannot be unforgiven or reopened.
    * metadata `object`
    * paid `boolean`: Boolean representing whether an invoice is paid or not. To mark invoice as paid, pass true. Only applies to invoices where `billing=send_invoice`.
    * statement_descriptor `string`: Extra information about a charge for the customer's credit card statement. It must contain at least one letter. If not specified and this invoice is part of a subscription, the default `statement_descriptor` will be set to the first subscription item's product's `statement_descriptor`.
    * tax_percent `number`: The percent tax rate applied to the invoice, represented as a non-negative decimal number (with at most four decimal places) between 0 and 100. To unset a previously-set value, pass an empty string. The tax rate of an attempted, paid or forgiven invoice cannot be changed.

#### Output
* output [invoice](#invoice)

### AllInvoiceLines
<p>When retrieving an invoice, you’ll get a <strong>lines</strong> property containing the total count of line items and the first handful of those items. There is also a URL where you can retrieve the full (paginated) list of line items.</p>


```js
stripe.AllInvoiceLines({
  "invoice": ""
}, context)
```

#### Input
* input `object`
  * expand `array`: Specifies which fields in the response should be expanded.
  * ending_before `string`: A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
  * invoice **required** `string`: The ID of the invoice containing the lines to be retrieved.
  * limit `integer`: A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
  * starting_after `string`: A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.

#### Output
* output `object`
  * data **required** `array`
    * items [invoice_line_item](#invoice_line_item)
  * has_more **required** `boolean`: True if this list has another page of items after this one that can be fetched.
  * object **required** `string` (values: list): String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
  * url **required** `string`: The URL where this list can be accessed.

### PayInvoice
<p>Stripe automatically creates and then attempts to collect payment on invoices for customers on subscriptions according to your <a href="https://dashboard.stripe.com/account/recurring">subscriptions settings</a>. However, if you’d like to attempt payment on an invoice out of the normal collection schedule or for some other reason, you can do so.</p>


```js
stripe.PayInvoice({
  "invoice": ""
}, context)
```

#### Input
* input `object`
  * invoice **required** `string`: ID of invoice to pay.
  * payload `object`
    * expand `array`: Specifies which fields in the response should be expanded.
      * items `string`
    * forgive `boolean`: Determines if invoice should be forgiven if source has insufficient funds to fully pay the invoice.
    * source `string`: A payment source to be charged. The source must be the ID of a source belonging to the customer associated with the invoice being paid.

#### Output
* output [invoice](#invoice)

### DisputesIssuerFraudRecordAll
<p>Returns a list of issuer fraud records.</p>


```js
stripe.DisputesIssuerFraudRecordAll({}, context)
```

#### Input
* input `object`
  * expand `array`: Specifies which fields in the response should be expanded.
  * charge `string`: Only return issuer fraud records for the charge specified by this charge ID.
  * ending_before `string`: A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
  * limit `integer`: A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
  * starting_after `string`: A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.

#### Output
* output `object`
  * data **required** `array`
    * items [issuer_fraud_record](#issuer_fraud_record)
  * has_more **required** `boolean`: True if this list has another page of items after this one that can be fetched.
  * object **required** `string` (values: list): String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
  * url **required** `string`: The URL where this list can be accessed.

### DisputesIssuerFraudRecordRetrieve
<p>Retrieves the details of an issuer fraud record that has previously been created. </p><p>Please refer to the <a href="#issuer_fraud_record_object">issuer fraud record</a> object reference for more details.</p>


```js
stripe.DisputesIssuerFraudRecordRetrieve({
  "issuer_fraud_record": ""
}, context)
```

#### Input
* input `object`
  * expand `array`: Specifies which fields in the response should be expanded.
  * issuer_fraud_record **required** `string`: The identifier of the issuer fraud record to be retrieved.

#### Output
* output [issuer_fraud_record](#issuer_fraud_record)

### AllOrderReturns
<p>Returns a list of your order returns. The returns are returned sorted by creation date, with the most recently created return appearing first.</p>


```js
stripe.AllOrderReturns({}, context)
```

#### Input
* input `object`
  * expand `array`: Specifies which fields in the response should be expanded.
  * created `integer`: Date this return was created.
  * ending_before `string`: A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
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

### RetrieveOrderReturn
<p>Retrieves the details of an existing order return. Supply the unique order ID from either an order return creation request or the order return list, and Stripe will return the corresponding order information.</p>


```js
stripe.RetrieveOrderReturn({
  "id": ""
}, context)
```

#### Input
* input `object`
  * expand `array`: Specifies which fields in the response should be expanded.
  * id **required** `string`: The identifier of the order return to be retrieved.

#### Output
* output [order_return](#order_return)

### AllOrders
<p>Returns a list of your orders. The orders are returned sorted by creation date, with the most recently created orders appearing first.</p>


```js
stripe.AllOrders({}, context)
```

#### Input
* input `object`
  * expand `array`: Specifies which fields in the response should be expanded.
  * created `integer`: Date this order was created.
  * customer `string`: Only return orders for the given customer.
  * ending_before `string`: A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
  * ids `array`: Only return orders with the given IDs.
  * limit `integer`: A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
  * starting_after `string`: A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
  * status `string`: Only return orders that have the given status. One of `created`, `paid`, `fulfilled`, or `refunded`.
  * status_transitions `string`: Filter orders based on when they were paid, fulfilled, canceled, or returned.
  * upstream_ids `array`: Only return orders with the given upstream order IDs.

#### Output
* output `object`
  * data **required** `array`
    * items [order](#order)
  * has_more **required** `boolean`: True if this list has another page of items after this one that can be fetched.
  * object **required** `string` (values: list): String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
  * url **required** `string`: The URL where this list can be accessed.

### CreateOrder



```js
stripe.CreateOrder({
  "payload": {
    "currency": ""
  }
}, context)
```

#### Input
* input `object`
  * payload **required** `object`
    * coupon `string`: A coupon code that represents a discount to be applied to this order. Must be one-time duration and in same currency as the order.
    * currency **required** `string`: Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
    * customer `string`: The ID of an existing customer to use for this order. If provided, the customer email and shipping address will be used to create the order. Subsequently, the customer will also be charged to pay the order. If `email` or `shipping` are also provided, they will override the values retrieved from the customer object.
    * email `string`: The email address of the customer placing the order.
    * expand `array`: Specifies which fields in the response should be expanded.
      * items `string`
    * items `array`: List of items constituting the order.
      * items `object`
        * amount `integer`
        * currency `string`
        * description `string`
        * parent `string`
        * quantity `integer`
        * type `string` (values: discount, shipping, sku, tax)
    * metadata `object`: A set of key/value pairs that you can attach to an order object. Limited to 500 characters. Metadata can be useful for storing additional information about the order in a structured format.
    * shipping `object`: Shipping address for the order. Required if any of the SKUs are for products that have `shippable` set to true.
      * address **required** `object`
        * city `string`
        * country `string`
        * line1 **required** `string`
        * line2 `string`
        * postal_code `string`
        * state `string`
      * name **required** `string`
      * phone `string`

#### Output
* output [order](#order)

### RetrieveOrder
<p>Retrieves the details of an existing order. Supply the unique order ID from either an order creation request or the order list, and Stripe will return the corresponding order information.</p>


```js
stripe.RetrieveOrder({
  "id": ""
}, context)
```

#### Input
* input `object`
  * expand `array`: Specifies which fields in the response should be expanded.
  * id **required** `string`: The identifier of the order to be retrieved.

#### Output
* output [order](#order)

### UpdateOrder
<p>Updates the specific order by setting the values of the parameters passed. Any parameters not provided will be left unchanged.</p>


```js
stripe.UpdateOrder({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`
  * payload `object`
    * coupon `string`: A coupon code that represents a discount to be applied to this order. Must be one-time duration and in same currency as the order.
    * expand `array`: Specifies which fields in the response should be expanded.
      * items `string`
    * metadata `object`: A set of key/value pairs that you can attach to a product object. It can be useful for storing additional information about the order in a structured format.
    * selected_shipping_method `string`: The shipping method to select for fulfilling this order. If specified, must be one of the `id`s of a shipping method in the `shipping_methods` array. If specified, will overwrite the existing selected shipping method, updating `items` as necessary.
    * shipping `object`: Tracking information once the order has been fulfilled.
      * carrier **required** `string`
      * tracking_number **required** `string`
    * status `string` (values: canceled, created, fulfilled, paid, returned): Current order status. One of `created`, `paid`, `canceled`, `fulfilled`, or `returned`. More detail in the [Relay API Overview](/docs/orders/guide#understanding-order-statuses).

#### Output
* output [order](#order)

### PayOrder



```js
stripe.PayOrder({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`
  * payload `object`
    * application_fee `integer`
    * customer `string`: The ID of an existing customer that will be charged for this order. If no customer was attached to the order at creation, either `source` or `customer` is required. Otherwise, the specified customer will be charged instead of the one attached to the order.
    * email `string`: The email address of the customer placing the order. Required if not previously specified for the order.
    * expand `array`: Specifies which fields in the response should be expanded.
      * items `string`
    * metadata `object`: A set of key/value pairs that you can attach to an order object. Limited to 500 characters. Metadata can be useful for storing additional information about the order in a structured format.
    * shipping_method `string`

#### Output
* output [order](#order)

### CreateOrderReturn
<p>Return all or part of an order. The order must have a status of <code>paid</code> or <code>fulfilled</code> before it can be returned. Once all items have been returned, the order will become <code>canceled</code> or <code>returned</code> depending on which status the order started in.</p>


```js
stripe.CreateOrderReturn({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`
  * payload `object`
    * expand `array`: Specifies which fields in the response should be expanded.
      * items `string`
    * items `array`: List of items to return.
      * items `object`
        * amount `integer`
        * description `string`
        * parent `string`
        * quantity `integer`
        * type `string` (values: discount, shipping, sku, tax)

#### Output
* output [order_return](#order_return)

### CreatePayment



```js
stripe.CreatePayment({
  "payload": {
    "amount": 0,
    "currency": ""
  }
}, context)
```

#### Input
* input `object`
  * payload **required** `object`
    * alternate_statement_descriptors `object`
      * kana `string`
      * kanji `string`
    * amount **required** `integer`
    * application `string`
    * application_fee `integer`
    * capture `boolean`
    * card_program `string`
    * currency **required** `string`
    * customer `string`
    * description `string`
    * destination `object`
      * account **required** `string`
      * amount `integer`
    * device_id `string`
    * exchange_rate `number`
    * expand `array`: Specifies which fields in the response should be expanded.
      * items `string`
    * external_id `string`
    * idempotency_key `string`
    * invoice `string`
    * invoice_source `string`
    * ip `string`
    * level3 `object`
      * customer_reference `string`
      * line_items **required** `array`
        * items `object`
          * discount_amount `integer`
          * product_code **required** `string`
          * product_description **required** `string`
          * quantity `integer`
          * tax_amount `integer`
          * unit_cost `integer`
      * merchant_reference **required** `string`
      * shipping_address_zip `string`
      * shipping_amount `integer`
      * shipping_from_zip `string`
    * metadata `object`
    * on_behalf_of `string`
    * order `string`
    * payment_method `string`
    * payment_user_agent `string`
    * receipt_email `string`
    * recurring `boolean`
    * referrer `string`
    * shipping `object`
      * address **required** `object`
        * city `string`
        * country `string`
        * line1 **required** `string`
        * line2 `string`
        * postal_code `string`
        * state `string`
      * carrier `string`
      * name **required** `string`
      * phone `string`
      * tracking_number `string`
    * source `string`
    * statement_address `object`
      * city **required** `string`
      * line1 **required** `string`
      * line2 `string`
      * postal_code **required** `string`
      * state **required** `string`
    * statement_descriptor `string`
    * transfer_group `string`
    * trust `object`
      * safety `string` (values: fraudulent, safe)
    * uncaptured `boolean`
    * user_agent `string`

#### Output
* output [charge](#charge)

### RetrievePayment



```js
stripe.RetrievePayment({
  "payment": ""
}, context)
```

#### Input
* input `object`
  * expand `array`: Specifies which fields in the response should be expanded.
  * payment **required** `string`

#### Output
* output [charge](#charge)

### PayoutAll
<p>Returns a list of existing payouts sent to third-party bank accounts or that Stripe has sent you. The payouts are returned in sorted order, with the most recently created payouts appearing first.</p>


```js
stripe.PayoutAll({}, context)
```

#### Input
* input `object`
  * expand `array`: Specifies which fields in the response should be expanded.
  * arrival_date `integer`
  * created `integer`
  * destination `string`: The ID of an external account - only return payouts sent to this external account.
  * ending_before `string`: A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
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

### PayoutCreate
<p>To send funds to your own bank account, you create a new payout object. Your <a href="#balance">Stripe balance</a> must be able to cover the payout amount, or you’ll receive an “Insufficient Funds” error.</p><p>If your API key is in test mode, money won’t actually be sent, though everything else will occur as if in live mode.</p><p>If you are creating a manual payout on a Stripe account that uses multiple payment source types, you’ll need to specify the source type balance that the payout should draw from. The <a href="#balance_object">balance object</a> details available and pending amounts by source type.</p>


```js
stripe.PayoutCreate({
  "payload": {
    "amount": 0,
    "currency": ""
  }
}, context)
```

#### Input
* input `object`
  * payload **required** `object`
    * amount **required** `integer`: A positive integer in cents representing how much to payout.
    * currency **required** `string`: Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
    * description `string`: An arbitrary string attached to the object. Often useful for displaying to users.
    * destination `string`: The ID of a bank account or a card to send the payout to. If no destination is supplied, the default external account for the specified currency will be used.
    * expand `array`: Specifies which fields in the response should be expanded.
      * items `string`
    * metadata `object`: A set of key/value pairs that you can attach to a payout object. It can be useful for storing additional information about the payout in a structured format.
    * method `string` (values: instant, standard): The method used to send this payout, which can be `standard` or `instant`. `instant` is only supported for payouts to debit cards. (See [Instant payouts for marketplaces for more information](https://stripe.com/blog/instant-payouts-for-marketplaces).)
    * source_type `string` (values: alipay_account, bank_account, bitcoin_receiver, card, source, stripe_account): The source balance to draw this payout from. Balances for different payment sources are kept separately. You can find the amounts with the balances API. Valid options are: **alipay_account**, **bank_account**, and **card**.
    * statement_descriptor `string`: A string to be displayed on the recipient's bank or card statement. This may be at most 22 characters. Attempting to use a `statement_descriptor` longer than 22 characters will return an error. Note: Most banks will truncate this information and/or display it inconsistently. Some may not display it at all.

#### Output
* output [payout](#payout)

### PayoutRetrieve
<p>Retrieves the details of an existing payout. Supply the unique payout ID from either a payout creation request or the payout list, and Stripe will return the corresponding payout information.</p>


```js
stripe.PayoutRetrieve({
  "payout": ""
}, context)
```

#### Input
* input `object`
  * expand `array`: Specifies which fields in the response should be expanded.
  * payout **required** `string`: The identifier of the payout to be retrieved.

#### Output
* output [payout](#payout)

### PayoutUpdate
<p>Updates the specified payout by setting the values of the parameters passed. Any parameters not provided will be left unchanged. This request accepts only the metadata as arguments.</p>


```js
stripe.PayoutUpdate({
  "payout": ""
}, context)
```

#### Input
* input `object`
  * payout **required** `string`: The identifier of the payout to be updated.
  * payload `object`
    * expand `array`: Specifies which fields in the response should be expanded.
      * items `string`
    * metadata `object`: A set of key/value pairs that you can attach to a payout object. It can be useful for storing additional information about the payout in a structured format.

#### Output
* output [payout](#payout)

### PayoutCancel
<p>A previously created payout can be canceled if it has not yet been paid out. Funds will be refunded to your available balance. You may not cancel automatic Stripe payouts.</p>


```js
stripe.PayoutCancel({
  "payout": ""
}, context)
```

#### Input
* input `object`
  * payout **required** `string`: The identifier of the payout to be canceled.
  * payload `object`
    * expand `array`: Specifies which fields in the response should be expanded.
      * items `string`

#### Output
* output [payout](#payout)

### AllPlans
<p>Returns a list of your plans.</p>


```js
stripe.AllPlans({}, context)
```

#### Input
* input `object`
  * expand `array`: Specifies which fields in the response should be expanded.
  * created `integer`: A filter on the list, based on the object `created` field. The value can be a string with an integer Unix timestamp, or it can be a dictionary with a number of different query options.
  * ending_before `string`: A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
  * limit `integer`: A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
  * product `string`: Only return plans for the given product.
  * starting_after `string`: A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.

#### Output
* output `object`
  * data **required** `array`
    * items [plan](#plan)
  * has_more **required** `boolean`: True if this list has another page of items after this one that can be fetched.
  * object **required** `string` (values: list): String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
  * url **required** `string`: The URL where this list can be accessed.

### CreatePlan
<p>You can create plans using the API, or in the Stripe <a href="https://dashboard.stripe.com/subscriptions/products">Dashboard</a>.</p>


```js
stripe.CreatePlan({
  "payload": {
    "currency": "",
    "interval": ""
  }
}, context)
```

#### Input
* input `object`
  * payload **required** `object`
    * aggregate_usage `string` (values: last_during_period, last_ever, max, sum): Specifies a usage aggregation strategy for plans of `usage_type=metered`. Allowed values are `sum` for summing up all usage during a period, `last_during_period` for picking the last usage record reported within a period, `last_ever` for picking the last usage record ever (across period bounds) or `max` which picks the usage record with the maximum reported usage during a period. Defaults to `sum`.
    * amount `integer`: A positive integer in %s (or 0 for a free plan) representing how much to charge on a recurring basis.
    * billing_scheme `string` (values: per_unit, tiered): Describes how to compute the price per period. Either `per_unit` or `tiered`. `per_unit` indicates that the fixed amount (specified in `amount`) will be charged per unit in `quantity` (for plans with `usage_type=licensed`), or per unit of total usage (for plans with `usage_type=metered`). `tiered` indicates that the unit pricing will be computed using a tiering strategy as defined using the `tiers` and `tiers_mode` attributes.
    * currency **required** `string`: Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
    * expand `array`: Specifies which fields in the response should be expanded.
      * items `string`
    * id `string`: An identifier randomly generated by Stripe. Used to identify this plan when subscribing a customer. You can optionally override this ID, but the ID must be unique across all plans in your Stripe account. You can, however, use the same plan ID in both live and test modes.
    * interval **required** `string` (values: day, month, week, year): Specifies billing frequency. Either `day`, `week`, `month` or `year`.
    * interval_count `integer`: The number of intervals between subscription billings. For example, `interval=month` and `interval_count=3` bills every 3 months. Maximum of one year interval allowed (1 year, 12 months, or 52 weeks).
    * metadata `object`: A set of key/value pairs that you can attach to a plan object. It can be useful for storing additional information about the plan in a structured format.
    * name `string`: The plan name. Customers may see this value on Stripe-generated invoices and receipts.
    * nickname `string`: A brief description of the plan, hidden from customers.
    * statement_descriptor `string`: An arbitrary string to be displayed on your customer's credit card statement. This may be up to 22 characters. The statement description may not include <>"' characters, and will appear on your customer's statement in capital letters. Non-ASCII characters are automatically stripped. While most banks display this information consistently, some may display it incorrectly or not at all. It must contain at least one letter.
    * tiers `array`: Each element represents a pricing tier. This parameter requires `billing_scheme` to be set to `tiered`. See also the documentation for `billing_scheme`.
      * items `object`
        * amount **required** `integer`
    * tiers_mode `string` (values: graduated, volume): Defines if the tiering price should be `graduated` or `volume` based. In `volume`-based tiering, the maximum quantity within a period determines the per unit price, in `graduated` tiering pricing can successively change as the quantity grows.
    * transform_usage `object`: Apply a transformation to the reported usage or set quantity before computing the billed price. Cannot be combined with `tiers`.
      * divide_by **required** `integer`
      * round **required** `string` (values: down, up)
    * trial_period_days `integer`: Default number of trial days when subscribing a customer to this plan using [`trial_from_plan=true`](/docs/api#create_subscription-trial_from_plan).
    * usage_type `string` (values: licensed, metered): Configures how the quantity per period should be determined, can be either `metered` or `licensed`. `licensed` will automatically bill the `quantity` set for a plan when adding it to a subscription, `metered` will aggregate the total usage based on usage records. Defaults to `licensed`.

#### Output
* output [plan](#plan)

### DeletePlan
<p>Deleting plans means new subscribers can’t be added. Existing subscribers aren’t affected.</p>


```js
stripe.DeletePlan({
  "plan": ""
}, context)
```

#### Input
* input `object`
  * plan **required** `string`: The identifier of the plan to be deleted.

#### Output
* output [deleted_object](#deleted_object)

### RetrievePlan
<p>Retrieves the plan with the given ID.</p>


```js
stripe.RetrievePlan({
  "plan": ""
}, context)
```

#### Input
* input `object`
  * expand `array`: Specifies which fields in the response should be expanded.
  * plan **required** `string`: The ID of the desired plan.

#### Output
* output [plan](#plan)

### UpdatePlan
<p>Updates the specified plan by setting the values of the parameters passed. Any parameters not provided are left unchanged. By design, you cannot change a plan’s ID, amount, currency, or billing cycle.</p>


```js
stripe.UpdatePlan({
  "plan": ""
}, context)
```

#### Input
* input `object`
  * plan **required** `string`: The identifier of the plan to be updated.
  * payload `object`
    * expand `array`: Specifies which fields in the response should be expanded.
      * items `string`
    * metadata `object`: A set of key/value pairs that you can attach to a plan object. It can be useful for storing additional information about the plan in a structured format. 
    * name `string`: The plan name. Customers may see this value on Stripe-generated invoices and receipts. 
    * nickname `string`: A brief description of the plan, hidden from customers.
    * product `string`: The product the plan belongs to. Note that after updating, statement descriptors and line items of the plan in active subscriptions will be affected.
    * statement_descriptor `string`: An arbitrary string to be displayed on your customer's credit card statement. This may be up to 22 characters. The statement description may not include <>"' characters, and will appear on your customer's statement in capital letters. Non-ASCII characters are automatically stripped. While most banks display this information consistently, some may display it incorrectly or not at all. It must contain at least one letter.
    * trial_period_days `integer`: Default number of trial days when subscribing a customer to this plan using [`trial_from_plan=true`](/docs/api#create_subscription-trial_from_plan).

#### Output
* output [plan](#plan)

### AllProducts
<p>Returns a list of your products. The products are returned sorted by creation date, with the most recently created products appearing first.</p>


```js
stripe.AllProducts({}, context)
```

#### Input
* input `object`
  * expand `array`: Specifies which fields in the response should be expanded.
  * active `boolean`: Only return products that are active or inactive (e.g., pass `false` to list all inactive products).
  * created `integer`: Only return products that were created during the given date interval.
  * ending_before `string`: A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
  * ids `array`: Only return products with the given IDs.
  * limit `integer`: A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
  * shippable `boolean`: Only return products that can be shipped (i.e., physical, not digital products).
  * starting_after `string`: A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
  * type `string`: Only return products of this type.
  * url `string`: Only return products with the given url.

#### Output
* output `object`
  * data **required** `array`
    * items [product](#product)
  * has_more **required** `boolean`: True if this list has another page of items after this one that can be fetched.
  * object **required** `string` (values: list): String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
  * url **required** `string`: The URL where this list can be accessed.

### CreateProduct
<p>Creates a new product object. To create a product for use with subscriptions, see <a href="#create_service_product">Subscriptions Products</a>.</p>


```js
stripe.CreateProduct({
  "payload": {
    "name": "",
    "type": ""
  }
}, context)
```

#### Input
* input `object`
  * payload **required** `object`
    * active `boolean`: Whether the product is currently available for purchase. Defaults to `true`. May only be set if type=`good`.
    * attributes `array`: A list of up to 5 alphanumeric attributes. Applicable to both `service` and `good` types.
      * items `string`
    * caption `string`: A short one-line description of the product, meant to be displayable to the customer. May only be set if type=`good`.
    * deactivate_on `array`: An array of Connect application names or identifiers that should not be able to order the SKUs for this product. May only be set if type=`good`.
      * items `string`
    * description `string`: The product's description, meant to be displayable to the customer. May only be set if type=`good`.
    * expand `array`: Specifies which fields in the response should be expanded.
      * items `string`
    * id `string`: An identifier will be randomly generated by Stripe. You can optionally override this ID, but the ID must be unique across all products in your Stripe account. Applicable to both `service` and `good` types.
    * images `array`: A list of up to 8 URLs of images for this product, meant to be displayable to the customer. May only be set if type=`good`.
      * items `string`
    * metadata `object`: A set of key/value pairs that you can attach to a product object. It can be useful for storing additional information about the product in a structured format. Applicable to both `service` and `good` types.
    * name **required** `string`: The product's name, meant to be displayable to the customer. Applicable to both `service` and `good` types.
    * package_dimensions `object`: The dimensions of this product for shipping purposes. A SKU associated with this product can override this value by having its own `package_dimensions`. May only be set if type=`good`.
      * height **required** `number`
      * length **required** `number`
      * weight **required** `number`
      * width **required** `number`
    * shippable `boolean`: Whether this product is shipped (i.e., physical goods). Defaults to `true`. May only be set if type=`good`.
    * statement_descriptor `string`: An arbitrary string to be displayed on your customer's credit card statement. This may be up to 22 characters. The statement description may not include <>"' characters, and will appear on your customer's statement in capital letters. Non-ASCII characters are automatically stripped. While most banks display this information consistently, some may display it incorrectly or not at all. It must contain at least one letter. May only be set if type=`service`.
    * type **required** `string` (values: good, service): The type of the product. The product is either of type `service`, which is eligible for use with Subscriptions and Plans or `good`, which is eligible for use with Orders and SKUs.
    * unit_label `string`: A label that represents units of this product, such as seat(s), in Stripe and on customers’ receipts and invoices. Only available on products of type=`service`.
    * url `string`: A URL of a publicly-accessible webpage for this product. May only be set if type=`good`.

#### Output
* output [product](#product)

### DeleteProduct
<p>Delete a product. Deleting a product with type=<code>good</code> is only possible if it has no SKUs associated with it. Deleting a product with type=<code>service</code> is only possible if it has no plans associated with it.</p>


```js
stripe.DeleteProduct({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of the product to delete.

#### Output
* output [deleted_product](#deleted_product)

### RetrieveProduct
<p>Retrieves the details of an existing product. Supply the unique product ID from either a product creation request or the product list, and Stripe will return the corresponding product information.</p>


```js
stripe.RetrieveProduct({
  "id": ""
}, context)
```

#### Input
* input `object`
  * expand `array`: Specifies which fields in the response should be expanded.
  * id **required** `string`: The identifier of the product to be retrieved.

#### Output
* output [product](#product)

### UpdateProduct
<p>Updates the specific product by setting the values of the parameters passed. Any parameters not provided will be left unchanged.</p><p>Note that a product’s <code>attributes</code> are not editable. Instead, you would need to deactivate the existing product and create a new one with the new attribute values.</p>


```js
stripe.UpdateProduct({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`
  * payload `object`
    * active `boolean`: Whether the product is available for purchase.
    * caption `string`: A short one-line description of the product, meant to be displayable to the customer.
    * description `string`: The product's description, meant to be displayable to the customer.
    * expand `array`: Specifies which fields in the response should be expanded.
      * items `string`
    * metadata `object`: A set of key/value pairs that you can attach to a product object. It can be useful for storing additional information about the product in a structured format.
    * name `string`: The product's name, meant to be displayable to the customer. Applicable to both `service` and `good` types.
    * package_dimensions `object`: The dimensions of this product for shipping purposes. A SKU associated with this product can override this value by having its own `package_dimensions`.
      * height **required** `number`
      * length **required** `number`
      * weight **required** `number`
      * width **required** `number`
    * shippable `boolean`: Whether this product is shipped (i.e., physical goods). Defaults to `true`.
    * statement_descriptor `string`: An arbitrary string to be displayed on your customer's credit card statement. This may be up to 22 characters. The statement description may not include <>"' characters, and will appear on your customer's statement in capital letters. Non-ASCII characters are automatically stripped. While most banks display this information consistently, some may display it incorrectly or not at all. It must contain at least one letter. May only be set if type=`service`.
    * unit_label `string`: A label that represents units of this product, such as seat(s), in Stripe and on customers’ receipts and invoices. Only available on products of type=`service`.
    * url `string`: A URL of a publicly-accessible webpage for this product.

#### Output
* output [product](#product)

### AllTransferRecipients
<p>Returns a list of your recipients. The recipients are returned sorted by creation date, with the most recently created recipients appearing first.</p>


```js
stripe.AllTransferRecipients({}, context)
```

#### Input
* input `object`
  * expand `array`: Specifies which fields in the response should be expanded.
  * created `integer`
  * ending_before `string`: A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
  * limit `integer`: A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
  * starting_after `string`: A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
  * type `string`
  * verified `boolean`: Only return recipients that are verified or unverified.

#### Output
* output `object`
  * data **required** `array`
    * items [transfer_recipient](#transfer_recipient)
  * has_more **required** `boolean`: True if this list has another page of items after this one that can be fetched.
  * object **required** `string` (values: list): String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
  * url **required** `string`: The URL where this list can be accessed.

### TransferRecipientCreate



```js
stripe.TransferRecipientCreate({
  "payload": {
    "name": "",
    "type": ""
  }
}, context)
```

#### Input
* input `object`
  * payload **required** `object`
    * description `string`
    * email `string`
    * expand `array`: Specifies which fields in the response should be expanded.
      * items `string`
    * metadata `object`
    * name **required** `string`
    * tax_id `string`
    * type **required** `string`

#### Output
* output [transfer_recipient](#transfer_recipient)

### TransferRecipientDelete
<p>Permanently deletes a recipient. It cannot be undone.</p>


```js
stripe.TransferRecipientDelete({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The identifier of the recipient to be deleted.

#### Output
* output [deleted_object](#deleted_object)

### RetrieveTransferRecipient
<p>Retrieves the details of an existing recipient. You need only supply the unique recipient identifier that was returned upon recipient creation.</p>


```js
stripe.RetrieveTransferRecipient({
  "id": ""
}, context)
```

#### Input
* input `object`
  * expand `array`: Specifies which fields in the response should be expanded.
  * id **required** `string`: The identifier of the recipient to be retrieved.

#### Output
* output [deleted_object](#deleted_object)

### TransferRecipientUpdate



```js
stripe.TransferRecipientUpdate({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`
  * payload `object`
    * default_card `string`
    * description `string`
    * email `string`
    * expand `array`: Specifies which fields in the response should be expanded.
      * items `string`
    * metadata `object`
    * name `string`
    * tax_id `string`
    * type `string`

#### Output
* output [transfer_recipient](#transfer_recipient)

### AllRefunds
<p>Returns a list of all refunds you’ve previously created. The refunds are returned in sorted order, with the most recent refunds appearing first. For convenience, the 10 most recent refunds are always available by default on the charge object.</p>


```js
stripe.AllRefunds({}, context)
```

#### Input
* input `object`
  * expand `array`: Specifies which fields in the response should be expanded.
  * charge `string`: Only return refunds for the charge specified by this charge ID.
  * ending_before `string`: A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
  * limit `integer`: A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
  * starting_after `string`: A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.

#### Output
* output `object`
  * data **required** `array`
    * items [refund](#refund)
  * has_more **required** `boolean`: True if this list has another page of items after this one that can be fetched.
  * object **required** `string` (values: list): String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
  * url **required** `string`: The URL where this list can be accessed.

### v1.refunds.post



```js
stripe.v1.refunds.post({}, context)
```

#### Input
* input `object`
  * payload `object`
    * amount `integer`
    * charge `string`
    * description `string`
    * directive `string`
    * expand `array`: Specifies which fields in the response should be expanded.
      * items `string`
    * metadata `object`
    * reason `string` (values: duplicate, fraudulent, requested_by_customer)
    * refund_application_fee `boolean`
    * reverse_transfer `boolean`

#### Output
* output [refund](#refund)

### RetrieveRefund
<p>Retrieves the details of an existing refund.</p>


```js
stripe.RetrieveRefund({
  "refund": ""
}, context)
```

#### Input
* input `object`
  * expand `array`: Specifies which fields in the response should be expanded.
  * refund **required** `string`: ID of refund to retrieve.

#### Output
* output [refund](#refund)

### UpdateRefund
<p>Updates the specified refund by setting the values of the parameters passed. Any parameters not provided will be left unchanged.</p><p>This request only accepts <code>metadata</code> as an argument.</p>


```js
stripe.UpdateRefund({
  "refund": ""
}, context)
```

#### Input
* input `object`
  * refund **required** `string`
  * payload `object`
    * expand `array`: Specifies which fields in the response should be expanded.
      * items `string`
    * metadata `object`: Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.

#### Output
* output [refund](#refund)

### AllSKUs
<p>Returns a list of your SKUs. The SKUs are returned sorted by creation date, with the most recently created SKUs appearing first.</p>


```js
stripe.AllSKUs({}, context)
```

#### Input
* input `object`
  * expand `array`: Specifies which fields in the response should be expanded.
  * active `boolean`: Only return SKUs that are active or inactive (e.g., pass `false` to list all inactive products).
  * attributes `string`: Only return SKUs that have the specified key/value pairs in this partially constructed dictionary. Can be specified only if `product` is also supplied. For instance, if the associated product has attributes `["color", "size"]`, passing in `attributes[color]=red` returns all the SKUs for this product that have `color` set to `red`.
  * ending_before `string`: A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
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

### CreateSKU
<p>Creates a new SKU associated with a product.</p>


```js
stripe.CreateSKU({
  "payload": {
    "currency": "",
    "inventory": {},
    "price": 0,
    "product": ""
  }
}, context)
```

#### Input
* input `object`
  * payload **required** `object`
    * active `boolean`: Whether the SKU is available for purchase. Default to `true`.
    * attributes `object`: A dictionary of attributes and values for the attributes defined by the product. If, for example, a product's attributes are `["size", "gender"]`, a valid SKU has the following dictionary of attributes: `{"size": "Medium", "gender": "Unisex"}`.
    * currency **required** `string`: Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
    * expand `array`: Specifies which fields in the response should be expanded.
      * items `string`
    * id `string`: The identifier for the SKU. Must be unique. If not provided, an identifier will be randomly generated.
    * image `string`: The URL of an image for this SKU, meant to be displayable to the customer.
    * inventory **required** `object`: Description of the SKU's inventory.
      * quantity `integer`
      * type `string` (values: bucket, finite, infinite)
      * value `string` (values: , in_stock, limited, out_of_stock)
    * metadata `object`: A set of key/value pairs that you can attach to a SKU object. It can be useful for storing additional information about the SKU in a structured format.
    * package_dimensions `object`: The dimensions of this SKU for shipping purposes.
      * height **required** `number`
      * length **required** `number`
      * weight **required** `number`
      * width **required** `number`
    * price **required** `integer`: The cost of the item as a nonnegative integer in the smallest currency unit (that is, 100 cents to charge $1.00, or 100 to charge ¥100, Japanese Yen being a zero-decimal currency).
    * product **required** `string`: The ID of the product this SKU is associated with. Must be a product with type `good`.

#### Output
* output [sku](#sku)

### DeleteSKU
<p>Delete a SKU. Deleting a SKU is only possible until it has been used in an order.</p>


```js
stripe.DeleteSKU({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The identifier of the SKU to be deleted.

#### Output
* output [deleted_object](#deleted_object)

### RetrieveSKU
<p>Retrieves the details of an existing SKU. Supply the unique SKU identifier from either a SKU creation request or from the product, and Stripe will return the corresponding SKU information.</p>


```js
stripe.RetrieveSKU({
  "id": ""
}, context)
```

#### Input
* input `object`
  * expand `array`: Specifies which fields in the response should be expanded.
  * id **required** `string`: The identifier of the SKU to be retrieved.

#### Output
* output [deleted_object](#deleted_object)

### UpdateSKU
<p>Updates the specific SKU by setting the values of the parameters passed. Any parameters not provided will be left unchanged.</p><p>Note that a SKU’s <code>attributes</code> are not editable. Instead, you would need to deactivate the existing SKU and create a new one with the new attribute values.</p>


```js
stripe.UpdateSKU({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`
  * payload `object`
    * active `boolean`: Whether this SKU is available for purchase.
    * attributes `object`: A dictionary of attributes and values for the attributes defined by the product. When specified, `attributes` will partially update the existing attributes dictionary on the product, with the postcondition that a value must be present for each attribute key on the product, and that all SKUs for the product must have unique sets of attributes.
    * currency `string`: Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
    * expand `array`: Specifies which fields in the response should be expanded.
      * items `string`
    * image `string`: The URL of an image for this SKU, meant to be displayable to the customer.
    * inventory `object`: Description of the SKU's inventory.
      * quantity `integer`
      * type `string` (values: bucket, finite, infinite)
      * value `string` (values: , in_stock, limited, out_of_stock)
    * metadata `object`: A set of key/value pairs that you can attach to a SKU object. It can be useful for storing additional information about the SKU in a structured format.
    * package_dimensions `object`: The dimensions of this SKU for shipping purposes.
      * height **required** `number`
      * length **required** `number`
      * weight **required** `number`
      * width **required** `number`
    * price `integer`: The cost of the item as a positive integer in the smallest currency unit (that is, 100 cents to charge $1.00, or 100 to charge ¥100, Japanese Yen being a zero-decimal currency).
    * product `string`: The ID of the product that this SKU should belong to. The product must exist, have the same set of attribute names as the SKU's current product, and be of type `good`.

#### Output
* output [sku](#sku)

### CreateSource
<p>Creates a new source object.</p>


```js
stripe.CreateSource({}, context)
```

#### Input
* input `object`
  * payload `object`
    * amount `integer`: Amount associated with the source. This is the amount for which the source will be chargeable once ready. Required for `single_use` sources.
    * currency `string`: Three-letter [ISO code for the currency](https://stripe.com/docs/currencies) associated with the source. This is the currency for which the source will be chargeable once ready.
    * customer `string`: The `Customer` to whom the original source is attached to. Must be set when the original source is not a `Source` (e.g., `Card`).
    * expand `array`: Specifies which fields in the response should be expanded.
      * items `string`
    * flow `string` (values: code_verification, none, receiver, redirect): The authentication `flow` of the source to create. `flow` is one of `redirect`, `receiver`, `code_verification`, `none`. It is generally inferred unless a type supports multiple flows.
    * mandate `object`: Information about a mandate possiblity attached to a source object (generally for bank debits) as well as its acceptance status.
      * acceptance `object`
        * date **required** `integer`
        * ip **required** `string`
        * status **required** `string` (values: accepted, pending, refused, revoked)
        * user_agent **required** `string`
      * notification_method `string` (values: email, manual, none)
    * metadata `object`: A set of key/value pairs that you can attach to a source object. It can be useful for storing additional information about the source in a structured format.
    * original_source `string`: The source to share.
    * owner `object`: Information about the owner of the payment instrument that may be used or required by particular source types.
      * address `object`
        * city `string`
        * country `string`
        * line1 `string`
        * line2 `string`
        * postal_code `string`
        * state `string`
      * email `string`
      * name `string`
      * phone `string`
    * receiver `object`: Optional parameters for the receiver flow. Can be set only if the source is a receiver (`flow` is `receiver`).
      * refund_attributes_method `string` (values: email, manual, none)
    * redirect `object`: Parameters required for the redirect flow. Required if the source is authenticated by a redirect (`flow` is `redirect`).
      * return_url **required** `string`
    * statement_descriptor `string`: An arbitrary string to be displayed on your customer's statement. As an example, if your website is `RunClub` and the item you're charging for is a race ticket, you may want to specify a `statement_descriptor` of `RunClub 5K race ticket.` While many payment types will display this information, some may not display it at all.
    * token `string`: An optional token used to create the source. When passed, token properties will override source parameters.
    * type `string`: The `type` of the source to create. Required unless `customer` and `orginal_source` are specified (see the [Shared card Sources](/docs/sources/connect#shared-card-sources) guide)
    * usage `string` (values: reusable, single_use)

#### Output
* output [source](#source)

### RetrieveSource
<p>Retrieves an existing source object. Supply the unique source ID from a source creation request and Stripe will return the corresponding up-to-date source object information.</p>


```js
stripe.RetrieveSource({
  "source": ""
}, context)
```

#### Input
* input `object`
  * expand `array`: Specifies which fields in the response should be expanded.
  * client_secret `string`: The client secret of the source. Required if a publishable key is used to retrieve the source.
  * source **required** `string`: The identifier of the source to be retrieved.

#### Output
* output [source](#source)

### SourceUpdate
<p>Updates the specified source by setting the values of the parameters passed. Any parameters not provided will be left unchanged.</p><p>This request accepts the <code>metadata</code> and <code>owner</code> as arguments. It is also possible to update type specific information for selected payment methods. Please refer to our <a href="/docs/sources">payment method guides</a> for more detail.</p>


```js
stripe.SourceUpdate({
  "source": ""
}, context)
```

#### Input
* input `object`
  * source **required** `string`
  * payload `object`
    * expand `array`: Specifies which fields in the response should be expanded.
      * items `string`
    * mandate `object`: Information about a mandate possiblity attached to a source object (generally for bank debits) as well as its acceptance status.
      * acceptance `object`
        * date **required** `integer`
        * ip **required** `string`
        * status **required** `string` (values: accepted, pending, refused, revoked)
        * user_agent **required** `string`
      * notification_method `string` (values: email, manual, none)
    * metadata `object`: A set of key/value pairs that you can attach to a source object. It can be useful for storing additional information about the source in a structured format.
    * owner `object`: Information about the owner of the payment instrument that may be used or required by particular source types.
      * address `object`
        * city `string`
        * country `string`
        * line1 `string`
        * line2 `string`
        * postal_code `string`
        * state `string`
      * email `string`
      * name `string`
      * phone `string`

#### Output
* output [source](#source)

### SourceMandateNotificationRetrieve
<p>Retrieves a new Source MandateNotification.</p>


```js
stripe.SourceMandateNotificationRetrieve({
  "mandate_notification": "",
  "source": ""
}, context)
```

#### Input
* input `object`
  * expand `array`: Specifies which fields in the response should be expanded.
  * mandate_notification **required** `string`: The ID of the Source MandateNotification.
  * source **required** `string`: The ID of the Source that received a ManateNotification.

#### Output
* output [source_mandate_notification](#source_mandate_notification)

### AllSourceTransactions



```js
stripe.AllSourceTransactions({
  "source": ""
}, context)
```

#### Input
* input `object`
  * expand `array`: Specifies which fields in the response should be expanded.
  * ending_before `string`: A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
  * limit `integer`: A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
  * source **required** `string`: The ID of the source whose source transactions will be retrieved.
  * starting_after `string`: A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.

#### Output
* output `object`
  * data **required** `array`
    * items [source_transaction](#source_transaction)
  * has_more **required** `boolean`: True if this list has another page of items after this one that can be fetched.
  * object **required** `string` (values: list): String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
  * url **required** `string`: The URL where this list can be accessed.

### RetrieveSourceTransaction
<p>Retrieve an existing source transaction object. Supply the unique source ID from a source creation request and the source transaction ID and Stripe will return the corresponding up-to-date source object information.</p>


```js
stripe.RetrieveSourceTransaction({
  "source": "",
  "source_transaction": ""
}, context)
```

#### Input
* input `object`
  * expand `array`: Specifies which fields in the response should be expanded.
  * source **required** `string`: The ID of the source whose source transaction will be retrieved.
  * source_transaction **required** `string`: The ID of the source transaction that will be retrieved.

#### Output
* output [source_transaction](#source_transaction)

### VerifySource



```js
stripe.VerifySource({
  "source": "",
  "payload": {
    "values": []
  }
}, context)
```

#### Input
* input `object`
  * source **required** `string`: The ID of the desired source.
  * payload **required** `object`
    * expand `array`: Specifies which fields in the response should be expanded.
      * items `string`
    * values **required** `array`: The values needed to verify the source.
      * items `string`

#### Output
* output [source](#source)

### AllSubscriptionItems
<p>Returns a list of your subscription items for a given subscription.</p>


```js
stripe.AllSubscriptionItems({
  "subscription": ""
}, context)
```

#### Input
* input `object`
  * expand `array`: Specifies which fields in the response should be expanded.
  * ending_before `string`: A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
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

### CreateSubscriptionItem
<p>Adds a new item to an existing subscription. No existing items will be changed or replaced.</p>


```js
stripe.CreateSubscriptionItem({
  "payload": {
    "plan": "",
    "subscription": ""
  }
}, context)
```

#### Input
* input `object`
  * payload **required** `object`
    * expand `array`: Specifies which fields in the response should be expanded.
      * items `string`
    * metadata `object`: Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
    * plan **required** `string`: The identifier of the plan to add to the subscription.
    * prorate `boolean`: Flag indicating whether to [prorate](/docs/subscriptions/upgrading-downgrading#understanding-proration) switching plans during a billing cycle.
    * proration_date `integer`: If set, the proration will be calculated as though the subscription was updated at the given time. This can be used to apply the same proration that was previewed with the [upcoming invoice](#retrieve_customer_invoice) endpoint.
    * quantity `integer`: The quantity you'd like to apply to the subscription item you're creating.
    * subscription **required** `string`: The identifier of the subscription to modify.

#### Output
* output [subscription_item](#subscription_item)

### DeleteSubscriptionItem
<p>Deletes an item from the subscription. Removing a subscription item from a subscription will not cancel the subscription.</p>


```js
stripe.DeleteSubscriptionItem({
  "item": ""
}, context)
```

#### Input
* input `object`
  * item **required** `string`: The identifier of the subscription item to delete.
  * payload `object`
    * clear_usage `boolean`: Delete all usage for the given subscription item. Allowed only when the current plan's `usage_type` is `metered`.
    * prorate `boolean`: Flag indicating whether to [prorate](/docs/subscriptions/upgrading-downgrading#understanding-proration) switching plans during a billing cycle.
    * proration_date `integer`: If set, the proration will be calculated as though the subscription was updated at the given time. This can be used to apply the same proration that was previewed with the [upcoming invoice](#retrieve_customer_invoice) endpoint.

#### Output
* output [deleted_object](#deleted_object)

### RetrieveSubscriptionItem
<p>Retrieves the invoice item with the given ID.</p>


```js
stripe.RetrieveSubscriptionItem({
  "item": ""
}, context)
```

#### Input
* input `object`
  * expand `array`: Specifies which fields in the response should be expanded.
  * item **required** `string`: The identifier of the subscription item to retrieve.

#### Output
* output [subscription_item](#subscription_item)

### UpdateSubscriptionItem
<p>Updates the plan or quantity of an item on a current subscription.</p>


```js
stripe.UpdateSubscriptionItem({
  "item": ""
}, context)
```

#### Input
* input `object`
  * item **required** `string`: The identifier of the subscription item to modify.
  * payload `object`
    * expand `array`: Specifies which fields in the response should be expanded.
      * items `string`
    * metadata `object`: Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
    * plan `string`: The identifier of the new plan for this subscription item.
    * prorate `boolean`: Flag indicating whether to [prorate](/docs/subscriptions/upgrading-downgrading#understanding-proration) switching plans during a billing cycle.
    * proration_date `integer`: If set, the proration will be calculated as though the subscription was updated at the given time. This can be used to apply the same proration that was previewed with the [upcoming invoice](#retrieve_customer_invoice) endpoint.
    * quantity `integer`: The quantity you'd like to apply to the subscription item you're creating.

#### Output
* output [subscription_item](#subscription_item)

### CreateUsageRecord
<p>Creates a usage record for a specified subscription item and date, and fills it with a quantity.</p>


```js
stripe.CreateUsageRecord({
  "subscription_item": "",
  "payload": {
    "quantity": 0,
    "timestamp": 0
  }
}, context)
```

#### Input
* input `object`
  * subscription_item **required** `string`: The ID of the subscription item for this usage record.
  * payload **required** `object`
    * action `string` (values: increment, set): Valid values are `increment` (default) or `set`. When using `increment` the specified `quantity` will be added to the usage at the specified timestamp. The `set` action will overwrite the usage quantity at that timestamp.
    * expand `array`: Specifies which fields in the response should be expanded.
      * items `string`
    * quantity **required** `integer`: The usage quantity for the specified timestamp.
    * timestamp **required** `integer`: The timestamp for the usage event. This timestamp must be within the current billing period of the subscription of the provided `subscription_item`.

#### Output
* output [usage_record](#usage_record)

### AllSubscriptions
<p>By default, returns a list of subscriptions that have not been canceled. In order to list canceled subscriptions, specify <code>status=canceled</code>.</p>


```js
stripe.AllSubscriptions({}, context)
```

#### Input
* input `object`
  * expand `array`: Specifies which fields in the response should be expanded.
  * billing `string`: The billing mode of the subscriptions to retrieve. Either `charge_automatically` or `send_invoice`.
  * created `integer`
  * customer `string`: The ID of the customer whose subscriptions will be retrieved.
  * ending_before `string`: A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
  * limit `integer`: A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
  * plan `string`: The ID of the plan whose subscriptions will be retrieved.
  * starting_after `string`: A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
  * status `string`: The status of the subscriptions to retrieve. One of: `trialing`, `active`, `past_due`, `unpaid`, `canceled`, or `all`. Passing in a value of `canceled` will return all canceled subscriptions, including those belonging to deleted customers. Passing in a value of `all` will return subscriptions of all statuses.

#### Output
* output `object`
  * data **required** `array`
    * items [subscription](#subscription)
  * has_more **required** `boolean`: True if this list has another page of items after this one that can be fetched.
  * object **required** `string` (values: list): String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
  * url **required** `string`: The URL where this list can be accessed.

### CreateSubscription
<p>Creates a new subscription on an existing customer.</p>


```js
stripe.CreateSubscription({
  "payload": {
    "customer": ""
  }
}, context)
```

#### Input
* input `object`
  * payload **required** `object`
    * application_fee_percent `number`: A non-negative decimal between 0 and 100, with at most two decimal places. This represents the percentage of the subscription invoice subtotal that will be transferred to the application owner's Stripe account. The request must be made with an OAuth key in order to set an application fee percentage. For more information, see the application fees [documentation](https://stripe.com/docs/connect/subscriptions#collecting-fees-on-subscriptions).
    * billing `string` (values: charge_automatically, send_invoice): Either `charge_automatically`, or `send_invoice`. When charging automatically, Stripe will attempt to pay this subscription at the end of the cycle using the default source attached to the customer. When sending an invoice, Stripe will email your customer an invoice with payment instructions. Defaults to `charge_automatically`.
    * coupon `string`: The code of the coupon to apply to this subscription. A coupon applied to a subscription will only affect invoices created for that particular subscription.
    * customer **required** `string`: The identifier of the customer to subscribe.
    * days_until_due `integer`: Number of days a customer has to pay invoices generated by this subscription. Valid only for subscriptions where `billing` is set to `send_invoice`.
    * expand `array`: Specifies which fields in the response should be expanded.
      * items `string`
    * items `array`: List of subscription items, each with an attached plan.
      * items `object`
        * plan **required** `string`
        * quantity `integer`
    * metadata `object`: A set of key-value pairs that you can attach to a `Subscription` object. It can be useful for storing additional information about the subscription in a structured format.
    * prorate `boolean`: Boolean (defaults to `true`) telling us whether to [credit for unused time](/docs/subscriptions/billing-cycle#prorations) when the billing cycle changes (e.g. when switching plans, resetting `billing_cycle_anchor=now`, or starting a trial). If `false`, the anchor period will be free (similar to a trial) and no proration adjustments will be created.
    * tax_percent `number`: A non-negative decimal (with at most four decimal places) between 0 and 100. This represents the percentage of the subscription invoice subtotal that will be calculated and added as tax to the final amount in each billing period. For example, a plan which charges $10/month with a `tax_percent` of `20.0` will charge $12 per invoice. To unset a previously-set value, pass an empty string.
    * trial_from_plan `boolean`: Indicates if a plan's `trial_period_days` should be applied to the subscription. Setting `trial_end` per subscription is preferred, and this defaults to `false`. Setting this flag to `true` together with `trial_end` is not allowed.
    * trial_period_days `integer`: Integer representing the number of trial period days before the customer is charged for the first time. This will always overwrite any trials that might apply via a subscribed plan.

#### Output
* output [subscription](#subscription)

### DeleteSubscription
<p>Cancels a customer’s subscription. If you set the <code>at_period_end</code> parameter to <code>true</code>, the subscription will remain active until the end of the period, at which point it will be canceled and not renewed. Otherwise, with the default <code>false</code> value, the subscription is terminated immediately. In either case, the customer will not be charged again for the subscription.</p><p>Note, however, that any pending invoice items that you’ve created will still be charged for at the end of the period, unless manually <a href="#delete_invoiceitem">deleted</a>. If you’ve set the subscription to cancel at the end of the period, any pending prorations will also be left in place and collected at the end of the period. But if the subscription is set to cancel immediately, pending prorations will be removed.</p><p>By default, upon subscription cancellation, Stripe will close all unpaid invoices for the customer. This is designed to prevent unexpected payment attempts after the customer has canceled a subscription. However, you can reopen the invoices manually after subscription cancellation to have us proceed with payment collection. Or, you could even re-attempt payment yourself on all unpaid invoices before allowing the customer to cancel the subscription at all.</p>


```js
stripe.DeleteSubscription({
  "subscription_exposed_id": ""
}, context)
```

#### Input
* input `object`
  * subscription_exposed_id **required** `string`
  * payload `object`
    * at_period_end `boolean`: A flag that, if set to `true`, will delay the subscription's cancellation until the end of the current period.

#### Output
* output [subscription](#subscription)

### RetrieveSubscription
<p>Retrieves the subscription with the given ID.</p>


```js
stripe.RetrieveSubscription({
  "subscription_exposed_id": ""
}, context)
```

#### Input
* input `object`
  * expand `array`: Specifies which fields in the response should be expanded.
  * subscription_exposed_id **required** `string`

#### Output
* output [deleted_object](#deleted_object)

### UpdateSubscription
<p>Updates an existing subscription on a customer to match the specified parameters. When changing plans or quantities, we will optionally prorate the price we charge next month to make up for any price changes. To preview how the proration will be calculated, use the <a href="#upcoming_invoice">upcoming invoice</a> endpoint.</p>


```js
stripe.UpdateSubscription({
  "subscription_exposed_id": ""
}, context)
```

#### Input
* input `object`
  * subscription_exposed_id **required** `string`
  * payload `object`
    * application_fee_percent `number`: A non-negative decimal between 0 and 100, with at most two decimal places. This represents the percentage of the subscription invoice subtotal that will be transferred to the application owner's Stripe account. The request must be made with an OAuth key in order to set an application fee percentage. For more information, see the application fees [documentation](https://stripe.com/docs/connect/subscriptions#collecting-fees-on-subscriptions).
    * billing `string` (values: charge_automatically, send_invoice): Either `charge_automatically`, or `send_invoice`. When charging automatically, Stripe will attempt to pay this subscription at the end of the cycle using the default source attached to the customer. When sending an invoice, Stripe will email your customer an invoice with payment instructions. Defaults to `charge_automatically`.
    * cancel_at_period_end `boolean`: Boolean indicating whether this subscription should cancel at the end of the current period.
    * coupon `string`: The code of the coupon to apply to this subscription. A coupon applied to a subscription will only affect invoices created for that particular subscription.
    * days_until_due `integer`: Number of days a customer has to pay invoices generated by this subscription. Valid only for subscriptions where `billing` is set to `send_invoice`.
    * expand `array`: Specifies which fields in the response should be expanded.
      * items `string`
    * items `array`: List of subscription items, each with an attached plan.
      * items `object`
        * clear_usage `boolean`
        * deleted `boolean`
        * id `string`
        * metadata `object`
        * plan `string`
        * quantity `integer`
    * metadata `object`: A set of key-value pairs that you can attach to a subscription object. This can be useful for storing additional information about the subscription in a structured format.
    * prorate `boolean`: Boolean (defaults to `true`) telling us whether to [credit for unused time](/docs/subscriptions/billing-cycle#prorations) when the billing cycle changes (e.g. when switching plans, resetting `billing_cycle_anchor=now`, or starting a trial). If `false`, the anchor period will be free (similar to a trial) and no proration adjustments will be created.
    * proration_date `integer`: If set, the proration will be calculated as though the subscription was updated at the given time. This can be used to apply exactly the same proration that was previewed with [upcoming invoice](#retrieve_customer_invoice) endpoint. It can also be used to implement custom proration logic, such as prorating by day instead of by second, by providing the time that you wish to use for proration calculations.
    * tax_percent `number`: A non-negative decimal (with at most four decimal places) between 0 and 100. This represents the percentage of the subscription invoice subtotal that will be calculated and added as tax to the final amount in each billing period. For example, a plan which charges $10/month with a `tax_percent` of `20.0` will charge $12 per invoice. To unset a previously-set value, pass an empty string.
    * trial_from_plan `boolean`: Indicates if a plan's `trial_period_days` should be applied to the subscription. Setting `trial_end` per subscription is preferred, and this defaults to `false`. Setting this flag to `true` together with `trial_end` is not allowed.

#### Output
* output [subscription](#subscription)

### DeleteSubscriptionDiscount
<p>Removes the currently applied discount on a customer.</p>


```js
stripe.DeleteSubscriptionDiscount({
  "subscription_exposed_id": ""
}, context)
```

#### Input
* input `object`
  * subscription_exposed_id **required** `string`

#### Output
* output [deleted_discount](#deleted_discount)

### CreateToken



```js
stripe.CreateToken({}, context)
```

#### Input
* input `object`
  * payload `object`
    * account `object`
      * legal_entity **required** `object`
        * additional_owners
          * items `object`
            * address `object`
              * city `string`
              * country `string`
              * line1 `string`
              * line2 `string`
              * postal_code `string`
              * state `string`
            * dob `object`
              * day **required** `integer`
              * month **required** `integer`
              * year **required** `integer`
            * first_name `string`
            * last_name `string`
            * maiden_name `string`
            * personal_id_number `string`
            * verification `object`
              * document `string`
        * address `object`
          * city `string`
          * country `string`
          * line1 `string`
          * line2 `string`
          * postal_code `string`
          * state `string`
        * address_kana `object`
          * city `string`
          * country `string`
          * line1 `string`
          * line2 `string`
          * postal_code `string`
          * state `string`
          * town `string`
        * address_kanji `object`
          * city `string`
          * country `string`
          * line1 `string`
          * line2 `string`
          * postal_code `string`
          * state `string`
          * town `string`
        * business_name `string`
        * business_name_kana `string`
        * business_name_kanji `string`
        * business_tax_id `string`
        * business_vat_id `string`
        * dob `object`
          * day **required** `integer`
          * month **required** `integer`
          * year **required** `integer`
        * first_name `string`
        * first_name_kana `string`
        * first_name_kanji `string`
        * gender `string`
        * last_name `string`
        * last_name_kana `string`
        * last_name_kanji `string`
        * maiden_name `string`
        * personal_address `object`
          * city `string`
          * country `string`
          * line1 `string`
          * line2 `string`
          * postal_code `string`
          * state `string`
        * personal_address_kana `object`
          * city `string`
          * country `string`
          * line1 `string`
          * line2 `string`
          * postal_code `string`
          * state `string`
          * town `string`
        * personal_address_kanji `object`
          * city `string`
          * country `string`
          * line1 `string`
          * line2 `string`
          * postal_code `string`
          * state `string`
          * town `string`
        * personal_id_number `string`
        * phone_number `string`
        * ssn_last_4 `string`
        * tax_id_registrar `string`
        * type `string`
        * verification `object`
          * document `string`
      * tos_shown_and_accepted `boolean`
    * amount `integer`
    * currency `string`
    * customer `string`
    * email `string`
    * expand `array`: Specifies which fields in the response should be expanded.
      * items `string`
    * external_id `string`
    * iovation_blackbox `string`
    * ip `string`
    * payment_user_agent `string`
    * pii `object`
      * personal_id_number **required** `string`
    * recipient `string`
    * referrer `string`
    * request_id `string`
    * user_agent `string`
    * validation_type `string`

#### Output
* output [token](#token)

### RetrieveToken
<p>Retrieves the token with the given ID.</p>


```js
stripe.RetrieveToken({
  "token": ""
}, context)
```

#### Input
* input `object`
  * expand `array`: Specifies which fields in the response should be expanded.
  * token **required** `string`: The ID of the desired token.

#### Output
* output [token](#token)

### TopupAll
<p>Returns a list of Top-ups.</p>


```js
stripe.TopupAll({}, context)
```

#### Input
* input `object`
  * expand `array`: Specifies which fields in the response should be expanded.
  * amount `integer`: A positive integer in %s representing how much to transfer.
  * created `integer`: A filter on the list, based on the object `created` field. The value can be a string with an integer Unix timestamp, or it can be a dictionary with a number of different query options.
  * ending_before `string`: A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
  * limit `integer`: A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
  * starting_after `string`: A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
  * status `string`: Only return top-ups that have the given status. One of `failed`, `pending` or `succeeded`.

#### Output
* output `object`
  * data **required** `array`
    * items [topup](#topup)
  * has_more **required** `boolean`: True if this list has another page of items after this one that can be fetched.
  * object **required** `string` (values: list): String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
  * url **required** `string`: The URL where this list can be accessed.

### TopupCreate
<p>Top up the balance of an account</p>


```js
stripe.TopupCreate({
  "payload": {
    "amount": 0,
    "currency": "",
    "description": "",
    "statement_descriptor": ""
  }
}, context)
```

#### Input
* input `object`
  * payload **required** `object`
    * amount **required** `integer`: A positive integer in %s representing how much to transfer.
    * currency **required** `string`: Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
    * description **required** `string`: An arbitrary string attached to the object. Often useful for displaying to users.
    * expand `array`: Specifies which fields in the response should be expanded.
      * items `string`
    * metadata `object`: Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
    * source `string`: The source to transfer funds from.
    * statement_descriptor **required** `string`: Extra information about a top-up for the source's bank statement.

#### Output
* output [topup](#topup)

### TopupRetrieve
<p>Retrieves the details of a Top-up that has previously been created. Supply the unique Top-up ID that was returned from your previous request, and Stripe will return the corresponding Top-up information.</p>


```js
stripe.TopupRetrieve({
  "topup": ""
}, context)
```

#### Input
* input `object`
  * expand `array`: Specifies which fields in the response should be expanded.
  * topup **required** `string`: The ID of the topup to retrieve.

#### Output
* output [topup](#topup)

### TopupUpdate
<p>Updates the metadata of a Top-up. Other Top-up details are not editable by design.</p>


```js
stripe.TopupUpdate({
  "topup": ""
}, context)
```

#### Input
* input `object`
  * topup **required** `string`: The ID of the topup to retrieve.
  * payload `object`
    * description `string`: An arbitrary string attached to the object. Often useful for displaying to users.
    * expand `array`: Specifies which fields in the response should be expanded.
      * items `string`
    * metadata `object`: Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.

#### Output
* output [topup](#topup)

### AllTransfers
<p>Returns a list of existing transfers sent to connected accounts. The transfers are returned in sorted order, with the most recently created transfers appearing first.</p>


```js
stripe.AllTransfers({}, context)
```

#### Input
* input `object`
  * expand `array`: Specifies which fields in the response should be expanded.
  * created `integer`
  * destination `string`: Only return transfers for the destination specified by this account ID.
  * ending_before `string`: A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
  * limit `integer`: A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
  * starting_after `string`: A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
  * transfer_group `string`: Only return transfers with the specified transfer group.

#### Output
* output `object`
  * data **required** `array`
    * items [transfer](#transfer)
  * has_more **required** `boolean`: True if this list has another page of items after this one that can be fetched.
  * object **required** `string` (values: list): String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
  * url **required** `string`: The URL where this list can be accessed.

### TransferCreate
<p>To send funds from your Stripe account to a connected account, you create a new transfer object. Your <a href="#balance">Stripe balance</a> must be able to cover the transfer amount, or you’ll receive an “Insufficient Funds” error.</p>


```js
stripe.TransferCreate({
  "payload": {
    "amount": 0,
    "currency": "",
    "destination": ""
  }
}, context)
```

#### Input
* input `object`
  * payload **required** `object`
    * amount **required** `integer`: A positive integer in %s representing how much to transfer.
    * currency **required** `string`: 3-letter [ISO code for currency](/docs/payouts).
    * destination **required** `string`: The ID of a connected Stripe account. <a href="/docs/connect/charges-transfers">See the Connect documentation</a> for details.
    * expand `array`: Specifies which fields in the response should be expanded.
      * items `string`
    * metadata `object`: Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
    * source_transaction `string`: You can use this parameter to transfer funds from a charge before they are added to your available balance. A pending balance will transfer immediately but the funds will not become available until the original charge becomes available. [See the Connect documentation](/docs/connect/charges-transfers#transfer-availability) for details.
    * transfer_group `string`: A string that identifies this transaction as part of a group. See the [Connect documentation](/docs/connect/charges-transfers#grouping-transactions) for details.

#### Output
* output [transfer](#transfer)

### TransferReversalAll
<p>You can see a list of the reversals belonging to a specific transfer. Note that the 10 most recent reversals are always available by default on the transfer object. If you need more than those 10, you can use this API method and the <code>limit</code> and <code>starting_after</code> parameters to page through additional reversals.</p>


```js
stripe.TransferReversalAll({
  "id": ""
}, context)
```

#### Input
* input `object`
  * expand `array`: Specifies which fields in the response should be expanded.
  * ending_before `string`: A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
  * id **required** `string`: The ID of the transfer whose reversals will be retrieved.
  * limit `integer`: A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
  * starting_after `string`: A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.

#### Output
* output `object`
  * data **required** `array`
    * items [transfer_reversal](#transfer_reversal)
  * has_more **required** `boolean`: True if this list has another page of items after this one that can be fetched.
  * object **required** `string` (values: list): String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
  * url **required** `string`: The URL where this list can be accessed.

### CreateTransferReversal
<p>When you create a new reversal, you must specify a transfer to create it on.</p><p>When reversing transfers, you can optionally reverse part of the transfer. You can do so as many times as you wish until the entire transfer has been reversed.</p><p>Once entirely reversed, a transfer can’t be reversed again. This method will return an error when called on an already-reversed transfer, or when trying to reverse more money than is left on a transfer.</p>


```js
stripe.CreateTransferReversal({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of the transfer to be reversed.
  * payload `object`
    * amount `integer`: A positive integer in %s representing how much of this transfer to reverse. Can only reverse up to the unreversed amount remaining of the transfer. Partial transfer reversals are only allowed for transfers to Stripe Accounts.
    * description `string`: An arbitrary string which you can attach to a reversal object. It is displayed alongside the reversal in the Dashboard. This will be unset if you POST an empty value.
    * expand `array`: Specifies which fields in the response should be expanded.
      * items `string`
    * metadata `object`: Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
    * refund_application_fee `boolean`: Boolean indicating whether the application fee should be refunded when reversing this transfer. If a full transfer reversal is given, the full application fee will be refunded. Otherwise, the application fee will be refunded with an amount proportional to the amount of the transfer reversed.

#### Output
* output [legacy_transfer_reversal](#legacy_transfer_reversal)

### RetrieveTransfer
<p>Retrieves the details of an existing transfer. Supply the unique transfer ID from either a transfer creation request or the transfer list, and Stripe will return the corresponding transfer information.</p>


```js
stripe.RetrieveTransfer({
  "transfer": ""
}, context)
```

#### Input
* input `object`
  * expand `array`: Specifies which fields in the response should be expanded.
  * transfer **required** `string`: The identifier of the transfer to be retrieved.

#### Output
* output [transfer](#transfer)

### UpdateTransfer
<p>Updates the specified transfer by setting the values of the parameters passed. Any parameters not provided will be left unchanged.</p><p>This request accepts only metadata as an argument.</p>


```js
stripe.UpdateTransfer({
  "transfer": ""
}, context)
```

#### Input
* input `object`
  * transfer **required** `string`: The ID of the transfer to be updated.
  * payload `object`
    * expand `array`: Specifies which fields in the response should be expanded.
      * items `string`
    * metadata `object`: Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.

#### Output
* output [transfer](#transfer)

### TransferReversalRetrieve
<p>By default, you can see the 10 most recent reversals stored directly on the transfer object, but you can also retrieve details about a specific reversal stored on the transfer.</p>


```js
stripe.TransferReversalRetrieve({
  "id": "",
  "transfer": ""
}, context)
```

#### Input
* input `object`
  * expand `array`: Specifies which fields in the response should be expanded.
  * id **required** `string`: ID of reversal to retrieve.
  * transfer **required** `string`: ID of the transfer reversed.

#### Output
* output [transfer_reversal](#transfer_reversal)

### TransferReversalUpdate
<p>Updates the specified reversal by setting the values of the parameters passed. Any parameters not provided will be left unchanged.</p><p>This request only accepts metadata and description as arguments.</p>


```js
stripe.TransferReversalUpdate({
  "id": "",
  "transfer": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: ID of reversal to retrieve.
  * transfer **required** `string`: ID of the transfer reversed.
  * payload `object`
    * expand `array`: Specifies which fields in the response should be expanded.
      * items `string`
    * metadata `object`: Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.

#### Output
* output [transfer_reversal](#transfer_reversal)



## Definitions

### account
* Account `object`
  * business_logo `string`: (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) A logo for this account (at least 128px x 128px)
  * business_name `string`: The publicly visible name of the business
  * business_url `string`: The publicly visible website of the business
  * charges_enabled **required** `boolean`: Whether the account can create live charges
  * country **required** `string`: The country of the account
  * created `integer`: Time at which the object was created. Measured in seconds since the Unix epoch.
  * debit_negative_balances `boolean`: A Boolean indicating if Stripe should try to reclaim negative balances from an attached bank account. See our [Understanding Connect Account Balances](/docs/connect/account-balances) documentation for details.
  * decline_charge_on [account_decline_charge_on](#account_decline_charge_on)
  * default_currency **required** `string`: The currency this account has chosen to use as the default
  * details_submitted **required** `boolean`: Whether account details have been submitted. Standard accounts cannot receive payouts before this is true.
  * display_name `string`: The display name for this account. This is used on the Stripe Dashboard to differentiate between accounts.
  * email `string`: The primary user's email address.
  * external_accounts `object`: External accounts (bank accounts and debit cards) currently attached to this account
    * data **required** `array`: The list contains all external accounts that have been attached to the Stripe account. These may be bank accounts or cards.
      * items [bank_account](#bank_account)
    * has_more **required** `boolean`: True if this list has another page of items after this one that can be fetched.
    * object **required** `string` (values: list): String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
    * url **required** `string`: The URL where this list can be accessed.
  * id **required** `string`: Unique identifier for the object.
  * legal_entity [legal_entity](#legal_entity)
  * metadata `object`: Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
  * object **required** `string` (values: account): String representing the object's type. Objects of the same type share the same value.
  * payout_schedule [transfer_schedule](#transfer_schedule)
  * payout_statement_descriptor `string`: The text that appears on the bank account statement for payouts. If not set, this defaults to the platform's bank descriptor as set in the Dashboard.
  * payouts_enabled **required** `boolean`: Whether Stripe can send payouts to this account
  * product_description `string`: Internal-only description of the product sold or service provided by the business. It's used by Stripe for risk and underwriting purposes.
  * statement_descriptor `string`: The default text that appears on credit card statements when a charge is made [directly on the account](/docs/connect/direct-charges)
  * support_email `string`: A publicly shareable support email address for the business
  * support_phone `string`: A publicly shareable support phone number for the business
  * timezone `string`: The timezone used in the Stripe Dashboard for this account. A list of possible time zone values is maintained at the [IANA Time Zone Database](http://www.iana.org/time-zones).
  * tos_acceptance [account_tos_acceptance](#account_tos_acceptance)
  * type **required** `string`: The Stripe account type. Can be `standard`, `express`, or `custom`.
  * verification [account_verification](#account_verification)

### account_debit_account
* AccountDebitAccount `object`
  * id **required** `string`: Unique identifier for the object.
  * object **required** `string` (values: account): String representing the object's type. Objects of the same type share the same value.

### account_decline_charge_on
* AccountDeclineChargeOn `object`
  * avs_failure **required** `boolean`: Whether Stripe should automatically decline charges with an incorrect ZIP or postal code. This setting only applies when a ZIP or postal code is provided and the bank specifically marks it as failed.
  * cvc_failure **required** `boolean`: Whether Stripe should automatically decline charges with an incorrect CVC. This setting only applies when a CVC is provided and the bank specifically marks it as failed.

### account_tos_acceptance
* AccountTOSAcceptance `object`
  * date `integer`: The Unix timestamp marking when the Stripe Services Agreement was accepted by the account representative
  * ip `string`: The IP address from which the Stripe Services Agreement was accepted by the account representative
  * user_agent `string`: The user agent of the browser from which the Stripe Services Agreement was accepted by the account representative

### account_verification
* AccountVerification `object`
  * disabled_reason `string`: A string describing the reason for this account being unable to create charges or receive payouts, if that is the case. Can be `rejected.fraud`, `rejected.terms_of_service`, `rejected.listed`, `rejected.other`, `fields_needed`, `listed`, `under_review`, or `other`.
  * due_by `integer`: By what time the `fields_needed` must be provided. If this date is in the past, the account is already in bad standing, and providing `fields_needed` is necessary to re-enable payouts and prevent other consequences. If this date is in the future, `fields_needed` must be provided to ensure the account remains in good standing.
  * fields_needed **required** `array`: Field names that need to be provided for the account to remain in good standing. Nested fields are separated by `.` (for example, `legal_entity.first_name`).


### account_with_keys
* AccountWithKeys `object`
  * business_logo `string`: (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) A logo for this account (at least 128px x 128px)
  * business_name `string`: The publicly visible name of the business
  * business_url `string`: The publicly visible website of the business
  * charges_enabled **required** `boolean`: Whether the account can create live charges
  * country **required** `string`: The country of the account
  * created `integer`: Time at which the object was created. Measured in seconds since the Unix epoch.
  * debit_negative_balances `boolean`: A Boolean indicating if Stripe should try to reclaim negative balances from an attached bank account. See our [Understanding Connect Account Balances](/docs/connect/account-balances) documentation for details.
  * decline_charge_on [account_decline_charge_on](#account_decline_charge_on)
  * default_currency **required** `string`: The currency this account has chosen to use as the default
  * details_submitted **required** `boolean`: Whether account details have been submitted. Standard accounts cannot receive payouts before this is true.
  * display_name `string`: The display name for this account. This is used on the Stripe Dashboard to differentiate between accounts.
  * email `string`: The primary user's email address.
  * external_accounts `object`: External accounts (bank accounts and debit cards) currently attached to this account
    * data **required** `array`: The list contains all external accounts that have been attached to the Stripe account. These may be bank accounts or cards.
      * items [bank_account](#bank_account)
    * has_more **required** `boolean`: True if this list has another page of items after this one that can be fetched.
    * object **required** `string` (values: list): String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
    * url **required** `string`: The URL where this list can be accessed.
  * id **required** `string`: Unique identifier for the object.
  * keys **required** `object`
  * legal_entity [legal_entity](#legal_entity)
  * metadata `object`: Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
  * object **required** `string` (values: account): String representing the object's type. Objects of the same type share the same value.
  * payout_schedule [transfer_schedule](#transfer_schedule)
  * payout_statement_descriptor `string`: The text that appears on the bank account statement for payouts. If not set, this defaults to the platform's bank descriptor as set in the Dashboard.
  * payouts_enabled **required** `boolean`: Whether Stripe can send payouts to this account
  * product_description `string`: Internal-only description of the product sold or service provided by the business. It's used by Stripe for risk and underwriting purposes.
  * statement_descriptor `string`: The default text that appears on credit card statements when a charge is made [directly on the account](/docs/connect/direct-charges)
  * support_email `string`: A publicly shareable support email address for the business
  * support_phone `string`: A publicly shareable support phone number for the business
  * timezone `string`: The timezone used in the Stripe Dashboard for this account. A list of possible time zone values is maintained at the [IANA Time Zone Database](http://www.iana.org/time-zones).
  * tos_acceptance [account_tos_acceptance](#account_tos_acceptance)
  * type **required** `string`: The Stripe account type. Can be `standard`, `express`, or `custom`.
  * verification [account_verification](#account_verification)

### address
* Address `object`
  * city `string`: City/District/Suburb/Town/Village.
  * country `string`: 2-letter country code.
  * line1 `string`: Address line 1 (Street address/PO Box/Company name).
  * line2 `string`: Address line 2 (Apartment/Suite/Unit/Building).
  * postal_code `string`: ZIP or postal code
  * state `string`: State/County/Province/Region.

### alipay_account
* AlipayAccount `object`
  * created **required** `integer`: Time at which the object was created. Measured in seconds since the Unix epoch.
  * customer `string`
  * fingerprint **required** `string`: Uniquely identifies the account and will be the same across all Alipay account objects that are linked to the same Alipay account.
  * id **required** `string`: Unique identifier for the object.
  * livemode **required** `boolean`: Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
  * metadata `object`: Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
  * object **required** `string` (values: alipay_account): String representing the object's type. Objects of the same type share the same value.
  * payment_amount `integer`: If the Alipay account object is not reusable, the exact amount that you can create a charge for.
  * payment_currency `string`: If the Alipay account object is not reusable, the exact currency that you can create a charge for.
  * reusable **required** `boolean`: True if you can create multiple payments using this account. If the account is reusable, then you can freely choose the amount of each payment.
  * used **required** `boolean`: Whether this Alipay account object has ever been used for a payment.
  * username **required** `string`: The username for the Alipay account.

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

### backwards_compatible_platform_earning
* BackwardsCompatiblePlatformEarning `object`
  * account **required** `string`: ID of the Stripe account this fee was taken from.
  * amount **required** `integer`: Amount earned, in %s.
  * amount_refunded **required** `integer`: Amount in %s refunded (can be less than the amount attribute on the fee if a partial refund was issued)
  * application **required** `string`: ID of the Connect application that earned the fee.
  * balance_transaction **required** `string`: Balance transaction that describes the impact of this collected application fee on your account balance (not including refunds).
  * charge **required** `string`: ID of the charge that the application fee was taken from.
  * created **required** `integer`: Time at which the object was created. Measured in seconds since the Unix epoch.
  * currency **required** `string`: Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
  * id **required** `string`: Unique identifier for the object.
  * livemode **required** `boolean`: Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
  * object **required** `string` (values: application_fee): String representing the object's type. Objects of the same type share the same value.
  * originating_transaction `string`: ID of the corresponding charge on the platform account, if this fee was the result of a charge using the `destination` parameter.
  * refunded **required** `boolean`: Whether the fee has been fully refunded. If the fee is only partially refunded, this attribute will still be false.
  * refunds **required** `object`: A list of refunds that have been applied to the fee.
    * data **required** `array`
      * items [fee_refund](#fee_refund)
    * has_more **required** `boolean`: True if this list has another page of items after this one that can be fetched.
    * object **required** `string` (values: list): String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
    * url **required** `string`: The URL where this list can be accessed.

### balance
* Balance `object`
  * available **required** `array`: Funds that are available to be paid out, whether automatically by Stripe or explicitly via the [transfers API](#transfers). The available balance for each currency and payment type can be found in the `source_types` property.

  * connect_reserved `array`: Funds held due to negative balances on connected Custom accounts. The connect reserve balance for each currency and payment type can be found in the `source_types` property.

  * livemode **required** `boolean`: Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
  * object **required** `string` (values: balance): String representing the object's type. Objects of the same type share the same value.
  * pending **required** `array`: Funds that are not yet available in the balance, due to the 7-day rolling pay cycle. The pending balance for each currency, and for each payment type, can be found in the `source_types` property.


### balance_transaction
* BalanceTransaction `object`
  * amount **required** `integer`: Gross amount of the transaction, in %s.
  * available_on **required** `integer`: The date the transaction's net funds will become available in the Stripe balance.
  * created **required** `integer`: Time at which the object was created. Measured in seconds since the Unix epoch.
  * currency **required** `string`: Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
  * description `string`: An arbitrary string attached to the object. Often useful for displaying to users.
  * exchange_rate `number`
  * fee **required** `integer`: Fees (in %s) paid for this transaction.
  * fee_details **required** `array`: Detailed breakdown of fees (in %s) paid for this transaction.
    * items [fee](#fee)
  * id **required** `string`: Unique identifier for the object.
  * net **required** `integer`: Net amount of the transaction, in %s.
  * object **required** `string` (values: balance_transaction): String representing the object's type. Objects of the same type share the same value.
  * source `string`: The Stripe object to which this transaction is related.
  * status **required** `string`: If the transaction's net funds are available in the Stripe balance yet. Either `available` or `pending`.
  * type **required** `string`: Transaction type: `adjustment`, `application_fee`, `application_fee_refund`, `charge`, `payment`, `payment_failure_refund`, `payment_refund`, `refund`, `transfer`, `transfer_refund`, `payout`, `payout_cancel`, `payout_failure`, `validation`, or `stripe_fee`.

### bank_account
* BankAccount `object`
  * account `string`
  * account_holder_name `string`: The name of the person or business that owns the bank account.
  * account_holder_type `string`: The type of entity that holds the account. This can be either `individual` or `company`.
  * bank_name `string`: Name of the bank associated with the routing number (e.g., `WELLS FARGO`).
  * country **required** `string`: Two-letter ISO code representing the country the bank account is located in.
  * currency **required** `string`: Three-letter [ISO code for the currency](https://stripe.com/docs/payouts) paid out to the bank account.
  * customer `string`
  * default_for_currency `boolean`: Whether this external account is the default account for its currency.
  * fingerprint `string`: Uniquely identifies this particular bank account. You can use this attribute to check whether two bank accounts are the same.
  * id **required** `string`: Unique identifier for the object.
  * last4 **required** `string`
  * metadata `object`: Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
  * object **required** `string` (values: bank_account): String representing the object's type. Objects of the same type share the same value.
  * routing_number `string`: The routing transit number for the bank account.
  * status **required** `string`: Possible values are `new`, `validated`, `verified`, `verification_failed`, or `errored`. A bank account that hasn't had any activity or validation performed is `new`. If Stripe can determine that the bank account exists, its status will be `validated`. Note that there often isn’t enough information to know (e.g., for smaller credit unions), and the validation is not always run. If customer bank account verification has succeeded, the bank account status will be `verified`. If the verification failed for any reason, such as microdeposit failure, the status will be `verification_failed`. If a transfer sent to this bank account fails, we'll set the status to `errored` and will not continue to send transfers until the bank details are updated.

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
  * customer `string`
  * description `string`: An arbitrary string attached to the object. Often useful for displaying to users.
  * email `string`: The customer's email address, set by the API call that creates the receiver.
  * filled **required** `boolean`: This flag is initially false and updates to true when the customer sends the `bitcoin_amount` to this receiver.
  * id **required** `string`: Unique identifier for the object.
  * inbound_address **required** `string`: A bitcoin address that is specific to this receiver. The customer can send bitcoin to this address to fill the receiver.
  * livemode **required** `boolean`: Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
  * metadata **required** `object`: Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
  * object **required** `string` (values: bitcoin_receiver): String representing the object's type. Objects of the same type share the same value.
  * payment `string`: The ID of the payment created from the receiver, if any. Hidden when viewing the receiver with a publishable key.
  * refund_address `string`
  * transactions `object`: A list with one entry for each time that the customer sent bitcoin to the receiver. Hidden when viewing the receiver with a publishable key.
    * data **required** `array`
      * items [bitcoin_transaction](#bitcoin_transaction)
    * has_more **required** `boolean`: True if this list has another page of items after this one that can be fetched.
    * object **required** `string` (values: list): String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
    * url **required** `string`: The URL where this list can be accessed.
  * uncaptured_funds **required** `boolean`: This receiver contains uncaptured funds that can be used for a payment or refunded.
  * used_for_payment `boolean`

### bitcoin_transaction
* BitcoinTransaction `object`
  * amount **required** `integer`: The amount of `currency` that the transaction was converted to in real-time.
  * bitcoin_amount **required** `integer`: The amount of bitcoin contained in the transaction.
  * created **required** `integer`: Time at which the object was created. Measured in seconds since the Unix epoch.
  * currency **required** `string`: Three-letter [ISO code for the currency](https://stripe.com/docs/currencies) to which this transaction was converted.
  * id **required** `string`: Unique identifier for the object.
  * object **required** `string` (values: bitcoin_transaction): String representing the object's type. Objects of the same type share the same value.
  * receiver **required** `string`: The receiver to which this transaction was sent.

### card
* Card `object`
  * account `string`: The account this card belongs to. This attribute will not be in the card object if the card belongs to a customer or recipient instead.
  * address_city `string`: City/District/Suburb/Town/Village.
  * address_country `string`: Billing address country, if provided when creating card.
  * address_line1 `string`: Address line 1 (Street address/PO Box/Company name).
  * address_line1_check `string`: If `address_line1` was provided, results of the check: `pass`, `fail`, `unavailable`, or `unchecked`.
  * address_line2 `string`: Address line 2 (Apartment/Suite/Unit/Building).
  * address_state `string`: State/County/Province/Region.
  * address_zip `string`: ZIP or postal code.
  * address_zip_check `string`: If `address_zip` was provided, results of the check: `pass`, `fail`, `unavailable`, or `unchecked`.
  * available_payout_methods `array`: A set of available payout methods for this card. Will be either `["standard"]` or `["standard", "instant"]`. Only values from this set should be passed as the `method` when creating a transfer.
    * items `string`
  * brand **required** `string`: Card brand. Can be `American Express`, `Diners Club`, `Discover`, `JCB`, `MasterCard`, `UnionPay`, `Visa`, or `Unknown`.
  * country `string`: Two-letter ISO code representing the country of the card. You could use this attribute to get a sense of the international breakdown of cards you've collected.
  * currency `string`: Three-letter [ISO code for currency](https://stripe.com/docs/payouts). Only applicable on accounts (not customers or recipients). The card can be used as a transfer destination for funds in this currency.
  * customer `string`: The customer that this card belongs to. This attribute will not be in the card object if the card belongs to an account or recipient instead.
  * cvc_check `string`: If a CVC was provided, results of the check: `pass`, `fail`, `unavailable`, or `unchecked`.
  * default_for_currency `boolean`: Only applicable on accounts (not customers or recipients). This indicates whether this card is the default external account for its currency.
  * dynamic_last4 `string`: (For tokenized numbers only.) The last four digits of the device account number.
  * exp_month **required** `integer`: Two-digit number representing the card's expiration month.
  * exp_year **required** `integer`: Four-digit number representing the card's expiration year.
  * fingerprint `string`: Uniquely identifies this particular card number. You can use this attribute to check whether two customers who've signed up with you are using the same card number, for example.
  * funding **required** `string`: Card funding type. Can be `credit`, `debit`, `prepaid`, or `unknown`.
  * id **required** `string`: Unique identifier for the object.
  * last4 **required** `string`: The last four digits of the card.
  * metadata **required** `object`: Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
  * name `string`: Cardholder name.
  * object **required** `string` (values: card): String representing the object's type. Objects of the same type share the same value.
  * recipient `string`: The recipient that this card belongs to. This attribute will not be in the card object if the card belongs to a customer or account instead.
  * tokenization_method `string`: If the card number is tokenized, this is the method that was used. Can be `apple_pay` or `android_pay`.

### charge
* Charge `object`
  * amount **required** `integer`: A positive integer in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal) (e.g., 100 cents to charge $1.00 or 100 to charge ¥100, a zero-decimal currency) representing how much to charge. The minimum amount is $0.50 US or [equivalent in charge currency](https://support.stripe.com/questions/what-is-the-minimum-amount-i-can-charge-with-stripe).
  * amount_refunded **required** `integer`: Amount in %s refunded (can be less than the amount attribute on the charge if a partial refund was issued).
  * application `string`: ID of the Connect application that created the charge.
  * application_fee `string`: The application fee (if any) for the charge. [See the Connect documentation](/docs/connect/direct-charges#collecting-fees) for details.
  * balance_transaction `string`: ID of the balance transaction that describes the impact of this charge on your account balance (not including refunds or disputes).
  * captured **required** `boolean`: If the charge was created without capturing, this Boolean represents whether it is still uncaptured or has since been captured.
  * created **required** `integer`: Time at which the object was created. Measured in seconds since the Unix epoch.
  * currency **required** `string`: Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
  * customer `string`: ID of the customer this charge is for if one exists.
  * description `string`: An arbitrary string attached to the object. Often useful for displaying to users.
  * destination `string`: The account (if any) the charge was made on behalf of, with an automatic transfer. [See the Connect documentation](/docs/connect/destination-charges) for details.
  * dispute `string`: Details about the dispute if the charge has been disputed.
  * failure_code `string`: Error code explaining reason for charge failure if available (see [the errors section](/docs/api#errors) for a list of codes).
  * failure_message `string`: Message to user further explaining reason for charge failure if available.
  * fraud_details `object`: Hash with information on fraud assessments for the charge. Assessments reported by you have the key `user_report` and, if set, possible values of `safe` and `fraudulent`. Assessments from Stripe have the key `stripe_report` and, if set, the value `fraudulent`.
  * id **required** `string`: Unique identifier for the object.
  * invoice `string`: ID of the invoice this charge is for if one exists.
  * livemode **required** `boolean`: Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
  * metadata **required** `object`: Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
  * object **required** `string` (values: charge): String representing the object's type. Objects of the same type share the same value.
  * on_behalf_of `string`: The account (if any) the charge was made on behalf of without triggering an automatic transfer. See the [Connect documentation](/docs/connect/charges-transfers) for details.
  * order `string`: ID of the order this charge is for if one exists.
  * outcome [charge_outcome](#charge_outcome)
  * paid **required** `boolean`: `true` if the charge succeeded, or was successfully authorized for later capture.
  * receipt_email `string`: This is the email address that the receipt for this charge was sent to.
  * receipt_number `string`: This is the transaction number that appears on email receipts sent for this charge. This attribute will be `null` until a receipt has been sent.
  * refunded **required** `boolean`: Whether the charge has been fully refunded. If the charge is only partially refunded, this attribute will still be false.
  * refunds **required** `object`: A list of refunds that have been applied to the charge.
    * data **required** `array`
      * items [refund](#refund)
    * has_more **required** `boolean`: True if this list has another page of items after this one that can be fetched.
    * object **required** `string` (values: list): String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
    * url **required** `string`: The URL where this list can be accessed.
  * review `string`: ID of the review associated with this charge if one exists.
  * shipping [shipping](#shipping)
  * source **required** [account_debit_account](#account_debit_account)
  * source_transfer `string`: The transfer ID which created this charge. Only present if the charge came from another Stripe account. [See the Connect documentation](/docs/connect/destination-charges) for details.
  * statement_descriptor `string`: Extra information about a charge. This will appear on your customer's credit card statement. It must contain at least one letter.
  * status **required** `string`: The status of the payment is either `succeeded`, `pending`, or `failed`.
  * transfer `string`: ID of the transfer to the `destination` account (only applicable if the charge was created using the `destination` parameter).
  * transfer_group `string`: A string that identifies this transaction as part of a group. See the [Connect documentation](/docs/connect/charges-transfers#grouping-transactions) for details.

### charge_outcome
* ChargeOutcome `object`
  * network_status `string`: Possible values are `approved_by_network`, `declined_by_network`, `not_sent_to_network`, and `reversed_after_approval`. The value `reversed_after_approval` indicates the payment was [blocked by Stripe](/docs/declines#blocked-payments) after bank authorization, and may temporarily appear as "pending" on a cardholder's statement.
  * reason `string`: An enumerated value providing a more detailed explanation of the outcome's `type`. Charges blocked by Radar's default block rule have the value `highest_risk_level`. Charges placed in review by Radar's default review rule have the value `elevated_risk_level`. Charges authorized, blocked, or placed in review by custom rules have the value `rule`. See [understanding declines](/docs/declines) for more details.
  * risk_level `string`: Stripe's evaluation of the riskiness of the payment. Possible values for evaluated payments are `normal`, `elevated`, `highest`. For non-card payments, and card-based payments predating the public assignment of risk levels, this field will have the value `not_assessed`. In the event of an error in the evaluation, this field will have the value `unknown`.
  * rule `string`: The ID of the Radar rule that matched the payment, if applicable.
  * seller_message `string`: A human-readable description of the outcome type and reason, designed for you (the recipient of the payment), not your customer.
  * type **required** `string`: Possible values are `authorized`, `manual_review`, `issuer_declined`, `blocked`, and `invalid`. See [understanding declines](/docs/declines) and [Radar reviews](radar/review) for details.

### connect_collection_transfer
* ConnectCollectionTransfer `object`
  * amount **required** `integer`: Amount transferred, in %s.
  * currency **required** `string`: Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
  * destination **required** `string`: ID of the account that funds are being collected for.
  * id **required** `string`: Unique identifier for the object.
  * livemode **required** `boolean`: Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
  * object **required** `string` (values: connect_collection_transfer): String representing the object's type. Objects of the same type share the same value.

### country_spec
* CountrySpec `object`
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
  * verification_fields **required** `object`: Lists the types of verification data needed to keep an account open. Includes 'minimum' fields, which every account must eventually provide, as well as a 'additional' fields, which are only required for some users.

### coupon
* Coupon `object`
  * amount_off `integer`: Amount (in the `currency` specified) that will be taken off the subtotal of any invoices for this customer.
  * created **required** `integer`: Time at which the object was created. Measured in seconds since the Unix epoch.
  * currency `string`: If `amount_off` has been set, the three-letter [ISO code for the currency](https://stripe.com/docs/currencies) of the amount to take off.
  * duration **required** `string` (values: forever, once, repeating): One of `forever`, `once`, and `repeating`. Describes how long a customer who applies this coupon will get the discount.
  * duration_in_months `integer`: If `duration` is `repeating`, the number of months the coupon applies. Null if coupon `duration` is `forever` or `once`.
  * id **required** `string`: Unique identifier for the object.
  * livemode **required** `boolean`: Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
  * max_redemptions `integer`: Maximum number of times this coupon can be redeemed, in total, before it is no longer valid.
  * metadata **required** `object`: Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
  * name `string`: Name of the coupon displayed to customers on for instance invoices or receipts.
  * object **required** `string` (values: coupon): String representing the object's type. Objects of the same type share the same value.
  * percent_off `integer`: Percent that will be taken off the subtotal of any invoices for this customer for the duration of the coupon. For example, a coupon with percent_off of 50 will make a %s100 invoice %s50 instead.
  * redeem_by `integer`: Date after which the coupon can no longer be redeemed.
  * times_redeemed **required** `integer`: Number of times this coupon has been applied to a customer.
  * valid **required** `boolean`: Taking account of the above properties, whether this coupon can still be applied to a customer.

### customer
* Customer `object`
  * account_balance `integer`: Current balance, if any, being stored on the customer's account. If negative, the customer has credit to apply to the next invoice. If positive, the customer has an amount owed that will be added to the next invoice. The balance does not refer to any unpaid invoices; it solely takes into account amounts that have yet to be successfully applied to any invoice. This balance is only taken into account for recurring billing purposes (i.e., subscriptions, invoices, invoice items).
  * business_vat_id `string`: The customer's VAT identification number. Appears on invoices emailed to this customer.
  * created **required** `integer`: Time at which the object was created. Measured in seconds since the Unix epoch.
  * currency `string`: Three-letter [ISO code for the currency](https://stripe.com/docs/currencies) the customer can be charged in for recurring billing purposes.
  * default_source `string`: ID of the default source attached to this customer.
  * delinquent `boolean`: When the customer's latest invoice is billed by charging automatically, delinquent is true if the invoice's latest charge is failed. When the customer's latest invoice is billed by sending an invoice, delinquent is true if the invoice is not paid by its due date.
  * description `string`: An arbitrary string attached to the object. Often useful for displaying to users.
  * discount [discount](#discount)
  * email `string`: The customer's email address.
  * id **required** `string`: Unique identifier for the object.
  * invoice_prefix `string`: The prefix for the customer used to generate unique invoice numbers.
  * livemode **required** `boolean`: Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
  * metadata `object`: Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
  * object **required** `string` (values: customer): String representing the object's type. Objects of the same type share the same value.
  * shipping [customer_shipping](#customer_shipping)
  * sources **required** `object`: The customer's payment sources, if any.
    * data **required** `array`: The list contains all payment sources that have been attached to the customer.
      * items [account_debit_account](#account_debit_account)
    * has_more **required** `boolean`: True if this list has another page of items after this one that can be fetched.
    * object **required** `string` (values: list): String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
    * url **required** `string`: The URL where this list can be accessed.
  * subscriptions `object`: The customer's current subscriptions, if any.
    * data **required** `array`
      * items [subscription](#subscription)
    * has_more **required** `boolean`: True if this list has another page of items after this one that can be fetched.
    * object **required** `string` (values: list): String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
    * url **required** `string`: The URL where this list can be accessed.

### customer_shipping
* CustomerShipping `object`
  * address **required** [address](#address)
  * name **required** `string`: Customer name.
  * phone `string`: Customer phone (including extension).

### customer_source
* Polymorphic `object`
  * id **required** `string`: Unique identifier for the object.
  * metadata `object`: Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
  * object **required** `string` (values: bank_account): String representing the object's type. Objects of the same type share the same value.

### customer_source_create
* Polymorphic `object`
  * currency **required** `string`: Three-letter [ISO code for the currency](https://stripe.com/docs/payouts) paid out to the bank account.
  * id **required** `string`: Unique identifier for the object.
  * metadata `object`: Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
  * object **required** `string` (values: bank_account): String representing the object's type. Objects of the same type share the same value.

### deleted_bank_account
* DeletedBankAccount `object`
  * currency `string`: Three-letter [ISO code for the currency](https://stripe.com/docs/payouts) paid out to the bank account.
  * deleted **required** `boolean` (values: true): Always true for a deleted object
  * id **required** `string`: Unique identifier for the object.

### deleted_card
* DeletedCard `object`
  * currency `string`: Three-letter [ISO code for the currency](https://stripe.com/docs/payouts) paid out to the bank account.
  * deleted **required** `boolean` (values: true): Always true for a deleted object
  * id **required** `string`: Unique identifier for the object.

### deleted_discount
* DeletedDiscount `object`
  * deleted **required** `boolean` (values: true): Always true for a deleted object

### deleted_object
* DeletedObject `object`
  * deleted **required** `boolean` (values: true): Always true for a deleted object
  * id **required** `string`: Unique identifier for the object.

### deleted_product
* DeletedProduct `object`
  * deleted **required** `boolean` (values: true): Always true for a deleted object
  * id **required** `string`: Unique identifier for the object.

### delivery_estimate
* DeliveryEstimate `object`
  * date `string`: If `type` is `"exact"`, `date` will be the expected delivery date in the format YYYY-MM-DD.
  * earliest `string`: If `type` is `"range"`, `earliest` will be be the earliest delivery date in the format YYYY-MM-DD.
  * latest `string`: If `type` is `"range"`, `latest` will be the latest delivery date in the format YYYY-MM-DD.
  * type **required** `string`: The type of estimate. Must be either `"range"` or `"exact"`.

### discount
* Discount `object`
  * coupon **required** [coupon](#coupon)
  * customer `string`
  * end `integer`: If the coupon has a duration of `repeating`, the date that this discount will end. If the coupon has a duration of `once` or `forever`, this attribute will be null.
  * object **required** `string` (values: discount): String representing the object's type. Objects of the same type share the same value.
  * start **required** `integer`: Date that the coupon was applied.
  * subscription `string`: The subscription that this coupon is applied to, if it is applied to a particular subscription.

### dispute
* Dispute `object`
  * amount **required** `integer`: Disputed amount. Usually the amount of the charge, but can differ (usually because of currency fluctuation or because only part of the order is disputed).
  * balance_transactions **required** `array`: List of zero, one, or two balance transactions that show funds withdrawn and reinstated to your Stripe account as a result of this dispute.
    * items [balance_transaction](#balance_transaction)
  * charge **required** `string`: ID of the charge that was disputed.
  * created **required** `integer`: Time at which the object was created. Measured in seconds since the Unix epoch.
  * currency **required** `string`: Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
  * evidence **required** [dispute_evidence](#dispute_evidence)
  * evidence_details **required** [dispute_evidence_details](#dispute_evidence_details)
  * id **required** `string`: Unique identifier for the object.
  * is_charge_refundable **required** `boolean`: If true, it is still possible to refund the disputed payment. Once the payment has been fully refunded, no further funds will be withdrawn from your Stripe account as a result of this dispute.
  * livemode **required** `boolean`: Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
  * metadata **required** `object`: Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
  * object **required** `string` (values: dispute): String representing the object's type. Objects of the same type share the same value.
  * reason **required** `string`: Reason given by cardholder for dispute. Possible values are `duplicate`, `fraudulent`, `subscription_canceled`, `product_unacceptable`, `product_not_received`, `unrecognized`, `credit_not_processed`, `general`, `incorrect_account_details`, `insufficient_funds`, `bank_cannot_process`, `debit_not_authorized`, or `customer_initiated`. Read more about [dispute reasons](/docs/disputes/categories).
  * status **required** `string` (values: charge_refunded, lost, needs_response, under_review, warning_closed, warning_needs_response, warning_under_review, won): Current status of dispute. Possible values are `warning_needs_response`, `warning_under_review`, `warning_closed`, `needs_response`, `under_review`, `charge_refunded`, `won`, or `lost`.

### dispute_evidence
* DisputeEvidence `object`
  * access_activity_log `string`: Any server or activity logs showing proof that the customer accessed or downloaded the purchased digital product. This information should include IP addresses, corresponding timestamps, and any detailed recorded activity.
  * billing_address `string`: The billing address provided by the customer.
  * cancellation_policy `string`: (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) Your subscription cancellation policy, as shown to the customer.
  * cancellation_policy_disclosure `string`: An explanation of how and when the customer was shown your refund policy prior to purchase.
  * cancellation_rebuttal `string`: A justification for why the customer's subscription was not canceled.
  * customer_communication `string`: (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) Any communication with the customer that you feel is relevant to your case. Examples include emails proving that the customer received the product or service, or demonstrating their use of or satisfaction with the product or service.
  * customer_email_address `string`: The email address of the customer.
  * customer_name `string`: The name of the customer.
  * customer_purchase_ip `string`: The IP address that the customer used when making the purchase.
  * customer_signature `string`: (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) A relevant document or contract showing the customer's signature.
  * duplicate_charge_documentation `string`: (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) Documentation for the prior charge that can uniquely identify the charge, such as a receipt, shipping label, work order, etc. This document should be paired with a similar document from the disputed payment that proves the two payments are separate.
  * duplicate_charge_explanation `string`: An explanation of the difference between the disputed charge versus the prior charge that appears to be a duplicate.
  * duplicate_charge_id `string`: The Stripe ID for the prior charge which appears to be a duplicate of the disputed charge.
  * product_description `string`: A description of the product or service that was sold.
  * receipt `string`: (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) Any receipt or message sent to the customer notifying them of the charge.
  * refund_policy `string`: (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) Your refund policy, as shown to the customer.
  * refund_policy_disclosure `string`: Documentation demonstrating that the customer was shown your refund policy prior to purchase.
  * refund_refusal_explanation `string`: A justification for why the customer is not entitled to a refund.
  * service_date `string`: The date on which the customer received or began receiving the purchased service, in a clear human-readable format.
  * service_documentation `string`: (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) Documentation showing proof that a service was provided to the customer. This could include a copy of a signed contract, work order, or other form of written agreement.
  * shipping_address `string`: The address to which a physical product was shipped. You should try to include as complete address information as possible.
  * shipping_carrier `string`: The delivery service that shipped a physical product, such as Fedex, UPS, USPS, etc. If multiple carriers were used for this purchase, please separate them with commas.
  * shipping_date `string`: The date on which a physical product began its route to the shipping address, in a clear human-readable format.
  * shipping_documentation `string`: (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) Documentation showing proof that a product was shipped to the customer at the same address the customer provided to you. This could include a copy of the shipment receipt, shipping label, etc. It should show the customer's full shipping address, if possible.
  * shipping_tracking_number `string`: The tracking number for a physical product, obtained from the delivery service. If multiple tracking numbers were generated for this purchase, please separate them with commas.
  * uncategorized_file `string`: (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) Any additional evidence or statements.
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

### ephemeral_key_with_secret
* EphemeralKeyWithSecret `object`
  * created **required** `integer`: Time at which the object was created. Measured in seconds since the Unix epoch.
  * expires **required** `integer`: Time at which the key will expire. Measured in seconds since the Unix epoch.
  * id **required** `string`: Unique identifier for the object.
  * livemode **required** `boolean`: Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
  * object **required** `string` (values: ephemeral_key): String representing the object's type. Objects of the same type share the same value.
  * secret **required** `string`: The key's secret. You can use this value to make authorized requests to the Stripe API.

### error
* error `object`: An error response from the Stripe API
  * error **required** `object`: A description of the error.
    * charge `string`: For card errors, the ID of the failed charge.
    * code `string`: For some errors that could be handled programmatically, a short string indicating the [error code](/docs/error-codes) reported.
    * decline_code `string`: For card errors resulting from a card issuer decline, a short string indicating the [card issuer's reason for the decline](/docs/declines#issuer-declines) if they provide one.
    * doc_url `string`: A URL to more information about the [error code](/docs/error-codes) reported.
    * message `string`: A human-readable message providing more details about the error. For card errors, these messages can be shown to your users.
    * param `string`: If the error is parameter-specific, the parameter related to the error. For example, you can use this to display a message near the correct form field.
    * type **required** `string` (values: api_connection_error, api_error, authentication_error, card_error, idempotency_error, invalid_request_error, rate_limit_error): The type of error returned. One of `api_connection_error`, `api_error`, `authentication_error`, `card_error`, `idempotency_error`, `invalid_request_error`, or `rate_limit_error`

### exchange_rate
* ExchangeRate `object`
  * id **required** `string`: Unique identifier for the object. Represented as the three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html) in lowercase.
  * object **required** `string` (values: exchange_rate): String representing the object's type. Objects of the same type share the same value.
  * rates **required** `object`: Hash where the keys are supported currencies and the values are the exchange rate at which the base id currency converts to the key currency.

### external_account_source
* Polymorphic `object`
  * account `string`
  * country **required** `string`: Two-letter ISO code representing the country the bank account is located in.
  * currency **required** `string`: Three-letter [ISO code for the currency](https://stripe.com/docs/payouts) paid out to the bank account.
  * customer `string`
  * default_for_currency `boolean`: Whether this external account is the default account for its currency.
  * fingerprint `string`: Uniquely identifies this particular bank account. You can use this attribute to check whether two bank accounts are the same.
  * id **required** `string`: Unique identifier for the object.
  * last4 **required** `string`
  * metadata `object`: Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
  * object **required** `string` (values: bank_account): String representing the object's type. Objects of the same type share the same value.

### fee
* Fee `object`
  * amount **required** `integer`: Amount of the fee, in cents.
  * application `string`
  * currency **required** `string`: Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
  * description `string`: An arbitrary string attached to the object. Often useful for displaying to users.
  * type **required** `string`: Type of the fee, one of: `application_fee`, `stripe_fee` or `tax`.

### fee_refund
* FeeRefund `object`
  * amount **required** `integer`: Amount, in %s.
  * balance_transaction `string`: Balance transaction that describes the impact on your account balance.
  * created **required** `integer`: Time at which the object was created. Measured in seconds since the Unix epoch.
  * currency **required** `string`: Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
  * fee **required** `string`: ID of the application fee that was refunded.
  * id **required** `string`: Unique identifier for the object.
  * metadata **required** `object`: Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
  * object **required** `string` (values: fee_refund): String representing the object's type. Objects of the same type share the same value.

### file_upload
* FileUpload `object`
  * created **required** `integer`: Time at which the object was created. Measured in seconds since the Unix epoch.
  * filename `string`: A filename for the file, suitable for saving to a filesystem.
  * id **required** `string`: Unique identifier for the object.
  * object **required** `string` (values: file_upload): String representing the object's type. Objects of the same type share the same value.
  * purpose **required** `string`: The purpose of the uploaded file. Possible values are `business_logo`, `customer_signature`, `dispute_evidence`, `identity_document`, `pci_document`, or `tax_document_user_upload`.
  * size **required** `integer`: The size in bytes of the file upload object.
  * type `string`: The type of the file returned. Returns one of the following: `csv`, `docx`, `gif`, `jpg`, `pdf`, `png`, `xls`, or `xlsx`.
  * url `string`: A read-only URL where the uploaded file can be accessed. Will be nil if the purpose of the uploaded file is `identity_document`. Also nil if retrieved with the publishable API key.

### inventory
* Inventory `object`
  * quantity `integer`: The count of inventory available. Will be present if and only if `type` is `finite`.
  * type **required** `string`: Inventory type. Possible values are `finite`, `bucket` (not quantified), and `infinite`.
  * value `string`: An indicator of the inventory available. Possible values are `in_stock`, `limited`, and `out_of_stock`. Will be present if and only if `type` is `bucket`.

### invoice
* Invoice `object`
  * amount_due **required** `integer`: Final amount due at this time for this invoice. If the invoice's total is smaller than the minimum charge amount, for example, or if there is account credit that can be applied to the invoice, the `amount_due` may be 0. If there is a positive `starting_balance` for the invoice (the customer owes money), the `amount_due` will also take that into account. The charge that gets generated for the invoice will be for the amount specified in `amount_due`.
  * amount_paid **required** `integer`: The amount, in %s, that was paid.
  * amount_remaining **required** `integer`: The amount remaining, in %s, that is due.
  * application_fee `integer`: The fee in %s that will be applied to the invoice and transferred to the application owner's Stripe account when the invoice is paid.
  * attempt_count **required** `integer`: Number of payment attempts made for this invoice, from the perspective of the payment retry schedule. Any payment attempt counts as the first attempt, and subsequently only automatic retries increment the attempt count. In other words, manual payment attempts after the first attempt do not affect the retry schedule.
  * attempted **required** `boolean`: Whether an attempt has been made to pay the invoice. An invoice is not attempted until 1 hour after the `invoice.created` webhook, for example, so you might not want to display that invoice as unpaid to your users.
  * billing `string` (values: charge_automatically, send_invoice): Either `charge_automatically`, or `send_invoice`. When charging automatically, Stripe will attempt to pay this invoice using the default source attached to the customer. When sending an invoice, Stripe will email this invoice to the customer with payment instructions.
  * charge `string`: ID of the latest charge generated for this invoice, if any.
  * closed **required** `boolean`: Whether the invoice is still trying to collect payment. An invoice is closed if it's either paid or it has been marked closed. A closed invoice will no longer attempt to collect payment.
  * currency **required** `string`: Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
  * customer **required** `string`
  * date **required** `integer`: Time at which the object was created. Measured in seconds since the Unix epoch.
  * description `string`: An arbitrary string attached to the object. Often useful for displaying to users.
  * discount [discount](#discount)
  * due_date `integer`: The date on which payment for this invoice is due. This value will be `null` for invoices where `billing=charge_automatically`.
  * ending_balance `integer`: Ending customer balance after the invoice is frozen. Invoices are frozen approximately an hour after successful webhook delivery or when payment collection is attempted for the invoice. If the invoice has not been frozen yet, this will be null.
  * forgiven **required** `boolean`: Whether the invoice has been forgiven. Forgiving an invoice instructs us to update the subscription status as if the invoice were successfully paid. Once an invoice has been forgiven, it cannot be unforgiven or reopened.
  * id **required** `string`: Unique identifier for the object.
  * lines **required** `object`: The individual line items that make up the invoice. `lines` is sorted as follows: invoice items in reverse chronological order, followed by the subscription, if any.
    * data **required** `array`
      * items [invoice_line_item](#invoice_line_item)
    * has_more **required** `boolean`: True if this list has another page of items after this one that can be fetched.
    * object **required** `string` (values: list): String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
    * url **required** `string`: The URL where this list can be accessed.
  * livemode **required** `boolean`: Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
  * metadata `object`: Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
  * next_payment_attempt `integer`: The time at which payment will next be attempted. This value will be `null` for invoices where `billing=send_invoice`.
  * number `string`: A unique, identifying string that appears on emails sent to the customer for this invoice. This starts with the customer's unique invoice_prefix if it is specified.
  * object **required** `string` (values: invoice): String representing the object's type. Objects of the same type share the same value.
  * paid **required** `boolean`: Whether payment was successfully collected for this invoice. An invoice can be paid (most commonly) with a charge or with credit from the customer's account balance.
  * period_end **required** `integer`: End of the usage period during which invoice items were added to this invoice.
  * period_start **required** `integer`: Start of the usage period during which invoice items were added to this invoice.
  * receipt_number `string`: This is the transaction number that appears on email receipts sent for this invoice.
  * starting_balance **required** `integer`: Starting customer balance before the invoice is frozen. If the invoice has not been frozen yet, this will be the current customer balance.
  * statement_descriptor `string`: Extra information about an invoice for the customer's credit card statement.
  * subscription `string`: The subscription that this invoice was prepared for, if any.
  * subscription_proration_date `integer`: Only set for upcoming invoices that preview prorations. The time used to calculate prorations.
  * subtotal **required** `integer`: Total of all subscriptions, invoice items, and prorations on the invoice before any discount is applied.
  * tax `integer`: The amount of tax included in the total, calculated from `tax_percent` and the subtotal. If no `tax_percent` is defined, this value will be null.
  * tax_percent `number`: This percentage of the subtotal has been added to the total amount of the invoice, including invoice line items and discounts. This field is inherited from the subscription's `tax_percent` field, but can be changed before the invoice is paid. This field defaults to null.
  * total **required** `integer`: Total after discount.
  * webhooks_delivered_at `integer`: The time at which webhooks for this invoice were successfully delivered (if the invoice had no webhooks to deliver, this will match `date`). Invoice payment is delayed until webhooks are delivered, or until all webhook delivery attempts have been exhausted.

### invoice_item
* InvoiceItem `object`
  * amount **required** `integer`: Amount (in the `currency` specified) of the invoice item. This should always be equal to `unit_amount * quantity`.
  * currency **required** `string`: Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
  * customer **required** `string`: The ID of the customer who will be billed when this invoice item is billed.
  * date **required** `integer`
  * description `string`: An arbitrary string attached to the object. Often useful for displaying to users.
  * discountable **required** `boolean`: If true, discounts will apply to this invoice item. Always false for prorations.
  * id **required** `string`: Unique identifier for the object.
  * invoice `string`: The ID of the invoice this invoice item belongs to.
  * livemode **required** `boolean`: Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
  * metadata **required** `object`: Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
  * object **required** `string` (values: invoiceitem): String representing the object's type. Objects of the same type share the same value.
  * period `object`
  * plan [plan](#plan)
  * proration **required** `boolean`: Whether the invoice item was created automatically as a proration adjustment when the customer switched plans.
  * quantity **required** `integer`: Quantity of units for the invoice item. If the invoice item is a proration, the quantity of the subscription that the proration was computed for.
  * subscription `string`: The subscription that this invoice item has been created for, if any.
  * subscription_item `string`
  * unit_amount **required** `integer`: Unit Amount (in the `currency` specified) of the invoice item.

### invoice_line_item
* InvoiceLineItem `object`
  * amount **required** `integer`: The amount, in %s.
  * currency **required** `string`: Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
  * description `string`: An arbitrary string attached to the object. Often useful for displaying to users.
  * discountable **required** `boolean`: If true, discounts will apply to this line item. Always false for prorations.
  * id **required** `string`: Unique identifier for the object.
  * invoice_item `string`
  * livemode **required** `boolean`: Whether this is a test line item.
  * metadata **required** `object`: Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
  * object **required** `string` (values: line_item): String representing the object's type. Objects of the same type share the same value.
  * period **required** [invoice_line_item_period](#invoice_line_item_period)
  * plan [plan](#plan)
  * proration **required** `boolean`: Whether this is a proration.
  * quantity `integer`: The quantity of the subscription, if the line item is a subscription or a proration.
  * subscription `string`: When type is `invoiceitem`, the subscription that the invoice item pertains to, if any. Left blank when `type` is already subscription, as it'd be redundant with `id`.
  * subscription_item `string`: The subscription item that generated this invoice item. Left empty if the line item is not an explicit result of a subscription.
  * type **required** `string`: A string identifying the type of the source of this line item, either an `invoiceitem` or a `subscription`.

### invoice_line_item_period
* InvoiceLineItemPeriod `object`
  * end **required** `integer`: End of the line item's billing period
  * start **required** `integer`: Start of the line item's billing period

### issuer_fraud_record
* IssuerFraudRecord `object`
  * charge **required** `string`: ID of the charge this issuer fraud record is for, optionally expanded.
  * created **required** `integer`: Time at which the object was created. Measured in seconds since the Unix epoch.
  * fraud_type **required** `string`: The type of fraud labelled by the issuer. One of `card_never_received`, `fraudulent_card_application`, `made_with_counterfeit_card`, `made_with_lost_card`, `made_with_stolen_card`, `misc`, `unauthorized_use_of_card`.
  * id **required** `string`: Unique identifier for the object.
  * livemode **required** `boolean`: Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
  * object **required** `string` (values: issuer_fraud_record): String representing the object's type. Objects of the same type share the same value.
  * post_date **required** `integer`: The timestamp at which the card issuer posted the issuer fraud record.

### legacy_transfer_reversal
* LegacyTransferReversal `object`
  * amount **required** `integer`: Amount, in %s.
  * balance_transaction `string`: Balance transaction that describes the impact on your account balance.
  * created **required** `integer`: Time at which the object was created. Measured in seconds since the Unix epoch.
  * currency **required** `string`: Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
  * id **required** `string`: Unique identifier for the object.
  * metadata **required** `object`: Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
  * object **required** `string` (values: transfer_reversal): String representing the object's type. Objects of the same type share the same value.
  * transfer **required** `string`: ID of the transfer that was reversed.

### legal_entity
* LegalEntity `object`
  * additional_owners `array`: An array of any owners with at least 25% ownership of the company, excluding the individual responsible for the account.
    * items [legal_entity_additional_owner](#legal_entity_additional_owner)
  * address [legal_entity_address](#legal_entity_address)
  * address_kana [legal_entity_japan_address](#legal_entity_japan_address)
  * address_kanji [legal_entity_japan_address](#legal_entity_japan_address)
  * business_name `string`: The legal name of the company.
  * business_name_kana `string`: The Kana variation of the legal name of the company (Japan only).
  * business_name_kanji `string`: The Kanji variation of the legal name of the company (Japan only).
  * business_tax_id_provided `boolean`: Whether the business ID number of the legal entity has been provided.
  * business_vat_id_provided `boolean`: Whether the business VAT number of the legal entity has been provided.
  * dob [legal_entity_dob](#legal_entity_dob)
  * first_name `string`: The first name of the individual responsible for the account.
  * first_name_kana `string`: The Kana variation of the first name of the individual responsible for the account (Japan only).
  * first_name_kanji `string`: The Kanji variation of the first name of the individual responsible for the account (Japan only).
  * gender `string`: The gender of the individual responsible for the account (International regulations require either "male" or "female").
  * last_name `string`: The last name of the individual responsible for the account.
  * last_name_kana `string`: The Kana varation of the last name of the individual responsible for the account (Japan only).
  * last_name_kanji `string`: The Kanji varation of the last name of the individual responsible for the account (Japan only).
  * maiden_name `string`: The maiden name of the individual responsible for the account.
  * personal_address [legal_entity_address](#legal_entity_address)
  * personal_address_kana [legal_entity_japan_address](#legal_entity_japan_address)
  * personal_address_kanji [legal_entity_japan_address](#legal_entity_japan_address)
  * personal_id_number_provided `boolean`: Whether the personal ID number of the individual responsible for the account has been provided.
  * phone_number `string`: The phone number of the company, used for verification.
  * ssn_last_4_provided `boolean`: Whether the last 4 ssn digits of the individual responsible for the account have been provided.
  * tax_id_registrar `string`
  * type `string`: Either "individual" or "company", for what kind of legal entity the account owner is for.
  * verification [legal_entity_verification](#legal_entity_verification)

### legal_entity_additional_owner
* LegalEntityAdditionalOwner `object`
  * address [legal_entity_address](#legal_entity_address)
  * dob **required** [legal_entity_dob](#legal_entity_dob)
  * first_name `string`: The first name of this additional owner.
  * last_name `string`: The last name of this additional owner.
  * maiden_name `string`: The maiden name of this additional owner.
  * personal_id_number_provided `boolean`: Whether the personal ID number of this additional owner has been provided.
  * verification **required** [legal_entity_verification](#legal_entity_verification)

### legal_entity_address
* LegalEntityAddress `object`
  * city `string`: City/District/Suburb/Town/Village.
  * country `string`: 2-letter country code.
  * line1 `string`: Address line 1 (Street address/PO Box/Company name).
  * line2 `string`: Address line 2 (Apartment/Suite/Unit/Building).
  * postal_code `string`: ZIP or postal code
  * state `string`: State/County/Province/Region.

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
  * postal_code `string`: Zip/Postal Code.
  * state `string`: Prefecture.
  * town `string`: Town/cho-me.

### legal_entity_verification
* LegalEntityVerification `object`
  * details `string`: A user-displayable string describing the verification state for this legal entity. For example, if a document is uploaded and the picture is too fuzzy, this may say "Identity document is too unclear to read".
  * details_code `string`: One of `scan_corrupt`, `scan_not_readable`, `scan_failed_greyscale`, `scan_not_uploaded`, `scan_id_type_not_supported`, `scan_id_country_not_supported`, `scan_name_mismatch`, `scan_failed_other`, `failed_keyed_identity`, or `failed_other`. A machine-readable code specifying the verification state for this legal entity.
  * document `string`: (ID of a [file upload](https://stripe.com/docs/guides/file-upload)) A photo (jpg or png) of the front of an identifying document, either a passport or local ID card.
  * status **required** `string`: The state of verification for this legal entity. Possible values are `unverified`, `pending`, or `verified`.

### light_account_logout
* LightAccountLogout `object`

### limited_account
* LimitedAccount `object`
  * application_icon `string`
  * application_logo `string`
  * application_name `string`
  * application_url `string`
  * id **required** `string`: Unique identifier for the object.
  * object **required** `string` (values: account): String representing the object's type. Objects of the same type share the same value.

### login_link
* LoginLink `object`
  * created **required** `integer`: Time at which the object was created. Measured in seconds since the Unix epoch.
  * object **required** `string` (values: login_link): String representing the object's type. Objects of the same type share the same value.
  * url **required** `string`: The URL for the login link.

### notification_event
* NotificationEvent `object`
  * api_version `string`: The Stripe API version used to render `data`. *Note: This property is populated only for events on or after October 31, 2014*.
  * created **required** `integer`: Time at which the object was created. Measured in seconds since the Unix epoch.
  * data **required** [notification_event_data](#notification_event_data)
  * id **required** `string`: Unique identifier for the object.
  * livemode **required** `boolean`: Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
  * object **required** `string` (values: event): String representing the object's type. Objects of the same type share the same value.
  * pending_webhooks **required** `integer`: Number of webhooks that have yet to be successfully delivered (i.e., to return a 20x response) to the URLs you've specified.
  * request [notification_event_request](#notification_event_request)
  * type **required** `string`: Description of the event (e.g., `invoice.created` or `charge.refunded`).

### notification_event_data
* NotificationEventData `object`
  * object **required** `object`: Object containing the API resource relevant to the event. For example, an `invoice.created` event will have a full [invoice object](#invoice_object) as the value of the object key.
  * previous_attributes `object`: Object containing the names of the attributes that have changed, and their previous values (sent along only with *.updated events).

### notification_event_request
* NotificationEventRequest `object`
  * id `string`: ID of the API request that caused the event. If null, the event was automatic (e.g., Stripe's automatic subscription handling). Request logs are available in the [dashboard](https://dashboard.stripe.com/logs), but currently not in the API.
  * idempotency_key `string`: The idempotency key transmitted during the request, if any. *Note: This property is populated only for events on or after May 23, 2017*.

### order
* Order `object`
  * amount **required** `integer`: A positive integer in the smallest currency unit (that is, 100 cents for $1.00, or 1 for ¥1, Japanese Yen being a zero-decimal currency) representing the total amount for the order.
  * amount_returned `integer`
  * application `string`: ID of the Connect Application that created the order.
  * application_fee `integer`
  * charge `string`: The ID of the payment used to pay for the order. Present if the order status is `paid`, `fulfilled`, or `refunded`.
  * created **required** `integer`: Time at which the object was created. Measured in seconds since the Unix epoch.
  * currency **required** `string`: Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
  * customer `string`: The customer used for the order.
  * email `string`: The email address of the customer placing the order.
  * external_coupon_code `string`
  * id **required** `string`: Unique identifier for the object.
  * items **required** `array`: List of items constituting the order.
    * items [order_item](#order_item)
  * livemode **required** `boolean`: Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
  * metadata **required** `object`: Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
  * object **required** `string` (values: order): String representing the object's type. Objects of the same type share the same value.
  * returns `object`
    * data **required** `array`
      * items [order_return](#order_return)
    * has_more **required** `boolean`: True if this list has another page of items after this one that can be fetched.
    * object **required** `string` (values: list): String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
    * url **required** `string`: The URL where this list can be accessed.
  * selected_shipping_method `string`: The shipping method that is currently selected for this order, if any. If present, it is equal to one of the `id`s of shipping methods in the `shipping_methods` array. At order creation time, if there are multiple shipping methods, Stripe will automatically selected the first method.
  * shipping [shipping](#shipping)
  * shipping_methods `array`: A list of supported shipping methods for this order. The desired shipping method can be specified either by updating the order, or when paying it.
    * items [shipping_method](#shipping_method)
  * status **required** `string`: Current order status. One of `created`, `paid`, `canceled`, `fulfilled`, or `returned`. More detail in the [Relay API Overview](/docs/orders/guide#understanding-order-statuses).
  * status_transitions [status_transitions](#status_transitions)
  * updated `integer`
  * upstream_id `string`: The user's order ID if it is different from the Stripe order ID.

### order_item
* OrderItem `object`
  * amount **required** `integer`: A positive integer in the smallest currency unit (that is, 100 cents for $1.00, or 1 for ¥1, Japanese Yen being a zero-decimal currency) representing the total amount for the line item.
  * currency **required** `string`: Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
  * description **required** `string`: Description of the line item, meant to be displayable to the user (e.g., `"Express shipping"`).
  * object **required** `string` (values: order_item): String representing the object's type. Objects of the same type share the same value.
  * parent `string`: The ID of the associated object for this line item. Expandable if not null (e.g., expandable to a SKU).
  * quantity `integer`: A positive integer representing the number of instances of `parent` that are included in this order item. Applicable/present only if `type` is `sku`.
  * type **required** `string`: The type of line item. One of `sku`, `tax`, `shipping`, or `discount`.

### order_return
* OrderReturn `object`
  * amount **required** `integer`: A positive integer in the smallest currency unit (that is, 100 cents for $1.00, or 1 for ¥1, Japanese Yen being a zero-decimal currency) representing the total amount for the returned line item.
  * created **required** `integer`: Time at which the object was created. Measured in seconds since the Unix epoch.
  * currency **required** `string`: Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
  * id **required** `string`: Unique identifier for the object.
  * items **required** `array`: The items included in this order return.
    * items [order_item](#order_item)
  * livemode **required** `boolean`: Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
  * object **required** `string` (values: order_return): String representing the object's type. Objects of the same type share the same value.
  * order `string`: The order that this return includes items from.
  * refund `string`: The ID of the refund issued for this return.

### package_dimensions
* PackageDimensions `object`
  * height **required** `number`: Height, in inches.
  * length **required** `number`: Length, in inches.
  * weight **required** `number`: Weight, in ounces.
  * width **required** `number`: Width, in inches.

### payout
* Payout `object`
  * amount **required** `integer`: Amount (in %s) to be transferred to your bank account or debit card.
  * arrival_date **required** `integer`: Date the payout is expected to arrive in the bank. This factors in delays like weekends or bank holidays.
  * automatic **required** `boolean`: Returns `true` if the payout was created by an [automated payout schedule](/docs/payouts#payout-schedule), and `false` if it was [requested manually](https://stripe.com/docs/payouts#manual-payouts).
  * balance_transaction `string`: ID of the balance transaction that describes the impact of this payout on your account balance.
  * created **required** `integer`: Time at which the object was created. Measured in seconds since the Unix epoch.
  * currency **required** `string`: Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
  * description `string`: An arbitrary string attached to the object. Often useful for displaying to users.
  * destination `string`: ID of the bank account or card the payout was sent to.
  * failure_balance_transaction `string`: If the payout failed or was canceled, this will be the ID of the balance transaction that reversed the initial balance transaction, and puts the funds from the failed payout back in your balance.
  * failure_code `string`: Error code explaining reason for payout failure if available. See [Types of payout failures](/docs/api#payout_failures) for a list of failure codes.
  * failure_message `string`: Message to user further explaining reason for payout failure if available.
  * id **required** `string`: Unique identifier for the object.
  * livemode **required** `boolean`: Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
  * metadata **required** `object`: Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
  * method **required** `string`: The method used to send this payout, which can be `standard` or `instant`. `instant` is only supported for payouts to debit cards. (See [Instant payouts for marketplaces](/blog/instant-payouts-for-marketplaces) for more information.)
  * object **required** `string` (values: payout): String representing the object's type. Objects of the same type share the same value.
  * source_type **required** `string`: The source balance this payout came from. One of `card`, `bank_account`, `bitcoin_receiver`, or `alipay_account`.
  * statement_descriptor `string`: Extra information about a payout to be displayed on the user's bank statement.
  * status **required** `string`: Current status of the payout (`paid`, `pending`, `in_transit`, `canceled` or `failed`). A payout will be `pending` until it is submitted to the bank, at which point it becomes `in_transit`. It will then change to `paid` if the transaction goes through. If it does not go through successfully, its status will change to `failed` or `canceled`.
  * type **required** `string`: Can be `bank_account` or `card`.

### plan
* Plan `object`
  * aggregate_usage `string` (values: last_during_period, last_ever, max, sum): Specifies a usage aggregation strategy for plans of `usage_type=metered`. Allowed values are `sum` for summing up all usage during a period, `last_during_period` for picking the last usage record reported within a period, `last_ever` for picking the last usage record ever (across period bounds) or `max` which picks the usage record with the maximum reported usage during a period. Defaults to `sum`.
  * amount `integer`: The amount in %s to be charged on the interval specified.
  * billing_scheme `string`: Describes how to compute the price per period. Either `per_unit` or `tiered`. `per_unit` indicates that the fixed amount (specified in `amount`) will be charged per unit in `quantity` (for plans with `usage_type=licensed`), or per unit of total usage (for plans with `usage_type=metered`). `tiered` indicates that the unit pricing will be computed using a tiering strategy as defined using the `tiers` and `tiers_mode` attributes.
  * created **required** `integer`: Time at which the object was created. Measured in seconds since the Unix epoch.
  * currency **required** `string`: Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
  * id **required** `string`: Unique identifier for the object.
  * interval **required** `string`: One of `day`, `week`, `month` or `year`. The frequency with which a subscription should be billed.
  * interval_count **required** `integer`: The number of intervals (specified in the `interval` property) between subscription billings. For example, `interval=month` and `interval_count=3` bills every 3 months.
  * livemode **required** `boolean`: Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
  * metadata **required** `object`: Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
  * nickname `string`: A brief description of the plan, hidden from customers.
  * object **required** `string` (values: plan): String representing the object's type. Objects of the same type share the same value.
  * product `string`: The product whose pricing this plan determines.
  * tiers `array`: Each element represents a pricing tier. This parameter requires `billing_scheme` to be set to `tiered`. See also the documentation for `billing_scheme`.
    * items [plan_tier](#plan_tier)
  * tiers_mode `string` (values: graduated, volume): Defines if the tiering price should be `graduated` or `volume` based. In `volume`-based tiering, the maximum quantity within a period determines the per unit price, in `graduated` tiering pricing can successively change as the quantity grows.
  * transform_usage [transform_usage](#transform_usage)
  * trial_period_days `integer`: Default number of trial days when subscribing a customer to this plan using [`trial_from_plan=true`](/docs/api#create_subscription-trial_from_plan).
  * usage_type **required** `string`: Configures how the quantity per period should be determined, can be either `metered` or `licensed`. `licensed` will automatically bill the `quantity` set for a plan when adding it to a subscription, `metered` will aggregate the total usage based on usage records. Defaults to `licensed`.

### plan_tier
* PlanTier `object`
  * amount **required** `integer`: Per unit price for units relevant to the tier.
  * up_to `integer`: Up to and including to this quantity will be contained in the tier.

### platform_earning
* PlatformEarning `object`
  * account **required** `string`: ID of the Stripe account this fee was taken from.
  * amount **required** `integer`: Amount earned, in %s.
  * amount_refunded **required** `integer`: Amount in %s refunded (can be less than the amount attribute on the fee if a partial refund was issued)
  * application **required** `string`: ID of the Connect application that earned the fee.
  * balance_transaction **required** `string`: Balance transaction that describes the impact of this collected application fee on your account balance (not including refunds).
  * charge **required** `string`: ID of the charge that the application fee was taken from.
  * created **required** `integer`: Time at which the object was created. Measured in seconds since the Unix epoch.
  * currency **required** `string`: Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
  * id **required** `string`: Unique identifier for the object.
  * livemode **required** `boolean`: Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
  * object **required** `string` (values: application_fee): String representing the object's type. Objects of the same type share the same value.
  * originating_transaction `string`: ID of the corresponding charge on the platform account, if this fee was the result of a charge using the `destination` parameter.
  * refunded **required** `boolean`: Whether the fee has been fully refunded. If the fee is only partially refunded, this attribute will still be false.
  * refunds **required** `object`: A list of refunds that have been applied to the fee.
    * data **required** `array`
      * items [fee_refund](#fee_refund)
    * has_more **required** `boolean`: True if this list has another page of items after this one that can be fetched.
    * object **required** `string` (values: list): String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
    * url **required** `string`: The URL where this list can be accessed.

### platform_fee
* PlatformFee `object`
  * account **required** `string`: ID of the Stripe account this fee was taken from.
  * amount **required** `integer`: Amount earned, in %s.
  * amount_refunded **required** `integer`
  * application **required** `string`: ID of the Connect Application that earned the fee.
  * balance_transaction **required** `string`: Balance transaction that describes the impact of this collected application fee on your account balance (not including refunds).
  * charge **required** `string`: ID of the charge that the application fee was taken from.
  * created **required** `integer`: Time at which the object was created. Measured in seconds since the Unix epoch.
  * currency **required** `string`: Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
  * id **required** `string`: Unique identifier for the object.
  * livemode **required** `boolean`: Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
  * object **required** `string` (values: application_fee): String representing the object's type. Objects of the same type share the same value.
  * originating_transaction `string`: ID of the corresponding charge on the platform account, if this fee was the result of a charge using the `destination` parameter.
  * refunded **required** `boolean`: Whether the fee has been fully refunded. If the fee is only partially refunded, this attribute will still be false.
  * refunds **required** `object`: A list of refunds that have been applied to the fee.
    * data **required** `array`
      * items [fee_refund](#fee_refund)
    * has_more **required** `boolean`: True if this list has another page of items after this one that can be fetched.
    * object **required** `string` (values: list): String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
    * url **required** `string`: The URL where this list can be accessed.

### product
* Product `object`
  * active `boolean`: Whether the product is currently available for purchase. Only applicable to products of `type=good`.
  * attributes `array`: A list of up to 5 attributes that each SKU can provide values for (e.g., `["color", "size"]`). Only applicable to products of `type=good`.
    * items `string`
  * caption `string`: A short one-line description of the product, meant to be displayable to the customer. Only applicable to products of `type=good`.
  * created **required** `integer`: Time at which the object was created. Measured in seconds since the Unix epoch.
  * deactivate_on `array`: An array of connect application identifiers that cannot purchase this product. Only applicable to products of `type=good`.

  * description `string`: The product's description, meant to be displayable to the customer. Only applicable to products of `type=good`.
  * id **required** `string`: Unique identifier for the object.
  * images **required** `array`: A list of up to 8 URLs of images for this product, meant to be displayable to the customer. Only applicable to products of `type=good`.
    * items `string`
  * livemode **required** `boolean`: Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
  * metadata **required** `object`: Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
  * name **required** `string`: The product's name, meant to be displayable to the customer. Applicable to both `service` and `good` types.
  * object **required** `string` (values: product): String representing the object's type. Objects of the same type share the same value.
  * package_dimensions [package_dimensions](#package_dimensions)
  * shippable `boolean`: Whether this product is a shipped good. Only applicable to products of `type=good`.
  * statement_descriptor `string`: Extra information about a product which will appear on your customer's credit card statement. In the case that multiple products are billed at once, the first statement descriptor will be used. Only available on products of type=`service`.
  * type `string`: The type of the product. The product is either of type `good`, which is eligible for use with Orders and SKUs, or `service`, which is eligible for use with Subscriptions and Plans.
  * unit_label `string`: A label that represents units of this product, such as seat(s), in Stripe and on customers’ receipts and invoices. Only available on products of type=`service`.
  * updated **required** `integer`
  * url `string`: A URL of a publicly-accessible webpage for this product. Only applicable to products of `type=good`.

### radar_review
* RadarReview `object`
  * charge **required** `string`: The charge associated with this review.
  * created **required** `integer`: Time at which the object was created. Measured in seconds since the Unix epoch.
  * id **required** `string`: Unique identifier for the object.
  * livemode **required** `boolean`: Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
  * object **required** `string` (values: review): String representing the object's type. Objects of the same type share the same value.
  * open **required** `boolean`: If `true`, the review needs action.
  * reason **required** `string`: The reason the review is currently open or closed. One of `rule`, `manual`, `approved`, `refunded`, `refunded_as_fraud`, or `disputed`.

### radar_rule
* RadarRule `object`
  * action **required** `string`: The action taken on the payment.
  * id **required** `string`: Unique identifier for the object.
  * predicate **required** `string`: The predicate to evaluate the payment against.

### refund
* Refund `object`
  * amount **required** `integer`: Amount, in %s.
  * balance_transaction `string`: Balance transaction that describes the impact on your account balance.
  * charge `string`: ID of the charge that was refunded.
  * created **required** `integer`: Time at which the object was created. Measured in seconds since the Unix epoch.
  * currency **required** `string`: Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
  * failure_balance_transaction `string`: If the refund failed, this balance transaction describes the adjustment made on your account balance that reverses the initial balance transaction.
  * failure_reason `string`: If the refund failed, the reason for refund failure if known. Possible values are `lost_or_stolen_card`, `expired_or_canceled_card`, or `unknown`.
  * id **required** `string`: Unique identifier for the object.
  * metadata **required** `object`: Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
  * object **required** `string` (values: refund): String representing the object's type. Objects of the same type share the same value.
  * reason `string`: Reason for the refund. If set, possible values are `duplicate`, `fraudulent`, and `requested_by_customer`.
  * receipt_number `string`: This is the transaction number that appears on email receipts sent for this refund.
  * status `string`: Status of the refund. For credit card refunds, this can be `succeeded` or `failed`. For other types of refunds, it can be `pending`, `succeeded`, `failed`, or `canceled`. Refer to our [refunds](/docs/refunds#failed-refunds) documentation for more details.

### reserve_transaction
* ReserveTransaction `object`
  * amount **required** `integer`
  * currency **required** `string`: Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
  * description `string`: An arbitrary string attached to the object. Often useful for displaying to users.
  * id **required** `string`: Unique identifier for the object.
  * object **required** `string` (values: reserve_transaction): String representing the object's type. Objects of the same type share the same value.

### shipping
* Shipping `object`
  * address **required** [address](#address)
  * carrier `string`: The delivery service that shipped a physical product, such as Fedex, UPS, USPS, etc.
  * name **required** `string`: Recipient name.
  * phone `string`: Recipient phone (including extension).
  * tracking_number `string`: The tracking number for a physical product, obtained from the delivery service. If multiple tracking numbers were generated for this purchase, please separate them with commas.

### shipping_method
* ShippingMethod `object`
  * amount **required** `integer`: A positive integer in the smallest currency unit (that is, 100 cents for $1.00, or 1 for ¥1, Japanese Yen being a zero-decimal currency) representing the total amount for the line item.
  * currency **required** `string`: Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
  * delivery_estimate [delivery_estimate](#delivery_estimate)
  * description **required** `string`: An arbitrary string attached to the object. Often useful for displaying to users.
  * id **required** `string`: Unique identifier for the object.

### sku
* SKU `object`
  * active **required** `boolean`: Whether the SKU is available for purchase.
  * attributes **required** `object`: A dictionary of attributes and values for the attributes defined by the product. If, for example, a product's attributes are `["size", "gender"]`, a valid SKU has the following dictionary of attributes: `{"size": "Medium", "gender": "Unisex"}`.
  * created **required** `integer`: Time at which the object was created. Measured in seconds since the Unix epoch.
  * currency **required** `string`: Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
  * id **required** `string`: Unique identifier for the object.
  * image `string`: The URL of an image for this SKU, meant to be displayable to the customer.
  * inventory **required** [inventory](#inventory)
  * livemode **required** `boolean`: Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
  * metadata **required** `object`: Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
  * object **required** `string` (values: sku): String representing the object's type. Objects of the same type share the same value.
  * package_dimensions [package_dimensions](#package_dimensions)
  * price **required** `integer`: The cost of the item as a positive integer in the smallest currency unit (that is, 100 cents to charge $1.00, or 100 to charge ¥100, Japanese Yen being a zero-decimal currency).
  * product **required** `string`: The ID of the product this SKU is associated with. The product must be currently active.
  * updated **required** `integer`

### source
* Source `object`
  * ach_credit_transfer `object`
    * account_number `string`
    * bank_name `string`
    * fingerprint `string`
    * routing_number `string`
    * swift_code `string`
  * ach_debit `object`
    * bank_name `string`
    * country `string`
    * fingerprint `string`
    * last4 `string`
    * routing_number `string`
    * type `string`
  * alipay `object`
    * data_string `string`
    * native_url `string`
    * statement_descriptor `string`
  * amount `integer`: Amount associated with the source. This is the amount for which the source will be chargeable once ready. Required for `single_use` sources.
  * bancontact `object`
    * bank_code `string`
    * bank_name `string`
    * bic `string`
    * preferred_language `string`
    * statement_descriptor `string`
  * bitcoin `object`
    * address `string`
    * amount `integer`
    * amount_charged `integer`
    * amount_received `integer`
    * amount_returned `integer`
    * refund_address `string`
    * uri `string`
  * card `object`
    * address_line1_check `string`
    * address_zip_check `string`
    * brand `string`
    * card_automatically_updated `boolean`
    * country `string`
    * cvc_check `string`
    * dynamic_last4 `string`
    * exp_month `integer`
    * exp_year `integer`
    * fingerprint `string`
    * funding `string`
    * last4 `string`
    * skip_validation `boolean`
    * three_d_secure `string`
    * tokenization_method `string`
  * client_secret **required** `string`: The client secret of the source. Used for client-side retrieval using a publishable key.
  * code_verification [source_code_verification_flow](#source_code_verification_flow)
  * created **required** `integer`: Time at which the object was created. Measured in seconds since the Unix epoch.
  * currency `string`: Three-letter [ISO code for the currency](https://stripe.com/docs/currencies) associated with the source. This is the currency for which the source will be chargeable once ready. Required for `single_use` sources.
  * eps `object`
    * reference `string`
    * statement_descriptor `string`
  * flow **required** `string`: The authentication `flow` of the source. `flow` is one of `redirect`, `receiver`, `code_verification`, `none`.
  * giropay `object`
    * bank_code `string`
    * bank_name `string`
    * bic `string`
    * statement_descriptor `string`
  * id **required** `string`: Unique identifier for the object.
  * ideal `object`
    * bank `string`
    * bic `string`
    * iban_last4 `string`
    * statement_descriptor `string`
  * livemode **required** `boolean`: Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
  * metadata `object`: Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
  * multibanco `object`
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
  * object **required** `string` (values: source): String representing the object's type. Objects of the same type share the same value.
  * owner [source_owner](#source_owner)
  * p24 `object`
    * reference `string`
  * receiver [source_receiver_flow](#source_receiver_flow)
  * redirect [source_redirect_flow](#source_redirect_flow)
  * sepa_credit_transfer `object`
    * bank_name `string`
    * bic `string`
    * iban `string`
    * refund_account_holder_address_city `string`
    * refund_account_holder_address_country `string`
    * refund_account_holder_address_line1 `string`
    * refund_account_holder_address_line2 `string`
    * refund_account_holder_address_postal_code `string`
    * refund_account_holder_address_state `string`
    * refund_account_holder_name `string`
    * refund_iban `string`
  * sepa_debit `object`
    * bank_code `string`
    * branch_code `string`
    * country `string`
    * fingerprint `string`
    * last4 `string`
    * mandate_reference `string`
    * mandate_url `string`
    * skip_validation `boolean`
  * sofort `object`
    * bank_code `string`
    * bank_name `string`
    * bic `string`
    * country `string`
    * iban_last4 `string`
    * preferred_language `string`
    * statement_descriptor `string`
  * statement_descriptor `string`: Extra information about a source. This will appear on your customer's statement every time you charge the source.
  * status **required** `string`: The status of the source, one of `canceled`, `chargeable`, `consumed`, `failed`, or `pending`. Only `chargeable` sources can be used to create a charge.
  * three_d_secure `object`
    * authenticated `boolean`
    * card `string`
    * customer `string`
  * type **required** `string` (values: ach_credit_transfer, ach_debit, alipay, bancontact, bitcoin, card, eps, giropay, ideal, multibanco, p24, sepa_credit_transfer, sepa_debit, sofort, three_d_secure): The `type` of the source. The `type` is a payment method, one of `ach_credit_transfer`, `ach_debit`, `alipay`, `bancontact`, `bitcoin`, `card`, `eps`, `giropay`, `ideal`, `multibanco`, `p24`, `sepa_credit_transfer`, `sepa_debit`, `sofort`, or `three_d_secure`. An additional hash is included on the source with a name matching this value. It contains additional information specific to the [payment method](/docs/sources) used.
  * usage `string`: Either `reusable` or `single_use`. Whether this source should be reusable or not. Some source types may or may not be reusable by construction, while other may leave the option at creation. If an incompatible value is passed, an error will be returned.

### source_code_verification_flow
* SourceCodeVerificationFlow `object`
  * attempts_remaining **required** `integer`: The number of attempts remaining to authenticate the source object with a verification code.
  * status **required** `string`: The status of the code verification, either `pending` (awaiting verification, `attempts_remaining` should be greater than 0), `succeeded` (successful verification) or `failed` (failed verification, cannot be verified anymore as `attempts_remaining` should be 0).

### source_mandate_notification
* SourceMandateNotification `object`
  * amount `integer`: Amount associated with the mandate notification. The amount is expressed in the currency of the underlying Source. Set if the notification type is `debit_initiated`.
  * created **required** `integer`: Time at which the object was created. Measured in seconds since the Unix epoch.
  * id **required** `string`: Unique identifier for the object.
  * livemode **required** `boolean`: Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
  * object **required** `string` (values: source_mandate_notification): String representing the object's type. Objects of the same type share the same value.
  * reason **required** `string`: The reason of the mandate notification.
  * source **required** [source](#source)
  * status **required** `string`: The status of the mandate notification.
  * type **required** `string`: The type of source this mandate notification is attached to.

### source_owner
* SourceOwner `object`
  * address [address](#address)
  * email `string`: Owner's email address.
  * name `string`: Owner's full name.
  * phone `string`: Owner's phone number (including extension).
  * verified_address [address](#address)
  * verified_email `string`: Verified owner's email address. Verified values are verified or provided by the payment method directly (and if supported) at the time of authorization or settlement. They cannot be set or mutated.
  * verified_name `string`: Verified owner's full name. Verified values are verified or provided by the payment method directly (and if supported) at the time of authorization or settlement. They cannot be set or mutated.
  * verified_phone `string`: Verified owner's phone number (including extension). Verified values are verified or provided by the payment method directly (and if supported) at the time of authorization or settlement. They cannot be set or mutated.

### source_receiver_flow
* SourceReceiverFlow `object`
  * address `string`: The address of the receiver source. This is the value that should be communicated to the customer to send their funds to.
  * amount_charged **required** `integer`: The total amount that was charged by you. The amount charged is expressed in the source's currency.
  * amount_received **required** `integer`: The total amount received by the receiver source. `amount_received = amount_returned + amount_charged` is true at all time. The amount received is expressed in the source's currency.
  * amount_returned **required** `integer`: The total amount that was returned to the customer. The amount returned is expressed in the source's currency.

### source_redirect_flow
* SourceRedirectFlow `object`
  * failure_reason `string`: The failure reason for the redirect, either `user_abort` (the customer aborted or dropped out of the redirect flow), `declined` (the authentication failed or the transaction was declined), or `processing_error` (the redirect failed due to a technical error). Present only if the redirect status is `failed`.
  * return_url **required** `string`: The URL you provide to redirect the customer to after they authenticated their payment.
  * status **required** `string`: The status of the redirect, either `pending` (ready to be used by your customer to authenticate the transaction), `succeeded` (succesful authentication, cannot be reused) or `not_required` (redirect should not be used) or `failed` (failed authentication, cannot be reused).
  * url **required** `string`: The URL provided to you to redirect a customer to as part of a `redirect` authentication flow.

### source_transaction
* SourceTransaction `object`
  * ach_credit_transfer `object`
    * account_number `string`
    * bank_name `string`
    * fingerprint `string`
    * routing_number `string`
    * swift_code `string`
  * ach_debit `object`
    * bank_name `string`
    * country `string`
    * fingerprint `string`
    * last4 `string`
    * routing_number `string`
    * type `string`
  * alipay `object`
    * data_string `string`
    * native_url `string`
    * statement_descriptor `string`
  * amount **required** `integer`: The amount your customer has pushed to the receiver.
  * bancontact `object`
    * bank_code `string`
    * bank_name `string`
    * bic `string`
    * preferred_language `string`
    * statement_descriptor `string`
  * bitcoin `object`
    * address `string`
    * amount `integer`
    * amount_charged `integer`
    * amount_received `integer`
    * amount_returned `integer`
    * refund_address `string`
    * uri `string`
  * card `object`
    * address_line1_check `string`
    * address_zip_check `string`
    * brand `string`
    * card_automatically_updated `boolean`
    * country `string`
    * cvc_check `string`
    * dynamic_last4 `string`
    * exp_month `integer`
    * exp_year `integer`
    * fingerprint `string`
    * funding `string`
    * last4 `string`
    * skip_validation `boolean`
    * three_d_secure `string`
    * tokenization_method `string`
  * created **required** `integer`: Time at which the object was created. Measured in seconds since the Unix epoch.
  * currency **required** `string`: Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
  * eps `object`
    * reference `string`
    * statement_descriptor `string`
  * giropay `object`
    * bank_code `string`
    * bank_name `string`
    * bic `string`
    * statement_descriptor `string`
  * id **required** `string`: Unique identifier for the object.
  * ideal `object`
    * bank `string`
    * bic `string`
    * iban_last4 `string`
    * statement_descriptor `string`
  * livemode **required** `boolean`: Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
  * multibanco `object`
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
  * object **required** `string` (values: source_transaction): String representing the object's type. Objects of the same type share the same value.
  * p24 `object`
    * reference `string`
  * sepa_credit_transfer `object`
    * bank_name `string`
    * bic `string`
    * iban `string`
    * refund_account_holder_address_city `string`
    * refund_account_holder_address_country `string`
    * refund_account_holder_address_line1 `string`
    * refund_account_holder_address_line2 `string`
    * refund_account_holder_address_postal_code `string`
    * refund_account_holder_address_state `string`
    * refund_account_holder_name `string`
    * refund_iban `string`
  * sepa_debit `object`
    * bank_code `string`
    * branch_code `string`
    * country `string`
    * fingerprint `string`
    * last4 `string`
    * mandate_reference `string`
    * mandate_url `string`
    * skip_validation `boolean`
  * sofort `object`
    * bank_code `string`
    * bank_name `string`
    * bic `string`
    * country `string`
    * iban_last4 `string`
    * preferred_language `string`
    * statement_descriptor `string`
  * source **required** `string`: The ID of the source this transaction is attached to.
  * three_d_secure `object`
    * authenticated `boolean`
    * card `string`
    * customer `string`
  * type **required** `string` (values: ach_credit_transfer, ach_debit, alipay, bancontact, bitcoin, card, eps, giropay, ideal, multibanco, p24, sepa_credit_transfer, sepa_debit, sofort, three_d_secure): The type of source this transaction is attached to.

### status_transitions
* StatusTransitions `object`
  * canceled `integer`
  * fulfiled `integer`
  * paid `integer`
  * returned `integer`

### subscription
* Subscription `object`
  * application_fee_percent `number`: A non-negative decimal between 0 and 100, with at most two decimal places. This represents the percentage of the subscription invoice subtotal that will be transferred to the application owner's Stripe account.
  * billing `string`: Either `charge_automatically`, or `send_invoice`. When charging automatically, Stripe will attempt to pay this subscription at the end of the cycle using the default source attached to the customer. When sending an invoice, Stripe will email your customer an invoice with payment instructions.
  * billing_cycle_anchor `integer`: Determines the date of the first full invoice, and, for plans with `month` or `year` intervals, the day of the month for subsequent invoices.
  * cancel_at_period_end **required** `boolean`: If the subscription has been canceled with the `at_period_end` flag set to `true`, `cancel_at_period_end` on the subscription will be true. You can use this attribute to determine whether a subscription that has a status of active is scheduled to be canceled at the end of the current period.
  * canceled_at `integer`: If the subscription has been canceled, the date of that cancellation. If the subscription was canceled with `cancel_at_period_end`, `canceled_at` will still reflect the date of the initial cancellation request, not the end of the subscription period when the subscription is automatically moved to a canceled state.
  * created **required** `integer`: Time at which the object was created. Measured in seconds since the Unix epoch.
  * current_period_end `integer`: End of the current period that the subscription has been invoiced for. At the end of this period, a new invoice will be created.
  * current_period_start `integer`: Start of the current period that the subscription has been invoiced for.
  * customer **required** `string`: ID of the customer who owns the subscription.
  * days_until_due `integer`: Number of days a customer has to pay invoices generated by this subscription. This value will be `null` for subscriptions where `billing=charge_automatically`.
  * discount [discount](#discount)
  * ended_at `integer`: If the subscription has ended, the date the subscription ended.
  * id **required** `string`: Unique identifier for the object.
  * items `object`
    * data **required** `array`
      * items [subscription_item](#subscription_item)
    * has_more **required** `boolean`: True if this list has another page of items after this one that can be fetched.
    * object **required** `string` (values: list): String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
    * url **required** `string`: The URL where this list can be accessed.
  * livemode **required** `boolean`: Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
  * metadata **required** `object`: Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
  * object **required** `string` (values: subscription): String representing the object's type. Objects of the same type share the same value.
  * plan [plan](#plan)
  * quantity `integer`: The quantity of the plan to which the customer should be subscribed. For example, if your plan is $10/user/month, and your customer has 5 users, you could pass 5 as the quantity to have the customer charged $50 (5 x $10) monthly.
  * start **required** `integer`: Date the most recent update to this subscription started.
  * status **required** `string` (values: active, canceled, past_due, trialing, unpaid): Possible values are `trialing`, `active`, `past_due`, `canceled`, or `unpaid`. A subscription still in its trial period is `trialing` and moves to `active` when the trial period is over. If subscription `billing=charge_automatically` it becomes `past_due` when payment to renew it fails and `canceled` or `unpaid` (depending on your subscriptions settings) when Stripe has exhausted all payment retry attempts. If subscription `billing=send_invoice` it becomes `past_due` when its invoice is not paid by the due date, and `canceled` or `unpaid` if it is still not paid by an additional deadline after that. Note that when a subscription has a status of `unpaid`, no subsequent invoices will be attempted (invoices will be created, but then immediately automatically closed.) After receiving updated payment information from a customer, you may choose to reopen and pay their closed invoices.
  * tax_percent `number`: If provided, each invoice created by this subscription will apply the tax rate, increasing the amount billed to the customer.
  * trial_end `integer`: If the subscription has a trial, the end of that trial.
  * trial_start `integer`: If the subscription has a trial, the beginning of that trial.

### subscription_item
* SubscriptionItem `object`
  * created **required** `integer`: Time at which the object was created. Measured in seconds since the Unix epoch.
  * id **required** `string`: Unique identifier for the object.
  * metadata **required** `object`: Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
  * object **required** `string` (values: subscription_item): String representing the object's type. Objects of the same type share the same value.
  * plan **required** [plan](#plan)
  * quantity `integer`: The [quantity](/docs/subscriptions/quantities) of the plan to which the customer should be subscribed.
  * subscription `string`: The `subscription` this `subscription_item` belongs to.

### three_d_secure
* ThreeDSecure `object`
  * amount **required** `integer`
  * authenticated **required** `boolean`: True if the cardholder went through the authentication flow and their bank indicated that authentication succeeded.
  * card **required** [card](#card)
  * created **required** `integer`: Time at which the object was created. Measured in seconds since the Unix epoch.
  * currency **required** `string`: Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
  * id **required** `string`: Unique identifier for the object.
  * livemode **required** `boolean`: Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
  * object **required** `string` (values: three_d_secure): String representing the object's type. Objects of the same type share the same value.
  * redirect_url `string`: If present, this is the URL that you should send the cardholder to for authentication. If you are going to use Stripe.js to display the authentication page in an iframe, you should use the value "_callback".
  * status **required** `string`: Possible values are `redirect_pending`, `succeeded`, or `failed`. When the cardholder can be authenticated, the object starts with status `redirect_pending`. When liability will be shifted to the cardholder's bank (either because the cardholder was successfully authenticated, or because the bank has not implemented 3D Secure, the object wlil be in status `succeeded`. `failed` indicates that authentication was attempted unsuccessfully.

### token
* Token `object`
  * bank_account [token_bank_account](#token_bank_account)
  * card [token_card](#token_card)
  * client_ip `string`: IP address of the client that generated the token.
  * created **required** `integer`: Time at which the object was created. Measured in seconds since the Unix epoch.
  * id **required** `string`: Unique identifier for the object.
  * livemode **required** `boolean`: Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
  * object **required** `string` (values: token): String representing the object's type. Objects of the same type share the same value.
  * type **required** `string`: Type of the token: `account`, `bank_account`, `card`, or `pii`.
  * used **required** `boolean`: Whether this token has already been used (tokens can be used only once).

### token_bank_account
* TokenBankAccount `object`
  * account_holder_name `string`: The name of the person or business that owns the bank account.
  * account_holder_type `string`: The type of entity that holds the account. This can be either `individual` or `company`.
  * bank_name `string`: Name of the bank associated with the routing number (e.g., `WELLS FARGO`).
  * country **required** `string`: Two-letter ISO code representing the country the bank account is located in.
  * currency **required** `string`: Three-letter [ISO code for the currency](https://stripe.com/docs/payouts) paid out to the bank account.
  * fingerprint `string`: Uniquely identifies this particular bank account. You can use this attribute to check whether two bank accounts are the same.
  * id **required** `string`: Unique identifier for the object.
  * last4 **required** `string`
  * object **required** `string` (values: bank_account): String representing the object's type. Objects of the same type share the same value.
  * routing_number `string`: The routing transit number for the bank account.
  * status **required** `string`: Possible values are `new`, `validated`, `verified`, `verification_failed`, or `errored`. A bank account that hasn't had any activity or validation performed is `new`. If Stripe can determine that the bank account exists, its status will be `validated`. Note that there often isn’t enough information to know (e.g., for smaller credit unions), and the validation is not always run. If customer bank account verification has succeeded, the bank account status will be `verified`. If the verification failed for any reason, such as microdeposit failure, the status will be `verification_failed`. If a transfer sent to this bank account fails, we'll set the status to `errored` and will not continue to send transfers until the bank details are updated.

### token_card
* TokenCard `object`
  * address_city `string`: City/District/Suburb/Town/Village.
  * address_country `string`: Billing address country, if provided when creating card.
  * address_line1 `string`: Address line 1 (Street address/PO Box/Company name).
  * address_line1_check `string`: If `address_line1` was provided, results of the check: `pass`, `fail`, `unavailable`, or `unchecked`.
  * address_line2 `string`: Address line 2 (Apartment/Suite/Unit/Building).
  * address_state `string`: State/County/Province/Region.
  * address_zip `string`: ZIP or postal code.
  * address_zip_check `string`: If `address_zip` was provided, results of the check: `pass`, `fail`, `unavailable`, or `unchecked`.
  * brand **required** `string`: Card brand. Can be `American Express`, `Diners Club`, `Discover`, `JCB`, `MasterCard`, `UnionPay`, `Visa`, or `Unknown`.
  * country `string`: Two-letter ISO code representing the country of the card. You could use this attribute to get a sense of the international breakdown of cards you've collected.
  * currency `string`: Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
  * cvc_check `string`: If a CVC was provided, results of the check: `pass`, `fail`, `unavailable`, or `unchecked`.
  * dynamic_last4 `string`: (For tokenized numbers only.) The last four digits of the device account number.
  * exp_month **required** `integer`: Two-digit number representing the card's expiration month.
  * exp_year **required** `integer`: Four-digit number representing the card's expiration year.
  * fingerprint `string`: Uniquely identifies this particular card number. You can use this attribute to check whether two customers who've signed up with you are using the same card number, for example.
  * funding **required** `string`: Card funding type. Can be `credit`, `debit`, `prepaid`, or `unknown`.
  * id **required** `string`: Unique identifier for the object.
  * last4 **required** `string`: The last four digits of the card.
  * metadata **required** `object`: Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
  * name `string`: Cardholder name.
  * object **required** `string` (values: card): String representing the object's type. Objects of the same type share the same value.
  * tokenization_method `string`: If the card number is tokenized, this is the method that was used. Can be `apple_pay` or `android_pay`.

### topup
* Topup `object`
  * amount **required** `integer`: Amount transferred, in %s.
  * balance_transaction `string`: ID of the balance transaction that describes the impact of this top-up on your account balance.
  * created **required** `integer`: Time at which the object was created. Measured in seconds since the Unix epoch.
  * currency **required** `string`: Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
  * description `string`: An arbitrary string attached to the object. Often useful for displaying to users.
  * expected_availability_date `integer`: Date the funds are expected to arrive in your Stripe account for payouts. This factors in delays like weekends or bank holidays.
  * failure_code `string`: Error code explaining reason for top up failure if available (see [the errors section](/docs/api#errors) for a list of codes).
  * failure_message `string`: Message to user further explaining reason for top up failure if available.
  * id **required** `string`: Unique identifier for the object.
  * livemode **required** `boolean`: Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
  * metadata **required** `object`: Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
  * object **required** `string` (values: topup): String representing the object's type. Objects of the same type share the same value.
  * source **required** [source](#source)
  * statement_descriptor `string`: Extra information about a top-up. This will appear on your source's bank statement. It must contain at least one letter.
  * status **required** `string`: The status of the top-up is either `failed`, `pending` or `succeeded`.

### transfer
* Transfer `object`
  * amount **required** `integer`: Amount in %s to be transferred.
  * amount_reversed **required** `integer`: Amount in %s reversed (can be less than the amount attribute on the transfer if a partial reversal was issued).
  * balance_transaction `string`: Balance transaction that describes the impact of this transfer on your account balance.
  * created **required** `integer`: Time that this record of the transfer was first created.
  * currency **required** `string`: Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
  * description `string`: An arbitrary string attached to the object. Often useful for displaying to users.
  * destination `string`: ID of the Stripe account the transfer was sent to.
  * destination_payment `string`: If the destination is a Stripe account, this will be the ID of the payment that the destination account received for the transfer.
  * id **required** `string`: Unique identifier for the object.
  * livemode **required** `boolean`: Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
  * metadata **required** `object`: A set of key/value pairs that you can attach to a transfer object. It can be useful for storing additional information about the transfer in a structured format.
  * object **required** `string` (values: transfer): String representing the object's type. Objects of the same type share the same value.
  * reversals **required** `object`: A list of reversals that have been applied to the transfer.
    * data **required** `array`
      * items [transfer_reversal](#transfer_reversal)
    * has_more **required** `boolean`: True if this list has another page of items after this one that can be fetched.
    * object **required** `string` (values: list): String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
    * url **required** `string`: The URL where this list can be accessed.
  * reversed **required** `boolean`: Whether the transfer has been fully reversed. If the transfer is only partially reversed, this attribute will still be false.
  * source_transaction `string`: ID of the charge or payment that was used to fund the transfer. If null, the transfer was funded from the available balance.
  * source_type `string`: The source balance this transfer came from. One of `card`, `bank_account`, `bitcoin_receiver`, or `alipay_account`.
  * transfer_group `string`: A string that identifies this transaction as part of a group. See the [Connect documentation](/docs/connect/charges-transfers#grouping-transactions) for details.

### transfer_recipient
* TransferRecipient `object`
  * active_account [bank_account](#bank_account)
  * cards `object`
    * data **required** `array`
      * items [card](#card)
    * has_more **required** `boolean`: True if this list has another page of items after this one that can be fetched.
    * object **required** `string` (values: list): String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
    * url **required** `string`: The URL where this list can be accessed.
  * created **required** `integer`: Time at which the object was created. Measured in seconds since the Unix epoch.
  * default_card `string`: The default card to use for creating transfers to this recipient.
  * description `string`: An arbitrary string attached to the object. Often useful for displaying to users.
  * email `string`
  * id **required** `string`: Unique identifier for the object.
  * livemode **required** `boolean`: Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
  * metadata **required** `object`: Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
  * migrated_to `string`: The ID of the [Custom account](/docs/connect/custom-accounts) this recipient was migrated to. If set, the recipient can no longer be updated, nor can transfers be made to it: use the Custom account instead.
  * name `string`: Full, legal name of the recipient.
  * object **required** `string` (values: recipient): String representing the object's type. Objects of the same type share the same value.
  * rolled_back_from `string`
  * type **required** `string`: Type of the recipient, one of `individual` or `corporation`.

### transfer_recipient_transfer
* TransferRecipientTransfer `object`
  * amount **required** `integer`: Amount (in %s) to be transferred to your bank account.
  * amount_reversed **required** `integer`: Amount in %s reversed (can be less than the amount attribute on the transfer if a partial reversal was issued).
  * application_fee `string`
  * automatic **required** `boolean`: Returns `true` if the payout was created by an [automated payout schedule](/docs/payouts#payout-schedule), and `false` if it was [requested manually](https://stripe.com/docs/payouts#manual-payouts).
  * balance_transaction `string`: Balance transaction that describes the impact of this transfer on your account balance.
  * created **required** `integer`: Time at which the object was created. Measured in seconds since the Unix epoch.
  * currency **required** `string`: Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
  * date **required** `integer`: Date the transfer is scheduled to arrive in the bank. This factors in delays like weekends or bank holidays.
  * description `string`: Internal-only description of the transfer.
  * destination `string`: ID of the bank account, card, or Stripe account the transfer was sent to.
  * destination_payment `string`: If the destination is a Stripe account, this will be the ID of the payment that the destination account received for the transfer.
  * failure_code `string`: Error code explaining reason for transfer failure if available. See [Types of transfer failures](/docs/api#transfer_failures) for a list of failure codes.
  * failure_message `string`: Message to user further explaining reason for transfer failure if available.
  * id **required** `string`: Unique identifier for the object.
  * livemode **required** `boolean`: Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
  * metadata **required** `object`: Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
  * method `string`: The method used to send this transfer, which can be `standard` or `instant`. `instant` is only supported for transfers to debit cards. (See [Instant payouts for marketplaces](/blog/instant-payouts-for-marketplaces) for more information.)
  * object **required** `string` (values: recipient_transfer): String representing the object's type. Objects of the same type share the same value.
  * reversals **required** `object`: A list of reversals that have been applied to the transfer.
    * data **required** `array`
      * items [transfer_reversal](#transfer_reversal)
    * has_more **required** `boolean`: True if this list has another page of items after this one that can be fetched.
    * object **required** `string` (values: list): String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
    * url **required** `string`: The URL where this list can be accessed.
  * reversed **required** `boolean`: Whether the transfer has been fully reversed. If the transfer is only partially reversed, this attribute will still be false.
  * source_transaction `string`: ID of the charge (or other transaction) that was used to fund the transfer. If null, the transfer was funded from the available balance.
  * source_type `string`: The source balance this transfer came from. One of `card`, `bank_account`, `bitcoin_receiver`, or `alipay_account`.
  * statement_descriptor `string`: Extra information about a transfer to be displayed on the user's bank statement.
  * status **required** `string`: Current status of the transfer (`paid`, `pending`, `in_transit`, `canceled` or `failed`). A transfer will be `pending` until it is submitted to the bank, at which point it becomes `in_transit`. It will then change to `paid` if the transaction goes through. If it does not go through successfully, its status will change to `failed` or `canceled`.
  * transfer_group `string`: A string that identifies this transaction as part of a group. See the [Connect documentation](/docs/connect/charges-transfers#grouping-transactions) for details.
  * type **required** `string`: Can be `card`, `bank_account`, or `stripe_account`.

### transfer_reversal
* TransferReversal `object`
  * amount **required** `integer`: Amount, in %s.
  * balance_transaction `string`: Balance transaction that describes the impact on your account balance.
  * created **required** `integer`: Time at which the object was created. Measured in seconds since the Unix epoch.
  * currency **required** `string`: Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
  * id **required** `string`: Unique identifier for the object.
  * metadata **required** `object`: Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
  * object **required** `string` (values: transfer_reversal): String representing the object's type. Objects of the same type share the same value.
  * transfer **required** `string`: ID of the transfer that was reversed.

### transfer_schedule
* TransferSchedule `object`
  * delay_days **required** `integer`: The number of days charges for the account will be held before being paid out.
  * interval **required** `string`: How frequently funds will be paid out. One of `manual` (transfers only created via API call), `daily`, `weekly`, or `monthly`.
  * monthly_anchor `integer`: The day of the month funds will be paid out. Only shown if `interval` is monthly. Payouts scheduled between 29-31st of the month are sent on the last day of shorter months.
  * weekly_anchor `string`: The day of the week funds will be paid out, of the style 'monday', 'tuesday', etc. Only shown if `interval` is weekly.

### transform_usage
* TransformUsage `object`
  * divide_by **required** `integer`: Divide usage by this number.
  * round **required** `string` (values: down, up): After division, either round the result `up` or `down`.

### upcoming_invoice
* UpcomingInvoice `object`
  * amount_due **required** `integer`: Final amount due at this time for this invoice. If the invoice's total is smaller than the minimum charge amount, for example, or if there is account credit that can be applied to the invoice, the `amount_due` may be 0. If there is a positive `starting_balance` for the invoice (the customer owes money), the `amount_due` will also take that into account. The charge that gets generated for the invoice will be for the amount specified in `amount_due`.
  * amount_paid **required** `integer`: The amount, in %s, that was paid.
  * amount_remaining **required** `integer`: The amount remaining, in %s, that is due.
  * application_fee `integer`: The fee in %s that will be applied to the invoice and transferred to the application owner's Stripe account when the invoice is paid.
  * attempt_count **required** `integer`: Number of payment attempts made for this invoice, from the perspective of the payment retry schedule. Any payment attempt counts as the first attempt, and subsequently only automatic retries increment the attempt count. In other words, manual payment attempts after the first attempt do not affect the retry schedule.
  * attempted **required** `boolean`: Whether an attempt has been made to pay the invoice. An invoice is not attempted until 1 hour after the `invoice.created` webhook, for example, so you might not want to display that invoice as unpaid to your users.
  * billing `string` (values: charge_automatically, send_invoice): Either `charge_automatically`, or `send_invoice`. When charging automatically, Stripe will attempt to pay this invoice using the default source attached to the customer. When sending an invoice, Stripe will email this invoice to the customer with payment instructions.
  * charge `string`: ID of the latest charge generated for this invoice, if any.
  * closed **required** `boolean`: Whether the invoice is still trying to collect payment. An invoice is closed if it's either paid or it has been marked closed. A closed invoice will no longer attempt to collect payment.
  * currency **required** `string`: Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
  * customer **required** `string`
  * date **required** `integer`: Time at which the object was created. Measured in seconds since the Unix epoch.
  * description `string`: An arbitrary string attached to the object. Often useful for displaying to users.
  * discount [discount](#discount)
  * due_date `integer`: The date on which payment for this invoice is due. This value will be `null` for invoices where `billing=charge_automatically`.
  * ending_balance `integer`: Ending customer balance after the invoice is frozen. Invoices are frozen approximately an hour after successful webhook delivery or when payment collection is attempted for the invoice. If the invoice has not been frozen yet, this will be null.
  * forgiven **required** `boolean`: Whether the invoice has been forgiven. Forgiving an invoice instructs us to update the subscription status as if the invoice were successfully paid. Once an invoice has been forgiven, it cannot be unforgiven or reopened.
  * lines **required** `object`: The individual line items that make up the invoice. `lines` is sorted as follows: invoice items in reverse chronological order, followed by the subscription, if any.
    * data **required** `array`
      * items [invoice_line_item](#invoice_line_item)
    * has_more **required** `boolean`: True if this list has another page of items after this one that can be fetched.
    * object **required** `string` (values: list): String representing the object's type. Objects of the same type share the same value. Always has the value `list`.
    * url **required** `string`: The URL where this list can be accessed.
  * livemode **required** `boolean`: Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
  * metadata `object`: Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
  * next_payment_attempt `integer`: The time at which payment will next be attempted. This value will be `null` for invoices where `billing=send_invoice`.
  * number `string`: A unique, identifying string that appears on emails sent to the customer for this invoice. This starts with the customer's unique invoice_prefix if it is specified.
  * object **required** `string` (values: invoice): String representing the object's type. Objects of the same type share the same value.
  * paid **required** `boolean`: Whether payment was successfully collected for this invoice. An invoice can be paid (most commonly) with a charge or with credit from the customer's account balance.
  * period_end **required** `integer`: End of the usage period during which invoice items were added to this invoice.
  * period_start **required** `integer`: Start of the usage period during which invoice items were added to this invoice.
  * receipt_number `string`: This is the transaction number that appears on email receipts sent for this invoice.
  * starting_balance **required** `integer`: Starting customer balance before the invoice is frozen. If the invoice has not been frozen yet, this will be the current customer balance.
  * statement_descriptor `string`: Extra information about an invoice for the customer's credit card statement.
  * subscription `string`: The subscription that this invoice was prepared for, if any.
  * subscription_proration_date `integer`: Only set for upcoming invoices that preview prorations. The time used to calculate prorations.
  * subtotal **required** `integer`: Total of all subscriptions, invoice items, and prorations on the invoice before any discount is applied.
  * tax `integer`: The amount of tax included in the total, calculated from `tax_percent` and the subtotal. If no `tax_percent` is defined, this value will be null.
  * tax_percent `number`: This percentage of the subtotal has been added to the total amount of the invoice, including invoice line items and discounts. This field is inherited from the subscription's `tax_percent` field, but can be changed before the invoice is paid. This field defaults to null.
  * total **required** `integer`: Total after discount.
  * webhooks_delivered_at `integer`: The time at which webhooks for this invoice were successfully delivered (if the invoice had no webhooks to deliver, this will match `date`). Invoice payment is delayed until webhooks are delivered, or until all webhook delivery attempts have been exhausted.

### usage_record
* UsageRecord `object`
  * id **required** `string`: Unique identifier for the object.
  * livemode **required** `boolean`: Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
  * object **required** `string` (values: usage_record): String representing the object's type. Objects of the same type share the same value.
  * quantity **required** `integer`: The usage quantity for the specified date.
  * subscription_item **required** `string`: The ID of the subscription item this usage record contains data for.
  * timestamp **required** `integer`: The timestamp when this usage occurred.


