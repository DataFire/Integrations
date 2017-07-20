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


### search_biblio
API to search for entries of type Bibliographic Entry


```js
geodesystems.search_biblio({}, context)
```


### search_bio_dicom
API to search for entries of type DICOM File


```js
geodesystems.search_bio_dicom({}, context)
```


### search_bio_dicom_test
API to search for entries of type DICOM Test File


```js
geodesystems.search_bio_dicom_test({}, context)
```


### search_bio_fasta
API to search for entries of type FASTA File


```js
geodesystems.search_bio_fasta({}, context)
```


### search_bio_fastq
API to search for entries of type FASTQ File


```js
geodesystems.search_bio_fastq({}, context)
```


### search_bio_hmmer_index
API to search for entries of type HMMER Index File


```js
geodesystems.search_bio_hmmer_index({}, context)
```


### search_bio_ome_tiff
API to search for entries of type OME TIFF File


```js
geodesystems.search_bio_ome_tiff({}, context)
```


### search_bio_ontology_assay
API to search for entries of type Assay


```js
geodesystems.search_bio_ontology_assay({}, context)
```


### search_bio_ontology_cohort
API to search for entries of type Cohort


```js
geodesystems.search_bio_ontology_cohort({}, context)
```


### search_bio_ontology_person
API to search for entries of type Person


```js
geodesystems.search_bio_ontology_person({}, context)
```


### search_bio_ontology_sample
API to search for entries of type Sample


```js
geodesystems.search_bio_ontology_sample({}, context)
```


### search_bio_ontology_series
API to search for entries of type Series


```js
geodesystems.search_bio_ontology_series({}, context)
```


### search_bio_ontology_study
API to search for entries of type Study


```js
geodesystems.search_bio_ontology_study({}, context)
```


### search_bio_sam
API to search for entries of type SAM Data


```js
geodesystems.search_bio_sam({}, context)
```


### search_bio_sf_pdb
API to search for entries of type PDB Protein File


```js
geodesystems.search_bio_sf_pdb({}, context)
```


### search_bio_sra
API to search for entries of type Sequence Read Archive


```js
geodesystems.search_bio_sra({}, context)
```


### search_bio_stockholm
API to search for entries of type Stockholm File


```js
geodesystems.search_bio_stockholm({}, context)
```


### search_bio_taxonomy
API to search for entries of type Taxonomic Entry


```js
geodesystems.search_bio_taxonomy({}, context)
```


### search_blogentry
API to search for entries of type Weblog Entry


```js
geodesystems.search_blogentry({}, context)
```


### search_bookmarks
API to search for entries of type Bookmarks


```js
geodesystems.search_bookmarks({}, context)
```


### search_boulder_county_voter_details
API to search for entries of type Boulder County Voter Details


```js
geodesystems.search_boulder_county_voter_details({}, context)
```


### search_calendar
API to search for entries of type Calendar


```js
geodesystems.search_calendar({}, context)
```


### search_cdm_grid
API to search for entries of type Gridded Data File


```js
geodesystems.search_cdm_grid({}, context)
```


### search_community_case
API to search for entries of type Development Review Case


```js
geodesystems.search_community_case({}, context)
```


### search_community_datahub
API to search for entries of type Data Hub


```js
geodesystems.search_community_datahub({}, context)
```


### search_community_resource
API to search for entries of type Facility


```js
geodesystems.search_community_resource({}, context)
```


### search_contact
API to search for entries of type Contact List


```js
geodesystems.search_contact({}, context)
```


### search_db_co_indicators
API to search for entries of type Colorado Health Indicators


```js
geodesystems.search_db_co_indicators({}, context)
```


### search_earth_merra
API to search for entries of type MERRA Data


```js
geodesystems.search_earth_merra({}, context)
```


### search_earth_satellite_landsat
API to search for entries of type Landsat Satellite Data


```js
geodesystems.search_earth_satellite_landsat({}, context)
```


### search_earth_satellite_modis_aqua
API to search for entries of type Aqua Modis Satellite Data


```js
geodesystems.search_earth_satellite_modis_aqua({}, context)
```


### search_earth_wrf_namelist
API to search for entries of type WRF Namelist File


```js
geodesystems.search_earth_wrf_namelist({}, context)
```


### search_exercise
API to search for entries of type Exercise


