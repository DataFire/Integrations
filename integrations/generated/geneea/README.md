# @datafire/geneea

Client library for Geneea Natural Language Processing

## Installation and Usage
```bash
npm install --save @datafire/geneea
```
```js
let geneea = require('@datafire/geneea').create({
  user_key: ""
});

geneea.topicPost({}).then(data => {
  console.log(data);
});
```

## Description

<div class="api-description">
    <h2>Authentication</h2>
    <p>For all calls, supply your API key. <a href="https://www.geneea.com/pricing">Sign up to <em>obtain the key</em></a>.</p>
    <p>
        Our API supports both <em>unencrypted (HTTP)</em> and <em>encrypted (HTTPS)</em> protocols.
        However, for security reasons, we strongly encourage using only the encrypted version.
    </p>
    <p>The API key should be supplied as either a request parameter <code>user_key</code> or in <code>Authorization</code> header.</p>
    <pre><code>Authorization: user_key &lt;YOUR_API_KEY&gt;</code></pre>

    <h2>API operations</h2>
    <p>
        All API operations can perform analysis on supplied raw text or on text extracted from a given URL.
        Optionally, one can supply additional information which can make the result more precise. An example
        of such information would be the language of text or a particular text extractor for URL resources.
    </p>
    <p>The supported types of analyses are:</p>
    <ul>
        <li><strong>lemmatization</strong> &longrightarrow;
            Finds out lemmata (basic forms) of all the words in the document.
        </li>
        <li><strong>correction</strong> &longrightarrow;
            Performs correction (diacritization) on all the words in the document.
        </li>
        <li><strong>topic detection</strong> &longrightarrow;
            Determines a topic of the document, e.g. finance or sports.
        </li>
        <li><strong>sentiment analysis</strong> &longrightarrow;
            Determines a sentiment of the document, i.e. how positive or negative the document is.
        </li>
        <li><strong>named entity recognition</strong> &longrightarrow;
            Finds named entities (like person, location, date etc.) mentioned the the document.
        </li>
    </ul>

    <h2>Encoding</h2>
    <p>The supplied text is expected to be in UTF-8 encoding, this is especially important for non-english texts.</p>

    <h2>Returned values</h2>
    <p>The API calls always return objects in serialized JSON format in UTF-8 encoding.</p>
    <p>
        If any error occurs, the HTTP response code will be in the range <code>4xx</code> (client-side error) or
        <code>5xx</code> (server-side error). In this situation, the body of the response will contain information
        about the error in JSON format, with <code>exception</code> and <code>message</code> values.
    </p>

    <h2>URL limitations</h2>
    <p>
        All the requests are semantically <code>GET</code>. However, for longer texts, you may run into issues
        with URL length limit. Therefore, it's possible to always issue a <code>POST</code> request with all
        the parameters encoded as a JSON in the request body.
    </p>
    <p>Example:</p>
    <pre><code>
        POST /s1/sentiment
        Content-Type: application/json

        {"text":"There is no harm in being sometimes wrong - especially if one is promptly found out."}
    </code></pre>
    <p>This is equivalent to <code>GET /s1/sentiment?text=There%20is%20no%20harm...</code></p>

    <h2>Request limitations</h2>
    <p>
        The API has other limitations concerning the size of the HTTP requests. The maximum allowed size of any
        POST request body is <em>512 KiB</em>. For request with a URL resource, the maximum allowed number of
        extracted characters from each such resource is <em>100,000</em>.
    </p>

    <h2>Terms of Service</h2>
    <p>
        By using the API, you agree to our
        <a href="https://www.geneea.com/terms.html" target="_blank">Terms of Service Agreement</a>.
    </p>

    <h2>More information</h2>
    <p>
        <a href="https://geneea.atlassian.net/wiki/display/IPD/The+Interpretor+API+Public+Documentation" target="_blank">
        The Interpretor Public Documentation
        </a>
    </p>
</div>


## Actions

### getInfo
getInfo


