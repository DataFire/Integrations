# @datafire/firebrowse

Client library for FireBrowse Beta API

## Installation and Usage
```bash
npm install --save datafire @datafire/firebrowse
```

```js
let datafire = require('datafire');
let firebrowse = require('@datafire/firebrowse').create();

firebrowse.miRSeq({}).then(data => {
  console.log(data);
})
```

## Description
A simple and elegant way to explore cancer data

## Actions
### All
This service provides access to the Gistic2 all_data_by_genes.txt output data. This data is a gene-level table of copy number values for all samples. The returned copy number values are in units (copy number - 2) so that no amplification or deletion is 0, genes with amplifications have positive values, and genes with deletions are negative values. The data are converted from marker level to gene level using the extreme method: a gene is assigned the greatest amplification or the least deletion value among the markers it covers. Results may be filtered by cohort, gene, or barcode, but at least one gene or barcode must be supplied.


```js
firebrowse.All({}, context)
```

#### Parameters
* format (string) - Format of result.
* cohort (array) - Narrow search to one or more TCGA disease cohorts from the scrollable list.
* gene (array) - Comma separated list of gene name(s).
* tcga_participant_barcode (array) - Comma separated list of TCGA participant barcodes (e.g. TCGA-GF-A4EO).
* page (array) - Which page (slice) of entire results set should be returned. 
* page_size (array) - Number of records per page of results.  Max is 2000.
* sort_by (string) - Which column in the results should be used for sorting paginated results?

### Amplified
This service provides access to the Gistic2 amp_genes.conf_99.txt output data.  At least 1 gene or cohort must be supplied.


```js
firebrowse.Amplified({}, context)
```

#### Parameters
* format (string) - Format of result.
* cohort (array) - Narrow search to one or more TCGA disease cohorts from the scrollable list.
* gene (array) - Comma separated list of gene name(s).
* q (number) - Only return results with Q-value <= given threshold.
* page (array) - Which page (slice) of entire results set should be returned. 
* page_size (array) - Number of records per page of results.  Max is 2000.
* sort_by (string) - Which column in the results should be used for sorting paginated results?

### Deleted
This service provides access to the Gistic2 del_genes.conf_99.txt output data.  At least 1 gene or cohort must be supplied.


```js
firebrowse.Deleted({}, context)
```

#### Parameters
* format (string) - Format of result.
* cohort (array) - Narrow search to one or more TCGA disease cohorts from the scrollable list.
* gene (array) - Comma separated list of gene name(s).
* q (number) - Only return results with Q-value <= given threshold.
* page (array) - Which page (slice) of entire results set should be returned. 
* page_size (array) - Number of records per page of results.  Max is 2000.
* sort_by (string) - Which column in the results should be used for sorting paginated results?

### Focal
This service provides access to the Gistic2 focal_data_by_genes.txt output data. This output is similar to the all_data_by_genes.txt output, but using only focal events with lengths greater than the  focal length cutoff. This data is a gene-level table of copy number values for all samples. The returned copy number values are in units (copy number - 2) so that no amplification or deletion is 0, genes with amplifications have positive values, and genes with deletions are negative values. The data are converted from marker level to gene level using the extreme method: a gene is assigned the greatest amplification or the least deletion value among the markers it covers. Results may be filtered by cohort, gene, and/or barcode, but at least one gene or barcode must be supplied.


```js
firebrowse.Focal({}, context)
```

#### Parameters
* format (string) - Format of result.
* cohort (array) - Narrow search to one or more TCGA disease cohorts from the scrollable list.
* gene (array) - Comma separated list of gene name(s).
* tcga_participant_barcode (array) - Comma separated list of TCGA participant barcodes (e.g. TCGA-GF-A4EO).
* page (array) - Which page (slice) of entire results set should be returned. 
* page_size (array) - Number of records per page of results.  Max is 2000.
* sort_by (string) - Which column in the results should be used for sorting paginated results?

### Thresholded
This service provides access to the Gistic2 all_thresholded_by_genes.txt output data. A gene-level table of discrete amplification and deletion indicators for all samples. A table value of 0 means no amplification or deletion above the threshold. Amplifications are positive numbers: 1 means amplification above the amplification threshold; 2 means amplifications larger to the arm level amplifications observed for the sample. Deletions are represented by negative table values: -1 represents deletion beyond the threshold; -2 means deletions greater than the minimum arm-level deletion observed for the sample. Results maybe filtered by cohort, gene or barcode, but at least one gene or barcode must be supplied.


