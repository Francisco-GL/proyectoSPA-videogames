const express = require("express"); // Importar express
const router = express.Router();
const envio = require('../correo')

router.post('/contacto', envio.enviarCorreo)

module.exports = router;