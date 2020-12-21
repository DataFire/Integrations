# @datafire/gov_bc_ca_gwells

Client library for Groundwater Wells, Aquifers and Registry API

## Installation and Usage
```bash
npm install --save @datafire/gov_bc_ca_gwells
```
```js
let gov_bc_ca_gwells = require('@datafire/gov_bc_ca_gwells').create({
  Bearer: ""
});

.then(data => {
  console.log(data);
});
```

## Description

The groundwater wells, aquifers and registry API contains information related to groundwater wells and aquifers as well as a register of qualified well drillers and well pump installers registered to operate in B.C.

## Actions

### aquifer_codes.demand.get
return a list of aquifer demand codes


```js
gov_bc_ca_gwells.aquifer_codes.demand.get({}, context)
```

#### Input
* input `object`
  * limit `integer`: Number of results to return per page.
  * offset `integer`: The initial index from which to return the results.

#### Output
* output `object`
  * count **required** `integer`
  * next `string`
  * previous `string`
  * results **required** `array`
    * items [AquiferDemand](#aquiferdemand)

### aquifer_codes.materials.get
return a list of aquifer material codes


```js
gov_bc_ca_gwells.aquifer_codes.materials.get({}, context)
```

#### Input
* input `object`
  * limit `integer`: Number of results to return per page.
  * offset `integer`: The initial index from which to return the results.

#### Output
* output `object`
  * count **required** `integer`
  * next `string`
  * previous `string`
  * results **required** `array`
    * items [AquiferMaterial](#aquifermaterial)

### aquifer_codes.productivity.get
return a list of aquifer productivity codes


```js
gov_bc_ca_gwells.aquifer_codes.productivity.get({}, context)
```

#### Input
* input `object`
  * limit `integer`: Number of results to return per page.
  * offset `integer`: The initial index from which to return the results.

#### Output
* output `object`
  * count **required** `integer`
  * next `string`
  * previous `string`
  * results **required** `array`
    * items [AquiferProductivity](#aquiferproductivity)

### aquifer_codes.quality_concerns.get
return a list of quality concern codes


```js
gov_bc_ca_gwells.aquifer_codes.quality_concerns.get({}, context)
```

#### Input
* input `object`
  * limit `integer`: Number of results to return per page.
  * offset `integer`: The initial index from which to return the results.

#### Output
* output `object`
  * count **required** `integer`
  * next `string`
  * previous `string`
  * results **required** `array`
    * items [QualityConcern](#qualityconcern)

### aquifer_codes.subtypes.get
return a list of aquifer subtype codes


```js
gov_bc_ca_gwells.aquifer_codes.subtypes.get({}, context)
```

#### Input
* input `object`
  * limit `integer`: Number of results to return per page.
  * offset `integer`: The initial index from which to return the results.

#### Output
* output `object`
  * count **required** `integer`
  * next `string`
  * previous `string`
  * results **required** `array`
    * items [AquiferSubtype](#aquifersubtype)

### aquifer_codes.vulnerability.get
return a list of aquifer vulnerability codes


```js
gov_bc_ca_gwells.aquifer_codes.vulnerability.get({}, context)
```

#### Input
* input `object`
  * limit `integer`: Number of results to return per page.
  * offset `integer`: The initial index from which to return the results.

#### Output
* output `object`
  * count **required** `integer`
  * next `string`
  * previous `string`
  * results **required** `array`
    * items [AquiferVulnerability](#aquifervulnerability)

### aquifer_codes.water_use.get
return a list of water use codes


```js
gov_bc_ca_gwells.aquifer_codes.water_use.get({}, context)
```

#### Input
* input `object`
  * limit `integer`: Number of results to return per page.
  * offset `integer`: The initial index from which to return the results.

#### Output
* output `object`
  * count **required** `integer`
  * next `string`
  * previous `string`
  * results **required** `array`
    * items [WaterUse](#wateruse)

### aquifers_list
return a list of aquifers


```js
gov_bc_ca_gwells.aquifers_list({}, context)
```

#### Input
* input `object`
  * aquifer_id `number`
  * ordering `string`: Which field to use when ordering the results.
  * search `string`: A search term.
  * limit `integer`: Number of results to return per page.
  * offset `integer`: The initial index from which to return the results.

#### Output
* output `object`
  * count **required** `integer`
  * next `string`
  * previous `string`
  * results **required** `array`
    * items [Aquifer](#aquifer)

### aquifers_names_list
List all aquifers in a simplified format


```js
gov_bc_ca_gwells.aquifers_names_list({}, context)
```

#### Input
* input `object`
  * search `string`: A search term.

#### Output
* output `array`
  * items [AquiferSerializerBasic](#aquiferserializerbasic)

### aquifers_read
return details of aquifers


```js
gov_bc_ca_gwells.aquifers_read({
  "aquifer_id": 0
}, context)
```

#### Input
* input `object`
  * aquifer_id **required** `integer`: A unique integer value identifying this aquifer.

#### Output
* output [Aquifer](#aquifer)

### aquifers_files_list
list files found for the aquifer identified in the uri


```js
gov_bc_ca_gwells.aquifers_files_list({
  "aquifer_id": ""
}, context)
```

#### Input
* input `object`
  * aquifer_id **required** `string`

#### Output
* output `object`
  * private `array`
    * items `object`
      * name `string`
      * url `string`
  * public `array`
    * items `object`
      * name `string`
      * url `string`

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

### config_list
serves general configuration


```js
gov_bc_ca_gwells.config_list(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### drillers_list
Returns a list of all person records


```js
gov_bc_ca_gwells.drillers_list({}, context)
```

#### Input
* input `object`
  * search `string`: A search term.
  * ordering `string`: Which field to use when ordering the results.
  * limit `integer`: Number of results to return per page.
  * offset `integer`: The initial index from which to return the results.

#### Output
* output `array`
  * items [PersonList](#personlist)

### drillers_names_list
Search for a person in the Register


```js
gov_bc_ca_gwells.drillers_names_list({}, context)
```

#### Input
* input `object`
  * search `string`: A search term.

#### Output
* output `array`
  * items [PersonName](#personname)

### drillers_files_list
list files found for the aquifer identified in the uri


```js
gov_bc_ca_gwells.drillers_files_list({
  "person_guid": ""
}, context)
```

#### Input
* input `object`
  * person_guid **required** `string`

#### Output
* output `object`
  * private `array`
    * items `object`
      * name `string`
      * url `string`
  * public `array`
    * items `object`
      * name `string`
      * url `string`

### keycloak_list
serves keycloak config


```js
gov_bc_ca_gwells.keycloak_list(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### submissions_options_list
Options required for submitting activity report forms


```js
gov_bc_ca_gwells.submissions_options_list(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### surveys_list
returns a list of active surveys


```js
gov_bc_ca_gwells.surveys_list(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [Survey](#survey)

### wells_list
returns a list of wells


```js
gov_bc_ca_gwells.wells_list({}, context)
```

#### Input
* input `object`
  * limit `integer`: Number of results to return per page.
  * offset `integer`: The initial index from which to return the results.

#### Output
* output `object`
  * count **required** `integer`
  * next `string`
  * previous `string`
  * results **required** `array`
    * items [WellList](#welllist)

### wells_tags_list
seach for wells by tag or owner


```js
gov_bc_ca_gwells.wells_tags_list({}, context)
```

#### Input
* input `object`
  * search `string`: A search term.
  * ordering `string`: Which field to use when ordering the results.

#### Output
* output `array`
  * items [WellTagSearch](#welltagsearch)

### wells_files_list
list files found for the well identified in the uri


```js
gov_bc_ca_gwells.wells_files_list({
  "tag": ""
}, context)
```

#### Input
* input `object`
  * tag **required** `string`

#### Output
* output `object`
  * private `array`
    * items `object`
      * name `string`
      * url `string`
  * public `array`
    * items `object`
      * name `string`
      * url `string`

### wells_read
Return well detail.
This view is open to all, and has no permissions.


```js
gov_bc_ca_gwells.wells_read({
  "well_tag_number": 0
}, context)
```

#### Input
* input `object`
  * well_tag_number **required** `integer`: A unique integer value identifying this well.

#### Output
* output [WellDetail](#welldetail)



## Definitions

### ApplicationList
* ApplicationList `object`
  * cert_authority `string`
  * certificate `string`
  * current_status [ApplicationStatusCode](#applicationstatuscode)
  * display_status `string`
  * qualifications `array`
    * items [Qualification](#qualification)
  * removal_date `string`
  * subactivity **required** [Subactivity](#subactivity)

### ApplicationStatusCode
* Current status `object`
  * code `string`
  * description **required** `string`

### Aquifer
* Aquifer `object`
  * aquifer_id `integer`
  * aquifer_name `string`
  * area `string`
  * demand `string`
  * demand_description `string`
  * known_water_use `string`
  * known_water_use_description `string`
  * litho_stratographic_unit `string`
  * location_description `string`
  * mapping_year `integer`: Use the following format: 
  * material `string`
  * material_description `string`
  * notes `string`
  * productivity `string`
  * productivity_description `string`
  * quality_concern `string`
  * quality_concern_description `string`
  * subtype `string`
  * subtype_description `string`
  * vulnerability `string`
  * vulnerability_description `string`

### AquiferDemand
* AquiferDemand `object`
  * code **required** `string`
  * description **required** `string`

### AquiferMaterial
* AquiferMaterial `object`
  * code **required** `string`
  * description **required** `string`

### AquiferProductivity
* AquiferProductivity `object`
  * code **required** `string`
  * description **required** `string`

### AquiferSerializerBasic
* AquiferSerializerBasic `object`
  * aquifer_id `integer`
  * description `string`

### AquiferSubtype
* AquiferSubtype `object`
  * code **required** `string`
  * description **required** `string`

### AquiferVulnerability
* AquiferVulnerability `object`
  * code **required** `string`
  * description **required** `string`

### Casing
* Casing `object`
  * casing_code `string`
  * casing_material `string`
  * diameter **required** `string`
  * drive_shoe `boolean` (values: false, true)
  * end **required** `string`
  * start **required** `string`
  * wall_thickness `string`

### CityList
* CityList `object`
  * organization **required** [Organization](#organization)

### DecommissionDescription
* DecommissionDescription `object`
  * end **required** `string`
  * material **required** `string`
  * observations `string`
  * start **required** `string`

### LinerPerforation
* LinerPerforation `object`
  * end **required** `string`
  * start **required** `string`

### LithologyDescription
* LithologyDescription `object`
  * lithology_colour `string`
  * lithology_from `string`
  * lithology_hardness `string`
  * lithology_moisture `string`
  * lithology_raw_data `string`
  * lithology_to `string`
  * water_bearing_estimated_flow `string`

### Organization
* Organization `object`
  * city `string`
  * email `string`
  * fax_tel `string`
  * main_tel `string`
  * name **required** `string`
  * org_guid `string`
  * org_verbose_name `string`
  * postal_code `string`
  * province_state **required** `string`
  * street_address `string`
  * website_url `string`

### OrganizationList
* Organization `object`
  * city `string`
  * email `string`
  * fax_tel `string`
  * main_tel `string`
  * name **required** `string`
  * org_guid `string`
  * org_verbose_name `string`
  * postal_code `string`
  * province_state **required** `string`
  * street_address `string`
  * website_url `string`

### OrganizationNameList
* Company of person responsible `object`
  * name **required** `string`
  * org_guid `string`
  * org_verbose_name `string`

### PersonBasic
* Person responsible `object`
  * name `string`
  * person_guid `string`

### PersonList
* PersonList `object`
  * contact_cell `string`
  * contact_email `string`
  * contact_tel `string`
  * first_name **required** `string`
  * person_guid `string`
  * registrations `array`
    * items [RegistrationsList](#registrationslist)
  * surname **required** `string`

### PersonName
* PersonName `object`
  * name `string`
  * person_guid `string`
  * registrations `array`
    * items [RegistrationsNumber](#registrationsnumber)

### Qualification
* Qualification `object`
  * description `string`
  * well_class **required** `string`

### QualityConcern
* QualityConcern `object`
  * code **required** `string`
  * description **required** `string`

### RegistrationsList
* RegistrationsList `object`
  * activity `string`
  * activity_description `string`
  * applications `array`
    * items [ApplicationList](#applicationlist)
  * organization **required** [OrganizationList](#organizationlist)
  * registration_no `string`

### RegistrationsNumber
* RegistrationsNumber `object`
  * registration_no `string`
  * registries_activity **required** `string`

### Screen
* Screen `object`
  * assembly_type **required** `string`
  * end **required** `string`
  * internal_diameter `string`
  * slot_size `string`
  * start **required** `string`

### Subactivity
* Subactivity `object`
  * description **required** `string`
  * qualification_set `array`
    * items [Qualification](#qualification)
  * registries_subactivity_code `string`

### Survey
* Survey `object`
  * survey_guid `string`
  * survey_introduction_text `string`
  * survey_link `string`
  * survey_page `string` (values: w, r, s, a)

### WaterUse
* WaterUse `object`
  * code **required** `string`
  * description **required** `string`

### WellDetail
* WellDetail `object`
  * alteration_end_date `string`
  * alternative_specs_submitted `boolean` (values: false, true)
  * analytic_solution_type `string`
  * aquifer `integer`
  * aquifer_vulnerability_index `string`
  * artesian_flow `string`
  * artesian_pressure `string`
  * backfill_depth `string`
  * backfill_material `string`
  * backfill_type `string`
  * bcgs_id `integer`
  * bedrock_depth `string`
  * boundary_effect `string`
  * casing_set **required** `array`
    * items [Casing](#casing)
  * city `string`
  * comments `string`
  * company_of_person_responsible **required** [OrganizationNameList](#organizationnamelist)
  * construction_end_date `string`
  * construction_start_date `string`
  * coordinate_acquisition_code `string`
  * decommission_description_set **required** `array`
    * items [DecommissionDescription](#decommissiondescription)
  * decommission_details `string`
  * decommission_end_date `string`
  * decommission_method `string`
  * decommission_reason `string`
  * decommission_start_date `string`
  * development_hours `string`
  * development_method `string`
  * development_notes `string`
  * diameter `string`
  * drawdown `string`
  * drilling_company `string`
  * drilling_method `string`
  * ems `string`
  * filter_pack_from `string`
  * filter_pack_material `string`
  * filter_pack_material_size `string`
  * filter_pack_thickness `string`
  * filter_pack_to `string`
  * final_casing_stick_up `string`
  * finished_well_depth `string`
  * ground_elevation `string`
  * ground_elevation_method `string`
  * hydraulic_conductivity `string`
  * hydro_fracturing_performed `boolean` (values: false, true)
  * hydro_fracturing_yield_increase `string`
  * id_plate_attached_by `string`
  * identification_plate_number `integer`
  * intended_water_use `string`
  * land_district `string`
  * latitude `string`
  * legal_block `string`
  * legal_district_lot `string`
  * legal_lot `string`
  * legal_pid `integer`
  * legal_plan `string`
  * legal_range `string`
  * legal_section `string`
  * legal_township `string`
  * licenced_status `string`
  * liner_diameter `string`
  * liner_from `string`
  * liner_material `string`
  * liner_thickness `string`
  * liner_to `string`
  * linerperforation_set **required** `array`
    * items [LinerPerforation](#linerperforation)
  * lithologydescription_set **required** `array`
    * items [LithologyDescription](#lithologydescription)
  * longitude `string`
  * observation_well_number `string`
  * observation_well_status `string`
  * other_drilling_method `string`
  * other_screen_bottom `string`
  * other_screen_material `string`
  * owner_full_name **required** `string`
  * person_responsible **required** [PersonBasic](#personbasic)
  * recommended_pump_depth `string`
  * recommended_pump_rate `string`
  * screen_bottom `string`
  * screen_information `string`
  * screen_intake_method `string`
  * screen_material `string`
  * screen_opening `string`
  * screen_set **required** `array`
    * items [Screen](#screen)
  * screen_type `string`
  * sealant_material `string`
  * specific_storage `string`
  * specific_yield `string`
  * static_level_before_test `string`
  * static_water_level `string`
  * storativity `string`
  * street_address `string`
  * surface_seal_depth `string`
  * surface_seal_length `string`
  * surface_seal_material `string`
  * surface_seal_method `string`
  * surface_seal_thickness `string`
  * testing_duration `integer`
  * testing_method `string`
  * total_depth_drilled `string`
  * transmissivity `string`
  * utm_easting `integer`
  * utm_northing `integer`
  * utm_zone_code `string`
  * water_quality_characteristics `array`
    * items `string`
  * water_quality_colour `string`
  * water_quality_odour `string`
  * water_supply_system_name `string`
  * water_supply_system_well_name `string`
  * well **required** `integer`
  * well_cap_type `string`
  * well_class `string`
  * well_disinfected `boolean` (values: false, true)
  * well_guid `string`
  * well_identification_plate_attached `string`
  * well_location_description `string`
  * well_orientation `boolean` (values: true, false)
  * well_status `string`
  * well_subclass `string`
  * well_tag_number `integer`
  * well_yield `string`
  * well_yield_unit `string`
  * yield_estimation_duration `string`
  * yield_estimation_method `string`
  * yield_estimation_rate `string`

### WellList
* WellList `object`
  * alteration_end_date `string`
  * alternative_specs_submitted `boolean` (values: false, true)
  * analytic_solution_type `string`
  * aquifer `integer`
  * aquifer_vulnerability_index `string`
  * artesian_flow `string`
  * artesian_pressure `string`
  * backfill_depth `string`
  * backfill_material `string`
  * backfill_type `string`
  * bcgs_id `integer`
  * bedrock_depth `string`
  * boundary_effect `string`
  * city `string`
  * comments `string`
  * construction_end_date `string`
  * construction_start_date `string`
  * coordinate_acquisition_code `string`
  * decommission_details `string`
  * decommission_end_date `string`
  * decommission_method `string`
  * decommission_reason `string`
  * decommission_start_date `string`
  * development_hours `string`
  * development_method `string`
  * development_notes `string`
  * diameter `string`
  * drawdown `string`
  * drilling_company `string`
  * drilling_method `string`
  * ems `string`
  * filter_pack_from `string`
  * filter_pack_material `string`
  * filter_pack_material_size `string`
  * filter_pack_thickness `string`
  * filter_pack_to `string`
  * final_casing_stick_up `string`
  * finished_well_depth `string`
  * ground_elevation `string`
  * ground_elevation_method `string`
  * hydraulic_conductivity `string`
  * hydro_fracturing_performed `boolean` (values: false, true)
  * hydro_fracturing_yield_increase `string`
  * id_plate_attached_by `string`
  * identification_plate_number `integer`
  * intended_water_use `string`
  * land_district `string`
  * latitude `string`
  * legal_block `string`
  * legal_district_lot `string`
  * legal_lot `string`
  * legal_pid `integer`
  * legal_plan `string`
  * legal_range `string`
  * legal_section `string`
  * legal_township `string`
  * licenced_status `string`
  * liner_diameter `string`
  * liner_from `string`
  * liner_material `string`
  * liner_thickness `string`
  * liner_to `string`
  * longitude `string`
  * observation_well_number `string`
  * observation_well_status `string`
  * other_drilling_method `string`
  * other_screen_bottom `string`
  * other_screen_material `string`
  * owner_full_name **required** `string`
  * recommended_pump_depth `string`
  * recommended_pump_rate `string`
  * screen_bottom `string`
  * screen_information `string`
  * screen_intake_method `string`
  * screen_material `string`
  * screen_opening `string`
  * screen_type `string`
  * sealant_material `string`
  * specific_storage `string`
  * specific_yield `string`
  * static_level_before_test `string`
  * static_water_level `string`
  * storativity `string`
  * street_address `string`
  * surface_seal_depth `string`
  * surface_seal_length `string`
  * surface_seal_material `string`
  * surface_seal_method `string`
  * surface_seal_thickness `string`
  * testing_duration `integer`
  * testing_method `string`
  * total_depth_drilled `string`
  * transmissivity `string`
  * utm_easting `integer`
  * utm_northing `integer`
  * utm_zone_code `string`
  * water_quality_characteristics `array`
    * items `string`
  * water_quality_colour `string`
  * water_quality_odour `string`
  * water_supply_system_name `string`
  * water_supply_system_well_name `string`
  * well_cap_type `string`
  * well_class `string`
  * well_disinfected `boolean` (values: false, true)
  * well_guid `string`
  * well_identification_plate_attached `string`
  * well_location_description `string`
  * well_orientation `boolean` (values: true, false)
  * well_status `string`
  * well_subclass `string`
  * well_tag_number `integer`
  * well_yield `string`
  * well_yield_unit `string`
  * yield_estimation_duration `string`
  * yield_estimation_method `string`
  * yield_estimation_rate `string`

### WellTagSearch
* WellTagSearch `object`
  * owner_full_name **required** `string`
  * well_tag_number `integer`