```js
geodesystems.search_exercise({}, context)
```


### search_faq
API to search for entries of type FAQ


```js
geodesystems.search_faq({}, context)
```


### search_feed
API to search for entries of type RSS/ATOM Feed


```js
geodesystems.search_feed({}, context)
```


### search_file
API to search for entries of type File


```js
geodesystems.search_file({}, context)
```


### search_fits_data
API to search for entries of type FITS Data File


```js
geodesystems.search_fits_data({}, context)
```


### search_frames
API to search for entries of type IFrames


```js
geodesystems.search_frames({}, context)
```


### search_ftp
API to search for entries of type Remote FTP File View


```js
geodesystems.search_ftp({}, context)
```


### search_gadgets_clock
API to search for entries of type Clock


```js
geodesystems.search_gadgets_clock({}, context)
```


### search_gadgets_countdown
API to search for entries of type Countdown


```js
geodesystems.search_gadgets_countdown({}, context)
```


### search_gadgets_stock
API to search for entries of type Stock Ticker


```js
geodesystems.search_gadgets_stock({}, context)
```


### search_gadgets_weather
API to search for entries of type Weather


```js
geodesystems.search_gadgets_weather({}, context)
```


### search_gdata_docs
API to search for entries of type Google Docs View


```js
geodesystems.search_gdata_docs({}, context)
```


### search_gdata_photos
API to search for entries of type Google Web Albums View


```js
geodesystems.search_gdata_photos({}, context)
```


### search_geo_geotiff
API to search for entries of type GeoTIFF


```js
geodesystems.search_geo_geotiff({}, context)
```


### search_geo_gpx
API to search for entries of type GPX GPS File


```js
geodesystems.search_geo_gpx({}, context)
```


### search_geo_hdf5
API to search for entries of type HDF5 File


```js
geodesystems.search_geo_hdf5({}, context)
```


### search_geo_kml
API to search for entries of type KML/KMZ File


```js
geodesystems.search_geo_kml({}, context)
```


### search_geo_shapefile
API to search for entries of type Shapefile


```js
geodesystems.search_geo_shapefile({}, context)
```


### search_glossary
API to search for entries of type Glossary


```js
geodesystems.search_glossary({}, context)
```


### search_gridaggregation
API to search for entries of type Grid Aggregation


```js
geodesystems.search_gridaggregation({}, context)
```


### search_group
API to search for entries of type Folder


```js
geodesystems.search_group({}, context)
```


### search_hipchat_group
API to search for entries of type HipChat Group


```js
geodesystems.search_hipchat_group({}, context)
```


### search_homepage
API to search for entries of type Home Page


```js
geodesystems.search_homepage({}, context)
```


### search_incident
API to search for entries of type Incident


```js
geodesystems.search_incident({}, context)
```


### search_incident_basement
API to search for entries of type Basement Flooding


```js
geodesystems.search_incident_basement({}, context)
```


### search_investigation_case
API to search for entries of type Investigation


```js
geodesystems.search_investigation_case({}, context)
```


### search_investigation_cellphonelog
API to search for entries of type Cell Phone Log


```js
geodesystems.search_investigation_cellphonelog({}, context)
```


### search_investigation_event
API to search for entries of type Event


```js
geodesystems.search_investigation_event({}, context)
```


### search_investigation_oldphonelog
API to search for entries of type Old Phone Log


```js
geodesystems.search_investigation_oldphonelog({}, context)
```


### search_investigation_person
API to search for entries of type Person


```js
geodesystems.search_investigation_person({}, context)
```


### search_investigation_thing
API to search for entries of type Thing


```js
geodesystems.search_investigation_thing({}, context)
```


### search_latlonimage
API to search for entries of type WMS Image


```js
geodesystems.search_latlonimage({}, context)
```


### search_lidar_collection
API to search for entries of type LiDAR Collection


```js
geodesystems.search_lidar_collection({}, context)
```


### search_lidar_glas
API to search for entries of type GLAS Lidar Data


```js
geodesystems.search_lidar_glas({}, context)
```


### search_lidar_las
API to search for entries of type LAS Lidar Data


```js
geodesystems.search_lidar_las({}, context)
```


### search_lidar_lvis
API to search for entries of type LVIS Lidar Data


```js
geodesystems.search_lidar_lvis({}, context)
```


