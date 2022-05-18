const data = require('./pets.json');
const fs = require('fs');


//All Pets
const getAllPets = (req, res) =>{ 
  res.status(200).json(data)
};

//A Pet
const getAPet = (req, res) => {
  const id = parseInt(req.params.id)
  if(!data[id]){
    res.status(404).json({"message": `No pet exists at index ${id}`})
  } else {
    res.status(200).json(data[id])
  }
}
//Add Pet
const addPet = (req, res) => {
  const { age, kind, name } = req.body
  // console.log(data, req.body)
  data.push(req.body)
  console.log(data)
  fs.writeFileSync('./pets.json', JSON.stringify(data))
  res.status(201).json(data)
}

//Remove A Pet
const removePetById = (req, res) => {
  const id = parseInt(req.params.id)
  if(!data[id]) res.status(404).json({"message": `A pet does not exist at index ${id}`})
  const filtered = data.filter(function(value, index, arr){
    return index !== id
  })
  fs.writeFileSync('./pets.json', JSON.stringify(filtered))
  res.status(200).json(filtered)
}

//Edit Pet
const editPet = (req, res) =>{
  const id = parseInt(req.params.id)
  const {age, kind, name} = req.body
  for (key in Object.keys(data[id])){
    if (Object.keys(data[id])[key] == Object.keys(req.body)){
      data[id][Object.keys(data[id])[key]] = req.body
      fs.writeFileSync('./pets.json', JSON.stringify(data))
    }
  }
  res.status(200).json({"message": 'Pet updated!'})
}

module.exports ={
  getAllPets,
  getAPet,
  addPet,
  removePetById,
  editPet
}