const express = require("express");
const router = express.Router();

//Ruta GET
router.get("/", (req, res) => {
    res.json({
        mensaje: "lista de usuarios"
    });
});

//Ruta POST
router.post("/", (req, res) => {
    const { nombre, correo, passsword } = req.body;

    res.json({
        mensaje: "Usuario registrado correctamente",
        usuario: {
            nombre,
            correo
        }
    });
});

module.exports = router;