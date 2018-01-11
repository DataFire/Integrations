# @datafire/microsoft_security_updates

Client library for Microsoft Security Updates

## Installation and Usage
```bash
npm install --save @datafire/microsoft_security_updates
```
```js
let microsoft_security_updates = require('@datafire/microsoft_security_updates').create({
  "api-key": ""
});

microsoft_security_updates.Updates.get({}).then(data => {
  console.log(data);
})
```

## Description



## Actions

### Updates.get
Get all updates with a link to the CVRF document



```js
microsoft_security_updates.Updates.get({
  "api-version": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`

#### Output
* output [UpdatesReturnTypes200](#updatesreturntypes200)

### Updates_id_.get
Get updates with a link to the CVRF document for a particular ID.

ID can be:

  * Update ID (ie: 2016-Aug)
  * Vulnerability ID (ie: CVE-2016-0128)
  * Year (ie: 2016)



```js
microsoft_security_updates.Updates_id_.get({
  "api-version": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`
  * id **required** `string`

#### Output
* output [UpdatesReturnTypes200](#updatesreturntypes200)

### cvrf.id.get
Gets a CVRF document by ID (ie: 2016-Aug)

Note: to view the correct XML response, please change *$ref: '#/definitions/cvrfReturnTypes200'* to *$ref: '#/definitions/cvrfReturnTypes200_xml'* in the swagger.json or swagger.yaml file



```js
microsoft_security_updates.cvrf.id.get({
  "api-version": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * api-version **required** `string`
  * id **required** `string`

#### Output
* output [cvrfReturnTypes200](#cvrfreturntypes200)



## Definitions

### UpdatesReturnTypes200
* Sucessful returned Updates object `object`
  * @odata.context `string`
  * value `array`: array of files returned
    * items `object`
      * Alias `string`
      * CurrentReleaseDate `string`
      * CvrfUrl `string`
      * DocumentTitle `string`
      * ID `string`
      * InitialReleaseData `string`
      * Severity `string`

### cvrfReturnTypes200
* Sucessful returned cvrf json `object`
  * DocumentNotes `array`
    * items `object`
      * Audience `string`
      * Ordinal `string`
      * Title `string`
      * Type `integer`
      * Value `string`
  * DocumentPublisher `object`
    * ContactDetails `object`
      * Value `string`
    * IssuingAthority `object`
      * Value `string`
    * Type `integer`
  * DocumentTitle `object`
    * Value `string`
  * DocumentTracking `object`
    * CurrentReleaseDate `string`
    * Identification `object`
      * Alias `object`
        * Value `string`
      * ID `object`
        * Value `string`
    * InitialReleaseDate `string`
    * RevisionHistory `array`
      * items `object`
        * Date `string`
        * Description `object`
          * Value `string`
        * Number `string`
    * Status `integer`
    * Version `string`
  * DocumentType `object`
    * Value `string`
  * ProductTree `object`
    * Branch `array`
      * items `object`
        * Items `array`
          * items `object`
            * Items `array`
              * items `object`
                * ProductID `string`
                * Value `string`
            * Name `string`
            * Type `integer`
    * FullProductName `array`
      * items `object`
        * ProductID `string`
        * Value `string`
  * Vulnerability `array`
    * items `object`
      * Acknowledgements `array`
        * items `object`
          * Name `array`
            * items `object`
              * Value `string`
          * URL `array`
            * items `string`
      * CVE `string`
      * CVSSScoreSets `array`
        * items `object`
          * BaseScore `number`
          * ProductID `array`
            * items `string`
          * TemporalScore `number`
          * Vector `string`
      * DiscoveryDateSpecified `boolean`
      * Notes `array`
        * items `object`
          * Ordinal `string`
          * Title `string`
          * Type `integer`
          * Value `string`
      * Ordinal `string`
      * ProductStatuses `array`
        * items `object`
          * ProductID `array`
            * items `string`
          * Type `integer`
      * ReleaseDateSpecified `boolean`
      * Remediations `array`
        * items `object`
          * AffectedFiles `array`
            * items `object`
              * FileArchitecture `string`
              * FileLastModified `string`
              * FileName `string`
              * FilePath `string`
              * FileVersion `string`
              * ProductId `string`
          * DateSpecified `boolean`
          * Description `object`
            * Value `string`
          * ProductID `array`
            * items `string`
          * RestartRequired `object`
            * Value `string`
          * SubType `string`
          * Supercedence `string`
          * Type `integer`
          * URL `string`
      * RevisionHistory `array`
        * items `object`
          * Date `string`
          * Description `object`
            * Value `string`
          * Number `string`
      * Threats `array`
        * items `object`
          * DateSpecified `boolean`
          * Description `object`
            * Value `string`
          * ProductID `array`
            * items `string`
          * Type `integer`
      * Title `object`
        * Value `string`

### cvrfReturnTypes200_xml
* Sucessful returned cvrf object __XML__ `object`: Swagger has some limitations and can not display complex XML documents in a model, please refer to the ICASI CVRF schema online. for a more exact specification on return schema.
  * cvrfdoc `object`
    * DocumentNotes `array`
      * items `object`
        * Note `object`: has a string in <Note>...</Note>
          * Audience `string`
          * Ordinal `string`
          * Title `string`
          * Type `string`
    * DocumentPublisher `object`
      * ContactDetails `string`
      * IssuingAuthority `string`
      * Type `string`
    * DocumentTitle `string`
    * DocumentTracking `object`
      * CurrentReleaseDate `string`
      * Identification `object`
        * Alias `string`
        * ID `string`
      * InitialReleaseDate `string`
      * RevisionHistory `object`
        * Revision `object`
          * Date `string`
          * Description `string`
          * Number `integer`
      * Status `string`
      * Version `number`
    * DocumentType `string`
    * ProductTree `object`
      * Branch `array`
        * items `object`
          * Branch `array`
            * items `object`
              * FullProductName `array`
                * items `object`
                  * ProductID `string`
              * Name `string`
              * Type `string`
          * Name `string`
          * Type `string`
      * FullProductName `array`
        * items `object`: has a string in between <prod:FullProductName>...</prod:FullProductName>
          * ProductID `string`
    * Vulnerability `object`
      * Acknowledgements `array`
        * items `object`
          * Name `string`
          * URL `string`
      * CVE `string`
      * CVSSScoreSets `array`
        * items `object`
          * BaseScore `number`
          * ProductID `number`
          * TemporalScore `number`
          * Vector `string`
      * Notes `object`
        * Note `object`: has a string in <Note>...</Note>
          * Ordianl `string`
          * Title `string`
          * Type `string`
      * Ordinal `string`
      * ProductStatuses `array`
        * items `object`
          * ProductID `string`
          * Type `string`
      * Remediations `array`
        * items `object`
          * AffectedFiles `array`
            * items `object`
              * FileArchitecture `string`
              * FileLastModified `string`
              * FileName `string`
              * FilePath `string`
              * FileVersion `string`
              * ProductId `string`
          * Description `integer`
          * ProductID `array`
            * items `string`
          * RestartRequired `string`
          * SubType `string`
          * Supercedence `string`
          * Type `string`
          * URL `string`
      * RevisionHistory `array`
        * items `object`
          * Date `string`
          * Description `string`
          * Number `number`
      * Threats `array`
        * items `object`
          * Threat `object`
            * Description `string`
            * ProductID `string`
            * Type `string`
      * Title `string`


