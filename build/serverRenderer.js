import React from "react";
import App from "../src/App";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";

import { ChunkExtractor } from "@loadable/server";

export default () => (req, res) => {

  const Application = () => (
    <StaticRouter location={`${req.url}`} context={{}}>
      <App isServer={true} />
    </StaticRouter>
  );

  // This is the stats file generated by webpack loadable plugin
  const statsFile = '../dist/loadable-stats.json';
  // We create an extractor from the statsFile
  const extractor = new ChunkExtractor({ statsFile });
  // Wrap your application using "collectChunks"
  const jsx = extractor.collectChunks(<Application />);
  // Render your application
  const html = renderToString(jsx);
  // You can now collect your script tags
  const scriptTags = extractor.getScriptTags(); // or extractor.getScriptElements();
  // You can also collect your "preload/prefetch" links
  const linkTags = extractor.getLinkTags(); // or extractor.getLinkElements();
  // And you can even collect your style tags (if you use "mini-css-extract-plugin")
  const styleTags = extractor.getStyleTags(); // or extractor.getStyleElements();

  res.send(`
    <html>
      <head>
        ${styleTags}
        ${linkTags}
      </head>
      <body>
        <div id="root">${html}</div>
        ${scriptTags}
      </body>
    </html>
  `);
};
