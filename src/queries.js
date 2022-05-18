const getAllPets = "SELECT * FROM pets";
const getPetById = "SELECT * FROM pets WHERE pet_id = $1";
const addPet = "INSERT INTO pets (name, age, kind) VALUES ($1, $2, $3)";
const deletePet = "DELETE FROM pets WHERE pet_id =$1";
const updatePet = "UPDATE pets SET name = $2, age = $3, kind = $4 WHERE pet_id = $1";

module.exports ={
  getAllPets,
  getPetById,
  addPet,
  deletePet,
  updatePet
}