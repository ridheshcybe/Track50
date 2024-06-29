const path = require("path");
const express = require("express");

// run the websocket server and the http server
const app = require('express-ws')(express());

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './index.html'));
})