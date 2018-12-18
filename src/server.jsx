import express from 'express';
import path from "path";
import React from "react";
import { renderToString } from "react-dom/server";
import fetch from 'node-fetch';

import Layout from "./components/Layout";

const baseUrl = 'https://northeurope.api.cognitive.microsoft.com/face/v1.0/'
const largeFaceListId = 10;

const listItems = [];

fetch(`${baseUrl}largefacelists/${largeFaceListId}/persistedfaces?start=0&top=1000`, {
    method: 'GET',
    headers: {
      'Ocp-Apim-Subscription-Key': '91c9316d38044714b15eb630c1b6738a'
    }
})
.then( res => res.json() )
.then( json => {
  json.map( item => {
    const userData = JSON.parse(item.userData);
    //console.log(userData);
  });
});


const app = express();
app.use( express.static( path.resolve( __dirname, "../dist" ) ) );

app.get('/*', (req, res) => {
  const jsx = ( <Layout /> );
  const reactDom = renderToString( jsx );

  res.writeHead( 200, { "Content-Type": "text/html" } );
  res.end( htmlTemplate(reactDom) );
});

const port = 2048;

app.listen(port, () => {
  console.log(`🚀  Listening on port ${port}`)
});

function htmlTemplate(reactDom) {
    return `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="utf-8">
            <title>React SSR</title>
        </head>

        <body>
            <div id="app">${reactDom}</div>
            <script src="./app.bundle.js"></script>
        </body>
        </html>
    `;
}
