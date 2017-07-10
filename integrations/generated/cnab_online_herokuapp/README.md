# @datafire/cnab_online_herokuapp
Processe arquivos de retorno CNAB

## Operation: file.post
Processa um arquivo CNAB para obter informações sobre o mesmo. Retorna um ID temporário para o mesmo.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "file": {
      "type": "string",
      "description": "Arquivo CNAB"
    }
  },
  "additionalProperties": false,
  "required": [
    "file"
  ]
}
```
### Output Schema
```json
{
  "properties": {
    "data": {
      "$ref": "#/definitions/File"
    }
  },
  "type": "object"
}
```
## Operation: file.fileId.get
Retorna as informações básicas de um arquivo previamente processado

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "fileId": {
      "type": "string",
      "description": "ID Temporário gerado no endpoint file"
    }
  },
  "additionalProperties": false,
  "required": [
    "fileId"
  ]
}
```
### Output Schema
```json
{
  "properties": {
    "data": {
      "$ref": "#/definitions/File"
    }
  },
  "type": "object"
}
```
## Operation: file.fileId.lines.get
Retorna todas as linhas e seus respectivos campos (de forma não processada, apenas indicando os campos reconhecidos)

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "fileId": {
      "type": "string",
      "description": "ID Temporário gerado no endpoint file"
    }
  },
  "additionalProperties": false,
  "required": [
    "fileId"
  ]
}
```
### Output Schema
```json
{
  "properties": {
    "data": {
      "items": {
        "$ref": "#/definitions/Line"
      },
      "type": "array"
    }
  },
  "type": "object"
}
```
## Operation: file.fileId.occurrences.get
Retorna as informações de baixa de boletos e outros tipos de ocorrências

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "fileId": {
      "type": "string",
      "description": "ID Temporário gerado no endpoint file"
    }
  },
  "additionalProperties": false,
  "required": [
    "fileId"
  ]
}
```
### Output Schema
```json
{
  "properties": {
    "data": {
      "items": {
        "$ref": "#/definitions/Occurrence"
      },
      "type": "array"
    }
  },
  "type": "object"
}
```
