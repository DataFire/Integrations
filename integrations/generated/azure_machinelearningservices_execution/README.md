# @datafire/azure_machinelearningservices_execution

Client library for Execution Service

## Installation and Usage
```bash
npm install --save @datafire/azure_machinelearningservices_execution
```
```js
let azure_machinelearningservices_execution = require('@datafire/azure_machinelearningservices_execution').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

.then(data => {
  console.log(data);
});
```

## Description



## Actions

### Runs_CancelRunWithUri
Cancels a run within an experiment.


```js
azure_machinelearningservices_execution.Runs_CancelRunWithUri({
  "subscriptionId": "",
  "resourceGroupName": "",
  "workspaceName": "",
  "experimentName": "",
  "runId": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The Azure Subscription ID.
  * resourceGroupName **required** `string`: The Name of the resource group in which the workspace is located.
  * workspaceName **required** `string`: The name of the workspace.
  * experimentName **required** `string`: The experiment name.
  * runId **required** `string`: The id of the run to cancel.

#### Output
* output [StartRunResult](#startrunresult)

### Runs_StartSnapshotRun
Starts an experiment run on the remote compute target using the provided definition.json file to define the run.
            The code for the run is retrieved using the snapshotId in definition.json.


```js
azure_machinelearningservices_execution.Runs_StartSnapshotRun({
  "subscriptionId": "",
  "resourceGroupName": "",
  "workspaceName": "",
  "experimentName": "",
  "definition": {}
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The Azure Subscription ID.
  * resourceGroupName **required** `string`: The Name of the resource group in which the workspace is located.
  * workspaceName **required** `string`: The name of the workspace.
  * experimentName **required** `string`: The experiment name.
  * definition **required** [RunDefinition](#rundefinition)
  * runId `string`: A run id. If not supplied a run id will be created automatically.

#### Output
* output [StartRunResult](#startrunresult)

### Runs_StartLocalRun
Starts an experiment run using the provided definition.json file to define the run.
            The source code and configuration is defined in a zip archive in project.zip.


```js
azure_machinelearningservices_execution.Runs_StartLocalRun({
  "subscriptionId": "",
  "resourceGroupName": "",
  "workspaceName": "",
  "experimentName": "",
  "definition": {}
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The Azure Subscription ID.
  * resourceGroupName **required** `string`: The Name of the resource group in which the workspace is located.
  * workspaceName **required** `string`: The name of the workspace.
  * experimentName **required** `string`: The experiment name.
  * definition **required** [RunDefinition](#rundefinition)
  * runId `string`: A run id. If not supplied a run id will be created automatically.

#### Output
* output `file`

### Runs_StartRun
Starts an experiment run using the provided definition.json file to define the run.
            The source code and configuration is defined in a zip archive in project.zip.


```js
azure_machinelearningservices_execution.Runs_StartRun({
  "subscriptionId": "",
  "resourceGroupName": "",
  "workspaceName": "",
  "experimentName": "",
  "runDefinitionFile": "",
  "projectZipFile": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`: The Azure Subscription ID.
  * resourceGroupName **required** `string`: The Name of the resource group in which the workspace is located.
  * workspaceName **required** `string`: The name of the workspace.
  * experimentName **required** `string`: The experiment name.
  * runDefinitionFile **required** `string`, `object`: The JSON file containing the RunDefinition
    * content `string`
    * encoding `string` (values: ascii, utf8, utf16le, base64, binary, hex)
    * contentType `string`
    * filename `string`
  * projectZipFile **required** `string`, `object`: The zip archive of the project folder containing the source code to use for the run.
    * content `string`
    * encoding `string` (values: ascii, utf8, utf16le, base64, binary, hex)
    * contentType `string`
    * filename `string`
  * runId `string`: A run id. If not supplied a run id will be created automatically.

#### Output
* output [StartRunResult](#startrunresult)



## Definitions

### ContainerRegistry
* ContainerRegistry `object`
  * address `string`
  * password `string`
  * username `string`

### DataReferenceConfiguration
* DataReferenceConfiguration `object`: A class for managing DataReferenceConfiguration.
  * dataStoreName `string`: The name of the data store.
  * mode `string` (values: Mount, Download, Upload): Operation on the datastore, mount, download, upload.
  * overwrite `boolean`: Whether to overwrite the data if existing.
  * pathOnCompute `string`: The path on the compute target.
  * pathOnDataStore `string`: Relative path on the datastore.

### DockerSection
* DockerSection `object`
  * arguments `array`: Extra arguments to the Docker run command.
    * items `string`
  * baseDockerfile `string`: Base Dockerfile used for Docker-based runs. Mutually exclusive with BaseImage.
  * baseImage `string`: Base image used for Docker-based runs. Mutually exclusive with BaseDockerfile.
  * baseImageRegistry [ContainerRegistry](#containerregistry)
  * enabled `boolean`: Set true to perform this run inside a Docker container.
  * sharedVolumes `boolean`: Set false to disable AzureML's usage of the Docker shared volumes feature to work around bugs in certain versions of Docker for Windows.

### EnvironmentDefinition
* EnvironmentDefinition `object`
  * docker [DockerSection](#dockersection)
  * environmentVariables `object`: Definition of environment variables to be defined in the environment.
  * inferencingStackVersion `string`: The inferencing stack version added to the image. To avoid adding an inferencing stack, do not set this value. Valid values: "latest".
  * name `string`: The name of the environment.
  * python [PythonSection](#pythonsection)
  * spark [SparkSection](#sparksection)
  * version `string`: The environment version.

### ErrorDetails
* ErrorDetails `object`: The error details.
  * code `string`: The error code.
  * message `string`: The error message.
  * target `string`: The target of the error (e.g., the name of the property in error).

### ErrorResponse
* ErrorResponse `object`: The error response.
  * correlation `object`: Dictionary containing correlation details for the error.
  * environment `string`: The hosting environment.
  * error [RootError](#rooterror)
  * location `string`: The Azure region.
  * time `string`: The time in UTC.

### HdiConfiguration
* HdiConfiguration `object`
  * yarnDeployMode `string` (values: None, Client, Cluster)

### HistoryConfiguration
* HistoryConfiguration `object`
  * directoriesToWatch `array`: The list of directories to monitor and upload files from.
    * items `string`
  * outputCollection `boolean`: Set to true to collect outputs and store in run history.

### InnerErrorResponse
* InnerErrorResponse `object`: A nested structure of errors.
  * code `string`: The error code.
  * innerError [InnerErrorResponse](#innererrorresponse)

### MpiConfiguration
* MpiConfiguration `object`
  * processCountPerNode `integer`: Number of processes per node.

### PythonSection
* PythonSection `object`
  * baseCondaEnvironment `string`
  * condaDependencies `object`
  * interpreterPath `string`: The python interpreter path. This is only used when user_managed_dependencies=True.
  * userManagedDependencies `boolean`: True means that AzureML reuses an existing python environment; False means that AzureML will create a python environment based on the Conda dependencies specification.

### RootError
* RootError `object`: The root error.
  * code `string`: The service-defined error code. Supported error codes: ServiceError, UserError, ValidationError, AzureStorageError, TransientError, RequestThrottled.
  * details `array`: The related errors that occurred during the request.
    * items [ErrorDetails](#errordetails)
  * innerError [InnerErrorResponse](#innererrorresponse)
  * message `string`: A human-readable representation of the error.
  * target `string`: The target of the error (e.g., the name of the property in error).

### RunConfiguration
* RunConfiguration `object`
  * arguments `array`: Command line arguments for the python script file.
    * items `string`
  * communicator `string` (values: None, ParameterServer, Gloo, Mpi, Nccl): The supported communicators are None, ParameterServer, OpenMpi, and IntelMpi Keep in mind that OpenMpi requires a custom image with OpenMpi installed.
  * dataReferences `object`: All the data sources are made available to the run during execution based on each configuration.
  * environment [EnvironmentDefinition](#environmentdefinition)
  * framework `string` (values: Python, PySpark, Cntk, TensorFlow, PyTorch): The supported frameworks are Python, PySpark, CNTK, TensorFlow, and PyTorch. Use Tensorflow for AmlCompute clusters, and Python for distributed training jobs.
  * hdi [HdiConfiguration](#hdiconfiguration)
  * history [HistoryConfiguration](#historyconfiguration)
  * jobName `string`: This is primarily intended for notebooks to override the default job name.
  * maxRunDurationSeconds `integer`: Maximum allowed time for the run. The system will attempt to automatically cancel the run if it took longer than this value.
  * mpi [MpiConfiguration](#mpiconfiguration)
  * nodeCount `integer`: Number of compute nodes to run the job on. Only applies to AMLCompute.
  * script `string`: The relative path to the python script file. The file path is relative to the source_directory passed to submit run.
  * spark [SparkConfiguration](#sparkconfiguration)
  * target `string`: Target refers to compute where the job is scheduled for execution. The default target is "local" referring to the local machine.
  * tensorflow [TensorflowConfiguration](#tensorflowconfiguration)

### RunDefinition
* RunDefinition `object`
  * configuration [RunConfiguration](#runconfiguration)
  * parentRunId `string`: Specifies that the run history entry for this execution should be scoped within
  * runType `string`: Specifies the runsource property for this run. The default value is "experiment" if not specified.
  * snapshotId `string`: Snapshots are user project folders that have been uploaded to the cloud for subsequent

### SparkConfiguration
* SparkConfiguration `object`
  * configuration `object`

### SparkMavenPackage
* SparkMavenPackage `object`
  * artifact `string`
  * group `string`
  * version `string`

### SparkSection
* SparkSection `object`
  * packages `array`: The Spark packages to use.
    * items [SparkMavenPackage](#sparkmavenpackage)
  * precachePackages `boolean`: Whether to precache the packages.
  * repositories `array`: The list of spark repositories.
    * items `string`

### StartRunResult
* StartRunResult `object`: Contains the details of a run.
  * runId **required** `string`: The identifier for a run.

### TensorflowConfiguration
* TensorflowConfiguration `object`
  * parameterServerCount `integer`: Number of parameter servers.
  * workerCount `integer`: The number of workers.


