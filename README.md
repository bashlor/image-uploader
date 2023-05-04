<h1 align="center">Image Uploader API</h1>

<div align="center">
   Solution for a challenge from  <a href="http://devchallenges.io" target="_blank">Devchallenges.io</a>.
</div>

<div align="center">
  <h3>
    <a href="https://image-uploader-ru8q.onrender.com/">
      Demo
    </a>
    <span> | </span>
    <a href="https://image-uploader-bashlor-api.herokuapp.com/">
      Solution (API Link)
    </a>
    <span> | </span>
    <a href="https://devchallenges.io/challenges/O2iGT9yBd6xZBrOcVirx">
      Challenge
    </a>
  </h3>
</div>

<!-- TABLE OF CONTENTS -->

## Table of Contents

- [Overview](#overview)
- [Built With](#built-with)
- [Tooling / DevOps stack](#tooling--devops-stack)
- [Features](#features)
- [How to use](#how-to-use)

<!-- OVERVIEW -->

## Overview

![screenshot](https://raw.githubusercontent.com/bashlor/image-uploader-client/main/resources/presentation.png)

## Purpose

The main purpose was to learn how to use Digital Ocean Spaces, and make a monorepo boilerplate that use
Turborepo, Pnpm, Docker, and Gitlab-CI.

### Built With

- [Node.js](https://nodejs.org/en/)
- [Nest.js](https://nestjs.com/)
- [React.js](https://reactjs.dev/)

### Tooling / DevOps stack

- [Docker](https://www.docker.com/) (Containerization)
- [Turborepo](https://turbo.fish/) (Monorepo tooling)
- [Pnpm](https://pnpm.io/) (Better dependency manager than npm or yarn)
- [Gitlab-CI](https://docs.gitlab.com/ee/ci/) (CI/CD)
- [Digital Ocean Spaces](https://www.digitalocean.com/products/spaces/) (Object storage)
- [Traefik](https://traefik.io/) (Reverse proxy)


## Features


This application/site was created as a submission to a [DevChallenges](https://devchallenges.io/challenges) challenge. The [challenge](https://devchallenges.io/challenges/O2iGT9yBd6xZBrOcVirx) was to build an application to complete the given user stories.

## How To Use

Execute these commands on a terminal :

```bash
# Clone this repository
$ git clone https://github.com/bashlor/image-uploader-client
```
Rename `example.api.env`, `example.client.env` files to  `dev.api.env` and `dev.client.env`. Fill the environment variables with your own values.

```bash
# Install dependencies
$ pnpm install

# Run the app
$ make start-dev

# Stop the app
$ make stop-dev
```




