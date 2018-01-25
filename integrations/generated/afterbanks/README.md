# @datafire/afterbanks

Client library for Afterbanks

## Installation and Usage
```bash
npm install --save @datafire/afterbanks
```
```js
let afterbanks = require('@datafire/afterbanks').create();

afterbanks.forms.get({}).then(data => {
  console.log(data);
});
```

## Description

La estandarización de la conexión con cualquier banco en tiempo real.

## Actions

### forms.get
Obtén una lista completa de los bancos soportados, así como los nombres de los campos necesarios para dibujar un formulario de login similar al oritinal del banco.



```js
afterbanks.forms.get({}, context)
```

#### Input
* input `object`
  * country_code `string`: Código del país, formato ISO 3166-1 alpha-2 (https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2). Por ejemplo ES para España. Si no se proporciona ningún código, se devolverá la lista completa.

#### Output
* output `array`
  * items [Forms](#forms)

### me.post
Devuelve información sobre mi licencia y uso de llamadas


```js
afterbanks.me.post({
  "servicekey": ""
}, context)
```

#### Input
* input `object`
  * servicekey **required** `string`: Licencia que identifica al cliente. Si no tienes una, puedes solicitarla en https://www.afterbanks.com

#### Output
* output [me](#me)

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

#### Input
* input `object`
  * servicekey **required** `string`: Licencia que identifica al cliente. Si no tienes una, puedes solicitarla en https://www.afterbanks.com
  * service **required** `string`: Identificador único para cada banco. El listado de bancos soportados se obtiene de https://www.afterbanks.com/forms/
  * documentType `number`: Algunos bancos, en su formulario de login, solicitan el tipo de documento. En estos casos, se deberá identificar un número entero (de 0 a 4), que corresponde con su posición en el formulario de login del banco.
  * user **required** `string`: Usuario
  * pass **required** `string`: Contraseña
  * pass2 `string`: Algunos bancos utilizan una segunda contraseña.
  * products `string`: Nombres de productos bancarios (cuentas corrientes, tarjetas, etc), separados por coma. Cabe destacar que en la primera llamada a la API, aún no conocemos los nombres de los productos que el usuario tiene contratados, por lo que este parámetro estará vacío.
  * startdate **required** `string`: Fecha desde la que queremos obtener los movimientos en formato dd-mm-aaaa. Obligatorio cuando el valor de "products" es distinto de GLOBAL.

#### Output
* output `array`
  * items [serviceV3](#servicev3)



## Definitions

### Error
* Error `object`
  * code `integer`: Posibles valores: description:  1, Genérico; 2, La web del banco esta fuera de servicio; 3, Algún dato de conexión no es válido; 4, La cuenta solicitada no existe; 5, Conexion cortada, reintente la solicitud; 6, El usuario debe acceder a la web del banco a realizar una acción; 50, Parametro incorrecto en la llamada a la API
  * message `string`: Texto detallando el error encontrado, en el idioma del banco

### Forms
* Forms `object`
  * business `boolean`: Valor booleano. Hay bancos que tienen accesos diferentes para particulares y para empresas. Si el valor es 1, indica que es acceso de empresas
  * country_code `string`: Código del país, formato ISO 3166-1 alpha-2 (https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2).
  * documentType `string`: Lista de valores posibles para el campo de "tipo de documento", separado por el caracter "|" (por ejemplo: NIF|Pasaporte|Tarjeta de residencia). En el caso de que el banco no requiera de esta información en su formulario de login, el valor es 0
  * fullname `string`: Nombre completo del banco.
  * image `string`: URL del icono del banco en formato PNG transparente y resolución 128x128.
  * pass `string`: Texto que acompaña al input box de password
  * pass2 `string`: Texto que acompaña al input box del segundo password. En el caso de que el banco no requiera de esta información en su formulario de login, el valor es 0
  * pass2desc `string`: Texto de ayuda para rellenar el inputbox de segundo password, en caso de que el formulario original del banco tenga algún texto de ayuda.
  * pass2type `string`: Texto que acompaña al input box del segundo password. En el caso de que el banco no requiera de esta información en su formulario de login, el valor es 0
  * passdesc `string`: Texto de ayuda para rellenar el inputbox de password, en caso de que el formulario original del banco tenga algún texto de ayuda.
  * passtype `string`: Texto que acompaña al input box de password
  * service `string`: Identificador único del banco en la API.
  * swift `string`: Código SWIFT, formato ISO 9362 (https://en.wikipedia.org/wiki/ISO_9362).
  * user `string`: Texto que acompaña al input box de usuario
  * userdesc `string`: Texto de ayuda para rellenar el inputbox de usuario, en caso de que el formulario original del banco tenga algún texto de ayuda.
  * usertype `string`: Texto que acompaña al input box de usuario

### Transactions
* Transactions `object`
  * amount `number`: Importe de la transacción
  * balance `number`: Saldo del producto en el instante posterior a la transacción
  * categoryId `number`: Id de categoría. Solo para las servicekeys con la opción contratada. Listado de categorías: https://www.afterbanks.com/serviceV3/categories/?country_code=ES
  * date `string`: Fecha del movimiento en formato dd-mm-yyyy
  * date2 `string`: Fecha de valor en formato dd-mm-yyyy
  * description `string`: Descricipción de la transacción
  * transactionId `string`: Identificador único de la transacción de 32 caracteres

### me
* me `object`
  * date_renewal `string`: Fecha de renovación del contador de llamadas, en formato dd-mm-yyyy
  * remaining_calls `integer`: Llamadas restantes para tu ciclo de facturación actual.

### serviceV3
* serviceV3 `object`
  * arranged_balance `number`: Saldo dispuesto
  * balance `number`: Saldo disponible del producto. Siempre existirá este saldo, el resto de valores balance podrán existir o no.
  * balance_credit_granted `number`: Saldo concedido
  * balance_value `number`: Saldo valor
  * countable_balance `number`: Saldo contable
  * currency `string`: Código de la divisa en formato [ISO 4217](http://en.wikipedia.org/wiki/ISO_4217).
  * description `string`: Nombre del producto. En ocasiones es un alias que ha asignado el usuario, o puede coincidir con el valor de product.
  * product `string`: Identificador único para un producto. Por ejemplo, número de cuenta bancaria o numeración de tarjeta de crédito.
  * transactions `array`
    * items [Transactions](#transactions)
  * type `string`: Tipo de producto. Los valores más habituales son "checking" para cuenta corriente, "card" para tarjeta de crédito, "debit" para tarjeta de débito y "loan" para préstamos. Los valores posibles son: card, checking, debit, deposit, insurance, investment, lineofcredit, loan, other, pensionplan, saving, securities, stocks


