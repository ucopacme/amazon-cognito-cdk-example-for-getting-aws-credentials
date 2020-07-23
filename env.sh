#!/usr/bin/env bash

## TODO: copy this file into env.sh with your settings

export AWS_SDK_LOAD_CONFIG=1 # allows the SDK to load from config. see https://github.com/aws/aws-sdk-js/pull/1391

## ====================================================================================================================
## 1. the CloudFormation stack name, e.g. "MyAppName"
## ====================================================================================================================
# secure client architecture module
export STACK_NAME="scamRdms-potAuth"

## ====================================================================================================================
## 2. explicitly define the account you intend to deploy into
##    for the simplicity of running the demo, it takes the current profile's account and region
##    in production make sure you explicitly define these via the CI/CD environment variables as a safety mechanism
## ====================================================================================================================

export STACK_ACCOUNT=$(aws sts get-caller-identity --query "Account" --output text)
export STACK_REGION="us-west-2"


## ====================================================================================================================
## 3. Unique Domain name for Cognito must have a value
## ====================================================================================================================
export COGNITO_DOMAIN_NAME=rdms-dev-auth

## ====================================================================================================================
## 4. set this to use http://localhost:3000. Leave blank to use CloudFront
## ====================================================================================================================
#export APP_URL=http://localhost:3000
export APP_URL=

## ====================================================================================================================
## 5. SNS Subscription -- If left blank, a SNS Topic will still be created but without a Subscription
## ====================================================================================================================
export NEW_USER_SNS_SUBSCRIPTION="hooman.pejman@ucop.edu"

## ====================================================================================================================
## 6. New User Info SETTINGS** -- used in Lambda**
## ====================================================================================================================
export PROJECT_NAME="<AppName>"
export SUPPORT_GROUP_NAME="User Support Services"
export SUPPORT_GROUP_CONTACT="valid email or contact info"

