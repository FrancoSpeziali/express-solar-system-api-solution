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

> Remember: Your API will be reading from 2 datasets, planets and satellites

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

### 4.1 Find a satellite by name

- Return a satellite by **name**
- Write a route handler which responds to either of the following requests:
    
    > `http://localhost:3001/satellite/find/{name}`
    OR
    > `http://localhost:3001/satellite/find?name={name}`

    (`{name}` is a **param** with the name the client is trying to query)

- Return all details of the satellite as a JSON response. For example:
    > { "id": 1, "name": "Elfo", ... }

### 4.2 Find the largest or smallest satellite

- Return a satellite by **radius**
- Write a route handler which responds to either of the following requests:

    > `http://localhost:3001/satellite/size/{pick}`
    OR
    > `http://localhost:3001/satellite/size?{pick}`

    (`{pick}` is a **param** with either the values `largest` or `smallest`)

- Return a text response, for example:
    > "The satellite with the largest radius is Elfo, with a size of 9394 km"

### 4.3 Find the densest or least dense satellite

- Return a satellite by **density**
- Write a route handler which responds to either of the following requests:

  > `http://localhost:3001/satellite/density/{pick}`
  OR
  > `http://localhost:3001/satellite/density?{pick}`

  (`{pick}` is a **param** with either the values `highest` or `lowest`)

- Return a text response

# Task 5 - Creating route handlers for the planets dataset

For each of the following steps, make sure your route handler:

- Returns a status code of `200` if a result is found
- Returns a status code of `404` if no result is found
- Returns a status code of `500` if the request was malformed (the request was not in the expected format)
- Use either the **GET request route with parameters** or the **GET request route with query parameters** snippet

### 5.1 Find a planet by name

- Return a planet by **name**
- Write a route handler which responds to either of the following requests:

  > `http://localhost:3001/planet/find/{name}`
  OR
  > `http://localhost:3001/planet/find?name={name}`

  (`{name}` is a **param** with the name the client is trying to query)

- Return all details of the planet as a JSON response. For example:
    > { "id": 1, "name": "Earth", ... }

### 5.2 Find the largest or smallest planet

- Return a planet by **radius**
- Write a route handler which responds to either of the following requests:

  > `http://localhost:3001/planet/size/{pick}`
  OR
  > `http://localhost:3001/planet/size?{pick}`

  (`{pick}` is a **param** with either the values `largest` or `smallest`)

- Return a text response, for example:
  > "The planet with the largest radius is Gandalf, with a size of 9394 km"

## 5.3 Find the planets with the most and least moons

- Return a planet by **numberOfMoons**
- Write a route handler which responds to either of the following requests:

  > `http://localhost:3001/planet/moons/{pick}`
  OR
  > `http://localhost:3001/planet/moons?{pick}`

  (`{pick}` is a **param** with either the values `most` or `none`)

- For the *most* moons, return a text response, for example:
  > "The planet with the most moons is Earth, with a 450 moons"

- For planets with no moons, return an array of names (strings), for example:
  > [ "Earth", "Pluto" ... ]

## 5.4 Find the planets closest to and furthest from the sun

- Return a planet by **distanceFromSun**
- Write a route handler which responds to either of the following requests:

  > `http://localhost:3001/planet/sun/{pick}`
  OR
  > `http://localhost:3001/planet/sun?{pick}`

  (`{pick}` is a **param** with either the values `closest` or `furthest`)

- Return a text response

## 5.5 Find the hottest and coldest planets

- Return a planet by **meanTemperature**
- Write a route handler which responds to either of the following requests:

  > `http://localhost:3001/planet/temperature/{pick}`
  OR
  > `http://localhost:3001/planet/temperature?{pick}`

  (`{pick}` is a **param** with either the values `hottest` or `coldest`)

- Return a text response

## 5.6 Find the planets with the longest and shortest day

- Return a planet by **lengthOfDay**
- Write a route handler which responds to either of the following requests:

  > `http://localhost:3001/planet/day/{pick}`
  OR
  > `http://localhost:3001/planet/day?{pick}`

  (`{pick}` is a **param** with either the values `longest` or `shortest`)

- Return a text response

## 5.7 Find the planets with the longest and shortest day

- Return a planet by the **orbitalPeriod**
- Write a route handler which responds to either of the following requests:

  > `http://localhost:3001/planet/orbit/{pick}`
  OR
  > `http://localhost:3001/planet/orbit?{pick}`

  (`{pick}` is a **param** with either the values `longest` or `shortest`)

- Return a text response