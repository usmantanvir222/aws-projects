<img src="https://cdn.prod.website-files.com/677c400686e724409a5a7409/6790ad949cf622dc8dcd9fe4_nextwork-logo-leather.svg" alt="NextWork" width="300" />

# VPC Endpoints

**Project Link:** [View Project](http://learn.nextwork.org/projects/aws-networks-endpoints)

**Author:** Usman Tanvir  
**Email:** usmantanvir@gmail.com

---

## VPC Endpoints

![Image](http://learn.nextwork.org/restful_green_glamorous_manatee/uploads/aws-networks-endpoints_09bcaa8a)

---

## Introducing Today's Project!

### What is Amazon VPC?

Amazon VPC is a is a logically isolated section of the AWS Cloud where you can run and manage resources in a virtual network that you fully control. It is useful as it allows users to have their own infrastructure private from other users. Key security features include Security Groups which act as virtual firewalls to your EC2 instances by controlling both inbound and outbound traffic at the instance level. 
Network ACL's provide an additional layer of security at the subnet level controlling inbound and outbound traffic by using stateless rules. 
Private Subnets which are subnets without direct access to the internet.
VPC Flow Logs which capture detailed information about the IP traffic going to and from network interfaces in your VPC.
VPC Endpoints that enable private connection between your VPC and supported AWS services without sendign traffic over the internet.

### How I used Amazon VPC in this project

In todays' project I used Amazon VPC to set up a VPC endpoint. This provided our VPC direct private access to AWS services.

### One thing I didn't expect in this project was...

One thing I didnt expect was to see my own access blocked on my AWS console when I modified my S3 bucket policy!

### This project took me...

The project took me about an hour to complete the demo and complete the documentation.

---

## In the first part of my project...

### Step 1 - Architecture set up

In this step, I created a VPC using the "VPC and more" option in the AWS Console, which automatically provisioned all the necessary components for a VPC with a public subnet, including route tables, an internet gateway, and security groups. I then launched an EC2 instance within that VPC. Additionally, I created an Amazon S3 bucket and uploaded a few test files to it in preparation for testing VPC endpoint connectivity.

### Step 2 - Connect to EC2 instance

In this step I connected directly to the EC2 Instance using EC2 Instance Connect which will helped me access the S3 bucket and run commands.

### Step 3 - Set up access keys

In this step I set up an access key so that my EC2 Instance would have access to the AWS environment.

### Step 4 - Interact with S3 bucket

In this step I tried using AWS CLI commands in my EC2 Instance to access Amazon S3 instead of using the AWS Managment Console.



---

## Architecture set up

I started my project by launching a VPC labelled 'NextWork-1' and an EC2 Instance within the public subnet of that VPC named 'Instance - NextWork VPC Endpoints'

I also set up a S3 bucket and uploaded 2 files in it.

![Image](http://learn.nextwork.org/restful_green_glamorous_manatee/uploads/aws-networks-endpoints_4334d777)

---

## Access keys

### Credentials

To set up my EC2 instance to interact with my AWS environment, I configured an access key ID, Secret Access Key, default region and default output format.

Access keys are a pair of security credentials that AWS uses to identify and authenticate a user or service when interacting with AWS programmatically such as through the AWS CLI, SDKs, or APIs.

Secret access key are like passwords that pair with your access key ID (your username). You need both to access AWS services. The EC2 Instance and other applications would need secret access keys as authetication and log in to our AWS environment.

### Best practice

Although I’m using access keys in this project, the recommended best practice is to use IAM roles with attached permissions. IAM roles provide a more secure and manageable way to grant access to AWS services from an EC2 instance. Unlike access keys, IAM roles don’t require storing credentials on the instance. Instead, temporary credentials are automatically provided, making it easier to track, attach, and detach IAM policies as needed while reducing the risk of credential leakage.

---

## Connecting to my S3 bucket

The first command I ran was 'aws s3 ls'. This command displayed all the S3 buckets that my account has access to.



When I ran the command 'aws s3 ls again', the terminal responded with a list of my S3 buckets, confirming that my EC2 instance had successfully gained access to AWS services like S3 after I configured access keys. This validated that the credentials were working correctly.

![Image](http://learn.nextwork.org/restful_green_glamorous_manatee/uploads/aws-networks-endpoints_4334d778)

---

## Connecting to my S3 bucket

I also tested the command 'aws s3 ls s3://nextwork-vpc-endpoints-usmantanvir' which returned the two objects that are saved in the S3 bucket.

![Image](http://learn.nextwork.org/restful_green_glamorous_manatee/uploads/aws-networks-endpoints_4334d779)

---

## Uploading objects to S3

To upload a new file to my bucket I first ran the command 'sudo touch /tmp/test.txt'. This command created a test.txt file.



The second command I ran was 'aws s3 cp /tmp/nextwork.txt  s3://nextwork-vpc-endpoints-usmantanvir'. This command copied the file I had created to my S3 bucket.

The third command I ran was 'aws s3 ls s3://nextwork-vpc-endpoints-usmantanvir' which validated that the new file I created was now uploaded to my S3 bucket.

![Image](http://learn.nextwork.org/restful_green_glamorous_manatee/uploads/aws-networks-endpoints_3e1e79a2)

---

## In the second part of my project...

### Step 5 - Set up a Gateway

In this step, I set up a VPC Gateway Endpoint to establish direct and secure communication between my VPC and Amazon S3, without routing traffic over the public internet. This improves both security and performance, ensuring that data transfers between the EC2 instance and S3 stay within the AWS network.

### Step 6 - Bucket policies

In this step I wanted to validate that the my EC2 Instance is accessing the S3 via the gateway endpoint and not the public internet.

### Step 7 - Update route tables

In this step I tried testing my endpoint connection between my S3 bucket and EC2 instance.

### Step 8 - Validate endpoint conection

In this step I will validate my VPC endpoint setup one more time and also use endpoint policies to restrict my EC2 Instance access to my AWS environment.

---

## Setting up a Gateway

I set up a Gateway Endpoint for Amazon S3, which is specifically designed for S3 and DynamoDB. This type of endpoint adds a route to the VPC’s route table, allowing traffic to be privately directed to the service over the AWS network and not use the Public Internet.

### What are endpoints?

An endpoint in AWS is a service that allows private connections between your VPC and other AWS services without needing the traffic to go over the internet. 

![Image](http://learn.nextwork.org/restful_green_glamorous_manatee/uploads/aws-networks-endpoints_09bcaa8a)

---

## Bucket policies

A bucket policy is a type of IAM resource-based policy that is specifically used to control access to an Amazon S3 bucket. With bucket policies, you can define who (users, roles, accounts, or services) can access the bucket, what actions they are allowed to perform (such as s3:GetObject or s3:PutObject), and under what conditions (such as specific IP addresses, VPCs, or using HTTPS).
Bucket policies are written in JSON and are attached directly to the bucket, allowing fine-grained control over access permissions without needing to modify IAM user policies.

My bucket policy will deny any access to my S3 bucket if the traffic is not coming from my VPC endpoint .

![Image](http://learn.nextwork.org/restful_green_glamorous_manatee/uploads/aws-networks-endpoints_7316a13d)

---

## Bucket policies

Right after saving my bucket policy, my S3 bucket page showed 'denied access' warnings. This was because I had denied all actions unless they come from my VPC endpoint thus we have blocked the AWS Managment Console also!

I also had to update my route table because, by default, it didn’t include a route for traffic from my public subnet to the S3 Gateway Endpoint. 

![Image](http://learn.nextwork.org/restful_green_glamorous_manatee/uploads/aws-networks-endpoints_4ec7821f)

---

## Route table updates

To update my route table I visited the Endpoints page of my VPC and modifed the route table from there to associate the VPC's public subnet.

After updating my public subnet's route table my terminal could return the buckets content when I entered the command 'aws s3 ls s3://nextwork-vpc-endpoints-usmantanvir'.

![Image](http://learn.nextwork.org/restful_green_glamorous_manatee/uploads/aws-networks-endpoints_d116818e)

---

## Endpoint policies

An endpoint policy is a type of resource-based policy in AWS that controls which principals (users, roles, services) can access specific services through a VPC endpoint.

I updated my VPC endpoint’s policy by changing the Effect from "Allow" to "Deny". This change took effect immediately when I attempted to run an aws s3 command from my EC2 instance, the request was denied. This confirmed that endpoint policies act as an additional layer of access control, and can override other permissions by explicitly blocking traffic through the endpoint.

![Image](http://learn.nextwork.org/restful_green_glamorous_manatee/uploads/aws-networks-endpoints_3e1e79a3)

---

---
