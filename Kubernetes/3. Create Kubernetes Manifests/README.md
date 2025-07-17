<img src="https://cdn.prod.website-files.com/677c400686e724409a5a7409/6790ad949cf622dc8dcd9fe4_nextwork-logo-leather.svg" alt="NextWork" width="300" />

# Create Kubernetes Manifests

**Project Link:** [View Project](http://learn.nextwork.org/projects/aws-compute-eks3)

**Author:** Usman Tanvir  
**Email:** usmantanvir@gmail.com

---

## Create Kubernetes Manifests

![Image](http://learn.nextwork.org/restful_green_glamorous_manatee/uploads/aws-compute-eks3_b01876555)

---

## Introducing Today's Project!

In this project, I will set up Kubernetes manifest files, which are a critical part of the deployment process. Manifest files provide Kubernetes with structured instructions (usually in YAML format) that define how to deploy and manage a containerized application, including details such as the number of replicas, container image, ports, and resource limits.

### Tools and concepts

I used Amazon EKS, eksctl , Git, Docker, Amazon ECR to create a Kubernetes cluster and build a container image of the app to deploy. Key concepts include using manifest files (Deployments and Services) for Kuberneters deployment.

### Project reflection

This project was very helpful in understanding Kubernetes Manifests.

This project took me approximately 90 minutes including demo and documentation.

---

## Project Set Up

### Kubernetes cluster

To setup today's project I launched a Kubernetes cluster. Steps I took to do this included granting my EC2 Instance permission over IAM and installing the eksctl command line tool. Then I installed the cluster using the eksctl command.

### Backend code

I retrieved the backend that I plan to deploy by cloning the code from Git repository. An app's backend means the "brain" of an application. It's where your app processes user requests and stores and retrieves data.

### Container image

Once I cloned the backend code I built a container image because Kubernetes requires apps to be in container images to deploy them. I used docker to build a container image of the backend app.

I also pushed the container to a container registry because it helps us establish a single source for the latest version of our code. To push the image to ECR  I ran the push commands that built and tagged the image.

---

## Manifest files

Kubernetes manifests are configuration files that provide instructions to Kubernetes on how to deploy and manage an application. Manifests are especially helpful because they automate and standardize deployments, reducing manual work and ensuring consistency when managing applications across multiple containers and environments.

A Kubernetes Deployment is responsible for managing multiple replicas of the same containerized backend, ensuring high availability and scalability. In the Deployment manifest, the container image URI specifies the location of the image (such as Amazon ECR ), telling Kubernetes where to pull the container image from when deploying the application.

![Image](http://learn.nextwork.org/restful_green_glamorous_manatee/uploads/aws-compute-eks3_b01876554)

---

## Service Manifest

A Kubernetes Service exposes your application by making it accessible to network traffic, either within the cluster or from external sources, depending on the service type. You need a Service manifest to define how traffic should be routed to the pods, which ports to expose, and whether the service should be internally or externally accessible.

My Service manifest created a service called nextwork-flask-backend that sends TCP traffic on port 8080 to all pods labeled app=nextwork-flask-backend, and make it accessible externally via a NodePort.

![Image](http://learn.nextwork.org/restful_green_glamorous_manatee/uploads/aws-compute-eks3_b01876555)

---

## Deployment Manifest

Annotating the Deployment manifest helped me understand how each part of the configuration contributes to the overall behavior of a Kubernetes deployment. It forced me to look closely at what each field does like replicas, selector, and template and how they work together to define the structure, scale, and rollout strategy of the application.

A notable line in the Deployment manifest is the replicas field, which specifies the number of identical instances of the application that Kubernetes should run. In our case, setting replicas: 3 tells Kubernetes to maintain 3 running pods, each hosting a copy of the containerized application.
 

One part of the Deployment manifest I still want to learn more about is the namespace field, because it's not entirely clear how it impacts deployment or how it's used as part of the resource's metadata. 

![Image](http://learn.nextwork.org/restful_green_glamorous_manatee/uploads/aws-compute-eks3_6aae73e71)

---

---
