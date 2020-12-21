# @datafire/taxrates

Client library for Taxrates.io

## Installation and Usage
```bash
npm install --save @datafire/taxrates
```
```js
let taxrates = require('@datafire/taxrates').create({
  Apikey: ""
});

.then(data => {
  console.log(data);
});
```

## Description

Taxrates.io API - the successfully streamlined tax rates monitoring process. We recommend using <a href='https://www.getpostman.com/' target=_new>Postman</a> when discovering our API. Happy using!

## Actions

### v1.tax.byaddress.post
This endpoint returns tax rates for the country based on the address provided <pre><code class="js">var taxrates_endpoint = 'tax/address';
  var taxrates_params = '?domain=api.taxrates.io';
  var taxrates_url = '/api/v1/';
  var taxrates_body = '{
    "street":"MyStreetName",
    "street_number":"107",
    "apartment_number":"d34",
    "city":"Dublin",
    "zip":"84534"
    "state":"",
    "country":"Ireland"
  }';
  if ( localStorage.getItem("Taxrates_API_Client_Secret") ){
  jQuery.support.cors = true;
  jQuery.ajax({
      url: taxrates_url+taxrates_endpoint+taxrates_params,
      type: 'post',
      method: 'post',
      dataType: "json",
      data: taxrates_body,
      beforeSend: function (request) {
              request.withCredentials = true;
              request.setRequestHeader("Authorization", "Apikey " + localStorage.getItem("Taxrates_API_Client_Secret"));
      },
      headers: {
        "accept": "application/json"
      },
      contentType: 'application/json; charset=utf-8',
      success: function (data) {
        //Maintain errors inside success because the API may return 200 in general, but different code inside
          if(data.ErrorCode=='404' || data.ErrorCode=='500'){
            //Maintain errors here
            console.log(data.ErrorMessage);
            return false;
          }else{
            var rates = [];
            var i=0;
            jQuery.each(data.Rates, function(k, v) {
                if(v.hasOwnProperty("taxes")){
                    jQuery.each(v.taxes, function(m, w) {
                        rates[i] = [];
                        //Only showing standard rate type
                        if( w.Type == "standard" ){
                            rates[i][0] = w.Country;
                            rates[i][1] = w.Type;
                            rates[i][2] = w.data_value;
                            i++;
                        }
                    });
                }
            //Now you have all your rates inside rates variable.
            }).fail(function(xhr) {
                    //Maintain your errors here
                    return false;
            });
            return true;
  }else{
    //Not logged into taxrates.io
    //Maintain your errors here
    return false;
  }</code></pre>



```js
taxrates.v1.tax.byaddress.post({
  "domain": "",
  "address": {}
}, context)
```

#### Input
* input `object`
  * domain **required** `string`: Domain name: api.taxrates.io
  * address **required** [Address](#address)
  * filter `string`: You can filter your taxes by one of following types: 'standard', 'reduced', 'second reduced', 'third reduced' and 'super reduced'.

#### Output
* output [Rates](#rates)

### v1.tax.countrycode.get
This endpoint returns all available tax rates for selected country <pre><code class="js">var taxrates_endpoint = 'tax/countrycode';
  var taxrates_params = {'domain':'api.taxrates.io', 'country_code':'IE'};
  var taxrates_url = '/api/v1/';
  if ( localStorage.getItem("Taxrates_API_Client_Secret") ){
  jQuery.support.cors = true;
  jQuery.ajax({
      url: taxrates_url+taxrates_endpoint,
      type: 'get',
      method: 'get',
      dataType: "json",
      data: taxrates_params,
      beforeSend: function (request) {
              request.withCredentials = true;
              request.setRequestHeader("Authorization", "Apikey " + localStorage.getItem("Taxrates_API_Client_Secret"));
      },
      headers: {
        "accept": "application/json"
      },
      contentType: 'application/json; charset=utf-8',
      success: function (data) {
        //Maintain errors inside success because the API may return 200 in general, but different code inside
          if(data.ErrorCode=='404' || data.ErrorCode=='500'){
            //Maintain errors here
            console.log(data.ErrorMessage);
            return false;
          }else{
            var rates = [];
            var i=0;
            jQuery.each(data.Rates, function(k, v) {
                if(v.hasOwnProperty("taxes")){
                    jQuery.each(v.taxes, function(m, w) {
                        rates[i] = [];
                        //Only showing standard rate type
                        if( w.Type == "standard" ){
                            rates[i][0] = w.Country;
                            rates[i][1] = w.Type;
                            rates[i][2] = w.data_value;
                            i++;
                        }
                    });
                }
            //Now you have all your rates inside rates variable.
            }).fail(function(xhr) {
                    //Maintain your errors here
                    return false;
            });
            return true;
  }else{
    //Not logged into taxrates.io
    //Maintain your errors here
    return false;
  }</code></pre>



```js
taxrates.v1.tax.countrycode.get({
  "domain": "",
  "country_code": ""
}, context)
```

#### Input
* input `object`
  * domain **required** `string`: Domain name: api.taxrates.io
  * country_code **required** `string`: Country code alpha 2
  * filter `string`: You can filter your taxes by one of following types: 'standard', 'reduced', 'second reduced', 'third reduced' and 'super reduced'.
  * zip `string`: You must provide a zip code if one of your selected countries is United States and you've had selected a state on your Taxrates.io member's dashboard.

#### Output
* output [Rates](#rates)

### v1.tax.ip.get
This endpoint will return tax rates for country discovered based on Customer's IP address <pre><code class="js">var taxrates_endpoint = 'tax/ip';
  var taxrates_params = {'domain':'api.taxrates.io', 'ip':'208.80.152.201'};
  var taxrates_url = '/api/v1/';
  if ( localStorage.getItem("Taxrates_API_Client_Secret") ){
  jQuery.support.cors = true;
  jQuery.ajax({
      url: taxrates_url+taxrates_endpoint,
      type: 'get',
      method: 'get',
      dataType: "json",
      data: taxrates_params,
      beforeSend: function (request) {
              request.withCredentials = true;
              request.setRequestHeader("Authorization", "Apikey " + localStorage.getItem("Taxrates_API_Client_Secret"));
      },
      headers: {
        "accept": "application/json"
      },
      contentType: 'application/json; charset=utf-8',
      success: function (data) {
        //Maintain errors inside success because the API may return 200 in general, but different code inside
          if(data.ErrorCode=='404' || data.ErrorCode=='500'){
            //Maintain errors here
            console.log(data.ErrorMessage);
            return false;
          }else{
            var rates = [];
            var i=0;
            jQuery.each(data.Rates, function(k, v) {
                if(v.hasOwnProperty("taxes")){
                    jQuery.each(v.taxes, function(m, w) {
                        rates[i] = [];
                        //Only showing standard rate type
                        if( w.Type == "standard" ){
                            rates[i][0] = w.Country;
                            rates[i][1] = w.Type;
                            rates[i][2] = w.data_value;
                            i++;
                        }
                    });
                }
            //Now you have all your rates inside rates variable.
            }).fail(function(xhr) {
                    //Maintain your errors here
                    return false;
            });
            return true;
  }else{
    //Not logged into taxrates.io
    //Maintain your errors here
    return false;
  }</code></pre>



```js
taxrates.v1.tax.ip.get({
  "domain": "",
  "ip": ""
}, context)
```

#### Input
* input `object`
  * domain **required** `string`: Domain name: api.taxrates.io
  * ip **required** `string`: Customer's IP address
  * filter `string`: You can filter your taxes by one of following types: 'standard', 'reduced', 'second reduced', 'third reduced' and 'super reduced'.
  * zip `string`: You must provide a zip code if one of your selected countries is United States and you've had selected a state on your Taxrates.io member's dashboard.

#### Output
* output `array`
  * items [Rates](#rates)

### v3.tax.rates.get
This method returns all tax rates configured on Member's account using cursor. Use X-Cursor-Next header to recursively read all rates. Max limit is 500 records per request. <pre><code class="js">
  var taxrates_endpoint = 'tax/rates';
  var taxrates_params = {'domain':'api.taxrates.io'};
  var taxrates_url = '/api/v3/';
  if ( localStorage.getItem("Taxrates_API_Client_Secret") ){
  jQuery.support.cors = true;
  jQuery.ajax({
      url: taxrates_url+taxrates_endpoint,
      type: 'get',
      method: 'get',
      dataType: "json",
      data: taxrates_params,
      beforeSend: function (request) {
              request.withCredentials = true;
              request.setRequestHeader("Authorization", "Apikey " + localStorage.getItem("Taxrates_API_Client_Secret"));
      },
      headers: {
        "accept": "application/json"
      },
      contentType: 'application/json; charset=utf-8',
      success: function (data) {
        //Maintain errors inside success because the API may return 200 in general, but different code inside
          if(data.ErrorCode=='404' || data.ErrorCode=='500'){
            //Maintain errors here
            console.log(data.ErrorMessage);
            return false;
          }else{
            var rates = [];
            var i=0;
            var taxrates_range = '';
            jQuery.each(data, function(k, v) {
                if(v.hasOwnProperty("rates")){
                    jQuery.each(v.rates, function(m, w) {
                        rates[i] = [];
                        //Only showing standard rate type
                        if( w.Type == "standard" ){
                            rates[i][0] = w.Type;
                            rates[i][1] = w.data_value;
                            i++;
                        }
                    });
                }
            //Now you have all your rates inside rates variable.
            }).fail(function(xhr) {
                    //Maintain your errors here
                    return false;
            });
            return true;
  }else{
    //Not logged into taxrates.io
    //Maintain your errors here
    return false;
  }</code></pre>



```js
taxrates.v3.tax.rates.get({
  "domain": ""
}, context)
```

#### Input
* input `object`
  * domain **required** `string`: Domain name: api.taxrates.io
  * filter `string`: You can filter your taxes by one of following types: 'standard', 'reduced', 'second reduced', 'third reduced' and 'super reduced'.
  * cursor `string`: Cursor shows from which record you want to get information. Default value is 0, next value can be retrieved from X-Cursor-Next header.

#### Output
* output `array`
  * items [Location](#location)



## Definitions

### Address
* Address `object`
  * apartment_number `string`: Apartment number if any
  * city `string`: City name
  * country `string`: Country name
  * postal_code `string`: City zip code
  * state `string`: Province or state
  * street `string`: Street
  * street_number `string`: Street number

### Error
* Error `object`
  * code `integer`
  * fields `string`
  * message `string`

### Location
* Location `object`
  * id `integer`
  * name `string`: Country name
  * rates `array`
    * items [TaxRate](#taxrate)
  * state `string`: State/province name if exists
  * zip `string`: Zipcode

### Rates
* Rates `object`
  * country_name `string`: The country name
  * taxes `array`
    * items [Tax](#tax)

### Tax
* Tax `object`
  * Country `string`: The country name
  * Type `string`: The tax type
  * data_name `string`: The tax name and description (VAT, GST, PIT, CIT etc)
  * data_value `string`: The tax value in percents

### TaxRate
* TaxRate `object`
  * data_name `string`: The tax name and description (VAT, GST, PIT, CIT etc)
  * data_value `string`: The tax value in percents
  * type `string`: The tax type


