<img src="https://cdn.prod.website-files.com/677c400686e724409a5a7409/6790ad949cf622dc8dcd9fe4_nextwork-logo-leather.svg" alt="NextWork" width="300" />

# VPC Traffic Flow and Security

**Project Link:** [View Project](http://learn.nextwork.org/projects/aws-networks-security)

**Author:** Usman Tanvir  
**Email:** usmantanvir@gmail.com

---

## VPC Traffic Flow and Security

![Image](http://learn.nextwork.org/restful_green_glamorous_manatee/uploads/aws-networks-security_92b0b0b4)

---

## Introducing Today's Project!

### What is Amazon VPC?

Amazon VPC is a is a logically isolated section of the AWS Cloud where you can run and manage resources in a virtual network that you fully control. It is useful as it allows users to have their own infrastructure private from other users.

### How I used Amazon VPC in this project

I used the Amazon VPC today to create a route table, security group and Network ACL.

### One thing I didn't expect in this project was...

Everything in this project went the way I expected.

### This project took me...

I spent an hour on this project including the secret mission and documentation.

---

## Route tables

Route tables act like a GPS for your VPC, directing traffic between subnets and to external destinations such as the internet or other networks. They determine how data is routed within the VPC, ensuring that traffic reaches the correct destination based on defined rules.

Route tables are needed to make a subnet public because a subnet needs to have a route to an internet gateway.

![Image](http://learn.nextwork.org/restful_green_glamorous_manatee/uploads/aws-networks-security_0a07b191)

---

## Route destination and target

Routes are defined by their destination and target. The destination is the range of IP addresses that the traffic in my VPC is trying to reach while the target is the path that the traffic will use to get to its destination.

The route in my route table that directed internet bound traffic to my internet gateway had a destination of 0.0.0.0/0 and a target of my internet gateway.

![Image](http://learn.nextwork.org/restful_green_glamorous_manatee/uploads/aws-networks-security_0a07b191)

---

## Security groups

Security groups are like security guards that monitor both inbound and outbound traffic at the resource level. Every resource in a subnet/VPC has a security group associated with it.

### Inbound vs Outbound rules

Inbound rules are rules that montior and restrict inbound traffic for example users visiting a web app that I am hosting . I configured an inbound rule for HTTP protocol using Port 80 for all source IP's.

Outbound rules are the rules that monitor and restrict outbound traffic for example allowing the EC2 instance to access the internet. By default my security group's outbound rule allows all traffic.

![Image](http://learn.nextwork.org/restful_green_glamorous_manatee/uploads/aws-networks-security_92b0b0b4)

---

## Network ACLs

Network ACLs are like community watchmen that secures my network at a subnet level.

### Security groups vs. network ACLs

Unlike security groups (which operate at the instance level), Network ACLs evaluate traffic at the subnet boundary and apply stateless rules, meaning you must explicitly allow return traffic.

---

## Default vs Custom Network ACLs

### Similar to security groups, network ACLs use inbound and outbound rules

By default a network ACL's inbound and outbound rules will ALLOW all incoming and out going traffic.

In contrast a custom ACL's inbound and outbound rules are automatically set to block all incoming and outgoing traffic.

![Image](http://learn.nextwork.org/restful_green_glamorous_manatee/uploads/aws-networks-security_4faeb056)

---

## Tracking VPC Resources

I created additional VPC, internet gateway and a security group in us-east-2 instead of my usual us-west-2 region. Teams would use multiple regions to lower latency for end users so they can access resources they are closer to.

EC2 Global View is a tool which allows you to see and manage your EC2 and VPC resources across all AWS Regions from a single dashboard. I could even narrow down my search looking at individual regions. Without EC2 Global View you would have to select each region manually and then look at each resource individually. This would be time consuming and not an efficient way of managing your AWS resources.

Now that I have learnt about EC2 Global View I would use it again to see all my VPC's and other networking resources I have configured in my account.

![Image](http://learn.nextwork.org/restful_green_glamorous_manatee/uploads/aws-networks-security_b03ea6162)

---

---
