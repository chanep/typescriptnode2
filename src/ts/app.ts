import express = require('express');
var bodyParser = require('body-parser');
import ClientController = require('./controllers/client');

var clientController = new ClientController();

// Setup express
var app = express();
app.use(bodyParser.json());

var clientRouter = express.Router();
clientRouter.get("/", clientController.list);

app.use("/api/clients", clientRouter);

// Listen for HTTP traffic
app.listen(process.env.PORT || 3000);
