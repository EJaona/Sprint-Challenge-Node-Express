const express = require("express");
const server = express();
const actionRouter = require("./actionRouter");
const projectRouter = require("./projectRouter");

server.use(express.json());
server.use("/action", actionRouter);
server.use("/project", projectRouter);

module.exports = server;
