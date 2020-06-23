# Application Credential Vending
This is useful for providing access to resources controlled by [AWS IAM service](https://aws.amazon.com/iam/)

Here's the general flow of resource creation that governs token vending for
applications:

* Application owner creates Web identity roles.
* Application owner grants the correct set of policies/permissions to web
  identity roles, eg.

![sdap access matrix ](images/analyst-matrix.png)

* Web identity roles are exported as cloudfromation exports which can then be
looked up by name and used to create groups (one and only one group per web
identity role) in the authentication module.
* Groups are then administered (by whom?!) to include the correct set of users.

Once a user is added to a group they will then be able to access sts tokens
based on the web identity role's permissions and policy.

## Sequence of events in [Generic Federated Access to AWS resources](https://docs.aws.amazon.com/IAM/latest/UserGuide/images/saml-based-federation.diagram.png)

## Special case to consider [Federated Access to Athena](https://docs.aws.amazon.com/athena/latest/ug/access-federation-saml.html)

Athena token acquisition ![architecture ](https://docs.aws.amazon.com/athena/latest/ug/images/athena-saml-based-federation.png)

## Specific Clients

* [athenacli](https://github.com/ucopacme/amazon-cognito-cdk-example-for-getting-aws-credentials/blob/dev/docs/athenacli.md)
* Cognos
* DbVisualiser
* Denodo
* [Excel](https://github.com/ucopacme/amazon-cognito-cdk-example-for-getting-aws-credentials/blob/dev/docs/excel.md)
* Quicksight
* Tableau
* Others TBD...