### search_link
API to search for entries of type Link


```js
geodesystems.search_link({}, context)
```


### search_localfiles
API to search for entries of type Server Side Files


```js
geodesystems.search_localfiles({}, context)
```


### search_locations
API to search for entries of type Locations


```js
geodesystems.search_locations({}, context)
```


### search_map_googlemap
API to search for entries of type Google Map URL


```js
geodesystems.search_map_googlemap({}, context)
```


### search_media_audiofile
API to search for entries of type Audio File


```js
geodesystems.search_media_audiofile({}, context)
```


### search_media_imageloop
API to search for entries of type Image Loop


```js
geodesystems.search_media_imageloop({}, context)
```


### search_media_photoalbum
API to search for entries of type Photo Album


```js
geodesystems.search_media_photoalbum({}, context)
```


### search_media_video_channel
API to search for entries of type Video Channel


```js
geodesystems.search_media_video_channel({}, context)
```


### search_media_video_quicktime
API to search for entries of type Quicktime Video


```js
geodesystems.search_media_video_quicktime({}, context)
```


### search_media_youtubevideo
API to search for entries of type YouTube Video


```js
geodesystems.search_media_youtubevideo({}, context)
```


### search_multisearch
API to search for entries of type Multiple Search


```js
geodesystems.search_multisearch({}, context)
```


### search_nga_tracks
API to search for entries of type NGA Tracks


```js
geodesystems.search_nga_tracks({}, context)
```


### search_notes
API to search for entries of type Notes


```js
geodesystems.search_notes({}, context)
```


### search_notes_note
API to search for entries of type Note


```js
geodesystems.search_notes_note({}, context)
```


### search_opendaplink
API to search for entries of type OPeNDAP Link


```js
geodesystems.search_opendaplink({}, context)
```


### search_owl.class
API to search for entries of type OWL Class


```js
geodesystems.search_owl.class({}, context)
```


### search_owl.ontology
API to search for entries of type OWL Ontology


```js
geodesystems.search_owl.ontology({}, context)
```


### search_pasteitentry
API to search for entries of type Paste Text Entry


```js
geodesystems.search_pasteitentry({}, context)
```


### search_point_text
API to search for entries of type Text Point Data


```js
geodesystems.search_point_text({}, context)
```


### search_poll
API to search for entries of type Poll


```js
geodesystems.search_poll({}, context)
```


### search_project_campaign
API to search for entries of type Campaign


```js
geodesystems.search_project_campaign({}, context)
```


### search_project_casestudy
API to search for entries of type Case Study


```js
geodesystems.search_project_casestudy({}, context)
```


### search_project_contribution
API to search for entries of type Research Contribution


```js
geodesystems.search_project_contribution({}, context)
```


### search_project_dataformat
API to search for entries of type Data Format


```js
geodesystems.search_project_dataformat({}, context)
```


### search_project_dataset
API to search for entries of type Dataset


```js
geodesystems.search_project_dataset({}, context)
```


### search_project_deployment
API to search for entries of type Deployment


```js
geodesystems.search_project_deployment({}, context)
```


### search_project_experiment
API to search for entries of type Experiment


```js
geodesystems.search_project_experiment({}, context)
```


### search_project_fieldnote
API to search for entries of type Field Note


```js
geodesystems.search_project_fieldnote({}, context)
```


### search_project_gps_controlpoints
API to search for entries of type Control Points File


```js
geodesystems.search_project_gps_controlpoints({}, context)
```


### search_project_gps_raw
API to search for entries of type Raw GPS File


```js
geodesystems.search_project_gps_raw({}, context)
```


### search_project_gps_rinex
API to search for entries of type RINEX File


```js
geodesystems.search_project_gps_rinex({}, context)
```


### search_project_instrument
API to search for entries of type Instrument Data Collection


```js
geodesystems.search_project_instrument({}, context)
```


### search_project_learning_resource
API to search for entries of type Teaching Resource


```js
geodesystems.search_project_learning_resource({}, context)
```


### search_project_meeting
API to search for entries of type Meeting


```js
geodesystems.search_project_meeting({}, context)
```


### search_project_organization
API to search for entries of type Organization


```js
geodesystems.search_project_organization({}, context)
```


### search_project_program
API to search for entries of type Program


```js
geodesystems.search_project_program({}, context)
```


