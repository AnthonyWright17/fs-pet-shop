const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();

//body parse
app.use(express.json());


app.get('/pets', (req, res) => 
fs.readFile('pets.json', 'utf-8', (err, data) =>{
  if(err) throw err
  let pets = JSON.parse(data)
  res.json(pets)
}));

app.get('/pets/:id', (req, res) => {
  fs.readFile('pets.json', 'utf-8', (err, data) =>{
    if(err) throw err;
    let pets = JSON.parse(data);
    let petExsist = pets[parseInt(req.params.id)]
    if (petExsist){
      return res.status(200).json(pets[parseInt(req.params.id)]);
    } else {
      return res.status(404).send(`No pet exsist at index ${req.params.id} would you like to create a new pet?`)
    }
  })
})

// app.post('/pets', (req, res) =>{
//   const newPet = {}
//     newPet['age'] = parseInt(req.body.age)
//     newPet['kind'] = req.body.kind
//     newPet['name'] = req.body.name
//     fs.readFileSync('pets.json', 'utf-8', (err, data)=>{
//       if(err) throw err;
//       let pets = JSON.parse(data);
//       pets.push(JSON.stringify(newPet));
//       fs.writeFile('pets.json', pets, (err) =>{
//         if (err) throw err;
//       })
//       res.status(201).send('New pet added!')
//   })
// })

app.post('/pets', (req, res) =>{
  // let jsonFile = fs.readFileSync('pets.json')
  // let dataArr = JSON.parse(jsonFile)
  // console.log(jsonFile)
  // console.log(dataArr);
  res.send('Hello')
})

const PORT = 5000;

app.listen(PORT, ()=> console.log(`Server is running on ${PORT}`))

module.exports = app;