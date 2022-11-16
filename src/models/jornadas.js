const mongoose = require("mongoose");

const journyesSchema = mongoose.Schema({
    nombre:{
        type: String,
        require: true
    },
});

module.exports = mongoose.model ('journey', journyesSchema);