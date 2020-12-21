# @datafire/tisane_ai

Client library for Text Analysis

## Installation and Usage
```bash
npm install --save @datafire/tisane_ai
```
```js
let tisane_ai = require('@datafire/tisane_ai').create({
  apiKeyHeader: "",
  apiKeyQuery: ""
});

.then(data => {
  console.log(data);
});
```

## Description

<table><tr><td style="font-size:large">&nbsp;&nbsp;🔬&nbsp;&nbsp;&nbsp;</td><td>Detect abusive content, obtain sentiment analysis, extract entities, detect topics, automatically correct spelling errors, and more.</td></tr></table>

## Actions

### compare.entities.post
Compares two compound named entities and outputs the differences found. 


```js
tisane_ai.compare.entities.post({}, context)
```

#### Input
* input `object`

#### Output
*Output schema unknown*

### helper.extract_text.post
A service method to remove JavaScript, CSS tags, JSON, and other markup, returning pure decoded text. 


```js
tisane_ai.helper.extract_text.post({}, context)
```

#### Input
* input `object`
  * body `string`

#### Output
*Output schema unknown*

### 5a4c8182a3511b120c2e80bd
Obtain a list of available languages. No parameters.


```js
tisane_ai.5a4c8182a3511b120c2e80bd(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### 5a3b7177a3511b11cc29265c
The method analyzes the input, returning high-level and low-level metadata. 

The request body is a JSON structure made of three elements:

* `language` (string) - a standard IETF tag for the language to analyze
* `content` (string) - a content to analyze
* `settings` (structure) - the [settings](#settings-reference) to apply when analyzing

Example: 
```json
{"language": "en", "content":"Hello Tisane API!", "settings": {}}
```


### Response Reference

* [Abusive Content](#abusive-content)
* [Sentiment Analysis](#sentiment-analysis)
* [Entities](#entities)
  + [Entity Types & Subtypes](#entity-types-and-subtypes)
* [Topics](#topics)
* [Advanced Low-Level Data: Sentences, Phrases, and Words](#advanced-low-level-data-sentences-phrases-and-words)
  + [Words](#words)
    - [Advanced](#advanced)
  + [Parse Trees & Phrases](#parse-trees-and-phrases)
  + [Context-Aware Spelling Correction](#context-aware-spelling-correction)

The response contains several sections which are displayed or hidden according to the [settings](#output-customization). 

The common attributes are:

* `text` (string) - the original input
* `reduced_output` (boolean) - if the input is too big, and verbose information like the lexical chunk was requested, the verbose information will not be generated, and this flag will be set to `true` and returned as part of the response
* `sentiment` (floating-point number) - a number in range -1 to 1 indicating the document-level sentiment. Only shown when `document_sentiment` [setting](#output-customization) is set to `true`.
* `signal2noise` (floating-point number) - a signal to noise ranking of the text, in relation to the array of concepts specified in the `relevant` [setting](#signal-to-noise-ranking). Only shown when the `relevant` setting exists.

### Abusive Content

The `abuse` section is an array of detected instances of content that may violate some terms of use. **NOTE**: the terms of use in online communities may vary, and so it is up to the administrators to determine whether the content is indeed abusive. For instance, it makes no sense to restrict sexual advances in a dating community, or censor profanities when it's accepted in the bulk of the community. 

The section exists if instances of abuse are detected and the `abuse` [setting](#output-customization) is either omitted or set to `true`.

Every instance contains the following attributes:

* `offset` (unsigned integer) - zero-based offset where the instance starts
* `length` (unsigned integer) - length of the content
* `sentence_index` (unsigned integer) - zero-based index of the sentence containing the instance
* `text` (string) - fragment of text containing the instance (only included if the `snippets` [setting](#output-customization) is set to `true`)
* `tags` (array of strings) - when exists, provides additional detail about the abuse. For instance, if the fragment is classified as an attempt to sell hard drugs, one of the tags will be _hard_drug_.
* `type` (string) - the type of the abuse
* `severity` (string) - how severe the abuse is. The levels of severity are `low`, `medium`, `high`, and `extreme`
* `explanation` (string) - when available, provides rationale for the annotation; set the `explain` setting to `true` to enable.

The currently supported types are:

* `personal_attack` - an insult / attack on the addressee, e.g. an instance of cyberbullying. Please note that an attack on a post or a point, or just negative sentiment is not the same as an insult. The line may be blurred at times. See [our Knowledge Base for more information](http://tisane.ai/knowledgebase/how-do-i-detect-personal-attacks/).
* `bigotry` - hate speech aimed at one of the [protected classes](https://en.wikipedia.org/wiki/Protected_group). The hate speech detected is not just racial slurs, but, generally, hostile statements aimed at the group as a whole
* `profanity` - profane language, regardless of the intent
* `sexual_advances` - welcome or unwelcome attempts to gain some sort of sexual favor or gratification
* `criminal_activity` - attempts to sell or procure restricted items, criminal services, issuing death threats, and so on
* `external_contact` - attempts to establish contact or payment via external means of communication, e.g. phone, email, instant messaging (may violate the rules in certain communities, e.g. gig economy portals, e-commerce portals)
* `adult_only` - activities restricted for minors (e.g. consumption of alcohol)
* `mental_issues` - content indicative of suicidal thoughts or depression (LIMITED)
* `spam` - (RESERVED) spam content
* `generic` - undefined

### Sentiment Analysis

The `sentiment_expressions` section is an array of detected fragments indicating the attitude towards aspects or entities. 

The section exists if sentiment is detected and the `sentiment` [setting](#output-customization) is either omitted or set to `true`.

Every instance contains the following attributes:

* `offset` (unsigned integer) - zero-based offset where the instance starts
* `length` (unsigned integer) - length of the content
* `sentence_index` (unsigned integer) - zero-based index of the sentence containing the instance
* `text` (string) - fragment of text containing the instance (only included if the `snippets` setting is set to `true`)
* `polarity` (string) - whether the attitude is `positive`, `negative`, or `mixed`. Additionally, there is a `default` sentiment used for cases when the entire snippet has been pre-classified. For instance, if a review is split into two portions, _What did you like?_ and _What did you not like?_, and the reviewer replies briefly, e.g. _The quiet. The service_, the utterance itself has no sentiment value. When the calling application is aware of the intended sentiment, the _default_ sentiment simply provides the targets / aspects, which will be then added the sentiment externally. 
* `targets` (array of strings) - when available, provides set of aspects and/or entities which are the targets of the sentiment. For instance, when the utterance is, _The breakfast was yummy but the staff is unfriendly_, the targets for the two sentiment expressions are `meal` and `staff`. Named entities may also be targets of the sentiment.
* `reasons` (array of strings) - when available, provides reasons for the sentiment. In the example utterance above (_The breakfast was yummy but the staff is unfriendly_), the `reasons` array for the `staff` is `["unfriendly"]`, while the `reasons` array for `meal` is `["tasty"]`.
* `explanation` (string) - when available, provides rationale for the sentiment; set the `explain` setting to `true` to enable.

Example:

```json
"sentiment_expressions": [
        {
            "sentence_index": 0,
             "offset": 0,
             "length": 32,
             "polarity": "positive",
             "reasons": ["close"],
             "targets": ["location"]
         },
         {
            "sentence_index": 0,
             "offset": 38,
             "length": 29,
             "polarity": "negative",
             "reasons": ["disrespectful"],
             "targets": ["staff"]
         }
     ]
