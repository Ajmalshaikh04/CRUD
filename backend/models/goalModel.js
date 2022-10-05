const mongoose = require("mongoose")

const goalSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        text: {
            type: String,
            require: [true, "Please add a Text Value"],
        }
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model("Goal", goalSchema)