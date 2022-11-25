const express = require ("express");
const asignaturaSchema = require  ("../models/asignaturas");

const router = express.Router();

//Crear jornada
router.post("/asignaturas", (req, res) =>{
    const asignatura = asignaturaSchema(req.body);
    asignatura
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({}));
});

//obtener jornada
router.get("/asignaturas", (req, res) => {
    asignaturaSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//editar jornada
router.put("/asignaturas/:id", (req, res) => {
    const { id } = req.params;
    const { nombre } = req.body;
    asignaturaSchema
        .updateOne({ _id: id },{ $set: { nombre } })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//eliminar usuarios
router.delete("/asignaturas/:id", (req, res) => {
    const { id } = req.params;
    asignaturaSchema
        .remove({ _id: id })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});


module.exports = router;