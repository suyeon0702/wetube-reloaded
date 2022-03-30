import "./db";
import express from "express";

const express = require('express');
const path = require('path');
const PORT = 4000;
const app = express();

const http = require('http').createServer(app);
http.listen(PORT, function () {
    console.log('listening on 4000')
});

const handleListening = () => console.log("Server listening on port http://localhost:${PORT} 🚀");

app.listen(PORT, handleListening);