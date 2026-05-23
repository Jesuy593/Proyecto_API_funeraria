const express = require('express');

const router = express.Router();

// GET
router.get('/', (req, res) => {
   
    res.json({
        mensaje: 'Lista de clientes'
    });
});

// POST
router.post('/', (req, res) => {
      
    res.json({
        mensaje: 'Cliente registrado',
        datos: req.body
    });
});

// PUT
router.put('/:id', (req, res) => {

    res.json({
        mensaje: 'Cliente actualizado'
    });
});

// DELETE
router.delete('/:id', (req, res) => {
    
    res.json({
        mensaje: 'Cliente eliminado'
    });
});

module.exports = router;