### search_project_project
API to search for entries of type Project


```js
geodesystems.search_project_project({}, context)
```


### search_project_service
API to search for entries of type Data Access Service


```js
geodesystems.search_project_service({}, context)
```


### search_project_site
API to search for entries of type Site


```js
geodesystems.search_project_site({}, context)
```


### search_project_softwarepackage
API to search for entries of type Software Tool


```js
geodesystems.search_project_softwarepackage({}, context)
```


### search_project_standard_name
API to search for entries of type Standard Parameter Name


```js
geodesystems.search_project_standard_name({}, context)
```


### search_project_surveylocation
API to search for entries of type Survey Location


```js
geodesystems.search_project_surveylocation({}, context)
```


### search_project_term
API to search for entries of type Vocabulary Term


```js
geodesystems.search_project_term({}, context)
```


### search_project_visit
API to search for entries of type Site Visit


```js
geodesystems.search_project_visit({}, context)
```


### search_project_vocabulary
API to search for entries of type Vocabulary


```js
geodesystems.search_project_vocabulary({}, context)
```


### search_property_sales
API to search for entries of type Property Sales


```js
geodesystems.search_property_sales({}, context)
```


### search_propertydb
API to search for entries of type Property Database


```js
geodesystems.search_propertydb({}, context)
```


### search_python_notebook
API to search for entries of type IPython Notebook file


```js
geodesystems.search_python_notebook({}, context)
```


### search_registrations
API to search for entries of type Registrations


```js
geodesystems.search_registrations({}, context)
```


### search_slack_team
API to search for entries of type Slack Team


```js
geodesystems.search_slack_team({}, context)
```


### search_statusboard
API to search for entries of type Status Board


```js
geodesystems.search_statusboard({}, context)
```


### search_tasks
API to search for entries of type Tasks


```js
geodesystems.search_tasks({}, context)
```


### search_todo
API to search for entries of type Todo


```js
geodesystems.search_todo({}, context)
```


### search_trip_event
API to search for entries of type Event


```js
geodesystems.search_trip_event({}, context)
```


### search_trip_flight
API to search for entries of type Flight Leg


```js
geodesystems.search_trip_flight({}, context)
```


### search_trip_hotel
API to search for entries of type Lodging


```js
geodesystems.search_trip_hotel({}, context)
```


### search_trip_report
API to search for entries of type Trip Report


```js
geodesystems.search_trip_report({}, context)
```


### search_trip_trip
API to search for entries of type Trip


```js
geodesystems.search_trip_trip({}, context)
```


### search_type_artists_space
API to search for entries of type Artists Space


```js
geodesystems.search_type_artists_space({}, context)
```


### search_type_awc_metar
API to search for entries of type AWC Weather Observations


```js
geodesystems.search_type_awc_metar({}, context)
```


### search_type_awhere_farm
API to search for entries of type aWhere Farm


```js
geodesystems.search_type_awhere_farm({}, context)
```


### search_type_awhere_field
API to search for entries of type aWhere Field


```js
geodesystems.search_type_awhere_field({}, context)
```


### search_type_biz_stockseries
API to search for entries of type Stock Ticker Data


```js
geodesystems.search_type_biz_stockseries({}, context)
```


### search_type_census_acs
API to search for entries of type US Census ACS Data


```js
geodesystems.search_type_census_acs({}, context)
```


### search_type_db_table
API to search for entries of type Database Table


```js
geodesystems.search_type_db_table({}, context)
```


### search_type_document_csv
API to search for entries of type CSV File


```js
geodesystems.search_type_document_csv({}, context)
```


### search_type_document_doc
API to search for entries of type Microsoft Word File


```js
geodesystems.search_type_document_doc({}, context)
```


### search_type_document_html
API to search for entries of type HTML File


```js
geodesystems.search_type_document_html({}, context)
```


### search_type_document_pdf
API to search for entries of type PDF File


```js
geodesystems.search_type_document_pdf({}, context)
```


### search_type_document_ppt
API to search for entries of type Microsoft Powerpoint File


```js
geodesystems.search_type_document_ppt({}, context)
```


### search_type_document_xls
API to search for entries of type Microsoft Excel File


```js
geodesystems.search_type_document_xls({}, context)
```


### search_type_drilsdown_casestudy
API to search for entries of type Drilsdown Case Study


