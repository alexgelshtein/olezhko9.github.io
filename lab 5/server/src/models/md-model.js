const mongoose = require('mongoose')
const Schema = mongoose.Schema

const MarkdownSchema = new Schema({
    title: {
        type: String,
        unique: true
    },
    description: {
        type: String
    },
    content: {
        type: String
    },
    lastUpdate: {
        type: Date
    }
})

const MarkdownModel = mongoose.model('markdowns', MarkdownSchema)
module.exports = MarkdownModel