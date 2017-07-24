# @datafire/amazonaws_servicecatalog

Client library for AWS Service Catalog

## Installation and Usage
```bash
npm install --save datafire @datafire/amazonaws_servicecatalog
```

```js
let datafire = require('datafire');
let amazonaws_servicecatalog = require('@datafire/amazonaws_servicecatalog').actions;
let context = new datafire.Context();

amazonaws_servicecatalog.AcceptPortfolioShare({}, context).then(data => {
  console.log(data);
})
```

## Description
<fullname>AWS Service Catalog</fullname> <p> <b>Overview</b> </p> <p> <a href="https://aws.amazon.com/servicecatalog/">AWS Service Catalog</a> allows organizations to create and manage catalogs of IT services that are approved for use on AWS. This documentation provides reference material for the AWS Service Catalog end user API. To get the most out of this documentation, be familiar with the terminology discussed in <a href="http://docs.aws.amazon.com/servicecatalog/latest/adminguide/what-is_concepts.html">AWS Service Catalog Concepts</a>.</p> <p> <i>Additional Resources</i> </p> <ul> <li> <p> <a href="http://docs.aws.amazon.com/servicecatalog/latest/adminguide/introduction.html">AWS Service Catalog Administrator Guide</a> </p> </li> <li> <p> <a href="http://docs.aws.amazon.com/servicecatalog/latest/userguide/introduction.html">AWS Service Catalog User Guide</a> </p> </li> </ul>

## Actions
### AcceptPortfolioShare



```js
amazonaws_servicecatalog.AcceptPortfolioShare({}, context)
```

#### Parameters

### AssociatePrincipalWithPortfolio



```js
amazonaws_servicecatalog.AssociatePrincipalWithPortfolio({}, context)
```

#### Parameters

### AssociateProductWithPortfolio



```js
amazonaws_servicecatalog.AssociateProductWithPortfolio({}, context)
```

#### Parameters

### CreateConstraint



```js
amazonaws_servicecatalog.CreateConstraint({}, context)
```

#### Parameters

### CreatePortfolio



```js
amazonaws_servicecatalog.CreatePortfolio({}, context)
```

#### Parameters

### CreatePortfolioShare



```js
amazonaws_servicecatalog.CreatePortfolioShare({}, context)
```

#### Parameters

### CreateProduct



```js
amazonaws_servicecatalog.CreateProduct({}, context)
```

#### Parameters

### CreateProvisioningArtifact



```js
amazonaws_servicecatalog.CreateProvisioningArtifact({}, context)
```

#### Parameters

### DeleteConstraint



```js
amazonaws_servicecatalog.DeleteConstraint({}, context)
```

#### Parameters

### DeletePortfolio



```js
amazonaws_servicecatalog.DeletePortfolio({}, context)
```

#### Parameters

### DeletePortfolioShare



```js
amazonaws_servicecatalog.DeletePortfolioShare({}, context)
```

#### Parameters

### DeleteProduct



```js
amazonaws_servicecatalog.DeleteProduct({}, context)
```

#### Parameters

### DeleteProvisioningArtifact



```js
amazonaws_servicecatalog.DeleteProvisioningArtifact({}, context)
```

#### Parameters

### DescribeConstraint



```js
amazonaws_servicecatalog.DescribeConstraint({}, context)
```

#### Parameters

### DescribePortfolio



```js
amazonaws_servicecatalog.DescribePortfolio({}, context)
```

#### Parameters

### DescribeProduct



```js
amazonaws_servicecatalog.DescribeProduct({}, context)
```

#### Parameters

### DescribeProductAsAdmin



```js
amazonaws_servicecatalog.DescribeProductAsAdmin({}, context)
```

#### Parameters

### DescribeProductView



```js
amazonaws_servicecatalog.DescribeProductView({}, context)
```

#### Parameters

### DescribeProvisioningArtifact



```js
amazonaws_servicecatalog.DescribeProvisioningArtifact({}, context)
```

#### Parameters

### DescribeProvisioningParameters



```js
amazonaws_servicecatalog.DescribeProvisioningParameters({}, context)
```

#### Parameters

### DescribeRecord



```js
amazonaws_servicecatalog.DescribeRecord({}, context)
```

#### Parameters

### DisassociatePrincipalFromPortfolio



```js
amazonaws_servicecatalog.DisassociatePrincipalFromPortfolio({}, context)
```

#### Parameters

### DisassociateProductFromPortfolio



```js
amazonaws_servicecatalog.DisassociateProductFromPortfolio({}, context)
```

#### Parameters

### ListAcceptedPortfolioShares



```js
amazonaws_servicecatalog.ListAcceptedPortfolioShares({}, context)
```

#### Parameters

### ListConstraintsForPortfolio



```js
amazonaws_servicecatalog.ListConstraintsForPortfolio({}, context)
```

#### Parameters

### ListLaunchPaths



```js
amazonaws_servicecatalog.ListLaunchPaths({}, context)
```

#### Parameters

### ListPortfolioAccess



```js
amazonaws_servicecatalog.ListPortfolioAccess({}, context)
```

#### Parameters

### ListPortfolios



```js
amazonaws_servicecatalog.ListPortfolios({}, context)
```

#### Parameters

### ListPortfoliosForProduct



```js
amazonaws_servicecatalog.ListPortfoliosForProduct({}, context)
```

#### Parameters

### ListPrincipalsForPortfolio



```js
amazonaws_servicecatalog.ListPrincipalsForPortfolio({}, context)
```

#### Parameters

### ListProvisioningArtifacts



```js
amazonaws_servicecatalog.ListProvisioningArtifacts({}, context)
```

#### Parameters

### ListRecordHistory



```js
amazonaws_servicecatalog.ListRecordHistory({}, context)
```

#### Parameters

### ProvisionProduct



```js
amazonaws_servicecatalog.ProvisionProduct({}, context)
```

#### Parameters

### RejectPortfolioShare



```js
amazonaws_servicecatalog.RejectPortfolioShare({}, context)
```

#### Parameters

### ScanProvisionedProducts



```js
amazonaws_servicecatalog.ScanProvisionedProducts({}, context)
```

#### Parameters

### SearchProducts



```js
amazonaws_servicecatalog.SearchProducts({}, context)
```

#### Parameters

### SearchProductsAsAdmin



```js
amazonaws_servicecatalog.SearchProductsAsAdmin({}, context)
```

#### Parameters

### TerminateProvisionedProduct



```js
amazonaws_servicecatalog.TerminateProvisionedProduct({}, context)
```

#### Parameters

### UpdateConstraint



```js
amazonaws_servicecatalog.UpdateConstraint({}, context)
```

#### Parameters

### UpdatePortfolio



```js
amazonaws_servicecatalog.UpdatePortfolio({}, context)
```

#### Parameters

### UpdateProduct



```js
amazonaws_servicecatalog.UpdateProduct({}, context)
```

#### Parameters

### UpdateProvisionedProduct



```js
amazonaws_servicecatalog.UpdateProvisionedProduct({}, context)
```

#### Parameters

### UpdateProvisioningArtifact



```js
amazonaws_servicecatalog.UpdateProvisioningArtifact({}, context)
```

#### Parameters