```js
geodesystems.search_type_drilsdown_casestudy({}, context)
```


### search_type_edgar_filing
API to search for entries of type SEC EDGAR Filing


```js
geodesystems.search_type_edgar_filing({}, context)
```


### search_type_eia_category
API to search for entries of type EIA Category


```js
geodesystems.search_type_eia_category({}, context)
```


### search_type_eia_series
API to search for entries of type EIA Series


```js
geodesystems.search_type_eia_series({}, context)
```


### search_type_esri_featureserver
API to search for entries of type ESRI Feature Server


```js
geodesystems.search_type_esri_featureserver({}, context)
```


### search_type_esri_geometryserver
API to search for entries of type ESRI Geometry Server


```js
geodesystems.search_type_esri_geometryserver({}, context)
```


### search_type_esri_gpserver
API to search for entries of type ESRI GP Server


```js
geodesystems.search_type_esri_gpserver({}, context)
```


### search_type_esri_imageserver
API to search for entries of type ESRI Image Server


```js
geodesystems.search_type_esri_imageserver({}, context)
```


### search_type_esri_layer
API to search for entries of type ESRI Layer


```js
geodesystems.search_type_esri_layer({}, context)
```


### search_type_esri_mapserver
API to search for entries of type ESRI Map Server


```js
geodesystems.search_type_esri_mapserver({}, context)
```


### search_type_esri_restfolder
API to search for entries of type ESRI Services Folder


```js
geodesystems.search_type_esri_restfolder({}, context)
```


### search_type_esri_restserver
API to search for entries of type ESRI Web Server


```js
geodesystems.search_type_esri_restserver({}, context)
```


### search_type_esri_restservice
API to search for entries of type ESRI Rest Service


```js
geodesystems.search_type_esri_restservice({}, context)
```


### search_type_fred_category
API to search for entries of type FRED Category


```js
geodesystems.search_type_fred_category({}, context)
```


### search_type_fred_series
API to search for entries of type FRED Series


```js
geodesystems.search_type_fred_series({}, context)
```


### search_type_gtfs_agency
API to search for entries of type Transit Agency


```js
geodesystems.search_type_gtfs_agency({}, context)
```


### search_type_gtfs_route
API to search for entries of type Transit Route


```js
geodesystems.search_type_gtfs_route({}, context)
```


### search_type_gtfs_routes
API to search for entries of type Transit Route Collection


```js
geodesystems.search_type_gtfs_routes({}, context)
```


### search_type_gtfs_stop
API to search for entries of type Transit Stop


```js
geodesystems.search_type_gtfs_stop({}, context)
```


### search_type_gtfs_stops
API to search for entries of type Transit Stop Collection


```js
geodesystems.search_type_gtfs_stops({}, context)
```


### search_type_gtfs_trip
API to search for entries of type Transit Trip


```js
geodesystems.search_type_gtfs_trip({}, context)
```


### search_type_hazarddata
API to search for entries of type Hazard Data


```js
geodesystems.search_type_hazarddata({}, context)
```


### search_type_hydro_colorado
API to search for entries of type Colorado DNR Stream Gage


```js
geodesystems.search_type_hydro_colorado({}, context)
```


### search_type_idv_bundle
API to search for entries of type IDV Bundle


```js
geodesystems.search_type_idv_bundle({}, context)
```


### search_type_image
API to search for entries of type Image


```js
geodesystems.search_type_image({}, context)
```


### search_type_image_airport
API to search for entries of type Airport Image


```js
geodesystems.search_type_image_airport({}, context)
```


### search_type_mb
API to search for entries of type MB Bathymetry


```js
geodesystems.search_type_mb({}, context)
```


### search_type_mb_collection
API to search for entries of type Bathymetry Collection


```js
geodesystems.search_type_mb_collection({}, context)
```


### search_type_mb_point_basic
API to search for entries of type Basic MB point file


```js
geodesystems.search_type_mb_point_basic({}, context)
```


### search_type_metameta_collection
API to search for entries of type Data Dictionary: Metadata Collection


```js
geodesystems.search_type_metameta_collection({}, context)
```


### search_type_metameta_dictionary
API to search for entries of type Data Dictionary: Metadata Dictionary


```js
geodesystems.search_type_metameta_dictionary({}, context)
```


