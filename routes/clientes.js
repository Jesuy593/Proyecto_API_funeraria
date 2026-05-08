const express = require('express');

const router = express.Router();

// Obtener clientes
router.get('/', (req, res) => {
   
    res.json({
        mensaje: 'Lista de clientes'
    });
});

// Registrar cliente
router.post('/', (req, res) => {

    const datos = req.body;
    
    res.json({
        mensaje: 'Cliente registrado',
        datos: datos
    });
});

module.exports = router;