const express = require("express");
const { registrar, confirmarEmail } = require("../controllers/usuarioController");

const route = express.Router();

route.post("/nuevo-usuario", registrar);
route.post("/confirmar/:id", confirmarEmail);

module.exports = { route };
