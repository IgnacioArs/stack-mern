const {Router} =require('express');
const router =Router();

//traemos o pedimos o requerimos el archivo notes controller
const {getNotes, postNotes, deleteNotes, putNotes, getUno, unaNota, updateNote} = require('../controllers/notes.controller');

//aqui se ejecutan las peticiones creadas pero con sus respectivas rutas 
//ya que esta forma seran ejecutadas desde postman get post delete etc
router.route('/').get(getNotes);

router.route('/').post(postNotes);


router.route('/:id').get(unaNota);


router.route('/:id').delete(deleteNotes);


router.route('/:id').put(updateNote);



module.exports =router;