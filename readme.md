# sls-sqs

Serverless with SQS - ripped off from [here](https://serverless.com/blog/aws-lambda-sqs-serverless-integration/)


## Notes

Create the queue using the cloud formation:

```console
aws cloudformation create-stack --stack-name my-queue --template-body file://sqs.yml
```

Harvest the output ARN and export QUEUE_ARN as that value.

Deploy in the usual way

```console
sls deploy --aws-profile <profile>
```

Drop a message in the queue to trigger it.

```console
aws sqs send-message --queue-url https://sqs.us-east-1.amazonaws.com/<acct no>/<queue name> --message-body "Hello"
```
