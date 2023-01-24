const express = require('express');
const app = express();

const path = require('path');
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(PORT, () => {
    console.log(`Server Listening on PORT ${PORT}`);
});