```

### Entities

The `entities_summary` section is an array of named entity objects detected in the text. 

The section exists if named entities are detected and the `entities` [setting](#output-customization) is either omitted or set to `true`.

Every entity contains the following attributes:

* `name` (string) - the most complete name of the entity in the text of all the mentions
* `ref_lemma` (string) - when available, the dictionary form of the entity in the reference language (English) regardless of the input language
* `type` (string) - a string or an array of strings specifying the type of the entity, such as `person`, `organization`, `numeric`, `amount_of_money`, `place`. Certain entities, like countries, may have several types (because a country is both a `place` and an `organization`).
* `subtype` (string) - a string indicating the subtype of the entity
* `mentions` (array of objects) - a set of instances where the entity was mentioned in the text

Every mention contains the following attributes:

* `offset` (unsigned integer) - zero-based offset where the instance starts
* `length` (unsigned integer) - length of the content
* `sentence_index` (unsigned integer) - zero-based index of the sentence containing the instance
* `text` (string) - fragment of text containing the instance (only included if the `snippets` setting is set to `true`)


Example:
```json
 "entities_summary": [
        {
            "type": "person",
             "name": "John Smith",
             "ref_lemma": "John Smith",
             "mentions": [
                {
                    "sentence_index": 0,
                     "offset": 0,
                     "length": 10 }
             ]
         }
    ,
         {
            "type": [ "organization", "place" ]
        ,
             "name": "UK",
             "ref_lemma": "U.K.",
             "mentions": [
                {
                    "sentence_index": 0,
                     "offset": 40,
                     "length": 2 }
             ]
         }
     ]
