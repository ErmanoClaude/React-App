import 'babel-polyfill';
import express from 'express';
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router'
import bodyParser from 'body-parser'
import webConfig from './webConfig.json'

import App from './src/app';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static('build/public'))// this makes it publically avaliable

app.get('*',(req,res)=>{
    const context = {}
    const content = ReactDOMServer.renderToString(
        <StaticRouter location = {req.url} context={context}>
            <App />
        </StaticRouter>
    )
    const html =`
        <html>
            <head>
            <link href="${webConfig.siteURL}/assets/css/styles.min.css" rel="stylesheet" type="text/css" />
            <script src="https://kit.fontawesome.com/f675cf1456.js" crossorigin="anonymous"></script>
            </head>
            <body id='bg-img'>
                <div id='root'>
                    ${ content }
                </div>
                <script src="${webConfig.siteURL}/client_bundle.js"></script>
            </body>
        </html>
    `;
    res.send(html)
})

app.listen(PORT, ()=>{
    console.log(`This app is running on PORT ${PORT}`);
})




