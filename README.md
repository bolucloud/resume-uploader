# Resume Uploader

A full stack web application that allows job candidates to upload a resume to the site.
Inspired by Indeed's resume upload feature.

App deployed here -> https://main.d3oin70q393x3q.amplifyapp.com/

## Features

- Authentication (Sign up / Login)
- Sends email to admin when new candidate uploads a resume, with the uploaded resume as an attachment
- Allows candidates to perform CRUD operations on their resume.

## Tech Stack

- ReactJS
- Chakra UI
- AWS
  - Cognito Pool
  - DynamoDB
  - GraphQL API
  - Lambda
  - S3
  - SES

## Architecture

![resume uploader cloud architecture diagram](/src/assets/resume_uploader.png)
