const express = require('express');
const webpack = require('webpack');
const webConfig = require('./webpack.config');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotServerMiddleware = require('webpack-hot-server-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const app = express();
const PORT = process.env.PORT || 9000;
const compiler = webpack(webConfig)

app.use(webpackDevMiddleware(compiler, {
  serverSideRender: true,
  writeToDisk: true
}));

app.use(webpackHotMiddleware(compiler.compilers.find(compiler => compiler.name === 'client')));
app.use(webpackHotServerMiddleware(compiler));

// TODO: Seup production server
// TODO: Add redux store nnd async loading

app.listen(PORT, () => {
  console.log(`> server is listening on port ${PORT}`)
})