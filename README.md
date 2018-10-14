# Grüper

Planning dinner and drinks just became a little easier

> Makes choosing a restaurant with a group of people easy.

<img src="https://user-images.githubusercontent.com/18472576/27521685-79aa928c-59d4-11e7-8d4c-cde6539c2714.png" width="300" hspace="20"><img src="https://user-images.githubusercontent.com/18472576/27521687-79be9e44-59d4-11e7-8c23-a17ec372dd51.png" width="300">


Sign up to track where you go, or simply create group!

<img src="https://user-images.githubusercontent.com/18472576/27521687-79be9e44-59d4-11e7-8c23-a17ec372dd51.png" width="300" hspace="20"><img src="https://user-images.githubusercontent.com/18472576/27521686-79ab515e-59d4-11e7-9f8c-94351beee949.png" width="300">


Choose where you want to go and what you're interested in.


Vote on places with your friends and Grüper will tell you where you're going!


## Team

  - Product Owner: Anirvan Awatramani
  - Scrum Master: Erik Thompson
  - Development Team Members: Aidan Bane, Richard Hertzog

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)
    1. [Installing Dependencies](#installing-dependencies)
    1. [Tasks](#tasks)
1. [Team](#team)
1. [Contributing](#contributing)

## Requirements
- Node
- NPM
- [Yelp Fusion Credentials](https://www.yelp.com/developers/documentation/v3/get_started)

## Usage
### Installing Dependencies
From within the root directory:
```
npm install
```
From within the /server/config directory:

Rename `config.example.js` to `config.js`
In `config.js` add in Yelp App ID and Yelp App Secret from your Yelp Fusion Dashboard
Also add in a unique auth secret

### Build Bundled Scripts
```
npm run build
```
### Start Server
Server will start on PORT:3000 unless an environment variable has been set
```
npm start
```

## Development
### Installing Dependencies
From within the root directory:

```
npm install
```
### Build Bundled Scripts
Will watch for any changes in front-end code and rebuild scripts as necessary
```
npm run build:watch
```
### Start Server
Run a dev-server with Nodemon and restart server if any changes are detected on server code
```
npm run start_dev
```
### Roadmap
View the project roadmap [here](https://waffle.io/commandQ/grouper)

## Contributing
See [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines.
