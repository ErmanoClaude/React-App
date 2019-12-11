import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import App from "../app";
import webConfig from "../../webConfig.json";
export default (req, context) => {
  const content = renderToString(
    <StaticRouter location={req.url} context={context}>
      <App />
    </StaticRouter>
  );
  return ` <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <link href=${webConfig.siteURL}/assets/css/styles.min.css rel="stylesheet" type="text/css"/>
      <script src="https://kit.fontawesome.com/f675cf1456.js" crossorigin="anonymous"></script>
      <link rel="shortcut icon" type="image/png" href="/assets/graphics/favicon.png">
    </head>
    <body id='bg-img'>
        <div id='root'>
            ${content}
        </div>
        <script src="${webConfig.siteURL}/client_bundle.js"></script>
    </body>
</html>`;
};
