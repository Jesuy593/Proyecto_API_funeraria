const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.json({
        mensaje: "Lista de Pagos"
    });
});

router.post("/", (req, res) => {
    const { cliente, valor, metodo } = req.body;

    res.json({
        mensaje: "Pago registrado",
        pago: {
            cliente,
            valor, 
            metodo
        }
    });
});

module.exports = router;
