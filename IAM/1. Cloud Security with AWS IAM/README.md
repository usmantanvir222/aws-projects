<img src="https://cdn.prod.website-files.com/677c400686e724409a5a7409/6790ad949cf622dc8dcd9fe4_nextwork-logo-leather.svg" alt="NextWork" width="300" />

# Cloud Security with AWS IAM

**Project Link:** [View Project](http://learn.nextwork.org/projects/aws-security-iam)

**Author:** Usman Tanvir  
**Email:** usmantanvir@gmail.com

---

![Image](http://learn.nextwork.org/restful_green_glamorous_manatee/uploads/aws-security-iam_1c864649)

---

## Introducing Today's Project!

In this project, I will demonstrate how to create and apply IAM policies for a user by assigning them to a user group with specific permissions. I will also launch two EC2 instances with different tags and test whether the user can perform actions based on the policy conditions defined.

The goal of this project is to deepen my understanding of Identity and Access Management (IAM) and to learn how to secure an AWS account in a multi-user environment by enforcing principle of least privilege access controls.

### Tools and concepts

Services I used were IAM policies, groups and users. I also learnt how to create an alias for my account. Key concepts I learnt include writing a policy in JSON and applying it to a group and user. I also tested the IAM Policy simulator to validate the user's policy.

### Project reflection

This project took me approximately an hour. The most challenging part was to make sure that the JSON file had correct formatting. It was most rewarding when I tried to stop the EC2 instance for which my user did not have permission to stop.

---

## Tags

Tags are like labels you can attach to AWS resources for organization. They are useful for grouping mass managment and applying security policies.

The tag I have used on my EC2 instances is called "Env". The values assigned for my instances are development and production. These represent the two different environments that will be used to build and release our App!

![Image](http://learn.nextwork.org/restful_green_glamorous_manatee/uploads/aws-security-iam_2e0e5a5d)

---

## IAM Policies

An IAM policy is a rule for who can do what with your AWS resources. It's all about giving permissions to IAM users, groups, or roles, saying what they can or can't do on certain resources, and when those rules kick in.

### The policy I set up

For this project, I’ve set up a policy using JSON.

I’ve created a policy that allows all EC2 related actions to all the EC2 instances that have the Environment tag "development". It also denies creating and deleting tags for All EC2 instances.

### When creating a JSON policy, you have to define its Effect, Action and Resource.

When writing JSON policy statements we have to specify:
i.) Effect: i.e. Allow or Deny
ii.) Action: i.e. the specific action that you want allow/deny.
iii) Resources: the specific groups/resources this policy will take effect on.

---

## My JSON Policy

![Image](http://learn.nextwork.org/restful_green_glamorous_manatee/uploads/aws-security-iam_1c864649)

---

## Account Alias

An Account Alias is a friendly name for your AWS account that you can use instead of your account ID (which is usually a bunch of digits) to sign in to the AWS Management Console.

Creating an account alias took me less than a minute. 

![Image](http://learn.nextwork.org/restful_green_glamorous_manatee/uploads/aws-security-iam_0eb4439b)

---

## IAM Users and User Groups

### Users

IAM users are the people that will get access to your resources/AWS account, whereas user groups are the collections/folders of users for easier user management.

### User Groups

IAM users are the people that will get access to your resources/AWS account, whereas user groups are the collections/folders of users for easier user management

I attached the policy I created to this user group, which means that all user's in that user group will inherit permissions I granted in that policy.

---

## Logging in as an IAM User

The first way is to email the sign in instructions and secondly downloading a csv file.

Once I logged in as my IAM user, I noticed it looked very different from my admin user dashboard. I saw a lot of services had access denied messages. This was because this new IAM user has fewer permissions as defined by the group policy.

![Image](http://learn.nextwork.org/restful_green_glamorous_manatee/uploads/aws-security-iam_6f2ab446)

---

## Testing IAM Policies

I tested my JSON IAM policy by trying to stop the two EC2 instances that were running. When I tried to stop the production instance I got an error which prevented me from stopping.

### Stopping the production instance

When I tried to stop the production instance I got a "Failed top stop the instance". This was because my user is not authorized to perform the action "Stop instances". 

![Image](http://learn.nextwork.org/restful_green_glamorous_manatee/uploads/aws-security-iam_0e7a9d6a)

---

## Testing IAM Policies

### Stopping the development instance

Next, when I tried to stop the development instance I was successfully able to stop the EC2 instance. This was because the policy I created and attached to this user allowed all EC2 actions to instances with the Env tag "development".

![Image](http://learn.nextwork.org/restful_green_glamorous_manatee/uploads/aws-security-iam_1811801c)

---

## The IAM Policy Simulator

The IAM Policy Simulator is a powerful tool that allows you to test IAM policies for a user, group, or role without actually affecting any AWS resources. It’s especially useful because it lets you simulate permissions and validate access behavior in a safe environment helping you catch misconfigurations before they impact your production environment.

### How I used the simulator

I set up a simulation for the user "nextwork-dev-usmantanvir" user. The results were that the user did not have permission to Delete Tags or Stop instances. When I modifed the resources to use the "development" tag for Stopping instances I got an allowed result which is correct.

![Image](http://learn.nextwork.org/restful_green_glamorous_manatee/uploads/aws-security-iam_069d8a621)

---

---
