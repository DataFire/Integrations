# @datafire/geodesystems
Search for data in lots of places - manage your documents, photos and critical business knowledge - communicate and coordinate with blogs, interactive wikis, and data integration dashboards.

## Operation: gps.teqc.qc
API to call: View GPS QC

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "output": {
      "type": "string",
      "description": "Output type  -don't change"
    },
    "entryid": {
      "type": "string",
      "description": "Entry ID"
    }
  },
  "additionalProperties": false,
  "required": [
    "output",
    "entryid"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: search_beforeafter
API to search for entries of type Before and After Images

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_biblio
API to search for entries of type Bibliographic Entry

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    },
    "search.biblio.primary_author": {
      "type": "string",
      "description": "Primary Author"
    },
    "search.biblio.type": {
      "type": "string",
      "description": "Publication Type"
    },
    "search.biblio.institution": {
      "type": "string",
      "description": "Institution"
    },
    "search.biblio.other_authors": {
      "type": "string",
      "description": "Other Authors"
    },
    "search.biblio.publication": {
      "type": "string",
      "description": "Publication"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_bio_dicom
API to search for entries of type DICOM File

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_bio_dicom_test
API to search for entries of type DICOM Test File

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    },
    "search.bio_dicom_test.PatientName": {
      "type": "string",
      "description": "Patient Name"
    },
    "search.bio_dicom_test.PatientID": {
      "type": "string",
      "description": "Patient ID"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_bio_fasta
API to search for entries of type FASTA File

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_bio_fastq
API to search for entries of type FASTQ File

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_bio_hmmer_index
API to search for entries of type HMMER Index File

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_bio_ome_tiff
API to search for entries of type OME TIFF File

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_bio_ontology_assay
API to search for entries of type Assay

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_bio_ontology_cohort
API to search for entries of type Cohort

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_bio_ontology_person
API to search for entries of type Person

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    },
    "search.bio_ontology_person.gender": {
      "type": "string",
      "description": "Gender"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_bio_ontology_sample
API to search for entries of type Sample

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_bio_ontology_series
API to search for entries of type Series

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_bio_ontology_study
API to search for entries of type Study

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_bio_sam
API to search for entries of type SAM Data

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_bio_sf_pdb
API to search for entries of type PDB Protein File

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_bio_sra
API to search for entries of type Sequence Read Archive

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_bio_stockholm
API to search for entries of type Stockholm File

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_bio_taxonomy
API to search for entries of type Taxonomic Entry

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    },
    "search.bio_taxonomy.rank": {
      "type": "string",
      "description": "Rank"
    },
    "search.bio_taxonomy.embl_code": {
      "type": "string",
      "description": "EMBL Code"
    },
    "search.bio_taxonomy.division": {
      "type": "string",
      "description": "Divison"
    },
    "search.bio_taxonomy.inherited_div": {
      "type": "boolean",
      "description": "Inheritied division"
    },
    "search.bio_taxonomy.aliases": {
      "type": "string",
      "description": "Also known"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_blogentry
API to search for entries of type Weblog Entry

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    },
    "search.blogentry.blogtext": {
      "type": "string",
      "description": "Extra Text"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_bookmarks
API to search for entries of type Bookmarks

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    },
    "search.db_bookmarks.title": {
      "type": "string",
      "description": "Title"
    },
    "search.db_bookmarks.url": {
      "type": "string",
      "description": "URL"
    },
    "search.db_bookmarks.category": {
      "type": "string",
      "description": "Category"
    },
    "search.db_bookmarks.date": {
      "type": "string",
      "description": "Date"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_boulder_county_voter_details
API to search for entries of type Boulder County Voter Details

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    },
    "search.db_boulder_county_voter_details.first_name": {
      "type": "string",
      "description": "First Name"
    },
    "search.db_boulder_county_voter_details.last_name": {
      "type": "string",
      "description": "Last Name"
    },
    "search.db_boulder_county_voter_details.registration_date": {
      "type": "string",
      "description": "Registration Date"
    },
    "search.db_boulder_county_voter_details.last_updated_date": {
      "type": "string",
      "description": "Last Updated Date"
    },
    "search.db_boulder_county_voter_details.residential_address": {
      "type": "string",
      "description": "Residential Address"
    },
    "search.db_boulder_county_voter_details.residential_city": {
      "type": "string",
      "description": "Residential City"
    },
    "search.db_boulder_county_voter_details.mailing_zip_code": {
      "type": "string",
      "description": "Mailing Zip Code"
    },
    "search.db_boulder_county_voter_details.voter_status": {
      "type": "string",
      "description": "Voter Status"
    },
    "search.db_boulder_county_voter_details.party": {
      "type": "string",
      "description": "Party"
    },
    "search.db_boulder_county_voter_details.gender": {
      "type": "string",
      "description": "Gender"
    },
    "search.db_boulder_county_voter_details.birth_year": {
      "type": "integer",
      "description": "Birth Year"
    },
    "search.db_boulder_county_voter_details.precinct_code": {
      "type": "string",
      "description": "Precinct Code"
    },
    "search.db_boulder_county_voter_details.congressional": {
      "type": "string",
      "description": "Congressional"
    },
    "search.db_boulder_county_voter_details.state_senate": {
      "type": "string",
      "description": "State Senate"
    },
    "search.db_boulder_county_voter_details.state_house": {
      "type": "string",
      "description": "State House"
    },
    "search.db_boulder_county_voter_details.municipality": {
      "type": "string",
      "description": "Municipality"
    },
    "search.db_boulder_county_voter_details.city_ward_district": {
      "type": "string",
      "description": "City Ward/district"
    },
    "search.db_boulder_county_voter_details.school_district": {
      "type": "string",
      "description": "School District"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_calendar
API to search for entries of type Calendar

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_cdm_grid
API to search for entries of type Gridded Data File

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_community_case
API to search for entries of type Development Review Case

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    },
    "search.community_case.applicant": {
      "type": "string",
      "description": "Applicant"
    },
    "search.community_case.address": {
      "type": "string",
      "description": "Address"
    },
    "search.community_case.case_type": {
      "type": "string",
      "description": "Case Type"
    },
    "search.community_case.contact": {
      "type": "string",
      "description": "Staff Contact"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_community_datahub
API to search for entries of type Data Hub

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_community_resource
API to search for entries of type Facility

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    },
    "search.community_resource.resource_type": {
      "type": "string",
      "description": "Type"
    },
    "search.community_resource.address": {
      "type": "string",
      "description": "Address"
    },
    "search.community_resource.city": {
      "type": "string",
      "description": "City"
    },
    "search.community_resource.state": {
      "type": "string",
      "description": "State or Province"
    },
    "search.community_resource.zipcode": {
      "type": "string",
      "description": "Zip Code"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_contact
API to search for entries of type Contact List

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    },
    "search.db_contact.name": {
      "type": "string",
      "description": "Name"
    },
    "search.db_contact.institution": {
      "type": "string",
      "description": "Institution"
    },
    "search.db_contact.email": {
      "type": "string",
      "description": "Email"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_db_co_indicators
API to search for entries of type Colorado Health Indicators

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    },
    "search.db_db_co_indicators.geo_name": {
      "type": "string",
      "description": "County"
    },
    "search.db_db_co_indicators.domain": {
      "type": "string",
      "description": "Domain"
    },
    "search.db_db_co_indicators.subdomain": {
      "type": "string",
      "description": "Subdomain"
    },
    "search.db_db_co_indicators.indicatorName": {
      "type": "string",
      "description": "Indicator"
    },
    "search.db_db_co_indicators.description": {
      "type": "string",
      "description": "Description"
    },
    "search.db_db_co_indicators.measure": {
      "type": "number",
      "format": "double",
      "description": "Measure"
    },
    "search.db_db_co_indicators.location": {
      "type": "string",
      "description": "Location"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_earth_merra
API to search for entries of type MERRA Data

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    },
    "search.earth_merra.frequency_type": {
      "type": "string",
      "description": "Frequency Type"
    },
    "search.earth_merra.frequency": {
      "type": "string",
      "description": "Frequency"
    },
    "search.earth_merra.dimensions": {
      "type": "string",
      "description": "Dimensions"
    },
    "search.earth_merra.data_group": {
      "type": "string",
      "description": "Group"
    },
    "search.earth_merra.horizontal_resolution": {
      "type": "string",
      "description": "Horizontal Resolution"
    },
    "search.earth_merra.vertical_location": {
      "type": "string",
      "description": "Vertical Location"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_earth_satellite_landsat
API to search for entries of type Landsat Satellite Data

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    },
    "search.earth_satellite_landsat.sensor": {
      "type": "string",
      "description": "Sensor"
    },
    "search.earth_satellite_landsat.satellite": {
      "type": "string",
      "description": "Satellite"
    },
    "search.earth_satellite_landsat.wrs_path_number": {
      "type": "integer",
      "description": "WRS Path"
    },
    "search.earth_satellite_landsat.wrs_row_number": {
      "type": "integer",
      "description": "WRS Row"
    },
    "search.earth_satellite_landsat.ground_station": {
      "type": "string",
      "description": "Ground Station"
    },
    "search.earth_satellite_landsat.archive_version_number": {
      "type": "integer",
      "description": "Archive Version Number"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_earth_satellite_modis_aqua
API to search for entries of type Aqua Modis Satellite Data

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    },
    "search.earth_satellite_modis.data_type": {
      "type": "string",
      "description": "Earth Science Data Type"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_earth_wrf_namelist
API to search for entries of type WRF Namelist File

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_exercise
API to search for entries of type Exercise

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    },
    "search.db_exercise.type": {
      "type": "string",
      "description": "Type"
    },
    "search.db_exercise.date": {
      "type": "string",
      "description": "Date"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_faq
API to search for entries of type FAQ

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_feed
API to search for entries of type RSS/ATOM Feed

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_file
API to search for entries of type File

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_fits_data
API to search for entries of type FITS Data File

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    },
    "search.fits_data.origin": {
      "type": "string",
      "description": "Origin"
    },
    "search.fits_data.telescope": {
      "type": "string",
      "description": "Telescope"
    },
    "search.fits_data.instrument": {
      "type": "string",
      "description": "Instrument"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_frames
API to search for entries of type IFrames

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_ftp
API to search for entries of type Remote FTP File View

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_gadgets_clock
API to search for entries of type Clock

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_gadgets_countdown
API to search for entries of type Countdown

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_gadgets_stock
API to search for entries of type Stock Ticker

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_gadgets_weather
API to search for entries of type Weather

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_gdata_docs
API to search for entries of type Google Docs View

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_gdata_photos
API to search for entries of type Google Web Albums View

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_geo_geotiff
API to search for entries of type GeoTIFF

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_geo_gpx
API to search for entries of type GPX GPS File

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_geo_hdf5
API to search for entries of type HDF5 File

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_geo_kml
API to search for entries of type KML/KMZ File

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_geo_shapefile
API to search for entries of type Shapefile

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_glossary
API to search for entries of type Glossary

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_gridaggregation
API to search for entries of type Grid Aggregation

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_group
API to search for entries of type Folder

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_hipchat_group
API to search for entries of type HipChat Group

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_homepage
API to search for entries of type Home Page

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_incident
API to search for entries of type Incident

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    },
    "search.incident.incidenttype": {
      "type": "string",
      "description": "Incident Type"
    },
    "search.incident.cause": {
      "type": "string",
      "description": "Cause"
    },
    "search.incident.state": {
      "type": "string",
      "description": "State"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_incident_basement
API to search for entries of type Basement Flooding

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    },
    "search.incident_location.state": {
      "type": "string",
      "description": "State"
    },
    "search.incident_basement.type": {
      "type": "string",
      "description": "Type of flooding"
    },
    "search.incident_basement.depth": {
      "type": "integer",
      "description": "Water Depth"
    },
    "search.incident_basement.duration": {
      "type": "integer",
      "description": "Duration"
    },
    "search.incident_basement.cost": {
      "type": "integer",
      "description": "Estimated Cost"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_investigation_case
API to search for entries of type Investigation

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_investigation_cellphonelog
API to search for entries of type Cell Phone Log

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    },
    "search.db_investigation_cellphonelog.from_name": {
      "type": "string",
      "description": "From Name"
    },
    "search.db_investigation_cellphonelog.from_number": {
      "type": "string",
      "description": "From Number"
    },
    "search.db_investigation_cellphonelog.to_name": {
      "type": "string",
      "description": "To Name"
    },
    "search.db_investigation_cellphonelog.to_number": {
      "type": "string",
      "description": "To Number"
    },
    "search.db_investigation_cellphonelog.time": {
      "type": "string",
      "description": "Date"
    },
    "search.db_investigation_cellphonelog.duration": {
      "type": "number",
      "format": "double",
      "description": "Duration"
    },
    "search.db_investigation_cellphonelog.type": {
      "type": "string",
      "description": "Direction"
    },
    "search.db_investigation_cellphonelog.location": {
      "type": "string",
      "description": "Location"
    },
    "search.db_investigation_cellphonelog.tower_city": {
      "type": "string",
      "description": "City"
    },
    "search.db_investigation_cellphonelog.tower_state": {
      "type": "string",
      "description": "State"
    },
    "search.db_investigation_cellphonelog.tower_zipcode": {
      "type": "string",
      "description": "Zip Code"
    },
    "search.db_investigation_cellphonelog.tag": {
      "type": "string",
      "description": "Tag"
    },
    "search.db_investigation_cellphonelog.notes": {
      "type": "string",
      "description": "Notes"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_investigation_event
API to search for entries of type Event

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_investigation_oldphonelog
API to search for entries of type Old Phone Log

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    },
    "search.db_investigation_oldphonelog.time": {
      "type": "string",
      "description": "Date"
    },
    "search.db_investigation_oldphonelog.from_name": {
      "type": "string",
      "description": "From Name"
    },
    "search.db_investigation_oldphonelog.from_number": {
      "type": "string",
      "description": "From Number"
    },
    "search.db_investigation_oldphonelog.from_city": {
      "type": "string",
      "description": "From City"
    },
    "search.db_investigation_oldphonelog.from_state": {
      "type": "string",
      "description": "From State"
    },
    "search.db_investigation_oldphonelog.to_name": {
      "type": "string",
      "description": "To Name"
    },
    "search.db_investigation_oldphonelog.to_number": {
      "type": "string",
      "description": "To Number"
    },
    "search.db_investigation_oldphonelog.to_city": {
      "type": "string",
      "description": "To City"
    },
    "search.db_investigation_oldphonelog.to_state": {
      "type": "string",
      "description": "To State"
    },
    "search.db_investigation_oldphonelog.tag": {
      "type": "string",
      "description": "Tag"
    },
    "search.db_investigation_oldphonelog.notes": {
      "type": "string",
      "description": "Notes"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_investigation_person
API to search for entries of type Person

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_investigation_thing
API to search for entries of type Thing

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_latlonimage
API to search for entries of type WMS Image

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_lidar_collection
API to search for entries of type LiDAR Collection

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_lidar_glas
API to search for entries of type GLAS Lidar Data

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_lidar_las
API to search for entries of type LAS Lidar Data

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_lidar_lvis
API to search for entries of type LVIS Lidar Data

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_link
API to search for entries of type Link

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_localfiles
API to search for entries of type Server Side Files

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_locations
API to search for entries of type Locations

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    },
    "search.db_locations.name": {
      "type": "string",
      "description": "Name"
    },
    "search.db_locations.type": {
      "type": "string",
      "description": "Type"
    },
    "search.db_locations.location": {
      "type": "string",
      "description": "Location"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_map_googlemap
API to search for entries of type Google Map URL

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_media_audiofile
API to search for entries of type Audio File

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_media_imageloop
API to search for entries of type Image Loop

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_media_photoalbum
API to search for entries of type Photo Album

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_media_video_channel
API to search for entries of type Video Channel

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_media_video_quicktime
API to search for entries of type Quicktime Video

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_media_youtubevideo
API to search for entries of type YouTube Video

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_multisearch
API to search for entries of type Multiple Search

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_nga_tracks
API to search for entries of type NGA Tracks

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    },
    "search.db_nga_tracks.track_id": {
      "type": "string",
      "description": "Track ID"
    },
    "search.db_nga_tracks.timestamp": {
      "type": "string",
      "description": "Timestamp"
    },
    "search.db_nga_tracks.location": {
      "type": "string",
      "description": "Location"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_notes
API to search for entries of type Notes

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_notes_note
API to search for entries of type Note

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_opendaplink
API to search for entries of type OPeNDAP Link

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_owl.class
API to search for entries of type OWL Class

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_owl.ontology
API to search for entries of type OWL Ontology

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_pasteitentry
API to search for entries of type Paste Text Entry

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_point_text
API to search for entries of type Text Point Data

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_poll
API to search for entries of type Poll

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_project_campaign
API to search for entries of type Campaign

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_project_casestudy
API to search for entries of type Case Study

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    },
    "search.project_casestudy.intended_use": {
      "type": "string",
      "description": "Intended Use"
    },
    "search.project_casestudy.location": {
      "type": "string",
      "description": "Where"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_project_contribution
API to search for entries of type Research Contribution

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_project_dataformat
API to search for entries of type Data Format

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    },
    "search.project_dataformat.data_type": {
      "type": "string",
      "description": "Data Type"
    },
    "search.project_dataformat.field": {
      "type": "string",
      "description": "Field"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_project_dataset
API to search for entries of type Dataset

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    },
    "search.project_dataset.dataset_id": {
      "type": "string",
      "description": "Dataset ID"
    },
    "search.project_dataset.data_type": {
      "type": "string",
      "description": "Data Type"
    },
    "search.project_dataset.data_level": {
      "type": "string",
      "description": "Data Level"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_project_deployment
API to search for entries of type Deployment

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_project_experiment
API to search for entries of type Experiment

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_project_fieldnote
API to search for entries of type Field Note

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_project_gps_controlpoints
API to search for entries of type Control Points File

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_project_gps_raw
API to search for entries of type Raw GPS File

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_project_gps_rinex
API to search for entries of type RINEX File

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_project_instrument
API to search for entries of type Instrument Data Collection

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_project_learning_resource
API to search for entries of type Teaching Resource

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    },
    "search.project_learning_resource.topic": {
      "type": "string",
      "description": "Topic"
    },
    "search.project_learning_resource.grade_level": {
      "type": "string",
      "description": "Grade Level"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_project_meeting
API to search for entries of type Meeting

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    },
    "search.project_meeting.topic": {
      "type": "string",
      "description": "Topic"
    },
    "search.project_meeting.location": {
      "type": "string",
      "description": "Location"
    },
    "search.project_meeting.participants": {
      "type": "string",
      "description": "Participants"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_project_organization
API to search for entries of type Organization

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    },
    "search.project_organization.organization_type": {
      "type": "string",
      "description": "Organization Type"
    },
    "search.project_organization.status": {
      "type": "string",
      "description": "Status"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_project_program
API to search for entries of type Program

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_project_project
API to search for entries of type Project

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_project_service
API to search for entries of type Data Access Service

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    },
    "search.project_service.service_type": {
      "type": "string",
      "description": "Service Type"
    },
    "search.project_service.provider": {
      "type": "string",
      "description": "Provider"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_project_site
API to search for entries of type Site

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    },
    "search.project_site.short_name": {
      "type": "string",
      "description": "Short Name"
    },
    "search.project_site.site_type": {
      "type": "string",
      "description": "Site Type"
    },
    "search.project_site.status": {
      "type": "string",
      "description": "Status"
    },
    "search.project_site.network": {
      "type": "string",
      "description": "Network"
    },
    "search.project_site.country": {
      "type": "string",
      "description": "Country"
    },
    "search.project_site.state": {
      "type": "string",
      "description": "State/Province"
    },
    "search.project_site.county": {
      "type": "string",
      "description": "County"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_project_softwarepackage
API to search for entries of type Software Tool

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    },
    "search.project_softwarepackage.software_use": {
      "type": "string",
      "description": "Software Use"
    },
    "search.project_softwarepackage.software_type": {
      "type": "string",
      "description": "Software Type"
    },
    "search.project_softwarepackage.domain": {
      "type": "string",
      "description": "Science Domain"
    },
    "search.project_softwarepackage.platform": {
      "type": "string",
      "description": "Platform"
    },
    "search.project_softwarepackage.license": {
      "type": "string",
      "description": "License"
    },
    "search.project_softwarepackage.status": {
      "type": "string",
      "description": "Development Status"
    },
    "search.project_softwarepackage.capabilities": {
      "type": "string",
      "description": "Capabilities"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_project_standard_name
API to search for entries of type Standard Parameter Name

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    },
    "search.project_standard_name.unit": {
      "type": "string",
      "description": "Canonical Unit"
    },
    "search.project_standard_name.aliases": {
      "type": "string",
      "description": "Aliases"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_project_surveylocation
API to search for entries of type Survey Location

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_project_term
API to search for entries of type Vocabulary Term

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    },
    "search.project_term.value": {
      "type": "string",
      "description": "Term Value"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_project_visit
API to search for entries of type Site Visit

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_project_vocabulary
API to search for entries of type Vocabulary

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_property_sales
API to search for entries of type Property Sales

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    },
    "search.db_property_sales.property_address": {
      "type": "string",
      "description": "Property Address"
    },
    "search.db_property_sales.city": {
      "type": "string",
      "description": "City"
    },
    "search.db_property_sales.zipcode": {
      "type": "string",
      "description": "Zip Code"
    },
    "search.db_property_sales.sale_price": {
      "type": "number",
      "format": "double",
      "description": "Sale Price"
    },
    "search.db_property_sales.sale_date": {
      "type": "string",
      "description": "Sale Date"
    },
    "search.db_property_sales.seller": {
      "type": "string",
      "description": "Seller"
    },
    "search.db_property_sales.buyer": {
      "type": "string",
      "description": "Buyer"
    },
    "search.db_property_sales.type": {
      "type": "string",
      "description": "Property Type"
    },
    "search.db_property_sales.building_description": {
      "type": "string",
      "description": "Building Description"
    },
    "search.db_property_sales.building_design": {
      "type": "string",
      "description": "Building Design"
    },
    "search.db_property_sales.subdivision": {
      "type": "string",
      "description": "Subdivision"
    },
    "search.db_property_sales.location": {
      "type": "string",
      "description": "Location"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_propertydb
API to search for entries of type Property Database

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    },
    "search.db_propertydb.property_id": {
      "type": "string",
      "description": "Property ID"
    },
    "search.db_propertydb.owner": {
      "type": "string",
      "description": "Owner"
    },
    "search.db_propertydb.address": {
      "type": "string",
      "description": "Address"
    },
    "search.db_propertydb.city": {
      "type": "string",
      "description": "City"
    },
    "search.db_propertydb.state": {
      "type": "string",
      "description": "State"
    },
    "search.db_propertydb.value": {
      "type": "integer",
      "description": "Property Value"
    },
    "search.db_propertydb.building_type": {
      "type": "string",
      "description": "Building Type"
    },
    "search.db_propertydb.house_size": {
      "type": "integer",
      "description": "Building Sq Ft"
    },
    "search.db_propertydb.lot_sqft": {
      "type": "integer",
      "description": "Lot Size Sq Ft"
    },
    "search.db_propertydb.lot_acres": {
      "type": "number",
      "format": "double",
      "description": "Lot Size Acres"
    },
    "search.db_propertydb.price_sqft": {
      "type": "number",
      "format": "double",
      "description": "$-sqft"
    },
    "search.db_propertydb.location": {
      "type": "string",
      "description": "Location"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_python_notebook
API to search for entries of type IPython Notebook file

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_registrations
API to search for entries of type Registrations

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    },
    "search.db_registrations.date": {
      "type": "string",
      "description": "Date"
    },
    "search.db_registrations.type": {
      "type": "string",
      "description": "Type"
    },
    "search.db_registrations.name": {
      "type": "string",
      "description": "Name"
    },
    "search.db_registrations.email": {
      "type": "string",
      "description": "Email"
    },
    "search.db_registrations.organization": {
      "type": "string",
      "description": "Organization"
    },
    "search.db_registrations.country": {
      "type": "string",
      "description": "Country"
    },
    "search.db_registrations.state_province": {
      "type": "string",
      "description": "State or Province"
    },
    "search.db_registrations.postal_code": {
      "type": "string",
      "description": "Postal Code"
    },
    "search.db_registrations.url": {
      "type": "string",
      "description": "RAMADDA Site URL"
    },
    "search.db_registrations.users": {
      "type": "integer",
      "description": "# users"
    },
    "search.db_registrations.organization_type": {
      "type": "string",
      "description": "Organization type"
    },
    "search.db_registrations.support_tier": {
      "type": "string",
      "description": "Support tier"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_slack_team
API to search for entries of type Slack Team

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_statusboard
API to search for entries of type Status Board

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    },
    "search.db_statusboard.what": {
      "type": "string",
      "description": "What"
    },
    "search.db_statusboard.status": {
      "type": "string",
      "description": "Status"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_tasks
API to search for entries of type Tasks

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    },
    "search.db_tasks.title": {
      "type": "string",
      "description": "Title"
    },
    "search.db_tasks.priority": {
      "type": "string",
      "description": "Priority"
    },
    "search.db_tasks.status": {
      "type": "string",
      "description": "Status"
    },
    "search.db_tasks.complete": {
      "type": "number",
      "format": "double",
      "description": "% Complete"
    },
    "search.db_tasks.assignedto": {
      "type": "string",
      "description": "Assigned To"
    },
    "search.db_tasks.startdate": {
      "type": "string",
      "description": "Start Date"
    },
    "search.db_tasks.enddate": {
      "type": "string",
      "description": "End Date"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_todo
API to search for entries of type Todo

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    },
    "search.db_todo.checked": {
      "type": "boolean",
      "description": "Done"
    },
    "search.db_todo.title": {
      "type": "string",
      "description": "What"
    },
    "search.db_todo.category": {
      "type": "string",
      "description": "Category"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_trip_event
API to search for entries of type Event

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_trip_flight
API to search for entries of type Flight Leg

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_trip_hotel
API to search for entries of type Lodging

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_trip_report
API to search for entries of type Trip Report

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_trip_trip
API to search for entries of type Trip

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_type_artists_space
API to search for entries of type Artists Space

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    },
    "search.type_artists_space.address": {
      "type": "string",
      "description": "Address"
    },
    "search.type_artists_space.sqft": {
      "type": "integer",
      "description": "Area"
    },
    "search.type_artists_space.occupancy": {
      "type": "integer",
      "description": "Occupancy"
    },
    "search.type_artists_space.use": {
      "type": "string",
      "description": "Use"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_type_awc_metar
API to search for entries of type AWC Weather Observations

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    },
    "search.type_awc_metar.site_id": {
      "type": "string",
      "description": "Site ID"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_type_awhere_farm
API to search for entries of type aWhere Farm

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_type_awhere_field
API to search for entries of type aWhere Field

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_type_biz_stockseries
API to search for entries of type Stock Ticker Data

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_type_census_acs
API to search for entries of type US Census ACS Data

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    },
    "search.type_census_acs.fields": {
      "type": "string",
      "description": "Indicators"
    },
    "search.type_census_acs.for_type": {
      "type": "string",
      "description": "For"
    },
    "search.type_census_acs.in_type1": {
      "type": "string",
      "description": "In"
    },
    "search.type_census_acs.in_type2": {
      "type": "string",
      "description": "In #2"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_type_db_table
API to search for entries of type Database Table

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_type_document_csv
API to search for entries of type CSV File

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_type_document_doc
API to search for entries of type Microsoft Word File

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_type_document_html
API to search for entries of type HTML File

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_type_document_pdf
API to search for entries of type PDF File

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_type_document_ppt
API to search for entries of type Microsoft Powerpoint File

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_type_document_xls
API to search for entries of type Microsoft Excel File

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_type_drilsdown_casestudy
API to search for entries of type Drilsdown Case Study

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_type_edgar_filing
API to search for entries of type SEC EDGAR Filing

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    },
    "search.type_edgar_filing.form_type": {
      "type": "string",
      "description": "Form Type"
    },
    "search.type_edgar_filing.company_name": {
      "type": "string",
      "description": "Company Name"
    },
    "search.type_edgar_filing.cik_number": {
      "type": "string",
      "description": "CIK Number"
    },
    "search.type_edgar_filing.standard_industrial_classification": {
      "type": "string",
      "description": "Standard Industrial Classification"
    },
    "search.type_edgar_filing.irs_number": {
      "type": "string",
      "description": "IRS Number"
    },
    "search.type_edgar_filing.state": {
      "type": "string",
      "description": "State of Incorporation"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_type_eia_category
API to search for entries of type EIA Category

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_type_eia_series
API to search for entries of type EIA Series

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_type_esri_featureserver
API to search for entries of type ESRI Feature Server

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_type_esri_geometryserver
API to search for entries of type ESRI Geometry Server

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_type_esri_gpserver
API to search for entries of type ESRI GP Server

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_type_esri_imageserver
API to search for entries of type ESRI Image Server

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_type_esri_layer
API to search for entries of type ESRI Layer

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    },
    "search.type_esri_layer.layer_type": {
      "type": "string",
      "description": "Layer Type"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_type_esri_mapserver
API to search for entries of type ESRI Map Server

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_type_esri_restfolder
API to search for entries of type ESRI Services Folder

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_type_esri_restserver
API to search for entries of type ESRI Web Server

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_type_esri_restservice
API to search for entries of type ESRI Rest Service

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_type_fred_category
API to search for entries of type FRED Category

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_type_fred_series
API to search for entries of type FRED Series

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_type_gtfs_agency
API to search for entries of type Transit Agency

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_type_gtfs_route
API to search for entries of type Transit Route

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    },
    "search.type_gtfs_route.route_id": {
      "type": "string",
      "description": "Route ID"
    },
    "search.type_gtfs_route.stop_names": {
      "type": "string",
      "description": "Stop Names"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_type_gtfs_routes
API to search for entries of type Transit Route Collection

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_type_gtfs_stop
API to search for entries of type Transit Stop

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    },
    "search.type_gtfs_stop.stop_id": {
      "type": "string",
      "description": "Stop ID"
    },
    "search.type_gtfs_stop.stop_code": {
      "type": "string",
      "description": "Stop Code"
    },
    "search.type_gtfs_stop.zone_id": {
      "type": "string",
      "description": "Zone ID"
    },
    "search.type_gtfs_stop.location_type": {
      "type": "string",
      "description": "Location Type"
    },
    "search.type_gtfs_stop.wheelchair_boarding": {
      "type": "string",
      "description": "Wheelchair Boarding"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_type_gtfs_stops
API to search for entries of type Transit Stop Collection

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_type_gtfs_trip
API to search for entries of type Transit Trip

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    },
    "search.type_gtfs_trip.stop_ids": {
      "type": "string",
      "description": "Stop IDS"
    },
    "search.type_gtfs_trip.wheelchair_accessible": {
      "type": "string",
      "description": "Wheelchair Accessible"
    },
    "search.type_gtfs_trip.bikes_allowed": {
      "type": "string",
      "description": "Bikes Allowed"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_type_hazarddata
API to search for entries of type Hazard Data

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    },
    "search.type_hazarddata.source": {
      "type": "string",
      "description": "Source Agency"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_type_hydro_colorado
API to search for entries of type Colorado DNR Stream Gage

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    },
    "search.type_hydro_colorado.site_id": {
      "type": "string",
      "description": "Site ID"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_type_idv_bundle
API to search for entries of type IDV Bundle

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_type_image
API to search for entries of type Image

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_type_image_airport
API to search for entries of type Airport Image

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_type_mb
API to search for entries of type MB Bathymetry

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_type_mb_collection
API to search for entries of type Bathymetry Collection

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_type_mb_point_basic
API to search for entries of type Basic MB point file

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_type_metameta_collection
API to search for entries of type Data Dictionary: Metadata Collection

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_type_metameta_dictionary
API to search for entries of type Data Dictionary: Metadata Dictionary

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    },
    "search.type_metameta_dictionary.field_index": {
      "type": "integer",
      "description": "Index"
    },
    "search.type_metameta_dictionary.dictionary_type": {
      "type": "string",
      "description": "Type"
    },
    "search.type_metameta_dictionary.short_name": {
      "type": "string",
      "description": "Short Name"
    },
    "search.type_metameta_dictionary.super_type": {
      "type": "string",
      "description": "Super Type"
    },
    "search.type_metameta_dictionary.isgroup": {
      "type": "boolean",
      "description": "Is Group"
    },
    "search.type_metameta_dictionary.handler_class": {
      "type": "string",
      "description": "Handler Class"
    },
    "search.type_metameta_dictionary.properties": {
      "type": "string",
      "description": "Properties"
    },
    "search.type_metameta_dictionary.wiki_text": {
      "type": "string",
      "description": "Wiki Text"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_type_metameta_field
API to search for entries of type Data Dictionary: Metadata Field

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    },
    "search.type_metameta_field.field_index": {
      "type": "integer",
      "description": "Index"
    },
    "search.type_metameta_field.field_id": {
      "type": "string",
      "description": "Field ID"
    },
    "search.type_metameta_field.datatype": {
      "type": "string",
      "description": "Data Type"
    },
    "search.type_metameta_field.enumeration_values": {
      "type": "string",
      "description": "Enumeration Values"
    },
    "search.type_metameta_field.properties": {
      "type": "string",
      "description": "Properties"
    },
    "search.type_metameta_field.database_column_size": {
      "type": "integer",
      "description": "Database Column Size"
    },
    "search.type_metameta_field.missing": {
      "type": "string",
      "description": "Missing Value"
    },
    "search.type_metameta_field.unit": {
      "type": "string",
      "description": "Unit"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_type_nist_constant
API to search for entries of type CODATA Fundamental Physical Constants

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    },
    "search.type_nist_constant.unit": {
      "type": "string",
      "description": "Unit"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_type_nist_energy
API to search for entries of type NIST Ionization Energy Data

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    },
    "search.type_nist_energy.energy": {
      "type": "string",
      "description": "Ionization Energy (eV)"
    },
    "search.type_nist_energy.shells": {
      "type": "string",
      "description": "Ground Shells"
    },
    "search.type_nist_energy.level": {
      "type": "string",
      "description": "Ground Level"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_type_nist_isotope
API to search for entries of type NIST Isotope

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_type_nist_janaffile
API to search for entries of type NIST JANAF Thermochemical Table

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_type_nitf
API to search for entries of type NITF File

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_type_point_ameriflux_level2
API to search for entries of type Ameriflux Level 2 CSV File

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    },
    "search.type_point_ameriflux_level2.site_id": {
      "type": "string",
      "description": "Site ID"
    },
    "search.type_point_ameriflux_level2.contact": {
      "type": "string",
      "description": "Contact"
    },
    "search.type_point_ameriflux_level2.ecosystem_type": {
      "type": "string",
      "description": "Ecosystem Type"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_type_point_amrc_final
API to search for entries of type AMRC Final QC Data

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    },
    "search.type_point_amrc_final.site_id": {
      "type": "string",
      "description": "Site ID"
    },
    "search.type_point_amrc_final.site_name": {
      "type": "string",
      "description": "Site Name"
    },
    "search.type_point_amrc_final.argos_id": {
      "type": "string",
      "description": "Argos ID"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_type_point_amrc_freewave
API to search for entries of type AMRC Freewave  Data

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    },
    "search.type_point_amrc_freewave.station_name": {
      "type": "string",
      "description": "Station Name"
    },
    "search.type_point_amrc_freewave.format": {
      "type": "string",
      "description": "File Format"
    },
    "search.type_point_amrc_freewave.datalogger_model": {
      "type": "string",
      "description": "Data Logger Model"
    },
    "search.type_point_amrc_freewave.datalogger_serial": {
      "type": "string",
      "description": "Data Logger Serial"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_type_point_collection
API to search for entries of type Point Data Collection

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_type_point_czo
API to search for entries of type CZO Display File Format

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_type_point_gcnet
API to search for entries of type GC-Net Point Data

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_type_point_geomag_iaga2002
API to search for entries of type IAGA 2002 Geomagnetism Data

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    },
    "search.type_point_geomag_iaga2002.iaga_code": {
      "type": "string",
      "description": "IAGA Code"
    },
    "search.type_point_geomag_iaga2002.station_name": {
      "type": "string",
      "description": "Station Name"
    },
    "search.type_point_geomag_iaga2002.source_of_data": {
      "type": "string",
      "description": "Source of data"
    },
    "search.type_point_geomag_iaga2002.digital_sampling": {
      "type": "string",
      "description": "Digital Sampling"
    },
    "search.type_point_geomag_iaga2002.data_interval": {
      "type": "string",
      "description": "Data Interval"
    },
    "search.type_point_geomag_iaga2002.data_type": {
      "type": "string",
      "description": "Data Type"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_type_point_hydro_waterml
API to search for entries of type WaterML

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    },
    "search.type_point_hydro_waterml.site_code": {
      "type": "string",
      "description": "Site Code"
    },
    "search.type_point_hydro_waterml.site_name": {
      "type": "string",
      "description": "Site Name"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_type_point_icebridge_atm_icessn
API to search for entries of type ATM Ice SSN Data

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_type_point_icebridge_atm_qfit
API to search for entries of type ATM QFIT Data

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_type_point_icebridge_mccords_irmcr2
API to search for entries of type McCords Irmcr2 Data

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_type_point_icebridge_mccords_irmcr3
API to search for entries of type McCords Irmcr3 Data

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_type_point_icebridge_paris
API to search for entries of type Paris Data

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_type_point_idv
API to search for entries of type IDV Point File

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_type_point_ncdc_climate
API to search for entries of type NC  DC Climate Data

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_type_point_netcdf
API to search for entries of type NetCDF Point File

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_type_point_noaa_carbon
API to search for entries of type NOAA Carbon Measurements

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    },
    "search.type_point_noaa_carbon.site_id": {
      "type": "string",
      "description": "Site ID"
    },
    "search.type_point_noaa_carbon.parameter": {
      "type": "string",
      "description": "Parameter"
    },
    "search.type_point_noaa_carbon.project": {
      "type": "string",
      "description": "Project"
    },
    "search.type_point_noaa_carbon.lab_id_number": {
      "type": "string",
      "description": "Lab ID Number"
    },
    "search.type_point_noaa_carbon.measurement_group": {
      "type": "string",
      "description": "Measurement Group"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_type_point_noaa_flask_event
API to search for entries of type NOAA Flask Event Measurements

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    },
    "search.type_point_noaa_flask_event.site_id": {
      "type": "string",
      "description": "Site ID"
    },
    "search.type_point_noaa_flask_event.parameter": {
      "type": "string",
      "description": "Parameter"
    },
    "search.type_point_noaa_flask_event.project": {
      "type": "string",
      "description": "Project"
    },
    "search.type_point_noaa_flask_event.lab_id_number": {
      "type": "string",
      "description": "Lab ID Number"
    },
    "search.type_point_noaa_flask_event.measurement_group": {
      "type": "string",
      "description": "Measurement Group"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_type_point_noaa_flask_month
API to search for entries of type NOAA Flask Month Measurements

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    },
    "search.type_point_noaa_flask_month.site_id": {
      "type": "string",
      "description": "Site ID"
    },
    "search.type_point_noaa_flask_month.parameter": {
      "type": "string",
      "description": "Parameter"
    },
    "search.type_point_noaa_flask_month.project": {
      "type": "string",
      "description": "Project"
    },
    "search.type_point_noaa_flask_month.lab_id_number": {
      "type": "string",
      "description": "Lab ID Number"
    },
    "search.type_point_noaa_flask_month.measurement_group": {
      "type": "string",
      "description": "Measurement Group"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_type_point_noaa_madis
API to search for entries of type NOAA MADIS Point Data

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_type_point_noaa_tower
API to search for entries of type NOAA Tower Network

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    },
    "search.type_point_noaa_tower.site_id": {
      "type": "string",
      "description": "Site ID"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_type_point_ocean_cnv
API to search for entries of type SeaBird CNV Data

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_type_point_ocean_csv_sado_TTS
API to search for entries of type SADO TTS Data

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_type_point_ocean_csv_sado_meteo
API to search for entries of type SADO Meteo Data

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_type_point_ocean_csv_sado_position
API to search for entries of type SADO Position Data

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_type_point_ocean_netcdf_glider
API to search for entries of type NetCDF Glider Data

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    },
    "search.type_point_ocean_netcdf_track.platform": {
      "type": "string",
      "description": "Platform"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_type_point_ocean_netcdf_track
API to search for entries of type NetCDF Track Data

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    },
    "search.type_point_ocean_netcdf_track.platform": {
      "type": "string",
      "description": "Platform"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_type_point_ocean_ooi_dmgx
API to search for entries of type OOI Data

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_type_point_pbo_position_time_series
API to search for entries of type PBO Position Time Series

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    },
    "search.type_point_pbo_position_time_series.four_char_id": {
      "type": "string",
      "description": "Four Char ID"
    },
    "search.type_point_pbo_position_time_series.station_name": {
      "type": "string",
      "description": "Station Name"
    },
    "search.type_point_pbo_position_time_series.reference_frame": {
      "type": "string",
      "description": "Reference Frame"
    },
    "search.type_point_pbo_position_time_series.format_version": {
      "type": "string",
      "description": "Format Version"
    },
    "search.type_point_pbo_position_time_series.processing_center": {
      "type": "string",
      "description": "Processing Center"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_type_point_snotel
API to search for entries of type SNOTEL Snow Data

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    },
    "search.type_point_snotel.site_id": {
      "type": "string",
      "description": "Site ID"
    },
    "search.type_point_snotel.site_number": {
      "type": "string",
      "description": "Site Number"
    },
    "search.type_point_snotel.state": {
      "type": "string",
      "description": "State"
    },
    "search.type_point_snotel.network": {
      "type": "string",
      "description": "Network"
    },
    "search.type_point_snotel.huc_name": {
      "type": "string",
      "description": "HUC Name"
    },
    "search.type_point_snotel.huc_id": {
      "type": "string",
      "description": "HUC ID"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_type_point_wsbb_ggp
API to search for entries of type Global Geodynamics GGP Format

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    },
    "search.type_point_wsbb_ggp.station": {
      "type": "string",
      "description": "Station"
    },
    "search.type_point_wsbb_ggp.instrument": {
      "type": "string",
      "description": "Instrument"
    },
    "search.type_point_wsbb_ggp.author": {
      "type": "string",
      "description": "Author"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_type_power_miso_forecast
API to search for entries of type MISO Foreacast XML

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_type_psd_monthly_climate_index
API to search for entries of type NOAA-ESRL-PSD Monthly Climate Index

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    },
    "search.type_psd_monthly_climate_index.units": {
      "type": "string",
      "description": "Units"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_type_quandl_series
API to search for entries of type QUANDL Series

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_type_resilience_assessment
API to search for entries of type Resiliency Assessment

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    },
    "search.type_resilience_assessment.organization": {
      "type": "string",
      "description": "Organization"
    },
    "search.type_resilience_assessment.country": {
      "type": "string",
      "description": "Country"
    },
    "search.type_resilience_assessment.location": {
      "type": "string",
      "description": "Location"
    },
    "search.type_resilience_assessment.bioregion": {
      "type": "string",
      "description": "Bioregion"
    },
    "search.type_resilience_assessment.assessment_type": {
      "type": "string",
      "description": "Type"
    },
    "search.type_resilience_assessment.resilience_definition": {
      "type": "string",
      "description": "Resilience definition"
    },
    "search.type_resilience_assessment.theory_development": {
      "type": "string",
      "description": "Theory development"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_type_resilience_project
API to search for entries of type Resiliency Project

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    },
    "search.type_resilience_project.status": {
      "type": "string",
      "description": "Status"
    },
    "search.type_resilience_project.project_type": {
      "type": "string",
      "description": "Project Type"
    },
    "search.type_resilience_project.country": {
      "type": "string",
      "description": "Country"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_type_reuters_document
API to search for entries of type Reuters Document

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_type_service_group
API to search for entries of type Service Group

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_type_service_link
API to search for entries of type Service Link

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_type_socrata_series
API to search for entries of type SOCRATA Series

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_type_urbaninstitute_employment
API to search for entries of type MetroTrends Employment Data

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    },
    "search.type_urbaninstitute_employment.region": {
      "type": "string",
      "description": "Region"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_type_usda_arms_crop
API to search for entries of type USDA ARMS Crop Data

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    },
    "search.type_usda_arms_crop.report": {
      "type": "string",
      "description": "Report"
    },
    "search.type_usda_arms_crop.subject": {
      "type": "string",
      "description": "Subject"
    },
    "search.type_usda_arms_crop.state": {
      "type": "string",
      "description": "State"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_type_usda_arms_finance
API to search for entries of type USDA ARMS Finance Data

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    },
    "search.type_usda_arms_finance.report": {
      "type": "string",
      "description": "Report"
    },
    "search.type_usda_arms_finance.subject": {
      "type": "string",
      "description": "Subject"
    },
    "search.type_usda_arms_finance.state": {
      "type": "string",
      "description": "State"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_type_usda_nass
API to search for entries of type USDA NASS Data

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    },
    "search.type_usda_nass.source": {
      "type": "string",
      "description": "Source"
    },
    "search.type_usda_nass.commodity": {
      "type": "string",
      "description": "Commodities"
    },
    "search.type_usda_nass.state": {
      "type": "string",
      "description": "State"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_type_virtual
API to search for entries of type Virtual Group

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_type_wms_capabilities
API to search for entries of type WMS Capabilities

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_type_wms_layer
API to search for entries of type WMS Layer

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_vote_yesno
API to search for entries of type Simple Yes-No Vote

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    },
    "search.db_vote_yesno.vote": {
      "type": "string",
      "description": "My Vote"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_weblog
API to search for entries of type Weblog

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: search_wikipage
API to search for entries of type Wiki Page

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "text": {
      "type": "string",
      "description": "Search text"
    },
    "name": {
      "type": "string",
      "description": "Search name"
    },
    "description": {
      "type": "string",
      "description": "Search description"
    },
    "fromdate": {
      "type": "string",
      "format": "date-time",
      "description": "From date"
    },
    "todate": {
      "type": "string",
      "format": "date-time",
      "description": "To date"
    },
    "createdate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date from"
    },
    "createdate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive create date to"
    },
    "changedate.from": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date from"
    },
    "changedate.to": {
      "type": "string",
      "format": "date-time",
      "description": "Archive change date to"
    },
    "group": {
      "type": "string",
      "description": "Parent entry"
    },
    "filesuffix": {
      "type": "string",
      "description": "File suffix"
    },
    "maxlatitude": {
      "type": "number",
      "format": "float",
      "description": "Northern bounds of search"
    },
    "minlongitude": {
      "type": "number",
      "format": "float",
      "description": "Western bounds of search"
    },
    "minlatitude": {
      "type": "number",
      "format": "float",
      "description": "Southern bounds of search"
    },
    "maxlongitude": {
      "type": "number",
      "format": "float",
      "description": "Eastern bounds of search"
    },
    "max": {
      "type": "integer",
      "description": "Max number of results"
    },
    "skip": {
      "type": "integer",
      "description": "Number to skip"
    },
    "search.wikipage.wikitext": {
      "type": "string",
      "description": "Wiki Text"
    },
    "search.wikipage.category": {
      "type": "string",
      "description": "Wiki Page Category"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
