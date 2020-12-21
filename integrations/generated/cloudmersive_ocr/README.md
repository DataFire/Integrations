# @datafire/cloudmersive_ocr

Client library for ocrapi

## Installation and Usage
```bash
npm install --save @datafire/cloudmersive_ocr
```
```js
let cloudmersive_ocr = require('@datafire/cloudmersive_ocr').create({
  Apikey: ""
});

.then(data => {
  console.log(data);
});
```

## Description

The powerful Optical Character Recognition (OCR) APIs let you convert scanned images of pages into recognized text.

## Actions

### ImageOcr_ImageLinesWithLocation
Converts an uploaded image in common formats such as JPEG, PNG into lines/text with location information and other metdata via Optical Character Recognition.  This API is intended to be run on scanned documents.  If you want to OCR photos (e.g. taken with a smart phone camera), be sure to use the photo/toText API instead, as it is designed to unskew the image first.


```js
cloudmersive_ocr.ImageOcr_ImageLinesWithLocation({
  "imageFile": ""
}, context)
```

#### Input
* input `object`
  * language `string`: Optional, language of the input document, default is English (ENG).  Possible values are ENG (English), ARA (Arabic), ZHO (Chinese - Simplified), ZHO-HANT (Chinese - Traditional), ASM (Assamese), AFR (Afrikaans), AMH (Amharic), AZE (Azerbaijani), AZE-CYRL (Azerbaijani - Cyrillic), BEL (Belarusian), BEN (Bengali), BOD (Tibetan), BOS (Bosnian), BUL (Bulgarian), CAT (Catalan; Valencian), CEB (Cebuano), CES (Czech), CHR (Cherokee), CYM (Welsh), DAN (Danish), DEU (German), DZO (Dzongkha), ELL (Greek), ENM (Archaic/Middle English), EPO (Esperanto), EST (Estonian), EUS (Basque), FAS (Persian), FIN (Finnish), FRA (French), FRK (Frankish), FRM (Middle-French), GLE (Irish), GLG (Galician), GRC (Ancient Greek), HAT (Hatian), HEB (Hebrew), HIN (Hindi), HRV (Croatian), HUN (Hungarian), IKU (Inuktitut), IND (Indonesian), ISL (Icelandic), ITA (Italian), ITA-OLD (Old - Italian), JAV (Javanese), JPN (Japanese), KAN (Kannada), KAT (Georgian), KAT-OLD (Old-Georgian), KAZ (Kazakh), KHM (Central Khmer), KIR (Kirghiz), KOR (Korean), KUR (Kurdish), LAO (Lao), LAT (Latin), LAV (Latvian), LIT (Lithuanian), MAL (Malayalam), MAR (Marathi), MKD (Macedonian), MLT (Maltese), MSA (Malay), MYA (Burmese), NEP (Nepali), NLD (Dutch), NOR (Norwegian), ORI (Oriya), PAN (Panjabi), POL (Polish), POR (Portuguese), PUS (Pushto), RON (Romanian), RUS (Russian), SAN (Sanskrit), SIN (Sinhala), SLK (Slovak), SLV (Slovenian), SPA (Spanish), SPA-OLD (Old Spanish), SQI (Albanian), SRP (Serbian), SRP-LAT (Latin Serbian), SWA (Swahili), SWE (Swedish), SYR (Syriac), TAM (Tamil), TEL (Telugu), TGK (Tajik), TGL (Tagalog), THA (Thai), TIR (Tigrinya), TUR (Turkish), UIG (Uighur), UKR (Ukrainian), URD (Urdu), UZB (Uzbek), UZB-CYR (Cyrillic Uzbek), VIE (Vietnamese), YID (Yiddish)
  * preprocessing `string`: Optional, preprocessing mode, default is 'Auto'.  Possible values are None (no preprocessing of the image), and Auto (automatic image enhancement of the image before OCR is applied; this is recommended).
  * imageFile **required** `string`: Image file to perform OCR on.  Common file formats such as PNG, JPEG are supported.

