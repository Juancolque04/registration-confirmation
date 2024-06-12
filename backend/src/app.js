const express = require("express");
const cors = require("cors"); // Importar el middleware cors
const { connectDB } = require("./dbConnect");
const { route } = require("./routes/routes");

const app = express();

// Middleware para permitir solicitudes CORS desde cualquier origen
app.use(cors());

// Middleware para analizar el cuerpo de las solicitudes como JSON
app.use(express.json());

// Conectar a la base de datos
connectDB();

// Rutas de la API
app.use("/api", route);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
