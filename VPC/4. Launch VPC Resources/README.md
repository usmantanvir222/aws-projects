<img src="https://cdn.prod.website-files.com/677c400686e724409a5a7409/6790ad949cf622dc8dcd9fe4_nextwork-logo-leather.svg" alt="NextWork" width="300" />

# Launching VPC Resources

**Project Link:** [View Project](http://learn.nextwork.org/projects/aws-networks-ec2)

**Author:** Usman Tanvir  
**Email:** usmantanvir@gmail.com

---

## Launching VPC Resources

![Image](http://learn.nextwork.org/restful_green_glamorous_manatee/uploads/aws-networks-ec2_8ee57662)

---

## Introducing Today's Project!

### What is Amazon VPC?

Amazon VPC is a is a logically isolated section of the AWS Cloud where you can run and manage resources in a virtual network that you fully control. It is useful as it allows users to have their own infrastructure private from other users.

### How I used Amazon VPC in this project

I used Amazon VPC to use a new option to create VPC and its components. I also created EC2 instance in my public and private subnet that I had created in my earlier projects.

### One thing I didn't expect in this project was...

I didn’t expect the VPC resource map to be such a convenient and efficient way to create a VPC along with all its associated components. It streamlined the setup process and allowed me to configure subnets, route tables, gateways, and security groups quickly all within a visual, guided interface.

### This project took me...

I spent an hour doing this project including the demo and documentation.

---

## Setting Up Direct VM Access

Directly accessing a virtual machine means you are able to log into the actual EC2 instance. You can install software and make changes to the EC2 configurations.

### SSH is a key method for directly accessing a VM

SSH traffic stands for Secure Shell. It is a network protocol used to securely access and manage remote systems over an unsecured network. SSH is a secure way for users to remotely access and manage servers, run commands, transfer files, and perform system tasks from anywhere.

### To enable direct access, I set up key pairs

Key pairs enable secure and direct access to virtual machines, such as EC2 instances. They consist of two cryptographic keys: a public key and a private key. The public key is stored on the instance, while the private key is kept by the user. When you attempt to connect (typically via SSH), the instance uses the public key to generate an encrypted challenge that only the matching private key can decrypt. This process ensures that access is both authenticated and secure, allowing only authorized users to connect to the instance.

A private key's file format means the file type that my keys are stored in. My private key's file format was .pem which most servers are read and use.

---

## Launching a public server

Before launching my EC2 instance, I updated its networking settings by selecting my custom NextWork VPC and assigning it to the appropriate Public Subnet. This ensured the instance would have internet access through the Internet Gateway associated with that subnet. I also attached my existing Public security group, which is configured to allow inbound traffic for secure access.

![Image](http://learn.nextwork.org/restful_green_glamorous_manatee/uploads/aws-networks-ec2_88727bef)

---

## Launching a private server

My private server has its own dedicated security group because we want to prevent inbound internet access (HTTP traffic) to resources that are created in the private subnet.

My private server's security group's source is my NextWork Private Security Group which means that only SSH incoming traffic on port 22 is allowed to access it. 

![Image](http://learn.nextwork.org/restful_green_glamorous_manatee/uploads/aws-networks-ec2_4a9e8014)

---

## Speeding up VPC creation

This time, I used an alternative method to set up an Amazon VPC by selecting the "VPC and more" option in the AWS Console. This approach provided a VPC resource map, which guided me through creating all the necessary components such as subnets, route tables, Internet Gateway, and security groups. It simplified the process and ensured that all the resources were correctly configured and interconnected.

A VPC resource map is a visual, interactive diagram that displays the components and resources within a VPC such as subnets, route tables, gateways, and security groups. It helps you understand how resources are connected. When you hover over a specific resource in the map, it highlights the associated components, making it easier to visualize relationships and troubleshoot configurations.

My new VPC has a CIDR block of 10.0.0.0/16. It is possible for my new VPC to have the same IPv4 CIDR block as my existing VPC because VPC's are isolated from each other and dont need to communicate with each other. This is not best practice if we need VPC peering where the VPC's must not have overlapping IP's.

![Image](http://learn.nextwork.org/restful_green_glamorous_manatee/uploads/aws-networks-ec2_1cbb1b88)

---

## Speeding up VPC creation

### Tips for using the VPC resource map

When deciding how many public subnets to create in my VPC, I had two options: either no public subnets or one public subnet per Availability Zone. I chose the latter, as it's considered a best practice for improving redundancy and ensuring high availability. By distributing public subnets across multiple Availability Zones, you reduce the risk of service disruption in case one zone experiences an outage.

The setup page also provided the option to create NAT Gateways, which enable resources in private subnets to access the internet for outbound traffic (such as software updates or API calls) while still blocking any unsolicited inbound traffic from the internet. This helps maintain the security of private resources without sacrificing necessary external connectivity.

![Image](http://learn.nextwork.org/restful_green_glamorous_manatee/uploads/aws-networks-ec2_8ee57662)

---

---
