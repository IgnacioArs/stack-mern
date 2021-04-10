const notesController = {};

const { request } = require('express');

//aqui exportamos el modelo de notas 
const Note = require('../models/Notes');

const { param } = require('../routes/notes');

//de esta forma realizamos y controlamos las peticiones

//obetener los datos o obtener notas 
notesController.getNotes = async (req,res)=> {
 const notas = await  Note.find();
    res.json(notas);
    console.log(res.json({message:'Get - Notes Rutas - Notas buscadas!'}));
}

//crear una nota
notesController.postNotes =  async (req,res) =>{
    //los siguientes parametros los resivos desde el cliente
   const {titulo, contenido, autor , fecha} = req.body;
      const notaCreada =  new Note({
            titulo:titulo,
            contenido:contenido,
            autor:autor,
            fecha:fecha
        });

        await notaCreada.save();
        console.log(notaCreada)
    res.json({message:'Post - Notes Rutas - dato guardado!'});
    console.log('Nota Creada!');
} 

notesController.unaNota = async (req, res) => {
    const note = await Note.findById(req.params.id);
    console.log(note);
    res.json({note});
    res.json({message:'Nota encontrada'});
}


notesController.deleteNotes = async (req,res) => {
      const borrar = await Note.findByIdAndDelete(req.params.id);
      console.log(borrar);
    res.json({message:'DELETE - Notes Rutas',borrar});
    res.json({message:'Nota eliminada'});
    console.log('Nota eliminada!');

}

notesController.updateNote = async (req, res) => {
    const {titulo, contenido, autor, fecha } = req.body;
    await Note.findOneAndUpdate({_id:req.params.id}, {
        titulo,
        contenido,
        autor,
        fecha
    });
    res.json({message:'Nota actualizada'});
    console.log('datos actualizados!');
}





module.exports = notesController;