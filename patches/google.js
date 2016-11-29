module.exports = (spec) => {
  fixOperationIds(spec);
  fixSecurityDefs(spec);
}

const fixOperationIds = (spec) => {
  for (let path in spec.paths) {
    for (let method in spec.paths[path]) {
      let op = spec.paths[path][method];
      if (op.operationId && op.operationId.indexOf('.') !== -1) {
        op.operationId = op.operationId.substring(op.operationId.indexOf('.') + 1);
      }
    }
  }
}

const fixSecurityDefs = (spec) => {
  if (!spec.securityDefinitions) return;
  let curDef = Object.keys(spec.securityDefinitions)
        .map(k => spec.securityDefinitions[k])
        .filter(d => d.type === 'oauth2')[0];
  if (!curDef) return;
  spec.securityDefinitions.offline = {
    type: 'oauth2',
    flow: 'accessCode',
    scopes: curDef.scopes,
    authorizationUrl: 'https://accounts.google.com/o/oauth2/auth',
    tokenUrl: 'https://www.googleapis.com/oauth2/v4/token',
    description: "Allows offline access using a refresh_token",
  }
}
