# Tasks

## Task 1 - Getting ready

1. Initialise npm into your project
   `npm init -y`
2. Install the express.js npm package
   `npm i express`
3. Create a file for your server (`server.js`)

## Task 2 - Setting up your server

Use the snippet **starter code** to initialise your `server.js` file

## Task 3 - Setting up your routes

Your server will have to respond to requests asking for a variety of information about the solar system

> Remember: Your API will be reading from 2 datesets, planets and satellites

Because you are using 2 different datasets, you can expect 2 different types of requests

We will route requests for satellites to the `satellites` route and requests for planets to the `planets` route

For example:

##### Requests to the `satellite` route
> `http://localhost:3001/satellite/`

##### Requests to the `planets` route
> `http://localhost:3001/planets/`

1. Create a new file for each type of route, using the **Router with one GET request** snippet

2. Import both route applications (the files you just created) into your `server.js` file

3. Assign the route applications to their respective routes using the **Using a Route application** snippet

## Task 4 - Creating route handlers for the satellites dataset

For each of the following steps, make sure your route handler:

- Returns a status code of `200` if a result is found
- Returns a status code of `404` if no result is found
- Returns a status code of `500` if the request was malformed (the request was not in the expected format)
- Use either the **GET request route with parameters** or the **GET request route with query parameters** snippet

### 4.1

Write a route handler which responds to either of the following requests:

> `http://localhost:3001/satellite/{name}`

OR

> `http://localhost:3001/satellite?name={name}`

Where `{name}` should be replaced with the name the client is trying to query

This route handler should return all details of the satellite as a JSON response. For example:

> { "id": 1, "name": "Elfo", ... }

### 4.2

For the following, the route handlers should:

- return a text response, where there is a single response, for example:

    > "The satellite with the largest radius is Elfo, with a size of 9394 km"

- return a JSON array of objects, where there are multiple responses, for example:

    > [ { "id": 1, "name": "Elfo" ... } ... ]

Create route handlers based on the following criteria:

1. returns the satellite with the largest radius **radius**

    > `http://localhost:3001/satellite/size/largest/`
    
    OR
    
    > `http://localhost:3001/satellite/size?largest`

2. returns the satellite with the smallest radius **radius**

   > `http://localhost:3001/satellite/size/smallest/`

   OR

   > `http://localhost:3001/satellite/size?smallest`

3. returns the satellite with the highest **density**

    > `http://localhost:3001/satellite/density/highest/`
    
    OR
    
    > `http://localhost:3001/satellite/density?highest`

4. returns the satellite with the lowest **density**

   > `http://localhost:3001/satellite/density/lowest/`

   OR

   > `http://localhost:3001/satellite/density?lowest`

# Task 5 - Creating route handlers for the planets dataset

For each of the following steps, make sure your route handler:

- Returns a status code of `200` if a result is found
- Returns a status code of `404` if no result is found
- Returns a status code of `500` if the request was malformed (the request was not in the expected format)
- Use either the **GET request route with parameters** or the **GET request route with query parameters** snippet

### 5.1

Write a route handler which responds to either of the following requests:

> `http://localhost:3001/planet/{name}`

OR

> `http://localhost:3001/planet?name={name}`

Where `{name}` should be replaced with the name the client is trying to query

This route handler should return all details of the satellite as a JSON response. For example:

> { "id": 1, "name": "Earth", ... }

### 5.2

For the following, the route handlers should:

- return a text response, where there is a single response, for example:

    > "The planet with the most moons is Earth, with a 450 moons"

- return a JSON array of objects, where there are multiple responses, for example:

    > [ { "id": 1, "name": "Earth" ... } ... ]

Create route handlers based on the following criteria:

1. returns the largest planet **diameter**

   > `http://localhost:3001/planet/size/largest/`

   OR

   > `http://localhost:3001/planet/size?largest`

2. returns the smallest planet **smallest**

   > `http://localhost:3001/planet/size/smallest/`

   OR

   > `http://localhost:3001/planet/size?smallest`

3. returns planets with no moons **numberOfMoons**

   > `http://localhost:3001/planet/moons/none`

   OR

   > `http://localhost:3001/planet/moons?none`

4. returns the planet with the most moons **numberOfMoons**

   > `http://localhost:3001/planet/moons/most`

   OR

   > `http://localhost:3001/planet/moons?most`

5. returns the planet closest to the sun **distanceFromSun**

   > `http://localhost:3001/planet/sun/closest`

   OR

   > `http://localhost:3001/planet/sun?closest`
   
6. returns the planet furthest from the sun **distanceFromSun**

   > `http://localhost:3001/planet/sun/furthest`

   OR

   > `http://localhost:3001/planet/sun?furthest`

7. returns the hottest planet **meanTemperature**

   > `http://localhost:3001/planet/temperature/hottest`

   OR

   > `http://localhost:3001/planet/temperature?hottest`

8. returns the coldest planet **meanTemperature**

   > `http://localhost:3001/planet/temperature/coldest`

   OR

   > `http://localhost:3001/planet/temperature?coldest`

9. returns the planet with the longest day **lengthOfDay**

   > `http://localhost:3001/planet/day/longest`

   OR

   > `http://localhost:3001/planet/day?longest`

10. returns the planet with the shortest day **lengthOfDay**

    > `http://localhost:3001/planet/day/shortest`
    
    OR
    
    > `http://localhost:3001/planet/day?shortest`

11. return the planet with the longest orbital period **orbitalPeriod**

    > `http://localhost:3001/planet/orbit/longest`

    OR

    > `http://localhost:3001/planet/orbit?longest`

12. return the planet with the shortest orbital period **orbitalPeriod**

    > `http://localhost:3001/planet/orbit/shortest`

    OR

    > `http://localhost:3001/planet/orbit?shortest`