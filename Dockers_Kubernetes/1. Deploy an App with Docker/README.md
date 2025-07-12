<img src="https://cdn.prod.website-files.com/677c400686e724409a5a7409/6790ad949cf622dc8dcd9fe4_nextwork-logo-leather.svg" alt="NextWork" width="300" />

# Deploy an App with Docker

**Project Link:** [View Project](http://learn.nextwork.org/projects/aws-compute-eb)

**Author:** Usman Tanvir  
**Email:** usmantanvir@gmail.com

---

![Image](http://learn.nextwork.org/restful_green_glamorous_manatee/uploads/aws-compute-eb_c4df13c84)

---

## Introducing Today's Project!

### What is Docker?

In today’s project I used Docker to create and run containers based on existing container images. I also built my own custom container image, allowing me to package an application along with all its dependencies into a portable and consistent environment. This helped reinforce my understanding of how Docker simplifies application deployment and testing across different systems.

### One thing I didn't expect...

I didn't exect Elastic Beanstalk implementation to be so simple to deploy my application!

### This project took me...

This project took me around 90 minutes including installing Docker on my system , running the demo and then completing the documentation.

---

## Understanding Containers and Docker

### Containers

Containers are lightweight, portable environments that package an application with everything it needs to run such as code, libraries, and dependencies.
They are useful as they are easy to deploy your application on another system without worrying about the dependencies as they are part of the package thus allow quick deployment of software.

A container image is a blueprint or template for containers. Containers spawned from the same container image on different machines will behave the same way which helps developers in a team with unified experience when running an application.

### Docker

Docker is a platform that helps you create, manage and deploy containers efficiently. Docker Desktop is a user-friendly application that makes it easier to work with Docker on your local machine. It provides a graphical interface, along with integrated tools for building, testing, and deploying containerized applications—making it ideal for developers and engineers to use Docker seamlessly on their computers.

The Docker daemon is a background process that manages Docker containers on your system. It listens for requests from the Docker client (like Docker Desktop) and handles tasks such as building images, running containers, managing networks and volumes, and distributing containers.

---

## Running an Nginx Image

nginx is a web server which is a program that serves web pages to people on the internet and is referred as a 'proxy server' which means it can be used to forward requests from the internet to other servers.

The command I ran to start a new container was 'docker run -d -p 80:80 nginx'. I set the flags -d:running in the background and matching ports 80 in my host computer to port 80 in the container.

![Image](http://learn.nextwork.org/restful_green_glamorous_manatee/uploads/aws-compute-eb_6245f5bb10)

---

## Creating a Custom Image

The Dockerfile is a set of instructions that tells Docker how to build your custom container image. 

My Dockerfile tells Dockers three thing. Firstly it tells Docker  to use the latest NGINX container image as the base. Then the index.html tells that we are making modifications to serve my own content and 'EXPOSE 80' means that I want the container to receive web traffic through port 80.

The command I used to build my custom image with my Dockerfile was 'docker build -t my-web-app'. The . at the end of the command means that Docker should find the Dockerfile in the current directory.

![Image](http://learn.nextwork.org/restful_green_glamorous_manatee/uploads/aws-compute-eb_4c741d1913)

---

## Running My Custom Image

There was an error when I ran my custom image because I was running the nginx service on port 80 already. I resolved this by stopping the container I had been running before.

In this example the container image serves as the template for creating a new container. It includes everything needed to run an Nginx web server along with my custom index.html file. The container is the running instance of that image it's the actual, live environment where the Nginx server is running and serving the customized web content.

![Image](http://learn.nextwork.org/restful_green_glamorous_manatee/uploads/aws-compute-eb_74b5c3d619)

---

## Elastic Beanstalk

Elastic Beanstalk is an AWS service that allows us to easily deploy and scale web applications and services.

Deploying my custom image with Elastic Beanstalk took me about 10 minutes total including the time to launch the Elastic Beanstalk environment.

![Image](http://learn.nextwork.org/restful_green_glamorous_manatee/uploads/aws-compute-eb_26d5573b23)

---

## Deploying App Updates

To learn how to deploy app updates with Elastic Beanstalk I updated my app by making changes to index.html. I verified those changes by opening them in a browser.

My app updates didnt show up in my live environment immediately. To deploy my changes I only had to upload the new file and deploy.

![Image](http://learn.nextwork.org/restful_green_glamorous_manatee/uploads/aws-compute-eb_5b7034684)

---

---
