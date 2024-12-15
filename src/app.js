const express = require('express');
const morgan = require('morgan');
const proxyRoutes = require('./routes/proxy-routes');
const { logRequests } = require('./utils/logger');

const app = express();
app.use(express.json()); 
app.use(morgan('combined', { stream: logRequests })); 

app.use('/api', proxyRoutes);

module.exports = app;
