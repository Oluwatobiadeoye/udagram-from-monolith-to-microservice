# Udagram Image Filtering Microservice

Udagram is a simple cloud application developed alongside the Udacity Cloud Engineering Nanodegree. It allows users to register and log into a web client, post photos to the feed, and process photos using an image filtering microservice.
Within this 3rd exercise of the [cloud developer nanodegree](https://www.udacity.com/course/cloud-developer-nanodegree--nd9990)

- an existing app is divided into smaller services (api-feed, api-user, fe-app).
- The project uses continuous integration and continuous delivery using [Travis CI](https://travis-ci.com/).
[Docker](https://www.docker.com/) is used to containerize the project and its deployed to a K8s cluster.
Rolling-updates and rollbacks can be done.

## Getting started

### Prerequisites

### Accounts

[AWS](aws.amazon.com), [DockerHub](https://hub.docker.com/)

### Tools

In order to run the project you need the following apps on your computer:
AWS commandline tool: [AWS CLI](https://aws.amazon.com/cli/)

K8s commandline tool: [kubectl](https://kubernetes.io/docs/tasks/tools/install-kubectl/)

Kubernetes helper for AWS: [terraform](https://www.terraform.io/), [kubeone](https://github.com/kubermatic/kubeone/blob/master/docs/quickstart-aws.md)

### Bucket on AWS

- Create an [S3 Bucket](https://aws.amazon.com/s3/) with the following permissions:

```
{ "Version": "TODO",
 "Id": TODO"",
 "Statement": [{
    "Sid": "TODO",
    "Effect": "Allow",
    "Principal": {"AWS": "__YOUR_USER_ARN__"},
    "Action": ["s3:GetObject","s3:PutObject"],
    "Resource": "__YOUR_BUCKET_ARN__/*"
    }]
}
```
- Save this CORS configuration on AWS for your bucket:
```
<?xml version="1.0" encoding="UTF-8"?>
 <CORSConfiguration xmlns="http://s3.amazonaws.com/doc/2006-03-01/">
 <CORSRule>
 <AllowedOrigin>*</AllowedOrigin>
 <AllowedMethod>GET</AllowedMethod>
 <AllowedMethod>POST</AllowedMethod>
 <AllowedMethod>DELETE</AllowedMethod>
 <AllowedMethod>PUT</AllowedMethod>
 <MaxAgeSeconds>3000</MaxAgeSeconds>
 <AllowedHeader>Authorization</AllowedHeader>
 <AllowedHeader>Content-Type</AllowedHeader>
 </CORSRule>
</CORSConfiguration>
```

- Save those variables to your environment:
```
POSTGRESS_USERNAME=udagram
POSTGRESS_PASSWORD=local
POSTGRESS_DB=udagram
POSTGRESS_HOST=db
WT_SECRET=TODO
AWS_BUCKET=__YOUR_AWS_BUCKET_NAME__
AWS_REGION=__YOUR_AWS_BUCKET_REGION__
AWS_PROFILE=__YOUR_AWS_PROFILE__
```

## Deploy locally
1. all deployment files can be found in `/udacity-c3-deployment/docker`
1. Build the images: `docker-compose -f docker-compose-build.yaml build --parallel`
2. Push the images: `docker-compose -f docker-compose-build.yaml push`
3. Run the container: `docker-compose up`. The application will run on `localhost:8100`

## Deploy on AWS

### Prerequiste: Install K8s

### Run K8s cluster with EKS CLI

1. Create the cluster: `eksctl create cluster --name {{name}} --region {{region}}`
2. Create travis-user: `eksctl create iamidentitymapping --name {{name}} --role arn:aws:iam::?:role/travis_eks --group system:masters --username travis_eks`


### Running CI/CD
- set environment variables for travis in order to push images to docker registry.