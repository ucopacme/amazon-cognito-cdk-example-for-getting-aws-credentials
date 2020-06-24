# Application Credential Vending

# 9:00-9:05 Intro - Odell
![cognito as an identity and access router](https://d2908q01vomqb2.cloudfront.net/1b6453892473a467d07372d45eb05abc2031647a/2017/06/18/CognitoDiagram.png)

One of the primary services UCOP provides to the broader UC is secure,
auditable, reliable and affordable access to data. We're going to show one way
to control client access to a data set. Please hold you questions til the end.

# 9:05-9:10 Goodman - IAM architecture

* High level architecture and design choices

* More detailed discussion describing solution in detail to come depending on demand...

# 9:10-9:15 Odell - app/auth roles and responsibilities

* some nonsense

# 9:15-9:20 Hooman - data access using sts tokens

* analyst access schema, athena demo

# 9:20-9:25 Koorosh - excel access demo

* how to use sts tokens in excel

# 9:25-9:30 Food Fight


Here's the general flow of resource creation that governs token vending for
applications:

* Web identity roles are created with named exports, eg:

  sdapDevLevel1AnalystRoleArn
  sdapDevLevel2AnalystRoleArn
  sdapDevLevel3AnalystRoleArn

  These are special roles that are only assumable by the cognito service


* Application owner/ Data steward grants the correct set of policies/permissions to web
  identity roles, eg.

![sdap access matrix ](images/analyst-matrix.png)

* Web identity roles are used in authentication stack to create groups (one and only one group per web
identity role).
* Groups are then administered (by whom?!) to include the correct set of users.

Once a user is added to a group they will then be able to access sts tokens
based on the web identity role's permissions and policy.

## Sequence of events in generic ![Federated Access to AWS resources](https://docs.aws.amazon.com/IAM/latest/UserGuide/images/saml-based-federation.diagram.png)

## Special case to consider ![Federated Access to Athena](https://docs.aws.amazon.com/athena/latest/ug/access-federation-saml.html)

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
