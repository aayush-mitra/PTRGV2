const mongoose = require("mongoose");

const SessionSchema = new mongoose.Schema({
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    subject: String,
    name: String,
    date: Date,
    time: String,
    link: String,
    format: {
        type: String,
        enum: ["one-on-one", "group"]
    },
    description: String,
    participants: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }
    ],

}, {
    timestamps: true
})

module.exports = mongoose.model("Session", SessionSchema);