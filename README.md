# Grüper

Planning dinner and drinks just became a little easier

## Team

  - Product Owner: Erik Thompson
  - Scrum Master: Anirvan Awatramani
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
In `config.js` add in YelpID and YelpSecret from your Yelp Fusion Dashboard

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