```js
firebrowse.Thresholded({}, context)
```

#### Parameters
* format (string) - Format of result.
* cohort (array) - Narrow search to one or more TCGA disease cohorts from the scrollable list.
* gene (array) - Comma separated list of gene name(s).
* tcga_participant_barcode (array) - Comma separated list of TCGA participant barcodes (e.g. TCGA-GF-A4EO).
* page (array) - Which page (slice) of entire results set should be returned. 
* page_size (array) - Number of records per page of results.  Max is 2000.
* sort_by (string) - Which column in the results should be used for sorting paginated results?

### FeatureTable
This service returns part or all of the so-called <strong>feature table</strong>; which aggregates the most important findings across ALL pipelines in the GDAC Firehose analysis workflow into a single table for simple access.  One feature table is created per disease cohort.  Results may be filtered by date or cohort, but at least 1 cohort must be specified here. For more details please visit the <a href=https://confluence.broadinstitute.org/display/GDAC/Documentation\#Documentation-FeatureTable>online documentation</a>.  Please note that the service is still undergoing experimental evaluation and does not return JSON format.


```js
firebrowse.FeatureTable({}, context)
```

#### Parameters
* format (string) - Format of result.
* cohort (array) - Narrow search to one or more TCGA disease cohorts from the scrollable list.
* date (array) - Select one or more date stamps.
* column (array) - Comma separated list of which data columns/fields to return.
* page (array) - Which page (slice) of entire results set should be returned. 
* page_size (array) - Number of records per page of results.  Max is 2000.

### MAF
This service returns columns from the MAF generated by MutSig. Results may be filtered by gene, cohort, tool, or barcode, but at least one gene OR barcode OR cohort must be given.  By default a subset consisting of the most commonly used columns will be returned, but that can be modified with the column parameter. Specifying 'all' in this parameter is a convenient way to return every column of the respective MAF, and has precedence over any any other column selection expression.  The complete list of column names that may be specified is <a href='http://firebrowse.org/api-docs/#!/Metadata/MAFColNames'>given here</a>.  For more information on the mutation data, and how it is processed by Firehose, please consult the <a href="https://confluence.broadinstitute.org/display/GDAC/Documentation#Documentation-MutationPipelines">pipeline documentation</a>.


```js
firebrowse.MAF({}, context)
```

#### Parameters
* format (string) - Format of result.
* cohort (array) - Narrow search to one or more TCGA disease cohorts from the scrollable list.
* tool (array) - Narrow search to include only data/results produced by the selected Firehose tool.
* gene (array) - Comma separated list of gene name(s).
* tcga_participant_barcode (array) - Comma separated list of TCGA participant barcodes (e.g. TCGA-GF-A4EO).
* column (array) - Comma separated list of which data columns/fields to return.
* page (array) - Which page (slice) of entire results set should be returned. 
* page_size (array) - Number of records per page of results.  Max is 2000.
* sort_by (string) - Which column in the results should be used for sorting paginated results?

### SMG
This service provides a list of significantly mutated genes, as scored by MutSig.  It may be filtered by cohort, rank, gene, tool and/or Q-value threshold, but at least one cohort or gene must be supplied.


```js
firebrowse.SMG({}, context)
```

#### Parameters
* format (string) - Format of result.
* cohort (array) - Narrow search to one or more TCGA disease cohorts from the scrollable list.
* tool (array) - Narrow search to include only data/results produced by the selected Firehose tool.
* rank (integer) - Number of significant genes to return.
* gene (array) - Comma separated list of gene name(s).
* q (number) - Only return results with Q-value <= given threshold.
* page (array) - Which page (slice) of entire results set should be returned. 
* page_size (array) - Number of records per page of results.  Max is 2000.
* sort_by (string) - Which column in the results should be used for sorting paginated results?

### Reports
This service returns URLs to the analysis result reports for runs of the Broad Institute GDAC Firehose analysis pipeline. At least one year of run reports are maintained in the database, but the reports from the latest run will be returned by default. The set of <a href="https://confluence.broadinstitute.org/display/GDAC/Nozzle">Nozzle</a> reports returned may be filtered by disease cohort, report type and report name.


```js
firebrowse.Reports({}, context)
```

