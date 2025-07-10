<img src="https://cdn.prod.website-files.com/677c400686e724409a5a7409/6790ad949cf622dc8dcd9fe4_nextwork-logo-leather.svg" alt="NextWork" width="300" />

# Build a Three-Tier Web App

**Project Link:** [View Project](http://learn.nextwork.org/projects/aws-compute-threetier)

**Author:** Usman Tanvir  
**Email:** usmantanvir@gmail.com

---

## Build a Three-Tier Web App

![Image](http://learn.nextwork.org/restful_green_glamorous_manatee/uploads/aws-compute-threetier_2b3c4d5e)

---

## Introducing Today's Project!

In this project, I demonstrated how to set up a three-tier web application from the ground up. I began with the presentation tier, then moved on to the logic tier, and finally set up the data tier, before tying all three layers together into a functioning application.

### Tools and concepts

In this project, I utilized several AWS services including Amazon S3, Amazon CloudFront, AWS Lambda, API Gateway, and Amazon DynamoDB. Throughout the process, I gained hands-on experience working with Lambda functions, diagnosing and resolving CORS (Cross-Origin Resource Sharing) issues, and understanding the importance of invalidating the CloudFront cache when deploying updates to static assets or frontend code.

### Project reflection

This project took approximately 2 hours to complete. The most challenging part was resolving the CORS error, which required configuration changes in both API Gateway and the Lambda function. The most rewarding moment was seeing the web app successfully returned the correct user data, confirming that all three tiers were integrated and working as expected.

I did this project today to learn about the three-tier architecture and set up my own webapp. This project met my goals and I could see a fully functioning web app at the end. 

---

## Presentation tier

For the presentation tier, I set up how the website would be displayed and made accessible to users. This tier was responsible for storing the website’s static files using Amazon S3 and distributing them efficiently through Amazon CloudFront.

I accessed my deployed website using the distribution domain name provided in the General tab of my CloudFront distribution. The S3 bucket policy has been updated, and together with Origin Access Control (OAC), it ensures that the contents of my S3 bucket remain private. Only CloudFront, specifically the distribution I created is authorized to fetch content from the bucket. Direct public access and access from other services are denied, providing a secure and controlled S3 environment.

![Image](http://learn.nextwork.org/restful_green_glamorous_manatee/uploads/aws-compute-threetier_3a4b5c6d)

---

## Logic tier

For the logic tier, I set up a Lambda function to handle backend operations such as looking up a userId and returning user data. I also configured an API using API Gateway to receive requests from users and route them to the Lambda function for processing.

The Lambda function retrieves data from a DynamoDB table by looking up a specific user ID provided in the event, triggered by a query on our website. It also includes error handling to gracefully manage failed requests or missing data.  

![Image](http://learn.nextwork.org/restful_green_glamorous_manatee/uploads/aws-compute-threetier_6a7b8c9d)

---

## Data tier

For the data tier, I created a database using Amazon DynamoDB, a fast and flexible NoSQL database designed for low-latency data storage. Currently, there is no data available to return to users of the web app. Once the DynamoDB table was configured and populated with data, the application was able to retrieve and return user-specific information as needed.

In my table, I used userId as the partition key, meaning each item is uniquely identified by its userId. I added a sample data item to the table. Since DynamoDB is schemaless, each item can have its own set of attributes. This allows for flexible and dynamic data modeling and new attributes can be added to individual items without affecting others.

![Image](http://learn.nextwork.org/restful_green_glamorous_manatee/uploads/aws-compute-threetier_u1v2w3x4)

---

## Logic and Data tier

After setting up all three layers of my three-tier architecture, the next step was to establish communication between the presentation tier and the logic tier. At that point, the API couldn't yet receive or process user requests from the distributed frontend. To enable this interaction, I integrated the frontend with backend services using API Gateway, allowing seamless communication between the web interface and the application logic.

To test my API, I visited the Invoke URL for the production stage of the API. This allowed me to verify whether the API could retrieve user data successfully. When I looked up userId=1, the API returned the expected user data in JSON format, confirming that the logic and data tiers are properly connected.

![Image](http://learn.nextwork.org/restful_green_glamorous_manatee/uploads/aws-compute-threetier_a112c3d5)

---

## Console Errors

When I tried accessing data on the distributed website using browser developer tools, I noticed a 403 error. After investigating, I realized that the script.js file was referencing a placeholder URL for the production stage API instead of my actual API Gateway Invoke URL. This caused the request to fail with a forbidden error (403).

To resolve the error I updated the script.js by replacing some placeholder URL with the API's prod stage Invoke URL. I then uploaded this file again to my S3.

After updating script.js with the correct API URL, I encountered a second error related to CORS (Cross-Origin Resource Sharing). This happened because API Gateway was only configured to accept requests from its own Invoke URL, and not from requests coming through CloudFront, which serves our website. As a result, the browser blocked the request due to CORS policy restrictions.

![Image](http://learn.nextwork.org/restful_green_glamorous_manatee/uploads/aws-compute-threetier_a1b2c3d5)

---

## Resolving CORS Errors

To resolve the CORS error, I went into API Gateway and enabled CORS on the /users resource. I ensured that GET requests were allowed and specified the CloudFront distribution domain as the allowed origin. This configuration allowed the frontend hosted on CloudFront to successfully communicate with the API.

I also updated the Lambda function code to include the necessary CORS headers in its response. This ensured that the API could return data to the browser without being blocked. Specifically, I added the Access-Control-Allow-Origin header to allow responses to be shared with the domain making the request, enabling successful communication through the API's Invoke URL.

![Image](http://learn.nextwork.org/restful_green_glamorous_manatee/uploads/aws-compute-threetier_1qthryj2)

---

## Fixed Solution

I verified the fixed connection between API Gateway and CloudFront by testing the distributed site again. In the final test, user data was successfully returned confirming that a user request from the presentation tier was able to reach the logic tier and retrieve data from the data tier.

![Image](http://learn.nextwork.org/restful_green_glamorous_manatee/uploads/aws-compute-threetier_2b3c4d5e)

---

---
