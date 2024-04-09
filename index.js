const express = require('express')
const db = require('./dbConnection/dbConnection')
// const Person = require('./models/personSchema')
const routes = require('./routes/personRoute')
const cors = require('cors'); 
require('dotenv').config();
const app = express()
const PORT = process.env.PORT || 3000


app.use(express.json())

// Apply CORS middleware with appropriate options
app.use(cors()); 

// app.get('/' ,async (req,res)=>{
//  try{
//   const response = await Person.find()
//   console.log('data fetched');
//   res.status(200).json(response)
//  }catch(err){
//   console.log(err);
//    res.status(500).json({ error: "Internal Server Error" });
//  }
      
       
// })


// app.post('/login' ,async (req,res)=>{
// try{
//      data = req.body   //req body contain the data 

//     const newPerson = new Person(data); // create new instance of person 

//     const response = await newPerson.save()

//  // console.log('These is post request');
//  res.status(200).json(data)
// }catch(err){
//     console.log(err);
//     res.status(500).json({ error: "Internal Server Error" })
// }
  
// })

// app.put('/login/:id' ,async(req,res)=>{
 
//  try{
//        const personId = req.params.id;
//        const updatedData = req.body
//        const response = await Person.findByIdAndUpdate(personId ,updatedData ,{
//          new:true,
//          runValidators:true, 
//        })

//        if(!response){
//         return res.status(400).json({error:"person not found"})
//        }
//        res.status(200).json(response);
//  }catch(err){

//         console.log(err);
//        res.status(500).json({ error: "Internal Server Error" })
//  }

// })

// app.delete('/login/:id' ,async(req,res)=>{
// try{
//          const personId = req.params.id;

//          const response = await Person.findByIdAndDelete(personId)

//          if(!response){
//                return res.status(400).json({message:'Person not found'})
//          }

//           console.log("data is deleted")
//              res.status(200).json({message:"Person data deleted successfully"})
          
// }catch(err){

//  console.log(err);
//  res.status(500).json({ error: "Internal Server Error" })
// }
        

   
// })

app.use('/api',routes)



app.listen(PORT ,()=>{
   console.log(`server started at PORT_NO ${PORT}`);
})