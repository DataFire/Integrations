# @datafire/geodesystems

Client library for geodesystems.com:443

## Installation and Usage
```bash
npm install --save @datafire/geodesystems
```
```js
let geodesystems = require('@datafire/geodesystems').create({
  username: "",
  password: ""
});

.then(data => {
  console.log(data);
});
```

## Description

Search for data in lots of places - manage your documents, photos and critical business knowledge - communicate and coordinate with blogs, interactive wikis, and data integration dashboards.

## Actions

### media_tabular_extractsheet
API to call: Extract sheets


```js
geodesystems.media_tabular_extractsheet({
  "output": "",
  "entryid": ""
}, context)
```

#### Input
* input `object`
  * output **required** `string`: Output type  -don't change
  * entryid **required** `string`: Entry ID
  * arg1 `string`: Sheets

#### Output
*Output schema unknown*

### search_2017_boulder_election_expenditures
API to search for entries of type 2017 Boulder Election Expenditures


```js
geodesystems.search_2017_boulder_election_expenditures({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip
  * search.db_2017_boulder_election_expenditures.committee `string`: Committee
  * search.db_2017_boulder_election_expenditures.transaction_date `string`: Transaction Date
  * search.db_2017_boulder_election_expenditures.name `string`: Name
  * search.db_2017_boulder_election_expenditures.street `string`: Street
  * search.db_2017_boulder_election_expenditures.city `string`: City
  * search.db_2017_boulder_election_expenditures.state `string`: State
  * search.db_2017_boulder_election_expenditures.zip `string`: Zip
  * search.db_2017_boulder_election_expenditures.expenditure `number`: Expenditure
  * search.db_2017_boulder_election_expenditures.purpose `string`: Purpose

#### Output
*Output schema unknown*

### search_any
API to search for entries of type Any file type


```js
geodesystems.search_any({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip

#### Output
*Output schema unknown*

### search_beforeafter
API to search for entries of type Before and After Images


```js
geodesystems.search_beforeafter({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip

#### Output
*Output schema unknown*

### search_biblio
API to search for entries of type Bibliographic Entry


```js
geodesystems.search_biblio({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip
  * search.biblio.primary_author `string`: Primary Author
  * search.biblio.type `string`: Publication Type
  * search.biblio.institution `string`: Institution
  * search.biblio.other_authors `string`: Other Authors
  * search.biblio.publication `string`: Publication

#### Output
*Output schema unknown*

### search_bio_dicom
API to search for entries of type DICOM File


```js
geodesystems.search_bio_dicom({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip

#### Output
*Output schema unknown*

### search_bio_dicom_test
API to search for entries of type DICOM Test File


```js
geodesystems.search_bio_dicom_test({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip
  * search.bio_dicom_test.PatientName `string`: Patient Name
  * search.bio_dicom_test.PatientID `string`: Patient ID

#### Output
*Output schema unknown*

### search_bio_fasta
API to search for entries of type FASTA File


```js
geodesystems.search_bio_fasta({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip

#### Output
*Output schema unknown*

### search_bio_fastq
API to search for entries of type FASTQ File


```js
geodesystems.search_bio_fastq({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip

#### Output
*Output schema unknown*

### search_bio_hmmer_index
API to search for entries of type HMMER Index File


```js
geodesystems.search_bio_hmmer_index({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip

#### Output
*Output schema unknown*

### search_bio_ome_tiff
API to search for entries of type OME TIFF File


```js
geodesystems.search_bio_ome_tiff({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip

#### Output
*Output schema unknown*

### search_bio_ontology_assay
API to search for entries of type Assay


```js
geodesystems.search_bio_ontology_assay({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip

#### Output
*Output schema unknown*

### search_bio_ontology_cohort
API to search for entries of type Cohort


```js
geodesystems.search_bio_ontology_cohort({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip

#### Output
*Output schema unknown*

### search_bio_ontology_person
API to search for entries of type Person


```js
geodesystems.search_bio_ontology_person({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip
  * search.bio_ontology_person.gender `string`: Gender

#### Output
*Output schema unknown*

### search_bio_ontology_sample
API to search for entries of type Sample


```js
geodesystems.search_bio_ontology_sample({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip

#### Output
*Output schema unknown*

### search_bio_ontology_series
API to search for entries of type Series


```js
geodesystems.search_bio_ontology_series({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip

#### Output
*Output schema unknown*

### search_bio_ontology_study
API to search for entries of type Study


```js
geodesystems.search_bio_ontology_study({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip

#### Output
*Output schema unknown*

### search_bio_sam
API to search for entries of type SAM Data


```js
geodesystems.search_bio_sam({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip

#### Output
*Output schema unknown*

### search_bio_sf_pdb
API to search for entries of type PDB Protein File


```js
geodesystems.search_bio_sf_pdb({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip

#### Output
*Output schema unknown*

### search_bio_sra
API to search for entries of type Sequence Read Archive


```js
geodesystems.search_bio_sra({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip

#### Output
*Output schema unknown*

### search_bio_stockholm
API to search for entries of type Stockholm File


```js
geodesystems.search_bio_stockholm({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip

#### Output
*Output schema unknown*

### search_bio_taxonomy
API to search for entries of type Taxonomic Entry


```js
geodesystems.search_bio_taxonomy({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip
  * search.bio_taxonomy.rank `string`: Rank
  * search.bio_taxonomy.embl_code `string`: EMBL Code
  * search.bio_taxonomy.division `string`: Divison
  * search.bio_taxonomy.inherited_div `boolean`: Inheritied division
  * search.bio_taxonomy.aliases `string`: Also known

#### Output
*Output schema unknown*

### search_blogentry
API to search for entries of type Weblog Entry


```js
geodesystems.search_blogentry({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip
  * search.blogentry.blogtext `string`: Extra Text

#### Output
*Output schema unknown*

### search_bolder_rental_housing
API to search for entries of type Boulder Rental Housing


```js
geodesystems.search_bolder_rental_housing({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip
  * search.db_bolder_rental_housing.propaddr1 `string`: Property Address
  * search.db_bolder_rental_housing.rentaltype `string`: Rental Type
  * search.db_bolder_rental_housing.bldgtype `string`: Building Type
  * search.db_bolder_rental_housing.dwellunits `integer`: Dwelling Units
  * search.db_bolder_rental_housing.roomunits `integer`: Room Units
  * search.db_bolder_rental_housing.neighbrhd `string`: Neighborhood
  * search.db_bolder_rental_housing.complexnm `string`: Complex Name
  * search.db_bolder_rental_housing.name `string`: Name
  * search.db_bolder_rental_housing.persontype `string`: Person Type
  * search.db_bolder_rental_housing.company `string`: Company
  * search.db_bolder_rental_housing.engcompl `string`: Engcompl
  * search.db_bolder_rental_housing.licenseexp `string`: Expiration Date
  * search.db_bolder_rental_housing.licensenum `string`: Licensenum
  * search.db_bolder_rental_housing.ppl1_coname `string`: Ppl1 Coname
  * search.db_bolder_rental_housing.person_1 `string`: Person 1
  * search.db_bolder_rental_housing.ppl1_role `string`: Ppl1 Role
  * search.db_bolder_rental_housing.ppl2_coname `string`: Ppl2 Coname
  * search.db_bolder_rental_housing.person_2 `string`: Person 2
  * search.db_bolder_rental_housing.ppl2_role `string`: Ppl2 Role
  * search.db_bolder_rental_housing.location `string`: Location

#### Output
*Output schema unknown*

### search_bookmarks
API to search for entries of type Bookmarks


```js
geodesystems.search_bookmarks({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip
  * search.db_bookmarks.title `string`: Title
  * search.db_bookmarks.url `string`: URL
  * search.db_bookmarks.category `string`: Category
  * search.db_bookmarks.date `string`: Date

#### Output
*Output schema unknown*

### search_boston_crime
API to search for entries of type Boston Crime


```js
geodesystems.search_boston_crime({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip
  * search.db_boston_crime.offense `string`: Offense
  * search.db_boston_crime.offense_code_group `string`: Offense Code Group
  * search.db_boston_crime.offense_description `string`: Offense Description
  * search.db_boston_crime.district `string`: District
  * search.db_boston_crime.reporting_area `string`: Reporting Area
  * search.db_boston_crime.shooting `string`: Shooting
  * search.db_boston_crime.year `number`: Year
  * search.db_boston_crime.month `number`: Month
  * search.db_boston_crime.day_of_week `string`: Day Of Week
  * search.db_boston_crime.hour `number`: Hour
  * search.db_boston_crime.street `string`: Street
  * search.db_boston_crime.location `string`: Location

#### Output
*Output schema unknown*

### search_boulder_2017_election_contributions
API to search for entries of type Boulder 2017 Election Contributions


```js
geodesystems.search_boulder_2017_election_contributions({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip
  * search.db_boulder_2017_election_contributions.committee `string`: Committee
  * search.db_boulder_2017_election_contributions.last_name `string`: Last Name
  * search.db_boulder_2017_election_contributions.first_name `string`: First Name
  * search.db_boulder_2017_election_contributions.street `string`: Street
  * search.db_boulder_2017_election_contributions.city `string`: City
  * search.db_boulder_2017_election_contributions.state `string`: State
  * search.db_boulder_2017_election_contributions.zip `string`: Zip
  * search.db_boulder_2017_election_contributions.contribution_type `string`: Contribution Type
  * search.db_boulder_2017_election_contributions.from_candidate `string`: From Candidate
  * search.db_boulder_2017_election_contributions.date `string`: Date
  * search.db_boulder_2017_election_contributions.amount `number`: Amount
  * search.db_boulder_2017_election_contributions.match_amount `number`: Match Amount
  * search.db_boulder_2017_election_contributions.ytd_amount `number`: Ytd Amount
  * search.db_boulder_2017_election_contributions.location `string`: Location

#### Output
*Output schema unknown*

### search_boulder_campaign_contributions
API to search for entries of type Boulder Campaign Contributions


```js
geodesystems.search_boulder_campaign_contributions({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip
  * search.db_boulder_campaign_contributions.committee `string`: Committee
  * search.db_boulder_campaign_contributions.type `string`: Type
  * search.db_boulder_campaign_contributions.committee_num `string`: Committee Num
  * search.db_boulder_campaign_contributions.candidate `string`: Candidate
  * search.db_boulder_campaign_contributions.filing_date `string`: Filing Date
  * search.db_boulder_campaign_contributions.amended_date `string`: Amended Date
  * search.db_boulder_campaign_contributions.official_filing `string`: Official Filing
  * search.db_boulder_campaign_contributions.transaction_date `string`: Transaction Date
  * search.db_boulder_campaign_contributions.last_name `string`: Last Name
  * search.db_boulder_campaign_contributions.first_name `string`: First Name
  * search.db_boulder_campaign_contributions.street `string`: Street
  * search.db_boulder_campaign_contributions.city `string`: City
  * search.db_boulder_campaign_contributions.state `string`: State
  * search.db_boulder_campaign_contributions.zip `string`: Zip
  * search.db_boulder_campaign_contributions.contribution `number`: Contribution
  * search.db_boulder_campaign_contributions.contribution_type `string`: Contribution Type
  * search.db_boulder_campaign_contributions.anonymous `string`: Anonymous
  * search.db_boulder_campaign_contributions.from_candidate `string`: From Candidate
  * search.db_boulder_campaign_contributions.match `number`: Match

#### Output
*Output schema unknown*

### search_boulder_consulting_services
API to search for entries of type Boulder Consulting Services Database


```js
geodesystems.search_boulder_consulting_services({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip
  * search.db_boulder_consulting_services.fund `string`: Fund
  * search.db_boulder_consulting_services.department `string`: Department
  * search.db_boulder_consulting_services.organization `string`: Organization
  * search.db_boulder_consulting_services.object `string`: Object
  * search.db_boulder_consulting_services.project `string`: Project
  * search.db_boulder_consulting_services.account_description `string`: Account Description
  * search.db_boulder_consulting_services.date `string`: Date
  * search.db_boulder_consulting_services.amount `number`: Amount
  * search.db_boulder_consulting_services.purchase_order `string`: Purchase Order
  * search.db_boulder_consulting_services.vendor_name `string`: Vendor Name
  * search.db_boulder_consulting_services.comment `string`: Comment

#### Output
*Output schema unknown*

### search_boulder_county_voter_details
API to search for entries of type Boulder County Voter Details


```js
geodesystems.search_boulder_county_voter_details({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip
  * search.db_boulder_county_voter_details.first_name `string`: First Name
  * search.db_boulder_county_voter_details.last_name `string`: Last Name
  * search.db_boulder_county_voter_details.registration_date `string`: Registration Date
  * search.db_boulder_county_voter_details.last_updated_date `string`: Last Updated Date
  * search.db_boulder_county_voter_details.residential_address `string`: Residential Address
  * search.db_boulder_county_voter_details.residential_city `string`: Residential City
  * search.db_boulder_county_voter_details.mailing_zip_code `string`: Mailing Zip Code
  * search.db_boulder_county_voter_details.voter_status `string`: Voter Status
  * search.db_boulder_county_voter_details.party `string`: Party
  * search.db_boulder_county_voter_details.gender `string`: Gender
  * search.db_boulder_county_voter_details.birth_year `integer`: Birth Year
  * search.db_boulder_county_voter_details.precinct_code `string`: Precinct Code
  * search.db_boulder_county_voter_details.congressional `string`: Congressional
  * search.db_boulder_county_voter_details.state_senate `string`: State Senate
  * search.db_boulder_county_voter_details.state_house `string`: State House
  * search.db_boulder_county_voter_details.municipality `string`: Municipality
  * search.db_boulder_county_voter_details.city_ward_district `string`: City Ward/district
  * search.db_boulder_county_voter_details.school_district `string`: School District
  * search.db_boulder_county_voter_details.location `string`: Location

#### Output
*Output schema unknown*

### search_boulder_crimes
API to search for entries of type Boulder Crime Reports


```js
geodesystems.search_boulder_crimes({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip
  * search.db_boulder_crimes.offense `string`: Offense
  * search.db_boulder_crimes.reportdate `string`: Report Date
  * search.db_boulder_crimes.blockadd `string`: Address
  * search.db_boulder_crimes.location `string`: Location

#### Output
*Output schema unknown*

### search_boulder_emails
API to search for entries of type Boulder Council Emails


```js
geodesystems.search_boulder_emails({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip
  * search.db_boulder_emails.sent_from `string`: Sent From
  * search.db_boulder_emails.sent_to `string`: Sent To
  * search.db_boulder_emails.sent_cc `string`: Sent Cc
  * search.db_boulder_emails.received_date `string`: Received Date
  * search.db_boulder_emails.email_subject `string`: Email Subject
  * search.db_boulder_emails.plain_text_body `string`: Email Body

#### Output
*Output schema unknown*

### search_boulder_employee_salaries
API to search for entries of type Boulder Employee Salaries


```js
geodesystems.search_boulder_employee_salaries({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip
  * search.db_boulder_employee_salaries.position_description `string`: Position Description
  * search.db_boulder_employee_salaries.department `string`: Department
  * search.db_boulder_employee_salaries.employee_flsa_exempt_y_n `string`: Employee Flsa Exempt Y N
  * search.db_boulder_employee_salaries.pay_range_min `number`: Pay Range Min
  * search.db_boulder_employee_salaries.pay_range_max `number`: Pay Range Max
  * search.db_boulder_employee_salaries.employee_hourly_pay_rate `number`: Employee Hourly Pay Rate
  * search.db_boulder_employee_salaries.employee_fte_in_this_position `number`: Employee Fte In This Position
  * search.db_boulder_employee_salaries.employee_annual_base_salary `number`: Employee Annual Base Salary

#### Output
*Output schema unknown*

### search_calendar
API to search for entries of type Calendar


```js
geodesystems.search_calendar({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip

#### Output
*Output schema unknown*

### search_campaign_donors
API to search for entries of type Campaign Donors


```js
geodesystems.search_campaign_donors({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip
  * search.db_campaign_donors.committee `string`: Committee
  * search.db_campaign_donors.amount `number`: Amount
  * search.db_campaign_donors.party `string`: Party
  * search.db_campaign_donors.donor `string`: Donor
  * search.db_campaign_donors.gender `string`: Gender
  * search.db_campaign_donors.city `string`: City
  * search.db_campaign_donors.state `string`: State
  * search.db_campaign_donors.zip_code `string`: Zip Code
  * search.db_campaign_donors.employer `string`: Employer
  * search.db_campaign_donors.occupation `string`: Occupation
  * search.db_campaign_donors.date `string`: Date
  * search.db_campaign_donors.location `string`: Location

#### Output
*Output schema unknown*

### search_campaign_expenditures
API to search for entries of type Campaign Expenditures


```js
geodesystems.search_campaign_expenditures({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip
  * search.db_campaign_expenditures.committee `string`: Committee
  * search.db_campaign_expenditures.amount `number`: Amount
  * search.db_campaign_expenditures.party `string`: Party
  * search.db_campaign_expenditures.recipient `string`: Recipient
  * search.db_campaign_expenditures.city `string`: City
  * search.db_campaign_expenditures.state `string`: State
  * search.db_campaign_expenditures.zip_code `string`: Zip Code
  * search.db_campaign_expenditures.transaction_date `string`: Transaction Date
  * search.db_campaign_expenditures.purpose `string`: Purpose
  * search.db_campaign_expenditures.memo_text `string`: Memo Text
  * search.db_campaign_expenditures.location `string`: Location

#### Output
*Output schema unknown*

### search_cataloglink
API to search for entries of type Catalog Link


```js
geodesystems.search_cataloglink({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip

#### Output
*Output schema unknown*

### search_cdm_grid
API to search for entries of type Gridded Data File


```js
geodesystems.search_cdm_grid({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip

#### Output
*Output schema unknown*

### search_chatroom
API to search for entries of type Chat Room


```js
geodesystems.search_chatroom({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip

#### Output
*Output schema unknown*

### search_colorado_water_rights
API to search for entries of type Colorado Water Rights


```js
geodesystems.search_colorado_water_rights({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip
  * search.db_colorado_water_rights.structure_name `string`: Structure Name
  * search.db_colorado_water_rights.structure_type `string`: Structure Type
  * search.db_colorado_water_rights.water_source `string`: Water Source
  * search.db_colorado_water_rights.county `string`: County
  * search.db_colorado_water_rights.adjudication_date `string`: Adjudication Date
  * search.db_colorado_water_rights.appropriation_date `string`: Appropriation Date
  * search.db_colorado_water_rights.priority_no `string`: Priority No
  * search.db_colorado_water_rights.decreed_uses `string`: Decreed Uses
  * search.db_colorado_water_rights.net_absolute `number`: Net Absolute
  * search.db_colorado_water_rights.net_conditional `number`: Net Conditional
  * search.db_colorado_water_rights.net_apex_absolute `number`: Net Apex Absolute
  * search.db_colorado_water_rights.net_apex_conditional `number`: Net Apex Conditional
  * search.db_colorado_water_rights.decreed_units `string`: Decreed Units
  * search.db_colorado_water_rights.seasonal_limits `string`: Seasonal Limits
  * search.db_colorado_water_rights.comments `string`: Comments
  * search.db_colorado_water_rights.more_information `string`: More Information
  * search.db_colorado_water_rights.location `string`: Location

#### Output
*Output schema unknown*

### search_committee_donations
API to search for entries of type Committee Donations


```js
geodesystems.search_committee_donations({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip
  * search.db_committee_donations.committee `string`: Committee
  * search.db_committee_donations.amount `number`: Amount
  * search.db_committee_donations.recipient `string`: Recipient
  * search.db_committee_donations.date `string`: Date
  * search.db_committee_donations.city `string`: City
  * search.db_committee_donations.state `string`: State
  * search.db_committee_donations.zip_code `string`: Zip Code
  * search.db_committee_donations.employer `string`: Employer
  * search.db_committee_donations.occupation `string`: Occupation
  * search.db_committee_donations.location `string`: Location

#### Output
*Output schema unknown*

### search_community_datahub
API to search for entries of type Data Hub


```js
geodesystems.search_community_datahub({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip

#### Output
*Output schema unknown*

### search_community_resource
API to search for entries of type Facility


```js
geodesystems.search_community_resource({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip
  * search.community_resource.resource_type `string`: Type
  * search.community_resource.address `string`: Address
  * search.community_resource.city `string`: City
  * search.community_resource.state `string`: State or Province
  * search.community_resource.zipcode `string`: Zip Code

#### Output
*Output schema unknown*

### search_construction_permits
API to search for entries of type Construction Permits


```js
geodesystems.search_construction_permits({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip
  * search.db_construction_permits.address `string`: Address
  * search.db_construction_permits.case_status `string`: Case Status
  * search.db_construction_permits.category `string`: Category
  * search.db_construction_permits.building_uses_and_work_scopes `string`: Building Uses And Work Scopes
  * search.db_construction_permits.permit_types `string`: Permit Types
  * search.db_construction_permits.total_project_value `number`: Total Project Value
  * search.db_construction_permits.total_subpermit_value `number`: Total Subpermit Value
  * search.db_construction_permits.applied `string`: Applied
  * search.db_construction_permits.approved `string`: Approved
  * search.db_construction_permits.issued `string`: Issued
  * search.db_construction_permits.co_date `string`: Co Date
  * search.db_construction_permits.completion_date `string`: Completion Date
  * search.db_construction_permits.new_res_unit `integer`: New Res Unit
  * search.db_construction_permits.existing_res_unit `integer`: Existing Res Unit
  * search.db_construction_permits.affordable_hsg_unit `integer`: Affordable Hsg Unit
  * search.db_construction_permits.new_sf `integer`: New Sf
  * search.db_construction_permits.remodel_sf `integer`: Remodel Sf
  * search.db_construction_permits.narrative_description `string`: Narrative Description
  * search.db_construction_permits.primary_first_name `string`: Primary First Name
  * search.db_construction_permits.primary_last_name `string`: Primary Last Name
  * search.db_construction_permits.primary_company `string`: Primary Company
  * search.db_construction_permits.contractor_first_name `string`: Contractor First Name
  * search.db_construction_permits.contractor_last_name `string`: Contractor Last Name
  * search.db_construction_permits.contractor_company `string`: Contractor Company
  * search.db_construction_permits.owner1_first_name `string`: Owner1 First Name
  * search.db_construction_permits.owner1_last_name `string`: Owner1 Last Name
  * search.db_construction_permits.owner1_company `string`: Owner1 Company
  * search.db_construction_permits.owner2_first_name `string`: Owner2 First Name
  * search.db_construction_permits.owner2_last_name `string`: Owner2 Last Name
  * search.db_construction_permits.owner2_company `string`: Owner2 Company

#### Output
*Output schema unknown*

### search_contact
API to search for entries of type Contact List


```js
geodesystems.search_contact({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip
  * search.db_contact.name `string`: Name
  * search.db_contact.institution `string`: Institution
  * search.db_contact.email `string`: Email

#### Output
*Output schema unknown*

### search_db_co_indicators
API to search for entries of type Colorado Health Indicators


```js
geodesystems.search_db_co_indicators({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip
  * search.db_db_co_indicators.geo_name `string`: County
  * search.db_db_co_indicators.domain `string`: Domain
  * search.db_db_co_indicators.subdomain `string`: Subdomain
  * search.db_db_co_indicators.indicatorName `string`: Indicator
  * search.db_db_co_indicators.description `string`: Description
  * search.db_db_co_indicators.measure `number`: Measure
  * search.db_db_co_indicators.location `string`: Location

#### Output
*Output schema unknown*

### search_earth_satellite_landsat
API to search for entries of type Landsat Satellite Data


```js
geodesystems.search_earth_satellite_landsat({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip
  * search.earth_satellite_landsat.sensor `string`: Sensor
  * search.earth_satellite_landsat.satellite `string`: Satellite
  * search.earth_satellite_landsat.wrs_path_number `integer`: WRS Path
  * search.earth_satellite_landsat.wrs_row_number `integer`: WRS Row
  * search.earth_satellite_landsat.ground_station `string`: Ground Station
  * search.earth_satellite_landsat.archive_version_number `integer`: Archive Version Number

#### Output
*Output schema unknown*

### search_faq
API to search for entries of type FAQ


```js
geodesystems.search_faq({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip

#### Output
*Output schema unknown*

### search_fec_pacs
API to search for entries of type FEC PACs


```js
geodesystems.search_fec_pacs({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip
  * search.db_fec_pacs.committee `string`: Committee
  * search.db_fec_pacs.total_receipts `number`: Total Receipts
  * search.db_fec_pacs.beginning_cash `number`: Beginning Cash
  * search.db_fec_pacs.ending_cash `number`: Ending Cash
  * search.db_fec_pacs.contributions_from_individuals `number`: Contributions From Individuals
  * search.db_fec_pacs.contributions_from_other_committees `number`: Contributions From Other Committees
  * search.db_fec_pacs.trans_from_affiliates `number`: Trans From Affiliates
  * search.db_fec_pacs.contributions_to_other_committee `number`: Contributions To Other Committee
  * search.db_fec_pacs.contributions_from_candidate `number`: Contributions From Candidate
  * search.db_fec_pacs.loans_from_candidate `number`: Loans From Candidate
  * search.db_fec_pacs.total_loans_received `number`: Total Loans Received
  * search.db_fec_pacs.total_distributions `number`: Total Distributions
  * search.db_fec_pacs.transfers_to_affiliates `number`: Transfers To Affiliates
  * search.db_fec_pacs.refunds_to_individuals `number`: Refunds To Individuals
  * search.db_fec_pacs.refends_to_othercommittees `number`: Refends To Othercommittees
  * search.db_fec_pacs.candidate_loan_repayments `number`: Candidate Loan Repayments
  * search.db_fec_pacs.loan_repayments `number`: Loan Repayments

#### Output
*Output schema unknown*

### search_feccandidates
API to search for entries of type Candidates


```js
geodesystems.search_feccandidates({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip
  * search.db_feccandidates.name `string`: Name
  * search.db_feccandidates.party `string`: Party
  * search.db_feccandidates.state `string`: State
  * search.db_feccandidates.district `string`: District
  * search.db_feccandidates.gender `string`: Gender
  * search.db_feccandidates.beginning_cash `number`: Beginning Cash
  * search.db_feccandidates.ending_cash `number`: Ending Cash
  * search.db_feccandidates.total_receipts `number`: Total Receipts
  * search.db_feccandidates.total_indivual_contributions `number`: Total Indivual Contributions
  * search.db_feccandidates.transfers_from_committees `number`: Transfers From Committees
  * search.db_feccandidates.transfers_to_committees `number`: Transfers To Committees
  * search.db_feccandidates.total_disbursements `number`: Total Disbursements
  * search.db_feccandidates.contributions_from_candidate `number`: Contributions From Candidate
  * search.db_feccandidates.loans_from_candidates `number`: Loans From Candidates
  * search.db_feccandidates.other_loans `number`: Other Loans
  * search.db_feccandidates.candidate_loan_repayments `number`: Candidate Loan Repayments
  * search.db_feccandidates.other_loan_repayments `number`: Other Loan Repayments
  * search.db_feccandidates.debts_owed_by `number`: Debts Owed By
  * search.db_feccandidates.contributions_from_other_committees `number`: Contributions From Other Committees
  * search.db_feccandidates.contributions_from_party_committees `number`: Contributions From Party Committees
  * search.db_feccandidates.coverage_end_date `string`: Coverage End Date
  * search.db_feccandidates.individual_refunds `number`: Individual Refunds
  * search.db_feccandidates.committee_refunds `number`: Committee Refunds

#### Output
*Output schema unknown*

### search_feed
API to search for entries of type RSS/ATOM Feed


```js
geodesystems.search_feed({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip

#### Output
*Output schema unknown*

### search_file
API to search for entries of type File


```js
geodesystems.search_file({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip

#### Output
*Output schema unknown*

### search_fits_data
API to search for entries of type FITS Data File


```js
geodesystems.search_fits_data({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip
  * search.fits_data.origin `string`: Origin
  * search.fits_data.telescope `string`: Telescope
  * search.fits_data.instrument `string`: Instrument

#### Output
*Output schema unknown*

### search_ftp
API to search for entries of type Remote FTP File View


```js
geodesystems.search_ftp({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip

#### Output
*Output schema unknown*

### search_gadgets_countdown
API to search for entries of type Countdown


```js
geodesystems.search_gadgets_countdown({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip

#### Output
*Output schema unknown*

### search_gadgets_stock
API to search for entries of type Stock Ticker


```js
geodesystems.search_gadgets_stock({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip

#### Output
*Output schema unknown*

### search_gadgets_weather
API to search for entries of type Weather


```js
geodesystems.search_gadgets_weather({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip

#### Output
*Output schema unknown*

### search_gazeteer_census_tracts
API to search for entries of type Census Tracts


```js
geodesystems.search_gazeteer_census_tracts({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip
  * search.db_gazeteer_census_tracts.state `string`: State
  * search.db_gazeteer_census_tracts.state_fips `string`: State Fips
  * search.db_gazeteer_census_tracts.county_name `string`: County Name
  * search.db_gazeteer_census_tracts.county_fips `string`: County Fips
  * search.db_gazeteer_census_tracts.census_tract_id `string`: Census Tract Id
  * search.db_gazeteer_census_tracts.full_census_tract_id `string`: Full Census Tract Id
  * search.db_gazeteer_census_tracts.land_area `number`: Land Area
  * search.db_gazeteer_census_tracts.water_area `number`: Water Area
  * search.db_gazeteer_census_tracts.location `string`: Location

#### Output
*Output schema unknown*

### search_gazeteer_counties
API to search for entries of type Census Gazeteer Counties


```js
geodesystems.search_gazeteer_counties({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip
  * search.db_gazeteer_counties.state_abbreviation `string`: State Abbreviation
  * search.db_gazeteer_counties.state_fips `string`: State Fips
  * search.db_gazeteer_counties.county_fips `string`: County Fips
  * search.db_gazeteer_counties.full_county_fips `string`: Full County Fips
  * search.db_gazeteer_counties.county_name `string`: County Name
  * search.db_gazeteer_counties.area_land `number`: Area Land
  * search.db_gazeteer_counties.area_water `number`: Area Water
  * search.db_gazeteer_counties.location `string`: Location

#### Output
*Output schema unknown*

### search_geo_geojson
API to search for entries of type GeoJson File


```js
geodesystems.search_geo_geojson({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip

#### Output
*Output schema unknown*

### search_geo_geotiff
API to search for entries of type GeoTIFF


```js
geodesystems.search_geo_geotiff({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip

#### Output
*Output schema unknown*

### search_geo_gpx
API to search for entries of type GPX GPS File


```js
geodesystems.search_geo_gpx({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip
  * search.geo_gpx.distance `number`: Distance
  * search.geo_gpx.total_time `number`: Total Time
  * search.geo_gpx.moving_time `number`: Moving Time
  * search.geo_gpx.speed `number`: Average Speed
  * search.geo_gpx.elevation_gain `number`: Elevation Gain
  * search.geo_gpx.elevation_loss `number`: Elevation Loss

#### Output
*Output schema unknown*

### search_geo_hdf5
API to search for entries of type HDF5 File


```js
geodesystems.search_geo_hdf5({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip

#### Output
*Output schema unknown*

### search_geo_kml
API to search for entries of type KML/KMZ File


```js
geodesystems.search_geo_kml({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip

#### Output
*Output schema unknown*

### search_geo_shapefile
API to search for entries of type Shapefile


```js
geodesystems.search_geo_shapefile({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip

#### Output
*Output schema unknown*

### search_geo_shapefile_fips
API to search for entries of type Shapefile with FIPS Code


```js
geodesystems.search_geo_shapefile_fips({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip

#### Output
*Output schema unknown*

### search_glossary
API to search for entries of type Glossary


```js
geodesystems.search_glossary({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip

#### Output
*Output schema unknown*

### search_gridaggregation
API to search for entries of type Grid Aggregation


```js
geodesystems.search_gridaggregation({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip

#### Output
*Output schema unknown*

### search_group
API to search for entries of type Folder


```js
geodesystems.search_group({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip

#### Output
*Output schema unknown*

### search_hipchat_group
API to search for entries of type HipChat Group


```js
geodesystems.search_hipchat_group({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip

#### Output
*Output schema unknown*

### search_homepage
API to search for entries of type Home Page


```js
geodesystems.search_homepage({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip

#### Output
*Output schema unknown*

### search_incident
API to search for entries of type Incident


```js
geodesystems.search_incident({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip
  * search.incident.incidenttype `string`: Incident Type
  * search.incident.cause `string`: Cause
  * search.incident.state `string`: State

#### Output
*Output schema unknown*

### search_jeopardy
API to search for entries of type Jeopardy


```js
geodesystems.search_jeopardy({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip
  * search.db_jeopardy.question `string`: Question
  * search.db_jeopardy.answer `string`: Answer
  * search.db_jeopardy.round `string`: Round
  * search.db_jeopardy.category `string`: Category
  * search.db_jeopardy.air_date `string`: Air Date

#### Output
*Output schema unknown*

### search_latlonimage
API to search for entries of type Lat-Lon Image


```js
geodesystems.search_latlonimage({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip

#### Output
*Output schema unknown*

### search_lidar_collection
API to search for entries of type LiDAR Collection


```js
geodesystems.search_lidar_collection({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip

#### Output
*Output schema unknown*

### search_lidar_las
API to search for entries of type LAS Lidar Data


```js
geodesystems.search_lidar_las({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip

#### Output
*Output schema unknown*

### search_lidar_lvis
API to search for entries of type LVIS Lidar Data


```js
geodesystems.search_lidar_lvis({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip

#### Output
*Output schema unknown*

### search_link
API to search for entries of type Link


```js
geodesystems.search_link({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip

#### Output
*Output schema unknown*

### search_localfiles
API to search for entries of type Server Side Files


```js
geodesystems.search_localfiles({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip

#### Output
*Output schema unknown*

### search_locations
API to search for entries of type Locations


```js
geodesystems.search_locations({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip
  * search.db_locations.name `string`: Name
  * search.db_locations.type `string`: Type
  * search.db_locations.location `string`: Location

#### Output
*Output schema unknown*

### search_map_googlemap
API to search for entries of type Google Map URL


```js
geodesystems.search_map_googlemap({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip

#### Output
*Output schema unknown*

### search_media_audiofile
API to search for entries of type Audio File


```js
geodesystems.search_media_audiofile({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip

#### Output
*Output schema unknown*

### search_media_imageloop
API to search for entries of type Image Loop


```js
geodesystems.search_media_imageloop({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip

#### Output
*Output schema unknown*

### search_media_photoalbum
API to search for entries of type Photo Album


```js
geodesystems.search_media_photoalbum({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip

#### Output
*Output schema unknown*

### search_media_video_channel
API to search for entries of type Video Channel


```js
geodesystems.search_media_video_channel({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip

#### Output
*Output schema unknown*

### search_media_video_quicktime
API to search for entries of type Quicktime Video


```js
geodesystems.search_media_video_quicktime({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip

#### Output
*Output schema unknown*

### search_media_youtubevideo
API to search for entries of type YouTube Video


```js
geodesystems.search_media_youtubevideo({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip

#### Output
*Output schema unknown*

### search_notes
API to search for entries of type Notes


```js
geodesystems.search_notes({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip
  * search.db_notes.note `string`: Note

#### Output
*Output schema unknown*

### search_notes_jsonfile
API to search for entries of type Json File


```js
geodesystems.search_notes_jsonfile({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip

#### Output
*Output schema unknown*

### search_notes_note
API to search for entries of type Note


```js
geodesystems.search_notes_note({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip

#### Output
*Output schema unknown*

### search_notes_notebook
API to search for entries of type Notebook


```js
geodesystems.search_notes_notebook({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip

#### Output
*Output schema unknown*

### search_nwsfeed
API to search for entries of type NWS Forecast Feed


```js
geodesystems.search_nwsfeed({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip

#### Output
*Output schema unknown*

### search_opendaplink
API to search for entries of type OPeNDAP Link


```js
geodesystems.search_opendaplink({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip

#### Output
*Output schema unknown*

### search_owl.class
API to search for entries of type OWL Class


```js
geodesystems.search_owl.class({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip

#### Output
*Output schema unknown*

### search_owl.ontology
API to search for entries of type OWL Ontology


```js
geodesystems.search_owl.ontology({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip

#### Output
*Output schema unknown*

### search_pasteitentry
API to search for entries of type Paste Text Entry


```js
geodesystems.search_pasteitentry({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip

#### Output
*Output schema unknown*

### search_point_text
API to search for entries of type Text Point Data


```js
geodesystems.search_point_text({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip

#### Output
*Output schema unknown*

### search_police_stop_data
API to search for entries of type Police Stop Data


```js
geodesystems.search_police_stop_data({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip
  * search.db_police_stop_data.race `string`: Race
  * search.db_police_stop_data.ethnicity `string`: Ethnicity
  * search.db_police_stop_data.sex `string`: Sex
  * search.db_police_stop_data.minutes `integer`: Minutes
  * search.db_police_stop_data.date `string`: Date
  * search.db_police_stop_data.address `string`: Address
  * search.db_police_stop_data.resident `string`: Resident

#### Output
*Output schema unknown*

### search_poll
API to search for entries of type Poll


```js
geodesystems.search_poll({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip

#### Output
*Output schema unknown*

### search_project_campaign
API to search for entries of type Campaign


```js
geodesystems.search_project_campaign({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip

#### Output
*Output schema unknown*

### search_project_casestudy
API to search for entries of type Case Study


```js
geodesystems.search_project_casestudy({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip
  * search.project_casestudy.intended_use `string`: Intended Use
  * search.project_casestudy.location `string`: Where

#### Output
*Output schema unknown*

### search_project_contribution
API to search for entries of type Research Contribution


```js
geodesystems.search_project_contribution({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip

#### Output
*Output schema unknown*

### search_project_dataformat
API to search for entries of type Data Format


```js
geodesystems.search_project_dataformat({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip
  * search.project_dataformat.data_type `string`: Data Type
  * search.project_dataformat.field `string`: Field

#### Output
*Output schema unknown*

### search_project_dataset
API to search for entries of type Dataset


```js
geodesystems.search_project_dataset({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip
  * search.project_dataset.dataset_id `string`: Dataset ID
  * search.project_dataset.data_type `string`: Data Type
  * search.project_dataset.data_level `string`: Data Level

#### Output
*Output schema unknown*

### search_project_deployment
API to search for entries of type Deployment


```js
geodesystems.search_project_deployment({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip

#### Output
*Output schema unknown*

### search_project_experiment
API to search for entries of type Experiment


```js
geodesystems.search_project_experiment({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip

#### Output
*Output schema unknown*

### search_project_fieldnote
API to search for entries of type Field Note


```js
geodesystems.search_project_fieldnote({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip

#### Output
*Output schema unknown*

### search_project_gps_controlpoints
API to search for entries of type Control Points File


```js
geodesystems.search_project_gps_controlpoints({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip

#### Output
*Output schema unknown*

### search_project_gps_raw
API to search for entries of type Raw GPS File


```js
geodesystems.search_project_gps_raw({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip

#### Output
*Output schema unknown*

### search_project_gps_rinex
API to search for entries of type RINEX File


```js
geodesystems.search_project_gps_rinex({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip

#### Output
*Output schema unknown*

### search_project_instrument
API to search for entries of type Instrument Data Collection


```js
geodesystems.search_project_instrument({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip

#### Output
*Output schema unknown*

### search_project_learning_resource
API to search for entries of type Teaching Resource


```js
geodesystems.search_project_learning_resource({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip
  * search.project_learning_resource.topic `string`: Topic
  * search.project_learning_resource.grade_level `string`: Grade Level

#### Output
*Output schema unknown*

### search_project_meeting
API to search for entries of type Meeting


```js
geodesystems.search_project_meeting({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip
  * search.project_meeting.topic `string`: Topic
  * search.project_meeting.location `string`: Location
  * search.project_meeting.participants `string`: Participants

#### Output
*Output schema unknown*

### search_project_organization
API to search for entries of type Organization


```js
geodesystems.search_project_organization({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip
  * search.project_organization.organization_type `string`: Organization Type
  * search.project_organization.status `string`: Status

#### Output
*Output schema unknown*

### search_project_program
API to search for entries of type Program


```js
geodesystems.search_project_program({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip

#### Output
*Output schema unknown*

### search_project_project
API to search for entries of type Project


```js
geodesystems.search_project_project({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip

#### Output
*Output schema unknown*

### search_project_service
API to search for entries of type Data Access Service


```js
geodesystems.search_project_service({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip
  * search.project_service.service_type `string`: Service Type
  * search.project_service.provider `string`: Provider

#### Output
*Output schema unknown*

### search_project_site
API to search for entries of type Site


```js
geodesystems.search_project_site({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip
  * search.project_site.short_name `string`: Short Name
  * search.project_site.site_type `string`: Site Type
  * search.project_site.status `string`: Status
  * search.project_site.network `string`: Network
  * search.project_site.country `string`: Country
  * search.project_site.state `string`: State/Province
  * search.project_site.county `string`: County

#### Output
*Output schema unknown*

### search_project_softwarepackage
API to search for entries of type Software Tool


```js
geodesystems.search_project_softwarepackage({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip
  * search.project_softwarepackage.software_use `string`: Software Use
  * search.project_softwarepackage.software_type `string`: Software Type
  * search.project_softwarepackage.domain `string`: Science Domain
  * search.project_softwarepackage.platform `string`: Platform
  * search.project_softwarepackage.license `string`: License
  * search.project_softwarepackage.status `string`: Development Status
  * search.project_softwarepackage.capabilities `string`: Capabilities

#### Output
*Output schema unknown*

### search_project_standard_name
API to search for entries of type Standard Parameter Name


```js
geodesystems.search_project_standard_name({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip
  * search.project_standard_name.unit `string`: Canonical Unit
  * search.project_standard_name.aliases `string`: Aliases

#### Output
*Output schema unknown*

### search_project_surveylocation
API to search for entries of type Survey Location


```js
geodesystems.search_project_surveylocation({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip

#### Output
*Output schema unknown*

### search_project_term
API to search for entries of type Vocabulary Term


```js
geodesystems.search_project_term({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip
  * search.project_term.value `string`: Term Value

#### Output
*Output schema unknown*

### search_project_visit
API to search for entries of type Site Visit


```js
geodesystems.search_project_visit({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip

#### Output
*Output schema unknown*

### search_project_vocabulary
API to search for entries of type Vocabulary


```js
geodesystems.search_project_vocabulary({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip

#### Output
*Output schema unknown*

### search_property_sales
API to search for entries of type Property Sales


```js
geodesystems.search_property_sales({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip
  * search.db_property_sales.property_address `string`: Property Address
  * search.db_property_sales.city `string`: City
  * search.db_property_sales.zipcode `string`: Zip Code
  * search.db_property_sales.sale_price `number`: Sale Price
  * search.db_property_sales.sale_date `string`: Sale Date
  * search.db_property_sales.seller `string`: Seller
  * search.db_property_sales.buyer `string`: Buyer
  * search.db_property_sales.type `string`: Property Type
  * search.db_property_sales.building_description `string`: Building Description
  * search.db_property_sales.building_design `string`: Building Design
  * search.db_property_sales.subdivision `string`: Subdivision
  * search.db_property_sales.location `string`: Location

#### Output
*Output schema unknown*

### search_propertydb
API to search for entries of type Property Database


```js
geodesystems.search_propertydb({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip
  * search.db_propertydb.property_id `string`: Property ID
  * search.db_propertydb.owner `string`: Owner
  * search.db_propertydb.address `string`: Address
  * search.db_propertydb.city `string`: City
  * search.db_propertydb.state `string`: State
  * search.db_propertydb.value `integer`: Property Value
  * search.db_propertydb.building_type `string`: Building Type
  * search.db_propertydb.house_size `integer`: Building Sq Ft
  * search.db_propertydb.lot_sqft `integer`: Lot Size Sq Ft
  * search.db_propertydb.lot_acres `number`: Lot Size Acres
  * search.db_propertydb.price_sqft `number`: $-sqft
  * search.db_propertydb.location `string`: Location

#### Output
*Output schema unknown*

### search_python_notebook
API to search for entries of type IPython Notebook file


```js
geodesystems.search_python_notebook({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip

#### Output
*Output schema unknown*

### search_slack_team
API to search for entries of type Slack Team


```js
geodesystems.search_slack_team({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip

#### Output
*Output schema unknown*

### search_statusboard
API to search for entries of type Status Board


```js
geodesystems.search_statusboard({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip
  * search.db_statusboard.what `string`: What
  * search.db_statusboard.status `string`: Status

#### Output
*Output schema unknown*

### search_sunrisesunset
API to search for entries of type Sunrise/Sunset Display


```js
geodesystems.search_sunrisesunset({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip

#### Output
*Output schema unknown*

### search_tasks
API to search for entries of type Tasks


```js
geodesystems.search_tasks({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip
  * search.db_tasks.title `string`: Title
  * search.db_tasks.priority `string`: Priority
  * search.db_tasks.status `string`: Status
  * search.db_tasks.complete `number`: % Complete
  * search.db_tasks.assignedto `string`: Assigned To
  * search.db_tasks.startdate `string`: Start Date
  * search.db_tasks.enddate `string`: End Date

#### Output
*Output schema unknown*

### search_tmdbmovies
API to search for entries of type Tmdb Movies


```js
geodesystems.search_tmdbmovies({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip
  * search.db_tmdbmovies.original_title `string`: Original Title
  * search.db_tmdbmovies.overview `string`: Overview
  * search.db_tmdbmovies.budget `number`: Budget
  * search.db_tmdbmovies.genres `string`: Genres
  * search.db_tmdbmovies.homepage `string`: Homepage
  * search.db_tmdbmovies.movie_id `string`: Id
  * search.db_tmdbmovies.keywords `string`: Keywords
  * search.db_tmdbmovies.original_language `string`: Original Language
  * search.db_tmdbmovies.popularity `number`: Popularity
  * search.db_tmdbmovies.production_companies `string`: Production Companies
  * search.db_tmdbmovies.production_countries `string`: Production Countries
  * search.db_tmdbmovies.release_date `string`: Release Date
  * search.db_tmdbmovies.revenue `number`: Revenue
  * search.db_tmdbmovies.runtime `number`: Runtime
  * search.db_tmdbmovies.spoken_languages `string`: Spoken Languages
  * search.db_tmdbmovies.status `string`: Status
  * search.db_tmdbmovies.tagline `string`: Tagline
  * search.db_tmdbmovies.title `string`: Title
  * search.db_tmdbmovies.vote_average `number`: Vote Average
  * search.db_tmdbmovies.vote_count `number`: Vote Count

#### Output
*Output schema unknown*

### search_todo
API to search for entries of type Todo


```js
geodesystems.search_todo({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip
  * search.db_todo.checked `boolean`: Done
  * search.db_todo.title `string`: What
  * search.db_todo.category `string`: Category

#### Output
*Output schema unknown*

### search_trip_event
API to search for entries of type Event


```js
geodesystems.search_trip_event({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip

#### Output
*Output schema unknown*

### search_trip_flight
API to search for entries of type Flight Leg


```js
geodesystems.search_trip_flight({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip

#### Output
*Output schema unknown*

### search_trip_hotel
API to search for entries of type Lodging


```js
geodesystems.search_trip_hotel({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip

#### Output
*Output schema unknown*

### search_trip_report
API to search for entries of type Trip Report


```js
geodesystems.search_trip_report({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip

#### Output
*Output schema unknown*

### search_trip_trip
API to search for entries of type Trip


```js
geodesystems.search_trip_trip({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip

#### Output
*Output schema unknown*

### search_type_awc_metar
API to search for entries of type AWC Weather Observations


```js
geodesystems.search_type_awc_metar({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip
  * search.type_awc_metar.site_id `string`: Site ID

#### Output
*Output schema unknown*

### search_type_biz_stockseries
API to search for entries of type Stock Ticker Data


```js
geodesystems.search_type_biz_stockseries({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip

#### Output
*Output schema unknown*

### search_type_bls_series
API to search for entries of type BLS Series


```js
geodesystems.search_type_bls_series({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip
  * search.type_bls_series.survey_name `string`: Survey Name
  * search.type_bls_series.measure_data_type `string`: Measure Data Type
  * search.type_bls_series.industry `string`: Industry
  * search.type_bls_series.sector `string`: Sector
  * search.type_bls_series.area `string`: Area
  * search.type_bls_series.item `string`: Item
  * search.type_bls_series.seasonality `string`: Seasonality

#### Output
*Output schema unknown*

### search_type_bls_survey
API to search for entries of type BLS Survey


```js
geodesystems.search_type_bls_survey({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip

#### Output
*Output schema unknown*

### search_type_census_acs
API to search for entries of type US Census ACS Data


```js
geodesystems.search_type_census_acs({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip
  * search.type_census_acs.fields `string`: Indicators
  * search.type_census_acs.for_type `string`: For
  * search.type_census_acs.in_type1 `string`: In
  * search.type_census_acs.in_type2 `string`: In #2

#### Output
*Output schema unknown*

### search_type_daymet
API to search for entries of type Daymet Daily Weather


```js
geodesystems.search_type_daymet({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip

#### Output
*Output schema unknown*

### search_type_db_table
API to search for entries of type Database Table


```js
geodesystems.search_type_db_table({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip

#### Output
*Output schema unknown*

### search_type_document_csv
API to search for entries of type CSV File


```js
geodesystems.search_type_document_csv({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip

#### Output
*Output schema unknown*

### search_type_document_doc
API to search for entries of type Word File


```js
geodesystems.search_type_document_doc({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip

#### Output
*Output schema unknown*

### search_type_document_html
API to search for entries of type HTML File


```js
geodesystems.search_type_document_html({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip

#### Output
*Output schema unknown*

### search_type_document_pdf
API to search for entries of type PDF File


```js
geodesystems.search_type_document_pdf({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip

#### Output
*Output schema unknown*

### search_type_document_ppt
API to search for entries of type Powerpoint File


```js
geodesystems.search_type_document_ppt({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip

#### Output
*Output schema unknown*

### search_type_document_xls
API to search for entries of type Excel File


```js
geodesystems.search_type_document_xls({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip

#### Output
*Output schema unknown*

### search_type_drilsdown_casestudy
API to search for entries of type Drilsdown Case Study


```js
geodesystems.search_type_drilsdown_casestudy({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip

#### Output
*Output schema unknown*

### search_type_edgar_filing
API to search for entries of type SEC EDGAR Filing


```js
geodesystems.search_type_edgar_filing({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip
  * search.type_edgar_filing.form_type `string`: Form Type
  * search.type_edgar_filing.company_name `string`: Company Name
  * search.type_edgar_filing.cik_number `string`: CIK Number
  * search.type_edgar_filing.standard_industrial_classification `string`: Standard Industrial Classification
  * search.type_edgar_filing.irs_number `string`: IRS Number
  * search.type_edgar_filing.state `string`: State of Incorporation

#### Output
*Output schema unknown*

### search_type_eia_category
API to search for entries of type EIA Category


```js
geodesystems.search_type_eia_category({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip

#### Output
*Output schema unknown*

### search_type_eia_series
API to search for entries of type EIA Series


```js
geodesystems.search_type_eia_series({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip

#### Output
*Output schema unknown*

### search_type_esri_featureserver
API to search for entries of type ESRI Feature Server


```js
geodesystems.search_type_esri_featureserver({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip

#### Output
*Output schema unknown*

### search_type_esri_geometryserver
API to search for entries of type ESRI Geometry Server


```js
geodesystems.search_type_esri_geometryserver({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip

#### Output
*Output schema unknown*

### search_type_esri_gpserver
API to search for entries of type ESRI GP Server


```js
geodesystems.search_type_esri_gpserver({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip

#### Output
*Output schema unknown*

### search_type_esri_imageserver
API to search for entries of type ESRI Image Server


```js
geodesystems.search_type_esri_imageserver({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip

#### Output
*Output schema unknown*

### search_type_esri_layer
API to search for entries of type ESRI Layer


```js
geodesystems.search_type_esri_layer({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip
  * search.type_esri_layer.layer_type `string`: Layer Type

#### Output
*Output schema unknown*

### search_type_esri_mapserver
API to search for entries of type ESRI Map Server


```js
geodesystems.search_type_esri_mapserver({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip

#### Output
*Output schema unknown*

### search_type_esri_restfolder
API to search for entries of type ESRI Services Folder


```js
geodesystems.search_type_esri_restfolder({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip

#### Output
*Output schema unknown*

### search_type_esri_restserver
API to search for entries of type ESRI Web Server


```js
geodesystems.search_type_esri_restserver({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip

#### Output
*Output schema unknown*

### search_type_esri_restservice
API to search for entries of type ESRI Rest Service


```js
geodesystems.search_type_esri_restservice({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip

#### Output
*Output schema unknown*

### search_type_extremes
API to search for entries of type NOAA Extremes Data


```js
geodesystems.search_type_extremes({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip
  * search.type_extremes.region `string`: US Climate Region
  * search.type_extremes.variable `string`: Variable

#### Output
*Output schema unknown*

### search_type_fred_category
API to search for entries of type FRED Category


```js
geodesystems.search_type_fred_category({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip

#### Output
*Output schema unknown*

### search_type_fred_series
API to search for entries of type FRED Series


```js
geodesystems.search_type_fred_series({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip

#### Output
*Output schema unknown*

### search_type_gtfs_agency
API to search for entries of type Transit Agency


```js
geodesystems.search_type_gtfs_agency({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip

#### Output
*Output schema unknown*

### search_type_gtfs_route
API to search for entries of type Transit Route


```js
geodesystems.search_type_gtfs_route({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip
  * search.type_gtfs_route.route_id `string`: Route ID
  * search.type_gtfs_route.stop_names `string`: Stop Names

#### Output
*Output schema unknown*

### search_type_gtfs_routes
API to search for entries of type Transit Route Collection


```js
geodesystems.search_type_gtfs_routes({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip

#### Output
*Output schema unknown*

### search_type_gtfs_stop
API to search for entries of type Transit Stop


```js
geodesystems.search_type_gtfs_stop({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip
  * search.type_gtfs_stop.stop_id `string`: Stop ID
  * search.type_gtfs_stop.stop_code `string`: Stop Code
  * search.type_gtfs_stop.zone_id `string`: Zone ID
  * search.type_gtfs_stop.location_type `string`: Location Type
  * search.type_gtfs_stop.wheelchair_boarding `string`: Wheelchair Boarding

#### Output
*Output schema unknown*

### search_type_gtfs_stops
API to search for entries of type Transit Stop Collection


```js
geodesystems.search_type_gtfs_stops({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip

#### Output
*Output schema unknown*

### search_type_gtfs_trip
API to search for entries of type Transit Trip


```js
geodesystems.search_type_gtfs_trip({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip
  * search.type_gtfs_trip.trip_id `string`: Trip ID
  * search.type_gtfs_trip.stop_ids `string`: Stop IDS
  * search.type_gtfs_trip.wheelchair_accessible `string`: Wheelchair Accessible
  * search.type_gtfs_trip.bikes_allowed `string`: Bikes Allowed

#### Output
*Output schema unknown*

### search_type_hazarddata
API to search for entries of type Hazard Data


```js
geodesystems.search_type_hazarddata({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip
  * search.type_hazarddata.source `string`: Source Agency

#### Output
*Output schema unknown*

### search_type_hydro_colorado
API to search for entries of type Colorado DNR Stream Gage


```js
geodesystems.search_type_hydro_colorado({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip
  * search.type_hydro_colorado.site_id `string`: Site ID

#### Output
*Output schema unknown*

### search_type_idv_bundle
API to search for entries of type IDV Bundle


```js
geodesystems.search_type_idv_bundle({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip

#### Output
*Output schema unknown*

### search_type_image
API to search for entries of type Image


```js
geodesystems.search_type_image({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip

#### Output
*Output schema unknown*

### search_type_image_airport
API to search for entries of type Airport Image


```js
geodesystems.search_type_image_airport({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip

#### Output
*Output schema unknown*

### search_type_image_webcam
API to search for entries of type Webcam


```js
geodesystems.search_type_image_webcam({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip

#### Output
*Output schema unknown*

### search_type_mb
API to search for entries of type MB Bathymetry


```js
geodesystems.search_type_mb({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip

#### Output
*Output schema unknown*

### search_type_mb_collection
API to search for entries of type Bathymetry Collection


```js
geodesystems.search_type_mb_collection({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip

#### Output
*Output schema unknown*

### search_type_mb_point_basic
API to search for entries of type Basic MB point file


```js
geodesystems.search_type_mb_point_basic({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip

#### Output
*Output schema unknown*

### search_type_metameta_dictionary
API to search for entries of type Metadata Dictionary


```js
geodesystems.search_type_metameta_dictionary({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip
  * search.type_metameta_dictionary.field_index `integer`: Index
  * search.type_metameta_dictionary.dictionary_type `string`: Type
  * search.type_metameta_dictionary.short_name `string`: Short Name
  * search.type_metameta_dictionary.super_type `string`: Super Type
  * search.type_metameta_dictionary.isgroup `boolean`: Is Group
  * search.type_metameta_dictionary.handler_class `string`: Handler Class
  * search.type_metameta_dictionary.properties `string`: Properties
  * search.type_metameta_dictionary.wiki_text `string`: Wiki Text

#### Output
*Output schema unknown*

### search_type_metameta_field
API to search for entries of type Metadata Field


```js
geodesystems.search_type_metameta_field({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip
  * search.type_metameta_field.field_index `integer`: Index
  * search.type_metameta_field.field_id `string`: Field ID
  * search.type_metameta_field.datatype `string`: Data Type
  * search.type_metameta_field.enumeration_values `string`: Enumeration Values
  * search.type_metameta_field.properties `string`: Properties
  * search.type_metameta_field.database_column_size `integer`: Database Column Size
  * search.type_metameta_field.missing `string`: Missing Value
  * search.type_metameta_field.unit `string`: Unit

#### Output
*Output schema unknown*

### search_type_nasaames
API to search for entries of type NASA AMES File


```js
geodesystems.search_type_nasaames({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip

#### Output
*Output schema unknown*

### search_type_ncss
API to search for entries of type NetCDF Point Subset


```js
geodesystems.search_type_ncss({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip

#### Output
*Output schema unknown*

### search_type_nitf
API to search for entries of type NITF File


```js
geodesystems.search_type_nitf({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip

#### Output
*Output schema unknown*

### search_type_point_ameriflux_level2
API to search for entries of type Ameriflux Level 2 CSV File


```js
geodesystems.search_type_point_ameriflux_level2({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip
  * search.type_point_ameriflux_level2.site_id `string`: Site ID
  * search.type_point_ameriflux_level2.contact `string`: Contact
  * search.type_point_ameriflux_level2.ecosystem_type `string`: Ecosystem Type

#### Output
*Output schema unknown*

### search_type_point_amrc_final
API to search for entries of type AMRC Final QC Data


```js
geodesystems.search_type_point_amrc_final({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip
  * search.type_point_amrc_final.site_id `string`: Site ID
  * search.type_point_amrc_final.site_name `string`: Site Name
  * search.type_point_amrc_final.argos_id `string`: Argos ID

#### Output
*Output schema unknown*

### search_type_point_amrc_freewave
API to search for entries of type AMRC Freewave  Data


```js
geodesystems.search_type_point_amrc_freewave({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip
  * search.type_point_amrc_freewave.station_name `string`: Station Name
  * search.type_point_amrc_freewave.format `string`: File Format
  * search.type_point_amrc_freewave.datalogger_model `string`: Data Logger Model
  * search.type_point_amrc_freewave.datalogger_serial `string`: Data Logger Serial

#### Output
*Output schema unknown*

### search_type_point_czo
API to search for entries of type CZO Display File Format


```js
geodesystems.search_type_point_czo({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip

#### Output
*Output schema unknown*

### search_type_point_gcnet
API to search for entries of type GC-Net Point Data


```js
geodesystems.search_type_point_gcnet({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip

#### Output
*Output schema unknown*

### search_type_point_geomag_iaga2002
API to search for entries of type IAGA 2002 Geomagnetism Data


```js
geodesystems.search_type_point_geomag_iaga2002({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip
  * search.type_point_geomag_iaga2002.iaga_code `string`: IAGA Code
  * search.type_point_geomag_iaga2002.station_name `string`: Station Name
  * search.type_point_geomag_iaga2002.source_of_data `string`: Source of data
  * search.type_point_geomag_iaga2002.digital_sampling `string`: Digital Sampling
  * search.type_point_geomag_iaga2002.data_interval `string`: Data Interval
  * search.type_point_geomag_iaga2002.data_type `string`: Data Type

#### Output
*Output schema unknown*

### search_type_point_hydro_waterml
API to search for entries of type WaterML


```js
geodesystems.search_type_point_hydro_waterml({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip
  * search.type_point_hydro_waterml.site_code `string`: Site Code
  * search.type_point_hydro_waterml.site_name `string`: Site Name

#### Output
*Output schema unknown*

### search_type_point_icebridge_atm_icessn
API to search for entries of type ATM Ice SSN Data


```js
geodesystems.search_type_point_icebridge_atm_icessn({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip

#### Output
*Output schema unknown*

### search_type_point_icebridge_atm_qfit
API to search for entries of type ATM QFIT Data


```js
geodesystems.search_type_point_icebridge_atm_qfit({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip

#### Output
*Output schema unknown*

### search_type_point_icebridge_mccords_irmcr2
API to search for entries of type McCords Irmcr2 Data


```js
geodesystems.search_type_point_icebridge_mccords_irmcr2({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip

#### Output
*Output schema unknown*

### search_type_point_icebridge_mccords_irmcr3
API to search for entries of type McCords Irmcr3 Data


```js
geodesystems.search_type_point_icebridge_mccords_irmcr3({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip

#### Output
*Output schema unknown*

### search_type_point_icebridge_paris
API to search for entries of type Paris Data


```js
geodesystems.search_type_point_icebridge_paris({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip

#### Output
*Output schema unknown*

### search_type_point_idv
API to search for entries of type IDV Point File


```js
geodesystems.search_type_point_idv({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip

#### Output
*Output schema unknown*

### search_type_point_inline
API to search for entries of type Inline Point File


```js
geodesystems.search_type_point_inline({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip

#### Output
*Output schema unknown*

### search_type_point_ncdc_climate
API to search for entries of type NC  DC Climate Data


```js
geodesystems.search_type_point_ncdc_climate({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip

#### Output
*Output schema unknown*

### search_type_point_netcdf
API to search for entries of type NetCDF Point File


```js
geodesystems.search_type_point_netcdf({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip

#### Output
*Output schema unknown*

### search_type_point_noaa_carbon
API to search for entries of type NOAA Carbon Measurements


```js
geodesystems.search_type_point_noaa_carbon({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip
  * search.type_point_noaa_carbon.site_id `string`: Site ID
  * search.type_point_noaa_carbon.parameter `string`: Parameter
  * search.type_point_noaa_carbon.project `string`: Project
  * search.type_point_noaa_carbon.lab_id_number `string`: Lab ID Number
  * search.type_point_noaa_carbon.measurement_group `string`: Measurement Group

#### Output
*Output schema unknown*

### search_type_point_noaa_flask_event
API to search for entries of type NOAA Flask Event Measurements


```js
geodesystems.search_type_point_noaa_flask_event({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip
  * search.type_point_noaa_flask_event.site_id `string`: Site ID
  * search.type_point_noaa_flask_event.parameter `string`: Parameter
  * search.type_point_noaa_flask_event.project `string`: Project
  * search.type_point_noaa_flask_event.lab_id_number `string`: Lab ID Number
  * search.type_point_noaa_flask_event.measurement_group `string`: Measurement Group

#### Output
*Output schema unknown*

### search_type_point_noaa_flask_month
API to search for entries of type NOAA Flask Month Measurements


```js
geodesystems.search_type_point_noaa_flask_month({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip
  * search.type_point_noaa_flask_month.site_id `string`: Site ID
  * search.type_point_noaa_flask_month.parameter `string`: Parameter
  * search.type_point_noaa_flask_month.project `string`: Project
  * search.type_point_noaa_flask_month.lab_id_number `string`: Lab ID Number
  * search.type_point_noaa_flask_month.measurement_group `string`: Measurement Group

#### Output
*Output schema unknown*

### search_type_point_noaa_madis
API to search for entries of type NOAA MADIS Point Data


```js
geodesystems.search_type_point_noaa_madis({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip

#### Output
*Output schema unknown*

### search_type_point_noaa_tower
API to search for entries of type NOAA Tower Network


```js
geodesystems.search_type_point_noaa_tower({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip
  * search.type_point_noaa_tower.site_id `string`: Site ID

#### Output
*Output schema unknown*

### search_type_point_ocean_cnv
API to search for entries of type SeaBird CNV Data


```js
geodesystems.search_type_point_ocean_cnv({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip

#### Output
*Output schema unknown*

### search_type_point_ocean_csv_sado_TTS
API to search for entries of type SADO TTS Data


```js
geodesystems.search_type_point_ocean_csv_sado_TTS({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip

#### Output
*Output schema unknown*

### search_type_point_ocean_csv_sado_meteo
API to search for entries of type SADO Meteo Data


```js
geodesystems.search_type_point_ocean_csv_sado_meteo({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip

#### Output
*Output schema unknown*

### search_type_point_ocean_csv_sado_position
API to search for entries of type SADO Position Data


```js
geodesystems.search_type_point_ocean_csv_sado_position({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip

#### Output
*Output schema unknown*

### search_type_point_ocean_netcdf_glider
API to search for entries of type NetCDF Glider Data


```js
geodesystems.search_type_point_ocean_netcdf_glider({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip
  * search.type_point_ocean_netcdf_track.platform `string`: Platform

#### Output
*Output schema unknown*

### search_type_point_ocean_netcdf_track
API to search for entries of type NetCDF Track Data


```js
geodesystems.search_type_point_ocean_netcdf_track({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip
  * search.type_point_ocean_netcdf_track.platform `string`: Platform

#### Output
*Output schema unknown*

### search_type_point_ocean_ooi_dmgx
API to search for entries of type OOI Data


```js
geodesystems.search_type_point_ocean_ooi_dmgx({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip

#### Output
*Output schema unknown*

### search_type_point_openaq
API to search for entries of type Open AQ Air Quality


```js
geodesystems.search_type_point_openaq({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip
  * search.type_point_openaq.location `string`: Location
  * search.type_point_openaq.country `string`: Country
  * search.type_point_openaq.city `string`: City
  * search.type_point_openaq.hours_offset `integer`: Offset Hours

#### Output
*Output schema unknown*

### search_type_point_pbo_position_time_series
API to search for entries of type PBO Position Time Series


```js
geodesystems.search_type_point_pbo_position_time_series({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip
  * search.type_point_pbo_position_time_series.four_char_id `string`: Four Char ID
  * search.type_point_pbo_position_time_series.station_name `string`: Station Name
  * search.type_point_pbo_position_time_series.reference_frame `string`: Reference Frame
  * search.type_point_pbo_position_time_series.format_version `string`: Format Version
  * search.type_point_pbo_position_time_series.processing_center `string`: Processing Center

#### Output
*Output schema unknown*

### search_type_point_simple_records
API to search for entries of type Simple Records


```js
geodesystems.search_type_point_simple_records({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip

#### Output
*Output schema unknown*

### search_type_point_snotel
API to search for entries of type SNOTEL Snow Data


```js
geodesystems.search_type_point_snotel({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip
  * search.type_point_snotel.site_id `string`: Site ID
  * search.type_point_snotel.site_number `string`: Site Number
  * search.type_point_snotel.state `string`: State
  * search.type_point_snotel.network `string`: Network
  * search.type_point_snotel.huc_name `string`: HUC Name
  * search.type_point_snotel.huc_id `string`: HUC ID

#### Output
*Output schema unknown*

### search_type_point_text
API to search for entries of type Record Text File


```js
geodesystems.search_type_point_text({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip

#### Output
*Output schema unknown*

### search_type_point_wsbb_ggp
API to search for entries of type Global Geodynamics GGP Format


```js
geodesystems.search_type_point_wsbb_ggp({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip
  * search.type_point_wsbb_ggp.station `string`: Station
  * search.type_point_wsbb_ggp.instrument `string`: Instrument
  * search.type_point_wsbb_ggp.author `string`: Author

#### Output
*Output schema unknown*

### search_type_psd_monthly_climate_index
API to search for entries of type NOAA-ESRL-PSD Monthly Climate Index


```js
geodesystems.search_type_psd_monthly_climate_index({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip
  * search.type_psd_monthly_climate_index.units `string`: Units

#### Output
*Output schema unknown*

### search_type_quandl_series
API to search for entries of type QUANDL Series


```js
geodesystems.search_type_quandl_series({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip

#### Output
*Output schema unknown*

### search_type_service_group
API to search for entries of type Service Group


```js
geodesystems.search_type_service_group({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip

#### Output
*Output schema unknown*

### search_type_service_link
API to search for entries of type Service Link


```js
geodesystems.search_type_service_link({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip

#### Output
*Output schema unknown*

### search_type_socrata_series
API to search for entries of type SOCRATA Series


```js
geodesystems.search_type_socrata_series({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip

#### Output
*Output schema unknown*

### search_type_sounding_cod
API to search for entries of type COD Sounding


```js
geodesystems.search_type_sounding_cod({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip

#### Output
*Output schema unknown*

### search_type_sounding_frd
API to search for entries of type FRD Sounding


```js
geodesystems.search_type_sounding_frd({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip

#### Output
*Output schema unknown*

### search_type_sounding_gsd
API to search for entries of type GSD Sounding


```js
geodesystems.search_type_sounding_gsd({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip

#### Output
*Output schema unknown*

### search_type_sounding_wyoming
API to search for entries of type UW Sounding


```js
geodesystems.search_type_sounding_wyoming({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip

#### Output
*Output schema unknown*

### search_type_tmy
API to search for entries of type NREL TMY Data


```js
geodesystems.search_type_tmy({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip

#### Output
*Output schema unknown*

### search_type_tweet
API to search for entries of type Tweet


```js
geodesystems.search_type_tweet({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip

#### Output
*Output schema unknown*

### search_type_usgs_gauge
API to search for entries of type USGS Stream Gauge


```js
geodesystems.search_type_usgs_gauge({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip

#### Output
*Output schema unknown*

### search_type_virtual
API to search for entries of type Virtual Group


```js
geodesystems.search_type_virtual({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip

#### Output
*Output schema unknown*

### search_type_wms_capabilities
API to search for entries of type WMS Capabilities


```js
geodesystems.search_type_wms_capabilities({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip

#### Output
*Output schema unknown*

### search_type_wms_layer
API to search for entries of type WMS Layer


```js
geodesystems.search_type_wms_layer({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip

#### Output
*Output schema unknown*

### search_ufo_sightings
API to search for entries of type Ufo Sightings


```js
geodesystems.search_ufo_sightings({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip
  * search.db_ufo_sightings.datetime `string`: Datetime
  * search.db_ufo_sightings.city `string`: City
  * search.db_ufo_sightings.state `string`: State
  * search.db_ufo_sightings.country `string`: Country
  * search.db_ufo_sightings.shape `string`: Shape
  * search.db_ufo_sightings.duration_seconds `number`: Duration (seconds)
  * search.db_ufo_sightings.duration_hours_min `string`: Duration (hours/min)
  * search.db_ufo_sightings.comments `string`: Comments
  * search.db_ufo_sightings.date_posted `string`: Date Posted
  * search.db_ufo_sightings.latitude `number`: Latitude
  * search.db_ufo_sightings.longitude `number`: Longitude

#### Output
*Output schema unknown*

### search_us_places
API to search for entries of type US Places


```js
geodesystems.search_us_places({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip
  * search.db_us_places.feature_name `string`: Place Name
  * search.db_us_places.feature_class `string`: Place Type
  * search.db_us_places.state_alpha `string`: State
  * search.db_us_places.county_name `string`: County Name
  * search.db_us_places.location `string`: Location
  * search.db_us_places.elev_in_ft `number`: Elev In Ft

#### Output
*Output schema unknown*

### search_vote_yesno
API to search for entries of type Simple Yes-No Vote


```js
geodesystems.search_vote_yesno({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip
  * search.db_vote_yesno.vote `string`: My Vote

#### Output
*Output schema unknown*

### search_weblog
API to search for entries of type Weblog


```js
geodesystems.search_weblog({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip

#### Output
*Output schema unknown*

### search_wikipage
API to search for entries of type Wiki Page


```js
geodesystems.search_wikipage({}, context)
```

#### Input
* input `object`
  * text `string`: Search text
  * name `string`: Search name
  * description `string`: Search description
  * fromdate `string`: From date
  * todate `string`: To date
  * createdate.from `string`: Archive create date from
  * createdate.to `string`: Archive create date to
  * changedate.from `string`: Archive change date from
  * changedate.to `string`: Archive change date to
  * group `string`: Parent entry
  * filesuffix `string`: File suffix
  * maxlatitude `number`: Northern bounds of search
  * minlongitude `number`: Western bounds of search
  * minlatitude `number`: Southern bounds of search
  * maxlongitude `number`: Eastern bounds of search
  * max `integer`: Max number of results
  * skip `integer`: Number to skip
  * search.wikipage.wikitext `string`: Wiki Text
  * search.wikipage.category `string`: Wiki Page Category

#### Output
*Output schema unknown*



## Definitions

*This integration has no definitions*
