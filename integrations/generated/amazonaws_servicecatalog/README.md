# @datafire/amazonaws_servicecatalog

Client library for AWS Service Catalog

## Installation and Usage
```bash
npm install --save datafire @datafire/amazonaws_servicecatalog
```

```js
let datafire = require('datafire');
let amazonaws_servicecatalog = require('@datafire/amazonaws_servicecatalog').actions;

let account = {
  hmac: "",
}
let context = new datafire.Context({
  accounts: {
    amazonaws_servicecatalog: account,
  }
})


amazonaws_servicecatalog.AcceptPortfolioShare({}, context).then(data => {
  console.log(data);
})
```

## Description
<fullname>AWS Service Catalog</fullname> <p> <b>Overview</b> </p> <p> <a href="https://aws.amazon.com/servicecatalog/">AWS Service Catalog</a> allows organizations to create and manage catalogs of IT services that are approved for use on AWS. This documentation provides reference material for the AWS Service Catalog end user API. To get the most out of this documentation, be familiar with the terminology discussed in <a href="http://docs.aws.amazon.com/servicecatalog/latest/adminguide/what-is_concepts.html">AWS Service Catalog Concepts</a>.</p> <p> <i>Additional Resources</i> </p> <ul> <li> <p> <a href="http://docs.aws.amazon.com/servicecatalog/latest/adminguide/introduction.html">AWS Service Catalog Administrator Guide</a> </p> </li> <li> <p> <a href="http://docs.aws.amazon.com/servicecatalog/latest/userguide/introduction.html">AWS Service Catalog User Guide</a> </p> </li> </ul>

## Actions
### AcceptPortfolioShare
Accepts an offer to share a portfolio.


