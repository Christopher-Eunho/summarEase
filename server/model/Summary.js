import mongoose from "mongoose";

const SummarySchema = new mongoose.Schema({
    url: {
        type: String,
        required: true
    },
    title: {
        type: String,
        // default: ""
    },
    text: {
        type: String,
        default: ""
    },
    keywords: {
        type: [],
        default: []
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const summary = mongoose.model('todo', SummarySchema);

export default summary;