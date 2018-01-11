# @datafire/cnab_online_herokuapp

Client library for Cnab Online

## Installation and Usage
```bash
npm install --save @datafire/cnab_online_herokuapp
```
```js
let cnab_online_herokuapp = require('@datafire/cnab_online_herokuapp').create();

cnab_online_herokuapp.file.post({}).then(data => {
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

#### Input
* input `object`
  * file **required** `string`: Arquivo CNAB

#### Output
* output `object`
  * data [File](#file)

### file.fileId.get
Retorna as informações básicas de um arquivo previamente processado


```js
cnab_online_herokuapp.file.fileId.get({
  "fileId": ""
}, context)
```

#### Input
* input `object`
  * fileId **required** `string`: ID Temporário gerado no endpoint file

#### Output
* output `object`
  * data [File](#file)

### file.fileId.lines.get
Retorna todas as linhas e seus respectivos campos (de forma não processada, apenas indicando os campos reconhecidos)


```js
cnab_online_herokuapp.file.fileId.lines.get({
  "fileId": ""
}, context)
```

#### Input
* input `object`
  * fileId **required** `string`: ID Temporário gerado no endpoint file

#### Output
* output `object`
  * data `array`
    * items [Line](#line)

### file.fileId.occurrences.get
Retorna as informações de baixa de boletos e outros tipos de ocorrências


```js
cnab_online_herokuapp.file.fileId.occurrences.get({
  "fileId": ""
}, context)
```

#### Input
* input `object`
  * fileId **required** `string`: ID Temporário gerado no endpoint file

#### Output
* output `object`
  * data `array`
    * items [Occurrence](#occurrence)



## Definitions

### Error
* Error `object`
  * errors `array`
    * items `object`
      * detail `string`
      * title `string`

### File
* File `object`
  * attributes `object`
    * account_number `string`: Número da conta à qual este arquivo está vinculado
    * bank_code `integer`: Código do banco
    * bank_name `string`: Nome do banco
    * company_name `string`: Nome da empresa a quem pertence este arquivo
    * generation_date `string`: Data em que este arquivo foi gerado
    * name `string`: Nome do arquivo
  * id `string`: Id temporário gerado para o arquivo
  * type `string`: Sempre 'files' para seguir a especificação JSON API

### Line
* Line `object`
  * attributes `object`
    * identified_fields `array`
      * items `object`
        * end `integer`
        * name `string`
        * start `integer`
        * value `string`
    * raw_text `string`: Linha completa (em texto)
  * id `string`: Posição desta linha em relação as outras
  * type `string`: Sempre 'lines' para seguir a especificação JSON API

### Occurrence
* Occurrence `object`
  * attributes `object`
    * agency `string`: Retorna o número da agencia
    * bank_tax `number`: Tarifa bancária
    * charged_agency `string`: Retorna a agencia cobradora (com o digito)
    * code `string`: Código de Ocorrência conforme o padrão CNAB
    * code_name `string`: Nome do código
    * credit_date `string`: Retorna a data em que o dinheiro caiu na conta
    * discount_value `number`: Valor de desconto
    * document_number `string`: Retorna o número do documento do boleto
    * due_date `string`: Retorna a data de vencimento de boleto
    * iof_tax `number`: Retorna o valor do Imposto sobre operações financeiras (IOF)
    * is_dda `string`: Retorna de o boleto foi pago através do Débito Direto Autorizado
    * is_payment `boolean`: Retorna se é para dar baixa no boleto
    * is_rejected_payment `boolean`: Retorno se é uma baixa rejeitada (Ex: pedido de baixa foi rejeitado)
    * liquidation_code `string`: Retorna o código de liquidação, normalmente usado para saber onde o cliente efetuou o pagamento
    * liquidation_description `string`: Retorna a descrição do código de liquidação
    * mulct_value `string`: Retorna o valor de juros e mora
    * occurrence_date `string`: Retorna a data da ocorrencia, o dia do pagamento
    * others_credits_value `number`: Retorna o valor de outros creditos
    * our_number `string`: Retorna o nosso número do boleto (sem o digito)
    * payer_allegation `string`: Retorna a alegação do pagador (para erros)
    * rebate_value `number`: Retornna o valor dos abatimentos concedidos (depois da emissão)
    * received_value `number`: Valor recebido
    * sequencial_number `number`: Retorna o numero sequencial da ocorrência no arquivo
    * title_value `number`: Valor do título (valor do boleto)
    * wallet `string`: Retorna o número da carteira do boleto
  * id `integer`: Posição da ocorrência em relação às outras ocorrências processadas neste mesmo arquivo
  * type `string`: Sempre 'occurrences' para seguir a especificação JSON API


