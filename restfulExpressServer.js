const express = require('express');
const path = require('path');
const fs = require('fs');
const petRoutes = require('./src/routes')

const app = express();

//body parse
app.use(express.json());

app.use('/pets', petRoutes)

//Get All Pets
// app.get('/pets', (req, res) => 
// fs.readFile('pets.json', 'utf-8', (err, data) =>{
//   if(err) throw err
//   let pets = JSON.parse(data)
//   res.json(pets)
// }));

// //Get Pet By Id
// app.get('/pets/:id', (req, res) => {
//   fs.readFile('pets.json', 'utf-8', (err, data) =>{
//     if(err) throw err;
//     let pets = JSON.parse(data);
//     let petExsist = pets[parseInt(req.params.id)]
//     if (petExsist){
//       return res.status(200).json(pets[parseInt(req.params.id)]);
//     } else {
//       return res.status(404).send(`No pet exsist at index ${req.params.id} would you like to create a new pet?`)
//     }
//   })
// })

// //Add a Pet
// app.post('/pets', (req, res) =>{
//   let jsonFile = fs.readFileSync('pets.json')
//   let dataArr = JSON.parse(jsonFile)
//   const newPet = {}
//     newPet['age'] = parseInt(req.body.age)
//     newPet['kind'] = req.body.kind
//     newPet['name'] = req.body.name
//   dataArr.push(newPet);
//   fs.writeFileSync('pets.json', JSON.stringify(dataArr))
//   res.json(newPet);
// })

// //Delete A Pet
// app.delete('/pets/:id', (req, res) =>{
//   let id = parseInt(req.params.id)
//   let data = fs.readFileSync('pets.json')
//   console.log(data[id].value)
//   if(!data[id]){
//     res.status(400).json({"message": `No pet exists with the id of ${id}`})
//   } else {
//     const removedEle = data.filter(data[id])
//     console.log(removedEle)
//     fs.writeFileSync(JSON.stringify(removedEle))
//     res.status(200).json(removedEle)
//   }

// })
// app.patch('/pets/:id', (req, res) =>{
//   data.filter(data[id])
// })


const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=> console.log(`Server is running on ${PORT}`))

module.exports = app;