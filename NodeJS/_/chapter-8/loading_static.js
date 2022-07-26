//Loading Templates

const express = require('express');
const app = express();
const path = require('path');
const templatePath = path.join(__dirname,'templates')

app.use(express.static(templatePath));

app.listen(8000);