```js
geneea.getInfo(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [Information_about_a_user_account.](#information_about_a_user_account.)

### correctionGet
<br/><strong>Possible options:</strong><p class="markdown">An optional parameter <code>diacritize</code> with values <code>yes</code>, <code>no</code> or <code>auto</code> indicate whether the text diacritization will be performed. The default value is <code>auto</code>.</p>


```js
geneea.correctionGet({}, context)
```

#### Input
* input `object`
  * text `string`: raw document text
  * url `string`: document URL
  * extractor `string` (values: default, article, keep-everything): document extractor
  * language `string`: document language
  * returnTextInfo `boolean`

#### Output
* output [Response_for_the_text_correction](#response_for_the_text_correction)

### correctionPost
<strong>Notes:</strong><br/>Valid JSON cannot contain newline characters. These have to be escaped. (See also <a href="https://geneea.atlassian.net/wiki/display/IPD/The+Interpretor+API+Public+Documentation#TheInterpretorAPIPublicDocumentation-Interactiveonlinedocumentation" target="_blank">Interpretor documentation</a>)<br/>Fields <code>text</code> and <code>url</code> are mutually exclusive.<br/><strong>Examples:</strong><pre><code>{"text": "Hello world!"}</code></pre><pre><code>{"url": "https://en.wikipedia.org/wiki/Pyrrhuloxia"}</code></pre><br/><strong>Possible options:</strong><p class="markdown">An optional parameter <code>diacritize</code> with values <code>yes</code>, <code>no</code> or <code>auto</code> indicate whether the text diacritization will be performed. The default value is <code>auto</code>.</p>


```js
geneea.correctionPost({}, context)
```

#### Input
* input `object`
  * body [Request](#request)

#### Output
* output [Response_for_the_text_correction](#response_for_the_text_correction)

### entitiesGet
entitiesGet


```js
geneea.entitiesGet({}, context)
```

#### Input
* input `object`
  * text `string`: raw document text
  * url `string`: document URL
  * extractor `string` (values: default, article, keep-everything): document extractor
  * language `string`: document language
  * returnTextInfo `boolean`

#### Output
* output [EntitiesResponse](#entitiesresponse)

### entitiesPost
<strong>Notes:</strong><br/>Valid JSON cannot contain newline characters. These have to be escaped. (See also <a href="https://geneea.atlassian.net/wiki/display/IPD/The+Interpretor+API+Public+Documentation#TheInterpretorAPIPublicDocumentation-Interactiveonlinedocumentation" target="_blank">Interpretor documentation</a>)<br/>Fields <code>text</code> and <code>url</code> are mutually exclusive.<br/><strong>Examples:</strong><pre><code>{"text": "Hello world!"}</code></pre><pre><code>{"url": "https://en.wikipedia.org/wiki/Pyrrhuloxia"}</code></pre>


```js
geneea.entitiesPost({}, context)
```

#### Input
* input `object`
  * body [Request](#request)

#### Output
* output [EntitiesResponse](#entitiesresponse)

### lemmatizeGet
lemmatizeGet


```js
geneea.lemmatizeGet({}, context)
```

#### Input
* input `object`
  * text `string`: raw document text
  * url `string`: document URL
  * extractor `string` (values: default, article, keep-everything): document extractor
  * language `string`: document language
  * returnTextInfo `boolean`

#### Output
* output [LemmatizeResponse](#lemmatizeresponse)

### lemmatizePost
<strong>Notes:</strong><br/>Valid JSON cannot contain newline characters. These have to be escaped. (See also <a href="https://geneea.atlassian.net/wiki/display/IPD/The+Interpretor+API+Public+Documentation#TheInterpretorAPIPublicDocumentation-Interactiveonlinedocumentation" target="_blank">Interpretor documentation</a>)<br/>Fields <code>text</code> and <code>url</code> are mutually exclusive.<br/><strong>Examples:</strong><pre><code>{"text": "Hello world!"}</code></pre><pre><code>{"url": "https://en.wikipedia.org/wiki/Pyrrhuloxia"}</code></pre>


```js
geneea.lemmatizePost({}, context)
```

#### Input
* input `object`
  * body [Request](#request)

#### Output
* output [LemmatizeResponse](#lemmatizeresponse)

### sentimentGet
sentimentGet


```js
geneea.sentimentGet({}, context)
```

#### Input
* input `object`
  * text `string`: raw document text
  * url `string`: document URL
  * extractor `string` (values: default, article, keep-everything): document extractor
  * language `string`: document language
  * returnTextInfo `boolean`

#### Output
* output [SentimentResponse](#sentimentresponse)

### sentimentPost
<strong>Notes:</strong><br/>Valid JSON cannot contain newline characters. These have to be escaped. (See also <a href="https://geneea.atlassian.net/wiki/display/IPD/The+Interpretor+API+Public+Documentation#TheInterpretorAPIPublicDocumentation-Interactiveonlinedocumentation" target="_blank">Interpretor documentation</a>)<br/>Fields <code>text</code> and <code>url</code> are mutually exclusive.<br/><strong>Examples:</strong><pre><code>{"text": "Hello world!"}</code></pre><pre><code>{"url": "https://en.wikipedia.org/wiki/Pyrrhuloxia"}</code></pre>


```js
geneea.sentimentPost({}, context)
```

#### Input
* input `object`
  * body [Request](#request)

#### Output
* output [SentimentResponse](#sentimentresponse)

### topicGet
topicGet


```js
geneea.topicGet({}, context)
```

#### Input
* input `object`
  * text `string`: raw document text
  * url `string`: document URL
  * extractor `string` (values: default, article, keep-everything): document extractor
  * language `string`: document language
  * returnTextInfo `boolean`

#### Output
* output [TopicResponse](#topicresponse)

### topicPost
<strong>Notes:</strong><br/>Valid JSON cannot contain newline characters. These have to be escaped. (See also <a href="https://geneea.atlassian.net/wiki/display/IPD/The+Interpretor+API+Public+Documentation#TheInterpretorAPIPublicDocumentation-Interactiveonlinedocumentation" target="_blank">Interpretor documentation</a>)<br/>Fields <code>text</code> and <code>url</code> are mutually exclusive.<br/><strong>Examples:</strong><pre><code>{"text": "Hello world!"}</code></pre><pre><code>{"url": "https://en.wikipedia.org/wiki/Pyrrhuloxia"}</code></pre>


```js
geneea.topicPost({}, context)
```

#### Input
* input `object`
  * body [Request](#request)

#### Output
* output [TopicResponse](#topicresponse)



## Definitions

### EntitiesResponse
* EntitiesResponse `object`: Response for the named-entity recognition
  * entities **required** `array`: Found named entities in the document
    * items [Entity](#entity)
  * language **required** `string`: The used language of the document
  * text `string`: The raw text of the document which has been analysed

### Entity
* Entity `object`: The named entity
  * entity **required** `string`: Disambiguated and standardized form of the entity
  * links **required** `object`: Disambiguation links for the entity, e.g. its DBpedia page
  * sentiment `number`: Detected sentiment of the entity (value from -1.0 to 1.0)
  * textOffset **required** `integer`: Character offset in the text (starting from 0)
  * type **required** `string`: Detected type of the entity

### Entry«string,long»
* Entry«string,long» `object`
  * key `integer`

### Information_about_a_user_account.
* Information_about_a_user_account. `object`
  * remainingQuotas `array`: Remaining quotas for the user account.
    * items [Entry«string,long»](#entry«string,long»)
  * type `string`: Type (plan) of the user account.

### Label
* Label `object`: The topic label
  * confidence **required** `number`: Confidence (probability) of this label
  * label **required** `string`: The value of this label

### LemmatizeResponse
* LemmatizeResponse `object`: Response for the lemmatization
  * language **required** `string`: The used language of the document
  * lemmatizedText **required** `string`: Lemmatized text of the document, individual tokens are separated by a space and sentences are separated by a new-line character
  * text `string`: The raw text of the document which has been analysed

### Request
* Request `object`: Request encapsulation for simple API version 1
  * extractor `string` (values: default, article, keep-everything): [optional] Text extractor to be used when analyzing HTML document
  * language `string`: [optional] The language of the document, auto-detection will be used if omitted
  * options `object`: [optional] Additional options for the internal modules (key-value pairs)
  * returnTextInfo `boolean`: [optional] Indicates whether to return the source text within the response object
  * text `string`: The raw text to be analyzed, mutually exclusive with the 'url' parameter
  * url `string`: URL of a document to be analysed, mutually exclusive with the 'text' parameter

### Response_for_the_text_correction
* Response_for_the_text_correction `object`
  * corrected `boolean`
  * correctedText **required** `string`: Corrected text of the document
  * diacritized `boolean`
  * language **required** `string`: The used language of the document
  * text `string`: The raw text of the document which has been analysed

### SentimentResponse
* SentimentResponse `object`: Response for the sentiment analysis
  * language **required** `string`: The used language of the document
  * sentiment **required** `number`: Detected sentiment of the document (value from -1.0 to 1.0)
  * text `string`: The raw text of the document which has been analysed

### TopicResponse
* TopicResponse `object`: Response for the topic detection
  * confidence **required** `number`: Confidence for the detected topic
  * labels **required** `array`: Probabilistic distribution over possible topic labels
    * items [Label](#label)
  * language **required** `string`: The used language of the document
  * text `string`: The raw text of the document which has been analysed
  * topic **required** `string`: Detected topic of the document


