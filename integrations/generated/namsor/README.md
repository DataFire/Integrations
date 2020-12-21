# @datafire/namsor

Client library for NamSor API v2

## Installation and Usage
```bash
npm install --save @datafire/namsor
```
```js
let namsor = require('@datafire/namsor').create({
  api_key: ""
});

.then(data => {
  console.log(data);
});
```

## Description

NamSor API v2 : enpoints to process personal names (gender, cultural origin or ethnicity) in all alphabets or languages. Use GET methods for small tests, but prefer POST methods for higher throughput (batch processing of up to 100 names at a time). Need something you can't find here? We have many more features coming soon. Let us know, we'll do our best to add it! 

## Actions

### addCredits
Add usage credits to an API Key.


```js
namsor.addCredits({
  "apiKey": "",
  "usageCredits": 0,
  "userMessage": ""
}, context)
```

#### Input
* input `object`
  * apiKey **required** `string`
  * usageCredits **required** `integer`
  * userMessage **required** `string`

#### Output
* output [SystemMetricsOut](#systemmetricsout)

### anonymize
Activate/deactivate anonymization for a source.


```js
namsor.anonymize({
  "source": "",
  "anonymized": true
}, context)
```

#### Input
* input `object`
  * source **required** `string`
  * anonymized **required** `boolean`

#### Output
*Output schema unknown*

### availableServices
List of API services and usage cost in Units (default is 1=ONE Unit).


```js
namsor.availableServices(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [APIPlansOut](#apiplansout)

### apiStatus
Prints the current status of the classifiers.


```js
namsor.apiStatus(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [APIPlansOut](#apiplansout)

### apiUsage
Print current API usage.


```js
namsor.apiUsage(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [APIPeriodUsageOut](#apiperiodusageout)

### apiUsageHistory
Print historical API usage.


```js
namsor.apiUsageHistory(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [APIPeriodUsageOut](#apiperiodusageout)

### apiUsageHistoryAggregate
Print historical API usage (in an aggregated view, by service, by day/hour/min).


```js
namsor.apiUsageHistoryAggregate(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [APIPeriodUsageOut](#apiperiodusageout)

### availablePlans
List all available plans in the default currency (usd).


```js
namsor.availablePlans(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [APIPlansOut](#apiplansout)

### availablePlans_1
List all available plans in the user's preferred currency.


```js
namsor.availablePlans_1({
  "token": ""
}, context)
```

#### Input
* input `object`
  * token **required** `string`

#### Output
* output [APIPlansOut](#apiplansout)

### billingCurrencies
List possible currency options for billing (USD, EUR, GBP, ...)


```js
namsor.billingCurrencies(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [CurrenciesOut](#currenciesout)

### billingHistory
Read the history billing information (invoices paid via Stripe or manually).


```js
namsor.billingHistory({
  "token": ""
}, context)
```

#### Input
* input `object`
  * token **required** `string`

#### Output
* output [BillingHistoryOut](#billinghistoryout)

### billingInfo
Read the billing information (company name, address, phone, vat ID)


```js
namsor.billingInfo({
  "token": ""
}, context)
```

#### Input
* input `object`
  * token **required** `string`

#### Output
* output [BillingInfoInOut](#billinginfoinout)

### charge
Create a Stripe Customer, based on a payment card token (from secure StripeJS) and email.


```js
namsor.charge({}, context)
```

#### Input
* input `object`
  * body `object`
    * stripeEmail `string`
    * stripeToken `string`

#### Output
* output [APIKeyOut](#apikeyout)

### chineseNameCandidates
Identify Chinese name candidates, based on the romanized name ex. Wang Xiaoming


```js
namsor.chineseNameCandidates({
  "chineseSurnameLatin": "",
  "chineseGivenNameLatin": ""
}, context)
```

#### Input
* input `object`
  * chineseSurnameLatin **required** `string`
  * chineseGivenNameLatin **required** `string`

#### Output
* output [RomanizedNameOut](#romanizednameout)

### chineseNameCandidatesBatch
Identify Chinese name candidates, based on the romanized name (firstName = chineseGivenName; lastName=chineseSurname), ex. Wang Xiaoming


```js
namsor.chineseNameCandidatesBatch({}, context)
```

#### Input
* input `object`
  * body [BatchFirstLastNameIn](#batchfirstlastnamein)

#### Output
* output [BatchNameMatchCandidatesOut](#batchnamematchcandidatesout)

### chineseNameCandidatesGenderBatch
Identify Chinese name candidates, based on the romanized name (firstName = chineseGivenName; lastName=chineseSurname) ex. Wang Xiaoming.


```js
namsor.chineseNameCandidatesGenderBatch({}, context)
```

#### Input
* input `object`
  * body [BatchFirstLastNameIn](#batchfirstlastnamein)

#### Output
* output [BatchNameMatchCandidatesOut](#batchnamematchcandidatesout)

### chineseNameGenderCandidates
Identify Chinese name candidates, based on the romanized name ex. Wang Xiaoming - having a known gender ('male' or 'female')


```js
namsor.chineseNameGenderCandidates({
  "chineseSurnameLatin": "",
  "chineseGivenNameLatin": "",
  "knownGender": ""
}, context)
```

#### Input
* input `object`
  * chineseSurnameLatin **required** `string`
  * chineseGivenNameLatin **required** `string`
  * knownGender **required** `string`

#### Output
* output [RomanizedNameOut](#romanizednameout)

### chineseNameMatch
Return a score for matching Chinese name ex. 王晓明 with a romanized name ex. Wang Xiaoming


```js
namsor.chineseNameMatch({
  "chineseSurnameLatin": "",
  "chineseGivenNameLatin": "",
  "chineseName": ""
}, context)
```

#### Input
* input `object`
  * chineseSurnameLatin **required** `string`
  * chineseGivenNameLatin **required** `string`
  * chineseName **required** `string`

#### Output
* output [RomanizedNameOut](#romanizednameout)

### chineseNameMatchBatch
Identify Chinese name candidates, based on the romanized name (firstName = chineseGivenName; lastName=chineseSurname), ex. Wang Xiaoming


```js
namsor.chineseNameMatchBatch({}, context)
```

#### Input
* input `object`
  * body [BatchFirstLastNameIn](#batchfirstlastnamein)

#### Output
* output [BatchNameMatchCandidatesOut](#batchnamematchcandidatesout)

### corporateKey
Setting an API Key to a corporate status.


```js
namsor.corporateKey({
  "apiKey": "",
  "corporate": true
}, context)
```

#### Input
* input `object`
  * apiKey **required** `string`
  * corporate **required** `boolean`

#### Output
*Output schema unknown*

### country
[USES 10 UNITS PER NAME] Infer the likely country of residence of a personal full name, or one surname. Assumes names as they are in the country of residence OR the country of origin.


```js
namsor.country({
  "personalNameFull": ""
}, context)
```

#### Input
* input `object`
  * personalNameFull **required** `string`

#### Output
* output [PersonalNameGeoOut](#personalnamegeoout)

### countryBatch
[USES 10 UNITS PER NAME] Infer the likely country of residence of up to 100 personal full names, or surnames. Assumes names as they are in the country of residence OR the country of origin.


```js
namsor.countryBatch({}, context)
```

#### Input
* input `object`
  * body [BatchPersonalNameIn](#batchpersonalnamein)

#### Output
* output [BatchPersonalNameGeoOut](#batchpersonalnamegeoout)

### debugLevel
Update debug level for a classifier


```js
namsor.debugLevel({
  "logger": "",
  "level": ""
}, context)
```

#### Input
* input `object`
  * logger **required** `string`
  * level **required** `string`

#### Output
*Output schema unknown*

### diaspora
[USES 20 UNITS PER NAME] Infer the likely ethnicity/diaspora of a personal name, given a country of residence ISO2 code (ex. US, CA, AU, NZ etc.)


```js
namsor.diaspora({
  "countryIso2": "",
  "firstName": "",
  "lastName": ""
}, context)
```

#### Input
* input `object`
  * countryIso2 **required** `string`
  * firstName **required** `string`
  * lastName **required** `string`

#### Output
* output [FirstLastNameDiasporaedOut](#firstlastnamediasporaedout)

### diasporaBatch
[USES 20 UNITS PER NAME] Infer the likely ethnicity/diaspora of up to 100 personal names, given a country of residence ISO2 code (ex. US, CA, AU, NZ etc.)


```js
namsor.diasporaBatch({}, context)
```

#### Input
* input `object`
  * body [BatchFirstLastNameGeoIn](#batchfirstlastnamegeoin)

#### Output
* output [BatchFirstLastNameDiasporaedOut](#batchfirstlastnamediasporaedout)

### flush
Flush counters.


```js
namsor.flush(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### gender
Infer the likely gender of a name.


```js
namsor.gender({
  "firstName": "",
  "lastName": ""
}, context)
```

#### Input
* input `object`
  * firstName **required** `string`
  * lastName **required** `string`

#### Output
* output [FirstLastNameGenderedOut](#firstlastnamegenderedout)

### genderBatch
Infer the likely gender of up to 100 names, detecting automatically the cultural context.


```js
namsor.genderBatch({}, context)
```

#### Input
* input `object`
  * body [BatchFirstLastNameIn](#batchfirstlastnamein)

#### Output
* output [BatchFirstLastNameGenderedOut](#batchfirstlastnamegenderedout)

### genderChineseName
Infer the likely gender of a Chinese full name ex. 王晓明


```js
namsor.genderChineseName({
  "chineseName": ""
}, context)
```

#### Input
* input `object`
  * chineseName **required** `string`

#### Output
* output [PersonalNameGenderedOut](#personalnamegenderedout)

### genderChineseNameBatch
Infer the likely gender of up to 100 full names ex. 王晓明


```js
namsor.genderChineseNameBatch({}, context)
```

#### Input
* input `object`
  * body [BatchPersonalNameIn](#batchpersonalnamein)

#### Output
* output [BatchPersonalNameGenderedOut](#batchpersonalnamegenderedout)

### genderChineseNamePinyin
Infer the likely gender of a Chinese name in LATIN (Pinyin).


```js
namsor.genderChineseNamePinyin({
  "chineseSurnameLatin": "",
  "chineseGivenNameLatin": ""
}, context)
```

#### Input
* input `object`
  * chineseSurnameLatin **required** `string`
  * chineseGivenNameLatin **required** `string`

#### Output
* output [FirstLastNameGenderedOut](#firstlastnamegenderedout)

### genderChineseNamePinyinBatch
Infer the likely gender of up to 100 Chinese names in LATIN (Pinyin).


```js
namsor.genderChineseNamePinyinBatch({}, context)
```

#### Input
* input `object`
  * body [BatchFirstLastNameIn](#batchfirstlastnamein)

#### Output
* output [BatchFirstLastNameGenderedOut](#batchfirstlastnamegenderedout)

### genderFull
Infer the likely gender of a full name, ex. John H. Smith


```js
namsor.genderFull({
  "fullName": ""
}, context)
```

#### Input
* input `object`
  * fullName **required** `string`

#### Output
* output [PersonalNameGenderedOut](#personalnamegenderedout)

### genderFullBatch
Infer the likely gender of up to 100 full names, detecting automatically the cultural context.


```js
namsor.genderFullBatch({}, context)
```

#### Input
* input `object`
  * body [BatchPersonalNameIn](#batchpersonalnamein)

#### Output
* output [BatchPersonalNameGenderedOut](#batchpersonalnamegenderedout)

### genderFullGeo
Infer the likely gender of a full name, given a local context (ISO2 country code).


```js
namsor.genderFullGeo({
  "fullName": "",
  "countryIso2": ""
}, context)
```

#### Input
* input `object`
  * fullName **required** `string`
  * countryIso2 **required** `string`

#### Output
* output [PersonalNameGenderedOut](#personalnamegenderedout)

### genderFullGeoBatch
Infer the likely gender of up to 100 full names, with a given cultural context (country ISO2 code).


```js
namsor.genderFullGeoBatch({}, context)
```

#### Input
* input `object`
  * body [BatchPersonalNameGeoIn](#batchpersonalnamegeoin)

#### Output
* output [BatchPersonalNameGenderedOut](#batchpersonalnamegenderedout)

### genderGeo
Infer the likely gender of a name, given a local context (ISO2 country code).


```js
namsor.genderGeo({
  "firstName": "",
  "lastName": "",
  "countryIso2": ""
}, context)
```

#### Input
* input `object`
  * firstName **required** `string`
  * lastName **required** `string`
  * countryIso2 **required** `string`

#### Output
* output [FirstLastNameGenderedOut](#firstlastnamegenderedout)

### genderGeoBatch
Infer the likely gender of up to 100 names, each given a local context (ISO2 country code).


```js
namsor.genderGeoBatch({}, context)
```

#### Input
* input `object`
  * body [BatchFirstLastNameGeoIn](#batchfirstlastnamegeoin)

#### Output
* output [BatchFirstLastNameGenderedOut](#batchfirstlastnamegenderedout)

### genderJapaneseNamePinyin
Infer the likely gender of a Japanese name in LATIN (Pinyin).


```js
namsor.genderJapaneseNamePinyin({
  "japaneseSurname": "",
  "japaneseGivenName": ""
}, context)
```

#### Input
* input `object`
  * japaneseSurname **required** `string`
  * japaneseGivenName **required** `string`

#### Output
* output [FirstLastNameGenderedOut](#firstlastnamegenderedout)

### genderJapaneseNamePinyinBatch
Infer the likely gender of up to 100 Japanese names in LATIN (Pinyin).


```js
namsor.genderJapaneseNamePinyinBatch({}, context)
```

#### Input
* input `object`
  * body [BatchFirstLastNameIn](#batchfirstlastnamein)

#### Output
* output [BatchFirstLastNameGenderedOut](#batchfirstlastnamegenderedout)

### genderJapaneseNameFull
Infer the likely gender of a Japanese full name ex. 王晓明


```js
namsor.genderJapaneseNameFull({
  "japaneseName": ""
}, context)
```

#### Input
* input `object`
  * japaneseName **required** `string`

#### Output
* output [PersonalNameGenderedOut](#personalnamegenderedout)

### genderJapaneseNameFullBatch
Infer the likely gender of up to 100 full names


```js
namsor.genderJapaneseNameFullBatch({}, context)
```

#### Input
* input `object`
  * body [BatchPersonalNameIn](#batchpersonalnamein)

#### Output
* output [BatchPersonalNameGenderedOut](#batchpersonalnamegenderedout)

### invalidateCache
Invalidate system caches.


```js
namsor.invalidateCache(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### japaneseNameKanjiCandidates
Identify japanese name candidates in KANJI, based on the romanized name ex. Yamamoto Sanae


```js
namsor.japaneseNameKanjiCandidates({
  "japaneseSurnameLatin": "",
  "japaneseGivenNameLatin": ""
}, context)
```

#### Input
* input `object`
  * japaneseSurnameLatin **required** `string`
  * japaneseGivenNameLatin **required** `string`

#### Output
* output [RomanizedNameOut](#romanizednameout)

### japaneseNameKanjiCandidatesBatch
Identify japanese name candidates in KANJI, based on the romanized name (firstName = japaneseGivenName; lastName=japaneseSurname), ex. Yamamoto Sanae


```js
namsor.japaneseNameKanjiCandidatesBatch({}, context)
```

#### Input
* input `object`
  * body [BatchFirstLastNameIn](#batchfirstlastnamein)

#### Output
* output [BatchNameMatchCandidatesOut](#batchnamematchcandidatesout)

### japaneseNameLatinCandidates
Romanize japanese name, based on the name in Kanji.


```js
namsor.japaneseNameLatinCandidates({
  "japaneseSurnameKanji": "",
  "japaneseGivenNameKanji": ""
}, context)
```

#### Input
* input `object`
  * japaneseSurnameKanji **required** `string`
  * japaneseGivenNameKanji **required** `string`

#### Output
* output [RomanizedNameOut](#romanizednameout)

### japaneseNameLatinCandidatesBatch
Romanize japanese names, based on the name in KANJI


```js
namsor.japaneseNameLatinCandidatesBatch({}, context)
```

#### Input
* input `object`
  * body [BatchFirstLastNameIn](#batchfirstlastnamein)

#### Output
* output [BatchNameMatchCandidatesOut](#batchnamematchcandidatesout)

### japaneseNameMatch
Return a score for matching Japanese name in KANJI ex. 山本 早苗 with a romanized name ex. Yamamoto Sanae


```js
namsor.japaneseNameMatch({
  "japaneseSurnameLatin": "",
  "japaneseGivenNameLatin": "",
  "japaneseName": ""
}, context)
```

#### Input
* input `object`
  * japaneseSurnameLatin **required** `string`
  * japaneseGivenNameLatin **required** `string`
  * japaneseName **required** `string`

#### Output
* output [RomanizedNameOut](#romanizednameout)

### japaneseNameMatchBatch
Return a score for matching a list of Japanese names in KANJI ex. 山本 早苗 with romanized names ex. Yamamoto Sanae


```js
namsor.japaneseNameMatchBatch({}, context)
```

#### Input
* input `object`
  * body [BatchFirstLastNameIn](#batchfirstlastnamein)

#### Output
* output [BatchNameMatchCandidatesOut](#batchnamematchcandidatesout)

### japaneseNameMatchFeedbackLoop
[CREDITS 1 UNIT] Feedback loop to better perform matching Japanese name in KANJI ex. 山本 早苗 with a romanized name ex. Yamamoto Sanae


```js
namsor.japaneseNameMatchFeedbackLoop({
  "japaneseSurnameLatin": "",
  "japaneseGivenNameLatin": "",
  "japaneseName": ""
}, context)
```

#### Input
* input `object`
  * japaneseSurnameLatin **required** `string`
  * japaneseGivenNameLatin **required** `string`
  * japaneseName **required** `string`

#### Output
* output [RomanizedNameOut](#romanizednameout)

### learnable
Activate/deactivate learning from a source.


```js
namsor.learnable({
  "source": "",
  "learnable": true
}, context)
```

#### Input
* input `object`
  * source **required** `string`
  * learnable **required** `boolean`

#### Output
*Output schema unknown*

### namsorCounter
Get the overall API counter


```js
namsor.namsorCounter(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [SoftwareVersionOut](#softwareversionout)

### origin
[USES 10 UNITS PER NAME] Infer the likely country of origin of a personal name. Assumes names as they are in the country of origin. For US, CA, AU, NZ and other melting-pots : use 'diaspora' instead.


```js
namsor.origin({
  "firstName": "",
  "lastName": ""
}, context)
```

#### Input
* input `object`
  * firstName **required** `string`
  * lastName **required** `string`

#### Output
* output [FirstLastNameOriginedOut](#firstlastnameoriginedout)

### originBatch
[USES 10 UNITS PER NAME] Infer the likely country of origin of up to 100 names, detecting automatically the cultural context.


```js
namsor.originBatch({}, context)
```

#### Input
* input `object`
  * body [BatchFirstLastNameIn](#batchfirstlastnamein)

#### Output
* output [BatchFirstLastNameOriginedOut](#batchfirstlastnameoriginedout)

### parseChineseName
Infer the likely first/last name structure of a name, ex. 王晓明 -> 王(surname) 晓明(given name)


```js
namsor.parseChineseName({
  "chineseName": ""
}, context)
```

#### Input
* input `object`
  * chineseName **required** `string`

#### Output
* output [PersonalNameParsedOut](#personalnameparsedout)

### parseChineseNameBatch
Infer the likely first/last name structure of a name, ex. 王晓明 -> 王(surname) 晓明(given name).


```js
namsor.parseChineseNameBatch({}, context)
```

#### Input
* input `object`
  * body [BatchPersonalNameIn](#batchpersonalnamein)

#### Output
* output [BatchPersonalNameParsedOut](#batchpersonalnameparsedout)

### parseJapaneseName
Infer the likely first/last name structure of a name, ex. 山本 早苗 or Yamamoto Sanae


```js
namsor.parseJapaneseName({
  "japaneseName": ""
}, context)
```

#### Input
* input `object`
  * japaneseName **required** `string`

#### Output
* output [PersonalNameParsedOut](#personalnameparsedout)

### parseJapaneseNameBatch
Infer the likely first/last name structure of a name, ex. 山本 早苗 or Yamamoto Sanae 


```js
namsor.parseJapaneseNameBatch({}, context)
```

#### Input
* input `object`
  * body [BatchPersonalNameIn](#batchpersonalnamein)

#### Output
* output [BatchPersonalNameParsedOut](#batchpersonalnameparsedout)

### parseName
Infer the likely first/last name structure of a name, ex. John Smith or SMITH, John or SMITH; John. 


```js
namsor.parseName({
  "nameFull": ""
}, context)
```

#### Input
* input `object`
  * nameFull **required** `string`

#### Output
* output [PersonalNameParsedOut](#personalnameparsedout)

### parseNameGeo
Infer the likely first/last name structure of a name, ex. John Smith or SMITH, John or SMITH; John. For better accuracy, provide a geographic context.


```js
namsor.parseNameGeo({
  "nameFull": "",
  "countryIso2": ""
}, context)
```

#### Input
* input `object`
  * nameFull **required** `string`
  * countryIso2 **required** `string`

#### Output
* output [PersonalNameParsedOut](#personalnameparsedout)

### parseNameBatch
Infer the likely first/last name structure of a name, ex. John Smith or SMITH, John or SMITH; John.


```js
namsor.parseNameBatch({}, context)
```

#### Input
* input `object`
  * body [BatchPersonalNameIn](#batchpersonalnamein)

#### Output
* output [BatchPersonalNameParsedOut](#batchpersonalnameparsedout)

### parseNameGeoBatch
Infer the likely first/last name structure of a name, ex. John Smith or SMITH, John or SMITH; John. Giving a local context improves precision. 


```js
namsor.parseNameGeoBatch({}, context)
```

#### Input
* input `object`
  * body [BatchPersonalNameGeoIn](#batchpersonalnamegeoin)

#### Output
* output [BatchPersonalNameParsedOut](#batchpersonalnameparsedout)

### parsedGenderBatch
Infer the likely gender of up to 100 fully parsed names, detecting automatically the cultural context.


```js
namsor.parsedGenderBatch({}, context)
```

#### Input
* input `object`
  * body [BatchParsedFullNameIn](#batchparsedfullnamein)

#### Output
* output [BatchFirstLastNameGenderedOut](#batchfirstlastnamegenderedout)

### parsedGenderGeoBatch
Infer the likely gender of up to 100 fully parsed names, detecting automatically the cultural context.


```js
namsor.parsedGenderGeoBatch({}, context)
```

#### Input
* input `object`
  * body [BatchParsedFullNameGeoIn](#batchparsedfullnamegeoin)

#### Output
* output [BatchFirstLastNameGenderedOut](#batchfirstlastnamegenderedout)

### paymentInfo
Get the Stripe payment information associated with the current google auth session token.


```js
namsor.paymentInfo({
  "token": ""
}, context)
```

#### Input
* input `object`
  * token **required** `string`

#### Output
* output [APIKeyOut](#apikeyout)

### phoneCode
[USES 11 UNITS PER NAME] Infer the likely country and phone prefix, given a personal name and formatted / unformatted phone number.


```js
namsor.phoneCode({
  "firstName": "",
  "lastName": "",
  "phoneNumber": ""
}, context)
```

#### Input
* input `object`
  * firstName **required** `string`
  * lastName **required** `string`
  * phoneNumber **required** `string`

#### Output
* output [FirstLastNamePhoneCodedOut](#firstlastnamephonecodedout)

### phoneCodeBatch
[USES 11 UNITS PER NAME] Infer the likely country and phone prefix, of up to 100 personal names, detecting automatically the local context given a name and formatted / unformatted phone number.


```js
namsor.phoneCodeBatch({}, context)
```

#### Input
* input `object`
  * body [BatchFirstLastNamePhoneNumberIn](#batchfirstlastnamephonenumberin)

#### Output
* output [BatchFirstLastNamePhoneCodedOut](#batchfirstlastnamephonecodedout)

### phoneCodeGeo
[USES 11 UNITS PER NAME] Infer the likely phone prefix, given a personal name and formatted / unformatted phone number, with a local context (ISO2 country of residence).


```js
namsor.phoneCodeGeo({
  "firstName": "",
  "lastName": "",
  "phoneNumber": "",
  "countryIso2": ""
}, context)
```

#### Input
* input `object`
  * firstName **required** `string`
  * lastName **required** `string`
  * phoneNumber **required** `string`
  * countryIso2 **required** `string`

#### Output
* output [FirstLastNamePhoneCodedOut](#firstlastnamephonecodedout)

### phoneCodeGeoBatch
[USES 11 UNITS PER NAME] Infer the likely country and phone prefix, of up to 100 personal names, with a local context (ISO2 country of residence).


```js
namsor.phoneCodeGeoBatch({}, context)
```

#### Input
* input `object`
  * body [BatchFirstLastNamePhoneNumberGeoIn](#batchfirstlastnamephonenumbergeoin)

#### Output
* output [BatchFirstLastNamePhoneCodedOut](#batchfirstlastnamephonecodedout)

### phoneCodeGeoFeedbackLoop
[CREDITS 1 UNIT] Feedback loop to better infer the likely phone prefix, given a personal name and formatted / unformatted phone number, with a local context (ISO2 country of residence).


```js
namsor.phoneCodeGeoFeedbackLoop({
  "firstName": "",
  "lastName": "",
  "phoneNumber": "",
  "phoneNumberE164": "",
  "countryIso2": ""
}, context)
```

#### Input
* input `object`
  * firstName **required** `string`
  * lastName **required** `string`
  * phoneNumber **required** `string`
  * phoneNumberE164 **required** `string`
  * countryIso2 **required** `string`

#### Output
* output [FirstLastNamePhoneCodedOut](#firstlastnamephonecodedout)

### pinyinChineseName
Romanize the Chinese name to Pinyin, ex. 王晓明 -> Wang (surname) Xiaoming (given name)


```js
namsor.pinyinChineseName({
  "chineseName": ""
}, context)
```

#### Input
* input `object`
  * chineseName **required** `string`

#### Output
* output [PersonalNameParsedOut](#personalnameparsedout)

### pinyinChineseNameBatch
Romanize a list of Chinese name to Pinyin, ex. 王晓明 -> Wang (surname) Xiaoming (given name).


```js
namsor.pinyinChineseNameBatch({}, context)
```

#### Input
* input `object`
  * body [BatchPersonalNameIn](#batchpersonalnamein)

#### Output
* output [BatchPersonalNameParsedOut](#batchpersonalnameparsedout)

### procureKey
Procure an API Key (sent via Email), based on an auth token. Keep your API Key secret.


```js
namsor.procureKey({
  "token": ""
}, context)
```

#### Input
* input `object`
  * token **required** `string`

#### Output
* output [APIKeyOut](#apikeyout)

### redeployUI
Redeploy UI from current dev branch.


```js
namsor.redeployUI(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### redeployUI_1
Redeploy UI from current dev branch.


```js
namsor.redeployUI_1({
  "live": true
}, context)
```

#### Input
* input `object`
  * live **required** `boolean`

#### Output
*Output schema unknown*

### removeUserAccount
Remove the user account.


```js
namsor.removeUserAccount({
  "token": ""
}, context)
```

#### Input
* input `object`
  * token **required** `string`

#### Output
* output [APIPlanSubscriptionOut](#apiplansubscriptionout)

### removeUserAccountOnBehalf
Remove (on behalf) a user account.


```js
namsor.removeUserAccountOnBehalf({
  "apiKey": ""
}, context)
```

#### Input
* input `object`
  * apiKey **required** `string`

#### Output
* output [APIPlanSubscriptionOut](#apiplansubscriptionout)

### shutdown
Stop learning and shutdown system.


```js
namsor.shutdown(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### softwareVersion
Get the current software version


```js
namsor.softwareVersion(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [SoftwareVersionOut](#softwareversionout)

### sourceStats
Print basic source statistics.


```js
namsor.sourceStats({
  "source": ""
}, context)
```

#### Input
* input `object`
  * source **required** `string`

#### Output
* output [SystemMetricsOut](#systemmetricsout)

### stats
Print basic system statistics.


```js
namsor.stats(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [SystemMetricsOut](#systemmetricsout)

### stripeConnect
Connects a Stripe Account.


```js
namsor.stripeConnect({}, context)
```

#### Input
* input `object`
  * scope `string`
  * code `string`
  * error `string`
  * error_description `string`

#### Output
*Output schema unknown*

### subscribePlan
Subscribe to a give API plan, using the user's preferred or default currency.


```js
namsor.subscribePlan({
  "planName": "",
  "token": ""
}, context)
```

#### Input
* input `object`
  * planName **required** `string`
  * token **required** `string`

#### Output
* output [APIPlanSubscriptionOut](#apiplansubscriptionout)

### subscribePlanOnBehalf
Subscribe to a give API plan, using the user's preferred or default currency (admin only).


```js
namsor.subscribePlanOnBehalf({
  "planName": "",
  "apiKey": ""
}, context)
```

#### Input
* input `object`
  * planName **required** `string`
  * apiKey **required** `string`

#### Output
* output [APIPlanSubscriptionOut](#apiplansubscriptionout)

### taxonomyClasses
Print the taxonomy classes valid for the given classifier.


```js
namsor.taxonomyClasses({
  "classifierName": ""
}, context)
```

#### Input
* input `object`
  * classifierName **required** `string`

#### Output
* output [APIPlansOut](#apiplansout)

### updateBillingInfo
Sets or update the billing information (company name, address, phone, vat ID)


```js
namsor.updateBillingInfo({
  "token": ""
}, context)
```

#### Input
* input `object`
  * token **required** `string`
  * body [BillingInfoInOut](#billinginfoinout)

#### Output
* output [BillingInfoInOut](#billinginfoinout)

### updateLimit
Modifies the hard/soft limit on the API plan's overages (default is 0$ soft limit).


```js
namsor.updateLimit({
  "usageLimit": 0,
  "hardOrSoft": true,
  "token": ""
}, context)
```

#### Input
* input `object`
  * usageLimit **required** `integer`
  * hardOrSoft **required** `boolean`
  * token **required** `string`

#### Output
* output [APIPeriodUsageOut](#apiperiodusageout)

### updatePaymentDefault
Update the default Stripe card associated with the current google auth session token.


```js
namsor.updatePaymentDefault({
  "defautSourceId": "",
  "token": ""
}, context)
```

#### Input
* input `object`
  * defautSourceId **required** `string`
  * token **required** `string`

#### Output
* output [APIKeyOut](#apikeyout)

### usRaceEthnicity
[USES 10 UNITS PER NAME] Infer a US resident's likely race/ethnicity according to US Census taxonomy W_NL (white, non latino), HL (hispano latino),  A (asian, non latino), B_NL (black, non latino).


```js
namsor.usRaceEthnicity({
  "firstName": "",
  "lastName": ""
}, context)
```

#### Input
* input `object`
  * firstName **required** `string`
  * lastName **required** `string`

#### Output
* output [FirstLastNameUSRaceEthnicityOut](#firstlastnameusraceethnicityout)

### usRaceEthnicityBatch
[USES 10 UNITS PER NAME] Infer up-to 100 US resident's likely race/ethnicity according to US Census taxonomy.


```js
namsor.usRaceEthnicityBatch({}, context)
```

#### Input
* input `object`
  * body [BatchFirstLastNameGeoIn](#batchfirstlastnamegeoin)

#### Output
* output [BatchFirstLastNameUSRaceEthnicityOut](#batchfirstlastnameusraceethnicityout)

### usRaceEthnicityZIP5
[USES 10 UNITS PER NAME] Infer a US resident's likely race/ethnicity according to US Census taxonomy, using (optional) ZIP5 code info. Output is W_NL (white, non latino), HL (hispano latino),  A (asian, non latino), B_NL (black, non latino).


```js
namsor.usRaceEthnicityZIP5({
  "firstName": "",
  "lastName": "",
  "zip5Code": ""
}, context)
```

#### Input
* input `object`
  * firstName **required** `string`
  * lastName **required** `string`
  * zip5Code **required** `string`

#### Output
* output [FirstLastNameUSRaceEthnicityOut](#firstlastnameusraceethnicityout)

### usZipRaceEthnicityBatch
[USES 10 UNITS PER NAME] Infer up-to 100 US resident's likely race/ethnicity according to US Census taxonomy, with (optional) ZIP code.


```js
namsor.usZipRaceEthnicityBatch({}, context)
```

#### Input
* input `object`
  * body [BatchFirstLastNameGeoZippedIn](#batchfirstlastnamegeozippedin)

#### Output
* output [BatchFirstLastNameUSRaceEthnicityOut](#batchfirstlastnameusraceethnicityout)

### userInfo
Get the user profile associated with the current google auth session token.


```js
namsor.userInfo({
  "token": ""
}, context)
```

#### Input
* input `object`
  * token **required** `string`

#### Output
* output [APIKeyOut](#apikeyout)

### verifyEmail
Verifies an email, based on token sent to that email


```js
namsor.verifyEmail({
  "emailToken": ""
}, context)
```

#### Input
* input `object`
  * emailToken **required** `string`

#### Output
* output [APIKeyOut](#apikeyout)

### verifyRemoveEmail
Verifies an email, based on token sent to that email


```js
namsor.verifyRemoveEmail({
  "emailToken": ""
}, context)
```

#### Input
* input `object`
  * emailToken **required** `string`

#### Output
* output [APIKeyOut](#apikeyout)

### vet
Vetting of a source.


```js
namsor.vet({
  "source": "",
  "vetted": true
}, context)
```

#### Input
* input `object`
  * source **required** `string`
  * vetted **required** `boolean`

#### Output
*Output schema unknown*



## Definitions

### APIBillingPeriodUsageOut
* APIBillingPeriodUsageOut `object`
  * apiKey `string`
  * billingStatus `string`
  * hardLimit `integer`
  * periodEnded `integer`
  * periodStarted `integer`
  * softLimit `integer`
  * stripeCurrentPeriodEnd `integer`
  * stripeCurrentPeriodStart `integer`
  * subscriptionStarted `integer`
  * usage `integer`

### APIClassifierOut
* APIClassifierOut `object`
  * classifierName `string`
  * learning `boolean`
  * probabilityCalibrated `boolean`
  * serving `boolean`
  * shuttingDown `boolean`

### APIClassifierTaxonomyOut
* APIClassifierTaxonomyOut `object`
  * classifierName `string`
  * taxonomyClasses `array`
    * items `string`

### APIClassifiersStatusOut
* APIClassifiersStatusOut `object`
  * classifiers `array`
    * items [APIClassifierOut](#apiclassifierout)
  * softwareVersion [SoftwareVersionOut](#softwareversionout)

### APICounterV2Out
* APICounterV2Out `object`
  * apiKey [APIKeyOut](#apikeyout)
  * apiService `string`
  * createdDateTime `integer`
  * lastFlushedDateTime `integer`
  * lastUsedDateTime `integer`
  * serviceFeaturesUsage `object`
  * totalUsage `integer`

### APIKeyOut
* APIKeyOut `object`
  * admin `boolean`
  * anonymized `boolean`
  * apiKey `string`
  * corporate `boolean`
  * disabled `boolean`
  * learnable `boolean`
  * partner `boolean`
  * striped `boolean`
  * userId `string`
  * vetted `boolean`

### APIPeriodUsageOut
* APIPeriodUsageOut `object`
  * billingPeriod [APIBillingPeriodUsageOut](#apibillingperiodusageout)
  * overageCurrency `string`
  * overageExclTax `number`
  * overageInclTax `number`
  * overageQuantity `integer`
  * subscription [APIPlanSubscriptionOut](#apiplansubscriptionout)

### APIPlanOut
* APIPlanOut `object`
  * planName `string`
  * planQuota `integer`
  * price `number`
  * priceOverage `number`

### APIPlanSubscriptionOut
* APIPlanSubscriptionOut `object`
  * apiKey `string`
  * currency `string`
  * currencyFactor `number`
  * planBaseFeesKey `string`
  * planEnded `integer`
  * planName `string`
  * planQuota `integer`
  * planStarted `integer`
  * planStatus `string`
  * price `number`
  * priceOverage `number`
  * priceOverageUSD `number`
  * priceUSD `number`
  * priorPlanStarted `integer`
  * stripeCustomerId `string`
  * stripeStatus `string`
  * stripeSubscription `string`
  * taxRate `number`
  * userId `string`

### APIPlansOut
* APIPlansOut `object`
  * currencyIso3 `string`
  * currencySymbol `string`
  * plans `array`
    * items [APIPlanOut](#apiplanout)
  * usageRatioForDupplicates `integer`

### APIServiceOut
* APIServiceOut `object`
  * costInUnits `integer`
  * serviceGroup `string`
  * serviceName `string`

### APIServicesOut
* APIServicesOut `object`
  * apiServices `array`
    * items [APIServiceOut](#apiserviceout)

### APIUsageAggregatedOut
* APIUsageAggregatedOut `object`
  * colHeaders `array`
    * items `string`
  * data `array`
    * items `array`
      * items `integer`
  * historyTruncated `boolean`
  * periodEnd `integer`
  * periodStart `integer`
  * rowHeaders `array`
    * items `string`
  * timeUnit `string`
  * totalUsage `integer`

### BatchFirstLastNameDiasporaedOut
* BatchFirstLastNameDiasporaedOut `object`: Represents the output of inferring the LIKELY ethnicity from a personal name, given an country of residence.
  * personalNames `array`
    * items [FirstLastNameDiasporaedOut](#firstlastnamediasporaedout)

### BatchFirstLastNameGenderIn
* BatchFirstLastNameGenderIn `object`
  * personalNames `array`
    * items [FirstLastNameGenderIn](#firstlastnamegenderin)

### BatchFirstLastNameGenderedOut
* BatchFirstLastNameGenderedOut `object`: Represents the output of inferring the LIKELY gender from a list of personal names.
  * personalNames `array`
    * items [FirstLastNameGenderedOut](#firstlastnamegenderedout)

### BatchFirstLastNameGeoIn
* BatchFirstLastNameGeoIn `object`
  * personalNames `array`
    * items [FirstLastNameGeoIn](#firstlastnamegeoin)

### BatchFirstLastNameGeoZippedIn
* BatchFirstLastNameGeoZippedIn `object`
  * personalNames `array`
    * items [FirstLastNameGeoZippedIn](#firstlastnamegeozippedin)

### BatchFirstLastNameIn
* BatchFirstLastNameIn `object`
  * personalNames `array`
    * items [FirstLastNameIn](#firstlastnamein)

### BatchFirstLastNameOriginedOut
* BatchFirstLastNameOriginedOut `object`: Represents the output of inferring the LIKELY origin from a list of personal names.
  * personalNames `array`
    * items [FirstLastNameOriginedOut](#firstlastnameoriginedout)

### BatchFirstLastNamePhoneCodedOut
* BatchFirstLastNamePhoneCodedOut `object`: Represents the output of inferring the LIKELY country and phone code of personal names+phones.
  * personalNamesWithPhoneNumbers `array`
    * items [FirstLastNamePhoneCodedOut](#firstlastnamephonecodedout)

### BatchFirstLastNamePhoneNumberGeoIn
* BatchFirstLastNamePhoneNumberGeoIn `object`
  * personalNamesWithPhoneNumbers `array`
    * items [FirstLastNamePhoneNumberGeoIn](#firstlastnamephonenumbergeoin)

### BatchFirstLastNamePhoneNumberIn
* BatchFirstLastNamePhoneNumberIn `object`
  * personalNamesWithPhoneNumbers `array`
    * items [FirstLastNamePhoneNumberIn](#firstlastnamephonenumberin)

### BatchFirstLastNameUSRaceEthnicityOut
* BatchFirstLastNameUSRaceEthnicityOut `object`: Represents the output of inferring the LIKELY US 'race/ethnicity' from a personal name, given US country of residence and (optionally) a ZIP5 code.
  * personalNames `array`
    * items [FirstLastNameUSRaceEthnicityOut](#firstlastnameusraceethnicityout)

### BatchMatchPersonalFirstLastNameIn
* BatchMatchPersonalFirstLastNameIn `object`
  * personalNames `array`
    * items [MatchPersonalFirstLastNameIn](#matchpersonalfirstlastnamein)

### BatchNameMatchCandidatesOut
* BatchNameMatchCandidatesOut `object`
  * namesAndMatchCandidates `array`
    * items [NameMatchCandidatesOut](#namematchcandidatesout)

### BatchNameMatchedOut
* BatchNameMatchedOut `object`
  * matchedNames `array`
    * items [NameMatchedOut](#namematchedout)

### BatchParsedFullNameGeoIn
* BatchParsedFullNameGeoIn `object`
  * personalNames `array`
    * items [ParsedFullNameGeoIn](#parsedfullnamegeoin)

### BatchParsedFullNameIn
* BatchParsedFullNameIn `object`
  * personalNames `array`
    * items [ParsedFullNameIn](#parsedfullnamein)

### BatchPersonalNameGenderedOut
* BatchPersonalNameGenderedOut `object`
  * personalNames `array`
    * items [PersonalNameGenderedOut](#personalnamegenderedout)

### BatchPersonalNameGeoIn
* BatchPersonalNameGeoIn `object`
  * personalNames `array`
    * items [PersonalNameGeoIn](#personalnamegeoin)

### BatchPersonalNameGeoOut
* BatchPersonalNameGeoOut `object`
  * personalNames `array`
    * items [PersonalNameGeoOut](#personalnamegeoout)

### BatchPersonalNameIn
* BatchPersonalNameIn `object`
  * personalNames `array`
    * items [PersonalNameIn](#personalnamein)

### BatchPersonalNameParsedOut
* BatchPersonalNameParsedOut `object`
  * personalNames `array`
    * items [PersonalNameParsedOut](#personalnameparsedout)

### BillingHistoryOut
* BillingHistoryOut `object`
  * corporateInvoices `array`
    * items [InvoiceOut](#invoiceout)
  * stripeInvoices `array`
    * items [InvoiceOut](#invoiceout)

### BillingInfoInOut
* BillingInfoInOut `object`
  * addressCity `string`
  * addressCountry `string`
  * addressLine1 `string`
  * addressLine2 `string`
  * addressPostalCode `string`
  * addressState `string`
  * billingEmail `string`
  * customerName `string`
  * customerPhone `string`
  * preferredCurrency `string`
  * vatID `string`

### CacheMetricsOut
* CacheMetricsOut `object`: Simple metrics system caches
  * cacheName `string`
  * cacheStats `string`

### ClassifierMetricsOut
* ClassifierMetricsOut `object`: Simple metrics on a classifier
  * aiNonVettedEstimatePrecision `number`
  * aiNonVettedEstimateRecall `number`
  * aiNonVettedEstimateTotal `integer`
  * aiNonVettedExpectedClassMetrics `array`
    * items [ExpectedClassMetricsOut](#expectedclassmetricsout)
  * aiNonVettedLearnTotal `integer`
  * aiStartTime `integer`
  * aiVettedEstimatePrecision `number`
  * aiVettedEstimateRecall `number`
  * aiVettedEstimateTotal `integer`
  * aiVettedExpectedClassMetrics `array`
    * items [ExpectedClassMetricsOut](#expectedclassmetricsout)
  * aiVettedLearnTotal `integer`
  * bufferSize `integer`
  * classifierName `string`
  * classifyDurationsCurrent `number`
  * classifyDurationsSummary `number`
  * factKeysSize `integer`
  * factsLearned `integer`
  * featuresSize `integer`
  * hostAddress `string`
  * learnDurationsCurrent `number`
  * learnDurationsSummary `number`
  * learnQueueSize `integer`
  * metricTimeStamp `integer`
  * preClassifyQueueSize `integer`
  * softwareVersion `string`

### CurrenciesOut
* CurrenciesOut `object`
  * currenciesIso3 `array`
    * items `string`

### DeployUIOut
* DeployUIOut `object`
  * errorMessage `string`
  * succeeded `boolean`

### ExpectedClassMetricsOut
* ExpectedClassMetricsOut `object`: Simple metrics on a classifier, for a given expected class
  * aiEstimatePrecision `number`
  * aiEstimateRecall `number`
  * aiEstimateTotal `integer`
  * aiLearnTotal `integer`
  * classifierName `string`
  * expectedClass `string`

### FeedbackLoopOut
* FeedbackLoopOut `object`
  * feedbackCredits `integer`

### FirstLastNameDiasporaedOut
* FirstLastNameDiasporaedOut `object`: Represents the output of inferring the LIKELY ethnicity from a personal name, given an country of residence.
  * countryIso2 `string`
  * ethnicitiesTop `array`: List ethnicities (top 10)
    * items `string`: List ethnicities (top 10)
  * ethnicity `string`
  * ethnicityAlt `string`
  * firstName `string`
  * id `string`
  * lastName `string`
  * lifted `boolean`
  * score `number`: Compatibility to NamSor_v1 Origin score value

### FirstLastNameGenderIn
* FirstLastNameGenderIn `object`
  * firstName `string`
  * gender `string`
  * id `string`
  * lastName `string`

### FirstLastNameGenderedOut
* FirstLastNameGenderedOut `object`: Represents the output of inferring the LIKELY gender from a personal name.
  * firstName `string`
  * genderScale `number`: Compatibility to NamSor_v1 Gender Scale M[-1..U..+1]F value
  * id `string`
  * lastName `string`
  * likelyGender `string` (values: male, female, unknown): Most likely gender
  * probabilityCalibrated `number`
  * score `number`

### FirstLastNameGeoIn
* FirstLastNameGeoIn `object`
  * countryIso2 `string`
  * firstName `string`
  * id `string`
  * lastName `string`

### FirstLastNameGeoZippedIn
* FirstLastNameGeoZippedIn `object`
  * countryIso2 `string`
  * firstName `string`
  * id `string`
  * lastName `string`
  * zipCode `string`

### FirstLastNameIn
* FirstLastNameIn `object`
  * firstName `string`
  * id `string`
  * lastName `string`

### FirstLastNameOriginedOut
* FirstLastNameOriginedOut `object`: Represents the output of inferring the LIKELY country of Origin from a personal name.
  * countriesOriginTop `array`: List countries of Origin (top 10)
    * items `string`: List countries of Origin (top 10)
  * countryOrigin `string`: Most likely country of Origin
  * countryOriginAlt `string`: Second best alternative : country of Origin
  * firstName `string`
  * id `string`
  * lastName `string`
  * probabilityAltCalibrated `number`
  * probabilityCalibrated `number`
  * regionOrigin `string`: Most likely region of Origin (based on countryOrigin ISO2 code)
  * score `number`: Compatibility to NamSor_v1 Origin score value
  * subRegionOrigin `string`: Most likely region of Origin (based on countryOrigin ISO2 code)
  * topRegionOrigin `string`: Most likely region of Origin (based on countryOrigin ISO2 code)

### FirstLastNameOut
* FirstLastNameOut `object`
  * firstName `string`
  * id `string`
  * lastName `string`

### FirstLastNamePhoneCodedOut
* FirstLastNamePhoneCodedOut `object`: Represents the output of inferring the LIKELY country and phone code from a personal name and phone number.
  * countryIso2 `string`
  * firstName `string`
  * id `string`
  * internationalPhoneNumberVerified `string`
  * lastName `string`
  * originCountryIso2 `string`
  * originCountryIso2Alt `string`
  * phoneCountryCode `integer`
  * phoneCountryCodeAlt `integer`
  * phoneCountryIso2 `string`
  * phoneCountryIso2Alt `string`
  * phoneCountryIso2Verified `string`
  * phoneNumber `string`
  * score `number`
  * verified `boolean`

### FirstLastNamePhoneNumberGeoIn
* FirstLastNamePhoneNumberGeoIn `object`
  * FirstLastNameOriginedOut [FirstLastNameOriginedOut](#firstlastnameoriginedout)
  * countryIso2 `string`
  * countryIso2Alt `string`
  * firstName `string`
  * id `string`
  * lastName `string`
  * phoneNumber `string`

### FirstLastNamePhoneNumberIn
* FirstLastNamePhoneNumberIn `object`
  * FirstLastNameOriginedOut [FirstLastNameOriginedOut](#firstlastnameoriginedout)
  * firstName `string`
  * id `string`
  * lastName `string`
  * phoneNumber `string`

### FirstLastNameUSRaceEthnicityOut
* FirstLastNameUSRaceEthnicityOut `object`: Represents the output of inferring the LIKELY US 'race/ethnicity' from a personal name, given US country of residence and (optionally) a ZIP5 code.
  * firstName `string`
  * id `string`
  * lastName `string`
  * probabilityAltCalibrated `number`
  * probabilityCalibrated `number`
  * raceEthnicitiesTop `array`: List 'race'/ethnicities
    * items `string`: List 'race'/ethnicities
  * raceEthnicity `string` (values: W_NL, HL, A, B_NL): Most likely US 'race'/ethnicity
  * raceEthnicityAlt `string` (values: W_NL, HL, A, B_NL): Second most likely US 'race'/ethnicity
  * score `number`: Compatibility to NamSor_v1 Origin score value

### InvoiceItemOut
* InvoiceItemOut `object`
  * amount `integer`
  * currency `string`
  * description `string`
  * invoiceItemType `string`
  * itemId `string`
  * planDesc `string`
  * planName `string`
  * planNickname `string`
  * quantity `integer`
  * subscription `string`
  * subscriptionItem `string`

### InvoiceOut
* InvoiceOut `object`
  * amountDue `integer`
  * amountPaid `integer`
  * amountRemaining `integer`
  * attempted `boolean`
  * currency `string`
  * description `string`
  * dueDate `string`
  * invoiceDate `string`
  * invoiceId `string`
  * invoicePdf `string`
  * invoiceStatus `string`
  * isStriped `boolean`
  * items `array`
    * items [InvoiceItemOut](#invoiceitemout)
  * periodEnd `string`
  * periodStart `string`
  * receiptNumber `string`
  * stripeCustomerId `string`
  * subTotal `integer`
  * tax `integer`
  * taxPercent `integer`
  * total `integer`
  * userId `string`

### MatchPersonalFirstLastNameIn
* MatchPersonalFirstLastNameIn `object`
  * id `string`
  * name `string`
  * name1 [FirstLastNameIn](#firstlastnamein)
  * name2 [PersonalNameIn](#personalnamein)

### NamSorCounterOut
* NamSorCounterOut `object`
  * counter `integer`

### NameMatchCandidateOut
* NameMatchCandidateOut `object`
  * candidateName `string`
  * probability `number`

### NameMatchCandidatesOut
* NameMatchCandidatesOut `object`
  * firstName `string`
  * id `string`
  * lastName `string`
  * matchCandidates `array`
    * items [NameMatchCandidateOut](#namematchcandidateout)

### NameMatchedOut
* NameMatchedOut `object`
  * id `string`
  * matchStatus `string`
  * score `number`

### ParsedFullNameGeoIn
* ParsedFullNameGeoIn `object`
  * countryIso2 `string`
  * firstName `string`
  * id `string`
  * lastName `string`
  * middleName `string`
  * prefixOrTitle `string`
  * suffix `string`

### ParsedFullNameIn
* ParsedFullNameIn `object`
  * firstName `string`
  * id `string`
  * lastName `string`
  * middleName `string`
  * prefixOrTitle `string`
  * suffix `string`

### PersonalNameGenderedOut
* PersonalNameGenderedOut `object`
  * genderScale `number`: Compatibility to NamSor_v1 Gender Scale M[-1..U..+1]F value
  * id `string`
  * likelyGender `string` (values: male, female, unknown): Most likely gender
  * name `string`
  * probabilityCalibrated `number`
  * score `number`

### PersonalNameGeoIn
* PersonalNameGeoIn `object`
  * countryIso2 `string`
  * id `string`
  * name `string`

### PersonalNameGeoOut
* PersonalNameGeoOut `object`
  * countriesTop `array`: List countries (top 10)
    * items `string`: List countries (top 10)
  * country `string`
  * countryAlt `string`
  * id `string`
  * name `string`
  * probabilityAltCalibrated `number`
  * probabilityCalibrated `number`
  * region `string`
  * score `number`
  * subRegion `string`
  * topRegion `string`

### PersonalNameIn
* PersonalNameIn `object`
  * id `string`
  * name `string`

### PersonalNameParsedOut
* PersonalNameParsedOut `object`
  * firstLastName [FirstLastNameOut](#firstlastnameout)
  * id `string`
  * name `string`
  * nameParserType `string`
  * nameParserTypeAlt `string`
  * score `number`

### RomanizedNameOut
* RomanizedNameOut `object`
  * id `string`
  * latinName `string`
  * originalName `string`
  * score `number`
  * sourceLanguage `string`
  * sourceScript `string`
  * targetLanguage `string`
  * targetScript `string`

### SoftwareVersionOut
* SoftwareVersionOut `object`
  * softwareNameAndVersion `string`
  * softwareVersion `array`
    * items `integer`

### SourceDetailedMetricsOut
* SourceDetailedMetricsOut `object`: Simple metrics on source, with details by classifier.
  * aiEstimatePrecision `number`
  * aiEstimateRecall `number`
  * aiEstimateTotal `integer`
  * aiLearnTotal `integer`
  * aiStartTime `integer`
  * classifierName `string`
  * expectedClassMetrics `array`
    * items [ExpectedClassMetricsOut](#expectedclassmetricsout)
  * metricTimeStamp `integer`
  * snapshotDate `integer`
  * source [APIKeyOut](#apikeyout)

### SourceMetricsOut
* SourceMetricsOut `object`: Simple metrics on a classifier, for a given source
  * aiEstimatePrecision `number`
  * aiEstimateRecall `number`
  * aiEstimateTotal `integer`
  * aiLearnTotal `integer`
  * aiStartTime `integer`
  * classifierName `string`
  * metricTimeStamp `integer`
  * snapshotDate `integer`
  * source [APIKeyOut](#apikeyout)

### StripeCardOut
* StripeCardOut `object`
  * brand `string`
  * defaultCard `boolean`
  * expMonth `integer`
  * expYear `integer`
  * last4 `string`
  * sourceId `string`

### StripeCustomerOut
* StripeCustomerOut `object`
  * sourceCountry `string`
  * sourceCurrency `string`
  * stripeCustomerId `string`
  * stripedCards `array`
    * items [StripeCardOut](#stripecardout)

### SystemMetricsOut
* SystemMetricsOut `object`
  * cacheMetrics `array`
    * items [CacheMetricsOut](#cachemetricsout)
  * classifierMetrics `array`
    * items [ClassifierMetricsOut](#classifiermetricsout)
  * freeMem `integer`
  * maxMem `integer`
  * sourceMetrics `array`
    * items [SourceMetricsOut](#sourcemetricsout)
  * totalMem `integer`

### UserInfoOut
* UserInfoOut `object`
  * apiKey `string`
  * disabled `boolean`
  * displayName `string`
  * email `string`
  * emailVerified `boolean`
  * firstKnownIpAddress `string`
  * otherInfos `array`
    * items [UserInfoOut](#userinfoout)
  * phoneNumber `string`
  * photoUrl `string`
  * providerId `string`
  * stripeCustomerId `string`
  * stripePerishableKey `string`
  * timeStamp `integer`
  * uid `string`
  * verifyToken `string`


