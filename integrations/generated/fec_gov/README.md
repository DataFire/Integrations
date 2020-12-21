# @datafire/fec_gov

Client library for OpenFEC

## Installation and Usage
```bash
npm install --save @datafire/fec_gov
```
```js
let fec_gov = require('@datafire/fec_gov').create({
  ApiKeyHeaderAuth: "",
  ApiKeyQueryAuth: "",
  apiKey: ""
});

.then(data => {
  console.log(data);
});
```

## Description

This application programming interface (API) allows you to explore the way candidates and committees fund their campaigns. 

 The Federal Election Commission (FEC) API is a RESTful web service supporting full-text and field-specific searches on FEC data. [Bulk downloads](https://www.fec.gov/data/advanced/?tab=bulk-data) are available on the current site. Information is tied to the underlying forms by file ID and image ID. Data is updated nightly. 

 There are a lot of data, and a good place to start is to use search to find interesting candidates and committees. Then, you can use their IDs to find report or line item details with the other endpoints. If you are interested in individual donors, check out contributor information in the `/schedule_a/` endpoints. 

 <b class="body" id="getting_started_head">Getting started with the openFEC API</b><br> 

 If you would like to use the FEC's API programmatically, you can sign up for your own API key using our form. Alternatively, you can still try out our API without an API key by using the web interface and using DEMO_KEY. Note that when you use the openFEC API you are subject to the [Terms of Service](https://github.com/fecgov/FEC/blob/master/TERMS-OF-SERVICE.md) and [Acceptable Use policy](https://github.com/fecgov/FEC/blob/master/ACCEPTABLE-USE-POLICY.md). 

 Signing up for an API key will enable you to place up to 1,000 calls an hour. Each call is limited to 100 results per page. You can email questions, comments or a request to get a key for 7,200 calls an hour (120 calls per minute) to <a href="mailto:APIinfo@fec.gov">APIinfo@fec.gov</a>. You can also ask questions and discuss the data in a community led [group](https://groups.google.com/forum/#!forum/fec-data). 

 The model definitions and schema are available at [/swagger](/swagger/). This is useful for making wrappers and exploring the data. 

 A few restrictions limit the way you can use FEC data. For example, you can’t use contributor lists for commercial purposes or to solicit donations. [Learn more here](https://www.fec.gov/updates/sale-or-use-contributor-information/). 

 [Inspect our source code](https://github.com/fecgov/openFEC). We welcome issues and pull requests! 

 <p><br></p> <h2 class="title" id="signup_head">Sign up for an API key</h2> <div id="apidatagov_signup">Loading signup form...</div>

## Actions

### audit_case.get

This endpoint contains Final Audit Reports approved by the Commission since inception.
The search can be based on information about the audited committee (Name, FEC ID Number, Type, 
Election Cycle) or the issues covered in the report.



```js
fec_gov.audit_case.get({
  "api_key": ""
}, context)
```

#### Input
* input `object`
  * per_page `integer`: The number of results returned per page. Defaults to 20.
  * cycle `array`: 
  * sort_hide_null `boolean`: Hide null values on sorted column(s).
  * committee_designation `string`: Type of committee:
  * api_key **required** `string`: 
  * committee_id `array`: 
  * primary_category_id `string`: 
  * audit_case_id `array`: 
  * sort `array`: Provide a field to sort by. Use - for descending order.
  * candidate_id `array`: 
  * audit_id `array`: 
  * committee_type `array`: The one-letter type code of the organization:
  * min_election_cycle `integer`: 
  * sort_null_only `boolean`: Toggle that filters out all rows having sort column that is non-null
  * sub_category_id `string`: 
  * page `integer`: For paginating through results, starting at page 1
  * max_election_cycle `integer`: 
  * q `array`: The name of the committee. If a committee changes its name,     the most recent name will be shown. Committee names are not unique. Use committee_id     for looking up records.
  * sort_nulls_last `boolean`: Toggle that sorts null values last
  * qq `array`: Name of candidate running for office

#### Output
* output [AuditCasePage](#auditcasepage)

### audit_category.get

This lists the options for the categories and subcategories available in the /audit-search/ endpoint.



```js
fec_gov.audit_category.get({
  "api_key": ""
}, context)
```

#### Input
* input `object`
  * per_page `integer`: The number of results returned per page. Defaults to 20.
  * sort_null_only `boolean`: Toggle that filters out all rows having sort column that is non-null
  * sort_hide_null `boolean`: Hide null values on sorted column(s).
  * primary_category_name `array`: Primary Audit Category
  * page `integer`: For paginating through results, starting at page 1
  * primary_category_id `array`: 
  * sort_nulls_last `boolean`: Toggle that sorts null values last
  * api_key **required** `string`: 
  * sort `string`: Provide a field to sort by. Use `-` for descending order.

#### Output
* output [AuditCategoryPage](#auditcategorypage)

### audit_primary_category.get

This lists the options for the primary categories available in the /audit-search/ endpoint.



```js
fec_gov.audit_primary_category.get({
  "api_key": ""
}, context)
```

#### Input
* input `object`
  * per_page `integer`: The number of results returned per page. Defaults to 20.
  * sort_null_only `boolean`: Toggle that filters out all rows having sort column that is non-null
  * sort_hide_null `boolean`: Hide null values on sorted column(s).
  * primary_category_name `array`: Primary Audit Category
  * page `integer`: For paginating through results, starting at page 1
  * primary_category_id `array`: 
  * sort_nulls_last `boolean`: Toggle that sorts null values last
  * api_key **required** `string`: 
  * sort `string`: Provide a field to sort by. Use `-` for descending order.

#### Output
* output [AuditPrimaryCategoryPage](#auditprimarycategorypage)

### calendar_dates.get

Combines the election and reporting dates with Commission meetings, conferences, outreach, Advisory Opinions, rules, litigation dates and other
events into one calendar.

State and report type filtering is no longer available.



```js
fec_gov.calendar_dates.get({
  "api_key": ""
}, context)
```

#### Input
* input `object`
  * per_page `integer`: The number of results returned per page. Defaults to 20.
  * min_end_date `string`: 
  * sort_null_only `boolean`: Toggle that filters out all rows having sort column that is non-null
  * max_end_date `string`: 
  * sort_hide_null `boolean`: Hide null values on sorted column(s).
  * page `integer`: For paginating through results, starting at page 1
  * description `array`: Brief description of event
  * event_id `integer`: An unique ID for an event. Useful for downloading a single event to your calendar. This ID is not a permanent, persistent ID.
  * summary `array`: Longer description of event
  * calendar_category_id `array`: 
  * min_start_date `string`: 
  * sort_nulls_last `boolean`: Toggle that sorts null values last
  * api_key **required** `string`: 
  * max_start_date `string`: 
  * sort `string`: Provide a field to sort by. Use `-` for descending order.

#### Output
* output [CalendarDatePage](#calendardatepage)

### calendar_dates.export.get

Returns CSV or ICS for downloading directly into calendar applications like Google, Outlook or other applications.

Combines the election and reporting dates with Commission meetings, conferences, outreach, Advisory Opinions, rules, litigation dates and other
events into one calendar.

State filtering now applies to elections, reports and reporting periods.

Presidential pre-primary report due dates are not shown on even years.
Filers generally opt to file monthly rather than submit over 50 pre-primary election
reports. All reporting deadlines are available at /reporting-dates/ for reference.

This is [the sql function](https://github.com/fecgov/openFEC/blob/develop/data/migrations/V40__omnibus_dates.sql)
that creates the calendar.




```js
fec_gov.calendar_dates.export.get({
  "api_key": ""
}, context)
```

#### Input
* input `object`
  * max_end_date `string`: 
  * min_end_date `string`: 
  * sort_null_only `boolean`: Toggle that filters out all rows having sort column that is non-null
  * per_page `integer`: The number of results returned per page. Defaults to 20.
  * sort_hide_null `boolean`: Hide null values on sorted column(s).
  * page `integer`: For paginating through results, starting at page 1
  * description `array`: Brief description of event
  * event_id `integer`: An unique ID for an event. Useful for downloading a single event to your calendar. This ID is not a permanent, persistent ID.
  * api_key **required** `string`: 
  * summary `array`: Longer description of event
  * calendar_category_id `array`: 
  * min_start_date `string`: 
  * sort_nulls_last `boolean`: Toggle that sorts null values last
  * renderer `string` (values: ics, csv)
  * max_start_date `string`: 
  * sort `string`: Provide a field to sort by. Use `-` for descending order.

#### Output
* output [CalendarDatePage](#calendardatepage)

### candidate.candidate_id.get

This endpoint is useful for finding detailed information about a particular candidate. Use the
`candidate_id` to find the most recent information about that candidate.



```js
fec_gov.candidate.candidate_id.get({
  "api_key": "",
  "candidate_id": ""
}, context)
```

#### Input
* input `object`
  * per_page `integer`: The number of results returned per page. Defaults to 20.
  * cycle `array`: 
  * sort_hide_null `boolean`: Hide null values on sorted column(s).
  * has_raised_funds `boolean`: A boolean that describes if a candidate's committee has ever received any receipts for their campaign for this particular office. (Candidates have separate candidate IDs for each office.)
  * district `array`: Two-digit US House distirict of the office the candidate is running for. Presidential, Senate and House at-large candidates will have District 00.
  * party `array`: Three-letter code for the party affiliated with a candidate or committee. For example, DEM for Democratic Party and REP for Republican Party.
  * candidate_status `array`: One-letter code explaining if the candidate is:
  * federal_funds_flag `boolean`: A boolean the describes if a presidential candidate has accepted federal funds. The flag will be false for House and Senate candidates.
  * sort `string`: Provide a field to sort by. Use `-` for descending order.
  * sort_null_only `boolean`: Toggle that filters out all rows having sort column that is non-null
  * incumbent_challenge `array`: One-letter code ('I', 'C', 'O') explaining if the candidate is an incumbent, a challenger, or if the seat is open.
  * election_year `array`: Year of election
  * office `array`: Federal office candidate runs for: H, S or P
  * year `string`: Retrieve records pertaining to a particular election year. The list of election years is based on a candidate filing a statement of candidacy (F2) for that year.
  * page `integer`: For paginating through results, starting at page 1
  * name `array`: Name (candidate or committee) to search for. Alias for 'q'.
  * state `array`: US state or territory where a candidate runs for office
  * sort_nulls_last `boolean`: Toggle that sorts null values last
  * api_key **required** `string`: 
  * candidate_id **required** `string`: 

#### Output
* output [CandidateDetailPage](#candidatedetailpage)

### candidate.candidate_id.committees.get

This endpoint is useful for finding detailed information about a particular committee or
filer. Use the `committee_id` to find the most recent information about the committee.



```js
fec_gov.candidate.candidate_id.committees.get({
  "api_key": "",
  "candidate_id": ""
}, context)
```

#### Input
* input `object`
  * committee_type `array`: The one-letter type code of the organization:
  * per_page `integer`: The number of results returned per page. Defaults to 20.
  * sort_null_only `boolean`: Toggle that filters out all rows having sort column that is non-null
  * cycle `array`: 
  * organization_type `array`: The one-letter code for the kind for organization:
  * sort_hide_null `boolean`: Hide null values on sorted column(s).
  * year `array`: A year that the committee was active— (after original registration date     or filing but before expiration date)
  * page `integer`: For paginating through results, starting at page 1
  * sort_nulls_last `boolean`: Toggle that sorts null values last
  * api_key **required** `string`: 
  * designation `array`: The one-letter designation code of the organization:
  * sort `string`: Provide a field to sort by. Use `-` for descending order.
  * filing_frequency `array`: The one-letter 
  * candidate_id **required** `string`: 

#### Output
* output [CommitteeDetailPage](#committeedetailpage)

### candidate.candidate_id.committees.history.get

Explore a filer's characteristics over time. This can be particularly useful if the
committees change treasurers, designation, or `committee_type`.



```js
fec_gov.candidate.candidate_id.committees.history.get({
  "api_key": "",
  "candidate_id": ""
}, context)
```

#### Input
* input `object`
  * per_page `integer`: The number of results returned per page. Defaults to 20.
  * sort_null_only `boolean`: Toggle that filters out all rows having sort column that is non-null
  * election_full `boolean`: `True` indicates that full election period of a candidate.
  * sort_hide_null `boolean`: Hide null values on sorted column(s).
  * page `integer`: For paginating through results, starting at page 1
  * sort_nulls_last `boolean`: Toggle that sorts null values last
  * api_key **required** `string`: 
  * designation `array`: The one-letter designation code of the organization:
  * sort `string`: Provide a field to sort by. Use `-` for descending order.
  * candidate_id **required** `string`: 

#### Output
* output [CommitteeHistoryPage](#committeehistorypage)

### candidate.candidate_id.committees.history.cycle.get

Explore a filer's characteristics over time. This can be particularly useful if the
committees change treasurers, designation, or `committee_type`.



```js
fec_gov.candidate.candidate_id.committees.history.cycle.get({
  "api_key": "",
  "candidate_id": "",
  "cycle": 0
}, context)
```

#### Input
* input `object`
  * per_page `integer`: The number of results returned per page. Defaults to 20.
  * sort_null_only `boolean`: Toggle that filters out all rows having sort column that is non-null
  * election_full `boolean`: `True` indicates that full election period of a candidate.
  * sort_hide_null `boolean`: Hide null values on sorted column(s).
  * page `integer`: For paginating through results, starting at page 1
  * sort_nulls_last `boolean`: Toggle that sorts null values last
  * api_key **required** `string`: 
  * designation `array`: The one-letter designation code of the organization:
  * sort `string`: Provide a field to sort by. Use `-` for descending order.
  * candidate_id **required** `string`: 
  * cycle **required** `integer`: 

#### Output
* output [CommitteeHistoryPage](#committeehistorypage)

### candidate.candidate_id.filings.get

All official records and reports filed by or delivered to the FEC.

Note: because the filings data includes many records, counts for large
result sets are approximate; you will want to page through the records until no records are returned.



```js
fec_gov.candidate.candidate_id.filings.get({
  "api_key": "",
  "candidate_id": ""
}, context)
```

#### Input
* input `object`
  * document_type `array`: 
  * primary_general_indicator `array`: 
  * per_page `integer`: The number of results returned per page. Defaults to 20.
  * amendment_indicator `array`: Amendent types:
  * cycle `array`: 
  * request_type `array`: Requests for additional information (RFAIs) sent to filers. The request type is based on the type of document filed:
  * sort_hide_null `boolean`: Hide null values on sorted column(s).
  * min_receipt_date `string`: 
  * most_recent `boolean`: 
  * file_number `array`: Filing ID number
  * api_key **required** `string`: 
  * district `array`: Two-digit US House distirict of the office the candidate is running for. Presidential, Senate and House at-large candidates will have District 00.
  * form_type `array`: The form where the underlying data comes from, for example, Form 1 would appear as F1:
  * party `array`: Three-letter code for the party affiliated with a candidate or committee. For example, DEM for Democratic Party and REP for Republican Party.
  * sort `array`: Provide a field to sort by. Use - for descending order.
  * is_amended `boolean`: 
  * committee_type `string`: The one-letter type code of the organization:
  * sort_null_only `boolean`: Toggle that filters out all rows having sort column that is non-null
  * form_category `array`: 
  * beginning_image_number `array`: 
  * office `array`: Federal office candidate runs for: H, S or P
  * page `integer`: For paginating through results, starting at page 1
  * report_type `array`: Name of report where the underlying data comes from:
  * filer_type `string` (values: e-file, paper): The method used to file with the FEC, either electronic or on paper.
  * state `array`: US state or territory where a candidate runs for office
  * sort_nulls_last `boolean`: Toggle that sorts null values last
  * max_receipt_date `string`: 
  * report_year `array`: 
  * candidate_id **required** `string`: 

#### Output
* output [FilingsPage](#filingspage)

### candidate.candidate_id.history.get

Find out a candidate's characteristics over time. This is particularly useful if the
candidate runs for the same office in different districts or you want to know more about a candidate's
previous races.

This information is organized by `candidate_id`, so it won't help you find a candidate
who ran for different offices over time; candidates get a new ID for each office.



```js
fec_gov.candidate.candidate_id.history.get({
  "api_key": "",
  "candidate_id": ""
}, context)
```

#### Input
* input `object`
  * per_page `integer`: The number of results returned per page. Defaults to 20.
  * sort_null_only `boolean`: Toggle that filters out all rows having sort column that is non-null
  * sort_hide_null `boolean`: Hide null values on sorted column(s).
  * sort_nulls_last `boolean`: Toggle that sorts null values last
  * election_full `boolean`: `True` indicates that full election period of a candidate.
  * api_key **required** `string`: 
  * page `integer`: For paginating through results, starting at page 1
  * sort `string`: Provide a field to sort by. Use `-` for descending order.
  * candidate_id **required** `string`: 

#### Output
* output [CandidateHistoryPage](#candidatehistorypage)

### candidate.candidate_id.history.cycle.get

Find out a candidate's characteristics over time. This is particularly useful if the
candidate runs for the same office in different districts or you want to know more about a candidate's
previous races.

This information is organized by `candidate_id`, so it won't help you find a candidate
who ran for different offices over time; candidates get a new ID for each office.



```js
fec_gov.candidate.candidate_id.history.cycle.get({
  "api_key": "",
  "candidate_id": "",
  "cycle": 0
}, context)
```

#### Input
* input `object`
  * per_page `integer`: The number of results returned per page. Defaults to 20.
  * sort_null_only `boolean`: Toggle that filters out all rows having sort column that is non-null
  * sort_hide_null `boolean`: Hide null values on sorted column(s).
  * sort_nulls_last `boolean`: Toggle that sorts null values last
  * election_full `boolean`: `True` indicates that full election period of a candidate.
  * api_key **required** `string`: 
  * page `integer`: For paginating through results, starting at page 1
  * sort `string`: Provide a field to sort by. Use `-` for descending order.
  * candidate_id **required** `string`: 
  * cycle **required** `integer`: 

#### Output
* output [CandidateHistoryPage](#candidatehistorypage)

### candidate.candidate_id.totals.get

This endpoint provides information about a committee's Form 3, Form 3X, or Form 3P financial reports,
which are aggregated by two-year period. We refer to two-year periods as a `cycle`.

The cycle is named after the even-numbered year and includes the year before it. To obtain
totals from 2013 and 2014, you would use 2014. In odd-numbered years, the current cycle
is the next year — for example, in 2015, the current cycle is 2016.

For presidential and Senate candidates, multiple two-year cycles exist between elections.

Parameter `full_election` is replaced by `election_full`. Please use `election_full` instead.



```js
fec_gov.candidate.candidate_id.totals.get({
  "api_key": "",
  "candidate_id": ""
}, context)
```

#### Input
* input `object`
  * per_page `integer`: The number of results returned per page. Defaults to 20.
  * sort_null_only `boolean`: Toggle that filters out all rows having sort column that is non-null
  * cycle `array`: 
  * sort_hide_null `boolean`: Hide null values on sorted column(s).
  * full_election `boolean`: Parameter `full_election` is replaced by `election_full`. Please use `election_full` instead.
  * page `integer`: For paginating through results, starting at page 1
  * sort_nulls_last `boolean`: Toggle that sorts null values last
  * election_full `boolean`: `True` indicates that full election period of a candidate.
  * api_key **required** `string`: 
  * sort `string`: Provide a field to sort by. Use `-` for descending order.
  * candidate_id **required** `string`: 

#### Output
* output [CommitteeTotalsPage](#committeetotalspage)

### candidates.get

Fetch basic information about candidates, and use parameters to filter results to the
candidates you're looking for.

Each result reflects a unique FEC candidate ID. That ID is particular to the candidate for a
particular office sought. If a candidate runs for the same office multiple times, the ID
stays the same. If the same person runs for another office — for example, a House
candidate runs for a Senate office — that candidate will get a unique ID for each office.



```js
fec_gov.candidates.get({
  "api_key": ""
}, context)
```

#### Input
* input `object`
  * per_page `integer`: The number of results returned per page. Defaults to 20.
  * cycle `array`: 
  * sort_hide_null `boolean`: Hide null values on sorted column(s).
  * min_first_file_date `string`: Selects all candidates whose first filing was received by the FEC after this date.
  * max_first_file_date `string`: Selects all candidates whose first filing was received by the FEC before this date.
  * has_raised_funds `boolean`: A boolean that describes if a candidate's committee has ever received any receipts for their campaign for this particular office. (Candidates have separate candidate IDs for each office.)
  * district `array`: Two-digit US House distirict of the office the candidate is running for. Presidential, Senate and House at-large candidates will have District 00.
  * party `array`: Three-letter code for the party affiliated with a candidate or committee. For example, DEM for Democratic Party and REP for Republican Party.
  * candidate_status `array`: One-letter code explaining if the candidate is:
  * federal_funds_flag `boolean`: A boolean the describes if a presidential candidate has accepted federal funds. The flag will be false for House and Senate candidates.
  * sort `string`: Provide a field to sort by. Use `-` for descending order.
  * candidate_id `array`: 
  * sort_null_only `boolean`: Toggle that filters out all rows having sort column that is non-null
  * incumbent_challenge `array`: One-letter code ('I', 'C', 'O') explaining if the candidate is an incumbent, a challenger, or if the seat is open.
  * election_year `array`: Year of election
  * office `array`: Federal office candidate runs for: H, S or P
  * year `string`: Retrieve records pertaining to a particular election year. The list of election years is based on a candidate filing a statement of candidacy (F2) for that year.
  * page `integer`: For paginating through results, starting at page 1
  * name `array`: Name (candidate or committee) to search for. Alias for 'q'.
  * is_active_candidate `boolean`:  Candidates who are actively seeking office. If no value is specified, all candidates
  * state `array`: US state or territory where a candidate runs for office
  * q `array`: Name of candidate running for office
  * sort_nulls_last `boolean`: Toggle that sorts null values last
  * api_key **required** `string`: 

#### Output
* output [CandidatePage](#candidatepage)

### candidates.search.get

Fetch basic information about candidates and their principal committees.

Each result reflects a unique FEC candidate ID. That ID is assigned to the candidate for a
particular office sought. If a candidate runs for the same office over time, that ID
stays the same. If the same person runs for multiple offices — for example, a House
candidate runs for a Senate office — that candidate will get a unique ID for each office.

The candidate endpoints primarily use data from FEC registration
[Form 1](http://www.fec.gov/pdf/forms/fecfrm1.pdf), for candidate information, and
[Form 2](http://www.fec.gov/pdf/forms/fecfrm2.pdf), for committees information, with additional information
to provide context.



```js
fec_gov.candidates.search.get({
  "api_key": ""
}, context)
```

#### Input
* input `object`
  * per_page `integer`: The number of results returned per page. Defaults to 20.
  * cycle `array`: 
  * sort_hide_null `boolean`: Hide null values on sorted column(s).
  * min_first_file_date `string`: Selects all candidates whose first filing was received by the FEC after this date.
  * max_first_file_date `string`: Selects all candidates whose first filing was received by the FEC before this date.
  * has_raised_funds `boolean`: A boolean that describes if a candidate's committee has ever received any receipts for their campaign for this particular office. (Candidates have separate candidate IDs for each office.)
  * district `array`: Two-digit US House distirict of the office the candidate is running for. Presidential, Senate and House at-large candidates will have District 00.
  * party `array`: Three-letter code for the party affiliated with a candidate or committee. For example, DEM for Democratic Party and REP for Republican Party.
  * candidate_status `array`: One-letter code explaining if the candidate is:
  * federal_funds_flag `boolean`: A boolean the describes if a presidential candidate has accepted federal funds. The flag will be false for House and Senate candidates.
  * sort `string`: Provide a field to sort by. Use `-` for descending order.
  * candidate_id `array`: 
  * sort_null_only `boolean`: Toggle that filters out all rows having sort column that is non-null
  * incumbent_challenge `array`: One-letter code ('I', 'C', 'O') explaining if the candidate is an incumbent, a challenger, or if the seat is open.
  * election_year `array`: Year of election
  * office `array`: Federal office candidate runs for: H, S or P
  * year `string`: Retrieve records pertaining to a particular election year. The list of election years is based on a candidate filing a statement of candidacy (F2) for that year.
  * page `integer`: For paginating through results, starting at page 1
  * name `array`: Name (candidate or committee) to search for. Alias for 'q'.
  * is_active_candidate `boolean`:  Candidates who are actively seeking office. If no value is specified, all candidates
  * state `array`: US state or territory where a candidate runs for office
  * q `array`: Name of candidate running for office
  * sort_nulls_last `boolean`: Toggle that sorts null values last
  * api_key **required** `string`: 

#### Output
* output [CandidatePage](#candidatepage)

### candidates.totals.get

Aggregated candidate receipts and disbursements grouped by cycle.



```js
fec_gov.candidates.totals.get({
  "api_key": ""
}, context)
```

#### Input
* input `object`
  * per_page `integer`: The number of results returned per page. Defaults to 20.
  * cycle `array`: 
  * min_receipts `string`: Minimum aggregated receipts
  * sort_hide_null `boolean`: Hide null values on sorted column(s).
  * election_full `boolean`: `True` indicates that full election period of a candidate.
  * max_receipts `string`: Maximum aggregated receipts
  * min_disbursements `string`: Minimum aggregated disbursements
  * has_raised_funds `boolean`: A boolean that describes if a candidate's committee has ever received any receipts for their campaign for this particular office. (Candidates have separate candidate IDs for each office.)
  * district `array`: District of candidate
  * party `array`: Three-letter party code
  * min_debts_owed_by_committee `string`: Minimum debt
  * federal_funds_flag `boolean`: A boolean the describes if a presidential candidate has accepted federal funds. The flag will be false for House and Senate candidates.
  * sort `string`: Provide a field to sort by. Use `-` for descending order.
  * candidate_id `array`: 
  * max_debts_owed_by_committee `string`: Maximum debt
  * sort_null_only `boolean`: Toggle that filters out all rows having sort column that is non-null
  * election_year `array`: 
  * office `array`: Federal office candidate runs for: H, S or P
  * max_cash_on_hand_end_period `string`: Maximum cash on hand
  * page `integer`: For paginating through results, starting at page 1
  * max_disbursements `string`: Maximum aggregated disbursements
  * is_active_candidate `boolean`:  Candidates who are actively seeking office. If no value is specified, all candidates
  * state `array`: State of candidate
  * q `array`: Name of candidate running for office
  * sort_nulls_last `boolean`: Toggle that sorts null values last
  * api_key **required** `string`: 
  * min_cash_on_hand_end_period `string`: Minimum cash on hand

#### Output
* output [CandidateHistoryTotalPage](#candidatehistorytotalpage)

### candidates.totals.by_office.get
 Aggregated candidate receipts and disbursements grouped by office by cycle.



```js
fec_gov.candidates.totals.by_office.get({
  "api_key": ""
}, context)
```

#### Input
* input `object`
  * per_page `integer`: The number of results returned per page. Defaults to 20.
  * sort_null_only `boolean`: Toggle that filters out all rows having sort column that is non-null
  * election_year `array`: 
  * sort_hide_null `boolean`: Hide null values on sorted column(s).
  * office `string` (values: , H, S, P): Federal office candidate runs for: H, S or P
  * page `integer`: For paginating through results, starting at page 1
  * is_active_candidate `boolean`:  Candidates who are actively seeking office. If no value is specified, all candidates
  * sort_nulls_last `boolean`: Toggle that sorts null values last
  * api_key **required** `string`: 
  * sort `string`: Provide a field to sort by. Use `-` for descending order.

#### Output
* output [TotalByOfficePage](#totalbyofficepage)

### candidates.totals.by_office.by_party.get
 Aggregated candidate receipts and disbursements grouped by office by party by cycle.



```js
fec_gov.candidates.totals.by_office.by_party.get({
  "api_key": ""
}, context)
```

#### Input
* input `object`
  * per_page `integer`: The number of results returned per page. Defaults to 20.
  * sort_null_only `boolean`: Toggle that filters out all rows having sort column that is non-null
  * election_year `array`: 
  * sort_hide_null `boolean`: Hide null values on sorted column(s).
  * office `string` (values: , H, S, P): Federal office candidate runs for: H, S or P
  * page `integer`: For paginating through results, starting at page 1
  * is_active_candidate `boolean`:  Candidates who are actively seeking office. If no value is specified, all candidates
  * sort_nulls_last `boolean`: Toggle that sorts null values last
  * api_key **required** `string`: 
  * sort `string`: Provide a field to sort by. Use `-` for descending order.

#### Output
* output [TotalByOfficeByPartyPage](#totalbyofficebypartypage)

### committee.committee_id.get

This endpoint is useful for finding detailed information about a particular committee or
filer. Use the `committee_id` to find the most recent information about the committee.



```js
fec_gov.committee.committee_id.get({
  "api_key": "",
  "committee_id": ""
}, context)
```

#### Input
* input `object`
  * committee_type `array`: The one-letter type code of the organization:
  * per_page `integer`: The number of results returned per page. Defaults to 20.
  * sort_null_only `boolean`: Toggle that filters out all rows having sort column that is non-null
  * cycle `array`: 
  * organization_type `array`: The one-letter code for the kind for organization:
  * sort_hide_null `boolean`: Hide null values on sorted column(s).
  * year `array`: A year that the committee was active— (after original registration date     or filing but before expiration date)
  * page `integer`: For paginating through results, starting at page 1
  * sort_nulls_last `boolean`: Toggle that sorts null values last
  * api_key **required** `string`: 
  * designation `array`: The one-letter designation code of the organization:
  * sort `string`: Provide a field to sort by. Use `-` for descending order.
  * filing_frequency `array`: The one-letter 
  * committee_id **required** `string`: 

#### Output
* output [CommitteeDetailPage](#committeedetailpage)

### committee.committee_id.candidates.get

This endpoint is useful for finding detailed information about a particular candidate. Use the
`candidate_id` to find the most recent information about that candidate.



```js
fec_gov.committee.committee_id.candidates.get({
  "api_key": "",
  "committee_id": ""
}, context)
```

#### Input
* input `object`
  * per_page `integer`: The number of results returned per page. Defaults to 20.
  * cycle `array`: 
  * sort_hide_null `boolean`: Hide null values on sorted column(s).
  * has_raised_funds `boolean`: A boolean that describes if a candidate's committee has ever received any receipts for their campaign for this particular office. (Candidates have separate candidate IDs for each office.)
  * district `array`: Two-digit US House distirict of the office the candidate is running for. Presidential, Senate and House at-large candidates will have District 00.
  * party `array`: Three-letter code for the party affiliated with a candidate or committee. For example, DEM for Democratic Party and REP for Republican Party.
  * candidate_status `array`: One-letter code explaining if the candidate is:
  * federal_funds_flag `boolean`: A boolean the describes if a presidential candidate has accepted federal funds. The flag will be false for House and Senate candidates.
  * sort `string`: Provide a field to sort by. Use `-` for descending order.
  * sort_null_only `boolean`: Toggle that filters out all rows having sort column that is non-null
  * incumbent_challenge `array`: One-letter code ('I', 'C', 'O') explaining if the candidate is an incumbent, a challenger, or if the seat is open.
  * election_year `array`: Year of election
  * office `array`: Federal office candidate runs for: H, S or P
  * year `string`: Retrieve records pertaining to a particular election year. The list of election years is based on a candidate filing a statement of candidacy (F2) for that year.
  * page `integer`: For paginating through results, starting at page 1
  * name `array`: Name (candidate or committee) to search for. Alias for 'q'.
  * state `array`: US state or territory where a candidate runs for office
  * sort_nulls_last `boolean`: Toggle that sorts null values last
  * api_key **required** `string`: 
  * committee_id **required** `string`: 

#### Output
* output [CandidateDetailPage](#candidatedetailpage)

### committee.committee_id.candidates.history.get

Find out a candidate's characteristics over time. This is particularly useful if the
candidate runs for the same office in different districts or you want to know more about a candidate's
previous races.

This information is organized by `candidate_id`, so it won't help you find a candidate
who ran for different offices over time; candidates get a new ID for each office.



```js
fec_gov.committee.committee_id.candidates.history.get({
  "api_key": "",
  "committee_id": ""
}, context)
```

#### Input
* input `object`
  * per_page `integer`: The number of results returned per page. Defaults to 20.
  * sort_null_only `boolean`: Toggle that filters out all rows having sort column that is non-null
  * sort_hide_null `boolean`: Hide null values on sorted column(s).
  * sort_nulls_last `boolean`: Toggle that sorts null values last
  * election_full `boolean`: `True` indicates that full election period of a candidate.
  * api_key **required** `string`: 
  * page `integer`: For paginating through results, starting at page 1
  * sort `string`: Provide a field to sort by. Use `-` for descending order.
  * committee_id **required** `string`: 

#### Output
* output [CandidateHistoryPage](#candidatehistorypage)

### committee.committee_id.candidates.history.cycle.get

Find out a candidate's characteristics over time. This is particularly useful if the
candidate runs for the same office in different districts or you want to know more about a candidate's
previous races.

This information is organized by `candidate_id`, so it won't help you find a candidate
who ran for different offices over time; candidates get a new ID for each office.



```js
fec_gov.committee.committee_id.candidates.history.cycle.get({
  "api_key": "",
  "committee_id": "",
  "cycle": 0
}, context)
```

#### Input
* input `object`
  * per_page `integer`: The number of results returned per page. Defaults to 20.
  * sort_null_only `boolean`: Toggle that filters out all rows having sort column that is non-null
  * sort_hide_null `boolean`: Hide null values on sorted column(s).
  * sort_nulls_last `boolean`: Toggle that sorts null values last
  * election_full `boolean`: `True` indicates that full election period of a candidate.
  * api_key **required** `string`: 
  * page `integer`: For paginating through results, starting at page 1
  * sort `string`: Provide a field to sort by. Use `-` for descending order.
  * committee_id **required** `string`: 
  * cycle **required** `integer`: 

#### Output
* output [CandidateHistoryPage](#candidatehistorypage)

### committee.committee_id.filings.get

All official records and reports filed by or delivered to the FEC.

Note: because the filings data includes many records, counts for large
result sets are approximate; you will want to page through the records until no records are returned.



```js
fec_gov.committee.committee_id.filings.get({
  "api_key": "",
  "committee_id": ""
}, context)
```

#### Input
* input `object`
  * document_type `array`: 
  * primary_general_indicator `array`: 
  * per_page `integer`: The number of results returned per page. Defaults to 20.
  * amendment_indicator `array`: Amendent types:
  * cycle `array`: 
  * request_type `array`: Requests for additional information (RFAIs) sent to filers. The request type is based on the type of document filed:
  * sort_hide_null `boolean`: Hide null values on sorted column(s).
  * min_receipt_date `string`: 
  * most_recent `boolean`: 
  * file_number `array`: Filing ID number
  * api_key **required** `string`: 
  * district `array`: Two-digit US House distirict of the office the candidate is running for. Presidential, Senate and House at-large candidates will have District 00.
  * form_type `array`: The form where the underlying data comes from, for example, Form 1 would appear as F1:
  * party `array`: Three-letter code for the party affiliated with a candidate or committee. For example, DEM for Democratic Party and REP for Republican Party.
  * sort `array`: Provide a field to sort by. Use - for descending order.
  * is_amended `boolean`: 
  * committee_type `string`: The one-letter type code of the organization:
  * sort_null_only `boolean`: Toggle that filters out all rows having sort column that is non-null
  * form_category `array`: 
  * beginning_image_number `array`: 
  * office `array`: Federal office candidate runs for: H, S or P
  * page `integer`: For paginating through results, starting at page 1
  * report_type `array`: Name of report where the underlying data comes from:
  * filer_type `string` (values: e-file, paper): The method used to file with the FEC, either electronic or on paper.
  * state `array`: US state or territory where a candidate runs for office
  * sort_nulls_last `boolean`: Toggle that sorts null values last
  * max_receipt_date `string`: 
  * report_year `array`: 
  * committee_id **required** `string`: 

#### Output
* output [FilingsPage](#filingspage)

### committee.committee_id.history.get

Explore a filer's characteristics over time. This can be particularly useful if the
committees change treasurers, designation, or `committee_type`.



```js
fec_gov.committee.committee_id.history.get({
  "api_key": "",
  "committee_id": ""
}, context)
```

#### Input
* input `object`
  * per_page `integer`: The number of results returned per page. Defaults to 20.
  * sort_null_only `boolean`: Toggle that filters out all rows having sort column that is non-null
  * election_full `boolean`: `True` indicates that full election period of a candidate.
  * sort_hide_null `boolean`: Hide null values on sorted column(s).
  * page `integer`: For paginating through results, starting at page 1
  * sort_nulls_last `boolean`: Toggle that sorts null values last
  * api_key **required** `string`: 
  * designation `array`: The one-letter designation code of the organization:
  * sort `string`: Provide a field to sort by. Use `-` for descending order.
  * committee_id **required** `string`: 

#### Output
* output [CommitteeHistoryPage](#committeehistorypage)

### committee.committee_id.history.cycle.get

Explore a filer's characteristics over time. This can be particularly useful if the
committees change treasurers, designation, or `committee_type`.



```js
fec_gov.committee.committee_id.history.cycle.get({
  "api_key": "",
  "committee_id": "",
  "cycle": 0
}, context)
```

#### Input
* input `object`
  * per_page `integer`: The number of results returned per page. Defaults to 20.
  * sort_null_only `boolean`: Toggle that filters out all rows having sort column that is non-null
  * election_full `boolean`: `True` indicates that full election period of a candidate.
  * sort_hide_null `boolean`: Hide null values on sorted column(s).
  * page `integer`: For paginating through results, starting at page 1
  * sort_nulls_last `boolean`: Toggle that sorts null values last
  * api_key **required** `string`: 
  * designation `array`: The one-letter designation code of the organization:
  * sort `string`: Provide a field to sort by. Use `-` for descending order.
  * committee_id **required** `string`: 
  * cycle **required** `integer`: 

#### Output
* output [CommitteeHistoryPage](#committeehistorypage)

### committee.committee_id.reports.get

Each report represents the summary information from Form 3, Form 3X and Form 3P.
These reports have key statistics that illuminate the financial status of a given committee.
Things like cash on hand, debts owed by committee, total receipts, and total disbursements
are especially helpful for understanding a committee's financial dealings.

By default, this endpoint includes both amended and final versions of each report. To restrict
to only the final versions of each report, use `is_amended=false`; to retrieve only reports that
have been amended, use `is_amended=true`.

Several different reporting structures exist, depending on the type of organization that
submits financial information. To see an example of these reporting requirements,
look at the summary and detailed summary pages of Form 3, Form 3X, and Form 3P.

DISCLAIMER: The field labels contained within this resource are subject to change.  We are attempting to succinctly
label these fields while conveying clear meaning to ensure accessibility for all users.



```js
fec_gov.committee.committee_id.reports.get({
  "api_key": "",
  "committee_id": ""
}, context)
```

#### Input
* input `object`
  * per_page `integer`: The number of results returned per page. Defaults to 20.
  * cycle `array`: 
  * sort_hide_null `boolean`: Hide null values on sorted column(s).
  * min_independent_expenditures `string`: 
  * min_debts_owed_amount `string`: 
  * max_party_coordinated_expenditures `string`: 
  * min_disbursements_amount `string`: 
  * min_total_contributions `string`: 
  * min_receipts_amount `string`: 
  * sort `array`: Provide a field to sort by. Use - for descending order.
  * is_amended `boolean`: 
  * sort_null_only `boolean`: Toggle that filters out all rows having sort column that is non-null
  * beginning_image_number `array`: 
  * year `array`: 
  * page `integer`: For paginating through results, starting at page 1
  * max_total_contributions `string`: 
  * max_debts_owed_expenditures `string`: 
  * report_type `array`: Report type; prefix with "-" to exclude. Name of report where the underlying data comes from:
  * min_party_coordinated_expenditures `string`: 
  * max_independent_expenditures `string`: 
  * max_receipts_amount `string`: 
  * candidate_id `string`: 
  * sort_nulls_last `boolean`: Toggle that sorts null values last
  * api_key **required** `string`: 
  * max_disbursements_amount `string`: 
  * type `array`: The one-letter type code of the organization:
  * max_cash_on_hand_end_period_amount `string`: 
  * min_cash_on_hand_end_period_amount `string`: 
  * committee_id **required** `string`: 

#### Output
* output [CommitteeReportsPage](#committeereportspage)

### committee.committee_id.totals.get

This endpoint provides information about a committee's Form 3, Form 3X, or Form 3P financial reports,
which are aggregated by two-year period. We refer to two-year periods as a `cycle`.

The cycle is named after the even-numbered year and includes the year before it. To obtain
totals from 2013 and 2014, you would use 2014. In odd-numbered years, the current cycle
is the next year — for example, in 2015, the current cycle is 2016.

For presidential and Senate candidates, multiple two-year cycles exist between elections.

Parameter `full_election` is replaced by `election_full`. Please use `election_full` instead.



```js
fec_gov.committee.committee_id.totals.get({
  "api_key": "",
  "committee_id": ""
}, context)
```

#### Input
* input `object`
  * per_page `integer`: The number of results returned per page. Defaults to 20.
  * sort_null_only `boolean`: Toggle that filters out all rows having sort column that is non-null
  * cycle `array`: 
  * sort_hide_null `boolean`: Hide null values on sorted column(s).
  * page `integer`: For paginating through results, starting at page 1
  * sort `string`: Provide a field to sort by. Use `-` for descending order.
  * sort_nulls_last `boolean`: Toggle that sorts null values last
  * api_key **required** `string`: 
  * designation `string`: The one-letter designation code of the organization:
  * type `string`: The one-letter type code of the organization:
  * committee_id **required** `string`: 

#### Output
* output [CommitteeTotalsPage](#committeetotalspage)

### committees.get

Fetch basic information about committees and filers. Use parameters to filter for
particular characteristics.




```js
fec_gov.committees.get({
  "api_key": ""
}, context)
```

#### Input
* input `object`
  * per_page `integer`: The number of results returned per page. Defaults to 20.
  * cycle `array`: 
  * max_last_f1_date `string`: Filter for committees whose latest Form 1 was received on or before this date.
  * sort_hide_null `boolean`: Hide null values on sorted column(s).
  * sponsor_candidate_id `array`: 
  * min_first_file_date `string`: Filter for committees whose first filing was received on or after this date.
  * treasurer_name `array`: Name of the Committee's treasurer. If multiple treasurers for the committee, the most recent treasurer will be shown.
  * max_first_file_date `string`: Filter for committees whose first filing was received on or before this date.
  * api_key **required** `string`: 
  * committee_id `array`: 
  * party `array`: Three-letter code for the party affiliated with a candidate or committee. For example, DEM for Democratic Party and REP for Republican Party.
  * sort `string`: Provide a field to sort by. Use `-` for descending order.
  * candidate_id `array`: 
  * filing_frequency `array`: The one-letter 
  * committee_type `array`: The one-letter type code of the organization:
  * sort_null_only `boolean`: Toggle that filters out all rows having sort column that is non-null
  * organization_type `array`: The one-letter code for the kind for organization:
  * year `array`: A year that the committee was active— (after original registration date     or filing but before expiration date)
  * page `integer`: For paginating through results, starting at page 1
  * state `array`: US state or territory
  * q `array`: The name of the committee. If a committee changes its name,     the most recent name will be shown. Committee names are not unique. Use committee_id     for looking up records.
  * sort_nulls_last `boolean`: Toggle that sorts null values last
  * min_last_f1_date `string`: Filter for committees whose latest Form 1 was received on or after this date.
  * designation `array`: The one-letter designation code of the organization:

#### Output
* output [CommitteePage](#committeepage)

### communication_costs.get

<b>Deprecation notice: This endpoint will be replaced with a new endpoint  `/communication_costs/`, so that the pagination schema will be in line with the other endpoints sharing the "communication cost" tag.</b>

52 U.S.C. 30118 allows "communications by a corporation to its stockholders and executive or administrative personnel and their families or by a labor organization to its members and their families on any subject," including the express advocacy of the election or defeat of any Federal candidate.  The costs of such communications must be reported to the Federal Election Commission under certain circumstances.



```js
fec_gov.communication_costs.get({
  "api_key": ""
}, context)
```

#### Input
* input `object`
  * per_page `integer`: The number of results returned per page. Defaults to 20.
  * max_amount `string`: Filter for all amounts less than a value.
  * line_number `string`: Filter for form and line number using the following format: `FORM-LINENUMBER`.  For example an argument such as `F3X-16` would filter down to all entries from form `F3X` line number `16`.
  * sort_hide_null `boolean`: Hide null values on sorted column(s).
  * min_image_number `string`
  * committee_id `array`: 
  * min_date `string`: Minimum date
  * sort `string`: Provide a field to sort by. Use `-` for descending order.
  * sort_null_only `boolean`: Toggle that filters out all rows having sort column that is non-null
  * image_number `array`: The image number of the page where the schedule item is reported
  * page `integer`: For paginating through results, starting at page 1
  * max_image_number `string`
  * min_amount `string`: Filter for all amounts greater than a value.
  * support_oppose_indicator `array`: Support or opposition
  * max_date `string`: Maximum date
  * candidate_id `array`: 
  * sort_nulls_last `boolean`: Toggle that sorts null values last
  * api_key **required** `string`: 

#### Output
* output [CommunicationCostPage](#communicationcostpage)

### communication_costs.get

52 U.S.C. 30118 allows "communications by a corporation to its stockholders and executive or administrative personnel and their families or by a labor organization to its members and their families on any subject," including the express advocacy of the election or defeat of any Federal candidate.  The costs of such communications must be reported to the Federal Election Commission under certain circumstances.



```js
fec_gov.communication_costs.get({
  "api_key": ""
}, context)
```

#### Input
* input `object`
  * per_page `integer`: The number of results returned per page. Defaults to 20.
  * max_amount `string`: Filter for all amounts less than a value.
  * line_number `string`: Filter for form and line number using the following format: `FORM-LINENUMBER`.  For example an argument such as `F3X-16` would filter down to all entries from form `F3X` line number `16`.
  * sort_hide_null `boolean`: Hide null values on sorted column(s).
  * min_image_number `string`
  * committee_id `array`: 
  * min_date `string`: Minimum date
  * sort `string`: Provide a field to sort by. Use `-` for descending order.
  * sort_null_only `boolean`: Toggle that filters out all rows having sort column that is non-null
  * image_number `array`: The image number of the page where the schedule item is reported
  * page `integer`: For paginating through results, starting at page 1
  * max_image_number `string`
  * min_amount `string`: Filter for all amounts greater than a value.
  * support_oppose_indicator `array`: Support or opposition
  * max_date `string`: Maximum date
  * candidate_id `array`: 
  * sort_nulls_last `boolean`: Toggle that sorts null values last
  * api_key **required** `string`: 

#### Output
* output [CommunicationCostOffsetPage](#communicationcostoffsetpage)

### communication_costs.aggregates.get
Communication cost aggregated by candidate ID and committee ID.


```js
fec_gov.communication_costs.aggregates.get({
  "api_key": ""
}, context)
```

#### Input
* input `object`
  * per_page `integer`: The number of results returned per page. Defaults to 20.
  * sort_null_only `boolean`: Toggle that filters out all rows having sort column that is non-null
  * cycle `array`: 
  * sort_hide_null `boolean`: Hide null values on sorted column(s).
  * page `integer`: For paginating through results, starting at page 1
  * support_oppose_indicator `string` (values: S, O): Support or opposition
  * committee_id `array`: 
  * candidate_id `array`: 
  * sort_nulls_last `boolean`: Toggle that sorts null values last
  * api_key **required** `string`: 
  * sort `string`: Provide a field to sort by. Use `-` for descending order.

#### Output
* output [CommunicationCostByCandidatePage](#communicationcostbycandidatepage)

### communication_costs.by_candidate.get
Communication cost aggregated by candidate ID and committee ID.


```js
fec_gov.communication_costs.by_candidate.get({
  "api_key": ""
}, context)
```

#### Input
* input `object`
  * per_page `integer`: The number of results returned per page. Defaults to 20.
  * sort_null_only `boolean`: Toggle that filters out all rows having sort column that is non-null
  * cycle `array`: 
  * election_full `boolean`: `True` indicates that full election period of a candidate.
  * sort_hide_null `boolean`: Hide null values on sorted column(s).
  * office `string` (values: house, senate, president): Federal office candidate runs for: H, S or P
  * page `integer`: For paginating through results, starting at page 1
  * district `string`: Two-digit US House distirict of the office the candidate is running for. Presidential, Senate and House at-large candidates will have District 00.
  * state `string`: US state or territory where a candidate runs for office
  * candidate_id `array`: 
  * sort_nulls_last `boolean`: Toggle that sorts null values last
  * api_key **required** `string`: 
  * sort `string`: Provide a field to sort by. Use `-` for descending order.
  * support_oppose `string` (values: S, O): Support or opposition

#### Output
* output [CommunicationCostByCandidatePage](#communicationcostbycandidatepage)

### communication_costs.totals.by_candidate.get

Total communications costs aggregated across committees on supported or opposed candidates by cycle or candidate election year.



```js
fec_gov.communication_costs.totals.by_candidate.get({
  "api_key": ""
}, context)
```

#### Input
* input `object`
  * per_page `integer`: The number of results returned per page. Defaults to 20.
  * sort_null_only `boolean`: Toggle that filters out all rows having sort column that is non-null
  * cycle `array`: 
  * election_full `boolean`: `True` indicates that full election period of a candidate.
  * sort_hide_null `boolean`: Hide null values on sorted column(s).
  * page `integer`: For paginating through results, starting at page 1
  * candidate_id `array`: 
  * sort_nulls_last `boolean`: Toggle that sorts null values last
  * api_key **required** `string`: 
  * sort `string`: Provide a field to sort by. Use `-` for descending order.

#### Output
* output [CCTotalsByCandidatePage](#cctotalsbycandidatepage)

### efile.filings.get
Basic information about electronic files coming into the FEC, posted as they are received.


```js
fec_gov.efile.filings.get({
  "api_key": ""
}, context)
```

#### Input
* input `object`
  * per_page `integer`: The number of results returned per page. Defaults to 20.
  * sort_null_only `boolean`: Toggle that filters out all rows having sort column that is non-null
  * sort_hide_null `boolean`: Hide null values on sorted column(s).
  * min_receipt_date `string`: 
  * page `integer`: For paginating through results, starting at page 1
  * api_key **required** `string`: 
  * file_number `array`: Filing ID number
  * committee_id `array`: 
  * sort_nulls_last `boolean`: Toggle that sorts null values last
  * max_receipt_date `string`: 
  * sort `string`: Provide a field to sort by. Use `-` for descending order.

#### Output
* output [EFilingsPage](#efilingspage)

### efile.reports.house_senate.get

Key financial data reported periodically by committees as they are reported. This feed includes summary
information from the the House F3 reports, the presidential F3p reports and the PAC and party
F3x reports.

Generally, committees file reports on a quarterly or monthly basis, but
some must also submit a report 12 days before primary elections. Therefore, during the primary
season, the period covered by this file may be different for different committees. These totals
also incorporate any changes made by committees, if any report covering the period is amended.

DISCLAIMER: The field labels contained within this resource are subject to change.  We are attempting to succinctly
label these fields while conveying clear meaning to ensure accessibility for all users.



```js
fec_gov.efile.reports.house_senate.get({
  "api_key": ""
}, context)
```

#### Input
* input `object`
  * per_page `integer`: The number of results returned per page. Defaults to 20.
  * sort_null_only `boolean`: Toggle that filters out all rows having sort column that is non-null
  * sort_hide_null `boolean`: Hide null values on sorted column(s).
  * min_receipt_date `string`: 
  * page `integer`: For paginating through results, starting at page 1
  * api_key **required** `string`: 
  * file_number `array`: Filing ID number
  * committee_id `array`: 
  * sort_nulls_last `boolean`: Toggle that sorts null values last
  * max_receipt_date `string`: 
  * sort `string`: Provide a field to sort by. Use `-` for descending order.

#### Output
* output [BaseF3FilingPage](#basef3filingpage)

### efile.reports.pac_party.get

Key financial data reported periodically by committees as they are reported. This feed includes summary
information from the the House F3 reports, the presidential F3p reports and the PAC and party
F3x reports.

Generally, committees file reports on a quarterly or monthly basis, but
some must also submit a report 12 days before primary elections. Therefore, during the primary
season, the period covered by this file may be different for different committees. These totals
also incorporate any changes made by committees, if any report covering the period is amended.

DISCLAIMER: The field labels contained within this resource are subject to change.  We are attempting to succinctly
label these fields while conveying clear meaning to ensure accessibility for all users.



```js
fec_gov.efile.reports.pac_party.get({
  "api_key": ""
}, context)
```

#### Input
* input `object`
  * per_page `integer`: The number of results returned per page. Defaults to 20.
  * sort_null_only `boolean`: Toggle that filters out all rows having sort column that is non-null
  * sort_hide_null `boolean`: Hide null values on sorted column(s).
  * min_receipt_date `string`: 
  * page `integer`: For paginating through results, starting at page 1
  * api_key **required** `string`: 
  * file_number `array`: Filing ID number
  * committee_id `array`: 
  * sort_nulls_last `boolean`: Toggle that sorts null values last
  * max_receipt_date `string`: 
  * sort `string`: Provide a field to sort by. Use `-` for descending order.

#### Output
* output [BaseF3XFilingPage](#basef3xfilingpage)

### efile.reports.presidential.get

Key financial data reported periodically by committees as they are reported. This feed includes summary
information from the the House F3 reports, the presidential F3p reports and the PAC and party
F3x reports.

Generally, committees file reports on a quarterly or monthly basis, but
some must also submit a report 12 days before primary elections. Therefore, during the primary
season, the period covered by this file may be different for different committees. These totals
also incorporate any changes made by committees, if any report covering the period is amended.

DISCLAIMER: The field labels contained within this resource are subject to change.  We are attempting to succinctly
label these fields while conveying clear meaning to ensure accessibility for all users.



```js
fec_gov.efile.reports.presidential.get({
  "api_key": ""
}, context)
```

#### Input
* input `object`
  * per_page `integer`: The number of results returned per page. Defaults to 20.
  * sort_null_only `boolean`: Toggle that filters out all rows having sort column that is non-null
  * sort_hide_null `boolean`: Hide null values on sorted column(s).
  * min_receipt_date `string`: 
  * page `integer`: For paginating through results, starting at page 1
  * api_key **required** `string`: 
  * file_number `array`: Filing ID number
  * committee_id `array`: 
  * sort_nulls_last `boolean`: Toggle that sorts null values last
  * max_receipt_date `string`: 
  * sort `string`: Provide a field to sort by. Use `-` for descending order.

#### Output
* output [BaseF3PFilingPage](#basef3pfilingpage)

### election_dates.get

FEC election dates since 1995.



```js
fec_gov.election_dates.get({
  "api_key": ""
}, context)
```

#### Input
* input `object`
  * min_primary_general_date `string`: 
  * election_state `array`: 
  * per_page `integer`: The number of results returned per page. Defaults to 20.
  * sort_hide_null `boolean`: Hide null values on sorted column(s).
  * office_sought `array`: 
  * max_primary_general_date `string`: 
  * sort `string`: Provide a field to sort by. Use `-` for descending order.
  * election_type_id `array`: 
  * max_update_date `string`: 
  * sort_null_only `boolean`: Toggle that filters out all rows having sort column that is non-null
  * election_district `array`: 
  * max_create_date `string`: 
  * election_year `array`: Year of election
  * max_election_date `string`: 
  * page `integer`: For paginating through results, starting at page 1
  * min_update_date `string`: 
  * election_party `array`: 
  * min_create_date `string`: 
  * min_election_date `string`: 
  * sort_nulls_last `boolean`: Toggle that sorts null values last
  * api_key **required** `string`: 

#### Output
* output `object`
  * pagination [OffsetInfo](#offsetinfo)
  * results `array`
    * items [ElectionDate](#electiondate)

### electioneering.get

An electioneering communication is any broadcast, cable or satellite communication that fulfills each of the following conditions:

_The communication refers to a clearly identified federal candidate._

_The communication is publicly distributed by a television station, radio station, cable television system or satellite system for a fee._

_The communication is distributed within 60 days prior to a general election or 30 days prior to a primary election to federal office._



```js
fec_gov.electioneering.get({
  "api_key": ""
}, context)
```

#### Input
* input `object`
  * per_page `integer`: The number of results returned per page. Defaults to 20.
  * sort_null_only `boolean`: Toggle that filters out all rows having sort column that is non-null
  * max_amount `string`: Filter for all amounts less than a value.
  * sort_hide_null `boolean`: Hide null values on sorted column(s).
  * page `integer`: For paginating through results, starting at page 1
  * min_amount `string`: Filter for all amounts greater than a value.
  * description `string`
  * report_year `array`: 
  * committee_id `array`: 
  * min_date `string`: Minimum disbursement date
  * max_date `string`: Maximum disbursement date
  * sort_nulls_last `boolean`: Toggle that sorts null values last
  * api_key **required** `string`: 
  * sort `string`: Provide a field to sort by. Use `-` for descending order.
  * candidate_id `array`: 
  * last_index `integer`: Index of last result from previous page

#### Output
* output [ElectioneeringPage](#electioneeringpage)

### electioneering.aggregates.get
Electioneering communications costs aggregates


```js
fec_gov.electioneering.aggregates.get({
  "api_key": ""
}, context)
```

#### Input
* input `object`
  * per_page `integer`: The number of results returned per page. Defaults to 20.
  * sort_null_only `boolean`: Toggle that filters out all rows having sort column that is non-null
  * cycle `array`: 
  * sort_hide_null `boolean`: Hide null values on sorted column(s).
  * page `integer`: For paginating through results, starting at page 1
  * committee_id `array`: 
  * candidate_id `array`: 
  * sort_nulls_last `boolean`: Toggle that sorts null values last
  * api_key **required** `string`: 
  * sort `string`: Provide a field to sort by. Use `-` for descending order.

#### Output
* output [ElectioneeringByCandidatePage](#electioneeringbycandidatepage)

### electioneering.by_candidate.get
Electioneering costs aggregated by candidate


```js
fec_gov.electioneering.by_candidate.get({
  "api_key": ""
}, context)
```

#### Input
* input `object`
  * per_page `integer`: The number of results returned per page. Defaults to 20.
  * sort_null_only `boolean`: Toggle that filters out all rows having sort column that is non-null
  * cycle `array`: 
  * election_full `boolean`: `True` indicates that full election period of a candidate.
  * sort_hide_null `boolean`: Hide null values on sorted column(s).
  * office `string` (values: house, senate, president): Federal office candidate runs for: H, S or P
  * page `integer`: For paginating through results, starting at page 1
  * district `string`: Two-digit US House distirict of the office the candidate is running for. Presidential, Senate and House at-large candidates will have District 00.
  * state `string`: US state or territory where a candidate runs for office
  * candidate_id `array`: 
  * sort_nulls_last `boolean`: Toggle that sorts null values last
  * api_key **required** `string`: 
  * sort `string`: Provide a field to sort by. Use `-` for descending order.

#### Output
* output [ElectioneeringByCandidatePage](#electioneeringbycandidatepage)

### electioneering.totals.by_candidate.get

Total electioneering communications spent on candidates by cycle
or candidate election year



```js
fec_gov.electioneering.totals.by_candidate.get({
  "api_key": ""
}, context)
```

#### Input
* input `object`
  * per_page `integer`: The number of results returned per page. Defaults to 20.
  * sort_null_only `boolean`: Toggle that filters out all rows having sort column that is non-null
  * cycle `array`: 
  * election_full `boolean`: `True` indicates that full election period of a candidate.
  * sort_hide_null `boolean`: Hide null values on sorted column(s).
  * page `integer`: For paginating through results, starting at page 1
  * candidate_id `array`: 
  * sort_nulls_last `boolean`: Toggle that sorts null values last
  * api_key **required** `string`: 
  * sort `string`: Provide a field to sort by. Use `-` for descending order.

#### Output
* output [ECTotalsByCandidatePage](#ectotalsbycandidatepage)

### elections.get

Look at the top-level financial information for all candidates running for the same
office.

Choose a 2-year cycle, and `house`, `senate` or `presidential`.

If you are looking for a Senate seat, you will need to select the state using a two-letter
abbreviation.

House races require state and a two-digit district number.

Since this endpoint reflects financial information, it will only have candidates once they file
financial reporting forms. Query the `/candidates` endpoint to retrieve an-up-to-date list of all the
candidates that filed to run for a particular seat.



```js
fec_gov.elections.get({
  "cycle": 0,
  "office": "",
  "api_key": ""
}, context)
```

#### Input
* input `object`
  * per_page `integer`: The number of results returned per page. Defaults to 20.
  * sort_null_only `boolean`: Toggle that filters out all rows having sort column that is non-null
  * cycle **required** `integer`: 
  * election_full `boolean`: `True` indicates that full election period of a candidate.
  * sort_hide_null `boolean`: Hide null values on sorted column(s).
  * office **required** `string` (values: house, senate, president): Federal office candidate runs for: H, S or P
  * page `integer`: For paginating through results, starting at page 1
  * district `string`: Two-digit US House distirict of the office the candidate is running for. Presidential, Senate and House at-large candidates will have District 00.
  * state `string`: US state or territory where a candidate runs for office
  * sort_nulls_last `boolean`: Toggle that sorts null values last
  * api_key **required** `string`: 
  * sort `string`: Provide a field to sort by. Use `-` for descending order.

#### Output
* output [ElectionPage](#electionpage)

### elections.search.get

List elections by cycle, office, state, and district.



```js
fec_gov.elections.search.get({
  "api_key": ""
}, context)
```

#### Input
* input `object`
  * per_page `integer`: The number of results returned per page. Defaults to 20.
  * sort_null_only `boolean`: Toggle that filters out all rows having sort column that is non-null
  * cycle `array`: 
  * sort_hide_null `boolean`: Hide null values on sorted column(s).
  * office `array`
  * page `integer`: For paginating through results, starting at page 1
  * district `array`: Two-digit US House distirict of the office the candidate is running for. Presidential, Senate and House at-large candidates will have District 00.
  * zip `array`: Zip code
  * sort_nulls_last `boolean`: Toggle that sorts null values last
  * api_key **required** `string`: 
  * sort `array`: Provide a field to sort by. Use - for descending order.
  * state `array`: US state or territory where a candidate runs for office

#### Output
* output [ElectionsListPage](#electionslistpage)

### elections.summary.get

List elections by cycle, office, state, and district.



```js
fec_gov.elections.summary.get({
  "cycle": 0,
  "office": "",
  "api_key": ""
}, context)
```

#### Input
* input `object`
  * cycle **required** `integer`: 
  * district `string`: Two-digit US House distirict of the office the candidate is running for. Presidential, Senate and House at-large candidates will have District 00.
  * election_full `boolean`: `True` indicates that full election period of a candidate.
  * state `string`: US state or territory where a candidate runs for office
  * office **required** `string` (values: house, senate, president): Federal office candidate runs for: H, S or P
  * api_key **required** `string`: 

#### Output
* output [ElectionSummary](#electionsummary)

### filings.get

All official records and reports filed by or delivered to the FEC.

Note: because the filings data includes many records, counts for large
result sets are approximate; you will want to page through the records until no records are returned.



```js
fec_gov.filings.get({
  "api_key": ""
}, context)
```

#### Input
* input `object`
  * document_type `array`: 
  * primary_general_indicator `array`: 
  * per_page `integer`: The number of results returned per page. Defaults to 20.
  * amendment_indicator `array`: Amendent types:
  * cycle `array`: 
  * request_type `array`: Requests for additional information (RFAIs) sent to filers. The request type is based on the type of document filed:
  * sort_hide_null `boolean`: Hide null values on sorted column(s).
  * min_receipt_date `string`: 
  * most_recent `boolean`: 
  * file_number `array`: Filing ID number
  * api_key **required** `string`: 
  * district `array`: Two-digit US House distirict of the office the candidate is running for. Presidential, Senate and House at-large candidates will have District 00.
  * form_type `array`: The form where the underlying data comes from, for example, Form 1 would appear as F1:
  * committee_id `array`: 
  * party `array`: Three-letter code for the party affiliated with a candidate or committee. For example, DEM for Democratic Party and REP for Republican Party.
  * sort `array`: Provide a field to sort by. Use - for descending order.
  * is_amended `boolean`: 
  * committee_type `string`: The one-letter type code of the organization:
  * sort_null_only `boolean`: Toggle that filters out all rows having sort column that is non-null
  * form_category `array`: 
  * beginning_image_number `array`: 
  * office `array`: Federal office candidate runs for: H, S or P
  * page `integer`: For paginating through results, starting at page 1
  * report_type `array`: Name of report where the underlying data comes from:
  * filer_type `string` (values: e-file, paper): The method used to file with the FEC, either electronic or on paper.
  * state `array`: US state or territory where a candidate runs for office
  * candidate_id `array`: 
  * sort_nulls_last `boolean`: Toggle that sorts null values last
  * max_receipt_date `string`: 
  * report_year `array`: 

#### Output
* output [FilingsPage](#filingspage)

### legal.search.get

Search legal documents by type, or across all document types using keywords, parameter values and ranges.



```js
fec_gov.legal.search.get({
  "api_key": ""
}, context)
```

#### Input
* input `object`
  * af_max_fd_date `string`: Filter cases by latest Final Determination date
  * ao_category `array`: Category of the document
  * case_max_open_date `string`: Filter cases by latest date opened
  * ao_name `array`: Force advisory opinion name
  * ao_status `string`: Status of AO (pending, withdrawn, or final)
  * af_rtb_fine_amount `integer`: Filter cases by Reason to Believe fine amount
  * case_dispositions `array`: Filter cases by dispositions
  * case_respondents `string`: Filter cases by respondents
  * case_min_open_date `string`: Filter cases by earliest date opened
  * af_min_rtb_date `string`: Filter cases by earliest Reason to Believe date
  * ao_entity_name `array`: Search by name of commenter or representative
  * ao_statutory_citation `array`: Search for statutory citations
  * ao_no `array`: Force advisory opinion number
  * ao_requestor `string`: The requestor of the advisory opinion
  * ao_citation_require_all `boolean`: Require all citations to be in document (default behavior is any)
  * case_election_cycles `integer`: Filter cases by election cycles
  * q `string`: Text to search legal documents for.
  * api_key **required** `string`: 
  * ao_min_request_date `string`: Earliest request date of advisory opinion
  * hits_returned `integer`: Number of results to return (max 10).
  * af_report_year `string`: Admin fine report year
  * from_hit `integer`: Get results starting from this index.
  * af_min_fd_date `string`: Filter cases by earliest Final Determination date
  * ao_max_request_date `string`: Latest request date of advisory opinion
  * ao_min_issue_date `string`: Earliest issue date of advisory opinion
  * ao_max_issue_date `string`: Latest issue date of advisory opinion
  * case_document_category `array`: Filter cases by category of associated documents
  * af_max_rtb_date `string`: Filter cases by latest Reason to Believe date
  * af_committee_id `string`: Admin fine committee ID
  * af_name `array`: Admin fine committee name
  * ao_is_pending `boolean`: AO is pending
  * case_max_close_date `string`: Filter cases by latest date closed
  * ao_requestor_type `array`: Code of the advisory opinion requestor type.
  * case_min_close_date `string`: Filter cases by earliest date closed
  * af_fd_fine_amount `integer`: Filter cases by Final Determination fine amount
  * ao_regulatory_citation `array`: Search for regulatory citations
  * type `string`: Document type to refine search by
  * case_no `array`: Enforcement matter case number

#### Output
* output `object`
  * admin_fines `array`
    * items `object`
      * challenge_outcome `string`
      * challenge_receipt_date `string`
      * check_amount `number`
      * commission_votes `array`
        * items `object`
          * action `string`
          * vote_date `string`
      * committee_id `string`
      * doc_id `string`
      * document_highlights `object`
      * documents `array`
        * items `object`
          * category `string`
          * description `string`
          * document_date `string`
          * document_id `integer`
          * length `integer`
          * url `string`
      * final_determination_amount `number`
      * final_determination_date `string`
      * highlights `array`
        * items `string`
      * name `string`
      * no `string`
      * petition_court_decision_date `string`
      * petition_court_filing_date `string`
      * reason_to_believe_action_date `string`
      * reason_to_believe_fine_amount `number`
      * report_type `string`
      * report_year `string`
      * treasury_referral_amount `number`
      * treasury_referral_date `string`
      * url `string`
  * adrs `array`
    * items `object`
      * close_date `string`
      * commission_votes `array`
        * items `object`
          * action `string`
          * vote_date `string`
      * dispositions `array`
        * items `object`
          * citations `array`
          * disposition `string`
          * penalty `number`
          * respondent `string`
      * doc_id `string`
      * document_highlights `object`
      * documents `array`
        * items `object`
          * category `string`
          * description `string`
          * document_date `string`
          * document_id `integer`
          * length `integer`
          * url `string`
      * election_cycles `integer`
      * highlights `array`
        * items `string`
      * name `string`
      * no `string`
      * open_date `string`
      * participants `array`
        * items `object`
          * citations `object`
          * name `string`
          * role `string`
      * respondents `array`
        * items `string`
      * subjects `array`
        * items `string`
      * url `string`
  * advisory_opinions `array`
    * items `object`
      * ao_citations `array`
        * items `object`
          * name `string`
          * no `string`
      * aos_cited_by `array`
        * items `object`
          * name `string`
          * no `string`
      * commenter_names `array`
        * items `string`
      * document_highlights `object`
      * documents `array`
        * items `object`
          * category `string`
          * date `string`
          * description `string`
          * document_id `integer`
          * url `string`
      * entities `array`
        * items `object`
          * name `string`
          * role `string`
          * type `string`
      * highlights `array`
        * items `string`
      * is_pending `boolean`
      * issue_date `string`
      * name `string`
      * no `string`
      * regulatory_citations `array`
        * items `object`
          * part `integer`
          * section `integer`
          * title `integer`
      * representative_names `array`
        * items `string`
      * request_date `string`
      * requestor_names `array`
        * items `string`
      * requestor_types `array`
        * items `string`
      * status `string`
      * statutory_citations `array`
        * items `object`
          * section `string`
          * title `integer`
      * summary `string`
  * murs `array`
    * items `object`
      * close_date `string`
      * commission_votes `array`
        * items `object`
          * action `string`
          * vote_date `string`
      * dispositions `array`
        * items `object`
          * citations `array`
          * disposition `string`
          * penalty `number`
          * respondent `string`
      * doc_id `string`
      * document_highlights `object`
      * documents `array`
        * items `object`
          * category `string`
          * description `string`
          * document_date `string`
          * document_id `integer`
          * length `integer`
          * url `string`
      * election_cycles `integer`
      * highlights `array`
        * items `string`
      * mur_type `string` (values: current, archived)
      * name `string`
      * no `string`
      * open_date `string`
      * participants `array`
        * items `object`
          * citations `object`
          * name `string`
          * role `string`
      * respondents `array`
        * items `string`
      * subjects `array`
        * items `string`
      * url `string`
  * regulations `array`
    * items `object`
      * doc_id `string`
      * document_highlights `object`
      * highlights `array`
        * items `string`
      * name `string`
      * no `string`
      * url `string`
  * statutes `array`
    * items `object`
      * chapter `string`
      * doc_id `string`
      * document_highlights `object`
      * highlights `array`
        * items `string`
      * name `string`
      * no `string`
      * title `string`
      * url `string`
  * total_admin_fines `integer`: Total number of Admin Fines matching the search criteria
  * total_adrs `integer`: Total number of ADRs matching the search criteria
  * total_advisory_opinions `integer`: Total number of Advisory Opinions matching the search criteria
  * total_all `integer`: Total number of legal documents matching the search criteria
  * total_murs `integer`: Total number of MURs matching the search criteria
  * total_regulations `integer`: Total number of Regulations matching the search criteria
  * total_statutes `integer`: Total number of Statutes matching the search criteria

### names.audit_candidates.get

Search for candidates or committees by name. If you're looking for information on a
particular person or group, using a name to find the `candidate_id` or `committee_id` on
this endpoint can be a helpful first step.



```js
fec_gov.names.audit_candidates.get({
  "q": [],
  "api_key": ""
}, context)
```

#### Input
* input `object`
  * q **required** `array`: Name (candidate or committee) to search for
  * api_key **required** `string`: 

#### Output
* output [AuditCandidateSearchList](#auditcandidatesearchlist)

### names.audit_committees.get

Search for candidates or committees by name. If you're looking for information on a
particular person or group, using a name to find the `candidate_id` or `committee_id` on
this endpoint can be a helpful first step.



```js
fec_gov.names.audit_committees.get({
  "q": [],
  "api_key": ""
}, context)
```

#### Input
* input `object`
  * q **required** `array`: Name (candidate or committee) to search for
  * api_key **required** `string`: 

#### Output
* output [AuditCommitteeSearchList](#auditcommitteesearchlist)

### names.candidates.get

Search for candidates or committees by name. If you're looking for information on a
particular person or group, using a name to find the `candidate_id` or `committee_id` on
this endpoint can be a helpful first step.



```js
fec_gov.names.candidates.get({
  "q": [],
  "api_key": ""
}, context)
```

#### Input
* input `object`
  * q **required** `array`: Name (candidate or committee) to search for
  * api_key **required** `string`: 

#### Output
* output [CandidateSearchList](#candidatesearchlist)

### names.committees.get

Search for candidates or committees by name. If you're looking for information on a
particular person or group, using a name to find the `candidate_id` or `committee_id` on
this endpoint can be a helpful first step.



```js
fec_gov.names.committees.get({
  "q": [],
  "api_key": ""
}, context)
```

#### Input
* input `object`
  * q **required** `array`: Name (candidate or committee) to search for
  * api_key **required** `string`: 

#### Output
* output [CommitteeSearchList](#committeesearchlist)

### operations_log.get

The Operations log contains details of each report loaded into the database. It is primarily
used as status check to determine when all of the data processes, from initial entry through
review are complete.



```js
fec_gov.operations_log.get({
  "api_key": ""
}, context)
```

#### Input
* input `object`
  * amendment_indicator `array`: Amendent types:
  * per_page `integer`: The number of results returned per page. Defaults to 20.
  * sort_hide_null `boolean`: Hide null values on sorted column(s).
  * min_receipt_date `string`: 
  * min_transaction_data_complete_date `string`: 
  * max_coverage_end_date `string`: 
  * api_key **required** `string`: 
  * form_type `array`: The form where the underlying data comes from, for example, Form 1 would appear as F1:
  * sort `array`: Provide a field to sort by. Use - for descending order.
  * status_num `array`: 
  * sort_null_only `boolean`: Toggle that filters out all rows having sort column that is non-null
  * beginning_image_number `array`: 
  * page `integer`: For paginating through results, starting at page 1
  * max_transaction_data_complete_date `string`: 
  * report_type `array`: Name of report where the underlying data comes from:
  * candidate_committee_id `array`: 
  * sort_nulls_last `boolean`: Toggle that sorts null values last
  * max_receipt_date `string`: 
  * report_year `array`: 
  * min_coverage_end_date `string`: 

#### Output
* output [OperationsLogPage](#operationslogpage)

### presidential.contributions.by_candidate.get

Net receipts per candidate.

Filter with `contributor_state='US'` for national totals



```js
fec_gov.presidential.contributions.by_candidate.get({
  "api_key": ""
}, context)
```

#### Input
* input `object`
  * per_page `integer`: The number of results returned per page. Defaults to 20.
  * sort_null_only `boolean`: Toggle that filters out all rows having sort column that is non-null
  * election_year `array`: Year of election
  * sort_hide_null `boolean`: Hide null values on sorted column(s).
  * contributor_state `array`: State of contributor
  * page `integer`: For paginating through results, starting at page 1
  * sort_nulls_last `boolean`: Toggle that sorts null values last
  * api_key **required** `string`: 
  * sort `string`: Provide a field to sort by. Use `-` for descending order.

#### Output
* output [PresidentialByCandidatePage](#presidentialbycandidatepage)

### presidential.contributions.by_size.get

Contribution receipts by size per candidate.

Filter by candidate_id, election_year and/or size



```js
fec_gov.presidential.contributions.by_size.get({
  "api_key": ""
}, context)
```

#### Input
* input `object`
  * per_page `integer`: The number of results returned per page. Defaults to 20.
  * sort_null_only `boolean`: Toggle that filters out all rows having sort column that is non-null
  * election_year `array`: Year of election
  * sort_hide_null `boolean`: Hide null values on sorted column(s).
  * size `array`: 
  * page `integer`: For paginating through results, starting at page 1
  * candidate_id `array`: 
  * sort_nulls_last `boolean`: Toggle that sorts null values last
  * api_key **required** `string`: 
  * sort `string`: Provide a field to sort by. Use `-` for descending order.

#### Output
* output [PresidentialBySizePage](#presidentialbysizepage)

### presidential.contributions.by_state.get

Contribution receipts by state per candidate.

Filter by candidate_id and/or election_year



```js
fec_gov.presidential.contributions.by_state.get({
  "api_key": ""
}, context)
```

#### Input
* input `object`
  * per_page `integer`: The number of results returned per page. Defaults to 20.
  * sort_null_only `boolean`: Toggle that filters out all rows having sort column that is non-null
  * election_year `array`: Year of election
  * sort_hide_null `boolean`: Hide null values on sorted column(s).
  * page `integer`: For paginating through results, starting at page 1
  * candidate_id `array`: 
  * sort_nulls_last `boolean`: Toggle that sorts null values last
  * api_key **required** `string`: 
  * sort `string`: Provide a field to sort by. Use `-` for descending order.

#### Output
* output [PresidentialByStatePage](#presidentialbystatepage)

### presidential.coverage_end_date.get

Coverage end date per candidate.

Filter by candidate_id and/or election_year



```js
fec_gov.presidential.coverage_end_date.get({
  "api_key": ""
}, context)
```

#### Input
* input `object`
  * per_page `integer`: The number of results returned per page. Defaults to 20.
  * sort_null_only `boolean`: Toggle that filters out all rows having sort column that is non-null
  * election_year `array`: Year of election
  * sort_hide_null `boolean`: Hide null values on sorted column(s).
  * page `integer`: For paginating through results, starting at page 1
  * candidate_id `array`: 
  * sort_nulls_last `boolean`: Toggle that sorts null values last
  * api_key **required** `string`: 
  * sort `string`: Provide a field to sort by. Use `-` for descending order.

#### Output
* output [PresidentialCoveragePage](#presidentialcoveragepage)

### presidential.financial_summary.get

Financial summary per candidate.

Filter by candidate_id and/or election_year



```js
fec_gov.presidential.financial_summary.get({
  "api_key": ""
}, context)
```

#### Input
* input `object`
  * per_page `integer`: The number of results returned per page. Defaults to 20.
  * sort_null_only `boolean`: Toggle that filters out all rows having sort column that is non-null
  * election_year `array`: Year of election
  * sort_hide_null `boolean`: Hide null values on sorted column(s).
  * page `integer`: For paginating through results, starting at page 1
  * candidate_id `array`: 
  * sort_nulls_last `boolean`: Toggle that sorts null values last
  * api_key **required** `string`: 
  * sort `string`: Provide a field to sort by. Use `-` for descending order.

#### Output
* output [PresidentialSummaryPage](#presidentialsummarypage)

### rad_analyst.get

Use this endpoint to look up the RAD Analyst for a committee.

The mission of the Reports Analysis Division (RAD) is to ensure that
campaigns and political committees file timely and accurate reports that fully disclose
their financial activities.  RAD is responsible for reviewing statements and financial
reports filed by political committees participating in federal elections, providing
assistance and guidance to the committees to properly file their reports, and for taking
appropriate action to ensure compliance with the Federal Election Campaign Act (FECA).



```js
fec_gov.rad_analyst.get({
  "api_key": ""
}, context)
```

#### Input
* input `object`
  * per_page `integer`: The number of results returned per page. Defaults to 20.
  * sort_null_only `boolean`: Toggle that filters out all rows having sort column that is non-null
  * sort_hide_null `boolean`: Hide null values on sorted column(s).
  * telephone_ext `array`: Telephone extension of RAD analyst
  * page `integer`: For paginating through results, starting at page 1
  * min_assignment_update_date `string`: Filter results for assignment updates made after this date
  * title `array`: Title of RAD analyst
  * analyst_short_id `array`: Short ID of RAD analyst
  * name `array`: Name of RAD analyst
  * committee_id `array`: 
  * email `array`: Email of RAD analyst
  * max_assignment_update_date `string`: Filter results for assignment updates made before this date
  * sort_nulls_last `boolean`: Toggle that sorts null values last
  * api_key **required** `string`: 
  * sort `string`: Provide a field to sort by. Use `-` for descending order.
  * analyst_id `array`: ID of RAD analyst

#### Output
* output [RadAnalystPage](#radanalystpage)

### reporting_dates.get

FEC election dates since 1995.



```js
fec_gov.reporting_dates.get({
  "api_key": ""
}, context)
```

#### Input
* input `object`
  * per_page `integer`: The number of results returned per page. Defaults to 20.
  * sort_null_only `boolean`: Toggle that filters out all rows having sort column that is non-null
  * min_due_date `string`: 
  * max_create_date `string`: 
  * sort_hide_null `boolean`: Hide null values on sorted column(s).
  * page `integer`: For paginating through results, starting at page 1
  * report_year `array`: 
  * min_update_date `string`: 
  * report_type `array`: Name of report where the underlying data comes from:
  * min_create_date `string`: 
  * sort_nulls_last `boolean`: Toggle that sorts null values last
  * api_key **required** `string`: 
  * max_due_date `string`: 
  * sort `string`: Provide a field to sort by. Use `-` for descending order.
  * max_update_date `string`: 

#### Output
* output `object`
  * pagination [OffsetInfo](#offsetinfo)
  * results `array`
    * items [ReportDate](#reportdate)

### reports.committee_type.get

Each report represents the summary information from Form 3, Form 3X and Form 3P.
These reports have key statistics that illuminate the financial status of a given committee.
Things like cash on hand, debts owed by committee, total receipts, and total disbursements
are especially helpful for understanding a committee's financial dealings.

By default, this endpoint includes both amended and final versions of each report. To restrict
to only the final versions of each report, use `is_amended=false`; to retrieve only reports that
have been amended, use `is_amended=true`.

Several different reporting structures exist, depending on the type of organization that
submits financial information. To see an example of these reporting requirements,
look at the summary and detailed summary pages of Form 3, Form 3X, and Form 3P.

DISCLAIMER: The field labels contained within this resource are subject to change.  We are attempting to succinctly
label these fields while conveying clear meaning to ensure accessibility for all users.



```js
fec_gov.reports.committee_type.get({
  "api_key": "",
  "committee_type": ""
}, context)
```

#### Input
* input `object`
  * amendment_indicator `array`: Amendent types:
  * per_page `integer`: The number of results returned per page. Defaults to 20.
  * cycle `array`: 
  * sort_hide_null `boolean`: Hide null values on sorted column(s).
  * min_disbursements_amount `string`: 
  * min_receipts_amount `string`: 
  * is_amended `boolean`: 
  * beginning_image_number `array`: 
  * report_type `array`: Report type; prefix with "-" to exclude. Name of report where the underlying data comes from:
  * min_party_coordinated_expenditures `string`: 
  * filer_type `string` (values: e-file, paper): The method used to file with the FEC, either electronic or on paper.
  * sort_nulls_last `boolean`: Toggle that sorts null values last
  * max_receipt_date `string`: 
  * max_disbursements_amount `string`: 
  * api_key **required** `string`: 
  * min_cash_on_hand_end_period_amount `string`: 
  * min_independent_expenditures `string`: 
  * min_debts_owed_amount `string`: 
  * max_party_coordinated_expenditures `string`: 
  * most_recent `boolean`: 
  * committee_id `array`: 
  * min_total_contributions `string`: 
  * sort `array`: Provide a field to sort by. Use - for descending order.
  * sort_null_only `boolean`: Toggle that filters out all rows having sort column that is non-null
  * year `array`: 
  * page `integer`: For paginating through results, starting at page 1
  * max_total_contributions `string`: 
  * max_debts_owed_expenditures `string`: 
  * max_independent_expenditures `string`: 
  * max_receipts_amount `string`: 
  * candidate_id `string`: 
  * min_receipt_date `string`: 
  * type `array`: The one-letter type code of the organization:
  * max_cash_on_hand_end_period_amount `string`: 
  * committee_type **required** `string` (values: presidential, pac-party, house-senate, ie-only): House, Senate, presidential, independent expenditure only

#### Output
* output [CommitteeReportsPage](#committeereportspage)

### schedules.schedule_a.get

This description is for both ​`/schedules​/schedule_a​/` and ​ `/schedules​/schedule_a​/{sub_id}​/`.

This endpoint provides itemized receipts. Schedule A records describe itemized receipts, including contributions from individuals. If you are interested in contributions from an individual, use the `/schedules/schedule_a/` endpoint. For a more complete description of all Schedule A records visit [About receipts data](https://www.fec.gov/campaign-finance-data/about-campaign-finance-data/about-receipts-data/). If you are interested in our "is_individual" methodology visit our [methodology page](https://www.fec.gov/campaign-finance-data/about-campaign-finance-data/methodology/).

​The `/schedules​/schedule_a​/` endpoint is not paginated by page number. This endpoint uses keyset pagination to improve query performance and these indices are required to properly page through this large dataset. To request the next page, you should append the values found in the `last_indexes` object from pagination to the URL of your last request as additional parameters. 
For example, when sorting by `contribution_receipt_date`, you might receive a page of results with the two scenarios of following pagination information:

case #1:
```
pagination: {
    pages: 2152643,
    per_page: 20,
    count: 43052850,
    last_indexes: {
        last_index: "230880619",
        last_contribution_receipt_date: "2014-01-01"
    }
}
```
<br/>
case #2 (results which include contribution_receipt_date = NULL):

```
pagination: {
    pages: 2152644,
    per_page: 20,
    count: 43052850,
    last_indexes: {
        last_index: "230880639",
        sort_null_only: True
    }
}
```
To fetch the next page of sorted results, append `last_index=230880619` and `last_contribution_receipt_date=2014-01-01` to the URL and when reaching `contribution_receipt_date=NULL`, append `last_index=230880639` and `sort_null_only=True`. We strongly advise paging through these results using sort indices. The default sort is acending by `contribution_receipt_date` (`deprecated`, will be descending). If you do not page using sort indices, some transactions may be unintentionally filtered out.

Calls to ​`/schedules​/schedule_a​/` may return many records. For large result sets, the record counts found in the pagination object are approximate; you will need to page through the records until no records are returned.

To avoid throwing the "out of range" exception on the last page, one recommandation is to use total count and `per_page` to control the traverse loop of results.

​The `/schedules​/schedule_a​/{sub_id}​/` endpoint returns a single transaction, but it does include a pagination object class. Please ignore the information in that object class.




```js
fec_gov.schedules.schedule_a.get({
  "api_key": ""
}, context)
```

#### Input
* input `object`
  * contributor_zip `array`: Zip code of contributor
  * recipient_committee_type `array`: The one-letter type code of the organization:
  * per_page `integer`: The number of results returned per page. Defaults to 20.
  * max_amount `string`: Filter for all amounts less than a value.
  * line_number `string`: Filter for form and line number using the following format: `FORM-LINENUMBER`.  For example an argument such as `F3X-16` would filter down to all entries from form `F3X` line number `16`.
  * sort_hide_null `boolean`: Hide null values on sorted column(s).
  * contributor_employer `array`: Employer of contributor, filers need to make an effort to gather this information
  * contributor_state `array`: State of contributor
  * contributor_occupation `array`: Occupation of contributor, filers need to make an effort to gather this information
  * max_load_date `string`: Maximum load date
  * recipient_committee_org_type `array`: The one-letter code for the kind for organization:
  * min_image_number `string`
  * committee_id `array`: 
  * min_date `string`: Minimum date
  * contributor_name `array`: Name of contributor
  * sort `string`: Provide a field to sort by. Use `-` for descending order.
  * recipient_committee_designation `array`: The one-letter designation code of the organization:
  * last_index `integer`: Index of last result from previous page
  * sort_null_only `boolean`: Toggle that filters out all rows having sort column that is non-null
  * image_number `array`: The image number of the page where the schedule item is reported
  * last_contribution_receipt_date `string`: When sorting by `contribution_receipt_date`, this is populated with the         `contribution_receipt_date` of the last result. However, you will need to pass the index         of that last result to `last_index` to get the next page.
  * last_contribution_receipt_amount `number`: When sorting by `contribution_receipt_amount`, this is populated with the         `contribution_receipt_amount` of the last result. However, you will need to pass the index         of that last result to `last_index` to get the next page.
  * max_image_number `string`
  * min_amount `string`: Filter for all amounts greater than a value.
  * is_individual `boolean`: Restrict to non-earmarked individual contributions where memo code is true. Filtering individuals is useful to make sure contributions are not double reported and in creating breakdowns of the amount of money coming from individuals.
  * contributor_type `array`: Filters individual or committee contributions based on line number
  * contributor_city `array`: City of contributor
  * two_year_transaction_period `array`: 
  * max_date `string`: Maximum date
  * api_key **required** `string`: 
  * min_load_date `string`: Minimum load date
  * contributor_id `array`: The FEC identifier should be represented here if the contributor is registered with the FEC.

#### Output
* output [ScheduleAPage](#scheduleapage)

### schedules.schedule_a.by_employer.get

This endpoint provides itemized individual contributions received by a committee, aggregated by the contributor’s employer name. If you are interested in our “is_individual” methodology, review the [methodology page](https://www.fec.gov/campaign-finance-data/about-campaign-finance-data/methodology). Unitemized individual contributions are not included.



```js
fec_gov.schedules.schedule_a.by_employer.get({
  "api_key": ""
}, context)
```

#### Input
* input `object`
  * employer `array`: Employer of contributor as reported on the committee's filing
  * sort_null_only `boolean`: Toggle that filters out all rows having sort column that is non-null
  * cycle `array`: 
  * per_page `integer`: The number of results returned per page. Defaults to 20.
  * sort_hide_null `boolean`: Hide null values on sorted column(s).
  * page `integer`: For paginating through results, starting at page 1
  * committee_id `array`: 
  * sort_nulls_last `boolean`: Toggle that sorts null values last
  * api_key **required** `string`: 
  * sort `string`: Provide a field to sort by. Use `-` for descending order.

#### Output
* output [ScheduleAByEmployerPage](#scheduleabyemployerpage)

### schedules.schedule_a.by_occupation.get

This endpoint provides itemized individual contributions received by a committee, aggregated by the contributor’s occupation. If you are interested in our “is_individual” methodology, review the [methodology page](https://www.fec.gov/campaign-finance-data/about-campaign-finance-data/methodology). Unitemized individual contributions are not included.



```js
fec_gov.schedules.schedule_a.by_occupation.get({
  "api_key": ""
}, context)
```

#### Input
* input `object`
  * per_page `integer`: The number of results returned per page. Defaults to 20.
  * sort_null_only `boolean`: Toggle that filters out all rows having sort column that is non-null
  * cycle `array`: 
  * sort_hide_null `boolean`: Hide null values on sorted column(s).
  * page `integer`: For paginating through results, starting at page 1
  * committee_id `array`: 
  * occupation `array`: Occupation of contributor as reported on the committee's filing
  * sort_nulls_last `boolean`: Toggle that sorts null values last
  * api_key **required** `string`: 
  * sort `string`: Provide a field to sort by. Use `-` for descending order.

#### Output
* output [ScheduleAByOccupationPage](#scheduleabyoccupationpage)

### schedules.schedule_a.by_size.get

This endpoint provides individual contributions received by a committee, aggregated by size:

```
 - $200 and under
 - $200.01 - $499.99
 - $500 - $999.99
 - $1000 - $1999.99
 - $2000 +
```

The $200.00 and under category includes contributions of $200 or less combined with unitemized individual contributions.



```js
fec_gov.schedules.schedule_a.by_size.get({
  "api_key": ""
}, context)
```

#### Input
* input `object`
  * per_page `integer`: The number of results returned per page. Defaults to 20.
  * sort_null_only `boolean`: Toggle that filters out all rows having sort column that is non-null
  * cycle `array`: 
  * sort_hide_null `boolean`: Hide null values on sorted column(s).
  * size `array`: 
  * page `integer`: For paginating through results, starting at page 1
  * committee_id `array`: 
  * sort_nulls_last `boolean`: Toggle that sorts null values last
  * api_key **required** `string`: 
  * sort `string`: Provide a field to sort by. Use `-` for descending order.

#### Output
* output [ScheduleABySizePage](#scheduleabysizepage)

### schedules.schedule_a.by_size.by_candidate.get

This endpoint provides itemized individual contributions received by a committee, aggregated by size of contribution and candidate. If you are interested in our “is_individual” methodology, review the [methodology page](https://www.fec.gov/campaign-finance-data/about-campaign-finance-data/methodology). Unitemized individual contributions are not included.



```js
fec_gov.schedules.schedule_a.by_size.by_candidate.get({
  "cycle": [],
  "candidate_id": [],
  "api_key": ""
}, context)
```

#### Input
* input `object`
  * per_page `integer`: The number of results returned per page. Defaults to 20.
  * sort_null_only `boolean`: Toggle that filters out all rows having sort column that is non-null
  * cycle **required** `array`: 
  * election_full `boolean`: `True` indicates that full election period of a candidate.
  * sort_hide_null `boolean`: Hide null values on sorted column(s).
  * page `integer`: For paginating through results, starting at page 1
  * candidate_id **required** `array`: 
  * sort_nulls_last `boolean`: Toggle that sorts null values last
  * api_key **required** `string`: 
  * sort `string`: Provide a field to sort by. Use `-` for descending order.

#### Output
* output [ScheduleABySizeCandidatePage](#scheduleabysizecandidatepage)

### schedules.schedule_a.by_state.get

This endpoint provides itemized individual contributions received by a committee, aggregated by the contributor’s state. If you are interested in our “is_individual” methodology, review the [methodology page](https://www.fec.gov/campaign-finance-data/about-campaign-finance-data/methodology). Unitemized individual contributions are not included.



```js
fec_gov.schedules.schedule_a.by_state.get({
  "api_key": ""
}, context)
```

#### Input
* input `object`
  * per_page `integer`: The number of results returned per page. Defaults to 20.
  * sort_null_only `boolean`: Toggle that filters out all rows having sort column that is non-null
  * cycle `array`: 
  * sort_hide_null `boolean`: Hide null values on sorted column(s).
  * page `integer`: For paginating through results, starting at page 1
  * committee_id `array`: 
  * state `array`: State of contributor
  * sort_nulls_last `boolean`: Toggle that sorts null values last
  * api_key **required** `string`: 
  * sort `string`: Provide a field to sort by. Use `-` for descending order.
  * hide_null `boolean`: Exclude values with missing state

#### Output
* output [ScheduleAByStatePage](#scheduleabystatepage)

### schedules.schedule_a.by_state.by_candidate.get

This endpoint provides itemized individual contributions received by a committee, aggregated by contributor’s state and candidate. If you are interested in our “is_individual” methodology, review the [methodology page](https://www.fec.gov/campaign-finance-data/about-campaign-finance-data/methodology). Unitemized individual contributions are not included.



```js
fec_gov.schedules.schedule_a.by_state.by_candidate.get({
  "cycle": [],
  "candidate_id": [],
  "api_key": ""
}, context)
```

#### Input
* input `object`
  * per_page `integer`: The number of results returned per page. Defaults to 20.
  * sort_null_only `boolean`: Toggle that filters out all rows having sort column that is non-null
  * cycle **required** `array`: 
  * election_full `boolean`: `True` indicates that full election period of a candidate.
  * sort_hide_null `boolean`: Hide null values on sorted column(s).
  * page `integer`: For paginating through results, starting at page 1
  * candidate_id **required** `array`: 
  * sort_nulls_last `boolean`: Toggle that sorts null values last
  * api_key **required** `string`: 
  * sort `string`: Provide a field to sort by. Use `-` for descending order.

#### Output
* output [ScheduleAByStateCandidatePage](#scheduleabystatecandidatepage)

### schedules.schedule_a.by_state.by_candidate.totals.get

Itemized individual contributions aggregated by contributor’s state, candidate, committee type and cycle. If you are interested in our “is_individual” methodology, review the [methodology page](https://www.fec.gov/campaign-finance-data/about-campaign-finance-data/methodology). Unitemized individual contributions are not included.




```js
fec_gov.schedules.schedule_a.by_state.by_candidate.totals.get({
  "cycle": [],
  "candidate_id": [],
  "api_key": ""
}, context)
```

#### Input
* input `object`
  * per_page `integer`: The number of results returned per page. Defaults to 20.
  * sort_null_only `boolean`: Toggle that filters out all rows having sort column that is non-null
  * cycle **required** `array`: 
  * election_full `boolean`: `True` indicates that full election period of a candidate.
  * sort_hide_null `boolean`: Hide null values on sorted column(s).
  * page `integer`: For paginating through results, starting at page 1
  * candidate_id **required** `array`: 
  * sort_nulls_last `boolean`: Toggle that sorts null values last
  * api_key **required** `string`: 
  * sort `string`: Provide a field to sort by. Use `-` for descending order.

#### Output
* output [ScheduleAByStateCandidatePage](#scheduleabystatecandidatepage)

### schedules.schedule_a.by_state.totals.get

This endpoint provides itemized individual contributions received by a committee, aggregated by contributor’s state, committee type and cycle. If you are interested in our “is_individual” methodology, review the [methodology page](https://www.fec.gov/campaign-finance-data/about-campaign-finance-data/methodology). Unitemized individual contributions are not included.



```js
fec_gov.schedules.schedule_a.by_state.totals.get({
  "api_key": ""
}, context)
```

#### Input
* input `object`
  * committee_type `array`: The one-letter type code of the organization:
  * per_page `integer`: The number of results returned per page. Defaults to 20.
  * sort_null_only `boolean`: Toggle that filters out all rows having sort column that is non-null
  * cycle `array`: 
  * sort_hide_null `boolean`: Hide null values on sorted column(s).
  * page `integer`: For paginating through results, starting at page 1
  * state `array`: US state or territory
  * sort_nulls_last `boolean`: Toggle that sorts null values last
  * api_key **required** `string`: 
  * sort `string`: Provide a field to sort by. Use `-` for descending order.

#### Output
* output [ScheduleAByStateRecipientTotalsPage](#scheduleabystaterecipienttotalspage)

### schedules.schedule_a.by_zip.get

This endpoint provides itemized individual contributions received by a committee, aggregated by the contributor’s ZIP code. If you are interested in our “is_individual” methodology, review the [methodology page](https://www.fec.gov/campaign-finance-data/about-campaign-finance-data/methodology). Unitemized individual contributions are not included.



```js
fec_gov.schedules.schedule_a.by_zip.get({
  "api_key": ""
}, context)
```

#### Input
* input `object`
  * per_page `integer`: The number of results returned per page. Defaults to 20.
  * sort_null_only `boolean`: Toggle that filters out all rows having sort column that is non-null
  * cycle `array`: 
  * sort_hide_null `boolean`: Hide null values on sorted column(s).
  * page `integer`: For paginating through results, starting at page 1
  * committee_id `array`: 
  * zip `array`: Zip code of contributor
  * sort_nulls_last `boolean`: Toggle that sorts null values last
  * api_key **required** `string`: 
  * sort `string`: Provide a field to sort by. Use `-` for descending order.
  * state `array`: State of contributor

#### Output
* output [ScheduleAByZipPage](#scheduleabyzippage)

### schedules.schedule_a.efile.get

Efiling endpoints provide real-time campaign finance data received from electronic filers. Efiling endpoints only contain the most recent four months of data and don't contain the processed and coded data that you can find on other endpoints.



```js
fec_gov.schedules.schedule_a.efile.get({
  "api_key": ""
}, context)
```

#### Input
* input `object`
  * per_page `integer`: The number of results returned per page. Defaults to 20.
  * max_amount `string`: Filter for all amounts less than a value.
  * line_number `string`: Filter for form and line number using the following format: `FORM-LINENUMBER`.  For example an argument such as `F3X-16` would filter down to all entries from form `F3X` line number `16`.
  * sort_hide_null `boolean`: Hide null values on sorted column(s).
  * contributor_employer `array`: Employer of contributor, filers need to make an effort to gather this information
  * contributor_state `array`: State of contributor
  * contributor_occupation `array`: Occupation of contributor, filers need to make an effort to gather this information
  * min_image_number `string`
  * committee_id `array`: 
  * min_date `string`: Minimum date
  * contributor_name `array`: Name of contributor
  * sort `string`: Provide a field to sort by. Use `-` for descending order.
  * sort_null_only `boolean`: Toggle that filters out all rows having sort column that is non-null
  * image_number `array`: The image number of the page where the schedule item is reported
  * page `integer`: For paginating through results, starting at page 1
  * max_image_number `string`
  * min_amount `string`: Filter for all amounts greater than a value.
  * contributor_city `array`: City of contributor
  * max_date `string`: Maximum date
  * sort_nulls_last `boolean`: Toggle that sorts null values last
  * api_key **required** `string`: 

#### Output
* output [ScheduleAEfilePage](#scheduleaefilepage)

### schedules.schedule_a.sub_id.get

This description is for both ​`/schedules​/schedule_a​/` and ​ `/schedules​/schedule_a​/{sub_id}​/`.

This endpoint provides itemized receipts. Schedule A records describe itemized receipts, including contributions from individuals. If you are interested in contributions from an individual, use the `/schedules/schedule_a/` endpoint. For a more complete description of all Schedule A records visit [About receipts data](https://www.fec.gov/campaign-finance-data/about-campaign-finance-data/about-receipts-data/). If you are interested in our "is_individual" methodology visit our [methodology page](https://www.fec.gov/campaign-finance-data/about-campaign-finance-data/methodology/).

​The `/schedules​/schedule_a​/` endpoint is not paginated by page number. This endpoint uses keyset pagination to improve query performance and these indices are required to properly page through this large dataset. To request the next page, you should append the values found in the `last_indexes` object from pagination to the URL of your last request as additional parameters. 
For example, when sorting by `contribution_receipt_date`, you might receive a page of results with the two scenarios of following pagination information:

case #1:
```
pagination: {
    pages: 2152643,
    per_page: 20,
    count: 43052850,
    last_indexes: {
        last_index: "230880619",
        last_contribution_receipt_date: "2014-01-01"
    }
}
```
<br/>
case #2 (results which include contribution_receipt_date = NULL):

```
pagination: {
    pages: 2152644,
    per_page: 20,
    count: 43052850,
    last_indexes: {
        last_index: "230880639",
        sort_null_only: True
    }
}
```
To fetch the next page of sorted results, append `last_index=230880619` and `last_contribution_receipt_date=2014-01-01` to the URL and when reaching `contribution_receipt_date=NULL`, append `last_index=230880639` and `sort_null_only=True`. We strongly advise paging through these results using sort indices. The default sort is acending by `contribution_receipt_date` (`deprecated`, will be descending). If you do not page using sort indices, some transactions may be unintentionally filtered out.

Calls to ​`/schedules​/schedule_a​/` may return many records. For large result sets, the record counts found in the pagination object are approximate; you will need to page through the records until no records are returned.

To avoid throwing the "out of range" exception on the last page, one recommandation is to use total count and `per_page` to control the traverse loop of results.

​The `/schedules​/schedule_a​/{sub_id}​/` endpoint returns a single transaction, but it does include a pagination object class. Please ignore the information in that object class.




```js
fec_gov.schedules.schedule_a.sub_id.get({
  "api_key": "",
  "sub_id": ""
}, context)
```

#### Input
* input `object`
  * contributor_zip `array`: Zip code of contributor
  * recipient_committee_type `array`: The one-letter type code of the organization:
  * per_page `integer`: The number of results returned per page. Defaults to 20.
  * max_amount `string`: Filter for all amounts less than a value.
  * line_number `string`: Filter for form and line number using the following format: `FORM-LINENUMBER`.  For example an argument such as `F3X-16` would filter down to all entries from form `F3X` line number `16`.
  * sort_hide_null `boolean`: Hide null values on sorted column(s).
  * contributor_employer `array`: Employer of contributor, filers need to make an effort to gather this information
  * contributor_state `array`: State of contributor
  * contributor_occupation `array`: Occupation of contributor, filers need to make an effort to gather this information
  * max_load_date `string`: Maximum load date
  * recipient_committee_org_type `array`: The one-letter code for the kind for organization:
  * min_image_number `string`
  * committee_id `array`: 
  * min_date `string`: Minimum date
  * contributor_name `array`: Name of contributor
  * sort `string`: Provide a field to sort by. Use `-` for descending order.
  * recipient_committee_designation `array`: The one-letter designation code of the organization:
  * last_index `integer`: Index of last result from previous page
  * sort_null_only `boolean`: Toggle that filters out all rows having sort column that is non-null
  * image_number `array`: The image number of the page where the schedule item is reported
  * last_contribution_receipt_date `string`: When sorting by `contribution_receipt_date`, this is populated with the         `contribution_receipt_date` of the last result. However, you will need to pass the index         of that last result to `last_index` to get the next page.
  * last_contribution_receipt_amount `number`: When sorting by `contribution_receipt_amount`, this is populated with the         `contribution_receipt_amount` of the last result. However, you will need to pass the index         of that last result to `last_index` to get the next page.
  * max_image_number `string`
  * min_amount `string`: Filter for all amounts greater than a value.
  * is_individual `boolean`: Restrict to non-earmarked individual contributions where memo code is true. Filtering individuals is useful to make sure contributions are not double reported and in creating breakdowns of the amount of money coming from individuals.
  * contributor_type `array`: Filters individual or committee contributions based on line number
  * contributor_city `array`: City of contributor
  * two_year_transaction_period `array`: 
  * max_date `string`: Maximum date
  * api_key **required** `string`: 
  * min_load_date `string`: Minimum load date
  * contributor_id `array`: The FEC identifier should be represented here if the contributor is registered with the FEC.
  * sub_id **required** `string`

#### Output
* output [ScheduleAPage](#scheduleapage)

### schedules.schedule_b.get

Schedule B filings describe itemized disbursements. This data
explains how committees and other filers spend their money. These figures are
reported as part of forms F3, F3X and F3P.

The data is divided in two-year periods, called `two_year_transaction_period`, which
is derived from the `report_year` submitted of the corresponding form. If no value is supplied, the results will
default to the most recent two-year period that is named after the ending,
even-numbered year.

Due to the large quantity of Schedule B filings, this endpoint is not paginated by
page number. Instead, you can request the next page of results by adding the values in
the `last_indexes` object from `pagination` to the URL of your last request. For
example, when sorting by `disbursement_date`, you might receive a page of
results with the following pagination information:

```
pagination: {
    pages: 965191,
    per_page: 20,
    count: 19303814,
    last_indexes: {
        last_index: "230906248",
        last_disbursement_date: "2014-07-04"
    }
}
```

To fetch the next page of sorted results, append `last_index=230906248` and
`last_disbursement_date=2014-07-04` to the URL.  We strongly advise paging through
these results by using the sort indices (defaults to sort by disbursement date, e.g.
`last_disbursement_date`), otherwise some resources may be unintentionally filtered out.
This resource uses keyset pagination to improve query performance
and these indices are required to properly page through this large dataset.

Note: because the Schedule B data includes many records, counts for
large result sets are approximate; you will want to page through the records until no records are returned.



```js
fec_gov.schedules.schedule_b.get({
  "api_key": ""
}, context)
```

#### Input
* input `object`
  * per_page `integer`: The number of results returned per page. Defaults to 20.
  * max_amount `string`: Filter for all amounts less than a value.
  * line_number `string`: Filter for form and line number using the following format: `FORM-LINENUMBER`.  For example an argument such as `F3X-16` would filter down to all entries from form `F3X` line number `16`.
  * sort_hide_null `boolean`: Hide null values on sorted column(s).
  * recipient_name `array`: Name of the entity receiving the disbursement
  * min_image_number `string`
  * spender_committee_type `array`: The one-letter type code of the organization:
  * recipient_city `array`: City of recipient
  * spender_committee_org_type `array`: The one-letter code for the kind for organization:
  * committee_id `array`: 
  * min_date `string`: Minimum date
  * last_disbursement_date `string`: When sorting by `disbursement_date`, this is populated with the `disbursement_date` of the last result. However, you will need to pass the index of that last result to `last_index` to get the next page.
  * sort `string`: Provide a field to sort by. Use `-` for descending order.
  * disbursement_purpose_category `array`: Disbursement purpose category
  * sort_null_only `boolean`: Toggle that filters out all rows having sort column that is non-null
  * image_number `array`: The image number of the page where the schedule item is reported
  * recipient_state `array`: State of recipient
  * min_amount `string`: Filter for all amounts greater than a value.
  * max_image_number `string`
  * last_disbursement_amount `number`: When sorting by `disbursement_amount`, this is populated with the `disbursement_amount` of the last result.  However, you will need to pass the index of that last result to `last_index` to get the next page.
  * recipient_committee_id `array`: The FEC identifier should be represented here if the contributor is registered with the FEC.
  * two_year_transaction_period `array`: 
  * max_date `string`: Maximum date
  * api_key **required** `string`: 
  * last_index `integer`: Index of last result from previous page
  * spender_committee_designation `array`: The one-letter designation code of the organization:
  * disbursement_description `array`: Description of disbursement

#### Output
* output [ScheduleBPage](#schedulebpage)

### schedules.schedule_b.by_purpose.get

Schedule B disbursements aggregated by disbursement purpose category. To avoid double counting,
memoed items are not included.
Purpose is a combination of transaction codes, category codes and disbursement description.
Inspect the `disbursement_purpose` sql function within the migrations for more details.



```js
fec_gov.schedules.schedule_b.by_purpose.get({
  "api_key": ""
}, context)
```

#### Input
* input `object`
  * per_page `integer`: The number of results returned per page. Defaults to 20.
  * sort_null_only `boolean`: Toggle that filters out all rows having sort column that is non-null
  * cycle `array`: 
  * sort_hide_null `boolean`: Hide null values on sorted column(s).
  * page `integer`: For paginating through results, starting at page 1
  * committee_id `array`: 
  * sort_nulls_last `boolean`: Toggle that sorts null values last
  * api_key **required** `string`: 
  * sort `string`: Provide a field to sort by. Use `-` for descending order.
  * purpose `array`: Disbursement purpose category

#### Output
* output [ScheduleBByPurposePage](#schedulebbypurposepage)

### schedules.schedule_b.by_recipient.get

Schedule B disbursements aggregated by recipient name. To avoid double counting,
memoed items are not included.



```js
fec_gov.schedules.schedule_b.by_recipient.get({
  "api_key": ""
}, context)
```

#### Input
* input `object`
  * per_page `integer`: The number of results returned per page. Defaults to 20.
  * sort_null_only `boolean`: Toggle that filters out all rows having sort column that is non-null
  * cycle `array`: 
  * sort_hide_null `boolean`: Hide null values on sorted column(s).
  * recipient_name `array`: Name of the entity receiving the disbursement
  * page `integer`: For paginating through results, starting at page 1
  * committee_id `array`: 
  * sort_nulls_last `boolean`: Toggle that sorts null values last
  * api_key **required** `string`: 
  * sort `string`: Provide a field to sort by. Use `-` for descending order.

#### Output
* output [ScheduleBByRecipientPage](#schedulebbyrecipientpage)

### schedules.schedule_b.by_recipient_id.get

Schedule B disbursements aggregated by recipient committee ID, if applicable.
To avoid double counting, memoed items are not included.



```js
fec_gov.schedules.schedule_b.by_recipient_id.get({
  "api_key": ""
}, context)
```

#### Input
* input `object`
  * per_page `integer`: The number of results returned per page. Defaults to 20.
  * recipient_id `array`: The FEC identifier should be represented here if the entity receiving the disbursement is registered with the FEC.
  * cycle `array`: 
  * sort_null_only `boolean`: Toggle that filters out all rows having sort column that is non-null
  * sort_hide_null `boolean`: Hide null values on sorted column(s).
  * page `integer`: For paginating through results, starting at page 1
  * committee_id `array`: 
  * sort_nulls_last `boolean`: Toggle that sorts null values last
  * api_key **required** `string`: 
  * sort `string`: Provide a field to sort by. Use `-` for descending order.

#### Output
* output [ScheduleBByRecipientIDPage](#schedulebbyrecipientidpage)

### schedules.schedule_b.efile.get

Efiling endpoints provide real-time campaign finance data received from electronic filers. Efiling endpoints only contain the most recent four months of data and don't contain the processed and coded data that you can find on other endpoints.



```js
fec_gov.schedules.schedule_b.efile.get({
  "api_key": ""
}, context)
```

#### Input
* input `object`
  * per_page `integer`: The number of results returned per page. Defaults to 20.
  * sort_null_only `boolean`: Toggle that filters out all rows having sort column that is non-null
  * max_amount `string`: Filter for all amounts less than a value.
  * sort_hide_null `boolean`: Hide null values on sorted column(s).
  * image_number `array`: The image number of the page where the schedule item is reported
  * recipient_state `array`: State of recipient
  * page `integer`: For paginating through results, starting at page 1
  * min_amount `string`: Filter for all amounts less than a value.
  * committee_id `array`: 
  * recipient_city `array`: City of recipient
  * min_date `string`: When sorting by `disbursement_date`, this is populated with the         `disbursement_date` of the last result. However, you will need to pass the index         of that last result to `last_index` to get the next page.
  * max_date `string`: When sorting by `disbursement_date`, this is populated with the         `disbursement_date` of the last result. However, you will need to pass the index         of that last result to `last_index` to get the next page.
  * sort_nulls_last `boolean`: Toggle that sorts null values last
  * api_key **required** `string`: 
  * sort `string`: Provide a field to sort by. Use `-` for descending order.
  * disbursement_description `array`: Description of disbursement

#### Output
* output [ScheduleBEfilePage](#schedulebefilepage)

### schedules.schedule_b.sub_id.get

Schedule B filings describe itemized disbursements. This data
explains how committees and other filers spend their money. These figures are
reported as part of forms F3, F3X and F3P.

The data is divided in two-year periods, called `two_year_transaction_period`, which
is derived from the `report_year` submitted of the corresponding form. If no value is supplied, the results will
default to the most recent two-year period that is named after the ending,
even-numbered year.

Due to the large quantity of Schedule B filings, this endpoint is not paginated by
page number. Instead, you can request the next page of results by adding the values in
the `last_indexes` object from `pagination` to the URL of your last request. For
example, when sorting by `disbursement_date`, you might receive a page of
results with the following pagination information:

```
pagination: {
    pages: 965191,
    per_page: 20,
    count: 19303814,
    last_indexes: {
        last_index: "230906248",
        last_disbursement_date: "2014-07-04"
    }
}
```

To fetch the next page of sorted results, append `last_index=230906248` and
`last_disbursement_date=2014-07-04` to the URL.  We strongly advise paging through
these results by using the sort indices (defaults to sort by disbursement date, e.g.
`last_disbursement_date`), otherwise some resources may be unintentionally filtered out.
This resource uses keyset pagination to improve query performance
and these indices are required to properly page through this large dataset.

Note: because the Schedule B data includes many records, counts for
large result sets are approximate; you will want to page through the records until no records are returned.



```js
fec_gov.schedules.schedule_b.sub_id.get({
  "api_key": "",
  "sub_id": ""
}, context)
```

#### Input
* input `object`
  * per_page `integer`: The number of results returned per page. Defaults to 20.
  * max_amount `string`: Filter for all amounts less than a value.
  * line_number `string`: Filter for form and line number using the following format: `FORM-LINENUMBER`.  For example an argument such as `F3X-16` would filter down to all entries from form `F3X` line number `16`.
  * sort_hide_null `boolean`: Hide null values on sorted column(s).
  * recipient_name `array`: Name of the entity receiving the disbursement
  * min_image_number `string`
  * spender_committee_type `array`: The one-letter type code of the organization:
  * recipient_city `array`: City of recipient
  * spender_committee_org_type `array`: The one-letter code for the kind for organization:
  * committee_id `array`: 
  * min_date `string`: Minimum date
  * last_disbursement_date `string`: When sorting by `disbursement_date`, this is populated with the `disbursement_date` of the last result. However, you will need to pass the index of that last result to `last_index` to get the next page.
  * sort `string`: Provide a field to sort by. Use `-` for descending order.
  * disbursement_purpose_category `array`: Disbursement purpose category
  * sort_null_only `boolean`: Toggle that filters out all rows having sort column that is non-null
  * image_number `array`: The image number of the page where the schedule item is reported
  * recipient_state `array`: State of recipient
  * min_amount `string`: Filter for all amounts greater than a value.
  * max_image_number `string`
  * last_disbursement_amount `number`: When sorting by `disbursement_amount`, this is populated with the `disbursement_amount` of the last result.  However, you will need to pass the index of that last result to `last_index` to get the next page.
  * recipient_committee_id `array`: The FEC identifier should be represented here if the contributor is registered with the FEC.
  * two_year_transaction_period `array`: 
  * max_date `string`: Maximum date
  * api_key **required** `string`: 
  * last_index `integer`: Index of last result from previous page
  * spender_committee_designation `array`: The one-letter designation code of the organization:
  * disbursement_description `array`: Description of disbursement
  * sub_id **required** `string`

#### Output
* output [ScheduleBPage](#schedulebpage)

### schedules.schedule_c.get

Schedule C shows all loans, endorsements and loan guarantees a committee
receives or makes.

The committee continues to report the loan until it is repaid.



```js
fec_gov.schedules.schedule_c.get({
  "api_key": ""
}, context)
```

#### Input
* input `object`
  * per_page `integer`: The number of results returned per page. Defaults to 20.
  * max_amount `string`: 
  * line_number `string`: 
  * sort_hide_null `boolean`: Hide null values on sorted column(s).
  * candidate_name `array`: Name of candidate running for office
  * min_incurred_date `string`: 
  * min_payment_to_date `integer`: 
  * min_image_number `string`
  * committee_id `array`: 
  * max_payment_to_date `integer`: 
  * sort `string`: Provide a field to sort by. Use `-` for descending order.
  * sort_null_only `boolean`: Toggle that filters out all rows having sort column that is non-null
  * max_incurred_date `string`: 
  * image_number `array`: 
  * min_amount `string`: 
  * max_image_number `string`
  * page `integer`: For paginating through results, starting at page 1
  * sort_nulls_last `boolean`: Toggle that sorts null values last
  * api_key **required** `string`: 
  * last_index `integer`: Index of last result from previous page
  * loan_source_name `array`: Source of the loan (i.e., bank loan, brokerage account, credit card, home equity line of credit,               other line of credit, or personal funds of the candidate

#### Output
* output `object`
  * pagination [OffsetInfo](#offsetinfo)
  * results `array`
    * items `object`
      * action_code `string`
      * action_code_full `string`
      * candidate_first_name `string`
      * candidate_id `string`: 
      * candidate_last_name `string`
      * candidate_middle_name `string`
      * candidate_name `string`: Name of candidate running for office
      * candidate_office `string`
      * candidate_office_district `string`: Two-digit US House distirict of the office the candidate is running for. Presidential, Senate and House at-large candidates will have District 00.
      * candidate_office_full `string`
      * candidate_office_state `string`
      * candidate_office_state_full `string`
      * candidate_prefix `string`
      * candidate_suffix `string`
      * committee [CommitteeHistory](#committeehistory)
      * committee_id `string`: 
      * cycle `integer`
      * due_date_terms `string`
      * election_type `string`
      * election_type_full `string`
      * entity_type `string`
      * entity_type_full `string`
      * fec_committee_id `string`
      * fec_election_type_full `string`
      * fec_election_type_year `string`
      * file_number `integer`
      * filing_form `string`
      * image_number `string`: 
      * incurred_date `string`
      * interest_rate_terms `string`
      * line_number `string`
      * link_id `integer`
      * load_date `string`
      * loan_balance `number`
      * loan_source_city `string`
      * loan_source_first_name `string`
      * loan_source_last_name `string`
      * loan_source_middle_name `string`
      * loan_source_name `string`: Source of the loan (i.e., bank loan, brokerage account, credit card, home equity line of credit,               other line of credit, or personal funds of the candidate
      * loan_source_prefix `string`
      * loan_source_state `string`
      * loan_source_street_1 `string`
      * loan_source_street_2 `string`
      * loan_source_suffix `string`
      * loan_source_zip `integer`
      * memo_code `string`
      * memo_text `string`
      * original_loan_amount `number`
      * original_sub_id `integer`
      * payment_to_date `number`
      * pdf_url `string`
      * personally_funded `string`
      * report_type `string`: Name of report where the underlying data comes from:
      * report_year `integer`: 
      * schedule_a_line_number `integer`
      * schedule_type `string`
      * schedule_type_full `string`
      * secured_ind `string`
      * sub_id `string`
      * transaction_id `string`

### schedules.schedule_c.sub_id.get

Schedule C shows all loans, endorsements and loan guarantees a committee
receives or makes.

The committee continues to report the loan until it is repaid.



```js
fec_gov.schedules.schedule_c.sub_id.get({
  "api_key": "",
  "sub_id": ""
}, context)
```

#### Input
* input `object`
  * per_page `integer`: The number of results returned per page. Defaults to 20.
  * sort_null_only `boolean`: Toggle that filters out all rows having sort column that is non-null
  * sort_hide_null `boolean`: Hide null values on sorted column(s).
  * sort_nulls_last `boolean`: Toggle that sorts null values last
  * api_key **required** `string`: 
  * page `integer`: For paginating through results, starting at page 1
  * sort `string`: Provide a field to sort by. Use `-` for descending order.
  * sub_id **required** `string`

#### Output
* output `object`
  * pagination [OffsetInfo](#offsetinfo)
  * results `array`
    * items `object`
      * action_code `string`
      * action_code_full `string`
      * candidate_first_name `string`
      * candidate_id `string`: 
      * candidate_last_name `string`
      * candidate_middle_name `string`
      * candidate_name `string`: Name of candidate running for office
      * candidate_office `string`
      * candidate_office_district `string`: Two-digit US House distirict of the office the candidate is running for. Presidential, Senate and House at-large candidates will have District 00.
      * candidate_office_full `string`
      * candidate_office_state `string`
      * candidate_office_state_full `string`
      * candidate_prefix `string`
      * candidate_suffix `string`
      * committee [CommitteeHistory](#committeehistory)
      * committee_id `string`: 
      * cycle `integer`
      * due_date_terms `string`
      * election_type `string`
      * election_type_full `string`
      * entity_type `string`
      * entity_type_full `string`
      * fec_committee_id `string`
      * fec_election_type_full `string`
      * fec_election_type_year `string`
      * file_number `integer`
      * filing_form `string`
      * image_number `string`: 
      * incurred_date `string`
      * interest_rate_terms `string`
      * line_number `string`
      * link_id `integer`
      * load_date `string`
      * loan_balance `number`
      * loan_source_city `string`
      * loan_source_first_name `string`
      * loan_source_last_name `string`
      * loan_source_middle_name `string`
      * loan_source_name `string`: Source of the loan (i.e., bank loan, brokerage account, credit card, home equity line of credit,               other line of credit, or personal funds of the candidate
      * loan_source_prefix `string`
      * loan_source_state `string`
      * loan_source_street_1 `string`
      * loan_source_street_2 `string`
      * loan_source_suffix `string`
      * loan_source_zip `integer`
      * memo_code `string`
      * memo_text `string`
      * original_loan_amount `number`
      * original_sub_id `integer`
      * payment_to_date `number`
      * pdf_url `string`
      * personally_funded `string`
      * report_type `string`: Name of report where the underlying data comes from:
      * report_year `integer`: 
      * schedule_a_line_number `integer`
      * schedule_type `string`
      * schedule_type_full `string`
      * secured_ind `string`
      * sub_id `string`
      * transaction_id `string`

### schedules.schedule_d.get

Schedule D, it shows debts and obligations owed to or by the committee that are
required to be disclosed.





```js
fec_gov.schedules.schedule_d.get({
  "api_key": ""
}, context)
```

#### Input
* input `object`
  * per_page `integer`: The number of results returned per page. Defaults to 20.
  * min_payment_period `number`
  * creditor_debtor_name `array`
  * max_amount `string`: Filter for all amounts less than a value.
  * sort_hide_null `boolean`: Hide null values on sorted column(s).
  * line_number `string`: Filter for form and line number using the following format: `FORM-LINENUMBER`.  For example an argument such as `F3X-16` would filter down to all entries from form `F3X` line number `16`.
  * min_image_number `string`
  * committee_id `array`: 
  * min_date `string`: Minimum date
  * max_payment_period `number`
  * sort `string`: Provide a field to sort by. Use `-` for descending order.
  * candidate_id `array`: 
  * max_amount_incurred `number`
  * sort_null_only `boolean`: Toggle that filters out all rows having sort column that is non-null
  * image_number `array`: The image number of the page where the schedule item is reported
  * min_amount `string`: Filter for all amounts greater than a value.
  * max_image_number `string`
  * page `integer`: For paginating through results, starting at page 1
  * min_amount_incurred `number`
  * max_date `string`: Maximum date
  * sort_nulls_last `boolean`: Toggle that sorts null values last
  * api_key **required** `string`: 
  * nature_of_debt `string`

#### Output
* output `object`
  * pagination [OffsetInfo](#offsetinfo)
  * results `array`
    * items `object`
      * action_code `string`
      * action_code_full `string`
      * amount_incurred_period `number`
      * candidate_first_name `string`
      * candidate_id `string`: 
      * candidate_last_name `string`
      * candidate_office `string`
      * candidate_office_district `string`
      * candidate_office_state `string`
      * candidate_office_state_full `string`
      * canidate_name `string`: Name of candidate running for office
      * committee [CommitteeHistory](#committeehistory)
      * committee_id `string`: 
      * committee_name `string`: The name of the committee. If a committee changes its name,     the most recent name will be shown. Committee names are not unique. Use committee_id     for looking up records.
      * conduit_committee_city `string`
      * conduit_committee_id `string`
      * conduit_committee_name `string`
      * conduit_committee_state `string`
      * conduit_committee_street1 `string`
      * conduit_committee_street2 `string`
      * conduit_committee_zip `integer`
      * creditor_debtor_city `string`
      * creditor_debtor_first_name `string`
      * creditor_debtor_id `string`
      * creditor_debtor_last_name `string`
      * creditor_debtor_middle_name `string`
      * creditor_debtor_name `string`
      * creditor_debtor_prefix `string`
      * creditor_debtor_state `string`
      * creditor_debtor_street1 `string`
      * creditor_debtor_street2 `string`
      * creditor_debtor_suffix `string`
      * election_cycle `integer`
      * entity_type `string`
      * file_number `integer`
      * filing_form `string`
      * image_number `string`: 
      * line_number `string`
      * link_id `integer`
      * load_date `string`
      * nature_of_debt `string`
      * original_sub_id `integer`
      * outstanding_balance_beginning_of_period `number`
      * outstanding_balance_close_of_period `number`
      * payment_period `number`
      * pdf_url `string`
      * report_type `string`: Name of report where the underlying data comes from:
      * report_year `integer`: 
      * schedule_type `string`
      * schedule_type_full `string`
      * sub_id `string`
      * transaction_id `string`

### schedules.schedule_d.sub_id.get

Schedule D, it shows debts and obligations owed to or by the committee that are
required to be disclosed.





```js
fec_gov.schedules.schedule_d.sub_id.get({
  "api_key": "",
  "sub_id": ""
}, context)
```

#### Input
* input `object`
  * per_page `integer`: The number of results returned per page. Defaults to 20.
  * sort_null_only `boolean`: Toggle that filters out all rows having sort column that is non-null
  * sort_hide_null `boolean`: Hide null values on sorted column(s).
  * sort_nulls_last `boolean`: Toggle that sorts null values last
  * api_key **required** `string`: 
  * page `integer`: For paginating through results, starting at page 1
  * sort `string`: Provide a field to sort by. Use `-` for descending order.
  * sub_id **required** `string`

#### Output
* output `object`
  * pagination [OffsetInfo](#offsetinfo)
  * results `array`
    * items `object`
      * action_code `string`
      * action_code_full `string`
      * amount_incurred_period `number`
      * candidate_first_name `string`
      * candidate_id `string`: 
      * candidate_last_name `string`
      * candidate_office `string`
      * candidate_office_district `string`
      * candidate_office_state `string`
      * candidate_office_state_full `string`
      * canidate_name `string`: Name of candidate running for office
      * committee [CommitteeHistory](#committeehistory)
      * committee_id `string`: 
      * committee_name `string`: The name of the committee. If a committee changes its name,     the most recent name will be shown. Committee names are not unique. Use committee_id     for looking up records.
      * conduit_committee_city `string`
      * conduit_committee_id `string`
      * conduit_committee_name `string`
      * conduit_committee_state `string`
      * conduit_committee_street1 `string`
      * conduit_committee_street2 `string`
      * conduit_committee_zip `integer`
      * creditor_debtor_city `string`
      * creditor_debtor_first_name `string`
      * creditor_debtor_id `string`
      * creditor_debtor_last_name `string`
      * creditor_debtor_middle_name `string`
      * creditor_debtor_name `string`
      * creditor_debtor_prefix `string`
      * creditor_debtor_state `string`
      * creditor_debtor_street1 `string`
      * creditor_debtor_street2 `string`
      * creditor_debtor_suffix `string`
      * election_cycle `integer`
      * entity_type `string`
      * file_number `integer`
      * filing_form `string`
      * image_number `string`: 
      * line_number `string`
      * link_id `integer`
      * load_date `string`
      * nature_of_debt `string`
      * original_sub_id `integer`
      * outstanding_balance_beginning_of_period `number`
      * outstanding_balance_close_of_period `number`
      * payment_period `number`
      * pdf_url `string`
      * report_type `string`: Name of report where the underlying data comes from:
      * report_year `integer`: 
      * schedule_type `string`
      * schedule_type_full `string`
      * sub_id `string`
      * transaction_id `string`

### schedules.schedule_e.get

Schedule E covers the line item expenditures for independent expenditures. For example, if a super PAC
bought ads on TV to oppose a federal candidate, each ad purchase would be recorded here with
the expenditure amount, name and id of the candidate, and whether the ad supported or opposed the candidate.

An independent expenditure is an expenditure for a communication "expressly advocating the election or
defeat of a clearly identified candidate that is not made in cooperation, consultation, or concert with,
or at the request or suggestion of, a candidate, a candidate’s authorized committee, or their agents, or
a political party or its agents."

Aggregates by candidate do not include 24 and 48 hour reports. This ensures we don't double count expenditures
and the totals are more accurate. You can still find the information from 24 and 48 hour reports in
`/schedule/schedule_e/`.

Due to the large quantity of Schedule E filings, this endpoint is not paginated by
page number. Instead, you can request the next page of results by adding the values in
the `last_indexes` object from `pagination` to the URL of your last request. For
example, when sorting by `expenditure_amount`, you might receive a page of
results with the following pagination information:

```
 "pagination": {
    "count": 152623,
    "last_indexes": {
      "last_index": "3023037",
      "last_expenditure_amount": -17348.5
    },
    "per_page": 20,
    "pages": 7632
  }
}
```

To fetch the next page of sorted results, append `last_index=3023037` and
`last_expenditure_amount=` to the URL.  We strongly advise paging through
these results by using the sort indices (defaults to sort by disbursement date,
e.g. `last_disbursement_date`), otherwise some resources may be unintentionally
filtered out.  This resource uses keyset pagination to improve query performance
and these indices are required to properly page through this large dataset.

Note: because the Schedule E data includes many records, counts for
large result sets are approximate; you will want to page through the records until no records are returned.



```js
fec_gov.schedules.schedule_e.get({
  "api_key": ""
}, context)
```

#### Input
* input `object`
  * last_support_oppose_indicator `string`: 
  * last_expenditure_date `string`: 
  * per_page `integer`: The number of results returned per page. Defaults to 20.
  * max_amount `string`: Filter for all amounts less than a value.
  * cycle `array`: 
  * sort_hide_null `boolean`: Hide null values on sorted column(s).
  * min_dissemination_date `string`: Selects all items distributed by this committee after this date
  * candidate_office_district `array`: Two-digit US House distirict of the office the candidate is running for. Presidential, Senate and House at-large candidates will have District 00.
  * min_filing_date `string`: 
  * last_expenditure_amount `number`: 
  * max_image_number `string`
  * last_office_total_ytd `number`: 
  * candidate_party `array`: Three-letter code for the party affiliated with a candidate or committee. For example, DEM for Democratic Party and REP for Republican Party.
  * sort_nulls_last `boolean`: Toggle that sorts null values last
  * is_notice `array`: 
  * api_key **required** `string`: 
  * line_number `string`: Filter for form and line number using the following format: `FORM-LINENUMBER`.  For example an argument such as `F3X-16` would filter down to all entries from form `F3X` line number `16`.
  * max_filing_date `string`: 
  * filing_form `array`: The form where the underlying data comes from, for example, Form 1 would appear as F1:
  * most_recent `boolean`: 
  * min_image_number `string`
  * candidate_office_state `array`: US state or territory
  * committee_id `array`: 
  * min_date `string`: Minimum date
  * payee_name `array`: 
  * candidate_office `array`: Federal office candidate runs for: H, S or P
  * sort `string`: Provide a field to sort by. Use `-` for descending order.
  * max_dissemination_date `string`: Selects all items distributed by this committee before this date
  * sort_null_only `boolean`: Toggle that filters out all rows having sort column that is non-null
  * image_number `array`: The image number of the page where the schedule item is reported
  * min_amount `string`: Filter for all amounts greater than a value.
  * support_oppose_indicator `array`: Explains if the money was spent in order to support or oppose a candidate or candidates. (Coded S or O for support or oppose.) This indicator applies to independent expenditures and communication costs.
  * max_date `string`: Maximum date
  * candidate_id `array`: 
  * last_index `integer`: Index of last result from previous page

#### Output
* output [ScheduleEPage](#scheduleepage)

### schedules.schedule_e.by_candidate.get

Schedule E receipts aggregated by recipient candidate. To avoid double
counting, memoed items are not included.



```js
fec_gov.schedules.schedule_e.by_candidate.get({
  "api_key": ""
}, context)
```

#### Input
* input `object`
  * per_page `integer`: The number of results returned per page. Defaults to 20.
  * sort_null_only `boolean`: Toggle that filters out all rows having sort column that is non-null
  * cycle `array`: 
  * election_full `boolean`: `True` indicates that full election period of a candidate.
  * sort_hide_null `boolean`: Hide null values on sorted column(s).
  * office `string` (values: house, senate, president): Federal office candidate runs for: H, S or P
  * page `integer`: For paginating through results, starting at page 1
  * district `string`: Two-digit US House distirict of the office the candidate is running for. Presidential, Senate and House at-large candidates will have District 00.
  * committee_id `array`: 
  * state `string`: US state or territory where a candidate runs for office
  * candidate_id `array`: 
  * sort_nulls_last `boolean`: Toggle that sorts null values last
  * api_key **required** `string`: 
  * sort `string`: Provide a field to sort by. Use `-` for descending order.
  * support_oppose `string` (values: S, O): Support or opposition

#### Output
* output [ScheduleEByCandidatePage](#scheduleebycandidatepage)

### schedules.schedule_e.efile.get

Efiling endpoints provide real-time campaign finance data received from electronic filers. Efiling endpoints only contain the most recent four months of data and don't contain the processed and coded data that you can find on other endpoints.



```js
fec_gov.schedules.schedule_e.efile.get({
  "api_key": ""
}, context)
```

#### Input
* input `object`
  * per_page `integer`: The number of results returned per page. Defaults to 20.
  * sort_hide_null `boolean`: Hide null values on sorted column(s).
  * min_dissemination_date `string`: Selects all items distributed by this committee after this date
  * candidate_office_district `array`: Two-digit US House distirict of the office the candidate is running for. Presidential, Senate and House at-large candidates will have District 00.
  * filing_form `array`: The form where the underlying data comes from, for example, Form 1 would appear as F1:
  * min_expenditure_date `string`: Selects all items expended by this committee after this date
  * most_recent `boolean`: 
  * candidate_office_state `array`: US state or territory where a candidate runs for office
  * api_key **required** `string`: 
  * committee_id `array`: 
  * payee_name `array`: 
  * min_expenditure_amount `integer`: Selects all items expended by this committee greater than this amount
  * candidate_office `string` (values: , H, S, P): Federal office candidate runs for: H, S or P
  * sort `string`: Provide a field to sort by. Use `-` for descending order.
  * max_filed_date `string`: Timestamp of electronic or paper record that FEC received
  * max_dissemination_date `string`: Selects all items distributed by this committee before this date
  * sort_null_only `boolean`: Toggle that filters out all rows having sort column that is non-null
  * max_expenditure_date `string`: Selects all items expended by this committee before this date
  * image_number `array`: 
  * max_expenditure_amount `integer`: Selects all items expended by this committee less than this amount
  * page `integer`: For paginating through results, starting at page 1
  * spender_name `array`: The name of the committee. If a committee changes its name,     the most recent name will be shown. Committee names are not unique. Use committee_id     for looking up records.
  * support_oppose_indicator `array`: Explains if the money was spent in order to support or oppose a candidate or candidates. (Coded S or O for support or oppose.) This indicator applies to independent expenditures and communication costs.
  * candidate_search `array`: 
  * candidate_party `array`: Three-letter code for the party affiliated with a candidate or committee. For example, DEM for Democratic Party and REP for Republican Party.
  * min_filed_date `string`: Timestamp of electronic or paper record that FEC received
  * candidate_id `array`: 
  * sort_nulls_last `boolean`: Toggle that sorts null values last
  * is_notice `boolean`: 

#### Output
* output [ScheduleEEfilePage](#scheduleeefilepage)

### schedules.schedule_e.totals.by_candidate.get

Total independent expenditure on supported or opposed candidates by cycle or candidate election year.



```js
fec_gov.schedules.schedule_e.totals.by_candidate.get({
  "api_key": ""
}, context)
```

#### Input
* input `object`
  * per_page `integer`: The number of results returned per page. Defaults to 20.
  * sort_null_only `boolean`: Toggle that filters out all rows having sort column that is non-null
  * cycle `array`: 
  * election_full `boolean`: `True` indicates that full election period of a candidate.
  * sort_hide_null `boolean`: Hide null values on sorted column(s).
  * page `integer`: For paginating through results, starting at page 1
  * candidate_id `array`: 
  * sort_nulls_last `boolean`: Toggle that sorts null values last
  * api_key **required** `string`: 
  * sort `string`: Provide a field to sort by. Use `-` for descending order.

#### Output
* output [IETotalsByCandidatePage](#ietotalsbycandidatepage)

### schedules.schedule_f.get

Schedule F, it shows all special expenditures a national or state party committee
makes in connection with the general election campaigns of federal candidates.

These coordinated party expenditures do not count against the contribution limits but are subject to other limits,
these limits are detailed in Chapter 7 of the FEC Campaign Guide for Political Party Committees.



```js
fec_gov.schedules.schedule_f.get({
  "api_key": ""
}, context)
```

#### Input
* input `object`
  * per_page `integer`: The number of results returned per page. Defaults to 20.
  * max_amount `string`: Filter for all amounts less than a value.
  * cycle `array`: 
  * line_number `string`: Filter for form and line number using the following format: `FORM-LINENUMBER`.  For example an argument such as `F3X-16` would filter down to all entries from form `F3X` line number `16`.
  * sort_hide_null `boolean`: Hide null values on sorted column(s).
  * min_image_number `string`
  * committee_id `array`: 
  * min_date `string`: Minimum date
  * payee_name `array`
  * sort `string`: Provide a field to sort by. Use `-` for descending order.
  * sort_null_only `boolean`: Toggle that filters out all rows having sort column that is non-null
  * image_number `array`: The image number of the page where the schedule item is reported
  * min_amount `string`: Filter for all amounts greater than a value.
  * max_image_number `string`
  * page `integer`: For paginating through results, starting at page 1
  * max_date `string`: Maximum date
  * candidate_id `array`: 
  * sort_nulls_last `boolean`: Toggle that sorts null values last
  * api_key **required** `string`: 

#### Output
* output `object`
  * pagination [OffsetInfo](#offsetinfo)
  * results `array`
    * items `object`
      * action_code `string`
      * action_code_full `string`
      * aggregate_general_election_expenditure `string`
      * back_reference_schedule_name `string`
      * back_reference_transaction_id `string`
      * candidate_first_name `string`
      * candidate_id `string`: 
      * candidate_last_name `string`
      * candidate_middle_name `string`
      * candidate_name `string`: Name of candidate running for office
      * candidate_office `string`
      * candidate_office_district `string`
      * candidate_office_full `string`
      * candidate_office_state `string`
      * candidate_office_state_full `string`
      * candidate_prefix `string`
      * candidate_suffix `string`
      * catolog_code `string`
      * catolog_code_full `string`
      * committee [CommitteeHistory](#committeehistory)
      * committee_designated_coordinated_expenditure_indicator `string`
      * committee_id `string`: 
      * committee_name `string`
      * conduit_committee_city `string`
      * conduit_committee_id `string`
      * conduit_committee_name `string`
      * conduit_committee_state `string`
      * conduit_committee_street1 `string`
      * conduit_committee_street2 `string`
      * conduit_committee_zip `integer`
      * designated_committee_id `string`
      * designated_committee_name `string`
      * election_cycle `integer`
      * entity_type `string`
      * entity_type_desc `string`
      * expenditure_amount `integer`
      * expenditure_date `string`
      * expenditure_purpose_full `string`
      * expenditure_type `string`
      * expenditure_type_full `string`
      * file_number `integer`
      * filing_form `string`
      * image_number `string`: 
      * line_number `string`
      * link_id `integer`
      * load_date `string`
      * memo_code `string`
      * memo_code_full `string`
      * memo_text `string`
      * original_sub_id `integer`
      * payee_first_name `string`
      * payee_last_name `string`
      * payee_middle_name `string`
      * payee_name `string`
      * pdf_url `string`
      * report_type `string`: Name of report where the underlying data comes from:
      * report_year `integer`: 
      * schedule_type `string`
      * schedule_type_full `string`
      * sub_id `string`
      * subordinate_committee [CommitteeHistory](#committeehistory)
      * subordinate_committee_id `string`
      * transaction_id `string`
      * unlimited_spending_flag `string`
      * unlimited_spending_flag_full `string`

### schedules.schedule_f.sub_id.get

Schedule F, it shows all special expenditures a national or state party committee
makes in connection with the general election campaigns of federal candidates.

These coordinated party expenditures do not count against the contribution limits but are subject to other limits,
these limits are detailed in Chapter 7 of the FEC Campaign Guide for Political Party Committees.



```js
fec_gov.schedules.schedule_f.sub_id.get({
  "api_key": "",
  "sub_id": ""
}, context)
```

#### Input
* input `object`
  * api_key **required** `string`: 
  * per_page `integer`: The number of results returned per page. Defaults to 20.
  * page `integer`: For paginating through results, starting at page 1
  * sub_id **required** `string`

#### Output
* output `object`
  * pagination [OffsetInfo](#offsetinfo)
  * results `array`
    * items `object`
      * action_code `string`
      * action_code_full `string`
      * aggregate_general_election_expenditure `string`
      * back_reference_schedule_name `string`
      * back_reference_transaction_id `string`
      * candidate_first_name `string`
      * candidate_id `string`: 
      * candidate_last_name `string`
      * candidate_middle_name `string`
      * candidate_name `string`: Name of candidate running for office
      * candidate_office `string`
      * candidate_office_district `string`
      * candidate_office_full `string`
      * candidate_office_state `string`
      * candidate_office_state_full `string`
      * candidate_prefix `string`
      * candidate_suffix `string`
      * catolog_code `string`
      * catolog_code_full `string`
      * committee [CommitteeHistory](#committeehistory)
      * committee_designated_coordinated_expenditure_indicator `string`
      * committee_id `string`: 
      * committee_name `string`
      * conduit_committee_city `string`
      * conduit_committee_id `string`
      * conduit_committee_name `string`
      * conduit_committee_state `string`
      * conduit_committee_street1 `string`
      * conduit_committee_street2 `string`
      * conduit_committee_zip `integer`
      * designated_committee_id `string`
      * designated_committee_name `string`
      * election_cycle `integer`
      * entity_type `string`
      * entity_type_desc `string`
      * expenditure_amount `integer`
      * expenditure_date `string`
      * expenditure_purpose_full `string`
      * expenditure_type `string`
      * expenditure_type_full `string`
      * file_number `integer`
      * filing_form `string`
      * image_number `string`: 
      * line_number `string`
      * link_id `integer`
      * load_date `string`
      * memo_code `string`
      * memo_code_full `string`
      * memo_text `string`
      * original_sub_id `integer`
      * payee_first_name `string`
      * payee_last_name `string`
      * payee_middle_name `string`
      * payee_name `string`
      * pdf_url `string`
      * report_type `string`: Name of report where the underlying data comes from:
      * report_year `integer`: 
      * schedule_type `string`
      * schedule_type_full `string`
      * sub_id `string`
      * subordinate_committee [CommitteeHistory](#committeehistory)
      * subordinate_committee_id `string`
      * transaction_id `string`
      * unlimited_spending_flag `string`
      * unlimited_spending_flag_full `string`

### state_election_office.get

State laws and procedures govern elections for state or local offices as well as
how candidates appear on election ballots.
Contact the appropriate state election office for more information.



```js
fec_gov.state_election_office.get({
  "state": "",
  "api_key": ""
}, context)
```

#### Input
* input `object`
  * per_page `integer`: The number of results returned per page. Defaults to 20.
  * sort_null_only `boolean`: Toggle that filters out all rows having sort column that is non-null
  * sort_hide_null `boolean`: Hide null values on sorted column(s).
  * state **required** `string`: 
  * sort_nulls_last `boolean`: Toggle that sorts null values last
  * api_key **required** `string`: 
  * page `integer`: For paginating through results, starting at page 1
  * sort `string`: Provide a field to sort by. Use `-` for descending order.

#### Output
* output [StateElectionOfficeInfoPage](#stateelectionofficeinfopage)

### totals.by_entity.get

Provides cumulative receipt totals by entity type, over a two year cycle. Totals are adjusted to avoid double counting.

This is [the sql](https://github.com/fecgov/openFEC/blob/develop/data/migrations/V41__large_aggregates.sql) that creates these calculations.



```js
fec_gov.totals.by_entity.get({
  "cycle": 0,
  "api_key": ""
}, context)
```

#### Input
* input `object`
  * per_page `integer`: The number of results returned per page. Defaults to 20.
  * sort_null_only `boolean`: Toggle that filters out all rows having sort column that is non-null
  * cycle **required** `integer`: 
  * sort_hide_null `boolean`: Hide null values on sorted column(s).
  * sort_nulls_last `boolean`: Toggle that sorts null values last
  * api_key **required** `string`: 
  * page `integer`: For paginating through results, starting at page 1
  * sort `string`: Provide a field to sort by. Use `-` for descending order.

#### Output
* output [EntityReceiptDisbursementTotalsPage](#entityreceiptdisbursementtotalspage)

### totals.committee_type.get

This endpoint provides information about a committee's Form 3, Form 3X, or Form 3P financial reports,
which are aggregated by two-year period. We refer to two-year periods as a `cycle`.

The cycle is named after the even-numbered year and includes the year before it. To obtain
totals from 2013 and 2014, you would use 2014. In odd-numbered years, the current cycle
is the next year — for example, in 2015, the current cycle is 2016.

For presidential and Senate candidates, multiple two-year cycles exist between elections.

Parameter `full_election` is replaced by `election_full`. Please use `election_full` instead.



```js
fec_gov.totals.committee_type.get({
  "api_key": "",
  "committee_type": ""
}, context)
```

#### Input
* input `object`
  * per_page `integer`: The number of results returned per page. Defaults to 20.
  * sort_null_only `boolean`: Toggle that filters out all rows having sort column that is non-null
  * cycle `array`: 
  * sort_hide_null `boolean`: Hide null values on sorted column(s).
  * committee_designation `array`: The one-letter designation code of the organization:
  * page `integer`: For paginating through results, starting at page 1
  * committee_id `string`: 
  * sort_nulls_last `boolean`: Toggle that sorts null values last
  * api_key **required** `string`: 
  * sort `string`: Provide a field to sort by. Use `-` for descending order.
  * committee_type **required** `string` (values: presidential, pac, party, pac-party, house-senate, ie-only): House, Senate, presidential, independent expenditure only

#### Output
* output [CommitteeTotalsPage](#committeetotalspage)



## Definitions

### AuditCandidateSearch
* AuditCandidateSearch `object`
  * id `string`
  * name `string`

### AuditCandidateSearchList
* AuditCandidateSearchList `object`
  * results `array`
    * items [AuditCandidateSearch](#auditcandidatesearch)

### AuditCase
* AuditCase `object`
  * audit_case_id `string`
  * audit_id `integer`
  * candidate_id `string`
  * candidate_name `string`
  * committee_description `string`
  * committee_designation `string`
  * committee_id `string`
  * committee_name `string`
  * committee_type `string`
  * cycle `integer`
  * far_release_date `string`
  * link_to_report `string`: 
  * primary_category_list `array`
    * items [AuditCaseCategoryRelation](#auditcasecategoryrelation)

### AuditCaseCategoryRelation
* AuditCaseCategoryRelation `object`
  * primary_category_id `string`
  * primary_category_name `string`
  * sub_category_list `array`
    * items [AuditCaseSubCategory](#auditcasesubcategory)

### AuditCaseCategoryRelationPage
* AuditCaseCategoryRelationPage `object`
  * pagination [OffsetInfo](#offsetinfo)
  * results `array`
    * items [AuditCaseCategoryRelation](#auditcasecategoryrelation)

### AuditCasePage
* AuditCasePage `object`
  * pagination [OffsetInfo](#offsetinfo)
  * results `array`
    * items [AuditCase](#auditcase)

### AuditCaseSubCategory
* AuditCaseSubCategory `object`
  * sub_category_id `string`
  * sub_category_name `string`

### AuditCaseSubCategoryPage
* AuditCaseSubCategoryPage `object`
  * pagination [OffsetInfo](#offsetinfo)
  * results `array`
    * items [AuditCaseSubCategory](#auditcasesubcategory)

### AuditCategory
* AuditCategory `object`
  * primary_category_id `string`
  * primary_category_name `string`
  * sub_category_list `array`
    * items [AuditCategoryRelation](#auditcategoryrelation)

### AuditCategoryPage
* AuditCategoryPage `object`
  * pagination [OffsetInfo](#offsetinfo)
  * results `array`
    * items [AuditCategory](#auditcategory)

### AuditCategoryRelation
* AuditCategoryRelation `object`
  * sub_category_id `string`
  * sub_category_name `string`

### AuditCategoryRelationPage
* AuditCategoryRelationPage `object`
  * pagination [OffsetInfo](#offsetinfo)
  * results `array`
    * items [AuditCategoryRelation](#auditcategoryrelation)

### AuditCommitteeSearch
* AuditCommitteeSearch `object`
  * id `string`
  * name `string`

### AuditCommitteeSearchList
* AuditCommitteeSearchList `object`
  * results `array`
    * items [AuditCommitteeSearch](#auditcommitteesearch)

### AuditPrimaryCategory
* AuditPrimaryCategory `object`
  * primary_category_id `string`
  * primary_category_name `string`

### AuditPrimaryCategoryPage
* AuditPrimaryCategoryPage `object`
  * pagination [OffsetInfo](#offsetinfo)
  * results `array`
    * items [AuditPrimaryCategory](#auditprimarycategory)

### BaseF3Filing
* BaseF3Filing `object`
  * amended_address `string`
  * amended_by `integer`
  * amendment `string`
  * amendment_chain `array`
    * items `integer`
  * beginning_image_number `string`
  * candidate_first_name `string`
  * candidate_id `string`
  * candidate_last_name `string`
  * candidate_middle_name `string`
  * candidate_name `string`
  * candidate_prefix `string`
  * candidate_suffix `string`
  * cash_on_hand_beginning_period `integer`
  * city `string`
  * committee_id `string`: 
  * committee_name `string`: The name of the committee. If a committee changes its name,     the most recent name will be shown. Committee names are not unique. Use committee_id     for looking up records.
  * coverage_end_date `string`
  * coverage_start_date `string`
  * csv_url `string`
  * district `integer`
  * document_description `string`
  * election_date `string`
  * election_state `string`
  * f3z1 `integer`
  * fec_file_id `string`
  * fec_url `string`
  * file_number `integer`
  * general_election `string`
  * is_amended `boolean`
  * most_recent `boolean`
  * most_recent_filing `integer`
  * pdf_url `string`
  * prefix `string`
  * primary_election `string`
  * receipt_date `string`
  * report `string`
  * report_type `string`
  * report_year `integer`
  * rpt_pgi `string`: Election type 
  * runoff_election `string`
  * sign_date `string`
  * special_election `string`
  * state `string`
  * street_1 `string`
  * street_2 `string`
  * suffix `string`
  * summary_lines `string`
  * treasurer_first_name `string`
  * treasurer_last_name `string`
  * treasurer_middle_name `string`
  * treasurer_name `string`
  * zip `string`

### BaseF3FilingPage
* BaseF3FilingPage `object`
  * pagination [OffsetInfo](#offsetinfo)
  * results `array`
    * items [BaseF3Filing](#basef3filing)

### BaseF3PFiling
* BaseF3PFiling `object`
  * amended_by `integer`
  * amendment `string`
  * amendment_chain `array`
    * items `integer`
  * beginning_image_number `string`
  * cash_on_hand_beginning_period `number`
  * cash_on_hand_end_period `number`
  * city `string`
  * committee_id `string`: 
  * committee_name `string`: The name of the committee. If a committee changes its name,     the most recent name will be shown. Committee names are not unique. Use committee_id     for looking up records.
  * coverage_end_date `string`
  * coverage_start_date `string`
  * csv_url `string`
  * debts_owed_by_committee `number`
  * debts_owed_to_committee `number`
  * document_description `string`
  * election_date `string`
  * election_state `string`
  * expenditure_subject_to_limits `number`
  * fec_file_id `string`
  * fec_url `string`
  * file_number `integer`
  * general_election `string`
  * is_amended `boolean`
  * most_recent `boolean`
  * most_recent_filing `integer`
  * net_contributions_cycle_to_date `number`
  * net_operating_expenditures_cycle_to_date `number`
  * pdf_url `string`
  * prefix `string`
  * primary_election `string`
  * receipt_date `string`
  * report `string`
  * report_type `string`
  * report_year `integer`
  * rpt_pgi `string`: Election type 
  * sign_date `string`
  * state `string`
  * street_1 `string`
  * street_2 `string`
  * subtotal_summary_period `string`
  * suffix `string`
  * summary_lines `string`
  * treasurer_first_name `string`
  * treasurer_last_name `string`
  * treasurer_middle_name `string`
  * treasurer_name `string`
  * zip `string`

### BaseF3PFilingPage
* BaseF3PFilingPage `object`
  * pagination [OffsetInfo](#offsetinfo)
  * results `array`
    * items [BaseF3PFiling](#basef3pfiling)

### BaseF3XFiling
* BaseF3XFiling `object`
  * amend_address `string`
  * amended_by `integer`
  * amendment `string`
  * amendment_chain `array`
    * items `integer`
  * beginning_image_number `string`
  * city `string`
  * committee_id `string`: 
  * committee_name `string`: The name of the committee. If a committee changes its name,     the most recent name will be shown. Committee names are not unique. Use committee_id     for looking up records.
  * coverage_end_date `string`
  * coverage_start_date `string`
  * csv_url `string`
  * document_description `string`
  * election_date `string`
  * election_state `string`
  * fec_file_id `string`
  * fec_url `string`
  * file_number `integer`
  * is_amended `boolean`
  * most_recent `boolean`
  * most_recent_filing `integer`
  * pdf_url `string`
  * qualified_multicandidate_committee `string`
  * receipt_date `string`
  * report `string`
  * report_type `string`
  * report_year `integer`
  * rpt_pgi `string`: Election type 
  * sign_date `string`
  * state `string`
  * street_1 `string`
  * street_2 `string`
  * summary_lines `string`
  * zip `string`

### BaseF3XFilingPage
* BaseF3XFilingPage `object`
  * pagination [OffsetInfo](#offsetinfo)
  * results `array`
    * items [BaseF3XFiling](#basef3xfiling)

### CCTotalsByCandidate
* CCTotalsByCandidate `object`
  * candidate_id `string`
  * cycle `integer`
  * support_oppose_indicator `string`
  * total `number`

### CCTotalsByCandidatePage
* CCTotalsByCandidatePage `object`
  * pagination [OffsetInfo](#offsetinfo)
  * results `array`
    * items [CCTotalsByCandidate](#cctotalsbycandidate)

### CalendarDate
* CalendarDate `object`
  * all_day `boolean`
  * calendar_category_id `integer`: 
  * category `string`: 
  * description `string`
  * end_date `string`
  * event_id `integer`: An unique ID for an event. Useful for downloading a single event to your calendar. This ID is not a permanent, persistent ID.
  * location `string`: 
  * start_date `string`
  * state `array`: The state field only applies to election dates and reporting deadlines, reporting periods and all other dates do not have the array of states to filter on
    * items `string`
  * summary `string`
  * url `string`: 

### CalendarDatePage
* CalendarDatePage `object`
  * pagination [OffsetInfo](#offsetinfo)
  * results `array`
    * items [CalendarDate](#calendardate)

### Candidate
* Candidate `object`
  * active_through `integer`: Last year a candidate was active. This field is specific to the candidate_id so if the same person runs for another office, there may be a different record for them.
  * candidate_id `string`: 
  * candidate_inactive `boolean`:  Candidates who are actively seeking office. If no value is specified, all candidates
  * candidate_status `string`: One-letter code explaining if the candidate is:
  * cycles `array`: 
    * items `integer`
  * district `string`: Two-digit US House distirict of the office the candidate is running for. Presidential, Senate and House at-large candidates will have District 00.
  * district_number `integer`: One-letter code explaining if the candidate is:
  * election_districts `array`: Two-digit US House distirict of the office the candidate is running for. Presidential, Senate and House at-large candidates will have District 00.
    * items `string`
  * election_years `array`: Years in which a candidate ran for office.
    * items `integer`
  * federal_funds_flag `boolean`
  * first_file_date `string`: The day the FEC received the candidate's first filing. This is a F2 candidate registration.
  * has_raised_funds `boolean`
  * inactive_election_years `array`: inactive years
    * items `integer`
  * incumbent_challenge `string`: One-letter code ('I', 'C', 'O') explaining if the candidate is an incumbent, a challenger, or if the seat is open.
  * incumbent_challenge_full `string`: Explains if the candidate is an incumbent, a challenger, or if the seat is open.
  * last_f2_date `string`: The day the FEC received the candidate's most recent Form 2
  * last_file_date `string`: The day the FEC received the candidate's most recent filing
  * load_date `string`: Date the information was loaded into the FEC systems. This can be affected by reseting systems and other factors, refer to receipt_date for the day that the FEC received the paper or electronic document. Keep in mind that paper filings take more time to process and there can be a lag between load_date and receipt_date. This field can be helpful to identify paper records that have been processed recently.
  * name `string`: Name of candidate running for office
  * office `string`: Federal office candidate runs for: H, S or P
  * office_full `string`: Federal office candidate runs for: House, Senate or presidential
  * party `string`: Three-letter code for the party affiliated with a candidate or committee. For example, DEM for Democratic Party and REP for Republican Party.
  * party_full `string`: Party affiliated with a candidate or committee
  * principal_committees `array`
    * items [Committee](#committee)
  * state `string`: US state or territory where a candidate runs for office

### CandidateCommitteeTotalsHouseSenate
* CandidateCommitteeTotalsHouseSenate `object`
  * all_other_loans `number`
  * candidate_contribution `number`
  * candidate_election_year **required** `integer`: 
  * candidate_id **required** `string`: 
  * contribution_refunds `number`
  * contributions `number`: Contribution
  * coverage_end_date `string`
  * coverage_start_date `string`
  * cycle **required** `integer`: 
  * disbursements `number`: Disbursements
  * election_full **required** `boolean`
  * exempt_legal_accounting_disbursement `number`
  * federal_funds `number`
  * fundraising_disbursements `number`
  * individual_contributions `number`
  * individual_itemized_contributions `number`: Individual itemized contributions are from individuals whose aggregate contributions total over $200 per individual per year. Be aware, some filers choose to itemize donations $200 or less.
  * individual_unitemized_contributions `number`: Unitemized contributions are made individuals whose aggregate contributions total $200 or less per individual per year. Be aware, some filers choose to itemize donations $200 or less and in that case those donations will appear in the itemized total.
  * last_beginning_image_number `string`
  * last_cash_on_hand_end_period `number`
  * last_debts_owed_by_committee `number`
  * last_debts_owed_to_committee `number`
  * last_net_contributions `number`
  * last_net_operating_expenditures `number`
  * last_report_type_full `string`
  * last_report_year `integer`
  * loan_repayments `number`
  * loan_repayments_candidate_loans `number`
  * loan_repayments_other_loans `number`
  * loans `number`
  * loans_made_by_candidate `number`
  * net_contributions `number`
  * net_operating_expenditures `number`
  * offsets_to_fundraising_expenditures `number`
  * offsets_to_legal_accounting `number`
  * offsets_to_operating_expenditures `number`
  * operating_expenditures `number`
  * other_disbursements `number`
  * other_political_committee_contributions `number`
  * other_receipts `number`
  * political_party_committee_contributions `number`
  * receipts `number`
  * refunded_individual_contributions `number`
  * refunded_other_political_committee_contributions `number`
  * refunded_political_party_committee_contributions `number`
  * total_offsets_to_operating_expenditures `number`
  * transaction_coverage_date `string`
  * transfers_from_other_authorized_committee `number`
  * transfers_to_other_authorized_committee `number`

### CandidateCommitteeTotalsHouseSenatePage
* CandidateCommitteeTotalsHouseSenatePage `object`
  * pagination [OffsetInfo](#offsetinfo)
  * results `array`
    * items [CandidateCommitteeTotalsHouseSenate](#candidatecommitteetotalshousesenate)

### CandidateCommitteeTotalsPresidential
* CandidateCommitteeTotalsPresidential `object`
  * candidate_contribution `number`
  * candidate_election_year **required** `integer`: 
  * candidate_id **required** `string`: 
  * contribution_refunds `number`
  * contributions `number`: Contribution
  * coverage_end_date `string`
  * coverage_start_date `string`
  * cycle **required** `integer`: 
  * disbursements `number`: Disbursements
  * election_full **required** `boolean`
  * exempt_legal_accounting_disbursement `number`
  * federal_funds `number`
  * fundraising_disbursements `number`
  * individual_contributions `number`
  * individual_itemized_contributions `number`: Individual itemized contributions are from individuals whose aggregate contributions total over $200 per individual per year. Be aware, some filers choose to itemize donations $200 or less.
  * individual_unitemized_contributions `number`: Unitemized contributions are made individuals whose aggregate contributions total $200 or less per individual per year. Be aware, some filers choose to itemize donations $200 or less and in that case those donations will appear in the itemized total.
  * last_beginning_image_number `string`
  * last_cash_on_hand_end_period `number`
  * last_debts_owed_by_committee `number`
  * last_debts_owed_to_committee `number`
  * last_report_type_full `string`
  * last_report_year `integer`
  * loan_repayments_made `number`
  * loans_received `number`
  * loans_received_from_candidate `number`
  * net_contributions `number`
  * net_operating_expenditures `number`
  * offsets_to_fundraising_expenditures `number`
  * offsets_to_legal_accounting `number`
  * offsets_to_operating_expenditures `number`
  * operating_expenditures `number`
  * other_disbursements `number`
  * other_loans_received `number`
  * other_political_committee_contributions `number`
  * other_receipts `number`
  * political_party_committee_contributions `number`
  * receipts `number`
  * refunded_individual_contributions `number`
  * refunded_other_political_committee_contributions `number`
  * refunded_political_party_committee_contributions `number`
  * repayments_loans_made_by_candidate `number`
  * repayments_other_loans `number`
  * total_offsets_to_operating_expenditures `number`
  * transaction_coverage_date `string`
  * transfers_from_affiliated_committee `number`
  * transfers_to_other_authorized_committee `number`

### CandidateCommitteeTotalsPresidentialPage
* CandidateCommitteeTotalsPresidentialPage `object`
  * pagination [OffsetInfo](#offsetinfo)
  * results `array`
    * items [CandidateCommitteeTotalsPresidential](#candidatecommitteetotalspresidential)

### CandidateDetail
* CandidateDetail `object`
  * active_through `integer`: Last year a candidate was active. This field is specific to the candidate_id so if the same person runs for another office, there may be a different record for them.
  * address_city `string`: City of candidate's address, as reported on their Form 2.
  * address_state `string`: State of candidate's address, as reported on their Form 2.
  * address_street_1 `string`: Street of candidate's address, as reported on their Form 2.
  * address_street_2 `string`: Additional street information of candidate's address, as reported on their Form 2.
  * address_zip `string`: Zip code of candidate's address, as reported on their Form 2.
  * candidate_id `string`: 
  * candidate_inactive `boolean`: True indicates that a candidate is inactive.
  * candidate_status `string`: One-letter code explaining if the candidate is:
  * cycles `array`: 
    * items `integer`
  * district `string`: Two-digit US House distirict of the office the candidate is running for. Presidential, Senate and House at-large candidates will have District 00.
  * district_number `integer`: One-letter code explaining if the candidate is:
  * election_districts `array`: Two-digit US House distirict of the office the candidate is running for. Presidential, Senate and House at-large candidates will have District 00.
    * items `string`
  * election_years `array`: Years in which a candidate ran for office.
    * items `integer`
  * federal_funds_flag `boolean`
  * first_file_date `string`: The day the FEC received the candidate's first filing. This is a F2 candidate registration.
  * flags `string`
  * has_raised_funds `boolean`
  * incumbent_challenge `string`: One-letter code ('I', 'C', 'O') explaining if the candidate is an incumbent, a challenger, or if the seat is open.
  * incumbent_challenge_full `string`: Explains if the candidate is an incumbent, a challenger, or if the seat is open.
  * last_f2_date `string`: The day the FEC received the candidate's most recent Form 2
  * last_file_date `string`: The day the FEC received the candidate's most recent filing
  * load_date `string`: Date the information was loaded into the FEC systems. This can be affected by reseting systems and other factors, refer to receipt_date for the day that the FEC received the paper or electronic document. Keep in mind that paper filings take more time to process and there can be a lag between load_date and receipt_date. This field can be helpful to identify paper records that have been processed recently.
  * name `string`: Name of candidate running for office
  * office `string`: Federal office candidate runs for: H, S or P
  * office_full `string`: Federal office candidate runs for: House, Senate or presidential
  * party `string`: Three-letter code for the party affiliated with a candidate or committee. For example, DEM for Democratic Party and REP for Republican Party.
  * party_full `string`: Party affiliated with a candidate or committee
  * state `string`: US state or territory where a candidate runs for office

### CandidateDetailPage
* CandidateDetailPage `object`
  * pagination [OffsetInfo](#offsetinfo)
  * results `array`
    * items [CandidateDetail](#candidatedetail)

### CandidateFlags
* CandidateFlags `object`
  * candidate_id **required** `string`: 
  * federal_funds_flag `boolean`: A boolean the describes if a presidential candidate has accepted federal funds. The flag will be false for House and Senate candidates.
  * has_raised_funds `boolean`: A boolean that describes if a candidate's committee has ever received any receipts for their campaign for this particular office. (Candidates have separate candidate IDs for each office.)

### CandidateFlagsPage
* CandidateFlagsPage `object`
  * pagination [OffsetInfo](#offsetinfo)
  * results `array`
    * items [CandidateFlags](#candidateflags)

### CandidateHistory
* CandidateHistory `object`
  * active_through `integer`: Last year a candidate was active. This field is specific to the candidate_id so if the same person runs for another office, there may be a different record for them.
  * address_city `string`: City of candidate's address, as reported on their Form 2.
  * address_state `string`: State of candidate's address, as reported on their Form 2.
  * address_street_1 `string`: Street of candidate's address, as reported on their Form 2.
  * address_street_2 `string`: Additional street information of candidate's address, as reported on their Form 2.
  * address_zip `string`: Zip code of candidate's address, as reported on their Form 2.
  * candidate_election_year `integer`: The last year of the cycle for this election.
  * candidate_id **required** `string`: 
  * candidate_inactive `boolean`: 
  * candidate_status `string`: One-letter code explaining if the candidate is:
  * cycles `array`: 
    * items `integer`
  * district `string`: Two-digit US House distirict of the office the candidate is running for. Presidential, Senate and House at-large candidates will have District 00.
  * district_number `integer`: One-letter code explaining if the candidate is:
  * election_districts `array`: Two-digit US House distirict of the office the candidate is running for. Presidential, Senate and House at-large candidates will have District 00.
    * items `string`
  * election_years `array`: Years in which a candidate ran for office.
    * items `integer`
  * fec_cycles_in_election `array`: FEC cycles are included in candidate election years.
    * items `integer`
  * first_file_date `string`: The day the FEC received the candidate's first filing. This is a F2 candidate registration.
  * flags `string`
  * incumbent_challenge `string`: One-letter code ('I', 'C', 'O') explaining if the candidate is an incumbent, a challenger, or if the seat is open.
  * incumbent_challenge_full `string`: Explains if the candidate is an incumbent, a challenger, or if the seat is open.
  * last_f2_date `string`: The day the FEC received the candidate's most recent Form 2
  * last_file_date `string`: The day the FEC received the candidate's most recent filing
  * load_date `string`: Date the information was loaded into the FEC systems. This can be affected by reseting systems and other factors, refer to receipt_date for the day that the FEC received the paper or electronic document. Keep in mind that paper filings take more time to process and there can be a lag between load_date and receipt_date. This field can be helpful to identify paper records that have been processed recently.
  * name `string`: Name of candidate running for office
  * office `string`: Federal office candidate runs for: H, S or P
  * office_full `string`: Federal office candidate runs for: House, Senate or presidential
  * party `string`: Three-letter code for the party affiliated with a candidate or committee. For example, DEM for Democratic Party and REP for Republican Party.
  * party_full `string`: Party affiliated with a candidate or committee
  * rounded_election_years `array`: Rounded election years in which a candidate ran for office
    * items `integer`
  * state `string`: US state or territory where a candidate runs for office
  * two_year_period **required** `integer`: 

### CandidateHistoryPage
* CandidateHistoryPage `object`
  * pagination [OffsetInfo](#offsetinfo)
  * results `array`
    * items [CandidateHistory](#candidatehistory)

### CandidateHistoryTotal
* CandidateHistoryTotal `object`
  * active_through `integer`: Last year a candidate was active. This field is specific to the candidate_id so if the same person runs for another office, there may be a different record for them.
  * address_city `string`: City of candidate's address, as reported on their Form 2.
  * address_state `string`: State of candidate's address, as reported on their Form 2.
  * address_street_1 `string`: Street of candidate's address, as reported on their Form 2.
  * address_street_2 `string`: Additional street information of candidate's address, as reported on their Form 2.
  * address_zip `string`: Zip code of candidate's address, as reported on their Form 2.
  * candidate_election_year `integer`: The last year of the cycle for this election.
  * candidate_id **required** `string`: 
  * candidate_inactive `boolean`: 
  * candidate_status `string`: One-letter code explaining if the candidate is:
  * cash_on_hand_end_period `number`
  * coverage_end_date `string`: Ending date of the reporting period
  * coverage_start_date `string`: Beginning date of the reporting period
  * cycle **required** `integer`
  * cycles `array`: 
    * items `integer`
  * debts_owed_by_committee `number`
  * disbursements `number`
  * district `string`: Two-digit US House distirict of the office the candidate is running for. Presidential, Senate and House at-large candidates will have District 00.
  * district_number `integer`: One-letter code explaining if the candidate is:
  * election_districts `array`: Two-digit US House distirict of the office the candidate is running for. Presidential, Senate and House at-large candidates will have District 00.
    * items `string`
  * election_year `integer`
  * election_years `array`: Years in which a candidate ran for office.
    * items `integer`
  * fec_cycles_in_election `array`: FEC cycles are included in candidate election years.
    * items `integer`
  * federal_funds_flag `boolean`: A boolean the describes if a presidential candidate has accepted federal funds. The flag will be false for House and Senate candidates.
  * first_file_date `string`: The day the FEC received the candidate's first filing. This is a F2 candidate registration.
  * flags `string`
  * has_raised_funds `boolean`: A boolean that describes if a candidate's committee has ever received any receipts for their campaign for this particular office. (Candidates have separate candidate IDs for each office.)
  * incumbent_challenge `string`: One-letter code ('I', 'C', 'O') explaining if the candidate is an incumbent, a challenger, or if the seat is open.
  * incumbent_challenge_full `string`: Explains if the candidate is an incumbent, a challenger, or if the seat is open.
  * is_election **required** `boolean`
  * last_f2_date `string`: The day the FEC received the candidate's most recent Form 2
  * last_file_date `string`: The day the FEC received the candidate's most recent filing
  * load_date `string`: Date the information was loaded into the FEC systems. This can be affected by reseting systems and other factors, refer to receipt_date for the day that the FEC received the paper or electronic document. Keep in mind that paper filings take more time to process and there can be a lag between load_date and receipt_date. This field can be helpful to identify paper records that have been processed recently.
  * name `string`: Name of candidate running for office
  * office `string`: Federal office candidate runs for: H, S or P
  * office_full `string`: Federal office candidate runs for: House, Senate or presidential
  * party `string`: Three-letter code for the party affiliated with a candidate or committee. For example, DEM for Democratic Party and REP for Republican Party.
  * party_full `string`: Party affiliated with a candidate or committee
  * receipts `number`
  * rounded_election_years `array`: Rounded election years in which a candidate ran for office
    * items `integer`
  * state `string`: US state or territory where a candidate runs for office
  * two_year_period **required** `integer`: 

### CandidateHistoryTotalPage
* CandidateHistoryTotalPage `object`
  * pagination [OffsetInfo](#offsetinfo)
  * results `array`
    * items [CandidateHistoryTotal](#candidatehistorytotal)

### CandidatePage
* CandidatePage `object`
  * pagination [OffsetInfo](#offsetinfo)
  * results `array`
    * items [Candidate](#candidate)

### CandidateSearch
* CandidateSearch `object`
  * id `string`
  * name `string`
  * office_sought `string`

### CandidateSearchList
* CandidateSearchList `object`
  * results `array`
    * items [CandidateSearch](#candidatesearch)

### CandidateTotal
* CandidateTotal `object`
  * candidate_id **required** `string`
  * candidate_inactive `boolean`: 
  * cash_on_hand_end_period `number`
  * coverage_end_date `string`: Ending date of the reporting period
  * coverage_start_date `string`: Beginning date of the reporting period
  * cycle **required** `integer`
  * debts_owed_by_committee `number`
  * disbursements `number`
  * election_year `integer`
  * federal_funds_flag `boolean`: A boolean the describes if a presidential candidate has accepted federal funds. The flag will be false for House and Senate candidates.
  * has_raised_funds `boolean`: A boolean that describes if a candidate's committee has ever received any receipts for their campaign for this particular office. (Candidates have separate candidate IDs for each office.)
  * is_election **required** `boolean`
  * office `string`: Federal office candidate runs for: H, S or P
  * party `string`: Three-letter code for the party affiliated with a candidate or committee. For example, DEM for Democratic Party and REP for Republican Party.
  * receipts `number`

### CandidateTotalPage
* CandidateTotalPage `object`
  * pagination [OffsetInfo](#offsetinfo)
  * results `array`
    * items [CandidateTotal](#candidatetotal)

### Committee
* Committee `object`
  * affiliated_committee_name `string`: 
  * candidate_ids `array`: 
    * items `string`
  * committee_id **required** `string`: 
  * committee_type `string`: The one-letter type code of the organization:
  * committee_type_full `string`: The one-letter type code of the organization:
  * cycles `array`: 
    * items `integer`
  * designation `string`: The one-letter designation code of the organization:
  * designation_full `string`: The one-letter designation code of the organization:
  * filing_frequency `string`: The one-letter 
  * first_file_date `string`: The day the FEC received the committee's first filing. This is usually a Form 1 committee registration.
  * last_f1_date `string`: The day the FEC received the committee's most recent Form 1
  * last_file_date `string`: The day the FEC received the committee's most recent filing
  * name `string`: The name of the committee. If a committee changes its name,     the most recent name will be shown. Committee names are not unique. Use committee_id     for looking up records.
  * organization_type `string`: The one-letter code for the kind for organization:
  * organization_type_full `string`: The one-letter code for the kind for organization:
  * party `string`: Three-letter code for the party affiliated with a candidate or committee. For example, DEM for Democratic Party and REP for Republican Party.
  * party_full `string`: Three-letter code for the party affiliated with a candidate or committee. For example, DEM for Democratic Party and REP for Republican Party.
  * sponsor_candidate_ids `array`: 
    * items `string`
  * state `string`: 
  * treasurer_name `string`: Name of the Committee's treasurer. If multiple treasurers for the committee, the most recent treasurer will be shown.

### CommitteeDetail
* CommitteeDetail `object`
  * affiliated_committee_name `string`: 
  * candidate_ids `array`: 
    * items `string`
  * city `string`: 
  * committee_id **required** `string`: 
  * committee_type `string`: The one-letter type code of the organization:
  * committee_type_full `string`: The one-letter type code of the organization:
  * custodian_city `string`: 
  * custodian_name_1 `string`: 
  * custodian_name_2 `string`: 
  * custodian_name_full `string`: 
  * custodian_name_middle `string`: 
  * custodian_name_prefix `string`: 
  * custodian_name_suffix `string`: 
  * custodian_name_title `string`: 
  * custodian_phone `string`: 
  * custodian_state `string`: 
  * custodian_street_1 `string`: 
  * custodian_street_2 `string`: 
  * custodian_zip `string`: 
  * cycles `array`: 
    * items `integer`
  * designation `string`: The one-letter designation code of the organization:
  * designation_full `string`: The one-letter designation code of the organization:
  * email `string`: 
  * fax `string`: 
  * filing_frequency `string`: The one-letter 
  * first_file_date `string`: The day the FEC received the committee's first filing. This is usually a Form 1 committee registration.
  * form_type `string`: The form where the underlying data comes from, for example, Form 1 would appear as F1:
  * last_file_date `string`: The day the FEC received the committee's most recent filing
  * leadership_pac `string`: 
  * lobbyist_registrant_pac `string`: 
  * name `string`: The name of the committee. If a committee changes its name,     the most recent name will be shown. Committee names are not unique. Use committee_id     for looking up records.
  * organization_type `string`: The one-letter code for the kind for organization:
  * organization_type_full `string`: The one-letter code for the kind for organization:
  * party `string`: Three-letter code for the party affiliated with a candidate or committee. For example, DEM for Democratic Party and REP for Republican Party.
  * party_full `string`: Three-letter code for the party affiliated with a candidate or committee. For example, DEM for Democratic Party and REP for Republican Party.
  * party_type `string`: 
  * party_type_full `string`: 
  * sponsor_candidate_ids `array`: 
    * items `string`
  * state `string`: 
  * state_full `string`: 
  * street_1 `string`: 
  * street_2 `string`: 
  * treasurer_city `string`: 
  * treasurer_name `string`: Name of the Committee's treasurer. If multiple treasurers for the committee, the most recent treasurer will be shown.
  * treasurer_name_1 `string`: 
  * treasurer_name_2 `string`: 
  * treasurer_name_middle `string`: 
  * treasurer_name_prefix `string`: 
  * treasurer_name_suffix `string`: 
  * treasurer_name_title `string`: 
  * treasurer_phone `string`: 
  * treasurer_state `string`: 
  * treasurer_street_1 `string`: 
  * treasurer_street_2 `string`: 
  * treasurer_zip `string`: 
  * website `string`: 
  * zip `string`: 

### CommitteeDetailPage
* CommitteeDetailPage `object`
  * pagination [OffsetInfo](#offsetinfo)
  * results `array`
    * items [CommitteeDetail](#committeedetail)

### CommitteeHistory
* CommitteeHistory `object`
  * affiliated_committee_name `string`: 
  * candidate_ids `array`: 
    * items `string`
  * city `string`: 
  * committee_id **required** `string`: 
  * committee_type `string`: The one-letter type code of the organization:
  * committee_type_full `string`: The one-letter type code of the organization:
  * convert_to_pac_flag `boolean`: True indicates that a candidate committee had been converted to a PAC
  * cycle **required** `integer`: 
  * cycles `array`: 
    * items `integer`
  * cycles_has_activity `array`: 
    * items `integer`
  * cycles_has_financial `array`: 
    * items `integer`
  * designation `string`: The one-letter designation code of the organization:
  * designation_full `string`: The one-letter designation code of the organization:
  * filing_frequency `string`: The one-letter 
  * former_candidate_election_year `integer`: Year a candidate runs for federal office.
  * former_candidate_id `string`: 
  * former_candidate_name `string`: Name of candidate running for office
  * former_committee_name `string`: The name of the committee. If a committee changes its name,     the most recent name will be shown. Committee names are not unique. Use committee_id     for looking up records.
  * is_active `boolean`: 
  * last_cycle_has_activity `integer`: 
  * last_cycle_has_financial `integer`: 
  * name `string`: The name of the committee. If a committee changes its name,     the most recent name will be shown. Committee names are not unique. Use committee_id     for looking up records.
  * organization_type `string`: The one-letter code for the kind for organization:
  * organization_type_full `string`: The one-letter code for the kind for organization:
  * party `string`: Three-letter code for the party affiliated with a candidate or committee. For example, DEM for Democratic Party and REP for Republican Party.
  * party_full `string`: Three-letter code for the party affiliated with a candidate or committee. For example, DEM for Democratic Party and REP for Republican Party.
  * sponsor_candidate_ids `array`: 
    * items `string`
  * state `string`: 
  * state_full `string`: 
  * street_1 `string`: 
  * street_2 `string`: 
  * treasurer_name `string`: Name of the Committee's treasurer. If multiple treasurers for the committee, the most recent treasurer will be shown.
  * zip `string`: 

### CommitteeHistoryPage
* CommitteeHistoryPage `object`
  * pagination [OffsetInfo](#offsetinfo)
  * results `array`
    * items [CommitteeHistory](#committeehistory)

### CommitteePage
* CommitteePage `object`
  * pagination [OffsetInfo](#offsetinfo)
  * results `array`
    * items [Committee](#committee)

### CommitteeReports
* CommitteeReports `object`
  * aggregate_amount_personal_contributions_general `number`
  * aggregate_contributions_personal_funds_primary `number`
  * all_loans_received_period `number`
  * all_loans_received_ytd `number`
  * all_other_loans_period `number`
  * all_other_loans_ytd `number`
  * allocated_federal_election_levin_share_period `number`
  * amendment_chain `array`: 
    * items `number`
  * amendment_indicator `string`
  * amendment_indicator_full `string`
  * beginning_image_number `string`
  * calendar_ytd `integer`
  * candidate_contribution_period `number`
  * candidate_contribution_ytd `number`
  * cash_on_hand_beginning_calendar_ytd `number`
  * cash_on_hand_beginning_period `number`: Balance for the committee at the start of the two-year period
  * cash_on_hand_close_ytd `number`
  * cash_on_hand_end_period `number`: Ending cash balance on the most recent filing
  * committee_id `string`: 
  * committee_name `string`: The name of the committee. If a committee changes its name,     the most recent name will be shown. Committee names are not unique. Use committee_id     for looking up records.
  * committee_type `string`
  * coordinated_expenditures_by_party_committee_period `number`
  * coordinated_expenditures_by_party_committee_ytd `number`
  * coverage_end_date `string`: Ending date of the reporting period
  * coverage_start_date `string`: Beginning date of the reporting period
  * csv_url `string`
  * cycle `integer`: 
  * debts_owed_by_committee `number`: Debts owed by the committee
  * debts_owed_to_committee `number`: Debts owed to the committee
  * document_description `string`
  * end_image_number `string`
  * exempt_legal_accounting_disbursement_period `number`
  * exempt_legal_accounting_disbursement_ytd `number`
  * expenditure_subject_to_limits `number`
  * fec_file_id `string`
  * fec_url `string`
  * fed_candidate_committee_contribution_refunds_ytd `number`
  * fed_candidate_committee_contributions_period `number`
  * fed_candidate_committee_contributions_ytd `number`
  * fed_candidate_contribution_refunds_period `number`
  * federal_funds_period `number`
  * federal_funds_ytd `number`
  * file_number `integer`
  * fundraising_disbursements_period `number`
  * fundraising_disbursements_ytd `number`
  * gross_receipt_authorized_committee_general `number`
  * gross_receipt_authorized_committee_primary `number`
  * gross_receipt_minus_personal_contribution_general `number`
  * gross_receipt_minus_personal_contributions_primary `number`
  * html_url `string`: 
  * independent_contributions_period `number`
  * independent_expenditures_period `number`
  * independent_expenditures_ytd `number`
  * individual_itemized_contributions_period `number`: Individual itemized contributions are from individuals whose aggregate contributions total over $200 per individual per year. Be aware, some filers choose to itemize donations $200 or less. total for the reporting period
  * individual_itemized_contributions_ytd `number`: Individual itemized contributions are from individuals whose aggregate contributions total over $200 per individual per year. Be aware, some filers choose to itemize donations $200 or less. total for the year to date
  * individual_unitemized_contributions_period `number`: Unitemized contributions are made individuals whose aggregate contributions total $200 or less per individual per year. Be aware, some filers choose to itemize donations $200 or less and in that case those donations will appear in the itemized total. total for the reporting period
  * individual_unitemized_contributions_ytd `number`: Unitemized contributions are made individuals whose aggregate contributions total $200 or less per individual per year. Be aware, some filers choose to itemize donations $200 or less and in that case those donations will appear in the itemized total. total for the year to date
  * is_amended `boolean`: 
  * items_on_hand_liquidated `number`
  * loan_repayments_candidate_loans_period `number`
  * loan_repayments_candidate_loans_ytd `number`
  * loan_repayments_made_period `number`
  * loan_repayments_made_ytd `number`
  * loan_repayments_other_loans_period `number`
  * loan_repayments_other_loans_ytd `number`
  * loan_repayments_received_period `number`
  * loan_repayments_received_ytd `number`
  * loans_made_by_candidate_period `number`
  * loans_made_by_candidate_ytd `number`
  * loans_made_period `number`
  * loans_made_ytd `number`
  * loans_received_from_candidate_period `number`
  * loans_received_from_candidate_ytd `number`
  * means_filed `string`: The method used to file with the FEC, either electronic or on paper.
  * most_recent `boolean`: 
  * most_recent_file_number `number`
  * net_contributions_cycle_to_date `number`
  * net_contributions_period `number`
  * net_contributions_ytd `number`
  * net_operating_expenditures_cycle_to_date `number`
  * net_operating_expenditures_period `number`
  * net_operating_expenditures_ytd `number`
  * non_allocated_fed_election_activity_period `number`
  * non_allocated_fed_election_activity_ytd `number`
  * nonfed_share_allocated_disbursements_period `number`
  * offsets_to_fundraising_expenditures_period `number`
  * offsets_to_fundraising_expenditures_ytd `number`
  * offsets_to_legal_accounting_period `number`
  * offsets_to_legal_accounting_ytd `number`
  * offsets_to_operating_expenditures_period `number`: Offsets to operating expenditures total for the reporting period
  * offsets_to_operating_expenditures_ytd `number`: Offsets to operating expenditures total for the year to date
  * operating_expenditures_period `number`
  * operating_expenditures_ytd `number`
  * other_disbursements_period `number`: Other disbursements total for the reporting period
  * other_disbursements_ytd `number`: Other disbursements total for the year to date
  * other_fed_operating_expenditures_period `number`
  * other_fed_operating_expenditures_ytd `number`
  * other_fed_receipts_period `number`
  * other_fed_receipts_ytd `number`
  * other_loans_received_period `number`
  * other_loans_received_ytd `number`
  * other_political_committee_contributions_period `number`: Other committees contributions total for the reporting period
  * other_political_committee_contributions_ytd `number`: Other committees contributions total for the year to date
  * other_receipts_period `number`
  * other_receipts_ytd `number`
  * pdf_url `string`
  * political_party_committee_contributions_period `number`: Party committees contributions total for the reporting period
  * political_party_committee_contributions_ytd `number`: Party committees contributions total for the year to date
  * previous_file_number `number`
  * receipt_date `string`: Date the FEC received the electronic or paper record
  * refunded_individual_contributions_period `number`: Individual refunds total for the reporting period
  * refunded_individual_contributions_ytd `number`: Individual refunds total for the year to date
  * refunded_other_political_committee_contributions_period `number`: Other committee refunds total for the reporting period
  * refunded_other_political_committee_contributions_ytd `number`: Other committee refunds total for the year to date
  * refunded_political_party_committee_contributions_period `number`: Political party refunds total for the reporting period
  * refunded_political_party_committee_contributions_ytd `number`: Political party refunds total for the year to date
  * refunds_total_contributions_col_total_ytd `number`
  * repayments_loans_made_by_candidate_period `number`
  * repayments_loans_made_candidate_ytd `number`
  * repayments_other_loans_period `number`
  * repayments_other_loans_ytd `number`
  * report_form `string`
  * report_type `string`: Name of report where the underlying data comes from:
  * report_type_full `string`: Name of report where the underlying data comes from:
  * report_year `integer`: 
  * shared_fed_activity_nonfed_ytd `number`
  * shared_fed_activity_period `number`
  * shared_fed_activity_ytd `number`
  * shared_fed_operating_expenditures_period `number`
  * shared_fed_operating_expenditures_ytd `number`
  * shared_nonfed_operating_expenditures_period `number`
  * shared_nonfed_operating_expenditures_ytd `number`
  * subtotal_period `number`
  * subtotal_summary_page_period `number`
  * subtotal_summary_period `number`
  * subtotal_summary_ytd `number`
  * total_contribution_refunds_col_total_period `number`
  * total_contribution_refunds_period `number`: Total contribution refunds total for the reporting period
  * total_contribution_refunds_ytd `number`: Total contribution refunds total for the year to date
  * total_contributions_column_total_period `number`
  * total_contributions_period `number`: Contribution total for the reporting period
  * total_contributions_ytd `number`: Contribution total for the year to date
  * total_disbursements_period `number`: Disbursements total for the reporting period
  * total_disbursements_ytd `number`: Disbursements total for the year to date
  * total_fed_disbursements_period `number`
  * total_fed_disbursements_ytd `number`
  * total_fed_election_activity_period `number`
  * total_fed_election_activity_ytd `number`
  * total_fed_operating_expenditures_period `number`
  * total_fed_operating_expenditures_ytd `number`
  * total_fed_receipts_period `number`
  * total_fed_receipts_ytd `number`
  * total_individual_contributions_period `number`: Individual contributions total for the reporting period
  * total_individual_contributions_ytd `number`: Individual contributions total for the year to date
  * total_loan_repayments_made_period `number`
  * total_loan_repayments_made_ytd `number`
  * total_loans_received_period `number`
  * total_loans_received_ytd `number`
  * total_nonfed_transfers_period `number`
  * total_nonfed_transfers_ytd `number`
  * total_offsets_to_operating_expenditures_period `number`
  * total_offsets_to_operating_expenditures_ytd `number`
  * total_operating_expenditures_period `number`
  * total_operating_expenditures_ytd `number`
  * total_period `number`
  * total_receipts_period `number`: Anything of value (money, goods, services or property) received by a political committee total for the reporting period
  * total_receipts_ytd `number`: Anything of value (money, goods, services or property) received by a political committee total for the year to date
  * total_ytd `number`
  * transfers_from_affiliated_committee_period `number`
  * transfers_from_affiliated_committee_ytd `number`
  * transfers_from_affiliated_party_period `number`
  * transfers_from_affiliated_party_ytd `number`
  * transfers_from_nonfed_account_period `number`
  * transfers_from_nonfed_account_ytd `number`
  * transfers_from_nonfed_levin_period `number`
  * transfers_from_nonfed_levin_ytd `number`
  * transfers_from_other_authorized_committee_period `number`
  * transfers_from_other_authorized_committee_ytd `number`
  * transfers_to_affiliated_committee_period `number`
  * transfers_to_affilitated_committees_ytd `number`
  * transfers_to_other_authorized_committee_period `number`
  * transfers_to_other_authorized_committee_ytd `number`

### CommitteeReportsHouseSenate
* CommitteeReportsHouseSenate `object`
  * aggregate_amount_personal_contributions_general `number`
  * aggregate_contributions_personal_funds_primary `number`
  * all_other_loans_period `number`
  * all_other_loans_ytd `number`
  * amendment_chain `array`: 
    * items `number`
  * amendment_indicator `string`
  * amendment_indicator_full `string`
  * beginning_image_number `string`
  * candidate_contribution_period `number`
  * candidate_contribution_ytd `number`
  * cash_on_hand_beginning_period `number`: Balance for the committee at the start of the two-year period
  * cash_on_hand_end_period `number`: Ending cash balance on the most recent filing
  * committee_id `string`: 
  * committee_name `string`: The name of the committee. If a committee changes its name,     the most recent name will be shown. Committee names are not unique. Use committee_id     for looking up records.
  * committee_type `string`
  * coverage_end_date `string`: Ending date of the reporting period
  * coverage_start_date `string`: Beginning date of the reporting period
  * csv_url `string`
  * cycle `integer`: 
  * debts_owed_by_committee `number`: Debts owed by the committee
  * debts_owed_to_committee `number`: Debts owed to the committee
  * document_description `string`
  * end_image_number `string`
  * fec_file_id `string`
  * fec_url `string`
  * file_number `integer`
  * gross_receipt_authorized_committee_general `number`
  * gross_receipt_authorized_committee_primary `number`
  * gross_receipt_minus_personal_contribution_general `number`
  * gross_receipt_minus_personal_contributions_primary `number`
  * html_url `string`: 
  * individual_itemized_contributions_period `number`: Individual itemized contributions are from individuals whose aggregate contributions total over $200 per individual per year. Be aware, some filers choose to itemize donations $200 or less. total for the reporting period
  * individual_itemized_contributions_ytd `number`: Individual itemized contributions are from individuals whose aggregate contributions total over $200 per individual per year. Be aware, some filers choose to itemize donations $200 or less. total for the year to date
  * individual_unitemized_contributions_period `number`: Unitemized contributions are made individuals whose aggregate contributions total $200 or less per individual per year. Be aware, some filers choose to itemize donations $200 or less and in that case those donations will appear in the itemized total. total for the reporting period
  * individual_unitemized_contributions_ytd `number`: Unitemized contributions are made individuals whose aggregate contributions total $200 or less per individual per year. Be aware, some filers choose to itemize donations $200 or less and in that case those donations will appear in the itemized total. total for the year to date
  * is_amended `boolean`: 
  * loan_repayments_candidate_loans_period `number`
  * loan_repayments_candidate_loans_ytd `number`
  * loan_repayments_other_loans_period `number`
  * loan_repayments_other_loans_ytd `number`
  * loans_made_by_candidate_period `number`
  * loans_made_by_candidate_ytd `number`
  * means_filed `string`: The method used to file with the FEC, either electronic or on paper.
  * most_recent `boolean`: 
  * most_recent_file_number `number`
  * net_contributions_period `number`
  * net_contributions_ytd `number`
  * net_operating_expenditures_period `number`
  * net_operating_expenditures_ytd `number`
  * offsets_to_operating_expenditures_period `number`: Offsets to operating expenditures total for the reporting period
  * offsets_to_operating_expenditures_ytd `number`: Offsets to operating expenditures total for the year to date
  * operating_expenditures_period `number`
  * operating_expenditures_ytd `number`
  * other_disbursements_period `number`: Other disbursements total for the reporting period
  * other_disbursements_ytd `number`: Other disbursements total for the year to date
  * other_political_committee_contributions_period `number`: Other committees contributions total for the reporting period
  * other_political_committee_contributions_ytd `number`: Other committees contributions total for the year to date
  * other_receipts_period `number`
  * other_receipts_ytd `number`
  * pdf_url `string`
  * political_party_committee_contributions_period `number`: Party committees contributions total for the reporting period
  * political_party_committee_contributions_ytd `number`: Party committees contributions total for the year to date
  * previous_file_number `number`
  * receipt_date `string`: Date the FEC received the electronic or paper record
  * refunded_individual_contributions_period `number`: Individual refunds total for the reporting period
  * refunded_individual_contributions_ytd `number`: Individual refunds total for the year to date
  * refunded_other_political_committee_contributions_period `number`: Other committee refunds total for the reporting period
  * refunded_other_political_committee_contributions_ytd `number`: Other committee refunds total for the year to date
  * refunded_political_party_committee_contributions_period `number`: Political party refunds total for the reporting period
  * refunded_political_party_committee_contributions_ytd `number`: Political party refunds total for the year to date
  * refunds_total_contributions_col_total_ytd `number`
  * report_form `string`
  * report_type `string`: Name of report where the underlying data comes from:
  * report_type_full `string`: Name of report where the underlying data comes from:
  * report_year `integer`: 
  * subtotal_period `number`
  * total_contribution_refunds_col_total_period `number`
  * total_contribution_refunds_period `number`: Total contribution refunds total for the reporting period
  * total_contribution_refunds_ytd `number`: Total contribution refunds total for the year to date
  * total_contributions_column_total_period `number`
  * total_contributions_period `number`: Contribution total for the reporting period
  * total_contributions_ytd `number`: Contribution total for the year to date
  * total_disbursements_period `number`: Disbursements total for the reporting period
  * total_disbursements_ytd `number`: Disbursements total for the year to date
  * total_individual_contributions_period `number`: Individual contributions total for the reporting period
  * total_individual_contributions_ytd `number`: Individual contributions total for the year to date
  * total_loan_repayments_made_period `number`
  * total_loan_repayments_made_ytd `number`
  * total_loans_received_period `number`
  * total_loans_received_ytd `number`
  * total_offsets_to_operating_expenditures_period `number`
  * total_offsets_to_operating_expenditures_ytd `number`
  * total_operating_expenditures_period `number`
  * total_operating_expenditures_ytd `number`
  * total_receipts_period `number`: Anything of value (money, goods, services or property) received by a political committee total for the reporting period
  * total_receipts_ytd `number`: Anything of value (money, goods, services or property) received by a political committee total for the year to date
  * transfers_from_other_authorized_committee_period `number`
  * transfers_from_other_authorized_committee_ytd `number`
  * transfers_to_other_authorized_committee_period `number`
  * transfers_to_other_authorized_committee_ytd `number`

### CommitteeReportsHouseSenatePage
* CommitteeReportsHouseSenatePage `object`
  * pagination [OffsetInfo](#offsetinfo)
  * results `array`
    * items [CommitteeReportsHouseSenate](#committeereportshousesenate)

### CommitteeReportsIEOnly
* CommitteeReportsIEOnly `object`
  * beginning_image_number `string`
  * committee_id `string`
  * committee_type `string`
  * coverage_end_date `string`
  * coverage_start_date `string`
  * csv_url `string`
  * cycle `integer`
  * document_description `string`
  * end_image_number `string`
  * fec_file_id `string`
  * fec_url `string`
  * independent_contributions_period `number`
  * independent_expenditures_period `number`
  * is_amended `boolean`: 
  * means_filed `string`: The method used to file with the FEC, either electronic or on paper.
  * pdf_url `string`
  * receipt_date `string`: Date the FEC received the electronic or paper record
  * report_form `string`
  * report_type `string`
  * report_type_full `string`
  * report_year `integer`

### CommitteeReportsIEOnlyPage
* CommitteeReportsIEOnlyPage `object`
  * pagination [OffsetInfo](#offsetinfo)
  * results `array`
    * items [CommitteeReportsIEOnly](#committeereportsieonly)

### CommitteeReportsPacParty
* CommitteeReportsPacParty `object`
  * all_loans_received_period `number`
  * all_loans_received_ytd `number`
  * allocated_federal_election_levin_share_period `number`
  * amendment_chain `array`: 
    * items `number`
  * amendment_indicator `string`
  * amendment_indicator_full `string`
  * beginning_image_number `string`
  * calendar_ytd `integer`
  * cash_on_hand_beginning_calendar_ytd `number`
  * cash_on_hand_beginning_period `number`: Balance for the committee at the start of the two-year period
  * cash_on_hand_close_ytd `number`
  * cash_on_hand_end_period `number`: Ending cash balance on the most recent filing
  * committee_id `string`: 
  * committee_name `string`: The name of the committee. If a committee changes its name,     the most recent name will be shown. Committee names are not unique. Use committee_id     for looking up records.
  * committee_type `string`
  * coordinated_expenditures_by_party_committee_period `number`
  * coordinated_expenditures_by_party_committee_ytd `number`
  * coverage_end_date `string`: Ending date of the reporting period
  * coverage_start_date `string`: Beginning date of the reporting period
  * csv_url `string`
  * cycle `integer`: 
  * debts_owed_by_committee `number`: Debts owed by the committee
  * debts_owed_to_committee `number`: Debts owed to the committee
  * document_description `string`
  * end_image_number `string`
  * fec_file_id `string`
  * fec_url `string`
  * fed_candidate_committee_contribution_refunds_ytd `number`
  * fed_candidate_committee_contributions_period `number`
  * fed_candidate_committee_contributions_ytd `number`
  * fed_candidate_contribution_refunds_period `number`
  * file_number `integer`
  * html_url `string`: 
  * independent_expenditures_period `number`
  * independent_expenditures_ytd `number`
  * individual_itemized_contributions_period `number`: Individual itemized contributions are from individuals whose aggregate contributions total over $200 per individual per year. Be aware, some filers choose to itemize donations $200 or less. total for the reporting period
  * individual_itemized_contributions_ytd `number`: Individual itemized contributions are from individuals whose aggregate contributions total over $200 per individual per year. Be aware, some filers choose to itemize donations $200 or less. total for the year to date
  * individual_unitemized_contributions_period `number`: Unitemized contributions are made individuals whose aggregate contributions total $200 or less per individual per year. Be aware, some filers choose to itemize donations $200 or less and in that case those donations will appear in the itemized total. total for the reporting period
  * individual_unitemized_contributions_ytd `number`: Unitemized contributions are made individuals whose aggregate contributions total $200 or less per individual per year. Be aware, some filers choose to itemize donations $200 or less and in that case those donations will appear in the itemized total. total for the year to date
  * is_amended `boolean`: 
  * loan_repayments_made_period `number`
  * loan_repayments_made_ytd `number`
  * loan_repayments_received_period `number`
  * loan_repayments_received_ytd `number`
  * loans_made_period `number`
  * loans_made_ytd `number`
  * means_filed `string`: The method used to file with the FEC, either electronic or on paper.
  * most_recent `boolean`: 
  * most_recent_file_number `number`
  * net_contributions_period `number`
  * net_contributions_ytd `number`
  * net_operating_expenditures_period `number`
  * net_operating_expenditures_ytd `number`
  * non_allocated_fed_election_activity_period `number`
  * non_allocated_fed_election_activity_ytd `number`
  * nonfed_share_allocated_disbursements_period `number`
  * offsets_to_operating_expenditures_period `number`: Offsets to operating expenditures total for the reporting period
  * offsets_to_operating_expenditures_ytd `number`: Offsets to operating expenditures total for the year to date
  * other_disbursements_period `number`: Other disbursements total for the reporting period
  * other_disbursements_ytd `number`: Other disbursements total for the year to date
  * other_fed_operating_expenditures_period `number`
  * other_fed_operating_expenditures_ytd `number`
  * other_fed_receipts_period `number`
  * other_fed_receipts_ytd `number`
  * other_political_committee_contributions_period `number`: Other committees contributions total for the reporting period
  * other_political_committee_contributions_ytd `number`: Other committees contributions total for the year to date
  * pdf_url `string`
  * political_party_committee_contributions_period `number`: Party committees contributions total for the reporting period
  * political_party_committee_contributions_ytd `number`: Party committees contributions total for the year to date
  * previous_file_number `number`
  * receipt_date `string`: Date the FEC received the electronic or paper record
  * refunded_individual_contributions_period `number`: Individual refunds total for the reporting period
  * refunded_individual_contributions_ytd `number`: Individual refunds total for the year to date
  * refunded_other_political_committee_contributions_period `number`: Other committee refunds total for the reporting period
  * refunded_other_political_committee_contributions_ytd `number`: Other committee refunds total for the year to date
  * refunded_political_party_committee_contributions_period `number`: Political party refunds total for the reporting period
  * refunded_political_party_committee_contributions_ytd `number`: Political party refunds total for the year to date
  * report_form `string`
  * report_type `string`: Name of report where the underlying data comes from:
  * report_type_full `string`: Name of report where the underlying data comes from:
  * report_year `integer`: 
  * shared_fed_activity_nonfed_ytd `number`
  * shared_fed_activity_period `number`
  * shared_fed_activity_ytd `number`
  * shared_fed_operating_expenditures_period `number`
  * shared_fed_operating_expenditures_ytd `number`
  * shared_nonfed_operating_expenditures_period `number`
  * shared_nonfed_operating_expenditures_ytd `number`
  * subtotal_summary_page_period `number`
  * subtotal_summary_ytd `number`
  * total_contribution_refunds_period `number`: Total contribution refunds total for the reporting period
  * total_contribution_refunds_ytd `number`: Total contribution refunds total for the year to date
  * total_contributions_period `number`: Contribution total for the reporting period
  * total_contributions_ytd `number`: Contribution total for the year to date
  * total_disbursements_period `number`: Disbursements total for the reporting period
  * total_disbursements_ytd `number`: Disbursements total for the year to date
  * total_fed_disbursements_period `number`
  * total_fed_disbursements_ytd `number`
  * total_fed_election_activity_period `number`
  * total_fed_election_activity_ytd `number`
  * total_fed_operating_expenditures_period `number`
  * total_fed_operating_expenditures_ytd `number`
  * total_fed_receipts_period `number`
  * total_fed_receipts_ytd `number`
  * total_individual_contributions_period `number`: Individual contributions total for the reporting period
  * total_individual_contributions_ytd `number`: Individual contributions total for the year to date
  * total_nonfed_transfers_period `number`
  * total_nonfed_transfers_ytd `number`
  * total_operating_expenditures_period `number`
  * total_operating_expenditures_ytd `number`
  * total_receipts_period `number`: Anything of value (money, goods, services or property) received by a political committee total for the reporting period
  * total_receipts_ytd `number`: Anything of value (money, goods, services or property) received by a political committee total for the year to date
  * transfers_from_affiliated_party_period `number`
  * transfers_from_affiliated_party_ytd `number`
  * transfers_from_nonfed_account_period `number`
  * transfers_from_nonfed_account_ytd `number`
  * transfers_from_nonfed_levin_period `number`
  * transfers_from_nonfed_levin_ytd `number`
  * transfers_to_affiliated_committee_period `number`
  * transfers_to_affilitated_committees_ytd `number`

### CommitteeReportsPacPartyPage
* CommitteeReportsPacPartyPage `object`
  * pagination [OffsetInfo](#offsetinfo)
  * results `array`
    * items [CommitteeReportsPacParty](#committeereportspacparty)

### CommitteeReportsPage
* CommitteeReportsPage `object`
  * pagination [OffsetInfo](#offsetinfo)
  * results `array`
    * items [CommitteeReports](#committeereports)

### CommitteeReportsPresidential
* CommitteeReportsPresidential `object`
  * amendment_chain `array`: 
    * items `number`
  * amendment_indicator `string`
  * amendment_indicator_full `string`
  * beginning_image_number `string`
  * candidate_contribution_period `number`
  * candidate_contribution_ytd `number`
  * cash_on_hand_beginning_period `number`: Balance for the committee at the start of the two-year period
  * cash_on_hand_end_period `number`: Ending cash balance on the most recent filing
  * committee_id `string`: 
  * committee_name `string`: The name of the committee. If a committee changes its name,     the most recent name will be shown. Committee names are not unique. Use committee_id     for looking up records.
  * committee_type `string`
  * coverage_end_date `string`: Ending date of the reporting period
  * coverage_start_date `string`: Beginning date of the reporting period
  * csv_url `string`
  * cycle `integer`: 
  * debts_owed_by_committee `number`: Debts owed by the committee
  * debts_owed_to_committee `number`: Debts owed to the committee
  * document_description `string`
  * end_image_number `string`
  * exempt_legal_accounting_disbursement_period `number`
  * exempt_legal_accounting_disbursement_ytd `number`
  * expenditure_subject_to_limits `number`
  * fec_file_id `string`
  * fec_url `string`
  * federal_funds_period `number`
  * federal_funds_ytd `number`
  * file_number `integer`
  * fundraising_disbursements_period `number`
  * fundraising_disbursements_ytd `number`
  * html_url `string`: 
  * individual_itemized_contributions_period `number`: Individual itemized contributions are from individuals whose aggregate contributions total over $200 per individual per year. Be aware, some filers choose to itemize donations $200 or less. total for the reporting period
  * individual_itemized_contributions_ytd `number`: Individual itemized contributions are from individuals whose aggregate contributions total over $200 per individual per year. Be aware, some filers choose to itemize donations $200 or less. total for the year to date
  * individual_unitemized_contributions_period `number`: Unitemized contributions are made individuals whose aggregate contributions total $200 or less per individual per year. Be aware, some filers choose to itemize donations $200 or less and in that case those donations will appear in the itemized total. total for the reporting period
  * individual_unitemized_contributions_ytd `number`: Unitemized contributions are made individuals whose aggregate contributions total $200 or less per individual per year. Be aware, some filers choose to itemize donations $200 or less and in that case those donations will appear in the itemized total. total for the year to date
  * is_amended `boolean`: 
  * items_on_hand_liquidated `number`
  * loans_received_from_candidate_period `number`
  * loans_received_from_candidate_ytd `number`
  * means_filed `string`: The method used to file with the FEC, either electronic or on paper.
  * most_recent `boolean`: 
  * most_recent_file_number `number`
  * net_contributions_cycle_to_date `number`
  * net_operating_expenditures_cycle_to_date `number`
  * offsets_to_fundraising_expenditures_period `number`
  * offsets_to_fundraising_expenditures_ytd `number`
  * offsets_to_legal_accounting_period `number`
  * offsets_to_legal_accounting_ytd `number`
  * offsets_to_operating_expenditures_period `number`: Offsets to operating expenditures total for the reporting period
  * offsets_to_operating_expenditures_ytd `number`: Offsets to operating expenditures total for the year to date
  * operating_expenditures_period `number`
  * operating_expenditures_ytd `number`
  * other_disbursements_period `number`: Other disbursements total for the reporting period
  * other_disbursements_ytd `number`: Other disbursements total for the year to date
  * other_loans_received_period `number`
  * other_loans_received_ytd `number`
  * other_political_committee_contributions_period `number`: Other committees contributions total for the reporting period
  * other_political_committee_contributions_ytd `number`: Other committees contributions total for the year to date
  * other_receipts_period `number`
  * other_receipts_ytd `number`
  * pdf_url `string`
  * political_party_committee_contributions_period `number`: Party committees contributions total for the reporting period
  * political_party_committee_contributions_ytd `number`: Party committees contributions total for the year to date
  * previous_file_number `number`
  * receipt_date `string`: Date the FEC received the electronic or paper record
  * refunded_individual_contributions_period `number`: Individual refunds total for the reporting period
  * refunded_individual_contributions_ytd `number`: Individual refunds total for the year to date
  * refunded_other_political_committee_contributions_period `number`: Other committee refunds total for the reporting period
  * refunded_other_political_committee_contributions_ytd `number`: Other committee refunds total for the year to date
  * refunded_political_party_committee_contributions_period `number`: Political party refunds total for the reporting period
  * refunded_political_party_committee_contributions_ytd `number`: Political party refunds total for the year to date
  * repayments_loans_made_by_candidate_period `number`
  * repayments_loans_made_candidate_ytd `number`
  * repayments_other_loans_period `number`
  * repayments_other_loans_ytd `number`
  * report_form `string`
  * report_type `string`: Name of report where the underlying data comes from:
  * report_type_full `string`: Name of report where the underlying data comes from:
  * report_year `integer`: 
  * subtotal_summary_period `number`
  * total_contribution_refunds_period `number`: Total contribution refunds total for the reporting period
  * total_contribution_refunds_ytd `number`: Total contribution refunds total for the year to date
  * total_contributions_period `number`: Contribution total for the reporting period
  * total_contributions_ytd `number`: Contribution total for the year to date
  * total_disbursements_period `number`: Disbursements total for the reporting period
  * total_disbursements_ytd `number`: Disbursements total for the year to date
  * total_individual_contributions_period `number`: Individual contributions total for the reporting period
  * total_individual_contributions_ytd `number`: Individual contributions total for the year to date
  * total_loan_repayments_made_period `number`
  * total_loan_repayments_made_ytd `number`
  * total_loans_received_period `number`
  * total_loans_received_ytd `number`
  * total_offsets_to_operating_expenditures_period `number`
  * total_offsets_to_operating_expenditures_ytd `number`
  * total_period `number`
  * total_receipts_period `number`: Anything of value (money, goods, services or property) received by a political committee total for the reporting period
  * total_receipts_ytd `number`: Anything of value (money, goods, services or property) received by a political committee total for the year to date
  * total_ytd `number`
  * transfers_from_affiliated_committee_period `number`
  * transfers_from_affiliated_committee_ytd `number`
  * transfers_to_other_authorized_committee_period `number`
  * transfers_to_other_authorized_committee_ytd `number`

### CommitteeReportsPresidentialPage
* CommitteeReportsPresidentialPage `object`
  * pagination [OffsetInfo](#offsetinfo)
  * results `array`
    * items [CommitteeReportsPresidential](#committeereportspresidential)

### CommitteeSearch
* CommitteeSearch `object`
  * id `string`
  * is_active `boolean`
  * name `string`

### CommitteeSearchList
* CommitteeSearchList `object`
  * results `array`
    * items [CommitteeSearch](#committeesearch)

### CommitteeTotals
* CommitteeTotals `object`
  * all_loans_received `number`
  * all_other_loans `number`
  * allocated_federal_election_levin_share `number`
  * candidate_contribution `number`
  * cash_on_hand_beginning_period `number`
  * committee_designation `string`: The one-letter designation code of the organization:
  * committee_designation_full `string`: The one-letter designation code of the organization:
  * committee_id `string`: 
  * committee_name `string`: The name of the committee. If a committee changes its name,     the most recent name will be shown. Committee names are not unique. Use committee_id     for looking up records.
  * committee_type `string`: The one-letter type code of the organization:
  * committee_type_full `string`: The one-letter type code of the organization:
  * contribution_refunds `number`
  * contributions `number`: Contribution
  * convention_exp `number`
  * coordinated_expenditures_by_party_committee `number`
  * coverage_end_date `string`
  * coverage_start_date `string`
  * cycle **required** `integer`: 
  * disbursements `number`: Disbursements
  * exempt_legal_accounting_disbursement `number`
  * exp_prior_years_subject_limits `number`
  * exp_subject_limits `number`
  * fed_candidate_committee_contributions `number`
  * fed_candidate_contribution_refunds `number`
  * fed_disbursements `number`
  * fed_election_activity `number`
  * fed_operating_expenditures `number`
  * fed_receipts `number`
  * federal_funds `number`
  * fundraising_disbursements `number`
  * independent_expenditures `number`
  * individual_contributions `number`
  * individual_itemized_contributions `number`: Individual itemized contributions are from individuals whose aggregate contributions total over $200 per individual per year. Be aware, some filers choose to itemize donations $200 or less.
  * individual_unitemized_contributions `number`: Unitemized contributions are made individuals whose aggregate contributions total $200 or less per individual per year. Be aware, some filers choose to itemize donations $200 or less and in that case those donations will appear in the itemized total.
  * itemized_convention_exp `number`
  * itemized_other_disb `number`
  * itemized_other_income `number`
  * itemized_other_refunds `number`
  * itemized_refunds_relating_convention_exp `number`
  * last_beginning_image_number `string`
  * last_cash_on_hand_end_period `number`
  * last_debts_owed_by_committee `number`
  * last_debts_owed_to_committee `number`
  * last_report_type_full `string`
  * last_report_year `integer`
  * loan_repayments `number`
  * loan_repayments_candidate_loans `number`
  * loan_repayments_made `number`
  * loan_repayments_other_loans `number`
  * loan_repayments_received `number`
  * loans `number`
  * loans_and_loan_repayments_made `number`
  * loans_and_loan_repayments_received `number`
  * loans_made `number`
  * loans_made_by_candidate `number`
  * loans_received `number`
  * loans_received_from_candidate `number`
  * net_contributions `number`
  * net_operating_expenditures `number`
  * non_allocated_fed_election_activity `number`
  * offsets_to_fundraising_expenditures `number`
  * offsets_to_legal_accounting `number`
  * offsets_to_operating_expenditures `number`
  * operating_expenditures `number`
  * other_disbursements `number`
  * other_fed_operating_expenditures `number`
  * other_fed_receipts `number`
  * other_loans_received `number`
  * other_political_committee_contributions `number`
  * other_receipts `number`
  * other_refunds `number`
  * party_full `string`: Party affiliated with a candidate or committee
  * pdf_url `string`
  * political_party_committee_contributions `number`
  * receipts `number`
  * refunded_individual_contributions `number`
  * refunded_other_political_committee_contributions `number`
  * refunded_political_party_committee_contributions `number`
  * refunds_relating_convention_exp `number`
  * repayments_loans_made_by_candidate `number`
  * repayments_other_loans `number`
  * report_form `string`
  * shared_fed_activity `number`
  * shared_fed_activity_nonfed `number`
  * shared_fed_operating_expenditures `number`
  * shared_nonfed_operating_expenditures `number`
  * total_exp_subject_limits `number`
  * total_independent_contributions `number`
  * total_independent_expenditures `number`
  * total_offsets_to_operating_expenditures `number`
  * total_transfers `number`
  * transaction_coverage_date `string`
  * transfers_from_affiliated_committee `number`
  * transfers_from_affiliated_party `number`
  * transfers_from_nonfed_account `number`
  * transfers_from_nonfed_levin `number`
  * transfers_from_other_authorized_committee `number`
  * transfers_to_affiliated_committee `number`
  * transfers_to_other_authorized_committee `number`
  * unitemized_convention_exp `number`
  * unitemized_other_disb `number`
  * unitemized_other_income `number`
  * unitemized_other_refunds `number`
  * unitemized_refunds_relating_convention_exp `number`

### CommitteeTotalsHouseSenate
* CommitteeTotalsHouseSenate `object`
  * all_other_loans `number`
  * candidate_contribution `number`
  * cash_on_hand_beginning_period `number`
  * committee_designation `string`: The one-letter designation code of the organization:
  * committee_designation_full `string`: The one-letter designation code of the organization:
  * committee_id `string`: 
  * committee_name `string`: The name of the committee. If a committee changes its name,     the most recent name will be shown. Committee names are not unique. Use committee_id     for looking up records.
  * committee_type `string`: The one-letter type code of the organization:
  * committee_type_full `string`: The one-letter type code of the organization:
  * contribution_refunds `number`
  * contributions `number`: Contribution
  * coverage_end_date `string`
  * coverage_start_date `string`
  * cycle **required** `integer`: 
  * disbursements `number`: Disbursements
  * individual_contributions `number`
  * individual_itemized_contributions `number`: Individual itemized contributions are from individuals whose aggregate contributions total over $200 per individual per year. Be aware, some filers choose to itemize donations $200 or less.
  * individual_unitemized_contributions `number`: Unitemized contributions are made individuals whose aggregate contributions total $200 or less per individual per year. Be aware, some filers choose to itemize donations $200 or less and in that case those donations will appear in the itemized total.
  * last_beginning_image_number `string`
  * last_cash_on_hand_end_period `number`
  * last_debts_owed_by_committee `number`
  * last_debts_owed_to_committee `number`
  * last_report_type_full `string`
  * last_report_year `integer`
  * loan_repayments `number`
  * loan_repayments_candidate_loans `number`
  * loan_repayments_other_loans `number`
  * loans `number`
  * loans_made_by_candidate `number`
  * net_contributions `number`
  * net_operating_expenditures `number`
  * offsets_to_operating_expenditures `number`
  * operating_expenditures `number`
  * other_disbursements `number`
  * other_political_committee_contributions `number`
  * other_receipts `number`
  * party_full `string`: Party affiliated with a candidate or committee
  * pdf_url `string`
  * political_party_committee_contributions `number`
  * receipts `number`
  * refunded_individual_contributions `number`
  * refunded_other_political_committee_contributions `number`
  * refunded_political_party_committee_contributions `number`
  * report_form `string`
  * transaction_coverage_date `string`
  * transfers_from_other_authorized_committee `number`
  * transfers_to_other_authorized_committee `number`

### CommitteeTotalsHouseSenatePage
* CommitteeTotalsHouseSenatePage `object`
  * pagination [OffsetInfo](#offsetinfo)
  * results `array`
    * items [CommitteeTotalsHouseSenate](#committeetotalshousesenate)

### CommitteeTotalsIEOnly
* CommitteeTotalsIEOnly `object`
  * committee_id `string`: 
  * coverage_end_date `string`: Ending date of the reporting period
  * coverage_start_date `string`: Beginning date of the reporting period
  * cycle `integer`: 
  * last_beginning_image_number `string`
  * last_cash_on_hand_end_period `number`
  * pdf_url `string`
  * report_form `string`
  * total_independent_contributions `number`
  * total_independent_expenditures `number`
  * transaction_coverage_date `string`

### CommitteeTotalsIEOnlyPage
* CommitteeTotalsIEOnlyPage `object`
  * pagination [OffsetInfo](#offsetinfo)
  * results `array`
    * items [CommitteeTotalsIEOnly](#committeetotalsieonly)

### CommitteeTotalsPacParty
* CommitteeTotalsPacParty `object`
  * all_loans_received `number`
  * allocated_federal_election_levin_share `number`
  * cash_on_hand_beginning_period `number`
  * committee_designation `string`: The one-letter designation code of the organization:
  * committee_designation_full `string`: The one-letter designation code of the organization:
  * committee_id `string`: 
  * committee_name `string`: The name of the committee. If a committee changes its name,     the most recent name will be shown. Committee names are not unique. Use committee_id     for looking up records.
  * committee_type `string`: The one-letter type code of the organization:
  * committee_type_full `string`: The one-letter type code of the organization:
  * contribution_refunds `number`
  * contributions `number`: Contribution
  * convention_exp `number`
  * coordinated_expenditures_by_party_committee `number`
  * coverage_end_date `string`
  * coverage_start_date `string`
  * cycle **required** `integer`: 
  * disbursements `number`: Disbursements
  * exp_prior_years_subject_limits `number`
  * exp_subject_limits `number`
  * fed_candidate_committee_contributions `number`
  * fed_candidate_contribution_refunds `number`
  * fed_disbursements `number`
  * fed_election_activity `number`
  * fed_operating_expenditures `number`
  * fed_receipts `number`
  * federal_funds `number`
  * independent_expenditures `number`
  * individual_contributions `number`
  * individual_itemized_contributions `number`: Individual itemized contributions are from individuals whose aggregate contributions total over $200 per individual per year. Be aware, some filers choose to itemize donations $200 or less.
  * individual_unitemized_contributions `number`: Unitemized contributions are made individuals whose aggregate contributions total $200 or less per individual per year. Be aware, some filers choose to itemize donations $200 or less and in that case those donations will appear in the itemized total.
  * itemized_convention_exp `number`
  * itemized_other_disb `number`
  * itemized_other_income `number`
  * itemized_other_refunds `number`
  * itemized_refunds_relating_convention_exp `number`
  * last_beginning_image_number `string`
  * last_cash_on_hand_end_period `number`
  * last_debts_owed_by_committee `number`
  * last_debts_owed_to_committee `number`
  * last_report_type_full `string`
  * last_report_year `integer`
  * loan_repayments_made `number`
  * loan_repayments_received `number`
  * loans_and_loan_repayments_made `number`
  * loans_and_loan_repayments_received `number`
  * loans_made `number`
  * net_contributions `number`
  * net_operating_expenditures `number`
  * non_allocated_fed_election_activity `number`
  * offsets_to_operating_expenditures `number`
  * operating_expenditures `number`
  * other_disbursements `number`
  * other_fed_operating_expenditures `number`
  * other_fed_receipts `number`
  * other_political_committee_contributions `number`
  * other_refunds `number`
  * party_full `string`: Party affiliated with a candidate or committee
  * pdf_url `string`
  * political_party_committee_contributions `number`
  * receipts `number`
  * refunded_individual_contributions `number`
  * refunded_other_political_committee_contributions `number`
  * refunded_political_party_committee_contributions `number`
  * refunds_relating_convention_exp `number`
  * report_form `string`
  * shared_fed_activity `number`
  * shared_fed_activity_nonfed `number`
  * shared_fed_operating_expenditures `number`
  * shared_nonfed_operating_expenditures `number`
  * total_exp_subject_limits `number`
  * total_transfers `number`
  * transaction_coverage_date `string`
  * transfers_from_affiliated_party `number`
  * transfers_from_nonfed_account `number`
  * transfers_from_nonfed_levin `number`
  * transfers_to_affiliated_committee `number`
  * unitemized_convention_exp `number`
  * unitemized_other_disb `number`
  * unitemized_other_income `number`
  * unitemized_other_refunds `number`
  * unitemized_refunds_relating_convention_exp `number`

### CommitteeTotalsPacPartyPage
* CommitteeTotalsPacPartyPage `object`
  * pagination [OffsetInfo](#offsetinfo)
  * results `array`
    * items [CommitteeTotalsPacParty](#committeetotalspacparty)

### CommitteeTotalsPage
* CommitteeTotalsPage `object`
  * pagination [OffsetInfo](#offsetinfo)
  * results `array`
    * items [CommitteeTotals](#committeetotals)

### CommitteeTotalsPerCycle
* CommitteeTotalsPerCycle `object`
  * candidate_contribution `number`
  * cash_on_hand_beginning_period `number`
  * committee_designation `string`: The one-letter designation code of the organization:
  * committee_designation_full `string`: The one-letter designation code of the organization:
  * committee_id `string`: 
  * committee_name `string`: The name of the committee. If a committee changes its name,     the most recent name will be shown. Committee names are not unique. Use committee_id     for looking up records.
  * committee_type `string`: The one-letter type code of the organization:
  * committee_type_full `string`: The one-letter type code of the organization:
  * contribution_refunds `number`
  * contributions `number`: Contribution
  * coverage_end_date `string`
  * coverage_start_date `string`
  * cycle **required** `integer`: 
  * disbursements `number`: Disbursements
  * exempt_legal_accounting_disbursement `number`
  * federal_funds `number`
  * fundraising_disbursements `number`
  * individual_contributions `number`
  * individual_itemized_contributions `number`: Individual itemized contributions are from individuals whose aggregate contributions total over $200 per individual per year. Be aware, some filers choose to itemize donations $200 or less.
  * individual_unitemized_contributions `number`: Unitemized contributions are made individuals whose aggregate contributions total $200 or less per individual per year. Be aware, some filers choose to itemize donations $200 or less and in that case those donations will appear in the itemized total.
  * last_beginning_image_number `string`
  * last_cash_on_hand_end_period `number`
  * last_debts_owed_by_committee `number`
  * last_debts_owed_to_committee `number`
  * last_report_type_full `string`
  * last_report_year `integer`
  * loan_repayments_made `number`
  * loans_received `number`
  * loans_received_from_candidate `number`
  * net_contributions `number`
  * net_operating_expenditures `number`
  * offsets_to_fundraising_expenditures `number`
  * offsets_to_legal_accounting `number`
  * offsets_to_operating_expenditures `number`
  * operating_expenditures `number`
  * other_disbursements `number`
  * other_loans_received `number`
  * other_political_committee_contributions `number`
  * other_receipts `number`
  * party_full `string`: Party affiliated with a candidate or committee
  * pdf_url `string`
  * political_party_committee_contributions `number`
  * receipts `number`
  * refunded_individual_contributions `number`
  * refunded_other_political_committee_contributions `number`
  * refunded_political_party_committee_contributions `number`
  * repayments_loans_made_by_candidate `number`
  * repayments_other_loans `number`
  * report_form `string`
  * total_offsets_to_operating_expenditures `number`
  * transaction_coverage_date `string`
  * transfers_from_affiliated_committee `number`
  * transfers_to_other_authorized_committee `number`

### CommitteeTotalsPerCyclePage
* CommitteeTotalsPerCyclePage `object`
  * pagination [OffsetInfo](#offsetinfo)
  * results `array`
    * items [CommitteeTotalsPerCycle](#committeetotalspercycle)

### CommitteeTotalsPresidential
* CommitteeTotalsPresidential `object`
  * candidate_contribution `number`
  * cash_on_hand_beginning_period `number`
  * committee_designation `string`: The one-letter designation code of the organization:
  * committee_designation_full `string`: The one-letter designation code of the organization:
  * committee_id `string`: 
  * committee_name `string`: The name of the committee. If a committee changes its name,     the most recent name will be shown. Committee names are not unique. Use committee_id     for looking up records.
  * committee_type `string`: The one-letter type code of the organization:
  * committee_type_full `string`: The one-letter type code of the organization:
  * contribution_refunds `number`
  * contributions `number`: Contribution
  * coverage_end_date `string`
  * coverage_start_date `string`
  * cycle **required** `integer`: 
  * disbursements `number`: Disbursements
  * exempt_legal_accounting_disbursement `number`
  * federal_funds `number`
  * fundraising_disbursements `number`
  * individual_contributions `number`
  * individual_itemized_contributions `number`: Individual itemized contributions are from individuals whose aggregate contributions total over $200 per individual per year. Be aware, some filers choose to itemize donations $200 or less.
  * individual_unitemized_contributions `number`: Unitemized contributions are made individuals whose aggregate contributions total $200 or less per individual per year. Be aware, some filers choose to itemize donations $200 or less and in that case those donations will appear in the itemized total.
  * last_beginning_image_number `string`
  * last_cash_on_hand_end_period `number`
  * last_debts_owed_by_committee `number`
  * last_debts_owed_to_committee `number`
  * last_report_type_full `string`
  * last_report_year `integer`
  * loan_repayments_made `number`
  * loans_received `number`
  * loans_received_from_candidate `number`
  * net_contributions `number`
  * net_operating_expenditures `number`
  * offsets_to_fundraising_expenditures `number`
  * offsets_to_legal_accounting `number`
  * offsets_to_operating_expenditures `number`
  * operating_expenditures `number`
  * other_disbursements `number`
  * other_loans_received `number`
  * other_political_committee_contributions `number`
  * other_receipts `number`
  * party_full `string`: Party affiliated with a candidate or committee
  * pdf_url `string`
  * political_party_committee_contributions `number`
  * receipts `number`
  * refunded_individual_contributions `number`
  * refunded_other_political_committee_contributions `number`
  * refunded_political_party_committee_contributions `number`
  * repayments_loans_made_by_candidate `number`
  * repayments_other_loans `number`
  * report_form `string`
  * total_offsets_to_operating_expenditures `number`
  * transaction_coverage_date `string`
  * transfers_from_affiliated_committee `number`
  * transfers_to_other_authorized_committee `number`

### CommitteeTotalsPresidentialPage
* CommitteeTotalsPresidentialPage `object`
  * pagination [OffsetInfo](#offsetinfo)
  * results `array`
    * items [CommitteeTotalsPresidential](#committeetotalspresidential)

### CommunicationCost
* CommunicationCost `object`
  * action_code `string`
  * action_code_full `string`
  * candidate_first_name `string`
  * candidate_id `string`
  * candidate_last_name `string`
  * candidate_middle_name `string`
  * candidate_name `string`
  * candidate_office `string`
  * candidate_office_district `string`
  * candidate_office_full `string`
  * candidate_office_state `string`
  * committee_id `string`
  * committee_name `string`
  * communication_class `string`
  * communication_type `string`
  * communication_type_full `string`
  * cycle `integer`
  * file_number `integer`
  * form_type_code `string`
  * image_number `string`
  * original_sub_id `integer`
  * pdf_url `string`
  * primary_general_indicator `string`
  * primary_general_indicator_description `string`
  * purpose `string`
  * report_type `string`
  * report_year `integer`
  * schedule_type `string`
  * schedule_type_full `string`
  * state_full `string`
  * sub_id `integer`
  * support_oppose_indicator `string`
  * tran_id `string`
  * transaction_amount `number`
  * transaction_date `string`
  * transaction_type `string`

### CommunicationCostByCandidate
* CommunicationCostByCandidate `object`
  * candidate `string`
  * candidate_id `string`
  * candidate_name `string`
  * committee `string`
  * committee_id `string`
  * committee_name `string`
  * count `integer`
  * cycle `integer`
  * support_oppose_indicator **required** `string`: Explains if the money was spent in order to support or oppose a candidate or candidates. (Coded S or O for support or oppose.) This indicator applies to independent expenditures and communication costs.
  * total `number`

### CommunicationCostByCandidatePage
* CommunicationCostByCandidatePage `object`
  * pagination [OffsetInfo](#offsetinfo)
  * results `array`
    * items [CommunicationCostByCandidate](#communicationcostbycandidate)

### CommunicationCostOffsetPage
* CommunicationCostOffsetPage `object`
  * pagination [OffsetInfo](#offsetinfo)
  * results `array`
    * items [CommunicationCost](#communicationcost)

### CommunicationCostPage
* CommunicationCostPage `object`
  * pagination [SeekInfo](#seekinfo)
  * results `array`
    * items [CommunicationCost](#communicationcost)

### ECTotalsByCandidate
* ECTotalsByCandidate `object`
  * candidate_id `string`
  * cycle `integer`
  * total `number`

### ECTotalsByCandidatePage
* ECTotalsByCandidatePage `object`
  * pagination [OffsetInfo](#offsetinfo)
  * results `array`
    * items [ECTotalsByCandidate](#ectotalsbycandidate)

### EFilings
* EFilings `object`
  * amended_by `integer`
  * amendment_chain `array`
    * items `integer`
  * amendment_number `integer`: 
  * amends_file `integer`: 
  * beginning_image_number `string`
  * committee_id `string`: 
  * committee_name `string`: The name of the committee. If a committee changes its name,     the most recent name will be shown. Committee names are not unique. Use committee_id     for looking up records.
  * coverage_end_date `string`: Ending date of the reporting period
  * coverage_start_date `string`: Beginning date of the reporting period
  * csv_url `string`
  * document_description `string`
  * ending_image_number `string`
  * fec_file_id `string`
  * fec_url `string`
  * file_number `integer`: Filing ID number
  * filed_date `string`: Timestamp of electronic or paper record that FEC received
  * form_type `string`: The form where the underlying data comes from, for example, Form 1 would appear as F1:
  * html_url `string`
  * is_amended `boolean`
  * load_timestamp `string`: Date the information was loaded into the FEC systems. This can be affected by reseting systems and other factors, refer to receipt_date for the day that the FEC received the paper or electronic document. Keep in mind that paper filings take more time to process and there can be a lag between load_date and receipt_date. This field can be helpful to identify paper records that have been processed recently.
  * most_recent `boolean`
  * most_recent_filing `integer`
  * pdf_url `string`
  * receipt_date `string`: Date the FEC received the electronic or paper record

### EFilingsPage
* EFilingsPage `object`
  * pagination [OffsetInfo](#offsetinfo)
  * results `array`
    * items [EFilings](#efilings)

### EfilingsAmendments
* EfilingsAmendments `object`
  * amendment_chain `array`
    * items `number`
  * depth `number`
  * file_number `integer`: Filing ID number
  * last `number`
  * longest_chain `array`
    * items `number`
  * most_recent_filing `number`
  * previous_file_number `number`

### EfilingsAmendmentsPage
* EfilingsAmendmentsPage `object`
  * pagination [OffsetInfo](#offsetinfo)
  * results `array`
    * items [EfilingsAmendments](#efilingsamendments)

### Election
* Election `object`
  * candidate_election_year `integer`
  * candidate_id `string`
  * candidate_name `string`
  * candidate_pcc_id `string`
  * candidate_pcc_name `string`
  * cash_on_hand_end_period `number`
  * committee_ids `array`
    * items `string`
  * coverage_end_date `string`
  * incumbent_challenge_full `string`
  * party_full `string`
  * total_disbursements `number`
  * total_receipts `number`

### ElectionDate
* ElectionDate `object`
  * active_election `boolean`
  * create_date `string`: Date the record was created
  * election_date `string`: Date of election
  * election_district `integer`: Two-digit US House distirict of the office the candidate is running for. Presidential, Senate and House at-large candidates will have District 00.
  * election_notes `string`
  * election_party `string`: Three-letter code for the party affiliated with a candidate or committee. For example, DEM for Democratic Party and REP for Republican Party.
  * election_state `string`: US state or territory where a candidate runs for office
  * election_type_full `string`
  * election_type_id `string`: Election type 
  * election_year `integer`: Year of election
  * office_sought `string`: Federal office candidate runs for: H, S or P
  * primary_general_date `string`
  * update_date `string`: Date the record was updated

### ElectionDatePage
* ElectionDatePage `object`
  * pagination [OffsetInfo](#offsetinfo)
  * results `array`
    * items [ElectionDate](#electiondate)

### ElectionPage
* ElectionPage `object`
  * pagination [OffsetInfo](#offsetinfo)
  * results `array`
    * items [Election](#election)

### ElectionSearch
* ElectionSearch `object`
  * candidate_status `string`
  * cycle `integer`
  * district `string`
  * incumbent_id `string`
  * incumbent_name `string`
  * office `string`
  * state `string`

### ElectionSearchPage
* ElectionSearchPage `object`
  * pagination [OffsetInfo](#offsetinfo)
  * results `array`
    * items [ElectionSearch](#electionsearch)

### ElectionSummary
* ElectionSummary `object`
  * count `integer`
  * disbursements `number`
  * independent_expenditures `number`
  * receipts `number`

### Electioneering
* Electioneering `object`
  * amendment_indicator `string`
  * beginning_image_number `string`
  * calculated_candidate_share `number`: 
  * candidate_district `string`
  * candidate_id `string`
  * candidate_name `string`
  * candidate_office `string`
  * candidate_state `string`
  * committee_id `string`
  * committee_name `string`
  * communication_date `string`: 
  * disbursement_amount `number`
  * disbursement_date `string`: 
  * election_type `string`
  * file_number `integer`
  * link_id `integer`
  * number_of_candidates `number`
  * payee_name `string`: 
  * payee_state `string`
  * pdf_url `string`
  * public_distribution_date `string`: 
  * purpose_description `string`
  * receipt_date `string`
  * report_year `integer`
  * sb_image_num `string`
  * sb_link_id `string`
  * sub_id `integer`: 

### ElectioneeringByCandidate
* ElectioneeringByCandidate `object`
  * candidate `string`
  * candidate_id `string`
  * candidate_name `string`
  * committee `string`
  * committee_id `string`
  * committee_name `string`
  * count `integer`
  * cycle `integer`
  * total `number`

### ElectioneeringByCandidatePage
* ElectioneeringByCandidatePage `object`
  * pagination [OffsetInfo](#offsetinfo)
  * results `array`
    * items [ElectioneeringByCandidate](#electioneeringbycandidate)

### ElectioneeringPage
* ElectioneeringPage `object`
  * pagination [SeekInfo](#seekinfo)
  * results `array`
    * items [Electioneering](#electioneering)

### ElectionsList
* ElectionsList `object`
  * cycle `integer`
  * district `string`: Two-digit US House distirict of the office the candidate is running for. Presidential, Senate and House at-large candidates will have District 00.
  * office `string`: Federal office candidate runs for: H, S or P
  * state `string`: US state or territory

### ElectionsListPage
* ElectionsListPage `object`
  * pagination [OffsetInfo](#offsetinfo)
  * results `array`
    * items [ElectionsList](#electionslist)

### EntityReceiptDisbursementTotals
* EntityReceiptDisbursementTotals `object`
  * cumulative_candidate_disbursements `number`: Cumulative candidate disbursements in a two year period, adjusted to avoid double counting.
  * cumulative_candidate_receipts `number`: Cumulative candidate receipts in a two year period, adjusted to avoid double counting.
  * cumulative_pac_disbursements `number`: Cumulative PAC disbursements in a two year period, adjusted to avoid double counting.
  * cumulative_pac_receipts `number`: Cumulative PAC recipts in a two year period, adjusted to avoid double counting.
  * cumulative_party_disbursements `number`: Cumulative party disbursements in a two year period, adjusted to avoid double counting.
  * cumulative_party_receipts `number`: Cumulative party receipts in a two year period, adjusted to avoid double counting.
  * cycle `integer`: 
  * end_date `string`

### EntityReceiptDisbursementTotalsPage
* EntityReceiptDisbursementTotalsPage `object`
  * pagination [OffsetInfo](#offsetinfo)
  * results `array`
    * items [EntityReceiptDisbursementTotals](#entityreceiptdisbursementtotals)

### Filings
* Filings `object`
  * amendment_chain `array`
    * items `number`
  * amendment_indicator `string`: 
  * amendment_version `integer`
  * beginning_image_number `string`
  * candidate_id `string`: 
  * candidate_name `string`: Name of candidate running for office
  * cash_on_hand_beginning_period `number`: Balance for the committee at the start of the two-year period
  * cash_on_hand_end_period `number`: Ending cash balance on the most recent filing
  * committee_id `string`: 
  * committee_name `string`: The name of the committee. If a committee changes its name,     the most recent name will be shown. Committee names are not unique. Use committee_id     for looking up records.
  * committee_type `string`: The one-letter type code of the organization:
  * coverage_end_date `string`: Ending date of the reporting period
  * coverage_start_date `string`: Beginning date of the reporting period
  * csv_url `string`
  * cycle `integer`: 
  * debts_owed_by_committee `number`: Debts owed by the committee
  * debts_owed_to_committee `number`: Debts owed to the committee
  * document_description `string`
  * document_type `string`: 
  * document_type_full `string`: 
  * election_year `integer`: Year of election
  * ending_image_number `string`
  * fec_file_id `string`
  * fec_url `string`
  * file_number `integer`
  * form_category `string`: 
  * form_type `string`: The form where the underlying data comes from, for example, Form 1 would appear as F1:
  * house_personal_funds `number`
  * html_url `string`: 
  * is_amended `boolean`
  * means_filed `string`: The method used to file with the FEC, either electronic or on paper.
  * most_recent `boolean`
  * most_recent_file_number `integer`
  * net_donations `number`
  * office `string`: Federal office candidate runs for: H, S or P
  * opposition_personal_funds `number`
  * pages `integer`: 
  * party `string`: Three-letter code for the party affiliated with a candidate or committee. For example, DEM for Democratic Party and REP for Republican Party.
  * pdf_url `string`
  * previous_file_number `integer`
  * primary_general_indicator `string`
  * receipt_date `string`: Date the FEC received the electronic or paper record
  * report_type `string`: Name of report where the underlying data comes from:
  * report_type_full `string`: Name of report where the underlying data comes from:
  * report_year `integer`: 
  * request_type `string`
  * senate_personal_funds `number`
  * state `string`: US state or territory where a candidate runs for office
  * sub_id `string`
  * total_communication_cost `number`
  * total_disbursements `number`
  * total_independent_expenditures `number`
  * total_individual_contributions `number`
  * total_receipts `number`
  * treasurer_name `string`: Name of the Committee's treasurer. If multiple treasurers for the committee, the most recent treasurer will be shown.
  * update_date `string`

### FilingsPage
* FilingsPage `object`
  * pagination [OffsetInfo](#offsetinfo)
  * results `array`
    * items [Filings](#filings)

### IETotalsByCandidate
* IETotalsByCandidate `object`
  * candidate_id `string`
  * cycle `integer`
  * support_oppose_indicator `string`
  * total `number`

### IETotalsByCandidatePage
* IETotalsByCandidatePage `object`
  * pagination [OffsetInfo](#offsetinfo)
  * results `array`
    * items [IETotalsByCandidate](#ietotalsbycandidate)

### OffsetInfo
* OffsetInfo `object`
  * count `integer`
  * page `integer`
  * pages `integer`
  * per_page `integer`

### OperationsLog
* OperationsLog `object`
  * amendment_indicator `string`: Amendent types:
  * beginning_image_number `string`: 
  * candidate_committee_id `string`: 
  * coverage_end_date `string`: Ending date of the reporting period
  * coverage_start_date `string`: Beginning date of the reporting period
  * ending_image_number `string`: Image number is an unique identifier for each page the electronic or paper report. The last image number corresponds to the image number for the last page of the document.
  * form_type `string`: The form where the underlying data comes from, for example, Form 1 would appear as F1:
  * receipt_date `string`: Date the FEC received the electronic or paper record
  * report_type `string`: Name of report where the underlying data comes from:
  * report_year `integer`: 
  * status_num `integer`: 
  * sub_id `integer`: 
  * summary_data_complete_date `string`: 
  * summary_data_verification_date `string`: 
  * transaction_data_complete_date `string`: 

### OperationsLogPage
* OperationsLogPage `object`
  * pagination [OffsetInfo](#offsetinfo)
  * results `array`
    * items [OperationsLog](#operationslog)

### PresidentialByCandidate
* PresidentialByCandidate `object`
  * candidate_id `string`: 
  * candidate_last_name `string`: 
  * candidate_party_affiliation `string`: Three-letter code for the party affiliated with a candidate or committee. For example, DEM for Democratic Party and REP for Republican Party.
  * contributor_state `string`: State of contributor
  * election_year `integer`: Year of election
  * net_receipts `number`: Net contributions
  * rounded_net_receipts `number`: 

### PresidentialByCandidatePage
* PresidentialByCandidatePage `object`
  * pagination [OffsetInfo](#offsetinfo)
  * results `array`
    * items [PresidentialByCandidate](#presidentialbycandidate)

### PresidentialBySize
* PresidentialBySize `object`
  * candidate_id `string`: 
  * contribution_receipt_amount `number`: 
  * election_year `integer`: Year of election
  * size `integer`: 
  * size_range_id `integer`: 

### PresidentialBySizePage
* PresidentialBySizePage `object`
  * pagination [OffsetInfo](#offsetinfo)
  * results `array`
    * items [PresidentialBySize](#presidentialbysize)

### PresidentialByState
* PresidentialByState `object`
  * candidate_id `string`: 
  * contribution_receipt_amount `number`: 
  * contribution_state `string`: State of contributor
  * election_year `integer`: Year of election

### PresidentialByStatePage
* PresidentialByStatePage `object`
  * pagination [OffsetInfo](#offsetinfo)
  * results `array`
    * items [PresidentialByState](#presidentialbystate)

### PresidentialCoverage
* PresidentialCoverage `object`
  * candidate_id `string`: 
  * coverage_end_date `string`: Ending date of the reporting period
  * election_year `integer`: Year of election

### PresidentialCoveragePage
* PresidentialCoveragePage `object`
  * pagination [OffsetInfo](#offsetinfo)
  * results `array`
    * items [PresidentialCoverage](#presidentialcoverage)

### PresidentialSummary
* PresidentialSummary `object`
  * candidate_contributions_less_repayments `number`: 
  * candidate_id `string`: 
  * candidate_last_name `string`: 
  * candidate_name `string`: Name of candidate running for office
  * candidate_party_affiliation `string`: Three-letter code for the party affiliated with a candidate or committee. For example, DEM for Democratic Party and REP for Republican Party.
  * cash_on_hand_end `number`: Ending cash balance on the most recent filing
  * committee_designation `string`: The one-letter designation code of the organization:
  * committee_id `string`: 
  * committee_name `string`: The name of the committee. If a committee changes its name,     the most recent name will be shown. Committee names are not unique. Use committee_id     for looking up records.
  * committee_type `string`: The one-letter type code of the organization:
  * debts_owed_by_committee `number`: Debts owed by the committee
  * disbursements_less_offsets `number`: 
  * election_year `integer`: Year of election
  * exempt_legal_accounting_disbursement `number`: 
  * federal_funds `number`: Federal funds: Public funding of presidential elections means that qualified presidential candidates                 receive federal government funds to pay for the valid expenses of their political campaigns                 in both the primary and general elections.
  * fundraising_disbursements `number`: 
  * individual_contributions_less_refunds `number`: 
  * net_receipts `number`: 
  * offsets_to_operating_expenditures `number`: Offsets to operating expenditures
  * operating_expenditures `number`: Total operating expenditures
  * other_disbursements `number`: Other disbursements
  * pac_contributions_less_refunds `number`: 
  * party_contributions_less_refunds `number`: 
  * repayments_loans_made_by_candidate `number`: 
  * repayments_other_loans `number`: 
  * rounded_net_receipts `number`: 
  * total_contribution_refunds `number`: 
  * total_loan_repayments_made `number`: 
  * transfers_from_affiliated_committees `number`: 
  * transfers_to_other_authorized_committees `number`: 

### PresidentialSummaryPage
* PresidentialSummaryPage `object`
  * pagination [OffsetInfo](#offsetinfo)
  * results `array`
    * items [PresidentialSummary](#presidentialsummary)

### RadAnalyst
* RadAnalyst `object`
  * analyst_id `number`: ID of RAD analyst.
  * analyst_short_id `number`: Short ID of RAD analyst.
  * assignment_update_date `string`: Date of most recent RAD analyst assignment change
  * committee_id **required** `string`: 
  * committee_name `string`: The name of the committee. If a committee changes its name,     the most recent name will be shown. Committee names are not unique. Use committee_id     for looking up records.
  * email `string`: Email of RAD analyst
  * first_name `string`: Fist name of RAD analyst
  * last_name `string`: Last name of RAD analyst
  * rad_branch `string`: Branch of RAD analyst
  * telephone_ext `number`: Telephone extension of RAD analyst
  * title `string`: Title of RAD analyst

### RadAnalystPage
* RadAnalystPage `object`
  * pagination [OffsetInfo](#offsetinfo)
  * results `array`
    * items [RadAnalyst](#radanalyst)

### ReportDate
* ReportDate `object`
  * create_date `string`: Date the record was created
  * due_date `string`: Date the report is due
  * report_type `string`
  * report_type_full `string`
  * report_year `integer`: 
  * update_date `string`: Date the record was updated

### ReportDatePage
* ReportDatePage `object`
  * pagination [OffsetInfo](#offsetinfo)
  * results `array`
    * items [ReportDate](#reportdate)

### ReportType
* ReportType `object`
  * report_type **required** `string`: Name of report where the underlying data comes from:
  * report_type_full `string`: Name of report where the underlying data comes from:

### ScheduleA
* ScheduleA `object`
  * amendment_indicator `string`
  * amendment_indicator_desc `string`
  * back_reference_schedule_name `string`
  * back_reference_transaction_id `string`
  * candidate_first_name `string`
  * candidate_id `string`: 
  * candidate_last_name `string`
  * candidate_middle_name `string`
  * candidate_name `string`: Name of candidate running for office
  * candidate_office `string`
  * candidate_office_district `string`: Two-digit US House distirict of the office the candidate is running for. Presidential, Senate and House at-large candidates will have District 00.
  * candidate_office_full `string`
  * candidate_office_state `string`
  * candidate_office_state_full `string`
  * candidate_prefix `string`
  * candidate_suffix `string`
  * committee [CommitteeHistory](#committeehistory)
  * committee_id `string`: 
  * committee_name `string`: The name of the committee. If a committee changes its name,     the most recent name will be shown. Committee names are not unique. Use committee_id     for looking up records.
  * conduit_committee_city `string`
  * conduit_committee_id `string`
  * conduit_committee_name `string`
  * conduit_committee_state `string`
  * conduit_committee_street1 `string`
  * conduit_committee_street2 `string`
  * conduit_committee_zip `integer`
  * contribution_receipt_amount `number`
  * contribution_receipt_date `string`
  * contributor [CommitteeHistory](#committeehistory)
  * contributor_aggregate_ytd `number`
  * contributor_city `string`: City of contributor
  * contributor_employer `string`: Employer of contributor, filers need to make an effort to gather this information
  * contributor_first_name `string`
  * contributor_id `string`: The FEC identifier should be represented here if the contributor is registered with the FEC.
  * contributor_last_name `string`
  * contributor_middle_name `string`
  * contributor_name `string`: Name of contributor
  * contributor_occupation `string`: Occupation of contributor, filers need to make an effort to gather this information
  * contributor_prefix `string`
  * contributor_state `string`: State of contributor
  * contributor_street_1 `string`
  * contributor_street_2 `string`
  * contributor_suffix `string`
  * contributor_zip `string`: Zip code of contributor
  * donor_committee_name `string`
  * election_type `string`
  * election_type_full `string`
  * entity_type `string`
  * entity_type_desc `string`
  * fec_election_type_desc `string`
  * fec_election_year `string`
  * file_number `integer`
  * filing_form `string`
  * image_number `string`
  * increased_limit `string`
  * is_individual `boolean`
  * line_number `string`
  * line_number_label `string`
  * link_id `integer`
  * load_date `string`
  * memo_code `string`
  * memo_code_full `string`
  * memo_text `string`
  * memoed_subtotal `boolean`
  * national_committee_nonfederal_account `string`
  * original_sub_id `string`
  * pdf_url `string`
  * receipt_type `string`
  * receipt_type_desc `string`
  * receipt_type_full `string`
  * recipient_committee_designation `string`
  * recipient_committee_org_type `string`
  * recipient_committee_type `string`
  * report_type `string`: Name of report where the underlying data comes from:
  * report_year `integer`: 
  * schedule_type `string`
  * schedule_type_full `string`
  * sub_id `string`
  * transaction_id `string`
  * two_year_transaction_period `integer`: 
  * unused_contbr_id `string`

### ScheduleAByEmployer
* ScheduleAByEmployer `object`
  * committee_id **required** `string`: 
  * count `integer`: 
  * cycle **required** `integer`: 
  * employer **required** `string`: Employer of contributor as reported on the committee's filing
  * total `number`: Sum of transactions

### ScheduleAByEmployerPage
* ScheduleAByEmployerPage `object`
  * pagination [OffsetInfo](#offsetinfo)
  * results `array`
    * items [ScheduleAByEmployer](#scheduleabyemployer)

### ScheduleAByOccupation
* ScheduleAByOccupation `object`
  * committee_id **required** `string`: 
  * count `integer`: 
  * cycle **required** `integer`: 
  * occupation **required** `string`: Occupation of contributor as reported on the committee's filing
  * total `number`: Sum of transactions

### ScheduleAByOccupationPage
* ScheduleAByOccupationPage `object`
  * pagination [OffsetInfo](#offsetinfo)
  * results `array`
    * items [ScheduleAByOccupation](#scheduleabyoccupation)

### ScheduleABySize
* ScheduleABySize `object`
  * committee_id **required** `string`: 
  * count `integer`: 
  * cycle **required** `integer`: 
  * size **required** `integer`
  * total `number`: Sum of transactions

### ScheduleABySizeCandidate
* ScheduleABySizeCandidate `object`
  * candidate_id `string`
  * count `integer`
  * cycle `integer`
  * size `integer`
  * total `number`

### ScheduleABySizeCandidatePage
* ScheduleABySizeCandidatePage `object`
  * pagination [OffsetInfo](#offsetinfo)
  * results `array`
    * items [ScheduleABySizeCandidate](#scheduleabysizecandidate)

### ScheduleABySizePage
* ScheduleABySizePage `object`
  * pagination [OffsetInfo](#offsetinfo)
  * results `array`
    * items [ScheduleABySize](#scheduleabysize)

### ScheduleAByState
* ScheduleAByState `object`
  * committee_id **required** `string`: 
  * count `integer`: 
  * cycle **required** `integer`: 
  * state **required** `string`: US state or territory
  * state_full **required** `string`: US state or territory
  * total `number`: Sum of transactions

### ScheduleAByStateCandidate
* ScheduleAByStateCandidate `object`
  * candidate_id `string`
  * count `integer`
  * cycle `integer`
  * state `string`
  * state_full `string`
  * total `number`

### ScheduleAByStateCandidatePage
* ScheduleAByStateCandidatePage `object`
  * pagination [OffsetInfo](#offsetinfo)
  * results `array`
    * items [ScheduleAByStateCandidate](#scheduleabystatecandidate)

### ScheduleAByStatePage
* ScheduleAByStatePage `object`
  * pagination [OffsetInfo](#offsetinfo)
  * results `array`
    * items [ScheduleAByState](#scheduleabystate)

### ScheduleAByStateRecipientTotals
* ScheduleAByStateRecipientTotals `object`
  * committee_type `string`: The one-letter type code of the organization:
  * committee_type_full `string`: The one-letter type code of the organization:
  * count `integer`: Number of records making up the total.
  * cycle `integer`: 
  * state `string`: US state or territory
  * state_full `string`: US state or territory
  * total `number`: The calculated total.

### ScheduleAByStateRecipientTotalsPage
* ScheduleAByStateRecipientTotalsPage `object`
  * pagination [OffsetInfo](#offsetinfo)
  * results `array`
    * items [ScheduleAByStateRecipientTotals](#scheduleabystaterecipienttotals)

### ScheduleAByZip
* ScheduleAByZip `object`
  * committee_id **required** `string`: 
  * count `integer`: 
  * cycle **required** `integer`: 
  * state `string`: US state or territory
  * state_full `string`: US state or territory
  * total `number`: Sum of transactions
  * zip **required** `string`

### ScheduleAByZipPage
* ScheduleAByZipPage `object`
  * pagination [OffsetInfo](#offsetinfo)
  * results `array`
    * items [ScheduleAByZip](#scheduleabyzip)

### ScheduleAEfile
* ScheduleAEfile `object`
  * amendment_indicator `string`
  * back_reference_schedule_name `string`
  * back_reference_transaction_id `string`
  * beginning_image_number `string`
  * committee [CommitteeHistory](#committeehistory)
  * committee_id `string`: 
  * conduit_committee_city `string`
  * conduit_committee_id `string`
  * conduit_committee_name `string`
  * conduit_committee_state `string`
  * conduit_committee_street1 `string`
  * conduit_committee_street2 `string`
  * conduit_committee_zip `integer`
  * contribution_receipt_amount `number`
  * contribution_receipt_date `string`
  * contributor_aggregate_ytd `number`
  * contributor_city `string`: City of contributor
  * contributor_employer `string`: Employer of contributor, filers need to make an effort to gather this information
  * contributor_first_name `string`
  * contributor_last_name `string`
  * contributor_middle_name `string`
  * contributor_name `string`
  * contributor_occupation `string`: Occupation of contributor, filers need to make an effort to gather this information
  * contributor_prefix `string`
  * contributor_state `string`: State of contributor
  * contributor_suffix `string`
  * contributor_zip `string`: Zip code of contributor
  * csv_url `string`
  * cycle `integer`
  * entity_type `string`
  * fec_election_type_desc `string`
  * fec_url `string`
  * file_number **required** `integer`
  * filing [EFilings](#efilings)
  * image_number `string`: 
  * line_number `string`
  * load_timestamp `string`
  * memo_code `string`
  * memo_text `string`
  * pdf_url `string`
  * pgo `string`
  * related_line_number **required** `integer`
  * report_type `string`
  * transaction_id `string`

### ScheduleAEfilePage
* ScheduleAEfilePage `object`
  * pagination [OffsetInfo](#offsetinfo)
  * results `array`
    * items [ScheduleAEfile](#scheduleaefile)

### ScheduleAPage
* ScheduleAPage `object`
  * pagination [SeekInfo](#seekinfo)
  * results `array`
    * items [ScheduleA](#schedulea)

### ScheduleB
* ScheduleB `object`
  * amendment_indicator `string`
  * amendment_indicator_desc `string`
  * back_reference_schedule_id `string`
  * back_reference_transaction_id `string`
  * beneficiary_committee_name `string`
  * candidate_first_name `string`
  * candidate_id `string`: 
  * candidate_last_name `string`
  * candidate_middle_name `string`
  * candidate_name `string`: Name of candidate running for office
  * candidate_office `string`
  * candidate_office_description `string`
  * candidate_office_district `string`
  * candidate_office_state `string`
  * candidate_office_state_full `string`
  * candidate_prefix `string`
  * candidate_suffix `string`
  * category_code `string`
  * category_code_full `string`
  * comm_dt `string`
  * committee [CommitteeHistory](#committeehistory)
  * committee_id `string`: 
  * conduit_committee_city `string`
  * conduit_committee_name `string`
  * conduit_committee_state `string`
  * conduit_committee_street1 `string`
  * conduit_committee_street2 `string`
  * conduit_committee_zip `integer`
  * disbursement_amount `number`
  * disbursement_date `string`
  * disbursement_description `string`
  * disbursement_purpose_category `string`
  * disbursement_type `string`
  * disbursement_type_description `string`
  * election_type `string`
  * election_type_full `string`
  * entity_type `string`
  * entity_type_desc `string`
  * fec_election_type_desc `string`
  * fec_election_year `string`
  * file_number `integer`
  * filing_form `string`
  * image_number `string`
  * line_number `string`
  * line_number_label `string`
  * link_id `integer`
  * load_date `string`
  * memo_code `string`
  * memo_code_full `string`
  * memo_text `string`
  * memoed_subtotal `boolean`
  * national_committee_nonfederal_account `string`
  * original_sub_id `string`
  * payee_employer `string`
  * payee_first_name `string`
  * payee_last_name `string`
  * payee_middle_name `string`
  * payee_occupation `string`
  * payee_prefix `string`
  * payee_suffix `string`
  * pdf_url `string`
  * recipient_city `string`
  * recipient_committee [CommitteeHistory](#committeehistory)
  * recipient_committee_id `string`
  * recipient_name `string`
  * recipient_state `string`
  * recipient_zip `string`
  * ref_disp_excess_flg `string`
  * report_type `string`: Name of report where the underlying data comes from:
  * report_year `integer`: 
  * schedule_type `string`
  * schedule_type_full `string`
  * semi_annual_bundled_refund `number`
  * spender_committee_designation `string`
  * spender_committee_org_type `string`
  * spender_committee_type `string`
  * sub_id `string`
  * transaction_id `string`
  * two_year_transaction_period `integer`: 
  * unused_recipient_committee_id `string`

### ScheduleBByPurpose
* ScheduleBByPurpose `object`
  * committee_id **required** `string`: 
  * count `integer`: 
  * cycle **required** `integer`: 
  * memo_count `integer`: 
  * memo_total `number`: 
  * purpose **required** `string`: Purpose of the expenditure
  * total `number`: 

### ScheduleBByPurposePage
* ScheduleBByPurposePage `object`
  * pagination [OffsetInfo](#offsetinfo)
  * results `array`
    * items [ScheduleBByPurpose](#schedulebbypurpose)

### ScheduleBByRecipient
* ScheduleBByRecipient `object`
  * committee_id **required** `string`: 
  * count `integer`: 
  * cycle **required** `integer`: 
  * memo_count `integer`: 
  * memo_total `number`: 
  * recipient_name **required** `string`: Name of the entity receiving the disbursement
  * total `number`: 

### ScheduleBByRecipientID
* ScheduleBByRecipientID `object`
  * committee_id **required** `string`: 
  * committee_name `string`
  * count `integer`: 
  * cycle **required** `integer`: 
  * memo_count `integer`: 
  * memo_total `number`: 
  * recipient_id **required** `string`: The FEC identifier should be represented here if the entity receiving the disbursement is registered with the FEC.
  * recipient_name `string`
  * total `number`: 

### ScheduleBByRecipientIDPage
* ScheduleBByRecipientIDPage `object`
  * pagination [OffsetInfo](#offsetinfo)
  * results `array`
    * items [ScheduleBByRecipientID](#schedulebbyrecipientid)

### ScheduleBByRecipientPage
* ScheduleBByRecipientPage `object`
  * pagination [OffsetInfo](#offsetinfo)
  * results `array`
    * items [ScheduleBByRecipient](#schedulebbyrecipient)

### ScheduleBEfile
* ScheduleBEfile `object`
  * amendment_indicator `string`
  * back_reference_schedule_name `string`
  * back_reference_transaction_id `string`
  * beginning_image_number `string`
  * beneficiary_committee_name `string`
  * candidate_office `string`
  * candidate_office_district `string`
  * committee [CommitteeHistory](#committeehistory)
  * committee_id `string`: 
  * csv_url `string`
  * disbursement_amount `number`
  * disbursement_date `string`
  * disbursement_description `string`
  * disbursement_type `string`
  * entity_type `string`
  * fec_url `string`
  * file_number **required** `integer`
  * filing [EFilings](#efilings)
  * image_number `string`: 
  * is_notice `boolean`
  * line_number `string`
  * load_timestamp `string`
  * memo_code `string`
  * memo_text `string`
  * payee_name `string`
  * pdf_url `string`
  * recipient_city `string`
  * recipient_name `string`
  * recipient_prefix `string`
  * recipient_state `string`
  * recipient_suffix `string`
  * recipient_zip `string`
  * related_line_number **required** `integer`
  * report_type `string`
  * semi_annual_bundled_refund `integer`
  * transaction_id `string`

### ScheduleBEfilePage
* ScheduleBEfilePage `object`
  * pagination [OffsetInfo](#offsetinfo)
  * results `array`
    * items [ScheduleBEfile](#schedulebefile)

### ScheduleBPage
* ScheduleBPage `object`
  * pagination [SeekInfo](#seekinfo)
  * results `array`
    * items [ScheduleB](#scheduleb)

### ScheduleE
* ScheduleE `object`
  * action_code `string`
  * action_code_full `string`
  * amendment_indicator `string`: Amendent types:
  * amendment_number `integer`: 
  * back_reference_schedule_name `string`
  * back_reference_transaction_id `string`
  * candidate `string`
  * candidate_first_name `string`
  * candidate_id `string`
  * candidate_last_name `string`
  * candidate_middle_name `string`
  * candidate_name `string`: Name of candidate running for office
  * candidate_office `string`: Federal office candidate runs for: H, S or P
  * candidate_office_district `string`: Two-digit US House distirict of the office the candidate is running for. Presidential, Senate and House at-large candidates will have District 00.
  * candidate_office_state `string`: US state or territory
  * candidate_party `string`: Three-letter code for the party affiliated with a candidate or committee. For example, DEM for Democratic Party and REP for Republican Party.
  * candidate_prefix `string`
  * candidate_suffix `string`
  * category_code `string`
  * category_code_full `string`
  * committee [CommitteeHistory](#committeehistory)
  * committee_id `string`: 
  * conduit_committee_city `string`
  * conduit_committee_id `string`
  * conduit_committee_name `string`
  * conduit_committee_state `string`
  * conduit_committee_street1 `string`
  * conduit_committee_street2 `string`
  * conduit_committee_zip `integer`
  * dissemination_date `string`
  * election_type `string`: Election type 
  * election_type_full `string`: Election type 
  * expenditure_amount `number`
  * expenditure_date `string`
  * expenditure_description `string`
  * file_number `integer`
  * filer_first_name `string`
  * filer_last_name `string`
  * filer_middle_name `string`
  * filer_prefix `string`
  * filer_suffix `string`
  * filing_date `string`
  * filing_form `string`
  * image_number `string`
  * independent_sign_date `string`
  * independent_sign_name `string`
  * is_notice `boolean`
  * line_number `string`
  * link_id `integer`
  * memo_code `string`
  * memo_code_full `string`
  * memo_text `string`
  * memoed_subtotal `boolean`
  * most_recent `boolean`: 
  * notary_commission_expiration_date `string`
  * notary_sign_date `string`
  * notary_sign_name `string`
  * office_total_ytd `number`
  * original_sub_id `string`
  * payee_city `string`
  * payee_first_name `string`
  * payee_last_name `string`
  * payee_middle_name `string`
  * payee_name `string`
  * payee_prefix `string`
  * payee_state `string`
  * payee_street_1 `string`
  * payee_street_2 `string`
  * payee_suffix `string`
  * payee_zip `string`
  * pdf_url `string`
  * previous_file_number `integer`
  * report_type `string`: Name of report where the underlying data comes from:
  * report_year `integer`: 
  * schedule_type `string`
  * schedule_type_full `string`
  * sub_id `string`
  * support_oppose_indicator `string`
  * transaction_id `string`

### ScheduleEByCandidate
* ScheduleEByCandidate `object`
  * candidate_id `string`
  * candidate_name `string`
  * committee_id `string`
  * committee_name `string`
  * count `integer`: 
  * cycle **required** `integer`: 
  * support_oppose_indicator **required** `string`: Explains if the money was spent in order to support or oppose a candidate or candidates. (Coded S or O for support or oppose.) This indicator applies to independent expenditures and communication costs.
  * total `number`: Sum of transactions

### ScheduleEByCandidatePage
* ScheduleEByCandidatePage `object`
  * pagination [OffsetInfo](#offsetinfo)
  * results `array`
    * items [ScheduleEByCandidate](#scheduleebycandidate)

### ScheduleEEfile
* ScheduleEEfile `object`
  * amendment_indicator `string`
  * back_reference_schedule_name `string`
  * back_reference_transaction_id `string`
  * beginning_image_number `string`
  * candidate_first_name `string`
  * candidate_id `string`
  * candidate_middle_name `string`
  * candidate_name `string`: Name of candidate running for office
  * candidate_office `string`: Federal office candidate runs for: H, S or P
  * candidate_office_district `string`: Two-digit US House distirict of the office the candidate is running for. Presidential, Senate and House at-large candidates will have District 00.
  * candidate_office_state `string`: US state or territory
  * candidate_party `string`: Three-letter code for the party affiliated with a candidate or committee. For example, DEM for Democratic Party and REP for Republican Party.
  * candidate_prefix `string`
  * candidate_suffix `string`
  * category_code `string`
  * committee [CommitteeHistory](#committeehistory)
  * committee_id `string`: 
  * csv_url `string`
  * dissemination_date `string`: 
  * entity_type `string`
  * expenditure_amount `integer`
  * expenditure_date `string`
  * expenditure_description `string`
  * fec_url `string`
  * file_number **required** `integer`
  * filer_first_name `string`
  * filer_last_name `string`
  * filer_middle_name `string`
  * filer_prefix `string`
  * filer_suffix `string`
  * filing [EFilings](#efilings)
  * filing_form `string`
  * image_number `string`: 
  * is_notice `boolean`
  * line_number `string`
  * load_timestamp `string`
  * memo_code `string`
  * memo_text `string`
  * most_recent `boolean`: 
  * notary_sign_date `string`
  * office_total_ytd `number`
  * payee_city `string`
  * payee_first_name `string`
  * payee_last_name `string`
  * payee_middle_name `string`
  * payee_name `string`
  * payee_prefix `string`
  * payee_state `string`
  * payee_street_1 `string`
  * payee_street_2 `string`
  * payee_suffix `string`
  * payee_zip `string`
  * pdf_url `string`
  * related_line_number **required** `integer`
  * report_type `string`
  * support_oppose_indicator `string`: Explains if the money was spent in order to support or oppose a candidate or candidates. (Coded S or O for support or oppose.) This indicator applies to independent expenditures and communication costs.
  * transaction_id `string`

### ScheduleEEfilePage
* ScheduleEEfilePage `object`
  * pagination [OffsetInfo](#offsetinfo)
  * results `array`
    * items [ScheduleEEfile](#scheduleeefile)

### ScheduleEPage
* ScheduleEPage `object`
  * pagination [SeekInfo](#seekinfo)
  * results `array`
    * items [ScheduleE](#schedulee)

### ScheduleH4
* ScheduleH4 `object`
  * additional_description `string`
  * administrative_activity_inidcator `string`
  * administrative_voter_drive_activity_indicator `string`
  * amendment_indicator `string`
  * amendment_indicator_desc `string`
  * back_reference_schedule_id `string`
  * back_reference_transaction_id `string`
  * candidate_first_name `string`
  * candidate_id `string`: 
  * candidate_last_name `string`
  * candidate_name `string`: Name of candidate running for office
  * candidate_office `string`
  * candidate_office_description `string`
  * candidate_office_district `string`
  * candidate_office_state `string`
  * candidate_office_state_full `string`
  * category_code `string`
  * category_code_full `string`
  * committee [CommitteeHistory](#committeehistory)
  * committee_id `string`
  * conduit_committee_city `string`
  * conduit_committee_id `string`
  * conduit_committee_name `string`
  * conduit_committee_state `string`
  * conduit_committee_street1 `string`
  * conduit_committee_street2 `string`
  * conduit_committee_zip `integer`
  * cycle `number`
  * direct_candidate_support_activity_indicator `string`
  * disbursement_amount `number`
  * disbursement_type `string`
  * disbursement_type_full `string`
  * entity_type `string`
  * entity_type_desc `string`
  * event_amount_year_to_date `number`
  * event_purpose_category_type `string`
  * event_purpose_category_type_full `string`
  * event_purpose_date `string`
  * event_purpose_description `string`
  * event_purpose_name `string`
  * exempt_activity_indicator `string`
  * federal_share `number`
  * file_number `integer`
  * filer_committee_name `string`
  * filing_form `string`
  * fundraising_activity_indicator `string`
  * general_voter_drive_activity_indicator `string`
  * image_number `string`
  * line_number `string`
  * link_id `integer`
  * load_date `string`
  * memo_code `string`
  * memo_code_description `string`
  * memo_text `string`
  * nonfederal_share `number`
  * original_sub_id `string`
  * payee_city `string`
  * payee_first_name `string`
  * payee_last_name `string`
  * payee_middle_name `string`
  * payee_name `string`
  * payee_prefix `string`
  * payee_state `string`
  * payee_suffix `string`
  * payee_zip `string`
  * published_committee_reference_parity_check `string`
  * report_type `string`
  * report_year `number`
  * schedule_type `string`
  * schedule_type_full `string`
  * sub_id `string`
  * transaction_id `string`

### ScheduleH4Page
* ScheduleH4Page `object`
  * pagination [SeekInfo](#seekinfo)
  * results `array`
    * items [ScheduleH4](#scheduleh4)

### SeekInfo
* SeekInfo `object`
  * count `integer`
  * last_indexes `string`
  * pages `integer`
  * per_page `integer`

### StateElectionOfficeInfo
* StateElectionOfficeInfo `object`
  * address_line1 `string`
  * address_line2 `string`
  * city `string`
  * email `string`
  * fax_number `string`
  * mailing_address1 `string`
  * mailing_address2 `string`
  * mailing_city `string`
  * mailing_state `string`
  * mailing_zipcode `string`
  * office_name `string`
  * office_type **required** `string`
  * primary_phone_number `string`
  * secondary_phone_number `string`
  * state **required** `string`
  * state_full_name `string`
  * website_url1 `string`
  * website_url2 `string`
  * zip_code `string`

### StateElectionOfficeInfoPage
* StateElectionOfficeInfoPage `object`
  * pagination [OffsetInfo](#offsetinfo)
  * results `array`
    * items [StateElectionOfficeInfo](#stateelectionofficeinfo)

### TotalByOffice
* TotalByOffice `object`
  * election_year `integer`
  * office `string`
  * total_disbursements `number`
  * total_receipts `number`

### TotalByOfficeByParty
* TotalByOfficeByParty `object`
  * election_year `integer`
  * office `string`
  * party `string`
  * total_disbursements `number`
  * total_receipts `number`

### TotalByOfficeByPartyPage
* TotalByOfficeByPartyPage `object`
  * pagination [OffsetInfo](#offsetinfo)
  * results `array`
    * items [TotalByOfficeByParty](#totalbyofficebyparty)

### TotalByOfficePage
* TotalByOfficePage `object`
  * pagination [OffsetInfo](#offsetinfo)
  * results `array`
    * items [TotalByOffice](#totalbyoffice)

### TotalsCommittee
* TotalsCommittee `object`
  * affiliated_committee_name `string`: 
  * candidate_ids `array`: 
    * items `string`
  * cash_on_hand_end_period `number`
  * city `string`: 
  * committee_id **required** `string`: 
  * committee_type `string`: The one-letter type code of the organization:
  * committee_type_full `string`: The one-letter type code of the organization:
  * convert_to_pac_flag `boolean`: True indicates that a candidate committee had been converted to a PAC
  * cycle **required** `integer`: 
  * cycles `array`: 
    * items `integer`
  * cycles_has_activity `array`: 
    * items `integer`
  * cycles_has_financial `array`: 
    * items `integer`
  * debts_owed_by_committee `number`
  * designation `string`: The one-letter designation code of the organization:
  * designation_full `string`: The one-letter designation code of the organization:
  * disbursements `number`
  * filing_frequency `string`: The one-letter 
  * former_candidate_election_year `integer`: Year a candidate runs for federal office.
  * former_candidate_id `string`: 
  * former_candidate_name `string`: Name of candidate running for office
  * former_committee_name `string`: The name of the committee. If a committee changes its name,     the most recent name will be shown. Committee names are not unique. Use committee_id     for looking up records.
  * independent_expenditures `number`
  * is_active `boolean`: 
  * last_cycle_has_activity `integer`: 
  * last_cycle_has_financial `integer`: 
  * name `string`: The name of the committee. If a committee changes its name,     the most recent name will be shown. Committee names are not unique. Use committee_id     for looking up records.
  * organization_type `string`: The one-letter code for the kind for organization:
  * organization_type_full `string`: The one-letter code for the kind for organization:
  * party `string`: Three-letter code for the party affiliated with a candidate or committee. For example, DEM for Democratic Party and REP for Republican Party.
  * party_full `string`: Three-letter code for the party affiliated with a candidate or committee. For example, DEM for Democratic Party and REP for Republican Party.
  * receipts `number`
  * sponsor_candidate_ids `array`: 
    * items `string`
  * state `string`: 
  * state_full `string`: 
  * street_1 `string`: 
  * street_2 `string`: 
  * treasurer_name `string`: Name of the Committee's treasurer. If multiple treasurers for the committee, the most recent treasurer will be shown.
  * zip `string`: 

### TotalsCommitteePage
* TotalsCommitteePage `object`
  * pagination [OffsetInfo](#offsetinfo)
  * results `array`
    * items [TotalsCommittee](#totalscommittee)


