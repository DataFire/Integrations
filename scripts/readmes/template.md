# @datafire/${args.integration.id}

Client library for ${(args.integration.title || args.integration.id)}

## Installation and Usage
```bash
npm install --save datafire @datafire/${args.integration.id}
```
```js
let ${args.varName} = require('@datafire/${args.integration.id}').create(${args.accountCode});

${args.varName}.${args.sampleAction}({}).then(data => {
  console.log(data);
})
```

## Description

${args.integration.description}

## Actions

${args.actionsMarkdown}

