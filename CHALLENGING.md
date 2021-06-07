# Tasks - CHALLENGING MODE 😈

## Task 1 - Getting ready

1. Initialise npm into your project
2. Install the express.js npm package
3. Create a file for your server (`server.js`)

## Task 2 - Setting up your server

Create basic server in your `server.js` file

## Task 3 - Designing your API Routes

Your server will have to respond to requests asking for a variety of information about the solar system

Take a moment to think about the structure of the URL you would like the requests to use

Use the following questions to help you decide how to design your API

> Remember: Your API will be reading from 2 datasets, planets and satellites

- Do the 2 datasets have anything in common?

- Will you use routes in the request URLs?

## Tasks 4 & 5

Use this information for constructing the requests for Tasks 4 & 5

For all **valid** requests, the route handler should:

- return a status code of `200` and a text or JSON response, for example:

##### text response
> "The satellite with the largest radius is Elfo, with a size of 9394 km"

##### json response
> { "id": 1, "name": "Elfo", ... }

##### json response as array
> [{ "id": 1, "name": "Elfo", ... }, ... ]

For all requests where **no data** is found, the route handler should return a status code of `404`

For all **invalid** requests, the route handler should return a status code of `500`

## Task 4 - Creating route handlers for the satellites dataset

Create one or multiple route handlers which returns data on the following criteria:

- returns all details (as JSON) of a satellite based on the name **name**
- returns the satellite with the largest radius **radius**
- returns the satellite with the smallest radius **radius**
- returns the satellite with the highest **density**
- returns the satellite with the lowest **density**

# Task 5 - Creating route handlers for the planets dataset

Create one or multiple route handlers which returns data on the following criteria

   - returns all details (as JSON) of a planet based on the name **name**
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
