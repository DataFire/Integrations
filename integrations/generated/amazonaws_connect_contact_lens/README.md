# @datafire/amazonaws_connect_contact_lens

Client library for Amazon Connect Contact Lens

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_connect_contact_lens
```
```js
let amazonaws_connect_contact_lens = require('@datafire/amazonaws_connect_contact_lens').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

.then(data => {
  console.log(data);
});
```

## Description

<p>Contact Lens for Amazon Connect enables you to analyze conversations between customer and agents, by using speech transcription, natural language processing, and intelligent search capabilities. It performs sentiment analysis, detects issues, and enables you to automatically categorize contacts.</p> <p>Contact Lens for Amazon Connect provides both real-time and post-call analytics of customer-agent conversations. For more information, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/analyze-conversations.html">Analyze conversations using Contact Lens</a> in the <i>Amazon Connect Administrator Guide</i>. </p>

## Actions

### ListRealtimeContactAnalysisSegments



```js
amazonaws_connect_contact_lens.ListRealtimeContactAnalysisSegments({
  "InstanceId": "",
  "ContactId": ""
}, context)
```

#### Input
* input `object`
  * MaxResults `string`
  * NextToken `string`
  * ContactId **required** `string`: The identifier of the contact.
  * InstanceId **required** `string`: The identifier of the Amazon Connect instance.
  * MaxResults `integer`: The maximimum number of results to return per page.
  * NextToken `string`: The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.

#### Output
* output [ListRealtimeContactAnalysisSegmentsResponse](#listrealtimecontactanalysissegmentsresponse)



## Definitions

### AccessDeniedException


### Categories
* Categories `object`: Provides the category rules that are used to automatically categorize contacts based on uttered keywords and phrases.
  * MatchedCategories **required**
    * items [CategoryName](#categoryname)
  * MatchedDetails **required**

### CategoryDetails
* CategoryDetails `object`: Provides information about the category rule that was matched.
  * PointsOfInterest **required**
    * items [PointOfInterest](#pointofinterest)

### CategoryName
* CategoryName `string`

### CharacterOffset
* CharacterOffset `integer`

### CharacterOffsets
* CharacterOffsets `object`: For characters that were detected as issues, where they occur in the transcript.
  * BeginOffsetChar **required**
  * EndOffsetChar **required**

### ContactId
* ContactId `string`

### InstanceId
* InstanceId `string`

### InternalServiceException


### InvalidRequestException


### IssueDetected
* IssueDetected `object`: Potential issues that are detected based on an artificial intelligence analysis of each turn in the conversation.
  * CharacterOffsets **required**
    * BeginOffsetChar **required**
    * EndOffsetChar **required**

### IssuesDetected
* IssuesDetected `array`
  * items [IssueDetected](#issuedetected)

### ListRealtimeContactAnalysisSegmentsRequest
* ListRealtimeContactAnalysisSegmentsRequest `object`
  * ContactId **required**
  * InstanceId **required**
  * MaxResults
  * NextToken

### ListRealtimeContactAnalysisSegmentsResponse
* ListRealtimeContactAnalysisSegmentsResponse `object`
  * NextToken
  * Segments **required**
    * items [RealtimeContactAnalysisSegment](#realtimecontactanalysissegment)

### MatchedCategories
* MatchedCategories `array`
  * items [CategoryName](#categoryname)

### MatchedDetails
* MatchedDetails `object`

### MaxResults
* MaxResults `integer`

### NextToken
* NextToken `string`

### OffsetMillis
* OffsetMillis `integer`

### ParticipantId
* ParticipantId `string`

### ParticipantRole
* ParticipantRole `string`

### PointOfInterest
* PointOfInterest `object`: The section of the contact audio where that category rule was detected.
  * BeginOffsetMillis **required**
  * EndOffsetMillis **required**

### PointsOfInterest
* PointsOfInterest `array`
  * items [PointOfInterest](#pointofinterest)

### RealtimeContactAnalysisSegment
* RealtimeContactAnalysisSegment `object`: An analyzed segment for a real-time analysis session.
  * Categories
    * MatchedCategories **required**
      * items [CategoryName](#categoryname)
    * MatchedDetails **required**
  * Transcript
    * BeginOffsetMillis **required**
    * Content **required**
    * EndOffsetMillis **required**
    * Id **required**
    * IssuesDetected
      * items [IssueDetected](#issuedetected)
    * ParticipantId **required**
    * ParticipantRole **required**
    * Sentiment **required**

### RealtimeContactAnalysisSegments
* RealtimeContactAnalysisSegments `array`
  * items [RealtimeContactAnalysisSegment](#realtimecontactanalysissegment)

### ResourceNotFoundException


### SentimentValue
* SentimentValue `string` (values: POSITIVE, NEUTRAL, NEGATIVE)

### ThrottlingException


### Transcript
* Transcript `object`: A list of messages in the session.
  * BeginOffsetMillis **required**
  * Content **required**
  * EndOffsetMillis **required**
  * Id **required**
  * IssuesDetected
    * items [IssueDetected](#issuedetected)
  * ParticipantId **required**
  * ParticipantRole **required**
  * Sentiment **required**

### TranscriptContent
* TranscriptContent `string`

### TranscriptId
* TranscriptId `string`


