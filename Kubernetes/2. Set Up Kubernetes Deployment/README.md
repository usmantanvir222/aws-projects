<img src="https://cdn.prod.website-files.com/677c400686e724409a5a7409/6790ad949cf622dc8dcd9fe4_nextwork-logo-leather.svg" alt="NextWork" width="300" />

# Set Up Kubernetes Deployment

**Project Link:** [View Project](http://learn.nextwork.org/projects/aws-compute-eks2)

**Author:** Usman Tanvir  
**Email:** usmantanvir@gmail.com

---

## Set Up Kubernetes Deployment

![Image](http://learn.nextwork.org/restful_green_glamorous_manatee/uploads/aws-compute-eks2_45e6c3de5)

---

## Introducing Today's Project!

In this project I will prepare a backend app for Kubernetes deployment. This is because Kubernetes deployment requires apps to be containerized and be a container image. In this project I will create that docker image

### Tools and concepts

In this project I used Amazon EKS, Git, Docker, Amazon ECR to prepare a backend app for deployment with Kubernetes. This involved setting up an EKS cluster, cloning code from GitHub, building and pushing a docker
image to Amazon ECR.

### Project reflection

This project took me approximately 90 minutes including demo and documentation. The most challenging part was running into multiple errors! My favorite part was pushing the container image to ECR!

One thing I learned during this experience was that after adding my ec2-user to the docker group, I needed to refresh the EC2 instance session for the new group membership to take effect. Without refreshing (by logging out and back in), the user wouldn't have the required permissions to run Docker commands, even though it was technically added to the group.

---

## What I'm deploying

To set up today's project, I launched a Kubernetes cluster. Steps I took to do this included first granting the EC2 instance an IAM role for AdministratorAccess. I also installed eksctl and ran the command to created a cluster with a node group as a t3 micro and have 3 nodes.I also defined a range of nodes between a minimum of 1 and maximum of 3.

### I'm deploying an app's backend

Next, I retrieved the backend app that I plan to deploy. An app's backend means the "brain" of an application. It's where your app processes user requests and stores and retrieves data. I retrieved the backend code by using git to clone the repository.

![Image](http://learn.nextwork.org/restful_green_glamorous_manatee/uploads/aws-compute-eks2_1ebb86c71)

---

## Building a container image

Once I cloned the backend code my next step was to build a container image of the backend. This is because Kubernetes needs a container image for a successful app deployment. At the moment there is no image just raw code.

When I tried to build a Docker image of the backend I ran into a permission error because the user I used to access this instance was "ec2-user" while the docker was installed was set up for "root" user. ec2-user cant run root user level commands without sudo.

To resolve the permissions error I added ec2-user to the docker group. The Docker group is a group in Linux system that grants a user the permission to run Docker commands like 'docker build'.

![Image](http://learn.nextwork.org/restful_green_glamorous_manatee/uploads/aws-compute-eks2_45e6c3de5)

---

## Container Registry

I used Amazon ECR in this project to save the containerized image of the backend app. ECR is a good choice for the job because its an AWS service and integrates well with EKS. This makes deploying the app even faster.

Container registries like Amazon ECR are essential for Kubernetes deployments because they provide a centralized, secure location to store and manage container images. With ECR, you can easily pull the latest container images on demand during deployment, ensuring your Kubernetes workloads are always running the most up-to-date version of your application. This streamlines the deployment process and supports consistent, version-controlled rollouts across environments.

![Image](http://learn.nextwork.org/restful_green_glamorous_manatee/uploads/aws-compute-eks2_l2m3n4o5)

---

## EXTRA: Backend Explained

After reviewing the app's backend code, I've learnt that the app functions by extracting data from another API but we also have our own API in app.py thats responsible for others wanting access to our service.

### Unpacking three key backend files

The requirements.txt filie lists the dependencies the application needs to run properly.

The Dockerfile gives Docker instructions on how a Docker image of the backend should be built. It includes commands on where it can find a list of all dependencies to install (requirements.txt) and commands that will automatically run. 

The app.py contains 3 main parts. Installing dependencies, formatting the data into JSON and passing the formatted data back to user.

---

---
