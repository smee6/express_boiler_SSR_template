const { Schema, model } = require("mongoose");
/** 
* @swagger
*     components:
*         schemas:
*             Test:
*                 type: object
*                 required:
*                     - name
*                     - age
*                 properties:
*                     name:
*                         type: string
*                         description: 이름
*                     age:
*                         type: integer
*                         description: 나이
*/
const TestSchema = new Schema({
    name: {
        type: String,
        index: true,
        unique: true,
        required: true,
    },
    age: {
        type: Number,
        required: true
    }
}, { timestamps: true });

TestSchema.set("toObject", { virtuals: true });
TestSchema.set("toJSON", { virtuals: true });

const Test = model("test", TestSchema);
module.exports = { Test };
