# @datafire/hackathonwatch

Client library for HackathonWatch

## Installation and Usage
```bash
npm install --save @datafire/hackathonwatch
```
```js
let hackathonwatch = require('@datafire/hackathonwatch').create();

hackathonwatch.hackathons.coming.json.get({}).then(data => {
  console.log(data);
})
```

## Description



## Actions

### hackathons.coming.json.get
Return a list of coming hackathons


```js
hackathonwatch.hackathons.coming.json.get({}, context)
```

#### Input
* input `object`
  * page `integer`: Specify the page of coming hackathons.

#### Output
*Output schema unknown*

### hackathons.id.json.get
Return the detail of a given hackathon


```js
hackathonwatch.hackathons.id.json.get({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: ID of the hackathon for detail information

#### Output
*Output schema unknown*

### swagger_doc.json.get
Swagger compatible API description


```js
hackathonwatch.swagger_doc.json.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### swagger_doc.name.json.get
Swagger compatible API description for specific API


```js
hackathonwatch.swagger_doc.name.json.get({
  "name": ""
}, context)
```

#### Input
* input `object`
  * name **required** `string`: Resource name of mounted API

#### Output
*Output schema unknown*



## Definitions

**This integration has no definitions**
