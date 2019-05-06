const express = require('express');
const path = require('path');
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const pageRouter = require('./routes/page');

app.use('/page', pageRouter);

app.listen(3000, () => {
    console.log('3000 port listening.')
})