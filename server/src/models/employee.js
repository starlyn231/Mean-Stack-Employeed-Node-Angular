const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const employeeSchema = new Schema({
    name: { type: String, trim: true, required: true },
    position: { type: String, trim: true, required: true },
    Departament: { type: String, trim: true, required: true },
    salary: { type: Number, trim: true, required: true },
}, {
    versionKey: false,
    timestamps: true,
});

module.exports = mongoose.model("Employee", employeeSchema);