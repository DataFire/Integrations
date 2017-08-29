# @datafire/getsandbox

Client library for Sandbox

## Installation and Usage
```bash
npm install --save datafire @datafire/getsandbox
```

```js
let datafire = require('datafire');
let getsandbox = require('@datafire/getsandbox').create({
  api_key: "",
});

getsandbox.getSandboxes({}).then(data => {
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

#### Parameters
* fromTimestamp (integer) - Timestamp to start search from, epoch time in milliseconds.
* sourceSandboxes (string) - Comma-separated list of Sandbox names to search.
* keyword (string) - A keyword to search activities by, will match any part of the ActivityMessage.
* allTypes (boolean) - Flag to return all types of activity, defaults to just Requests
* maxResults (integer) - Maximum number of results to return

### getSandboxes
getSandboxes


```js
getsandbox.getSandboxes({}, context)
```

#### Parameters
* filterType (string)

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