### search_type_metameta_field
API to search for entries of type Data Dictionary: Metadata Field


```js
geodesystems.search_type_metameta_field({}, context)
```


### search_type_nist_constant
API to search for entries of type CODATA Fundamental Physical Constants


```js
geodesystems.search_type_nist_constant({}, context)
```


### search_type_nist_energy
API to search for entries of type NIST Ionization Energy Data


```js
geodesystems.search_type_nist_energy({}, context)
```


### search_type_nist_isotope
API to search for entries of type NIST Isotope


```js
geodesystems.search_type_nist_isotope({}, context)
```


### search_type_nist_janaffile
API to search for entries of type NIST JANAF Thermochemical Table


```js
geodesystems.search_type_nist_janaffile({}, context)
```


### search_type_nitf
API to search for entries of type NITF File


```js
geodesystems.search_type_nitf({}, context)
```


### search_type_point_ameriflux_level2
API to search for entries of type Ameriflux Level 2 CSV File


```js
geodesystems.search_type_point_ameriflux_level2({}, context)
```


### search_type_point_amrc_final
API to search for entries of type AMRC Final QC Data


```js
geodesystems.search_type_point_amrc_final({}, context)
```


### search_type_point_amrc_freewave
API to search for entries of type AMRC Freewave  Data


```js
geodesystems.search_type_point_amrc_freewave({}, context)
```


### search_type_point_collection
API to search for entries of type Point Data Collection


```js
geodesystems.search_type_point_collection({}, context)
```


### search_type_point_czo
API to search for entries of type CZO Display File Format


```js
geodesystems.search_type_point_czo({}, context)
```


### search_type_point_gcnet
API to search for entries of type GC-Net Point Data


```js
geodesystems.search_type_point_gcnet({}, context)
```


### search_type_point_geomag_iaga2002
API to search for entries of type IAGA 2002 Geomagnetism Data


```js
geodesystems.search_type_point_geomag_iaga2002({}, context)
```


### search_type_point_hydro_waterml
API to search for entries of type WaterML


```js
geodesystems.search_type_point_hydro_waterml({}, context)
```


### search_type_point_icebridge_atm_icessn
API to search for entries of type ATM Ice SSN Data


```js
geodesystems.search_type_point_icebridge_atm_icessn({}, context)
```


### search_type_point_icebridge_atm_qfit
API to search for entries of type ATM QFIT Data


```js
geodesystems.search_type_point_icebridge_atm_qfit({}, context)
```


### search_type_point_icebridge_mccords_irmcr2
API to search for entries of type McCords Irmcr2 Data


```js
geodesystems.search_type_point_icebridge_mccords_irmcr2({}, context)
```


### search_type_point_icebridge_mccords_irmcr3
API to search for entries of type McCords Irmcr3 Data


```js
geodesystems.search_type_point_icebridge_mccords_irmcr3({}, context)
```


### search_type_point_icebridge_paris
API to search for entries of type Paris Data


```js
geodesystems.search_type_point_icebridge_paris({}, context)
```


### search_type_point_idv
API to search for entries of type IDV Point File


```js
geodesystems.search_type_point_idv({}, context)
```


### search_type_point_ncdc_climate
API to search for entries of type NC  DC Climate Data


```js
geodesystems.search_type_point_ncdc_climate({}, context)
```


### search_type_point_netcdf
API to search for entries of type NetCDF Point File


```js
geodesystems.search_type_point_netcdf({}, context)
```


### search_type_point_noaa_carbon
API to search for entries of type NOAA Carbon Measurements


```js
geodesystems.search_type_point_noaa_carbon({}, context)
```


### search_type_point_noaa_flask_event
API to search for entries of type NOAA Flask Event Measurements


```js
geodesystems.search_type_point_noaa_flask_event({}, context)
```


### search_type_point_noaa_flask_month
API to search for entries of type NOAA Flask Month Measurements


```js
geodesystems.search_type_point_noaa_flask_month({}, context)
```


### search_type_point_noaa_madis
API to search for entries of type NOAA MADIS Point Data


```js
geodesystems.search_type_point_noaa_madis({}, context)
```


### search_type_point_noaa_tower
API to search for entries of type NOAA Tower Network


```js
geodesystems.search_type_point_noaa_tower({}, context)
```


### search_type_point_ocean_cnv
API to search for entries of type SeaBird CNV Data


