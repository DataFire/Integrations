# @datafire/gov_bc_ca_gwells

Client library for Registers of Well Drillers and Well Pump Installers

## Installation and Usage
```bash
npm install --save @datafire/gov_bc_ca_gwells
```
```js
let gov_bc_ca_gwells = require('@datafire/gov_bc_ca_gwells').create({
  username: "",
  password: ""
});

gov_bc_ca_gwells.organizations_list({}).then(data => {
  console.log(data);
});
```

## Description

The registers of well drillers and well pump installers are lists of individuals who are authorized under the Water Sustainability Act (WSA) to operate in British Columbia. Registered well drillers and well pump installers are responsible for safe drilling practices and installation of pumps and other works.

## Actions

### cities_drillers_list
returns a list of cities with a qualified, registered operator (driller or installer)


```js
gov_bc_ca_gwells.cities_drillers_list(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [CityList](#citylist)

### cities_installers_list
returns a list of cities with a qualified, registered operator (driller or installer)


```js
gov_bc_ca_gwells.cities_installers_list(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [CityList](#citylist)

### drillers_list
Returns a list of all person records


```js
gov_bc_ca_gwells.drillers_list({}, context)
```

#### Input
* input `object`
  * city `string`
  * prov `string`
  * status `string`
  * activity `string`
  * search `string`: A search term.
  * ordering `string`: Which field to use when ordering the results.
  * limit `integer`: Number of results to return per page.
  * offset `integer`: The initial index from which to return the results.

#### Output
* output `object`
  * count **required** `integer`
  * next `string`
  * previous `string`
  * results **required** `array`
    * items [Person](#person)

### drillers_read
Returns the specified person


```js
gov_bc_ca_gwells.drillers_read({
  "person_guid": null
}, context)
```

#### Input
* input `object`

#### Output
* output [Person](#person)

### organizations_list
Returns a list of all registered drilling organizations


```js
gov_bc_ca_gwells.organizations_list({}, context)
```

#### Input
* input `object`
  * search `string`: A search term.
  * limit `integer`: Number of results to return per page.
  * offset `integer`: The initial index from which to return the results.

#### Output
* output `object`
  * count **required** `integer`
  * next `string`
  * previous `string`
  * results **required** `array`
    * items [Organization](#organization)

### organizations_read
Returns the specified drilling organization


```js
gov_bc_ca_gwells.organizations_read({
  "org_guid": null
}, context)
```

#### Input
* input `object`

#### Output
* output [Organization](#organization)



## Definitions

### ApplicationList
* ApplicationList `object`
  * registrations `array`
    * items [RegistrationsList](#registrationslist)

### CityList
* CityList `object`
  * companies `array`
    * items [ContactAt](#contactat)

### ContactAt
* ContactAt `object`
  * city `string`
  * contact_at_guid `string`
  * contact_email `string`
  * contact_tel `string`
  * org `string`
  * organization_name `string`
  * person `string`
  * person_name `string`
  * postal_code `string`
  * province_state `string`
  * street_address `string`
  * website_url `string`

### Organization
* Organization `object`
  * certificate_authority `boolean` (values: false, true)
  * city `string`
  * contacts `array`
    * items [ContactAt](#contactat)
  * fax_tel `string`
  * main_tel `string`
  * name **required** `string`
  * org_guid `string`
  * postal_code `string`
  * province_state `string`
  * street_address `string`
  * website_url `string`

### Person
* Person `object`
  * applications `array`
    * items [ApplicationList](#applicationlist)
  * companies `array`
    * items [ContactAt](#contactat)
  * first_name **required** `string`
  * person_guid `string`
  * surname **required** `string`

### RegistrationsList
* RegistrationsList `object`
  * activity `string`
  * registration_no `string`
  * status `string`


