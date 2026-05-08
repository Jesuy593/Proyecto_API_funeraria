const express = require('express');

const app = express();

app.use(express.json());

//Ruta principal
app.get('/', (req, res) => {
    res.send('API funeraria funciando');
});

//Ruta clientes

app.use('/api/clientes', require('./routes/clientes'));

app.listen(3000, () => {
    console.log('Servidor corriendo en puerto 3000');
});


