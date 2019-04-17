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
            res.sendStatus(200)
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

// get file by id
router.get('/markdowns/:id', (req, res) => {
    MarkdownFile.findById(req.params.id, 'title description content', (err, mdFile) => {
        if (err) {
            res.sendStatus(500)
        } else {
            res.send(mdFile)
        }
    })
})

// update file by id
router.put('/markdowns/:id', (req, res) => {
    MarkdownFile.findById(req.params.id, 'title description content', (err, mdFile) => {
        if (err) {
            console.log(err)
        } else {
            if (req.body.title) {
                mdFile.title = req.body.title
            }
            if (req.body.description) {
                mdFile.description = req.body.description
            }
            if (req.body.content) {
                mdFile.content = req.body.content
            }
            mdFile.save(err => {
                if (err) {
                    res.sendStatus(500)
                } else {
                    res.sendStatus(200)
                }
            })
        }
    })
})

// delete by id
router.delete('/markdowns/:id', (req, res) => {
    MarkdownFile.remove({ _id: req.params.id }, err => {
        if (err) {
            res.sendStatus(500)
        } else {
            res.sendStatus(200)
        }
    })
})

module.exports = router