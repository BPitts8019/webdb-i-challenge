const express = require('express');

const db = require('./data/dbConfig.js');

const server = express();

server.use(express.json());

//Custom Middleware
const validateAccountReq = (req, res, next) => {
   if (!req.body.name || typeof req.body.name !== "string") {
      return res.status(400).json({message: "Please provide a name for the account"});
   }

   if (!req.body.budget || typeof req.body.budget !== "number") {
      return res.status(400).json({message: "Please provide a budget for the account"});
   }

   //request is valid; setup the payload
   req.payload = {
      name: req.body.name,
      budget: req.body.budget
   }
   next();
};


server.get("/", (req, res, next) => {
   res.json({message: "Web DB-01 API Challenge"});
});

//accounts endpoints
//Create
server.post("/api/accounts", validateAccountReq, async (req, res, next) => {
   try {
      //request payload is located in req.payload
      const [id] = await db("accounts").insert(req.payload);
      const account = await db("accounts").where("id", id).first();
      res.status(201).json(account);
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

//404 not found
server.use((req, res) => {
   res.status(404).json({
      message: "Route was not found"
   });
});

//Catch 500 errors
server.use((error, req, res, next) => {
   console.log(error.toString());
   res.status(500).json({
      data: error.toString()
   });
});

module.exports = server;