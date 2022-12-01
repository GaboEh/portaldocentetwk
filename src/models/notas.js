const mongoose = require("mongoose");

const notaSchema = mongoose.Schema({
    nota: {
        type: String,
        required: true,
        unique: true
    },
});

notaSchema.plugin(require('mongoose-autopopulate'));
module.exports = mongoose.model('notas', notaSchema);