```js
amazonaws_servicecatalog.AcceptPortfolioShare({
  "body": {
    "PortfolioId": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### AssociatePrincipalWithPortfolio
Associates the specified principal ARN with the specified portfolio.


```js
amazonaws_servicecatalog.AssociatePrincipalWithPortfolio({
  "body": {
    "PortfolioId": "",
    "PrincipalARN": "",
    "PrincipalType": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### AssociateProductWithPortfolio
Associates a product with a portfolio.


```js
amazonaws_servicecatalog.AssociateProductWithPortfolio({
  "body": {
    "ProductId": "",
    "PortfolioId": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### CreateConstraint
Creates a new constraint.


```js
amazonaws_servicecatalog.CreateConstraint({
  "body": {
    "PortfolioId": "",
    "ProductId": "",
    "Parameters": "",
    "Type": "",
    "IdempotencyToken": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### CreatePortfolio
Creates a new portfolio.


```js
amazonaws_servicecatalog.CreatePortfolio({
  "body": {
    "DisplayName": "",
    "ProviderName": "",
    "IdempotencyToken": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### CreatePortfolioShare
Creates a new portfolio share.


```js
amazonaws_servicecatalog.CreatePortfolioShare({
  "body": {
    "PortfolioId": "",
    "AccountId": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### CreateProduct
Creates a new product.


```js
amazonaws_servicecatalog.CreateProduct({
  "body": {
    "Name": "",
    "Owner": "",
    "ProductType": "",
    "ProvisioningArtifactParameters": {
      "Info": []
    },
    "IdempotencyToken": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### CreateProvisioningArtifact
Create a new provisioning artifact for the specified product. This operation will not work with a product that has been shared with you.


```js
amazonaws_servicecatalog.CreateProvisioningArtifact({
  "body": {
    "ProductId": "",
    "Parameters": {
      "Info": []
    },
    "IdempotencyToken": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### DeleteConstraint
Deletes the specified constraint.


```js
amazonaws_servicecatalog.DeleteConstraint({
  "body": {
    "Id": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### DeletePortfolio
Deletes the specified portfolio. This operation will not work with a portfolio that has been shared with you or if it has products, users, constraints, or shared accounts associated with it.


```js
amazonaws_servicecatalog.DeletePortfolio({
  "body": {
    "Id": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### DeletePortfolioShare
Deletes the specified portfolio share.


```js
amazonaws_servicecatalog.DeletePortfolioShare({
  "body": {
    "PortfolioId": "",
    "AccountId": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### DeleteProduct
Deletes the specified product. This operation will not work with a product that has been shared with you or is associated with a portfolio. 


```js
amazonaws_servicecatalog.DeleteProduct({
  "body": {
    "Id": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### DeleteProvisioningArtifact
Deletes the specified provisioning artifact. This operation will not work on a provisioning artifact associated with a product that has been shared with you, or on the last provisioning artifact associated with a product (a product must have at least one provisioning artifact).


```js
amazonaws_servicecatalog.DeleteProvisioningArtifact({
  "body": {
    "ProductId": "",
    "ProvisioningArtifactId": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### DescribeConstraint
Retrieves detailed information for a specified constraint.


```js
amazonaws_servicecatalog.DescribeConstraint({
  "body": {
    "Id": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### DescribePortfolio
Retrieves detailed information and any tags associated with the specified portfolio.


```js
amazonaws_servicecatalog.DescribePortfolio({
  "body": {
    "Id": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### DescribeProduct
<p>Retrieves information about a specified product.</p> <p>This operation is functionally identical to <a>DescribeProductView</a> except that it takes as input <code>ProductId</code> instead of <code>ProductViewId</code>.</p>


```js
amazonaws_servicecatalog.DescribeProduct({
  "body": {
    "Id": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### DescribeProductAsAdmin
Retrieves information about a specified product, run with administrator access.


```js
amazonaws_servicecatalog.DescribeProductAsAdmin({
  "body": {
    "Id": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### DescribeProductView
<p>Retrieves information about a specified product.</p> <p>This operation is functionally identical to <a>DescribeProduct</a> except that it takes as input <code>ProductViewId</code> instead of <code>ProductId</code>.</p>


```js
amazonaws_servicecatalog.DescribeProductView({
  "body": {
    "Id": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### DescribeProvisioningArtifact
Retrieves detailed information about the specified provisioning artifact.


```js
amazonaws_servicecatalog.DescribeProvisioningArtifact({
  "body": {
    "ProvisioningArtifactId": "",
    "ProductId": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### DescribeProvisioningParameters
Provides information about parameters required to provision a specified product in a specified manner. Use this operation to obtain the list of <code>ProvisioningArtifactParameters</code> parameters available to call the <a>ProvisionProduct</a> operation for the specified product.


```js
amazonaws_servicecatalog.DescribeProvisioningParameters({
  "body": {
    "ProductId": "",
    "ProvisioningArtifactId": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### DescribeRecord
Retrieves a paginated list of the full details of a specific request. Use this operation after calling a request operation (<a>ProvisionProduct</a>, <a>TerminateProvisionedProduct</a>, or <a>UpdateProvisionedProduct</a>). 


```js
amazonaws_servicecatalog.DescribeRecord({
  "body": {
    "Id": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### DisassociatePrincipalFromPortfolio
Disassociates a previously associated principal ARN from a specified portfolio.


```js
amazonaws_servicecatalog.DisassociatePrincipalFromPortfolio({
  "body": {
    "PortfolioId": "",
    "PrincipalARN": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### DisassociateProductFromPortfolio
Disassociates the specified product from the specified portfolio. 


```js
amazonaws_servicecatalog.DisassociateProductFromPortfolio({
  "body": {
    "ProductId": "",
    "PortfolioId": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### ListAcceptedPortfolioShares
Lists details of all portfolios for which sharing was accepted by this account.


```js
amazonaws_servicecatalog.ListAcceptedPortfolioShares({
  "body": {},
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### ListConstraintsForPortfolio
Retrieves detailed constraint information for the specified portfolio and product.


```js
amazonaws_servicecatalog.ListConstraintsForPortfolio({
  "body": {
    "PortfolioId": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### ListLaunchPaths
Returns a paginated list of all paths to a specified product. A path is how the user has access to a specified product, and is necessary when provisioning a product. A path also determines the constraints put on the product.


```js
amazonaws_servicecatalog.ListLaunchPaths({
  "body": {
    "ProductId": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### ListPortfolioAccess
Lists the account IDs that have been authorized sharing of the specified portfolio.


```js
amazonaws_servicecatalog.ListPortfolioAccess({
  "body": {
    "PortfolioId": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### ListPortfolios
Lists all portfolios in the catalog.


```js
amazonaws_servicecatalog.ListPortfolios({
  "body": {},
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### ListPortfoliosForProduct
Lists all portfolios that the specified product is associated with.


```js
amazonaws_servicecatalog.ListPortfoliosForProduct({
  "body": {
    "ProductId": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### ListPrincipalsForPortfolio
Lists all principal ARNs associated with the specified portfolio.


```js
amazonaws_servicecatalog.ListPrincipalsForPortfolio({
  "body": {
    "PortfolioId": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### ListProvisioningArtifacts
Lists all provisioning artifacts associated with the specified product.


```js
amazonaws_servicecatalog.ListProvisioningArtifacts({
  "body": {
    "ProductId": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### ListRecordHistory
Returns a paginated list of all performed requests, in the form of RecordDetails objects that are filtered as specified.


```js
amazonaws_servicecatalog.ListRecordHistory({
  "body": {},
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### ProvisionProduct
<p>Requests a <i>Provision</i> of a specified product. A <i>ProvisionedProduct</i> is a resourced instance for a product. For example, provisioning a CloudFormation-template-backed product results in launching a CloudFormation stack and all the underlying resources that come with it. </p> <p>You can check the status of this request using the <a>DescribeRecord</a> operation.</p>


```js
amazonaws_servicecatalog.ProvisionProduct({
  "body": {
    "ProductId": "",
    "ProvisioningArtifactId": "",
    "ProvisionedProductName": "",
    "ProvisionToken": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### RejectPortfolioShare
Rejects an offer to share a portfolio.


```js
amazonaws_servicecatalog.RejectPortfolioShare({
  "body": {
    "PortfolioId": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### ScanProvisionedProducts
Returns a paginated list of all the ProvisionedProduct objects that are currently available (not terminated). 


```js
amazonaws_servicecatalog.ScanProvisionedProducts({
  "body": {},
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### SearchProducts
<p>Returns a paginated list all of the <code>Products</code> objects to which the caller has access. </p> <p>The output of this operation can be used as input for other operations, such as <a>DescribeProductView</a>.</p>


```js
amazonaws_servicecatalog.SearchProducts({
  "body": {},
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### SearchProductsAsAdmin
Retrieves summary and status information about all products created within the caller's account. If a portfolio ID is provided, this operation retrieves information for only those products that are associated with the specified portfolio.


```js
amazonaws_servicecatalog.SearchProductsAsAdmin({
  "body": {},
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### TerminateProvisionedProduct
<p>Requests termination of an existing ProvisionedProduct object. If there are <code>Tags</code> associated with the object, they are terminated when the ProvisionedProduct object is terminated. </p> <p>This operation does not delete any records associated with the ProvisionedProduct object.</p> <p>You can check the status of this request using the <a>DescribeRecord</a> operation.</p>


```js
amazonaws_servicecatalog.TerminateProvisionedProduct({
  "body": {
    "TerminateToken": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### UpdateConstraint
Updates an existing constraint.


```js
amazonaws_servicecatalog.UpdateConstraint({
  "body": {
    "Id": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### UpdatePortfolio
Updates the specified portfolio's details. This operation will not work with a product that has been shared with you.


```js
amazonaws_servicecatalog.UpdatePortfolio({
  "body": {
    "Id": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### UpdateProduct
Updates an existing product.


```js
amazonaws_servicecatalog.UpdateProduct({
  "body": {
    "Id": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### UpdateProvisionedProduct
<p>Requests updates to the configuration of an existing ProvisionedProduct object. If there are tags associated with the object, they cannot be updated or added with this operation. Depending on the specific updates requested, this operation may update with no interruption, with some interruption, or replace the ProvisionedProduct object entirely. </p> <p>You can check the status of this request using the <a>DescribeRecord</a> operation.</p>


```js
amazonaws_servicecatalog.UpdateProvisionedProduct({
  "body": {
    "UpdateToken": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

### UpdateProvisioningArtifact
Updates an existing provisioning artifact's information. This operation will not work on a provisioning artifact associated with a product that has been shared with you.


```js
amazonaws_servicecatalog.UpdateProvisioningArtifact({
  "body": {
    "ProductId": "",
    "ProvisioningArtifactId": ""
  },
  "Action": "",
  "Version": ""
}, context)
```

#### Parameters
* body (object) **required**
* Action (string) **required**
* Version (string) **required**
* X-Amz-Content-Sha256 (string)
* X-Amz-Date (string)
* X-Amz-Algorithm (string)
* X-Amz-Credential (string)
* X-Amz-Security-Token (string)
* X-Amz-Signature (string)
* X-Amz-SignedHeaders (string)