```js
geodesystems.search_type_point_ocean_cnv({}, context)
```


### search_type_point_ocean_csv_sado_TTS
API to search for entries of type SADO TTS Data


```js
geodesystems.search_type_point_ocean_csv_sado_TTS({}, context)
```


### search_type_point_ocean_csv_sado_meteo
API to search for entries of type SADO Meteo Data


```js
geodesystems.search_type_point_ocean_csv_sado_meteo({}, context)
```


### search_type_point_ocean_csv_sado_position
API to search for entries of type SADO Position Data


```js
geodesystems.search_type_point_ocean_csv_sado_position({}, context)
```


### search_type_point_ocean_netcdf_glider
API to search for entries of type NetCDF Glider Data


```js
geodesystems.search_type_point_ocean_netcdf_glider({}, context)
```


### search_type_point_ocean_netcdf_track
API to search for entries of type NetCDF Track Data


```js
geodesystems.search_type_point_ocean_netcdf_track({}, context)
```


### search_type_point_ocean_ooi_dmgx
API to search for entries of type OOI Data


```js
geodesystems.search_type_point_ocean_ooi_dmgx({}, context)
```


### search_type_point_pbo_position_time_series
API to search for entries of type PBO Position Time Series


```js
geodesystems.search_type_point_pbo_position_time_series({}, context)
```


### search_type_point_snotel
API to search for entries of type SNOTEL Snow Data


```js
geodesystems.search_type_point_snotel({}, context)
```


### search_type_point_wsbb_ggp
API to search for entries of type Global Geodynamics GGP Format


```js
geodesystems.search_type_point_wsbb_ggp({}, context)
```


### search_type_power_miso_forecast
API to search for entries of type MISO Foreacast XML


```js
geodesystems.search_type_power_miso_forecast({}, context)
```


### search_type_psd_monthly_climate_index
API to search for entries of type NOAA-ESRL-PSD Monthly Climate Index


```js
geodesystems.search_type_psd_monthly_climate_index({}, context)
```


### search_type_quandl_series
API to search for entries of type QUANDL Series


```js
geodesystems.search_type_quandl_series({}, context)
```


### search_type_resilience_assessment
API to search for entries of type Resiliency Assessment


```js
geodesystems.search_type_resilience_assessment({}, context)
```


### search_type_resilience_project
API to search for entries of type Resiliency Project


```js
geodesystems.search_type_resilience_project({}, context)
```


### search_type_reuters_document
API to search for entries of type Reuters Document


```js
geodesystems.search_type_reuters_document({}, context)
```


### search_type_service_group
API to search for entries of type Service Group


```js
geodesystems.search_type_service_group({}, context)
```


### search_type_service_link
API to search for entries of type Service Link


```js
geodesystems.search_type_service_link({}, context)
```


### search_type_socrata_series
API to search for entries of type SOCRATA Series


```js
geodesystems.search_type_socrata_series({}, context)
```


### search_type_urbaninstitute_employment
API to search for entries of type MetroTrends Employment Data


```js
geodesystems.search_type_urbaninstitute_employment({}, context)
```


### search_type_usda_arms_crop
API to search for entries of type USDA ARMS Crop Data


```js
geodesystems.search_type_usda_arms_crop({}, context)
```


### search_type_usda_arms_finance
API to search for entries of type USDA ARMS Finance Data


```js
geodesystems.search_type_usda_arms_finance({}, context)
```


### search_type_usda_nass
API to search for entries of type USDA NASS Data


```js
geodesystems.search_type_usda_nass({}, context)
```


### search_type_virtual
API to search for entries of type Virtual Group


```js
geodesystems.search_type_virtual({}, context)
```


### search_type_wms_capabilities
API to search for entries of type WMS Capabilities


```js
geodesystems.search_type_wms_capabilities({}, context)
```


### search_type_wms_layer
API to search for entries of type WMS Layer


```js
geodesystems.search_type_wms_layer({}, context)
```


### search_vote_yesno
API to search for entries of type Simple Yes-No Vote


```js
geodesystems.search_vote_yesno({}, context)
```


### search_weblog
API to search for entries of type Weblog


```js
geodesystems.search_weblog({}, context)
```


### search_wikipage
API to search for entries of type Wiki Page


```js
geodesystems.search_wikipage({}, context)
```


