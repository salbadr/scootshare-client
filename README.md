# ScootShare

## Description
This repository contains the code for building and deploying the ScootShare client application.

ScootShare allows for users to rent motorcycles of different types, such as, Electric, Kick and Gas.

## Architecture and Design
The frontend is built using React with Node version 24. Styling is handled using Tailwind css. The client uses Supabase client to fetch scooters data.

Tanstack Query is used to make all API calls. This promotes caching and improved performance.  
AWS Cloudfront is used as a CDN to display static resources, such as, images.

Vite is used as project bundler.

## Build and Deployments

### Local Builds
To run the app, simply install the packages first using the command

```npm install```

Afterwards, run the local build using the command:

```npm run dev```

For local build, you need to have a `.env.local` updated with the anon key

### Production and Staging
Production and staging deployments use the command:

```npm run build```

with staging or production modes. The deployment process performs linting, makes the build and deploys it on the respective  
S3 buckets in AWS 