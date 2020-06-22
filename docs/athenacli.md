# athenacli

## Install

```
pip install athenacli
```

## configure

Add you temporary credentials to ~/.aws/credentials

## query

```
athenacli --s3-staging-dir s3://aws-athena-query-results-your-region-number-account  --profile  your-profile
-e 'DESCRIBE some_table;' some_db
```
