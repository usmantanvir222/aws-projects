<img src="https://cdn.prod.website-files.com/677c400686e724409a5a7409/6790ad949cf622dc8dcd9fe4_nextwork-logo-leather.svg" alt="NextWork" width="300" />

# Fetch Data with AWS Lambda

**Project Link:** [View Project](http://learn.nextwork.org/projects/aws-compute-lambda)

**Author:** Usman Tanvir  
**Email:** usmantanvir@gmail.com

---

## Fetch Data with AWS Lambda

![Image](http://learn.nextwork.org/restful_green_glamorous_manatee/uploads/aws-compute-lambda_p9thryj2)

---

## Introducing Today's Project!

In this project I will demonstrate how to use AWS Lambda to retrieve data that is in a DynamoDB database. I'm doing this project to learn how to set up the data tier of a web app and connect that with the logic tier (Lambda function).

### Tools and concepts

The services I used in this project were Amazon DynamoDB and AWS Lambda. Key concepts I learned include creating and testing Lambda functions, working with DynamoDB tables, and understanding how to select appropriate permission policies including writing custom inline policies for fine-grained access control.

### Project reflection

This project took me approximately an hour including demo time. It was most rewarding to see the correct data show up when we ran our test.

I completed this project to learn about the data tier of a three-tier architecture. It definitely met my goals, as it helped me understand how to connect the data tier (DynamoDB) with the logic tier (AWS Lambda).

---

## Project Setup

To set up my project, I created a database using DynamoDB. DynamoDB is a NoSQL database which is a very fast and flexible database for data storage. The partition key is userId which means the key identified for each data is its userId.

In my DynamoDB table, I added a piece of data. DynamoDB is schemaless, which means each item can have its own set of attributes. You can add new attributes to one item without affecting others, allowing for flexible and dynamic data modeling

![Image](http://learn.nextwork.org/restful_green_glamorous_manatee/uploads/aws-compute-lambda_a112c3d5)

### AWS Lambda

AWS Lambda is a service that lets your run code without managing the underlying hardware. I'm using Lambda in the project to create a function that retrieves data from a DynamoDB table.

---

## AWS Lambda Function

My Lambda function has an execution role that defines its permissions to interact with other AWS services. By default, this role includes basic permissions to write logs to Amazon CloudWatch.

My Lambda function retrieves data from a DynamoDB table. The first part of the code handles data retrieval, while the second part deals with returning success or error responses to the user.

The code uses the AWS SDK, which is a set of tools that makes it easier for developers to interact with AWS services in their application code. In my case, the SDK is used to perform DynamoDB actions such as reading and retrieving data items.

![Image](http://learn.nextwork.org/restful_green_glamorous_manatee/uploads/aws-compute-lambda_a1b2c3d5)

---

## Function Testing

To test whether my Lambda functino works I wrote a function test in the Test Tab. the test is written in JSON. If the test is successful I will see the correct piece of dta in JSON when we query for userId=1.

The test showed as successful because the Lambda function ran without any execution errors. However, the actual response from the function was an error, since it does not have permission to read from the DynamoDB table.

![Image](http://learn.nextwork.org/restful_green_glamorous_manatee/uploads/aws-compute-lambda_u1v2w3x4)

---

## Function Permissions

To resolve the AccessDenied error, I reviewed the CloudWatch logs to identify the issue.The Lambda function was missing GetItem permission for DynamoDB. I then updated the Lambda execution role to grant the necessary permission.

There were five DynamoDB permission policies but we didnt pick AWSLambdaDynamoDBExecutionRole and AWSLambdaInvocation-DynamoDB as they were related to DynamoDB stream (live updates of tables items that have been changed.)

I intentionally avoided attaching the AmazonDynamoDBFullAccess policy because it would give the Lambda function full access to DynamoDB, which is more than necessary. Instead, I followed the principle of least privilege by granting only the specific permissions required.

![Image](http://learn.nextwork.org/restful_green_glamorous_manatee/uploads/aws-compute-lambda_3ethryj2)

---

## Final Testing and Reflection

To validate my new permission settings, I retested the Lambda function. The result was a piece of data with the three attributes (email,name,userID) from the DynamoDB table that I had entered earlier in the project.

Web apps are a popular use case for AWS Lambda and DynamoDB. Lambda can be used to retrieve product information, user profiles, or content based on user queries or actions within the app.

![Image](http://learn.nextwork.org/restful_green_glamorous_manatee/uploads/aws-compute-lambda_p9thryj2)

---

## Enahancing Security

For my project extension, I challenged myself to replace the AWS-managed policy I previously used for the Lambda function. Instead, I created a custom policy that grants access only to the UserData table. This ensures tighter control and enhances the security of our DynamoDB access.

To create the permission policy, I used the JSON Policy Editor because it provides a clearer understanding of the specific actions and resources being granted. It also gives more control compared to using the visual editor.

When updating a Lambda function's permission policies, there's a risk of breaking its functionality by removing access to the resources or actions it needs. To ensure everything still worked, I validated the Lambda function by running a test again in the Test tab.

![Image](http://learn.nextwork.org/restful_green_glamorous_manatee/uploads/aws-compute-lambda_1qthryj2)

---

---
