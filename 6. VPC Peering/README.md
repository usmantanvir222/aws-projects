<img src="https://cdn.prod.website-files.com/677c400686e724409a5a7409/6790ad949cf622dc8dcd9fe4_nextwork-logo-leather.svg" alt="NextWork" width="300" />

# VPC Peering

**Project Link:** [View Project](http://learn.nextwork.org/projects/aws-networks-peering)

**Author:** Usman Tanvir  
**Email:** usmantanvir@gmail.com

---

## VPC Peering

![Image](http://learn.nextwork.org/restful_green_glamorous_manatee/uploads/aws-networks-peering_88727bef)

---

## Introducing Today's Project!

### What is Amazon VPC?

Amazon VPC is a is a logically isolated section of the AWS Cloud where you can run and manage resources in a virtual network that you fully control. It is useful as it allows users to have their own infrastructure private from other users.

### How I used Amazon VPC in this project

In today’s project, I used Amazon VPC to create two separate VPCs, each with unique CIDR blocks. I then established a VPC Peering Connection between them to enable private communication. To complete the setup, I updated the route tables in both VPCs and adjusted the security group rules accordingly. Finally, I validated the configuration with a successful connectivity test between resources in each VPC.

### One thing I didn't expect in this project was...

I did not expect to not have a public IPv4 IP on my VPC1 EC2 Instance as I had not selected the option for obtaining IP during setting up the EC2 Instance.

### This project took me...

This project took me about an hour to complete the demo and documentation.

---

## In the first part of my project...

### Step 1 - Set up my VPC

I will first create my 2 VPCs with all its components with VPC
resource map.

### Step 2 - Create a Peering Connection

In this step I set up a VPC Peering Connection which is a VPC feature design to directly connect two VPC's together without traffic going outside the internet.

### Step 3 - Update Route Tables

In this step, I updated the route tables in both VPCs to enable traffic to flow between them. This involved adding routes that direct traffic from VPC1 to VPC2 and from VPC2 to VPC1 through the established VPC Peering Connection. Updating these routes ensures that instances in each VPC can communicate with one another using their private IP addresses.

### Step 4 - Launch EC2 Instances

In this step I created an EC2 instance in each VPC so I could use them to test connectivity between the two VPC's.

---

## Multi-VPC Architecture

I started my project by launching the 'VPC and more' option to create a new VPC. I created 1 subnet for both VPC's that I have set public.

The CIDR blocks for my two VPCs are 10.1.0.0/16 for VPC 1 and 10.2.0.0/16 for VPC 2. It’s important that these CIDR blocks are unique because when using VPC peering to enable communication between the two VPCs, their IP address ranges must not overlap. Unique IP ranges ensure that traffic is routed correctly without conflicts.

### I also launched 2 EC2 instances

I did't set up key pairs for these EC2 instances as I will use  EC2 Instance Connect to directly connect with my EC2 instance later on which will handle key pair creation and managment.

![Image](http://learn.nextwork.org/restful_green_glamorous_manatee/uploads/aws-networks-peering_11111111)

---

## VPC Peering

A VPC Peering Connection is a private, point-to-point network connection between two VPCs that allows them to communicate directly using private IP addresses, without traversing the public internet. 

VPC's would use peering connections to transfer data in a secure way as there is no data going out in the public Internet.

The difference between a Requester and an Accepter in a peering connection is that the Requester in this project VPC1 initiates the connection while the Accepter that is VPC2 accepts the request to complete the peering connection.

![Image](http://learn.nextwork.org/restful_green_glamorous_manatee/uploads/aws-networks-peering_1cbb1b88)

---

## Updating route tables

After accepting a VPC peering connection, the route tables in each VPC need to be manually updated. By default, the route tables don’t know how to send traffic to the other VPC, so you must add explicit routes pointing to the peering connection. This step is essential for enabling communication between resources across the two VPCs.

My VPC's new routes have a destination of the other VPC's CIDR block with a target of the peering connection.

![Image](http://learn.nextwork.org/restful_green_glamorous_manatee/uploads/aws-networks-peering_4a9e8014)

---

## In the second part of my project...

### Step 5 - Use EC2 Instance Connect

I used EC2 Instance Connect to connect directly with my first EC2 instance as I want to use it for a connectivity test later on to validate my VPC Peering Connection!

### Step 6 - Connect to EC2 Instance 1

Even though I had fixed EC2 to have a public IP we need to make sure the Security Group allows for ssh traffic which by default it does not.

### Step 7 - Test VPC Peering

In this step I used the EC2 Instance in VPC1  to attempt a direct connection with the Instance in VPC2.

---

## Troubleshooting Instance Connect

Next I used EC2 Instance Connect with my EC2 instance in VPC 1 by using EC2 Instance Connect.

I was stopped from using EC2 Instance Connect as my Instance did not have any Public IPv4 address. 

![Image](http://learn.nextwork.org/restful_green_glamorous_manatee/uploads/aws-networks-peering_7685490c)

---

## Elastic IP addresses

To resolve this error, I set up an Elastic IP address. An Elastic IP is a public IPv4 address that you can allocate and associate with your AWS resources. It allows these resources to be reachable from the internet and provides a static, persistent IP address, even if the underlying instance is stopped or restarted.

Associating an Elastic IP address resolved the error because it gave my EC2 a public IPv4 address which EC2 Instance Connect to work!

![Image](http://learn.nextwork.org/restful_green_glamorous_manatee/uploads/aws-networks-peering_45663498)

---

## Troubleshooting ping issues

To test VPC peering I ran the command ping 10.2.15.210 which is the private IP of the EC2 instance in VPC2.

A successful ping test validates my VPC peering connection because we would not get a reply if the two VPC's were not connected.

I had to updated my second EC2 instance's security group because by default ICMP traffic was not allowed. I allowed a new rule that allows ICMP from VPC 1 CIDR block.

![Image](http://learn.nextwork.org/restful_green_glamorous_manatee/uploads/aws-networks-peering_7a29d352)

---

---
