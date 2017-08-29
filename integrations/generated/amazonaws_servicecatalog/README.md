# @datafire/amazonaws_servicecatalog

Client library for AWS Service Catalog

## Installation and Usage
```bash
npm install --save datafire @datafire/amazonaws_servicecatalog
```

```js
let datafire = require('datafire');
let amazonaws_servicecatalog = require('@datafire/amazonaws_servicecatalog').create();

amazonaws_servicecatalog.AcceptPortfolioShare({}).then(data => {
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


### AssociatePrincipalWithPortfolio



```js
amazonaws_servicecatalog.AssociatePrincipalWithPortfolio({}, context)
```


### AssociateProductWithPortfolio



```js
amazonaws_servicecatalog.AssociateProductWithPortfolio({}, context)
```


### CreateConstraint



```js
amazonaws_servicecatalog.CreateConstraint({}, context)
```


### CreatePortfolio



```js
amazonaws_servicecatalog.CreatePortfolio({}, context)
```


### CreatePortfolioShare



```js
amazonaws_servicecatalog.CreatePortfolioShare({}, context)
```


### CreateProduct



```js
amazonaws_servicecatalog.CreateProduct({}, context)
```


### CreateProvisioningArtifact



```js
amazonaws_servicecatalog.CreateProvisioningArtifact({}, context)
```


### DeleteConstraint



```js
amazonaws_servicecatalog.DeleteConstraint({}, context)
```


### DeletePortfolio



```js
amazonaws_servicecatalog.DeletePortfolio({}, context)
```


### DeletePortfolioShare



```js
amazonaws_servicecatalog.DeletePortfolioShare({}, context)
```


### DeleteProduct



```js
amazonaws_servicecatalog.DeleteProduct({}, context)
```


### DeleteProvisioningArtifact



```js
amazonaws_servicecatalog.DeleteProvisioningArtifact({}, context)
```


### DescribeConstraint



```js
amazonaws_servicecatalog.DescribeConstraint({}, context)
```


### DescribePortfolio



```js
amazonaws_servicecatalog.DescribePortfolio({}, context)
```


### DescribeProduct



```js
amazonaws_servicecatalog.DescribeProduct({}, context)
```


### DescribeProductAsAdmin



```js
amazonaws_servicecatalog.DescribeProductAsAdmin({}, context)
```


### DescribeProductView



```js
amazonaws_servicecatalog.DescribeProductView({}, context)
```


### DescribeProvisioningArtifact



```js
amazonaws_servicecatalog.DescribeProvisioningArtifact({}, context)
```


### DescribeProvisioningParameters



```js
amazonaws_servicecatalog.DescribeProvisioningParameters({}, context)
```


### DescribeRecord



```js
amazonaws_servicecatalog.DescribeRecord({}, context)
```


### DisassociatePrincipalFromPortfolio



```js
amazonaws_servicecatalog.DisassociatePrincipalFromPortfolio({}, context)
```


### DisassociateProductFromPortfolio



```js
amazonaws_servicecatalog.DisassociateProductFromPortfolio({}, context)
```


### ListAcceptedPortfolioShares



```js
amazonaws_servicecatalog.ListAcceptedPortfolioShares({}, context)
```


### ListConstraintsForPortfolio



```js
amazonaws_servicecatalog.ListConstraintsForPortfolio({}, context)
```


### ListLaunchPaths



```js
amazonaws_servicecatalog.ListLaunchPaths({}, context)
```


### ListPortfolioAccess



```js
amazonaws_servicecatalog.ListPortfolioAccess({}, context)
```


### ListPortfolios



```js
amazonaws_servicecatalog.ListPortfolios({}, context)
```


### ListPortfoliosForProduct



```js
amazonaws_servicecatalog.ListPortfoliosForProduct({}, context)
```


### ListPrincipalsForPortfolio



```js
amazonaws_servicecatalog.ListPrincipalsForPortfolio({}, context)
```


### ListProvisioningArtifacts



```js
amazonaws_servicecatalog.ListProvisioningArtifacts({}, context)
```


### ListRecordHistory



```js
amazonaws_servicecatalog.ListRecordHistory({}, context)
```


### ProvisionProduct



```js
amazonaws_servicecatalog.ProvisionProduct({}, context)
```


### RejectPortfolioShare



```js
amazonaws_servicecatalog.RejectPortfolioShare({}, context)
```


### ScanProvisionedProducts



```js
amazonaws_servicecatalog.ScanProvisionedProducts({}, context)
```


### SearchProducts



```js
amazonaws_servicecatalog.SearchProducts({}, context)
```


### SearchProductsAsAdmin



```js
amazonaws_servicecatalog.SearchProductsAsAdmin({}, context)
```


### TerminateProvisionedProduct



```js
amazonaws_servicecatalog.TerminateProvisionedProduct({}, context)
```


### UpdateConstraint



```js
amazonaws_servicecatalog.UpdateConstraint({}, context)
```


### UpdatePortfolio



```js
amazonaws_servicecatalog.UpdatePortfolio({}, context)
```


### UpdateProduct



```js
amazonaws_servicecatalog.UpdateProduct({}, context)
```


### UpdateProvisionedProduct



```js
amazonaws_servicecatalog.UpdateProvisionedProduct({}, context)
```


### UpdateProvisioningArtifact



```js
amazonaws_servicecatalog.UpdateProvisioningArtifact({}, context)
```


