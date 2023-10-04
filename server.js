// File Name: server.js
// Student Name: Carlo Toledo
// Student ID: 301296658
// Date: October 3, 2023


process.env.NODE_ENV = process.env.NODE_ENV || 'development';
const express = require('./config/express');
const app = express();


app.listen(3000);
module.exports = app;
console.log('Server running at http://localhost:3000/');


// Code Below is for replit only. Should be commented out if running locally.
// const keepAlive = require('./server');
// const Monitor = require('ping-monitor');

// keepAlive();
// const monitor = new Monitor({
// 	website: '',
// 	title: 'NAME',
// 	interval: 2
// });

// monitor.on('up', (res) => console.log(`${res.website} its on.`));
// monitor.on('down', (res) => console.log(`${res.website} it has died - ${res.statusMessage}`));
// monitor.on('stop', (website) => console.log(`${website} has stopped.`));
// monitor.on('error', (error) => console.log(error));