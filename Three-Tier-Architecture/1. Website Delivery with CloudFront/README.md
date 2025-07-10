<img src="https://cdn.prod.website-files.com/677c400686e724409a5a7409/6790ad949cf622dc8dcd9fe4_nextwork-logo-leather.svg" alt="NextWork" width="300" />

# Website Delivery with CloudFront

**Project Link:** [View Project](http://learn.nextwork.org/projects/aws-networks-cloudfront)

**Author:** Usman Tanvir  
**Email:** usmantanvir@gmail.com

---

## Website Delivery with CloudFront

![Image](http://learn.nextwork.org/restful_green_glamorous_manatee/uploads/aws-networks-cloudfront_1dddddwe)

---

## Introducing Today's Project!

In this project, I will demonstrate how to use CloudFront to deliver a website globally. I am doing this project to learn about CDN's including setting up the presentation tier for a 3 tier architecture project.

### Tools and concepts

Services that I used were S3 and CloudFront. Key concepts i learnt include content delivery network (CDN) distributions, Origin Access Control (OAC), S3 static website hosting vs CloudFront and performance loadtimes. 

### Project reflection

The project took me approximately 90 minutes to do and the most challenging part was to make sure sure to format the S3 bucket policy. It was most rewarding to see the load time comparison between S3 static website hosting and CloudFront distribution.

I did this project to learn the differences between the two options to host websites. Yes the project meet my goals and look forward to the next project.

---

## Set Up S3 and Website Files

I started the project by creating an S3 bucket to store the websites files. I can't use CloudFront for this task because it is designed for distributing content and not saving files.

The three files that make up my website are index.html, which otulines the structure of the website, style.css which adds styling to HTML elements and script.js, which adds interactive elements to the website.



I validated that my website files work by opening each file locally. We saw a simple web page without errors.

![Image](http://learn.nextwork.org/restful_green_glamorous_manatee/uploads/aws-networks-cloudfront_qgo7wcd3)

---

## Exploring Amazon CloudFront

Amazon CloudFront is a content delivery network, which means we can speed up our distributions of our static and dynamic websites via edge locations. Businesses and developers use CloudFront because it can help customers access contect faster as the latency to retrieve the website will be lower.

To use Amazon CloudFront, you set up distributions, which are instructions that tell CloudFront how to deliver your website contect.  I set up a distribution for my website and the origina is the S3 bucket wehre the files are saved.

My CloudFront distribution's default root object is index.html. This means that when someone enters the website address they will access this file on their browser.


![Image](http://learn.nextwork.org/restful_green_glamorous_manatee/uploads/aws-networks-cloudfront_qgo7wcdt)

---

## Handling Access Issues

When I tried to visit my distributed website, I encountered an 'Access Denied' error because I had not granted CloudFront access to my S3 bucket.

My distribution's origin access settings were public.This caused the access denied error because CloudFront did not have acces to the origin (S3 bucket).
The distributions origin access settings were public which means that the S3 bucket settings should be public as well.

To resolve the error, I set up origin access control (OAC). OAC is special user for CloudFront that gives it access to the objects in the S3 bucket  while making sure no one from the public can access those objects.

![Image](http://learn.nextwork.org/restful_green_glamorous_manatee/uploads/aws-networks-cloudfront_egrhntyu)

---

## Updating S3 Permissions

Once I set up my OAC, I still need to update my bucket policy because the objects  are still private to everyone. Just creating the OAC is not enough.

Creating an OAC automatically gives us a policy we could copy which grants the CloudFront distribution access to all the objects in our S3 bucket.

![Image](http://learn.nextwork.org/restful_green_glamorous_manatee/uploads/aws-networks-cloudfront_eg98ntyu)

---

## S3 vs CloudFront for Hosting

For my project extension, I'm comparing S3 with CloudFront. We initially ran into an error with access again as we enabled S3 static website but didnt making objects public to everyone.

I tried resolving this error by turning off "Block all public access" in our S3 bucket settings but we still got a 403 Forbidden error. We still need to allow the bucket policy to allow public access to the website.

I could finally see my S3 hosted website when I modified the bucket policy. This worked because before our policy only allowed CloudFront access but now with new settings S3 hosted website was allowed.

Compared to the permssion settings form my CloudFront distribution, using S3 mean that the public had access to the private website files. I preferred using CloudFront as it does not allow the public to access the files and thus is more secure. 

---

## S3 vs CloudFront Load Times

Load time refers to how quickly your website loads in your browser. The CloudFront site's load time was faster than the S3 site's because CloudFront caches content at edge locations that are geographically closer to you, whereas the S3 site may be served from a region much farther away.

A business would prefer using CloudFront when performance is a top priority. S3 static website hosting may be sufficient for simple websites where performance is not a major concern.

![Image](http://learn.nextwork.org/restful_green_glamorous_manatee/uploads/aws-networks-cloudfront_12verpuh)

---

---
