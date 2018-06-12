# @datafire/google_civicinfo

Client library for Google Civic Information

## Installation and Usage
```bash
npm install --save @datafire/google_civicinfo
```
```js
let google_civicinfo = require('@datafire/google_civicinfo').create();

google_civicinfo.representatives.representativeInfoByAddress({}).then(data => {
  console.log(data);
});
```

## Description

Provides polling places, early vote locations, contest data, election officials, and government representatives for U.S. residential addresses.

## Actions

### divisions.search
Searches for political divisions by their natural name or OCD ID.


```js
google_civicinfo.divisions.search({}, context)
```

#### Input
* input `object`
  * body [DivisionSearchRequest](#divisionsearchrequest)
  * query `string`: The search query. Queries can cover any parts of a OCD ID or a human readable division name. All words given in the query are treated as required patterns. In addition to that, most query operators of the Apache Lucene library are supported. See http://lucene.apache.org/core/2_9_4/queryparsersyntax.html
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [DivisionSearchResponse](#divisionsearchresponse)

### elections.electionQuery
List of available elections to query.


```js
google_civicinfo.elections.electionQuery({}, context)
```

#### Input
* input `object`
  * body [ElectionsQueryRequest](#electionsqueryrequest)
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [ElectionsQueryResponse](#electionsqueryresponse)

### representatives.representativeInfoByAddress
Looks up political geography and representative information for a single address.


```js
google_civicinfo.representatives.representativeInfoByAddress({}, context)
```

#### Input
* input `object`
  * address `string`: The address to look up. May only be specified if the field ocdId is not given in the URL.
  * body [RepresentativeInfoRequest](#representativeinforequest)
  * includeOffices `boolean`: Whether to return information about offices and officials. If false, only the top-level district information will be returned.
  * levels `array`: A list of office levels to filter by. Only offices that serve at least one of these levels will be returned. Divisions that don't contain a matching office will not be returned.
  * roles `array`: A list of office roles to filter by. Only offices fulfilling one of these roles will be returned. Divisions that don't contain a matching office will not be returned.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [RepresentativeInfoResponse](#representativeinforesponse)

### representatives.representativeInfoByDivision
Looks up representative information for a single geographic division.


```js
google_civicinfo.representatives.representativeInfoByDivision({
  "ocdId": ""
}, context)
```

#### Input
* input `object`
  * body [DivisionRepresentativeInfoRequest](#divisionrepresentativeinforequest)
  * levels `array`: A list of office levels to filter by. Only offices that serve at least one of these levels will be returned. Divisions that don't contain a matching office will not be returned.
  * ocdId **required** `string`: The Open Civic Data division identifier of the division to look up.
  * recursive `boolean`: If true, information about all divisions contained in the division requested will be included as well. For example, if querying ocd-division/country:us/district:dc, this would also return all DC's wards and ANCs.
  * roles `array`: A list of office roles to filter by. Only offices fulfilling one of these roles will be returned. Divisions that don't contain a matching office will not be returned.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [RepresentativeInfoData](#representativeinfodata)

### elections.voterInfoQuery
Looks up information relevant to a voter based on the voter's registered address.


```js
google_civicinfo.elections.voterInfoQuery({
  "address": ""
}, context)
```

#### Input
* input `object`
  * address **required** `string`: The registered address of the voter to look up.
  * body [VoterInfoRequest](#voterinforequest)
  * electionId `string`: The unique ID of the election to look up. A list of election IDs can be obtained at https://www.googleapis.com/civicinfo/{version}/elections
  * officialOnly `boolean`: If set to true, only data from official state sources will be returned.
  * returnAllAvailableData `boolean`: If set to true, the query will return the success codeand include any partial information when it is unable to determine a matching address or unable to determine the election for electionId=0 queries.
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
  * userIp `string`: Deprecated. Please use quotaUser instead.

#### Output
* output [VoterInfoResponse](#voterinforesponse)



## Definitions

### AdministrationRegion
* AdministrationRegion `object`: Describes information about a regional election administrative area.
  * electionAdministrationBody [AdministrativeBody](#administrativebody)
  * id `string`: An ID for this object. IDs may change in future requests and should not be cached. Access to this field requires special access that can be requested from the Request more link on the Quotas page.
  * local_jurisdiction [AdministrationRegion](#administrationregion)
  * name `string`: The name of the jurisdiction.
  * sources `array`: A list of sources for this area. If multiple sources are listed the data has been aggregated from those sources.
    * items [Source](#source)

### AdministrativeBody
* AdministrativeBody `object`: Information about an election administrative body (e.g. County Board of Elections).
  * absenteeVotingInfoUrl `string`: A URL provided by this administrative body for information on absentee voting.
  * addressLines `array`
    * items `string`
  * ballotInfoUrl `string`: A URL provided by this administrative body to give contest information to the voter.
  * correspondenceAddress [SimpleAddressType](#simpleaddresstype)
  * electionInfoUrl `string`: A URL provided by this administrative body for looking up general election information.
  * electionOfficials `array`: The election officials for this election administrative body.
    * items [ElectionOfficial](#electionofficial)
  * electionRegistrationConfirmationUrl `string`: A URL provided by this administrative body for confirming that the voter is registered to vote.
  * electionRegistrationUrl `string`: A URL provided by this administrative body for looking up how to register to vote.
  * electionRulesUrl `string`: A URL provided by this administrative body describing election rules to the voter.
  * hoursOfOperation `string`: A description of the hours of operation for this administrative body.
  * name `string`: The name of this election administrative body.
  * physicalAddress [SimpleAddressType](#simpleaddresstype)
  * voter_services `array`: A description of the services this administrative body may provide.
    * items `string`
  * votingLocationFinderUrl `string`: A URL provided by this administrative body for looking up where to vote.

### Candidate
* Candidate `object`: Information about a candidate running for elected office.
  * candidateUrl `string`: The URL for the candidate's campaign web site.
  * channels `array`: A list of known (social) media channels for this candidate.
    * items [Channel](#channel)
  * email `string`: The email address for the candidate's campaign.
  * name `string`: The candidate's name. If this is a joint ticket it will indicate the name of the candidate at the top of a ticket followed by a / and that name of candidate at the bottom of the ticket. e.g. "Mitt Romney / Paul Ryan"
  * orderOnBallot `string`: The order the candidate appears on the ballot for this contest.
  * party `string`: The full name of the party the candidate is a member of.
  * phone `string`: The voice phone number for the candidate's campaign office.
  * photoUrl `string`: A URL for a photo of the candidate.

### Channel
* Channel `object`: A social media or web channel for a candidate.
  * id `string`: The unique public identifier for the candidate's channel.
  * type `string`: The type of channel. The following is a list of types of channels, but is not exhaustive. More channel types may be added at a later time. One of: GooglePlus, YouTube, Facebook, Twitter

### Contest
* Contest `object`: Information about a contest that appears on a voter's ballot.
  * ballotPlacement `string`: A number specifying the position of this contest on the voter's ballot.
  * candidates `array`: The candidate choices for this contest.
    * items [Candidate](#candidate)
  * district [ElectoralDistrict](#electoraldistrict)
  * electorateSpecifications `string`: A description of any additional eligibility requirements for voting in this contest.
  * id `string`: An ID for this object. IDs may change in future requests and should not be cached. Access to this field requires special access that can be requested from the Request more link on the Quotas page.
  * level `array`: The levels of government of the office for this contest. There may be more than one in cases where a jurisdiction effectively acts at two different levels of government; for example, the mayor of the District of Columbia acts at "locality" level, but also effectively at both "administrative-area-2" and "administrative-area-1".
    * items `string`
  * numberElected `string`: The number of candidates that will be elected to office in this contest.
  * numberVotingFor `string`: The number of candidates that a voter may vote for in this contest.
  * office `string`: The name of the office for this contest.
  * primaryParty `string`: If this is a partisan election, the name of the party it is for.
  * referendumBallotResponses `array`: The set of ballot responses for the referendum. A ballot response represents a line on the ballot. Common examples might include "yes" or "no" for referenda. This field is only populated for contests of type 'Referendum'.
    * items `string`
  * referendumBrief `string`: Specifies a short summary of the referendum that is typically on the ballot below the title but above the text. This field is only populated for contests of type 'Referendum'.
  * referendumConStatement `string`: A statement in opposition to the referendum. It does not necessarily appear on the ballot. This field is only populated for contests of type 'Referendum'.
  * referendumEffectOfAbstain `string`: Specifies what effect abstaining (not voting) on the proposition will have (i.e. whether abstaining is considered a vote against it). This field is only populated for contests of type 'Referendum'.
  * referendumPassageThreshold `string`: The threshold of votes that the referendum needs in order to pass, e.g. "two-thirds". This field is only populated for contests of type 'Referendum'.
  * referendumProStatement `string`: A statement in favor of the referendum. It does not necessarily appear on the ballot. This field is only populated for contests of type 'Referendum'.
  * referendumSubtitle `string`: A brief description of the referendum. This field is only populated for contests of type 'Referendum'.
  * referendumText `string`: The full text of the referendum. This field is only populated for contests of type 'Referendum'.
  * referendumTitle `string`: The title of the referendum (e.g. 'Proposition 42'). This field is only populated for contests of type 'Referendum'.
  * referendumUrl `string`: A link to the referendum. This field is only populated for contests of type 'Referendum'.
  * roles `array`: The roles which this office fulfills.
    * items `string`
  * sources `array`: A list of sources for this contest. If multiple sources are listed, the data has been aggregated from those sources.
    * items [Source](#source)
  * special `string`: "Yes" or "No" depending on whether this a contest being held outside the normal election cycle.
  * type `string`: The type of contest. Usually this will be 'General', 'Primary', or 'Run-off' for contests with candidates. For referenda this will be 'Referendum'. For Retention contests this will typically be 'Retention'.

### ContextParams
* ContextParams `object`
  * clientProfile `string`

### DivisionRepresentativeInfoRequest
* DivisionRepresentativeInfoRequest `object`: A request to look up representative information for a single division.
  * contextParams [ContextParams](#contextparams)

### DivisionSearchRequest
* DivisionSearchRequest `object`: A search request for political geographies.
  * contextParams [ContextParams](#contextparams)

### DivisionSearchResponse
* DivisionSearchResponse `object`: The result of a division search query.
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "civicinfo#divisionSearchResponse".
  * results `array`
    * items [DivisionSearchResult](#divisionsearchresult)

### DivisionSearchResult
* DivisionSearchResult `object`: Represents a political geographic division that matches the requested query.
  * aliases `array`: Other Open Civic Data identifiers that refer to the same division -- for example, those that refer to other political divisions whose boundaries are defined to be coterminous with this one. For example, ocd-division/country:us/state:wy will include an alias of ocd-division/country:us/state:wy/cd:1, since Wyoming has only one Congressional district.
    * items `string`
  * name `string`: The name of the division.
  * ocdId `string`: The unique Open Civic Data identifier for this division.

### Election
* Election `object`: Information about the election that was queried.
  * electionDay `string`: Day of the election in YYYY-MM-DD format.
  * id `string`: The unique ID of this election.
  * name `string`: A displayable name for the election.
  * ocdDivisionId `string`: The political division of the election. Represented as an OCD Division ID. Voters within these political jurisdictions are covered by this election. This is typically a state such as ocd-division/country:us/state:ca or for the midterms or general election the entire US (i.e. ocd-division/country:us).

### ElectionOfficial
* ElectionOfficial `object`: Information about individual election officials.
  * emailAddress `string`: The email address of the election official.
  * faxNumber `string`: The fax number of the election official.
  * name `string`: The full name of the election official.
  * officePhoneNumber `string`: The office phone number of the election official.
  * title `string`: The title of the election official.

### ElectionsQueryRequest
* ElectionsQueryRequest `object`
  * contextParams [ContextParams](#contextparams)

### ElectionsQueryResponse
* ElectionsQueryResponse `object`: The list of elections available for this version of the API.
  * elections `array`: A list of available elections
    * items [Election](#election)
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "civicinfo#electionsQueryResponse".

### ElectoralDistrict
* ElectoralDistrict `object`: Describes the geographic scope of a contest.
  * id `string`: An identifier for this district, relative to its scope. For example, the 34th State Senate district would have id "34" and a scope of stateUpper.
  * kgForeignKey `string`
  * name `string`: The name of the district.
  * scope `string`: The geographic scope of this district. If unspecified the district's geography is not known. One of: national, statewide, congressional, stateUpper, stateLower, countywide, judicial, schoolBoard, cityWide, township, countyCouncil, cityCouncil, ward, special

### GeographicDivision
* GeographicDivision `object`: Describes a political geography.
  * alsoKnownAs `array`: Any other valid OCD IDs that refer to the same division.
    * items `string`
  * name `string`: The name of the division.
  * officeIndices `array`: List of indices in the offices array, one for each office elected from this division. Will only be present if includeOffices was true (or absent) in the request.
    * items `integer`

### Office
* Office `object`: Information about an Office held by one or more Officials.
  * divisionId `string`: The OCD ID of the division with which this office is associated.
  * levels `array`: The levels of government of which this office is part. There may be more than one in cases where a jurisdiction effectively acts at two different levels of government; for example, the mayor of the District of Columbia acts at "locality" level, but also effectively at both "administrative-area-2" and "administrative-area-1".
    * items `string`
  * name `string`: The human-readable name of the office.
  * officialIndices `array`: List of indices in the officials array of people who presently hold this office.
    * items `integer`
  * roles `array`: The roles which this office fulfills. Roles are not meant to be exhaustive, or to exactly specify the entire set of responsibilities of a given office, but are meant to be rough categories that are useful for general selection from or sorting of a list of offices.
    * items `string`
  * sources `array`: A list of sources for this office. If multiple sources are listed, the data has been aggregated from those sources.
    * items [Source](#source)

### Official
* Official `object`: Information about a person holding an elected office.
  * address `array`: Addresses at which to contact the official.
    * items [SimpleAddressType](#simpleaddresstype)
  * channels `array`: A list of known (social) media channels for this official.
    * items [Channel](#channel)
  * emails `array`: The direct email addresses for the official.
    * items `string`
  * name `string`: The official's name.
  * party `string`: The full name of the party the official belongs to.
  * phones `array`: The official's public contact phone numbers.
    * items `string`
  * photoUrl `string`: A URL for a photo of the official.
  * urls `array`: The official's public website URLs.
    * items `string`

### PollingLocation
* PollingLocation `object`: A location where a voter can vote. This may be an early vote site, an election day voting location, or a drop off location for a completed ballot.
  * address [SimpleAddressType](#simpleaddresstype)
  * endDate `string`: The last date that this early vote site or drop off location may be used. This field is not populated for polling locations.
  * id `string`: An ID for this object. IDs may change in future requests and should not be cached. Access to this field requires special access that can be requested from the Request more link on the Quotas page.
  * name `string`: The name of the early vote site or drop off location. This field is not populated for polling locations.
  * notes `string`: Notes about this location (e.g. accessibility ramp or entrance to use).
  * pollingHours `string`: A description of when this location is open.
  * sources `array`: A list of sources for this location. If multiple sources are listed the data has been aggregated from those sources.
    * items [Source](#source)
  * startDate `string`: The first date that this early vote site or drop off location may be used. This field is not populated for polling locations.
  * voterServices `string`: The services provided by this early vote site or drop off location. This field is not populated for polling locations.

### PostalAddress
* PostalAddress `object`
  * addressLines `array`
    * items `string`
  * administrativeAreaName `string`
  * countryName `string`
  * countryNameCode `string`
  * dependentLocalityName `string`
  * dependentThoroughfareLeadingType `string`
  * dependentThoroughfareName `string`
  * dependentThoroughfarePostDirection `string`
  * dependentThoroughfarePreDirection `string`
  * dependentThoroughfareTrailingType `string`
  * dependentThoroughfaresConnector `string`
  * dependentThoroughfaresIndicator `string`
  * dependentThoroughfaresType `string`
  * firmName `string`
  * isDisputed `boolean`
  * languageCode `string`
  * localityName `string`
  * postBoxNumber `string`
  * postalCodeNumber `string`
  * postalCodeNumberExtension `string`
  * premiseName `string`
  * recipientName `string`
  * sortingCode `string`
  * subAdministrativeAreaName `string`
  * subPremiseName `string`
  * thoroughfareLeadingType `string`
  * thoroughfareName `string`
  * thoroughfareNumber `string`
  * thoroughfarePostDirection `string`
  * thoroughfarePreDirection `string`
  * thoroughfareTrailingType `string`

### RepresentativeInfoData
* RepresentativeInfoData `object`
  * divisions `object`: Political geographic divisions that contain the requested address.
  * offices `array`: Elected offices referenced by the divisions listed above. Will only be present if includeOffices was true in the request.
    * items [Office](#office)
  * officials `array`: Officials holding the offices listed above. Will only be present if includeOffices was true in the request.
    * items [Official](#official)

### RepresentativeInfoRequest
* RepresentativeInfoRequest `object`: A request for political geography and representative information for an address.
  * contextParams [ContextParams](#contextparams)

### RepresentativeInfoResponse
* RepresentativeInfoResponse `object`: The result of a representative info lookup query.
  * divisions `object`: Political geographic divisions that contain the requested address.
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "civicinfo#representativeInfoResponse".
  * normalizedInput [SimpleAddressType](#simpleaddresstype)
  * offices `array`: Elected offices referenced by the divisions listed above. Will only be present if includeOffices was true in the request.
    * items [Office](#office)
  * officials `array`: Officials holding the offices listed above. Will only be present if includeOffices was true in the request.
    * items [Official](#official)

### SimpleAddressType
* SimpleAddressType `object`: A simple representation of an address.
  * city `string`: The city or town for the address.
  * line1 `string`: The street name and number of this address.
  * line2 `string`: The second line the address, if needed.
  * line3 `string`: The third line of the address, if needed.
  * locationName `string`: The name of the location.
  * state `string`: The US two letter state abbreviation of the address.
  * zip `string`: The US Postal Zip Code of the address.

### Source
* Source `object`: Contains information about the data source for the element containing it.
  * name `string`: The name of the data source.
  * official `boolean`: Whether this data comes from an official government source.

### VoterInfoRequest
* VoterInfoRequest `object`: A request for information about a voter.
  * contextParams [ContextParams](#contextparams)
  * voterInfoSegmentResult [VoterInfoSegmentResult](#voterinfosegmentresult)

### VoterInfoResponse
* VoterInfoResponse `object`: The result of a voter info lookup query.
  * contests `array`: Contests that will appear on the voter's ballot.
    * items [Contest](#contest)
  * dropOffLocations `array`: Locations where a voter is eligible to drop off a completed ballot. The voter must have received and completed a ballot prior to arriving at the location. The location may not have ballots available on the premises. These locations could be open on or before election day as indicated in the pollingHours field.
    * items [PollingLocation](#pollinglocation)
  * earlyVoteSites `array`: Locations where the voter is eligible to vote early, prior to election day.
    * items [PollingLocation](#pollinglocation)
  * election [Election](#election)
  * kind `string`: Identifies what kind of resource this is. Value: the fixed string "civicinfo#voterInfoResponse".
  * mailOnly `boolean`: Specifies whether voters in the precinct vote only by mailing their ballots (with the possible option of dropping off their ballots as well).
  * normalizedInput [SimpleAddressType](#simpleaddresstype)
  * otherElections `array`: If no election ID was specified in the query, and there was more than one election with data for the given voter, this will contain information about the other elections that could apply.
    * items [Election](#election)
  * pollingLocations `array`: Locations where the voter is eligible to vote on election day.
    * items [PollingLocation](#pollinglocation)
  * precinctId `string`
  * state `array`: Local Election Information for the state that the voter votes in. For the US, there will only be one element in this array.
    * items [AdministrationRegion](#administrationregion)

### VoterInfoSegmentResult
* VoterInfoSegmentResult `object`
  * generatedMillis `string`
  * postalAddress [PostalAddress](#postaladdress)
  * request [VoterInfoRequest](#voterinforequest)
  * response [VoterInfoResponse](#voterinforesponse)


