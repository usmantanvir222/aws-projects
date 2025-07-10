<img src="https://cdn.prod.website-files.com/677c400686e724409a5a7409/6790ad949cf622dc8dcd9fe4_nextwork-logo-leather.svg" alt="NextWork" width="300" />

# Creating a Private Subnet

**Project Link:** [View Project](http://learn.nextwork.org/projects/aws-networks-private)

**Author:** Usman Tanvir  
**Email:** usmantanvir@gmail.com

---

## Creating a Private Subnet

![Image](http://learn.nextwork.org/restful_green_glamorous_manatee/uploads/aws-networks-private_afe1fdbd)

---

## Introducing Today's Project!

### What is Amazon VPC?

Amazon VPC is a is a logically isolated section of the AWS Cloud where you can run and manage resources in a virtual network that you fully control. It is useful as it allows users to have their own infrastructure private from other users.

### How I used Amazon VPC in this project

I used Amazon VPC today to create a private subnet, private route table and a private NACL. 

### One thing I didn't expect in this project was...

Everything went as expected.

### This project took me...

I spent about 30 minutes doing the project and documentation.

---

## Private vs Public Subnets

The difference between public and private subnets is that public subnets have access to the public internet while private subnets dont.

Having private subnets are useful as it allows us to keep resources that we do not want outside users to get access to private.

My private and public subnets cant have overlapping CIDR block IP's.

![Image](http://learn.nextwork.org/restful_green_glamorous_manatee/uploads/aws-networks-private_afe1fdbd)

---

## A dedicated route table

By default my private subnet is associated with the default route table i.e. a route that has a route to the internet gateway.

I had to set up a new route table because my private subnet should not have a route to an internet gateway! 

The dedicated route table for my private subnet contains a single inbound and outbound rule that allows internal communication within the VPC. This ensures that resources in the private subnet can interact with other components inside the VPC while remaining isolated from external networks like the internet.

![Image](http://learn.nextwork.org/restful_green_glamorous_manatee/uploads/aws-networks-private_b4b904b5)

---

## A new network ACL

By default my private subnet is associated with the default NACL which is set up for every VPC created in my account.

I set up a dedicated network ACL for my private subnet because it was allowing all inbound and outbound traffic which is not what I want.

My new network ACL has two simple rules deny all inbound and deny all outbound traffic!

![Image](http://learn.nextwork.org/restful_green_glamorous_manatee/uploads/aws-networks-private_1ed2cb07)

---

---
