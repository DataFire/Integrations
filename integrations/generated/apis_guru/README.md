# @datafire/apis_guru
Wikipedia for Web APIs. Repository of API specs in OpenAPI(fka Swagger) 2.0 format.

**Warning**: If you want to be notified about changes in advance please subscribe to our [Gitter channel](https://gitter.im/APIs-guru/api-models).

Client sample: [[Demo]](https://apis.guru/simple-ui) [[Repo]](https://github.com/APIs-guru/simple-ui)


## Operation: listAPIs
List all APIs in the directory.
Returns links to OpenAPI specification for each API in the directory.
If API exist in multiply versions `preferred` one is explicitly marked.

Some basic info from OpenAPI spec is cached inside each object.
This allows to generate some simple views without need to fetch OpenAPI spec for each API.


### Input Schema
```json
{}
```
### Output Schema
```json
{
  "$ref": "#/definitions/APIs"
}
```
## Operation: getMetrics
Some basic metrics for the entire directory.
Just stunning numbers to put on a front page and are intended purely for WoW effect :)


### Input Schema
```json
{}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Metrics"
}
```
