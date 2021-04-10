//de esta forma este archivo sera escuchado
//desde el archivo app.js
//app.use('/api/users', require('./routes/users'));
const {Router} =require('express');
const router =Router();

//aqui llamamos o requerimos la clase userController
const { getUser, postUsers, deleteUser, updateUser, selectOneUser } = require('../controllers/users.controller');

//aqui enviamos la respuesta para que el archivo
//no se vea vacio
//obetenemos todos los datos o los usuarios
router.route('/').get(getUser);

//ahora agregamos un usuario
router.route('/').post(postUsers);

//ahora eliminamos un usuario
router.route('/:id').delete(deleteUser);


//y ahora actualizaremos un dato de la base de datos
router.route('/:id').put(updateUser);


//este  route o ruta no ayudara a obtener 1 usuario
router.route('/:id').get(selectOneUser);


module.exports =router;