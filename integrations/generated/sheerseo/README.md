# @datafire/sheerseo

Client library for SheerSEO API

## Installation and Usage
```bash
npm install --save @datafire/sheerseo
```
```js
let sheerseo = require('@datafire/sheerseo').create({
  ApiKeyAuth: ""
});

.then(data => {
  console.log(data);
});
```

## Description

Sheerseo API has 2 stages:<br>First stage - initiating the task: You fill in your task and receive in return the task id. <br>Second stage - collecting the results: send a request containing the task ids you got at the first stage and collecting the results.

## Actions

### rankCollect
Submit serp jobs


```js
sheerseo.rankCollect({
  "body": null
}, context)
```

#### Input
* input `object`
  * body **required** [CollectRequest](#collectrequest)

#### Output
* output [rankCollectResponse](#rankcollectresponse)

### rankSubmit
Submit rank jobs


```js
sheerseo.rankSubmit({
  "body": null
}, context)
```

#### Input
* input `object`
  * body **required** [rankSubmitRequest](#ranksubmitrequest)

#### Output
* output [rankSubmitResponse](#ranksubmitresponse)

### serpCollect
Submit serp jobs


```js
sheerseo.serpCollect({
  "body": null
}, context)
```

#### Input
* input `object`
  * body **required** [CollectRequest](#collectrequest)

#### Output
* output [serpCollectResponse](#serpcollectresponse)

### serpSubmit
Submit serp jobs


```js
sheerseo.serpSubmit({
  "body": null
}, context)
```

#### Input
* input `object`
  * body **required** [serpSubmitRequest](#serpsubmitrequest)

#### Output
* output [serpSubmitResponse](#serpsubmitresponse)



## Definitions

### CollectRequest
* CollectRequest `object`
  * task_ids **required** `array`: Receiving the request results through thier task id's
    * items `string`

### ErrorResponse
* ErrorResponse `object`
  * error_message **required** `string`: explanation of what was wrong

### KeywordJobRank
* KeywordJobRank `object`
  * domain `string`: The domain you want to check its rank for the keyword entered
  * keyword **required** `string`: keyword (search term)
  * localization_code **required** `string` (values: us, uk, au, br, be_dutch, be_french, ca, de, es, ie, il, nl, sg, za, it, is, ch, fr, se, at, dk, nz, gr, no, in, ms, pl, hk, id, ru, ae, fi, pt, mx, tr, cl, jp, ar): A code for the localization, which is a combination of country and language
  * localization_zip `string`: option to localize the results per zip code
  * search_engine `string` (values: google, bing, google_mobile): google/bing/google_mobile

### KeywordJobSerp
* KeywordJobSerp `object`
  * keyword **required** `string`: keyword (search term)
  * localization_code **required** `string` (values: us, uk, au, br, be_dutch, be_french, ca, de, es, ie, il, nl, sg, za, it, is, ch, fr, se, at, dk, nz, gr, no, in, ms, pl, hk, id, ru, ae, fi, pt, mx, tr, cl, jp, ar): A code for the localization, which is a combination of country and language
  * localization_zip `string`: option to localize the results per zip code
  * search_engine `string` (values: google, bing, google_mobile): google/bing/google_mobile

### KeywordTask
* KeywordTask `object`
  * keyword **required** `string`: keyword (search term)
  * localization_code **required** `string` (values: us, uk, au, br, be_dutch, be_french, ca, de, es, ie, il, nl, sg, za, it, is, ch, fr, se, at, dk, nz, gr, no, in, ms, pl, hk, id, ru, ae, fi, pt, mx, tr, cl, jp, ar): A code for the localization, which is a combination of country and language
  * localization_zip `string`: option to localize the results per zip code
  * search_engine `string` (values: google, bing, google_mobile): google/bing/google_mobile
  * status `string` (values: ok, invalid): status of this task request. "ok" means we're working on collecting it. "invalid" means there was an error and it won't be collected
  * task_id `string`: the assigned task id for this task. Should be used later in the serp-collect request

### rankCollectResponse
* Response for rank-collect request `object`
  * tasks `array`
    * items `object`
      * task_id `object`: the id of the task you want to look for
        * error_message `string`: error message in case task status is invalid
        * keyword `string`: keyword (search term)
        * local_pack_rank `integer`: relevent only to google: show the local pack rank of the domain in case exist
        * localization_code `string` (values: us, uk, au, br, be_dutch, be_french, ca, de, es, ie, il, nl, sg, za, it, is, ch, fr, se, at, dk, nz, gr, no, in, ms, pl, hk, id, ru, ae, fi, pt, mx, tr, cl, jp, ar): A code for the localization, which is a combination of country and language
        * localization_zip `string`: option to localize the results per zip code
        * rank `integer`: the exact rank of the domain in the search engine asked
        * ready `string` (values: true, false): task ready indicator
        * search_engine `string` (values: google, bing, google_mobile): google/bing/google_mobile
        * status `string` (values: ok, invalid): task status in terms of success

### rankSubmitRequest
* rankSubmitRequest `object`
  * priority `string` (values: low, high): The priority for the keyword jobs submitted. High priority costs double credits. Default value is low.
  * tasks **required** `array`: The keyword RANK jobs. Maximum 1000 jobs per a single request.
    * items [KeywordJobRank](#keywordjobrank)

### rankSubmitResponse
* Response for rank-submit request `object`: Describes the result of uploading an image resource
  * error_message `string`
  * response_code **required** `integer`: The request response_code.
  * tasks `array`
    * items [KeywordTask](#keywordtask)

### serpCollectResponse
* Response for serp-collect request `object`: Describes the result of uploading an image resource
  * tasks `array`
    * items `object`
      * task_id `object`
        * error_message `string`: error message in case task status is invalid
        * keyword `string`: keyword (search term)
        * localization_code `string` (values: us, uk, au, br, be_dutch, be_french, ca, de, es, ie, il, nl, sg, za, it, is, ch, fr, se, at, dk, nz, gr, no, in, ms, pl, hk, id, ru, ae, fi, pt, mx, tr, cl, jp, ar): A code for the localization, which is a combination of country and language
        * localization_zip `string`: option to localize the results per zip code
        * num_results `integer`: number of results found in SERP
        * organic_results `array`
          * items `object`
        * ready `string` (values: true, false): task ready indicator
        * search_engine `string`
        * status `string` (values: ok, invalid): task status in terms of success

### serpSubmitRequest
* serpSubmitRequest `object`
  * priority `string` (values: low, high): The priority for the keyword jobs submitted. High priority costs double credits. Default value is low.
  * tasks **required** `array`: The keyword SERP jobs. Maximum 1000 jobs per a single request.
    * items [KeywordJobSerp](#keywordjobserp)

### serpSubmitResponse
* Response for serp-submit request `object`: Describes the result of uploading an image resource
  * error_message `string`
  * response_code **required** `integer`: The request response_code.
  * tasks `array`
    * items [KeywordTask](#keywordtask)


