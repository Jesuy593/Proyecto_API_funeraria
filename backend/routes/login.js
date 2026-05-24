const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
    const {correo, password } = req.body;

    if (correo && password) {
        res.json({
            mensaje: "Login exitoso",
            token: "abc123token"
        });
    }else {
        res.status(400).json({
            mensaje: "Datos incompletos"
        });
    }
});

module.exports = router;