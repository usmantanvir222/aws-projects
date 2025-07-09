<img src="https://cdn.prod.website-files.com/677c400686e724409a5a7409/6790ad949cf622dc8dcd9fe4_nextwork-logo-leather.svg" alt="NextWork" width="300" />

# Testing VPC Connectivity

**Project Link:** [View Project](http://learn.nextwork.org/projects/aws-networks-connectivity)

**Author:** Usman Tanvir  
**Email:** usmantanvir@gmail.com

---

## Testing VPC Connectivity

![Image](http://learn.nextwork.org/restful_green_glamorous_manatee/uploads/aws-networks-connectivity_8ee57662)

---

## Introducing Today's Project!

### What is Amazon VPC?

Amazon VPC is a is a logically isolated section of the AWS Cloud where you can run and manage resources in a virtual network that you fully control. It is useful as it allows users to have their own infrastructure private from other users.

### How I used Amazon VPC in this project

In today's project I used Amazon VPC to set up VPC resources and then launced EC2 instances in a public and private subnet. I then tested connectivity between servers in the public and private subnet followed by checking internet connectivity of the public server.

### One thing I didn't expect in this project was...

The project went well without any hiccup!

### This project took me...

It took me an hour to complete this project including demo time and completing documentation.

---

## Connecting to an EC2 Instance

Connectivity refers to the ability of different parts of a network to communicate with one another, as well as with external networks like the internet. It's what enables data to flow seamlessly, whether you're accessing a website, streaming your favorite shows on Netflix, or interacting with cloud-based applications. In cloud networking, ensuring proper connectivity between resources is essential for performance, availability and user experience.

My first connectivity test was whether I could connect to my public EC2 instance via EC2 Instance Connect.

![Image](http://learn.nextwork.org/restful_green_glamorous_manatee/uploads/aws-networks-connectivity_88727bef)

---

## EC2 Instance Connect

I connected to my EC2 instance using EC2 Instance Connect, which is a browser-based alternative to traditional SSH. While it still uses SSH under the hood, EC2 Instance Connect simplifies the process by handling key management for you. This allows you to securely access your instance directly from the AWS Management Console without needing to manage or store private key files locally making it a convenient and beginner-friendly option for quick access.

During my first attempt to access the public server directly, I encountered an error. The issue was with the Security Group's inbound rules, which were configured to allow only TCP traffic on port 80 (HTTP). Since I was trying to connect via SSH (port 22), the connection was blocked. 

I fixed this error by updating the Security Group to allow inbound traffic on port 22 resolved the issue and enabled secure access to the instance.

![Image](http://learn.nextwork.org/restful_green_glamorous_manatee/uploads/aws-networks-connectivity_1cbb1b88)

---

## Connectivity Between Servers

Ping is a network tool which can check whether your computer can communicate with another computer or device on a network. I used ping to test the connectivity between my public and private servers.

The ping command I ran was ping 10.0.1.106 (private servers local IPv4 address).

The first ping to the private server returned no replies, indicating that the security settings such as the Security Group or Network ACLs were blocking inbound or outbound ICMP traffic. This prevented the private server from responding to ping (ICMP Echo Request) packets, which are commonly used to test connectivity.

![Image](http://learn.nextwork.org/restful_green_glamorous_manatee/uploads/aws-networks-connectivity_defghijk)

---

## Troubleshooting Connectivity

To troubleshoot the issue, I first examined the Network ACL (NACL) associated with the private server. It was configured to block all inbound and outbound traffic, so I updated it to allow ICMP traffic in both directions. Next, I checked the Security Group for the private server and added a rule to allow inbound ICMP traffic. After these changes, the server was able to respond to ping requests, confirming that connectivity was successfully restored.

![Image](http://learn.nextwork.org/restful_green_glamorous_manatee/uploads/aws-networks-connectivity_4a9e8014)

---

## Connectivity to the Internet

Curl is a tool to test connectivity in a network. While  ping checks if one computer can contact another , curl is used to transfer data to or from a server. That means on top of checking connectivity, you can use curl to grab data from, or upload data into other servers on the internet!



I used curl to test the connectivity between my public server and the nextwork website. 

### Ping vs Curl

Ping and curl differ in the type of responses they provide in the terminal. Ping returns a performance report on the connectivity between your machine and the target server by sending ICMP echo requests and measuring response times. In contrast, curl retrieves actual data from a server such as HTML content from a web server and displays it in the terminal. Essentially, ping tests basic reachability, while curl interacts with and transfers data from servers.

---

## Connectivity to the Internet

I ran the curl command 'curl https://learn.nextwork.org/projects/aws-host-a-website-on-s3' which returned the HTML content of NextWork's first project guide.

![Image](http://learn.nextwork.org/restful_green_glamorous_manatee/uploads/aws-networks-connectivity_8ee57662)

---

---
