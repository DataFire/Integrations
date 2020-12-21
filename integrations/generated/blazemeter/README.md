# @datafire/blazemeter

Client library for Blazemeter API Explorer

## Installation and Usage
```bash
npm install --save @datafire/blazemeter
```
```js
let blazemeter = require('@datafire/blazemeter').create({
  apiKey: ""
});

.then(data => {
  console.log(data);
});
```

## Description

Live API Documentation

## Actions

### active_sessions
&nbsp; <i class="fa fa-lg fa-unlock-alt"></i>


```js
blazemeter.active_sessions(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [blazemeter\Model\ApiResponse](#blazemeter\model\apiresponse)

### panic_terminate
&nbsp; <i class="fa fa-lg fa-unlock-alt"></i>


```js
blazemeter.panic_terminate({}, context)
```

#### Input
* input `object`
  * blazemeter\Routing\v4\UserModel5 [blazemeter\Routing\v4\UserModel5](#blazemeter\routing\v4\usermodel5)

#### Output
* output [blazemeter\Model\ApiResponse](#blazemeter\model\apiresponse)

### retrieveCollections
List organization multi-tests&nbsp; <i class="fa fa-lg fa-unlock-alt"></i>


```js
blazemeter.retrieveCollections({}, context)
```

#### Input
* input `object`
  * skip `string`
  * limit `string`

#### Output
* output [blazemeter\Model\ApiResponse](#blazemeter\model\apiresponse)

### retrieveInvites
&nbsp; <i class="fa fa-lg fa-unlock-alt"></i>


```js
blazemeter.retrieveInvites(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items `string`

### retrieveLocations
Get user available locations&nbsp; <i class="fa fa-lg fa-unlock-alt"></i>


```js
blazemeter.retrieveLocations(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [blazemeter\Model\ApiResponse](#blazemeter\model\apiresponse)

### retrieveMasters
List user private masters&nbsp; <i class="fa fa-lg fa-unlock-alt"></i>


```js
blazemeter.retrieveMasters({}, context)
```

#### Input
* input `object`
  * skip `integer`
  * limit `integer`

#### Output
* output [blazemeter\Model\ApiResponse](#blazemeter\model\apiresponse)

### user.password.patch
Update user name&nbsp; <i class="fa fa-lg fa-unlock-alt"></i>


```js
blazemeter.user.password.patch({
  "blazemeter\\Routing\\v4\\UserModel1": null
}, context)
```

#### Input
* input `object`
  * blazemeter\Routing\v4\UserModel1 **required** [blazemeter\Routing\v4\UserModel1](#blazemeter\routing\v4\usermodel1)

#### Output
* output [blazemeter\Model\ApiResponse](#blazemeter\model\apiresponse)

### user.password.post
Update user name&nbsp; <i class="fa fa-lg fa-unlock-alt"></i>


```js
blazemeter.user.password.post({
  "blazemeter\\Routing\\v4\\UserModel3": null
}, context)
```

#### Input
* input `object`
  * blazemeter\Routing\v4\UserModel3 **required** [blazemeter\Routing\v4\UserModel3](#blazemeter\routing\v4\usermodel3)

#### Output
* output [blazemeter\Model\ApiResponse](#blazemeter\model\apiresponse)

### user.password.put
Update user name&nbsp; <i class="fa fa-lg fa-unlock-alt"></i>


```js
blazemeter.user.password.put({
  "blazemeter\\Routing\\v4\\UserModel2": null
}, context)
```

#### Input
* input `object`
  * blazemeter\Routing\v4\UserModel2 **required** [blazemeter\Routing\v4\UserModel2](#blazemeter\routing\v4\usermodel2)

#### Output
* output [blazemeter\Model\ApiResponse](#blazemeter\model\apiresponse)

### retrieveProjects
Get user projects&nbsp; <i class="fa fa-lg fa-unlock-alt"></i>


```js
blazemeter.retrieveProjects(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [blazemeter\Model\ApiResponse](#blazemeter\model\apiresponse)

### register_retrieve
Registration&nbsp; <i class="fa fa-lg fa-unlock-alt"></i>


```js
blazemeter.register_retrieve({
  "email": "",
  "password": ""
}, context)
```

#### Input
* input `object`
  * email **required** `string`: Email address
  * password **required** `string`: Password
  * firstName `string`: First name
  * lastName `string`: Last name

#### Output
* output [blazemeter\Model\ApiResponse](#blazemeter\model\apiresponse)

### register
Registration&nbsp; <i class="fa fa-lg fa-unlock-alt"></i>


```js
blazemeter.register({
  "blazemeter\\Routing\\v4\\UserModel4": null
}, context)
```

#### Input
* input `object`
  * blazemeter\Routing\v4\UserModel4 **required** [blazemeter\Routing\v4\UserModel4](#blazemeter\routing\v4\usermodel4)

#### Output
* output [blazemeter\Model\ApiResponse](#blazemeter\model\apiresponse)

### retrieveTests
List user private tests&nbsp; <i class="fa fa-lg fa-unlock-alt"></i>


```js
blazemeter.retrieveTests({}, context)
```

#### Input
* input `object`
  * skip `string`
  * limit `string`

#### Output
* output [blazemeter\Model\ApiResponse](#blazemeter\model\apiresponse)

### top
&nbsp; <i class="fa fa-lg fa-unlock-alt"></i>


```js
blazemeter.top(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items `string`



## Definitions

### ApiResponse
* ApiResponse `object`: ApiResponse Model
  * api_version **required** `string`
  * error **required** `string`
  * result **required** `string`

### UserModel1
* UserModel1 `object`: UserModel1 Model
  * currentPassword **required** `string`
  * newPassword **required** `string`

### UserModel2
* UserModel2 `object`: UserModel2 Model
  * currentPassword **required** `string`
  * newPassword **required** `string`

### UserModel3
* UserModel3 `object`: UserModel3 Model
  * currentPassword **required** `string`
  * newPassword **required** `string`

### UserModel4
* UserModel4 `object`: UserModel4 Model
  * email **required** `string`: Email address
  * firstName **required** `string`: First name
  * lastName **required** `string`: Last name
  * password **required** `string`: Password

### UserModel5
* UserModel5 `object`: UserModel5 Model
  * session_ids `array`
    * items `string`

### blazemeter\Model\ApiResponse


### blazemeter\Routing\v4\UserModel1


### blazemeter\Routing\v4\UserModel2


### blazemeter\Routing\v4\UserModel3


### blazemeter\Routing\v4\UserModel4


### blazemeter\Routing\v4\UserModel5



