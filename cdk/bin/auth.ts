#!/usr/bin/env node
import "source-map-support/register";
import * as cdk from "@aws-cdk/core";
import infra = require("@ucop-acme/aws-infra");
import config from "../config.json";
import { Auth } from "../lib/auth";

const codebuildUrl: string = process.env.CODEBUILD_BUILD_URL || "manual";

const Tags = config[`tags`];
const stacks = config[`stacks`];
const branchEnv = infra.mapBranchToEnvironment().trim();
Tags.environment = branchEnv;
const accounts = config.accounts;
const branchAccount = accounts.find((accnt) => accnt.env === branchEnv);
const stackEnv = {
  account: branchAccount!.account,
  region: branchAccount!.region,
};
const myStackDescription =
  Tags.application +
  " " +
  Tags.environment +
  " " +
  Tags.description +
  infra.makeBrand();
const myStackProps: infra.IBaseStackProps = {
  description: myStackDescription,
  env: stackEnv,
  baseprops: {
    application: Tags.application,
    buildId: codebuildUrl,
    createdBy: Tags.createdBy,
    description: Tags.description,
    environment: Tags.environment,
    group: Tags.group,
    label: "",
    source: Tags.source + ":" + Tags.environment,
  },
};
const app = new cdk.App();
infra.tagApp(app, myStackProps);
myStackProps.baseprops.label = stacks[`auth`][`label`];
new Auth(app, myStackProps);
