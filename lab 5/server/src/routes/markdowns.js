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

// get all files
router.get('/markdowns', (req, res) => {
    MarkdownFile.find({}, 'title description lastUpdate', (err, data) => {
        if (err) {
            res.sendStatus(500)
        } else {
            res.send({ markdowns: data })
        }
    }).sort({lastUpdate: -1})
});

module.exports = router