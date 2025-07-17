<img src="https://cdn.prod.website-files.com/677c400686e724409a5a7409/6790ad949cf622dc8dcd9fe4_nextwork-logo-leather.svg" alt="NextWork" width="300" />

# Deploy Backend with Kubernetes

**Project Link:** [View Project](http://learn.nextwork.org/projects/aws-compute-eks4)

**Author:** Usman Tanvir  
**Email:** usmantanvir@gmail.com

---

## Deploy Backend with Kubernetes

![Image](http://learn.nextwork.org/restful_green_glamorous_manatee/uploads/aws-compute-eks4_6cfb382f2)

---

## Introducing Today's Project!

In this project, I will deploy the backend of an application using Kubernetes. The project will start from scratch, beginning with launching an EC2 instance and go all the way to deploying a live backend service accessible through Kubernetes. This end-to-end process will help solidify my understanding of container orchestration, resource configuration with manifest files, and application exposure using Kubernetes services.

### Tools and concepts

I used Kubernetes, ECR, kubectl, Git, Docker and eksctl to deploy the backend of an application. Key concepts include appyling manifests file, building container images and pushing them into a container registry. 

### Project reflection

The project took me approximately two hours including demo and documentation.

---

## Project Set Up

### Kubernetes cluster

To set up today’s project, I launched a Kubernetes cluster by first granting the EC2 instance an IAM role with AdministratorAccess to ensure it had the necessary permissions. I then installed eksctl, the command-line tool used for managing EKS clusters. Using eksctl, I created the cluster along with a node group consisting of t2.micro instances. I configured the node group to have a minimum of one node and a maximum of three nodes, allowing the cluster to scale dynamically based on demand. The cluster acts as the control center where Kubernetes schedules containers, manages resources, and handles critical tasks like scaling. When deploying an application, the EKS cluster is responsible for taking the app and running it on groups of containers known as nodes.

### Backend code

I retrieved the backend application code by cloning the GitHub repository, which gave me a local copy of the source files. Pulling the code is essential for this deployment because it allows me to build a container image that Kubernetes can deploy.

### Container image

Once I cloned the backend code, I built a container image because Kubernetes requires the application to be packaged as an image for deployment. Without this container image, it would be difficult for Kubernetes to deploy the application consistently across the cluster.

I also pushed the container image to a container registry (Amazon ECR), which serves as cloud storage for container images. Using ECR facilitates scaling for my deployment, as Kubernetes can easily pull the image tagged as “latest” and deploy it across the cluster efficiently.

---

## Manifest files

Kubernetes manifests are configuration files that provide instructions to Kubernetes on how to deploy and manage an application. Manifests are especially helpful because they automate and standardize deployments, reducing manual work and ensuring consistency when managing applications across multiple containers and environments.

A Kubernetes Deployment is responsible for managing multiple replicas of the same containerized backend, ensuring high availability and scalability. In the Deployment manifest, the container image URI specifies the location of the image (such as Amazon ECR ), telling Kubernetes where to pull the container image from when deploying the application.

A Kubernetes Service exposes your application by making it accessible to network traffic, either within the cluster or from external sources, depending on the service type. You need a Service manifest to define how traffic should be routed to the pods, which ports to expose, and whether the service should be internally or externally accessible.

My Service manifest created a service called nextwork-flask-backend that sends TCP traffic on port 8080 to all pods labeled app=nextwork-flask-backend, and make it accessible externally via a NodePort.

![Image](http://learn.nextwork.org/restful_green_glamorous_manatee/uploads/aws-compute-eks4_b01876554)

---

## Backend Deployment!

To deploy my backend application, I applied the Kubernetes manifest files I had previously created. Applying a manifest file means passing configuration templates like those defined in flask-deployment.yamlto Kubernetes. These templates instruct Kubernetes to create and manage the necessary resources, such as Deployments and Services, which are responsible for running and exposing the application within the cluster.

### kubectl

kubectl is a command-line tool used to manage resources within a Kubernetes cluster. It’s essential for deploying applications because it allows us to create and manage resources like Deployments and Services directly in the cluster. While eksctl is useful for creating and managing the EKS cluster itself, kubectl is the tool we need for interacting with and operating inside that cluster such as deploying workloads and troubleshooting resources.

![Image](http://learn.nextwork.org/restful_green_glamorous_manatee/uploads/aws-compute-eks4_6cfb382f2)

---

## Verifying Deployment

As an extension to this project, I used the Amazon EKS console to verify my deployment. By default, we don’t have visibility into the cluster’s nodes or resources through the console unless proper IAM access is configured. To enable this access, I created an IAM identity mapping that grants my EC2 instance permission to interact with the EKS cluster. This setup allowed me to securely view and manage cluster resources directly from the AWS Management Console, which was helpful for confirming the successful deployment of the backend application.

Once I gained access to my cluster's nodes, I discovered that there were Pods running inside each node. In Kubernetes, Pods are the smallest deployable units and represent a logical group of one or more containers. These containers within a Pod share the same network namespace and storage resources, which allows them to communicate efficiently and work together as a single application component.

The EKS console displays the event history for each Pod, where I could observe the container image being pulled and used to create a new instance of the backend application. This confirmed that the deployment was successful and that the backend service is running as expected.

![Image](http://learn.nextwork.org/restful_green_glamorous_manatee/uploads/aws-compute-eks4_3b391f873)

---

---
