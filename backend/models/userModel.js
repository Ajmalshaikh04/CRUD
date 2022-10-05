const mongoose = require("mongoose")

const userSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Name is Required"]
        },
        email: {
            type: String,
            required: [true, "Email is Required"],
        },
        password: {
            type: String,
            required: [true, "Please Enter a Password"]
        },

    }, {
    timestamps: true
}
)

module.exports = mongoose.model("User", userSchema)