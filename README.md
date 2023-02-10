## Orange Technical test - Graphics cards catalog app

This repository contains a technical test for Orange that consists of create an graphics cards catalog. The app has been developed in Angular and NodeJS, frontend and backend respectively.

### Requirements

- **Node and NPM**
- **Docker and Docker Compose**

### Usage

- Copy JSON data file from **/server/data/graphicCard.json** to MongoDB Docker container with <code>docker cp ./graphicCard.json orange-mongo-1:/graphicCard.json </code>

- Go into MongoDB Docker container with command <code>docker exec -it -u 0 orange-mongo-1 bash</code> and import collection into database with <code>mongoimport --db orange --collection graphiccards --file graphicCard.json --jsonArray</code>

- Run <code>npm install</code> in **/client** directory and then run <code>ng serve</code>

- Run <code>npm install</code> in **/server** directory

- In root directory, execute <code>docker compose up</code> to deploy NodeJS server.
