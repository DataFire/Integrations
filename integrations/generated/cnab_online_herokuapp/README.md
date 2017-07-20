# @datafire/cnab_online_herokuapp

Client library for Cnab Online

## Installation and Usage
```bash
npm install --save datafire @datafire/cnab_online_herokuapp
```

```js
let datafire = require('datafire');
let cnab_online_herokuapp = require('@datafire/cnab_online_herokuapp').actions;
let context = new datafire.Context();

cnab_online_herokuapp.file.post({}, context).then(data => {
  console.log(data);
})
```

## Description
Processe arquivos de retorno CNAB

## Actions
### file.post
Processa um arquivo CNAB para obter informações sobre o mesmo. Retorna um ID temporário para o mesmo.



```js
cnab_online_herokuapp.file.post({
  "file": ""
}, context)
```

#### Parameters
* file (string) **required** - Arquivo CNAB

### file.fileId.get
Retorna as informações básicas de um arquivo previamente processado


```js
cnab_online_herokuapp.file.fileId.get({
  "fileId": ""
}, context)
```

#### Parameters
* fileId (string) **required** - ID Temporário gerado no endpoint file

### file.fileId.lines.get
Retorna todas as linhas e seus respectivos campos (de forma não processada, apenas indicando os campos reconhecidos)


```js
cnab_online_herokuapp.file.fileId.lines.get({
  "fileId": ""
}, context)
```

#### Parameters
* fileId (string) **required** - ID Temporário gerado no endpoint file

### file.fileId.occurrences.get
Retorna as informações de baixa de boletos e outros tipos de ocorrências


```js
cnab_online_herokuapp.file.fileId.occurrences.get({
  "fileId": ""
}, context)
```

#### Parameters
* fileId (string) **required** - ID Temporário gerado no endpoint file

