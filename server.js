const express = require('express');

const db = require('./data/dbConfig.js');

const server = express();

server.use(express.json());

server.get("/", (req, res, next) => {
   res.json({message: "Web DB-01 API Challenge"});
});

//accounts endpoints
//Create
server.post("/api/accounts", async (req, res, next) => {
   try {

   } catch (error) {
      next(error);
   }
});

//Read
server.get("/api/accounts", async (req, res, next) => {
   try {

   } catch (error) {
      next(error);
   }
});

//Update
server.put("/api/accounts", async (req, res, next) => {
   try {

   } catch (error) {
      next(error);
   }
});

//Delete
server.delete("/api/accounts", async (req, res, next) => {
   try {

   } catch (error) {
      next(error);
   }
});

//Catch 500 errors
server.use((error, req, res, next) => {
   console.log(error.toString());
   res.status(500).json({
      data: error.toString()
   });
});
module.exports = server;