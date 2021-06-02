# Designing a REST API for our Solar System

This project will have you building an API for accessing datasets about our solar system

There are 2 datasets:

- planets-dataset
- satellites-dataset

## What you will be doing

This project will allow you to practise using:

> Writing a REST API with Express.js

This project assumes you've already had experience with:

> Express.js middleware and routing

## Tasks

## Task 1 - Getting ready

1. Initialise npm into your project
   `npm init -y`
2. Install the express.js npm package
   `npm i express`
3. Create a file for your server (`server.js`)

## Task 2 - Setting up your server

Use the snippet **starter code** to initialise your `server.js` file

## Task 3 - Designing your API

Your server will have to respond to requests asking for a variety of information about the solar system

Take a moment to think about the structure of the URL you would like the requests to use

Use the following questions to help you decide how to design your API

> Remember: Your API will be reading from 2 datesets, planets and satellites

- Do the 2 datasets have anything in common?

- Is it possible to have a request choose between the datasets, or will you automatically switch between them, depending on the parameters given?

- Will you use routes in the request URLs?

## Task 4 - Creating an endpoint for getting the name of an object

Create an endpoint which takes one parameter `name`, which returns details about an object

The endpoint must:
- Search through both datasets
- Return all the details about an object, based on its name and a status code of `200`, if the object is found
- Return a status code of `404` if the object is not found

Use either the **GET request middleware with parameters** or the **GET request middleware with query parameters** snippet

## Task 5 - Creating endpoints for the satellites dataset

Create one or multiple endpoints which returns data on the following criteria

- returns the satellite with the largest radius **radius**
- returns the satellite with the highest **density**

For all valid requests, the middleware handler should:

- return a status code of `200` and a text response, for example:
> "The satellite with the largest radius is Elfo, with a size of 9394 km"

For all invalid requests, the middleware handler should return a status code of `500`

# Task 6 - Creating endpoints for the planets dataset

Create one or multiple endpoints which returns data on the following criteria

- return the largest planet **diameter**
- return the smallest planet **diameter**
- return planets with no moons **numberOfMoons**
- return the planet with the most moons **numberOfMoons**
- return the planet closest to the sun **distanceFromSun**
- return the planet furthest from sun **distanceFromSun**
- return the hottest planet **meanTemperature**
- return the coldest planet **meanTemperature**
- return the planet with the longest day **lengthOfDay**
- return the planet with the shortest day **lengthOfDay**
- return the planet with the longest orbital period **orbitalPeriod**
- return the planet with the shortest orbital period **orbitalPeriod**

For all valid requests, the middleware handler should:

- return a status code of `200` and a text response, for example:
> "The planet with the most moons is Earth, with a 450 moons"

For all invalid requests, the middleware handler should return a status code of `500`
