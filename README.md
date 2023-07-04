## Languages

- JS
- Git

## Library, Framework and DB

- Express
- Mongoose
- dotenv
- MongoDB

## JS Modules

<br>

- fs : Used for manipulation of the filesystem
- Path: Used to handle easily directories
- HTTP: Used to handle HTTP requests and create a server
- Express: Used to create

## Content studed

- Main modules used in nodeJs
- The lib. Express
- CRUD for manipulation of the user account (API/DB)
- Creation of database using MongoDB

## Creation of a database: step by step

1. Open the url https://www.mongodb.com/atlas/database and create a account
2. Create a database using the Ip address: 0.0.0.0/0
3. After that click on connect and the option Drivers (probably the first option)
4. Install mongoose: npm install mongoose
5. Create a folder structure src/database into it add the module mongoose to connect to the mongoDB
6. Create a .env file to add environment variables, example: password to connect to the database
7. Add dotenv lib: npm install dotenv and configure it in index.js
8. Export the function created to connect to the database
