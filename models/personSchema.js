const mongoose = require('mongoose')

const personSchema = new mongoose.Schema({

   
    fname:{
           type:String,
           required:true
    },
   
    lname:{
     type:String,
     required:true
     },

       email:{
        type:String,
        required:true,
        unique:true
        
         },
         password:{
          type:String,
          required:true
   },
})


const Person = mongoose.model('formdata' ,personSchema);
module.exports = Person;