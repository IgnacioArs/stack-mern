const {Schema,model, now} =require('mongoose');

const noteSchema =new Schema({
      titulo: String,
      contenido: {
          type:String,
          requerid:true
      },
      autor:String,
      fecha:{
          type:Date,
          default: Date.now
      }
},{
      timestamps:true
});

module.exports =model('Note',noteSchema);