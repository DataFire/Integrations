# @datafire/azure_machinelearningservices_hyperdrive

Client library for HyperDrive

## Installation and Usage
```bash
npm install --save @datafire/azure_machinelearningservices_hyperdrive
```
```js
let azure_machinelearningservices_hyperdrive = require('@datafire/azure_machinelearningservices_hyperdrive').create({
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

HyperDrive REST API

## Actions

### HyperparameterTuning_CreateExperiment
Create a HyperDrive Experiment.


```js
azure_machinelearningservices_hyperdrive.HyperparameterTuning_CreateExperiment({
  "armScope": "",
  "config": ""
}, context)
```

#### Input
* input `object`
  * armScope **required** `string`: The ARM scope passed in through URL with format:
  * config **required** `string`, `object`: The configuration file with experiment JSON content. A text file that is a JSON-serialized '#/definitions/HyperDriveCreateExperiment' object.
    * content `string`
    * encoding `string` (values: ascii, utf8, utf16le, base64, binary, hex)
    * contentType `string`
    * filename `string`

#### Output
* output [HyperDriveExperimentResponse](#hyperdriveexperimentresponse)

### HyperparameterTuning_CancelExperiment
Cancel a HyperDrive Experiment.


```js
azure_machinelearningservices_hyperdrive.HyperparameterTuning_CancelExperiment({
  "armScope": "",
  "runId": ""
}, context)
```

#### Input
* input `object`
  * armScope **required** `string`: The ARM scope passed in through URL with format:
  * runId **required** `string`: Hyperdrive run id to cancel.
  * RunHistoryHost `string`: The host for run location.

#### Output
* output [HyperDriveCancelExperimentResponse](#hyperdrivecancelexperimentresponse)



## Definitions

### HyperDriveBanditPolicy
* HyperDriveBanditPolicy `object`: Bandit Policy configuration. Please refer https://docs.microsoft.com/en-us/python/api/azureml-train-core/azureml.train.hyperdrive.banditpolicy?view=azure-ml-py for more information.
  * name **required** `string` (values: Default, Bandit, MedianStopping, TruncationSelection): Type of early termination policy.
  * properties `object`: Policy configuration properties.
    * delay_evaluation `integer`: Value indicating the number of sequences for which the first evaluation is delayed.
    * evaluation_interval `integer`: Evaluation interval of the policy.
    * slack_amount `number`: Slack amount.
    * slack_factor `number`: Slack factor.

### HyperDriveCancelExperimentResponse
* HyperDriveCancelExperimentResponse `object`: Response for HyperDrive_CancelExperiment in case of success.
  * code **required** `integer`: Response code.
  * result **required** `string`: Message indicating operation success.

### HyperDriveCreateExperiment
* HyperDriveCreateExperiment `object`: Part of request for HyperDrive_CreateExperiment. Contains configuration details required to create hyperdrive run.
  * description `string`: The description for Hyperdrive run.
  * generator_config **required** `object`: Hyperparameter space and the sampling method configuration.
    * name **required** `string` (values: RANDOM, GRID, BAYESIANOPTIMIZATION): Hyperparameter sampling method.
    * parameter_space **required** `object`: Dictionary specifying hyperparameter space.
  * max_concurrent_jobs `integer`: Maximum number of runs to run concurrently.
  * max_duration_minutes `integer`: Maximum duration of the Hyperdrive run.
  * max_total_jobs `integer`: Maximum number of runs.
  * name **required** `string`: Name of the Hyperdrive run.
  * platform **required** `string` (values: AML): Platform of the Hyperdrive run.
  * platform_config **required** `object`: Platform config object specifying the run definition structure.
  * policy_config **required** [HyperDrivePolicyConfigBase](#hyperdrivepolicyconfigbase)
  * primary_metric_config **required** `object`: Name of the primary metric and goal of optimizing.
    * goal **required** `string` (values: MAXIMIZE, MINIMIZE): Determines if the primary metric has to be minimized/maximized.
    * name **required** `string`: Name of the primary metric reported by runs.
  * study_id `integer`: Study Id of the Hyperdrive run.
  * user **required** `string`: User who is creating the Hyperdrive run.

### HyperDriveDefaultPolicy
* HyperDriveDefaultPolicy `object`: No early termination is applied in the case of DefaultPolicy
  * name **required** `string` (values: Default, Bandit, MedianStopping, TruncationSelection): Type of early termination policy.

### HyperDriveErrorResponse
* HyperDriveErrorResponse `object`: Response in case of an error.
  * code **required** `integer`: Error response code.
  * message **required** `string`: Error message.

### HyperDriveExperiment
* HyperDriveExperiment `object`: Part of response for HyperDrive_CreateExperiment in case of success. Contains details about the created hyperdrive run.
  * description `string`: The description for Hyperdrive run.
  * generator_config **required** `object`: Hyperparameter space and the sampling method configuration.
    * name **required** `string` (values: RANDOM, GRID, BAYESIANOPTIMIZATION): Hyperparameter sampling method.
    * parameter_space **required** `object`: Dictionary specifying hyperparameter space.
  * max_concurrent_jobs `integer`: Maximum number of runs to run concurrently.
  * max_duration_minutes `integer`: Maximum duration of the Hyperdrive run.
  * max_total_jobs `integer`: Maximum number of runs.
  * name **required** `string`: Name of the Hyperdrive run.
  * platform **required** `string` (values: AML): Platform of the Hyperdrive run.
  * platform_config **required** `object`: Platform config object specifying the run definition structure.
  * policy_config **required** [HyperDrivePolicyConfigBase](#hyperdrivepolicyconfigbase)
  * primary_metric_config **required** `object`: Name of the primary metric and goal of optimizing.
    * goal **required** `string` (values: MAXIMIZE, MINIMIZE): Determines if the primary metric has to be minimized/maximized.
    * name **required** `string`: Name of the primary metric reported by runs.
  * study_id `integer`: Study Id of the Hyperdrive run.
  * all_jobs_generated **required** `boolean`: Indicates if all runs have been generated.
  * cancellation_requested **required** `boolean`: Indicates if cancellation has been requested for this Hyperdrive run.
  * created **required** `string`: Hyperdrive run creation time.
  * created_by_user_id **required** `integer`: Id of the user who created the Hyperdrive run.
  * experiment_id **required** `string`: Hyperdrive run id.
  * experiment_uri `string`: Hyperdrive run Uri.
  * hyperdrive_run_id **required** `string`: Hyperdrive run id.
  * modified **required** `string`: Hyperdrive run modification time.
  * status **required** `string`: Hyperdrive run status.
  * study_uri `string`: Study Uri of the Hyperdrive run.

### HyperDriveExperimentBase
* HyperDriveExperimentBase `object`: Base object for both request and response of HyperDrive_CreateExperiment api.
  * description `string`: The description for Hyperdrive run.
  * generator_config **required** `object`: Hyperparameter space and the sampling method configuration.
    * name **required** `string` (values: RANDOM, GRID, BAYESIANOPTIMIZATION): Hyperparameter sampling method.
    * parameter_space **required** `object`: Dictionary specifying hyperparameter space.
  * max_concurrent_jobs `integer`: Maximum number of runs to run concurrently.
  * max_duration_minutes `integer`: Maximum duration of the Hyperdrive run.
  * max_total_jobs `integer`: Maximum number of runs.
  * name **required** `string`: Name of the Hyperdrive run.
  * platform **required** `string` (values: AML): Platform of the Hyperdrive run.
  * platform_config **required** `object`: Platform config object specifying the run definition structure.
  * policy_config **required** [HyperDrivePolicyConfigBase](#hyperdrivepolicyconfigbase)
  * primary_metric_config **required** `object`: Name of the primary metric and goal of optimizing.
    * goal **required** `string` (values: MAXIMIZE, MINIMIZE): Determines if the primary metric has to be minimized/maximized.
    * name **required** `string`: Name of the primary metric reported by runs.
  * study_id `integer`: Study Id of the Hyperdrive run.

### HyperDriveExperimentResponse
* HyperDriveExperimentResponse `object`: Response for HyperDrive_CreateExperiment in case of success.
  * code **required** `integer`: Response code.
  * result **required** [HyperDriveExperiment](#hyperdriveexperiment)

### HyperDriveMedianStoppingPolicy
* HyperDriveMedianStoppingPolicy `object`: Median stopping policy configuration. Please refer https://docs.microsoft.com/en-us/python/api/azureml-train-core/azureml.train.hyperdrive.medianstoppingpolicy?view=azure-ml-py for more information.
  * name **required** `string` (values: Default, Bandit, MedianStopping, TruncationSelection): Type of early termination policy.
  * properties `object`: Policy configuration properties.
    * delay_evaluation `integer`: Value indicating the number of sequences for which the first evaluation is delayed.
    * evaluation_interval `integer`: Evaluation interval of the policy.

### HyperDrivePolicyConfigBase
* HyperDrivePolicyConfigBase `object`: Early termination policy configuration.
  * name **required** `string` (values: Default, Bandit, MedianStopping, TruncationSelection): Type of early termination policy.

### HyperDriveTruncationSelectionPolicy
* HyperDriveTruncationSelectionPolicy `object`: Truncation selection policy configuration. Please refer https://docs.microsoft.com/en-us/python/api/azureml-train-core/azureml.train.hyperdrive.truncationselectionpolicy?view=azure-ml-py for more information.
  * name **required** `string` (values: Default, Bandit, MedianStopping, TruncationSelection): Type of early termination policy.
  * properties `object`: Policy configuration properties.
    * delay_evaluation `integer`: Value indicating the number of sequences for which the first evaluation is delayed.
    * evaluation_interval `integer`: Evaluation interval of the policy.
    * exclude_finished_jobs `boolean`: Boolean indicating if metrics from finished jobs should be excluded in the policy decision process.
    * truncation_percentage `integer`: Truncation percentage value.


