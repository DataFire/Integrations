# @datafire/getsandbox

Client library for Sandbox

## Installation and Usage
```bash
npm install --save datafire @datafire/getsandbox
```

```js
let datafire = require('datafire');
let getsandbox = require('@datafire/getsandbox').actions;

let account = {
  api_key: "",
}
let context = new datafire.Context({
  accounts: {
    getsandbox: account,
  }
})


getsandbox.getSandboxes({}, context).then(data => {
  console.log(data);
})
```

## Description
Sandbox API

## Actions
### getSandboxesActivity
searchActivity


```js
getsandbox.getSandboxesActivity({}, context)
```


### getSandboxes
getSandboxes


```js
getsandbox.getSandboxes({}, context)
```


### createSandbox
createSandbox


```js
getsandbox.createSandbox({
  "body": {}
}, context)
```

#### Parameters
* body (object) **required**

### deleteSandbox
deleteSandbox


```js
getsandbox.deleteSandbox({
  "sandboxName": ""
}, context)
```

#### Parameters
* sandboxName (string) **required** - Name of the Sandbox

### getSandbox
getSandbox


```js
getsandbox.getSandbox({
  "sandboxName": ""
}, context)
```

#### Parameters
* sandboxName (string) **required** - Name of the Sandbox

### updateSandbox
updateSandbox


```js
getsandbox.updateSandbox({
  "sandboxName": "",
  "body": {
    "name": ""
  }
}, context)
```

#### Parameters
* sandboxName (string) **required** - Name of the Sandbox
* body (object) **required**

### forkSandbox
forkSandbox


```js
getsandbox.forkSandbox({
  "sandboxName": ""
}, context)
```

#### Parameters
* sandboxName (string) **required** - Name of the Sandbox

### deleteSandboxState
deleteSandboxState


```js
getsandbox.deleteSandboxState({
  "sandboxName": ""
}, context)
```

#### Parameters
* sandboxName (string) **required** - Name of the Sandbox

### getSandboxState
getSandboxState


```js
getsandbox.getSandboxState({
  "sandboxName": ""
}, context)
```

#### Parameters
* sandboxName (string) **required** - Name of the Sandbox

