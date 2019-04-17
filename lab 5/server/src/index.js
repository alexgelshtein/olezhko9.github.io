const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const config = require('./config/config');
const mongoose = require('mongoose')

const app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());
app.use(require('./routes/markdowns'))

mongoose.Promise = global.Promise
mongoose.connect(config.dbURL + config.dbName, config.dbOptions)

mongoose.connection
    .once('open', () => {
        console.log(`Mongoose - successful connection`)
        app.listen(process.env.PORT || config.port, () => console.log(`Server started on port ${config.port}`));
    })
    .on('error', error => console.warn(error))