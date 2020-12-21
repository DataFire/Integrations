const sdk = require('aws-sdk');
const fs = require('fs');
const list = fs.readdirSync(__dirname + '/../../integrations/generated')
  .filter(name => name.startsWith('amazonaws_'))
  .map(name => name.substring('amazonaws_'.length));

const sdkMap = module.exports = {
  a4b: 'AlexaForBusiness',
  api_pricing: 'Pricing',
  appstream2: 'AppStream',
  ce: 'CostExplorer',
  cloudhsmv2: 'CloudHSMV2',
  cognito_idp: 'CognitoIdentityServiceProvider',
  config: 'ConfigService',
  data_iot: 'IotData',
  data_jobs_iot: 'IoTJobsDataPlane',
  data_mediastore: 'MediaStoreData',
  ds: 'DirectoryService',
  elasticfilesystem: 'EFS',
  elasticloadbalancing: 'ELBv2',
  elasticmapreduce: 'EMR',
  email: 'SES',
  entitlement_marketplace: 'MarketplaceEntitlementService',
  events: 'CloudWatchEvents',
  iot1click_devices: 'IoT1ClickDevicesService',
  iot1click_projects: 'IoT1ClickProjects',
  kinesis_video_signaling: 'KinesisVideoSignalingChannels',
  logs: 'CloudWatchLogs',
  metering_marketplace: 'MarketplaceMetering',
  mgh: 'MigrationHub',
  models_lex: 'LexModelBuildingService',
  monitoring: 'CloudWatch',
  mturk_requester: 'MTurk',
  runtime_lex: 'LexRuntime',
  runtime_sagemaker: 'SageMakerRuntime',
  sagemaker_a2i_runtime: 'AugmentedAIRuntime',
  serverlessrepo: 'ServerlessApplicationRepository',
  sdb: 'SimpleDB',
  sms_voice: 'PinpointSMSVoice',
  states: 'StepFunctions',
  streams_dynamodb: 'DynamoDBStreams',
  tagging: 'ResourceGroupsTaggingAPI',
  transcribe: 'TranscribeService',
}

list.forEach(name => {
  let objName = sdkMap[name] || Object.keys(sdk).filter(serviceName => {
    let sName = serviceName.toLowerCase();
    let iName = name.replace(/_/g, '');
    return sName === iName || sName === iName + 'service';
  }).pop();
  if (!objName || !sdk[objName]) throw new Error("obj name not found for " + name + ':' + sdkMap[name]);
  sdkMap[name] = objName;
})
