# @datafire/amazonaws_cloudformation

Client library for AWS CloudFormation

## Installation and Usage
```bash
npm install --save datafire @datafire/amazonaws_cloudformation
```

```js
let datafire = require('datafire');
let amazonaws_cloudformation = require('@datafire/amazonaws_cloudformation').actions;
let context = new datafire.Context();

amazonaws_cloudformation.CancelUpdateStack({}, context).then(data => {
  console.log(data);
})
```

## Description
<fullname>AWS CloudFormation</fullname> <p>AWS CloudFormation allows you to create and manage AWS infrastructure deployments predictably and repeatedly. You can use AWS CloudFormation to leverage AWS products, such as Amazon Elastic Compute Cloud, Amazon Elastic Block Store, Amazon Simple Notification Service, Elastic Load Balancing, and Auto Scaling to build highly-reliable, highly scalable, cost-effective applications without creating or configuring the underlying AWS infrastructure.</p> <p>With AWS CloudFormation, you declare all of your resources and dependencies in a template file. The template defines a collection of resources as a single unit called a stack. AWS CloudFormation creates and deletes all member resources of the stack together and manages all dependencies between the resources for you.</p> <p>For more information about AWS CloudFormation, see the <a href="http://aws.amazon.com/cloudformation/">AWS CloudFormation Product Page</a>.</p> <p>Amazon CloudFormation makes use of other AWS products. If you need additional technical information about a specific AWS product, you can find the product's technical documentation at <a href="http://docs.aws.amazon.com/">docs.aws.amazon.com</a>.</p>

## Actions
### CancelUpdateStack



```js
amazonaws_cloudformation.CancelUpdateStack({}, context)
```


### ContinueUpdateRollback



```js
amazonaws_cloudformation.ContinueUpdateRollback({}, context)
```


### CreateChangeSet



```js
amazonaws_cloudformation.CreateChangeSet({}, context)
```


### CreateStack



```js
amazonaws_cloudformation.CreateStack({}, context)
```


### DeleteChangeSet



```js
amazonaws_cloudformation.DeleteChangeSet({}, context)
```


### DeleteStack



```js
amazonaws_cloudformation.DeleteStack({}, context)
```


### DescribeAccountLimits



```js
amazonaws_cloudformation.DescribeAccountLimits({}, context)
```


### DescribeChangeSet



```js
amazonaws_cloudformation.DescribeChangeSet({}, context)
```


### DescribeStackEvents



```js
amazonaws_cloudformation.DescribeStackEvents({}, context)
```

#### Parameters
* NextToken (string)

### DescribeStackResource



```js
amazonaws_cloudformation.DescribeStackResource({}, context)
```


### DescribeStackResources



```js
amazonaws_cloudformation.DescribeStackResources({}, context)
```


### DescribeStacks



```js
amazonaws_cloudformation.DescribeStacks({}, context)
```

#### Parameters
* NextToken (string)

### EstimateTemplateCost



```js
amazonaws_cloudformation.EstimateTemplateCost({}, context)
```


### ExecuteChangeSet



```js
amazonaws_cloudformation.ExecuteChangeSet({}, context)
```


### GetStackPolicy



```js
amazonaws_cloudformation.GetStackPolicy({}, context)
```


### GetTemplate



```js
amazonaws_cloudformation.GetTemplate({}, context)
```


### GetTemplateSummary



```js
amazonaws_cloudformation.GetTemplateSummary({}, context)
```


### ListChangeSets



```js
amazonaws_cloudformation.ListChangeSets({}, context)
```


### ListExports



```js
amazonaws_cloudformation.ListExports({}, context)
```

#### Parameters
* NextToken (string)

### ListImports



```js
amazonaws_cloudformation.ListImports({}, context)
```

#### Parameters
* NextToken (string)

### ListStackResources



```js
amazonaws_cloudformation.ListStackResources({}, context)
```

#### Parameters
* NextToken (string)

### ListStacks



```js
amazonaws_cloudformation.ListStacks({}, context)
```

#### Parameters
* NextToken (string)

### SetStackPolicy



```js
amazonaws_cloudformation.SetStackPolicy({}, context)
```


### SignalResource



```js
amazonaws_cloudformation.SignalResource({}, context)
```


### UpdateStack



```js
amazonaws_cloudformation.UpdateStack({}, context)
```


### ValidateTemplate



```js
amazonaws_cloudformation.ValidateTemplate({}, context)
```


