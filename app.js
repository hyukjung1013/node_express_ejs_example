const express = require('express');
const app = express();

const pageRouter = require('./routes/page');

app.use('/page', pageRouter);

app.listen(3000, () => {
    console.log('3000 port listening.')
})