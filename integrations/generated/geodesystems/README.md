# @datafire/geodesystems

Client library for RAMADDA

## Installation and Usage
```bash
npm install --save datafire @datafire/geodesystems
```

```js
let datafire = require('datafire');
let geodesystems = require('@datafire/geodesystems').actions;

let account = {
  username: "",
  password: "",
}
let context = new datafire.Context({
  accounts: {
    geodesystems: account,
  }
})

geodesystems.search_wikipage({}, context).then(data => {
  console.log(data);
})
```

## Description
Search for data in lots of places - manage your documents, photos and critical business knowledge - communicate and coordinate with blogs, interactive wikis, and data integration dashboards.

## Actions
### gps.teqc.qc
API to call: View GPS QC


```js
geodesystems.gps.teqc.qc({
  "output": "",
  "entryid": ""
}, context)
```

#### Parameters
* output (string) **required** - Output type  -don't change
* entryid (string) **required** - Entry ID

### search_beforeafter
API to search for entries of type Before and After Images


```js
geodesystems.search_beforeafter({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip

### search_biblio
API to search for entries of type Bibliographic Entry


```js
geodesystems.search_biblio({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip
* search.biblio.primary_author (string) - Primary Author
* search.biblio.type (string) - Publication Type
* search.biblio.institution (string) - Institution
* search.biblio.other_authors (string) - Other Authors
* search.biblio.publication (string) - Publication

### search_bio_dicom
API to search for entries of type DICOM File


```js
geodesystems.search_bio_dicom({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip

### search_bio_dicom_test
API to search for entries of type DICOM Test File


```js
geodesystems.search_bio_dicom_test({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip
* search.bio_dicom_test.PatientName (string) - Patient Name
* search.bio_dicom_test.PatientID (string) - Patient ID

### search_bio_fasta
API to search for entries of type FASTA File


```js
geodesystems.search_bio_fasta({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip

### search_bio_fastq
API to search for entries of type FASTQ File


```js
geodesystems.search_bio_fastq({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip

### search_bio_hmmer_index
API to search for entries of type HMMER Index File


```js
geodesystems.search_bio_hmmer_index({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip

### search_bio_ome_tiff
API to search for entries of type OME TIFF File


```js
geodesystems.search_bio_ome_tiff({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip

### search_bio_ontology_assay
API to search for entries of type Assay


```js
geodesystems.search_bio_ontology_assay({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip

### search_bio_ontology_cohort
API to search for entries of type Cohort


```js
geodesystems.search_bio_ontology_cohort({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip

### search_bio_ontology_person
API to search for entries of type Person


```js
geodesystems.search_bio_ontology_person({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip
* search.bio_ontology_person.gender (string) - Gender

### search_bio_ontology_sample
API to search for entries of type Sample


```js
geodesystems.search_bio_ontology_sample({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip

### search_bio_ontology_series
API to search for entries of type Series


```js
geodesystems.search_bio_ontology_series({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip

### search_bio_ontology_study
API to search for entries of type Study


```js
geodesystems.search_bio_ontology_study({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip

### search_bio_sam
API to search for entries of type SAM Data


```js
geodesystems.search_bio_sam({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip

### search_bio_sf_pdb
API to search for entries of type PDB Protein File


```js
geodesystems.search_bio_sf_pdb({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip

### search_bio_sra
API to search for entries of type Sequence Read Archive


```js
geodesystems.search_bio_sra({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip

### search_bio_stockholm
API to search for entries of type Stockholm File


```js
geodesystems.search_bio_stockholm({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip

### search_bio_taxonomy
API to search for entries of type Taxonomic Entry


```js
geodesystems.search_bio_taxonomy({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip
* search.bio_taxonomy.rank (string) - Rank
* search.bio_taxonomy.embl_code (string) - EMBL Code
* search.bio_taxonomy.division (string) - Divison
* search.bio_taxonomy.inherited_div (boolean) - Inheritied division
* search.bio_taxonomy.aliases (string) - Also known

### search_blogentry
API to search for entries of type Weblog Entry


```js
geodesystems.search_blogentry({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip
* search.blogentry.blogtext (string) - Extra Text

### search_bookmarks
API to search for entries of type Bookmarks


```js
geodesystems.search_bookmarks({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip
* search.db_bookmarks.title (string) - Title
* search.db_bookmarks.url (string) - URL
* search.db_bookmarks.category (string) - Category
* search.db_bookmarks.date (string) - Date

### search_boulder_county_voter_details
API to search for entries of type Boulder County Voter Details


```js
geodesystems.search_boulder_county_voter_details({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip
* search.db_boulder_county_voter_details.first_name (string) - First Name
* search.db_boulder_county_voter_details.last_name (string) - Last Name
* search.db_boulder_county_voter_details.registration_date (string) - Registration Date
* search.db_boulder_county_voter_details.last_updated_date (string) - Last Updated Date
* search.db_boulder_county_voter_details.residential_address (string) - Residential Address
* search.db_boulder_county_voter_details.residential_city (string) - Residential City
* search.db_boulder_county_voter_details.mailing_zip_code (string) - Mailing Zip Code
* search.db_boulder_county_voter_details.voter_status (string) - Voter Status
* search.db_boulder_county_voter_details.party (string) - Party
* search.db_boulder_county_voter_details.gender (string) - Gender
* search.db_boulder_county_voter_details.birth_year (integer) - Birth Year
* search.db_boulder_county_voter_details.precinct_code (string) - Precinct Code
* search.db_boulder_county_voter_details.congressional (string) - Congressional
* search.db_boulder_county_voter_details.state_senate (string) - State Senate
* search.db_boulder_county_voter_details.state_house (string) - State House
* search.db_boulder_county_voter_details.municipality (string) - Municipality
* search.db_boulder_county_voter_details.city_ward_district (string) - City Ward/district
* search.db_boulder_county_voter_details.school_district (string) - School District

### search_calendar
API to search for entries of type Calendar


```js
geodesystems.search_calendar({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip

### search_cdm_grid
API to search for entries of type Gridded Data File


```js
geodesystems.search_cdm_grid({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip

### search_community_case
API to search for entries of type Development Review Case


```js
geodesystems.search_community_case({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip
* search.community_case.applicant (string) - Applicant
* search.community_case.address (string) - Address
* search.community_case.case_type (string) - Case Type
* search.community_case.contact (string) - Staff Contact

### search_community_datahub
API to search for entries of type Data Hub


```js
geodesystems.search_community_datahub({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip

### search_community_resource
API to search for entries of type Facility


```js
geodesystems.search_community_resource({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip
* search.community_resource.resource_type (string) - Type
* search.community_resource.address (string) - Address
* search.community_resource.city (string) - City
* search.community_resource.state (string) - State or Province
* search.community_resource.zipcode (string) - Zip Code

### search_contact
API to search for entries of type Contact List


```js
geodesystems.search_contact({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip
* search.db_contact.name (string) - Name
* search.db_contact.institution (string) - Institution
* search.db_contact.email (string) - Email

### search_db_co_indicators
API to search for entries of type Colorado Health Indicators


```js
geodesystems.search_db_co_indicators({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip
* search.db_db_co_indicators.geo_name (string) - County
* search.db_db_co_indicators.domain (string) - Domain
* search.db_db_co_indicators.subdomain (string) - Subdomain
* search.db_db_co_indicators.indicatorName (string) - Indicator
* search.db_db_co_indicators.description (string) - Description
* search.db_db_co_indicators.measure (number) - Measure
* search.db_db_co_indicators.location (string) - Location

### search_earth_merra
API to search for entries of type MERRA Data


```js
geodesystems.search_earth_merra({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip
* search.earth_merra.frequency_type (string) - Frequency Type
* search.earth_merra.frequency (string) - Frequency
* search.earth_merra.dimensions (string) - Dimensions
* search.earth_merra.data_group (string) - Group
* search.earth_merra.horizontal_resolution (string) - Horizontal Resolution
* search.earth_merra.vertical_location (string) - Vertical Location

### search_earth_satellite_landsat
API to search for entries of type Landsat Satellite Data


```js
geodesystems.search_earth_satellite_landsat({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip
* search.earth_satellite_landsat.sensor (string) - Sensor
* search.earth_satellite_landsat.satellite (string) - Satellite
* search.earth_satellite_landsat.wrs_path_number (integer) - WRS Path
* search.earth_satellite_landsat.wrs_row_number (integer) - WRS Row
* search.earth_satellite_landsat.ground_station (string) - Ground Station
* search.earth_satellite_landsat.archive_version_number (integer) - Archive Version Number

### search_earth_satellite_modis_aqua
API to search for entries of type Aqua Modis Satellite Data


```js
geodesystems.search_earth_satellite_modis_aqua({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip
* search.earth_satellite_modis.data_type (string) - Earth Science Data Type

### search_earth_wrf_namelist
API to search for entries of type WRF Namelist File


```js
geodesystems.search_earth_wrf_namelist({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip

### search_exercise
API to search for entries of type Exercise


```js
geodesystems.search_exercise({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip
* search.db_exercise.type (string) - Type
* search.db_exercise.date (string) - Date

### search_faq
API to search for entries of type FAQ


```js
geodesystems.search_faq({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip

### search_feed
API to search for entries of type RSS/ATOM Feed


```js
geodesystems.search_feed({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip

### search_file
API to search for entries of type File


```js
geodesystems.search_file({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip

### search_fits_data
API to search for entries of type FITS Data File


```js
geodesystems.search_fits_data({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip
* search.fits_data.origin (string) - Origin
* search.fits_data.telescope (string) - Telescope
* search.fits_data.instrument (string) - Instrument

### search_frames
API to search for entries of type IFrames


```js
geodesystems.search_frames({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip

### search_ftp
API to search for entries of type Remote FTP File View


```js
geodesystems.search_ftp({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip

### search_gadgets_clock
API to search for entries of type Clock


```js
geodesystems.search_gadgets_clock({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip

### search_gadgets_countdown
API to search for entries of type Countdown


```js
geodesystems.search_gadgets_countdown({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip

### search_gadgets_stock
API to search for entries of type Stock Ticker


```js
geodesystems.search_gadgets_stock({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip

### search_gadgets_weather
API to search for entries of type Weather


```js
geodesystems.search_gadgets_weather({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip

### search_gdata_docs
API to search for entries of type Google Docs View


```js
geodesystems.search_gdata_docs({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip

### search_gdata_photos
API to search for entries of type Google Web Albums View


```js
geodesystems.search_gdata_photos({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip

### search_geo_geotiff
API to search for entries of type GeoTIFF


```js
geodesystems.search_geo_geotiff({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip

### search_geo_gpx
API to search for entries of type GPX GPS File


```js
geodesystems.search_geo_gpx({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip

### search_geo_hdf5
API to search for entries of type HDF5 File


```js
geodesystems.search_geo_hdf5({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip

### search_geo_kml
API to search for entries of type KML/KMZ File


```js
geodesystems.search_geo_kml({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip

### search_geo_shapefile
API to search for entries of type Shapefile


```js
geodesystems.search_geo_shapefile({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip

### search_glossary
API to search for entries of type Glossary


```js
geodesystems.search_glossary({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip

### search_gridaggregation
API to search for entries of type Grid Aggregation


```js
geodesystems.search_gridaggregation({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip

### search_group
API to search for entries of type Folder


```js
geodesystems.search_group({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip

### search_hipchat_group
API to search for entries of type HipChat Group


```js
geodesystems.search_hipchat_group({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip

### search_homepage
API to search for entries of type Home Page


```js
geodesystems.search_homepage({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip

### search_incident
API to search for entries of type Incident


```js
geodesystems.search_incident({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip
* search.incident.incidenttype (string) - Incident Type
* search.incident.cause (string) - Cause
* search.incident.state (string) - State

### search_incident_basement
API to search for entries of type Basement Flooding


```js
geodesystems.search_incident_basement({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip
* search.incident_location.state (string) - State
* search.incident_basement.type (string) - Type of flooding
* search.incident_basement.depth (integer) - Water Depth
* search.incident_basement.duration (integer) - Duration
* search.incident_basement.cost (integer) - Estimated Cost

### search_investigation_case
API to search for entries of type Investigation


```js
geodesystems.search_investigation_case({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip

### search_investigation_cellphonelog
API to search for entries of type Cell Phone Log


```js
geodesystems.search_investigation_cellphonelog({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip
* search.db_investigation_cellphonelog.from_name (string) - From Name
* search.db_investigation_cellphonelog.from_number (string) - From Number
* search.db_investigation_cellphonelog.to_name (string) - To Name
* search.db_investigation_cellphonelog.to_number (string) - To Number
* search.db_investigation_cellphonelog.time (string) - Date
* search.db_investigation_cellphonelog.duration (number) - Duration
* search.db_investigation_cellphonelog.type (string) - Direction
* search.db_investigation_cellphonelog.location (string) - Location
* search.db_investigation_cellphonelog.tower_city (string) - City
* search.db_investigation_cellphonelog.tower_state (string) - State
* search.db_investigation_cellphonelog.tower_zipcode (string) - Zip Code
* search.db_investigation_cellphonelog.tag (string) - Tag
* search.db_investigation_cellphonelog.notes (string) - Notes

### search_investigation_event
API to search for entries of type Event


```js
geodesystems.search_investigation_event({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip

### search_investigation_oldphonelog
API to search for entries of type Old Phone Log


```js
geodesystems.search_investigation_oldphonelog({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip
* search.db_investigation_oldphonelog.time (string) - Date
* search.db_investigation_oldphonelog.from_name (string) - From Name
* search.db_investigation_oldphonelog.from_number (string) - From Number
* search.db_investigation_oldphonelog.from_city (string) - From City
* search.db_investigation_oldphonelog.from_state (string) - From State
* search.db_investigation_oldphonelog.to_name (string) - To Name
* search.db_investigation_oldphonelog.to_number (string) - To Number
* search.db_investigation_oldphonelog.to_city (string) - To City
* search.db_investigation_oldphonelog.to_state (string) - To State
* search.db_investigation_oldphonelog.tag (string) - Tag
* search.db_investigation_oldphonelog.notes (string) - Notes

### search_investigation_person
API to search for entries of type Person


```js
geodesystems.search_investigation_person({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip

### search_investigation_thing
API to search for entries of type Thing


```js
geodesystems.search_investigation_thing({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip

### search_latlonimage
API to search for entries of type WMS Image


```js
geodesystems.search_latlonimage({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip

### search_lidar_collection
API to search for entries of type LiDAR Collection


```js
geodesystems.search_lidar_collection({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip

### search_lidar_glas
API to search for entries of type GLAS Lidar Data


```js
geodesystems.search_lidar_glas({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip

### search_lidar_las
API to search for entries of type LAS Lidar Data


```js
geodesystems.search_lidar_las({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip

### search_lidar_lvis
API to search for entries of type LVIS Lidar Data


```js
geodesystems.search_lidar_lvis({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip

### search_link
API to search for entries of type Link


```js
geodesystems.search_link({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip

### search_localfiles
API to search for entries of type Server Side Files


```js
geodesystems.search_localfiles({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip

### search_locations
API to search for entries of type Locations


```js
geodesystems.search_locations({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip
* search.db_locations.name (string) - Name
* search.db_locations.type (string) - Type
* search.db_locations.location (string) - Location

### search_map_googlemap
API to search for entries of type Google Map URL


```js
geodesystems.search_map_googlemap({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip

### search_media_audiofile
API to search for entries of type Audio File


```js
geodesystems.search_media_audiofile({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip

### search_media_imageloop
API to search for entries of type Image Loop


```js
geodesystems.search_media_imageloop({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip

### search_media_photoalbum
API to search for entries of type Photo Album


```js
geodesystems.search_media_photoalbum({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip

### search_media_video_channel
API to search for entries of type Video Channel


```js
geodesystems.search_media_video_channel({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip

### search_media_video_quicktime
API to search for entries of type Quicktime Video


```js
geodesystems.search_media_video_quicktime({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip

### search_media_youtubevideo
API to search for entries of type YouTube Video


```js
geodesystems.search_media_youtubevideo({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip

### search_multisearch
API to search for entries of type Multiple Search


```js
geodesystems.search_multisearch({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip

### search_nga_tracks
API to search for entries of type NGA Tracks


```js
geodesystems.search_nga_tracks({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip
* search.db_nga_tracks.track_id (string) - Track ID
* search.db_nga_tracks.timestamp (string) - Timestamp
* search.db_nga_tracks.location (string) - Location

### search_notes
API to search for entries of type Notes


```js
geodesystems.search_notes({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip

### search_notes_note
API to search for entries of type Note


```js
geodesystems.search_notes_note({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip

### search_opendaplink
API to search for entries of type OPeNDAP Link


```js
geodesystems.search_opendaplink({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip

### search_owl.class
API to search for entries of type OWL Class


```js
geodesystems.search_owl.class({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip

### search_owl.ontology
API to search for entries of type OWL Ontology


```js
geodesystems.search_owl.ontology({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip

### search_pasteitentry
API to search for entries of type Paste Text Entry


```js
geodesystems.search_pasteitentry({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip

### search_point_text
API to search for entries of type Text Point Data


```js
geodesystems.search_point_text({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip

### search_poll
API to search for entries of type Poll


```js
geodesystems.search_poll({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip

### search_project_campaign
API to search for entries of type Campaign


```js
geodesystems.search_project_campaign({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip

### search_project_casestudy
API to search for entries of type Case Study


```js
geodesystems.search_project_casestudy({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip
* search.project_casestudy.intended_use (string) - Intended Use
* search.project_casestudy.location (string) - Where

### search_project_contribution
API to search for entries of type Research Contribution


```js
geodesystems.search_project_contribution({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip

### search_project_dataformat
API to search for entries of type Data Format


```js
geodesystems.search_project_dataformat({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip
* search.project_dataformat.data_type (string) - Data Type
* search.project_dataformat.field (string) - Field

### search_project_dataset
API to search for entries of type Dataset


```js
geodesystems.search_project_dataset({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip
* search.project_dataset.dataset_id (string) - Dataset ID
* search.project_dataset.data_type (string) - Data Type
* search.project_dataset.data_level (string) - Data Level

### search_project_deployment
API to search for entries of type Deployment


```js
geodesystems.search_project_deployment({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip

### search_project_experiment
API to search for entries of type Experiment


```js
geodesystems.search_project_experiment({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip

### search_project_fieldnote
API to search for entries of type Field Note


```js
geodesystems.search_project_fieldnote({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip

### search_project_gps_controlpoints
API to search for entries of type Control Points File


```js
geodesystems.search_project_gps_controlpoints({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip

### search_project_gps_raw
API to search for entries of type Raw GPS File


```js
geodesystems.search_project_gps_raw({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip

### search_project_gps_rinex
API to search for entries of type RINEX File


```js
geodesystems.search_project_gps_rinex({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip

### search_project_instrument
API to search for entries of type Instrument Data Collection


```js
geodesystems.search_project_instrument({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip

### search_project_learning_resource
API to search for entries of type Teaching Resource


```js
geodesystems.search_project_learning_resource({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip
* search.project_learning_resource.topic (string) - Topic
* search.project_learning_resource.grade_level (string) - Grade Level

### search_project_meeting
API to search for entries of type Meeting


```js
geodesystems.search_project_meeting({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip
* search.project_meeting.topic (string) - Topic
* search.project_meeting.location (string) - Location
* search.project_meeting.participants (string) - Participants

### search_project_organization
API to search for entries of type Organization


```js
geodesystems.search_project_organization({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip
* search.project_organization.organization_type (string) - Organization Type
* search.project_organization.status (string) - Status

### search_project_program
API to search for entries of type Program


```js
geodesystems.search_project_program({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip

### search_project_project
API to search for entries of type Project


```js
geodesystems.search_project_project({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip

### search_project_service
API to search for entries of type Data Access Service


```js
geodesystems.search_project_service({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip
* search.project_service.service_type (string) - Service Type
* search.project_service.provider (string) - Provider

### search_project_site
API to search for entries of type Site


```js
geodesystems.search_project_site({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip
* search.project_site.short_name (string) - Short Name
* search.project_site.site_type (string) - Site Type
* search.project_site.status (string) - Status
* search.project_site.network (string) - Network
* search.project_site.country (string) - Country
* search.project_site.state (string) - State/Province
* search.project_site.county (string) - County

### search_project_softwarepackage
API to search for entries of type Software Tool


```js
geodesystems.search_project_softwarepackage({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip
* search.project_softwarepackage.software_use (string) - Software Use
* search.project_softwarepackage.software_type (string) - Software Type
* search.project_softwarepackage.domain (string) - Science Domain
* search.project_softwarepackage.platform (string) - Platform
* search.project_softwarepackage.license (string) - License
* search.project_softwarepackage.status (string) - Development Status
* search.project_softwarepackage.capabilities (string) - Capabilities

### search_project_standard_name
API to search for entries of type Standard Parameter Name


```js
geodesystems.search_project_standard_name({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip
* search.project_standard_name.unit (string) - Canonical Unit
* search.project_standard_name.aliases (string) - Aliases

### search_project_surveylocation
API to search for entries of type Survey Location


```js
geodesystems.search_project_surveylocation({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip

### search_project_term
API to search for entries of type Vocabulary Term


```js
geodesystems.search_project_term({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip
* search.project_term.value (string) - Term Value

### search_project_visit
API to search for entries of type Site Visit


```js
geodesystems.search_project_visit({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip

### search_project_vocabulary
API to search for entries of type Vocabulary


```js
geodesystems.search_project_vocabulary({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip

### search_property_sales
API to search for entries of type Property Sales


```js
geodesystems.search_property_sales({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip
* search.db_property_sales.property_address (string) - Property Address
* search.db_property_sales.city (string) - City
* search.db_property_sales.zipcode (string) - Zip Code
* search.db_property_sales.sale_price (number) - Sale Price
* search.db_property_sales.sale_date (string) - Sale Date
* search.db_property_sales.seller (string) - Seller
* search.db_property_sales.buyer (string) - Buyer
* search.db_property_sales.type (string) - Property Type
* search.db_property_sales.building_description (string) - Building Description
* search.db_property_sales.building_design (string) - Building Design
* search.db_property_sales.subdivision (string) - Subdivision
* search.db_property_sales.location (string) - Location

### search_propertydb
API to search for entries of type Property Database


```js
geodesystems.search_propertydb({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip
* search.db_propertydb.property_id (string) - Property ID
* search.db_propertydb.owner (string) - Owner
* search.db_propertydb.address (string) - Address
* search.db_propertydb.city (string) - City
* search.db_propertydb.state (string) - State
* search.db_propertydb.value (integer) - Property Value
* search.db_propertydb.building_type (string) - Building Type
* search.db_propertydb.house_size (integer) - Building Sq Ft
* search.db_propertydb.lot_sqft (integer) - Lot Size Sq Ft
* search.db_propertydb.lot_acres (number) - Lot Size Acres
* search.db_propertydb.price_sqft (number) - $-sqft
* search.db_propertydb.location (string) - Location

### search_python_notebook
API to search for entries of type IPython Notebook file


```js
geodesystems.search_python_notebook({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip

### search_registrations
API to search for entries of type Registrations


```js
geodesystems.search_registrations({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip
* search.db_registrations.date (string) - Date
* search.db_registrations.type (string) - Type
* search.db_registrations.name (string) - Name
* search.db_registrations.email (string) - Email
* search.db_registrations.organization (string) - Organization
* search.db_registrations.country (string) - Country
* search.db_registrations.state_province (string) - State or Province
* search.db_registrations.postal_code (string) - Postal Code
* search.db_registrations.url (string) - RAMADDA Site URL
* search.db_registrations.users (integer) - # users
* search.db_registrations.organization_type (string) - Organization type
* search.db_registrations.support_tier (string) - Support tier

### search_slack_team
API to search for entries of type Slack Team


```js
geodesystems.search_slack_team({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip

### search_statusboard
API to search for entries of type Status Board


```js
geodesystems.search_statusboard({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip
* search.db_statusboard.what (string) - What
* search.db_statusboard.status (string) - Status

### search_tasks
API to search for entries of type Tasks


```js
geodesystems.search_tasks({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip
* search.db_tasks.title (string) - Title
* search.db_tasks.priority (string) - Priority
* search.db_tasks.status (string) - Status
* search.db_tasks.complete (number) - % Complete
* search.db_tasks.assignedto (string) - Assigned To
* search.db_tasks.startdate (string) - Start Date
* search.db_tasks.enddate (string) - End Date

### search_todo
API to search for entries of type Todo


```js
geodesystems.search_todo({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip
* search.db_todo.checked (boolean) - Done
* search.db_todo.title (string) - What
* search.db_todo.category (string) - Category

### search_trip_event
API to search for entries of type Event


```js
geodesystems.search_trip_event({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip

### search_trip_flight
API to search for entries of type Flight Leg


```js
geodesystems.search_trip_flight({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip

### search_trip_hotel
API to search for entries of type Lodging


```js
geodesystems.search_trip_hotel({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip

### search_trip_report
API to search for entries of type Trip Report


```js
geodesystems.search_trip_report({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip

### search_trip_trip
API to search for entries of type Trip


```js
geodesystems.search_trip_trip({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip

### search_type_artists_space
API to search for entries of type Artists Space


```js
geodesystems.search_type_artists_space({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip
* search.type_artists_space.address (string) - Address
* search.type_artists_space.sqft (integer) - Area
* search.type_artists_space.occupancy (integer) - Occupancy
* search.type_artists_space.use (string) - Use

### search_type_awc_metar
API to search for entries of type AWC Weather Observations


```js
geodesystems.search_type_awc_metar({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip
* search.type_awc_metar.site_id (string) - Site ID

### search_type_awhere_farm
API to search for entries of type aWhere Farm


```js
geodesystems.search_type_awhere_farm({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip

### search_type_awhere_field
API to search for entries of type aWhere Field


```js
geodesystems.search_type_awhere_field({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip

### search_type_biz_stockseries
API to search for entries of type Stock Ticker Data


```js
geodesystems.search_type_biz_stockseries({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip

### search_type_census_acs
API to search for entries of type US Census ACS Data


```js
geodesystems.search_type_census_acs({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip
* search.type_census_acs.fields (string) - Indicators
* search.type_census_acs.for_type (string) - For
* search.type_census_acs.in_type1 (string) - In
* search.type_census_acs.in_type2 (string) - In #2

### search_type_db_table
API to search for entries of type Database Table


```js
geodesystems.search_type_db_table({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip

### search_type_document_csv
API to search for entries of type CSV File


```js
geodesystems.search_type_document_csv({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip

### search_type_document_doc
API to search for entries of type Microsoft Word File


```js
geodesystems.search_type_document_doc({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip

### search_type_document_html
API to search for entries of type HTML File


```js
geodesystems.search_type_document_html({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip

### search_type_document_pdf
API to search for entries of type PDF File


```js
geodesystems.search_type_document_pdf({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip

### search_type_document_ppt
API to search for entries of type Microsoft Powerpoint File


```js
geodesystems.search_type_document_ppt({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip

### search_type_document_xls
API to search for entries of type Microsoft Excel File


```js
geodesystems.search_type_document_xls({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip

### search_type_drilsdown_casestudy
API to search for entries of type Drilsdown Case Study


```js
geodesystems.search_type_drilsdown_casestudy({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip

### search_type_edgar_filing
API to search for entries of type SEC EDGAR Filing


```js
geodesystems.search_type_edgar_filing({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip
* search.type_edgar_filing.form_type (string) - Form Type
* search.type_edgar_filing.company_name (string) - Company Name
* search.type_edgar_filing.cik_number (string) - CIK Number
* search.type_edgar_filing.standard_industrial_classification (string) - Standard Industrial Classification
* search.type_edgar_filing.irs_number (string) - IRS Number
* search.type_edgar_filing.state (string) - State of Incorporation

### search_type_eia_category
API to search for entries of type EIA Category


```js
geodesystems.search_type_eia_category({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip

### search_type_eia_series
API to search for entries of type EIA Series


```js
geodesystems.search_type_eia_series({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip

### search_type_esri_featureserver
API to search for entries of type ESRI Feature Server


```js
geodesystems.search_type_esri_featureserver({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip

### search_type_esri_geometryserver
API to search for entries of type ESRI Geometry Server


```js
geodesystems.search_type_esri_geometryserver({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip

### search_type_esri_gpserver
API to search for entries of type ESRI GP Server


```js
geodesystems.search_type_esri_gpserver({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip

### search_type_esri_imageserver
API to search for entries of type ESRI Image Server


```js
geodesystems.search_type_esri_imageserver({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip

### search_type_esri_layer
API to search for entries of type ESRI Layer


```js
geodesystems.search_type_esri_layer({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip
* search.type_esri_layer.layer_type (string) - Layer Type

### search_type_esri_mapserver
API to search for entries of type ESRI Map Server


```js
geodesystems.search_type_esri_mapserver({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip

### search_type_esri_restfolder
API to search for entries of type ESRI Services Folder


```js
geodesystems.search_type_esri_restfolder({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip

### search_type_esri_restserver
API to search for entries of type ESRI Web Server


```js
geodesystems.search_type_esri_restserver({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip

### search_type_esri_restservice
API to search for entries of type ESRI Rest Service


```js
geodesystems.search_type_esri_restservice({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip

### search_type_fred_category
API to search for entries of type FRED Category


```js
geodesystems.search_type_fred_category({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip

### search_type_fred_series
API to search for entries of type FRED Series


```js
geodesystems.search_type_fred_series({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip

### search_type_gtfs_agency
API to search for entries of type Transit Agency


```js
geodesystems.search_type_gtfs_agency({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip

### search_type_gtfs_route
API to search for entries of type Transit Route


```js
geodesystems.search_type_gtfs_route({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip
* search.type_gtfs_route.route_id (string) - Route ID
* search.type_gtfs_route.stop_names (string) - Stop Names

### search_type_gtfs_routes
API to search for entries of type Transit Route Collection


```js
geodesystems.search_type_gtfs_routes({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip

### search_type_gtfs_stop
API to search for entries of type Transit Stop


```js
geodesystems.search_type_gtfs_stop({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip
* search.type_gtfs_stop.stop_id (string) - Stop ID
* search.type_gtfs_stop.stop_code (string) - Stop Code
* search.type_gtfs_stop.zone_id (string) - Zone ID
* search.type_gtfs_stop.location_type (string) - Location Type
* search.type_gtfs_stop.wheelchair_boarding (string) - Wheelchair Boarding

### search_type_gtfs_stops
API to search for entries of type Transit Stop Collection


```js
geodesystems.search_type_gtfs_stops({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip

### search_type_gtfs_trip
API to search for entries of type Transit Trip


```js
geodesystems.search_type_gtfs_trip({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip
* search.type_gtfs_trip.stop_ids (string) - Stop IDS
* search.type_gtfs_trip.wheelchair_accessible (string) - Wheelchair Accessible
* search.type_gtfs_trip.bikes_allowed (string) - Bikes Allowed

### search_type_hazarddata
API to search for entries of type Hazard Data


```js
geodesystems.search_type_hazarddata({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip
* search.type_hazarddata.source (string) - Source Agency

### search_type_hydro_colorado
API to search for entries of type Colorado DNR Stream Gage


```js
geodesystems.search_type_hydro_colorado({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip
* search.type_hydro_colorado.site_id (string) - Site ID

### search_type_idv_bundle
API to search for entries of type IDV Bundle


```js
geodesystems.search_type_idv_bundle({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip

### search_type_image
API to search for entries of type Image


```js
geodesystems.search_type_image({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip

### search_type_image_airport
API to search for entries of type Airport Image


```js
geodesystems.search_type_image_airport({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip

### search_type_mb
API to search for entries of type MB Bathymetry


```js
geodesystems.search_type_mb({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip

### search_type_mb_collection
API to search for entries of type Bathymetry Collection


```js
geodesystems.search_type_mb_collection({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip

### search_type_mb_point_basic
API to search for entries of type Basic MB point file


```js
geodesystems.search_type_mb_point_basic({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip

### search_type_metameta_collection
API to search for entries of type Data Dictionary: Metadata Collection


```js
geodesystems.search_type_metameta_collection({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip

### search_type_metameta_dictionary
API to search for entries of type Data Dictionary: Metadata Dictionary


```js
geodesystems.search_type_metameta_dictionary({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip
* search.type_metameta_dictionary.field_index (integer) - Index
* search.type_metameta_dictionary.dictionary_type (string) - Type
* search.type_metameta_dictionary.short_name (string) - Short Name
* search.type_metameta_dictionary.super_type (string) - Super Type
* search.type_metameta_dictionary.isgroup (boolean) - Is Group
* search.type_metameta_dictionary.handler_class (string) - Handler Class
* search.type_metameta_dictionary.properties (string) - Properties
* search.type_metameta_dictionary.wiki_text (string) - Wiki Text

### search_type_metameta_field
API to search for entries of type Data Dictionary: Metadata Field


```js
geodesystems.search_type_metameta_field({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip
* search.type_metameta_field.field_index (integer) - Index
* search.type_metameta_field.field_id (string) - Field ID
* search.type_metameta_field.datatype (string) - Data Type
* search.type_metameta_field.enumeration_values (string) - Enumeration Values
* search.type_metameta_field.properties (string) - Properties
* search.type_metameta_field.database_column_size (integer) - Database Column Size
* search.type_metameta_field.missing (string) - Missing Value
* search.type_metameta_field.unit (string) - Unit

### search_type_nist_constant
API to search for entries of type CODATA Fundamental Physical Constants


```js
geodesystems.search_type_nist_constant({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip
* search.type_nist_constant.unit (string) - Unit

### search_type_nist_energy
API to search for entries of type NIST Ionization Energy Data


```js
geodesystems.search_type_nist_energy({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip
* search.type_nist_energy.energy (string) - Ionization Energy (eV)
* search.type_nist_energy.shells (string) - Ground Shells
* search.type_nist_energy.level (string) - Ground Level

### search_type_nist_isotope
API to search for entries of type NIST Isotope


```js
geodesystems.search_type_nist_isotope({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip

### search_type_nist_janaffile
API to search for entries of type NIST JANAF Thermochemical Table


```js
geodesystems.search_type_nist_janaffile({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip

### search_type_nitf
API to search for entries of type NITF File


```js
geodesystems.search_type_nitf({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip

### search_type_point_ameriflux_level2
API to search for entries of type Ameriflux Level 2 CSV File


```js
geodesystems.search_type_point_ameriflux_level2({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip
* search.type_point_ameriflux_level2.site_id (string) - Site ID
* search.type_point_ameriflux_level2.contact (string) - Contact
* search.type_point_ameriflux_level2.ecosystem_type (string) - Ecosystem Type

### search_type_point_amrc_final
API to search for entries of type AMRC Final QC Data


```js
geodesystems.search_type_point_amrc_final({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip
* search.type_point_amrc_final.site_id (string) - Site ID
* search.type_point_amrc_final.site_name (string) - Site Name
* search.type_point_amrc_final.argos_id (string) - Argos ID

### search_type_point_amrc_freewave
API to search for entries of type AMRC Freewave  Data


```js
geodesystems.search_type_point_amrc_freewave({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip
* search.type_point_amrc_freewave.station_name (string) - Station Name
* search.type_point_amrc_freewave.format (string) - File Format
* search.type_point_amrc_freewave.datalogger_model (string) - Data Logger Model
* search.type_point_amrc_freewave.datalogger_serial (string) - Data Logger Serial

### search_type_point_collection
API to search for entries of type Point Data Collection


```js
geodesystems.search_type_point_collection({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip

### search_type_point_czo
API to search for entries of type CZO Display File Format


```js
geodesystems.search_type_point_czo({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip

### search_type_point_gcnet
API to search for entries of type GC-Net Point Data


```js
geodesystems.search_type_point_gcnet({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip

### search_type_point_geomag_iaga2002
API to search for entries of type IAGA 2002 Geomagnetism Data


```js
geodesystems.search_type_point_geomag_iaga2002({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip
* search.type_point_geomag_iaga2002.iaga_code (string) - IAGA Code
* search.type_point_geomag_iaga2002.station_name (string) - Station Name
* search.type_point_geomag_iaga2002.source_of_data (string) - Source of data
* search.type_point_geomag_iaga2002.digital_sampling (string) - Digital Sampling
* search.type_point_geomag_iaga2002.data_interval (string) - Data Interval
* search.type_point_geomag_iaga2002.data_type (string) - Data Type

### search_type_point_hydro_waterml
API to search for entries of type WaterML


```js
geodesystems.search_type_point_hydro_waterml({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip
* search.type_point_hydro_waterml.site_code (string) - Site Code
* search.type_point_hydro_waterml.site_name (string) - Site Name

### search_type_point_icebridge_atm_icessn
API to search for entries of type ATM Ice SSN Data


```js
geodesystems.search_type_point_icebridge_atm_icessn({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip

### search_type_point_icebridge_atm_qfit
API to search for entries of type ATM QFIT Data


```js
geodesystems.search_type_point_icebridge_atm_qfit({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip

### search_type_point_icebridge_mccords_irmcr2
API to search for entries of type McCords Irmcr2 Data


```js
geodesystems.search_type_point_icebridge_mccords_irmcr2({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip

### search_type_point_icebridge_mccords_irmcr3
API to search for entries of type McCords Irmcr3 Data


```js
geodesystems.search_type_point_icebridge_mccords_irmcr3({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip

### search_type_point_icebridge_paris
API to search for entries of type Paris Data


```js
geodesystems.search_type_point_icebridge_paris({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip

### search_type_point_idv
API to search for entries of type IDV Point File


```js
geodesystems.search_type_point_idv({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip

### search_type_point_ncdc_climate
API to search for entries of type NC  DC Climate Data


```js
geodesystems.search_type_point_ncdc_climate({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip

### search_type_point_netcdf
API to search for entries of type NetCDF Point File


```js
geodesystems.search_type_point_netcdf({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip

### search_type_point_noaa_carbon
API to search for entries of type NOAA Carbon Measurements


```js
geodesystems.search_type_point_noaa_carbon({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip
* search.type_point_noaa_carbon.site_id (string) - Site ID
* search.type_point_noaa_carbon.parameter (string) - Parameter
* search.type_point_noaa_carbon.project (string) - Project
* search.type_point_noaa_carbon.lab_id_number (string) - Lab ID Number
* search.type_point_noaa_carbon.measurement_group (string) - Measurement Group

### search_type_point_noaa_flask_event
API to search for entries of type NOAA Flask Event Measurements


```js
geodesystems.search_type_point_noaa_flask_event({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip
* search.type_point_noaa_flask_event.site_id (string) - Site ID
* search.type_point_noaa_flask_event.parameter (string) - Parameter
* search.type_point_noaa_flask_event.project (string) - Project
* search.type_point_noaa_flask_event.lab_id_number (string) - Lab ID Number
* search.type_point_noaa_flask_event.measurement_group (string) - Measurement Group

### search_type_point_noaa_flask_month
API to search for entries of type NOAA Flask Month Measurements


```js
geodesystems.search_type_point_noaa_flask_month({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip
* search.type_point_noaa_flask_month.site_id (string) - Site ID
* search.type_point_noaa_flask_month.parameter (string) - Parameter
* search.type_point_noaa_flask_month.project (string) - Project
* search.type_point_noaa_flask_month.lab_id_number (string) - Lab ID Number
* search.type_point_noaa_flask_month.measurement_group (string) - Measurement Group

### search_type_point_noaa_madis
API to search for entries of type NOAA MADIS Point Data


```js
geodesystems.search_type_point_noaa_madis({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip

### search_type_point_noaa_tower
API to search for entries of type NOAA Tower Network


```js
geodesystems.search_type_point_noaa_tower({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip
* search.type_point_noaa_tower.site_id (string) - Site ID

### search_type_point_ocean_cnv
API to search for entries of type SeaBird CNV Data


```js
geodesystems.search_type_point_ocean_cnv({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip

### search_type_point_ocean_csv_sado_TTS
API to search for entries of type SADO TTS Data


```js
geodesystems.search_type_point_ocean_csv_sado_TTS({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip

### search_type_point_ocean_csv_sado_meteo
API to search for entries of type SADO Meteo Data


```js
geodesystems.search_type_point_ocean_csv_sado_meteo({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip

### search_type_point_ocean_csv_sado_position
API to search for entries of type SADO Position Data


```js
geodesystems.search_type_point_ocean_csv_sado_position({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip

### search_type_point_ocean_netcdf_glider
API to search for entries of type NetCDF Glider Data


```js
geodesystems.search_type_point_ocean_netcdf_glider({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip
* search.type_point_ocean_netcdf_track.platform (string) - Platform

### search_type_point_ocean_netcdf_track
API to search for entries of type NetCDF Track Data


```js
geodesystems.search_type_point_ocean_netcdf_track({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip
* search.type_point_ocean_netcdf_track.platform (string) - Platform

### search_type_point_ocean_ooi_dmgx
API to search for entries of type OOI Data


```js
geodesystems.search_type_point_ocean_ooi_dmgx({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip

### search_type_point_pbo_position_time_series
API to search for entries of type PBO Position Time Series


```js
geodesystems.search_type_point_pbo_position_time_series({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip
* search.type_point_pbo_position_time_series.four_char_id (string) - Four Char ID
* search.type_point_pbo_position_time_series.station_name (string) - Station Name
* search.type_point_pbo_position_time_series.reference_frame (string) - Reference Frame
* search.type_point_pbo_position_time_series.format_version (string) - Format Version
* search.type_point_pbo_position_time_series.processing_center (string) - Processing Center

### search_type_point_snotel
API to search for entries of type SNOTEL Snow Data


```js
geodesystems.search_type_point_snotel({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip
* search.type_point_snotel.site_id (string) - Site ID
* search.type_point_snotel.site_number (string) - Site Number
* search.type_point_snotel.state (string) - State
* search.type_point_snotel.network (string) - Network
* search.type_point_snotel.huc_name (string) - HUC Name
* search.type_point_snotel.huc_id (string) - HUC ID

### search_type_point_wsbb_ggp
API to search for entries of type Global Geodynamics GGP Format


```js
geodesystems.search_type_point_wsbb_ggp({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip
* search.type_point_wsbb_ggp.station (string) - Station
* search.type_point_wsbb_ggp.instrument (string) - Instrument
* search.type_point_wsbb_ggp.author (string) - Author

### search_type_power_miso_forecast
API to search for entries of type MISO Foreacast XML


```js
geodesystems.search_type_power_miso_forecast({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip

### search_type_psd_monthly_climate_index
API to search for entries of type NOAA-ESRL-PSD Monthly Climate Index


```js
geodesystems.search_type_psd_monthly_climate_index({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip
* search.type_psd_monthly_climate_index.units (string) - Units

### search_type_quandl_series
API to search for entries of type QUANDL Series


```js
geodesystems.search_type_quandl_series({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip

### search_type_resilience_assessment
API to search for entries of type Resiliency Assessment


```js
geodesystems.search_type_resilience_assessment({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip
* search.type_resilience_assessment.organization (string) - Organization
* search.type_resilience_assessment.country (string) - Country
* search.type_resilience_assessment.location (string) - Location
* search.type_resilience_assessment.bioregion (string) - Bioregion
* search.type_resilience_assessment.assessment_type (string) - Type
* search.type_resilience_assessment.resilience_definition (string) - Resilience definition
* search.type_resilience_assessment.theory_development (string) - Theory development

### search_type_resilience_project
API to search for entries of type Resiliency Project


```js
geodesystems.search_type_resilience_project({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip
* search.type_resilience_project.status (string) - Status
* search.type_resilience_project.project_type (string) - Project Type
* search.type_resilience_project.country (string) - Country

### search_type_reuters_document
API to search for entries of type Reuters Document


```js
geodesystems.search_type_reuters_document({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip

### search_type_service_group
API to search for entries of type Service Group


```js
geodesystems.search_type_service_group({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip

### search_type_service_link
API to search for entries of type Service Link


```js
geodesystems.search_type_service_link({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip

### search_type_socrata_series
API to search for entries of type SOCRATA Series


```js
geodesystems.search_type_socrata_series({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip

### search_type_urbaninstitute_employment
API to search for entries of type MetroTrends Employment Data


```js
geodesystems.search_type_urbaninstitute_employment({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip
* search.type_urbaninstitute_employment.region (string) - Region

### search_type_usda_arms_crop
API to search for entries of type USDA ARMS Crop Data


```js
geodesystems.search_type_usda_arms_crop({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip
* search.type_usda_arms_crop.report (string) - Report
* search.type_usda_arms_crop.subject (string) - Subject
* search.type_usda_arms_crop.state (string) - State

### search_type_usda_arms_finance
API to search for entries of type USDA ARMS Finance Data


```js
geodesystems.search_type_usda_arms_finance({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip
* search.type_usda_arms_finance.report (string) - Report
* search.type_usda_arms_finance.subject (string) - Subject
* search.type_usda_arms_finance.state (string) - State

### search_type_usda_nass
API to search for entries of type USDA NASS Data


```js
geodesystems.search_type_usda_nass({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip
* search.type_usda_nass.source (string) - Source
* search.type_usda_nass.commodity (string) - Commodities
* search.type_usda_nass.state (string) - State

### search_type_virtual
API to search for entries of type Virtual Group


```js
geodesystems.search_type_virtual({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip

### search_type_wms_capabilities
API to search for entries of type WMS Capabilities


```js
geodesystems.search_type_wms_capabilities({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip

### search_type_wms_layer
API to search for entries of type WMS Layer


```js
geodesystems.search_type_wms_layer({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip

### search_vote_yesno
API to search for entries of type Simple Yes-No Vote


```js
geodesystems.search_vote_yesno({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip
* search.db_vote_yesno.vote (string) - My Vote

### search_weblog
API to search for entries of type Weblog


```js
geodesystems.search_weblog({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip

### search_wikipage
API to search for entries of type Wiki Page


```js
geodesystems.search_wikipage({}, context)
```

#### Parameters
* text (string) - Search text
* name (string) - Search name
* description (string) - Search description
* fromdate (string) - From date
* todate (string) - To date
* createdate.from (string) - Archive create date from
* createdate.to (string) - Archive create date to
* changedate.from (string) - Archive change date from
* changedate.to (string) - Archive change date to
* group (string) - Parent entry
* filesuffix (string) - File suffix
* maxlatitude (number) - Northern bounds of search
* minlongitude (number) - Western bounds of search
* minlatitude (number) - Southern bounds of search
* maxlongitude (number) - Eastern bounds of search
* max (integer) - Max number of results
* skip (integer) - Number to skip
* search.wikipage.wikitext (string) - Wiki Text
* search.wikipage.category (string) - Wiki Page Category

