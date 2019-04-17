const express = require('express')
const MarkdownFile = require('../models/md-model')

const router = express.Router()

router.get('/markdowns', (req, res) => {
    const response = {
        markdowns: [{
            title: "Hello World!",
            description: "Hi there! How are you?",
            lastUpdate: new Date()
        }]
    };
    res.send(response)
});

module.exports = router