# Contributing

## Refresh the API list
```
npm i --save-dev aws-cli@latest
./scripts/full-update.sh
```

### Common issues
#### AWS client complaints
We utilize the AWS SDK for most operations. You may need to map the
service name to an AWS client name using this file: `./scripts/aws/sdk-names.js`

If you see a message like
```
AWS SDK SageMakerFeatureStoreRuntime: Function deleteHumanLoop not found
```
that means the mapping is likely wrong.
