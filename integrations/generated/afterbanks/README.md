# @datafire/afterbanks

Client library for Afterbanks

## Installation and Usage
```bash
npm install --save datafire @datafire/afterbanks
```

```js
let datafire = require('datafire');
let afterbanks = require('@datafire/afterbanks').create();

afterbanks.forms.get({}).then(data => {
  console.log(data);
})
```

## Description
La estandarización de la conexión con cualquier banco en tiempo real.

## Actions
### forms.get
Obtén una lista completa de los bancos soportados, así como los nombres de los campos necesarios para dibujar un formulario de login similar al oritinal del banco.



```js
afterbanks.forms.get({}, context)
```

#### Parameters
* country_code (string) - Código del país, formato ISO 3166-1 alpha-2 (https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2). Por ejemplo ES para España. Si no se proporciona ningún código, se devolverá la lista completa.

### me.post
Devuelve información sobre mi licencia y uso de llamadas


```js
afterbanks.me.post({
  "servicekey": ""
}, context)
```

#### Parameters
* servicekey (string) **required** - Licencia que identifica al cliente. Si no tienes una, puedes solicitarla en https://www.afterbanks.com

### serviceV3.post
Este endpoint devuelve el listado de productos y los movimientos para cada uno de los productos desde la fecha solicidata hasta el día actual. Existe un sandbox donde probar llamadas: https://www.afterbanks.com/sandbox/



```js
afterbanks.serviceV3.post({
  "servicekey": "",
  "service": "",
  "user": "",
  "pass": "",
  "startdate": ""
}, context)
```

#### Parameters
* servicekey (string) **required** - Licencia que identifica al cliente. Si no tienes una, puedes solicitarla en https://www.afterbanks.com
* service (string) **required** - Identificador único para cada banco. El listado de bancos soportados se obtiene de https://www.afterbanks.com/forms/
* documentType (number) - Algunos bancos, en su formulario de login, solicitan el tipo de documento. En estos casos, se deberá identificar un número entero (de 0 a 4), que corresponde con su posición en el formulario de login del banco.
* user (string) **required** - Usuario
* pass (string) **required** - Contraseña
* pass2 (string) - Algunos bancos utilizan una segunda contraseña.
* products (string) - Nombres de productos bancarios (cuentas corrientes, tarjetas, etc), separados por coma. Cabe destacar que en la primera llamada a la API, aún no conocemos los nombres de los productos que el usuario tiene contratados, por lo que este parámetro estará vacío.
* startdate (string) **required** - Fecha desde la que queremos obtener los movimientos en formato dd-mm-aaaa. Obligatorio cuando el valor de "products" es distinto de GLOBAL.

