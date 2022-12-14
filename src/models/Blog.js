const mongooose = require('mongoose');

const blogSchema = new mongooose.Schema({
    // Your code goes here
    topic: { type: String },
    description: { type: String },
    posted_at: { type: Date },//date format: 2022-12-13
    posted_by: { type: String }
}, { versionKey: false }) // to hide version : __v


blogSchema.index({ topic: 'text' }); // to created $index

const Blog = mongooose.model('blogs', blogSchema);

module.exports = Blog;