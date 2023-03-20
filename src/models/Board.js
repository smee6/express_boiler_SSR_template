const { Schema, model } = require("mongoose");

const boardSchema = new Schema({
    number: {
        type: Number,
        index: true,
        unique: true,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true
    },
    view: {
        type: Number,
        default: 0
    },
    like: {
        type: Number,
        default: 0
    },
    writer: {
        type: Schema.Types.ObjectId,
        ref: "user",
        required: true,
    },
}, { timestamps: true });

boardSchema.set("toObject", { virtuals: true });
boardSchema.set("toJSON", { virtuals: true });

const Board = model("board", boardSchema);
module.exports = { Board };
