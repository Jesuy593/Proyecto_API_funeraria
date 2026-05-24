const express = require('express');
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

const usuariosRoutes = require("./routes/usuarios");
const loginRoutes = require("./routes/login");
const afiliadosRoutes = require("./routes/afiliados");
const pagosRoutes = require("./routes/pagos"); 

app.use("/api/usuarios", usuariosRoutes);
app.use("/api/login", loginRoutes);
app.use("/api/afiliados", afiliadosRoutes);
app.use("/api/pagos", pagosRoutes);

//Ruta principal
app.get('/', (req, res) => {
    res.send('Servidor funeraria funcionando');
});

//Ruta clientes

const PORT = process.env.PORT || 3001;

app.use('/api/clientes', require('./routes/clientes'));

app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
});


