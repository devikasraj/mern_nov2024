'use strict';

const { server_port, cors_origin, mongo_url } = require('./config');

global.server_port = server_port;
global.cors_origin = cors_origin;
global.mongo_url = mongo_url;

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

global.express = express;
global.cors = cors;
global.mongoose = mongoose;

const app = express();
global.app = app;

const AppModel = require('./model/AppModel');
global.AppModel = AppModel;

const AppController = require('./controller/AppController');
const FlightController = require('./controller/FlightController'); // Updated for FlightController

global.appController = new AppController();
global.flightController = new FlightController(); // Updated for FlightController

const appModel = new AppModel();
global.appModel = appModel;

appController.connectToMongo();

const FlightModel = appModel.FlightModel(); // Updated for FlightModel
global.FlightModel = FlightModel;

const AppRoutes = require('./routes/AppRoutes');
global.AppRoutes = AppRoutes;

// middlewares
app.use(cors(cors_origin));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes for API end points
const appRoutes = new AppRoutes();
appRoutes.root(appController);
appRoutes.flights(flightController); // Updated for flights

// Runs the server
app.listen(server_port, appController.serverInit);
