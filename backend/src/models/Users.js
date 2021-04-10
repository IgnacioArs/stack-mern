const {Schema,model} =require('mongoose');

const userSchema = new Schema({
     nombre:{
         type:String,
         requerid:true,
         trim:true,
         unique:true
     }

},{
     timestamps:true
});


module.exports = model('User',userSchema);