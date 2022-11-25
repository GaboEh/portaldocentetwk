const mongoose = require("mongoose");

const asignaturaSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        unique: true
    },
});

module.exports = mongoose.model('asignatura', asignaturaSchema);