---
title: "Serverless Architecture Patterns"
slug: "serverless-architecture"
date: "2026-02-21"
category: "technical"
excerpt: "Understanding serverless computing and when to use it. Exploring AWS Lambda, Azure Functions, and best practices for serverless applications."
---

# Serverless Architecture Patterns

Serverless computing lets you build and run applications without managing servers. Let's explore when and how to use it effectively.

## What is Serverless?

"Serverless" doesn't mean no servers - it means you don't manage them. Cloud providers handle:

- Server provisioning
- Scaling
- Maintenance
- High availability

You focus solely on code.

## Key Characteristics

1. **Event-driven**: Functions triggered by events
2. **Auto-scaling**: Scales automatically with load
3. **Pay-per-use**: Only pay for execution time
4. **Stateless**: Each invocation is independent
5. **Short-lived**: Functions timeout (typically 15 minutes max)

## AWS Lambda Example

### Basic Lambda Function

```javascript
exports.handler = async (event) => {
  console.log('Event:', JSON.stringify(event));

  const name = event.queryStringParameters?.name || 'World';

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      message: `Hello, ${name}!`,
    }),
  };
};
```

### With DynamoDB

```javascript
const AWS = require('aws-sdk');
const dynamodb = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
  const userId = event.pathParameters.id;

  try {
    const result = await dynamodb.get({
      TableName: 'Users',
      Key: { userId },
    }).promise();

    return {
      statusCode: 200,
      body: JSON.stringify(result.Item),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
```

## Common Patterns

### API Backend

API Gateway + Lambda + DynamoDB:

```yaml
# Serverless Framework config
service: user-api

provider:
  name: aws
  runtime: nodejs18.x

functions:
  createUser:
    handler: handlers/users.create
    events:
      - http:
          path: users
          method: post

  getUser:
    handler: handlers/users.get
    events:
      - http:
          path: users/{id}
          method: get

  listUsers:
    handler: handlers/users.list
    events:
      - http:
          path: users
          method: get
```

### Event Processing

S3 upload triggers Lambda:

```javascript
exports.handler = async (event) => {
  const s3 = new AWS.S3();
  const bucket = event.Records[0].s3.bucket.name;
  const key = event.Records[0].s3.object.key;

  console.log(`Processing ${key} from ${bucket}`);

  // Get object from S3
  const object = await s3.getObject({
    Bucket: bucket,
    Key: key,
  }).promise();

  // Process the file
  const processed = processImage(object.Body);

  // Save processed version
  await s3.putObject({
    Bucket: bucket,
    Key: `processed/${key}`,
    Body: processed,
  }).promise();

  return { success: true };
};
```

### Scheduled Jobs

CloudWatch Events + Lambda:

```javascript
// Runs every day at midnight
exports.handler = async (event) => {
  console.log('Running daily cleanup job');

  // Delete old records
  const cutoffDate = Date.now() - (30 * 24 * 60 * 60 * 1000); // 30 days

  await dynamodb.delete({
    TableName: 'Logs',
    Key: { timestamp: { $lt: cutoffDate } },
  }).promise();

  return { deleted: true };
};
```

### Queue Processing

SQS + Lambda:

```javascript
exports.handler = async (event) => {
  const messages = event.Records;

  for (const message of messages) {
    const body = JSON.parse(message.body);

    try {
      await processMessage(body);

      // Message automatically deleted from queue if successful
    } catch (error) {
      console.error('Failed to process:', error);
      // Message returns to queue for retry
      throw error;
    }
  }

  return { processed: messages.length };
};
```

## Best Practices

### 1. Keep Functions Small

```javascript
// Bad - doing too much
exports.handler = async (event) => {
  await validateInput(event);
  await processData(event);
  await sendNotification(event);
  await updateDatabase(event);
  await triggerWorkflow(event);
};

// Good - single responsibility
exports.handler = async (event) => {
  await processData(event);

  // Trigger other functions via SNS/SQS
  await sns.publish({
    TopicArn: process.env.NOTIFICATION_TOPIC,
    Message: JSON.stringify(event),
  }).promise();
};
```

### 2. Handle Cold Starts

```javascript
// Initialize outside handler
const AWS = require('aws-sdk');
const db = new AWS.DynamoDB.DocumentClient();

// Reused across invocations
let cachedData = null;

exports.handler = async (event) => {
  if (!cachedData) {
    cachedData = await loadConfiguration();
  }

  // Use cached data
  return processEvent(event, cachedData);
};
```

### 3. Use Environment Variables

```javascript
const TABLE_NAME = process.env.TABLE_NAME;
const API_KEY = process.env.API_KEY;

exports.handler = async (event) => {
  await dynamodb.put({
    TableName: TABLE_NAME,
    Item: event,
  }).promise();
};
```

### 4. Error Handling and Retries

```javascript
exports.handler = async (event) => {
  try {
    await processEvent(event);
    return { success: true };
  } catch (error) {
    console.error('Error:', error);

    // Send to dead letter queue for manual review
    await sqs.sendMessage({
      QueueUrl: process.env.DLQ_URL,
      MessageBody: JSON.stringify({
        event,
        error: error.message,
      }),
    }).promise();

    throw error; // Trigger retry
  }
};
```

### 5. Monitoring and Logging

```javascript
exports.handler = async (event) => {
  console.log('Function started', { eventId: event.id });

  const startTime = Date.now();

  try {
    const result = await processEvent(event);

    console.log('Function succeeded', {
      eventId: event.id,
      duration: Date.now() - startTime,
    });

    return result;
  } catch (error) {
    console.error('Function failed', {
      eventId: event.id,
      duration: Date.now() - startTime,
      error: error.message,
    });

    throw error;
  }
};
```

## When to Use Serverless

**Good fit:**
- Event-driven workloads
- Variable/unpredictable traffic
- Microservices
- Scheduled jobs
- Data processing pipelines
- APIs with sporadic usage

**Not ideal for:**
- Long-running processes (>15 minutes)
- High-performance computing
- Applications requiring state
- Predictable, constant load
- Workloads sensitive to cold starts

## Cost Optimization

1. **Right-size memory**: More memory = faster execution = lower cost sometimes
2. **Batch processing**: Process multiple items per invocation
3. **Reserved concurrency**: For predictable workloads
4. **Monitor unused functions**: Delete what you don't need
5. **Use ARM processors**: Graviton2 is cheaper and often faster

## Popular Frameworks

- **Serverless Framework**: Multi-cloud, extensive plugins
- **AWS SAM**: AWS-specific, good for Lambda
- **Terraform**: Infrastructure as code
- **Pulumi**: Modern IaC with real programming languages

## Conclusion

Serverless architecture offers powerful benefits: no server management, automatic scaling, and pay-per-use pricing. However, it's not a silver bullet.

Choose serverless when it fits your use case, understand its limitations, and follow best practices for cost-effective, reliable applications.
