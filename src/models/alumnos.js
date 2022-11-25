const mongoose = require("mongoose");

const alumnosSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        unique: true
    },
    nlista: {
        type: String,
        required: true,
        unique: true
    }
});

module.exports = mongoose.model('alumnos', alumnosSchema);