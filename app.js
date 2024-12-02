/* ========== Node.js Core Module Imports ========== */
const express = require('express');
const path = require('path');

/* ========== Custom Module Imports ========== */
const rootDirectoryPath = require('./util/root-directory-path');

const app = express();

const PORT = 3000;

// Set the ejs as template engine
app.set('view engine', 'ejs');
// specify the folder where ejs template are stored
app.set('views', 'views');

// Serve static assets from 'public'
app.use(express.static(path.join(rootDirectoryPath, 'public')));

app.listen(PORT);
