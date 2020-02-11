/* eslint-env node */
/*
 * @license
 * Your First PWA Codelab (https://g.co/codelabs/pwa)
 * Copyright 2019 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License
 */
'use strict';

const express = require('express');
const fetch = require('node-fetch');
var fs = require('fs');
var https = require('https')
const redirectToHTTPS = require('express-http-to-https').redirectToHTTPS;

// CODELAB: Change this to add a delay (ms) before the server responds.
const FORECAST_DELAY = 5000;

// CODELAB: If running locally, set your Dark Sky API key here
const API_KEY = 'f3b38ad09a92735b430ec5b50575aa5c';
const BASE_URL = `https://api.darksky.net/forecast`;

// Fake forecast data used if we can't reach the Dark Sky API

/**
 * Generates a fake forecast in case the weather API is not available.
 *
 * @param {String} location GPS location to use.
 * @return {Object} forecast object.
 */
function generateFakeForecast(location) {
  location = location || '40.7720232,-73.9732319';
  const commaAt = location.indexOf(',');

  // Create a new copy of the forecast
  const result = Object.assign({}, fakeForecast);
  result.latitude = parseFloat(location.substr(0, commaAt));
  result.longitude = parseFloat(location.substr(commaAt + 1));
  return result;
}


/**
 * Gets the weather forecast from the Dark Sky API for the given location.
 *
 * @param {Request} req request object from Express.
 * @param {Response} resp response object from Express.
 */
function getForecast(req, resp) {
  const location = req.params.location || '40.7720232,-73.9732319';
  const url = `${BASE_URL}/${API_KEY}/${location}`;
  fetch(url).then((resp) => {
    if (resp.status !== 200) {
      throw new Error(resp.statusText);
    }
    return resp.json();
  }).then((data) => {
    setTimeout(() => {
      resp.json(data);
    }, FORECAST_DELAY);
  }).catch((err) => {
    console.error('Dark Sky API Error:', err.message);
    resp.json(generateFakeForecast(location));
  });
}

/**
 * Starts the Express server.
 *
 * @return {ExpressServer} instance of the Express server.
 */
function startServer() {
  const app = express();
  const port = 3020;

  // Redirect HTTP to HTTPS,
   app.use(redirectToHTTPS([/localhost:(\d{4})/], [], 301));
  // https.createServer({
  //   key: fs.readFileSync('server.key'),
  //   cert: fs.readFileSync('server.cert')
  // }, app)
  // .listen(port, function () {
  //   console.log('Example app listening on port '+port+'! Go to https://localhost:3000/')
  // })

  // Logging for each request
  app.use((req, res, next) => {
   var url = 'https://10.40.217.88:9440'+req.url;
   if(req.method === 'POST') {
    r = request.post({uri: url, json: req.body});
 } else {
    r = request(url);
 }
try{
  req.pipe(r).pipe(res);
}catch(error) {
console.log(JSON.stringify(error));
}
 
  });

  // Handle requests for static files
  app.use(express.static('public'));

  // Start the server
  return   https.createServer({
    key: fs.readFileSync('server.key'),
    cert: fs.readFileSync('server.cert')
  }, app).listen(port, () => {
    // eslint-disable-next-line no-console
    console.log('Local DevServer Started on port 8000...');
  });
}

startServer();