#### Parameters
* format (string) - Format of result.
* date (array) - Select one or more date stamps.
* cohort (array) - Narrow search to one or more TCGA disease cohorts from the scrollable list.
* name (array) - Narrow search to one or more report names.
* type (array) - Narrow search to one or more report types.
* page (array) - Which page (slice) of entire results set should be returned. 
* page_size (array) - Number of records per page of results.  Max is 2000.
* sort_by (string) - Which column in the results should be used for sorting paginated results?

### Analyses.mRNASeq.Quartiles.get
For a given gene compute quartiles and extrema, suitable e.g. for drawing a boxplot (Tukey 1977).  Results may be filtered by cohort, sample type, patient barcode  or characterization protocol, and are returned sorted by cohort.  Note that samples for which no expression value was recorded (e.g. <a href="http://firebrowse.org/api/v1/Samples/mRNASeq?&gene=egfr&cohort=SKCM&tcga_participant_barcode=TCGA-GN-A262">the melanoma sample TCGA-GN-262</a>) are removed prior to calculation.


```js
firebrowse.Analyses.mRNASeq.Quartiles.get({
  "gene": ""
}, context)
```

#### Parameters
* format (string) - Format of result.
* gene (string) **required** - Enter a single gene name.
* cohort (array) - Narrow search to one or more TCGA disease cohorts from the scrollable list.
* protocol (array) - Narrow search to one or more sample characterization protocols from the scrollable list.
* sample_type (array) - For which type of sample(s) should quartiles be computed?
* Exclude (array) - Comma separated list of TCGA participants, identified by barcodes such as TCGA-GF-A4EO, denoting samples to exclude from computation.

### StandardData
This service returns the archive URLs for our Firehose standard data runs, providing a RESTful interface similar in spirit to the command line <a href="https://confluence.broadinstitute.org/display/GDAC/Download">firehose_get</a> tool. The archives can be filtered based on date, cohort, data type, platform, center, data level, and protocol.


```js
firebrowse.StandardData({}, context)
```

#### Parameters
* format (string) - Format of result.
* date (array) - Select one or more date stamps.
* cohort (array) - Narrow search to one or more TCGA disease cohorts from the scrollable list.
* data_type (array) - Narrow search to one or more TCGA data types from the scrollable list.
* tool (array) - Narrow search to include only data/results produced by the selected Firehose tool.
* platform (array) - Narrow search to one or more TCGA data generation platforms from the scrollable list.
* center (array) - Narrow search to one or more TCGA centers from the scrollable list.
* level (array) - Narrow search to one or more TCGA data levels.
* protocol (array) - Narrow search to one or more sample characterization protocols from the scrollable list.
* page (array) - Which page (slice) of entire results set should be returned. 
* page_size (array) - Number of records per page of results.  Max is 2000.
* sort_by (string) - Which column in the results should be used for sorting paginated results?

### Centers
By default this function returns a table of all consortium members in TCGA, aka centers; it provides both the HTTP domain and full organizational name of each center.  A subset of this table may be obtained by explicitly specifying one or more domain names.


```js
firebrowse.Centers({}, context)
```

#### Parameters
* format (string) - Format of result.
* center (array) - Narrow search to one or more TCGA centers from the scrollable list.

### ClinicalNames
Retrieve names of all patient-level clinical data elements (CDES) available in TCGA, unioned across all disease cohorts. A CDE will be listed here only when it has a value other than NA for at least 1 patient case in any disease cohort. For more information on how these CDEs are processed see our <a href="https://confluence.broadinstitute.org/display/GDAC/Documentation">pipeline documentation</a>.


```js
firebrowse.ClinicalNames({}, context)
```

#### Parameters
* format (string) - Format of result.

### ClinicalNames_FH
This service returns the names of patient-level clinical data elements (CDEs) that have been normalized by Firehose for use in analyses, unioned across all disease cohorts. For more information on how these CDEs are processed, see our <a href="https://confluence.broadinstitute.org/display/GDAC/Documentation">pipeline documentation</a>.


```js
firebrowse.ClinicalNames_FH({}, context)
```

#### Parameters
* format (string) - Format of result.

### Cohorts
By default this function returns a table containing all TCGA cohort abbreviations and their corresponding disease names.  A subset of that table may be obtained by explicitly specifying one or more cohort abbreviations.


```js
firebrowse.Cohorts({}, context)
```

#### Parameters
* format (string) - Format of result.
* cohort (array) - Narrow search to one or more TCGA disease cohorts from the scrollable list.