```

#### Entity Types and Subtypes

The currently supported types are: 

* `person`, with optional subtypes: `fictional_character`, `important_person`, `spiritual_being`
* `organization` (note that a country is both an organization and a place)
* `place`
* `time_range`
* `date`
* `time`
* `hashtag`
* `email`
* `amount_of_money`
* `phone` phone number, either domestic or international, in a variety of formats
* `role` (a social role, e.g. position in an organization)
* `software`
* `website` (URL), with an optional subtype: `tor` for Onion links; note that web services may also have the `software` type assigned
* `weight`
* `bank_account` only IBAN format is supported; subtypes: `iban`
* `credit_card`, with optional subtypes: `visa`, `mastercard`, `american_express`, `diners_club`, `discovery`, `jcb`, `unionpay`
* `coordinates` (GPS coordinates)
* `credential`, with optional subtypes: `md5`, `sha-1`
* `crypto`, with optional subtypes: `bitcoin`, `ethereum`, `monero`, `monero_payment_id`, `litecoin`, `dash`
* `event`
* `file` only Windows pathnames are supported; subtypes: `windows`, `facebook` (for images downloaded from Facebook)
* `flight_code`
* `identifier`
* `ip_address`, subtypes: `v4`, `v6`
* `mac_address`
* `numeric` (an unclassified numeric entity)
* `username`


### Topics

The `topics` section is an array of topics (subjects, domains, themes in other terms) detected in the text. 

The section exists if topics are detected and the `topics` [setting](#output-customization) is either omitted or set to `true`.

By default, a topic is a string. If `topic_stats` [setting](#output-customization) is set to `true`, then every entry in the array contains:

* `topic` (string) - the topic itself
* `coverage` (floating-point number) - a number between 0 and 1, indicating the ratio between the number of sentences where the topic is detected to the total number of sentences

### Advanced Low-Level Data: Sentences, Phrases, and Words

Tisane allows obtaining more in-depth data, specifically:

* sentences and their corrected form, if a misspelling was detected
* lexical chunks and their grammatical and stylistic features
* parse trees and phrases

The `sentence_list` section is generated if the `words` or the `parses` [setting](#output-customization) is set to `true`. 

Every sentence structure in the list contains:

* `offset` (unsigned integer) - zero-based offset where the sentence starts
* `length` (unsigned integer) - length of the sentence
* `text` (string) - the sentence itself
* `corrected_text` (string) - if a misspelling was detected and the spellchecking is active, contains the automatically corrected text
* `words` (array of structures) - if `words` [setting](#output-customization) is set to `true`, generates extended information about every lexical chunk. (The term "word" is used for the sake of simplicity, however, it may not be linguistically correct to equate lexical chunks with words.)
* `parse_tree` (object) - if `parses` [setting](#output-customization) is set to `true`, generates information about the parse tree and the phrases detected in the sentence.
* `nbest_parses` (array of parse objects) if `parses` [setting](#output-customization) is set to `true` and `deterministic` [setting](#output-customization) is set to `false`, generates information about the parse trees that were deemed close enough to the best one but not the best. 

#### Words

Every lexical chunk ("word") structure in the `words` array contains:

* `type` (string) - the type of the element: `punctuation` for punctuation marks, `numeral` for numerals, or `word` for everything else
* `text` (string) - the text
* `offset` (unsigned integer) - zero-based offset where the element starts
* `length` (unsigned integer) - length of the element
* `corrected_text` (string) - if a misspelling is detected, the corrected form
* `lettercase` (string) - the original letter case: `upper`, `capitalized`, or `mixed`. If lowercase or no case, the attribute is omitted.
* `stopword` (boolean) - determines whether the word is a [stopword](https://en.wikipedia.org/wiki/Stop_words)
* `grammar` (array of strings or structures) - generates the list of grammar features associated with the `word`. If the `feature_standard` [setting] is defined as `native`, then every feature is an object containing a numeral (`index`) and a string (`value`). Otherwise, every feature is a plain string

##### Advanced

For lexical chunks only:

* `role` (string) - semantic role, like `agent` or `patient`. Note that in passive voice, the semantic roles are reverse to the syntactic roles. E.g. in a sentence like _The car was driven by David_, _car_ is the patient, and _David_ is the agent.
* `numeric_value` (floating-point number) - the numeric value, if the chunk has a value associated with it
* `family` (integer number) - the ID of the family associated with the disambiguated word-sense of the lexical chunk
* `definition` (string) - the definition of the family, if the `fetch_definitions` [setting](#output-customization) is set to `true`
* `lexeme` (integer number) - the ID of the lexeme entry associated with the disambiguated word-sense of the lexical chunk
* `nondictionary_pattern` (integer number) - the ID of a non-dictionary pattern that matched, if the word was not in the language model but was classified by the nondictionary heuristics
* `style` (array of strings or structures) - generates the list of style features associated with the `word`. Only if the `feature_standard` [setting] is set to `native` or `description`
* `semantics` (array of strings or structures) - generates the list of semantic features associated with the `word`. Only if the `feature_standard` [setting] is set to `native` or `description`
* `segmentation` (structure) - generates info about the selected segmentation, if there are several possibilities to segment the current lexical chunk and the `deterministic` [setting] is set to `false`. A segmentation is simply an array of `word` structures. 
* `other_segmentations` (array of structures) - generates info about the segmentations deemed incorrect during the disambiguation process. Every entry has the same structure as the `segmentation` structure.
* `nbest_senses` (array of structures) - when the `deterministic` [setting] is set to `false`, generates a set of hypotheses that were deemed incorrect by the disambiguation process. Every hypothesis contains the following attributes: `grammar`, `style`, and `semantics`, identical in structure to their counterparts above; and `senses`, an array of word-senses associated with every hypothesis. Every sense has a `family`, which is an ID of the associated family; and, if the `fetch_definitions` [setting](#output-customization) is set to `true`, `definition` and `ref_lemma` of that family.

For punctuation marks only: 

* `id` (integer number) - the ID of the punctuation mark
* `behavior` (string) - the behavior code of the punctuation mark. Values: `sentenceTerminator`, `genericComma`, `bracketStart`, `bracketEnd`, `scopeDelimiter`, `hyphen`, `quoteStart`, `quoteEnd`, `listComma` (for East-Asian enumeration commas like _、_)

#### Parse Trees and Phrases

Every parse tree, or more accurately, parse forest, is a collection of phrases, hierarchically linked to each other. 

At the top level of the parse, there is an array of root phrases under the `phrases` element and the numeric `id` associated with it. Every phrase may have children phrases. Every phrase has the following attributes:

* `type` (string) - a [Penn treebank phrase tag](http://nliblog.com/wiki/knowledge-base-2/nlp-1-natural-language-processing/penn-treebank/penn-treebank-phrase-level-tags/) denoting the type of the phrase, e.g. _S_, _VP_, _NP_, etc.
* `family` (integer number) - an ID of the phrase family
* `offset` (unsigned integer) - a zero-based offset where the phrase starts
* `length` (unsigned integer) - the span of the phrase
* `role` (string) - the semantic role of the phrase, if any, analogous to that of the words
* `text` (string) - the phrase text, where the phrase members are delimited by the vertical bar character. Children phrases are enclosed in brackets. E.g., _driven|by|David_ or _(The|car)|was|(driven|by|David)_.

Example:

```json
"parse_tree": {
"id": 4,
"phrases": [
{
        "type": "S",
        "family": 1451,
        "offset": 0,
        "length": 27,
        "text": "(The|car)|was|(driven|by|David)",
        "children": [
                {
                        "type": "NP",
                        "family": 1081,
                        "offset": 0,
                        "length": 7,
                        "text": "The|car",
                        "role": "patient"
                },
                {
                        "type": "VP",
                        "family": 1172,
                        "offset": 12,
                        "length": 15,
                        "text": "driven|by|David",
                        "role": "verb"
                }
        ]
}
```

#### Context-Aware Spelling Correction

Tisane supports automatic, context-aware spelling correction. Whether it's a misspelling or a purported obfuscation, Tisane attempts to deduce the intended meaning, if the language model does not recognize the word. 

When or if it's found, Tisane adds the `corrected_text` attribute to the word (if the words / lexical chunks are returned) and the sentence (if the sentence text is generated). Sentence-level `corrected_text` is displayed if `words` or `parses` are set to _true_.

Note that as Tisane works with large dictionaries, you may need to exclude more esoteric terms by using the `min_generic_frequency` setting. 

Note that **the invocation of spell-checking does not depend on whether the sentences and the words sections are generated in the output**. The spellchecking can be disabled by [setting](#content-cues-and-instructions) `disable_spellcheck` to `true`. Another option is to enable the spellchecking for lowercase words only, thus excluding potential proper nouns in languages that support capitalization; to avoid spell-checking capitalized and uppercase words, set `lowercase_spellcheck_only` to `true`.




```js
tisane_ai.5a3b7177a3511b11cc29265c({}, context)
```

#### Input
* input `object`

#### Output
*Output schema unknown*

### similarity.post
Calculate semantic similarity between two text fragments, in the same language or in two different languages.


```js
tisane_ai.similarity.post({}, context)
```

#### Input
* input `object`

#### Output
*Output schema unknown*

### text2picture.post
Finds a URL of an image (Creative Commons) best describing the text. 

*WARNING*: may be slow, as Wikimedia servers are queried.


```js
tisane_ai.text2picture.post({}, context)
```

#### Input
* input `object`

#### Output
*Output schema unknown*



## Definitions

### settings
* settings `object`
  * abuse `boolean`


