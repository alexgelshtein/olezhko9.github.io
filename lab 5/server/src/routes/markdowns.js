const express = require('express')
const MarkdownFile = require('../models/md-model')

const router = express.Router()

// create file
router.post('/markdowns', (req, res) => {
    const mdFile = new MarkdownFile({
        title: req.body.title,
        description: req.body.description,
        content: req.body.content,
        lastUpdate: new Date()
    })
    mdFile.save((err, data) => {
        if (err) {
            console.log(err);
        } else {
            res.send({
                success: true,
            })
        }
    })
})

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