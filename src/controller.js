const pool = require('../database/db');
const queries = require('./queries');

const getAllPets = (req, res) =>{
  pool.query(queries.getAllPets, (err, results) =>{
    if (err) throw err;
    res.status(200).json(results.rows)
  })
}

const getPetById = (req, res) =>{
  const id = parseInt(req.params.id)
  pool.query(queries.getAPet, [id], (err, results) =>{
    if (err) throw err;
    res.status(200).json(results.rows)
  })
}

const addPet = (req, res) => {
  const { name, age, kind } = req.body;

  pool.query(queries.addPet, [name, age, kind], (err, results) =>{
    if (err) throw err; 
    res.status(201).json({"message": "Pet added!"})
  })
}

const removePet = (req, res) =>{
  const id = parseInt(req.params.id)

  pool.query(queries.deletePet, [id], (err, results) => {
    if (err) throw err;
    res.status(200).json({"message": `Pet deleted at ${id}`})
  })
}

const updatePet = async (req, res) =>{
  const id = parseInt(req.params.id)
  let entityToUpdate = await pool.query(queries.getPetById, [id])
  
  const name = req.body.name || entityToUpdate.rows[0].name;
  const age = req.body.age || entityToUpdate.rows[0].age;
  const kind = req.body.kind || entityToUpdate.rows[0].kind;

  pool.query(queries.updatePet, [id, name, age, kind], (err, results) => {
    if (err) throw err;
    res.status(200).json({"message":"Pet updated"})
  })
}

module.exports = {
  getAllPets,
  getPetById,
  addPet,
  removePet,
  updatePet
}