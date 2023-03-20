const { Schema, model } = require("mongoose");
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new Schema({
    uuid: {
        type: String,
        index: true,
        unique: true,
        required: true,
    },
    id: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
}, { timestamps: true });

userSchema.set("toObject", { virtuals: true });
userSchema.set("toJSON", { virtuals: true });

userSchema.plugin(passportLocalMongoose, {
    usernameField: "id",
    usernameUnique: true,
});

const User = model("user", userSchema);
module.exports = { User };
