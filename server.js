'use strict'

var restify = require('restify');
var server = restify.createServer();

server.use(restify.queryParser());
server.use(restify.bodyParser());
server.use(restify.CORS());

var v1PoPerPeriode=require('./src/routers/v1/reports/purchase-order-per-periode');
v1PoPerPeriode.applyRoutes(server); 

server.listen(process.env.PORT, process.env.IP);
console.log(`server created at ${process.env.IP}:${process.env.PORT}`)