### Counts
Returns the aliquot counts for each disease cohort, per sample
type and data type.  The sample type designation of "Tumor"
may be used to aggregate the count of all tumor aliquots into
a single number per disease and data type. See the SampleTypes
function for a complete description of sample types.


```js
firebrowse.Counts({}, context)
```

#### Parameters
* format (string) - Format of result.
* date (array) - Select one or more date stamps.
* cohort (array) - Narrow search to one or more TCGA disease cohorts from the scrollable list.
* sample_type (array) - Narrow search to one or more TCGA sample types from the scrollable list.
* data_type (array) - Narrow search to one or more TCGA data types from the scrollable list.
* totals (boolean) - Output an entry providing the totals for each data type.
* sort_by (string) - Which column in the results should be used for sorting paginated results?

### Dates
Retrieve datestamps of all GDAC Firehose standard data and analyses runs that have been ingested into FireBrowse.


```js
firebrowse.Dates({}, context)
```

#### Parameters
* format (string) - Format of result.

### HeartBeat
Returns a message to indicate that API (server) is up and running, or times out if not.


```js
firebrowse.HeartBeat({}, context)
```

#### Parameters
* format (string) - Format of result.

### MAFColNames
Retrieve the names of all columns in the mutation annotation files (MAFs) hosted by FireBrowse.  For more information on the mutation data, and how it is processed by Firehose, please consult the <a href="https://confluence.broadinstitute.org/display/GDAC/Documentation#Documentation-MutationPipelines">pipeline documentation</a>.


```js
firebrowse.MAFColNames({}, context)
```

#### Parameters
* format (string) - Format of result.

### Patients
This service returns a list of all TCGA patient barcodes in FireBrowse, optionally filtered by disease cohort.  The barcodes are obtained directy from the clinical data.


```js
firebrowse.Patients({}, context)
```

#### Parameters
* format (string) - Format of result.
* cohort (array) - Narrow search to one or more TCGA disease cohorts from the scrollable list.
* page (array) - Which page (slice) of entire results set should be returned. 
* page_size (array) - Number of records per page of results.  Max is 2000.
* sort_by (string) - Which column in the results should be used for sorting paginated results?

### Platforms
By default this function returns a table of all of the technology platforms used to sequence or characterize samples in TCGA--both their short platform codes and full names.  A subset of this table may be obtained by explicitly specifying one or more platform codes.


```js
firebrowse.Platforms({}, context)
```

#### Parameters
* format (string) - Format of result.
* platform (array) - Narrow search to one or more TCGA data generation platforms from the scrollable list.

### Barcode
Given a TCGA barcode, return its short letter sample type code.


```js
firebrowse.Barcode({
  "TCGA_Barcode": ""
}, context)
```

#### Parameters
* format (string) - Format of result.
* TCGA_Barcode (string) **required** - Enter a single TCGA barcode, of any form: e.g. TCGA-GF-A4EO-06 or TCGA-EL-A3D5-01A-22D-A202-08

### Code
Convert a TCGA numeric sample type code (e.g. 01, 02) to its corresponding symbolic (short letter) code (e.g. TP, TR).


```js
firebrowse.Code({
  "code": []
}, context)
```

#### Parameters
* format (string) - Format of result.
* code (array) **required** - Narrow search to one or more TCGA sample type codes.

### ShortLetterCode
Convert a TCGA sample type code in symbolic form (or 'short letter code' like TP, TR) to its corresponding numeric form (e.g. 01, 02).


```js
firebrowse.ShortLetterCode({
  "short_letter_code": []
}, context)
```

#### Parameters
* format (string) - Format of result.
* short_letter_code (array) **required** - TCGA sample type short letter code(s) (e.g. TP, NB, etc.). 

### SampleTypes
Return all TCGA sample type codes, both numeric and symbolic.


```js
firebrowse.SampleTypes({}, context)
```

#### Parameters
* format (string) - Format of result.

### TSSites
By default this function returns a table of all sites which contributed source tissue to TCGA, aka TSS's. A subset of this table may be obtained by explicitly specifying one or more sites.


```js
firebrowse.TSSites({}, context)
```

#### Parameters
* format (string) - Format of result.
* tss_code (array) - Narrow search to one or more TSS codes

