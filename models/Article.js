var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var ArticleSchema = new Schema({
    article: {
        type: String,
        trim: true,
        required: "Title Required"
    },
    date: {
        type: Date,
        required: "Date Required"
    },
    url: {
        type: String,
        required: true,
        required: "URL Required",
        unique: true
    }
});

// Create the Model
var Article = mongoose.model("Article", ArticleSchema);

// Export model
module.exports = Article; 