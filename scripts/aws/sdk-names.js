const sdk = require('aws-sdk');
const fs = require('fs');
const list = fs.readdirSync(__dirname + '/../../integrations/generated')
  .filter(name => name.startsWith('amazonaws_'))
  .map(name => name.substring('amazonaws_'.length));

const sdkMap = module.exports = {
  'appstream2': 'AppStream',
  'cloudhsmv2': 'CloudHSMV2',
  cognito_idp: 'CognitoIdentity',
  data_iot: 'IotData',
  ds: 'DirectoryService',
  elasticfilesystem: 'EFS',
  elasticloadbalancing: 'ELB',
  elasticmapreduce: 'EMR',
  email: 'SES',
  entitlement_marketplace: 'MarketplaceEntitlementService',
  metering_marketplace: 'MarketplaceMetering',
  mgh: 'MigrationHub',
  models_lex: 'LexModelBuildingService',
  monitoring: 'CloudWatch',
  mturk_requester: 'MTurk',
  runtime_lex: 'LexRuntime',
  sdb: 'SimpleDB',
  states: 'StepFunctions',
  streams_dynamodb: 'DynamoDBStreams',
  tagging: 'ResourceGroupsTaggingAPI',
  config: 'Config',
}

list.forEach(name => {
  let objName = sdkMap[name] || Object.keys(sdk).filter(serviceName => {
    return serviceName.toLowerCase() === name.replace(/_/g, '');
  }).pop();
  if (!objName || !sdk[objName]) throw new Error("obj name not found for " + name);
  sdkMap[name] = objName;
})
