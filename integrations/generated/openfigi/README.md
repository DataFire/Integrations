# @datafire/openfigi

Client library for OpenFIGI API

## Installation and Usage
```bash
npm install --save @datafire/openfigi
```
```js
let openfigi = require('@datafire/openfigi').create({
  ApiKeyAuth: ""
});

.then(data => {
  console.log(data);
});
```

## Description

A free & open API for FIGI discovery.

## Actions

### mapping.post
Allows mapping from third-party identifiers to FIGIs.


```js
openfigi.mapping.post({}, context)
```

#### Input
* input `object`
  * body [BulkMappingJob](#bulkmappingjob)

#### Output
* output [BulkMappingJobResult](#bulkmappingjobresult)

### mapping.values.key.get
Get values for enum-like fields.


```js
openfigi.mapping.values.key.get({
  "key": ""
}, context)
```

#### Input
* input `object`
  * key **required** `string` (values: idType, exchCode, micCode, currency, marketSecDes, securityType, securityType2): Key of MappingJob for which to get possible values.

#### Output
* output `object`
  * values `array`
    * items `string`



## Definitions

### BulkMappingJob
* BulkMappingJob `array`
  * items [MappingJob](#mappingjob)

### BulkMappingJobResult
* BulkMappingJobResult `array`
  * items [MappingJobResult](#mappingjobresult)

### FigiResult
* FigiResult `object`
  * compositeFIGI `string`
  * exchCode `string`
  * figi `string`
  * marketSector `string`
  * metadata `string`: Exists when API is unable to show non-FIGI fields.
  * name `string`
  * securityDescription `string`
  * securityType `string`
  * securityType2 `string`
  * shareClassFIGI `string`
  * ticker `string`
  * uniqueID `string`
  * uniqueIDFutOpt `string`

### MappingJob
* MappingJob `object`: For V2: securityType2 is required when idType is BASE_TICKER or ID_EXCH_SYMBOL.  expiration is required when securityType2 is Option or Warrant.  maturity is required when securityType2 is Pool.
  * contractSize [NullableNumberInterval](#nullablenumberinterval)
  * coupon [NullableNumberInterval](#nullablenumberinterval)
  * currency `string`
  * exchCode `string`
  * expiration [NullableDateInterval](#nullabledateinterval)
  * idType **required** `string` (values: ID_ISIN, ID_BB_UNIQUE, ID_SEDOL, ID_COMMON, ID_WERTPAPIER, ID_CUSIP, ID_BB, ID_ITALY, ID_EXCH_SYMBOL, ID_FULL_EXCHANGE_SYMBOL, COMPOSITE_ID_BB_GLOBAL, ID_BB_GLOBAL_SHARE_CLASS_LEVEL, ID_BB_SEC_NUM_DES, ID_BB_GLOBAL, TICKER, ID_CUSIP_8_CHR, OCC_SYMBOL, UNIQUE_ID_FUT_OPT, OPRA_SYMBOL, TRADING_SYSTEM_IDENTIFIER, ID_CINS, ID_SHORT_CODE, BASE_TICKER, VENDOR_INDEX_CODE)
  * idValue **required** `string`
  * includeUnlistedEquities `boolean`
  * marketSecDes `string`
  * maturity [NullableDateInterval](#nullabledateinterval)
  * micCode `string`
  * optionType `string` (values: Put, Call)
  * securityType `string`
  * securityType2 `string`
  * stateCode `string` (values: AB, AC, AC, AH, AK, AL, AM, AR, AS, AT, AZ, BC, BJ, CA, CB, CO, CQ, CT, CZ, DC, DE, EH, FH, FI, FJ, FL, FO, FS, GA, GD, GF, GM, GS, GU, GX, GZ, HA, HB, HE, HG, HI, HI, HL, HN, HO, HS, IA, ID, IG, IK, IL, IN, IT, JL, JS, JX, KA, KC, KN, KO, KS, KT, KU, KY, LA, LN, MA, MB, MD, ME, ME, MG, MI, MN, MO, MS, MT, MZ, NB, NC, ND, NE, NG, NH, NJ, NL, NM, NM, NN, NR, NS, NS, NS, NT, NU, NV, NW, NX, NY, OH, OK, ON, ON, OR, OS, OT, OT, OY, PA, PE, PR, QC, QH, QL, RI, SA, SA, SC, SC, SD, SD, SH, SI, SK, SN, SN, ST, SX, SZ, TA, TG, TJ, TK, TN, TS, TT, TT, TX, TY, UT, VA, VI, VI, VT, WA, WA, WI, WK, WV, WY, XJ, XZ, YA, YN, YN, YT, YU, ZJ)
  * strike [NullableNumberInterval](#nullablenumberinterval)

### MappingJobResult


### MappingJobResultFigiList
* MappingJobResultFigiList `object`
  * data `array`
    * items [FigiResult](#figiresult)

### MappingJobResultFigiNotFound
* MappingJobResultFigiNotFound `object`
  * error `string`

### NullableDateInterval
* NullableDateInterval `array`: At least one entry should be non-null.
  * items `string`

### NullableNumberInterval
* NullableNumberInterval `array`: At least one entry should be non-null.
  * items `number`


