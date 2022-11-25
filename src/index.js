const express = require('express');
const mongoose = require("mongoose");
require("dotenv").config();
const userRoutes = require("./routes/usuarios");
const jorneyRoutes = require("./routes/jornadas");
const subjectRoutes = require("./routes/ramos");
const authRoutes = require("./routes/authRoutes");
const asignaturaRoutes = require("./routes/asignaturas");
const alumnosRoutes = require("./routes/alumnos");
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;
app.use(cors());

//mongobd
mongoose
mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log("Conected"))
    .catch((error) => console.error(error));

//middleware
app.use(express.json());
app.use('/api', userRoutes);
app.use('/api', jorneyRoutes);
app.use('/api', subjectRoutes);
app.use('/api', authRoutes);
app.use('/api', asignaturaRoutes);
app.use('/api', alumnosRoutes);

//rutas
app.get("/", (req, res) => {
    res.send("Bienvenido a la API");
});

app.listen(port, () => console.log('server running on port', port));