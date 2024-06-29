const path = require("path");
const express = require("express");

// run the websocket server and the http server
const app = require('express-ws')(express());
const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './index.html'));
});

app.get('/health', (req, res) => res.status(200).send(process.uptime()));

const server = app.listen(port)

process.on('SIGTERM', () => {
    console.warn('SIGTERM signal received: closing HTTP server')
    server.close(() => {
        console.warn('HTTP server closed')
    })
})
