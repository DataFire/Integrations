# @datafire/aiception

Client library for AIception Interactive

## Installation and Usage
```bash
npm install --save @datafire/aiception
```
```js
let aiception = require('@datafire/aiception').create({
  username: "",
  password: ""
});

.then(data => {
  console.log(data);
});
```

## Description

Here you can play & test & prototype all the endpoints using just your browser! Go ahead!

## Actions

### adult_content.post
Creates a new adult_content task that tells the if the image has nudity or sexual content.


```js
aiception.adult_content.post({
  "body": null
}, context)
```

#### Input
* input `object`
  * body **required** `object`
    * async `boolean`
    * image_url **required** `string`

#### Output
* output [Task](#task)

### adult_content.taskId.get
Gets the adult_content task.


```js
aiception.adult_content.taskId.get({
  "taskId": ""
}, context)
```

#### Input
* input `object`
  * taskId **required** `string`: An internal id for the task

#### Output
* output [Task](#task)

### artistic_image.post
Given an image content and a style image create a new stylized image of the content.


```js
aiception.artistic_image.post({
  "body": null
}, context)
```

#### Input
* input `object`
  * body **required** `object`
    * async `boolean`
    * image_url **required** `string`
    * style_url **required** `string`

#### Output
* output [Task](#task)

### artistic_image.taskId.get
The artistic_image will have the urls of the stylized images.


```js
aiception.artistic_image.taskId.get({
  "taskId": ""
}, context)
```

#### Input
* input `object`
  * taskId **required** `string`: An internal id for the task

#### Output
* output [Task](#task)

### detect_object.post
Creates a new detect object task that recognizes the object in the image.


```js
aiception.detect_object.post({
  "body": null
}, context)
```

#### Input
* input `object`
  * body **required** `object`
    * async `boolean`
    * image_url **required** `string`

#### Output
* output [Task](#task)

### detect_object.taskId.get
Gets the detect_object task.


```js
aiception.detect_object.taskId.get({
  "taskId": ""
}, context)
```

#### Input
* input `object`
  * taskId **required** `string`: An internal id for the task

#### Output
* output [Task](#task)

### face.post
Get a list of all the locations of the faces in the image.


```js
aiception.face.post({
  "body": null
}, context)
```

#### Input
* input `object`
  * body **required** `object`
    * async `boolean`
    * image_url **required** `string`

#### Output
* output [Task](#task)

### face.taskId.get
Gets the face task.


```js
aiception.face.taskId.get({
  "taskId": ""
}, context)
```

#### Input
* input `object`
  * taskId **required** `string`: An internal id for the task

#### Output
* output [Task](#task)

### face_age.post
Creates a new face age task that approximates the age of the person in the image.


```js
aiception.face_age.post({
  "body": null
}, context)
```

#### Input
* input `object`
  * body **required** `object`
    * async `boolean`
    * image_url **required** `string`

#### Output
* output [Task](#task)

### face_age.taskId.get
Gets the face_age task.


```js
aiception.face_age.taskId.get({
  "taskId": ""
}, context)
```

#### Input
* input `object`
  * taskId **required** `string`: An internal id for the task

#### Output
* output [Task](#task)



## Definitions

### AgeAnswer
* AgeAnswer `object`
  * max `integer`
  * min `integer`
  * score `number`

### Person
* Person `object`
  * firstName `string`
  * lastName `string`
  * username **required** `string`

### Persons
* Persons `array`
  * items [Person](#person)

### Task
* Task `object`
  * answer `number`: The answer you are looking for.
  * image_url **required** `string`: The url of the image that will be processed.
  * this_url `string`: Use this url to get this task.


