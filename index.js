// write a express server, which will handle api request and respond back with json object, it will use body parser as well as cors

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(cors());

app.post('/', (req, res) => {
    res.json({message: 'Hello World!'});
    });

app.listen(port, () => {
    console.log('Server is running on port 3001');
    });
