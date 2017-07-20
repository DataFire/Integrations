# @datafire/geneea

Client library for Geneea Natural Language Processing

## Installation and Usage
```bash
npm install --save datafire @datafire/geneea
```

```js
let datafire = require('datafire');
let geneea = require('@datafire/geneea').actions;

let account = {
  user_key: "",
}
let context = new datafire.Context({
  accounts: {
    geneea: account,
  }
})


geneea.topicPost({}, context).then(data => {
  console.log(data);
})
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


### correctionGet
<br/><strong>Possible options:</strong><p class="markdown">An optional parameter <code>diacritize</code> with values <code>yes</code>, <code>no</code> or <code>auto</code> indicate whether the text diacritization will be performed. The default value is <code>auto</code>.</p>


```js
geneea.correctionGet({}, context)
```


### correctionPost
<strong>Notes:</strong><br/>Valid JSON cannot contain newline characters. These have to be escaped. (See also <a href="https://geneea.atlassian.net/wiki/display/IPD/The+Interpretor+API+Public+Documentation#TheInterpretorAPIPublicDocumentation-Interactiveonlinedocumentation" target="_blank">Interpretor documentation</a>)<br/>Fields <code>text</code> and <code>url</code> are mutually exclusive.<br/><strong>Examples:</strong><pre><code>{"text": "Hello world!"}</code></pre><pre><code>{"url": "https://en.wikipedia.org/wiki/Pyrrhuloxia"}</code></pre><br/><strong>Possible options:</strong><p class="markdown">An optional parameter <code>diacritize</code> with values <code>yes</code>, <code>no</code> or <code>auto</code> indicate whether the text diacritization will be performed. The default value is <code>auto</code>.</p>


```js
geneea.correctionPost({}, context)
```


### entitiesGet
entitiesGet


```js
geneea.entitiesGet({}, context)
```


### entitiesPost
<strong>Notes:</strong><br/>Valid JSON cannot contain newline characters. These have to be escaped. (See also <a href="https://geneea.atlassian.net/wiki/display/IPD/The+Interpretor+API+Public+Documentation#TheInterpretorAPIPublicDocumentation-Interactiveonlinedocumentation" target="_blank">Interpretor documentation</a>)<br/>Fields <code>text</code> and <code>url</code> are mutually exclusive.<br/><strong>Examples:</strong><pre><code>{"text": "Hello world!"}</code></pre><pre><code>{"url": "https://en.wikipedia.org/wiki/Pyrrhuloxia"}</code></pre>


```js
geneea.entitiesPost({}, context)
```


### lemmatizeGet
lemmatizeGet


```js
geneea.lemmatizeGet({}, context)
```


### lemmatizePost
<strong>Notes:</strong><br/>Valid JSON cannot contain newline characters. These have to be escaped. (See also <a href="https://geneea.atlassian.net/wiki/display/IPD/The+Interpretor+API+Public+Documentation#TheInterpretorAPIPublicDocumentation-Interactiveonlinedocumentation" target="_blank">Interpretor documentation</a>)<br/>Fields <code>text</code> and <code>url</code> are mutually exclusive.<br/><strong>Examples:</strong><pre><code>{"text": "Hello world!"}</code></pre><pre><code>{"url": "https://en.wikipedia.org/wiki/Pyrrhuloxia"}</code></pre>


```js
geneea.lemmatizePost({}, context)
```


### sentimentGet
sentimentGet


```js
geneea.sentimentGet({}, context)
```


### sentimentPost
<strong>Notes:</strong><br/>Valid JSON cannot contain newline characters. These have to be escaped. (See also <a href="https://geneea.atlassian.net/wiki/display/IPD/The+Interpretor+API+Public+Documentation#TheInterpretorAPIPublicDocumentation-Interactiveonlinedocumentation" target="_blank">Interpretor documentation</a>)<br/>Fields <code>text</code> and <code>url</code> are mutually exclusive.<br/><strong>Examples:</strong><pre><code>{"text": "Hello world!"}</code></pre><pre><code>{"url": "https://en.wikipedia.org/wiki/Pyrrhuloxia"}</code></pre>


```js
geneea.sentimentPost({}, context)
```


### topicGet
topicGet


```js
geneea.topicGet({}, context)
```


### topicPost
<strong>Notes:</strong><br/>Valid JSON cannot contain newline characters. These have to be escaped. (See also <a href="https://geneea.atlassian.net/wiki/display/IPD/The+Interpretor+API+Public+Documentation#TheInterpretorAPIPublicDocumentation-Interactiveonlinedocumentation" target="_blank">Interpretor documentation</a>)<br/>Fields <code>text</code> and <code>url</code> are mutually exclusive.<br/><strong>Examples:</strong><pre><code>{"text": "Hello world!"}</code></pre><pre><code>{"url": "https://en.wikipedia.org/wiki/Pyrrhuloxia"}</code></pre>


```js
geneea.topicPost({}, context)
```


