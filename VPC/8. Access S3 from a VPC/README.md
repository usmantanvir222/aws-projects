<img src="https://cdn.prod.website-files.com/677c400686e724409a5a7409/6790ad949cf622dc8dcd9fe4_nextwork-logo-leather.svg" alt="NextWork" width="300" />

# Access S3 from a VPC

**Project Link:** [View Project](http://learn.nextwork.org/projects/aws-networks-s3)

**Author:** Usman Tanvir  
**Email:** usmantanvir@gmail.com

---

## Access S3 from a VPC

![Image](http://learn.nextwork.org/restful_green_glamorous_manatee/uploads/aws-networks-s3_3e1e79a2)

---

## Introducing Today's Project!

### What is Amazon VPC?

Amazon VPC is a is a logically isolated section of the AWS Cloud where you can run and manage resources in a virtual network that you fully control. It is useful as it allows users to have their own infrastructure private from other users.

### How I used Amazon VPC in this project

I used Amazon VPC today to first create a public subnet in my VPC. Then I created an EC2 Instance, created access keys in IAM to allow the EC2 Instance to access my S3 bucket with its objects.

### One thing I didn't expect in this project was...

I didnt expect in this project I would need access keys to access the S3 buckets within my AWS account!

### This project took me...

This project took me about an hour including the demo and documentation.

---

## In the first part of my project...

### Step 1 - Architecture set up

In this step I created a VPC by using the 'VPC and more ' option which created all the componenets I needed for a VPC with a public subnet. Then I launched an EC2 instance within that VPC.

### Step 2 - Connect to my EC2 instance

In this step I used EC2 Instance Connect to connect directly access EC2 Instance.

### Step 3 - Set up access keys

In this step I will create access keys so my EC2 Instance can have access to my AWS environment, in this case with S3.

---

## Architecture set up

I started my project by launching a public subnet in a VPC and an EC2 Instance inside the public subnet.

I also set up an S3 bucket with two files inside.

![Image](http://learn.nextwork.org/restful_green_glamorous_manatee/uploads/aws-networks-s3_4334d777)

---

## Running CLI commands

The AWS CLI (Command Line Interface) is a tool that allows you to interact with your AWS account and manage resources directly from your terminal, without needing to use the AWS Management Console. You can install it on your local machine, but it's also pre-installed on Amazon EC2 instances, which is why I was able to use it right away. The CLI is especially useful for automation, scripting, and managing infrastructure efficiently through commands.

The first command I ran was 'aws s3 ls'. This command displays all the S3 buckets that my account has access to.

The second command I ran was 'aws configure'. This is a command used to set up the AWS CLI with your credentials and default settings so that you can interact with your AWS account from the terminal.

![Image](http://learn.nextwork.org/restful_green_glamorous_manatee/uploads/aws-networks-s3_e7fa8776)

---

## Access keys

### Credentials

To set up my EC2 instance to interact with my AWS environment, I configured an access key ID, Secret Access Key, default region and default output format.

Access keys are a pair of security credentials that AWS uses to identify and authenticate a user or service when interacting with AWS programmatically such as through the AWS CLI, SDKs, or APIs.



Secret access key are like password that pairs with your access key ID (your username). You need both to access AWS services. The EC2 Instance and other applications would need secret access keys as authetication and log in to our AWS environment.



### Best practice

Although I’m using access keys in this project, the recommended best practice is to use IAM roles with attached permissions. IAM roles provide a more secure and manageable way to grant access to AWS services from an EC2 instance. Unlike access keys, IAM roles don’t require storing credentials on the instance. Instead, temporary credentials are automatically provided, making it easier to track, attach, and detach IAM policies as needed while reducing the risk of credential leakage.

---

## In the second part of my project...

### Step 4 - Set up an S3 bucket

In this step I will be creating a S3 bucket and upload 2 files inside. This S3 bucket will be accessed by my EC2 Instance later in the project to see if my access keys are working properly!

### Step 5 - Connecting to my S3 bucket

In this step I will try using AWS CLI commands in my EC2 Instance to access S3 instead of using the AWS Managment Console.

---

## Connecting to my S3 bucket

The first command I ran was 'aws s3 ls'. This command displays all the S3 buckets that my account has access to.

When I ran the command 'aws s3 ls again', the terminal responded with a list of my S3 buckets, confirming that my EC2 instance had successfully gained access to AWS services like S3 after I configured access keys. This validated that the credentials were working correctly.

![Image](http://learn.nextwork.org/restful_green_glamorous_manatee/uploads/aws-networks-s3_4334d778)

---

## Connecting to my S3 bucket

Another CLI command I ran was 'aws s3 cd s3://nextwork-vpc-project-usmantanvir' which returned the objects within that bucket.

![Image](http://learn.nextwork.org/restful_green_glamorous_manatee/uploads/aws-networks-s3_4334d779)

---

## Uploading objects to S3

To upload a new file to my bucket I first ran the command 'sudo touch /tmp/test.txt'. This command created a test.txt file.

The second command I ran was 'ws s3 cp /tmp/test.txt s3://nextwork-vpc-project-usmantanvir'. This command will copy that file I created to my S3 bucket.

The third command I ran was 'aws s3 ls s3://nextwork-vpc-project-usmantanvir' which validated the new file I created was now uploaded to my S3 bucket.

![Image](http://learn.nextwork.org/restful_green_glamorous_manatee/uploads/aws-networks-s3_3e1e79a2)

---

---
