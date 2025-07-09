<img src="https://cdn.prod.website-files.com/677c400686e724409a5a7409/6790ad949cf622dc8dcd9fe4_nextwork-logo-leather.svg" alt="NextWork" width="300" />

# Build a Virtual Private Cloud

**Project Link:** [View Project](http://learn.nextwork.org/projects/aws-networks-vpc)

**Author:** Usman Tanvir  
**Email:** usmantanvir@gmail.com

---

## Build a Virtual Private Cloud (VPC)

![Image](http://learn.nextwork.org/restful_green_glamorous_manatee/uploads/aws-networks-vpc_2facf927)

---

## Introducing Today's Project!

### What is Amazon VPC?

Amazon VPC is a is a logically isolated section of the AWS Cloud where you can run and manage resources in a virtual network that you fully control. It is useful as it allows users to have their own infrastructure private from other users.

### How I used Amazon VPC in this project

I used Amazon VPC to create a subnet and an Internet gateway and then attached that to the subnet.

### One thing I didn't expect in this project was...

I didnt expect using the AWS CloudShell would be that easy to set up the same resources I did using the Console.

### This project took me...

I spent about an hour doing the project and Secret Mission along with the documentation created for this project.

---

## Virtual Private Clouds (VPCs)

A VPC (Virtual Private Cloud) is a logically isolated section of the AWS Cloud where you can run and manage resources in a virtual network that you fully control.

When I first created my AWS account, a default VPC was automatically provisioned. This default VPC is the reason I was able to launch resources like EC2 instances and connect services right from Day 1. Without it, I would have needed to manually configure a custom VPC before using many AWS services that rely on VPC networking. The default VPC simplifies the onboarding experience by providing a ready-to-use networking environment.

To set up my VPC, I had to define an IPv4 CIDR block, which specifies the range of IP addresses that resources within the VPC can use.

![Image](http://learn.nextwork.org/restful_green_glamorous_manatee/uploads/aws-networks-vpc_2facf927)

---

## Subnets

Subnets are a subset of IP's within our VPC's CIDR block that allows us to organize and isolate resources within our VPC. There were subnets existing in my account , one for very Availability Zone in the Region that I had selected. My region is Oregon (US-west-2) which has four Availability Zones thus has four subnets.

After creating my subnet, I enabled the auto-assign public IPv4 address setting. This ensures that any EC2 instance launched within the subnet automatically receives a public IP address, allowing it to communicate with the internet without requiring manual configuration. Enabling this setting saves time and simplifies deployment.

The differences between public and private subnets are that the public subnets have access to the internet via an internet gateway. Private subnets are not accessible from outside the VPC. For a subnet to be considered public it has to have a route to an internet gateway.

![Image](http://learn.nextwork.org/restful_green_glamorous_manatee/uploads/aws-networks-vpc_157c4219)

---

## Internet gateways

Internet gateways are a component of a VPC that allow resources within the VPC to communicate with the public internet.

Attaching an internet gateway to a VPC means that now the VPC has a route to the internet via route tables. If I had missed the step the VPC would remain isolated without access to and from the public internet.

![Image](http://learn.nextwork.org/restful_green_glamorous_manatee/uploads/aws-networks-vpc_4ae90410)

---

## Using the AWS CLI

VPC resources can also be created using AWS CloudShell, a browser-based shell environment available directly in the AWS Management Console. It provides a convenient space to run code and interact with AWS services through the command line. The AWS CLI (Command Line Interface) is a powerful tool that allows you to create, update, and delete AWS resources using commands, offering a faster and more scriptable alternative to navigating through the console. While the AWS Management Console is excellent for learning and visualizing infrastructure, the CLI delivers the speed, automation, and flexibility needed for more advanced or large-scale operations.

To set up a VPC you can use the command aws ec2 create-vpc --cidr-block 10.0.0.0/24 --query Vpc.VpcId --output text. To create a subnet you can use the command aws ec2 create-subnet --vpc-id [VPC-ID] --cidr-block [ADD-CIDR-BLOCK-HERE]. Make sure to avoid errors by including the correct parameters and ranges that are supported within the VPC.


Compared to using the AWS Console, one key advantage of using CLI commands especially through CloudShell is the ability to script and automate the setup process. This allows for faster and more consistent creation of VPCs, subnets, Internet Gateways, and other resources by following a predefined network configuration template. On the other hand, the AWS Console is great for learning, as it provides a visual overview and a summary of settings that can be especially helpful when debugging or verifying configurations.

Overall, I preferred using CloudShell, as getting comfortable with it supports my goal of automating the manual processes often done in the Console. It bridges the gap between learning and professional-grade infrastructure management.

![Image](http://learn.nextwork.org/restful_green_glamorous_manatee/uploads/aws-networks-vpc_9b2465411)

---

---
