# @datafire/amazonaws_codebuild

Client library for AWS CodeBuild

## Installation and Usage
```bash
npm install --save datafire @datafire/amazonaws_codebuild
```

```js
let datafire = require('datafire');
let amazonaws_codebuild = require('@datafire/amazonaws_codebuild').create();

amazonaws_codebuild.BatchGetBuilds({}).then(data => {
  console.log(data);
})
```

## Description
<fullname>AWS CodeBuild</fullname> <p>AWS CodeBuild is a fully managed build service in the cloud. AWS CodeBuild compiles your source code, runs unit tests, and produces artifacts that are ready to deploy. AWS CodeBuild eliminates the need to provision, manage, and scale your own build servers. It provides prepackaged build environments for the most popular programming languages and build tools, such as Apach Maven, Gradle, and more. You can also fully customize build environments in AWS CodeBuild to use your own build tools. AWS CodeBuild scales automatically to meet peak build requests, and you pay only for the build time you consume. For more information about AWS CodeBuild, see the <i>AWS CodeBuild User Guide</i>.</p> <p>AWS CodeBuild supports these operations:</p> <ul> <li> <p> <code>BatchGetProjects</code>: Gets information about one or more build projects. A <i>build project</i> defines how AWS CodeBuild will run a build. This includes information such as where to get the source code to build, the build environment to use, the build commands to run, and where to store the build output. A <i>build environment</i> represents a combination of operating system, programming language runtime, and tools that AWS CodeBuild will use to run a build. Also, you can add tags to build projects to help manage your resources and costs.</p> </li> <li> <p> <code>CreateProject</code>: Creates a build project.</p> </li> <li> <p> <code>DeleteProject</code>: Deletes a build project.</p> </li> <li> <p> <code>ListProjects</code>: Gets a list of build project names, with each build project name representing a single build project.</p> </li> <li> <p> <code>UpdateProject</code>: Changes the settings of an existing build project.</p> </li> <li> <p> <code>BatchGetBuilds</code>: Gets information about one or more builds.</p> </li> <li> <p> <code>ListBuilds</code>: Gets a list of build IDs, with each build ID representing a single build.</p> </li> <li> <p> <code>ListBuildsForProject</code>: Gets a list of build IDs for the specified build project, with each build ID representing a single build.</p> </li> <li> <p> <code>StartBuild</code>: Starts running a build.</p> </li> <li> <p> <code>StopBuild</code>: Attempts to stop running a build.</p> </li> <li> <p> <code>ListCuratedEnvironmentImages</code>: Gets information about Docker images that are managed by AWS CodeBuild.</p> </li> </ul>

## Actions
### BatchGetBuilds



```js
amazonaws_codebuild.BatchGetBuilds({
  "ids": []
}, context)
```

#### Parameters
* ids (array) **required**

### BatchGetProjects



```js
amazonaws_codebuild.BatchGetProjects({
  "names": []
}, context)
```

#### Parameters
* names (array) **required**

### CreateProject



```js
amazonaws_codebuild.CreateProject({
  "name": "",
  "source": {
    "type": ""
  },
  "artifacts": {
    "type": ""
  },
  "environment": {
    "type": "",
    "image": "",
    "computeType": ""
  }
}, context)
```

#### Parameters
* artifacts (object) **required** - Information about the build output artifacts for the build project.
* description (string)
* encryptionKey (string)
* environment (object) **required** - Information about the build environment of the build project.
* name (string) **required**
* serviceRole (string)
* source (object) **required** - Information about the build input source code for the build project.
* tags (array)
* timeoutInMinutes (integer)

### DeleteProject



```js
amazonaws_codebuild.DeleteProject({
  "name": ""
}, context)
```

#### Parameters
* name (string) **required**

### ListBuilds



```js
amazonaws_codebuild.ListBuilds({}, context)
```

#### Parameters
* nextToken (string)
* sortOrder (string)

### ListBuildsForProject



```js
amazonaws_codebuild.ListBuildsForProject({
  "projectName": ""
}, context)
```

#### Parameters
* nextToken (string)
* projectName (string) **required**
* sortOrder (string)

### ListCuratedEnvironmentImages



```js
amazonaws_codebuild.ListCuratedEnvironmentImages({}, context)
```

#### Parameters
*This action has no parameters*

### ListProjects



```js
amazonaws_codebuild.ListProjects({}, context)
```

#### Parameters
* nextToken (string)
* sortBy (string)
* sortOrder (string)

### StartBuild



```js
amazonaws_codebuild.StartBuild({
  "projectName": ""
}, context)
```

#### Parameters
* artifactsOverride (object) - Information about the build output artifacts for the build project.
* buildspecOverride (string)
* environmentVariablesOverride (array)
* projectName (string) **required**
* sourceVersion (string)
* timeoutInMinutesOverride (integer)

### StopBuild



```js
amazonaws_codebuild.StopBuild({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required**

### UpdateProject



```js
amazonaws_codebuild.UpdateProject({
  "name": ""
}, context)
```

#### Parameters
* artifacts (object) - Information about the build output artifacts for the build project.
* description (string)
* encryptionKey (string)
* environment (object) - Information about the build environment of the build project.
* name (string) **required**
* serviceRole (string)
* source (object) - Information about the build input source code for the build project.
* tags (array)
* timeoutInMinutes (integer)

