const userControlller = {};

const Userss =require('../models/Users');


const { param } = require('../routes/users');

//obtener todos los usuarios
userControlller.getUser = async (req,res) => {
     const usuarios = await Userss.find();
     res.json(usuarios);
     console.log(res.json({message:'Get - Usuarios Rutas - Notas buscadas!'}));

}

//agregar usuarios
userControlller.postUsers = async (req,res) =>{
    const {nombre,fecha} = req.body;
    const UsuarioCreado = new Userss({
        nombre:nombre,
        fecha,fecha
    });
    await UsuarioCreado.save();
    console.log(UsuarioCreado)
res.json({message:'Post - Usuarios Rutas - dato guardado!'});
}



//eliminar un un usuario
userControlller.deleteUser = async (req,res) => {
    const usuarioEliminado = await Userss.findByIdAndDelete(req.params.id);
    console.log(usuarioEliminado);
    res.json({message:'Delete - Usuarios Rutas - datos eliminado!'});
}



//ahora actualizaremos un dato
userControlller.updateUser = async (req, res) => {
    const {nombre,fecha} = req.body;
    await Userss.findOneAndUpdate({_id:req.params.id}, {
       nombre,
       fecha,
    });
    res.json({message:'Usurio actualizada'});
    console.log('datos actualizados!');
}



//buscar un usuario
userControlller.selectOneUser = async (req, res) => {
    const UsuarioEncontrado = await Userss.findById(req.params.id);
    res.json(UsuarioEncontrado);
    console.log('Un usuario se ha encontrado!');
}



module.exports = userControlller;