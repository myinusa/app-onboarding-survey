# Survey App

> A simple React Survey App, containing questions relating to calculating your carbon footprint

**This application is prioritised for smaller smart phones for example; iPhone 5/5SE**

## Getting Started

`git clone https://github.com/myinusa/app-onboarding-survey.git`

`cd app-onboarding-survey`

`npm install`

`npm start` - [Concurrently](https://www.npmjs.com/package/concurrently) has been setup so both the server and client will run _concurrently_

Open the console log (F12)

Select ‘Toggle Device Toolbar’ or Ctrl+Shift+M

<img src="/docs/srn_1.png" alt="Login" style="zoom:50%;" />

Select iPhone 5/5SE

## Project Structure

| Name                       | Description                                                 |
| -------------------------- | ----------------------------------------------------------- |
| src/App.js                 | First / Instruction Page                                    |
| src/index.js               | Defines routes, history and loads components                |
| src/assets/app.scss        | Styling for application                                     |
| src/components/App.js      | Houses all the layout for questions                         |
| src/components/Result.js   | End page when user has finished                             |
| server/data/questions.json | Data used for api                                           |
| server/routes/questions.js | Defines /question endpoint                                  |
| server/routes/routes.js    | Defines initial endpoint or default                         |
| server/server.js           | Initialization of server with body parser and cors included |

## Dependencies

| List of Dependencies | Location | Description                                                                                                                                                                                                                                             |
| -------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| concurrently         | Frontend | Run commands concurrently                                                                                                                                                                                                                               |
| node-sass            | Frontend | Wrapper around libsass                                                                                                                                                                                                                                  |
| react-dom            | Frontend | React package for working with the DOM.                                                                                                                                                                                                                 |
| react-router-dom     | Frontend | DOM bindings for React Router                                                                                                                                                                                                                           |
| react-scripts        | Frontend | This package includes scripts and configuration used by [Create React App](https://github.com/facebook/create-react-app).                                                                                                                               |
| body-parser          | Backend  | Node.js body parsing middleware.                                                                                                                                                                                                                        |
| cors                 | Backend  | CORS is a node.js package for providing a [Connect](http://www.senchalabs.org/connect/)/[Express](http://expressjs.com/) middleware that can be used to enable [CORS](http://en.wikipedia.org/wiki/Cross-origin_resource_sharing) with various options. |
| express              | Backend  | Fast, unopinionated, minimalist web framework for [node](http://nodejs.org).                                                                                                                                                                            |
| nodemon              | Backend  | helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected                                                                                                               |

## Documentation

### Database

The data is stored under `/server/data/` . Using the node library `fs` we read the file before parsing in JSON.

### Endpoint

| Endpoint         | Description           |
| ---------------- | --------------------- |
| `GET /questions` | returns all questions |

## Errors

- You may need to reload the page after the first page if nothing appears
