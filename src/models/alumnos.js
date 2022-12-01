const mongoose = require("mongoose");


const alumnosSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        unique: true
    },
    nlista: {
        type:String,
        required: true,
        unique: true
    },
    asignaturas:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'asignaturas',
            autopopulate: true,
        },
    ]
});

alumnosSchema.plugin(require('mongoose-autopopulate'));

module.exports = mongoose.model('Alumno', alumnosSchema);

  
