const express = require('express');
const { getALL, createUser, getOne, deleteUser, updateUser } = require('../controllers/userController');
const router = express.Router();
// const Person = require('../models/personSchema')



router.post("/create" ,createUser)
router.get("/getall"  ,getALL)
router.get("/getone/:id" ,getOne)
router.put("/update/:id" ,updateUser)
router.delete("/deletuser/:id" ,deleteUser)








// router.get('/' ,async (req,res)=>{
//  try{
//   const response = await Person.find()
//   console.log('data fetched');
//   res.status(200).json(response)
//  }catch(err){
//   console.log(err);
//    res.status(500).json({ error: "Internal Server Error" });
//  }
      
       
// })


// router.get('/:id' ,async (req,res)=>{
//       try{
      
//       const userID = req.params.id
//        const userExist = await Person.findById(userID)
//         if(!userExist){
//             return res.status(400).json({msg:"user not avialabel by these id"})
//         }
//        console.log('data fetched');
//        res.status(200).json(userExist)
//       }catch(err){
//        console.log(err);
//         res.status(500).json({ error: "Internal Server Error" });
//       }
           
            
//      })



// router.post('/' ,async (req,res)=>{
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

// router.put('/:id' ,async(req,res)=>{
 
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

// router.delete('/:id' ,async(req,res)=>{
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

module.exports = router;