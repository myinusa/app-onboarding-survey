# Survey App

> A simple React Survey App, containing questions relating to calculating your carbon footprint 

**This application is prioritised for smaller smart phones for example; iPhone 5/5SE** 


## Getting Started

`git clone` 

`cd <folder_name>`

``npm install`

`npm start` - [Concurrently](https://www.npmjs.com/package/concurrently) has been setup so both the server and client will run *concurrently*

## Project Structure

| Name         | Description              |
| ------------ | ------------------------ |
| src/App.js   | First / Instruction Page |
| src/index.js |                          |
|              |                          |

## Dependencies

| List of Dependencies | Description |
| -------------------- | ----------- |
|                      |             |
|                      |             |
|                      |             |

## Documentation

### Database

The data is stored under `/server/data/` . Using the node library `fs` we read the file before parsing in JSON.

### Endpoint

| Endpoint         | Description           |
| ---------------- | --------------------- |
| `GET /questions` | returns all questions |



##  TODO

- Need to look at why concurrently doesn't allow backend to make calls
- Going from start page to questions doesn't make fetch call (Have to refresh the page for the data to come in)
- Redux implementation