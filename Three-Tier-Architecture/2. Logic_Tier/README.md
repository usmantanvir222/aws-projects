<img src="https://cdn.prod.website-files.com/677c400686e724409a5a7409/6790ad949cf622dc8dcd9fe4_nextwork-logo-leather.svg" alt="NextWork" width="300" />

# APIs with Lambda + API Gateway

**Project Link:** [View Project](http://learn.nextwork.org/projects/aws-compute-api)

**Author:** Usman Tanvir  
**Email:** usmantanvir@gmail.com

---

![Image](http://learn.nextwork.org/restful_green_glamorous_manatee/uploads/aws-compute-api_c9d0e1f2)

---

## Introducing Today's Project!

In this project, I will demonstrate how to set up an API using AWS API Gateway and AWS Lambda. The goal of this project is to understand how APIs work and to implement a logic tier within a three-tier architecture.

### Tools and concepts

The services I used in this project were AWS API Gateway and AWS Lambda. Key concepts included Lambda functions, API resources and methods, Lambda proxy integration, API stages, deploying Lambda functions, and using invoke URLs to access the API.

### Project reflection

This project took me approximately 1.25 hours including the demo and secret mission time. The most challenging part was understanding the Lambda function code. It was most rewarding to create the resources and methods.

I completed this project to learn how to set up the logic tier of a web application, which serves as the backend of the app.

---

## Lambda functions

AWS Lambda is a serverless service that allows you to run code without managing servers. It is also known as Function as a Service (FaaS). In this project, I’m using Lambda to run code that retrieves data.

The code added to my Lambda function retrieves data from a DynamoDB table by looking up a specific user ID from a triggered event—in this case, a query on our website. It also includes error handling to manage failed requests.

![Image](http://learn.nextwork.org/restful_green_glamorous_manatee/uploads/aws-compute-api_a1b2c3d5)

---

## API Gateway

APIs are tools that enable communication between systems. There are different types of APIs, such as REST, HTTP, and WebSocket APIs. In this project, I’m using a REST API, which uses standard HTTP methods and is compatible with most programming languages as well as AWS Lambda.

Amazon API Gateway is a service that helps developers create, maintain, and monitor APIs. In this project, I’m using API Gateway to connect our web app users to the Lambda function

When a user clicks the Get User Data button, the API Gateway receives the request, checks if it is authorized, and then forwards it to our Lambda function. Additionally, API Gateway acts as a traffic manager, handling and routing incoming requests efficiently.

![Image](http://learn.nextwork.org/restful_green_glamorous_manatee/uploads/aws-compute-api_m3n4o5p6)

---

## API Resources and Methods

An API is made of resources which are diffferent parts of the same API. For example an API could have different sections for retrieving user data vs retrieving messaging data vs retrieving product data within the same app.

Each resource consists of methods which define the actions you can perform on a resource. They are based on standard HTTP methods and let you interact with data over the internet.
For example:

GET to retrieve,
POST to add,
PUT to update, and
DELETE to remove data

I created a GET method to connect API Gateway with our Lambda function. This means that when an end user makes a request to our API for example, api.com/user, API Gateway will forward the event to the Lambda function, but only if it's a GET request.

![Image](http://learn.nextwork.org/restful_green_glamorous_manatee/uploads/aws-compute-api_c9d0e1f2)

---

## API Deployment

When you deploy an API, you deploy it to a specific stage. A stage represents a snapshot of your API and helps manage different versions, such as development, staging, or production. I deployed my API to the production stage (prod), where it can handle live traffic and be accessed by users.

To visit my API, I used the Invoke URL for the production stage in my browser. The API returned an error because the Lambda function doesn't have permissions to DynamoDB and also because DynamoDB table has not been set up yet.

![Image](http://learn.nextwork.org/restful_green_glamorous_manatee/uploads/aws-compute-api_3ethryj2)

---

## API Documentation

For my project's extensions, I am writing API documentation because it helps other developers to know how to use our API. You can write documentation in the API Gateway console.

Once I prepared my documentation, I published it to the prod stage. Publishing to a specific stage is important because it allows you to maintain separate documentation for each stage such as dev or prod, since different stages may have different features or configurations.

The published and downloaded documentation included both the manually written content and some automatically generated documentation from API Gateway. This can be uploaded to tools like Swagger or Redoc to generate interactive web pages that describe and visualize the API.

![Image](http://learn.nextwork.org/restful_green_glamorous_manatee/uploads/aws-compute-api_z9a0b1c2)

---

---
