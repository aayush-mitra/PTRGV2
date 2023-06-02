const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String, 
        required: true,
    },
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    profilePic: {
        type: String,
        default: "",
    },
    userType: {
        type: String,
        enum: ["tutor", "student"],
        required: true,
    },
    emailVerified: {
        type: Boolean,
        required: true,
        default: false,
    },
    sessions: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Session'
        }
    ]
}, {
    timestamps: true,
});

UserSchema.methods.generateHash = function (password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
}

UserSchema.methods.validPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
}

module.exports = mongoose.model("User", UserSchema)