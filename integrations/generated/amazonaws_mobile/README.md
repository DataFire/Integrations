# @datafire/amazonaws_mobile

Client library for AWS Mobile

## Installation and Usage
```bash
npm install --save datafire @datafire/amazonaws_mobile
```

```js
let datafire = require('datafire');
let amazonaws_mobile = require('@datafire/amazonaws_mobile').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: "",
});

amazonaws_mobile.ListBundles({}).then(data => {
  console.log(data);
})
```

## Description
 AWS Mobile Service provides mobile app and website developers with capabilities required to configure AWS resources and bootstrap their developer desktop projects with the necessary SDKs, constants, tools and samples to make use of those resources. 

## Actions
### ListBundles



```js
amazonaws_mobile.ListBundles({}, context)
```

#### Parameters
* maxResults (string)
* nextToken (string)

### ExportBundle



```js
amazonaws_mobile.ExportBundle({
  "bundleId": ""
}, context)
```

#### Parameters
* bundleId (string) **required**

### ExportProject



```js
amazonaws_mobile.ExportProject({
  "projectId": ""
}, context)
```

#### Parameters
* projectId (string) **required**

### DescribeProject



```js
amazonaws_mobile.DescribeProject({}, context)
```

#### Parameters
*This action has no parameters*

### ListProjects



```js
amazonaws_mobile.ListProjects({}, context)
```

#### Parameters
* maxResults (string)
* nextToken (string)

### DeleteProject



```js
amazonaws_mobile.DeleteProject({
  "projectId": ""
}, context)
```

#### Parameters
* projectId (string) **required**

### UpdateProject



```js
amazonaws_mobile.UpdateProject({}, context)
```

#### Parameters
* contents (string) -  Binary file data. 

