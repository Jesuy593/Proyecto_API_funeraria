const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.json({
        mensaje: "Lista de afiiados"
    });
});

router.post("/", (req, res) => {
    const { nombre, telefono, plan } = req.body;

    res.json({
        mensaje: "Afiliado registrado",
        afiliado: {
            nombre, 
            telefono,
            plan
        }
    });
});

module.exports = router;