<img src="https://cdn.prod.website-files.com/677c400686e724409a5a7409/6790ad949cf622dc8dcd9fe4_nextwork-logo-leather.svg" alt="NextWork" width="300" />

# Launch a Kubernetes Cluster

**Project Link:** [View Project](http://learn.nextwork.org/projects/aws-compute-eks1)

**Author:** Usman Tanvir  
**Email:** usmantanvir@gmail.com

---

## Launch a Kubernetes Cluster

![Image](http://learn.nextwork.org/restful_green_glamorous_manatee/uploads/aws-compute-eks1_e5f6g7h8)

---

## Introducing Today's Project!

In this project I will launch an EC2 instance, deploy my own Kubernetes cluster via Amazon EKS. EKS is AWS's service for deploying Kubernetes clusters in the cloud. I will also get to use tools like eksctl and CloudFormation.

### What is Amazon EKS?

Amazon EKS is AWS's cloud Kubernetes service which means it simplifies managing Kubernetes clusters. I used it in today's project to create my very first Amazon EKS cluster.

### One thing I didn't expect

One thing I didn’t expect in this project was that even after assigning AdminAccess to the EC2 instance role, I still couldn’t see the nodes in the EKS cluster. It wasn’t until I created an IAM access entry that the EC2 instance was granted the necessary Kubernetes-level permissions. This highlighted the important distinction between AWS IAM permissions and Kubernetes RBAC, and how both need to be configured correctly for full access.

### This project took me...

The project took me about 90 minutes including the demo and documentation and creating the Kubernetes cluster took the longest time.

---

## What is Kubernetes?

Kubernetes is a powerful container orchestration platform that automates the deployment, scaling, and management of containerized applications across clusters of servers. It ensures that containers run in the right place, scales them up or down based on demand, and automatically restarts any containers that fail.
Without Kubernetes or a similar tool, managing containers would be a manual and error-prone process. You’d need to start each container individually and monitor them constantly to recover from crashes or handle scaling needs. That is why companies and developers use Kubernetes to deploy and manage large scale containerized applications.

I used eksctl to create an EKS cluster. The create cluster command I ran defined the name of the cluster,  the region where it should run, launched a node group using a t2 micro instance with 3 nodes. It will also automatically scale depending upon demand from 1 node to max of 3 nodes.

I initially ran into two errors while using eksctl. The first one was because I did not have eksctl installed in my EC2 instance. The second one was because my EC2 instance did not have permission to create an EKS cluster.

![Image](http://learn.nextwork.org/restful_green_glamorous_manatee/uploads/aws-compute-eks1_ff9bfc221)

---

## eksctl and CloudFormation

CloudFormation helped create my EKS cluster because eksctl uses CloudFormation under the hood to create a cluster. It created VPC resources because creating EKS cluster in my default VPC would cause compatability and permissions issue.

There was also a second CloudFormation stack created for the node group. The key difference between a Kubernetes cluster and a node group is that the cluster represents the entire Kubernetes environment, including the control plane (which manages the overall system), while the node group consists of a set of EC2 instances that serve as worker nodes where containerized applications actually run.

![Image](http://learn.nextwork.org/restful_green_glamorous_manatee/uploads/aws-compute-eks1_w3e4r5t6)

---

## The EKS console

I needed to create an IAM access entry to view and interact with the nodes in my EKS node group. An access entry is a mapping between an AWS IAM identity (user or role) and the Kubernetes access control system (RBAC). This allows IAM users or roles to be granted specific permissions within the Kubernetes cluster.
I configured the access entry using the Access Entries section in the EKS Management Console, which simplifies the process of integrating IAM with Kubernetes RBAC.

It took about 40 minutes to create my cluster including demo time. Since I'll create this cluster again in the next project of this series, maybe this process could be sped up if I used templates in Terraform or CloudFormation and installed dependencies ahead.

![Image](http://learn.nextwork.org/restful_green_glamorous_manatee/uploads/aws-compute-eks1_e5f6g7h8)

---

## EXTRA: Deleting nodes

Did you know you can find your EKS cluster's nodes in Amazon EC2? This is because EC2 is the node in the Kubernetes clusters/setups using AWS.

In a Kubernetes node group, the desired size refers to the number of nodes you want the group to maintain under normal conditions. The minimum and maximum sizes define the bounds for auto scaling, allowing the cluster to scale down during periods of low demand and scale up when traffic increases. This ensures both cost efficiency and high availability based on workload requirements.

When I deleted my EC2 instances the EC2 instances terminated but then after sometime were created again. This is because my Kubernetes cluster wants to maintain the desired size of 3 as defined.

![Image](http://learn.nextwork.org/restful_green_glamorous_manatee/uploads/aws-compute-eks1_q7r8s9t0)

---

---
