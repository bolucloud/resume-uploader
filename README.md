# Resume Uploader

A responsive full stack web application that allows job candidates to upload a resume to the site.
Inspired by Indeed's resume upload feature.

## Features

- Authentication (Sign up / Login)
- Sends email to admin when new candidate uploads a resume, with the uploaded resume as an attachment
- Allows candidates to perform CRUD operations on their resume.

## Technology

- ReactJS
- Chakra UI
- AWS
  - Amplify
  - Cognito Pool
  - DynamoDB
  - Lambda
  - S3
  - SES

## Architecture

![resume uploader cloud architecture diagram](/src/assets/resume_uploader.png)