#### Output
* output [ImageToLinesWithLocationResult](#imagetolineswithlocationresult)

### ImageOcr_ImageWordsWithLocation
Converts an uploaded image in common formats such as JPEG, PNG into words/text with location information and other metdata via Optical Character Recognition.  This API is intended to be run on scanned documents.  If you want to OCR photos (e.g. taken with a smart phone camera), be sure to use the photo/toText API instead, as it is designed to unskew the image first.


```js
cloudmersive_ocr.ImageOcr_ImageWordsWithLocation({
  "imageFile": ""
}, context)
```

#### Input
* input `object`
  * language `string`: Optional, language of the input document, default is English (ENG).  Possible values are ENG (English), ARA (Arabic), ZHO (Chinese - Simplified), ZHO-HANT (Chinese - Traditional), ASM (Assamese), AFR (Afrikaans), AMH (Amharic), AZE (Azerbaijani), AZE-CYRL (Azerbaijani - Cyrillic), BEL (Belarusian), BEN (Bengali), BOD (Tibetan), BOS (Bosnian), BUL (Bulgarian), CAT (Catalan; Valencian), CEB (Cebuano), CES (Czech), CHR (Cherokee), CYM (Welsh), DAN (Danish), DEU (German), DZO (Dzongkha), ELL (Greek), ENM (Archaic/Middle English), EPO (Esperanto), EST (Estonian), EUS (Basque), FAS (Persian), FIN (Finnish), FRA (French), FRK (Frankish), FRM (Middle-French), GLE (Irish), GLG (Galician), GRC (Ancient Greek), HAT (Hatian), HEB (Hebrew), HIN (Hindi), HRV (Croatian), HUN (Hungarian), IKU (Inuktitut), IND (Indonesian), ISL (Icelandic), ITA (Italian), ITA-OLD (Old - Italian), JAV (Javanese), JPN (Japanese), KAN (Kannada), KAT (Georgian), KAT-OLD (Old-Georgian), KAZ (Kazakh), KHM (Central Khmer), KIR (Kirghiz), KOR (Korean), KUR (Kurdish), LAO (Lao), LAT (Latin), LAV (Latvian), LIT (Lithuanian), MAL (Malayalam), MAR (Marathi), MKD (Macedonian), MLT (Maltese), MSA (Malay), MYA (Burmese), NEP (Nepali), NLD (Dutch), NOR (Norwegian), ORI (Oriya), PAN (Panjabi), POL (Polish), POR (Portuguese), PUS (Pushto), RON (Romanian), RUS (Russian), SAN (Sanskrit), SIN (Sinhala), SLK (Slovak), SLV (Slovenian), SPA (Spanish), SPA-OLD (Old Spanish), SQI (Albanian), SRP (Serbian), SRP-LAT (Latin Serbian), SWA (Swahili), SWE (Swedish), SYR (Syriac), TAM (Tamil), TEL (Telugu), TGK (Tajik), TGL (Tagalog), THA (Thai), TIR (Tigrinya), TUR (Turkish), UIG (Uighur), UKR (Ukrainian), URD (Urdu), UZB (Uzbek), UZB-CYR (Cyrillic Uzbek), VIE (Vietnamese), YID (Yiddish)
  * preprocessing `string`: Optional, preprocessing mode, default is 'Auto'.  Possible values are None (no preprocessing of the image), and Auto (automatic image enhancement of the image before OCR is applied; this is recommended).
  * imageFile **required** `string`: Image file to perform OCR on.  Common file formats such as PNG, JPEG are supported.

#### Output
* output [ImageToWordsWithLocationResult](#imagetowordswithlocationresult)

### ImageOcr_Post
Converts an uploaded image in common formats such as JPEG, PNG into text via Optical Character Recognition.  This API is intended to be run on scanned documents.  If you want to OCR photos (e.g. taken with a smart phone camera), be sure to use the photo/toText API instead, as it is designed to unskew the image first.


```js
cloudmersive_ocr.ImageOcr_Post({
  "imageFile": ""
}, context)
```

#### Input
* input `object`
  * recognitionMode `string`: Optional; possible values are 'Basic' which provides basic recognition and is not resillient to page rotation, skew or low quality images uses 1-2 API calls; 'Normal' which provides highly fault tolerant OCR recognition uses 26-30 API calls; and 'Advanced' which provides the highest quality and most fault-tolerant recognition uses 28-30 API calls.  Default recognition mode is 'Advanced'
  * language `string`: Optional, language of the input document, default is English (ENG).  Possible values are ENG (English), ARA (Arabic), ZHO (Chinese - Simplified), ZHO-HANT (Chinese - Traditional), ASM (Assamese), AFR (Afrikaans), AMH (Amharic), AZE (Azerbaijani), AZE-CYRL (Azerbaijani - Cyrillic), BEL (Belarusian), BEN (Bengali), BOD (Tibetan), BOS (Bosnian), BUL (Bulgarian), CAT (Catalan; Valencian), CEB (Cebuano), CES (Czech), CHR (Cherokee), CYM (Welsh), DAN (Danish), DEU (German), DZO (Dzongkha), ELL (Greek), ENM (Archaic/Middle English), EPO (Esperanto), EST (Estonian), EUS (Basque), FAS (Persian), FIN (Finnish), FRA (French), FRK (Frankish), FRM (Middle-French), GLE (Irish), GLG (Galician), GRC (Ancient Greek), HAT (Hatian), HEB (Hebrew), HIN (Hindi), HRV (Croatian), HUN (Hungarian), IKU (Inuktitut), IND (Indonesian), ISL (Icelandic), ITA (Italian), ITA-OLD (Old - Italian), JAV (Javanese), JPN (Japanese), KAN (Kannada), KAT (Georgian), KAT-OLD (Old-Georgian), KAZ (Kazakh), KHM (Central Khmer), KIR (Kirghiz), KOR (Korean), KUR (Kurdish), LAO (Lao), LAT (Latin), LAV (Latvian), LIT (Lithuanian), MAL (Malayalam), MAR (Marathi), MKD (Macedonian), MLT (Maltese), MSA (Malay), MYA (Burmese), NEP (Nepali), NLD (Dutch), NOR (Norwegian), ORI (Oriya), PAN (Panjabi), POL (Polish), POR (Portuguese), PUS (Pushto), RON (Romanian), RUS (Russian), SAN (Sanskrit), SIN (Sinhala), SLK (Slovak), SLV (Slovenian), SPA (Spanish), SPA-OLD (Old Spanish), SQI (Albanian), SRP (Serbian), SRP-LAT (Latin Serbian), SWA (Swahili), SWE (Swedish), SYR (Syriac), TAM (Tamil), TEL (Telugu), TGK (Tajik), TGL (Tagalog), THA (Thai), TIR (Tigrinya), TUR (Turkish), UIG (Uighur), UKR (Ukrainian), URD (Urdu), UZB (Uzbek), UZB-CYR (Cyrillic Uzbek), VIE (Vietnamese), YID (Yiddish)
  * preprocessing `string`: Optional, preprocessing mode, default is 'Auto'.  Possible values are None (no preprocessing of the image), and Auto (automatic image enhancement of the image before OCR is applied; this is recommended).
  * imageFile **required** `string`: Image file to perform OCR on.  Common file formats such as PNG, JPEG are supported.

#### Output
* output [ImageToTextResponse](#imagetotextresponse)

### PdfOcr_PdfToLinesWithLocation
Converts a PDF into lines/text with location information and other metdata via Optical Character Recognition.  This API is intended to be run on scanned documents.  If you want to OCR photos (e.g. taken with a smart phone camera), be sure to use the photo/toText API instead, as it is designed to unskew the image first.


```js
cloudmersive_ocr.PdfOcr_PdfToLinesWithLocation({
  "imageFile": ""
}, context)
```

#### Input
* input `object`
  * language `string`: Optional, language of the input document, default is English (ENG).  Possible values are ENG (English), ARA (Arabic), ZHO (Chinese - Simplified), ZHO-HANT (Chinese - Traditional), ASM (Assamese), AFR (Afrikaans), AMH (Amharic), AZE (Azerbaijani), AZE-CYRL (Azerbaijani - Cyrillic), BEL (Belarusian), BEN (Bengali), BOD (Tibetan), BOS (Bosnian), BUL (Bulgarian), CAT (Catalan; Valencian), CEB (Cebuano), CES (Czech), CHR (Cherokee), CYM (Welsh), DAN (Danish), DEU (German), DZO (Dzongkha), ELL (Greek), ENM (Archaic/Middle English), EPO (Esperanto), EST (Estonian), EUS (Basque), FAS (Persian), FIN (Finnish), FRA (French), FRK (Frankish), FRM (Middle-French), GLE (Irish), GLG (Galician), GRC (Ancient Greek), HAT (Hatian), HEB (Hebrew), HIN (Hindi), HRV (Croatian), HUN (Hungarian), IKU (Inuktitut), IND (Indonesian), ISL (Icelandic), ITA (Italian), ITA-OLD (Old - Italian), JAV (Javanese), JPN (Japanese), KAN (Kannada), KAT (Georgian), KAT-OLD (Old-Georgian), KAZ (Kazakh), KHM (Central Khmer), KIR (Kirghiz), KOR (Korean), KUR (Kurdish), LAO (Lao), LAT (Latin), LAV (Latvian), LIT (Lithuanian), MAL (Malayalam), MAR (Marathi), MKD (Macedonian), MLT (Maltese), MSA (Malay), MYA (Burmese), NEP (Nepali), NLD (Dutch), NOR (Norwegian), ORI (Oriya), PAN (Panjabi), POL (Polish), POR (Portuguese), PUS (Pushto), RON (Romanian), RUS (Russian), SAN (Sanskrit), SIN (Sinhala), SLK (Slovak), SLV (Slovenian), SPA (Spanish), SPA-OLD (Old Spanish), SQI (Albanian), SRP (Serbian), SRP-LAT (Latin Serbian), SWA (Swahili), SWE (Swedish), SYR (Syriac), TAM (Tamil), TEL (Telugu), TGK (Tajik), TGL (Tagalog), THA (Thai), TIR (Tigrinya), TUR (Turkish), UIG (Uighur), UKR (Ukrainian), URD (Urdu), UZB (Uzbek), UZB-CYR (Cyrillic Uzbek), VIE (Vietnamese), YID (Yiddish)
  * preprocessing `string`: Optional, preprocessing mode, default is 'Auto'.  Possible values are None (no preprocessing of the image), and Auto (automatic image enhancement of the image before OCR is applied; this is recommended).
  * imageFile **required** `string`: PDF file to perform OCR on.

#### Output
* output [PdfToLinesWithLocationResult](#pdftolineswithlocationresult)

### PdfOcr_PdfToWordsWithLocation
Converts a PDF into words/text with location information and other metdata via Optical Character Recognition.  This API is intended to be run on scanned documents.  If you want to OCR photos (e.g. taken with a smart phone camera), be sure to use the photo/toText API instead, as it is designed to unskew the image first.


```js
cloudmersive_ocr.PdfOcr_PdfToWordsWithLocation({
  "imageFile": ""
}, context)
```

#### Input
* input `object`
  * language `string`: Optional, language of the input document, default is English (ENG).  Possible values are ENG (English), ARA (Arabic), ZHO (Chinese - Simplified), ZHO-HANT (Chinese - Traditional), ASM (Assamese), AFR (Afrikaans), AMH (Amharic), AZE (Azerbaijani), AZE-CYRL (Azerbaijani - Cyrillic), BEL (Belarusian), BEN (Bengali), BOD (Tibetan), BOS (Bosnian), BUL (Bulgarian), CAT (Catalan; Valencian), CEB (Cebuano), CES (Czech), CHR (Cherokee), CYM (Welsh), DAN (Danish), DEU (German), DZO (Dzongkha), ELL (Greek), ENM (Archaic/Middle English), EPO (Esperanto), EST (Estonian), EUS (Basque), FAS (Persian), FIN (Finnish), FRA (French), FRK (Frankish), FRM (Middle-French), GLE (Irish), GLG (Galician), GRC (Ancient Greek), HAT (Hatian), HEB (Hebrew), HIN (Hindi), HRV (Croatian), HUN (Hungarian), IKU (Inuktitut), IND (Indonesian), ISL (Icelandic), ITA (Italian), ITA-OLD (Old - Italian), JAV (Javanese), JPN (Japanese), KAN (Kannada), KAT (Georgian), KAT-OLD (Old-Georgian), KAZ (Kazakh), KHM (Central Khmer), KIR (Kirghiz), KOR (Korean), KUR (Kurdish), LAO (Lao), LAT (Latin), LAV (Latvian), LIT (Lithuanian), MAL (Malayalam), MAR (Marathi), MKD (Macedonian), MLT (Maltese), MSA (Malay), MYA (Burmese), NEP (Nepali), NLD (Dutch), NOR (Norwegian), ORI (Oriya), PAN (Panjabi), POL (Polish), POR (Portuguese), PUS (Pushto), RON (Romanian), RUS (Russian), SAN (Sanskrit), SIN (Sinhala), SLK (Slovak), SLV (Slovenian), SPA (Spanish), SPA-OLD (Old Spanish), SQI (Albanian), SRP (Serbian), SRP-LAT (Latin Serbian), SWA (Swahili), SWE (Swedish), SYR (Syriac), TAM (Tamil), TEL (Telugu), TGK (Tajik), TGL (Tagalog), THA (Thai), TIR (Tigrinya), TUR (Turkish), UIG (Uighur), UKR (Ukrainian), URD (Urdu), UZB (Uzbek), UZB-CYR (Cyrillic Uzbek), VIE (Vietnamese), YID (Yiddish)
  * preprocessing `string`: Optional, preprocessing mode, default is 'Auto'.  Possible values are None (no preprocessing of the image), and Auto (automatic image enhancement of the image before OCR is applied; this is recommended).
  * imageFile **required** `string`: PDF file to perform OCR on.

#### Output
* output [PdfToWordsWithLocationResult](#pdftowordswithlocationresult)

### PdfOcr_Post
Converts an uploaded PDF file into text via Optical Character Recognition.


```js
cloudmersive_ocr.PdfOcr_Post({
  "imageFile": ""
}, context)
```

#### Input
* input `object`
  * recognitionMode `string`: Optional; possible values are 'Basic' which provides basic recognition and is not resillient to page rotation, skew or low quality images uses 1-2 API calls per page; 'Normal' which provides highly fault tolerant OCR recognition uses 26-30 API calls per page; and 'Advanced' which provides the highest quality and most fault-tolerant recognition uses 28-30 API calls per page.  Default recognition mode is 'Basic'
  * language `string`: Optional, language of the input document, default is English (ENG).  Possible values are ENG (English), ARA (Arabic), ZHO (Chinese - Simplified), ZHO-HANT (Chinese - Traditional), ASM (Assamese), AFR (Afrikaans), AMH (Amharic), AZE (Azerbaijani), AZE-CYRL (Azerbaijani - Cyrillic), BEL (Belarusian), BEN (Bengali), BOD (Tibetan), BOS (Bosnian), BUL (Bulgarian), CAT (Catalan; Valencian), CEB (Cebuano), CES (Czech), CHR (Cherokee), CYM (Welsh), DAN (Danish), DEU (German), DZO (Dzongkha), ELL (Greek), ENM (Archaic/Middle English), EPO (Esperanto), EST (Estonian), EUS (Basque), FAS (Persian), FIN (Finnish), FRA (French), FRK (Frankish), FRM (Middle-French), GLE (Irish), GLG (Galician), GRC (Ancient Greek), HAT (Hatian), HEB (Hebrew), HIN (Hindi), HRV (Croatian), HUN (Hungarian), IKU (Inuktitut), IND (Indonesian), ISL (Icelandic), ITA (Italian), ITA-OLD (Old - Italian), JAV (Javanese), JPN (Japanese), KAN (Kannada), KAT (Georgian), KAT-OLD (Old-Georgian), KAZ (Kazakh), KHM (Central Khmer), KIR (Kirghiz), KOR (Korean), KUR (Kurdish), LAO (Lao), LAT (Latin), LAV (Latvian), LIT (Lithuanian), MAL (Malayalam), MAR (Marathi), MKD (Macedonian), MLT (Maltese), MSA (Malay), MYA (Burmese), NEP (Nepali), NLD (Dutch), NOR (Norwegian), ORI (Oriya), PAN (Panjabi), POL (Polish), POR (Portuguese), PUS (Pushto), RON (Romanian), RUS (Russian), SAN (Sanskrit), SIN (Sinhala), SLK (Slovak), SLV (Slovenian), SPA (Spanish), SPA-OLD (Old Spanish), SQI (Albanian), SRP (Serbian), SRP-LAT (Latin Serbian), SWA (Swahili), SWE (Swedish), SYR (Syriac), TAM (Tamil), TEL (Telugu), TGK (Tajik), TGL (Tagalog), THA (Thai), TIR (Tigrinya), TUR (Turkish), UIG (Uighur), UKR (Ukrainian), URD (Urdu), UZB (Uzbek), UZB-CYR (Cyrillic Uzbek), VIE (Vietnamese), YID (Yiddish)
  * preprocessing `string`: Optional, preprocessing mode, default is 'Auto'.  Possible values are None (no preprocessing of the image), and Auto (automatic image enhancement of the image before OCR is applied; this is recommended).
  * imageFile **required** `string`: PDF file to perform OCR on.

#### Output
* output [PdfToTextResponse](#pdftotextresponse)

### ImageOcr_PhotoRecognizeBusinessCard
Analyzes a photograph of a business card as input, and outputs key business information such as the name of the person, name of the business, the address of the business, the phone number, the email address and more.


```js
cloudmersive_ocr.ImageOcr_PhotoRecognizeBusinessCard({
  "imageFile": ""
}, context)
```

#### Input
* input `object`
  * imageFile **required** `string`: Image file to perform OCR on.  Common file formats such as PNG, JPEG are supported.

#### Output
* output [BusinessCardRecognitionResult](#businesscardrecognitionresult)

### ImageOcr_PhotoRecognizeForm
Analyzes a photograph of a form as input, and outputs key business fields and information.  Customzie data to be extracted by defining fields for the form.


```js
cloudmersive_ocr.ImageOcr_PhotoRecognizeForm({
  "imageFile": ""
}, context)
```

#### Input
* input `object`
  * formTemplateDefinition `object`: Form field definitions
  * recognitionMode `string`: Optional, enable advanced recognition mode by specifying 'Advanced', enable handwriting recognition by specifying 'EnableHandwriting'.  Default is disabled.
  * preprocessing `string`: Optional, preprocessing mode, default is 'Auto'.  Possible values are None (no preprocessing of the image), and Auto (automatic image enhancement of the image - including automatic unrotation of the image - before OCR is applied; this is recommended).  Set this to 'None' if you do not want to use automatic image unrotation and enhancement.
  * diagnostics `string`: Optional, diagnostics mode, default is 'false'.  Possible values are 'true' (will set DiagnosticImage to a diagnostic PNG image in the result), and 'false' (no diagnostics are enabled; this is recommended for best performance).
  * language `string`: Optional, language of the input document, default is English (ENG).  Possible values are ENG (English), ARA (Arabic), ZHO (Chinese - Simplified), ZHO-HANT (Chinese - Traditional), ASM (Assamese), AFR (Afrikaans), AMH (Amharic), AZE (Azerbaijani), AZE-CYRL (Azerbaijani - Cyrillic), BEL (Belarusian), BEN (Bengali), BOD (Tibetan), BOS (Bosnian), BUL (Bulgarian), CAT (Catalan; Valencian), CEB (Cebuano), CES (Czech), CHR (Cherokee), CYM (Welsh), DAN (Danish), DEU (German), DZO (Dzongkha), ELL (Greek), ENM (Archaic/Middle English), EPO (Esperanto), EST (Estonian), EUS (Basque), FAS (Persian), FIN (Finnish), FRA (French), FRK (Frankish), FRM (Middle-French), GLE (Irish), GLG (Galician), GRC (Ancient Greek), HAT (Hatian), HEB (Hebrew), HIN (Hindi), HRV (Croatian), HUN (Hungarian), IKU (Inuktitut), IND (Indonesian), ISL (Icelandic), ITA (Italian), ITA-OLD (Old - Italian), JAV (Javanese), JPN (Japanese), KAN (Kannada), KAT (Georgian), KAT-OLD (Old-Georgian), KAZ (Kazakh), KHM (Central Khmer), KIR (Kirghiz), KOR (Korean), KUR (Kurdish), LAO (Lao), LAT (Latin), LAV (Latvian), LIT (Lithuanian), MAL (Malayalam), MAR (Marathi), MKD (Macedonian), MLT (Maltese), MSA (Malay), MYA (Burmese), NEP (Nepali), NLD (Dutch), NOR (Norwegian), ORI (Oriya), PAN (Panjabi), POL (Polish), POR (Portuguese), PUS (Pushto), RON (Romanian), RUS (Russian), SAN (Sanskrit), SIN (Sinhala), SLK (Slovak), SLV (Slovenian), SPA (Spanish), SPA-OLD (Old Spanish), SQI (Albanian), SRP (Serbian), SRP-LAT (Latin Serbian), SWA (Swahili), SWE (Swedish), SYR (Syriac), TAM (Tamil), TEL (Telugu), TGK (Tajik), TGL (Tagalog), THA (Thai), TIR (Tigrinya), TUR (Turkish), UIG (Uighur), UKR (Ukrainian), URD (Urdu), UZB (Uzbek), UZB-CYR (Cyrillic Uzbek), VIE (Vietnamese), YID (Yiddish)
  * imageFile **required** `string`: Image file to perform OCR on.  Common file formats such as PNG, JPEG are supported.

#### Output
* output [FormRecognitionResult](#formrecognitionresult)

### ImageOcr_PhotoRecognizeFormAdvanced
Analyzes a photograph of a form as input, and outputs key business fields and information.  Customzie data to be extracted by defining fields for the form.  Uses template definitions stored in Cloudmersive Configuration; to configure stored templates in a configuration bucket, log into Cloudmersive Management Portal and navigate to Settings &gt; API Configuration &gt; Create Bucket


```js
cloudmersive_ocr.ImageOcr_PhotoRecognizeFormAdvanced({
  "imageFile": ""
}, context)
```

#### Input
* input `object`
  * bucketID `string`: Bucket ID of the Configuration Bucket storing the form templates
  * bucketSecretKey `string`: Bucket Secret Key of the Configuration Bucket storing the form templates
  * recognitionMode `string`: Optional, enable advanced recognition mode by specifying 'Advanced', enable handwriting recognition by specifying 'EnableHandwriting'.  Default is disabled.
  * preprocessing `string`: Optional, preprocessing mode, default is 'Auto'.  Possible values are None (no preprocessing of the image), and Auto (automatic image enhancement of the image - including automatic unrotation of the image - before OCR is applied; this is recommended).  Set this to 'None' if you do not want to use automatic image unrotation and enhancement.
  * diagnostics `string`: Optional, diagnostics mode, default is 'false'.  Possible values are 'true' (will set DiagnosticImage to a diagnostic PNG image in the result), and 'false' (no diagnostics are enabled; this is recommended for best performance).
  * imageFile **required** `string`: Image file to perform OCR on.  Common file formats such as PNG, JPEG are supported.

#### Output
* output [FormRecognitionResult](#formrecognitionresult)

### ImageOcr_PhotoRecognizeReceipt
Analyzes a photograph of a receipt as input, and outputs key business information such as the name of the business, the address of the business, the phone number of the business, the total of the receipt, the date of the receipt, and more.


```js
cloudmersive_ocr.ImageOcr_PhotoRecognizeReceipt({
  "imageFile": ""
}, context)
```

#### Input
* input `object`
  * recognitionMode `string`: Optional, enable advanced recognition mode by specifying 'Advanced', enable handwriting recognition by specifying 'EnableHandwriting'.  Default is disabled.
  * language `string`: Optional, language of the input document, default is English (ENG).  Possible values are ENG (English), ARA (Arabic), ZHO (Chinese - Simplified), ZHO-HANT (Chinese - Traditional), ASM (Assamese), AFR (Afrikaans), AMH (Amharic), AZE (Azerbaijani), AZE-CYRL (Azerbaijani - Cyrillic), BEL (Belarusian), BEN (Bengali), BOD (Tibetan), BOS (Bosnian), BUL (Bulgarian), CAT (Catalan; Valencian), CEB (Cebuano), CES (Czech), CHR (Cherokee), CYM (Welsh), DAN (Danish), DEU (German), DZO (Dzongkha), ELL (Greek), ENM (Archaic/Middle English), EPO (Esperanto), EST (Estonian), EUS (Basque), FAS (Persian), FIN (Finnish), FRA (French), FRK (Frankish), FRM (Middle-French), GLE (Irish), GLG (Galician), GRC (Ancient Greek), HAT (Hatian), HEB (Hebrew), HIN (Hindi), HRV (Croatian), HUN (Hungarian), IKU (Inuktitut), IND (Indonesian), ISL (Icelandic), ITA (Italian), ITA-OLD (Old - Italian), JAV (Javanese), JPN (Japanese), KAN (Kannada), KAT (Georgian), KAT-OLD (Old-Georgian), KAZ (Kazakh), KHM (Central Khmer), KIR (Kirghiz), KOR (Korean), KUR (Kurdish), LAO (Lao), LAT (Latin), LAV (Latvian), LIT (Lithuanian), MAL (Malayalam), MAR (Marathi), MKD (Macedonian), MLT (Maltese), MSA (Malay), MYA (Burmese), NEP (Nepali), NLD (Dutch), NOR (Norwegian), ORI (Oriya), PAN (Panjabi), POL (Polish), POR (Portuguese), PUS (Pushto), RON (Romanian), RUS (Russian), SAN (Sanskrit), SIN (Sinhala), SLK (Slovak), SLV (Slovenian), SPA (Spanish), SPA-OLD (Old Spanish), SQI (Albanian), SRP (Serbian), SRP-LAT (Latin Serbian), SWA (Swahili), SWE (Swedish), SYR (Syriac), TAM (Tamil), TEL (Telugu), TGK (Tajik), TGL (Tagalog), THA (Thai), TIR (Tigrinya), TUR (Turkish), UIG (Uighur), UKR (Ukrainian), URD (Urdu), UZB (Uzbek), UZB-CYR (Cyrillic Uzbek), VIE (Vietnamese), YID (Yiddish)
  * preprocessing `string`: Optional, preprocessing mode, default is 'None'.  Possible values are None (no preprocessing of the image), and 'Advanced' (automatic image enhancement of the image before OCR is applied; this is recommended and needed to handle rotated receipts).
  * imageFile **required** `string`: Image file to perform OCR on.  Common file formats such as PNG, JPEG are supported.

#### Output
* output [ReceiptRecognitionResult](#receiptrecognitionresult)

### ImageOcr_PhotoWordsWithLocation
Converts a photo of a document or receipt in common formats such as JPEG, PNG into words/text with location information and other metdata via Optical Character Recognition.  This API is intended to be run on photographs of documents.  If you want to OCR scanned documents (e.g. taken with a scanner), be sure to use the image/toText API instead, as it is designed for that use case.


```js
cloudmersive_ocr.ImageOcr_PhotoWordsWithLocation({
  "imageFile": ""
}, context)
```

#### Input
* input `object`
  * recognitionMode `string`: Optional; possible values are 'Normal' which provides highly fault tolerant OCR recognition uses 26-30 API calls; and 'Advanced' which provides the highest quality and most fault-tolerant recognition uses 28-30 API calls.  Default recognition mode is 'Advanced'
  * language `string`: Optional, language of the input document, default is English (ENG).  Possible values are ENG (English), ARA (Arabic), ZHO (Chinese - Simplified), ZHO-HANT (Chinese - Traditional), ASM (Assamese), AFR (Afrikaans), AMH (Amharic), AZE (Azerbaijani), AZE-CYRL (Azerbaijani - Cyrillic), BEL (Belarusian), BEN (Bengali), BOD (Tibetan), BOS (Bosnian), BUL (Bulgarian), CAT (Catalan; Valencian), CEB (Cebuano), CES (Czech), CHR (Cherokee), CYM (Welsh), DAN (Danish), DEU (German), DZO (Dzongkha), ELL (Greek), ENM (Archaic/Middle English), EPO (Esperanto), EST (Estonian), EUS (Basque), FAS (Persian), FIN (Finnish), FRA (French), FRK (Frankish), FRM (Middle-French), GLE (Irish), GLG (Galician), GRC (Ancient Greek), HAT (Hatian), HEB (Hebrew), HIN (Hindi), HRV (Croatian), HUN (Hungarian), IKU (Inuktitut), IND (Indonesian), ISL (Icelandic), ITA (Italian), ITA-OLD (Old - Italian), JAV (Javanese), JPN (Japanese), KAN (Kannada), KAT (Georgian), KAT-OLD (Old-Georgian), KAZ (Kazakh), KHM (Central Khmer), KIR (Kirghiz), KOR (Korean), KUR (Kurdish), LAO (Lao), LAT (Latin), LAV (Latvian), LIT (Lithuanian), MAL (Malayalam), MAR (Marathi), MKD (Macedonian), MLT (Maltese), MSA (Malay), MYA (Burmese), NEP (Nepali), NLD (Dutch), NOR (Norwegian), ORI (Oriya), PAN (Panjabi), POL (Polish), POR (Portuguese), PUS (Pushto), RON (Romanian), RUS (Russian), SAN (Sanskrit), SIN (Sinhala), SLK (Slovak), SLV (Slovenian), SPA (Spanish), SPA-OLD (Old Spanish), SQI (Albanian), SRP (Serbian), SRP-LAT (Latin Serbian), SWA (Swahili), SWE (Swedish), SYR (Syriac), TAM (Tamil), TEL (Telugu), TGK (Tajik), TGL (Tagalog), THA (Thai), TIR (Tigrinya), TUR (Turkish), UIG (Uighur), UKR (Ukrainian), URD (Urdu), UZB (Uzbek), UZB-CYR (Cyrillic Uzbek), VIE (Vietnamese), YID (Yiddish)
  * preprocessing `string`: Optional, preprocessing mode, default is 'Auto'.  Possible values are None (no preprocessing of the image), and Auto (automatic image enhancement of the image before OCR is applied; this is recommended).
  * diagnostics `string`: Optional, diagnostics mode, default is 'false'.  Possible values are 'true' (will set DiagnosticImage to a diagnostic PNG image in the result), and 'false' (no diagnostics are enabled; this is recommended for best performance).
  * imageFile **required** `string`: Image file to perform OCR on.  Common file formats such as PNG, JPEG are supported.

#### Output
* output [PhotoToWordsWithLocationResult](#phototowordswithlocationresult)

### ImageOcr_PhotoToText
Converts an uploaded photo of a document in common formats such as JPEG, PNG into text via Optical Character Recognition.  This API is intended to be run on photos of documents, e.g. taken with a smartphone and supports cases where other content, such as a desk, are in the frame and the camera is crooked.  If you want to OCR a scanned image, use the image/toText API call instead as it is designed for scanned images.


```js
cloudmersive_ocr.ImageOcr_PhotoToText({
  "imageFile": ""
}, context)
```

#### Input
* input `object`
  * recognitionMode `string`: Optional; possible values are 'Basic' which provides basic recognition and is not resillient to page rotation, skew or low quality images uses 1-2 API calls; 'Normal' which provides highly fault tolerant OCR recognition uses 26-30 API calls; and 'Advanced' which provides the highest quality and most fault-tolerant recognition uses 28-30 API calls.  Default recognition mode is 'Advanced'
  * language `string`: Optional, language of the input document, default is English (ENG).  Possible values are ENG (English), ARA (Arabic), ZHO (Chinese - Simplified), ZHO-HANT (Chinese - Traditional), ASM (Assamese), AFR (Afrikaans), AMH (Amharic), AZE (Azerbaijani), AZE-CYRL (Azerbaijani - Cyrillic), BEL (Belarusian), BEN (Bengali), BOD (Tibetan), BOS (Bosnian), BUL (Bulgarian), CAT (Catalan; Valencian), CEB (Cebuano), CES (Czech), CHR (Cherokee), CYM (Welsh), DAN (Danish), DEU (German), DZO (Dzongkha), ELL (Greek), ENM (Archaic/Middle English), EPO (Esperanto), EST (Estonian), EUS (Basque), FAS (Persian), FIN (Finnish), FRA (French), FRK (Frankish), FRM (Middle-French), GLE (Irish), GLG (Galician), GRC (Ancient Greek), HAT (Hatian), HEB (Hebrew), HIN (Hindi), HRV (Croatian), HUN (Hungarian), IKU (Inuktitut), IND (Indonesian), ISL (Icelandic), ITA (Italian), ITA-OLD (Old - Italian), JAV (Javanese), JPN (Japanese), KAN (Kannada), KAT (Georgian), KAT-OLD (Old-Georgian), KAZ (Kazakh), KHM (Central Khmer), KIR (Kirghiz), KOR (Korean), KUR (Kurdish), LAO (Lao), LAT (Latin), LAV (Latvian), LIT (Lithuanian), MAL (Malayalam), MAR (Marathi), MKD (Macedonian), MLT (Maltese), MSA (Malay), MYA (Burmese), NEP (Nepali), NLD (Dutch), NOR (Norwegian), ORI (Oriya), PAN (Panjabi), POL (Polish), POR (Portuguese), PUS (Pushto), RON (Romanian), RUS (Russian), SAN (Sanskrit), SIN (Sinhala), SLK (Slovak), SLV (Slovenian), SPA (Spanish), SPA-OLD (Old Spanish), SQI (Albanian), SRP (Serbian), SRP-LAT (Latin Serbian), SWA (Swahili), SWE (Swedish), SYR (Syriac), TAM (Tamil), TEL (Telugu), TGK (Tajik), TGL (Tagalog), THA (Thai), TIR (Tigrinya), TUR (Turkish), UIG (Uighur), UKR (Ukrainian), URD (Urdu), UZB (Uzbek), UZB-CYR (Cyrillic Uzbek), VIE (Vietnamese), YID (Yiddish)
  * imageFile **required** `string`: Image file to perform OCR on.  Common file formats such as PNG, JPEG are supported.

#### Output
* output [ImageToTextResponse](#imagetotextresponse)

### Preprocessing_Binarize
Perform an adaptive binarization algorithm on the input image to prepare it for further OCR operations.


```js
cloudmersive_ocr.Preprocessing_Binarize({
  "imageFile": ""
}, context)
```

#### Input
* input `object`
  * imageFile **required** `string`: Image file to perform OCR on.  Common file formats such as PNG, JPEG are supported.

#### Output
* output `string`

### Preprocessing_BinarizeAdvanced
Perform an advanced adaptive, Deep Learning-based binarization algorithm on the input image to prepare it for further OCR operations.  Provides enhanced accuracy than adaptive binarization.  Image will be upsampled to 300 DPI if it has a DPI below 300.


```js
cloudmersive_ocr.Preprocessing_BinarizeAdvanced({
  "imageFile": ""
}, context)
```

#### Input
* input `object`
  * imageFile **required** `string`: Image file to perform OCR on.  Common file formats such as PNG, JPEG are supported.

#### Output
* output `string`

### Preprocessing_GetPageAngle
Analyzes a photo or image of a document and identifies the rotation angle of the page.


```js
cloudmersive_ocr.Preprocessing_GetPageAngle({
  "imageFile": ""
}, context)
```

#### Input
* input `object`
  * imageFile **required** `string`: Image file to perform OCR on.  Common file formats such as PNG, JPEG are supported.

#### Output
* output [GetPageAngleResult](#getpageangleresult)

### Preprocessing_Unrotate
Detect and unrotate an image of a document (e.g. that was scanned at an angle).  Great for document scanning applications; once unskewed, this image is perfect for converting to PDF using the Convert API or optical character recognition using the OCR API.


```js
cloudmersive_ocr.Preprocessing_Unrotate({
  "imageFile": ""
}, context)
```

#### Input
* input `object`
  * imageFile **required** `string`: Image file to perform OCR on.  Common file formats such as PNG, JPEG are supported.

#### Output
* output `string`

### Preprocessing_UnrotateAdvanced
Detect and unrotate an image of a document (e.g. that was scanned at an angle) using deep learning.  Great for document scanning applications; once unskewed, this image is perfect for converting to PDF using the Convert API or optical character recognition using the OCR API.


```js
cloudmersive_ocr.Preprocessing_UnrotateAdvanced({
  "imageFile": ""
}, context)
```

#### Input
* input `object`
  * imageFile **required** `string`: Image file to perform OCR on.  Common file formats such as PNG, JPEG are supported.

#### Output
* output `string`

### Preprocessing_Unskew
Detect and unskew a photo of a document (e.g. taken on a cell phone) into a perfectly square image.  Great for document scanning applications; once unskewed, this image is perfect for converting to PDF using the Convert API or optical character recognition using the OCR API.


```js
cloudmersive_ocr.Preprocessing_Unskew({
  "imageFile": ""
}, context)
```

#### Input
* input `object`
  * imageFile **required** `string`: Image file to perform OCR on.  Common file formats such as PNG, JPEG are supported.

#### Output
* output `string`

### Receipts_PhotoToCSV
Leverage Deep Learning to automatically turn a photo of a receipt into a CSV file containing the structured information from the receipt.


```js
cloudmersive_ocr.Receipts_PhotoToCSV({
  "imageFile": ""
}, context)
```

#### Input
* input `object`
  * imageFile **required** `string`: Image file to perform OCR on.  Common file formats such as PNG, JPEG are supported.

#### Output
* output `object`



## Definitions

### BusinessCardRecognitionResult
* BusinessCardRecognitionResult `object`: Result of recognizing a business card, to extract the key information from the business card
  * AddressString `string`: The address printed on the business card (if included on the business card)
  * BusinessName `string`: The name of the business printed on the business card (if included on the business card)
  * EmailAddress `string`: The email address printed on the business card (if included on the business card)
  * PersonName `string`: The name of the person printed on the business card (if included on the business card)
  * PersonTitle `string`: The title of the person printed on the business card (if included on the business card)
  * PhoneNumber `string`: The phone number printed on the business card (if included on the business card)
  * Successful `boolean`: True if the operation was successful, false otherwise
  * Timestamp `string`: The date and time printed on the business card (if included on the business card)

### FieldResult
* FieldResult `object`: A pairing target field and actual value read from form
  * FieldValues `array`: Result field value(s) extracted
    * items [OcrPhotoTextElement](#ocrphototextelement)
  * TargetField [FormFieldDefinition](#formfielddefinition)

### FormDefinitionTemplate
* FormDefinitionTemplate `object`: Definition of a form template; use a form template definition to recognize the fields in a form with Cloudmersive OCR
  * FieldDefinitions `array`: Field definitions in the template; a field is comprised of a key/value pair
    * items [FormFieldDefinition](#formfielddefinition)
  * TableDefinitions `array`: Table definitions in the template; a table is comprised of columns and rows and exists in a 2-dimensional layout; a common example of a table would be an invoice
    * items [FormTableDefinition](#formtabledefinition)

### FormFieldDefinition
* FormFieldDefinition `object`: Definition of a form field for OCR data extraction from images
  * AllowNumericDigits `boolean`: Optional - set to false to block values that contain numeric digits, set to true to allow numeric digits
  * AlternateAnchor `string`: Optional - alterate match text for the specified anchor
  * AnchorMode `string`: Optional - the matching mode for the anchor.  Possible values are Complete (requires the entire anchor to match) and Partial (allows only part of the anchor to match) and Horizontal (anchor must be laid out horizontally).  Default is Partial.
  * BottomAnchor `string`: Optional - the bottom anchor of the field
  * DataType `string`: The data type of the field; possible values are INTEGER (Integer value), STRING (Arbitrary string value, spaces are permitted), DATE (Date in a structured format), DECIMAL (Decimal number), ALPHANUMERIC (Continuous alphanumeric string with no spaces), STRINGNOWHITESPACE (A string that contains no whitespace characters), SERIALNUMBER (A serial-number style string that contains letters and numbers, and certain symbols; must contain at least one number), ALPHAONLY (Alphabet characters only, no numbers or symbols or whitespace)
  * FieldID `string`: The identifier of the field; use this to identify which field is being referenced.  Set to SkipField if you do not wish to return the value of this field in the result.
  * HorizontalAlignmentType `string`: Horizontal alignment of target value area relative to the field anchor; Possible values are Left, Right
  * Ignore `array`: Optional - Ignore any result items that contain a partial or complete match with these text strings
    * items `string`
  * LeftAnchor `string`: Optional - the left-hand anchor of the field
  * MinimumCharacterCount `integer`: Optional - the target number of digits in the field; useful for fixed-length fields
  * Options `string`: Optional - additional options that can be set for this field definition, separated by commas.  Possible values are AllowMultiMatch (allow the same anchor to be matched to multiple fields)
  * TargetDigitCount `integer`: Optional - the target number of digits in the field; useful for fixed-length fields
  * TargetFieldHeight_Relative `number`: Optional - scale factor for target field height - relative to height of field title
  * TargetFieldHorizontalAdjustment `number`: Optional - horizontal adjestment in relative width of the field
  * TargetFieldVerticalAdjustment `number`: Optional - vertical adjestment in relative height of the field
  * TargetFieldWidth_Relative `number`: Optional - scale factor for target field width - relative to width of field title; a value of 1.0 indicates the target value area has the same width as the field value as occurring in the image; a value of 2.0 would indicate that the target value area has 2 times the width of the field value as occurring in the image.
  * TopAnchor `string`: Optional - the top anchor of the field
  * VerticalAlignmentType `string`: Vertical alignment of target value area relative to the field anchor; Possible values are VCenter, Top, Bottom

### FormRecognitionResult
* FormRecognitionResult `object`: The result of extracting form field values
  * BestMatchFormSettingName `string`: Optional; populated when using photo/recognize/form/advanced with the Setting Name of the best-matching highest-relevance form
  * Diagnostics `array`: Diagnostic images - default is null, enable diagnostics=true to populate this parameter with one image per field
    * items `string`
  * FieldValueExtractionResult `array`: Result of form field OCR data extraction
    * items [FieldResult](#fieldresult)
  * Successful `boolean`: True if the operation was successful, false otherwise
  * TableValueExtractionResults `array`: Result of form table OCR data extraction
    * items [TableResult](#tableresult)

### FormTableColumnDefinition
* FormTableColumnDefinition `object`: Definition of a column within a table for OCR data extraction from images
  * AllowNumericDigits `boolean`: Optional - set to false to block values that contain numeric digits, set to true to allow numeric digits
  * AnchorMode `string`: Optional - the matching mode for the anchor.  Possible values are Complete (requires the entire anchor to match) and Partial (allows only part of the anchor to match).  Default is Partial.
  * ColumnID `string`: The identifier of the field; use this to identify which field is being referenced
  * DataType `string`: The data type of the field; possible values are INTEGER (Integer value), STRING (Arbitrary string value, spaces are permitted), DATE (Date in a structured format), DECIMAL (Decimal number), ALPHANUMERIC (Continuous alphanumeric string with no spaces), STRINGNOWHITESPACE (A string that contains no whitespace characters), SERIALNUMBER (A serial-number style string that contains letters and numbers, and certain symbols; must contain at least one number), ALPHAONLY (Alphabet characters only, no numbers or symbols or whitespace)
  * MinimumCharacterCount `integer`: Optional - the target number of digits in the field; useful for fixed-length fields
  * TopAnchor `string`: Optional - the top anchor of the column heading

### FormTableDefinition
* FormTableDefinition `object`: Definition of a form table for OCR data extraction from images
  * ColumnDefinitions `array`: Definition of the columns in the table
    * items [FormTableColumnDefinition](#formtablecolumndefinition)
  * TableID `string`: Optional; the ID of the table
  * TargetRowHeight_Relative `number`: Optional - scale factor for target row height - relative to height of column header
  * TargetTableHeight_Relative `number`: Optional - scale factor for target table height - relative to maximum height of headers of columns

### GetPageAngleResult
* GetPageAngleResult `object`: Result of performing a get-page-angle operation
  * Angle `number`: Angle of the page in radians; 0 represents perfectly horizontal
  * Successful `boolean`: True if the operation was successful, false otherwise

### ImageToLinesWithLocationResult
* ImageToLinesWithLocationResult `object`: Result of an image to lines-with-location OCR operation
  * Lines `array`: Words in the image
    * items [OcrLineElement](#ocrlineelement)
  * Successful `boolean`: True if successful, false otherwise

### ImageToTextResponse
* ImageToTextResponse `object`: Response from an OCR to text operation.  Includes the confience rating and converted text result.
  * MeanConfidenceLevel `number`: Confidence level rating of the OCR operation; ratings above 80% are strong.
  * TextResult `string`: Converted text string from the image input.

### ImageToWordsWithLocationResult
* ImageToWordsWithLocationResult `object`: Result of an image to words-with-location OCR operation
  * Successful `boolean`: True if successful, false otherwise
  * Words `array`: Word elements in the image
    * items [OcrWordElement](#ocrwordelement)

### OcrLineElement
* OcrLineElement `object`: A contiguous line of text in an OCR document
  * LineText `string`: Text of the line
  * Words `array`: Word objects in the line
    * items [OcrWordElement](#ocrwordelement)

### OcrPageResult
* OcrPageResult `object`
  * MeanConfidenceLevel `number`: Confidence level rating of the OCR operation; ratings above 80% are strong.
  * PageNumber `integer`: Page number of the page that was OCR-ed, starting with 1 for the first page in the PDF file
  * TextResult `string`: Converted text string from the image input.

### OcrPageResultWithLinesWithLocation
* OcrPageResultWithLinesWithLocation `object`: OCR results of a page, including lines of text and their location
  * Lines `array`: Word elements in the image
    * items [OcrLineElement](#ocrlineelement)
  * PageNumber `integer`: Page number of the page that was OCR-ed, starting with 1 for the first page in the PDF file
  * Successful `boolean`: True if successful, false otherwise

### OcrPageResultWithWordsWithLocation
* OcrPageResultWithWordsWithLocation `object`: OCR results of a page, including words of text and their location
  * PageNumber `integer`: Page number of the page that was OCR-ed, starting with 1 for the first page in the PDF file
  * Successful `boolean`: True if successful, false otherwise
  * Words `array`: Word elements in the image
    * items [OcrWordElement](#ocrwordelement)

### OcrPhotoTextElement
* OcrPhotoTextElement `object`: A single text in an OCR document
  * BoundingPoints `array`: Points that form the bounding polygon around the text
    * items [Point](#point)
  * ConfidenceLevel `number`: Confidence level of the machine learning result; possible values are 0.0 (lowest accuracy) - 1.0 (highest accuracy)
  * Height `integer`: Height of the word in pixels
  * Text `string`: Text of the word
  * Width `integer`: Width of the word in pixels
  * XLeft `integer`: X location of the left edge of the word in pixels
  * YTop `integer`: Y location of the top edge of the word in pixels

### OcrWordElement
* OcrWordElement `object`: A single word in an OCR document
  * BlockNumber `integer`: Index of the containing block
  * ConfidenceLevel `number`: Confidence level of the machine learning result; possible values are 0.0 (lowest accuracy) - 1.0 (highest accuracy)
  * Height `integer`: Height of the word in pixels
  * LineNumber `integer`: Line number of the word
  * PageNumber `integer`: Index of the containing page
  * ParagraphNumber `integer`: Index of the containing paragraph
  * Width `integer`: Width of the word in pixels
  * WordNumber `integer`: Index of the word in the line
  * WordText `string`: Text of the word
  * XLeft `integer`: X location of the left edge of the word in pixels
  * YTop `integer`: Y location of the top edge of the word in pixels

### PdfToLinesWithLocationResult
* PdfToLinesWithLocationResult `object`: Response from an OCR to lines with location operation.  Includes the confience rating and converted text result, along with the locations of the lines in the pages.
  * OcrPages `array`: OCR results for each page
    * items [OcrPageResultWithLinesWithLocation](#ocrpageresultwithlineswithlocation)
  * Successful `boolean`: True if successful, false otherwise

### PdfToTextResponse
* PdfToTextResponse `object`: Response from an OCR to text operation.  Includes the confidence rating and converted text result.
  * OcrPages `array`: Page OCR results
    * items [OcrPageResult](#ocrpageresult)
  * Successful `boolean`: True if successful, false otherwise

### PdfToWordsWithLocationResult
* PdfToWordsWithLocationResult `object`: Response from an OCR to words with location operation.  Includes the confience rating and converted text result, along with the locations of the words in the pages.
  * OcrPages `array`: OCR page results
    * items [OcrPageResultWithWordsWithLocation](#ocrpageresultwithwordswithlocation)
  * Successful `boolean`: True if successful, false otherwise

### PhotoToWordsWithLocationResult
* PhotoToWordsWithLocationResult `object`: Result of an photo to words-with-location OCR operation
  * DiagnosticImage `string`: Typically null.  To analyze OCR performance, enable diagnostic mode by adding the HTTP header "DiagnosticMode" with the value "true".  When this is true, a diagnostic image showing the details of the OCR result will be set in PNG format into DiagnosticImage.
  * Successful `boolean`: True if successful, false otherwise
  * TextElements `array`: Word elements in the image
    * items [OcrPhotoTextElement](#ocrphototextelement)

### Point
* Point `object`: Point location in 2D in an image, where 0, 0 represents the top/left corner of the image
  * X `integer`: X location in 2D in the image, where 0 represents the left edge of the image
  * Y `integer`: Y location in 2D in the image, where 0 represents the top edge of the image

### ReceiptLineItem
* ReceiptLineItem `object`: Receipt line item, comprised of a product or item and a price (if available)
  * ItemDescription `string`: Description of the item
  * ItemPrice `number`: Price of the item if available

### ReceiptRecognitionResult
* ReceiptRecognitionResult `object`: Result of recognizing a receipt, to extract the key information from the receipt
  * AddressString `string`: The address of the business printed on the receipt (if included on the receipt)
  * BusinessName `string`: The name of the business printed on the receipt (if included on the receipt)
  * BusinessWebsite `string`: The website URL of the business printed on the receipt (if included on the receipt)
  * PhoneNumber `string`: The phone number printed on the receipt (if included on the receipt)
  * ReceiptItems `array`: The individual line items comprising the order; does not include total (see ReceiptTotal)
    * items [ReceiptLineItem](#receiptlineitem)
  * ReceiptSubTotal `number`: Optional; if available, the monetary value of the receipt subtotal - typically not including specialized line items such as Tax. If this value is not available, it will be 0.
  * ReceiptTotal `number`: The total monetary value of the receipt (if included on the receipt)
  * Successful `boolean`: True if the operation was successful, false otherwise
  * Timestamp `string`: The date and time printed on the receipt (if included on the receipt)

### TableCellResult
* TableCellResult `object`: The recognition result of one cell in one row in a table of a form
  * CellValues `array`: Result cell value(s) extracted
    * items [OcrPhotoTextElement](#ocrphototextelement)
  * ColumnID `string`: The ID of the column

### TableResult
* TableResult `object`: The result of reading a table via OCR from a form
  * TableDefinition [FormTableDefinition](#formtabledefinition)
  * TableRowsResult `array`: Rows of data in the table
    * items [TableRowResult](#tablerowresult)

### TableRowResult
* TableRowResult `object`: One row of data in the resulting table
  * TableRowCellsResult `array`: Table cells in this row result
    * items [TableCellResult](#tablecellresult)


