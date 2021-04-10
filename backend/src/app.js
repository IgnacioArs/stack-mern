const express = require('express');

const cors = require('cors');

const app = express();

//settings
//mas que nada se refiere a que el puerto puede ser 3000 o 4000
app.set('port',process.env.PORT || 4000);


//middlewares
//cors conectar dos servidores para que puedan intercambiar datos
app.use(cors());
//tipos de datos que va enviar es de JSON
app.use(express.json());

//routes
//url de la aplicacion de react
app.use('/api/users', require('./routes/users'));
app.use('/api/notes',require('./routes/notes'));



module.exports = app;