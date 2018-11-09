# @datafire/obono_at

Client library for obono RKSV

## Installation and Usage
```bash
npm install --save @datafire/obono_at
```
```js
let obono_at = require('@datafire/obono_at').create({
  username: "",
  password: "",
  jwt: ""
});

obono_at.auth.get(null).then(data => {
  console.log(data);
});
```

## Description

Provides a RESTful API for interacting with virtual cash registers and creating receipts that are conform with the Registrierkassensicherheitsverordnung (RKSV).

You may find our [automatically generated clients](./clients) for various programming languages and environments helpful...


## Actions

### auth.get
Request a JWT access token using your obono username and password.


```js
obono_at.auth.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [AuthResult](#authresult)

### belege.belegUuid.get
Retrieves a particular `Beleg` from the "Datenerfassungsprotokoll".


```js
obono_at.belege.belegUuid.get({
  "belegUuid": ""
}, context)
```

#### Input
* input `object`
  * belegUuid **required** `string`: The `_uuid` of the `Beleg` to fetch.

#### Output
* output [Beleg](#beleg)

### export.csv.registrierkassen.registrierkasseUuid.belege.get



```js
obono_at.export.csv.registrierkassen.registrierkasseUuid.belege.get({
  "registrierkasseUuid": ""
}, context)
```

#### Input
* input `object`
  * registrierkasseUuid **required** `string`: The `_uuid` of the `Registrierkasse` to export.
  * before `string`: Only return results that were saved before the specified date-time string (i.e., anything that `Date.parse()` can parse).
  * after `string`: Only return results that were saved after the specified date-time string (i.e., anything that `Date.parse()` can parse).
  * posten `boolean`: Export `Posten` instead of `Belegdaten`.

#### Output
*Output schema unknown*

### export.html.belege.belegUuid.get



```js
obono_at.export.html.belege.belegUuid.get({
  "belegUuid": ""
}, context)
```

#### Input
* input `object`
  * belegUuid **required** `string`: The `_uuid` of a particular `Beleg` to export.

#### Output
*Output schema unknown*

### export.pdf.belege.belegUuid.get



```js
obono_at.export.pdf.belege.belegUuid.get({
  "belegUuid": ""
}, context)
```

#### Input
* input `object`
  * belegUuid **required** `string`: The `_uuid` of a particular `Beleg` to export.

#### Output
*Output schema unknown*

### export.qr.belege.belegUuid.get



```js
obono_at.export.qr.belege.belegUuid.get({
  "belegUuid": ""
}, context)
```

#### Input
* input `object`
  * belegUuid **required** `string`: The `_uuid` of a particular `Beleg` to export.

#### Output
*Output schema unknown*

### export.thermal_print.belege.belegUuid.get



```js
obono_at.export.thermal_print.belege.belegUuid.get({
  "belegUuid": ""
}, context)
```

#### Input
* input `object`
  * belegUuid **required** `string`: The `_uuid` of a particular `Beleg` to export.
  * qr `boolean`: Should the RKSV QR code should be rendered?
  * width `integer`: Number of characters per line.
  * dialect `string` (values: esc, star): The thermal printer dialect.
  * encoding `string` (values: raw, base64): The encoding of the binary data.

#### Output
*Output schema unknown*

### export.xls.registrierkassen.registrierkasseUuid.belege.get



```js
obono_at.export.xls.registrierkassen.registrierkasseUuid.belege.get({
  "registrierkasseUuid": ""
}, context)
```

#### Input
* input `object`
  * registrierkasseUuid **required** `string`: The `_uuid` of the `Registrierkasse` to export.
  * before `string`: Only return results that were saved before the specified date-time string (i.e., anything that `Date.parse()` can parse).
  * after `string`: Only return results that were saved after the specified date-time string (i.e., anything that `Date.parse()` can parse).

#### Output
*Output schema unknown*

### getRegistrierkasse
Returns information about a particular `Registrierkasse`.


```js
obono_at.getRegistrierkasse({
  "registrierkasseUuid": ""
}, context)
```

#### Input
* input `object`
  * registrierkasseUuid **required** `string`: The `_uuid` of a particular `Registrierkasse` to fetch.

#### Output
* output [Registrierkasse](#registrierkasse)

### createAbschluss
Generates an `Abschlussbeleg`.


```js
obono_at.createAbschluss({
  "registrierkasseUuid": "",
  "abschlussbelegdaten": {
    "Abschluss-Beginn-Datum-Uhrzeit": "",
    "Abschluss-Ende-Datum-Uhrzeit": ""
  }
}, context)
```

#### Input
* input `object`
  * registrierkasseUuid **required** `string`: The `_uuid` of the `Registrierkasse` to retrieve the `Beleg` collection.
  * abschlussbelegdaten **required** [Abschlussbelegdaten](#abschlussbelegdaten)

#### Output
*Output schema unknown*

### getBelege
Retrieves the `Beleg` collection from the "Datenerfassungsprotokoll".


```js
obono_at.getBelege({
  "registrierkasseUuid": "",
  "format": ""
}, context)
```

#### Input
* input `object`
  * registrierkasseUuid **required** `string`: The `_uuid` of the `Registrierkasse` to retrieve the `Beleg` collection.
  * format **required** `string` (values: export, beleg, uuidlist): Determines the format of the `Beleg` collection.
  * order `string` (values: asc, desc): Determines the sorting order.
  * limit `integer`: Limits the number of returned results.
  * offset `integer`: Skips the specified number of results from the result set.
  * before `string`: Only return results that where saved before the specified date-time string (i.e., anything that `Date.parse()` can parse).
  * after `string`: Only return results that where saved after the specified date-time string (i.e., anything that `Date.parse()` can parse).
  * gte `integer`: Only return results that have at least a particular `Belegnummer`.
  * lte `integer`: Only return results that have at most a particular `Belegnummer`.

#### Output
* output [Belege](#belege)

### registrierkassen.registrierkasseUuid.belege.belegUuid.get
Retrieves a particular `Beleg` from the "Datenerfassungsprotokoll".


```js
obono_at.registrierkassen.registrierkasseUuid.belege.belegUuid.get({
  "registrierkasseUuid": "",
  "belegUuid": ""
}, context)
```

#### Input
* input `object`
  * registrierkasseUuid **required** `string`: The `_uuid` of the `Registrierkasse` that contains the requested `Beleg`.
  * belegUuid **required** `string`: The `_uuid` of the `Beleg` to fetch.

#### Output
* output [Beleg](#beleg)

### addBeleg
Signs a receipt and stores it in the "Datenerfassungsprotokoll".


```js
obono_at.addBeleg({
  "registrierkasseUuid": "",
  "belegUuid": "",
  "belegdaten": {}
}, context)
```

#### Input
* input `object`
  * registrierkasseUuid **required** `string`: The `_uuid` of the `Registrierkasse` to use for signing data.
  * belegUuid **required** `string`: The `_uuid` of the `Beleg` to store.
  * belegdaten **required** [Belegdaten](#belegdaten)

#### Output
*Output schema unknown*

### getMonatsbelege
Returns a list of `Monatsbelege`.


```js
obono_at.getMonatsbelege({
  "registrierkasseUuid": ""
}, context)
```

#### Input
* input `object`
  * registrierkasseUuid **required** `string`: The `_uuid` of the `Registrierkasse`.
  * year `integer`
  * month `integer`

#### Output
* output `array`
  * items [Monatsbeleg](#monatsbeleg)



## Definitions

### Abschlussbelegdaten
* Abschlussbelegdaten `object`
  * Abschluss-Beginn-Datum-Uhrzeit **required** `string`
  * Abschluss-Ende-Datum-Uhrzeit **required** `string`

### AuthResult
* AuthResult `object`
  * accessToken `string`
  * registrierkasseUuid `string`

### Beleg
* Beleg `object`
  * Beleg-Codes `array`
    * items `string`
  * Beleg-Typen `array`
    * items `string` (values: Belegkreisinitialisierung, Kassenbericht, Monatsabschluss, Startbeleg, Storno, Systembeleg, Training)
  * Belegdaten [SignierteBelegdaten](#signiertebelegdaten)
  * JWS `string`: The signed `Beleg` as a JWS signature token.
  * QR `string`: The portion of the `JWS` token to be used for generating QR codes.
  * QR-Link `string`: A hyperlink that retrieves the `QR` data.
  * Registrierkasse-UUID `string`: The `_uuid` of the `Registrierkasse` that has issued this `Beleg`.
  * Signaturerstellungseinheit-UUID `string`: The `_uuid` of the `Signaturerstellungseinheit` that has signed this `Beleg`.
  * _href `string`: URL of the particular `Beleg` instance.
  * _uuid `string`: Unique ID of the particular `Beleg` instance.

### Belegdaten
* Belegdaten `object`: The `Beleg` to be signed by the "Signaturerstellungseinheit" and stored in the "Datenerfassungsprotokoll".
  * Externer-Beleg-Belegkreis `string`
  * Externer-Beleg-Bezeichnung `string`
  * Externer-Beleg-Referenz `string`
  * Kunde `string`
  * Notizen `array`
    * items `string`
  * Posten `array`
    * items [Posten](#posten)
  * Rabatte `array`
    * items [Rabatt](#rabatt)
  * Storno `boolean`: Storno?
  * Storno-Beleg-UUID `string`: The `Beleg-UUID` property of the `Beleg` to be cancelled
  * Storno-Text `string`
  * Training `boolean`: Training?
  * Unternehmen-Adresse1 `string`
  * Unternehmen-Adresse2 `string`
  * Unternehmen-Fusszeile `string`
  * Unternehmen-ID `string`
  * Unternehmen-ID-Typ `string` (values: steuernummer, uid, gln)
  * Unternehmen-Kopfzeile `string`
  * Unternehmen-Name `string`
  * Unternehmen-Ort `string`
  * Unternehmen-PLZ `string`
  * Zahlungen `array`
    * items [Zahlung](#zahlung)

### Belege
* Belege `object`
  * Belege `array`
    * items [Beleg](#beleg)
  * Belege-Gruppe `array`
    * items `object`
      * Belege-kompakt **required** `array`
        * items `string`
      * Signaturzertifikat **required** `string`
      * Zertifizierungsstellen **required** `array`
        * items `string`

### Belegformat
* Belegformat `object`
  * Belege `array`
    * items [Beleg](#beleg)

### Exportformat
* Exportformat `object`
  * Belege-Gruppe `array`
    * items `object`
      * Belege-kompakt **required** `array`
        * items `string`
      * Signaturzertifikat **required** `string`
      * Zertifizierungsstellen **required** `array`
        * items `string`

### Monatsbeleg
* Monatsbeleg `object`
  * Beleg-UUID `string`
  * FON-Geprueft-Datum-Uhrzeit `string`
  * FON-Geprueft-Erfolgreich `boolean`
  * Jahr `integer`
  * Monat `integer`

### Posten
* Posten `object`
  * Bezeichnung **required** `string`
  * BruttoBetrag **required** `integer`: The amount in cents
  * Externer-Beleg-Belegkreis `string`
  * Externer-Beleg-Bezeichnung `string`
  * Externer-Beleg-Referenz `string`
  * Menge **required** `integer`
  * NettoBetrag **required** `integer`: The amount in cents
  * Satz **required** `string` (values: NORMAL, ERMAESSIGT1, ERMAESSIGT2, BESONDERS, NULL)

### Rabatt
* Rabatt `object`
  * Betrag-Brutto **required** `integer`: The amount in cents
  * Betrag-Netto **required** `integer`: The amount in cents
  * Bezeichnung **required** `string`
  * Satz `string` (values: NORMAL, ERMAESSIGT1, ERMAESSIGT2, BESONDERS, NULL)

### Registrierkasse
* Registrierkasse `object`
  * Benutzerschluessel `string`: The base64 encoded AES 256 key used for encrypting the "Umsatzzaehler".
  * Kassen-ID `string`: The (RKSV) "Kassenidentifikationsnummer" of this particular `Registrierkasse`.
  * Signaturerstellungseinheit-UUID `string`: The `_uuid` of the paired "Signaturerstellungseinheit".
  * _href `string`: URL of the particular `Registrierkasse` instance.
  * _uuid `string`: Unique ID of the particular `Registrierkasse` instance.

### SignierteBelegdaten
* SignierteBelegdaten `object`: The complete `Beleg` that has been signed by the "Signaturerstellungseinheit" and stored in the "Datenerfassungsprotokoll".
  * Beleg-Datum-Uhrzeit `string`
  * Belegnummer `string`
  * Betrag-Brutto `integer`
  * Betrag-Netto `integer`
  * Betrag-Satz-Besonders-Brutto `integer`: The total amount in cents
  * Betrag-Satz-Besonders-Netto `integer`: The total amount in cents
  * Betrag-Satz-Ermaessigt-1-Brutto `integer`: The total amount in cents
  * Betrag-Satz-Ermaessigt-1-Netto `integer`: The total amount in cents
  * Betrag-Satz-Ermaessigt-2-Brutto `integer`: The total amount in cents
  * Betrag-Satz-Ermaessigt-2-Netto `integer`: The total amount in cents
  * Betrag-Satz-Normal-Brutto `integer`: The total amount in cents
  * Betrag-Satz-Normal-Netto `integer`: The total amount in cents
  * Betrag-Satz-Null-Brutto `integer`: The total amount in cents
  * Betrag-Satz-Null-Netto `integer`: The total amount in cents
  * Externer-Beleg-Belegkreis `string`
  * Externer-Beleg-Bezeichnung `string`
  * Externer-Beleg-Referenz `string`
  * Kassen-ID `string`
  * Kunde `string`
  * Notizen `array`
    * items `string`
  * Posten `array`
    * items [Posten](#posten)
  * Rabatte `array`
    * items [Rabatt](#rabatt)
  * Storno `boolean`: Storno?
  * Storno-Beleg-UUID `string`: The `Beleg-UUID` property of the `Beleg` to be cancelled
  * Storno-Text `string`
  * Training `boolean`: Training?
  * Unternehmen-Adresse1 `string`
  * Unternehmen-Adresse2 `string`
  * Unternehmen-Fusszeile `string`
  * Unternehmen-ID `string`
  * Unternehmen-ID-Typ `string` (values: steuernummer, uid, gln)
  * Unternehmen-Kopfzeile `string`
  * Unternehmen-Name `string`
  * Unternehmen-Ort `string`
  * Unternehmen-PLZ `string`
  * Zahlungen `array`
    * items [Zahlung](#zahlung)
  * Zertifikat-Seriennummer `string`

### Zahlung
* Zahlung `object`
  * Betrag **required** `integer`: The amount in cents
  * Bezeichnung **required** `string`
  * Referenz `string`


