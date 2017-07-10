# @datafire/apimatic
Transform API Descriptions from/to various formats

## Operation: ConvertAPI
Transform API Descriptions from/to various formats e.g., Swagger, API Blueprint, RAML, WADL, Google Discovery, I/O Docs.

### INPUTS
* API Blueprint
* Swagger 1.0 - 1.2
* Swagger 2.0 JSON
* Swagger 2.0 YAML
* WADL - W3C 2009
* Google Discovery
* RAML 0.8
* I/O Docs - Mashery
* HAR 1.2
* Postman Collection 1.0 - 2.0
* APIMATIC Format
* Mashape

### OUTPUTS
* API Blueprint
* Swagger 1.2
* Swagger 2.0 JSON
* Swagger 2.0 YAML
* WADL - W3C 2009
* RAML 0.8 - 1.0
* APIMATIC Format

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "format": {
      "type": "string",
      "enum": [
        "swagger10",
        "swagger20",
        "swaggeryaml",
        "apiblueprint",
        "wadl2009",
        "raml",
        "apimatic"
      ]
    },
    "url": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "format"
  ]
}
```
### Output Schema
```json
{
  "type": "object"
}
```
