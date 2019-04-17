const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const config = require('./config/config');

const app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

app.listen(process.env.PORT || config.port, () => console.log(`Server started on port ${config.port}`));

app.get('/markdowns', (req, res) => {
    const response = {
        markdowns: [{
            title: "Hello World!",
            description: "Hi there! How are you?",
            lastUpdate: new Date()
        }]
    };
    res.send(response)
});