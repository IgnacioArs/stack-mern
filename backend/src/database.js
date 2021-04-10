const mongoose = require('mongoose');
dbb =process.env.DB_MONGO;
LamismaConexion = 'mongodb+srv://benjamin:1234@cluster0.upgdq.mongodb.net/test';
const URI = process.env.DB_MONGO ? dbb : LamismaConexion;


mongoose.connect(URI,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useFindAndModify:true,
    useUnifiedTopology:true
})

const conexion = mongoose.connection;

conexion.once('open',()=>{
    console.log('La base de datos esta conectada');
})