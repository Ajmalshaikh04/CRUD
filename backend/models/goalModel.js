const mongoose = require("mongoose")

const goalSchema = new mongoose.Schema({
    text: {
        type: String,
        require: [true, "Please add a Text Value"],
    }
}, {
    timestamps: true
})

module.exports = mongoose.model("Goal", goalSchema)