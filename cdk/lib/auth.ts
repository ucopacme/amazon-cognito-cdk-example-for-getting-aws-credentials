import * as cdk from "@aws-cdk/core";
import infra = require("@ucop-acme/aws-infra");
import cognito = require("../lib/cognito");

export class Auth extends infra.BaseStack {
  constructor(scope: cdk.App, props: infra.IBaseStackProps) {
    super(scope, props);

    new cognito.CognitoService(this, "Auth");
  }
}
