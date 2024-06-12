const { users } = require("../schema/usuarioSchema");
const { enviarEmail } = require("../utils/enviarEmail");

const registrar = async (req, res) => {
  try {
    const data = req.body;
    console.log(data);
    const usuarioNuevo = await new users(data);
  
    enviarEmail(
      usuarioNuevo.email,
      "Confirmacion de email",
      "Confirmacion de email",
      usuarioNuevo.username,
      usuarioNuevo._id
    );
  
    await usuarioNuevo.save();
  
    res.status(200).json({
      usuarioNuevo,
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al registrar usuario" });
  }
};

const confirmarEmail = async (req, res) => {
  try {
    const { id } = req.params;
    const usuario = await users.findById(id);
    if (!usuario) {
      return res.status(400).json({
        msg: "Token no válido",
      });
    }
    usuario.isConfirmed = true;
    await usuario.save();
    res.status(200).json({
      msg: "Usuario confirmado",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al confirmar email" });
  }
};

module.exports = { registrar, confirmarEmail };
