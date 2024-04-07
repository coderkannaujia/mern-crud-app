
const Person = require('../models/personSchema')

// create the new user and save to database new_user
  const createUser = async(req,res)=>{
  try{
   data = req.body   //req body contain the data 

  const newPerson = new Person(data); // create new instance of person 

  const response = await newPerson.save()

// console.log('These is post request');
     res.status(200).json({message:"User added succesfully"})
}catch(err){
  console.log(err);
  res.status(500).json({ error: "Internal Server Error" })
}

 }


 // getall data from people
  const getALL = async(req,res)=>{

  try{
   const response = await Person.find()
   console.log('data fetched');
   res.status(200).json(response)
  }catch(err){
   console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
 }


 //get by id single data 
 const getOne = async(req,res)=>{
 try{
      
  const userID = req.params.id
   const userExist = await Person.findById(userID)
    if(!userExist){
        return res.status(400).json({msg:"user not avialabel by these id"})
    }
   console.log('data fetched');
   res.status(200).json(userExist)
  }catch(err){
   console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }

}


// update the data by Id
 const updateUser = async(req,res)=>{
 try{
  const personId = req.params.id;
  const updatedData = req.body
  const response = await Person.findByIdAndUpdate(personId ,updatedData ,{
    new:true,
    runValidators:true, 
  })

  if(!response){
   return res.status(400).json({error:"person not found"})
  }
  res.status(200).json({msg:"User updated succesfully"});
}catch(err){

   console.log(err);
  res.status(500).json({ error: "Internal Server Error" })
}
 
}


//delete the user by Id
 const deleteUser = async(req,res)=>{
 try{
  const personId = req.params.id;

  const response = await Person.findByIdAndDelete(personId)

  if(!response){
        return res.status(400).json({message:'Person not found'})
  }

   console.log("data is deleted")
      res.status(200).json({message:"Person data deleted successfully"})
   
}catch(err){

console.log(err);
res.status(500).json({ error: "Internal Server Error" })
}
 
 
}

module.exports = {getALL, createUser, getOne, deleteUser, updateUser}