### Clinical
This service returns patient clinical data from TCGA, verbatim. It differs from the Samples/Clinical_FH method by providing access to all TCGA CDEs in their original form, not merely the subset of CDEs normalized by Firehose for analyses.  Results may be selected by disease cohort, patient barcode or CDE name, but at least one cohort, barcode, or CDE must be provided. When filtering by CDE note that only when a patient record contains one or more of the selected CDEs will it be returned. Visit the Metadata/ClinicalNames api function to see the entire list of TCGA CDEs that may be queried via this method. For more information on how clinical data are processed, see our <a href="https://confluence.broadinstitute.org/display/GDAC/Documentation#Documentation-ClinicalPipeline">pipeline documentation</a>.


```js
firebrowse.Clinical({}, context)
```

#### Parameters
* format (string) - Format of result.
* cohort (array) - Narrow search to one or more TCGA disease cohorts from the scrollable list.
* tcga_participant_barcode (array) - Comma separated list of TCGA participant barcodes (e.g. TCGA-GF-A4EO).
* cde_name (array) - Retrieve results only for specified CDEs, per the Metadata/ClinicalNames function
* page (array) - Which page (slice) of entire results set should be returned. 
* page_size (array) - Number of records per page of results.  Max is 2000.
* sort_by (string) - Which column in the results should be used for sorting paginated results?

### Clinical_FH
This service returns patient-level clinical data elements (CDEs) that have been normalized by Firehose for use in analyses. Results may be selected by disease cohort, patient barcode or CDE name, but at least one cohort, barcode or CDE must be provided. When filtering by CDE note that only when a  patient record contains one or more of the selected CDEs will it be returned. Visit <a href="http://gdac.broadinstitute.org/runs/info/clinical">this table of CDEs</a> to see what's available for every disase cohort; for more information on how these CDEs are processed see our <a href="https://confluence.broadinstitute.org/display/GDAC/Documentation#Documentation-ClinicalPipeline">pipeline documentation</a>.


```js
firebrowse.Clinical_FH({}, context)
```

#### Parameters
* format (string) - Format of result.
* cohort (array) - Narrow search to one or more TCGA disease cohorts from the scrollable list.
* tcga_participant_barcode (array) - Comma separated list of TCGA participant barcodes (e.g. TCGA-GF-A4EO).
* fh_cde_name (array) - Retrieve results only for the CDEs specified from the scrollable list.
* page (array) - Which page (slice) of entire results set should be returned. 
* page_size (array) - Number of records per page of results.  Max is 2000.
* sort_by (string) - Which column in the results should be used for sorting paginated results?

### mRNASeq
This service returns sample-level log2 mRNASeq expression values. Results may be filtered by gene, cohort, barcode, sample type or characterization protocol, but at least one gene must be supplied.


```js
firebrowse.mRNASeq({}, context)
```

#### Parameters
* format (string) - Format of result.
* gene (array) - Comma separated list of gene name(s).
* cohort (array) - Narrow search to one or more TCGA disease cohorts from the scrollable list.
* tcga_participant_barcode (array) - Comma separated list of TCGA participant barcodes (e.g. TCGA-GF-A4EO).
* sample_type (array) - Narrow search to one or more TCGA sample types from the scrollable list.
* protocol (array) - Narrow search to one or more sample characterization protocols from the scrollable list.
* page (array) - Which page (slice) of entire results set should be returned. 
* page_size (array) - Number of records per page of results.  Max is 2000.
* sort_by (string) - Which column in the results should be used for sorting paginated results?

### miRSeq
This service returns sample-level log2 miRSeq expression values. Results may be filtered by miR, cohort, barcode, sample type or Firehose preprocessing tool, but at least one miR must be supplied.


```js
firebrowse.miRSeq({}, context)
```

#### Parameters
* format (string) - Format of result.
* mir (array) - Comma separated list of miR names (e.g. hsa-let-7b-5p,hsa-let-7a-1).
* cohort (array) - Narrow search to one or more TCGA disease cohorts from the scrollable list.
* tcga_participant_barcode (array) - Comma separated list of TCGA participant barcodes (e.g. TCGA-GF-A4EO).
* tool (array) - Narrow search to include only data/results produced by the selected Firehose tool.
* sample_type (array) - Narrow search to one or more TCGA sample types from the scrollable list.
* page (array) - Which page (slice) of entire results set should be returned. 
* page_size (array) - Number of records per page of results.  Max is 2000.
* sort_by (string) - Which column in the results should be used for sorting paginated results?

